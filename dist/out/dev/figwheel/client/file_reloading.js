// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29442_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29442_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29443 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29444 = null;
var count__29445 = (0);
var i__29446 = (0);
while(true){
if((i__29446 < count__29445)){
var n = cljs.core._nth.call(null,chunk__29444,i__29446);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29447 = seq__29443;
var G__29448 = chunk__29444;
var G__29449 = count__29445;
var G__29450 = (i__29446 + (1));
seq__29443 = G__29447;
chunk__29444 = G__29448;
count__29445 = G__29449;
i__29446 = G__29450;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29443);
if(temp__5720__auto__){
var seq__29443__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29443__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29443__$1);
var G__29451 = cljs.core.chunk_rest.call(null,seq__29443__$1);
var G__29452 = c__4461__auto__;
var G__29453 = cljs.core.count.call(null,c__4461__auto__);
var G__29454 = (0);
seq__29443 = G__29451;
chunk__29444 = G__29452;
count__29445 = G__29453;
i__29446 = G__29454;
continue;
} else {
var n = cljs.core.first.call(null,seq__29443__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29455 = cljs.core.next.call(null,seq__29443__$1);
var G__29456 = null;
var G__29457 = (0);
var G__29458 = (0);
seq__29443 = G__29455;
chunk__29444 = G__29456;
count__29445 = G__29457;
i__29446 = G__29458;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29459){
var vec__29460 = p__29459;
var _ = cljs.core.nth.call(null,vec__29460,(0),null);
var v = cljs.core.nth.call(null,vec__29460,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__29463){
var vec__29464 = p__29463;
var k = cljs.core.nth.call(null,vec__29464,(0),null);
var v = cljs.core.nth.call(null,vec__29464,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29476_29484 = cljs.core.seq.call(null,deps);
var chunk__29477_29485 = null;
var count__29478_29486 = (0);
var i__29479_29487 = (0);
while(true){
if((i__29479_29487 < count__29478_29486)){
var dep_29488 = cljs.core._nth.call(null,chunk__29477_29485,i__29479_29487);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_29488;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29488));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29488,(depth + (1)),state);
} else {
}


var G__29489 = seq__29476_29484;
var G__29490 = chunk__29477_29485;
var G__29491 = count__29478_29486;
var G__29492 = (i__29479_29487 + (1));
seq__29476_29484 = G__29489;
chunk__29477_29485 = G__29490;
count__29478_29486 = G__29491;
i__29479_29487 = G__29492;
continue;
} else {
var temp__5720__auto___29493 = cljs.core.seq.call(null,seq__29476_29484);
if(temp__5720__auto___29493){
var seq__29476_29494__$1 = temp__5720__auto___29493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29476_29494__$1)){
var c__4461__auto___29495 = cljs.core.chunk_first.call(null,seq__29476_29494__$1);
var G__29496 = cljs.core.chunk_rest.call(null,seq__29476_29494__$1);
var G__29497 = c__4461__auto___29495;
var G__29498 = cljs.core.count.call(null,c__4461__auto___29495);
var G__29499 = (0);
seq__29476_29484 = G__29496;
chunk__29477_29485 = G__29497;
count__29478_29486 = G__29498;
i__29479_29487 = G__29499;
continue;
} else {
var dep_29500 = cljs.core.first.call(null,seq__29476_29494__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_29500;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29500));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29500,(depth + (1)),state);
} else {
}


var G__29501 = cljs.core.next.call(null,seq__29476_29494__$1);
var G__29502 = null;
var G__29503 = (0);
var G__29504 = (0);
seq__29476_29484 = G__29501;
chunk__29477_29485 = G__29502;
count__29478_29486 = G__29503;
i__29479_29487 = G__29504;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29480){
var vec__29481 = p__29480;
var seq__29482 = cljs.core.seq.call(null,vec__29481);
var first__29483 = cljs.core.first.call(null,seq__29482);
var seq__29482__$1 = cljs.core.next.call(null,seq__29482);
var x = first__29483;
var xs = seq__29482__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29481,seq__29482,first__29483,seq__29482__$1,x,xs,get_deps__$1){
return (function (p1__29467_SHARP_){
return clojure.set.difference.call(null,p1__29467_SHARP_,x);
});})(vec__29481,seq__29482,first__29483,seq__29482__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29505 = cljs.core.seq.call(null,provides);
var chunk__29506 = null;
var count__29507 = (0);
var i__29508 = (0);
while(true){
if((i__29508 < count__29507)){
var prov = cljs.core._nth.call(null,chunk__29506,i__29508);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29509_29517 = cljs.core.seq.call(null,requires);
var chunk__29510_29518 = null;
var count__29511_29519 = (0);
var i__29512_29520 = (0);
while(true){
if((i__29512_29520 < count__29511_29519)){
var req_29521 = cljs.core._nth.call(null,chunk__29510_29518,i__29512_29520);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29521,prov);


var G__29522 = seq__29509_29517;
var G__29523 = chunk__29510_29518;
var G__29524 = count__29511_29519;
var G__29525 = (i__29512_29520 + (1));
seq__29509_29517 = G__29522;
chunk__29510_29518 = G__29523;
count__29511_29519 = G__29524;
i__29512_29520 = G__29525;
continue;
} else {
var temp__5720__auto___29526 = cljs.core.seq.call(null,seq__29509_29517);
if(temp__5720__auto___29526){
var seq__29509_29527__$1 = temp__5720__auto___29526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29509_29527__$1)){
var c__4461__auto___29528 = cljs.core.chunk_first.call(null,seq__29509_29527__$1);
var G__29529 = cljs.core.chunk_rest.call(null,seq__29509_29527__$1);
var G__29530 = c__4461__auto___29528;
var G__29531 = cljs.core.count.call(null,c__4461__auto___29528);
var G__29532 = (0);
seq__29509_29517 = G__29529;
chunk__29510_29518 = G__29530;
count__29511_29519 = G__29531;
i__29512_29520 = G__29532;
continue;
} else {
var req_29533 = cljs.core.first.call(null,seq__29509_29527__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29533,prov);


var G__29534 = cljs.core.next.call(null,seq__29509_29527__$1);
var G__29535 = null;
var G__29536 = (0);
var G__29537 = (0);
seq__29509_29517 = G__29534;
chunk__29510_29518 = G__29535;
count__29511_29519 = G__29536;
i__29512_29520 = G__29537;
continue;
}
} else {
}
}
break;
}


var G__29538 = seq__29505;
var G__29539 = chunk__29506;
var G__29540 = count__29507;
var G__29541 = (i__29508 + (1));
seq__29505 = G__29538;
chunk__29506 = G__29539;
count__29507 = G__29540;
i__29508 = G__29541;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29505);
if(temp__5720__auto__){
var seq__29505__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29505__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29505__$1);
var G__29542 = cljs.core.chunk_rest.call(null,seq__29505__$1);
var G__29543 = c__4461__auto__;
var G__29544 = cljs.core.count.call(null,c__4461__auto__);
var G__29545 = (0);
seq__29505 = G__29542;
chunk__29506 = G__29543;
count__29507 = G__29544;
i__29508 = G__29545;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29505__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29513_29546 = cljs.core.seq.call(null,requires);
var chunk__29514_29547 = null;
var count__29515_29548 = (0);
var i__29516_29549 = (0);
while(true){
if((i__29516_29549 < count__29515_29548)){
var req_29550 = cljs.core._nth.call(null,chunk__29514_29547,i__29516_29549);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29550,prov);


var G__29551 = seq__29513_29546;
var G__29552 = chunk__29514_29547;
var G__29553 = count__29515_29548;
var G__29554 = (i__29516_29549 + (1));
seq__29513_29546 = G__29551;
chunk__29514_29547 = G__29552;
count__29515_29548 = G__29553;
i__29516_29549 = G__29554;
continue;
} else {
var temp__5720__auto___29555__$1 = cljs.core.seq.call(null,seq__29513_29546);
if(temp__5720__auto___29555__$1){
var seq__29513_29556__$1 = temp__5720__auto___29555__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29513_29556__$1)){
var c__4461__auto___29557 = cljs.core.chunk_first.call(null,seq__29513_29556__$1);
var G__29558 = cljs.core.chunk_rest.call(null,seq__29513_29556__$1);
var G__29559 = c__4461__auto___29557;
var G__29560 = cljs.core.count.call(null,c__4461__auto___29557);
var G__29561 = (0);
seq__29513_29546 = G__29558;
chunk__29514_29547 = G__29559;
count__29515_29548 = G__29560;
i__29516_29549 = G__29561;
continue;
} else {
var req_29562 = cljs.core.first.call(null,seq__29513_29556__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29562,prov);


var G__29563 = cljs.core.next.call(null,seq__29513_29556__$1);
var G__29564 = null;
var G__29565 = (0);
var G__29566 = (0);
seq__29513_29546 = G__29563;
chunk__29514_29547 = G__29564;
count__29515_29548 = G__29565;
i__29516_29549 = G__29566;
continue;
}
} else {
}
}
break;
}


var G__29567 = cljs.core.next.call(null,seq__29505__$1);
var G__29568 = null;
var G__29569 = (0);
var G__29570 = (0);
seq__29505 = G__29567;
chunk__29506 = G__29568;
count__29507 = G__29569;
i__29508 = G__29570;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29571_29575 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29572_29576 = null;
var count__29573_29577 = (0);
var i__29574_29578 = (0);
while(true){
if((i__29574_29578 < count__29573_29577)){
var ns_29579 = cljs.core._nth.call(null,chunk__29572_29576,i__29574_29578);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29579);


var G__29580 = seq__29571_29575;
var G__29581 = chunk__29572_29576;
var G__29582 = count__29573_29577;
var G__29583 = (i__29574_29578 + (1));
seq__29571_29575 = G__29580;
chunk__29572_29576 = G__29581;
count__29573_29577 = G__29582;
i__29574_29578 = G__29583;
continue;
} else {
var temp__5720__auto___29584 = cljs.core.seq.call(null,seq__29571_29575);
if(temp__5720__auto___29584){
var seq__29571_29585__$1 = temp__5720__auto___29584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29571_29585__$1)){
var c__4461__auto___29586 = cljs.core.chunk_first.call(null,seq__29571_29585__$1);
var G__29587 = cljs.core.chunk_rest.call(null,seq__29571_29585__$1);
var G__29588 = c__4461__auto___29586;
var G__29589 = cljs.core.count.call(null,c__4461__auto___29586);
var G__29590 = (0);
seq__29571_29575 = G__29587;
chunk__29572_29576 = G__29588;
count__29573_29577 = G__29589;
i__29574_29578 = G__29590;
continue;
} else {
var ns_29591 = cljs.core.first.call(null,seq__29571_29585__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29591);


var G__29592 = cljs.core.next.call(null,seq__29571_29585__$1);
var G__29593 = null;
var G__29594 = (0);
var G__29595 = (0);
seq__29571_29575 = G__29592;
chunk__29572_29576 = G__29593;
count__29573_29577 = G__29594;
i__29574_29578 = G__29595;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29596__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29597__i = 0, G__29597__a = new Array(arguments.length -  0);
while (G__29597__i < G__29597__a.length) {G__29597__a[G__29597__i] = arguments[G__29597__i + 0]; ++G__29597__i;}
  args = new cljs.core.IndexedSeq(G__29597__a,0,null);
} 
return G__29596__delegate.call(this,args);};
G__29596.cljs$lang$maxFixedArity = 0;
G__29596.cljs$lang$applyTo = (function (arglist__29598){
var args = cljs.core.seq(arglist__29598);
return G__29596__delegate(args);
});
G__29596.cljs$core$IFn$_invoke$arity$variadic = G__29596__delegate;
return G__29596;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29599_SHARP_,p2__29600_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29599_SHARP_)),p2__29600_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29601_SHARP_,p2__29602_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29601_SHARP_),p2__29602_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29603 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29603.addCallback(((function (G__29603){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29603))
);

G__29603.addErrback(((function (G__29603){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29603))
);

return G__29603;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29604){if((e29604 instanceof Error)){
var e = e29604;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29604;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29605){if((e29605 instanceof Error)){
var e = e29605;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29605;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29606 = cljs.core._EQ_;
var expr__29607 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29606.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29607))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29606.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29607))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29606.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29607))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29606,expr__29607){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29606,expr__29607))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29609,callback){
var map__29610 = p__29609;
var map__29610__$1 = (((((!((map__29610 == null))))?(((((map__29610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29610):map__29610);
var file_msg = map__29610__$1;
var request_url = cljs.core.get.call(null,map__29610__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29610,map__29610__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29610,map__29610__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26092__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto__){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto__){
return (function (state_29648){
var state_val_29649 = (state_29648[(1)]);
if((state_val_29649 === (7))){
var inst_29644 = (state_29648[(2)]);
var state_29648__$1 = state_29648;
var statearr_29650_29676 = state_29648__$1;
(statearr_29650_29676[(2)] = inst_29644);

(statearr_29650_29676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (1))){
var state_29648__$1 = state_29648;
var statearr_29651_29677 = state_29648__$1;
(statearr_29651_29677[(2)] = null);

(statearr_29651_29677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (4))){
var inst_29614 = (state_29648[(7)]);
var inst_29614__$1 = (state_29648[(2)]);
var state_29648__$1 = (function (){var statearr_29652 = state_29648;
(statearr_29652[(7)] = inst_29614__$1);

return statearr_29652;
})();
if(cljs.core.truth_(inst_29614__$1)){
var statearr_29653_29678 = state_29648__$1;
(statearr_29653_29678[(1)] = (5));

} else {
var statearr_29654_29679 = state_29648__$1;
(statearr_29654_29679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (15))){
var inst_29627 = (state_29648[(8)]);
var inst_29629 = (state_29648[(9)]);
var inst_29631 = inst_29629.call(null,inst_29627);
var state_29648__$1 = state_29648;
var statearr_29655_29680 = state_29648__$1;
(statearr_29655_29680[(2)] = inst_29631);

(statearr_29655_29680[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (13))){
var inst_29638 = (state_29648[(2)]);
var state_29648__$1 = state_29648;
var statearr_29656_29681 = state_29648__$1;
(statearr_29656_29681[(2)] = inst_29638);

(statearr_29656_29681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (6))){
var state_29648__$1 = state_29648;
var statearr_29657_29682 = state_29648__$1;
(statearr_29657_29682[(2)] = null);

(statearr_29657_29682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (17))){
var inst_29635 = (state_29648[(2)]);
var state_29648__$1 = state_29648;
var statearr_29658_29683 = state_29648__$1;
(statearr_29658_29683[(2)] = inst_29635);

(statearr_29658_29683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (3))){
var inst_29646 = (state_29648[(2)]);
var state_29648__$1 = state_29648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29648__$1,inst_29646);
} else {
if((state_val_29649 === (12))){
var state_29648__$1 = state_29648;
var statearr_29659_29684 = state_29648__$1;
(statearr_29659_29684[(2)] = null);

(statearr_29659_29684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (2))){
var state_29648__$1 = state_29648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29648__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29649 === (11))){
var inst_29619 = (state_29648[(10)]);
var inst_29625 = figwheel.client.file_reloading.blocking_load.call(null,inst_29619);
var state_29648__$1 = state_29648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29648__$1,(14),inst_29625);
} else {
if((state_val_29649 === (9))){
var inst_29619 = (state_29648[(10)]);
var state_29648__$1 = state_29648;
if(cljs.core.truth_(inst_29619)){
var statearr_29660_29685 = state_29648__$1;
(statearr_29660_29685[(1)] = (11));

} else {
var statearr_29661_29686 = state_29648__$1;
(statearr_29661_29686[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (5))){
var inst_29614 = (state_29648[(7)]);
var inst_29620 = (state_29648[(11)]);
var inst_29619 = cljs.core.nth.call(null,inst_29614,(0),null);
var inst_29620__$1 = cljs.core.nth.call(null,inst_29614,(1),null);
var state_29648__$1 = (function (){var statearr_29662 = state_29648;
(statearr_29662[(11)] = inst_29620__$1);

(statearr_29662[(10)] = inst_29619);

return statearr_29662;
})();
if(cljs.core.truth_(inst_29620__$1)){
var statearr_29663_29687 = state_29648__$1;
(statearr_29663_29687[(1)] = (8));

} else {
var statearr_29664_29688 = state_29648__$1;
(statearr_29664_29688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (14))){
var inst_29629 = (state_29648[(9)]);
var inst_29619 = (state_29648[(10)]);
var inst_29627 = (state_29648[(2)]);
var inst_29628 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29629__$1 = cljs.core.get.call(null,inst_29628,inst_29619);
var state_29648__$1 = (function (){var statearr_29665 = state_29648;
(statearr_29665[(8)] = inst_29627);

(statearr_29665[(9)] = inst_29629__$1);

return statearr_29665;
})();
if(cljs.core.truth_(inst_29629__$1)){
var statearr_29666_29689 = state_29648__$1;
(statearr_29666_29689[(1)] = (15));

} else {
var statearr_29667_29690 = state_29648__$1;
(statearr_29667_29690[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (16))){
var inst_29627 = (state_29648[(8)]);
var inst_29633 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29627);
var state_29648__$1 = state_29648;
var statearr_29668_29691 = state_29648__$1;
(statearr_29668_29691[(2)] = inst_29633);

(statearr_29668_29691[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (10))){
var inst_29640 = (state_29648[(2)]);
var state_29648__$1 = (function (){var statearr_29669 = state_29648;
(statearr_29669[(12)] = inst_29640);

return statearr_29669;
})();
var statearr_29670_29692 = state_29648__$1;
(statearr_29670_29692[(2)] = null);

(statearr_29670_29692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (8))){
var inst_29620 = (state_29648[(11)]);
var inst_29622 = eval(inst_29620);
var state_29648__$1 = state_29648;
var statearr_29671_29693 = state_29648__$1;
(statearr_29671_29693[(2)] = inst_29622);

(statearr_29671_29693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26092__auto__))
;
return ((function (switch__25997__auto__,c__26092__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25998__auto__ = null;
var figwheel$client$file_reloading$state_machine__25998__auto____0 = (function (){
var statearr_29672 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29672[(0)] = figwheel$client$file_reloading$state_machine__25998__auto__);

(statearr_29672[(1)] = (1));

return statearr_29672;
});
var figwheel$client$file_reloading$state_machine__25998__auto____1 = (function (state_29648){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_29648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e29673){if((e29673 instanceof Object)){
var ex__26001__auto__ = e29673;
var statearr_29674_29694 = state_29648;
(statearr_29674_29694[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29695 = state_29648;
state_29648 = G__29695;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25998__auto__ = function(state_29648){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25998__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25998__auto____1.call(this,state_29648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25998__auto____0;
figwheel$client$file_reloading$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25998__auto____1;
return figwheel$client$file_reloading$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto__))
})();
var state__26094__auto__ = (function (){var statearr_29675 = f__26093__auto__.call(null);
(statearr_29675[(6)] = c__26092__auto__);

return statearr_29675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto__))
);

return c__26092__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29697 = arguments.length;
switch (G__29697) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29699,callback){
var map__29700 = p__29699;
var map__29700__$1 = (((((!((map__29700 == null))))?(((((map__29700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29700):map__29700);
var file_msg = map__29700__$1;
var namespace = cljs.core.get.call(null,map__29700__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29700,map__29700__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29700,map__29700__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29702){
var map__29703 = p__29702;
var map__29703__$1 = (((((!((map__29703 == null))))?(((((map__29703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29703):map__29703);
var file_msg = map__29703__$1;
var namespace = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29705){
var map__29706 = p__29705;
var map__29706__$1 = (((((!((map__29706 == null))))?(((((map__29706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29706):map__29706);
var file_msg = map__29706__$1;
var namespace = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29708,callback){
var map__29709 = p__29708;
var map__29709__$1 = (((((!((map__29709 == null))))?(((((map__29709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29709):map__29709);
var file_msg = map__29709__$1;
var request_url = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26092__auto___29759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___29759,out){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___29759,out){
return (function (state_29744){
var state_val_29745 = (state_29744[(1)]);
if((state_val_29745 === (1))){
var inst_29718 = cljs.core.seq.call(null,files);
var inst_29719 = cljs.core.first.call(null,inst_29718);
var inst_29720 = cljs.core.next.call(null,inst_29718);
var inst_29721 = files;
var state_29744__$1 = (function (){var statearr_29746 = state_29744;
(statearr_29746[(7)] = inst_29719);

(statearr_29746[(8)] = inst_29721);

(statearr_29746[(9)] = inst_29720);

return statearr_29746;
})();
var statearr_29747_29760 = state_29744__$1;
(statearr_29747_29760[(2)] = null);

(statearr_29747_29760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (2))){
var inst_29721 = (state_29744[(8)]);
var inst_29727 = (state_29744[(10)]);
var inst_29726 = cljs.core.seq.call(null,inst_29721);
var inst_29727__$1 = cljs.core.first.call(null,inst_29726);
var inst_29728 = cljs.core.next.call(null,inst_29726);
var inst_29729 = (inst_29727__$1 == null);
var inst_29730 = cljs.core.not.call(null,inst_29729);
var state_29744__$1 = (function (){var statearr_29748 = state_29744;
(statearr_29748[(10)] = inst_29727__$1);

(statearr_29748[(11)] = inst_29728);

return statearr_29748;
})();
if(inst_29730){
var statearr_29749_29761 = state_29744__$1;
(statearr_29749_29761[(1)] = (4));

} else {
var statearr_29750_29762 = state_29744__$1;
(statearr_29750_29762[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (3))){
var inst_29742 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29744__$1,inst_29742);
} else {
if((state_val_29745 === (4))){
var inst_29727 = (state_29744[(10)]);
var inst_29732 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29727);
var state_29744__$1 = state_29744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29744__$1,(7),inst_29732);
} else {
if((state_val_29745 === (5))){
var inst_29738 = cljs.core.async.close_BANG_.call(null,out);
var state_29744__$1 = state_29744;
var statearr_29751_29763 = state_29744__$1;
(statearr_29751_29763[(2)] = inst_29738);

(statearr_29751_29763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (6))){
var inst_29740 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
var statearr_29752_29764 = state_29744__$1;
(statearr_29752_29764[(2)] = inst_29740);

(statearr_29752_29764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (7))){
var inst_29728 = (state_29744[(11)]);
var inst_29734 = (state_29744[(2)]);
var inst_29735 = cljs.core.async.put_BANG_.call(null,out,inst_29734);
var inst_29721 = inst_29728;
var state_29744__$1 = (function (){var statearr_29753 = state_29744;
(statearr_29753[(8)] = inst_29721);

(statearr_29753[(12)] = inst_29735);

return statearr_29753;
})();
var statearr_29754_29765 = state_29744__$1;
(statearr_29754_29765[(2)] = null);

(statearr_29754_29765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__26092__auto___29759,out))
;
return ((function (switch__25997__auto__,c__26092__auto___29759,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto____0 = (function (){
var statearr_29755 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29755[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto__);

(statearr_29755[(1)] = (1));

return statearr_29755;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto____1 = (function (state_29744){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_29744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e29756){if((e29756 instanceof Object)){
var ex__26001__auto__ = e29756;
var statearr_29757_29766 = state_29744;
(statearr_29757_29766[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29767 = state_29744;
state_29744 = G__29767;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto__ = function(state_29744){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto____1.call(this,state_29744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___29759,out))
})();
var state__26094__auto__ = (function (){var statearr_29758 = f__26093__auto__.call(null);
(statearr_29758[(6)] = c__26092__auto___29759);

return statearr_29758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___29759,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29768,opts){
var map__29769 = p__29768;
var map__29769__$1 = (((((!((map__29769 == null))))?(((((map__29769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29769):map__29769);
var eval_body = cljs.core.get.call(null,map__29769__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29769__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29771){var e = e29771;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29772_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29772_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29773){
var vec__29774 = p__29773;
var k = cljs.core.nth.call(null,vec__29774,(0),null);
var v = cljs.core.nth.call(null,vec__29774,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29777){
var vec__29778 = p__29777;
var k = cljs.core.nth.call(null,vec__29778,(0),null);
var v = cljs.core.nth.call(null,vec__29778,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29784,p__29785){
var map__29786 = p__29784;
var map__29786__$1 = (((((!((map__29786 == null))))?(((((map__29786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29786):map__29786);
var opts = map__29786__$1;
var before_jsload = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29787 = p__29785;
var map__29787__$1 = (((((!((map__29787 == null))))?(((((map__29787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29787):map__29787);
var msg = map__29787__$1;
var files = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26092__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29941){
var state_val_29942 = (state_29941[(1)]);
if((state_val_29942 === (7))){
var inst_29804 = (state_29941[(7)]);
var inst_29801 = (state_29941[(8)]);
var inst_29803 = (state_29941[(9)]);
var inst_29802 = (state_29941[(10)]);
var inst_29809 = cljs.core._nth.call(null,inst_29802,inst_29804);
var inst_29810 = figwheel.client.file_reloading.eval_body.call(null,inst_29809,opts);
var inst_29811 = (inst_29804 + (1));
var tmp29943 = inst_29801;
var tmp29944 = inst_29803;
var tmp29945 = inst_29802;
var inst_29801__$1 = tmp29943;
var inst_29802__$1 = tmp29945;
var inst_29803__$1 = tmp29944;
var inst_29804__$1 = inst_29811;
var state_29941__$1 = (function (){var statearr_29946 = state_29941;
(statearr_29946[(7)] = inst_29804__$1);

(statearr_29946[(11)] = inst_29810);

(statearr_29946[(8)] = inst_29801__$1);

(statearr_29946[(9)] = inst_29803__$1);

(statearr_29946[(10)] = inst_29802__$1);

return statearr_29946;
})();
var statearr_29947_30030 = state_29941__$1;
(statearr_29947_30030[(2)] = null);

(statearr_29947_30030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (20))){
var inst_29844 = (state_29941[(12)]);
var inst_29852 = figwheel.client.file_reloading.sort_files.call(null,inst_29844);
var state_29941__$1 = state_29941;
var statearr_29948_30031 = state_29941__$1;
(statearr_29948_30031[(2)] = inst_29852);

(statearr_29948_30031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (27))){
var state_29941__$1 = state_29941;
var statearr_29949_30032 = state_29941__$1;
(statearr_29949_30032[(2)] = null);

(statearr_29949_30032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (1))){
var inst_29793 = (state_29941[(13)]);
var inst_29790 = before_jsload.call(null,files);
var inst_29791 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29792 = (function (){return ((function (inst_29793,inst_29790,inst_29791,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29781_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29781_SHARP_);
});
;})(inst_29793,inst_29790,inst_29791,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29793__$1 = cljs.core.filter.call(null,inst_29792,files);
var inst_29794 = cljs.core.not_empty.call(null,inst_29793__$1);
var state_29941__$1 = (function (){var statearr_29950 = state_29941;
(statearr_29950[(14)] = inst_29790);

(statearr_29950[(15)] = inst_29791);

(statearr_29950[(13)] = inst_29793__$1);

return statearr_29950;
})();
if(cljs.core.truth_(inst_29794)){
var statearr_29951_30033 = state_29941__$1;
(statearr_29951_30033[(1)] = (2));

} else {
var statearr_29952_30034 = state_29941__$1;
(statearr_29952_30034[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (24))){
var state_29941__$1 = state_29941;
var statearr_29953_30035 = state_29941__$1;
(statearr_29953_30035[(2)] = null);

(statearr_29953_30035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (39))){
var inst_29894 = (state_29941[(16)]);
var state_29941__$1 = state_29941;
var statearr_29954_30036 = state_29941__$1;
(statearr_29954_30036[(2)] = inst_29894);

(statearr_29954_30036[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (46))){
var inst_29936 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
var statearr_29955_30037 = state_29941__$1;
(statearr_29955_30037[(2)] = inst_29936);

(statearr_29955_30037[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (4))){
var inst_29838 = (state_29941[(2)]);
var inst_29839 = cljs.core.List.EMPTY;
var inst_29840 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29839);
var inst_29841 = (function (){return ((function (inst_29838,inst_29839,inst_29840,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29782_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29782_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29782_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29782_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_29838,inst_29839,inst_29840,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29842 = cljs.core.filter.call(null,inst_29841,files);
var inst_29843 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29844 = cljs.core.concat.call(null,inst_29842,inst_29843);
var state_29941__$1 = (function (){var statearr_29956 = state_29941;
(statearr_29956[(17)] = inst_29838);

(statearr_29956[(12)] = inst_29844);

(statearr_29956[(18)] = inst_29840);

return statearr_29956;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29957_30038 = state_29941__$1;
(statearr_29957_30038[(1)] = (16));

} else {
var statearr_29958_30039 = state_29941__$1;
(statearr_29958_30039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (15))){
var inst_29828 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
var statearr_29959_30040 = state_29941__$1;
(statearr_29959_30040[(2)] = inst_29828);

(statearr_29959_30040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (21))){
var inst_29854 = (state_29941[(19)]);
var inst_29854__$1 = (state_29941[(2)]);
var inst_29855 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29854__$1);
var state_29941__$1 = (function (){var statearr_29960 = state_29941;
(statearr_29960[(19)] = inst_29854__$1);

return statearr_29960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29941__$1,(22),inst_29855);
} else {
if((state_val_29942 === (31))){
var inst_29939 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29941__$1,inst_29939);
} else {
if((state_val_29942 === (32))){
var inst_29894 = (state_29941[(16)]);
var inst_29899 = inst_29894.cljs$lang$protocol_mask$partition0$;
var inst_29900 = (inst_29899 & (64));
var inst_29901 = inst_29894.cljs$core$ISeq$;
var inst_29902 = (cljs.core.PROTOCOL_SENTINEL === inst_29901);
var inst_29903 = ((inst_29900) || (inst_29902));
var state_29941__$1 = state_29941;
if(cljs.core.truth_(inst_29903)){
var statearr_29961_30041 = state_29941__$1;
(statearr_29961_30041[(1)] = (35));

} else {
var statearr_29962_30042 = state_29941__$1;
(statearr_29962_30042[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (40))){
var inst_29916 = (state_29941[(20)]);
var inst_29915 = (state_29941[(2)]);
var inst_29916__$1 = cljs.core.get.call(null,inst_29915,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29917 = cljs.core.get.call(null,inst_29915,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29918 = cljs.core.not_empty.call(null,inst_29916__$1);
var state_29941__$1 = (function (){var statearr_29963 = state_29941;
(statearr_29963[(21)] = inst_29917);

(statearr_29963[(20)] = inst_29916__$1);

return statearr_29963;
})();
if(cljs.core.truth_(inst_29918)){
var statearr_29964_30043 = state_29941__$1;
(statearr_29964_30043[(1)] = (41));

} else {
var statearr_29965_30044 = state_29941__$1;
(statearr_29965_30044[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (33))){
var state_29941__$1 = state_29941;
var statearr_29966_30045 = state_29941__$1;
(statearr_29966_30045[(2)] = false);

(statearr_29966_30045[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (13))){
var inst_29814 = (state_29941[(22)]);
var inst_29818 = cljs.core.chunk_first.call(null,inst_29814);
var inst_29819 = cljs.core.chunk_rest.call(null,inst_29814);
var inst_29820 = cljs.core.count.call(null,inst_29818);
var inst_29801 = inst_29819;
var inst_29802 = inst_29818;
var inst_29803 = inst_29820;
var inst_29804 = (0);
var state_29941__$1 = (function (){var statearr_29967 = state_29941;
(statearr_29967[(7)] = inst_29804);

(statearr_29967[(8)] = inst_29801);

(statearr_29967[(9)] = inst_29803);

(statearr_29967[(10)] = inst_29802);

return statearr_29967;
})();
var statearr_29968_30046 = state_29941__$1;
(statearr_29968_30046[(2)] = null);

(statearr_29968_30046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (22))){
var inst_29858 = (state_29941[(23)]);
var inst_29854 = (state_29941[(19)]);
var inst_29862 = (state_29941[(24)]);
var inst_29857 = (state_29941[(25)]);
var inst_29857__$1 = (state_29941[(2)]);
var inst_29858__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29857__$1);
var inst_29859 = (function (){var all_files = inst_29854;
var res_SINGLEQUOTE_ = inst_29857__$1;
var res = inst_29858__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29858,inst_29854,inst_29862,inst_29857,inst_29857__$1,inst_29858__$1,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29783_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29783_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29858,inst_29854,inst_29862,inst_29857,inst_29857__$1,inst_29858__$1,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29860 = cljs.core.filter.call(null,inst_29859,inst_29857__$1);
var inst_29861 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29862__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29861);
var inst_29863 = cljs.core.not_empty.call(null,inst_29862__$1);
var state_29941__$1 = (function (){var statearr_29969 = state_29941;
(statearr_29969[(23)] = inst_29858__$1);

(statearr_29969[(26)] = inst_29860);

(statearr_29969[(24)] = inst_29862__$1);

(statearr_29969[(25)] = inst_29857__$1);

return statearr_29969;
})();
if(cljs.core.truth_(inst_29863)){
var statearr_29970_30047 = state_29941__$1;
(statearr_29970_30047[(1)] = (23));

} else {
var statearr_29971_30048 = state_29941__$1;
(statearr_29971_30048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (36))){
var state_29941__$1 = state_29941;
var statearr_29972_30049 = state_29941__$1;
(statearr_29972_30049[(2)] = false);

(statearr_29972_30049[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (41))){
var inst_29916 = (state_29941[(20)]);
var inst_29920 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29921 = cljs.core.map.call(null,inst_29920,inst_29916);
var inst_29922 = cljs.core.pr_str.call(null,inst_29921);
var inst_29923 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29922)].join('');
var inst_29924 = figwheel.client.utils.log.call(null,inst_29923);
var state_29941__$1 = state_29941;
var statearr_29973_30050 = state_29941__$1;
(statearr_29973_30050[(2)] = inst_29924);

(statearr_29973_30050[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (43))){
var inst_29917 = (state_29941[(21)]);
var inst_29927 = (state_29941[(2)]);
var inst_29928 = cljs.core.not_empty.call(null,inst_29917);
var state_29941__$1 = (function (){var statearr_29974 = state_29941;
(statearr_29974[(27)] = inst_29927);

return statearr_29974;
})();
if(cljs.core.truth_(inst_29928)){
var statearr_29975_30051 = state_29941__$1;
(statearr_29975_30051[(1)] = (44));

} else {
var statearr_29976_30052 = state_29941__$1;
(statearr_29976_30052[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (29))){
var inst_29858 = (state_29941[(23)]);
var inst_29860 = (state_29941[(26)]);
var inst_29854 = (state_29941[(19)]);
var inst_29862 = (state_29941[(24)]);
var inst_29857 = (state_29941[(25)]);
var inst_29894 = (state_29941[(16)]);
var inst_29890 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29893 = (function (){var all_files = inst_29854;
var res_SINGLEQUOTE_ = inst_29857;
var res = inst_29858;
var files_not_loaded = inst_29860;
var dependencies_that_loaded = inst_29862;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29858,inst_29860,inst_29854,inst_29862,inst_29857,inst_29894,inst_29890,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29892){
var map__29977 = p__29892;
var map__29977__$1 = (((((!((map__29977 == null))))?(((((map__29977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29977):map__29977);
var namespace = cljs.core.get.call(null,map__29977__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29858,inst_29860,inst_29854,inst_29862,inst_29857,inst_29894,inst_29890,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29894__$1 = cljs.core.group_by.call(null,inst_29893,inst_29860);
var inst_29896 = (inst_29894__$1 == null);
var inst_29897 = cljs.core.not.call(null,inst_29896);
var state_29941__$1 = (function (){var statearr_29979 = state_29941;
(statearr_29979[(28)] = inst_29890);

(statearr_29979[(16)] = inst_29894__$1);

return statearr_29979;
})();
if(inst_29897){
var statearr_29980_30053 = state_29941__$1;
(statearr_29980_30053[(1)] = (32));

} else {
var statearr_29981_30054 = state_29941__$1;
(statearr_29981_30054[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (44))){
var inst_29917 = (state_29941[(21)]);
var inst_29930 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29917);
var inst_29931 = cljs.core.pr_str.call(null,inst_29930);
var inst_29932 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29931)].join('');
var inst_29933 = figwheel.client.utils.log.call(null,inst_29932);
var state_29941__$1 = state_29941;
var statearr_29982_30055 = state_29941__$1;
(statearr_29982_30055[(2)] = inst_29933);

(statearr_29982_30055[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (6))){
var inst_29835 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
var statearr_29983_30056 = state_29941__$1;
(statearr_29983_30056[(2)] = inst_29835);

(statearr_29983_30056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (28))){
var inst_29860 = (state_29941[(26)]);
var inst_29887 = (state_29941[(2)]);
var inst_29888 = cljs.core.not_empty.call(null,inst_29860);
var state_29941__$1 = (function (){var statearr_29984 = state_29941;
(statearr_29984[(29)] = inst_29887);

return statearr_29984;
})();
if(cljs.core.truth_(inst_29888)){
var statearr_29985_30057 = state_29941__$1;
(statearr_29985_30057[(1)] = (29));

} else {
var statearr_29986_30058 = state_29941__$1;
(statearr_29986_30058[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (25))){
var inst_29858 = (state_29941[(23)]);
var inst_29874 = (state_29941[(2)]);
var inst_29875 = cljs.core.not_empty.call(null,inst_29858);
var state_29941__$1 = (function (){var statearr_29987 = state_29941;
(statearr_29987[(30)] = inst_29874);

return statearr_29987;
})();
if(cljs.core.truth_(inst_29875)){
var statearr_29988_30059 = state_29941__$1;
(statearr_29988_30059[(1)] = (26));

} else {
var statearr_29989_30060 = state_29941__$1;
(statearr_29989_30060[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (34))){
var inst_29910 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
if(cljs.core.truth_(inst_29910)){
var statearr_29990_30061 = state_29941__$1;
(statearr_29990_30061[(1)] = (38));

} else {
var statearr_29991_30062 = state_29941__$1;
(statearr_29991_30062[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (17))){
var state_29941__$1 = state_29941;
var statearr_29992_30063 = state_29941__$1;
(statearr_29992_30063[(2)] = recompile_dependents);

(statearr_29992_30063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (3))){
var state_29941__$1 = state_29941;
var statearr_29993_30064 = state_29941__$1;
(statearr_29993_30064[(2)] = null);

(statearr_29993_30064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (12))){
var inst_29831 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
var statearr_29994_30065 = state_29941__$1;
(statearr_29994_30065[(2)] = inst_29831);

(statearr_29994_30065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (2))){
var inst_29793 = (state_29941[(13)]);
var inst_29800 = cljs.core.seq.call(null,inst_29793);
var inst_29801 = inst_29800;
var inst_29802 = null;
var inst_29803 = (0);
var inst_29804 = (0);
var state_29941__$1 = (function (){var statearr_29995 = state_29941;
(statearr_29995[(7)] = inst_29804);

(statearr_29995[(8)] = inst_29801);

(statearr_29995[(9)] = inst_29803);

(statearr_29995[(10)] = inst_29802);

return statearr_29995;
})();
var statearr_29996_30066 = state_29941__$1;
(statearr_29996_30066[(2)] = null);

(statearr_29996_30066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (23))){
var inst_29858 = (state_29941[(23)]);
var inst_29860 = (state_29941[(26)]);
var inst_29854 = (state_29941[(19)]);
var inst_29862 = (state_29941[(24)]);
var inst_29857 = (state_29941[(25)]);
var inst_29865 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29867 = (function (){var all_files = inst_29854;
var res_SINGLEQUOTE_ = inst_29857;
var res = inst_29858;
var files_not_loaded = inst_29860;
var dependencies_that_loaded = inst_29862;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29858,inst_29860,inst_29854,inst_29862,inst_29857,inst_29865,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29866){
var map__29997 = p__29866;
var map__29997__$1 = (((((!((map__29997 == null))))?(((((map__29997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29997):map__29997);
var request_url = cljs.core.get.call(null,map__29997__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29858,inst_29860,inst_29854,inst_29862,inst_29857,inst_29865,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29868 = cljs.core.reverse.call(null,inst_29862);
var inst_29869 = cljs.core.map.call(null,inst_29867,inst_29868);
var inst_29870 = cljs.core.pr_str.call(null,inst_29869);
var inst_29871 = figwheel.client.utils.log.call(null,inst_29870);
var state_29941__$1 = (function (){var statearr_29999 = state_29941;
(statearr_29999[(31)] = inst_29865);

return statearr_29999;
})();
var statearr_30000_30067 = state_29941__$1;
(statearr_30000_30067[(2)] = inst_29871);

(statearr_30000_30067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (35))){
var state_29941__$1 = state_29941;
var statearr_30001_30068 = state_29941__$1;
(statearr_30001_30068[(2)] = true);

(statearr_30001_30068[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (19))){
var inst_29844 = (state_29941[(12)]);
var inst_29850 = figwheel.client.file_reloading.expand_files.call(null,inst_29844);
var state_29941__$1 = state_29941;
var statearr_30002_30069 = state_29941__$1;
(statearr_30002_30069[(2)] = inst_29850);

(statearr_30002_30069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (11))){
var state_29941__$1 = state_29941;
var statearr_30003_30070 = state_29941__$1;
(statearr_30003_30070[(2)] = null);

(statearr_30003_30070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (9))){
var inst_29833 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
var statearr_30004_30071 = state_29941__$1;
(statearr_30004_30071[(2)] = inst_29833);

(statearr_30004_30071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (5))){
var inst_29804 = (state_29941[(7)]);
var inst_29803 = (state_29941[(9)]);
var inst_29806 = (inst_29804 < inst_29803);
var inst_29807 = inst_29806;
var state_29941__$1 = state_29941;
if(cljs.core.truth_(inst_29807)){
var statearr_30005_30072 = state_29941__$1;
(statearr_30005_30072[(1)] = (7));

} else {
var statearr_30006_30073 = state_29941__$1;
(statearr_30006_30073[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (14))){
var inst_29814 = (state_29941[(22)]);
var inst_29823 = cljs.core.first.call(null,inst_29814);
var inst_29824 = figwheel.client.file_reloading.eval_body.call(null,inst_29823,opts);
var inst_29825 = cljs.core.next.call(null,inst_29814);
var inst_29801 = inst_29825;
var inst_29802 = null;
var inst_29803 = (0);
var inst_29804 = (0);
var state_29941__$1 = (function (){var statearr_30007 = state_29941;
(statearr_30007[(7)] = inst_29804);

(statearr_30007[(8)] = inst_29801);

(statearr_30007[(32)] = inst_29824);

(statearr_30007[(9)] = inst_29803);

(statearr_30007[(10)] = inst_29802);

return statearr_30007;
})();
var statearr_30008_30074 = state_29941__$1;
(statearr_30008_30074[(2)] = null);

(statearr_30008_30074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (45))){
var state_29941__$1 = state_29941;
var statearr_30009_30075 = state_29941__$1;
(statearr_30009_30075[(2)] = null);

(statearr_30009_30075[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (26))){
var inst_29858 = (state_29941[(23)]);
var inst_29860 = (state_29941[(26)]);
var inst_29854 = (state_29941[(19)]);
var inst_29862 = (state_29941[(24)]);
var inst_29857 = (state_29941[(25)]);
var inst_29877 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29879 = (function (){var all_files = inst_29854;
var res_SINGLEQUOTE_ = inst_29857;
var res = inst_29858;
var files_not_loaded = inst_29860;
var dependencies_that_loaded = inst_29862;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29858,inst_29860,inst_29854,inst_29862,inst_29857,inst_29877,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29878){
var map__30010 = p__29878;
var map__30010__$1 = (((((!((map__30010 == null))))?(((((map__30010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30010):map__30010);
var namespace = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29858,inst_29860,inst_29854,inst_29862,inst_29857,inst_29877,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29880 = cljs.core.map.call(null,inst_29879,inst_29858);
var inst_29881 = cljs.core.pr_str.call(null,inst_29880);
var inst_29882 = figwheel.client.utils.log.call(null,inst_29881);
var inst_29883 = (function (){var all_files = inst_29854;
var res_SINGLEQUOTE_ = inst_29857;
var res = inst_29858;
var files_not_loaded = inst_29860;
var dependencies_that_loaded = inst_29862;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29858,inst_29860,inst_29854,inst_29862,inst_29857,inst_29877,inst_29879,inst_29880,inst_29881,inst_29882,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29858,inst_29860,inst_29854,inst_29862,inst_29857,inst_29877,inst_29879,inst_29880,inst_29881,inst_29882,state_val_29942,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29884 = setTimeout(inst_29883,(10));
var state_29941__$1 = (function (){var statearr_30012 = state_29941;
(statearr_30012[(33)] = inst_29882);

(statearr_30012[(34)] = inst_29877);

return statearr_30012;
})();
var statearr_30013_30076 = state_29941__$1;
(statearr_30013_30076[(2)] = inst_29884);

(statearr_30013_30076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (16))){
var state_29941__$1 = state_29941;
var statearr_30014_30077 = state_29941__$1;
(statearr_30014_30077[(2)] = reload_dependents);

(statearr_30014_30077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (38))){
var inst_29894 = (state_29941[(16)]);
var inst_29912 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29894);
var state_29941__$1 = state_29941;
var statearr_30015_30078 = state_29941__$1;
(statearr_30015_30078[(2)] = inst_29912);

(statearr_30015_30078[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (30))){
var state_29941__$1 = state_29941;
var statearr_30016_30079 = state_29941__$1;
(statearr_30016_30079[(2)] = null);

(statearr_30016_30079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (10))){
var inst_29814 = (state_29941[(22)]);
var inst_29816 = cljs.core.chunked_seq_QMARK_.call(null,inst_29814);
var state_29941__$1 = state_29941;
if(inst_29816){
var statearr_30017_30080 = state_29941__$1;
(statearr_30017_30080[(1)] = (13));

} else {
var statearr_30018_30081 = state_29941__$1;
(statearr_30018_30081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (18))){
var inst_29848 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
if(cljs.core.truth_(inst_29848)){
var statearr_30019_30082 = state_29941__$1;
(statearr_30019_30082[(1)] = (19));

} else {
var statearr_30020_30083 = state_29941__$1;
(statearr_30020_30083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (42))){
var state_29941__$1 = state_29941;
var statearr_30021_30084 = state_29941__$1;
(statearr_30021_30084[(2)] = null);

(statearr_30021_30084[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (37))){
var inst_29907 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
var statearr_30022_30085 = state_29941__$1;
(statearr_30022_30085[(2)] = inst_29907);

(statearr_30022_30085[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (8))){
var inst_29801 = (state_29941[(8)]);
var inst_29814 = (state_29941[(22)]);
var inst_29814__$1 = cljs.core.seq.call(null,inst_29801);
var state_29941__$1 = (function (){var statearr_30023 = state_29941;
(statearr_30023[(22)] = inst_29814__$1);

return statearr_30023;
})();
if(inst_29814__$1){
var statearr_30024_30086 = state_29941__$1;
(statearr_30024_30086[(1)] = (10));

} else {
var statearr_30025_30087 = state_29941__$1;
(statearr_30025_30087[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25997__auto__,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto____0 = (function (){
var statearr_30026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30026[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto__);

(statearr_30026[(1)] = (1));

return statearr_30026;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto____1 = (function (state_29941){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_29941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e30027){if((e30027 instanceof Object)){
var ex__26001__auto__ = e30027;
var statearr_30028_30088 = state_29941;
(statearr_30028_30088[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30089 = state_29941;
state_29941 = G__30089;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto__ = function(state_29941){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto____1.call(this,state_29941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26094__auto__ = (function (){var statearr_30029 = f__26093__auto__.call(null);
(statearr_30029[(6)] = c__26092__auto__);

return statearr_30029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto__,map__29786,map__29786__$1,opts,before_jsload,on_jsload,reload_dependents,map__29787,map__29787__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26092__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30092,link){
var map__30093 = p__30092;
var map__30093__$1 = (((((!((map__30093 == null))))?(((((map__30093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30093):map__30093);
var file = cljs.core.get.call(null,map__30093__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__30093,map__30093__$1,file){
return (function (p1__30090_SHARP_,p2__30091_SHARP_){
if(cljs.core._EQ_.call(null,p1__30090_SHARP_,p2__30091_SHARP_)){
return p1__30090_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__30093,map__30093__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30096){
var map__30097 = p__30096;
var map__30097__$1 = (((((!((map__30097 == null))))?(((((map__30097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30097):map__30097);
var match_length = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30095_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30095_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30099_SHARP_,p2__30100_SHARP_){
return cljs.core.assoc.call(null,p1__30099_SHARP_,cljs.core.get.call(null,p2__30100_SHARP_,key),p2__30100_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30101 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30101);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30101);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30102,p__30103){
var map__30104 = p__30102;
var map__30104__$1 = (((((!((map__30104 == null))))?(((((map__30104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30104):map__30104);
var on_cssload = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30105 = p__30103;
var map__30105__$1 = (((((!((map__30105 == null))))?(((((map__30105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30105):map__30105);
var files_msg = map__30105__$1;
var files = cljs.core.get.call(null,map__30105__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1545934930727
