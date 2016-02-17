(ns work-history.page
  (:require [reagent.core :as r]
            [cljs.core :as core]
            [material-ui.core :refer [Card CardMedia CardHeader Avatar CardText CardActions FlatButton]])
  )

(def css-transition-group
  (r/adapt-react-class js/React.addons.CSSTransitionGroup))

(defn history-card [name img-url date-from date-to website-url bullet-points]
  [:div {:key name}
   [Card {:class "col-xs-12 col-md-6 col-md-offset-3 work-history-card"}
    [CardMedia
     {:overlay (r/as-element
                [CardHeader {:title name :subtitle (str date-from " - " date-to)
                             :avatar (r/as-element [Avatar (first name)])}]
                )}
     [:img {:src img-url}]
     ]
    [CardText
     [:ul
      (map-indexed #(identity [:li {:key %1} %2]) bullet-points)
      ]
     ]
    [CardActions
     [FlatButton {:label "Go to Website" :linkButton true :href website-url}]
     ]
    ]])
   
(defn page []
  [:div.row
   [css-transition-group {:transition-name "card" :transition-appear true}
    (history-card "Potato" "assets/P.png" "November 2015" "Present" "https://p.ota.to/" ["Front End Developer"])
    (history-card "Sporting Solutions" "/assets/SS.png" "April 2015" "November 2015" "http://www.sportingsolutions.com"
                  ["Working in a team responsible for receiving data from external feed providers, and passing it on to other teams via a message queue."
                   "The system was mainly composed of 2 large C# console apps, which communicated using rabbitMQ. There were also a number of smaller console apps, an internal MVC website used to manage the feed data, and an asp.net REST api for use by other teams."
                   "Used a variety of technologies to consume external feeds, such as TCP sockets, HTTP polling and IBM WebSphere"
                   "I was responsible maintaining an internal MVC website. I was also in charge of migrating this website to an angular SPA, which I built using ES6 + babel, angular 1.4, angular material, LESS and gulp. Currently in the prototype phase."
                   "I did the vast majority of the work to migrate the logging in one application from an old, unmaintained framework to Graylog."
                   "I was put in charge of re-writing a suite of acceptance tests written in specflow. I also set up a CI project to run these tests."
                   "I was involved with improving our teamcity build projects, with the aim of making them more consistent, and also faster."
                   "Was tasked with investigating docker and container management frameworks, with the aim of breaking our existing services down into microservices"
                   [:p"Created the " [:a {:href "https://github.com/sportingsolutions/ObjectDiffer"} "ObjectDiffer"] " and " [:a {:href "https://github.com/sportingsolutions/SS.GraylogApiHelpers"} "GraylogApiHelpers"] " open source projects."]
                   ])
    
    (history-card "Blinkbox" "/assets/BB.png" "May 2014" "April 2015" "http://www.blinkbox.com/"
                  ["Working in the \"admin\" department, creating web apps for internal use - e.g. asset management, video file ingestion, user management, etc."
                   "Mainly working on an angular SPA web app, with an ASP.NET web api 2 backend."
                   "Worked with build tools such as grunt, bower and npm, as well as testing frameworks such as karma and protractor"
                   "My team (for which I was lead developer) came second in the company hackathon."]
                  )

    (history-card "Globecast" "/assets/GC.jpg" "November 2013" "April 2014" "http://www.globecast.com/"
                  ["Most of my time was spent working on MVC 4/5 projects (both new and existing)"
                   "Designed and built new web apps (using MVC/AngularJS) to perform tasks such as comparing programme schedules, and performing QC on video files."
                   "Worked on an existing system for ingesting video files, processing them, and sending them to a 3rd party scheduling program. This system was composed of multiple C# console apps."
                   "Was put in charge of the purchase order system (written in MVC 3), which was used for assigning budgets, producing financial reports, and sending purchase orders. I was completely responsible for a complete overhaul of the budgeting system, which involved lots of back end work, writing sql to migrate the existing data, and using angularjs and D3 to create a page for editing/visualising the budget."
                   "Working with technologies such as Kendo UI, Angular JS, LESS, and D3 on the client side, and SignalR, PostSharp and Entity Framework on the server side."
                   "Performed several video file migrations from one storage system to another �V several hundred terabytes of data in total."
                   ])

    (history-card "CPL Software" "/assets/CPL.jpg" "December 2011" "November 2013" "http://www.cplsoftware.com/"
                  ["Mainly working on a C# winforms app for property factors, called RPM. This app had a variety of functions, including: producing invoices, calculating taxes, sending out letters/emails, and importing bank transactions."
                   [:p "1"[:sup "st"]"/2"[:sup "nd"]"/3"[:sup "rd"]" line support"]
                   "Writing SQL stored procedures, performing data migrations/fixes, and general database maintenance"
                   "Frequent use of Entity Framework and LINQ, using LINQKit"
                   "Maintaining and updating a web API written for WCF - this allowed consumers to perform the core functions of the winforms app."
                   "Worked on a web portal written in MVC 2 (involved use of jquery, ajax and css)"
                   "Worked on a prototype web app in MVC 4 (using technologies such as twitter bootstrap, angular js, and DevExpress MVC controls)"]
                  )

    (history-card "Redwood Technologies" "/assets/RW.png" "August 2011" "November 2011" "http://www.RedwoodTech.com"
                  ["First and second line support"
                   "Worked on the internal ticketing system (written in PHP/MySQL)"]
                  )
    ]
   ]
  )


