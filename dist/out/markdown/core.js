// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__10924){
var map__10925 = p__10924;
var map__10925__$1 = (((((!((map__10925 == null))))?(((((map__10925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10925):map__10925);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10925__$1,cljs.core.cst$kw$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10925__$1,cljs.core.cst$kw$custom_DASH_transformers);
return ((function (map__10925,map__10925__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR__orig_val__10927 = markdown.transformers._STAR_next_line_STAR_;
var _STAR_next_line_STAR__temp_val__10928 = next_line;
markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR__temp_val__10928;

try{var vec__10929 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_next_line_STAR__orig_val__10927,_STAR_next_line_STAR__temp_val__10928,map__10925,map__10925__$1,replacement_transformers,custom_transformers){
return (function (p__10932,transformer){
var vec__10933 = p__10932;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10933,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10933,(1),null);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(text,state__$1) : transformer.call(null,text,state__$1));
});})(_STAR_next_line_STAR__orig_val__10927,_STAR_next_line_STAR__temp_val__10928,map__10925,map__10925__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4047__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10929,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10929,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR__orig_val__10927;
}});
;})(map__10925,map__10925__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___10938 = arguments.length;
var i__4642__auto___10939 = (0);
while(true){
if((i__4642__auto___10939 < len__4641__auto___10938)){
args__4647__auto__.push((arguments[i__4642__auto___10939]));

var G__10940 = (i__4642__auto___10939 + (1));
i__4642__auto___10939 = G__10940;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.format.cljs$lang$applyTo = (function (seq10936){
var G__10937 = cljs.core.first(seq10936);
var seq10936__$1 = cljs.core.next(seq10936);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10937,seq10936__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__10941_10945 = cljs.core.seq(lines);
var chunk__10942_10946 = null;
var count__10943_10947 = (0);
var i__10944_10948 = (0);
while(true){
if((i__10944_10948 < count__10943_10947)){
var line_10949 = chunk__10942_10946.cljs$core$IIndexed$_nth$arity$2(null,i__10944_10948);
markdown.links.parse_reference_link(line_10949,references);


var G__10950 = seq__10941_10945;
var G__10951 = chunk__10942_10946;
var G__10952 = count__10943_10947;
var G__10953 = (i__10944_10948 + (1));
seq__10941_10945 = G__10950;
chunk__10942_10946 = G__10951;
count__10943_10947 = G__10952;
i__10944_10948 = G__10953;
continue;
} else {
var temp__5720__auto___10954 = cljs.core.seq(seq__10941_10945);
if(temp__5720__auto___10954){
var seq__10941_10955__$1 = temp__5720__auto___10954;
if(cljs.core.chunked_seq_QMARK_(seq__10941_10955__$1)){
var c__4461__auto___10956 = cljs.core.chunk_first(seq__10941_10955__$1);
var G__10957 = cljs.core.chunk_rest(seq__10941_10955__$1);
var G__10958 = c__4461__auto___10956;
var G__10959 = cljs.core.count(c__4461__auto___10956);
var G__10960 = (0);
seq__10941_10945 = G__10957;
chunk__10942_10946 = G__10958;
count__10943_10947 = G__10959;
i__10944_10948 = G__10960;
continue;
} else {
var line_10961 = cljs.core.first(seq__10941_10955__$1);
markdown.links.parse_reference_link(line_10961,references);


var G__10962 = cljs.core.next(seq__10941_10955__$1);
var G__10963 = null;
var G__10964 = (0);
var G__10965 = (0);
seq__10941_10945 = G__10962;
chunk__10942_10946 = G__10963;
count__10943_10947 = G__10964;
i__10944_10948 = G__10965;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$next_DASH_fn_DASH_id,(1),cljs.core.cst$kw$processed,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$unprocessed,cljs.core.PersistentArrayMap.EMPTY], null));
var seq__10966_10970 = cljs.core.seq(lines);
var chunk__10967_10971 = null;
var count__10968_10972 = (0);
var i__10969_10973 = (0);
while(true){
if((i__10969_10973 < count__10968_10972)){
var line_10974 = chunk__10967_10971.cljs$core$IIndexed$_nth$arity$2(null,i__10969_10973);
markdown.links.parse_footnote_link(line_10974,footnotes);


var G__10975 = seq__10966_10970;
var G__10976 = chunk__10967_10971;
var G__10977 = count__10968_10972;
var G__10978 = (i__10969_10973 + (1));
seq__10966_10970 = G__10975;
chunk__10967_10971 = G__10976;
count__10968_10972 = G__10977;
i__10969_10973 = G__10978;
continue;
} else {
var temp__5720__auto___10979 = cljs.core.seq(seq__10966_10970);
if(temp__5720__auto___10979){
var seq__10966_10980__$1 = temp__5720__auto___10979;
if(cljs.core.chunked_seq_QMARK_(seq__10966_10980__$1)){
var c__4461__auto___10981 = cljs.core.chunk_first(seq__10966_10980__$1);
var G__10982 = cljs.core.chunk_rest(seq__10966_10980__$1);
var G__10983 = c__4461__auto___10981;
var G__10984 = cljs.core.count(c__4461__auto___10981);
var G__10985 = (0);
seq__10966_10970 = G__10982;
chunk__10967_10971 = G__10983;
count__10968_10972 = G__10984;
i__10969_10973 = G__10985;
continue;
} else {
var line_10986 = cljs.core.first(seq__10966_10980__$1);
markdown.links.parse_footnote_link(line_10986,footnotes);


var G__10987 = cljs.core.next(seq__10966_10980__$1);
var G__10988 = null;
var G__10989 = (0);
var G__10990 = (0);
seq__10966_10970 = G__10987;
chunk__10967_10971 = G__10988;
count__10968_10972 = G__10989;
i__10969_10973 = G__10990;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__10992 = cljs.core.split_with((function (p1__10991_SHARP_){
return cljs.core.not_empty(p1__10991_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10992,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10992,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__10995 = markdown.common._STAR_substring_STAR_;
var formatter_orig_val__10996 = markdown.transformers.formatter;
var _STAR_substring_STAR__temp_val__10997 = ((function (_STAR_substring_STAR__orig_val__10995,formatter_orig_val__10996){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR__orig_val__10995,formatter_orig_val__10996))
;
var formatter_temp_val__10998 = markdown.core.format;
markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__10997;

markdown.transformers.formatter = formatter_temp_val__10998;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(cljs.core.cst$kw$footnotes_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__10999 = (cljs.core.truth_(cljs.core.cst$kw$parse_DASH_meta_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10999,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10999,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__11005_11024 = lines__$1;
var vec__11006_11025 = G__11005_11024;
var seq__11007_11026 = cljs.core.seq(vec__11006_11025);
var first__11008_11027 = cljs.core.first(seq__11007_11026);
var seq__11007_11028__$1 = cljs.core.next(seq__11007_11026);
var line_11029 = first__11008_11027;
var more_11030 = seq__11007_11028__$1;
var state_11031 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clojurescript,true,cljs.core.cst$kw$references,references,cljs.core.cst$kw$footnotes,footnotes,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__11005_11032__$1 = G__11005_11024;
var state_11033__$1 = state_11031;
while(true){
var vec__11009_11034 = G__11005_11032__$1;
var seq__11010_11035 = cljs.core.seq(vec__11009_11034);
var first__11011_11036 = cljs.core.first(seq__11010_11035);
var seq__11010_11037__$1 = cljs.core.next(seq__11010_11035);
var line_11038__$1 = first__11011_11036;
var more_11039__$1 = seq__11010_11037__$1;
var state_11040__$2 = state_11033__$1;
var state_11041__$3 = (cljs.core.truth_(cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_11040__$2))?(function (){var G__11012 = html;
var G__11013 = cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_11040__$2);
var G__11014 = cljs.core.first(more_11039__$1);
var G__11015 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_11040__$2,cljs.core.cst$kw$buf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lists], 0)),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__11012,G__11013,G__11014,G__11015) : transformer.call(null,G__11012,G__11013,G__11014,G__11015));
})():state_11040__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_11039__$1))){
var G__11042 = more_11039__$1;
var G__11043 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__11016 = html;
var G__11017 = line_11038__$1;
var G__11018 = cljs.core.first(more_11039__$1);
var G__11019 = state_11041__$3;
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__11016,G__11017,G__11018,G__11019) : transformer.call(null,G__11016,G__11017,G__11018,G__11019));
})(),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_11038__$1));
G__11005_11032__$1 = G__11042;
state_11033__$1 = G__11043;
continue;
} else {
var G__11020_11044 = html.append(markdown.transformers.footer(cljs.core.cst$kw$footnotes.cljs$core$IFn$_invoke$arity$1(state_11041__$3)));
var G__11021_11045 = line_11038__$1;
var G__11022_11046 = "";
var G__11023_11047 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_11041__$3,cljs.core.cst$kw$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__11020_11044,G__11021_11045,G__11022_11046,G__11023_11047) : transformer.call(null,G__11020_11044,G__11021_11045,G__11022_11046,G__11023_11047));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,metadata,cljs.core.cst$kw$html,html.toString()], null);
}finally {markdown.transformers.formatter = formatter_orig_val__10996;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__10995;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11050 = arguments.length;
var i__4642__auto___11051 = (0);
while(true){
if((i__4642__auto___11051 < len__4641__auto___11050)){
args__4647__auto__.push((arguments[i__4642__auto___11051]));

var G__11052 = (i__4642__auto___11051 + (1));
i__4642__auto___11051 = G__11052;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return cljs.core.cst$kw$html.cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq11048){
var G__11049 = cljs.core.first(seq11048);
var seq11048__$1 = cljs.core.next(seq11048);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11049,seq11048__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11055 = arguments.length;
var i__4642__auto___11056 = (0);
while(true){
if((i__4642__auto___11056 < len__4641__auto___11055)){
args__4647__auto__.push((arguments[i__4642__auto___11056]));

var G__11057 = (i__4642__auto___11056 + (1));
i__4642__auto___11056 = G__11057;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parse_DASH_meta_QMARK_,true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq11053){
var G__11054 = cljs.core.first(seq11053);
var seq11053__$1 = cljs.core.next(seq11053);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11054,seq11053__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11059 = arguments.length;
var i__4642__auto___11060 = (0);
while(true){
if((i__4642__auto___11060 < len__4641__auto___11059)){
args__4647__auto__.push((arguments[i__4642__auto___11060]));

var G__11061 = (i__4642__auto___11060 + (1));
i__4642__auto___11060 = G__11061;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq11058){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11058));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4647__auto__ = [];
var len__4641__auto___11063 = arguments.length;
var i__4642__auto___11064 = (0);
while(true){
if((i__4642__auto___11064 < len__4641__auto___11063)){
args__4647__auto__.push((arguments[i__4642__auto___11064]));

var G__11065 = (i__4642__auto___11064 + (1));
i__4642__auto___11064 = G__11065;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq11062){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11062));
});

