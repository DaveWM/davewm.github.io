(ns app.core
  (:require [reagent.core :as r]
            [clojure.string :as s]
            [cljs.core :as core]
            [goog.object]
            [summary.page :as summary]
            [work-history.page :as work-history]
            [reagent-react-router.core :refer [Route DefaultRoute Link RouteHandler Redirect NotFound run-router defroutes]]
             [material-ui.core :refer [RaisedButton Paper IconButton ThemeManager LightRawTheme Colors]])
  (:require-macros [cljs.core :refer [this-as]])
  )
(enable-console-print!)

(defn app-layout [child]
  (let [route-url (-> (.-URL js/document)
                      (s/split #"/")
                      last)]
    (identity [:div {:class "app"}
               [Paper {:zDepth 1 :class "appbar row middle-xs" :style {:background-color (aget Colors "indigo500")}}
                [:h2.col-xs-12.col-md-8.center-xs.start-md "David Martin CV"]
                [:div {:class "col-xs-12 col-md-4 end-md center-xs middle-xs padded"}
                 (map (fn [name]
                        (let [link (s/replace (s/lower-case name) #"\s" "-")
                              active (= route-url link)]
                          (identity
                           [Link {:to link :class "padded" :key link}
                            [RaisedButton {:label name :primary active :secondary (not active)}]
                            ])))
                      ["Summary" "Work History"]
                      )
                 ]
                ]
               [:div {:class "content"}
                [RouteHandler child]
                ]
               [Paper {:zDepth 1 :class "footer center-xs"
                       :style {:background-color (aget Colors "indigo500")}}
                [:p.col-xs-12 "I wrote this site with ClojureScript, Reagent, and Reagent-React-Router. It is hosted on github pages, all source code is on my github account"]
                [:p.col-xs-12
                [:a {:href "https://github.com/DaveWM/davewm.github.io"}
                 [IconButton {:tooltip "Site Source Code" :iconClassName "fa fa-github"
                              :iconStyle {:color "white"}}]
                 ]
                 ]
                ]
               ])))

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
              [:redirect "/" "summary"]
              ])
  )

(defn ^:export main []
  (println "main")
  (run-router js/document.body routes)
)
(main)
