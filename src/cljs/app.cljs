(ns app
  (:require [reagent.core :as r]
            [cljs.core :as core]
            [goog.object]
            [summary.page :as summary])
  (:require-macros [material-ui.macros :refer (export-material-ui-react-classes)])
  )
(enable-console-print!)
(export-material-ui-react-classes)

(defn app []
  [:div {:class "app"}
   [AppBar {:title "David Martin - CV" :showMenuIconButton false}]
   [:div {:class "container-fluid"}
    [summary/page]
    ]])


(r/render-component 
 [app]
 (.-body js/document))

