// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if((!((reagent.dom.imported == null)))){
return reagent.dom.imported;
} else {
if((typeof ReactDOM !== 'undefined')){
return reagent.dom.imported = ReactDOM;
} else {
if((typeof require !== 'undefined')){
var or__4047__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22542 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22543 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22543;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__22542,_STAR_always_update_STAR__temp_val__22543){
return (function (){
var _STAR_always_update_STAR__orig_val__22544 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22545 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22545;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22544;
}});})(_STAR_always_update_STAR__orig_val__22542,_STAR_always_update_STAR__temp_val__22543))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22542;
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
var G__22547 = arguments.length;
switch (G__22547) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var seq__22549_22553 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__22550_22554 = null;
var count__22551_22555 = (0);
var i__22552_22556 = (0);
while(true){
if((i__22552_22556 < count__22551_22555)){
var v_22557 = cljs.core._nth.call(null,chunk__22550_22554,i__22552_22556);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22557);


var G__22558 = seq__22549_22553;
var G__22559 = chunk__22550_22554;
var G__22560 = count__22551_22555;
var G__22561 = (i__22552_22556 + (1));
seq__22549_22553 = G__22558;
chunk__22550_22554 = G__22559;
count__22551_22555 = G__22560;
i__22552_22556 = G__22561;
continue;
} else {
var temp__5720__auto___22562 = cljs.core.seq.call(null,seq__22549_22553);
if(temp__5720__auto___22562){
var seq__22549_22563__$1 = temp__5720__auto___22562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22549_22563__$1)){
var c__4461__auto___22564 = cljs.core.chunk_first.call(null,seq__22549_22563__$1);
var G__22565 = cljs.core.chunk_rest.call(null,seq__22549_22563__$1);
var G__22566 = c__4461__auto___22564;
var G__22567 = cljs.core.count.call(null,c__4461__auto___22564);
var G__22568 = (0);
seq__22549_22553 = G__22565;
chunk__22550_22554 = G__22566;
count__22551_22555 = G__22567;
i__22552_22556 = G__22568;
continue;
} else {
var v_22569 = cljs.core.first.call(null,seq__22549_22563__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_22569);


var G__22570 = cljs.core.next.call(null,seq__22549_22563__$1);
var G__22571 = null;
var G__22572 = (0);
var G__22573 = (0);
seq__22549_22553 = G__22570;
chunk__22550_22554 = G__22571;
count__22551_22555 = G__22572;
i__22552_22556 = G__22573;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1545934923926
