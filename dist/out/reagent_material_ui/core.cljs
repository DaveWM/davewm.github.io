(ns reagent-material-ui.core
  (:refer-clojure :exclude [List])
  (:require-macros [reagent-material-ui.macros :refer [export-material-ui-react-classes]])
  (:require [mui]
            [reagent.core])
  )

(export-material-ui-react-classes)

(def Colors (-> js/MaterialUI
                (aget "Styles")
                (aget "Colors")))

(def LightRawTheme (-> js/MaterialUI
                       (aget "Styles")
                       (aget "LightRawTheme")))

(def ThemeManager (-> js/MaterialUI
                      (aget "Styles")
                      (aget "ThemeManager")))

