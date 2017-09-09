// Compiled by ClojureScript 1.7.145 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__28852){
var map__28859 = p__28852;
var map__28859__$1 = ((((!((map__28859 == null)))?((((map__28859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28859):map__28859);
var replacement_transformers = cljs.core.get.call(null,map__28859__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__28859__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__28859,map__28859__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_28861 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__28862 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_28861,map__28859,map__28859__$1,replacement_transformers,custom_transformers){
return (function (p__28863,transformer){
var vec__28864 = p__28863;
var text = cljs.core.nth.call(null,vec__28864,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__28864,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_28861,map__28859,map__28859__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__16358__auto__ = replacement_transformers;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__28862,(0),null);
var new_state = cljs.core.nth.call(null,vec__28862,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_28861;
}});
;})(map__28859,map__28859__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__17423__auto__ = [];
var len__17416__auto___28867 = arguments.length;
var i__17417__auto___28868 = (0);
while(true){
if((i__17417__auto___28868 < len__17416__auto___28867)){
args__17423__auto__.push((arguments[i__17417__auto___28868]));

var G__28869 = (i__17417__auto___28868 + (1));
i__17417__auto___28868 = G__28869;
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

markdown.core.format.cljs$lang$applyTo = (function (seq28865){
var G__28866 = cljs.core.first.call(null,seq28865);
var seq28865__$1 = cljs.core.next.call(null,seq28865);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__28866,seq28865__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__28874_28878 = cljs.core.seq.call(null,lines);
var chunk__28875_28879 = null;
var count__28876_28880 = (0);
var i__28877_28881 = (0);
while(true){
if((i__28877_28881 < count__28876_28880)){
var line_28882 = cljs.core._nth.call(null,chunk__28875_28879,i__28877_28881);
markdown.links.parse_reference_link.call(null,line_28882,references);

var G__28883 = seq__28874_28878;
var G__28884 = chunk__28875_28879;
var G__28885 = count__28876_28880;
var G__28886 = (i__28877_28881 + (1));
seq__28874_28878 = G__28883;
chunk__28875_28879 = G__28884;
count__28876_28880 = G__28885;
i__28877_28881 = G__28886;
continue;
} else {
var temp__4425__auto___28887 = cljs.core.seq.call(null,seq__28874_28878);
if(temp__4425__auto___28887){
var seq__28874_28888__$1 = temp__4425__auto___28887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28874_28888__$1)){
var c__17161__auto___28889 = cljs.core.chunk_first.call(null,seq__28874_28888__$1);
var G__28890 = cljs.core.chunk_rest.call(null,seq__28874_28888__$1);
var G__28891 = c__17161__auto___28889;
var G__28892 = cljs.core.count.call(null,c__17161__auto___28889);
var G__28893 = (0);
seq__28874_28878 = G__28890;
chunk__28875_28879 = G__28891;
count__28876_28880 = G__28892;
i__28877_28881 = G__28893;
continue;
} else {
var line_28894 = cljs.core.first.call(null,seq__28874_28888__$1);
markdown.links.parse_reference_link.call(null,line_28894,references);

var G__28895 = cljs.core.next.call(null,seq__28874_28888__$1);
var G__28896 = null;
var G__28897 = (0);
var G__28898 = (0);
seq__28874_28878 = G__28895;
chunk__28875_28879 = G__28896;
count__28876_28880 = G__28897;
i__28877_28881 = G__28898;
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
var seq__28903_28907 = cljs.core.seq.call(null,lines);
var chunk__28904_28908 = null;
var count__28905_28909 = (0);
var i__28906_28910 = (0);
while(true){
if((i__28906_28910 < count__28905_28909)){
var line_28911 = cljs.core._nth.call(null,chunk__28904_28908,i__28906_28910);
markdown.links.parse_footnote_link.call(null,line_28911,footnotes);

var G__28912 = seq__28903_28907;
var G__28913 = chunk__28904_28908;
var G__28914 = count__28905_28909;
var G__28915 = (i__28906_28910 + (1));
seq__28903_28907 = G__28912;
chunk__28904_28908 = G__28913;
count__28905_28909 = G__28914;
i__28906_28910 = G__28915;
continue;
} else {
var temp__4425__auto___28916 = cljs.core.seq.call(null,seq__28903_28907);
if(temp__4425__auto___28916){
var seq__28903_28917__$1 = temp__4425__auto___28916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28903_28917__$1)){
var c__17161__auto___28918 = cljs.core.chunk_first.call(null,seq__28903_28917__$1);
var G__28919 = cljs.core.chunk_rest.call(null,seq__28903_28917__$1);
var G__28920 = c__17161__auto___28918;
var G__28921 = cljs.core.count.call(null,c__17161__auto___28918);
var G__28922 = (0);
seq__28903_28907 = G__28919;
chunk__28904_28908 = G__28920;
count__28905_28909 = G__28921;
i__28906_28910 = G__28922;
continue;
} else {
var line_28923 = cljs.core.first.call(null,seq__28903_28917__$1);
markdown.links.parse_footnote_link.call(null,line_28923,footnotes);

var G__28924 = cljs.core.next.call(null,seq__28903_28917__$1);
var G__28925 = null;
var G__28926 = (0);
var G__28927 = (0);
seq__28903_28907 = G__28924;
chunk__28904_28908 = G__28925;
count__28905_28909 = G__28926;
i__28906_28910 = G__28927;
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
var vec__28930 = cljs.core.split_with.call(null,(function (p1__28928_SHARP_){
return cljs.core.not_empty.call(null,p1__28928_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__28930,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__28930,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_28938 = markdown.common._STAR_substring_STAR_;
var formatter28939 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_28938,formatter28939){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_28938,formatter28939))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__28940 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__28940,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__28940,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__28942_28945 = lines__$1;
var vec__28943_28946 = G__28942_28945;
var line_28947 = cljs.core.nth.call(null,vec__28943_28946,(0),null);
var more_28948 = cljs.core.nthnext.call(null,vec__28943_28946,(1));
var state_28949 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__28942_28950__$1 = G__28942_28945;
var state_28951__$1 = state_28949;
while(true){
var vec__28944_28952 = G__28942_28950__$1;
var line_28953__$1 = cljs.core.nth.call(null,vec__28944_28952,(0),null);
var more_28954__$1 = cljs.core.nthnext.call(null,vec__28944_28952,(1));
var state_28955__$2 = state_28951__$1;
var state_28956__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_28955__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_28955__$2),cljs.core.first.call(null,more_28954__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_28955__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_28955__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_28954__$1))){
var G__28957 = more_28954__$1;
var G__28958 = cljs.core.assoc.call(null,transformer.call(null,html,line_28953__$1,cljs.core.first.call(null,more_28954__$1),state_28956__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_28953__$1));
G__28942_28950__$1 = G__28957;
state_28951__$1 = G__28958;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_28956__$3))),line_28953__$1,"",cljs.core.assoc.call(null,state_28956__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter28939;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_28938;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__17423__auto__ = [];
var len__17416__auto___28961 = arguments.length;
var i__17417__auto___28962 = (0);
while(true){
if((i__17417__auto___28962 < len__17416__auto___28961)){
args__17423__auto__.push((arguments[i__17417__auto___28962]));

var G__28963 = (i__17417__auto___28962 + (1));
i__17417__auto___28962 = G__28963;
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

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq28959){
var G__28960 = cljs.core.first.call(null,seq28959);
var seq28959__$1 = cljs.core.next.call(null,seq28959);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__28960,seq28959__$1);
});
markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__17423__auto__ = [];
var len__17416__auto___28966 = arguments.length;
var i__17417__auto___28967 = (0);
while(true){
if((i__17417__auto___28967 < len__17416__auto___28966)){
args__17423__auto__.push((arguments[i__17417__auto___28967]));

var G__28968 = (i__17417__auto___28967 + (1));
i__17417__auto___28967 = G__28968;
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

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq28964){
var G__28965 = cljs.core.first.call(null,seq28964);
var seq28964__$1 = cljs.core.next.call(null,seq28964);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__28965,seq28964__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__17423__auto__ = [];
var len__17416__auto___28970 = arguments.length;
var i__17417__auto___28971 = (0);
while(true){
if((i__17417__auto___28971 < len__17416__auto___28970)){
args__17423__auto__.push((arguments[i__17417__auto___28971]));

var G__28972 = (i__17417__auto___28971 + (1));
i__17417__auto___28971 = G__28972;
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

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq28969){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28969));
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__17423__auto__ = [];
var len__17416__auto___28974 = arguments.length;
var i__17417__auto___28975 = (0);
while(true){
if((i__17417__auto___28975 < len__17416__auto___28974)){
args__17423__auto__.push((arguments[i__17417__auto___28975]));

var G__28976 = (i__17417__auto___28975 + (1));
i__17417__auto___28975 = G__28976;
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

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq28973){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28973));
});

//# sourceMappingURL=core.js.map