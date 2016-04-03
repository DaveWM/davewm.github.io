;; Copyright © 2014, JUXT LTD.

(ns bidi.bidi
  (:require [clojure.walk :as walk :refer [postwalk]]
            [cemerick.url :as url :refer [url-encode url-decode]]
            [schema.core :as s]))

(defn uuid
  "Function for creating a UUID of the appropriate type for the platform.
Note that this function should _only_ be used in route patterns as, at least
in the case of ClojureScript, it does not validate that the input string is
actually a valid UUID (this is handled by the route matching logic)."
  [s]
                                     
         (cljs.core.UUID. s))

;; When forming paths, parameters are encoded into the URI according to
;; the parameter value type.

(defprotocol ParameterEncoding
  (encode-parameter [_]))

(extend-protocol ParameterEncoding
  ;; We don't URL encode strings, we leave the choice of whether to do so
  ;; to the caller.
              
         string
  (encode-parameter [s] s)

                    
                                

            
         number
  (encode-parameter [s] s)

                      
         cljs.core.UUID
  (encode-parameter [s] (str s))

  ;; We do URL encode keywords, however. Namespaced
  ;; keywords use a separated of %2F (a URL encoded forward slash).

                            
         cljs.core.Keyword
  (encode-parameter [k]
    (url-encode
     (str (namespace k)
          (when (namespace k) "/")
          (name k)))))

;; A PatternSegment is part of a segmented pattern, where the pattern is
;; given as a vector. Each segment can be of a different type, and each
;; segment can optionally be associated with a key, thereby contributing
;; a route parameter.

(defprotocol PatternSegment
  ;; segment-regex-group must return the regex pattern that will consume the
  ;; segment, when matching routes.
  (segment-regex-group [_])
  ;; param-key, if non nil, specifies the key in the parameter map which
  ;; holds the segment's value, returned from matching a route
  (param-key [_])
  ;; transform specifies a function that will be applied the value
  ;; extracted from the URI when matching routes.
  (transform-param [_])
  ;; unmatch-segment generates the part of the URI (a string) represented by
  ;; the segment, when forming URIs.
  (unmatch-segment [_ params])
  ;; matches? is used to check if the type or value of the parameter
  ;; satisfies the segment qualifier when forming a URI.
  (matches? [_ s]))

(extend-protocol PatternSegment
              
         string
  (segment-regex-group [this]
                                
           this)
  (param-key [_] nil)
  (transform-param [_] identity)
  (unmatch-segment [this _] this)

                               
         js/RegExp
  (segment-regex-group [this]
                         
           (aget this "source"))
  (param-key [_] nil)
  (transform-param [_] identity)
  (matches? [this s] (re-matches this (str s)))

                                      
         cljs.core.PersistentVector
  ;; A vector allows a keyword to be associated with a segment. The
  ;; qualifier for the segment comes first, then the keyword.
  ;; The qualifier is usually a regex
  (segment-regex-group [this] (segment-regex-group (first this)))
  (param-key [this]
    (let [k (second this)]
      (if (keyword? k)
        k
        (throw (ex-info (str "If a PatternSegment is represented by a vector, the second
                               element must be the keyword associated with the pattern: "
                             this)
                        {})))))
  (transform-param [this] (transform-param (first this)))
  (unmatch-segment [this params]
    (let [k (second this)]
      (if-not (keyword? k)
        (throw (ex-info (str "If a PatternSegment is represented by a vector, the second element
                               must be the key associated with the pattern: "
                             this)
                        {})))
      (if-let [v (get params k)]
        (if (matches? (first this) v)
          (encode-parameter v)
          (throw (ex-info (str "Parameter value of " v " (key " k ") "
                               "is not compatible with the route pattern " this)
                          {})))
        (throw (ex-info (str "No parameter found in params for key " k)
                        {})))))

                            
         cljs.core.Keyword
  ;; This is a very common form, so we're conservative as a defence against injection attacks.
  (segment-regex-group [_] "[A-Za-z0-9\\-\\_\\.]+")
  (param-key [this] this)
  (transform-param [_] identity)
  (unmatch-segment [this params]
    (if-let [v (this params)]
      (encode-parameter v)
      (throw (ex-info (str "Cannot form URI without a value given for "
                           this " parameter")
                      {}))))

                       
         function
  (segment-regex-group [this]
    (condp = this
     keyword "[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*(?:%2F[A-Za-z]+[A-Za-z0-9\\*\\+\\!\\-\\_\\?\\.]*)?"
     long "-?\\d{1,19}"
     uuid "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}"
     :otherwise (throw (ex-info (str "Unidentified function qualifier to pattern segment: " this) {}))))
  (transform-param [this]
    (condp = this
      ;; keyword is close, but must be applied to a decoded string, to work with namespaced keywords
      keyword (comp keyword url-decode)
      long                                  #(js/Number %)
      uuid uuid
      (throw (ex-info (str "Unrecognized function " this) {}))))
  (matches? [this s]
    (condp = this
      keyword (keyword? s)
      long                                                        
                  (not (js/isNaN s))
      uuid (instance?                             cljs.core.UUID s))))

;; A Route is a pair. The pair has two halves: a pattern on the left,
;; while the right contains the result if the pattern matches.

(defprotocol Pattern
  ;; Return truthy if the given pattern matches the given path. By
  ;; truthy, we mean a map containing (at least) the rest of the path to
  ;; match in a :remainder entry
  (match-pattern [_                           ^string path])
  (unmatch-pattern [_ m]))

(defprotocol Matched
  (resolve-handler [_ m])
  (unresolve-handler [_ m]))

(defn match-pair
  "A pair contains a pattern to match (either fully or partially) and an
  expression yielding a handler. The second parameter is a map
  containing state, including the remaining path."
  [[pattern matched] env]
  (when-let [match-result (match-pattern pattern env)]
    (resolve-handler matched (merge env match-result))))

(defn match-beginning
  "Match the beginning of the :remainder value in m. If matched, update
  the :remainder value in m with the path that remains after matching."
  [regex-pattern env]
  (when-let [path (last (re-matches (re-pattern (str regex-pattern "(.*)"))
                                    (:remainder env)))]
    (assoc env :remainder path)))

(defn succeed [handler m]
  (when (= (:remainder m) "")
    (merge (dissoc m :remainder) {:handler handler})))

(extend-protocol Pattern
              
         string
                                 
                                  
               
                                                     
                                                                                    
  ;; TODO: Optimize cljs version as above
         (match-pattern [this env]
           (match-beginning (str "(" (segment-regex-group this) ")") env))
  (unmatch-pattern [this _] this)

                               
         js/RegExp
  (match-pattern [this env]
    (match-beginning (str "(" (segment-regex-group this) ")") env))
  ;; We can't unmatch-pattern as you can't go from a regex to a
  ;; string (it's a many-to-one mapping)

        
  (unmatch-pattern [this m]
    (let [p (.pattern this)]
      (unmatch-pattern (clojure.string/replace p #"\\\\" "") m)))

               
         boolean
  (match-pattern [this env]
    (when this (assoc env :remainder "")))

                                      
         cljs.core.PersistentVector
  (match-pattern [this env]
    (when-let [groups (as-> this %
                        ;; Make regexes of each segment in the vector
                        (map segment-regex-group %)
                        ;; Form a regexes group from each
                        (map (fn [x] (str "(" x ")")) %)
                        (reduce str %)
                        ;; Add the 'remainder' group
                        (str % "(.*)")
                        (re-pattern %)
                        (re-matches % (:remainder env))
                        (next %))]
      (let [params (->> groups
                        butlast         ; except the 'remainder' group
                        ;; Transform parameter values if necessary
                        (map list) (map apply (map transform-param this))
                        ;; Pair up with the parameter keys
                        (map vector (map param-key this))
                        ;; Only where such keys are specified
                        (filter first)
                        ;; Merge all key/values into a map
                        (into {}))]
        (-> env
            (assoc-in [:remainder] (last groups))
            (update-in [:route-params] merge params)))))

  (unmatch-pattern [this m]
    (apply str (map #(unmatch-segment % (:params m)) this)))

                            
         cljs.core.Keyword
  (match-pattern [this env] (when (= this (:request-method env)) env))
  (unmatch-pattern [_ _] "")

                                   
         cljs.core.PersistentArrayMap
  (match-pattern [this env]
    (when (every? (fn [[k v]]
                    (cond
                      (or (fn? v) (set? v)) (v (get env k))
                      :otherwise (= v (get env k))))
                  (seq this))
      env))
  (unmatch-pattern [_ _] "")

         cljs.core.PersistentHashMap
        
  (match-pattern [this env]
    (when (every? (fn [[k v]]
                    (cond
                      (or (fn? v) (set? v)) (v (get env k))
                      :otherwise (= v (get env k))))
                  (seq this))
      env))
  (unmatch-pattern [_ _] ""))

(defn unmatch-pair [v m]
  (when-let [r (unresolve-handler (second v) m)]
    (str (unmatch-pattern (first v) m) r)))

(extend-protocol Matched
              
         string
  (unresolve-handler [_ _] nil)

                                      
         cljs.core.PersistentVector
  (resolve-handler [this m] (some #(match-pair % m) this))
  (unresolve-handler [this m] (some #(unmatch-pair % m) this))

                                   
         cljs.core.List
  (resolve-handler [this m] (some #(match-pair % m) this))
  (unresolve-handler [this m] (some #(unmatch-pair % m) this))

                                   
         cljs.core.PersistentArrayMap
  (resolve-handler [this m] (some #(match-pair % m) this))
  (unresolve-handler [this m] (some #(unmatch-pair % m) this))
         cljs.core.PersistentHashMap
         (resolve-handler [this m] (some #(match-pair % m) this))
         (unresolve-handler [this m] (some #(unmatch-pair % m) this))

                            
         cljs.core.LazySeq
  (resolve-handler [this m] (some #(match-pair % m) this))
  (unresolve-handler [this m] (some #(unmatch-pair % m) this))

                           
         cljs.core.Symbol
  (resolve-handler [this m] (succeed this m))
  (unresolve-handler [this m] (when (= this (:handler m)) ""))

                        
                                                   
                                                                    

                            
         cljs.core.Keyword
  (resolve-handler [this m] (succeed this m))
  (unresolve-handler [this m] (when (= this (:handler m)) ""))

                       
         function
  (resolve-handler [this m] (succeed this m))
  (unresolve-handler [this m] (when (= this (:handler m)) ""))

  nil
  (resolve-handler [this m] nil)
  (unresolve-handler [this m] nil))

(defn match-route
  "Given a route definition data structure and a path, return the
  handler, if any, that matches the path."
  [route path & {:as options}]
  (-> (match-pair route (merge options {:remainder path :route route}))
      (dissoc :route)))

(defn path-for
  "Given a route definition data structure, a handler and an option map, return a
  path that would route to the handler. The map must contain the values to any
  parameters required to create the path, and extra values are silently ignored."
  [route handler & {:as params}]
  (when (nil? handler)
    (throw (ex-info "Cannot form URI from a nil handler" {})))
  (unmatch-pair route {:handler handler :params params}))

;; --------------------------------------------------------------------------------
;; Route seqs
;; --------------------------------------------------------------------------------

(defrecord Route [handler path])

(defprotocol RouteSeq
  (gather [_ context] "Return a sequence of leaves"))

(defn route-seq
  ([[pattern matched] ctx]
   (gather matched (update-in ctx [:path] (fnil conj []) pattern)))
  ([route]
   (route-seq route {})))

(extend-protocol RouteSeq
                                      
         cljs.core.PersistentVector
  (gather [this context] (mapcat #(route-seq % context) this))

                                   
         cljs.core.List
  (gather [this context] (mapcat #(route-seq % context) this))

                                   
         cljs.core.PersistentArrayMap
  (gather [this context] (mapcat #(route-seq % context) this))
         cljs.core.PersistentHashMap
         (gather [this context] (mapcat #(route-seq % context) this))

                            
         cljs.core.LazySeq
  (gather [this context] (mapcat #(route-seq % context) this))

              
         default
  (gather [this context] [(map->Route (assoc context :handler this))])
  )

;; --------------------------------------------------------------------------------
;; Protocols
;; --------------------------------------------------------------------------------

;; RouteProvider - this protocol can be satisfied by records that provide
;; or generate bidi routes. The reason for providing this protocol in
;; bidi is to encourage compatibility between record implementations.
(defprotocol RouteProvider
  (routes [_] "Provide a bidi route structure. Returns a vector pair,
  the first element is the pattern, the second element is the matched
  route or routes."))

;; --------------------------------------------------------------------------------
;; Utility records
;; --------------------------------------------------------------------------------

;; Alternates can be used as a pattern. It is constructed with a vector
;; of possible matching candidates. If one of the candidates matches,
;; the route is matched. The first pattern in the vector is considered
;; the canonical pattern for the purposes of URI formation with
;; (path-for).
(defrecord Alternates [alts]
  Pattern
  (match-pattern [this m]
    (some #(match-pattern % m)
          ;; We try to match on the longest string first, so that the
          ;; empty string will be matched last, after all other cases
          (sort-by count > alts)))
  (unmatch-pattern [this m] (unmatch-pattern (first alts) m)))

(defn alts [& alts]
  (->Alternates alts))

;; If you have multiple routes which match the same handler, but need to
;; label them so that you can form the correct URI, wrap the handler in
;; a TaggedMatch.
(defrecord TaggedMatch [tag matched]
  Matched
  (resolve-handler [this m]
    (resolve-handler matched (assoc m :tag tag)))
  (unresolve-handler [this m]
    (if (keyword? (:handler m))
      (when (= tag (:handler m)) "")
      (unresolve-handler matched m))))

(defn tag [matched k]
  (->TaggedMatch k matched))

(defrecord IdentifiableHandler [id handler]
  Matched
  (resolve-handler [this m]
    (resolve-handler handler (assoc m :id id)))
  (unresolve-handler [this m]
    (when id
      (if (= id (:handler m)) ""
          (unresolve-handler handler m)))))

(defn ^:deprecated handler
  ([k handler]
   (->IdentifiableHandler k handler))
  ([handler]
   (->IdentifiableHandler nil handler)))

;; A context can be used to inject data into the map that is returned when
;; a route is matched.

(defrecord Context [context-fn routes]
  Matched
  (resolve-handler [_ m]
    (resolve-handler routes (context-fn m)))
  (unresolve-handler [_ m]
    (unresolve-handler routes m))
  RouteSeq
  (gather [this context]
    (gather routes (context-fn context))))

(defn context
  "Apply a context function to the match context of a matched
  route. This is useful for injecting data into the match context."
  [f routes]
  (->Context f routes))

;; --------------------------------------------------------------------------------
;; Deprecated functions
;; --------------------------------------------------------------------------------

;; Route compilation was only marginally effective and hard to
;; debug. When bidi matching takes in the order of 30 micro-seconds,
;; this is good enough in relation to the time taken to process the
;; overall request.

(defn ^:deprecated compile-route [route]
  route)

;;;;;;;;;;;; This file autogenerated from src/bidi/bidi.cljx
