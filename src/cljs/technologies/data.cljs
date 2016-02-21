(ns technologies.data)

(def data
  [{:name "C#" :experience 4 :type :language :img "https://raw.githubusercontent.com/sschmid/Entitas-CSharp/develop/Readme/Images/csharp.png"}
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
   {:name "Django" :experience 0.5 :type :BE :img "http://www.unixstickers.com/image/cache/data/stickers/django/django_badge.sh-600x600.png"}
   {:name "Express" :experience 0.75 :type :BE :img "https://www.djangoproject.com/s/img/logos/django-logo-negative.png"}
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
   {:name "Google Cloud Datastore" :experience 0.5 :type :DataStore :img "http://insidebigdata.com/wp-content/uploads/2013/09/datastore-blue-512-rgb.png"}
   {:name "Elastic" :experience 0.5 :type :DataStore :img "https://www.elastic.co/static/img/elastic-logo-200.png"}
   {:name "Firebase" :experience 0.5 :type :DataStore :img "https://mimming.com/presos/internet-of-nodebots/img/firebase-icon.png"}

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
   ])
