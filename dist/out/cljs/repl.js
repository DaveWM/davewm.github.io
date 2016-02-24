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
var seq__24578_24592 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24579_24593 = null;
var count__24580_24594 = (0);
var i__24581_24595 = (0);
while(true){
if((i__24581_24595 < count__24580_24594)){
var f_24596 = cljs.core._nth.call(null,chunk__24579_24593,i__24581_24595);
cljs.core.println.call(null,"  ",f_24596);

var G__24597 = seq__24578_24592;
var G__24598 = chunk__24579_24593;
var G__24599 = count__24580_24594;
var G__24600 = (i__24581_24595 + (1));
seq__24578_24592 = G__24597;
chunk__24579_24593 = G__24598;
count__24580_24594 = G__24599;
i__24581_24595 = G__24600;
continue;
} else {
var temp__4425__auto___24601 = cljs.core.seq.call(null,seq__24578_24592);
if(temp__4425__auto___24601){
var seq__24578_24602__$1 = temp__4425__auto___24601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24578_24602__$1)){
var c__17147__auto___24603 = cljs.core.chunk_first.call(null,seq__24578_24602__$1);
var G__24604 = cljs.core.chunk_rest.call(null,seq__24578_24602__$1);
var G__24605 = c__17147__auto___24603;
var G__24606 = cljs.core.count.call(null,c__17147__auto___24603);
var G__24607 = (0);
seq__24578_24592 = G__24604;
chunk__24579_24593 = G__24605;
count__24580_24594 = G__24606;
i__24581_24595 = G__24607;
continue;
} else {
var f_24608 = cljs.core.first.call(null,seq__24578_24602__$1);
cljs.core.println.call(null,"  ",f_24608);

var G__24609 = cljs.core.next.call(null,seq__24578_24602__$1);
var G__24610 = null;
var G__24611 = (0);
var G__24612 = (0);
seq__24578_24592 = G__24609;
chunk__24579_24593 = G__24610;
count__24580_24594 = G__24611;
i__24581_24595 = G__24612;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24613 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16344__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24613);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24613)))?cljs.core.second.call(null,arglists_24613):arglists_24613));
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
var seq__24582 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24583 = null;
var count__24584 = (0);
var i__24585 = (0);
while(true){
if((i__24585 < count__24584)){
var vec__24586 = cljs.core._nth.call(null,chunk__24583,i__24585);
var name = cljs.core.nth.call(null,vec__24586,(0),null);
var map__24587 = cljs.core.nth.call(null,vec__24586,(1),null);
var map__24587__$1 = ((((!((map__24587 == null)))?((((map__24587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24587):map__24587);
var doc = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24614 = seq__24582;
var G__24615 = chunk__24583;
var G__24616 = count__24584;
var G__24617 = (i__24585 + (1));
seq__24582 = G__24614;
chunk__24583 = G__24615;
count__24584 = G__24616;
i__24585 = G__24617;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24582);
if(temp__4425__auto__){
var seq__24582__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24582__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__24582__$1);
var G__24618 = cljs.core.chunk_rest.call(null,seq__24582__$1);
var G__24619 = c__17147__auto__;
var G__24620 = cljs.core.count.call(null,c__17147__auto__);
var G__24621 = (0);
seq__24582 = G__24618;
chunk__24583 = G__24619;
count__24584 = G__24620;
i__24585 = G__24621;
continue;
} else {
var vec__24589 = cljs.core.first.call(null,seq__24582__$1);
var name = cljs.core.nth.call(null,vec__24589,(0),null);
var map__24590 = cljs.core.nth.call(null,vec__24589,(1),null);
var map__24590__$1 = ((((!((map__24590 == null)))?((((map__24590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24590):map__24590);
var doc = cljs.core.get.call(null,map__24590__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24590__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24622 = cljs.core.next.call(null,seq__24582__$1);
var G__24623 = null;
var G__24624 = (0);
var G__24625 = (0);
seq__24582 = G__24622;
chunk__24583 = G__24623;
count__24584 = G__24624;
i__24585 = G__24625;
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