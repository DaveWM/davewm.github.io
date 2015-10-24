(ns summary.page
  (:require [reagent.core :as r]
            [cljs.core :as core]
            [ajax.core :refer [GET POST]])
  (:require-macros [material-ui.macros :refer (export-material-ui-react-classes)]))

(export-material-ui-react-classes)

(defn contact-info []
  (let [info-part (fn [icon-type icon-name value-elem]
                    [:p {:class "row middle-xs around-xs"} [FontIcon {:className (str "col-xs-2 " icon-type)} icon-name] (if (map? (nth value-elem 1))
                                                                                                                           (update-in value-elem [1 :class] #(str % " col-xs-10"))                                                             (let [[tag & content] value-elem] [tag {:class "col-xs-10"} content])
                                                                                                                           )])]         
    [Card
     [CardMedia {:overlay (r/as-element [CardTitle {:title "Contact Info"}])}
      [:img {:src "assets/me.jpg"}]
      ]
     [CardText
      (info-part "material-icons" "email" [:a {:href "mailto:dwmartin41@gmail.com"} "dwmartin41@gmail.com"])
      (info-part "material-icons" "phone" [:span "07588361916"])
      (info-part "fa fa-github" nil [:a {:href "https://github.com/DaveWM"} "@DaveWM"])
      (info-part "fa fa-linkedin-square" nil [:a {:href "https://www.linkedin.com/in/davewm"} "David Martin"])
      ]]))

(defn summary-card []
  [Card 
   [CardHeader {:title "Summary" :subtitle "A bit about me" :avatar (r/as-element [Avatar {:icon (r/as-element [FontIcon {:className "material-icons"} "mode_edit"])}])}]
   [CardText "I am a senior full stack web developer with a strong mathematical background, and 4 years' programming experience across a variety of industries, primarily using C# with ASP.NET on the back end and ES6/AngularJS on the front end. I also have experience with designing/architecting systems, setting up continuous integration, and performing deployments."
    [:dl
     [:dt "Front End"]
     [:dd "My current preferred front end tools/frameworks are angularjs, angular material, browserify, npm, gulp, babel, karma and protractor. I am currently learning clojurescript and react."]
     [:dt "Back End"]
     [:dd "On the back end, I am most comfortable using ASP.NET Web API 2, with entity framework. I usually write tests in Nunit or specflow."]
     [:dt "Scripting"]
     [:dd "I have a small amount of experience writing scripts, in nodejs and F#."]
     [:dt "Open Source"]
     [:dd "I have created and contributed to a number of open source projects - see my github account for details."]
     [:dt "Cloud"]
     [:dd "I have used PAAS and IAAS services on various cloud platforms, such as AWS, azure, openstack and rackspace."]
     [:dt "Older Technologies"]
     [:dd "I have previous experience with microsoft technologies like winforms, WPF, and WCF."]
     ]
    ]])

(defn education-card []
  [Card
   [CardMedia {:overlay (r/as-element [CardTitle {:title "Education"}])}
    [:img {:src "assets/liv_uni_alt.jpg"}]]
   [CardText
    [:ul
     [:li "First Class BSc in Physics from the University of Liverpool"]
     [:li "3 A's at A-Level in Physics, Chemistry and Maths"]
     ]
    ]
   ])


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


(defn github-card-layout []
  [Card
   [CardHeader {:title "GitHub" :subtitle (str "@" (@github-user "login")) :avatar (@github-user "avatar_url")}]
   (if (> @github-loading 0)
     [CircularProgress {:class "centred card-loading-icon" :mode "indeterminate"}]
     [List
      (map #(identity ^{:key (get % "id")}
                      [ListItem {
                                 :primaryText (get % "name")
                                 :secondaryText (get % "description")
                                 :leftAvatar (r/as-element [Avatar {:icon (r/as-element [FontIcon {:className "octicon octicon-repo"}])}])
                                 :onTouchTap (fn [] (open-in-new-tab (get % "html_url")))
                                 }])
           @github-repos)
      ])
   [CardActions
    [FlatButton {:label "View Profile" :onClick #(open-in-new-tab "https://github.com/DaveWM")}]
    ]])

(def github-card
  (with-meta github-card-layout
    {:component-did-mount #(do (get-github-user "DaveWM")
                               (get-github-user-repos "DaveWM"))}))


(defn hobbies-card []
  [Card
   [CardHeader {:title "My Hobbies" :padding 0
                :avatar (r/as-element [Avatar {:icon (r/as-element [FontIcon {:className "fa fa-thumbs-o-up"}])}])}]
   [GridList {:cols 2 :cellHeight 200}
    [GridTile {:cols 2 :title "Motorsport" :subtitle "I Race in the Track Attack MR2 Series"
               :rootClass "tile"
               :actionIcon (r/as-element
                            [IconButton {:iconClassName "fa fa-youtube-play" :iconStyle {:color "#e62117"}
                                         :onClick #(open-in-new-tab "https://www.youtube.com/user/dave12347589/videos")}])}
     [:img {:src "assets/racing.jpg"}]
     ]
    [GridTile {:cols 1 :title "Reading" :subtitle "I'm a big fan of sci-fi books" :titlePosition "top"
               :rootClass "tile"}
     [:img {:src "assets/hyperion.jpg"}]
     ]
    [GridTile {:cols 1 :title "Snowboarding" :subtitle "I enjoy snowboarding during the winter" :rootClass "tile"}
     [:img {:src "assets/snowboarding.jpg"}]
     ]
    ]
   ]
  )


(def codewars-loading (r/atom true))
(def codewars-user (r/atom {}))
(defn get-codewars-user [user]
  "Gets the codewars user info. Have to go through a proxy because their api doesn't support CORS"
  (GET (str "https://crossorigin.me/https://www.codewars.com/api/v1/users/" user)
       {:handler (fn [response] (do
                                  (reset! codewars-user response)
                                  (swap! codewars-loading not)))}))

(defn codewars-card-layout []
  [Card
   [CardHeader {:title "Codewars"
                :subtitle (str
                           (get-in @codewars-user ["codeChallenges" "totalCompleted"])
                           " Challenges Completed | Overall Score "
                           (get-in @codewars-user ["ranks" "overall" "score"]))
                :avatar "assets/codewars.png"}
    ]
   (if @codewars-loading
     [CircularProgress {:mode "indeterminate" :class "centred card-loading-icon"}]
     [List
      (let [languages (sort-by #(get-in % [1 "score"]) > (get-in @codewars-user ["ranks" "languages"]))]
        (map (fn [lang]
               (let [[name info] lang]
                 (println lang)
                           (identity
                            [ListItem {
                                       :primaryText name
                                       :secondaryText (str "Score " (get info "score"))
                                       :leftIcon (r/as-element [FontIcon {:className (str "icon-" name)}])
                                       }]
                            )))
             languages)
        )])
   [CardActions
    [FlatButton {:onClick #(open-in-new-tab "http://www.codewars.com/users/DaveWM") :label "View Account"}]
    ]
   ])

(def codewars-card
  (with-meta codewars-card-layout
    {:component-did-mount #(get-codewars-user "DaveWM")}))


(defn page []
  [:div.row
   [:div.row.middle-xs
    [:div.col-xs-2
     [:div.row.padded.top-xs
      [contact-info]
      ]
     ]
    [:div.col-xs-10
     [summary-card]
     ]
    ]
   [:div.row.padded.middle-xs
    [:div.col-xs-6
     [:div.row.middle-xs
      [:div.col-xs-12.padded
       [education-card]
       ]
      [:div.col-xs-12.padded
       [hobbies-card]
       ]
      ]
     ]
    [:div.col-xs-6
     [:div.row.middle-xs
      [:div.col-xs-12.padded
       [github-card]
       ]
      [:div.col-xs-12.padded
       [codewars-card]
       ]
      ]
     ]
    ]])


