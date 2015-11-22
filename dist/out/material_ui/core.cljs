(ns material-ui.core
  (:require-macros [material-ui.macros :refer [export-material-ui-react-classes]]))

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
