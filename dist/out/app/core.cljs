(ns app.core
  (:require [reagent.core :as r]
            [clojure.string :as s]
            [cljs.core :as core]
            [goog.object]
            [summary.page :as summary]
            [work-history.page :as work-history]
            [technologies.page :as technologies]
            [reagent-material-ui.core :refer [RaisedButton Paper IconButton ThemeManager LightRawTheme Colors]]
            [bidi.bidi :as bidi]
            [pushy.core :as pushy])
  (:require-macros [cljs.core :refer [this-as]]))

(enable-console-print!)

(def page (r/atom 1))

(defn not-found []
  [:h3 "Route not found :("]
  )

(def main-pages {"summary" summary/page
                 "work-history" work-history/page
                 "technologies" technologies/page})
(def routes ["/" (merge main-pages
                        {"" summary/page
                         true not-found})])
(defn set-page! [match]
  (reset! page (:handler match)))
(def history
  (pushy/pushy set-page! #(bidi/match-route routes %)))
(pushy/start! history)

(defn app-layout []
  (vec [:div {:class "app"}
        [Paper {:zDepth 1 :class "appbar row middle-xs" :style {:background-color (aget Colors "indigo500")}}
         [:h2.col-xs-12.col-md-8.center-xs.start-md "David Martin CV"]
         [:div {:class "col-xs-12 col-md-4 end-md center-xs middle-xs padded"}
          (->> main-pages
               (map (fn [[route-name page-comp]]
                      (let [display (-> route-name
                                        (s/split #"-")
                                        (->> (map s/capitalize)
                                             (s/join " ")))
                            active (= page-comp @page)
                            link (bidi/path-for routes page-comp)]
                        (identity
                         [:span.padded {:key route-name}
                          [RaisedButton {:className "padded" :label display :primary active :secondary (not active)
                                         :linkButton true :href link
                                         }]])))))
          ]
         ]
        [:div {:class "content"}
         [@page]
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
        ]))

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
       (print "called")
       #js {:muiTheme new-theme})
     }
    ))

(defn ^:export main []
  (print "rendering")
  (r/render-component [app] (.getElementById js/document "react-container")))

(main)
