// Compiled by ClojureScript 1.7.145 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__16358__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_27399 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_27399){
return (function (){
var _STAR_always_update_STAR_27400 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27400;
}});})(_STAR_always_update_STAR_27399))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27399;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args27401 = [];
var len__17416__auto___27404 = arguments.length;
var i__17417__auto___27405 = (0);
while(true){
if((i__17417__auto___27405 < len__17416__auto___27404)){
args27401.push((arguments[i__17417__auto___27405]));

var G__27406 = (i__17417__auto___27405 + (1));
i__17417__auto___27405 = G__27406;
continue;
} else {
}
break;
}

var G__27403 = args27401.length;
switch (G__27403) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27401.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__27412_27416 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__27413_27417 = null;
var count__27414_27418 = (0);
var i__27415_27419 = (0);
while(true){
if((i__27415_27419 < count__27414_27418)){
var v_27420 = cljs.core._nth.call(null,chunk__27413_27417,i__27415_27419);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_27420);

var G__27421 = seq__27412_27416;
var G__27422 = chunk__27413_27417;
var G__27423 = count__27414_27418;
var G__27424 = (i__27415_27419 + (1));
seq__27412_27416 = G__27421;
chunk__27413_27417 = G__27422;
count__27414_27418 = G__27423;
i__27415_27419 = G__27424;
continue;
} else {
var temp__4425__auto___27425 = cljs.core.seq.call(null,seq__27412_27416);
if(temp__4425__auto___27425){
var seq__27412_27426__$1 = temp__4425__auto___27425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27412_27426__$1)){
var c__17161__auto___27427 = cljs.core.chunk_first.call(null,seq__27412_27426__$1);
var G__27428 = cljs.core.chunk_rest.call(null,seq__27412_27426__$1);
var G__27429 = c__17161__auto___27427;
var G__27430 = cljs.core.count.call(null,c__17161__auto___27427);
var G__27431 = (0);
seq__27412_27416 = G__27428;
chunk__27413_27417 = G__27429;
count__27414_27418 = G__27430;
i__27415_27419 = G__27431;
continue;
} else {
var v_27432 = cljs.core.first.call(null,seq__27412_27426__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_27432);

var G__27433 = cljs.core.next.call(null,seq__27412_27426__$1);
var G__27434 = null;
var G__27435 = (0);
var G__27436 = (0);
seq__27412_27416 = G__27433;
chunk__27413_27417 = G__27434;
count__27414_27418 = G__27435;
i__27415_27419 = G__27436;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map