(ns technologies.page
  (:require [reagent.core :as r]
            [technologies.data :as data]
            [technologies.chart :refer [chart]])
  (:require-macros [cljs.core :refer [this-as]]))
(enable-console-print!)

(def chart-size 100)

(defn page []
  [chart {:chart-size chart-size :technologies data/data}])
