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
var seq__26674_26688 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26675_26689 = null;
var count__26676_26690 = (0);
var i__26677_26691 = (0);
while(true){
if((i__26677_26691 < count__26676_26690)){
var f_26692 = cljs.core._nth.call(null,chunk__26675_26689,i__26677_26691);
cljs.core.println.call(null,"  ",f_26692);

var G__26693 = seq__26674_26688;
var G__26694 = chunk__26675_26689;
var G__26695 = count__26676_26690;
var G__26696 = (i__26677_26691 + (1));
seq__26674_26688 = G__26693;
chunk__26675_26689 = G__26694;
count__26676_26690 = G__26695;
i__26677_26691 = G__26696;
continue;
} else {
var temp__4425__auto___26697 = cljs.core.seq.call(null,seq__26674_26688);
if(temp__4425__auto___26697){
var seq__26674_26698__$1 = temp__4425__auto___26697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26674_26698__$1)){
var c__17147__auto___26699 = cljs.core.chunk_first.call(null,seq__26674_26698__$1);
var G__26700 = cljs.core.chunk_rest.call(null,seq__26674_26698__$1);
var G__26701 = c__17147__auto___26699;
var G__26702 = cljs.core.count.call(null,c__17147__auto___26699);
var G__26703 = (0);
seq__26674_26688 = G__26700;
chunk__26675_26689 = G__26701;
count__26676_26690 = G__26702;
i__26677_26691 = G__26703;
continue;
} else {
var f_26704 = cljs.core.first.call(null,seq__26674_26698__$1);
cljs.core.println.call(null,"  ",f_26704);

var G__26705 = cljs.core.next.call(null,seq__26674_26698__$1);
var G__26706 = null;
var G__26707 = (0);
var G__26708 = (0);
seq__26674_26688 = G__26705;
chunk__26675_26689 = G__26706;
count__26676_26690 = G__26707;
i__26677_26691 = G__26708;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26709 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16344__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26709);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26709)))?cljs.core.second.call(null,arglists_26709):arglists_26709));
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
var seq__26678 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26679 = null;
var count__26680 = (0);
var i__26681 = (0);
while(true){
if((i__26681 < count__26680)){
var vec__26682 = cljs.core._nth.call(null,chunk__26679,i__26681);
var name = cljs.core.nth.call(null,vec__26682,(0),null);
var map__26683 = cljs.core.nth.call(null,vec__26682,(1),null);
var map__26683__$1 = ((((!((map__26683 == null)))?((((map__26683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26683):map__26683);
var doc = cljs.core.get.call(null,map__26683__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26683__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26710 = seq__26678;
var G__26711 = chunk__26679;
var G__26712 = count__26680;
var G__26713 = (i__26681 + (1));
seq__26678 = G__26710;
chunk__26679 = G__26711;
count__26680 = G__26712;
i__26681 = G__26713;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26678);
if(temp__4425__auto__){
var seq__26678__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26678__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__26678__$1);
var G__26714 = cljs.core.chunk_rest.call(null,seq__26678__$1);
var G__26715 = c__17147__auto__;
var G__26716 = cljs.core.count.call(null,c__17147__auto__);
var G__26717 = (0);
seq__26678 = G__26714;
chunk__26679 = G__26715;
count__26680 = G__26716;
i__26681 = G__26717;
continue;
} else {
var vec__26685 = cljs.core.first.call(null,seq__26678__$1);
var name = cljs.core.nth.call(null,vec__26685,(0),null);
var map__26686 = cljs.core.nth.call(null,vec__26685,(1),null);
var map__26686__$1 = ((((!((map__26686 == null)))?((((map__26686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26686):map__26686);
var doc = cljs.core.get.call(null,map__26686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26686__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26718 = cljs.core.next.call(null,seq__26678__$1);
var G__26719 = null;
var G__26720 = (0);
var G__26721 = (0);
seq__26678 = G__26718;
chunk__26679 = G__26719;
count__26680 = G__26720;
i__26681 = G__26721;
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