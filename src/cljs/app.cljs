(ns app
  (:require [reagent.core :as r]
            [clojure.string :as s]
            [cljs.core :as core]
            [goog.object]
            [summary.page :as summary]
            [work-history.page :as work-history]
            [reagent-react-router.core :refer [Route DefaultRoute Link RouteHandler Redirect NotFound run-router defroutes]])
  (:require-macros [material-ui.macros :refer (export-material-ui-react-classes)]
                   [cljs.core :refer [this-as]])
  )
(enable-console-print!)
(export-material-ui-react-classes)

(defn app-layout [child]
  (let [route-url (-> (.-URL js/document)
                      (s/split #"/")
                      last)]
    (identity [:div {:class "app"}
               [Paper {:zDepth 1 :class "appbar row padded middle-xs" :style {:background-color (aget Colors "indigo500")}}
                [:h2.col-xs-8 "David Martin CV"]
                [:div {:class "col-xs-4 end-xs"}
                 (map (fn [name]
                        (let [link (s/replace (s/lower-case name) #"\s" "-")
                              active (= route-url link)]
                          (println name)
                          (println link)
                          (identity
                           [Link {:to link :class "padded"}
                            [RaisedButton {:label name :primary active :secondary (not active)}]
                            ])))
                      ["Summary" "Work History"]
                      )
                 ]
                ]
               [:div {:class "content"}
                [RouteHandler child]
                ]])))

(def current-theme (.getMuiTheme ThemeManager LightRawTheme))
(def new-theme (.modifyRawThemePalette ThemeManager current-theme
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

(defn not-found []
  [:h3 "Route not found :("]
  )

(def routes
  (defroutes [:route "/" app
              [:route "summary" summary/page]
              [:route "work-history" work-history/page]
              [:not-found not-found]
              [:default-route summary/page]
              ])
  )

(run-router js/document.body routes)

