// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31685__delegate = function (x__31669__auto__){
if(cljs.core.truth_(app.core.main)){
return cljs.core.apply.call(null,app.core.main,x__31669__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("app.core/main"),"' is missing"].join(''));
}
};
var G__31685 = function (var_args){
var x__31669__auto__ = null;
if (arguments.length > 0) {
var G__31686__i = 0, G__31686__a = new Array(arguments.length -  0);
while (G__31686__i < G__31686__a.length) {G__31686__a[G__31686__i] = arguments[G__31686__i + 0]; ++G__31686__i;}
  x__31669__auto__ = new cljs.core.IndexedSeq(G__31686__a,0,null);
} 
return G__31685__delegate.call(this,x__31669__auto__);};
G__31685.cljs$lang$maxFixedArity = 0;
G__31685.cljs$lang$applyTo = (function (arglist__31687){
var x__31669__auto__ = cljs.core.seq(arglist__31687);
return G__31685__delegate(x__31669__auto__);
});
G__31685.cljs$core$IFn$_invoke$arity$variadic = G__31685__delegate;
return G__31685;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1545934932466
