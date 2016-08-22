(ns technologies.page
  (:require [reagent.core :as r]
            [technologies.chart :refer [chart]]
            [reagent-material-ui.core :refer [Avatar Card CardHeader CardText Checkbox Divider FontIcon Paper Slider TextField]]
            [clojure.set :refer [union]])
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
                              (assoc :types #{})
                              (assoc :experience 0)
                              (assoc :name nil))))

(defn filter-data [filters data]
  (->> data
       (filter #(or (empty? (:types filters))
                    (contains? (:types filters) (keyword (:type %)))))
       (filter #(apply > (map :experience [% filters])))
       (remove #(some->> (:name filters)
                         (.toLowerCase)
                         (.indexOf (.toLowerCase (:name %)))
                         (> 0)))))

(defn type-checkbox [[key type]]
  [Checkbox {:key key
             :label (:name type)
             :defaultChecked (contains? (:types @filters-atom) key)
             :style {:max-width 200
                     :display "inline-block"}
             :iconStyle {:fill (:colour type)}
             :labelStyle {:color (:colour type)}
             :onCheck (fn [event] (swap! filters-atom #(let [checked (-> event
                                                                         (.-target)
                                                                         (.-checked))
                                                             operation (if checked union remove)]
                                                         (update % :types (fn [types]
                                                                            (->> (operation #{key} types)
                                                                                 (into #{})))))))}])

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
       [:div {:class "row"}
        [:div {:class "col-sm-6"}
         [:p "Types"]
         (->> type-data
              (map type-checkbox))]
        [:div {:class "col-sm-3"}
         [:p "Experience"]
         [Slider {:defaultValue (:experience @filters-atom)
                  :min 0
                  :max (apply max (map :experience technologies))
                  :onChange (fn [event value] (print value) (swap! filters-atom #(assoc % :experience value)))}]]
        [:div {:class "col-sm-3"}
         [:p "Name"]
         [TextField {:defaultValue (:name @filters-atom)
                     :onChange (fn [event] (swap! filters-atom #(assoc % :name (-> event
                                                                                   (.-target)
                                                                                   (.-value)))))}]]]]]
     [:div {:class "col-xs-12 card-container"}
      [Paper {:class "tech-chart"}
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
           [:div {:style {:text-align "center"}}
            [chart {:chart-size chart-size :technologies filtered-data :colours colours-map}]
            [:p "The size of each bubble represents the experience I have with that technology."]
            chart-colour-key]
           [:div {:style {:text-align "center"}}
            [:h3 "No Technologies match the filters :("]
            ]))]]]]])
