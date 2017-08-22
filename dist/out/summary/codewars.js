// Compiled by ClojureScript 1.7.145 {}
goog.provide('summary.codewars');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent_material_ui.core');
summary.codewars.open_in_new_tab = (function summary$codewars$open_in_new_tab(url){
return window.open(url);
});
summary.codewars.codewars_loading = reagent.core.atom.call(null,true);
summary.codewars.codewars_user = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
summary.codewars.get_codewars_user = (function summary$codewars$get_codewars_user(user){

return ajax.core.GET.call(null,[cljs.core.str("https://cors-anywhere.herokuapp.com/https://www.codewars.com/api/v1/users/"),cljs.core.str(user)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
cljs.core.reset_BANG_.call(null,summary.codewars.codewars_user,response);

return cljs.core.reset_BANG_.call(null,summary.codewars.codewars_loading,false);
})], null));
});
summary.codewars.codewars_card_layout = (function summary$codewars$codewars_card_layout(p__30053){
var map__30058 = p__30053;
var map__30058__$1 = ((((!((map__30058 == null)))?((((map__30058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30058):map__30058);
var user = cljs.core.get.call(null,map__30058__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Codewars",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,summary.codewars.codewars_user),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["codeChallenges","totalCompleted"], null))),cljs.core.str(" Challenges Completed | Score "),cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,summary.codewars.codewars_user),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ranks","overall","score"], null)))].join(''),new cljs.core.Keyword(null,"avatar","avatar",-1607499307),"assets/codewars.png"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lang-list"], null),(cljs.core.truth_(cljs.core.deref.call(null,summary.codewars.codewars_loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CircularProgress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"indeterminate",new cljs.core.Keyword(null,"class","class",-2030961996),"centred card-loading-icon"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.List,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var languages = cljs.core.sort_by.call(null,((function (map__30058,map__30058__$1,user){
return (function (p1__30052_SHARP_){
return cljs.core.get_in.call(null,p1__30052_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"score"], null));
});})(map__30058,map__30058__$1,user))
,cljs.core._GT_,cljs.core.get_in.call(null,cljs.core.deref.call(null,summary.codewars.codewars_user),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ranks","languages"], null)));
return cljs.core.map.call(null,((function (languages,map__30058,map__30058__$1,user){
return (function (p__30060){
var vec__30061 = p__30060;
var name = cljs.core.nth.call(null,vec__30061,(0),null);
var info = cljs.core.nth.call(null,vec__30061,(1),null);
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.ListItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"primaryText","primaryText",229382014),name,new cljs.core.Keyword(null,"secondaryText","secondaryText",824460892),[cljs.core.str("Score "),cljs.core.str(cljs.core.get.call(null,info,"score"))].join(''),new cljs.core.Keyword(null,"leftIcon","leftIcon",119379033),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("icon-"),cljs.core.str(name)].join('')], null)], null))], null)], null));
});})(languages,map__30058,map__30058__$1,user))
,languages);
})()], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardActions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FlatButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"linkButton","linkButton",-999060964),true,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("http://www.codewars.com/users/"),cljs.core.str(user)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),"View Account"], null)], null)], null)], null);
});
summary.codewars.card = cljs.core.with_meta.call(null,summary.codewars.codewars_card_layout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var map__30062 = reagent.core.props.call(null,this$);
var map__30062__$1 = ((((!((map__30062 == null)))?((((map__30062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30062):map__30062);
var user = cljs.core.get.call(null,map__30062__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return summary.codewars.get_codewars_user.call(null,user);
})], null));

//# sourceMappingURL=codewars.js.map