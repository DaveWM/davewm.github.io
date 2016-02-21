(ns technologies.page
  (:require [reagent.core :as r]
            [technologies.data :as data]
            [cljsjs.d3])
  (:require-macros [cljs.core :refer [this-as]]))
(enable-console-print!)

(def chart-size 100)

(defn render-chart [el]
  (let [d3 (.-d3 js/window)
        colours (-> d3
                    (.-scale)
                    (.category20))
        chart-data (->> data/data
                        (map #(assoc % :value (or (:experience %) 0.1)))
                        (assoc {} :children)
                        (clj->js))
        layout (->  d3
                    (.-layout)
                    (.pack)
                    (.sort nil)
                    (.size (clj->js [100 100]))
                    (.padding 1.5))
        node     (-> d3
                     (.select el)
                     (.append "svg")
                     (.attr "viewBox" (str "0 0 " chart-size " " chart-size))
                     (.selectAll "g")
                     (.data (-> (.nodes layout chart-data)
                                (.filter #(not (.-children %)))))
                     (.enter)
                     (.append "g")
                     (.attr "transform" #(str "translate(" (.-x %) "," (.-y %) ")")))]
    (do
      (-> node
          (.append "circle")
          (.attr "r" #(.-r %))
          (.attr "fill" #(colours (.-type %))))
      (-> node
          (.append "image")
          (.attr "width" #(* 2 (.-r %)))
          (.attr "height" #(* 2 (.-r %)))
          (.attr "x" #(* -2 (.-r %)))
          (.attr "y" #(* -2 (.-r %)))
          (.attr "xlink:href" #(.-img %))))))


(defn page-layout []
  [:div.technologies])

(def page
  (with-meta page-layout
    {:component-did-mount #(render-chart (r/dom-node %))}))
