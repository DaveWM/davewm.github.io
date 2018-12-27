// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('summary.codewars');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent_material_ui.core');
summary.codewars.open_in_new_tab = (function summary$codewars$open_in_new_tab(url){
return window.open(url);
});
summary.codewars.codewars_loading = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
summary.codewars.codewars_user = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
summary.codewars.get_codewars_user = (function summary$codewars$get_codewars_user(user){

return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["https://cors-anywhere.herokuapp.com/https://www.codewars.com/api/v1/users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,(function (response){
cljs.core.reset_BANG_(summary.codewars.codewars_user,response);

return cljs.core.reset_BANG_(summary.codewars.codewars_loading,false);
})], null)], 0));
});
summary.codewars.codewars_card_layout = (function summary$codewars$codewars_card_layout(p__13796){
var map__13797 = p__13796;
var map__13797__$1 = (((((!((map__13797 == null))))?(((((map__13797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13797):map__13797);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13797__$1,cljs.core.cst$kw$user);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Codewars",cljs.core.cst$kw$subtitle,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(summary.codewars.codewars_user),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["codeChallenges","totalCompleted"], null)))," Challenges Completed | Score ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(summary.codewars.codewars_user),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ranks","overall","score"], null)))].join(''),cljs.core.cst$kw$avatar,"assets/codewars.png"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"lang-list"], null),(cljs.core.truth_(cljs.core.deref(summary.codewars.codewars_loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CircularProgress,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mode,"indeterminate",cljs.core.cst$kw$class,"centred card-loading-icon"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.List,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var languages = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(((function (map__13797,map__13797__$1,user){
return (function (p1__13795_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__13795_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"score"], null));
});})(map__13797,map__13797__$1,user))
,cljs.core._GT_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(summary.codewars.codewars_user),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ranks","languages"], null)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (languages,map__13797,map__13797__$1,user){
return (function (p__13799){
var vec__13800 = p__13799;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13800,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13800,(1),null);
return cljs.core.identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.ListItem,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,name,cljs.core.cst$kw$primaryText,name,cljs.core.cst$kw$secondaryText,["Score ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(info,"score"))].join(''),cljs.core.cst$kw$leftIcon,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,["icon-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)], null))], null)], null));
});})(languages,map__13797,map__13797__$1,user))
,languages);
})()], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardActions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FlatButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$linkButton,true,cljs.core.cst$kw$href,["http://www.codewars.com/users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)].join(''),cljs.core.cst$kw$label,"View Account"], null)], null)], null)], null);
});
summary.codewars.card = cljs.core.with_meta(summary.codewars.codewars_card_layout,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
var map__13803 = reagent.core.props(this$);
var map__13803__$1 = (((((!((map__13803 == null))))?(((((map__13803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13803):map__13803);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13803__$1,cljs.core.cst$kw$user);
return summary.codewars.get_codewars_user(user);
})], null));
