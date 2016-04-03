// Compiled by ClojureScript 1.7.145 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('work_history.page');
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
app.core.page = reagent.core.atom.call(null,(1));
app.core.not_found = (function app$core$not_found(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Route not found :("], null);
});
app.core.main_pages = new cljs.core.PersistentArrayMap(null, 3, ["summary",summary.page.page,"work-history",work_history.page.page,"technologies",technologies.page.page], null);
app.core.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.merge.call(null,app.core.main_pages,new cljs.core.PersistentArrayMap(null, 2, ["",summary.page.page,true,app.core.not_found], null))], null);
app.core.set_page_BANG_ = (function app$core$set_page_BANG_(match){
return cljs.core.reset_BANG_.call(null,app.core.page,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(match));
});
app.core.history = pushy.core.pushy.call(null,app.core.set_page_BANG_,(function (p1__23665_SHARP_){
return bidi.bidi.match_route.call(null,app.core.routes,p1__23665_SHARP_);
}));
pushy.core.start_BANG_.call(null,app.core.history);
app.core.app_layout = (function app$core$app_layout(){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"app"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zDepth","zDepth",1069399109),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"appbar row middle-xs",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(reagent_material_ui.core.Colors["indigo500"])], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.col-xs-12.col-md-8.center-xs.start-md","h2.col-xs-12.col-md-8.center-xs.start-md",-1501905463),"David Martin CV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-md-4 end-md center-xs middle-xs padded"], null),cljs.core.map.call(null,(function (p__23668){
var vec__23669 = p__23668;
var route_name = cljs.core.nth.call(null,vec__23669,(0),null);
var page_comp = cljs.core.nth.call(null,vec__23669,(1),null);
var display = clojure.string.join.call(null," ",cljs.core.map.call(null,clojure.string.capitalize,clojure.string.split.call(null,route_name,/-/)));
var active = cljs.core._EQ_.call(null,page_comp,cljs.core.deref.call(null,app.core.page));
var link = bidi.bidi.path_for.call(null,app.core.routes,page_comp);
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.padded","span.padded",1053404710),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),route_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.RaisedButton,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"className","className",-1983287057),"padded",new cljs.core.Keyword(null,"label","label",1718410804),display,new cljs.core.Keyword(null,"primary","primary",817773892),active,new cljs.core.Keyword(null,"secondary","secondary",-669381460),!(active),new cljs.core.Keyword(null,"linkButton","linkButton",-999060964),true,new cljs.core.Keyword(null,"href","href",-793805698),link], null)], null)], null));
}),app.core.main_pages)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,app.core.page)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zDepth","zDepth",1069399109),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"footer center-xs",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(reagent_material_ui.core.Colors["indigo500"])], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.col-xs-12","p.col-xs-12",-1751122436),"I wrote this site with ClojureScript, Reagent, and Reagent-React-Router. It is hosted on github pages, all source code is on my github account"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.col-xs-12","p.col-xs-12",-1751122436),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/DaveWM/davewm.github.io"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.IconButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Site Source Code",new cljs.core.Keyword(null,"iconClassName","iconClassName",1821763512),"fa fa-github",new cljs.core.Keyword(null,"iconStyle","iconStyle",1185883564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null)], null)], null)], null)], null)], null));
});
app.core.current_theme = reagent_material_ui.core.ThemeManager.getMuiTheme(reagent_material_ui.core.LightRawTheme);
app.core.new_theme = reagent_material_ui.core.ThemeManager.modifyRawThemePalette(app.core.current_theme,{"primary1Color": (reagent_material_ui.core.Colors["indigo500"]), "primary2Color": (reagent_material_ui.core.Colors["indigo700"]), "primary3Color": (reagent_material_ui.core.Colors["lightBlack"]), "accent1Color": (reagent_material_ui.core.Colors["blueA200"]), "accent2Color": (reagent_material_ui.core.Colors["indigo100"]), "accent3Color": (reagent_material_ui.core.Colors["blue500"]), "textColor": (reagent_material_ui.core.Colors["indigo900"])});
app.core.app = cljs.core.with_meta.call(null,app.core.app_layout,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"child-context-types","child-context-types",1863743773),{"muiTheme": React.PropTypes.object},new cljs.core.Keyword(null,"get-child-context","get-child-context",-867424947),(function (this$){
cljs.core.print.call(null,"called");

return {"muiTheme": app.core.new_theme};
})], null));
app.core.main = (function app$core$main(){
cljs.core.print.call(null,"rendering");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.app], null),document.getElementById("react-container"));
});
goog.exportSymbol('app.core.main', app.core.main);
app.core.main.call(null);

//# sourceMappingURL=core.js.map