// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('work_history.page');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs.core');
goog.require('reagent_material_ui.core');
goog.require('markdown.core');
goog.require('cljs_time.format');
goog.require('app.helpers');
work_history.page.history_card = (function work_history$page$history_card(p__12011){
var map__12012 = p__12011;
var map__12012__$1 = (((((!((map__12012 == null))))?(((((map__12012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12012):map__12012);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12012__$1,cljs.core.cst$kw$title);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12012__$1,cljs.core.cst$kw$img);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12012__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12012__$1,cljs.core.cst$kw$to);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12012__$1,cljs.core.cst$kw$url);
var bullet_points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12012__$1,cljs.core.cst$kw$bullet_DASH_points);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_12$col_DASH_md_DASH_6$col_DASH_md_DASH_offset_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,title], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Card,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"work-history-card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardMedia,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overlay,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,title,cljs.core.cst$kw$subtitle,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.format_date_month_year(from))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(to)?app.helpers.format_date_month_year(to):"Present"))].join(''),cljs.core.cst$kw$avatar,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Avatar,cljs.core.first(title)], null))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,img], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardText,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__12012,map__12012__$1,title,img,from,to,url,bullet_points){
return (function (p1__12009_SHARP_,p2__12010_SHARP_){
return cljs.core.identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,p1__12009_SHARP_,cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,markdown.core.md__GT_html(p2__12010_SHARP_)], null)], null)], null));
});})(map__12012,map__12012__$1,title,img,from,to,url,bullet_points))
,bullet_points)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardActions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FlatButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,"Go to Website",cljs.core.cst$kw$linkButton,true,cljs.core.cst$kw$href,url], null)], null)], null)], null)], null);
});
work_history.page.page = (function work_history$page$page(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$middle_DASH_xs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map.cljs$core$IFn$_invoke$arity$2(work_history.page.history_card,cljs.core.cst$kw$work_DASH_history.cljs$core$IFn$_invoke$arity$1(data))], null)], null);
});
