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
var seq__26147_26161 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26148_26162 = null;
var count__26149_26163 = (0);
var i__26150_26164 = (0);
while(true){
if((i__26150_26164 < count__26149_26163)){
var f_26165 = cljs.core._nth.call(null,chunk__26148_26162,i__26150_26164);
cljs.core.println.call(null,"  ",f_26165);

var G__26166 = seq__26147_26161;
var G__26167 = chunk__26148_26162;
var G__26168 = count__26149_26163;
var G__26169 = (i__26150_26164 + (1));
seq__26147_26161 = G__26166;
chunk__26148_26162 = G__26167;
count__26149_26163 = G__26168;
i__26150_26164 = G__26169;
continue;
} else {
var temp__4425__auto___26170 = cljs.core.seq.call(null,seq__26147_26161);
if(temp__4425__auto___26170){
var seq__26147_26171__$1 = temp__4425__auto___26170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26147_26171__$1)){
var c__17161__auto___26172 = cljs.core.chunk_first.call(null,seq__26147_26171__$1);
var G__26173 = cljs.core.chunk_rest.call(null,seq__26147_26171__$1);
var G__26174 = c__17161__auto___26172;
var G__26175 = cljs.core.count.call(null,c__17161__auto___26172);
var G__26176 = (0);
seq__26147_26161 = G__26173;
chunk__26148_26162 = G__26174;
count__26149_26163 = G__26175;
i__26150_26164 = G__26176;
continue;
} else {
var f_26177 = cljs.core.first.call(null,seq__26147_26171__$1);
cljs.core.println.call(null,"  ",f_26177);

var G__26178 = cljs.core.next.call(null,seq__26147_26171__$1);
var G__26179 = null;
var G__26180 = (0);
var G__26181 = (0);
seq__26147_26161 = G__26178;
chunk__26148_26162 = G__26179;
count__26149_26163 = G__26180;
i__26150_26164 = G__26181;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26182 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16358__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26182);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26182)))?cljs.core.second.call(null,arglists_26182):arglists_26182));
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
var seq__26151 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26152 = null;
var count__26153 = (0);
var i__26154 = (0);
while(true){
if((i__26154 < count__26153)){
var vec__26155 = cljs.core._nth.call(null,chunk__26152,i__26154);
var name = cljs.core.nth.call(null,vec__26155,(0),null);
var map__26156 = cljs.core.nth.call(null,vec__26155,(1),null);
var map__26156__$1 = ((((!((map__26156 == null)))?((((map__26156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26156):map__26156);
var doc = cljs.core.get.call(null,map__26156__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26156__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26183 = seq__26151;
var G__26184 = chunk__26152;
var G__26185 = count__26153;
var G__26186 = (i__26154 + (1));
seq__26151 = G__26183;
chunk__26152 = G__26184;
count__26153 = G__26185;
i__26154 = G__26186;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26151);
if(temp__4425__auto__){
var seq__26151__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26151__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__26151__$1);
var G__26187 = cljs.core.chunk_rest.call(null,seq__26151__$1);
var G__26188 = c__17161__auto__;
var G__26189 = cljs.core.count.call(null,c__17161__auto__);
var G__26190 = (0);
seq__26151 = G__26187;
chunk__26152 = G__26188;
count__26153 = G__26189;
i__26154 = G__26190;
continue;
} else {
var vec__26158 = cljs.core.first.call(null,seq__26151__$1);
var name = cljs.core.nth.call(null,vec__26158,(0),null);
var map__26159 = cljs.core.nth.call(null,vec__26158,(1),null);
var map__26159__$1 = ((((!((map__26159 == null)))?((((map__26159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26159):map__26159);
var doc = cljs.core.get.call(null,map__26159__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26159__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26191 = cljs.core.next.call(null,seq__26151__$1);
var G__26192 = null;
var G__26193 = (0);
var G__26194 = (0);
seq__26151 = G__26191;
chunk__26152 = G__26192;
count__26153 = G__26193;
i__26154 = G__26194;
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