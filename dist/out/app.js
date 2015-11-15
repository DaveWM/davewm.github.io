// Compiled by ClojureScript 1.7.145 {}
goog.provide('app');
goog.require('cljs.core');
goog.require('work_history.page');
goog.require('reagent.core');
goog.require('reagent_react_router.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('summary.page');
cljs.core.enable_console_print_BANG_.call(null);
app.AppBar = reagent.core.adapt_react_class.call(null,(MaterialUI["AppBar"]));

app.Avatar = reagent.core.adapt_react_class.call(null,(MaterialUI["Avatar"]));

app.Card = reagent.core.adapt_react_class.call(null,(MaterialUI["Card"]));

app.CardActions = reagent.core.adapt_react_class.call(null,(MaterialUI["CardActions"]));

app.CardHeader = reagent.core.adapt_react_class.call(null,(MaterialUI["CardHeader"]));

app.CardMedia = reagent.core.adapt_react_class.call(null,(MaterialUI["CardMedia"]));

app.CardText = reagent.core.adapt_react_class.call(null,(MaterialUI["CardText"]));

app.CardTitle = reagent.core.adapt_react_class.call(null,(MaterialUI["CardTitle"]));

app.CircularProgress = reagent.core.adapt_react_class.call(null,(MaterialUI["CircularProgress"]));

app.FlatButton = reagent.core.adapt_react_class.call(null,(MaterialUI["FlatButton"]));

app.FontIcon = reagent.core.adapt_react_class.call(null,(MaterialUI["FontIcon"]));

app.GridList = reagent.core.adapt_react_class.call(null,(MaterialUI["GridList"]));

app.GridTile = reagent.core.adapt_react_class.call(null,(MaterialUI["GridTile"]));

app.IconButton = reagent.core.adapt_react_class.call(null,(MaterialUI["IconButton"]));

app.List = reagent.core.adapt_react_class.call(null,(MaterialUI["List"]));

app.ListItem = reagent.core.adapt_react_class.call(null,(MaterialUI["ListItem"]));

app.Paper = reagent.core.adapt_react_class.call(null,(MaterialUI["Paper"]));

app.RaisedButton = reagent.core.adapt_react_class.call(null,(MaterialUI["RaisedButton"]));

app.Tabs = reagent.core.adapt_react_class.call(null,(MaterialUI["Tabs"]));

app.Tab = reagent.core.adapt_react_class.call(null,(MaterialUI["Tab"]));

app.ThemeManager = ((MaterialUI["Styles"])["ThemeManager"]);

app.Colors = ((MaterialUI["Styles"])["Colors"]);

app.LightRawTheme = ((MaterialUI["Styles"])["LightRawTheme"]);
app.app_layout = (function app$app_layout(child){
var route_url = cljs.core.last.call(null,clojure.string.split.call(null,document.URL,/\//));
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"app"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.Paper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zDepth","zDepth",1069399109),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"appbar row middle-xs",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(app.Colors["indigo500"])], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.col-xs-12.col-md-8","h2.col-xs-12.col-md-8",-2092864894),"David Martin CV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-md-4 end-md center-xs middle-xs padded"], null),cljs.core.map.call(null,((function (route_url){
return (function (name){
var link = clojure.string.replace.call(null,clojure.string.lower_case.call(null,name),/\s/,"-");
var active = cljs.core._EQ_.call(null,route_url,link);
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_react_router.core.Link,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),link,new cljs.core.Keyword(null,"class","class",-2030961996),"padded"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.RaisedButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),name,new cljs.core.Keyword(null,"primary","primary",817773892),active,new cljs.core.Keyword(null,"secondary","secondary",-669381460),!(active)], null)], null)], null));
});})(route_url))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Summary","Work History"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_react_router.core.RouteHandler,child], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.Paper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zDepth","zDepth",1069399109),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"footer center-xs",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(app.Colors["indigo500"])], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.col-xs-12","p.col-xs-12",-1751122436),"I wrote this site with ClojureScript, Reagent, and Reagent-React-Router. It is hosted on github pages, all source code is on my github account"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.col-xs-12","p.col-xs-12",-1751122436),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/DaveWM/davewm.github.io"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.IconButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Site Source Code",new cljs.core.Keyword(null,"iconClassName","iconClassName",1821763512),"fa fa-github",new cljs.core.Keyword(null,"iconStyle","iconStyle",1185883564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null)], null)], null)], null)], null)], null));
});
app.current_theme = app.ThemeManager.getMuiTheme(app.LightRawTheme);
app.new_theme = app.ThemeManager.modifyRawThemePalette(app.current_theme,{"primary1Color": (app.Colors["indigo500"]), "primary2Color": (app.Colors["indigo700"]), "primary3Color": (app.Colors["lightBlack"]), "accent1Color": (app.Colors["blueA200"]), "accent2Color": (app.Colors["indigo100"]), "accent3Color": (app.Colors["blue500"]), "textColor": (app.Colors["indigo900"])});
app.app = cljs.core.with_meta.call(null,app.app_layout,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"child-context-types","child-context-types",1863743773),{"muiTheme": React.PropTypes.object},new cljs.core.Keyword(null,"get-child-context","get-child-context",-867424947),(function (this$){
return {"muiTheme": app.new_theme};
})], null));
app.not_found = (function app$not_found(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Route not found :("], null);
});
app.routes = reagent_react_router.core.defroutes.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),"/",app.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),"summary",summary.page.page], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),"work-history",work_history.page.page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-found","not-found",-629079980),app.not_found], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-route","default-route",-1491022475),summary.page.page], null)], null));
reagent_react_router.core.run_router.call(null,document.body,app.routes);

//# sourceMappingURL=app.js.map