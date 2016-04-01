// Compiled by ClojureScript 1.7.145 {}
goog.provide('reagent_react_router.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.walk');
goog.require('cljsjs.react_router');
reagent_react_router.core.Link = reagent.core.adapt_react_class.call(null,ReactRouter.Link);
reagent_react_router.core.RouteHandler = reagent.core.adapt_react_class.call(null,ReactRouter.RouteHandler);
reagent_react_router.core.Route = (function reagent_react_router$core$Route(var_args){
var args__17423__auto__ = [];
var len__17416__auto___20512 = arguments.length;
var i__17417__auto___20513 = (0);
while(true){
if((i__17417__auto___20513 < len__17416__auto___20512)){
args__17423__auto__.push((arguments[i__17417__auto___20513]));

var G__20514 = (i__17417__auto___20513 + (1));
i__17417__auto___20513 = G__20514;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return reagent_react_router.core.Route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

reagent_react_router.core.Route.cljs$core$IFn$_invoke$arity$variadic = (function (params,args){
var route = React.createFactory(ReactRouter.Route);
return cljs.core.apply.call(null,route,(function (){var obj20511 = {"name":new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params),"path":new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(params),"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj20511;
})(),args);
});

reagent_react_router.core.Route.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.Route.cljs$lang$applyTo = (function (seq20508){
var G__20509 = cljs.core.first.call(null,seq20508);
var seq20508__$1 = cljs.core.next.call(null,seq20508);
return reagent_react_router.core.Route.cljs$core$IFn$_invoke$arity$variadic(G__20509,seq20508__$1);
});
reagent_react_router.core.DefaultRoute = (function reagent_react_router$core$DefaultRoute(var_args){
var args__17423__auto__ = [];
var len__17416__auto___20519 = arguments.length;
var i__17417__auto___20520 = (0);
while(true){
if((i__17417__auto___20520 < len__17416__auto___20519)){
args__17423__auto__.push((arguments[i__17417__auto___20520]));

var G__20521 = (i__17417__auto___20520 + (1));
i__17417__auto___20520 = G__20521;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return reagent_react_router.core.DefaultRoute.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

reagent_react_router.core.DefaultRoute.cljs$core$IFn$_invoke$arity$variadic = (function (params,args){
var default$ = React.createFactory(ReactRouter.DefaultRoute);
return cljs.core.apply.call(null,default$,(function (){var obj20518 = {"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj20518;
})(),args);
});

reagent_react_router.core.DefaultRoute.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.DefaultRoute.cljs$lang$applyTo = (function (seq20515){
var G__20516 = cljs.core.first.call(null,seq20515);
var seq20515__$1 = cljs.core.next.call(null,seq20515);
return reagent_react_router.core.DefaultRoute.cljs$core$IFn$_invoke$arity$variadic(G__20516,seq20515__$1);
});
reagent_react_router.core.NotFound = (function reagent_react_router$core$NotFound(var_args){
var args__17423__auto__ = [];
var len__17416__auto___20526 = arguments.length;
var i__17417__auto___20527 = (0);
while(true){
if((i__17417__auto___20527 < len__17416__auto___20526)){
args__17423__auto__.push((arguments[i__17417__auto___20527]));

var G__20528 = (i__17417__auto___20527 + (1));
i__17417__auto___20527 = G__20528;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return reagent_react_router.core.NotFound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

reagent_react_router.core.NotFound.cljs$core$IFn$_invoke$arity$variadic = (function (params,args){
var default$ = React.createFactory(ReactRouter.NotFoundRoute);
return cljs.core.apply.call(null,default$,(function (){var obj20525 = {"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj20525;
})(),args);
});

reagent_react_router.core.NotFound.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.NotFound.cljs$lang$applyTo = (function (seq20522){
var G__20523 = cljs.core.first.call(null,seq20522);
var seq20522__$1 = cljs.core.next.call(null,seq20522);
return reagent_react_router.core.NotFound.cljs$core$IFn$_invoke$arity$variadic(G__20523,seq20522__$1);
});
reagent_react_router.core.Redirect = (function reagent_react_router$core$Redirect(var_args){
var args__17423__auto__ = [];
var len__17416__auto___20533 = arguments.length;
var i__17417__auto___20534 = (0);
while(true){
if((i__17417__auto___20534 < len__17416__auto___20533)){
args__17423__auto__.push((arguments[i__17417__auto___20534]));

var G__20535 = (i__17417__auto___20534 + (1));
i__17417__auto___20534 = G__20535;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return reagent_react_router.core.Redirect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

reagent_react_router.core.Redirect.cljs$core$IFn$_invoke$arity$variadic = (function (params,args){
var default$ = React.createFactory(ReactRouter.Redirect);
return cljs.core.apply.call(null,default$,(function (){var obj20532 = {"from":new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(params),"to":new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(params)};
return obj20532;
})(),args);
});

reagent_react_router.core.Redirect.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.Redirect.cljs$lang$applyTo = (function (seq20529){
var G__20530 = cljs.core.first.call(null,seq20529);
var seq20529__$1 = cljs.core.next.call(null,seq20529);
return reagent_react_router.core.Redirect.cljs$core$IFn$_invoke$arity$variadic(G__20530,seq20529__$1);
});
reagent_react_router.core.defroutes = (function reagent_react_router$core$defroutes(r){
return clojure.walk.postwalk.call(null,(function (node){
if(cljs.core.vector_QMARK_.call(null,node)){
var vec__20537 = node;
var t = cljs.core.nth.call(null,vec__20537,(0),null);
var p = cljs.core.nth.call(null,vec__20537,(1),null);
var h = cljs.core.nth.call(null,vec__20537,(2),null);
var f = cljs.core.nthnext.call(null,vec__20537,(3));
var route_name = ((cljs.core._EQ_.call(null,p,"/"))?"app":p);
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"route","route",329891309))){
return cljs.core.apply.call(null,reagent_react_router.core.Route,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),route_name,new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"handler","handler",-195596612),h], null),f);
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"default-route","default-route",-1491022475))){
return reagent_react_router.core.DefaultRoute.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),p], null));
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
return reagent_react_router.core.NotFound.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),p], null));
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"redirect","redirect",-1975673286))){
return reagent_react_router.core.Redirect.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),p,new cljs.core.Keyword(null,"to","to",192099007),h], null));
} else {
return null;
}
}
}
}
} else {
return node;
}
}),r);
});
reagent_react_router.core.router_cbk = (function reagent_react_router$core$router_cbk(elem,handler,state){
return React.render(React.createElement(handler,(function (){var obj20541 = {"params":state.params};
return obj20541;
})()),elem);
});
reagent_react_router.core.run_router = (function reagent_react_router$core$run_router(elem,routes){

return ReactRouter.run(routes,cljs.core.partial.call(null,reagent_react_router.core.router_cbk,elem));
});

//# sourceMappingURL=core.js.map