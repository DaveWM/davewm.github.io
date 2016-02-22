(ns technologies.page
  (:require [reagent.core :as r]
            [technologies.data :as data]
            [technologies.chart :refer [chart]]
            [material-ui.core :refer [Paper]])
  (:require-macros [cljs.core :refer [this-as]]))
(enable-console-print!)

(def css-transition-group
  (r/adapt-react-class js/React.addons.CSSTransitionGroup))
(def chart-size 100)

(defn page []
  [:div.row.middle-xs
   [css-transition-group {:transition-name "card"
                          :transition-appear true
                          :class "col-xs-12 card-container"}
    [:div {:class "col-xs-12"}
     [Paper {:class "tech-chart"}
      [:p "The size of each bubble represents the experience I have with that technology."]
      [chart {:chart-size chart-size :technologies data/data}]]]]])
