// Compiled by ClojureScript 1.7.145 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('work_history.page');
goog.require('ajax.core');
goog.require('reagent_material_ui.core');
goog.require('bidi.bidi');
goog.require('technologies.page');
goog.require('reagent.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('summary.page');
goog.require('pushy.core');
cljs.core.enable_console_print_BANG_.call(null);
app.core.api_url = "https://cv-api.herokuapp.com/api/cv";
app.core.page = reagent.core.atom.call(null,(1));
app.core.data = reagent.core.atom.call(null,null);
app.core.not_found = (function app$core$not_found(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Route not found :("], null);
});
app.core.main_pages = new cljs.core.PersistentArrayMap(null, 3, ["summary",summary.page.page,"work-history",work_history.page.page,"technologies",technologies.page.page], null);
app.core.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.merge.call(null,app.core.main_pages,new cljs.core.PersistentArrayMap(null, 2, ["",summary.page.page,true,app.core.not_found], null))], null);
app.core.set_page_BANG_ = (function app$core$set_page_BANG_(match){
return cljs.core.reset_BANG_.call(null,app.core.page,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(match));
});
app.core.history = pushy.core.pushy.call(null,app.core.set_page_BANG_,(function (p1__26659_SHARP_){
return bidi.bidi.match_route.call(null,app.core.routes,p1__26659_SHARP_);
}));
pushy.core.start_BANG_.call(null,app.core.history);
app.core.lightTheme = cljs.core.js__GT_clj.call(null,reagent_material_ui.core.lightBaseTheme);
app.core.theme = reagent_material_ui.core.getMuiTheme.call(null,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,app.core.lightTheme,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"primary1Color","primary1Color",-897717479),(reagent_material_ui.core.colors["indigo500"]),new cljs.core.Keyword(null,"primary2Color","primary2Color",-190807477),(reagent_material_ui.core.colors["indigo700"]),new cljs.core.Keyword(null,"primary3Color","primary3Color",379043704),(reagent_material_ui.core.colors["lightBlack"]),new cljs.core.Keyword(null,"accent1Color","accent1Color",-24756672),(reagent_material_ui.core.colors["blueA200"]),new cljs.core.Keyword(null,"accent2Color","accent2Color",-1340858559),(reagent_material_ui.core.colors["indigo100"]),new cljs.core.Keyword(null,"accent3Color","accent3Color",267509120),(reagent_material_ui.core.colors["blue500"]),new cljs.core.Keyword(null,"textColor","textColor",-680658062),(reagent_material_ui.core.colors["indigo900"])], null)], null))));
cljs.core.print.call(null,app.core.theme);
app.core.app = (function app$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.MuiThemeProvider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"muiTheme","muiTheme",-963010614),app.core.theme], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"app"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zDepth","zDepth",1069399109),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"appbar row middle-xs",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(reagent_material_ui.core.colors["indigo500"])], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.col-xs-12.col-md-8.center-xs.start-md","h2.col-xs-12.col-md-8.center-xs.start-md",-1501905463),"David Martin CV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-md-4 end-md center-xs middle-xs padded"], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__26662){
var vec__26663 = p__26662;
var route_name = cljs.core.nth.call(null,vec__26663,(0),null);
var page_comp = cljs.core.nth.call(null,vec__26663,(1),null);
var display = clojure.string.join.call(null," ",cljs.core.map.call(null,clojure.string.capitalize,clojure.string.split.call(null,route_name,/-/)));
var active = cljs.core._EQ_.call(null,page_comp,cljs.core.deref.call(null,app.core.page));
var link = bidi.bidi.path_for.call(null,app.core.routes,page_comp);
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.padded","span.padded",1053404710),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),route_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.RaisedButton,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),display,new cljs.core.Keyword(null,"primary","primary",817773892),!(active),new cljs.core.Keyword(null,"secondary","secondary",-669381460),active,new cljs.core.Keyword(null,"linkButton","linkButton",-999060964),true,new cljs.core.Keyword(null,"href","href",-793805698),link], null)], null)], null));
}),app.core.main_pages))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),(cljs.core.truth_(cljs.core.deref.call(null,app.core.data))?cljs.core.deref.call(null,app.core.page).call(null,cljs.core.deref.call(null,app.core.data)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CircularProgress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"centred card-loading-icon",new cljs.core.Keyword(null,"mode","mode",654403691),"indeterminate"], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zDepth","zDepth",1069399109),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"footer center-xs",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(reagent_material_ui.core.colors["indigo500"]),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.col-xs-12","p.col-xs-12",-1751122436),"I wrote this site with ClojureScript, Reagent, and Bidi. It is hosted on github pages, all source code is on GitHub"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.col-xs-12","p.col-xs-12",-1751122436),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/DaveWM/davewm.github.io"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.IconButton,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"iconClassName","iconClassName",1821763512),"fa fa-github",new cljs.core.Keyword(null,"iconStyle","iconStyle",1185883564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null)], null)], null)], null)], null)], null)], null);
});
app.core.load_data = (function app$core$load_data(){
return ajax.core.GET.call(null,app.core.api_url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__26664_SHARP_){
return cljs.core.reset_BANG_.call(null,app.core.data,p1__26664_SHARP_);
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
app.core.main = (function app$core$main(){
cljs.core.print.call(null,"rendering");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.app], null),document.getElementById("react-container"));
});
goog.exportSymbol('app.core.main', app.core.main);
app.core.main.call(null);

app.core.load_data.call(null);

//# sourceMappingURL=core.js.map