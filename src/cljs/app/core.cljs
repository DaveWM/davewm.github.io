(ns app.core
  (:require [reagent.core :as r]
            [clojure.string :as s]
            [cljs.core :as core]
            [goog.object]
            [summary.page :as summary]
            [work-history.page :as work-history]
            [technologies.page :as technologies]
            [reagent-material-ui.core :refer [RaisedButton Paper IconButton getMuiTheme colors MuiThemeProvider lightBaseTheme]]
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

(def lightTheme (-> lightBaseTheme
                    js->clj))

(def theme (->> {:palette {
                           :primary1Color (aget colors "indigo500")
                           :primary2Color (aget colors "indigo700")
                           :primary3Color (aget colors "lightBlack")
                           :accent1Color (aget colors "blueA200")
                           :accent2Color (aget colors "indigo100")
                           :accent3Color (aget colors "blue500")
                           :textColor (aget colors "indigo900")}}
                (merge lightTheme)
                (clj->js)
                (getMuiTheme)))
(print theme)

(defn app []
  [MuiThemeProvider {:muiTheme theme}
      [:div {:class "app"}
       [Paper {:zDepth 1 :class "appbar row middle-xs" :style {:background-color (aget colors "indigo500")}}
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
                         [RaisedButton {:label display :primary (not active) :secondary active
                                        :linkButton true :href link
                                        }]]))))
              doall)
         ]]
       [:div {:class "content"}
        [@page]]
       [Paper {:zDepth 1 :class "footer center-xs"
               :style {:background-color (aget colors "indigo500")
                       :color "white"}}
        [:p.col-xs-12 "I wrote this site with ClojureScript, Reagent, and Bidi. It is hosted on github pages, all source code is on GitHub"]
        [:p.col-xs-12
         [:a {:href "https://github.com/DaveWM/davewm.github.io"}
          [IconButton {:iconClassName "fa fa-github"
                       :iconStyle {:color "white"}}]]]]]])

(defn ^:export main []
  (print "rendering")
  (r/render-component [app] (.getElementById js/document "react-container")))

(main)
