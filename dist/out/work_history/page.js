// Compiled by ClojureScript 1.7.145 {}
goog.provide('work_history.page');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core');
work_history.page.AppBar = reagent.core.adapt_react_class.call(null,(MaterialUI["AppBar"]));

work_history.page.Avatar = reagent.core.adapt_react_class.call(null,(MaterialUI["Avatar"]));

work_history.page.Card = reagent.core.adapt_react_class.call(null,(MaterialUI["Card"]));

work_history.page.CardActions = reagent.core.adapt_react_class.call(null,(MaterialUI["CardActions"]));

work_history.page.CardHeader = reagent.core.adapt_react_class.call(null,(MaterialUI["CardHeader"]));

work_history.page.CardMedia = reagent.core.adapt_react_class.call(null,(MaterialUI["CardMedia"]));

work_history.page.CardText = reagent.core.adapt_react_class.call(null,(MaterialUI["CardText"]));

work_history.page.CardTitle = reagent.core.adapt_react_class.call(null,(MaterialUI["CardTitle"]));

work_history.page.CircularProgress = reagent.core.adapt_react_class.call(null,(MaterialUI["CircularProgress"]));

work_history.page.FlatButton = reagent.core.adapt_react_class.call(null,(MaterialUI["FlatButton"]));

work_history.page.FontIcon = reagent.core.adapt_react_class.call(null,(MaterialUI["FontIcon"]));

work_history.page.GridList = reagent.core.adapt_react_class.call(null,(MaterialUI["GridList"]));

work_history.page.GridTile = reagent.core.adapt_react_class.call(null,(MaterialUI["GridTile"]));

work_history.page.IconButton = reagent.core.adapt_react_class.call(null,(MaterialUI["IconButton"]));

work_history.page.List = reagent.core.adapt_react_class.call(null,(MaterialUI["List"]));

work_history.page.ListItem = reagent.core.adapt_react_class.call(null,(MaterialUI["ListItem"]));

work_history.page.Paper = reagent.core.adapt_react_class.call(null,(MaterialUI["Paper"]));

work_history.page.RaisedButton = reagent.core.adapt_react_class.call(null,(MaterialUI["RaisedButton"]));

work_history.page.Tabs = reagent.core.adapt_react_class.call(null,(MaterialUI["Tabs"]));

work_history.page.Tab = reagent.core.adapt_react_class.call(null,(MaterialUI["Tab"]));

work_history.page.ThemeManager = ((MaterialUI["Styles"])["ThemeManager"]);

work_history.page.Colors = ((MaterialUI["Styles"])["Colors"]);

work_history.page.LightRawTheme = ((MaterialUI["Styles"])["LightRawTheme"]);
work_history.page.history_card = (function work_history$page$history_card(name,img_url,date_from,date_to,website_url,bullet_points){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_history.page.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-md-6 col-md-offset-3 work-history-card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_history.page.CardMedia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overlay","overlay",-139131598),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_history.page.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),name,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),[cljs.core.str(date_from),cljs.core.str(" - "),cljs.core.str(date_to)].join(''),new cljs.core.Keyword(null,"avatar","avatar",-1607499307),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_history.page.Avatar,cljs.core.first.call(null,name)], null))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),img_url], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_history.page.CardText,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (p1__24650_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),p1__24650_SHARP_], null));
}),bullet_points)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_history.page.CardActions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_history.page.FlatButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Go to Website",new cljs.core.Keyword(null,"linkButton","linkButton",-999060964),true,new cljs.core.Keyword(null,"href","href",-793805698),website_url], null)], null)], null)], null);
});
work_history.page.page = (function work_history$page$page(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),work_history.page.history_card.call(null,"Sporting Solutions","/dist/assets/SS.png","April 2015","Present","http://www.sportingsolutions.com",new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Working in a team responsible for receiving data from external feed providers, and passing it on to other teams via a message queue.","The system was mainly composed of 2 large C# console apps, which communicated using rabbitMQ. There were also a number of smaller console apps, an internal MVC website used to manage the feed data, and an asp.net REST api for use by other teams.","Used a variety of technologies to consume external feeds, such as TCP sockets, HTTP polling and IBM WebSphere","I was responsible maintaining an internal MVC website. I was also in charge of migrating this website to an angular SPA, which I built using ES6 + babel, angular 1.4, angular material, LESS and gulp. Currently in the prototype phase.","I did the vast majority of the work to migrate the logging in one application from an old, unmaintained framework to Graylog.","I was put in charge of re-writing a suite of acceptance tests written in specflow. I also set up a CI project to run these tests.","I was involved with improving our teamcity build projects, with the aim of making them more consistent, and also faster.","Was tasked with investigating docker and container management frameworks, with the aim of breaking our existing services down into microservices",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Created the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/sportingsolutions/ObjectDiffer"], null),"ObjectDiffer"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/sportingsolutions/SS.GraylogApiHelpers"], null),"GraylogApiHelpers"], null)," open source projects."], null)], null)),work_history.page.history_card.call(null,"Blinkbox","/dist/assets/BB.png","May 2014","April 2015","http://www.blinkbox.com/",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Working in the \"admin\" department, creating web apps for internal use - e.g. asset management, video file ingestion, user management, etc.","Mainly working on an angular SPA web app, with an ASP.NET web api 2 backend.","Worked with build tools such as grunt, bower and npm, as well as testing frameworks such as karma and protractor","My team (for which I was lead developer) came second in the company hackathon."], null)),work_history.page.history_card.call(null,"Globecast","/dist/assets/GC.jpg","November 2013","April 2014","http://www.globecast.com/",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Most of my time was spent working on MVC 4/5 projects (both new and existing)","Designed and built new web apps (using MVC/AngularJS) to perform tasks such as comparing programme schedules, and performing QC on video files.","Worked on an existing system for ingesting video files, processing them, and sending them to a 3rd party scheduling program. This system was composed of multiple C# console apps.","Was put in charge of the purchase order system (written in MVC 3), which was used for assigning budgets, producing financial reports, and sending purchase orders. I was completely responsible for a complete overhaul of the budgeting system, which involved lots of back end work, writing sql to migrate the existing data, and using angularjs and D3 to create a page for editing/visualising the budget.","Working with technologies such as Kendo UI, Angular JS, LESS, and D3 on the client side, and SignalR, PostSharp and Entity Framework on the server side.","Performed several video file migrations from one storage system to another \uFFFDV several hundred terabytes of data in total."], null)),work_history.page.history_card.call(null,"CPL Software","/dist/assets/CPL.jpg","December 2011","November 2013","http://www.cplsoftware.com/",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mainly working on a C# winforms app for property factors, called RPM. This app had a variety of functions, including: producing invoices, calculating taxes, sending out letters/emails, and importing bank transactions.",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"1",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"st"], null),"/2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"nd"], null),"/3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"rd"], null)," line support"], null),"Writing SQL stored procedures, performing data migrations/fixes, and general database maintenance","Frequent use of Entity Framework and LINQ, using LINQKit","Maintaining and updating a web API written for WCF - this allowed consumers to perform the core functions of the winforms app.","Worked on a web portal written in MVC 2 (involved use of jquery, ajax and css)","Worked on a prototype web app in MVC 4 (using technologies such as twitter bootstrap, angular js, and DevExpress MVC controls)"], null)),work_history.page.history_card.call(null,"Redwood Technologies","/dist/assets/RW.png","August 2011","November 2011","http://www.RedwoodTech.com",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["First and second line support","Worked on the internal ticketing system (written in PHP/MySQL)"], null))], null);
});

//# sourceMappingURL=page.js.map