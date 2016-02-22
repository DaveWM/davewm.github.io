(ns technologies.chart
  (:require [cljsjs.d3]            
            [reagent.core :as r]))


(defn render-chart [chart-size el data]
  (let [d3 (.-d3 js/window)
        colours (-> d3
                    (.-scale)
                    (.category20))
        chart-data (->> data
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
          (.attr "width" #(.-r %))
          (.attr "height" #(.-r %))
          (.attr "x" #(* -1 (/ (.-r %) 2)))
          (.attr "y" #(* -1 (/ (.-r %) 2)))
          (.attr "xlink:href" #(.-img %)))
      (-> node
          (.append "title")
          (.text #(.-name %))))))


(defn page-layout []
  [:div.chart])

(def chart
  (with-meta page-layout
    {:component-did-mount #(let [chart-size (-> % r/props :chart-size)
                                 technologies (-> % r/props :technologies)]
                             (render-chart chart-size (r/dom-node %) technologies))}))
