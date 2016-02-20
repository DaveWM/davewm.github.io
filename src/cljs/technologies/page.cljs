(ns technologies.page
  (:require [reagent.core :as r]
            [technologies.data :as data]))
(enable-console-print!)
(def visualisation-size 100)
(def iterations-to-perform 15)
(def centre-force-strength 2.5)
(def repulsive-force-strength 1)
(def type-colour-map {:language "green"
                      :FE "blue"
                      :BE "red"
                      :tool "yellow"
                      :DataStore "gray"
                      :Testing "purple"
                      :Misc "orange"
                      :Cloud "cyan"})
(def initial-clustering 0.5)

(defn square [x] (* x x))
(defn pow [x n] (apply * (repeat n x))) 
(defn sqrt [x] (.sqrt js/Math x))
(defn abs [x] (.abs js/Math x))
(defn square-keep-sign [x] (* (abs x) x))
(defn magnitude [vector]
  (sqrt (reduce #(+ %1 (square %2)) 0 vector)))
(defn normalise [vector]
  (let [size (magnitude vector)]
    (if (zero? size)
      vector
      (map #(/ % size) vector))))
(defn NaN? [x] (js/isNaN x))

(defn tech-circle [tech]
  [:g {:key (:name tech) :transform (str "translate(" (:x tech) "," (:y tech) ")")}
   [:circle {:r (:size tech) :cx (:size tech) :cy (:size tech) :fill ((:type tech) type-colour-map)}]
   ; hack because svgs are complete shit
   [:g {:dangerouslySetInnerHTML {:__html (str "<image x='0' y='0' width='" (* 2 (:size tech)) "' height='" (* 2 (:size tech)) "' xlink:href='" (:img tech) "' />")}}]
   ])

(defn calc-repulsive-force [elem data]
  (let [other-elems (remove #(= elem %) data)]
    (->>
     other-elems
     (map #(identity {:size (:size %)
                      :dist (map - [(:x elem) (:y elem)] [(:x %) (:y %)])}))
     (map #(map *
                (normalise (:dist %))
                (repeat (/ 1 (pow (magnitude (:dist %)) 2)))
                (repeat (pow (:size %) 3))))
     (map #(map * % (repeat repulsive-force-strength)))
     (map #(map (fn [x] (if (NaN? x) 1 x)) %))
     (apply (partial map +)))))

(defn calc-centre-force [elem]
  (->> [(:x elem) (:y elem)]
       (map - (repeat (/ visualisation-size 2)))
       (#(normalise %))
       (map (partial * centre-force-strength))))
  

(defn move-circles [iterations data]
  (if (zero? iterations)
    data
    (->> data
         (map (fn [tech]
                (let [repulsive-force (calc-repulsive-force tech data)
                      centre-force (calc-centre-force tech)]
                  (print repulsive-force centre-force)
                  (->> [(:x tech) (:y tech)]
                       (map + repulsive-force)
                       (map + centre-force)
                        ((fn [[x y]]
                          (assoc tech :x x :y y )))))))
         (recur (dec iterations)))
  ))

(defn setup-data [data]
  (let [circles-total-area (reduce + 0
                              (->> data
                                   (map :experience)))
        total-area (square (/ visualisation-size 2))
        scale-factor (* 0.5 (sqrt (/ total-area circles-total-area)))
        rand-pos #(+ (* 0.5 (- 1 initial-clustering) visualisation-size) (rand-int (* visualisation-size initial-clustering)))]
     (->> data
          (map #(assoc % :size (* (sqrt (:experience %)) scale-factor)))
          (map #(assoc % :x (rand-pos) :y (rand-pos)))
          (move-circles iterations-to-perform))))
            
(def vis-data (r/atom (setup-data data/data)))

(defn page []
  [:div.technologies
   [:svg {:viewBox (str "0,0," visualisation-size "," visualisation-size)}
    (map tech-circle @vis-data)
   ]
  ])
