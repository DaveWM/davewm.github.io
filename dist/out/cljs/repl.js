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
var seq__26591_26605 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26592_26606 = null;
var count__26593_26607 = (0);
var i__26594_26608 = (0);
while(true){
if((i__26594_26608 < count__26593_26607)){
var f_26609 = cljs.core._nth.call(null,chunk__26592_26606,i__26594_26608);
cljs.core.println.call(null,"  ",f_26609);

var G__26610 = seq__26591_26605;
var G__26611 = chunk__26592_26606;
var G__26612 = count__26593_26607;
var G__26613 = (i__26594_26608 + (1));
seq__26591_26605 = G__26610;
chunk__26592_26606 = G__26611;
count__26593_26607 = G__26612;
i__26594_26608 = G__26613;
continue;
} else {
var temp__4425__auto___26614 = cljs.core.seq.call(null,seq__26591_26605);
if(temp__4425__auto___26614){
var seq__26591_26615__$1 = temp__4425__auto___26614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26591_26615__$1)){
var c__17147__auto___26616 = cljs.core.chunk_first.call(null,seq__26591_26615__$1);
var G__26617 = cljs.core.chunk_rest.call(null,seq__26591_26615__$1);
var G__26618 = c__17147__auto___26616;
var G__26619 = cljs.core.count.call(null,c__17147__auto___26616);
var G__26620 = (0);
seq__26591_26605 = G__26617;
chunk__26592_26606 = G__26618;
count__26593_26607 = G__26619;
i__26594_26608 = G__26620;
continue;
} else {
var f_26621 = cljs.core.first.call(null,seq__26591_26615__$1);
cljs.core.println.call(null,"  ",f_26621);

var G__26622 = cljs.core.next.call(null,seq__26591_26615__$1);
var G__26623 = null;
var G__26624 = (0);
var G__26625 = (0);
seq__26591_26605 = G__26622;
chunk__26592_26606 = G__26623;
count__26593_26607 = G__26624;
i__26594_26608 = G__26625;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26626 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16344__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26626);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26626)))?cljs.core.second.call(null,arglists_26626):arglists_26626));
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
var seq__26595 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26596 = null;
var count__26597 = (0);
var i__26598 = (0);
while(true){
if((i__26598 < count__26597)){
var vec__26599 = cljs.core._nth.call(null,chunk__26596,i__26598);
var name = cljs.core.nth.call(null,vec__26599,(0),null);
var map__26600 = cljs.core.nth.call(null,vec__26599,(1),null);
var map__26600__$1 = ((((!((map__26600 == null)))?((((map__26600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26600):map__26600);
var doc = cljs.core.get.call(null,map__26600__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26600__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26627 = seq__26595;
var G__26628 = chunk__26596;
var G__26629 = count__26597;
var G__26630 = (i__26598 + (1));
seq__26595 = G__26627;
chunk__26596 = G__26628;
count__26597 = G__26629;
i__26598 = G__26630;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26595);
if(temp__4425__auto__){
var seq__26595__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26595__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__26595__$1);
var G__26631 = cljs.core.chunk_rest.call(null,seq__26595__$1);
var G__26632 = c__17147__auto__;
var G__26633 = cljs.core.count.call(null,c__17147__auto__);
var G__26634 = (0);
seq__26595 = G__26631;
chunk__26596 = G__26632;
count__26597 = G__26633;
i__26598 = G__26634;
continue;
} else {
var vec__26602 = cljs.core.first.call(null,seq__26595__$1);
var name = cljs.core.nth.call(null,vec__26602,(0),null);
var map__26603 = cljs.core.nth.call(null,vec__26602,(1),null);
var map__26603__$1 = ((((!((map__26603 == null)))?((((map__26603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26603):map__26603);
var doc = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26635 = cljs.core.next.call(null,seq__26595__$1);
var G__26636 = null;
var G__26637 = (0);
var G__26638 = (0);
seq__26595 = G__26635;
chunk__26596 = G__26636;
count__26597 = G__26637;
i__26598 = G__26638;
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