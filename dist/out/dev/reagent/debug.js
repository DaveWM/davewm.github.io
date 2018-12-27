// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__22173__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22174__i = 0, G__22174__a = new Array(arguments.length -  0);
while (G__22174__i < G__22174__a.length) {G__22174__a[G__22174__i] = arguments[G__22174__i + 0]; ++G__22174__i;}
  args = new cljs.core.IndexedSeq(G__22174__a,0,null);
} 
return G__22173__delegate.call(this,args);};
G__22173.cljs$lang$maxFixedArity = 0;
G__22173.cljs$lang$applyTo = (function (arglist__22175){
var args = cljs.core.seq(arglist__22175);
return G__22173__delegate(args);
});
G__22173.cljs$core$IFn$_invoke$arity$variadic = G__22173__delegate;
return G__22173;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22176__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22177__i = 0, G__22177__a = new Array(arguments.length -  0);
while (G__22177__i < G__22177__a.length) {G__22177__a[G__22177__i] = arguments[G__22177__i + 0]; ++G__22177__i;}
  args = new cljs.core.IndexedSeq(G__22177__a,0,null);
} 
return G__22176__delegate.call(this,args);};
G__22176.cljs$lang$maxFixedArity = 0;
G__22176.cljs$lang$applyTo = (function (arglist__22178){
var args = cljs.core.seq(arglist__22178);
return G__22176__delegate(args);
});
G__22176.cljs$core$IFn$_invoke$arity$variadic = G__22176__delegate;
return G__22176;
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

//# sourceMappingURL=debug.js.map?rel=1545934922939
