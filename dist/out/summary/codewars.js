// Compiled by ClojureScript 1.7.145 {}
goog.provide('summary.codewars');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
summary.codewars.AppBar = reagent.core.adapt_react_class.call(null,(MaterialUI["AppBar"]));

summary.codewars.Avatar = reagent.core.adapt_react_class.call(null,(MaterialUI["Avatar"]));

summary.codewars.Card = reagent.core.adapt_react_class.call(null,(MaterialUI["Card"]));

summary.codewars.CardActions = reagent.core.adapt_react_class.call(null,(MaterialUI["CardActions"]));

summary.codewars.CardHeader = reagent.core.adapt_react_class.call(null,(MaterialUI["CardHeader"]));

summary.codewars.CardMedia = reagent.core.adapt_react_class.call(null,(MaterialUI["CardMedia"]));

summary.codewars.CardText = reagent.core.adapt_react_class.call(null,(MaterialUI["CardText"]));

summary.codewars.CardTitle = reagent.core.adapt_react_class.call(null,(MaterialUI["CardTitle"]));

summary.codewars.CircularProgress = reagent.core.adapt_react_class.call(null,(MaterialUI["CircularProgress"]));

summary.codewars.FlatButton = reagent.core.adapt_react_class.call(null,(MaterialUI["FlatButton"]));

summary.codewars.FontIcon = reagent.core.adapt_react_class.call(null,(MaterialUI["FontIcon"]));

summary.codewars.GridList = reagent.core.adapt_react_class.call(null,(MaterialUI["GridList"]));

summary.codewars.GridTile = reagent.core.adapt_react_class.call(null,(MaterialUI["GridTile"]));

summary.codewars.IconButton = reagent.core.adapt_react_class.call(null,(MaterialUI["IconButton"]));

summary.codewars.List = reagent.core.adapt_react_class.call(null,(MaterialUI["List"]));

summary.codewars.ListItem = reagent.core.adapt_react_class.call(null,(MaterialUI["ListItem"]));

summary.codewars.Paper = reagent.core.adapt_react_class.call(null,(MaterialUI["Paper"]));

summary.codewars.RaisedButton = reagent.core.adapt_react_class.call(null,(MaterialUI["RaisedButton"]));

summary.codewars.Tabs = reagent.core.adapt_react_class.call(null,(MaterialUI["Tabs"]));

summary.codewars.Tab = reagent.core.adapt_react_class.call(null,(MaterialUI["Tab"]));

summary.codewars.ThemeManager = ((MaterialUI["Styles"])["ThemeManager"]);

summary.codewars.Colors = ((MaterialUI["Styles"])["Colors"]);

summary.codewars.LightRawTheme = ((MaterialUI["Styles"])["LightRawTheme"]);
summary.codewars.open_in_new_tab = (function summary$codewars$open_in_new_tab(url){
return window.open(url);
});
summary.codewars.codewars_loading = reagent.core.atom.call(null,true);
summary.codewars.codewars_user = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
summary.codewars.get_codewars_user = (function summary$codewars$get_codewars_user(user){

return ajax.core.GET.call(null,[cljs.core.str("https://crossorigin.me/https://www.codewars.com/api/v1/users/"),cljs.core.str(user)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
cljs.core.reset_BANG_.call(null,summary.codewars.codewars_user,response);

return cljs.core.reset_BANG_.call(null,summary.codewars.codewars_loading,false);
})], null));
});
summary.codewars.codewars_card_layout = (function summary$codewars$codewars_card_layout(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.codewars.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.codewars.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Codewars",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),[cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,summary.codewars.codewars_user),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["codeChallenges","totalCompleted"], null))),cljs.core.str(" Challenges Completed | Score "),cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,summary.codewars.codewars_user),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ranks","overall","score"], null)))].join(''),new cljs.core.Keyword(null,"avatar","avatar",-1607499307),"dist/assets/codewars.png"], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,summary.codewars.codewars_loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.codewars.CircularProgress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"indeterminate",new cljs.core.Keyword(null,"class","class",-2030961996),"centred card-loading-icon"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.codewars.List,(function (){var languages = cljs.core.sort_by.call(null,(function (p1__24689_SHARP_){
return cljs.core.get_in.call(null,p1__24689_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"score"], null));
}),cljs.core._GT_,cljs.core.get_in.call(null,cljs.core.deref.call(null,summary.codewars.codewars_user),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ranks","languages"], null)));
return cljs.core.map.call(null,((function (languages){
return (function (lang){
var vec__24691 = lang;
var name = cljs.core.nth.call(null,vec__24691,(0),null);
var info = cljs.core.nth.call(null,vec__24691,(1),null);
return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.codewars.ListItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primaryText","primaryText",229382014),name,new cljs.core.Keyword(null,"secondaryText","secondaryText",824460892),[cljs.core.str("Score "),cljs.core.str(cljs.core.get.call(null,info,"score"))].join(''),new cljs.core.Keyword(null,"leftIcon","leftIcon",119379033),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.codewars.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("icon-"),cljs.core.str(name)].join('')], null)], null))], null)], null));
});})(languages))
,languages);
})()], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.codewars.CardActions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.codewars.FlatButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"linkButton","linkButton",-999060964),true,new cljs.core.Keyword(null,"href","href",-793805698),"http://www.codewars.com/users/DaveWM",new cljs.core.Keyword(null,"label","label",1718410804),"View Account"], null)], null)], null)], null);
});
summary.codewars.card = cljs.core.with_meta.call(null,summary.codewars.codewars_card_layout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return summary.codewars.get_codewars_user.call(null,"DaveWM");
})], null));

//# sourceMappingURL=codewars.js.map