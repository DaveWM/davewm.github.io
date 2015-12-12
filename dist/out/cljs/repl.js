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
var seq__28629_28643 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28630_28644 = null;
var count__28631_28645 = (0);
var i__28632_28646 = (0);
while(true){
if((i__28632_28646 < count__28631_28645)){
var f_28647 = cljs.core._nth.call(null,chunk__28630_28644,i__28632_28646);
cljs.core.println.call(null,"  ",f_28647);

var G__28648 = seq__28629_28643;
var G__28649 = chunk__28630_28644;
var G__28650 = count__28631_28645;
var G__28651 = (i__28632_28646 + (1));
seq__28629_28643 = G__28648;
chunk__28630_28644 = G__28649;
count__28631_28645 = G__28650;
i__28632_28646 = G__28651;
continue;
} else {
var temp__4425__auto___28652 = cljs.core.seq.call(null,seq__28629_28643);
if(temp__4425__auto___28652){
var seq__28629_28653__$1 = temp__4425__auto___28652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28629_28653__$1)){
var c__17147__auto___28654 = cljs.core.chunk_first.call(null,seq__28629_28653__$1);
var G__28655 = cljs.core.chunk_rest.call(null,seq__28629_28653__$1);
var G__28656 = c__17147__auto___28654;
var G__28657 = cljs.core.count.call(null,c__17147__auto___28654);
var G__28658 = (0);
seq__28629_28643 = G__28655;
chunk__28630_28644 = G__28656;
count__28631_28645 = G__28657;
i__28632_28646 = G__28658;
continue;
} else {
var f_28659 = cljs.core.first.call(null,seq__28629_28653__$1);
cljs.core.println.call(null,"  ",f_28659);

var G__28660 = cljs.core.next.call(null,seq__28629_28653__$1);
var G__28661 = null;
var G__28662 = (0);
var G__28663 = (0);
seq__28629_28643 = G__28660;
chunk__28630_28644 = G__28661;
count__28631_28645 = G__28662;
i__28632_28646 = G__28663;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28664 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16344__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28664);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28664)))?cljs.core.second.call(null,arglists_28664):arglists_28664));
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
var seq__28633 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28634 = null;
var count__28635 = (0);
var i__28636 = (0);
while(true){
if((i__28636 < count__28635)){
var vec__28637 = cljs.core._nth.call(null,chunk__28634,i__28636);
var name = cljs.core.nth.call(null,vec__28637,(0),null);
var map__28638 = cljs.core.nth.call(null,vec__28637,(1),null);
var map__28638__$1 = ((((!((map__28638 == null)))?((((map__28638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28638):map__28638);
var doc = cljs.core.get.call(null,map__28638__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28638__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28665 = seq__28633;
var G__28666 = chunk__28634;
var G__28667 = count__28635;
var G__28668 = (i__28636 + (1));
seq__28633 = G__28665;
chunk__28634 = G__28666;
count__28635 = G__28667;
i__28636 = G__28668;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28633);
if(temp__4425__auto__){
var seq__28633__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28633__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__28633__$1);
var G__28669 = cljs.core.chunk_rest.call(null,seq__28633__$1);
var G__28670 = c__17147__auto__;
var G__28671 = cljs.core.count.call(null,c__17147__auto__);
var G__28672 = (0);
seq__28633 = G__28669;
chunk__28634 = G__28670;
count__28635 = G__28671;
i__28636 = G__28672;
continue;
} else {
var vec__28640 = cljs.core.first.call(null,seq__28633__$1);
var name = cljs.core.nth.call(null,vec__28640,(0),null);
var map__28641 = cljs.core.nth.call(null,vec__28640,(1),null);
var map__28641__$1 = ((((!((map__28641 == null)))?((((map__28641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28641):map__28641);
var doc = cljs.core.get.call(null,map__28641__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28641__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28673 = cljs.core.next.call(null,seq__28633__$1);
var G__28674 = null;
var G__28675 = (0);
var G__28676 = (0);
seq__28633 = G__28673;
chunk__28634 = G__28674;
count__28635 = G__28675;
i__28636 = G__28676;
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