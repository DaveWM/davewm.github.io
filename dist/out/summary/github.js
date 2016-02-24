// Compiled by ClojureScript 1.7.145 {}
goog.provide('summary.github');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('material_ui.core');
summary.github.css_transition_group = reagent.core.adapt_react_class.call(null,React.addons.CSSTransitionGroup);
summary.github.github_loading = reagent.core.atom.call(null,(2));
summary.github.github_user = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
summary.github.github_repos = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
summary.github.get_github_user = (function summary$github$get_github_user(user){
return ajax.core.GET.call(null,[cljs.core.str("https://api.github.com/users/"),cljs.core.str(user)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
cljs.core.reset_BANG_.call(null,summary.github.github_user,response);

return cljs.core.swap_BANG_.call(null,summary.github.github_loading,cljs.core.dec);
})], null));
});
summary.github.open_in_new_tab = (function summary$github$open_in_new_tab(url){
return window.open(url);
});
summary.github.get_github_user_repos = (function summary$github$get_github_user_repos(user){
return ajax.core.GET.call(null,[cljs.core.str("https://api.github.com/users/"),cljs.core.str(user),cljs.core.str("/repos")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__22581_SHARP_){
cljs.core.swap_BANG_.call(null,summary.github.github_loading,cljs.core.dec);

return cljs.core.reset_BANG_.call(null,summary.github.github_repos,cljs.core.take.call(null,(5),cljs.core.sort_by.call(null,(function (r){
return (new Date(cljs.core.get.call(null,r,"updated_at")));
}),cljs.core._GT_,cljs.core.filter.call(null,(function (r){
return cljs.core.not.call(null,cljs.core.get.call(null,r,"fork"));
}),p1__22581_SHARP_))));
})], null));
});
summary.github.github_card_layout = (function summary$github$github_card_layout(p__22583){
var map__22586 = p__22583;
var map__22586__$1 = ((((!((map__22586 == null)))?((((map__22586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22586):map__22586);
var user = cljs.core.get.call(null,map__22586__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"GitHub",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),[cljs.core.str("@"),cljs.core.str(user)].join(''),new cljs.core.Keyword(null,"avatar","avatar",-1607499307),cljs.core.deref.call(null,summary.github.github_user).call(null,"avatar_url")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"repo-list"], null),(((cljs.core.deref.call(null,summary.github.github_loading) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CircularProgress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"centred card-loading-icon",new cljs.core.Keyword(null,"mode","mode",654403691),"indeterminate"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.List,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.github.css_transition_group,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"fade",new cljs.core.Keyword(null,"transition-appear","transition-appear",649411345),true], null),cljs.core.map.call(null,((function (map__22586,map__22586__$1,user){
return (function (p1__22582_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.ListItem,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.call(null,p1__22582_SHARP_,"id"),new cljs.core.Keyword(null,"primaryText","primaryText",229382014),cljs.core.get.call(null,p1__22582_SHARP_,"name"),new cljs.core.Keyword(null,"secondaryText","secondaryText",824460892),cljs.core.get.call(null,p1__22582_SHARP_,"description"),new cljs.core.Keyword(null,"leftAvatar","leftAvatar",431224504),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Avatar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"octicon octicon-repo"], null)], null))], null)], null)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__22586,map__22586__$1,user){
return (function (){
return summary.github.open_in_new_tab.call(null,cljs.core.get.call(null,p1__22582_SHARP_,"html_url"));
});})(map__22586,map__22586__$1,user))
], null)], null));
});})(map__22586,map__22586__$1,user))
,cljs.core.deref.call(null,summary.github.github_repos))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardActions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.FlatButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"View Profile",new cljs.core.Keyword(null,"linkButton","linkButton",-999060964),true,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("https://github.com/"),cljs.core.str(user)].join('')], null)], null)], null)], null);
});
summary.github.card = cljs.core.with_meta.call(null,summary.github.github_card_layout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__22588_SHARP_){
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,p1__22588_SHARP_));
summary.github.get_github_user.call(null,user);

return summary.github.get_github_user_repos.call(null,user);
})], null));

//# sourceMappingURL=github.js.map