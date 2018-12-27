// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('summary.github');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent_material_ui.core');
summary.github.github_loading = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((2));
summary.github.github_user = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
summary.github.github_repos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
summary.github.get_github_user = (function summary$github$get_github_user(user){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["https://api.github.com/users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,(function (response){
cljs.core.reset_BANG_(summary.github.github_user,response);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(summary.github.github_loading,cljs.core.dec);
})], null)], 0));
});
summary.github.open_in_new_tab = (function summary$github$open_in_new_tab(url){
return window.open(url);
});
summary.github.get_github_user_repos = (function summary$github$get_github_user_repos(user){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["https://api.github.com/users/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user),"/repos"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,(function (p1__13807_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(summary.github.github_loading,cljs.core.dec);

return cljs.core.reset_BANG_(summary.github.github_repos,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (r){
return (new Date(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,"updated_at")));
}),cljs.core._GT_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (r){
return cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,"fork"));
}),p1__13807_SHARP_))));
})], null)], 0));
});
summary.github.github_card_layout = (function summary$github$github_card_layout(p__13809){
var map__13810 = p__13809;
var map__13810__$1 = (((((!((map__13810 == null))))?(((((map__13810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13810):map__13810);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13810__$1,cljs.core.cst$kw$user);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"GitHub",cljs.core.cst$kw$subtitle,["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)].join(''),cljs.core.cst$kw$avatar,(function (){var fexpr__13812 = cljs.core.deref(summary.github.github_user);
return (fexpr__13812.cljs$core$IFn$_invoke$arity$1 ? fexpr__13812.cljs$core$IFn$_invoke$arity$1("avatar_url") : fexpr__13812.call(null,"avatar_url"));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"repo-list"], null),(((cljs.core.deref(summary.github.github_loading) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CircularProgress,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"centred card-loading-icon",cljs.core.cst$kw$mode,"indeterminate"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.List,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__13810,map__13810__$1,user){
return (function (p1__13808_SHARP_){
return cljs.core.identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.ListItem,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__13808_SHARP_,"id"),cljs.core.cst$kw$primaryText,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__13808_SHARP_,"name"),cljs.core.cst$kw$secondaryText,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__13808_SHARP_,"description"),cljs.core.cst$kw$leftAvatar,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$icon,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"octicon octicon-repo"], null)], null))], null)], null)),cljs.core.cst$kw$onClick,((function (map__13810,map__13810__$1,user){
return (function (){
return summary.github.open_in_new_tab(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__13808_SHARP_,"html_url"));
});})(map__13810,map__13810__$1,user))
], null)], null));
});})(map__13810,map__13810__$1,user))
,cljs.core.deref(summary.github.github_repos))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardActions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FlatButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,"View Profile",cljs.core.cst$kw$linkButton,true,cljs.core.cst$kw$href,["https://github.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)].join('')], null)], null)], null)], null);
});
summary.github.card = cljs.core.with_meta(summary.github.github_card_layout,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (p1__13813_SHARP_){
var user = cljs.core.cst$kw$user.cljs$core$IFn$_invoke$arity$1(reagent.core.props(p1__13813_SHARP_));
summary.github.get_github_user(user);

return summary.github.get_github_user_repos(user);
})], null));
