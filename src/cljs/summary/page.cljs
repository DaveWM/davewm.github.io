(ns summary.page
  (:require [reagent.core :as r]
            [cljs.core :as core]
            [ajax.core :refer [GET POST]]
            [summary.github :as github]
            [summary.codewars :as codewars]
            [reagent-material-ui.core :refer [FontIcon IconButton Card CardMedia CardTitle CardHeader CardText Avatar GridList GridTile FontIcon]]))

(defn open-in-new-tab [url]
  (.open js/window url))

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
    [:ul {:class "education-text"}
     [:li "First Class BSc in Physics from the University of Liverpool"
      [:ul
       [:li "81% average in exams, lab work and coursework"]
       [:li "3rd year project involves data mining/signal analysis using C++ and linux"]
       [:li "Awarded Physics Department Attainment Scholarship, and Wynn Evans Memorial Prize (awarded to top sudent in BSc physics program)"]
       ]
      ]
     [:li "3 A's at A-Level in Physics, Chemistry and Maths"
      [:ul
       [:li "Awarded Wynn Williams Memorial Prize for Astrophysics"]
       ]
      ]
     [:li "11 GCSEs"]
     ]
    ]
   ])

(defn hobbies-card []
  [Card
   [CardHeader {:title "My Hobbies" :padding 0
                :avatar (r/as-element [Avatar {:icon (r/as-element [FontIcon {:className "fa fa-thumbs-o-up"}])}])}]
   [GridList {:cols 2 :cellHeight 180}
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

;each card has to be wrapped in a div, or the transitions don't work properly, don't know why
(defn page []
  [:div.row.middle-xs
   [:div {:transition-name "card"
                          :transition-appear true
                          :class "col-xs-12 col-md-2 card-container"}
    [:div
     [contact-info]
     ]
    ]
   [:div {:transition-name "card"
                          :transition-appear true
                          :class "col-xs-12 col-md-10 card-container"}
    [:div
     [summary-card]
     ]
    ]
   [:div {:transition-name "card"
                          :transition-appear true
                          :class "col-xs-12 col-md-6"}
    [:div.card-container
     [github/card {:user "DaveWM"}]
     ]
    [:div.card-container
     [hobbies-card]
     ]
    ]
   [:div {:transition-name "card"
                          :transition-appear true
                          :class "col-xs-12 col-md-6"}
    [:div.card-container
     [education-card]
     ]
    [:div.card-container
     [codewars/card]
     ]
    ]
   ])


