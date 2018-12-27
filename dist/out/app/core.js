// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('summary.page');
goog.require('work_history.page');
goog.require('technologies.page');
goog.require('reagent_material_ui.core');
goog.require('bidi.bidi');
goog.require('pushy.core');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_();
app.core.api_url = "https://cv-api.herokuapp.com/api/cv";
app.core.page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1));
app.core.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.core.not_found = (function app$core$not_found(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Route not found :("], null);
});
app.core.main_pages = new cljs.core.PersistentArrayMap(null, 3, ["summary",summary.page.page,"work-history",work_history.page.page,"technologies",technologies.page.page], null);
app.core.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.core.main_pages,new cljs.core.PersistentArrayMap(null, 2, ["",summary.page.page,true,app.core.not_found], null)], 0))], null);
app.core.set_page_BANG_ = (function app$core$set_page_BANG_(match){
return cljs.core.reset_BANG_(app.core.page,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(match));
});
app.core.history = pushy.core.pushy(app.core.set_page_BANG_,(function (p1__13997_SHARP_){
return bidi.bidi.match_route(app.core.routes,p1__13997_SHARP_);
}));
pushy.core.start_BANG_(app.core.history);
app.core.lightTheme = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(reagent_material_ui.core.lightBaseTheme);
app.core.theme = (function (){var G__13998 = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.core.lightTheme,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$palette,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$primary1Color,(reagent_material_ui.core.colors["indigo500"]),cljs.core.cst$kw$primary2Color,(reagent_material_ui.core.colors["indigo700"]),cljs.core.cst$kw$primary3Color,(reagent_material_ui.core.colors["lightBlack"]),cljs.core.cst$kw$accent1Color,(reagent_material_ui.core.colors["blueA200"]),cljs.core.cst$kw$accent2Color,(reagent_material_ui.core.colors["indigo100"]),cljs.core.cst$kw$accent3Color,(reagent_material_ui.core.colors["blue500"]),cljs.core.cst$kw$textColor,(reagent_material_ui.core.colors["indigo900"])], null)], null)], 0)));
return (reagent_material_ui.core.getMuiTheme.cljs$core$IFn$_invoke$arity$1 ? reagent_material_ui.core.getMuiTheme.cljs$core$IFn$_invoke$arity$1(G__13998) : reagent_material_ui.core.getMuiTheme.call(null,G__13998));
})();
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.core.theme], 0));
app.core.app = (function app$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.MuiThemeProvider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$muiTheme,app.core.theme], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"app"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$zDepth,(1),cljs.core.cst$kw$class,"appbar row middle-xs",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,(reagent_material_ui.core.colors["indigo500"])], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$col_DASH_xs_DASH_12$col_DASH_md_DASH_8$center_DASH_xs$start_DASH_md,"David Martin CV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-xs-12 col-md-4 end-md center-xs middle-xs padded"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13999){
var vec__14000 = p__13999;
var route_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14000,(0),null);
var page_comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14000,(1),null);
var display = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(route_name,/-/)));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_comp,cljs.core.deref(app.core.page));
var link = bidi.bidi.path_for(app.core.routes,page_comp);
return cljs.core.identity(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$padded,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,route_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.RaisedButton,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$label,display,cljs.core.cst$kw$primary,(!(active)),cljs.core.cst$kw$secondary,active,cljs.core.cst$kw$linkButton,true,cljs.core.cst$kw$href,link], null)], null)], null));
}),app.core.main_pages))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"content"], null),(cljs.core.truth_(cljs.core.deref(app.core.data))?(function (){var G__14004 = cljs.core.deref(app.core.data);
var fexpr__14003 = cljs.core.deref(app.core.page);
return (fexpr__14003.cljs$core$IFn$_invoke$arity$1 ? fexpr__14003.cljs$core$IFn$_invoke$arity$1(G__14004) : fexpr__14003.call(null,G__14004));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CircularProgress,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"centred card-loading-icon",cljs.core.cst$kw$mode,"indeterminate"], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$zDepth,(1),cljs.core.cst$kw$class,"footer center-xs",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background_DASH_color,(reagent_material_ui.core.colors["indigo500"]),cljs.core.cst$kw$color,"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$col_DASH_xs_DASH_12,"I wrote this site with ClojureScript, Reagent, and Bidi. It is hosted on github pages, all source code is on GitHub"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$col_DASH_xs_DASH_12,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/DaveWM/davewm.github.io"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.IconButton,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$iconClassName,"fa fa-github",cljs.core.cst$kw$iconStyle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"white"], null)], null)], null)], null)], null)], null)], null)], null);
});
app.core.load_data = (function app$core$load_data(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(app.core.api_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$handler,(function (p1__14005_SHARP_){
return cljs.core.reset_BANG_(app.core.data,p1__14005_SHARP_);
}),cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true], null)], 0));
});
app.core.main = (function app$core$main(){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rendering"], 0));

var G__14006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.app], null);
var G__14007 = document.getElementById("react-container");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__14006,G__14007) : reagent.core.render_component.call(null,G__14006,G__14007));
});
goog.exportSymbol('app.core.main', app.core.main);
app.core.main();

app.core.load_data();
