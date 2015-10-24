(ns app
  (:require [reagent.core :as r]
            [cljs.core :as core]
            [goog.object]
            [summary.page :as summary])
  (:require-macros [material-ui.macros :refer (export-material-ui-react-classes)])
  )
(enable-console-print!)
(export-material-ui-react-classes)

(defn app-layout []
  [:div {:class "app"}
   [AppBar {:title "David Martin - CV" :showMenuIconButton false :style {:text-align "center"}}]
   [:div {:class "content"}
    [summary/page]
    ]])

(def current-theme (.getMuiTheme ThemeManager LightRawTheme))
(def ^:dynamic new-theme (.modifyRawThemePalette ThemeManager current-theme
                                                 #js {
                                                  :primary1Color (aget Colors "indigo500")
                                                  :primary2Color (aget Colors "indigo700")
                                                  :primary3Color (aget Colors "lightBlack")
                                                  :accent1Color (aget Colors "blueA200")
                                                  :accent2Color (aget Colors "indigo100")
                                                      :accent3Color (aget Colors "blue500")
                                                      :textColor (aget Colors "indigo900")
                                                  }))
(def app
  (with-meta app-layout
    {
     :child-context-types
                     #js {:muiTheme js/React.PropTypes.object}

       :get-child-context
                     (fn [this]
                       #js {:muiTheme new-theme})
     }
))

(r/render-component 
 [app]
 (.-body js/document))

