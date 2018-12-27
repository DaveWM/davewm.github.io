// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30905){
var map__30906 = p__30905;
var map__30906__$1 = (((((!((map__30906 == null))))?(((((map__30906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30906):map__30906);
var m = map__30906__$1;
var n = cljs.core.get.call(null,map__30906__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30906__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30908_30930 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30909_30931 = null;
var count__30910_30932 = (0);
var i__30911_30933 = (0);
while(true){
if((i__30911_30933 < count__30910_30932)){
var f_30934 = cljs.core._nth.call(null,chunk__30909_30931,i__30911_30933);
cljs.core.println.call(null,"  ",f_30934);


var G__30935 = seq__30908_30930;
var G__30936 = chunk__30909_30931;
var G__30937 = count__30910_30932;
var G__30938 = (i__30911_30933 + (1));
seq__30908_30930 = G__30935;
chunk__30909_30931 = G__30936;
count__30910_30932 = G__30937;
i__30911_30933 = G__30938;
continue;
} else {
var temp__5720__auto___30939 = cljs.core.seq.call(null,seq__30908_30930);
if(temp__5720__auto___30939){
var seq__30908_30940__$1 = temp__5720__auto___30939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30908_30940__$1)){
var c__4461__auto___30941 = cljs.core.chunk_first.call(null,seq__30908_30940__$1);
var G__30942 = cljs.core.chunk_rest.call(null,seq__30908_30940__$1);
var G__30943 = c__4461__auto___30941;
var G__30944 = cljs.core.count.call(null,c__4461__auto___30941);
var G__30945 = (0);
seq__30908_30930 = G__30942;
chunk__30909_30931 = G__30943;
count__30910_30932 = G__30944;
i__30911_30933 = G__30945;
continue;
} else {
var f_30946 = cljs.core.first.call(null,seq__30908_30940__$1);
cljs.core.println.call(null,"  ",f_30946);


var G__30947 = cljs.core.next.call(null,seq__30908_30940__$1);
var G__30948 = null;
var G__30949 = (0);
var G__30950 = (0);
seq__30908_30930 = G__30947;
chunk__30909_30931 = G__30948;
count__30910_30932 = G__30949;
i__30911_30933 = G__30950;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30951 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30951);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30951)))?cljs.core.second.call(null,arglists_30951):arglists_30951));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30912_30952 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30913_30953 = null;
var count__30914_30954 = (0);
var i__30915_30955 = (0);
while(true){
if((i__30915_30955 < count__30914_30954)){
var vec__30916_30956 = cljs.core._nth.call(null,chunk__30913_30953,i__30915_30955);
var name_30957 = cljs.core.nth.call(null,vec__30916_30956,(0),null);
var map__30919_30958 = cljs.core.nth.call(null,vec__30916_30956,(1),null);
var map__30919_30959__$1 = (((((!((map__30919_30958 == null))))?(((((map__30919_30958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30919_30958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30919_30958):map__30919_30958);
var doc_30960 = cljs.core.get.call(null,map__30919_30959__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30961 = cljs.core.get.call(null,map__30919_30959__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30957);

cljs.core.println.call(null," ",arglists_30961);

if(cljs.core.truth_(doc_30960)){
cljs.core.println.call(null," ",doc_30960);
} else {
}


var G__30962 = seq__30912_30952;
var G__30963 = chunk__30913_30953;
var G__30964 = count__30914_30954;
var G__30965 = (i__30915_30955 + (1));
seq__30912_30952 = G__30962;
chunk__30913_30953 = G__30963;
count__30914_30954 = G__30964;
i__30915_30955 = G__30965;
continue;
} else {
var temp__5720__auto___30966 = cljs.core.seq.call(null,seq__30912_30952);
if(temp__5720__auto___30966){
var seq__30912_30967__$1 = temp__5720__auto___30966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30912_30967__$1)){
var c__4461__auto___30968 = cljs.core.chunk_first.call(null,seq__30912_30967__$1);
var G__30969 = cljs.core.chunk_rest.call(null,seq__30912_30967__$1);
var G__30970 = c__4461__auto___30968;
var G__30971 = cljs.core.count.call(null,c__4461__auto___30968);
var G__30972 = (0);
seq__30912_30952 = G__30969;
chunk__30913_30953 = G__30970;
count__30914_30954 = G__30971;
i__30915_30955 = G__30972;
continue;
} else {
var vec__30921_30973 = cljs.core.first.call(null,seq__30912_30967__$1);
var name_30974 = cljs.core.nth.call(null,vec__30921_30973,(0),null);
var map__30924_30975 = cljs.core.nth.call(null,vec__30921_30973,(1),null);
var map__30924_30976__$1 = (((((!((map__30924_30975 == null))))?(((((map__30924_30975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30924_30975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30924_30975):map__30924_30975);
var doc_30977 = cljs.core.get.call(null,map__30924_30976__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30978 = cljs.core.get.call(null,map__30924_30976__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30974);

cljs.core.println.call(null," ",arglists_30978);

if(cljs.core.truth_(doc_30977)){
cljs.core.println.call(null," ",doc_30977);
} else {
}


var G__30979 = cljs.core.next.call(null,seq__30912_30967__$1);
var G__30980 = null;
var G__30981 = (0);
var G__30982 = (0);
seq__30912_30952 = G__30979;
chunk__30913_30953 = G__30980;
count__30914_30954 = G__30981;
i__30915_30955 = G__30982;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__30926 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30927 = null;
var count__30928 = (0);
var i__30929 = (0);
while(true){
if((i__30929 < count__30928)){
var role = cljs.core._nth.call(null,chunk__30927,i__30929);
var temp__5720__auto___30983__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30983__$1)){
var spec_30984 = temp__5720__auto___30983__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30984));
} else {
}


var G__30985 = seq__30926;
var G__30986 = chunk__30927;
var G__30987 = count__30928;
var G__30988 = (i__30929 + (1));
seq__30926 = G__30985;
chunk__30927 = G__30986;
count__30928 = G__30987;
i__30929 = G__30988;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30926);
if(temp__5720__auto____$1){
var seq__30926__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30926__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30926__$1);
var G__30989 = cljs.core.chunk_rest.call(null,seq__30926__$1);
var G__30990 = c__4461__auto__;
var G__30991 = cljs.core.count.call(null,c__4461__auto__);
var G__30992 = (0);
seq__30926 = G__30989;
chunk__30927 = G__30990;
count__30928 = G__30991;
i__30929 = G__30992;
continue;
} else {
var role = cljs.core.first.call(null,seq__30926__$1);
var temp__5720__auto___30993__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30993__$2)){
var spec_30994 = temp__5720__auto___30993__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30994));
} else {
}


var G__30995 = cljs.core.next.call(null,seq__30926__$1);
var G__30996 = null;
var G__30997 = (0);
var G__30998 = (0);
seq__30926 = G__30995;
chunk__30927 = G__30996;
count__30928 = G__30997;
i__30929 = G__30998;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1545934931948
