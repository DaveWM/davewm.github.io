// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24925_24939 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24926_24940 = null;
var count__24927_24941 = (0);
var i__24928_24942 = (0);
while(true){
if((i__24928_24942 < count__24927_24941)){
var f_24943 = cljs.core._nth.call(null,chunk__24926_24940,i__24928_24942);
cljs.core.println.call(null,"  ",f_24943);

var G__24944 = seq__24925_24939;
var G__24945 = chunk__24926_24940;
var G__24946 = count__24927_24941;
var G__24947 = (i__24928_24942 + (1));
seq__24925_24939 = G__24944;
chunk__24926_24940 = G__24945;
count__24927_24941 = G__24946;
i__24928_24942 = G__24947;
continue;
} else {
var temp__4425__auto___24948 = cljs.core.seq.call(null,seq__24925_24939);
if(temp__4425__auto___24948){
var seq__24925_24949__$1 = temp__4425__auto___24948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24925_24949__$1)){
var c__17161__auto___24950 = cljs.core.chunk_first.call(null,seq__24925_24949__$1);
var G__24951 = cljs.core.chunk_rest.call(null,seq__24925_24949__$1);
var G__24952 = c__17161__auto___24950;
var G__24953 = cljs.core.count.call(null,c__17161__auto___24950);
var G__24954 = (0);
seq__24925_24939 = G__24951;
chunk__24926_24940 = G__24952;
count__24927_24941 = G__24953;
i__24928_24942 = G__24954;
continue;
} else {
var f_24955 = cljs.core.first.call(null,seq__24925_24949__$1);
cljs.core.println.call(null,"  ",f_24955);

var G__24956 = cljs.core.next.call(null,seq__24925_24949__$1);
var G__24957 = null;
var G__24958 = (0);
var G__24959 = (0);
seq__24925_24939 = G__24956;
chunk__24926_24940 = G__24957;
count__24927_24941 = G__24958;
i__24928_24942 = G__24959;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24960 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16358__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24960);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24960)))?cljs.core.second.call(null,arglists_24960):arglists_24960));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24929 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24930 = null;
var count__24931 = (0);
var i__24932 = (0);
while(true){
if((i__24932 < count__24931)){
var vec__24933 = cljs.core._nth.call(null,chunk__24930,i__24932);
var name = cljs.core.nth.call(null,vec__24933,(0),null);
var map__24934 = cljs.core.nth.call(null,vec__24933,(1),null);
var map__24934__$1 = ((((!((map__24934 == null)))?((((map__24934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24934):map__24934);
var doc = cljs.core.get.call(null,map__24934__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24934__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24961 = seq__24929;
var G__24962 = chunk__24930;
var G__24963 = count__24931;
var G__24964 = (i__24932 + (1));
seq__24929 = G__24961;
chunk__24930 = G__24962;
count__24931 = G__24963;
i__24932 = G__24964;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24929);
if(temp__4425__auto__){
var seq__24929__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24929__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__24929__$1);
var G__24965 = cljs.core.chunk_rest.call(null,seq__24929__$1);
var G__24966 = c__17161__auto__;
var G__24967 = cljs.core.count.call(null,c__17161__auto__);
var G__24968 = (0);
seq__24929 = G__24965;
chunk__24930 = G__24966;
count__24931 = G__24967;
i__24932 = G__24968;
continue;
} else {
var vec__24936 = cljs.core.first.call(null,seq__24929__$1);
var name = cljs.core.nth.call(null,vec__24936,(0),null);
var map__24937 = cljs.core.nth.call(null,vec__24936,(1),null);
var map__24937__$1 = ((((!((map__24937 == null)))?((((map__24937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24937):map__24937);
var doc = cljs.core.get.call(null,map__24937__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24937__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24969 = cljs.core.next.call(null,seq__24929__$1);
var G__24970 = null;
var G__24971 = (0);
var G__24972 = (0);
seq__24929 = G__24969;
chunk__24930 = G__24970;
count__24931 = G__24971;
i__24932 = G__24972;
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
}
});

//# sourceMappingURL=repl.js.map