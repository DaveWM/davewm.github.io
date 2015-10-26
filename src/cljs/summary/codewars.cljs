(ns summary.codewars
  (:require [reagent.core :as r]
            [ajax.core :refer [GET POST]])
  (:require-macros [material-ui.macros :refer (export-material-ui-react-classes)]))

(export-material-ui-react-classes)

(defn open-in-new-tab [url]
  (.open js/window url))

(def codewars-loading (r/atom true))
(def codewars-user (r/atom {}))
(defn get-codewars-user [user]
  "Gets the codewars user info. Have to go through a proxy because their api doesn't support CORS"
  (GET (str "https://crossorigin.me/https://www.codewars.com/api/v1/users/" user)
       {:handler (fn [response] (do
                                  (reset! codewars-user response)
                                  (reset! codewars-loading false)))}))

(defn codewars-card-layout []
  [Card
   [CardHeader {:title "Codewars"
                :subtitle (str
                           (get-in @codewars-user ["codeChallenges" "totalCompleted"])
                           " Challenges Completed | Score "
                           (get-in @codewars-user ["ranks" "overall" "score"]))
                :avatar "dist/assets/codewars.png"}
    ]
   (if @codewars-loading
     [CircularProgress {:mode "indeterminate" :class "centred card-loading-icon"}]
     [List
      (let [languages (sort-by #(get-in % [1 "score"]) > (get-in @codewars-user ["ranks" "languages"]))]
        (map (fn [lang]
               (let [[name info] lang]
                 (identity
                  [ListItem {
                             :primaryText name
                             :secondaryText (str "Score " (get info "score"))
                             :leftIcon (r/as-element [FontIcon {:className (str "icon-" name)}])
                             }]
                  )))
             languages)
        )])
   [CardActions
    [FlatButton {:linkButton true :href "http://www.codewars.com/users/DaveWM" :label "View Account"}]
    ]
   ])

(def card
  (with-meta codewars-card-layout
    {:component-did-mount #(get-codewars-user "DaveWM")}))
