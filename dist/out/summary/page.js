// Compiled by ClojureScript 1.7.145 {}
goog.provide('summary.page');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('summary.github');
goog.require('cljs.core');
goog.require('summary.codewars');
goog.require('material_ui.core');
summary.page.css_transition_group = reagent.core.adapt_react_class.call(null,React.addons.CSSTransitionGroup);
summary.page.open_in_new_tab = (function summary$page$open_in_new_tab(url){
return window.open(url);
});
summary.page.contact_info = (function summary$page$contact_info(){
var info_part = (function (icon_type,icon_name,value_elem){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row middle-xs around-xs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("col-xs-2 "),cljs.core.str(icon_type)].join('')], null),icon_name], null),((cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,value_elem,(1))))?cljs.core.update_in.call(null,value_elem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"class","class",-2030961996)], null),(function (p1__22591_SHARP_){
return [cljs.core.str(p1__22591_SHARP_),cljs.core.str(" col-xs-10")].join('');
})):(function (){var vec__22593 = value_elem;
var tag = cljs.core.nth.call(null,vec__22593,(0),null);
var content = cljs.core.nthnext.call(null,vec__22593,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-10"], null),content], null);
})())], null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardMedia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overlay","overlay",-139131598),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardTitle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Contact Info"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/me.jpg"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardText,info_part.call(null,"material-icons","email",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:dwmartin41@gmail.com"], null),"dwmartin41@gmail.com"], null)),info_part.call(null,"material-icons","phone",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"07588361916"], null)),info_part.call(null,"fa fa-github",null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/DaveWM"], null),"@DaveWM"], null)),info_part.call(null,"fa fa-linkedin-square",null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.linkedin.com/in/davewm"], null),"David Martin"], null))], null)], null);
});
summary.page.summary_card = (function summary$page$summary_card(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Summary",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"A bit about me",new cljs.core.Keyword(null,"avatar","avatar",-1607499307),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Avatar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"material-icons"], null),"mode_edit"], null))], null)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardText,"I am a senior full stack web developer with a strong mathematical background, and 4 years' programming experience across a variety of industries, primarily using C# with ASP.NET on the back end and ES6/AngularJS on the front end. I also have experience with designing/architecting systems, setting up continuous integration, and performing deployments.",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"Front End"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),"My current preferred front end tools/frameworks are angularjs, angular material, browserify, npm, gulp, babel, karma and protractor. I am currently learning clojurescript and react."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"Back End"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),"On the back end, I am most comfortable using ASP.NET Web API 2, with entity framework. I usually write tests in Nunit or specflow."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"Scripting"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),"I have a small amount of experience writing scripts, in nodejs and F#."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"Open Source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),"I have created and contributed to a number of open source projects - see my github account for details."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"Cloud"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),"I have used PAAS and IAAS services on various cloud platforms, such as AWS, azure, openstack and rackspace."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"Older Technologies"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),"I have previous experience with microsoft technologies like winforms, WPF, and WCF."], null)], null)], null)], null);
});
summary.page.education_card = (function summary$page$education_card(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardMedia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overlay","overlay",-139131598),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardTitle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Education"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/liv_uni_alt.jpg"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardText,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"education-text"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"First Class BSc in Physics from the University of Liverpool",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"81% average in exams, lab work and coursework"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"3rd year project involves data mining/signal analysis using C++ and linux"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Awarded Physics Department Attainment Scholarship, and Wynn Evans Memorial Prize (awarded to top sudent in BSc physics program)"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"3 A's at A-Level in Physics, Chemistry and Maths",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Awarded Wynn Williams Memorial Prize for Astrophysics"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"11 GCSEs"], null)], null)], null)], null);
});
summary.page.hobbies_card = (function summary$page$hobbies_card(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"My Hobbies",new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"avatar","avatar",-1607499307),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Avatar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"fa fa-thumbs-o-up"], null)], null))], null)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.GridList,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(2),new cljs.core.Keyword(null,"cellHeight","cellHeight",1637063844),(180)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.GridTile,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(2),new cljs.core.Keyword(null,"title","title",636505583),"Motorsport",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"I Race in the Track Attack MR2 Series",new cljs.core.Keyword(null,"rootClass","rootClass",845667327),"tile",new cljs.core.Keyword(null,"actionIcon","actionIcon",576396863),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.IconButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"iconClassName","iconClassName",1821763512),"fa fa-youtube-play",new cljs.core.Keyword(null,"iconStyle","iconStyle",1185883564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#e62117"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return summary.page.open_in_new_tab.call(null,"https://www.youtube.com/user/dave12347589/videos");
})], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/racing.jpg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.GridTile,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(1),new cljs.core.Keyword(null,"title","title",636505583),"Reading",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"I'm a big fan of sci-fi books",new cljs.core.Keyword(null,"titlePosition","titlePosition",1841574693),"top",new cljs.core.Keyword(null,"rootClass","rootClass",845667327),"tile"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/hyperion.jpg"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.GridTile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(1),new cljs.core.Keyword(null,"title","title",636505583),"Snowboarding",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"I enjoy snowboarding during the winter",new cljs.core.Keyword(null,"rootClass","rootClass",845667327),"tile"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/snowboarding.jpg"], null)], null)], null)], null)], null);
});
summary.page.page = (function summary$page$page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.middle-xs","div.row.middle-xs",132651383),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.css_transition_group,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"card",new cljs.core.Keyword(null,"transition-appear","transition-appear",649411345),true,new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-md-2 card-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.contact_info], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.css_transition_group,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"card",new cljs.core.Keyword(null,"transition-appear","transition-appear",649411345),true,new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-md-10 card-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.summary_card], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.css_transition_group,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"card",new cljs.core.Keyword(null,"transition-appear","transition-appear",649411345),true,new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-md-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.github.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),"DaveWM"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.hobbies_card], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.css_transition_group,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"card",new cljs.core.Keyword(null,"transition-appear","transition-appear",649411345),true,new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-md-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.education_card], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.codewars.card], null)], null)], null)], null);
});

//# sourceMappingURL=page.js.map