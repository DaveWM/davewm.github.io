// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38418){
var map__38419 = p__38418;
var map__38419__$1 = (((((!((map__38419 == null))))?(((((map__38419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38419):map__38419);
var m = map__38419__$1;
var n = cljs.core.get.call(null,map__38419__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38419__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38421_38443 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38422_38444 = null;
var count__38423_38445 = (0);
var i__38424_38446 = (0);
while(true){
if((i__38424_38446 < count__38423_38445)){
var f_38447 = cljs.core._nth.call(null,chunk__38422_38444,i__38424_38446);
cljs.core.println.call(null,"  ",f_38447);


var G__38448 = seq__38421_38443;
var G__38449 = chunk__38422_38444;
var G__38450 = count__38423_38445;
var G__38451 = (i__38424_38446 + (1));
seq__38421_38443 = G__38448;
chunk__38422_38444 = G__38449;
count__38423_38445 = G__38450;
i__38424_38446 = G__38451;
continue;
} else {
var temp__5720__auto___38452 = cljs.core.seq.call(null,seq__38421_38443);
if(temp__5720__auto___38452){
var seq__38421_38453__$1 = temp__5720__auto___38452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38421_38453__$1)){
var c__4461__auto___38454 = cljs.core.chunk_first.call(null,seq__38421_38453__$1);
var G__38455 = cljs.core.chunk_rest.call(null,seq__38421_38453__$1);
var G__38456 = c__4461__auto___38454;
var G__38457 = cljs.core.count.call(null,c__4461__auto___38454);
var G__38458 = (0);
seq__38421_38443 = G__38455;
chunk__38422_38444 = G__38456;
count__38423_38445 = G__38457;
i__38424_38446 = G__38458;
continue;
} else {
var f_38459 = cljs.core.first.call(null,seq__38421_38453__$1);
cljs.core.println.call(null,"  ",f_38459);


var G__38460 = cljs.core.next.call(null,seq__38421_38453__$1);
var G__38461 = null;
var G__38462 = (0);
var G__38463 = (0);
seq__38421_38443 = G__38460;
chunk__38422_38444 = G__38461;
count__38423_38445 = G__38462;
i__38424_38446 = G__38463;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38464 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38464);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38464)))?cljs.core.second.call(null,arglists_38464):arglists_38464));
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
var seq__38425_38465 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38426_38466 = null;
var count__38427_38467 = (0);
var i__38428_38468 = (0);
while(true){
if((i__38428_38468 < count__38427_38467)){
var vec__38429_38469 = cljs.core._nth.call(null,chunk__38426_38466,i__38428_38468);
var name_38470 = cljs.core.nth.call(null,vec__38429_38469,(0),null);
var map__38432_38471 = cljs.core.nth.call(null,vec__38429_38469,(1),null);
var map__38432_38472__$1 = (((((!((map__38432_38471 == null))))?(((((map__38432_38471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38432_38471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38432_38471):map__38432_38471);
var doc_38473 = cljs.core.get.call(null,map__38432_38472__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38474 = cljs.core.get.call(null,map__38432_38472__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38470);

cljs.core.println.call(null," ",arglists_38474);

if(cljs.core.truth_(doc_38473)){
cljs.core.println.call(null," ",doc_38473);
} else {
}


var G__38475 = seq__38425_38465;
var G__38476 = chunk__38426_38466;
var G__38477 = count__38427_38467;
var G__38478 = (i__38428_38468 + (1));
seq__38425_38465 = G__38475;
chunk__38426_38466 = G__38476;
count__38427_38467 = G__38477;
i__38428_38468 = G__38478;
continue;
} else {
var temp__5720__auto___38479 = cljs.core.seq.call(null,seq__38425_38465);
if(temp__5720__auto___38479){
var seq__38425_38480__$1 = temp__5720__auto___38479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38425_38480__$1)){
var c__4461__auto___38481 = cljs.core.chunk_first.call(null,seq__38425_38480__$1);
var G__38482 = cljs.core.chunk_rest.call(null,seq__38425_38480__$1);
var G__38483 = c__4461__auto___38481;
var G__38484 = cljs.core.count.call(null,c__4461__auto___38481);
var G__38485 = (0);
seq__38425_38465 = G__38482;
chunk__38426_38466 = G__38483;
count__38427_38467 = G__38484;
i__38428_38468 = G__38485;
continue;
} else {
var vec__38434_38486 = cljs.core.first.call(null,seq__38425_38480__$1);
var name_38487 = cljs.core.nth.call(null,vec__38434_38486,(0),null);
var map__38437_38488 = cljs.core.nth.call(null,vec__38434_38486,(1),null);
var map__38437_38489__$1 = (((((!((map__38437_38488 == null))))?(((((map__38437_38488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38437_38488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38437_38488):map__38437_38488);
var doc_38490 = cljs.core.get.call(null,map__38437_38489__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38491 = cljs.core.get.call(null,map__38437_38489__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38487);

cljs.core.println.call(null," ",arglists_38491);

if(cljs.core.truth_(doc_38490)){
cljs.core.println.call(null," ",doc_38490);
} else {
}


var G__38492 = cljs.core.next.call(null,seq__38425_38480__$1);
var G__38493 = null;
var G__38494 = (0);
var G__38495 = (0);
seq__38425_38465 = G__38492;
chunk__38426_38466 = G__38493;
count__38427_38467 = G__38494;
i__38428_38468 = G__38495;
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

var seq__38439 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38440 = null;
var count__38441 = (0);
var i__38442 = (0);
while(true){
if((i__38442 < count__38441)){
var role = cljs.core._nth.call(null,chunk__38440,i__38442);
var temp__5720__auto___38496__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___38496__$1)){
var spec_38497 = temp__5720__auto___38496__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38497));
} else {
}


var G__38498 = seq__38439;
var G__38499 = chunk__38440;
var G__38500 = count__38441;
var G__38501 = (i__38442 + (1));
seq__38439 = G__38498;
chunk__38440 = G__38499;
count__38441 = G__38500;
i__38442 = G__38501;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__38439);
if(temp__5720__auto____$1){
var seq__38439__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38439__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__38439__$1);
var G__38502 = cljs.core.chunk_rest.call(null,seq__38439__$1);
var G__38503 = c__4461__auto__;
var G__38504 = cljs.core.count.call(null,c__4461__auto__);
var G__38505 = (0);
seq__38439 = G__38502;
chunk__38440 = G__38503;
count__38441 = G__38504;
i__38442 = G__38505;
continue;
} else {
var role = cljs.core.first.call(null,seq__38439__$1);
var temp__5720__auto___38506__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___38506__$2)){
var spec_38507 = temp__5720__auto___38506__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38507));
} else {
}


var G__38508 = cljs.core.next.call(null,seq__38439__$1);
var G__38509 = null;
var G__38510 = (0);
var G__38511 = (0);
seq__38439 = G__38508;
chunk__38440 = G__38509;
count__38441 = G__38510;
i__38442 = G__38511;
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

//# sourceMappingURL=repl.js.map?rel=1545933900417
