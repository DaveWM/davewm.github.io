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
var len__17402__auto___22521 = arguments.length;
var i__17403__auto___22522 = (0);
while(true){
if((i__17403__auto___22522 < len__17402__auto___22521)){
args__17409__auto__.push((arguments[i__17403__auto___22522]));

var G__22523 = (i__17403__auto___22522 + (1));
i__17403__auto___22522 = G__22523;
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
return cljs.core.apply.call(null,route,(function (){var obj22520 = {"name":new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params),"path":new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(params),"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj22520;
})(),args);
});

reagent_react_router.core.Route.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.Route.cljs$lang$applyTo = (function (seq22517){
var G__22518 = cljs.core.first.call(null,seq22517);
var seq22517__$1 = cljs.core.next.call(null,seq22517);
return reagent_react_router.core.Route.cljs$core$IFn$_invoke$arity$variadic(G__22518,seq22517__$1);
});
reagent_react_router.core.DefaultRoute = (function reagent_react_router$core$DefaultRoute(var_args){
var args__17409__auto__ = [];
var len__17402__auto___22528 = arguments.length;
var i__17403__auto___22529 = (0);
while(true){
if((i__17403__auto___22529 < len__17402__auto___22528)){
args__17409__auto__.push((arguments[i__17403__auto___22529]));

var G__22530 = (i__17403__auto___22529 + (1));
i__17403__auto___22529 = G__22530;
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
return cljs.core.apply.call(null,default$,(function (){var obj22527 = {"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj22527;
})(),args);
});

reagent_react_router.core.DefaultRoute.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.DefaultRoute.cljs$lang$applyTo = (function (seq22524){
var G__22525 = cljs.core.first.call(null,seq22524);
var seq22524__$1 = cljs.core.next.call(null,seq22524);
return reagent_react_router.core.DefaultRoute.cljs$core$IFn$_invoke$arity$variadic(G__22525,seq22524__$1);
});
reagent_react_router.core.NotFound = (function reagent_react_router$core$NotFound(var_args){
var args__17409__auto__ = [];
var len__17402__auto___22535 = arguments.length;
var i__17403__auto___22536 = (0);
while(true){
if((i__17403__auto___22536 < len__17402__auto___22535)){
args__17409__auto__.push((arguments[i__17403__auto___22536]));

var G__22537 = (i__17403__auto___22536 + (1));
i__17403__auto___22536 = G__22537;
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
return cljs.core.apply.call(null,default$,(function (){var obj22534 = {"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj22534;
})(),args);
});

reagent_react_router.core.NotFound.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.NotFound.cljs$lang$applyTo = (function (seq22531){
var G__22532 = cljs.core.first.call(null,seq22531);
var seq22531__$1 = cljs.core.next.call(null,seq22531);
return reagent_react_router.core.NotFound.cljs$core$IFn$_invoke$arity$variadic(G__22532,seq22531__$1);
});
reagent_react_router.core.Redirect = (function reagent_react_router$core$Redirect(var_args){
var args__17409__auto__ = [];
var len__17402__auto___22542 = arguments.length;
var i__17403__auto___22543 = (0);
while(true){
if((i__17403__auto___22543 < len__17402__auto___22542)){
args__17409__auto__.push((arguments[i__17403__auto___22543]));

var G__22544 = (i__17403__auto___22543 + (1));
i__17403__auto___22543 = G__22544;
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
return cljs.core.apply.call(null,default$,(function (){var obj22541 = {"from":new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(params),"to":new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(params)};
return obj22541;
})(),args);
});

reagent_react_router.core.Redirect.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.Redirect.cljs$lang$applyTo = (function (seq22538){
var G__22539 = cljs.core.first.call(null,seq22538);
var seq22538__$1 = cljs.core.next.call(null,seq22538);
return reagent_react_router.core.Redirect.cljs$core$IFn$_invoke$arity$variadic(G__22539,seq22538__$1);
});
reagent_react_router.core.defroutes = (function reagent_react_router$core$defroutes(r){
return clojure.walk.postwalk.call(null,(function (node){
if(cljs.core.vector_QMARK_.call(null,node)){
var vec__22546 = node;
var t = cljs.core.nth.call(null,vec__22546,(0),null);
var p = cljs.core.nth.call(null,vec__22546,(1),null);
var h = cljs.core.nth.call(null,vec__22546,(2),null);
var f = cljs.core.nthnext.call(null,vec__22546,(3));
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
return React.render(React.createElement(handler,(function (){var obj22550 = {"params":state.params};
return obj22550;
})()),elem);
});
reagent_react_router.core.run_router = (function reagent_react_router$core$run_router(elem,routes){

return ReactRouter.run(routes,cljs.core.partial.call(null,reagent_react_router.core.router_cbk,elem));
});

//# sourceMappingURL=core.js.map