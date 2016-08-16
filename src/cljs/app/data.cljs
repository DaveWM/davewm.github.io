(ns app.data
  (:require [cljs-time.core :refer [date-time]]))

(def data
  {:personal {:email "dwmartin41@gmail.com"
              :phone "07588361916"
              :github-user "DaveWM"
              :linkedin-url "https://www.linkedin.com/in/davewm"
              :codewars-user "DaveWM"}
   :summary "I am a senior front end web developer with a strong mathematical background, and 4.5 years' programming experience across a variety of industries. I also have experience with back end programming in ASP.NET MVC/Web API and Django/[Djangae](https://potatolondon.github.io/djangae/), designing/architecting systems, and setting up continuous integration.
* On the front end, I have extensive experience with angularjs, angular material, browserify, npm, gulp, babel, karma and protractor. In my personal projects, I am currently using clojurescript and reagent. I have also used react, redux and RxJS.
* On the back end, I have 2 years’ experience with ASP.NET (MVC and Web API), entity framework, and testing frameworks Nunit and specflow. I also have a small amount of experience with django (running on google appengine using djangae), ring, and sente.
* I have a small amount of experience writing scripts, in nodejs, bash and F#.
* I have created and contributed to a number of open source projects – see my github account for details.
* I have used PAAS and IAAS services on various cloud platforms, such as Google App Engine, AWS, Azure, openstack and rackspace.
* I have previous experience with microsoft technologies like winforms, WPF, and WCF."
   :education [{:from (date-time 2008 9 1)
                :to (date-time 2011 7 1)
                :name "University of Liverpool"
                :highlights ["BSc in Physics, 1st Class Honours."
                             "81% average in exams, lab work and coursework."
                             "3rd year project involves data mining/signal analysis using C++ and linux."
                             "Awarded Physics Department Attainment Scholarship, and Wynn Evans Memorial Prize (awarded to top sudent in BSc physics program)"]}
               {:from (date-time 2001 9 1)
                :to (date-time 2008 6 1)
                :name "Calday Grange Grammar School"
                :highlights ["3 As at A level (Maths, Physics, and Chemistry)"
                             "Awarded Wynn Williams Memorial Prize for Astrophysics"
                             "11 GCSEs"]}]
   :hobbies [{:title "Motorsport"
              :description "I Race in the Track Attack MR2 Series"
              :img "assets/racing.jpg"}
             {:title "Reading"
              :description "I'm a big fan of sci-fi books"
              :img "assets/hyperion.jpg"}
             {:title "Snowboarding"
              :description "I enjoy snowboarding during the winter"
              :img "assets/snowboarding.jpg"}]
   :work-history [{:title "Potato"
                   :img "assets/P.png"
                   :from (date-time 2015 11 1)
                   :to nil
                   :url  "https://p.ota.to/"
                   :bullet-points ["Developing web applications for clients such as Google and Nest."
                                   "Deployed apps to google app engine."
                                   "Working on an internal web app, using ES6, react and redux. I added tests using mocha, chai and sinon."]}
                  {:title "Sporting Solutions"
                   :img "assets/SS.png"
                   :from (date-time 2015 4 1)
                   :to (date-time 2015 11 1)
                   :url "http://www.sportingsolutions.com"
                   :bullet-points ["Working in a team responsible for receiving data from external feed providers, and passing it on to other teams via a message queue."
                                   "The system was mainly composed of 2 large C# console apps, which communicated using rabbitMQ. There were also a number of smaller console apps, an internal MVC website used to manage the feed data, and an asp.net REST api for use by other teams."
                                   "Used a variety of technologies to consume external feeds, such as TCP sockets, HTTP polling and IBM WebSphere"
                                   "I was responsible maintaining an internal MVC website. I was also in charge of migrating this website to an angular SPA, which I built using ES6 + babel, angular 1.4, angular material, LESS and gulp. Currently in the prototype phase."
                                   "I did the vast majority of the work to migrate the logging in one application from an old, unmaintained framework to Graylog."
                                   "I was put in charge of re-writing a suite of acceptance tests written in specflow. I also set up a CI project to run these tests."
                                   "I was involved with improving our teamcity build projects, with the aim of making them more consistent, and also faster."
                                   "Was tasked with investigating docker and container management frameworks, with the aim of breaking our existing services down into microservices"
                                   "Created the [ObjectDiffer](https://github.com/sportingsolutions/ObjectDiffer) and [GraylogApiHelpers](https://github.com/sportingsolutions/SS.GraylogApiHelpers) open source projects."
                                   ]}
                  {:title "Blinkbox"
                   :img "assets/BB.png"
                   :from (date-time 2014 5 1)
                   :to (date-time 2015 4 1)
                   :url "http://www.blinkbox.com/"
                   :bullet-points ["Working in the \"admin\" department, creating web apps for internal use - e.g. asset management, video file ingestion, user management, etc."
                                   "Mainly working on an angular SPA web app, with an ASP.NET Web Api 2 backend."
                                   "Worked with build tools such as grunt, bower and npm, as well as testing frameworks such as karma and protractor"
                                   "My team (for which I was lead developer) came second in the company hackathon."]}
                  {:title "Globecast"
                   :img "assets/GC.jpg"
                   :from (date-time 2013 11 1)
                   :to (date-time 2014 4 1)
                   :url "http://www.globecast.com/"
                   :bullet-points ["Most of my time was spent working on MVC 4/5 projects (both new and existing)"
                                   "Designed and built new web apps (using MVC/AngularJS) to perform tasks such as comparing programme schedules, and performing QC on video files."
                                   "Worked on an existing system for ingesting video files, processing them, and sending them to a 3rd party scheduling program. This system was composed of multiple C# console apps."
                                   "Was put in charge of the purchase order system (written in MVC 3), which was used for assigning budgets, producing financial reports, and sending purchase orders. I was completely responsible for a complete overhaul of the budgeting system, which involved lots of back end work, writing sql to migrate the existing data, and using angularjs and D3 to create a page for editing/visualising the budget."
                                   "Working with technologies such as Kendo UI, Angular JS, LESS, and D3 on the client side, and SignalR, PostSharp and Entity Framework on the server side."
                                   "Performed several video file migrations from one storage system to another ¡V several hundred terabytes of data in total."
                                   ]}
                  {:title "CPL Software"
                   :img "assets/CPL.jpg"
                   :from (date-time 2011 12 1)
                   :to (date-time 2013 11 1)
                   :url "http://www.cplsoftware.com/"
                   :bullet-points ["Mainly working on a C# winforms app for property factors, called RPM. This app had a variety of functions, including: producing invoices, calculating taxes, sending out letters/emails, and importing bank transactions."
                                   "1st, 2nd and 3rd line support"
                                   "Writing SQL stored procedures, performing data migrations/fixes, and general database maintenance"
                                   "Frequent use of Entity Framework and LINQ, using LINQKit"
                                   "Maintaining and updating a web API written for WCF - this allowed consumers to perform the core functions of the winforms app."
                                   "Worked on a web portal written in MVC 2 (involved use of jquery, ajax and css)"
                                   "Worked on a prototype web app in MVC 4 (using technologies such as twitter bootstrap, angular js, and DevExpress MVC controls)"]}
                  {:title "Redwood Technologies"
                   :img "assets/RW.png"
                   :from (date-time 2011 8 1)
                   :to (date-time 2011 11 1)
                   :url "http://www.RedwoodTech.com"
                   :bullet-points ["First and second line support"
                                   "Worked on the internal ticketing system (written in PHP/MySQL)"]}]})
