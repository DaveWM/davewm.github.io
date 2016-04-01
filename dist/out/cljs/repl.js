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
var seq__22656_22670 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22657_22671 = null;
var count__22658_22672 = (0);
var i__22659_22673 = (0);
while(true){
if((i__22659_22673 < count__22658_22672)){
var f_22674 = cljs.core._nth.call(null,chunk__22657_22671,i__22659_22673);
cljs.core.println.call(null,"  ",f_22674);

var G__22675 = seq__22656_22670;
var G__22676 = chunk__22657_22671;
var G__22677 = count__22658_22672;
var G__22678 = (i__22659_22673 + (1));
seq__22656_22670 = G__22675;
chunk__22657_22671 = G__22676;
count__22658_22672 = G__22677;
i__22659_22673 = G__22678;
continue;
} else {
var temp__4425__auto___22679 = cljs.core.seq.call(null,seq__22656_22670);
if(temp__4425__auto___22679){
var seq__22656_22680__$1 = temp__4425__auto___22679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22656_22680__$1)){
var c__17161__auto___22681 = cljs.core.chunk_first.call(null,seq__22656_22680__$1);
var G__22682 = cljs.core.chunk_rest.call(null,seq__22656_22680__$1);
var G__22683 = c__17161__auto___22681;
var G__22684 = cljs.core.count.call(null,c__17161__auto___22681);
var G__22685 = (0);
seq__22656_22670 = G__22682;
chunk__22657_22671 = G__22683;
count__22658_22672 = G__22684;
i__22659_22673 = G__22685;
continue;
} else {
var f_22686 = cljs.core.first.call(null,seq__22656_22680__$1);
cljs.core.println.call(null,"  ",f_22686);

var G__22687 = cljs.core.next.call(null,seq__22656_22680__$1);
var G__22688 = null;
var G__22689 = (0);
var G__22690 = (0);
seq__22656_22670 = G__22687;
chunk__22657_22671 = G__22688;
count__22658_22672 = G__22689;
i__22659_22673 = G__22690;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22691 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16358__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22691);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22691)))?cljs.core.second.call(null,arglists_22691):arglists_22691));
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
var seq__22660 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22661 = null;
var count__22662 = (0);
var i__22663 = (0);
while(true){
if((i__22663 < count__22662)){
var vec__22664 = cljs.core._nth.call(null,chunk__22661,i__22663);
var name = cljs.core.nth.call(null,vec__22664,(0),null);
var map__22665 = cljs.core.nth.call(null,vec__22664,(1),null);
var map__22665__$1 = ((((!((map__22665 == null)))?((((map__22665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22665):map__22665);
var doc = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22665__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22692 = seq__22660;
var G__22693 = chunk__22661;
var G__22694 = count__22662;
var G__22695 = (i__22663 + (1));
seq__22660 = G__22692;
chunk__22661 = G__22693;
count__22662 = G__22694;
i__22663 = G__22695;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22660);
if(temp__4425__auto__){
var seq__22660__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22660__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__22660__$1);
var G__22696 = cljs.core.chunk_rest.call(null,seq__22660__$1);
var G__22697 = c__17161__auto__;
var G__22698 = cljs.core.count.call(null,c__17161__auto__);
var G__22699 = (0);
seq__22660 = G__22696;
chunk__22661 = G__22697;
count__22662 = G__22698;
i__22663 = G__22699;
continue;
} else {
var vec__22667 = cljs.core.first.call(null,seq__22660__$1);
var name = cljs.core.nth.call(null,vec__22667,(0),null);
var map__22668 = cljs.core.nth.call(null,vec__22667,(1),null);
var map__22668__$1 = ((((!((map__22668 == null)))?((((map__22668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22668):map__22668);
var doc = cljs.core.get.call(null,map__22668__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22668__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22700 = cljs.core.next.call(null,seq__22660__$1);
var G__22701 = null;
var G__22702 = (0);
var G__22703 = (0);
seq__22660 = G__22700;
chunk__22661 = G__22701;
count__22662 = G__22702;
i__22663 = G__22703;
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