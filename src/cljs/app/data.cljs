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
                                   "Worked on the internal ticketing system (written in PHP/MySQL)"]}]
   :technologies [{:name "C#" :experience 4 :type :language :img "https://raw.githubusercontent.com/sschmid/Entitas-CSharp/develop/Readme/Images/csharp.png"}
   {:name "SQL" :experience 3.5 :type :language :img "http://cdn.warer.com/media/Microsoft-SQL-Server-2008-Express-logo.png"}
   {:name "Javascript" :experience 2.5 :type :language :img "https://www.codementor.io/assets/page_img/learn-javascript.png"}
   {:name "HTML 5" :experience 2.5 :type :language :img "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1000px-HTML5_logo_and_wordmark.svg.png"}
   {:name "CSS3" :experience 2.5 :type :language :img "http://ohdoylerules.com/content/images/css3.svg"}
   {:name "SCSS" :experience 0.5 :type :language :img "http://codezyn.com/wassup/wp-content/uploads/2014/10/317889.png"}
   {:name "LESS" :experience 2.5 :type :language :img "http://lesscss.org/public/img/logo.png"}
   {:name "Clojure" :experience 0.75 :type :language :img "https://pupeno.files.wordpress.com/2015/08/clojure-logo.png"}
   {:name "TypeScript" :experience 0.25 :type :language :img "http://blog.teamtreehouse.com/wp-content/uploads/2015/05/87a5a0fdc86455c3f94b0b0eebfdb1b9_400x400.png"}
   {:name "Python" :experience 0.5 :type :language :img "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"}

   {:name "AngularJS" :experience 2.5 :type :FE :img "https://avatars0.githubusercontent.com/u/139426?v=3&s=400"}
   {:name "Angular 2" :experience 0.25 :type :FE :img "http://2.bp.blogspot.com/-PPfS5cNbvGQ/VjnIYSaAB2I/AAAAAAAABHo/RunP4lKpdCM/s1600/Angular-2.png"}
   {:name "Material Design" :experience 1 :type :FE :img "http://i.imgur.com/AMf9X7E.jpg"}
   {:name "Reagent" :experience 0.5 :type :FE :img "https://avatars1.githubusercontent.com/u/9254615?v=3&s=400"}
   {:name "Bootstrap" :experience 2.5 :type :FE :img "http://dannykapp.com/wp-content/uploads/2015/07/bootstrap02.png"}
   {:name "jQuery" :experience 1.5 :type :FE :img "http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif"}
   {:name "React" :experience 0.5 :type :FE :img "http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png"}
   {:name "Redux" :experience 0.5 :type :FE :img "https://react-redux.herokuapp.com/logo.jpg"}
   {:name "D3" :experience 0.5 :type :FE :img "https://portalvhds06sf0zbnycwtg.blob.core.windows.net/uploads/D3.js_product_img_789405957_d4.png"}
   {:name "RxJS" :experience 0.5 :type :FE :img "https://avatars3.githubusercontent.com/u/984368?v=3&s=400"}
   {:name "Backbone" :experience 0.5 :type :FE :img "http://www.codeforest.net/wp-content/uploads/2013/05/backbone.png"}

   {:name "ASP.NET MVC" :experience 3 :type :BE :img "http://www.asphostdirectory.com/Images/lg_aspmvc5.png"}
   {:name "ASP.NET Web API" :experience 2 :type :BE :img "http://eduardopires.net.br/wp-content/uploads/2013/07/ASP.Net-Web-API.png"}
   {:name "WCF" :experience 3 :type :BE :img "http://gallery.binarybits.net/Images/Blog/Programming/Mixed%20WCF%20Service/WCF_logo.png"}
   {:name "Entity Framework" :experience 2.5 :type :BE :img "http://blog.falafel.com/wp-content/uploads/2014/07/entity_image.png"}
   {:name "Express" :experience 0.75 :type :BE :img "http://mean.io/system/assets/img/logos/express.png"}
   {:name "Django" :experience 0.5 :type :BE :img "https://www.djangoproject.com/s/img/logos/django-logo-negative.png"}
   {:name "Socket.io" :experience 0.3 :type :BE :img "https://www.pubnub.com/blog/wp-content/uploads/2014/07/SOCKETIOICON.gif"}
   {:name "SignalR" :experience 0.75 :type :BE :img "https://avatars3.githubusercontent.com/u/931666?v=3&s=200"}

   {:name "NPM" :experience 2 :type :tool :img "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2000px-Npm-logo.svg.png"}
   {:name "Bower" :experience 2 :type :tool :img "http://bower.io/img/bower-logo.png"}
   {:name "NuGet" :experience 3 :type :tool :img "http://nuproj.net/images/NuGet.png"}
   {:name "Grunt" :experience 2 :type :tool :img "http://vermilion1.github.io/presentations/grunt/images/grunt-logo.png"}
   {:name "Gulp" :experience 1.25 :type :tool :img "https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"}
   {:name "Babel" :experience 1 :type :tool :img "https://cms-assets.tutsplus.com/uploads/users/71/courses/608/preview_image/babel-1.png"}
   {:name "Browserify" :experience 1 :type :tool :img "https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/1647/large/1405586570/browserify-2-hexagon-sticker.png"}
   {:name "Webpack" :experience 0.25 :type :tool :img "http://reapp.io/images/webpack.svg"}

   {:name "SQL Server" :experience 3.5 :type :DataStore :img "http://cdn.warer.com/media/Microsoft-SQL-Server-2008-Express-logo.png"}
   {:name "MongoDB" :experience 0.75 :type :DataStore :img "http://www.theodo.fr/uploads/blog//2015/11/mongodb.png"}
   {:name "Google Cloud Datastore" :experience 0.5 :type :DataStore :img "http://www.dotmodus.com/assets/images/clouddatastore.jpeg"}
   {:name "Elastic" :experience 0.5 :type :DataStore :img "https://avatars0.githubusercontent.com/u/6764390?v=3&s=400"}
   {:name "Firebase" :experience 0.5 :type :DataStore :img "https://lh3.googleusercontent.com/-whXBCDVxIto/Vz2Rsyz-UjI/AAAAAAAAiJc/UjvR-M2b9tY5SyKFkDY6Q_MbusEINRXkQ/w1024-h1024/Firebase_16-logo.png"}

   {:name "Karma" :experience 2 :type :Testing :img "https://avatars1.githubusercontent.com/u/3284117?v=3&s=400"}
   {:name "Protractor" :experience 1.5 :type :Testing :img "http://coreboarder.com/blog/wp-content/uploads/2015/07/protractor-logo.png"}
   {:name "NUnit" :experience 1.5 :type :Testing :img "https://www.jetbrains.com/teamcity/whatsnew/screenshots/91/logo-nunit.png"}
   {:name "Specflow" :experience 1 :type :Testing :img "http://techtalk.github.io/SpecFlow/specflow.png"}
   {:name "NSubstitute" :experience 1 :type :Testing :img "http://nsubstitute.github.io/images/nsubstitute-100x100.png"}
   {:name "Moq" :experience 1 :type :Testing :img "https://avatars3.githubusercontent.com/u/1434934?v=3&s=400"}

   {:name "Docker" :experience 0.75 :type :Misc :img "http://blog.xebialabs.com/wp-content/uploads/2015/09/docker.png"}
   {:name "Graylog" :experience 0.75 :type :Misc :img "https://www.graylog.org/assets/logo-graylog-6ccfb3d4f7bfd0795c80bb616719f7d2f5151283f25c62aa0a6222994af2abeb.png"}
   {:name "RabbitMQ" :experience 0.75 :type :Misc :img "https://www.rabbitmq.com/img/rabbitmq_logo_strap.png"}

   {:name "Azure" :experience 3.5 :type :Cloud :img "http://www.3chillies.co.uk/~/media/images/services/azure/azure_migrate-to-azure_migrate-to-azure.png?la=en"}
   {:name "AWS" :experience 0.5 :type :Cloud :img "http://static.asish.com.au/wp-content/uploads/2015/06/aws-logo-square-02.png"}
   {:name "Google Cloud Platform" :experience 0.75 :type :Cloud :img "http://www.averesystems.com/cmsFiles/relatedImages/logo_lockup_cloud_platform_icon_vertical.png"}
   {:name "Rackspace" :experience 0.5 :type :Cloud :img "https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/icons/og-image.png"}
   ]})
