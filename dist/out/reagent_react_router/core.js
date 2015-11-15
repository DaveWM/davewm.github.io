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
var len__17402__auto___24657 = arguments.length;
var i__17403__auto___24658 = (0);
while(true){
if((i__17403__auto___24658 < len__17402__auto___24657)){
args__17409__auto__.push((arguments[i__17403__auto___24658]));

var G__24659 = (i__17403__auto___24658 + (1));
i__17403__auto___24658 = G__24659;
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
return cljs.core.apply.call(null,route,(function (){var obj24656 = {"name":new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params),"path":new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(params),"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj24656;
})(),args);
});

reagent_react_router.core.Route.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.Route.cljs$lang$applyTo = (function (seq24653){
var G__24654 = cljs.core.first.call(null,seq24653);
var seq24653__$1 = cljs.core.next.call(null,seq24653);
return reagent_react_router.core.Route.cljs$core$IFn$_invoke$arity$variadic(G__24654,seq24653__$1);
});
reagent_react_router.core.DefaultRoute = (function reagent_react_router$core$DefaultRoute(var_args){
var args__17409__auto__ = [];
var len__17402__auto___24664 = arguments.length;
var i__17403__auto___24665 = (0);
while(true){
if((i__17403__auto___24665 < len__17402__auto___24664)){
args__17409__auto__.push((arguments[i__17403__auto___24665]));

var G__24666 = (i__17403__auto___24665 + (1));
i__17403__auto___24665 = G__24666;
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
return cljs.core.apply.call(null,default$,(function (){var obj24663 = {"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj24663;
})(),args);
});

reagent_react_router.core.DefaultRoute.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.DefaultRoute.cljs$lang$applyTo = (function (seq24660){
var G__24661 = cljs.core.first.call(null,seq24660);
var seq24660__$1 = cljs.core.next.call(null,seq24660);
return reagent_react_router.core.DefaultRoute.cljs$core$IFn$_invoke$arity$variadic(G__24661,seq24660__$1);
});
reagent_react_router.core.NotFound = (function reagent_react_router$core$NotFound(var_args){
var args__17409__auto__ = [];
var len__17402__auto___24671 = arguments.length;
var i__17403__auto___24672 = (0);
while(true){
if((i__17403__auto___24672 < len__17402__auto___24671)){
args__17409__auto__.push((arguments[i__17403__auto___24672]));

var G__24673 = (i__17403__auto___24672 + (1));
i__17403__auto___24672 = G__24673;
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
return cljs.core.apply.call(null,default$,(function (){var obj24670 = {"handler":reagent.core.reactify_component.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(params))};
return obj24670;
})(),args);
});

reagent_react_router.core.NotFound.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.NotFound.cljs$lang$applyTo = (function (seq24667){
var G__24668 = cljs.core.first.call(null,seq24667);
var seq24667__$1 = cljs.core.next.call(null,seq24667);
return reagent_react_router.core.NotFound.cljs$core$IFn$_invoke$arity$variadic(G__24668,seq24667__$1);
});
reagent_react_router.core.Redirect = (function reagent_react_router$core$Redirect(var_args){
var args__17409__auto__ = [];
var len__17402__auto___24678 = arguments.length;
var i__17403__auto___24679 = (0);
while(true){
if((i__17403__auto___24679 < len__17402__auto___24678)){
args__17409__auto__.push((arguments[i__17403__auto___24679]));

var G__24680 = (i__17403__auto___24679 + (1));
i__17403__auto___24679 = G__24680;
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
return cljs.core.apply.call(null,default$,(function (){var obj24677 = {"from":new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(params),"to":new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(params)};
return obj24677;
})(),args);
});

reagent_react_router.core.Redirect.cljs$lang$maxFixedArity = (1);

reagent_react_router.core.Redirect.cljs$lang$applyTo = (function (seq24674){
var G__24675 = cljs.core.first.call(null,seq24674);
var seq24674__$1 = cljs.core.next.call(null,seq24674);
return reagent_react_router.core.Redirect.cljs$core$IFn$_invoke$arity$variadic(G__24675,seq24674__$1);
});
reagent_react_router.core.defroutes = (function reagent_react_router$core$defroutes(r){
return clojure.walk.postwalk.call(null,(function (node){
if(cljs.core.vector_QMARK_.call(null,node)){
var vec__24682 = node;
var t = cljs.core.nth.call(null,vec__24682,(0),null);
var p = cljs.core.nth.call(null,vec__24682,(1),null);
var h = cljs.core.nth.call(null,vec__24682,(2),null);
var f = cljs.core.nthnext.call(null,vec__24682,(3));
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
return React.render(React.createElement(handler,(function (){var obj24686 = {"params":state.params};
return obj24686;
})()),elem);
});
reagent_react_router.core.run_router = (function reagent_react_router$core$run_router(elem,routes){

return ReactRouter.run(routes,cljs.core.partial.call(null,reagent_react_router.core.router_cbk,elem));
});

//# sourceMappingURL=core.js.map