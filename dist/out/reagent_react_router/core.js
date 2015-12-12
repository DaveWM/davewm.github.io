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
var len__17402__auto___26606 = arguments.length;
var i__17403__auto___26607 = (0);
while(true){
if((i__17403__auto___26607 < len__17402__auto___26606)){
args__17409__auto__.push((arguments[i__17403__auto___26607]));

var G__26608 = (i__17403__auto___26607 + (1));
i__17403__auto___26607 = G__26608;
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
return cljs.core.apply.call(null,route,(function (){var obj26605 = {"name":new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params),"path":new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(params),"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj26605;
})(),args);
});

reagent_react_router.core.Route.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.Route.cljs$lang$applyTo = (function (seq26602){
var G__26603 = cljs.core.first.call(null,seq26602);
var seq26602__$1 = cljs.core.next.call(null,seq26602);
return reagent_react_router.core.Route.cljs$core$IFn$_invoke$arity$variadic(G__26603,seq26602__$1);
});
reagent_react_router.core.DefaultRoute = (function reagent_react_router$core$DefaultRoute(var_args){
var args__17409__auto__ = [];
var len__17402__auto___26613 = arguments.length;
var i__17403__auto___26614 = (0);
while(true){
if((i__17403__auto___26614 < len__17402__auto___26613)){
args__17409__auto__.push((arguments[i__17403__auto___26614]));

var G__26615 = (i__17403__auto___26614 + (1));
i__17403__auto___26614 = G__26615;
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
return cljs.core.apply.call(null,default$,(function (){var obj26612 = {"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj26612;
})(),args);
});

reagent_react_router.core.DefaultRoute.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.DefaultRoute.cljs$lang$applyTo = (function (seq26609){
var G__26610 = cljs.core.first.call(null,seq26609);
var seq26609__$1 = cljs.core.next.call(null,seq26609);
return reagent_react_router.core.DefaultRoute.cljs$core$IFn$_invoke$arity$variadic(G__26610,seq26609__$1);
});
reagent_react_router.core.NotFound = (function reagent_react_router$core$NotFound(var_args){
var args__17409__auto__ = [];
var len__17402__auto___26620 = arguments.length;
var i__17403__auto___26621 = (0);
while(true){
if((i__17403__auto___26621 < len__17402__auto___26620)){
args__17409__auto__.push((arguments[i__17403__auto___26621]));

var G__26622 = (i__17403__auto___26621 + (1));
i__17403__auto___26621 = G__26622;
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
return cljs.core.apply.call(null,default$,(function (){var obj26619 = {"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj26619;
})(),args);
});

reagent_react_router.core.NotFound.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.NotFound.cljs$lang$applyTo = (function (seq26616){
var G__26617 = cljs.core.first.call(null,seq26616);
var seq26616__$1 = cljs.core.next.call(null,seq26616);
return reagent_react_router.core.NotFound.cljs$core$IFn$_invoke$arity$variadic(G__26617,seq26616__$1);
});
reagent_react_router.core.Redirect = (function reagent_react_router$core$Redirect(var_args){
var args__17409__auto__ = [];
var len__17402__auto___26627 = arguments.length;
var i__17403__auto___26628 = (0);
while(true){
if((i__17403__auto___26628 < len__17402__auto___26627)){
args__17409__auto__.push((arguments[i__17403__auto___26628]));

var G__26629 = (i__17403__auto___26628 + (1));
i__17403__auto___26628 = G__26629;
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
return cljs.core.apply.call(null,default$,(function (){var obj26626 = {"from":new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(params),"to":new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(params)};
return obj26626;
})(),args);
});

reagent_react_router.core.Redirect.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.Redirect.cljs$lang$applyTo = (function (seq26623){
var G__26624 = cljs.core.first.call(null,seq26623);
var seq26623__$1 = cljs.core.next.call(null,seq26623);
return reagent_react_router.core.Redirect.cljs$core$IFn$_invoke$arity$variadic(G__26624,seq26623__$1);
});
reagent_react_router.core.defroutes = (function reagent_react_router$core$defroutes(r){
return clojure.walk.postwalk.call(null,(function (node){
if(cljs.core.vector_QMARK_.call(null,node)){
var vec__26631 = node;
var t = cljs.core.nth.call(null,vec__26631,(0),null);
var p = cljs.core.nth.call(null,vec__26631,(1),null);
var h = cljs.core.nth.call(null,vec__26631,(2),null);
var f = cljs.core.nthnext.call(null,vec__26631,(3));
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
return React.render(React.createElement(handler,(function (){var obj26635 = {"params":state.params};
return obj26635;
})()),elem);
});
reagent_react_router.core.run_router = (function reagent_react_router$core$run_router(elem,routes){

return ReactRouter.run(routes,cljs.core.partial.call(null,reagent_react_router.core.router_cbk,elem));
});

//# sourceMappingURL=core.js.map