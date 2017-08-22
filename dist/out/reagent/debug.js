// Compiled by ClojureScript 1.7.145 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__22048__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22049__i = 0, G__22049__a = new Array(arguments.length -  0);
while (G__22049__i < G__22049__a.length) {G__22049__a[G__22049__i] = arguments[G__22049__i + 0]; ++G__22049__i;}
  args = new cljs.core.IndexedSeq(G__22049__a,0);
} 
return G__22048__delegate.call(this,args);};
G__22048.cljs$lang$maxFixedArity = 0;
G__22048.cljs$lang$applyTo = (function (arglist__22050){
var args = cljs.core.seq(arglist__22050);
return G__22048__delegate(args);
});
G__22048.cljs$core$IFn$_invoke$arity$variadic = G__22048__delegate;
return G__22048;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22051__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22052__i = 0, G__22052__a = new Array(arguments.length -  0);
while (G__22052__i < G__22052__a.length) {G__22052__a[G__22052__i] = arguments[G__22052__i + 0]; ++G__22052__i;}
  args = new cljs.core.IndexedSeq(G__22052__a,0);
} 
return G__22051__delegate.call(this,args);};
G__22051.cljs$lang$maxFixedArity = 0;
G__22051.cljs$lang$applyTo = (function (arglist__22053){
var args = cljs.core.seq(arglist__22053);
return G__22051__delegate(args);
});
G__22051.cljs$core$IFn$_invoke$arity$variadic = G__22051__delegate;
return G__22051;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map