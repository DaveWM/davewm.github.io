// Compiled by ClojureScript 1.7.145 {}
goog.provide('markdown.common');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.common._STAR_substring_STAR_;
markdown.common.escape_delimiter = [cljs.core.str(cljs.core.char$.call(null,(254))),cljs.core.str(cljs.core.char$.call(null,(491)))].join('');
markdown.common.gen_token = (function markdown$common$gen_token(n){
return [cljs.core.str(markdown.common.escape_delimiter),cljs.core.str(n),cljs.core.str(markdown.common.escape_delimiter)].join('');
});
/**
 * Freezes an output string.  Converts to a placeholder token and puts that into the output.
 *   Returns the [text, state] pair.  Adds it into the state, the 'frozen-strings' hashmap
 *   So that it can be unfrozen later.
 */
markdown.common.freeze_string = (function markdown$common$freeze_string(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23589 = arguments.length;
var i__17417__auto___23590 = (0);
while(true){
if((i__17417__auto___23590 < len__17416__auto___23589)){
args__17423__auto__.push((arguments[i__17417__auto___23590]));

var G__23591 = (i__17417__auto___23590 + (1));
i__17417__auto___23590 = G__23591;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((0) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((0)),(0))):null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(argseq__17424__auto__);
});

markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var state = cljs.core.last.call(null,args);
var token = markdown.common.gen_token.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),token], null),cljs.core.reduce.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.drop_last.call(null,args))))], null);
});

markdown.common.freeze_string.cljs$lang$maxFixedArity = (0);

markdown.common.freeze_string.cljs$lang$applyTo = (function (seq23588){
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23588));
});
/**
 * Recursively replaces the frozen strings in the output with the original text.
 */
markdown.common.thaw_string = (function markdown$common$thaw_string(text,state){
while(true){
var temp__4423__auto__ = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[cljs.core.str(markdown.common.escape_delimiter),cljs.core.str("\\d+"),cljs.core.str(markdown.common.escape_delimiter)].join('')),text);
if(cljs.core.truth_(temp__4423__auto__)){
var matches = temp__4423__auto__;
var G__23594 = cljs.core.reduce.call(null,((function (text,state,matches,temp__4423__auto__){
return (function (s,r){
return clojure.string.replace.call(null,s,cljs.core.re_pattern.call(null,r),((function (text,state,matches,temp__4423__auto__){
return (function (p1__23592_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state),p1__23592_SHARP_,p1__23592_SHARP_);
});})(text,state,matches,temp__4423__auto__))
);
});})(text,state,matches,temp__4423__auto__))
,text,matches);
var G__23595 = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),((function (text,state,matches,temp__4423__auto__){
return (function (p1__23593_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__23593_SHARP_,matches);
});})(text,state,matches,temp__4423__auto__))
);
text = G__23594;
state = G__23595;
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
if(!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)))){
return markdown.common.thaw_string.call(null,text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_code = (function markdown$common$escape_code(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.common.escaped_chars = (function markdown$common$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__16358__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
markdown.common.separator = (function markdown$common$separator(escape_QMARK_,text,open,close,separator__$1,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,separator__$1)),cljs.core.seq.call(null,text));
var cur_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.into.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.call(null,out,separator__$1):out),buf)),cljs.core.dissoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)){
var G__23596 = cljs.core.vec.call(null,cljs.core.concat.call(null,out,cljs.core.seq.call(null,open),(cljs.core.truth_(escape_QMARK_)?cljs.core.seq.call(null,markdown.common.escape_code.call(null,clojure.string.join.call(null,buf))):buf),cljs.core.seq.call(null,close)));
var G__23597 = cljs.core.PersistentVector.EMPTY;
var G__23598 = cljs.core.rest.call(null,tokens);
var G__23599 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
out = G__23596;
buf = G__23597;
tokens = G__23598;
cur_state = G__23599;
continue;
} else {
var G__23600 = out;
var G__23601 = cljs.core.into.call(null,buf,cljs.core.first.call(null,tokens));
var G__23602 = cljs.core.rest.call(null,tokens);
var G__23603 = cur_state;
out = G__23600;
buf = G__23601;
tokens = G__23602;
cur_state = G__23603;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)){
var G__23604 = out;
var G__23605 = buf;
var G__23606 = cljs.core.rest.call(null,tokens);
var G__23607 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),true);
out = G__23604;
buf = G__23605;
tokens = G__23606;
cur_state = G__23607;
continue;
} else {
var G__23608 = cljs.core.into.call(null,out,cljs.core.first.call(null,tokens));
var G__23609 = buf;
var G__23610 = cljs.core.rest.call(null,tokens);
var G__23611 = cur_state;
out = G__23608;
buf = G__23609;
tokens = G__23610;
cur_state = G__23611;
continue;

}
}
}
break;
}
}
});
markdown.common.strong = (function markdown$common$strong(text,state){
return markdown.common.separator.call(null,false,text,"<strong>","</strong>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","*"], null),state);
});
markdown.common.bold = (function markdown$common$bold(text,state){
return markdown.common.separator.call(null,false,text,"<b>","</b>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_"], null),state);
});
markdown.common.em = (function markdown$common$em(text,state){
return markdown.common.separator.call(null,false,text,"<em>","</em>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null),state);
});
markdown.common.italics = (function markdown$common$italics(text,state){
return markdown.common.separator.call(null,false,text,"<i>","</i>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_"], null),state);
});
markdown.common.strikethrough = (function markdown$common$strikethrough(text,state){
return markdown.common.separator.call(null,false,text,"<del>","</del>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","~"], null),state);
});
markdown.common.inline_code = (function markdown$common$inline_code(text,state){
return markdown.common.separator.call(null,true,text,"<code>","</code>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null),state);
});
markdown.common.heading_text = (function markdown$common$heading_text(text){
return clojure.string.trim.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/^([ ]+)?[#]+/,""),/[#]+$/,""));
});
markdown.common.heading_level = (function markdown$common$heading_level(text){
var num_hashes = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__23612_SHARP_){
return cljs.core.not_EQ_.call(null," ",p1__23612_SHARP_);
}),cljs.core.take_while.call(null,(function (p1__23613_SHARP_){
return (cljs.core._EQ_.call(null,"#",p1__23613_SHARP_)) || (cljs.core._EQ_.call(null," ",p1__23613_SHARP_));
}),cljs.core.seq.call(null,text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.common.make_heading = (function markdown$common$make_heading(text,heading_anchors){
var temp__4425__auto__ = markdown.common.heading_level.call(null,text);
if(cljs.core.truth_(temp__4425__auto__)){
var heading = temp__4425__auto__;
var text__$1 = markdown.common.heading_text.call(null,text);
return [cljs.core.str("<h"),cljs.core.str(heading),cljs.core.str(">"),cljs.core.str((cljs.core.truth_(heading_anchors)?[cljs.core.str("<a name=\""),cljs.core.str(clojure.string.replace.call(null,clojure.string.lower_case.call(null,text__$1)," ","&#95;")),cljs.core.str("\"></a>")].join(''):null)),cljs.core.str(text__$1),cljs.core.str("</h"),cljs.core.str(heading),cljs.core.str(">")].join('');
} else {
return null;
}
});
markdown.common.dashes = (function markdown$common$dashes(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__16358__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\-\-\-/,"&mdash;"),/\-\-/,"&ndash;")),state], null);
});

//# sourceMappingURL=common.js.map