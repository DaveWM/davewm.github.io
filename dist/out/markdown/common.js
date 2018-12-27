// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('markdown.common');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
markdown.common.escape_delimiter = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((254))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((491)))].join('');
markdown.common.gen_token = (function markdown$common$gen_token(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter)].join('');
});
/**
 * Freezes an output string.  Converts to a placeholder token and puts that into the output.
 *   Returns the [text, state] pair.  Adds it into the state, the 'frozen-strings' hashmap
 *   So that it can be unfrozen later.
 */
markdown.common.freeze_string = (function markdown$common$freeze_string(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10381 = arguments.length;
var i__4642__auto___10382 = (0);
while(true){
if((i__4642__auto___10382 < len__4641__auto___10381)){
args__4647__auto__.push((arguments[i__4642__auto___10382]));

var G__10383 = (i__4642__auto___10382 + (1));
i__4642__auto___10382 = G__10383;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var state = cljs.core.last(args);
var token = markdown.common.gen_token(cljs.core.count(cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frozen_DASH_strings,token], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(args))))], null);
});

markdown.common.freeze_string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.common.freeze_string.cljs$lang$applyTo = (function (seq10380){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10380));
});

/**
 * Recursively replaces the frozen strings in the output with the original text.
 */
markdown.common.thaw_string = (function markdown$common$thaw_string(text,state){
while(true){
var temp__5718__auto__ = cljs.core.re_seq(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter),"\\d+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter)].join('')),text);
if(cljs.core.truth_(temp__5718__auto__)){
var matches = temp__5718__auto__;
var G__10386 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (text,state,matches,temp__5718__auto__){
return (function (s,r){
return clojure.string.replace(s,cljs.core.re_pattern(r),((function (text,state,matches,temp__5718__auto__){
return (function (p1__10384_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state),p1__10384_SHARP_,p1__10384_SHARP_);
});})(text,state,matches,temp__5718__auto__))
);
});})(text,state,matches,temp__5718__auto__))
,text,matches);
var G__10387 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$frozen_DASH_strings,((function (text,state,matches,temp__5718__auto__){
return (function (p1__10385_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__10385_SHARP_,matches);
});})(text,state,matches,temp__5718__auto__))
);
text = G__10386;
state = G__10387;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
break;
}
});
/**
 * Terminally encoded strings are ones that we've determined should no longer be processed or evaluated
 */
markdown.common.thaw_strings = (function markdown$common$thaw_strings(text,state){
if((!(cljs.core.empty_QMARK_(cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state))))){
return markdown.common.thaw_string(text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_code = (function markdown$common$escape_code(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.common.escaped_chars = (function markdown$common$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
markdown.common.separator = (function markdown$common$separator(escape_QMARK_,text,open,close,separator,state){
if(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.first(separator)),cljs.core.seq(text));
var cur_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$found_DASH_token,false);
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$found_DASH_token.cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,separator):out),buf)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cur_state,cljs.core.cst$kw$found_DASH_token)], null);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$found_DASH_token.cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator)){
var G__10388 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.seq(open),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(escape_QMARK_)?cljs.core.seq(markdown.common.escape_code(clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf))):buf),cljs.core.seq(close)], 0)));
var G__10389 = cljs.core.PersistentVector.EMPTY;
var G__10390 = cljs.core.rest(tokens);
var G__10391 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,cljs.core.cst$kw$found_DASH_token,false);
out = G__10388;
buf = G__10389;
tokens = G__10390;
cur_state = G__10391;
continue;
} else {
var G__10392 = out;
var G__10393 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(tokens));
var G__10394 = cljs.core.rest(tokens);
var G__10395 = cur_state;
out = G__10392;
buf = G__10393;
tokens = G__10394;
cur_state = G__10395;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator)){
var G__10396 = out;
var G__10397 = buf;
var G__10398 = cljs.core.rest(tokens);
var G__10399 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,cljs.core.cst$kw$found_DASH_token,true);
out = G__10396;
buf = G__10397;
tokens = G__10398;
cur_state = G__10399;
continue;
} else {
var G__10400 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(tokens));
var G__10401 = buf;
var G__10402 = cljs.core.rest(tokens);
var G__10403 = cur_state;
out = G__10400;
buf = G__10401;
tokens = G__10402;
cur_state = G__10403;
continue;

}
}
}
break;
}
}
});
markdown.common.strong = (function markdown$common$strong(text,state){
return markdown.common.separator(false,text,"<strong>","</strong>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","*"], null),state);
});
markdown.common.bold = (function markdown$common$bold(text,state){
return markdown.common.separator(false,text,"<b>","</b>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_"], null),state);
});
markdown.common.em = (function markdown$common$em(text,state){
return markdown.common.separator(false,text,"<em>","</em>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null),state);
});
markdown.common.italics = (function markdown$common$italics(text,state){
return markdown.common.separator(false,text,"<i>","</i>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_"], null),state);
});
markdown.common.strikethrough = (function markdown$common$strikethrough(text,state){
return markdown.common.separator(false,text,"<del>","</del>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","~"], null),state);
});
markdown.common.inline_code = (function markdown$common$inline_code(text,state){
return markdown.common.separator(true,text,"<code>","</code>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null),state);
});
markdown.common.heading_text = (function markdown$common$heading_text(text){
return clojure.string.trim(clojure.string.replace(clojure.string.replace(text,/^([ ]+)?[#]+/,""),/[#]+$/,""));
});
markdown.common.heading_level = (function markdown$common$heading_level(text){
var num_hashes = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__10404_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__10404_SHARP_);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__10405_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__10405_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__10405_SHARP_)));
}),cljs.core.seq(text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.common.make_heading = (function markdown$common$make_heading(text,heading_anchors){
var temp__5720__auto__ = markdown.common.heading_level(text);
if(cljs.core.truth_(temp__5720__auto__)){
var heading = temp__5720__auto__;
var text__$1 = markdown.common.heading_text(text);
return ["<h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(heading_anchors)?["<a name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.lower_case(text__$1)," ","&#95;")),"\"></a>"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text__$1),"</h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),">"].join('');
} else {
return null;
}
});
markdown.common.dashes = (function markdown$common$dashes(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(clojure.string.replace(text,/\-\-\-/,"&mdash;"),/\-\-/,"&ndash;")),state], null);
});
