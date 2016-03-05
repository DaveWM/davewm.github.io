// Compiled by ClojureScript 1.7.145 {}
goog.provide('reagent_react_router.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.walk');
goog.require('cljsjs.react_router');
reagent_react_router.core.Link = reagent.core.adapt_react_class.call(null,ReactRouter.Link);
reagent_react_router.core.RouteHandler = reagent.core.adapt_react_class.call(null,ReactRouter.RouteHandler);
reagent_react_router.core.Route = (function reagent_react_router$core$Route(var_args){
var args__17409__auto__ = [];
var len__17402__auto___20382 = arguments.length;
var i__17403__auto___20383 = (0);
while(true){
if((i__17403__auto___20383 < len__17402__auto___20382)){
args__17409__auto__.push((arguments[i__17403__auto___20383]));

var G__20384 = (i__17403__auto___20383 + (1));
i__17403__auto___20383 = G__20384;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return reagent_react_router.core.Route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

reagent_react_router.core.Route.cljs$core$IFn$_invoke$arity$variadic = (function (params,args){
var route = React.createFactory(ReactRouter.Route);
return cljs.core.apply.call(null,route,(function (){var obj20381 = {"name":new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params),"path":new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(params),"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj20381;
})(),args);
});

reagent_react_router.core.Route.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.Route.cljs$lang$applyTo = (function (seq20378){
var G__20379 = cljs.core.first.call(null,seq20378);
var seq20378__$1 = cljs.core.next.call(null,seq20378);
return reagent_react_router.core.Route.cljs$core$IFn$_invoke$arity$variadic(G__20379,seq20378__$1);
});
reagent_react_router.core.DefaultRoute = (function reagent_react_router$core$DefaultRoute(var_args){
var args__17409__auto__ = [];
var len__17402__auto___20389 = arguments.length;
var i__17403__auto___20390 = (0);
while(true){
if((i__17403__auto___20390 < len__17402__auto___20389)){
args__17409__auto__.push((arguments[i__17403__auto___20390]));

var G__20391 = (i__17403__auto___20390 + (1));
i__17403__auto___20390 = G__20391;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return reagent_react_router.core.DefaultRoute.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

reagent_react_router.core.DefaultRoute.cljs$core$IFn$_invoke$arity$variadic = (function (params,args){
var default$ = React.createFactory(ReactRouter.DefaultRoute);
return cljs.core.apply.call(null,default$,(function (){var obj20388 = {"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj20388;
})(),args);
});

reagent_react_router.core.DefaultRoute.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.DefaultRoute.cljs$lang$applyTo = (function (seq20385){
var G__20386 = cljs.core.first.call(null,seq20385);
var seq20385__$1 = cljs.core.next.call(null,seq20385);
return reagent_react_router.core.DefaultRoute.cljs$core$IFn$_invoke$arity$variadic(G__20386,seq20385__$1);
});
reagent_react_router.core.NotFound = (function reagent_react_router$core$NotFound(var_args){
var args__17409__auto__ = [];
var len__17402__auto___20396 = arguments.length;
var i__17403__auto___20397 = (0);
while(true){
if((i__17403__auto___20397 < len__17402__auto___20396)){
args__17409__auto__.push((arguments[i__17403__auto___20397]));

var G__20398 = (i__17403__auto___20397 + (1));
i__17403__auto___20397 = G__20398;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return reagent_react_router.core.NotFound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

reagent_react_router.core.NotFound.cljs$core$IFn$_invoke$arity$variadic = (function (params,args){
var default$ = React.createFactory(ReactRouter.NotFoundRoute);
return cljs.core.apply.call(null,default$,(function (){var obj20395 = {"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj20395;
})(),args);
});

reagent_react_router.core.NotFound.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.NotFound.cljs$lang$applyTo = (function (seq20392){
var G__20393 = cljs.core.first.call(null,seq20392);
var seq20392__$1 = cljs.core.next.call(null,seq20392);
return reagent_react_router.core.NotFound.cljs$core$IFn$_invoke$arity$variadic(G__20393,seq20392__$1);
});
reagent_react_router.core.Redirect = (function reagent_react_router$core$Redirect(var_args){
var args__17409__auto__ = [];
var len__17402__auto___20403 = arguments.length;
var i__17403__auto___20404 = (0);
while(true){
if((i__17403__auto___20404 < len__17402__auto___20403)){
args__17409__auto__.push((arguments[i__17403__auto___20404]));

var G__20405 = (i__17403__auto___20404 + (1));
i__17403__auto___20404 = G__20405;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return reagent_react_router.core.Redirect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

reagent_react_router.core.Redirect.cljs$core$IFn$_invoke$arity$variadic = (function (params,args){
var default$ = React.createFactory(ReactRouter.Redirect);
return cljs.core.apply.call(null,default$,(function (){var obj20402 = {"from":new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(params),"to":new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(params)};
return obj20402;
})(),args);
});

reagent_react_router.core.Redirect.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.Redirect.cljs$lang$applyTo = (function (seq20399){
var G__20400 = cljs.core.first.call(null,seq20399);
var seq20399__$1 = cljs.core.next.call(null,seq20399);
return reagent_react_router.core.Redirect.cljs$core$IFn$_invoke$arity$variadic(G__20400,seq20399__$1);
});
reagent_react_router.core.defroutes = (function reagent_react_router$core$defroutes(r){
return clojure.walk.postwalk.call(null,(function (node){
if(cljs.core.vector_QMARK_.call(null,node)){
var vec__20407 = node;
var t = cljs.core.nth.call(null,vec__20407,(0),null);
var p = cljs.core.nth.call(null,vec__20407,(1),null);
var h = cljs.core.nth.call(null,vec__20407,(2),null);
var f = cljs.core.nthnext.call(null,vec__20407,(3));
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
return React.render(React.createElement(handler,(function (){var obj20411 = {"params":state.params};
return obj20411;
})()),elem);
});
reagent_react_router.core.run_router = (function reagent_react_router$core$run_router(elem,routes){

return ReactRouter.run(routes,cljs.core.partial.call(null,reagent_react_router.core.router_cbk,elem));
});

//# sourceMappingURL=core.js.map