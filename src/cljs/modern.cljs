(ns cljs.modern
  (:require [reagent.core :as r]
            [cljs.core :as core]
            [goog.object])
  (:require-macros [material-ui.macros :refer (export-material-ui-react-classes)])
  )
(enable-console-print!)
(export-material-ui-react-classes)

(defn app []
  [:div 
   [AppBar {:title "David Martin - CV" :showMenuIconButton false}]
   [:div {:class "container-fluid"}
    [:div {:class "row middle-xs"}
     [:div {:class "col-xs-2 padded"}
      [Card
       [CardMedia {:overlay (r/as-element [CardTitle {:title "Contact Info"}])}
        [:img {:src "assets/me.jpg"}]
        ]
       [CardText
        [:p {:class "row middle-xs around-xs"} [FontIcon {:class "col-xs-2" :className "material-icons"} "email"] [:a.col-xs-10 {:href "mailto:dwmartin41@gmail.com"} "dwmartin41@gmail.com"]] 
       [:p {:class "row middle-xs around-xs"} [FontIcon {:class "col-xs-2" :className "material-icons"} "phone"] [:span.col-xs-10 "07588361916"]] 
       [:p {:class "row middle-xs around-xs"} [FontIcon {:class "col-xs-2" :className "fa fa-github"}] [:a.col-xs-10 {:href "https://github.com/DaveWM"} "@DaveWM"]] 
        ]
       ]
      ]
     [:div {:class "col-xs-10 padded"}
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
        ]]]
     ]]])


(r/render-component 
 [app]
 (.-body js/document))

