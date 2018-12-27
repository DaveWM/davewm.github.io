// Compiled by ClojureScript 1.10.439 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__22868){
var map__22869 = p__22868;
var map__22869__$1 = (((((!((map__22869 == null))))?(((((map__22869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22869):map__22869);
var replacement_transformers = cljs.core.get.call(null,map__22869__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__22869__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__22869,map__22869__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR__orig_val__22871 = markdown.transformers._STAR_next_line_STAR_;
var _STAR_next_line_STAR__temp_val__22872 = next_line;
markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR__temp_val__22872;

try{var vec__22873 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR__orig_val__22871,_STAR_next_line_STAR__temp_val__22872,map__22869,map__22869__$1,replacement_transformers,custom_transformers){
return (function (p__22876,transformer){
var vec__22877 = p__22876;
var text = cljs.core.nth.call(null,vec__22877,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__22877,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR__orig_val__22871,_STAR_next_line_STAR__temp_val__22872,map__22869,map__22869__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4047__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__22873,(0),null);
var new_state = cljs.core.nth.call(null,vec__22873,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR__orig_val__22871;
}});
;})(map__22869,map__22869__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___22882 = arguments.length;
var i__4642__auto___22883 = (0);
while(true){
if((i__4642__auto___22883 < len__4641__auto___22882)){
args__4647__auto__.push((arguments[i__4642__auto___22883]));

var G__22884 = (i__4642__auto___22883 + (1));
i__4642__auto___22883 = G__22884;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.format.cljs$lang$applyTo = (function (seq22880){
var G__22881 = cljs.core.first.call(null,seq22880);
var seq22880__$1 = cljs.core.next.call(null,seq22880);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22881,seq22880__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__22885_22889 = cljs.core.seq.call(null,lines);
var chunk__22886_22890 = null;
var count__22887_22891 = (0);
var i__22888_22892 = (0);
while(true){
if((i__22888_22892 < count__22887_22891)){
var line_22893 = cljs.core._nth.call(null,chunk__22886_22890,i__22888_22892);
markdown.links.parse_reference_link.call(null,line_22893,references);


var G__22894 = seq__22885_22889;
var G__22895 = chunk__22886_22890;
var G__22896 = count__22887_22891;
var G__22897 = (i__22888_22892 + (1));
seq__22885_22889 = G__22894;
chunk__22886_22890 = G__22895;
count__22887_22891 = G__22896;
i__22888_22892 = G__22897;
continue;
} else {
var temp__5720__auto___22898 = cljs.core.seq.call(null,seq__22885_22889);
if(temp__5720__auto___22898){
var seq__22885_22899__$1 = temp__5720__auto___22898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22885_22899__$1)){
var c__4461__auto___22900 = cljs.core.chunk_first.call(null,seq__22885_22899__$1);
var G__22901 = cljs.core.chunk_rest.call(null,seq__22885_22899__$1);
var G__22902 = c__4461__auto___22900;
var G__22903 = cljs.core.count.call(null,c__4461__auto___22900);
var G__22904 = (0);
seq__22885_22889 = G__22901;
chunk__22886_22890 = G__22902;
count__22887_22891 = G__22903;
i__22888_22892 = G__22904;
continue;
} else {
var line_22905 = cljs.core.first.call(null,seq__22885_22899__$1);
markdown.links.parse_reference_link.call(null,line_22905,references);


var G__22906 = cljs.core.next.call(null,seq__22885_22899__$1);
var G__22907 = null;
var G__22908 = (0);
var G__22909 = (0);
seq__22885_22889 = G__22906;
chunk__22886_22890 = G__22907;
count__22887_22891 = G__22908;
i__22888_22892 = G__22909;
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
var seq__22910_22914 = cljs.core.seq.call(null,lines);
var chunk__22911_22915 = null;
var count__22912_22916 = (0);
var i__22913_22917 = (0);
while(true){
if((i__22913_22917 < count__22912_22916)){
var line_22918 = cljs.core._nth.call(null,chunk__22911_22915,i__22913_22917);
markdown.links.parse_footnote_link.call(null,line_22918,footnotes);


var G__22919 = seq__22910_22914;
var G__22920 = chunk__22911_22915;
var G__22921 = count__22912_22916;
var G__22922 = (i__22913_22917 + (1));
seq__22910_22914 = G__22919;
chunk__22911_22915 = G__22920;
count__22912_22916 = G__22921;
i__22913_22917 = G__22922;
continue;
} else {
var temp__5720__auto___22923 = cljs.core.seq.call(null,seq__22910_22914);
if(temp__5720__auto___22923){
var seq__22910_22924__$1 = temp__5720__auto___22923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22910_22924__$1)){
var c__4461__auto___22925 = cljs.core.chunk_first.call(null,seq__22910_22924__$1);
var G__22926 = cljs.core.chunk_rest.call(null,seq__22910_22924__$1);
var G__22927 = c__4461__auto___22925;
var G__22928 = cljs.core.count.call(null,c__4461__auto___22925);
var G__22929 = (0);
seq__22910_22914 = G__22926;
chunk__22911_22915 = G__22927;
count__22912_22916 = G__22928;
i__22913_22917 = G__22929;
continue;
} else {
var line_22930 = cljs.core.first.call(null,seq__22910_22924__$1);
markdown.links.parse_footnote_link.call(null,line_22930,footnotes);


var G__22931 = cljs.core.next.call(null,seq__22910_22924__$1);
var G__22932 = null;
var G__22933 = (0);
var G__22934 = (0);
seq__22910_22914 = G__22931;
chunk__22911_22915 = G__22932;
count__22912_22916 = G__22933;
i__22913_22917 = G__22934;
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
var vec__22936 = cljs.core.split_with.call(null,(function (p1__22935_SHARP_){
return cljs.core.not_empty.call(null,p1__22935_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__22936,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__22936,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__22939 = markdown.common._STAR_substring_STAR_;
var formatter_orig_val__22940 = markdown.transformers.formatter;
var _STAR_substring_STAR__temp_val__22941 = ((function (_STAR_substring_STAR__orig_val__22939,formatter_orig_val__22940){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR__orig_val__22939,formatter_orig_val__22940))
;
var formatter_temp_val__22942 = markdown.core.format;
markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__22941;

markdown.transformers.formatter = formatter_temp_val__22942;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__22943 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__22943,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__22943,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__22949_22956 = lines__$1;
var vec__22950_22957 = G__22949_22956;
var seq__22951_22958 = cljs.core.seq.call(null,vec__22950_22957);
var first__22952_22959 = cljs.core.first.call(null,seq__22951_22958);
var seq__22951_22960__$1 = cljs.core.next.call(null,seq__22951_22958);
var line_22961 = first__22952_22959;
var more_22962 = seq__22951_22960__$1;
var state_22963 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__22949_22964__$1 = G__22949_22956;
var state_22965__$1 = state_22963;
while(true){
var vec__22953_22966 = G__22949_22964__$1;
var seq__22954_22967 = cljs.core.seq.call(null,vec__22953_22966);
var first__22955_22968 = cljs.core.first.call(null,seq__22954_22967);
var seq__22954_22969__$1 = cljs.core.next.call(null,seq__22954_22967);
var line_22970__$1 = first__22955_22968;
var more_22971__$1 = seq__22954_22969__$1;
var state_22972__$2 = state_22965__$1;
var state_22973__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_22972__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_22972__$2),cljs.core.first.call(null,more_22971__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_22972__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_22972__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_22971__$1))){
var G__22974 = more_22971__$1;
var G__22975 = cljs.core.assoc.call(null,transformer.call(null,html,line_22970__$1,cljs.core.first.call(null,more_22971__$1),state_22973__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_22970__$1));
G__22949_22964__$1 = G__22974;
state_22965__$1 = G__22975;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_22973__$3))),line_22970__$1,"",cljs.core.assoc.call(null,state_22973__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter_orig_val__22940;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__22939;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4647__auto__ = [];
var len__4641__auto___22978 = arguments.length;
var i__4642__auto___22979 = (0);
while(true){
if((i__4642__auto___22979 < len__4641__auto___22978)){
args__4647__auto__.push((arguments[i__4642__auto___22979]));

var G__22980 = (i__4642__auto___22979 + (1));
i__4642__auto___22979 = G__22980;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq22976){
var G__22977 = cljs.core.first.call(null,seq22976);
var seq22976__$1 = cljs.core.next.call(null,seq22976);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22977,seq22976__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4647__auto__ = [];
var len__4641__auto___22983 = arguments.length;
var i__4642__auto___22984 = (0);
while(true){
if((i__4642__auto___22984 < len__4641__auto___22983)){
args__4647__auto__.push((arguments[i__4642__auto___22984]));

var G__22985 = (i__4642__auto___22984 + (1));
i__4642__auto___22984 = G__22985;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq22981){
var G__22982 = cljs.core.first.call(null,seq22981);
var seq22981__$1 = cljs.core.next.call(null,seq22981);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22982,seq22981__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4647__auto__ = [];
var len__4641__auto___22987 = arguments.length;
var i__4642__auto___22988 = (0);
while(true){
if((i__4642__auto___22988 < len__4641__auto___22987)){
args__4647__auto__.push((arguments[i__4642__auto___22988]));

var G__22989 = (i__4642__auto___22988 + (1));
i__4642__auto___22988 = G__22989;
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
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq22986){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22986));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4647__auto__ = [];
var len__4641__auto___22991 = arguments.length;
var i__4642__auto___22992 = (0);
while(true){
if((i__4642__auto___22992 < len__4641__auto___22991)){
args__4647__auto__.push((arguments[i__4642__auto___22992]));

var G__22993 = (i__4642__auto___22992 + (1));
i__4642__auto___22992 = G__22993;
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
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq22990){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22990));
});


//# sourceMappingURL=core.js.map?rel=1545934924449
