(ns technologies.chart
  (:require [cljsjs.d3]            
            [reagent.core :as r]))

(def d3 (.-d3 js/window))

(defn render-chart [chart-size el data colours]
  (let [chart-data (->> data
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
                     (.attr "viewBox" (str "0 0 " chart-size " " chart-size))
                     (.selectAll "g")
                     (.data (-> (.nodes layout chart-data)
                                (.filter #(not (.-children %))))
                            #(.-name %)))
        newGroup (-> node
                     (.enter)
                     (.append "g")
                     (.attr "transform" (str "translate(" (/ chart-size 2) "," (/ chart-size 2) ")")))]
    (do
      (-> newGroup
          (.append "circle"))
      (-> newGroup
          (.append "title"))
      (-> newGroup
          (.append "image"))
      (-> node
          (.exit)
          (.remove))
      (-> node
          (.transition)
          (.duration 1000)
          (.attr "transform" #(str "translate(" (.-x %) "," (.-y %) ")")))
      (-> node
          (.select "circle")
          (.attr "r" #(.-r %))
          (.attr "fill" #((keyword (.-type %)) colours)))
      (-> node
          (.select "image")
          (.attr "width" #(.-r %))
          (.attr "height" #(.-r %))
          (.attr "x" #(* -1 (/ (.-r %) 2)))
          (.attr "y" #(* -1 (/ (.-r %) 2)))
          (.attr "xlink:href" #(.-img %)))
      (-> node
          (.select "title")
          (.text #(.-name %))))))


(defn page-layout [props]
  [:svg {:style {:max-width 1000}}])

(def component-update-func
  #(let [chart-size (-> % r/props :chart-size)
         technologies (-> % r/props :technologies)
         colours (-> % r/props :colours)]
     (render-chart chart-size (r/dom-node %) technologies colours)))

(def chart
    (with-meta page-layout
      {:component-did-mount component-update-func
       :component-did-update component-update-func}))
