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
var seq__22447_22461 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22448_22462 = null;
var count__22449_22463 = (0);
var i__22450_22464 = (0);
while(true){
if((i__22450_22464 < count__22449_22463)){
var f_22465 = cljs.core._nth.call(null,chunk__22448_22462,i__22450_22464);
cljs.core.println.call(null,"  ",f_22465);

var G__22466 = seq__22447_22461;
var G__22467 = chunk__22448_22462;
var G__22468 = count__22449_22463;
var G__22469 = (i__22450_22464 + (1));
seq__22447_22461 = G__22466;
chunk__22448_22462 = G__22467;
count__22449_22463 = G__22468;
i__22450_22464 = G__22469;
continue;
} else {
var temp__4425__auto___22470 = cljs.core.seq.call(null,seq__22447_22461);
if(temp__4425__auto___22470){
var seq__22447_22471__$1 = temp__4425__auto___22470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22447_22471__$1)){
var c__17147__auto___22472 = cljs.core.chunk_first.call(null,seq__22447_22471__$1);
var G__22473 = cljs.core.chunk_rest.call(null,seq__22447_22471__$1);
var G__22474 = c__17147__auto___22472;
var G__22475 = cljs.core.count.call(null,c__17147__auto___22472);
var G__22476 = (0);
seq__22447_22461 = G__22473;
chunk__22448_22462 = G__22474;
count__22449_22463 = G__22475;
i__22450_22464 = G__22476;
continue;
} else {
var f_22477 = cljs.core.first.call(null,seq__22447_22471__$1);
cljs.core.println.call(null,"  ",f_22477);

var G__22478 = cljs.core.next.call(null,seq__22447_22471__$1);
var G__22479 = null;
var G__22480 = (0);
var G__22481 = (0);
seq__22447_22461 = G__22478;
chunk__22448_22462 = G__22479;
count__22449_22463 = G__22480;
i__22450_22464 = G__22481;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22482 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16344__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22482);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22482)))?cljs.core.second.call(null,arglists_22482):arglists_22482));
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
var seq__22451 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22452 = null;
var count__22453 = (0);
var i__22454 = (0);
while(true){
if((i__22454 < count__22453)){
var vec__22455 = cljs.core._nth.call(null,chunk__22452,i__22454);
var name = cljs.core.nth.call(null,vec__22455,(0),null);
var map__22456 = cljs.core.nth.call(null,vec__22455,(1),null);
var map__22456__$1 = ((((!((map__22456 == null)))?((((map__22456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22456):map__22456);
var doc = cljs.core.get.call(null,map__22456__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22456__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22483 = seq__22451;
var G__22484 = chunk__22452;
var G__22485 = count__22453;
var G__22486 = (i__22454 + (1));
seq__22451 = G__22483;
chunk__22452 = G__22484;
count__22453 = G__22485;
i__22454 = G__22486;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22451);
if(temp__4425__auto__){
var seq__22451__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22451__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__22451__$1);
var G__22487 = cljs.core.chunk_rest.call(null,seq__22451__$1);
var G__22488 = c__17147__auto__;
var G__22489 = cljs.core.count.call(null,c__17147__auto__);
var G__22490 = (0);
seq__22451 = G__22487;
chunk__22452 = G__22488;
count__22453 = G__22489;
i__22454 = G__22490;
continue;
} else {
var vec__22458 = cljs.core.first.call(null,seq__22451__$1);
var name = cljs.core.nth.call(null,vec__22458,(0),null);
var map__22459 = cljs.core.nth.call(null,vec__22458,(1),null);
var map__22459__$1 = ((((!((map__22459 == null)))?((((map__22459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22459):map__22459);
var doc = cljs.core.get.call(null,map__22459__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22459__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22491 = cljs.core.next.call(null,seq__22451__$1);
var G__22492 = null;
var G__22493 = (0);
var G__22494 = (0);
seq__22451 = G__22491;
chunk__22452 = G__22492;
count__22453 = G__22493;
i__22454 = G__22494;
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