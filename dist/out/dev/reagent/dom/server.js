// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.dom.server');
goog.require('cljs.core');
goog.require('cljsjs.react.dom.server');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.interop');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.server !== 'undefined') && (typeof reagent.dom.server.imported !== 'undefined')){
} else {
reagent.dom.server.imported = null;
}
reagent.dom.server.module = (function reagent$dom$server$module(){
if((!((reagent.dom.server.imported == null)))){
return reagent.dom.server.imported;
} else {
if((typeof ReactDOMServer !== 'undefined')){
return reagent.dom.server.imported = ReactDOMServer;
} else {
if((typeof require !== 'undefined')){
var or__4047__auto__ = reagent.dom.server.imported = require("react-dom/server");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
throw (new Error("require('react-dom/server') failed"));
}
} else {
throw (new Error("js/ReactDOMServer is missing"));

}
}
}
});
/**
 * Turns a component into an HTML string.
 */
reagent.dom.server.render_to_string = (function reagent$dom$server$render_to_string(component){
reagent.ratom.flush_BANG_.call(null);

var _STAR_non_reactive_STAR__orig_val__22536 = reagent.impl.util._STAR_non_reactive_STAR_;
var _STAR_non_reactive_STAR__temp_val__22537 = true;
reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__temp_val__22537;

try{return (reagent.dom.server.module.call(null)["renderToString"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__orig_val__22536;
}});
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.dom.server.render_to_static_markup = (function reagent$dom$server$render_to_static_markup(component){
reagent.ratom.flush_BANG_.call(null);

var _STAR_non_reactive_STAR__orig_val__22538 = reagent.impl.util._STAR_non_reactive_STAR_;
var _STAR_non_reactive_STAR__temp_val__22539 = true;
reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__temp_val__22539;

try{return (reagent.dom.server.module.call(null)["renderToStaticMarkup"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__orig_val__22538;
}});

//# sourceMappingURL=server.js.map?rel=1545934923894
