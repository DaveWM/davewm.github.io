(ns work-history.page
  (:require [reagent.core :as r]
            [cljs.core :as core]
            [reagent-material-ui.core :refer [Card CardMedia CardHeader Avatar CardText CardActions FlatButton]]
            [markdown.core :refer [md->html]]
            [cljs-time.format :as time]))

(defn history-card [{:keys [title img from to url bullet-points]}]
  (let [format-date (fn [date]
                      (time/unparse (time/formatter "MMMM YYYY") date))]
    [:div.col-xs-12.col-md-6.col-md-offset-3  {:key title}
     [Card {:class "work-history-card"}
      [CardMedia
       {:overlay (r/as-element
                  [CardHeader {:title title :subtitle (str (format-date from) " - " (if to
                                                                                     (format-date to)
                                                                                     "Present"))
                               :avatar (r/as-element [Avatar (first title)])}]
                  )}
       [:img {:src img}]
       ]
      [CardText
       [:ul
        (map-indexed #(identity [:li {:key %1}
                                 [:span {:dangerouslySetInnerHTML {:__html (md->html %2)}}]])
                     bullet-points)
        ]
       ]
      [CardActions
       [FlatButton {:label "Go to Website" :linkButton true :href url}]
       ]
      ]]))
   
(defn page [data]
  [:div.row.middle-xs
   [:div
    (map history-card (:work-history data))
    ]
   ]
  )


