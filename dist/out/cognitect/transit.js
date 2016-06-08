// Compiled by ClojureScript 1.7.145 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__23866_23870 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__23867_23871 = null;
var count__23868_23872 = (0);
var i__23869_23873 = (0);
while(true){
if((i__23869_23873 < count__23868_23872)){
var k_23874 = cljs.core._nth.call(null,chunk__23867_23871,i__23869_23873);
var v_23875 = (b[k_23874]);
(a[k_23874] = v_23875);

var G__23876 = seq__23866_23870;
var G__23877 = chunk__23867_23871;
var G__23878 = count__23868_23872;
var G__23879 = (i__23869_23873 + (1));
seq__23866_23870 = G__23876;
chunk__23867_23871 = G__23877;
count__23868_23872 = G__23878;
i__23869_23873 = G__23879;
continue;
} else {
var temp__4425__auto___23880 = cljs.core.seq.call(null,seq__23866_23870);
if(temp__4425__auto___23880){
var seq__23866_23881__$1 = temp__4425__auto___23880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23866_23881__$1)){
var c__17161__auto___23882 = cljs.core.chunk_first.call(null,seq__23866_23881__$1);
var G__23883 = cljs.core.chunk_rest.call(null,seq__23866_23881__$1);
var G__23884 = c__17161__auto___23882;
var G__23885 = cljs.core.count.call(null,c__17161__auto___23882);
var G__23886 = (0);
seq__23866_23870 = G__23883;
chunk__23867_23871 = G__23884;
count__23868_23872 = G__23885;
i__23869_23873 = G__23886;
continue;
} else {
var k_23887 = cljs.core.first.call(null,seq__23866_23881__$1);
var v_23888 = (b[k_23887]);
(a[k_23887] = v_23888);

var G__23889 = cljs.core.next.call(null,seq__23866_23881__$1);
var G__23890 = null;
var G__23891 = (0);
var G__23892 = (0);
seq__23866_23870 = G__23889;
chunk__23867_23871 = G__23890;
count__23868_23872 = G__23891;
i__23869_23873 = G__23892;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args23893 = [];
var len__17416__auto___23896 = arguments.length;
var i__17417__auto___23897 = (0);
while(true){
if((i__17417__auto___23897 < len__17416__auto___23896)){
args23893.push((arguments[i__17417__auto___23897]));

var G__23898 = (i__17417__auto___23897 + (1));
i__17417__auto___23897 = G__23898;
continue;
} else {
}
break;
}

var G__23895 = args23893.length;
switch (G__23895) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23893.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23900 = (i + (2));
var G__23901 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__23900;
ret = G__23901;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23902_23906 = cljs.core.seq.call(null,v);
var chunk__23903_23907 = null;
var count__23904_23908 = (0);
var i__23905_23909 = (0);
while(true){
if((i__23905_23909 < count__23904_23908)){
var x_23910 = cljs.core._nth.call(null,chunk__23903_23907,i__23905_23909);
ret.push(x_23910);

var G__23911 = seq__23902_23906;
var G__23912 = chunk__23903_23907;
var G__23913 = count__23904_23908;
var G__23914 = (i__23905_23909 + (1));
seq__23902_23906 = G__23911;
chunk__23903_23907 = G__23912;
count__23904_23908 = G__23913;
i__23905_23909 = G__23914;
continue;
} else {
var temp__4425__auto___23915 = cljs.core.seq.call(null,seq__23902_23906);
if(temp__4425__auto___23915){
var seq__23902_23916__$1 = temp__4425__auto___23915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23902_23916__$1)){
var c__17161__auto___23917 = cljs.core.chunk_first.call(null,seq__23902_23916__$1);
var G__23918 = cljs.core.chunk_rest.call(null,seq__23902_23916__$1);
var G__23919 = c__17161__auto___23917;
var G__23920 = cljs.core.count.call(null,c__17161__auto___23917);
var G__23921 = (0);
seq__23902_23906 = G__23918;
chunk__23903_23907 = G__23919;
count__23904_23908 = G__23920;
i__23905_23909 = G__23921;
continue;
} else {
var x_23922 = cljs.core.first.call(null,seq__23902_23916__$1);
ret.push(x_23922);

var G__23923 = cljs.core.next.call(null,seq__23902_23916__$1);
var G__23924 = null;
var G__23925 = (0);
var G__23926 = (0);
seq__23902_23906 = G__23923;
chunk__23903_23907 = G__23924;
count__23904_23908 = G__23925;
i__23905_23909 = G__23926;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23927_23931 = cljs.core.seq.call(null,v);
var chunk__23928_23932 = null;
var count__23929_23933 = (0);
var i__23930_23934 = (0);
while(true){
if((i__23930_23934 < count__23929_23933)){
var x_23935 = cljs.core._nth.call(null,chunk__23928_23932,i__23930_23934);
ret.push(x_23935);

var G__23936 = seq__23927_23931;
var G__23937 = chunk__23928_23932;
var G__23938 = count__23929_23933;
var G__23939 = (i__23930_23934 + (1));
seq__23927_23931 = G__23936;
chunk__23928_23932 = G__23937;
count__23929_23933 = G__23938;
i__23930_23934 = G__23939;
continue;
} else {
var temp__4425__auto___23940 = cljs.core.seq.call(null,seq__23927_23931);
if(temp__4425__auto___23940){
var seq__23927_23941__$1 = temp__4425__auto___23940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23927_23941__$1)){
var c__17161__auto___23942 = cljs.core.chunk_first.call(null,seq__23927_23941__$1);
var G__23943 = cljs.core.chunk_rest.call(null,seq__23927_23941__$1);
var G__23944 = c__17161__auto___23942;
var G__23945 = cljs.core.count.call(null,c__17161__auto___23942);
var G__23946 = (0);
seq__23927_23931 = G__23943;
chunk__23928_23932 = G__23944;
count__23929_23933 = G__23945;
i__23930_23934 = G__23946;
continue;
} else {
var x_23947 = cljs.core.first.call(null,seq__23927_23941__$1);
ret.push(x_23947);

var G__23948 = cljs.core.next.call(null,seq__23927_23941__$1);
var G__23949 = null;
var G__23950 = (0);
var G__23951 = (0);
seq__23927_23931 = G__23948;
chunk__23928_23932 = G__23949;
count__23929_23933 = G__23950;
i__23930_23934 = G__23951;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23952_23956 = cljs.core.seq.call(null,v);
var chunk__23953_23957 = null;
var count__23954_23958 = (0);
var i__23955_23959 = (0);
while(true){
if((i__23955_23959 < count__23954_23958)){
var x_23960 = cljs.core._nth.call(null,chunk__23953_23957,i__23955_23959);
ret.push(x_23960);

var G__23961 = seq__23952_23956;
var G__23962 = chunk__23953_23957;
var G__23963 = count__23954_23958;
var G__23964 = (i__23955_23959 + (1));
seq__23952_23956 = G__23961;
chunk__23953_23957 = G__23962;
count__23954_23958 = G__23963;
i__23955_23959 = G__23964;
continue;
} else {
var temp__4425__auto___23965 = cljs.core.seq.call(null,seq__23952_23956);
if(temp__4425__auto___23965){
var seq__23952_23966__$1 = temp__4425__auto___23965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23952_23966__$1)){
var c__17161__auto___23967 = cljs.core.chunk_first.call(null,seq__23952_23966__$1);
var G__23968 = cljs.core.chunk_rest.call(null,seq__23952_23966__$1);
var G__23969 = c__17161__auto___23967;
var G__23970 = cljs.core.count.call(null,c__17161__auto___23967);
var G__23971 = (0);
seq__23952_23956 = G__23968;
chunk__23953_23957 = G__23969;
count__23954_23958 = G__23970;
i__23955_23959 = G__23971;
continue;
} else {
var x_23972 = cljs.core.first.call(null,seq__23952_23966__$1);
ret.push(x_23972);

var G__23973 = cljs.core.next.call(null,seq__23952_23966__$1);
var G__23974 = null;
var G__23975 = (0);
var G__23976 = (0);
seq__23952_23956 = G__23973;
chunk__23953_23957 = G__23974;
count__23954_23958 = G__23975;
i__23955_23959 = G__23976;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args23977 = [];
var len__17416__auto___23988 = arguments.length;
var i__17417__auto___23989 = (0);
while(true){
if((i__17417__auto___23989 < len__17416__auto___23988)){
args23977.push((arguments[i__17417__auto___23989]));

var G__23990 = (i__17417__auto___23989 + (1));
i__17417__auto___23989 = G__23990;
continue;
} else {
}
break;
}

var G__23979 = args23977.length;
switch (G__23979) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23977.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23980 = obj;
G__23980.push(kfn.call(null,k),vfn.call(null,v));

return G__23980;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23981 = cljs.core.clone.call(null,handlers);
x23981.forEach = ((function (x23981,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23982 = cljs.core.seq.call(null,coll);
var chunk__23983 = null;
var count__23984 = (0);
var i__23985 = (0);
while(true){
if((i__23985 < count__23984)){
var vec__23986 = cljs.core._nth.call(null,chunk__23983,i__23985);
var k = cljs.core.nth.call(null,vec__23986,(0),null);
var v = cljs.core.nth.call(null,vec__23986,(1),null);
f.call(null,v,k);

var G__23992 = seq__23982;
var G__23993 = chunk__23983;
var G__23994 = count__23984;
var G__23995 = (i__23985 + (1));
seq__23982 = G__23992;
chunk__23983 = G__23993;
count__23984 = G__23994;
i__23985 = G__23995;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23982);
if(temp__4425__auto__){
var seq__23982__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23982__$1)){
var c__17161__auto__ = cljs.core.chunk_first.call(null,seq__23982__$1);
var G__23996 = cljs.core.chunk_rest.call(null,seq__23982__$1);
var G__23997 = c__17161__auto__;
var G__23998 = cljs.core.count.call(null,c__17161__auto__);
var G__23999 = (0);
seq__23982 = G__23996;
chunk__23983 = G__23997;
count__23984 = G__23998;
i__23985 = G__23999;
continue;
} else {
var vec__23987 = cljs.core.first.call(null,seq__23982__$1);
var k = cljs.core.nth.call(null,vec__23987,(0),null);
var v = cljs.core.nth.call(null,vec__23987,(1),null);
f.call(null,v,k);

var G__24000 = cljs.core.next.call(null,seq__23982__$1);
var G__24001 = null;
var G__24002 = (0);
var G__24003 = (0);
seq__23982 = G__24000;
chunk__23983 = G__24001;
count__23984 = G__24002;
i__23985 = G__24003;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23981,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23981;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args24004 = [];
var len__17416__auto___24010 = arguments.length;
var i__17417__auto___24011 = (0);
while(true){
if((i__17417__auto___24011 < len__17416__auto___24010)){
args24004.push((arguments[i__17417__auto___24011]));

var G__24012 = (i__17417__auto___24011 + (1));
i__17417__auto___24011 = G__24012;
continue;
} else {
}
break;
}

var G__24006 = args24004.length;
switch (G__24006) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24004.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit24007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit24007 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta24008){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta24008 = meta24008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit24007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24009,meta24008__$1){
var self__ = this;
var _24009__$1 = this;
return (new cognitect.transit.t_cognitect$transit24007(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta24008__$1));
});

cognitect.transit.t_cognitect$transit24007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24009){
var self__ = this;
var _24009__$1 = this;
return self__.meta24008;
});

cognitect.transit.t_cognitect$transit24007.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24007.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24007.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24007.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta24008","meta24008",1129746970,null)], null);
});

cognitect.transit.t_cognitect$transit24007.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit24007.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit24007";

cognitect.transit.t_cognitect$transit24007.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cognitect.transit/t_cognitect$transit24007");
});

cognitect.transit.__GT_t_cognitect$transit24007 = (function cognitect$transit$__GT_t_cognitect$transit24007(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24008){
return (new cognitect.transit.t_cognitect$transit24007(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24008));
});

}

return (new cognitect.transit.t_cognitect$transit24007(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map