// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9358__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9359__i = 0, G__9359__a = new Array(arguments.length -  0);
while (G__9359__i < G__9359__a.length) {G__9359__a[G__9359__i] = arguments[G__9359__i + 0]; ++G__9359__i;}
  args = new cljs.core.IndexedSeq(G__9359__a,0,null);
} 
return G__9358__delegate.call(this,args);};
G__9358.cljs$lang$maxFixedArity = 0;
G__9358.cljs$lang$applyTo = (function (arglist__9360){
var args = cljs.core.seq(arglist__9360);
return G__9358__delegate(args);
});
G__9358.cljs$core$IFn$_invoke$arity$variadic = G__9358__delegate;
return G__9358;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9361__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9362__i = 0, G__9362__a = new Array(arguments.length -  0);
while (G__9362__i < G__9362__a.length) {G__9362__a[G__9362__i] = arguments[G__9362__i + 0]; ++G__9362__i;}
  args = new cljs.core.IndexedSeq(G__9362__a,0,null);
} 
return G__9361__delegate.call(this,args);};
G__9361.cljs$lang$maxFixedArity = 0;
G__9361.cljs$lang$applyTo = (function (arglist__9363){
var args = cljs.core.seq(arglist__9363);
return G__9361__delegate(args);
});
G__9361.cljs$core$IFn$_invoke$arity$variadic = G__9361__delegate;
return G__9361;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
