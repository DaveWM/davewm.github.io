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
var seq__31248_31262 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31249_31263 = null;
var count__31250_31264 = (0);
var i__31251_31265 = (0);
while(true){
if((i__31251_31265 < count__31250_31264)){
var f_31266 = cljs.core._nth.call(null,chunk__31249_31263,i__31251_31265);
cljs.core.println.call(null,"  ",f_31266);

var G__31267 = seq__31248_31262;
var G__31268 = chunk__31249_31263;
var G__31269 = count__31250_31264;
var G__31270 = (i__31251_31265 + (1));
seq__31248_31262 = G__31267;
chunk__31249_31263 = G__31268;
count__31250_31264 = G__31269;
i__31251_31265 = G__31270;
continue;
} else {
var temp__4425__auto___31271 = cljs.core.seq.call(null,seq__31248_31262);
if(temp__4425__auto___31271){
var seq__31248_31272__$1 = temp__4425__auto___31271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31248_31272__$1)){
var c__17161__auto___31273 = cljs.core.chunk_first.call(null,seq__31248_31272__$1);
var G__31274 = cljs.core.chunk_rest.call(null,seq__31248_31272__$1);
var G__31275 = c__17161__auto___31273;
var G__31276 = cljs.core.count.call(null,c__17161__auto___31273);
var G__31277 = (0);
seq__31248_31262 = G__31274;
chunk__31249_31263 = G__31275;
count__31250_31264 = G__31276;
i__31251_31265 = G__31277;
continue;
} else {
var f_31278 = cljs.core.first.call(null,seq__31248_31272__$1);
cljs.core.println.call(null,"  ",f_31278);

var G__31279 = cljs.core.next.call(null,seq__31248_31272__$1);
var G__31280 = null;
var G__31281 = (0);
var G__31282 = (0);
seq__31248_31262 = G__31279;
chunk__31249_31263 = G__31280;
count__31250_31264 = G__31281;
i__31251_31265 = G__31282;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31283 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16358__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31283);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31283)))?cljs.core.second.call(null,arglists_31283):arglists_31283));
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
var seq__31252 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31253 = null;
var count__31254 = (0);
var i__31255 = (0);
while(true){
if((i__31255 < count__31254)){
var vec__31256 = cljs.core._nth.call(null,chunk__31253,i__31255);
var name = cljs.core.nth.call(null,vec__31256,(0),null);
var map__31257 = cljs.core.nth.call(null,vec__31256,(1),null);
var map__31257__$1 = ((((!((map__31257 == null)))?((((map__31257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31257):map__31257);
var doc = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31284 = seq__31252;
var G__31285 = chunk__31253;
var G__31286 = count__31254;
var G__31287 = (i__31255 + (1));
seq__31252 = G__31284;
chunk__31253 = G__31285;
count__31254 = G__31286;
i__31255 = G__31287;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31252);
if(temp__4425__auto__){
var seq__31252__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31252__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__31252__$1);
var G__31288 = cljs.core.chunk_rest.call(null,seq__31252__$1);
var G__31289 = c__17161__auto__;
var G__31290 = cljs.core.count.call(null,c__17161__auto__);
var G__31291 = (0);
seq__31252 = G__31288;
chunk__31253 = G__31289;
count__31254 = G__31290;
i__31255 = G__31291;
continue;
} else {
var vec__31259 = cljs.core.first.call(null,seq__31252__$1);
var name = cljs.core.nth.call(null,vec__31259,(0),null);
var map__31260 = cljs.core.nth.call(null,vec__31259,(1),null);
var map__31260__$1 = ((((!((map__31260 == null)))?((((map__31260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31260):map__31260);
var doc = cljs.core.get.call(null,map__31260__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31260__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31292 = cljs.core.next.call(null,seq__31252__$1);
var G__31293 = null;
var G__31294 = (0);
var G__31295 = (0);
seq__31252 = G__31292;
chunk__31253 = G__31293;
count__31254 = G__31294;
i__31255 = G__31295;
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