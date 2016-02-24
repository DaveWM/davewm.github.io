(ns technologies.page
  (:require [reagent.core :as r]
            [technologies.data :as data]
            [technologies.chart :refer [chart]]
            [material-ui.core :refer [Avatar Card CardHeader CardText Checkbox FontIcon ListDivider  Paper Slider TextField]])
  (:require-macros [cljs.core :refer [this-as]]))
(enable-console-print!)

(def css-transition-group
  (r/adapt-react-class js/React.addons.CSSTransitionGroup))
(def chart-size 100)
(def types (->> data/data
                (map :type)
                (distinct)))
(def filters-atom (r/atom (-> {}
                              (assoc :types (->> types
                                                 (map #(identity {% true}))
                                                 (apply merge)
                                                 ))
                              (assoc :experience 0)
                              (assoc :name nil))))
(def type-data {:language {:colour "#1f77b4" :name "Language"}
                :FE {:colour "#aec7e8" :name "Front End"}
                :BE {:colour "#ff7f0e" :name "Back End"}
                :tool {:colour "#ffbb78" :name "Tool"}
                :DataStore {:colour "#2ca02c" :name "Data Store"}
                :Testing {:colour "#98df8a" :name "Testing Tool"}
                :Cloud {:colour "#ff9896" :name "Cloud Platform"}})

(defn filter-data [filters data]
  (print filters)
  (->> data
       (filter #((:type %) (:types filters)))
       (filter #(apply > (map :experience [% filters])))
       (remove #(some->> (:name filters)
                         (.toLowerCase)
                         (.indexOf (.toLowerCase (:name %)))
                         (> 0)))))

(defn type-checkbox [type]
  [Checkbox {:key type
             :label type
             :defaultChecked (get-in @filters-atom [:types type])
             :style {:max-width 300 :display "inline-block"}
             :onCheck (fn [event] (swap! filters-atom #(assoc-in % [:types type] (-> event
                                                                                     (.-target)
                                                                                     (.-checked)))))}])

(defn page []
  [:div.row.middle-xs
   [css-transition-group {:transition-name "card"
                          :transition-appear true
                          :class "col-xs-12 card-container"}
    [:div {:class "col-xs-12"}
     [Card
      [CardHeader {:title "Filters"
                   :avatar (r/as-element [Avatar {:icon (r/as-element [FontIcon {:className "material-icons"} "filter_list"])}])
                   :actAsExpander true
                   :showExpandableButton true}]
      [CardText {:expandable true}
       [:p "Types"]
       (map type-checkbox types)
       [ListDivider {:style {:margin-top 20
                             :margin-bottom 20}}]
       [:p "Experience"]
       [Slider {:defaultValue (:experience @filters-atom)
                :min 0
                :max (apply max (map :experience data/data))
                :onChange (fn [event value] (print value) (swap! filters-atom #(assoc % :experience value)))}]
       [ListDivider {:style {:margin-top 20
                             :margin-bottom 20}}]
       [TextField {:floatingLabelText "Name"
                   :defaultValue (:name @filters-atom)
                   :onChange (fn [event] (swap! filters-atom #(assoc % :name (-> event
                                                                                 (.-target)
                                                                                 (.-value)))))}]
       ]
      ]]]
   [css-transition-group {:transition-name "card"
                          :transition-appear true
                          :class "col-xs-12 card-container"}
    [:div {:class "col-xs-12"}
     [Paper {:class "tech-chart"}
      [:p "The size of each bubble represents the experience I have with that technology."]
      (let [filtered-data (filter-data @filters-atom data/data)
            colours-map (reduce
                         (fn [result [type val]] (assoc result type (:colour val)))
                         {}
                         type-data)]
        (print colours-map)
        (if ((comp not zero? count) filtered-data)
          [chart {:chart-size chart-size :technologies filtered-data :colours colours-map}]
          [:div {:style {:text-align "center"}}
           [:h3 "No Technologies match the filters :("]
           ]))]]]])
