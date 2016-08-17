(ns summary.page
  (:require [reagent.core :as r]
            [cljs.core :as core]
            [ajax.core :refer [GET POST]]
            [summary.github :as github]
            [summary.codewars :as codewars]
            [reagent-material-ui.core :refer [FontIcon IconButton Card CardMedia CardTitle CardHeader CardText Avatar GridList GridTile FontIcon]]
            [markdown.core :refer [md->html]]
            [app.helpers :refer [format-date-month-year]]))
(enable-console-print!)

(defn open-in-new-tab [url]
  (.open js/window url))

(defn contact-info [{:keys [email phone github-user linkedin-url]}]
  (let [info-part (fn [icon-type icon-name value-elem]
                    [:p {:class "row middle-xs around-xs"}
                     [FontIcon {:className (str "col-xs-2 " icon-type)} icon-name]
                     (if (map? (nth value-elem 1))
                       (update-in value-elem [1 :class] #(str % " col-xs-10"))
                       (let [[tag & content] value-elem] [tag {:class "col-xs-10"} content])
                       )])]
    [Card 
     [CardHeader {:title "Contact Info"
                  :subtitle "My contact info"
                  :avatar (r/as-element [Avatar {:src "assets/me.jpg"}])}]
     [CardText
      (info-part "material-icons" "email" [:a {:href (str "mailto:" email)} email])
      (info-part "material-icons" "phone" [:span phone])
      (info-part "fa fa-github" nil [:a {:href (str "https://github.com/" github-user)} (str "@" github-user)])
      (info-part "fa fa-linkedin-square" nil [:a {:href linkedin-url} "LinkedIn"])
      ]]))

(defn summary-card [summary]
  [Card 
   [CardHeader {:title "Summary" :subtitle "A bit about me" :avatar (r/as-element [Avatar {:icon (r/as-element [FontIcon {:className "material-icons"} "mode_edit"])}])}]
   [CardText {:className "summary"
              :dangerouslySetInnerHTML {:__html (md->html summary)}}]])

(defn education-card [education]
  [Card
   [CardMedia {:overlay (r/as-element [CardTitle {:title "Education"}])}
    [:img {:src "assets/liv_uni_alt.jpg"}]]
   [CardText
    (map (fn [{:keys [from to name highlights]}]
           [:div
            [:div [:b name]]
            [:div [:i (str (format-date-month-year from) " - " (format-date-month-year to))]]
            [:ul
             (map (fn [highlight]
                    [:li highlight])
                  highlights)]
            ])
         education)]])

(defn hobbies-card [hobbies]
  [Card
   [CardHeader {:title "My Hobbies" :padding 0
                :avatar (r/as-element [Avatar {:icon (r/as-element [FontIcon {:className "fa fa-thumbs-o-up"}])}])}]
   [GridList {:cols 2 :cellHeight 180}
    (let [positions (cycle ["bottom" "top"])
          col-spans (if (even? (count hobbies))
                      (repeat 1)
                      (cons 2 (repeat 1)))]
      (map (fn [{:keys [title description img]} col-span position]
             [GridTile {:cols col-span :title title :subtitle description :rootClass "tile" :titlePosition position}
              [:img {:src img}]])
           hobbies col-spans positions))]])

(defn page [{:keys [personal summary education hobbies]}]
  [:div.row.middle-xs
   [:div {:class "col-xs-12 col-lg-2 col-md-4 card-container"}
    [contact-info personal]     
    ]
   [:div {:class "col-xs-12 col-lg-10 col-md-8 card-container"}
    [summary-card summary]
    ]
   [:div {:class "col-xs-12 col-md-6"}
    [:div.card-container
     [github/card {:user (:github-user personal)}]
     ]
    [:div.card-container
     [hobbies-card hobbies]
     ]
    ]
   [:div {:class "col-xs-12 col-md-6"}
    [:div.card-container
     [education-card education]
     ]
    [:div.card-container
     [codewars/card {:user (:codewars-user personal)}]
     ]
    ]
   ])


