// Compiled by ClojureScript 1.7.145 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__21785){
var map__21792 = p__21785;
var map__21792__$1 = ((((!((map__21792 == null)))?((((map__21792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21792):map__21792);
var replacement_transformers = cljs.core.get.call(null,map__21792__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__21792__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__21792,map__21792__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_21794 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__21795 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_21794,map__21792,map__21792__$1,replacement_transformers,custom_transformers){
return (function (p__21796,transformer){
var vec__21797 = p__21796;
var text = cljs.core.nth.call(null,vec__21797,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__21797,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_21794,map__21792,map__21792__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__16358__auto__ = replacement_transformers;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__21795,(0),null);
var new_state = cljs.core.nth.call(null,vec__21795,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_21794;
}});
;})(map__21792,map__21792__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__17423__auto__ = [];
var len__17416__auto___21800 = arguments.length;
var i__17417__auto___21801 = (0);
while(true){
if((i__17417__auto___21801 < len__17416__auto___21800)){
args__17423__auto__.push((arguments[i__17417__auto___21801]));

var G__21802 = (i__17417__auto___21801 + (1));
i__17417__auto___21801 = G__21802;
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

markdown.core.format.cljs$lang$applyTo = (function (seq21798){
var G__21799 = cljs.core.first.call(null,seq21798);
var seq21798__$1 = cljs.core.next.call(null,seq21798);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__21799,seq21798__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__21807_21811 = cljs.core.seq.call(null,lines);
var chunk__21808_21812 = null;
var count__21809_21813 = (0);
var i__21810_21814 = (0);
while(true){
if((i__21810_21814 < count__21809_21813)){
var line_21815 = cljs.core._nth.call(null,chunk__21808_21812,i__21810_21814);
markdown.links.parse_reference_link.call(null,line_21815,references);

var G__21816 = seq__21807_21811;
var G__21817 = chunk__21808_21812;
var G__21818 = count__21809_21813;
var G__21819 = (i__21810_21814 + (1));
seq__21807_21811 = G__21816;
chunk__21808_21812 = G__21817;
count__21809_21813 = G__21818;
i__21810_21814 = G__21819;
continue;
} else {
var temp__4425__auto___21820 = cljs.core.seq.call(null,seq__21807_21811);
if(temp__4425__auto___21820){
var seq__21807_21821__$1 = temp__4425__auto___21820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21807_21821__$1)){
var c__17161__auto___21822 = cljs.core.chunk_first.call(null,seq__21807_21821__$1);
var G__21823 = cljs.core.chunk_rest.call(null,seq__21807_21821__$1);
var G__21824 = c__17161__auto___21822;
var G__21825 = cljs.core.count.call(null,c__17161__auto___21822);
var G__21826 = (0);
seq__21807_21811 = G__21823;
chunk__21808_21812 = G__21824;
count__21809_21813 = G__21825;
i__21810_21814 = G__21826;
continue;
} else {
var line_21827 = cljs.core.first.call(null,seq__21807_21821__$1);
markdown.links.parse_reference_link.call(null,line_21827,references);

var G__21828 = cljs.core.next.call(null,seq__21807_21821__$1);
var G__21829 = null;
var G__21830 = (0);
var G__21831 = (0);
seq__21807_21811 = G__21828;
chunk__21808_21812 = G__21829;
count__21809_21813 = G__21830;
i__21810_21814 = G__21831;
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
var seq__21836_21840 = cljs.core.seq.call(null,lines);
var chunk__21837_21841 = null;
var count__21838_21842 = (0);
var i__21839_21843 = (0);
while(true){
if((i__21839_21843 < count__21838_21842)){
var line_21844 = cljs.core._nth.call(null,chunk__21837_21841,i__21839_21843);
markdown.links.parse_footnote_link.call(null,line_21844,footnotes);

var G__21845 = seq__21836_21840;
var G__21846 = chunk__21837_21841;
var G__21847 = count__21838_21842;
var G__21848 = (i__21839_21843 + (1));
seq__21836_21840 = G__21845;
chunk__21837_21841 = G__21846;
count__21838_21842 = G__21847;
i__21839_21843 = G__21848;
continue;
} else {
var temp__4425__auto___21849 = cljs.core.seq.call(null,seq__21836_21840);
if(temp__4425__auto___21849){
var seq__21836_21850__$1 = temp__4425__auto___21849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21836_21850__$1)){
var c__17161__auto___21851 = cljs.core.chunk_first.call(null,seq__21836_21850__$1);
var G__21852 = cljs.core.chunk_rest.call(null,seq__21836_21850__$1);
var G__21853 = c__17161__auto___21851;
var G__21854 = cljs.core.count.call(null,c__17161__auto___21851);
var G__21855 = (0);
seq__21836_21840 = G__21852;
chunk__21837_21841 = G__21853;
count__21838_21842 = G__21854;
i__21839_21843 = G__21855;
continue;
} else {
var line_21856 = cljs.core.first.call(null,seq__21836_21850__$1);
markdown.links.parse_footnote_link.call(null,line_21856,footnotes);

var G__21857 = cljs.core.next.call(null,seq__21836_21850__$1);
var G__21858 = null;
var G__21859 = (0);
var G__21860 = (0);
seq__21836_21840 = G__21857;
chunk__21837_21841 = G__21858;
count__21838_21842 = G__21859;
i__21839_21843 = G__21860;
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
var vec__21863 = cljs.core.split_with.call(null,(function (p1__21861_SHARP_){
return cljs.core.not_empty.call(null,p1__21861_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__21863,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__21863,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_21871 = markdown.common._STAR_substring_STAR_;
var formatter21872 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_21871,formatter21872){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_21871,formatter21872))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__21873 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__21873,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__21873,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__21875_21878 = lines__$1;
var vec__21876_21879 = G__21875_21878;
var line_21880 = cljs.core.nth.call(null,vec__21876_21879,(0),null);
var more_21881 = cljs.core.nthnext.call(null,vec__21876_21879,(1));
var state_21882 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__21875_21883__$1 = G__21875_21878;
var state_21884__$1 = state_21882;
while(true){
var vec__21877_21885 = G__21875_21883__$1;
var line_21886__$1 = cljs.core.nth.call(null,vec__21877_21885,(0),null);
var more_21887__$1 = cljs.core.nthnext.call(null,vec__21877_21885,(1));
var state_21888__$2 = state_21884__$1;
var state_21889__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_21888__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_21888__$2),cljs.core.first.call(null,more_21887__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_21888__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_21888__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_21887__$1))){
var G__21890 = more_21887__$1;
var G__21891 = cljs.core.assoc.call(null,transformer.call(null,html,line_21886__$1,cljs.core.first.call(null,more_21887__$1),state_21889__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_21886__$1));
G__21875_21883__$1 = G__21890;
state_21884__$1 = G__21891;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_21889__$3))),line_21886__$1,"",cljs.core.assoc.call(null,state_21889__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter21872;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_21871;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__17423__auto__ = [];
var len__17416__auto___21894 = arguments.length;
var i__17417__auto___21895 = (0);
while(true){
if((i__17417__auto___21895 < len__17416__auto___21894)){
args__17423__auto__.push((arguments[i__17417__auto___21895]));

var G__21896 = (i__17417__auto___21895 + (1));
i__17417__auto___21895 = G__21896;
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

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq21892){
var G__21893 = cljs.core.first.call(null,seq21892);
var seq21892__$1 = cljs.core.next.call(null,seq21892);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__21893,seq21892__$1);
});
markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__17423__auto__ = [];
var len__17416__auto___21899 = arguments.length;
var i__17417__auto___21900 = (0);
while(true){
if((i__17417__auto___21900 < len__17416__auto___21899)){
args__17423__auto__.push((arguments[i__17417__auto___21900]));

var G__21901 = (i__17417__auto___21900 + (1));
i__17417__auto___21900 = G__21901;
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

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq21897){
var G__21898 = cljs.core.first.call(null,seq21897);
var seq21897__$1 = cljs.core.next.call(null,seq21897);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__21898,seq21897__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__17423__auto__ = [];
var len__17416__auto___21903 = arguments.length;
var i__17417__auto___21904 = (0);
while(true){
if((i__17417__auto___21904 < len__17416__auto___21903)){
args__17423__auto__.push((arguments[i__17417__auto___21904]));

var G__21905 = (i__17417__auto___21904 + (1));
i__17417__auto___21904 = G__21905;
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

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq21902){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21902));
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__17423__auto__ = [];
var len__17416__auto___21907 = arguments.length;
var i__17417__auto___21908 = (0);
while(true){
if((i__17417__auto___21908 < len__17416__auto___21907)){
args__17423__auto__.push((arguments[i__17417__auto___21908]));

var G__21909 = (i__17417__auto___21908 + (1));
i__17417__auto___21908 = G__21909;
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

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq21906){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21906));
});

//# sourceMappingURL=core.js.map