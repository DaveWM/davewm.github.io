(ns cljs.modern
  (:require [reagent.core :as r]
            [cljs.core :as core]))

(enable-console-print!)
(println "First")

(defonce click-count (r/atom 0))

(defn counter []
  [:p {:on-click #(swap! click-count inc)} (str "Clicked " @click-count " Times")])

(defn app []
  (let [FlatButton (-> (aget js/MaterialUI "FlatButton") r/adapt-react-class)]
  [:div
   [:h2 "Hello Reagent :)"]
   [counter]
   [FlatButton [:label "A Button"]]
  ]))


(r/render-component 
   [app]
   (.-body js/document))

