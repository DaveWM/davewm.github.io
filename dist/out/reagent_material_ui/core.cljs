(ns reagent-material-ui.core
  (:refer-clojure :exclude [List])
  (:require-macros [reagent-material-ui.macros :refer [export-material-ui-react-classes]])
  (:require [cljsjs.material-ui]
            [reagent.core])
  )

(export-material-ui-react-classes)

(def colors (-> js/MaterialUIStyles
                (aget "colors")))

(def lightBaseTheme (-> js/MaterialUIStyles
                        (aget "lightBaseTheme")))

(def darkBaseTheme (-> js/MaterialUIStyles
                       (aget "darkBaseTheme")))

(def getMuiTheme (-> js/MaterialUIStyles
                     (aget "getMuiTheme")))

(def MuiThemeProvider (-> js/MaterialUIStyles
                          (aget "MuiThemeProvider")
                          (reagent.core/adapt-react-class)))

