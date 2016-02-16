(ns summary.github
  (:require [reagent.core :as r]
            [ajax.core :refer [GET POST]]
            [material-ui.core :refer [Avatar Card CardHeader CircularProgress List ListItem CardActions FlatButton FontIcon]]))

(def css-transition-group
  (r/adapt-react-class js/React.addons.CSSTransitionGroup))

(def github-loading (r/atom 2))
(def github-user (r/atom {}))
(def github-repos (r/atom []))
(defn get-github-user [user]
  (GET (str "https://api.github.com/users/" user) {:handler (fn [response] (do
                                                                             (reset! github-user response)
                                                                             (swap! github-loading dec)))}))
(defn open-in-new-tab [url]
  (.open js/window url))

(defn get-github-user-repos [user] (GET (str "https://api.github.com/users/" user "/repos")
                                        {:handler #(do
                                                     (swap! github-loading dec)
                                                     (->> %
                                                          (filter (fn [r] (not (get r "fork"))))
                                                          (sort-by (fn [r] (js/Date. (get r "updated_at"))) >)
                                                          (take 5)
                                                          (reset! github-repos)))}))


(defn github-card-layout [{:keys [user]}]
  [Card
   [CardHeader {:title "GitHub" :subtitle (str "@" user) :avatar (@github-user "avatar_url")}]
   [:div {:class "repo-list"}
    (if (> @github-loading 0)
      [CircularProgress {:class "centred card-loading-icon" :mode "indeterminate"}]
      [List
       [css-transition-group {:transition-name "fade" :transition-appear true}
        (map #(identity
               [ListItem {
                          :key (get % "id")
                          :primaryText (get % "name")
                          :secondaryText (get % "description")
                          :leftAvatar (r/as-element [Avatar {:icon (r/as-element [FontIcon {:className "octicon octicon-repo"}])}])
                          :onClick (fn [] (open-in-new-tab (get % "html_url")))
                          }])
             @github-repos)
        ]])]
    [CardActions
     [FlatButton {:label "View Profile" :linkButton true :href (str "https://github.com/" user)}]
     ]])

(def card
  (with-meta github-card-layout
    {:component-did-mount #(let [user (-> % r/props :user)]
                             (do
                               (get-github-user user)
                               (get-github-user-repos user)
                               ))}))
