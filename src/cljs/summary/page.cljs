(ns summary.page
  (:require [reagent.core :as r]
            [cljs.core :as core])
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

(defn page []
  [:div {:class "row middle-xs"}
   [:div {:class "col-xs-2 padded"}
    [contact-info]
    ]
   [:div {:class "col-xs-10"}
    [:div.row.padded
     [:div.col-xs-12
      [summary-card]
      ]
     ]
    [:div.row.padded
     [:div.col-xs-4
      [education-card]
      ]
     ]
    ]])


