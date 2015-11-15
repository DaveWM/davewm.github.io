// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16344__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16344__auto__){
return or__16344__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16344__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26726_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26726_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__26731 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26732 = null;
var count__26733 = (0);
var i__26734 = (0);
while(true){
if((i__26734 < count__26733)){
var n = cljs.core._nth.call(null,chunk__26732,i__26734);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26735 = seq__26731;
var G__26736 = chunk__26732;
var G__26737 = count__26733;
var G__26738 = (i__26734 + (1));
seq__26731 = G__26735;
chunk__26732 = G__26736;
count__26733 = G__26737;
i__26734 = G__26738;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26731);
if(temp__4425__auto__){
var seq__26731__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26731__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__26731__$1);
var G__26739 = cljs.core.chunk_rest.call(null,seq__26731__$1);
var G__26740 = c__17147__auto__;
var G__26741 = cljs.core.count.call(null,c__17147__auto__);
var G__26742 = (0);
seq__26731 = G__26739;
chunk__26732 = G__26740;
count__26733 = G__26741;
i__26734 = G__26742;
continue;
} else {
var n = cljs.core.first.call(null,seq__26731__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26743 = cljs.core.next.call(null,seq__26731__$1);
var G__26744 = null;
var G__26745 = (0);
var G__26746 = (0);
seq__26731 = G__26743;
chunk__26732 = G__26744;
count__26733 = G__26745;
i__26734 = G__26746;
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

var seq__26785_26792 = cljs.core.seq.call(null,deps);
var chunk__26786_26793 = null;
var count__26787_26794 = (0);
var i__26788_26795 = (0);
while(true){
if((i__26788_26795 < count__26787_26794)){
var dep_26796 = cljs.core._nth.call(null,chunk__26786_26793,i__26788_26795);
topo_sort_helper_STAR_.call(null,dep_26796,(depth + (1)),state);

var G__26797 = seq__26785_26792;
var G__26798 = chunk__26786_26793;
var G__26799 = count__26787_26794;
var G__26800 = (i__26788_26795 + (1));
seq__26785_26792 = G__26797;
chunk__26786_26793 = G__26798;
count__26787_26794 = G__26799;
i__26788_26795 = G__26800;
continue;
} else {
var temp__4425__auto___26801 = cljs.core.seq.call(null,seq__26785_26792);
if(temp__4425__auto___26801){
var seq__26785_26802__$1 = temp__4425__auto___26801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26785_26802__$1)){
var c__17147__auto___26803 = cljs.core.chunk_first.call(null,seq__26785_26802__$1);
var G__26804 = cljs.core.chunk_rest.call(null,seq__26785_26802__$1);
var G__26805 = c__17147__auto___26803;
var G__26806 = cljs.core.count.call(null,c__17147__auto___26803);
var G__26807 = (0);
seq__26785_26792 = G__26804;
chunk__26786_26793 = G__26805;
count__26787_26794 = G__26806;
i__26788_26795 = G__26807;
continue;
} else {
var dep_26808 = cljs.core.first.call(null,seq__26785_26802__$1);
topo_sort_helper_STAR_.call(null,dep_26808,(depth + (1)),state);

var G__26809 = cljs.core.next.call(null,seq__26785_26802__$1);
var G__26810 = null;
var G__26811 = (0);
var G__26812 = (0);
seq__26785_26792 = G__26809;
chunk__26786_26793 = G__26810;
count__26787_26794 = G__26811;
i__26788_26795 = G__26812;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26789){
var vec__26791 = p__26789;
var x = cljs.core.nth.call(null,vec__26791,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26791,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26791,x,xs,get_deps__$1){
return (function (p1__26747_SHARP_){
return clojure.set.difference.call(null,p1__26747_SHARP_,x);
});})(vec__26791,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26825 = cljs.core.seq.call(null,provides);
var chunk__26826 = null;
var count__26827 = (0);
var i__26828 = (0);
while(true){
if((i__26828 < count__26827)){
var prov = cljs.core._nth.call(null,chunk__26826,i__26828);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26829_26837 = cljs.core.seq.call(null,requires);
var chunk__26830_26838 = null;
var count__26831_26839 = (0);
var i__26832_26840 = (0);
while(true){
if((i__26832_26840 < count__26831_26839)){
var req_26841 = cljs.core._nth.call(null,chunk__26830_26838,i__26832_26840);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26841,prov);

var G__26842 = seq__26829_26837;
var G__26843 = chunk__26830_26838;
var G__26844 = count__26831_26839;
var G__26845 = (i__26832_26840 + (1));
seq__26829_26837 = G__26842;
chunk__26830_26838 = G__26843;
count__26831_26839 = G__26844;
i__26832_26840 = G__26845;
continue;
} else {
var temp__4425__auto___26846 = cljs.core.seq.call(null,seq__26829_26837);
if(temp__4425__auto___26846){
var seq__26829_26847__$1 = temp__4425__auto___26846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26829_26847__$1)){
var c__17147__auto___26848 = cljs.core.chunk_first.call(null,seq__26829_26847__$1);
var G__26849 = cljs.core.chunk_rest.call(null,seq__26829_26847__$1);
var G__26850 = c__17147__auto___26848;
var G__26851 = cljs.core.count.call(null,c__17147__auto___26848);
var G__26852 = (0);
seq__26829_26837 = G__26849;
chunk__26830_26838 = G__26850;
count__26831_26839 = G__26851;
i__26832_26840 = G__26852;
continue;
} else {
var req_26853 = cljs.core.first.call(null,seq__26829_26847__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26853,prov);

var G__26854 = cljs.core.next.call(null,seq__26829_26847__$1);
var G__26855 = null;
var G__26856 = (0);
var G__26857 = (0);
seq__26829_26837 = G__26854;
chunk__26830_26838 = G__26855;
count__26831_26839 = G__26856;
i__26832_26840 = G__26857;
continue;
}
} else {
}
}
break;
}

var G__26858 = seq__26825;
var G__26859 = chunk__26826;
var G__26860 = count__26827;
var G__26861 = (i__26828 + (1));
seq__26825 = G__26858;
chunk__26826 = G__26859;
count__26827 = G__26860;
i__26828 = G__26861;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26825);
if(temp__4425__auto__){
var seq__26825__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26825__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__26825__$1);
var G__26862 = cljs.core.chunk_rest.call(null,seq__26825__$1);
var G__26863 = c__17147__auto__;
var G__26864 = cljs.core.count.call(null,c__17147__auto__);
var G__26865 = (0);
seq__26825 = G__26862;
chunk__26826 = G__26863;
count__26827 = G__26864;
i__26828 = G__26865;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26825__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26833_26866 = cljs.core.seq.call(null,requires);
var chunk__26834_26867 = null;
var count__26835_26868 = (0);
var i__26836_26869 = (0);
while(true){
if((i__26836_26869 < count__26835_26868)){
var req_26870 = cljs.core._nth.call(null,chunk__26834_26867,i__26836_26869);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26870,prov);

var G__26871 = seq__26833_26866;
var G__26872 = chunk__26834_26867;
var G__26873 = count__26835_26868;
var G__26874 = (i__26836_26869 + (1));
seq__26833_26866 = G__26871;
chunk__26834_26867 = G__26872;
count__26835_26868 = G__26873;
i__26836_26869 = G__26874;
continue;
} else {
var temp__4425__auto___26875__$1 = cljs.core.seq.call(null,seq__26833_26866);
if(temp__4425__auto___26875__$1){
var seq__26833_26876__$1 = temp__4425__auto___26875__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26833_26876__$1)){
var c__17147__auto___26877 = cljs.core.chunk_first.call(null,seq__26833_26876__$1);
var G__26878 = cljs.core.chunk_rest.call(null,seq__26833_26876__$1);
var G__26879 = c__17147__auto___26877;
var G__26880 = cljs.core.count.call(null,c__17147__auto___26877);
var G__26881 = (0);
seq__26833_26866 = G__26878;
chunk__26834_26867 = G__26879;
count__26835_26868 = G__26880;
i__26836_26869 = G__26881;
continue;
} else {
var req_26882 = cljs.core.first.call(null,seq__26833_26876__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26882,prov);

var G__26883 = cljs.core.next.call(null,seq__26833_26876__$1);
var G__26884 = null;
var G__26885 = (0);
var G__26886 = (0);
seq__26833_26866 = G__26883;
chunk__26834_26867 = G__26884;
count__26835_26868 = G__26885;
i__26836_26869 = G__26886;
continue;
}
} else {
}
}
break;
}

var G__26887 = cljs.core.next.call(null,seq__26825__$1);
var G__26888 = null;
var G__26889 = (0);
var G__26890 = (0);
seq__26825 = G__26887;
chunk__26826 = G__26888;
count__26827 = G__26889;
i__26828 = G__26890;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26895_26899 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26896_26900 = null;
var count__26897_26901 = (0);
var i__26898_26902 = (0);
while(true){
if((i__26898_26902 < count__26897_26901)){
var ns_26903 = cljs.core._nth.call(null,chunk__26896_26900,i__26898_26902);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26903);

var G__26904 = seq__26895_26899;
var G__26905 = chunk__26896_26900;
var G__26906 = count__26897_26901;
var G__26907 = (i__26898_26902 + (1));
seq__26895_26899 = G__26904;
chunk__26896_26900 = G__26905;
count__26897_26901 = G__26906;
i__26898_26902 = G__26907;
continue;
} else {
var temp__4425__auto___26908 = cljs.core.seq.call(null,seq__26895_26899);
if(temp__4425__auto___26908){
var seq__26895_26909__$1 = temp__4425__auto___26908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26895_26909__$1)){
var c__17147__auto___26910 = cljs.core.chunk_first.call(null,seq__26895_26909__$1);
var G__26911 = cljs.core.chunk_rest.call(null,seq__26895_26909__$1);
var G__26912 = c__17147__auto___26910;
var G__26913 = cljs.core.count.call(null,c__17147__auto___26910);
var G__26914 = (0);
seq__26895_26899 = G__26911;
chunk__26896_26900 = G__26912;
count__26897_26901 = G__26913;
i__26898_26902 = G__26914;
continue;
} else {
var ns_26915 = cljs.core.first.call(null,seq__26895_26909__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26915);

var G__26916 = cljs.core.next.call(null,seq__26895_26909__$1);
var G__26917 = null;
var G__26918 = (0);
var G__26919 = (0);
seq__26895_26899 = G__26916;
chunk__26896_26900 = G__26917;
count__26897_26901 = G__26918;
i__26898_26902 = G__26919;
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
goog.require_figwheel_backup_ = (function (){var or__16344__auto__ = goog.require__;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
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
var G__26920__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26921__i = 0, G__26921__a = new Array(arguments.length -  0);
while (G__26921__i < G__26921__a.length) {G__26921__a[G__26921__i] = arguments[G__26921__i + 0]; ++G__26921__i;}
  args = new cljs.core.IndexedSeq(G__26921__a,0);
} 
return G__26920__delegate.call(this,args);};
G__26920.cljs$lang$maxFixedArity = 0;
G__26920.cljs$lang$applyTo = (function (arglist__26922){
var args = cljs.core.seq(arglist__26922);
return G__26920__delegate(args);
});
G__26920.cljs$core$IFn$_invoke$arity$variadic = G__26920__delegate;
return G__26920;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26924 = cljs.core._EQ_;
var expr__26925 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26924.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26925))){
var path_parts = ((function (pred__26924,expr__26925){
return (function (p1__26923_SHARP_){
return clojure.string.split.call(null,p1__26923_SHARP_,/[\/\\]/);
});})(pred__26924,expr__26925))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26924,expr__26925){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e26927){if((e26927 instanceof Error)){
var e = e26927;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26927;

}
}})());
});
;})(path_parts,sep,root,pred__26924,expr__26925))
} else {
if(cljs.core.truth_(pred__26924.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26925))){
return ((function (pred__26924,expr__26925){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26924,expr__26925){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26924,expr__26925))
);

return deferred.addErrback(((function (deferred,pred__26924,expr__26925){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26924,expr__26925))
);
});
;})(pred__26924,expr__26925))
} else {
return ((function (pred__26924,expr__26925){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26924,expr__26925))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26928,callback){
var map__26931 = p__26928;
var map__26931__$1 = ((((!((map__26931 == null)))?((((map__26931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26931):map__26931);
var file_msg = map__26931__$1;
var request_url = cljs.core.get.call(null,map__26931__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26931,map__26931__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26931,map__26931__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
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
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto__){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto__){
return (function (state_26955){
var state_val_26956 = (state_26955[(1)]);
if((state_val_26956 === (7))){
var inst_26951 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
var statearr_26957_26977 = state_26955__$1;
(statearr_26957_26977[(2)] = inst_26951);

(statearr_26957_26977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (1))){
var state_26955__$1 = state_26955;
var statearr_26958_26978 = state_26955__$1;
(statearr_26958_26978[(2)] = null);

(statearr_26958_26978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (4))){
var inst_26935 = (state_26955[(7)]);
var inst_26935__$1 = (state_26955[(2)]);
var state_26955__$1 = (function (){var statearr_26959 = state_26955;
(statearr_26959[(7)] = inst_26935__$1);

return statearr_26959;
})();
if(cljs.core.truth_(inst_26935__$1)){
var statearr_26960_26979 = state_26955__$1;
(statearr_26960_26979[(1)] = (5));

} else {
var statearr_26961_26980 = state_26955__$1;
(statearr_26961_26980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (6))){
var state_26955__$1 = state_26955;
var statearr_26962_26981 = state_26955__$1;
(statearr_26962_26981[(2)] = null);

(statearr_26962_26981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (3))){
var inst_26953 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26955__$1,inst_26953);
} else {
if((state_val_26956 === (2))){
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26955__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26956 === (11))){
var inst_26947 = (state_26955[(2)]);
var state_26955__$1 = (function (){var statearr_26963 = state_26955;
(statearr_26963[(8)] = inst_26947);

return statearr_26963;
})();
var statearr_26964_26982 = state_26955__$1;
(statearr_26964_26982[(2)] = null);

(statearr_26964_26982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (9))){
var inst_26939 = (state_26955[(9)]);
var inst_26941 = (state_26955[(10)]);
var inst_26943 = inst_26941.call(null,inst_26939);
var state_26955__$1 = state_26955;
var statearr_26965_26983 = state_26955__$1;
(statearr_26965_26983[(2)] = inst_26943);

(statearr_26965_26983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (5))){
var inst_26935 = (state_26955[(7)]);
var inst_26937 = figwheel.client.file_reloading.blocking_load.call(null,inst_26935);
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26955__$1,(8),inst_26937);
} else {
if((state_val_26956 === (10))){
var inst_26939 = (state_26955[(9)]);
var inst_26945 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26939);
var state_26955__$1 = state_26955;
var statearr_26966_26984 = state_26955__$1;
(statearr_26966_26984[(2)] = inst_26945);

(statearr_26966_26984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (8))){
var inst_26941 = (state_26955[(10)]);
var inst_26935 = (state_26955[(7)]);
var inst_26939 = (state_26955[(2)]);
var inst_26940 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26941__$1 = cljs.core.get.call(null,inst_26940,inst_26935);
var state_26955__$1 = (function (){var statearr_26967 = state_26955;
(statearr_26967[(9)] = inst_26939);

(statearr_26967[(10)] = inst_26941__$1);

return statearr_26967;
})();
if(cljs.core.truth_(inst_26941__$1)){
var statearr_26968_26985 = state_26955__$1;
(statearr_26968_26985[(1)] = (9));

} else {
var statearr_26969_26986 = state_26955__$1;
(statearr_26969_26986[(1)] = (10));

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
});})(c__19424__auto__))
;
return ((function (switch__19359__auto__,c__19424__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19360__auto__ = null;
var figwheel$client$file_reloading$state_machine__19360__auto____0 = (function (){
var statearr_26973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26973[(0)] = figwheel$client$file_reloading$state_machine__19360__auto__);

(statearr_26973[(1)] = (1));

return statearr_26973;
});
var figwheel$client$file_reloading$state_machine__19360__auto____1 = (function (state_26955){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_26955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e26974){if((e26974 instanceof Object)){
var ex__19363__auto__ = e26974;
var statearr_26975_26987 = state_26955;
(statearr_26975_26987[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26988 = state_26955;
state_26955 = G__26988;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19360__auto__ = function(state_26955){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19360__auto____1.call(this,state_26955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19360__auto____0;
figwheel$client$file_reloading$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19360__auto____1;
return figwheel$client$file_reloading$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__))
})();
var state__19426__auto__ = (function (){var statearr_26976 = f__19425__auto__.call(null);
(statearr_26976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_26976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto__))
);

return c__19424__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26989,callback){
var map__26992 = p__26989;
var map__26992__$1 = ((((!((map__26992 == null)))?((((map__26992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26992):map__26992);
var file_msg = map__26992__$1;
var namespace = cljs.core.get.call(null,map__26992__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26992,map__26992__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26992,map__26992__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26994){
var map__26997 = p__26994;
var map__26997__$1 = ((((!((map__26997 == null)))?((((map__26997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26997):map__26997);
var file_msg = map__26997__$1;
var namespace = cljs.core.get.call(null,map__26997__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16332__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16332__auto__){
var or__16344__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
var or__16344__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16344__auto____$1)){
return or__16344__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16332__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26999,callback){
var map__27002 = p__26999;
var map__27002__$1 = ((((!((map__27002 == null)))?((((map__27002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27002):map__27002);
var file_msg = map__27002__$1;
var request_url = cljs.core.get.call(null,map__27002__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27002__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__19424__auto___27090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___27090,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___27090,out){
return (function (state_27072){
var state_val_27073 = (state_27072[(1)]);
if((state_val_27073 === (1))){
var inst_27050 = cljs.core.nth.call(null,files,(0),null);
var inst_27051 = cljs.core.nthnext.call(null,files,(1));
var inst_27052 = files;
var state_27072__$1 = (function (){var statearr_27074 = state_27072;
(statearr_27074[(7)] = inst_27052);

(statearr_27074[(8)] = inst_27050);

(statearr_27074[(9)] = inst_27051);

return statearr_27074;
})();
var statearr_27075_27091 = state_27072__$1;
(statearr_27075_27091[(2)] = null);

(statearr_27075_27091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (2))){
var inst_27052 = (state_27072[(7)]);
var inst_27055 = (state_27072[(10)]);
var inst_27055__$1 = cljs.core.nth.call(null,inst_27052,(0),null);
var inst_27056 = cljs.core.nthnext.call(null,inst_27052,(1));
var inst_27057 = (inst_27055__$1 == null);
var inst_27058 = cljs.core.not.call(null,inst_27057);
var state_27072__$1 = (function (){var statearr_27076 = state_27072;
(statearr_27076[(10)] = inst_27055__$1);

(statearr_27076[(11)] = inst_27056);

return statearr_27076;
})();
if(inst_27058){
var statearr_27077_27092 = state_27072__$1;
(statearr_27077_27092[(1)] = (4));

} else {
var statearr_27078_27093 = state_27072__$1;
(statearr_27078_27093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (3))){
var inst_27070 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27072__$1,inst_27070);
} else {
if((state_val_27073 === (4))){
var inst_27055 = (state_27072[(10)]);
var inst_27060 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27055);
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27072__$1,(7),inst_27060);
} else {
if((state_val_27073 === (5))){
var inst_27066 = cljs.core.async.close_BANG_.call(null,out);
var state_27072__$1 = state_27072;
var statearr_27079_27094 = state_27072__$1;
(statearr_27079_27094[(2)] = inst_27066);

(statearr_27079_27094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (6))){
var inst_27068 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
var statearr_27080_27095 = state_27072__$1;
(statearr_27080_27095[(2)] = inst_27068);

(statearr_27080_27095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (7))){
var inst_27056 = (state_27072[(11)]);
var inst_27062 = (state_27072[(2)]);
var inst_27063 = cljs.core.async.put_BANG_.call(null,out,inst_27062);
var inst_27052 = inst_27056;
var state_27072__$1 = (function (){var statearr_27081 = state_27072;
(statearr_27081[(7)] = inst_27052);

(statearr_27081[(12)] = inst_27063);

return statearr_27081;
})();
var statearr_27082_27096 = state_27072__$1;
(statearr_27082_27096[(2)] = null);

(statearr_27082_27096[(1)] = (2));


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
});})(c__19424__auto___27090,out))
;
return ((function (switch__19359__auto__,c__19424__auto___27090,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto____0 = (function (){
var statearr_27086 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27086[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto__);

(statearr_27086[(1)] = (1));

return statearr_27086;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto____1 = (function (state_27072){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_27072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e27087){if((e27087 instanceof Object)){
var ex__19363__auto__ = e27087;
var statearr_27088_27097 = state_27072;
(statearr_27088_27097[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27098 = state_27072;
state_27072 = G__27098;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto__ = function(state_27072){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto____1.call(this,state_27072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___27090,out))
})();
var state__19426__auto__ = (function (){var statearr_27089 = f__19425__auto__.call(null);
(statearr_27089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___27090);

return statearr_27089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___27090,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27099,opts){
var map__27103 = p__27099;
var map__27103__$1 = ((((!((map__27103 == null)))?((((map__27103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27103):map__27103);
var eval_body__$1 = cljs.core.get.call(null,map__27103__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27103__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16332__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16332__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16332__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27105){var e = e27105;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27106_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27106_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27111){
var vec__27112 = p__27111;
var k = cljs.core.nth.call(null,vec__27112,(0),null);
var v = cljs.core.nth.call(null,vec__27112,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27113){
var vec__27114 = p__27113;
var k = cljs.core.nth.call(null,vec__27114,(0),null);
var v = cljs.core.nth.call(null,vec__27114,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27118,p__27119){
var map__27366 = p__27118;
var map__27366__$1 = ((((!((map__27366 == null)))?((((map__27366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27366):map__27366);
var opts = map__27366__$1;
var before_jsload = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27367 = p__27119;
var map__27367__$1 = ((((!((map__27367 == null)))?((((map__27367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27367):map__27367);
var msg = map__27367__$1;
var files = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27520){
var state_val_27521 = (state_27520[(1)]);
if((state_val_27521 === (7))){
var inst_27383 = (state_27520[(7)]);
var inst_27381 = (state_27520[(8)]);
var inst_27384 = (state_27520[(9)]);
var inst_27382 = (state_27520[(10)]);
var inst_27389 = cljs.core._nth.call(null,inst_27382,inst_27384);
var inst_27390 = figwheel.client.file_reloading.eval_body.call(null,inst_27389,opts);
var inst_27391 = (inst_27384 + (1));
var tmp27522 = inst_27383;
var tmp27523 = inst_27381;
var tmp27524 = inst_27382;
var inst_27381__$1 = tmp27523;
var inst_27382__$1 = tmp27524;
var inst_27383__$1 = tmp27522;
var inst_27384__$1 = inst_27391;
var state_27520__$1 = (function (){var statearr_27525 = state_27520;
(statearr_27525[(7)] = inst_27383__$1);

(statearr_27525[(8)] = inst_27381__$1);

(statearr_27525[(9)] = inst_27384__$1);

(statearr_27525[(11)] = inst_27390);

(statearr_27525[(10)] = inst_27382__$1);

return statearr_27525;
})();
var statearr_27526_27612 = state_27520__$1;
(statearr_27526_27612[(2)] = null);

(statearr_27526_27612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (20))){
var inst_27424 = (state_27520[(12)]);
var inst_27432 = figwheel.client.file_reloading.sort_files.call(null,inst_27424);
var state_27520__$1 = state_27520;
var statearr_27527_27613 = state_27520__$1;
(statearr_27527_27613[(2)] = inst_27432);

(statearr_27527_27613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (27))){
var state_27520__$1 = state_27520;
var statearr_27528_27614 = state_27520__$1;
(statearr_27528_27614[(2)] = null);

(statearr_27528_27614[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (1))){
var inst_27373 = (state_27520[(13)]);
var inst_27370 = before_jsload.call(null,files);
var inst_27371 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27372 = (function (){return ((function (inst_27373,inst_27370,inst_27371,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27115_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27115_SHARP_);
});
;})(inst_27373,inst_27370,inst_27371,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27373__$1 = cljs.core.filter.call(null,inst_27372,files);
var inst_27374 = cljs.core.not_empty.call(null,inst_27373__$1);
var state_27520__$1 = (function (){var statearr_27529 = state_27520;
(statearr_27529[(13)] = inst_27373__$1);

(statearr_27529[(14)] = inst_27371);

(statearr_27529[(15)] = inst_27370);

return statearr_27529;
})();
if(cljs.core.truth_(inst_27374)){
var statearr_27530_27615 = state_27520__$1;
(statearr_27530_27615[(1)] = (2));

} else {
var statearr_27531_27616 = state_27520__$1;
(statearr_27531_27616[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (24))){
var state_27520__$1 = state_27520;
var statearr_27532_27617 = state_27520__$1;
(statearr_27532_27617[(2)] = null);

(statearr_27532_27617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (39))){
var inst_27474 = (state_27520[(16)]);
var state_27520__$1 = state_27520;
var statearr_27533_27618 = state_27520__$1;
(statearr_27533_27618[(2)] = inst_27474);

(statearr_27533_27618[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (46))){
var inst_27515 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
var statearr_27534_27619 = state_27520__$1;
(statearr_27534_27619[(2)] = inst_27515);

(statearr_27534_27619[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (4))){
var inst_27418 = (state_27520[(2)]);
var inst_27419 = cljs.core.List.EMPTY;
var inst_27420 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27419);
var inst_27421 = (function (){return ((function (inst_27418,inst_27419,inst_27420,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27116_SHARP_){
var and__16332__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27116_SHARP_);
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27116_SHARP_));
} else {
return and__16332__auto__;
}
});
;})(inst_27418,inst_27419,inst_27420,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27422 = cljs.core.filter.call(null,inst_27421,files);
var inst_27423 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27424 = cljs.core.concat.call(null,inst_27422,inst_27423);
var state_27520__$1 = (function (){var statearr_27535 = state_27520;
(statearr_27535[(17)] = inst_27420);

(statearr_27535[(18)] = inst_27418);

(statearr_27535[(12)] = inst_27424);

return statearr_27535;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27536_27620 = state_27520__$1;
(statearr_27536_27620[(1)] = (16));

} else {
var statearr_27537_27621 = state_27520__$1;
(statearr_27537_27621[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (15))){
var inst_27408 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
var statearr_27538_27622 = state_27520__$1;
(statearr_27538_27622[(2)] = inst_27408);

(statearr_27538_27622[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (21))){
var inst_27434 = (state_27520[(19)]);
var inst_27434__$1 = (state_27520[(2)]);
var inst_27435 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27434__$1);
var state_27520__$1 = (function (){var statearr_27539 = state_27520;
(statearr_27539[(19)] = inst_27434__$1);

return statearr_27539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27520__$1,(22),inst_27435);
} else {
if((state_val_27521 === (31))){
var inst_27518 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27520__$1,inst_27518);
} else {
if((state_val_27521 === (32))){
var inst_27474 = (state_27520[(16)]);
var inst_27479 = inst_27474.cljs$lang$protocol_mask$partition0$;
var inst_27480 = (inst_27479 & (64));
var inst_27481 = inst_27474.cljs$core$ISeq$;
var inst_27482 = (inst_27480) || (inst_27481);
var state_27520__$1 = state_27520;
if(cljs.core.truth_(inst_27482)){
var statearr_27540_27623 = state_27520__$1;
(statearr_27540_27623[(1)] = (35));

} else {
var statearr_27541_27624 = state_27520__$1;
(statearr_27541_27624[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (40))){
var inst_27495 = (state_27520[(20)]);
var inst_27494 = (state_27520[(2)]);
var inst_27495__$1 = cljs.core.get.call(null,inst_27494,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27496 = cljs.core.get.call(null,inst_27494,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27497 = cljs.core.not_empty.call(null,inst_27495__$1);
var state_27520__$1 = (function (){var statearr_27542 = state_27520;
(statearr_27542[(21)] = inst_27496);

(statearr_27542[(20)] = inst_27495__$1);

return statearr_27542;
})();
if(cljs.core.truth_(inst_27497)){
var statearr_27543_27625 = state_27520__$1;
(statearr_27543_27625[(1)] = (41));

} else {
var statearr_27544_27626 = state_27520__$1;
(statearr_27544_27626[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (33))){
var state_27520__$1 = state_27520;
var statearr_27545_27627 = state_27520__$1;
(statearr_27545_27627[(2)] = false);

(statearr_27545_27627[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (13))){
var inst_27394 = (state_27520[(22)]);
var inst_27398 = cljs.core.chunk_first.call(null,inst_27394);
var inst_27399 = cljs.core.chunk_rest.call(null,inst_27394);
var inst_27400 = cljs.core.count.call(null,inst_27398);
var inst_27381 = inst_27399;
var inst_27382 = inst_27398;
var inst_27383 = inst_27400;
var inst_27384 = (0);
var state_27520__$1 = (function (){var statearr_27546 = state_27520;
(statearr_27546[(7)] = inst_27383);

(statearr_27546[(8)] = inst_27381);

(statearr_27546[(9)] = inst_27384);

(statearr_27546[(10)] = inst_27382);

return statearr_27546;
})();
var statearr_27547_27628 = state_27520__$1;
(statearr_27547_27628[(2)] = null);

(statearr_27547_27628[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (22))){
var inst_27437 = (state_27520[(23)]);
var inst_27438 = (state_27520[(24)]);
var inst_27434 = (state_27520[(19)]);
var inst_27442 = (state_27520[(25)]);
var inst_27437__$1 = (state_27520[(2)]);
var inst_27438__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27437__$1);
var inst_27439 = (function (){var all_files = inst_27434;
var res_SINGLEQUOTE_ = inst_27437__$1;
var res = inst_27438__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27437,inst_27438,inst_27434,inst_27442,inst_27437__$1,inst_27438__$1,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27117_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27117_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27437,inst_27438,inst_27434,inst_27442,inst_27437__$1,inst_27438__$1,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27440 = cljs.core.filter.call(null,inst_27439,inst_27437__$1);
var inst_27441 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27442__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27441);
var inst_27443 = cljs.core.not_empty.call(null,inst_27442__$1);
var state_27520__$1 = (function (){var statearr_27548 = state_27520;
(statearr_27548[(26)] = inst_27440);

(statearr_27548[(23)] = inst_27437__$1);

(statearr_27548[(24)] = inst_27438__$1);

(statearr_27548[(25)] = inst_27442__$1);

return statearr_27548;
})();
if(cljs.core.truth_(inst_27443)){
var statearr_27549_27629 = state_27520__$1;
(statearr_27549_27629[(1)] = (23));

} else {
var statearr_27550_27630 = state_27520__$1;
(statearr_27550_27630[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (36))){
var state_27520__$1 = state_27520;
var statearr_27551_27631 = state_27520__$1;
(statearr_27551_27631[(2)] = false);

(statearr_27551_27631[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (41))){
var inst_27495 = (state_27520[(20)]);
var inst_27499 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27500 = cljs.core.map.call(null,inst_27499,inst_27495);
var inst_27501 = cljs.core.pr_str.call(null,inst_27500);
var inst_27502 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27501)].join('');
var inst_27503 = figwheel.client.utils.log.call(null,inst_27502);
var state_27520__$1 = state_27520;
var statearr_27552_27632 = state_27520__$1;
(statearr_27552_27632[(2)] = inst_27503);

(statearr_27552_27632[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (43))){
var inst_27496 = (state_27520[(21)]);
var inst_27506 = (state_27520[(2)]);
var inst_27507 = cljs.core.not_empty.call(null,inst_27496);
var state_27520__$1 = (function (){var statearr_27553 = state_27520;
(statearr_27553[(27)] = inst_27506);

return statearr_27553;
})();
if(cljs.core.truth_(inst_27507)){
var statearr_27554_27633 = state_27520__$1;
(statearr_27554_27633[(1)] = (44));

} else {
var statearr_27555_27634 = state_27520__$1;
(statearr_27555_27634[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (29))){
var inst_27474 = (state_27520[(16)]);
var inst_27440 = (state_27520[(26)]);
var inst_27437 = (state_27520[(23)]);
var inst_27438 = (state_27520[(24)]);
var inst_27434 = (state_27520[(19)]);
var inst_27442 = (state_27520[(25)]);
var inst_27470 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27473 = (function (){var all_files = inst_27434;
var res_SINGLEQUOTE_ = inst_27437;
var res = inst_27438;
var files_not_loaded = inst_27440;
var dependencies_that_loaded = inst_27442;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27474,inst_27440,inst_27437,inst_27438,inst_27434,inst_27442,inst_27470,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27472){
var map__27556 = p__27472;
var map__27556__$1 = ((((!((map__27556 == null)))?((((map__27556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27556):map__27556);
var namespace = cljs.core.get.call(null,map__27556__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27474,inst_27440,inst_27437,inst_27438,inst_27434,inst_27442,inst_27470,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27474__$1 = cljs.core.group_by.call(null,inst_27473,inst_27440);
var inst_27476 = (inst_27474__$1 == null);
var inst_27477 = cljs.core.not.call(null,inst_27476);
var state_27520__$1 = (function (){var statearr_27558 = state_27520;
(statearr_27558[(16)] = inst_27474__$1);

(statearr_27558[(28)] = inst_27470);

return statearr_27558;
})();
if(inst_27477){
var statearr_27559_27635 = state_27520__$1;
(statearr_27559_27635[(1)] = (32));

} else {
var statearr_27560_27636 = state_27520__$1;
(statearr_27560_27636[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (44))){
var inst_27496 = (state_27520[(21)]);
var inst_27509 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27496);
var inst_27510 = cljs.core.pr_str.call(null,inst_27509);
var inst_27511 = [cljs.core.str("not required: "),cljs.core.str(inst_27510)].join('');
var inst_27512 = figwheel.client.utils.log.call(null,inst_27511);
var state_27520__$1 = state_27520;
var statearr_27561_27637 = state_27520__$1;
(statearr_27561_27637[(2)] = inst_27512);

(statearr_27561_27637[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (6))){
var inst_27415 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
var statearr_27562_27638 = state_27520__$1;
(statearr_27562_27638[(2)] = inst_27415);

(statearr_27562_27638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (28))){
var inst_27440 = (state_27520[(26)]);
var inst_27467 = (state_27520[(2)]);
var inst_27468 = cljs.core.not_empty.call(null,inst_27440);
var state_27520__$1 = (function (){var statearr_27563 = state_27520;
(statearr_27563[(29)] = inst_27467);

return statearr_27563;
})();
if(cljs.core.truth_(inst_27468)){
var statearr_27564_27639 = state_27520__$1;
(statearr_27564_27639[(1)] = (29));

} else {
var statearr_27565_27640 = state_27520__$1;
(statearr_27565_27640[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (25))){
var inst_27438 = (state_27520[(24)]);
var inst_27454 = (state_27520[(2)]);
var inst_27455 = cljs.core.not_empty.call(null,inst_27438);
var state_27520__$1 = (function (){var statearr_27566 = state_27520;
(statearr_27566[(30)] = inst_27454);

return statearr_27566;
})();
if(cljs.core.truth_(inst_27455)){
var statearr_27567_27641 = state_27520__$1;
(statearr_27567_27641[(1)] = (26));

} else {
var statearr_27568_27642 = state_27520__$1;
(statearr_27568_27642[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (34))){
var inst_27489 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
if(cljs.core.truth_(inst_27489)){
var statearr_27569_27643 = state_27520__$1;
(statearr_27569_27643[(1)] = (38));

} else {
var statearr_27570_27644 = state_27520__$1;
(statearr_27570_27644[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (17))){
var state_27520__$1 = state_27520;
var statearr_27571_27645 = state_27520__$1;
(statearr_27571_27645[(2)] = recompile_dependents);

(statearr_27571_27645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (3))){
var state_27520__$1 = state_27520;
var statearr_27572_27646 = state_27520__$1;
(statearr_27572_27646[(2)] = null);

(statearr_27572_27646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (12))){
var inst_27411 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
var statearr_27573_27647 = state_27520__$1;
(statearr_27573_27647[(2)] = inst_27411);

(statearr_27573_27647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (2))){
var inst_27373 = (state_27520[(13)]);
var inst_27380 = cljs.core.seq.call(null,inst_27373);
var inst_27381 = inst_27380;
var inst_27382 = null;
var inst_27383 = (0);
var inst_27384 = (0);
var state_27520__$1 = (function (){var statearr_27574 = state_27520;
(statearr_27574[(7)] = inst_27383);

(statearr_27574[(8)] = inst_27381);

(statearr_27574[(9)] = inst_27384);

(statearr_27574[(10)] = inst_27382);

return statearr_27574;
})();
var statearr_27575_27648 = state_27520__$1;
(statearr_27575_27648[(2)] = null);

(statearr_27575_27648[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (23))){
var inst_27440 = (state_27520[(26)]);
var inst_27437 = (state_27520[(23)]);
var inst_27438 = (state_27520[(24)]);
var inst_27434 = (state_27520[(19)]);
var inst_27442 = (state_27520[(25)]);
var inst_27445 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27447 = (function (){var all_files = inst_27434;
var res_SINGLEQUOTE_ = inst_27437;
var res = inst_27438;
var files_not_loaded = inst_27440;
var dependencies_that_loaded = inst_27442;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27440,inst_27437,inst_27438,inst_27434,inst_27442,inst_27445,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27446){
var map__27576 = p__27446;
var map__27576__$1 = ((((!((map__27576 == null)))?((((map__27576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27576):map__27576);
var request_url = cljs.core.get.call(null,map__27576__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27440,inst_27437,inst_27438,inst_27434,inst_27442,inst_27445,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27448 = cljs.core.reverse.call(null,inst_27442);
var inst_27449 = cljs.core.map.call(null,inst_27447,inst_27448);
var inst_27450 = cljs.core.pr_str.call(null,inst_27449);
var inst_27451 = figwheel.client.utils.log.call(null,inst_27450);
var state_27520__$1 = (function (){var statearr_27578 = state_27520;
(statearr_27578[(31)] = inst_27445);

return statearr_27578;
})();
var statearr_27579_27649 = state_27520__$1;
(statearr_27579_27649[(2)] = inst_27451);

(statearr_27579_27649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (35))){
var state_27520__$1 = state_27520;
var statearr_27580_27650 = state_27520__$1;
(statearr_27580_27650[(2)] = true);

(statearr_27580_27650[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (19))){
var inst_27424 = (state_27520[(12)]);
var inst_27430 = figwheel.client.file_reloading.expand_files.call(null,inst_27424);
var state_27520__$1 = state_27520;
var statearr_27581_27651 = state_27520__$1;
(statearr_27581_27651[(2)] = inst_27430);

(statearr_27581_27651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (11))){
var state_27520__$1 = state_27520;
var statearr_27582_27652 = state_27520__$1;
(statearr_27582_27652[(2)] = null);

(statearr_27582_27652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (9))){
var inst_27413 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
var statearr_27583_27653 = state_27520__$1;
(statearr_27583_27653[(2)] = inst_27413);

(statearr_27583_27653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (5))){
var inst_27383 = (state_27520[(7)]);
var inst_27384 = (state_27520[(9)]);
var inst_27386 = (inst_27384 < inst_27383);
var inst_27387 = inst_27386;
var state_27520__$1 = state_27520;
if(cljs.core.truth_(inst_27387)){
var statearr_27584_27654 = state_27520__$1;
(statearr_27584_27654[(1)] = (7));

} else {
var statearr_27585_27655 = state_27520__$1;
(statearr_27585_27655[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (14))){
var inst_27394 = (state_27520[(22)]);
var inst_27403 = cljs.core.first.call(null,inst_27394);
var inst_27404 = figwheel.client.file_reloading.eval_body.call(null,inst_27403,opts);
var inst_27405 = cljs.core.next.call(null,inst_27394);
var inst_27381 = inst_27405;
var inst_27382 = null;
var inst_27383 = (0);
var inst_27384 = (0);
var state_27520__$1 = (function (){var statearr_27586 = state_27520;
(statearr_27586[(7)] = inst_27383);

(statearr_27586[(8)] = inst_27381);

(statearr_27586[(9)] = inst_27384);

(statearr_27586[(32)] = inst_27404);

(statearr_27586[(10)] = inst_27382);

return statearr_27586;
})();
var statearr_27587_27656 = state_27520__$1;
(statearr_27587_27656[(2)] = null);

(statearr_27587_27656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (45))){
var state_27520__$1 = state_27520;
var statearr_27588_27657 = state_27520__$1;
(statearr_27588_27657[(2)] = null);

(statearr_27588_27657[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (26))){
var inst_27440 = (state_27520[(26)]);
var inst_27437 = (state_27520[(23)]);
var inst_27438 = (state_27520[(24)]);
var inst_27434 = (state_27520[(19)]);
var inst_27442 = (state_27520[(25)]);
var inst_27457 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27459 = (function (){var all_files = inst_27434;
var res_SINGLEQUOTE_ = inst_27437;
var res = inst_27438;
var files_not_loaded = inst_27440;
var dependencies_that_loaded = inst_27442;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27440,inst_27437,inst_27438,inst_27434,inst_27442,inst_27457,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27458){
var map__27589 = p__27458;
var map__27589__$1 = ((((!((map__27589 == null)))?((((map__27589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27589):map__27589);
var namespace = cljs.core.get.call(null,map__27589__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27589__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27440,inst_27437,inst_27438,inst_27434,inst_27442,inst_27457,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27460 = cljs.core.map.call(null,inst_27459,inst_27438);
var inst_27461 = cljs.core.pr_str.call(null,inst_27460);
var inst_27462 = figwheel.client.utils.log.call(null,inst_27461);
var inst_27463 = (function (){var all_files = inst_27434;
var res_SINGLEQUOTE_ = inst_27437;
var res = inst_27438;
var files_not_loaded = inst_27440;
var dependencies_that_loaded = inst_27442;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27440,inst_27437,inst_27438,inst_27434,inst_27442,inst_27457,inst_27459,inst_27460,inst_27461,inst_27462,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27440,inst_27437,inst_27438,inst_27434,inst_27442,inst_27457,inst_27459,inst_27460,inst_27461,inst_27462,state_val_27521,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27464 = setTimeout(inst_27463,(10));
var state_27520__$1 = (function (){var statearr_27591 = state_27520;
(statearr_27591[(33)] = inst_27457);

(statearr_27591[(34)] = inst_27462);

return statearr_27591;
})();
var statearr_27592_27658 = state_27520__$1;
(statearr_27592_27658[(2)] = inst_27464);

(statearr_27592_27658[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (16))){
var state_27520__$1 = state_27520;
var statearr_27593_27659 = state_27520__$1;
(statearr_27593_27659[(2)] = reload_dependents);

(statearr_27593_27659[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (38))){
var inst_27474 = (state_27520[(16)]);
var inst_27491 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27474);
var state_27520__$1 = state_27520;
var statearr_27594_27660 = state_27520__$1;
(statearr_27594_27660[(2)] = inst_27491);

(statearr_27594_27660[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (30))){
var state_27520__$1 = state_27520;
var statearr_27595_27661 = state_27520__$1;
(statearr_27595_27661[(2)] = null);

(statearr_27595_27661[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (10))){
var inst_27394 = (state_27520[(22)]);
var inst_27396 = cljs.core.chunked_seq_QMARK_.call(null,inst_27394);
var state_27520__$1 = state_27520;
if(inst_27396){
var statearr_27596_27662 = state_27520__$1;
(statearr_27596_27662[(1)] = (13));

} else {
var statearr_27597_27663 = state_27520__$1;
(statearr_27597_27663[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (18))){
var inst_27428 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
if(cljs.core.truth_(inst_27428)){
var statearr_27598_27664 = state_27520__$1;
(statearr_27598_27664[(1)] = (19));

} else {
var statearr_27599_27665 = state_27520__$1;
(statearr_27599_27665[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (42))){
var state_27520__$1 = state_27520;
var statearr_27600_27666 = state_27520__$1;
(statearr_27600_27666[(2)] = null);

(statearr_27600_27666[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (37))){
var inst_27486 = (state_27520[(2)]);
var state_27520__$1 = state_27520;
var statearr_27601_27667 = state_27520__$1;
(statearr_27601_27667[(2)] = inst_27486);

(statearr_27601_27667[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27521 === (8))){
var inst_27394 = (state_27520[(22)]);
var inst_27381 = (state_27520[(8)]);
var inst_27394__$1 = cljs.core.seq.call(null,inst_27381);
var state_27520__$1 = (function (){var statearr_27602 = state_27520;
(statearr_27602[(22)] = inst_27394__$1);

return statearr_27602;
})();
if(inst_27394__$1){
var statearr_27603_27668 = state_27520__$1;
(statearr_27603_27668[(1)] = (10));

} else {
var statearr_27604_27669 = state_27520__$1;
(statearr_27604_27669[(1)] = (11));

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
});})(c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19359__auto__,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto____0 = (function (){
var statearr_27608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27608[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto__);

(statearr_27608[(1)] = (1));

return statearr_27608;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto____1 = (function (state_27520){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_27520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e27609){if((e27609 instanceof Object)){
var ex__19363__auto__ = e27609;
var statearr_27610_27670 = state_27520;
(statearr_27610_27670[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27671 = state_27520;
state_27520 = G__27671;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto__ = function(state_27520){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto____1.call(this,state_27520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19426__auto__ = (function (){var statearr_27611 = f__19425__auto__.call(null);
(statearr_27611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_27611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto__,map__27366,map__27366__$1,opts,before_jsload,on_jsload,reload_dependents,map__27367,map__27367__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19424__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27674,link){
var map__27677 = p__27674;
var map__27677__$1 = ((((!((map__27677 == null)))?((((map__27677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27677):map__27677);
var file = cljs.core.get.call(null,map__27677__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27677,map__27677__$1,file){
return (function (p1__27672_SHARP_,p2__27673_SHARP_){
if(cljs.core._EQ_.call(null,p1__27672_SHARP_,p2__27673_SHARP_)){
return p1__27672_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27677,map__27677__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27683){
var map__27684 = p__27683;
var map__27684__$1 = ((((!((map__27684 == null)))?((((map__27684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27684):map__27684);
var match_length = cljs.core.get.call(null,map__27684__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27684__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27679_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27679_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27686 = [];
var len__17402__auto___27689 = arguments.length;
var i__17403__auto___27690 = (0);
while(true){
if((i__17403__auto___27690 < len__17402__auto___27689)){
args27686.push((arguments[i__17403__auto___27690]));

var G__27691 = (i__17403__auto___27690 + (1));
i__17403__auto___27690 = G__27691;
continue;
} else {
}
break;
}

var G__27688 = args27686.length;
switch (G__27688) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27686.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27693_SHARP_,p2__27694_SHARP_){
return cljs.core.assoc.call(null,p1__27693_SHARP_,cljs.core.get.call(null,p2__27694_SHARP_,key),p2__27694_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27695){
var map__27698 = p__27695;
var map__27698__$1 = ((((!((map__27698 == null)))?((((map__27698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27698):map__27698);
var f_data = map__27698__$1;
var file = cljs.core.get.call(null,map__27698__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27700,files_msg){
var map__27707 = p__27700;
var map__27707__$1 = ((((!((map__27707 == null)))?((((map__27707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27707):map__27707);
var opts = map__27707__$1;
var on_cssload = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27709_27713 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27710_27714 = null;
var count__27711_27715 = (0);
var i__27712_27716 = (0);
while(true){
if((i__27712_27716 < count__27711_27715)){
var f_27717 = cljs.core._nth.call(null,chunk__27710_27714,i__27712_27716);
figwheel.client.file_reloading.reload_css_file.call(null,f_27717);

var G__27718 = seq__27709_27713;
var G__27719 = chunk__27710_27714;
var G__27720 = count__27711_27715;
var G__27721 = (i__27712_27716 + (1));
seq__27709_27713 = G__27718;
chunk__27710_27714 = G__27719;
count__27711_27715 = G__27720;
i__27712_27716 = G__27721;
continue;
} else {
var temp__4425__auto___27722 = cljs.core.seq.call(null,seq__27709_27713);
if(temp__4425__auto___27722){
var seq__27709_27723__$1 = temp__4425__auto___27722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27709_27723__$1)){
var c__17147__auto___27724 = cljs.core.chunk_first.call(null,seq__27709_27723__$1);
var G__27725 = cljs.core.chunk_rest.call(null,seq__27709_27723__$1);
var G__27726 = c__17147__auto___27724;
var G__27727 = cljs.core.count.call(null,c__17147__auto___27724);
var G__27728 = (0);
seq__27709_27713 = G__27725;
chunk__27710_27714 = G__27726;
count__27711_27715 = G__27727;
i__27712_27716 = G__27728;
continue;
} else {
var f_27729 = cljs.core.first.call(null,seq__27709_27723__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27729);

var G__27730 = cljs.core.next.call(null,seq__27709_27723__$1);
var G__27731 = null;
var G__27732 = (0);
var G__27733 = (0);
seq__27709_27713 = G__27730;
chunk__27710_27714 = G__27731;
count__27711_27715 = G__27732;
i__27712_27716 = G__27733;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27707,map__27707__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27707,map__27707__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map