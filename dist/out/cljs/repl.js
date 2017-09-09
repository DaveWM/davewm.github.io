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
var seq__30316_30330 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30317_30331 = null;
var count__30318_30332 = (0);
var i__30319_30333 = (0);
while(true){
if((i__30319_30333 < count__30318_30332)){
var f_30334 = cljs.core._nth.call(null,chunk__30317_30331,i__30319_30333);
cljs.core.println.call(null,"  ",f_30334);

var G__30335 = seq__30316_30330;
var G__30336 = chunk__30317_30331;
var G__30337 = count__30318_30332;
var G__30338 = (i__30319_30333 + (1));
seq__30316_30330 = G__30335;
chunk__30317_30331 = G__30336;
count__30318_30332 = G__30337;
i__30319_30333 = G__30338;
continue;
} else {
var temp__4425__auto___30339 = cljs.core.seq.call(null,seq__30316_30330);
if(temp__4425__auto___30339){
var seq__30316_30340__$1 = temp__4425__auto___30339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30316_30340__$1)){
var c__17161__auto___30341 = cljs.core.chunk_first.call(null,seq__30316_30340__$1);
var G__30342 = cljs.core.chunk_rest.call(null,seq__30316_30340__$1);
var G__30343 = c__17161__auto___30341;
var G__30344 = cljs.core.count.call(null,c__17161__auto___30341);
var G__30345 = (0);
seq__30316_30330 = G__30342;
chunk__30317_30331 = G__30343;
count__30318_30332 = G__30344;
i__30319_30333 = G__30345;
continue;
} else {
var f_30346 = cljs.core.first.call(null,seq__30316_30340__$1);
cljs.core.println.call(null,"  ",f_30346);

var G__30347 = cljs.core.next.call(null,seq__30316_30340__$1);
var G__30348 = null;
var G__30349 = (0);
var G__30350 = (0);
seq__30316_30330 = G__30347;
chunk__30317_30331 = G__30348;
count__30318_30332 = G__30349;
i__30319_30333 = G__30350;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30351 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16358__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30351);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30351)))?cljs.core.second.call(null,arglists_30351):arglists_30351));
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
var seq__30320 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30321 = null;
var count__30322 = (0);
var i__30323 = (0);
while(true){
if((i__30323 < count__30322)){
var vec__30324 = cljs.core._nth.call(null,chunk__30321,i__30323);
var name = cljs.core.nth.call(null,vec__30324,(0),null);
var map__30325 = cljs.core.nth.call(null,vec__30324,(1),null);
var map__30325__$1 = ((((!((map__30325 == null)))?((((map__30325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30325):map__30325);
var doc = cljs.core.get.call(null,map__30325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30325__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30352 = seq__30320;
var G__30353 = chunk__30321;
var G__30354 = count__30322;
var G__30355 = (i__30323 + (1));
seq__30320 = G__30352;
chunk__30321 = G__30353;
count__30322 = G__30354;
i__30323 = G__30355;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30320);
if(temp__4425__auto__){
var seq__30320__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30320__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__30320__$1);
var G__30356 = cljs.core.chunk_rest.call(null,seq__30320__$1);
var G__30357 = c__17161__auto__;
var G__30358 = cljs.core.count.call(null,c__17161__auto__);
var G__30359 = (0);
seq__30320 = G__30356;
chunk__30321 = G__30357;
count__30322 = G__30358;
i__30323 = G__30359;
continue;
} else {
var vec__30327 = cljs.core.first.call(null,seq__30320__$1);
var name = cljs.core.nth.call(null,vec__30327,(0),null);
var map__30328 = cljs.core.nth.call(null,vec__30327,(1),null);
var map__30328__$1 = ((((!((map__30328 == null)))?((((map__30328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30328):map__30328);
var doc = cljs.core.get.call(null,map__30328__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30328__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30360 = cljs.core.next.call(null,seq__30320__$1);
var G__30361 = null;
var G__30362 = (0);
var G__30363 = (0);
seq__30320 = G__30360;
chunk__30321 = G__30361;
count__30322 = G__30362;
i__30323 = G__30363;
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