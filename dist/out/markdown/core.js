// Compiled by ClojureScript 1.7.145 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__23461){
var map__23468 = p__23461;
var map__23468__$1 = ((((!((map__23468 == null)))?((((map__23468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23468):map__23468);
var replacement_transformers = cljs.core.get.call(null,map__23468__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__23468__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__23468,map__23468__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_23470 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__23471 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_23470,map__23468,map__23468__$1,replacement_transformers,custom_transformers){
return (function (p__23472,transformer){
var vec__23473 = p__23472;
var text = cljs.core.nth.call(null,vec__23473,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__23473,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_23470,map__23468,map__23468__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__16358__auto__ = replacement_transformers;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__23471,(0),null);
var new_state = cljs.core.nth.call(null,vec__23471,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_23470;
}});
;})(map__23468,map__23468__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23476 = arguments.length;
var i__17417__auto___23477 = (0);
while(true){
if((i__17417__auto___23477 < len__17416__auto___23476)){
args__17423__auto__.push((arguments[i__17417__auto___23477]));

var G__23478 = (i__17417__auto___23477 + (1));
i__17417__auto___23477 = G__23478;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq23474){
var G__23475 = cljs.core.first.call(null,seq23474);
var seq23474__$1 = cljs.core.next.call(null,seq23474);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__23475,seq23474__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__23483_23487 = cljs.core.seq.call(null,lines);
var chunk__23484_23488 = null;
var count__23485_23489 = (0);
var i__23486_23490 = (0);
while(true){
if((i__23486_23490 < count__23485_23489)){
var line_23491 = cljs.core._nth.call(null,chunk__23484_23488,i__23486_23490);
markdown.links.parse_reference_link.call(null,line_23491,references);

var G__23492 = seq__23483_23487;
var G__23493 = chunk__23484_23488;
var G__23494 = count__23485_23489;
var G__23495 = (i__23486_23490 + (1));
seq__23483_23487 = G__23492;
chunk__23484_23488 = G__23493;
count__23485_23489 = G__23494;
i__23486_23490 = G__23495;
continue;
} else {
var temp__4425__auto___23496 = cljs.core.seq.call(null,seq__23483_23487);
if(temp__4425__auto___23496){
var seq__23483_23497__$1 = temp__4425__auto___23496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23483_23497__$1)){
var c__17161__auto___23498 = cljs.core.chunk_first.call(null,seq__23483_23497__$1);
var G__23499 = cljs.core.chunk_rest.call(null,seq__23483_23497__$1);
var G__23500 = c__17161__auto___23498;
var G__23501 = cljs.core.count.call(null,c__17161__auto___23498);
var G__23502 = (0);
seq__23483_23487 = G__23499;
chunk__23484_23488 = G__23500;
count__23485_23489 = G__23501;
i__23486_23490 = G__23502;
continue;
} else {
var line_23503 = cljs.core.first.call(null,seq__23483_23497__$1);
markdown.links.parse_reference_link.call(null,line_23503,references);

var G__23504 = cljs.core.next.call(null,seq__23483_23497__$1);
var G__23505 = null;
var G__23506 = (0);
var G__23507 = (0);
seq__23483_23487 = G__23504;
chunk__23484_23488 = G__23505;
count__23485_23489 = G__23506;
i__23486_23490 = G__23507;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__23512_23516 = cljs.core.seq.call(null,lines);
var chunk__23513_23517 = null;
var count__23514_23518 = (0);
var i__23515_23519 = (0);
while(true){
if((i__23515_23519 < count__23514_23518)){
var line_23520 = cljs.core._nth.call(null,chunk__23513_23517,i__23515_23519);
markdown.links.parse_footnote_link.call(null,line_23520,footnotes);

var G__23521 = seq__23512_23516;
var G__23522 = chunk__23513_23517;
var G__23523 = count__23514_23518;
var G__23524 = (i__23515_23519 + (1));
seq__23512_23516 = G__23521;
chunk__23513_23517 = G__23522;
count__23514_23518 = G__23523;
i__23515_23519 = G__23524;
continue;
} else {
var temp__4425__auto___23525 = cljs.core.seq.call(null,seq__23512_23516);
if(temp__4425__auto___23525){
var seq__23512_23526__$1 = temp__4425__auto___23525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23512_23526__$1)){
var c__17161__auto___23527 = cljs.core.chunk_first.call(null,seq__23512_23526__$1);
var G__23528 = cljs.core.chunk_rest.call(null,seq__23512_23526__$1);
var G__23529 = c__17161__auto___23527;
var G__23530 = cljs.core.count.call(null,c__17161__auto___23527);
var G__23531 = (0);
seq__23512_23516 = G__23528;
chunk__23513_23517 = G__23529;
count__23514_23518 = G__23530;
i__23515_23519 = G__23531;
continue;
} else {
var line_23532 = cljs.core.first.call(null,seq__23512_23526__$1);
markdown.links.parse_footnote_link.call(null,line_23532,footnotes);

var G__23533 = cljs.core.next.call(null,seq__23512_23526__$1);
var G__23534 = null;
var G__23535 = (0);
var G__23536 = (0);
seq__23512_23516 = G__23533;
chunk__23513_23517 = G__23534;
count__23514_23518 = G__23535;
i__23515_23519 = G__23536;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__23539 = cljs.core.split_with.call(null,(function (p1__23537_SHARP_){
return cljs.core.not_empty.call(null,p1__23537_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__23539,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__23539,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_23547 = markdown.common._STAR_substring_STAR_;
var formatter23548 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_23547,formatter23548){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_23547,formatter23548))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__23549 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__23549,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__23549,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__23551_23554 = lines__$1;
var vec__23552_23555 = G__23551_23554;
var line_23556 = cljs.core.nth.call(null,vec__23552_23555,(0),null);
var more_23557 = cljs.core.nthnext.call(null,vec__23552_23555,(1));
var state_23558 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__23551_23559__$1 = G__23551_23554;
var state_23560__$1 = state_23558;
while(true){
var vec__23553_23561 = G__23551_23559__$1;
var line_23562__$1 = cljs.core.nth.call(null,vec__23553_23561,(0),null);
var more_23563__$1 = cljs.core.nthnext.call(null,vec__23553_23561,(1));
var state_23564__$2 = state_23560__$1;
var state_23565__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_23564__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_23564__$2),cljs.core.first.call(null,more_23563__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_23564__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_23564__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_23563__$1))){
var G__23566 = more_23563__$1;
var G__23567 = cljs.core.assoc.call(null,transformer.call(null,html,line_23562__$1,cljs.core.first.call(null,more_23563__$1),state_23565__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_23562__$1));
G__23551_23559__$1 = G__23566;
state_23560__$1 = G__23567;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_23565__$3))),line_23562__$1,"",cljs.core.assoc.call(null,state_23565__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter23548;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_23547;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23570 = arguments.length;
var i__17417__auto___23571 = (0);
while(true){
if((i__17417__auto___23571 < len__17416__auto___23570)){
args__17423__auto__.push((arguments[i__17417__auto___23571]));

var G__23572 = (i__17417__auto___23571 + (1));
i__17417__auto___23571 = G__23572;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq23568){
var G__23569 = cljs.core.first.call(null,seq23568);
var seq23568__$1 = cljs.core.next.call(null,seq23568);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__23569,seq23568__$1);
});
markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23575 = arguments.length;
var i__17417__auto___23576 = (0);
while(true){
if((i__17417__auto___23576 < len__17416__auto___23575)){
args__17423__auto__.push((arguments[i__17417__auto___23576]));

var G__23577 = (i__17417__auto___23576 + (1));
i__17417__auto___23576 = G__23577;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq23573){
var G__23574 = cljs.core.first.call(null,seq23573);
var seq23573__$1 = cljs.core.next.call(null,seq23573);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__23574,seq23573__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23579 = arguments.length;
var i__17417__auto___23580 = (0);
while(true){
if((i__17417__auto___23580 < len__17416__auto___23579)){
args__17423__auto__.push((arguments[i__17417__auto___23580]));

var G__23581 = (i__17417__auto___23580 + (1));
i__17417__auto___23580 = G__23581;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((0) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__17424__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq23578){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23578));
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23583 = arguments.length;
var i__17417__auto___23584 = (0);
while(true){
if((i__17417__auto___23584 < len__17416__auto___23583)){
args__17423__auto__.push((arguments[i__17417__auto___23584]));

var G__23585 = (i__17417__auto___23584 + (1));
i__17417__auto___23584 = G__23585;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((0) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__17424__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq23582){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23582));
});

//# sourceMappingURL=core.js.map