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
              :img "assets/snowboarding.jpg"}]})
