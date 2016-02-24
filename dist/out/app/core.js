// Compiled by ClojureScript 1.7.145 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('work_history.page');
goog.require('technologies.page');
goog.require('reagent.core');
goog.require('reagent_react_router.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('summary.page');
goog.require('material_ui.core');
cljs.core.enable_console_print_BANG_.call(null);
app.core.app_layout = (function app$core$app_layout(child){
var route_url = cljs.core.last.call(null,clojure.string.split.call(null,document.URL,/\//));
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"app"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zDepth","zDepth",1069399109),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"appbar row middle-xs",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(material_ui.core.Colors["indigo500"])], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.col-xs-12.col-md-8.center-xs.start-md","h2.col-xs-12.col-md-8.center-xs.start-md",-1501905463),"David Martin CV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-md-4 end-md center-xs middle-xs padded"], null),cljs.core.map.call(null,((function (route_url){
return (function (name){
var link = clojure.string.replace.call(null,clojure.string.lower_case.call(null,name),/\s/,"-");
var active = cljs.core._EQ_.call(null,route_url,link);
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_react_router.core.Link,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),link,new cljs.core.Keyword(null,"class","class",-2030961996),"padded",new cljs.core.Keyword(null,"key","key",-1516042587),link], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.RaisedButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),name,new cljs.core.Keyword(null,"primary","primary",817773892),active,new cljs.core.Keyword(null,"secondary","secondary",-669381460),!(active)], null)], null)], null));
});})(route_url))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Summary","Work History","Technologies"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_react_router.core.RouteHandler,child], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zDepth","zDepth",1069399109),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"footer center-xs",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(material_ui.core.Colors["indigo500"])], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.col-xs-12","p.col-xs-12",-1751122436),"I wrote this site with ClojureScript, Reagent, and Reagent-React-Router. It is hosted on github pages, all source code is on my github account"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.col-xs-12","p.col-xs-12",-1751122436),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/DaveWM/davewm.github.io"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.IconButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Site Source Code",new cljs.core.Keyword(null,"iconClassName","iconClassName",1821763512),"fa fa-github",new cljs.core.Keyword(null,"iconStyle","iconStyle",1185883564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null)], null)], null)], null)], null)], null));
});
app.core.current_theme = material_ui.core.ThemeManager.getMuiTheme(material_ui.core.LightRawTheme);
app.core.new_theme = material_ui.core.ThemeManager.modifyRawThemePalette(app.core.current_theme,{"primary1Color": (material_ui.core.Colors["indigo500"]), "primary2Color": (material_ui.core.Colors["indigo700"]), "primary3Color": (material_ui.core.Colors["lightBlack"]), "accent1Color": (material_ui.core.Colors["blueA200"]), "accent2Color": (material_ui.core.Colors["indigo100"]), "accent3Color": (material_ui.core.Colors["blue500"]), "textColor": (material_ui.core.Colors["indigo900"])});
app.core.app = cljs.core.with_meta.call(null,app.core.app_layout,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"child-context-types","child-context-types",1863743773),{"muiTheme": React.PropTypes.object},new cljs.core.Keyword(null,"get-child-context","get-child-context",-867424947),(function (this$){
return {"muiTheme": app.core.new_theme};
})], null));
app.core.not_found = (function app$core$not_found(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Route not found :("], null);
});
app.core.routes = reagent_react_router.core.defroutes.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),"/",app.core.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),"summary",summary.page.page], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),"work-history",work_history.page.page], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),"technologies",technologies.page.page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-found","not-found",-629079980),app.core.not_found], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redirect","redirect",-1975673286),"/","summary"], null)], null));
app.core.main = (function app$core$main(){
cljs.core.println.call(null,"main");

return reagent_react_router.core.run_router.call(null,document.getElementById("react-container"),app.core.routes);
});
goog.exportSymbol('app.core.main', app.core.main);
app.core.main.call(null);

//# sourceMappingURL=core.js.map