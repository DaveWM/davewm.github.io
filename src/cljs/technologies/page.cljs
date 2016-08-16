(ns technologies.page
  (:require [reagent.core :as r]
            [technologies.chart :refer [chart]]
            [reagent-material-ui.core :refer [Avatar Card CardHeader CardText Checkbox Divider FontIcon Paper Slider TextField]])
  (:require-macros [cljs.core :refer [this-as]]))
(enable-console-print!)

(def chart-size 100)

(def type-data {:language {:colour "blueviolet" :name "Language"}
                :FE {:colour "lightpink" :name "Front End"}
                :BE {:colour "#ff7f0e" :name "Back End"}
                :tool {:colour "#ffbb78" :name "Tool"}
                :DataStore {:colour "#2ca02c" :name "Data Store"}
                :Testing {:colour "#98df8a" :name "Testing Tool"}
                :Cloud {:colour "lightslategray" :name "Cloud Platform"}
                :Misc {:colour "lightblue" :name "Miscellaneous"}})

(def filters-atom (r/atom (-> {}
                              (assoc :types (->> type-data
                                                 keys
                                                 (map #(identity {% true}))
                                                 (apply merge)))
                              (assoc :experience 0)
                              (assoc :name nil))))

(defn filter-data [filters data]
  (->> data
       (filter #((:type %) (:types filters)))
       (filter #(apply > (map :experience [% filters])))
       (remove #(some->> (:name filters)
                         (.toLowerCase)
                         (.indexOf (.toLowerCase (:name %)))
                         (> 0)))))

(defn type-checkbox [[key type]]
  [Checkbox {:key key
             :label (:name type)
             :defaultChecked (get-in @filters-atom [:types key])
             :style {:max-width 300
                     :display "inline-block"}
             :iconStyle {:fill (:colour type)}
             :labelStyle {:color (:colour type)}
             :onCheck (fn [event] (swap! filters-atom #(assoc-in % [:types key] (-> event
                                                                                     (.-target)
                                                                                     (.-checked)))))}])

(defn page [{:keys [technologies]}]
  [:div.row.middle-xs
   [:div {:class "col-xs-12 card-container"}
    [:div {:class "col-xs-12"}
     [Card
      [CardHeader {:title "Filters"
                   :avatar (r/as-element [Avatar {:icon (r/as-element [FontIcon {:className "material-icons"} "filter_list"])}])
                   :actAsExpander true
                   :showExpandableButton true}]
      [CardText {:expandable true}
       [:p "Types"]
       (->> type-data
            (map type-checkbox))
       [Divider {:style {:margin-top 20
                             :margin-bottom 20}}]
       [:p "Experience"]
       [Slider {:defaultValue (:experience @filters-atom)
                :min 0
                :max (apply max (map :experience technologies))
                :onChange (fn [event value] (print value) (swap! filters-atom #(assoc % :experience value)))}]
       [Divider {:style {:margin-top 20
                             :margin-bottom 20}}]
       [TextField {:floatingLabelText "Name"
                   :defaultValue (:name @filters-atom)
                   :onChange (fn [event] (swap! filters-atom #(assoc % :name (-> event
                                                                                 (.-target)
                                                                                 (.-value)))))}]
       ]
      ]]]
   [:div {:class "col-xs-12 card-container"}
    [:div {:class "col-xs-12"}
     [Paper {:class "tech-chart"}
      [:p "The size of each bubble represents the experience I have with that technology."]
      (let [filtered-data (filter-data @filters-atom technologies)
            colours-map (reduce
                         (fn [result [type val]] (assoc result type (:colour val)))
                         {}
                         type-data)
            chart-colour-key (reduce (fn [result [type props]]
                                       (conj result [:span {:className "chart-key"
                                                            :style {:color (:colour props)}}
                                                     [:span (:name props)]
                                                     [:span {:className "key-colour"
                                                             :style {:background-color (:colour props)}}]
                                                     ]))
                                     [Paper {:class "chart-keys"}]
                                     type-data)]
        (if ((comp not zero? count) filtered-data)
          [:div
           chart-colour-key
           [chart {:chart-size chart-size :technologies filtered-data :colours colours-map}]]
          [:div {:style {:text-align "center"}}
           [:h3 "No Technologies match the filters :("]
           ]))]]]])
