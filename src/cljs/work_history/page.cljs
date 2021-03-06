(ns work-history.page
  (:require [reagent.core :as r]
            [cljs.core :as core]
            [reagent-material-ui.core :refer [Card CardMedia CardHeader Avatar CardText CardActions FlatButton]]
            [markdown.core :refer [md->html]]
            [cljs-time.format :as time]
            [app.helpers :refer [format-date-month-year]]))

(defn history-card [{:keys [title img from to url bullet-points]}]
  [:div.col-xs-12.col-md-6.col-md-offset-3  {:key title}
   [Card {:class "work-history-card"}
    [CardMedia
     {:overlay (r/as-element
                [CardHeader {:title title :subtitle (str (format-date-month-year from) " - " (if to
                                                                                               (format-date-month-year to)
                                                                                               "Present"))
                             :avatar (r/as-element [Avatar (first title)])}]
                )}
     [:img {:src img}]
     ]
    [CardText
     [:ul
      (map-indexed #(identity [:li {:key %1
                                    :dangerouslySetInnerHTML {:__html (md->html %2)}}])
                   bullet-points)
      ]
     ]
    [CardActions
     [FlatButton {:label "Go to Website" :linkButton true :href url}]
     ]
    ]])

(defn page [data]
  [:div.row.middle-xs
   [:div
    (map history-card (:work-history data))
    ]
   ]
  )


