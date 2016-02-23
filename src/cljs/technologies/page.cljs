(ns technologies.page
  (:require [reagent.core :as r]
            [technologies.data :as data]
            [technologies.chart :refer [chart]]
            [material-ui.core :refer [Avatar Card CardHeader CardText Checkbox FontIcon ListDivider  Paper Slider]])
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
                              (assoc :experience 0))))

(defn filter-data [filters data]
  (print filters)
  (->> data
       (filter #((:type %) (:types filters)))
       (filter #(apply > (map :experience [% filters])))))

(defn type-checkbox [type]
  [Checkbox {:key type
             :label type
             :defaultChecked true
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
       [Slider {:defaultValue 0
                :min 0
                :max (apply max (map :experience data/data))
                :onChange (fn [event value] (print value) (swap! filters-atom #(assoc % :experience value)))}]
       ]
      ]]]
   [css-transition-group {:transition-name "card"
                          :transition-appear true
                          :class "col-xs-12 card-container"}
    [:div {:class "col-xs-12"}
     [Paper {:class "tech-chart"}
      [:p "The size of each bubble represents the experience I have with that technology."]
      [chart {:chart-size chart-size :technologies (filter-data @filters-atom data/data)}]]]]])
