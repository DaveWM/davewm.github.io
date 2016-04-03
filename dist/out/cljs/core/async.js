// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async32374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32374 = (function (fn_handler,f,meta32375){
this.fn_handler = fn_handler;
this.f = f;
this.meta32375 = meta32375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32376,meta32375__$1){
var self__ = this;
var _32376__$1 = this;
return (new cljs.core.async.t_cljs$core$async32374(self__.fn_handler,self__.f,meta32375__$1));
});

cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32376){
var self__ = this;
var _32376__$1 = this;
return self__.meta32375;
});

cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta32375","meta32375",1869542201,null)], null);
});

cljs.core.async.t_cljs$core$async32374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32374";

cljs.core.async.t_cljs$core$async32374.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async32374");
});

cljs.core.async.__GT_t_cljs$core$async32374 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async32374(fn_handler__$1,f__$1,meta32375){
return (new cljs.core.async.t_cljs$core$async32374(fn_handler__$1,f__$1,meta32375));
});

}

return (new cljs.core.async.t_cljs$core$async32374(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args32379 = [];
var len__17416__auto___32382 = arguments.length;
var i__17417__auto___32383 = (0);
while(true){
if((i__17417__auto___32383 < len__17416__auto___32382)){
args32379.push((arguments[i__17417__auto___32383]));

var G__32384 = (i__17417__auto___32383 + (1));
i__17417__auto___32383 = G__32384;
continue;
} else {
}
break;
}

var G__32381 = args32379.length;
switch (G__32381) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32379.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args32386 = [];
var len__17416__auto___32389 = arguments.length;
var i__17417__auto___32390 = (0);
while(true){
if((i__17417__auto___32390 < len__17416__auto___32389)){
args32386.push((arguments[i__17417__auto___32390]));

var G__32391 = (i__17417__auto___32390 + (1));
i__17417__auto___32390 = G__32391;
continue;
} else {
}
break;
}

var G__32388 = args32386.length;
switch (G__32388) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32386.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32393 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32393);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32393,ret){
return (function (){
return fn1.call(null,val_32393);
});})(val_32393,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args32394 = [];
var len__17416__auto___32397 = arguments.length;
var i__17417__auto___32398 = (0);
while(true){
if((i__17417__auto___32398 < len__17416__auto___32397)){
args32394.push((arguments[i__17417__auto___32398]));

var G__32399 = (i__17417__auto___32398 + (1));
i__17417__auto___32398 = G__32399;
continue;
} else {
}
break;
}

var G__32396 = args32394.length;
switch (G__32396) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32394.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17261__auto___32401 = n;
var x_32402 = (0);
while(true){
if((x_32402 < n__17261__auto___32401)){
(a[x_32402] = (0));

var G__32403 = (x_32402 + (1));
x_32402 = G__32403;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32404 = (i + (1));
i = G__32404;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32408 = (function (alt_flag,flag,meta32409){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32409 = meta32409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32410,meta32409__$1){
var self__ = this;
var _32410__$1 = this;
return (new cljs.core.async.t_cljs$core$async32408(self__.alt_flag,self__.flag,meta32409__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32410){
var self__ = this;
var _32410__$1 = this;
return self__.meta32409;
});})(flag))
;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32408.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32409","meta32409",1909839005,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32408";

cljs.core.async.t_cljs$core$async32408.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async32408");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32408 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32408(alt_flag__$1,flag__$1,meta32409){
return (new cljs.core.async.t_cljs$core$async32408(alt_flag__$1,flag__$1,meta32409));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32408(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32414 = (function (alt_handler,flag,cb,meta32415){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32415 = meta32415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32416,meta32415__$1){
var self__ = this;
var _32416__$1 = this;
return (new cljs.core.async.t_cljs$core$async32414(self__.alt_handler,self__.flag,self__.cb,meta32415__$1));
});

cljs.core.async.t_cljs$core$async32414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32416){
var self__ = this;
var _32416__$1 = this;
return self__.meta32415;
});

cljs.core.async.t_cljs$core$async32414.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32415","meta32415",-1932662957,null)], null);
});

cljs.core.async.t_cljs$core$async32414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32414";

cljs.core.async.t_cljs$core$async32414.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async32414");
});

cljs.core.async.__GT_t_cljs$core$async32414 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32414(alt_handler__$1,flag__$1,cb__$1,meta32415){
return (new cljs.core.async.t_cljs$core$async32414(alt_handler__$1,flag__$1,cb__$1,meta32415));
});

}

return (new cljs.core.async.t_cljs$core$async32414(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32417_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32417_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32418_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32418_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16358__auto__ = wport;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32419 = (i + (1));
i = G__32419;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16358__auto__ = ret;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16346__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16346__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17423__auto__ = [];
var len__17416__auto___32425 = arguments.length;
var i__17417__auto___32426 = (0);
while(true){
if((i__17417__auto___32426 < len__17416__auto___32425)){
args__17423__auto__.push((arguments[i__17417__auto___32426]));

var G__32427 = (i__17417__auto___32426 + (1));
i__17417__auto___32426 = G__32427;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32422){
var map__32423 = p__32422;
var map__32423__$1 = ((((!((map__32423 == null)))?((((map__32423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32423):map__32423);
var opts = map__32423__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32420){
var G__32421 = cljs.core.first.call(null,seq32420);
var seq32420__$1 = cljs.core.next.call(null,seq32420);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32421,seq32420__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args32428 = [];
var len__17416__auto___32478 = arguments.length;
var i__17417__auto___32479 = (0);
while(true){
if((i__17417__auto___32479 < len__17416__auto___32478)){
args32428.push((arguments[i__17417__auto___32479]));

var G__32480 = (i__17417__auto___32479 + (1));
i__17417__auto___32479 = G__32480;
continue;
} else {
}
break;
}

var G__32430 = args32428.length;
switch (G__32430) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32428.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19381__auto___32482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___32482){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___32482){
return (function (state_32454){
var state_val_32455 = (state_32454[(1)]);
if((state_val_32455 === (7))){
var inst_32450 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32456_32483 = state_32454__$1;
(statearr_32456_32483[(2)] = inst_32450);

(statearr_32456_32483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (1))){
var state_32454__$1 = state_32454;
var statearr_32457_32484 = state_32454__$1;
(statearr_32457_32484[(2)] = null);

(statearr_32457_32484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (4))){
var inst_32433 = (state_32454[(7)]);
var inst_32433__$1 = (state_32454[(2)]);
var inst_32434 = (inst_32433__$1 == null);
var state_32454__$1 = (function (){var statearr_32458 = state_32454;
(statearr_32458[(7)] = inst_32433__$1);

return statearr_32458;
})();
if(cljs.core.truth_(inst_32434)){
var statearr_32459_32485 = state_32454__$1;
(statearr_32459_32485[(1)] = (5));

} else {
var statearr_32460_32486 = state_32454__$1;
(statearr_32460_32486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (13))){
var state_32454__$1 = state_32454;
var statearr_32461_32487 = state_32454__$1;
(statearr_32461_32487[(2)] = null);

(statearr_32461_32487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (6))){
var inst_32433 = (state_32454[(7)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32454__$1,(11),to,inst_32433);
} else {
if((state_val_32455 === (3))){
var inst_32452 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32454__$1,inst_32452);
} else {
if((state_val_32455 === (12))){
var state_32454__$1 = state_32454;
var statearr_32462_32488 = state_32454__$1;
(statearr_32462_32488[(2)] = null);

(statearr_32462_32488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (2))){
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32454__$1,(4),from);
} else {
if((state_val_32455 === (11))){
var inst_32443 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
if(cljs.core.truth_(inst_32443)){
var statearr_32463_32489 = state_32454__$1;
(statearr_32463_32489[(1)] = (12));

} else {
var statearr_32464_32490 = state_32454__$1;
(statearr_32464_32490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (9))){
var state_32454__$1 = state_32454;
var statearr_32465_32491 = state_32454__$1;
(statearr_32465_32491[(2)] = null);

(statearr_32465_32491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (5))){
var state_32454__$1 = state_32454;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32466_32492 = state_32454__$1;
(statearr_32466_32492[(1)] = (8));

} else {
var statearr_32467_32493 = state_32454__$1;
(statearr_32467_32493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (14))){
var inst_32448 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32468_32494 = state_32454__$1;
(statearr_32468_32494[(2)] = inst_32448);

(statearr_32468_32494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (10))){
var inst_32440 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32469_32495 = state_32454__$1;
(statearr_32469_32495[(2)] = inst_32440);

(statearr_32469_32495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (8))){
var inst_32437 = cljs.core.async.close_BANG_.call(null,to);
var state_32454__$1 = state_32454;
var statearr_32470_32496 = state_32454__$1;
(statearr_32470_32496[(2)] = inst_32437);

(statearr_32470_32496[(1)] = (10));


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
});})(c__19381__auto___32482))
;
return ((function (switch__19360__auto__,c__19381__auto___32482){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_32474 = [null,null,null,null,null,null,null,null];
(statearr_32474[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_32474[(1)] = (1));

return statearr_32474;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_32454){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_32454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e32475){if((e32475 instanceof Object)){
var ex__19364__auto__ = e32475;
var statearr_32476_32497 = state_32454;
(statearr_32476_32497[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32498 = state_32454;
state_32454 = G__32498;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_32454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_32454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___32482))
})();
var state__19383__auto__ = (function (){var statearr_32477 = f__19382__auto__.call(null);
(statearr_32477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___32482);

return statearr_32477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___32482))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32682){
var vec__32683 = p__32682;
var v = cljs.core.nth.call(null,vec__32683,(0),null);
var p = cljs.core.nth.call(null,vec__32683,(1),null);
var job = vec__32683;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19381__auto___32865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___32865,res,vec__32683,v,p,job,jobs,results){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___32865,res,vec__32683,v,p,job,jobs,results){
return (function (state_32688){
var state_val_32689 = (state_32688[(1)]);
if((state_val_32689 === (1))){
var state_32688__$1 = state_32688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32688__$1,(2),res,v);
} else {
if((state_val_32689 === (2))){
var inst_32685 = (state_32688[(2)]);
var inst_32686 = cljs.core.async.close_BANG_.call(null,res);
var state_32688__$1 = (function (){var statearr_32690 = state_32688;
(statearr_32690[(7)] = inst_32685);

return statearr_32690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32688__$1,inst_32686);
} else {
return null;
}
}
});})(c__19381__auto___32865,res,vec__32683,v,p,job,jobs,results))
;
return ((function (switch__19360__auto__,c__19381__auto___32865,res,vec__32683,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_32694 = [null,null,null,null,null,null,null,null];
(statearr_32694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_32694[(1)] = (1));

return statearr_32694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_32688){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_32688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e32695){if((e32695 instanceof Object)){
var ex__19364__auto__ = e32695;
var statearr_32696_32866 = state_32688;
(statearr_32696_32866[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32867 = state_32688;
state_32688 = G__32867;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_32688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_32688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___32865,res,vec__32683,v,p,job,jobs,results))
})();
var state__19383__auto__ = (function (){var statearr_32697 = f__19382__auto__.call(null);
(statearr_32697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___32865);

return statearr_32697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___32865,res,vec__32683,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32698){
var vec__32699 = p__32698;
var v = cljs.core.nth.call(null,vec__32699,(0),null);
var p = cljs.core.nth.call(null,vec__32699,(1),null);
var job = vec__32699;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17261__auto___32868 = n;
var __32869 = (0);
while(true){
if((__32869 < n__17261__auto___32868)){
var G__32700_32870 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32700_32870) {
case "compute":
var c__19381__auto___32872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32869,c__19381__auto___32872,G__32700_32870,n__17261__auto___32868,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (__32869,c__19381__auto___32872,G__32700_32870,n__17261__auto___32868,jobs,results,process,async){
return (function (state_32713){
var state_val_32714 = (state_32713[(1)]);
if((state_val_32714 === (1))){
var state_32713__$1 = state_32713;
var statearr_32715_32873 = state_32713__$1;
(statearr_32715_32873[(2)] = null);

(statearr_32715_32873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (2))){
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32713__$1,(4),jobs);
} else {
if((state_val_32714 === (3))){
var inst_32711 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32713__$1,inst_32711);
} else {
if((state_val_32714 === (4))){
var inst_32703 = (state_32713[(2)]);
var inst_32704 = process.call(null,inst_32703);
var state_32713__$1 = state_32713;
if(cljs.core.truth_(inst_32704)){
var statearr_32716_32874 = state_32713__$1;
(statearr_32716_32874[(1)] = (5));

} else {
var statearr_32717_32875 = state_32713__$1;
(statearr_32717_32875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (5))){
var state_32713__$1 = state_32713;
var statearr_32718_32876 = state_32713__$1;
(statearr_32718_32876[(2)] = null);

(statearr_32718_32876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (6))){
var state_32713__$1 = state_32713;
var statearr_32719_32877 = state_32713__$1;
(statearr_32719_32877[(2)] = null);

(statearr_32719_32877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (7))){
var inst_32709 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
var statearr_32720_32878 = state_32713__$1;
(statearr_32720_32878[(2)] = inst_32709);

(statearr_32720_32878[(1)] = (3));


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
});})(__32869,c__19381__auto___32872,G__32700_32870,n__17261__auto___32868,jobs,results,process,async))
;
return ((function (__32869,switch__19360__auto__,c__19381__auto___32872,G__32700_32870,n__17261__auto___32868,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_32724 = [null,null,null,null,null,null,null];
(statearr_32724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_32724[(1)] = (1));

return statearr_32724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_32713){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_32713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e32725){if((e32725 instanceof Object)){
var ex__19364__auto__ = e32725;
var statearr_32726_32879 = state_32713;
(statearr_32726_32879[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32880 = state_32713;
state_32713 = G__32880;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_32713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_32713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(__32869,switch__19360__auto__,c__19381__auto___32872,G__32700_32870,n__17261__auto___32868,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_32727 = f__19382__auto__.call(null);
(statearr_32727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___32872);

return statearr_32727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(__32869,c__19381__auto___32872,G__32700_32870,n__17261__auto___32868,jobs,results,process,async))
);


break;
case "async":
var c__19381__auto___32881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32869,c__19381__auto___32881,G__32700_32870,n__17261__auto___32868,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (__32869,c__19381__auto___32881,G__32700_32870,n__17261__auto___32868,jobs,results,process,async){
return (function (state_32740){
var state_val_32741 = (state_32740[(1)]);
if((state_val_32741 === (1))){
var state_32740__$1 = state_32740;
var statearr_32742_32882 = state_32740__$1;
(statearr_32742_32882[(2)] = null);

(statearr_32742_32882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (2))){
var state_32740__$1 = state_32740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32740__$1,(4),jobs);
} else {
if((state_val_32741 === (3))){
var inst_32738 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32740__$1,inst_32738);
} else {
if((state_val_32741 === (4))){
var inst_32730 = (state_32740[(2)]);
var inst_32731 = async.call(null,inst_32730);
var state_32740__$1 = state_32740;
if(cljs.core.truth_(inst_32731)){
var statearr_32743_32883 = state_32740__$1;
(statearr_32743_32883[(1)] = (5));

} else {
var statearr_32744_32884 = state_32740__$1;
(statearr_32744_32884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (5))){
var state_32740__$1 = state_32740;
var statearr_32745_32885 = state_32740__$1;
(statearr_32745_32885[(2)] = null);

(statearr_32745_32885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (6))){
var state_32740__$1 = state_32740;
var statearr_32746_32886 = state_32740__$1;
(statearr_32746_32886[(2)] = null);

(statearr_32746_32886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (7))){
var inst_32736 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
var statearr_32747_32887 = state_32740__$1;
(statearr_32747_32887[(2)] = inst_32736);

(statearr_32747_32887[(1)] = (3));


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
});})(__32869,c__19381__auto___32881,G__32700_32870,n__17261__auto___32868,jobs,results,process,async))
;
return ((function (__32869,switch__19360__auto__,c__19381__auto___32881,G__32700_32870,n__17261__auto___32868,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_32751 = [null,null,null,null,null,null,null];
(statearr_32751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_32751[(1)] = (1));

return statearr_32751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_32740){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_32740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e32752){if((e32752 instanceof Object)){
var ex__19364__auto__ = e32752;
var statearr_32753_32888 = state_32740;
(statearr_32753_32888[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32889 = state_32740;
state_32740 = G__32889;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_32740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_32740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(__32869,switch__19360__auto__,c__19381__auto___32881,G__32700_32870,n__17261__auto___32868,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_32754 = f__19382__auto__.call(null);
(statearr_32754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___32881);

return statearr_32754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(__32869,c__19381__auto___32881,G__32700_32870,n__17261__auto___32868,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32890 = (__32869 + (1));
__32869 = G__32890;
continue;
} else {
}
break;
}

var c__19381__auto___32891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___32891,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___32891,jobs,results,process,async){
return (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (1))){
var state_32776__$1 = state_32776;
var statearr_32778_32892 = state_32776__$1;
(statearr_32778_32892[(2)] = null);

(statearr_32778_32892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (2))){
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32776__$1,(4),from);
} else {
if((state_val_32777 === (3))){
var inst_32774 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32776__$1,inst_32774);
} else {
if((state_val_32777 === (4))){
var inst_32757 = (state_32776[(7)]);
var inst_32757__$1 = (state_32776[(2)]);
var inst_32758 = (inst_32757__$1 == null);
var state_32776__$1 = (function (){var statearr_32779 = state_32776;
(statearr_32779[(7)] = inst_32757__$1);

return statearr_32779;
})();
if(cljs.core.truth_(inst_32758)){
var statearr_32780_32893 = state_32776__$1;
(statearr_32780_32893[(1)] = (5));

} else {
var statearr_32781_32894 = state_32776__$1;
(statearr_32781_32894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (5))){
var inst_32760 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32776__$1 = state_32776;
var statearr_32782_32895 = state_32776__$1;
(statearr_32782_32895[(2)] = inst_32760);

(statearr_32782_32895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (6))){
var inst_32757 = (state_32776[(7)]);
var inst_32762 = (state_32776[(8)]);
var inst_32762__$1 = cljs.core.async.chan.call(null,(1));
var inst_32763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32764 = [inst_32757,inst_32762__$1];
var inst_32765 = (new cljs.core.PersistentVector(null,2,(5),inst_32763,inst_32764,null));
var state_32776__$1 = (function (){var statearr_32783 = state_32776;
(statearr_32783[(8)] = inst_32762__$1);

return statearr_32783;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32776__$1,(8),jobs,inst_32765);
} else {
if((state_val_32777 === (7))){
var inst_32772 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32784_32896 = state_32776__$1;
(statearr_32784_32896[(2)] = inst_32772);

(statearr_32784_32896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (8))){
var inst_32762 = (state_32776[(8)]);
var inst_32767 = (state_32776[(2)]);
var state_32776__$1 = (function (){var statearr_32785 = state_32776;
(statearr_32785[(9)] = inst_32767);

return statearr_32785;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32776__$1,(9),results,inst_32762);
} else {
if((state_val_32777 === (9))){
var inst_32769 = (state_32776[(2)]);
var state_32776__$1 = (function (){var statearr_32786 = state_32776;
(statearr_32786[(10)] = inst_32769);

return statearr_32786;
})();
var statearr_32787_32897 = state_32776__$1;
(statearr_32787_32897[(2)] = null);

(statearr_32787_32897[(1)] = (2));


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
});})(c__19381__auto___32891,jobs,results,process,async))
;
return ((function (switch__19360__auto__,c__19381__auto___32891,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_32791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_32791[(1)] = (1));

return statearr_32791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_32776){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_32776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e32792){if((e32792 instanceof Object)){
var ex__19364__auto__ = e32792;
var statearr_32793_32898 = state_32776;
(statearr_32793_32898[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32899 = state_32776;
state_32776 = G__32899;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___32891,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_32794 = f__19382__auto__.call(null);
(statearr_32794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___32891);

return statearr_32794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___32891,jobs,results,process,async))
);


var c__19381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto__,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto__,jobs,results,process,async){
return (function (state_32832){
var state_val_32833 = (state_32832[(1)]);
if((state_val_32833 === (7))){
var inst_32828 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
var statearr_32834_32900 = state_32832__$1;
(statearr_32834_32900[(2)] = inst_32828);

(statearr_32834_32900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (20))){
var state_32832__$1 = state_32832;
var statearr_32835_32901 = state_32832__$1;
(statearr_32835_32901[(2)] = null);

(statearr_32835_32901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (1))){
var state_32832__$1 = state_32832;
var statearr_32836_32902 = state_32832__$1;
(statearr_32836_32902[(2)] = null);

(statearr_32836_32902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (4))){
var inst_32797 = (state_32832[(7)]);
var inst_32797__$1 = (state_32832[(2)]);
var inst_32798 = (inst_32797__$1 == null);
var state_32832__$1 = (function (){var statearr_32837 = state_32832;
(statearr_32837[(7)] = inst_32797__$1);

return statearr_32837;
})();
if(cljs.core.truth_(inst_32798)){
var statearr_32838_32903 = state_32832__$1;
(statearr_32838_32903[(1)] = (5));

} else {
var statearr_32839_32904 = state_32832__$1;
(statearr_32839_32904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (15))){
var inst_32810 = (state_32832[(8)]);
var state_32832__$1 = state_32832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32832__$1,(18),to,inst_32810);
} else {
if((state_val_32833 === (21))){
var inst_32823 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
var statearr_32840_32905 = state_32832__$1;
(statearr_32840_32905[(2)] = inst_32823);

(statearr_32840_32905[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (13))){
var inst_32825 = (state_32832[(2)]);
var state_32832__$1 = (function (){var statearr_32841 = state_32832;
(statearr_32841[(9)] = inst_32825);

return statearr_32841;
})();
var statearr_32842_32906 = state_32832__$1;
(statearr_32842_32906[(2)] = null);

(statearr_32842_32906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (6))){
var inst_32797 = (state_32832[(7)]);
var state_32832__$1 = state_32832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32832__$1,(11),inst_32797);
} else {
if((state_val_32833 === (17))){
var inst_32818 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
if(cljs.core.truth_(inst_32818)){
var statearr_32843_32907 = state_32832__$1;
(statearr_32843_32907[(1)] = (19));

} else {
var statearr_32844_32908 = state_32832__$1;
(statearr_32844_32908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (3))){
var inst_32830 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32832__$1,inst_32830);
} else {
if((state_val_32833 === (12))){
var inst_32807 = (state_32832[(10)]);
var state_32832__$1 = state_32832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32832__$1,(14),inst_32807);
} else {
if((state_val_32833 === (2))){
var state_32832__$1 = state_32832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32832__$1,(4),results);
} else {
if((state_val_32833 === (19))){
var state_32832__$1 = state_32832;
var statearr_32845_32909 = state_32832__$1;
(statearr_32845_32909[(2)] = null);

(statearr_32845_32909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (11))){
var inst_32807 = (state_32832[(2)]);
var state_32832__$1 = (function (){var statearr_32846 = state_32832;
(statearr_32846[(10)] = inst_32807);

return statearr_32846;
})();
var statearr_32847_32910 = state_32832__$1;
(statearr_32847_32910[(2)] = null);

(statearr_32847_32910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (9))){
var state_32832__$1 = state_32832;
var statearr_32848_32911 = state_32832__$1;
(statearr_32848_32911[(2)] = null);

(statearr_32848_32911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (5))){
var state_32832__$1 = state_32832;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32849_32912 = state_32832__$1;
(statearr_32849_32912[(1)] = (8));

} else {
var statearr_32850_32913 = state_32832__$1;
(statearr_32850_32913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (14))){
var inst_32812 = (state_32832[(11)]);
var inst_32810 = (state_32832[(8)]);
var inst_32810__$1 = (state_32832[(2)]);
var inst_32811 = (inst_32810__$1 == null);
var inst_32812__$1 = cljs.core.not.call(null,inst_32811);
var state_32832__$1 = (function (){var statearr_32851 = state_32832;
(statearr_32851[(11)] = inst_32812__$1);

(statearr_32851[(8)] = inst_32810__$1);

return statearr_32851;
})();
if(inst_32812__$1){
var statearr_32852_32914 = state_32832__$1;
(statearr_32852_32914[(1)] = (15));

} else {
var statearr_32853_32915 = state_32832__$1;
(statearr_32853_32915[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (16))){
var inst_32812 = (state_32832[(11)]);
var state_32832__$1 = state_32832;
var statearr_32854_32916 = state_32832__$1;
(statearr_32854_32916[(2)] = inst_32812);

(statearr_32854_32916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (10))){
var inst_32804 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
var statearr_32855_32917 = state_32832__$1;
(statearr_32855_32917[(2)] = inst_32804);

(statearr_32855_32917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (18))){
var inst_32815 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
var statearr_32856_32918 = state_32832__$1;
(statearr_32856_32918[(2)] = inst_32815);

(statearr_32856_32918[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (8))){
var inst_32801 = cljs.core.async.close_BANG_.call(null,to);
var state_32832__$1 = state_32832;
var statearr_32857_32919 = state_32832__$1;
(statearr_32857_32919[(2)] = inst_32801);

(statearr_32857_32919[(1)] = (10));


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
});})(c__19381__auto__,jobs,results,process,async))
;
return ((function (switch__19360__auto__,c__19381__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_32861 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32861[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_32861[(1)] = (1));

return statearr_32861;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_32832){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_32832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e32862){if((e32862 instanceof Object)){
var ex__19364__auto__ = e32862;
var statearr_32863_32920 = state_32832;
(statearr_32863_32920[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32921 = state_32832;
state_32832 = G__32921;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_32832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_32832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_32864 = f__19382__auto__.call(null);
(statearr_32864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_32864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto__,jobs,results,process,async))
);

return c__19381__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args32922 = [];
var len__17416__auto___32925 = arguments.length;
var i__17417__auto___32926 = (0);
while(true){
if((i__17417__auto___32926 < len__17416__auto___32925)){
args32922.push((arguments[i__17417__auto___32926]));

var G__32927 = (i__17417__auto___32926 + (1));
i__17417__auto___32926 = G__32927;
continue;
} else {
}
break;
}

var G__32924 = args32922.length;
switch (G__32924) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32922.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args32929 = [];
var len__17416__auto___32932 = arguments.length;
var i__17417__auto___32933 = (0);
while(true){
if((i__17417__auto___32933 < len__17416__auto___32932)){
args32929.push((arguments[i__17417__auto___32933]));

var G__32934 = (i__17417__auto___32933 + (1));
i__17417__auto___32933 = G__32934;
continue;
} else {
}
break;
}

var G__32931 = args32929.length;
switch (G__32931) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32929.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args32936 = [];
var len__17416__auto___32989 = arguments.length;
var i__17417__auto___32990 = (0);
while(true){
if((i__17417__auto___32990 < len__17416__auto___32989)){
args32936.push((arguments[i__17417__auto___32990]));

var G__32991 = (i__17417__auto___32990 + (1));
i__17417__auto___32990 = G__32991;
continue;
} else {
}
break;
}

var G__32938 = args32936.length;
switch (G__32938) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32936.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19381__auto___32993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___32993,tc,fc){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___32993,tc,fc){
return (function (state_32964){
var state_val_32965 = (state_32964[(1)]);
if((state_val_32965 === (7))){
var inst_32960 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_32966_32994 = state_32964__$1;
(statearr_32966_32994[(2)] = inst_32960);

(statearr_32966_32994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (1))){
var state_32964__$1 = state_32964;
var statearr_32967_32995 = state_32964__$1;
(statearr_32967_32995[(2)] = null);

(statearr_32967_32995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (4))){
var inst_32941 = (state_32964[(7)]);
var inst_32941__$1 = (state_32964[(2)]);
var inst_32942 = (inst_32941__$1 == null);
var state_32964__$1 = (function (){var statearr_32968 = state_32964;
(statearr_32968[(7)] = inst_32941__$1);

return statearr_32968;
})();
if(cljs.core.truth_(inst_32942)){
var statearr_32969_32996 = state_32964__$1;
(statearr_32969_32996[(1)] = (5));

} else {
var statearr_32970_32997 = state_32964__$1;
(statearr_32970_32997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (13))){
var state_32964__$1 = state_32964;
var statearr_32971_32998 = state_32964__$1;
(statearr_32971_32998[(2)] = null);

(statearr_32971_32998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (6))){
var inst_32941 = (state_32964[(7)]);
var inst_32947 = p.call(null,inst_32941);
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32947)){
var statearr_32972_32999 = state_32964__$1;
(statearr_32972_32999[(1)] = (9));

} else {
var statearr_32973_33000 = state_32964__$1;
(statearr_32973_33000[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (3))){
var inst_32962 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32964__$1,inst_32962);
} else {
if((state_val_32965 === (12))){
var state_32964__$1 = state_32964;
var statearr_32974_33001 = state_32964__$1;
(statearr_32974_33001[(2)] = null);

(statearr_32974_33001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (2))){
var state_32964__$1 = state_32964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32964__$1,(4),ch);
} else {
if((state_val_32965 === (11))){
var inst_32941 = (state_32964[(7)]);
var inst_32951 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32964__$1,(8),inst_32951,inst_32941);
} else {
if((state_val_32965 === (9))){
var state_32964__$1 = state_32964;
var statearr_32975_33002 = state_32964__$1;
(statearr_32975_33002[(2)] = tc);

(statearr_32975_33002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (5))){
var inst_32944 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32945 = cljs.core.async.close_BANG_.call(null,fc);
var state_32964__$1 = (function (){var statearr_32976 = state_32964;
(statearr_32976[(8)] = inst_32944);

return statearr_32976;
})();
var statearr_32977_33003 = state_32964__$1;
(statearr_32977_33003[(2)] = inst_32945);

(statearr_32977_33003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (14))){
var inst_32958 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_32978_33004 = state_32964__$1;
(statearr_32978_33004[(2)] = inst_32958);

(statearr_32978_33004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (10))){
var state_32964__$1 = state_32964;
var statearr_32979_33005 = state_32964__$1;
(statearr_32979_33005[(2)] = fc);

(statearr_32979_33005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (8))){
var inst_32953 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32953)){
var statearr_32980_33006 = state_32964__$1;
(statearr_32980_33006[(1)] = (12));

} else {
var statearr_32981_33007 = state_32964__$1;
(statearr_32981_33007[(1)] = (13));

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
});})(c__19381__auto___32993,tc,fc))
;
return ((function (switch__19360__auto__,c__19381__auto___32993,tc,fc){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_32985 = [null,null,null,null,null,null,null,null,null];
(statearr_32985[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_32985[(1)] = (1));

return statearr_32985;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_32964){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_32964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e32986){if((e32986 instanceof Object)){
var ex__19364__auto__ = e32986;
var statearr_32987_33008 = state_32964;
(statearr_32987_33008[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33009 = state_32964;
state_32964 = G__33009;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_32964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_32964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___32993,tc,fc))
})();
var state__19383__auto__ = (function (){var statearr_32988 = f__19382__auto__.call(null);
(statearr_32988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___32993);

return statearr_32988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___32993,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto__){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto__){
return (function (state_33056){
var state_val_33057 = (state_33056[(1)]);
if((state_val_33057 === (1))){
var inst_33042 = init;
var state_33056__$1 = (function (){var statearr_33058 = state_33056;
(statearr_33058[(7)] = inst_33042);

return statearr_33058;
})();
var statearr_33059_33074 = state_33056__$1;
(statearr_33059_33074[(2)] = null);

(statearr_33059_33074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (2))){
var state_33056__$1 = state_33056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33056__$1,(4),ch);
} else {
if((state_val_33057 === (3))){
var inst_33054 = (state_33056[(2)]);
var state_33056__$1 = state_33056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33056__$1,inst_33054);
} else {
if((state_val_33057 === (4))){
var inst_33045 = (state_33056[(8)]);
var inst_33045__$1 = (state_33056[(2)]);
var inst_33046 = (inst_33045__$1 == null);
var state_33056__$1 = (function (){var statearr_33060 = state_33056;
(statearr_33060[(8)] = inst_33045__$1);

return statearr_33060;
})();
if(cljs.core.truth_(inst_33046)){
var statearr_33061_33075 = state_33056__$1;
(statearr_33061_33075[(1)] = (5));

} else {
var statearr_33062_33076 = state_33056__$1;
(statearr_33062_33076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (5))){
var inst_33042 = (state_33056[(7)]);
var state_33056__$1 = state_33056;
var statearr_33063_33077 = state_33056__$1;
(statearr_33063_33077[(2)] = inst_33042);

(statearr_33063_33077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (6))){
var inst_33042 = (state_33056[(7)]);
var inst_33045 = (state_33056[(8)]);
var inst_33049 = f.call(null,inst_33042,inst_33045);
var inst_33042__$1 = inst_33049;
var state_33056__$1 = (function (){var statearr_33064 = state_33056;
(statearr_33064[(7)] = inst_33042__$1);

return statearr_33064;
})();
var statearr_33065_33078 = state_33056__$1;
(statearr_33065_33078[(2)] = null);

(statearr_33065_33078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (7))){
var inst_33052 = (state_33056[(2)]);
var state_33056__$1 = state_33056;
var statearr_33066_33079 = state_33056__$1;
(statearr_33066_33079[(2)] = inst_33052);

(statearr_33066_33079[(1)] = (3));


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
});})(c__19381__auto__))
;
return ((function (switch__19360__auto__,c__19381__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19361__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19361__auto____0 = (function (){
var statearr_33070 = [null,null,null,null,null,null,null,null,null];
(statearr_33070[(0)] = cljs$core$async$reduce_$_state_machine__19361__auto__);

(statearr_33070[(1)] = (1));

return statearr_33070;
});
var cljs$core$async$reduce_$_state_machine__19361__auto____1 = (function (state_33056){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_33056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e33071){if((e33071 instanceof Object)){
var ex__19364__auto__ = e33071;
var statearr_33072_33080 = state_33056;
(statearr_33072_33080[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33081 = state_33056;
state_33056 = G__33081;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19361__auto__ = function(state_33056){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19361__auto____1.call(this,state_33056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19361__auto____0;
cljs$core$async$reduce_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19361__auto____1;
return cljs$core$async$reduce_$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__))
})();
var state__19383__auto__ = (function (){var statearr_33073 = f__19382__auto__.call(null);
(statearr_33073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_33073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto__))
);

return c__19381__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args33082 = [];
var len__17416__auto___33134 = arguments.length;
var i__17417__auto___33135 = (0);
while(true){
if((i__17417__auto___33135 < len__17416__auto___33134)){
args33082.push((arguments[i__17417__auto___33135]));

var G__33136 = (i__17417__auto___33135 + (1));
i__17417__auto___33135 = G__33136;
continue;
} else {
}
break;
}

var G__33084 = args33082.length;
switch (G__33084) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33082.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto__){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto__){
return (function (state_33109){
var state_val_33110 = (state_33109[(1)]);
if((state_val_33110 === (7))){
var inst_33091 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33111_33138 = state_33109__$1;
(statearr_33111_33138[(2)] = inst_33091);

(statearr_33111_33138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (1))){
var inst_33085 = cljs.core.seq.call(null,coll);
var inst_33086 = inst_33085;
var state_33109__$1 = (function (){var statearr_33112 = state_33109;
(statearr_33112[(7)] = inst_33086);

return statearr_33112;
})();
var statearr_33113_33139 = state_33109__$1;
(statearr_33113_33139[(2)] = null);

(statearr_33113_33139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (4))){
var inst_33086 = (state_33109[(7)]);
var inst_33089 = cljs.core.first.call(null,inst_33086);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33109__$1,(7),ch,inst_33089);
} else {
if((state_val_33110 === (13))){
var inst_33103 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33114_33140 = state_33109__$1;
(statearr_33114_33140[(2)] = inst_33103);

(statearr_33114_33140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (6))){
var inst_33094 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
if(cljs.core.truth_(inst_33094)){
var statearr_33115_33141 = state_33109__$1;
(statearr_33115_33141[(1)] = (8));

} else {
var statearr_33116_33142 = state_33109__$1;
(statearr_33116_33142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (3))){
var inst_33107 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33109__$1,inst_33107);
} else {
if((state_val_33110 === (12))){
var state_33109__$1 = state_33109;
var statearr_33117_33143 = state_33109__$1;
(statearr_33117_33143[(2)] = null);

(statearr_33117_33143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (2))){
var inst_33086 = (state_33109[(7)]);
var state_33109__$1 = state_33109;
if(cljs.core.truth_(inst_33086)){
var statearr_33118_33144 = state_33109__$1;
(statearr_33118_33144[(1)] = (4));

} else {
var statearr_33119_33145 = state_33109__$1;
(statearr_33119_33145[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (11))){
var inst_33100 = cljs.core.async.close_BANG_.call(null,ch);
var state_33109__$1 = state_33109;
var statearr_33120_33146 = state_33109__$1;
(statearr_33120_33146[(2)] = inst_33100);

(statearr_33120_33146[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (9))){
var state_33109__$1 = state_33109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33121_33147 = state_33109__$1;
(statearr_33121_33147[(1)] = (11));

} else {
var statearr_33122_33148 = state_33109__$1;
(statearr_33122_33148[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (5))){
var inst_33086 = (state_33109[(7)]);
var state_33109__$1 = state_33109;
var statearr_33123_33149 = state_33109__$1;
(statearr_33123_33149[(2)] = inst_33086);

(statearr_33123_33149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (10))){
var inst_33105 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33124_33150 = state_33109__$1;
(statearr_33124_33150[(2)] = inst_33105);

(statearr_33124_33150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (8))){
var inst_33086 = (state_33109[(7)]);
var inst_33096 = cljs.core.next.call(null,inst_33086);
var inst_33086__$1 = inst_33096;
var state_33109__$1 = (function (){var statearr_33125 = state_33109;
(statearr_33125[(7)] = inst_33086__$1);

return statearr_33125;
})();
var statearr_33126_33151 = state_33109__$1;
(statearr_33126_33151[(2)] = null);

(statearr_33126_33151[(1)] = (2));


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
});})(c__19381__auto__))
;
return ((function (switch__19360__auto__,c__19381__auto__){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_33130 = [null,null,null,null,null,null,null,null];
(statearr_33130[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_33130[(1)] = (1));

return statearr_33130;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_33109){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_33109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e33131){if((e33131 instanceof Object)){
var ex__19364__auto__ = e33131;
var statearr_33132_33152 = state_33109;
(statearr_33132_33152[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33153 = state_33109;
state_33109 = G__33153;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_33109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_33109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__))
})();
var state__19383__auto__ = (function (){var statearr_33133 = f__19382__auto__.call(null);
(statearr_33133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_33133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto__))
);

return c__19381__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17013__auto__ = (((_ == null))?null:_);
var m__17014__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,_);
} else {
var m__17014__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17014__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m);
} else {
var m__17014__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33375 = (function (mult,ch,cs,meta33376){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33376 = meta33376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33377,meta33376__$1){
var self__ = this;
var _33377__$1 = this;
return (new cljs.core.async.t_cljs$core$async33375(self__.mult,self__.ch,self__.cs,meta33376__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33377){
var self__ = this;
var _33377__$1 = this;
return self__.meta33376;
});})(cs))
;

cljs.core.async.t_cljs$core$async33375.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33375.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33375.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33375.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33375.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33375.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33376","meta33376",1961349041,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33375";

cljs.core.async.t_cljs$core$async33375.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async33375");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33375 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33375(mult__$1,ch__$1,cs__$1,meta33376){
return (new cljs.core.async.t_cljs$core$async33375(mult__$1,ch__$1,cs__$1,meta33376));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33375(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19381__auto___33596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___33596,cs,m,dchan,dctr,done){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___33596,cs,m,dchan,dctr,done){
return (function (state_33508){
var state_val_33509 = (state_33508[(1)]);
if((state_val_33509 === (7))){
var inst_33504 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
var statearr_33510_33597 = state_33508__$1;
(statearr_33510_33597[(2)] = inst_33504);

(statearr_33510_33597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (20))){
var inst_33409 = (state_33508[(7)]);
var inst_33419 = cljs.core.first.call(null,inst_33409);
var inst_33420 = cljs.core.nth.call(null,inst_33419,(0),null);
var inst_33421 = cljs.core.nth.call(null,inst_33419,(1),null);
var state_33508__$1 = (function (){var statearr_33511 = state_33508;
(statearr_33511[(8)] = inst_33420);

return statearr_33511;
})();
if(cljs.core.truth_(inst_33421)){
var statearr_33512_33598 = state_33508__$1;
(statearr_33512_33598[(1)] = (22));

} else {
var statearr_33513_33599 = state_33508__$1;
(statearr_33513_33599[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (27))){
var inst_33451 = (state_33508[(9)]);
var inst_33449 = (state_33508[(10)]);
var inst_33456 = (state_33508[(11)]);
var inst_33380 = (state_33508[(12)]);
var inst_33456__$1 = cljs.core._nth.call(null,inst_33449,inst_33451);
var inst_33457 = cljs.core.async.put_BANG_.call(null,inst_33456__$1,inst_33380,done);
var state_33508__$1 = (function (){var statearr_33514 = state_33508;
(statearr_33514[(11)] = inst_33456__$1);

return statearr_33514;
})();
if(cljs.core.truth_(inst_33457)){
var statearr_33515_33600 = state_33508__$1;
(statearr_33515_33600[(1)] = (30));

} else {
var statearr_33516_33601 = state_33508__$1;
(statearr_33516_33601[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (1))){
var state_33508__$1 = state_33508;
var statearr_33517_33602 = state_33508__$1;
(statearr_33517_33602[(2)] = null);

(statearr_33517_33602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (24))){
var inst_33409 = (state_33508[(7)]);
var inst_33426 = (state_33508[(2)]);
var inst_33427 = cljs.core.next.call(null,inst_33409);
var inst_33389 = inst_33427;
var inst_33390 = null;
var inst_33391 = (0);
var inst_33392 = (0);
var state_33508__$1 = (function (){var statearr_33518 = state_33508;
(statearr_33518[(13)] = inst_33426);

(statearr_33518[(14)] = inst_33392);

(statearr_33518[(15)] = inst_33391);

(statearr_33518[(16)] = inst_33390);

(statearr_33518[(17)] = inst_33389);

return statearr_33518;
})();
var statearr_33519_33603 = state_33508__$1;
(statearr_33519_33603[(2)] = null);

(statearr_33519_33603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (39))){
var state_33508__$1 = state_33508;
var statearr_33523_33604 = state_33508__$1;
(statearr_33523_33604[(2)] = null);

(statearr_33523_33604[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (4))){
var inst_33380 = (state_33508[(12)]);
var inst_33380__$1 = (state_33508[(2)]);
var inst_33381 = (inst_33380__$1 == null);
var state_33508__$1 = (function (){var statearr_33524 = state_33508;
(statearr_33524[(12)] = inst_33380__$1);

return statearr_33524;
})();
if(cljs.core.truth_(inst_33381)){
var statearr_33525_33605 = state_33508__$1;
(statearr_33525_33605[(1)] = (5));

} else {
var statearr_33526_33606 = state_33508__$1;
(statearr_33526_33606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (15))){
var inst_33392 = (state_33508[(14)]);
var inst_33391 = (state_33508[(15)]);
var inst_33390 = (state_33508[(16)]);
var inst_33389 = (state_33508[(17)]);
var inst_33405 = (state_33508[(2)]);
var inst_33406 = (inst_33392 + (1));
var tmp33520 = inst_33391;
var tmp33521 = inst_33390;
var tmp33522 = inst_33389;
var inst_33389__$1 = tmp33522;
var inst_33390__$1 = tmp33521;
var inst_33391__$1 = tmp33520;
var inst_33392__$1 = inst_33406;
var state_33508__$1 = (function (){var statearr_33527 = state_33508;
(statearr_33527[(14)] = inst_33392__$1);

(statearr_33527[(15)] = inst_33391__$1);

(statearr_33527[(16)] = inst_33390__$1);

(statearr_33527[(17)] = inst_33389__$1);

(statearr_33527[(18)] = inst_33405);

return statearr_33527;
})();
var statearr_33528_33607 = state_33508__$1;
(statearr_33528_33607[(2)] = null);

(statearr_33528_33607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (21))){
var inst_33430 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
var statearr_33532_33608 = state_33508__$1;
(statearr_33532_33608[(2)] = inst_33430);

(statearr_33532_33608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (31))){
var inst_33456 = (state_33508[(11)]);
var inst_33460 = done.call(null,null);
var inst_33461 = cljs.core.async.untap_STAR_.call(null,m,inst_33456);
var state_33508__$1 = (function (){var statearr_33533 = state_33508;
(statearr_33533[(19)] = inst_33460);

return statearr_33533;
})();
var statearr_33534_33609 = state_33508__$1;
(statearr_33534_33609[(2)] = inst_33461);

(statearr_33534_33609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (32))){
var inst_33451 = (state_33508[(9)]);
var inst_33449 = (state_33508[(10)]);
var inst_33448 = (state_33508[(20)]);
var inst_33450 = (state_33508[(21)]);
var inst_33463 = (state_33508[(2)]);
var inst_33464 = (inst_33451 + (1));
var tmp33529 = inst_33449;
var tmp33530 = inst_33448;
var tmp33531 = inst_33450;
var inst_33448__$1 = tmp33530;
var inst_33449__$1 = tmp33529;
var inst_33450__$1 = tmp33531;
var inst_33451__$1 = inst_33464;
var state_33508__$1 = (function (){var statearr_33535 = state_33508;
(statearr_33535[(9)] = inst_33451__$1);

(statearr_33535[(10)] = inst_33449__$1);

(statearr_33535[(22)] = inst_33463);

(statearr_33535[(20)] = inst_33448__$1);

(statearr_33535[(21)] = inst_33450__$1);

return statearr_33535;
})();
var statearr_33536_33610 = state_33508__$1;
(statearr_33536_33610[(2)] = null);

(statearr_33536_33610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (40))){
var inst_33476 = (state_33508[(23)]);
var inst_33480 = done.call(null,null);
var inst_33481 = cljs.core.async.untap_STAR_.call(null,m,inst_33476);
var state_33508__$1 = (function (){var statearr_33537 = state_33508;
(statearr_33537[(24)] = inst_33480);

return statearr_33537;
})();
var statearr_33538_33611 = state_33508__$1;
(statearr_33538_33611[(2)] = inst_33481);

(statearr_33538_33611[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (33))){
var inst_33467 = (state_33508[(25)]);
var inst_33469 = cljs.core.chunked_seq_QMARK_.call(null,inst_33467);
var state_33508__$1 = state_33508;
if(inst_33469){
var statearr_33539_33612 = state_33508__$1;
(statearr_33539_33612[(1)] = (36));

} else {
var statearr_33540_33613 = state_33508__$1;
(statearr_33540_33613[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (13))){
var inst_33399 = (state_33508[(26)]);
var inst_33402 = cljs.core.async.close_BANG_.call(null,inst_33399);
var state_33508__$1 = state_33508;
var statearr_33541_33614 = state_33508__$1;
(statearr_33541_33614[(2)] = inst_33402);

(statearr_33541_33614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (22))){
var inst_33420 = (state_33508[(8)]);
var inst_33423 = cljs.core.async.close_BANG_.call(null,inst_33420);
var state_33508__$1 = state_33508;
var statearr_33542_33615 = state_33508__$1;
(statearr_33542_33615[(2)] = inst_33423);

(statearr_33542_33615[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (36))){
var inst_33467 = (state_33508[(25)]);
var inst_33471 = cljs.core.chunk_first.call(null,inst_33467);
var inst_33472 = cljs.core.chunk_rest.call(null,inst_33467);
var inst_33473 = cljs.core.count.call(null,inst_33471);
var inst_33448 = inst_33472;
var inst_33449 = inst_33471;
var inst_33450 = inst_33473;
var inst_33451 = (0);
var state_33508__$1 = (function (){var statearr_33543 = state_33508;
(statearr_33543[(9)] = inst_33451);

(statearr_33543[(10)] = inst_33449);

(statearr_33543[(20)] = inst_33448);

(statearr_33543[(21)] = inst_33450);

return statearr_33543;
})();
var statearr_33544_33616 = state_33508__$1;
(statearr_33544_33616[(2)] = null);

(statearr_33544_33616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (41))){
var inst_33467 = (state_33508[(25)]);
var inst_33483 = (state_33508[(2)]);
var inst_33484 = cljs.core.next.call(null,inst_33467);
var inst_33448 = inst_33484;
var inst_33449 = null;
var inst_33450 = (0);
var inst_33451 = (0);
var state_33508__$1 = (function (){var statearr_33545 = state_33508;
(statearr_33545[(9)] = inst_33451);

(statearr_33545[(10)] = inst_33449);

(statearr_33545[(20)] = inst_33448);

(statearr_33545[(21)] = inst_33450);

(statearr_33545[(27)] = inst_33483);

return statearr_33545;
})();
var statearr_33546_33617 = state_33508__$1;
(statearr_33546_33617[(2)] = null);

(statearr_33546_33617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (43))){
var state_33508__$1 = state_33508;
var statearr_33547_33618 = state_33508__$1;
(statearr_33547_33618[(2)] = null);

(statearr_33547_33618[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (29))){
var inst_33492 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
var statearr_33548_33619 = state_33508__$1;
(statearr_33548_33619[(2)] = inst_33492);

(statearr_33548_33619[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (44))){
var inst_33501 = (state_33508[(2)]);
var state_33508__$1 = (function (){var statearr_33549 = state_33508;
(statearr_33549[(28)] = inst_33501);

return statearr_33549;
})();
var statearr_33550_33620 = state_33508__$1;
(statearr_33550_33620[(2)] = null);

(statearr_33550_33620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (6))){
var inst_33440 = (state_33508[(29)]);
var inst_33439 = cljs.core.deref.call(null,cs);
var inst_33440__$1 = cljs.core.keys.call(null,inst_33439);
var inst_33441 = cljs.core.count.call(null,inst_33440__$1);
var inst_33442 = cljs.core.reset_BANG_.call(null,dctr,inst_33441);
var inst_33447 = cljs.core.seq.call(null,inst_33440__$1);
var inst_33448 = inst_33447;
var inst_33449 = null;
var inst_33450 = (0);
var inst_33451 = (0);
var state_33508__$1 = (function (){var statearr_33551 = state_33508;
(statearr_33551[(9)] = inst_33451);

(statearr_33551[(30)] = inst_33442);

(statearr_33551[(10)] = inst_33449);

(statearr_33551[(20)] = inst_33448);

(statearr_33551[(21)] = inst_33450);

(statearr_33551[(29)] = inst_33440__$1);

return statearr_33551;
})();
var statearr_33552_33621 = state_33508__$1;
(statearr_33552_33621[(2)] = null);

(statearr_33552_33621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (28))){
var inst_33448 = (state_33508[(20)]);
var inst_33467 = (state_33508[(25)]);
var inst_33467__$1 = cljs.core.seq.call(null,inst_33448);
var state_33508__$1 = (function (){var statearr_33553 = state_33508;
(statearr_33553[(25)] = inst_33467__$1);

return statearr_33553;
})();
if(inst_33467__$1){
var statearr_33554_33622 = state_33508__$1;
(statearr_33554_33622[(1)] = (33));

} else {
var statearr_33555_33623 = state_33508__$1;
(statearr_33555_33623[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (25))){
var inst_33451 = (state_33508[(9)]);
var inst_33450 = (state_33508[(21)]);
var inst_33453 = (inst_33451 < inst_33450);
var inst_33454 = inst_33453;
var state_33508__$1 = state_33508;
if(cljs.core.truth_(inst_33454)){
var statearr_33556_33624 = state_33508__$1;
(statearr_33556_33624[(1)] = (27));

} else {
var statearr_33557_33625 = state_33508__$1;
(statearr_33557_33625[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (34))){
var state_33508__$1 = state_33508;
var statearr_33558_33626 = state_33508__$1;
(statearr_33558_33626[(2)] = null);

(statearr_33558_33626[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (17))){
var state_33508__$1 = state_33508;
var statearr_33559_33627 = state_33508__$1;
(statearr_33559_33627[(2)] = null);

(statearr_33559_33627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (3))){
var inst_33506 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33508__$1,inst_33506);
} else {
if((state_val_33509 === (12))){
var inst_33435 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
var statearr_33560_33628 = state_33508__$1;
(statearr_33560_33628[(2)] = inst_33435);

(statearr_33560_33628[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (2))){
var state_33508__$1 = state_33508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33508__$1,(4),ch);
} else {
if((state_val_33509 === (23))){
var state_33508__$1 = state_33508;
var statearr_33561_33629 = state_33508__$1;
(statearr_33561_33629[(2)] = null);

(statearr_33561_33629[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (35))){
var inst_33490 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
var statearr_33562_33630 = state_33508__$1;
(statearr_33562_33630[(2)] = inst_33490);

(statearr_33562_33630[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (19))){
var inst_33409 = (state_33508[(7)]);
var inst_33413 = cljs.core.chunk_first.call(null,inst_33409);
var inst_33414 = cljs.core.chunk_rest.call(null,inst_33409);
var inst_33415 = cljs.core.count.call(null,inst_33413);
var inst_33389 = inst_33414;
var inst_33390 = inst_33413;
var inst_33391 = inst_33415;
var inst_33392 = (0);
var state_33508__$1 = (function (){var statearr_33563 = state_33508;
(statearr_33563[(14)] = inst_33392);

(statearr_33563[(15)] = inst_33391);

(statearr_33563[(16)] = inst_33390);

(statearr_33563[(17)] = inst_33389);

return statearr_33563;
})();
var statearr_33564_33631 = state_33508__$1;
(statearr_33564_33631[(2)] = null);

(statearr_33564_33631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (11))){
var inst_33409 = (state_33508[(7)]);
var inst_33389 = (state_33508[(17)]);
var inst_33409__$1 = cljs.core.seq.call(null,inst_33389);
var state_33508__$1 = (function (){var statearr_33565 = state_33508;
(statearr_33565[(7)] = inst_33409__$1);

return statearr_33565;
})();
if(inst_33409__$1){
var statearr_33566_33632 = state_33508__$1;
(statearr_33566_33632[(1)] = (16));

} else {
var statearr_33567_33633 = state_33508__$1;
(statearr_33567_33633[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (9))){
var inst_33437 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
var statearr_33568_33634 = state_33508__$1;
(statearr_33568_33634[(2)] = inst_33437);

(statearr_33568_33634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (5))){
var inst_33387 = cljs.core.deref.call(null,cs);
var inst_33388 = cljs.core.seq.call(null,inst_33387);
var inst_33389 = inst_33388;
var inst_33390 = null;
var inst_33391 = (0);
var inst_33392 = (0);
var state_33508__$1 = (function (){var statearr_33569 = state_33508;
(statearr_33569[(14)] = inst_33392);

(statearr_33569[(15)] = inst_33391);

(statearr_33569[(16)] = inst_33390);

(statearr_33569[(17)] = inst_33389);

return statearr_33569;
})();
var statearr_33570_33635 = state_33508__$1;
(statearr_33570_33635[(2)] = null);

(statearr_33570_33635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (14))){
var state_33508__$1 = state_33508;
var statearr_33571_33636 = state_33508__$1;
(statearr_33571_33636[(2)] = null);

(statearr_33571_33636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (45))){
var inst_33498 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
var statearr_33572_33637 = state_33508__$1;
(statearr_33572_33637[(2)] = inst_33498);

(statearr_33572_33637[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (26))){
var inst_33440 = (state_33508[(29)]);
var inst_33494 = (state_33508[(2)]);
var inst_33495 = cljs.core.seq.call(null,inst_33440);
var state_33508__$1 = (function (){var statearr_33573 = state_33508;
(statearr_33573[(31)] = inst_33494);

return statearr_33573;
})();
if(inst_33495){
var statearr_33574_33638 = state_33508__$1;
(statearr_33574_33638[(1)] = (42));

} else {
var statearr_33575_33639 = state_33508__$1;
(statearr_33575_33639[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (16))){
var inst_33409 = (state_33508[(7)]);
var inst_33411 = cljs.core.chunked_seq_QMARK_.call(null,inst_33409);
var state_33508__$1 = state_33508;
if(inst_33411){
var statearr_33576_33640 = state_33508__$1;
(statearr_33576_33640[(1)] = (19));

} else {
var statearr_33577_33641 = state_33508__$1;
(statearr_33577_33641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (38))){
var inst_33487 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
var statearr_33578_33642 = state_33508__$1;
(statearr_33578_33642[(2)] = inst_33487);

(statearr_33578_33642[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (30))){
var state_33508__$1 = state_33508;
var statearr_33579_33643 = state_33508__$1;
(statearr_33579_33643[(2)] = null);

(statearr_33579_33643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (10))){
var inst_33392 = (state_33508[(14)]);
var inst_33390 = (state_33508[(16)]);
var inst_33398 = cljs.core._nth.call(null,inst_33390,inst_33392);
var inst_33399 = cljs.core.nth.call(null,inst_33398,(0),null);
var inst_33400 = cljs.core.nth.call(null,inst_33398,(1),null);
var state_33508__$1 = (function (){var statearr_33580 = state_33508;
(statearr_33580[(26)] = inst_33399);

return statearr_33580;
})();
if(cljs.core.truth_(inst_33400)){
var statearr_33581_33644 = state_33508__$1;
(statearr_33581_33644[(1)] = (13));

} else {
var statearr_33582_33645 = state_33508__$1;
(statearr_33582_33645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (18))){
var inst_33433 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
var statearr_33583_33646 = state_33508__$1;
(statearr_33583_33646[(2)] = inst_33433);

(statearr_33583_33646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (42))){
var state_33508__$1 = state_33508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33508__$1,(45),dchan);
} else {
if((state_val_33509 === (37))){
var inst_33467 = (state_33508[(25)]);
var inst_33380 = (state_33508[(12)]);
var inst_33476 = (state_33508[(23)]);
var inst_33476__$1 = cljs.core.first.call(null,inst_33467);
var inst_33477 = cljs.core.async.put_BANG_.call(null,inst_33476__$1,inst_33380,done);
var state_33508__$1 = (function (){var statearr_33584 = state_33508;
(statearr_33584[(23)] = inst_33476__$1);

return statearr_33584;
})();
if(cljs.core.truth_(inst_33477)){
var statearr_33585_33647 = state_33508__$1;
(statearr_33585_33647[(1)] = (39));

} else {
var statearr_33586_33648 = state_33508__$1;
(statearr_33586_33648[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (8))){
var inst_33392 = (state_33508[(14)]);
var inst_33391 = (state_33508[(15)]);
var inst_33394 = (inst_33392 < inst_33391);
var inst_33395 = inst_33394;
var state_33508__$1 = state_33508;
if(cljs.core.truth_(inst_33395)){
var statearr_33587_33649 = state_33508__$1;
(statearr_33587_33649[(1)] = (10));

} else {
var statearr_33588_33650 = state_33508__$1;
(statearr_33588_33650[(1)] = (11));

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
});})(c__19381__auto___33596,cs,m,dchan,dctr,done))
;
return ((function (switch__19360__auto__,c__19381__auto___33596,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19361__auto__ = null;
var cljs$core$async$mult_$_state_machine__19361__auto____0 = (function (){
var statearr_33592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33592[(0)] = cljs$core$async$mult_$_state_machine__19361__auto__);

(statearr_33592[(1)] = (1));

return statearr_33592;
});
var cljs$core$async$mult_$_state_machine__19361__auto____1 = (function (state_33508){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_33508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e33593){if((e33593 instanceof Object)){
var ex__19364__auto__ = e33593;
var statearr_33594_33651 = state_33508;
(statearr_33594_33651[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33652 = state_33508;
state_33508 = G__33652;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19361__auto__ = function(state_33508){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19361__auto____1.call(this,state_33508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19361__auto____0;
cljs$core$async$mult_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19361__auto____1;
return cljs$core$async$mult_$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___33596,cs,m,dchan,dctr,done))
})();
var state__19383__auto__ = (function (){var statearr_33595 = f__19382__auto__.call(null);
(statearr_33595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___33596);

return statearr_33595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___33596,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args33653 = [];
var len__17416__auto___33656 = arguments.length;
var i__17417__auto___33657 = (0);
while(true){
if((i__17417__auto___33657 < len__17416__auto___33656)){
args33653.push((arguments[i__17417__auto___33657]));

var G__33658 = (i__17417__auto___33657 + (1));
i__17417__auto___33657 = G__33658;
continue;
} else {
}
break;
}

var G__33655 = args33653.length;
switch (G__33655) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33653.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m);
} else {
var m__17014__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,state_map);
} else {
var m__17014__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17013__auto__ = (((m == null))?null:m);
var m__17014__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,m,mode);
} else {
var m__17014__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17423__auto__ = [];
var len__17416__auto___33670 = arguments.length;
var i__17417__auto___33671 = (0);
while(true){
if((i__17417__auto___33671 < len__17416__auto___33670)){
args__17423__auto__.push((arguments[i__17417__auto___33671]));

var G__33672 = (i__17417__auto___33671 + (1));
i__17417__auto___33671 = G__33672;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((3) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17424__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33664){
var map__33665 = p__33664;
var map__33665__$1 = ((((!((map__33665 == null)))?((((map__33665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33665):map__33665);
var opts = map__33665__$1;
var statearr_33667_33673 = state;
(statearr_33667_33673[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__33665,map__33665__$1,opts){
return (function (val){
var statearr_33668_33674 = state;
(statearr_33668_33674[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33665,map__33665__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_33669_33675 = state;
(statearr_33669_33675[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33660){
var G__33661 = cljs.core.first.call(null,seq33660);
var seq33660__$1 = cljs.core.next.call(null,seq33660);
var G__33662 = cljs.core.first.call(null,seq33660__$1);
var seq33660__$2 = cljs.core.next.call(null,seq33660__$1);
var G__33663 = cljs.core.first.call(null,seq33660__$2);
var seq33660__$3 = cljs.core.next.call(null,seq33660__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33661,G__33662,G__33663,seq33660__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33839 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33839 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33840){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33840 = meta33840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33841,meta33840__$1){
var self__ = this;
var _33841__$1 = this;
return (new cljs.core.async.t_cljs$core$async33839(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33840__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33841){
var self__ = this;
var _33841__$1 = this;
return self__.meta33840;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33839.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33839.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33839.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33839.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33839.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33839.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33839.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33839.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33840","meta33840",552512675,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33839";

cljs.core.async.t_cljs$core$async33839.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async33839");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33839 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33839(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33840){
return (new cljs.core.async.t_cljs$core$async33839(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33840));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33839(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19381__auto___34002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___34002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___34002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33939){
var state_val_33940 = (state_33939[(1)]);
if((state_val_33940 === (7))){
var inst_33857 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
var statearr_33941_34003 = state_33939__$1;
(statearr_33941_34003[(2)] = inst_33857);

(statearr_33941_34003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (20))){
var inst_33869 = (state_33939[(7)]);
var state_33939__$1 = state_33939;
var statearr_33942_34004 = state_33939__$1;
(statearr_33942_34004[(2)] = inst_33869);

(statearr_33942_34004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (27))){
var state_33939__$1 = state_33939;
var statearr_33943_34005 = state_33939__$1;
(statearr_33943_34005[(2)] = null);

(statearr_33943_34005[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (1))){
var inst_33845 = (state_33939[(8)]);
var inst_33845__$1 = calc_state.call(null);
var inst_33847 = (inst_33845__$1 == null);
var inst_33848 = cljs.core.not.call(null,inst_33847);
var state_33939__$1 = (function (){var statearr_33944 = state_33939;
(statearr_33944[(8)] = inst_33845__$1);

return statearr_33944;
})();
if(inst_33848){
var statearr_33945_34006 = state_33939__$1;
(statearr_33945_34006[(1)] = (2));

} else {
var statearr_33946_34007 = state_33939__$1;
(statearr_33946_34007[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (24))){
var inst_33892 = (state_33939[(9)]);
var inst_33913 = (state_33939[(10)]);
var inst_33899 = (state_33939[(11)]);
var inst_33913__$1 = inst_33892.call(null,inst_33899);
var state_33939__$1 = (function (){var statearr_33947 = state_33939;
(statearr_33947[(10)] = inst_33913__$1);

return statearr_33947;
})();
if(cljs.core.truth_(inst_33913__$1)){
var statearr_33948_34008 = state_33939__$1;
(statearr_33948_34008[(1)] = (29));

} else {
var statearr_33949_34009 = state_33939__$1;
(statearr_33949_34009[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (4))){
var inst_33860 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
if(cljs.core.truth_(inst_33860)){
var statearr_33950_34010 = state_33939__$1;
(statearr_33950_34010[(1)] = (8));

} else {
var statearr_33951_34011 = state_33939__$1;
(statearr_33951_34011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (15))){
var inst_33886 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
if(cljs.core.truth_(inst_33886)){
var statearr_33952_34012 = state_33939__$1;
(statearr_33952_34012[(1)] = (19));

} else {
var statearr_33953_34013 = state_33939__$1;
(statearr_33953_34013[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (21))){
var inst_33891 = (state_33939[(12)]);
var inst_33891__$1 = (state_33939[(2)]);
var inst_33892 = cljs.core.get.call(null,inst_33891__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33893 = cljs.core.get.call(null,inst_33891__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33894 = cljs.core.get.call(null,inst_33891__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33939__$1 = (function (){var statearr_33954 = state_33939;
(statearr_33954[(13)] = inst_33893);

(statearr_33954[(9)] = inst_33892);

(statearr_33954[(12)] = inst_33891__$1);

return statearr_33954;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33939__$1,(22),inst_33894);
} else {
if((state_val_33940 === (31))){
var inst_33921 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
if(cljs.core.truth_(inst_33921)){
var statearr_33955_34014 = state_33939__$1;
(statearr_33955_34014[(1)] = (32));

} else {
var statearr_33956_34015 = state_33939__$1;
(statearr_33956_34015[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (32))){
var inst_33898 = (state_33939[(14)]);
var state_33939__$1 = state_33939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33939__$1,(35),out,inst_33898);
} else {
if((state_val_33940 === (33))){
var inst_33891 = (state_33939[(12)]);
var inst_33869 = inst_33891;
var state_33939__$1 = (function (){var statearr_33957 = state_33939;
(statearr_33957[(7)] = inst_33869);

return statearr_33957;
})();
var statearr_33958_34016 = state_33939__$1;
(statearr_33958_34016[(2)] = null);

(statearr_33958_34016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (13))){
var inst_33869 = (state_33939[(7)]);
var inst_33876 = inst_33869.cljs$lang$protocol_mask$partition0$;
var inst_33877 = (inst_33876 & (64));
var inst_33878 = inst_33869.cljs$core$ISeq$;
var inst_33879 = (inst_33877) || (inst_33878);
var state_33939__$1 = state_33939;
if(cljs.core.truth_(inst_33879)){
var statearr_33959_34017 = state_33939__$1;
(statearr_33959_34017[(1)] = (16));

} else {
var statearr_33960_34018 = state_33939__$1;
(statearr_33960_34018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (22))){
var inst_33898 = (state_33939[(14)]);
var inst_33899 = (state_33939[(11)]);
var inst_33897 = (state_33939[(2)]);
var inst_33898__$1 = cljs.core.nth.call(null,inst_33897,(0),null);
var inst_33899__$1 = cljs.core.nth.call(null,inst_33897,(1),null);
var inst_33900 = (inst_33898__$1 == null);
var inst_33901 = cljs.core._EQ_.call(null,inst_33899__$1,change);
var inst_33902 = (inst_33900) || (inst_33901);
var state_33939__$1 = (function (){var statearr_33961 = state_33939;
(statearr_33961[(14)] = inst_33898__$1);

(statearr_33961[(11)] = inst_33899__$1);

return statearr_33961;
})();
if(cljs.core.truth_(inst_33902)){
var statearr_33962_34019 = state_33939__$1;
(statearr_33962_34019[(1)] = (23));

} else {
var statearr_33963_34020 = state_33939__$1;
(statearr_33963_34020[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (36))){
var inst_33891 = (state_33939[(12)]);
var inst_33869 = inst_33891;
var state_33939__$1 = (function (){var statearr_33964 = state_33939;
(statearr_33964[(7)] = inst_33869);

return statearr_33964;
})();
var statearr_33965_34021 = state_33939__$1;
(statearr_33965_34021[(2)] = null);

(statearr_33965_34021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (29))){
var inst_33913 = (state_33939[(10)]);
var state_33939__$1 = state_33939;
var statearr_33966_34022 = state_33939__$1;
(statearr_33966_34022[(2)] = inst_33913);

(statearr_33966_34022[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (6))){
var state_33939__$1 = state_33939;
var statearr_33967_34023 = state_33939__$1;
(statearr_33967_34023[(2)] = false);

(statearr_33967_34023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (28))){
var inst_33909 = (state_33939[(2)]);
var inst_33910 = calc_state.call(null);
var inst_33869 = inst_33910;
var state_33939__$1 = (function (){var statearr_33968 = state_33939;
(statearr_33968[(15)] = inst_33909);

(statearr_33968[(7)] = inst_33869);

return statearr_33968;
})();
var statearr_33969_34024 = state_33939__$1;
(statearr_33969_34024[(2)] = null);

(statearr_33969_34024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (25))){
var inst_33935 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
var statearr_33970_34025 = state_33939__$1;
(statearr_33970_34025[(2)] = inst_33935);

(statearr_33970_34025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (34))){
var inst_33933 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
var statearr_33971_34026 = state_33939__$1;
(statearr_33971_34026[(2)] = inst_33933);

(statearr_33971_34026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (17))){
var state_33939__$1 = state_33939;
var statearr_33972_34027 = state_33939__$1;
(statearr_33972_34027[(2)] = false);

(statearr_33972_34027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (3))){
var state_33939__$1 = state_33939;
var statearr_33973_34028 = state_33939__$1;
(statearr_33973_34028[(2)] = false);

(statearr_33973_34028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (12))){
var inst_33937 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33939__$1,inst_33937);
} else {
if((state_val_33940 === (2))){
var inst_33845 = (state_33939[(8)]);
var inst_33850 = inst_33845.cljs$lang$protocol_mask$partition0$;
var inst_33851 = (inst_33850 & (64));
var inst_33852 = inst_33845.cljs$core$ISeq$;
var inst_33853 = (inst_33851) || (inst_33852);
var state_33939__$1 = state_33939;
if(cljs.core.truth_(inst_33853)){
var statearr_33974_34029 = state_33939__$1;
(statearr_33974_34029[(1)] = (5));

} else {
var statearr_33975_34030 = state_33939__$1;
(statearr_33975_34030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (23))){
var inst_33898 = (state_33939[(14)]);
var inst_33904 = (inst_33898 == null);
var state_33939__$1 = state_33939;
if(cljs.core.truth_(inst_33904)){
var statearr_33976_34031 = state_33939__$1;
(statearr_33976_34031[(1)] = (26));

} else {
var statearr_33977_34032 = state_33939__$1;
(statearr_33977_34032[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (35))){
var inst_33924 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
if(cljs.core.truth_(inst_33924)){
var statearr_33978_34033 = state_33939__$1;
(statearr_33978_34033[(1)] = (36));

} else {
var statearr_33979_34034 = state_33939__$1;
(statearr_33979_34034[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (19))){
var inst_33869 = (state_33939[(7)]);
var inst_33888 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33869);
var state_33939__$1 = state_33939;
var statearr_33980_34035 = state_33939__$1;
(statearr_33980_34035[(2)] = inst_33888);

(statearr_33980_34035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (11))){
var inst_33869 = (state_33939[(7)]);
var inst_33873 = (inst_33869 == null);
var inst_33874 = cljs.core.not.call(null,inst_33873);
var state_33939__$1 = state_33939;
if(inst_33874){
var statearr_33981_34036 = state_33939__$1;
(statearr_33981_34036[(1)] = (13));

} else {
var statearr_33982_34037 = state_33939__$1;
(statearr_33982_34037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (9))){
var inst_33845 = (state_33939[(8)]);
var state_33939__$1 = state_33939;
var statearr_33983_34038 = state_33939__$1;
(statearr_33983_34038[(2)] = inst_33845);

(statearr_33983_34038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (5))){
var state_33939__$1 = state_33939;
var statearr_33984_34039 = state_33939__$1;
(statearr_33984_34039[(2)] = true);

(statearr_33984_34039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (14))){
var state_33939__$1 = state_33939;
var statearr_33985_34040 = state_33939__$1;
(statearr_33985_34040[(2)] = false);

(statearr_33985_34040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (26))){
var inst_33899 = (state_33939[(11)]);
var inst_33906 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33899);
var state_33939__$1 = state_33939;
var statearr_33986_34041 = state_33939__$1;
(statearr_33986_34041[(2)] = inst_33906);

(statearr_33986_34041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (16))){
var state_33939__$1 = state_33939;
var statearr_33987_34042 = state_33939__$1;
(statearr_33987_34042[(2)] = true);

(statearr_33987_34042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (38))){
var inst_33929 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
var statearr_33988_34043 = state_33939__$1;
(statearr_33988_34043[(2)] = inst_33929);

(statearr_33988_34043[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (30))){
var inst_33893 = (state_33939[(13)]);
var inst_33892 = (state_33939[(9)]);
var inst_33899 = (state_33939[(11)]);
var inst_33916 = cljs.core.empty_QMARK_.call(null,inst_33892);
var inst_33917 = inst_33893.call(null,inst_33899);
var inst_33918 = cljs.core.not.call(null,inst_33917);
var inst_33919 = (inst_33916) && (inst_33918);
var state_33939__$1 = state_33939;
var statearr_33989_34044 = state_33939__$1;
(statearr_33989_34044[(2)] = inst_33919);

(statearr_33989_34044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (10))){
var inst_33845 = (state_33939[(8)]);
var inst_33865 = (state_33939[(2)]);
var inst_33866 = cljs.core.get.call(null,inst_33865,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33867 = cljs.core.get.call(null,inst_33865,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33868 = cljs.core.get.call(null,inst_33865,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33869 = inst_33845;
var state_33939__$1 = (function (){var statearr_33990 = state_33939;
(statearr_33990[(7)] = inst_33869);

(statearr_33990[(16)] = inst_33866);

(statearr_33990[(17)] = inst_33868);

(statearr_33990[(18)] = inst_33867);

return statearr_33990;
})();
var statearr_33991_34045 = state_33939__$1;
(statearr_33991_34045[(2)] = null);

(statearr_33991_34045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (18))){
var inst_33883 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
var statearr_33992_34046 = state_33939__$1;
(statearr_33992_34046[(2)] = inst_33883);

(statearr_33992_34046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (37))){
var state_33939__$1 = state_33939;
var statearr_33993_34047 = state_33939__$1;
(statearr_33993_34047[(2)] = null);

(statearr_33993_34047[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (8))){
var inst_33845 = (state_33939[(8)]);
var inst_33862 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33845);
var state_33939__$1 = state_33939;
var statearr_33994_34048 = state_33939__$1;
(statearr_33994_34048[(2)] = inst_33862);

(statearr_33994_34048[(1)] = (10));


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
});})(c__19381__auto___34002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19360__auto__,c__19381__auto___34002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19361__auto__ = null;
var cljs$core$async$mix_$_state_machine__19361__auto____0 = (function (){
var statearr_33998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33998[(0)] = cljs$core$async$mix_$_state_machine__19361__auto__);

(statearr_33998[(1)] = (1));

return statearr_33998;
});
var cljs$core$async$mix_$_state_machine__19361__auto____1 = (function (state_33939){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_33939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e33999){if((e33999 instanceof Object)){
var ex__19364__auto__ = e33999;
var statearr_34000_34049 = state_33939;
(statearr_34000_34049[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34050 = state_33939;
state_33939 = G__34050;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19361__auto__ = function(state_33939){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19361__auto____1.call(this,state_33939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19361__auto____0;
cljs$core$async$mix_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19361__auto____1;
return cljs$core$async$mix_$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___34002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19383__auto__ = (function (){var statearr_34001 = f__19382__auto__.call(null);
(statearr_34001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___34002);

return statearr_34001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___34002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17014__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p,v,ch);
} else {
var m__17014__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34051 = [];
var len__17416__auto___34054 = arguments.length;
var i__17417__auto___34055 = (0);
while(true){
if((i__17417__auto___34055 < len__17416__auto___34054)){
args34051.push((arguments[i__17417__auto___34055]));

var G__34056 = (i__17417__auto___34055 + (1));
i__17417__auto___34055 = G__34056;
continue;
} else {
}
break;
}

var G__34053 = args34051.length;
switch (G__34053) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34051.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p);
} else {
var m__17014__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17013__auto__ = (((p == null))?null:p);
var m__17014__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,p,v);
} else {
var m__17014__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args34059 = [];
var len__17416__auto___34184 = arguments.length;
var i__17417__auto___34185 = (0);
while(true){
if((i__17417__auto___34185 < len__17416__auto___34184)){
args34059.push((arguments[i__17417__auto___34185]));

var G__34186 = (i__17417__auto___34185 + (1));
i__17417__auto___34185 = G__34186;
continue;
} else {
}
break;
}

var G__34061 = args34059.length;
switch (G__34061) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34059.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16358__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16358__auto__,mults){
return (function (p1__34058_SHARP_){
if(cljs.core.truth_(p1__34058_SHARP_.call(null,topic))){
return p1__34058_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34058_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16358__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34062 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34063){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34063 = meta34063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34064,meta34063__$1){
var self__ = this;
var _34064__$1 = this;
return (new cljs.core.async.t_cljs$core$async34062(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34063__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34064){
var self__ = this;
var _34064__$1 = this;
return self__.meta34063;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34062.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34062.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async34062.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34062.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34062.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34063","meta34063",-455334874,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34062";

cljs.core.async.t_cljs$core$async34062.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async34062");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34062 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34062(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34063){
return (new cljs.core.async.t_cljs$core$async34062(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34063));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34062(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19381__auto___34188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___34188,mults,ensure_mult,p){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___34188,mults,ensure_mult,p){
return (function (state_34136){
var state_val_34137 = (state_34136[(1)]);
if((state_val_34137 === (7))){
var inst_34132 = (state_34136[(2)]);
var state_34136__$1 = state_34136;
var statearr_34138_34189 = state_34136__$1;
(statearr_34138_34189[(2)] = inst_34132);

(statearr_34138_34189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (20))){
var state_34136__$1 = state_34136;
var statearr_34139_34190 = state_34136__$1;
(statearr_34139_34190[(2)] = null);

(statearr_34139_34190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (1))){
var state_34136__$1 = state_34136;
var statearr_34140_34191 = state_34136__$1;
(statearr_34140_34191[(2)] = null);

(statearr_34140_34191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (24))){
var inst_34115 = (state_34136[(7)]);
var inst_34124 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34115);
var state_34136__$1 = state_34136;
var statearr_34141_34192 = state_34136__$1;
(statearr_34141_34192[(2)] = inst_34124);

(statearr_34141_34192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (4))){
var inst_34067 = (state_34136[(8)]);
var inst_34067__$1 = (state_34136[(2)]);
var inst_34068 = (inst_34067__$1 == null);
var state_34136__$1 = (function (){var statearr_34142 = state_34136;
(statearr_34142[(8)] = inst_34067__$1);

return statearr_34142;
})();
if(cljs.core.truth_(inst_34068)){
var statearr_34143_34193 = state_34136__$1;
(statearr_34143_34193[(1)] = (5));

} else {
var statearr_34144_34194 = state_34136__$1;
(statearr_34144_34194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (15))){
var inst_34109 = (state_34136[(2)]);
var state_34136__$1 = state_34136;
var statearr_34145_34195 = state_34136__$1;
(statearr_34145_34195[(2)] = inst_34109);

(statearr_34145_34195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (21))){
var inst_34129 = (state_34136[(2)]);
var state_34136__$1 = (function (){var statearr_34146 = state_34136;
(statearr_34146[(9)] = inst_34129);

return statearr_34146;
})();
var statearr_34147_34196 = state_34136__$1;
(statearr_34147_34196[(2)] = null);

(statearr_34147_34196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (13))){
var inst_34091 = (state_34136[(10)]);
var inst_34093 = cljs.core.chunked_seq_QMARK_.call(null,inst_34091);
var state_34136__$1 = state_34136;
if(inst_34093){
var statearr_34148_34197 = state_34136__$1;
(statearr_34148_34197[(1)] = (16));

} else {
var statearr_34149_34198 = state_34136__$1;
(statearr_34149_34198[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (22))){
var inst_34121 = (state_34136[(2)]);
var state_34136__$1 = state_34136;
if(cljs.core.truth_(inst_34121)){
var statearr_34150_34199 = state_34136__$1;
(statearr_34150_34199[(1)] = (23));

} else {
var statearr_34151_34200 = state_34136__$1;
(statearr_34151_34200[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (6))){
var inst_34115 = (state_34136[(7)]);
var inst_34117 = (state_34136[(11)]);
var inst_34067 = (state_34136[(8)]);
var inst_34115__$1 = topic_fn.call(null,inst_34067);
var inst_34116 = cljs.core.deref.call(null,mults);
var inst_34117__$1 = cljs.core.get.call(null,inst_34116,inst_34115__$1);
var state_34136__$1 = (function (){var statearr_34152 = state_34136;
(statearr_34152[(7)] = inst_34115__$1);

(statearr_34152[(11)] = inst_34117__$1);

return statearr_34152;
})();
if(cljs.core.truth_(inst_34117__$1)){
var statearr_34153_34201 = state_34136__$1;
(statearr_34153_34201[(1)] = (19));

} else {
var statearr_34154_34202 = state_34136__$1;
(statearr_34154_34202[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (25))){
var inst_34126 = (state_34136[(2)]);
var state_34136__$1 = state_34136;
var statearr_34155_34203 = state_34136__$1;
(statearr_34155_34203[(2)] = inst_34126);

(statearr_34155_34203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (17))){
var inst_34091 = (state_34136[(10)]);
var inst_34100 = cljs.core.first.call(null,inst_34091);
var inst_34101 = cljs.core.async.muxch_STAR_.call(null,inst_34100);
var inst_34102 = cljs.core.async.close_BANG_.call(null,inst_34101);
var inst_34103 = cljs.core.next.call(null,inst_34091);
var inst_34077 = inst_34103;
var inst_34078 = null;
var inst_34079 = (0);
var inst_34080 = (0);
var state_34136__$1 = (function (){var statearr_34156 = state_34136;
(statearr_34156[(12)] = inst_34077);

(statearr_34156[(13)] = inst_34080);

(statearr_34156[(14)] = inst_34079);

(statearr_34156[(15)] = inst_34102);

(statearr_34156[(16)] = inst_34078);

return statearr_34156;
})();
var statearr_34157_34204 = state_34136__$1;
(statearr_34157_34204[(2)] = null);

(statearr_34157_34204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (3))){
var inst_34134 = (state_34136[(2)]);
var state_34136__$1 = state_34136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34136__$1,inst_34134);
} else {
if((state_val_34137 === (12))){
var inst_34111 = (state_34136[(2)]);
var state_34136__$1 = state_34136;
var statearr_34158_34205 = state_34136__$1;
(statearr_34158_34205[(2)] = inst_34111);

(statearr_34158_34205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (2))){
var state_34136__$1 = state_34136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34136__$1,(4),ch);
} else {
if((state_val_34137 === (23))){
var state_34136__$1 = state_34136;
var statearr_34159_34206 = state_34136__$1;
(statearr_34159_34206[(2)] = null);

(statearr_34159_34206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (19))){
var inst_34117 = (state_34136[(11)]);
var inst_34067 = (state_34136[(8)]);
var inst_34119 = cljs.core.async.muxch_STAR_.call(null,inst_34117);
var state_34136__$1 = state_34136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34136__$1,(22),inst_34119,inst_34067);
} else {
if((state_val_34137 === (11))){
var inst_34091 = (state_34136[(10)]);
var inst_34077 = (state_34136[(12)]);
var inst_34091__$1 = cljs.core.seq.call(null,inst_34077);
var state_34136__$1 = (function (){var statearr_34160 = state_34136;
(statearr_34160[(10)] = inst_34091__$1);

return statearr_34160;
})();
if(inst_34091__$1){
var statearr_34161_34207 = state_34136__$1;
(statearr_34161_34207[(1)] = (13));

} else {
var statearr_34162_34208 = state_34136__$1;
(statearr_34162_34208[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (9))){
var inst_34113 = (state_34136[(2)]);
var state_34136__$1 = state_34136;
var statearr_34163_34209 = state_34136__$1;
(statearr_34163_34209[(2)] = inst_34113);

(statearr_34163_34209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (5))){
var inst_34074 = cljs.core.deref.call(null,mults);
var inst_34075 = cljs.core.vals.call(null,inst_34074);
var inst_34076 = cljs.core.seq.call(null,inst_34075);
var inst_34077 = inst_34076;
var inst_34078 = null;
var inst_34079 = (0);
var inst_34080 = (0);
var state_34136__$1 = (function (){var statearr_34164 = state_34136;
(statearr_34164[(12)] = inst_34077);

(statearr_34164[(13)] = inst_34080);

(statearr_34164[(14)] = inst_34079);

(statearr_34164[(16)] = inst_34078);

return statearr_34164;
})();
var statearr_34165_34210 = state_34136__$1;
(statearr_34165_34210[(2)] = null);

(statearr_34165_34210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (14))){
var state_34136__$1 = state_34136;
var statearr_34169_34211 = state_34136__$1;
(statearr_34169_34211[(2)] = null);

(statearr_34169_34211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (16))){
var inst_34091 = (state_34136[(10)]);
var inst_34095 = cljs.core.chunk_first.call(null,inst_34091);
var inst_34096 = cljs.core.chunk_rest.call(null,inst_34091);
var inst_34097 = cljs.core.count.call(null,inst_34095);
var inst_34077 = inst_34096;
var inst_34078 = inst_34095;
var inst_34079 = inst_34097;
var inst_34080 = (0);
var state_34136__$1 = (function (){var statearr_34170 = state_34136;
(statearr_34170[(12)] = inst_34077);

(statearr_34170[(13)] = inst_34080);

(statearr_34170[(14)] = inst_34079);

(statearr_34170[(16)] = inst_34078);

return statearr_34170;
})();
var statearr_34171_34212 = state_34136__$1;
(statearr_34171_34212[(2)] = null);

(statearr_34171_34212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (10))){
var inst_34077 = (state_34136[(12)]);
var inst_34080 = (state_34136[(13)]);
var inst_34079 = (state_34136[(14)]);
var inst_34078 = (state_34136[(16)]);
var inst_34085 = cljs.core._nth.call(null,inst_34078,inst_34080);
var inst_34086 = cljs.core.async.muxch_STAR_.call(null,inst_34085);
var inst_34087 = cljs.core.async.close_BANG_.call(null,inst_34086);
var inst_34088 = (inst_34080 + (1));
var tmp34166 = inst_34077;
var tmp34167 = inst_34079;
var tmp34168 = inst_34078;
var inst_34077__$1 = tmp34166;
var inst_34078__$1 = tmp34168;
var inst_34079__$1 = tmp34167;
var inst_34080__$1 = inst_34088;
var state_34136__$1 = (function (){var statearr_34172 = state_34136;
(statearr_34172[(12)] = inst_34077__$1);

(statearr_34172[(13)] = inst_34080__$1);

(statearr_34172[(14)] = inst_34079__$1);

(statearr_34172[(17)] = inst_34087);

(statearr_34172[(16)] = inst_34078__$1);

return statearr_34172;
})();
var statearr_34173_34213 = state_34136__$1;
(statearr_34173_34213[(2)] = null);

(statearr_34173_34213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (18))){
var inst_34106 = (state_34136[(2)]);
var state_34136__$1 = state_34136;
var statearr_34174_34214 = state_34136__$1;
(statearr_34174_34214[(2)] = inst_34106);

(statearr_34174_34214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (8))){
var inst_34080 = (state_34136[(13)]);
var inst_34079 = (state_34136[(14)]);
var inst_34082 = (inst_34080 < inst_34079);
var inst_34083 = inst_34082;
var state_34136__$1 = state_34136;
if(cljs.core.truth_(inst_34083)){
var statearr_34175_34215 = state_34136__$1;
(statearr_34175_34215[(1)] = (10));

} else {
var statearr_34176_34216 = state_34136__$1;
(statearr_34176_34216[(1)] = (11));

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
});})(c__19381__auto___34188,mults,ensure_mult,p))
;
return ((function (switch__19360__auto__,c__19381__auto___34188,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_34180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34180[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_34180[(1)] = (1));

return statearr_34180;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_34136){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_34136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e34181){if((e34181 instanceof Object)){
var ex__19364__auto__ = e34181;
var statearr_34182_34217 = state_34136;
(statearr_34182_34217[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34218 = state_34136;
state_34136 = G__34218;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_34136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_34136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___34188,mults,ensure_mult,p))
})();
var state__19383__auto__ = (function (){var statearr_34183 = f__19382__auto__.call(null);
(statearr_34183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___34188);

return statearr_34183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___34188,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args34219 = [];
var len__17416__auto___34222 = arguments.length;
var i__17417__auto___34223 = (0);
while(true){
if((i__17417__auto___34223 < len__17416__auto___34222)){
args34219.push((arguments[i__17417__auto___34223]));

var G__34224 = (i__17417__auto___34223 + (1));
i__17417__auto___34223 = G__34224;
continue;
} else {
}
break;
}

var G__34221 = args34219.length;
switch (G__34221) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34219.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args34226 = [];
var len__17416__auto___34229 = arguments.length;
var i__17417__auto___34230 = (0);
while(true){
if((i__17417__auto___34230 < len__17416__auto___34229)){
args34226.push((arguments[i__17417__auto___34230]));

var G__34231 = (i__17417__auto___34230 + (1));
i__17417__auto___34230 = G__34231;
continue;
} else {
}
break;
}

var G__34228 = args34226.length;
switch (G__34228) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34226.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args34233 = [];
var len__17416__auto___34304 = arguments.length;
var i__17417__auto___34305 = (0);
while(true){
if((i__17417__auto___34305 < len__17416__auto___34304)){
args34233.push((arguments[i__17417__auto___34305]));

var G__34306 = (i__17417__auto___34305 + (1));
i__17417__auto___34305 = G__34306;
continue;
} else {
}
break;
}

var G__34235 = args34233.length;
switch (G__34235) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34233.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19381__auto___34308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___34308,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___34308,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34274){
var state_val_34275 = (state_34274[(1)]);
if((state_val_34275 === (7))){
var state_34274__$1 = state_34274;
var statearr_34276_34309 = state_34274__$1;
(statearr_34276_34309[(2)] = null);

(statearr_34276_34309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (1))){
var state_34274__$1 = state_34274;
var statearr_34277_34310 = state_34274__$1;
(statearr_34277_34310[(2)] = null);

(statearr_34277_34310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (4))){
var inst_34238 = (state_34274[(7)]);
var inst_34240 = (inst_34238 < cnt);
var state_34274__$1 = state_34274;
if(cljs.core.truth_(inst_34240)){
var statearr_34278_34311 = state_34274__$1;
(statearr_34278_34311[(1)] = (6));

} else {
var statearr_34279_34312 = state_34274__$1;
(statearr_34279_34312[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (15))){
var inst_34270 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34280_34313 = state_34274__$1;
(statearr_34280_34313[(2)] = inst_34270);

(statearr_34280_34313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (13))){
var inst_34263 = cljs.core.async.close_BANG_.call(null,out);
var state_34274__$1 = state_34274;
var statearr_34281_34314 = state_34274__$1;
(statearr_34281_34314[(2)] = inst_34263);

(statearr_34281_34314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (6))){
var state_34274__$1 = state_34274;
var statearr_34282_34315 = state_34274__$1;
(statearr_34282_34315[(2)] = null);

(statearr_34282_34315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (3))){
var inst_34272 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34274__$1,inst_34272);
} else {
if((state_val_34275 === (12))){
var inst_34260 = (state_34274[(8)]);
var inst_34260__$1 = (state_34274[(2)]);
var inst_34261 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34260__$1);
var state_34274__$1 = (function (){var statearr_34283 = state_34274;
(statearr_34283[(8)] = inst_34260__$1);

return statearr_34283;
})();
if(cljs.core.truth_(inst_34261)){
var statearr_34284_34316 = state_34274__$1;
(statearr_34284_34316[(1)] = (13));

} else {
var statearr_34285_34317 = state_34274__$1;
(statearr_34285_34317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (2))){
var inst_34237 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34238 = (0);
var state_34274__$1 = (function (){var statearr_34286 = state_34274;
(statearr_34286[(7)] = inst_34238);

(statearr_34286[(9)] = inst_34237);

return statearr_34286;
})();
var statearr_34287_34318 = state_34274__$1;
(statearr_34287_34318[(2)] = null);

(statearr_34287_34318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (11))){
var inst_34238 = (state_34274[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34274,(10),Object,null,(9));
var inst_34247 = chs__$1.call(null,inst_34238);
var inst_34248 = done.call(null,inst_34238);
var inst_34249 = cljs.core.async.take_BANG_.call(null,inst_34247,inst_34248);
var state_34274__$1 = state_34274;
var statearr_34288_34319 = state_34274__$1;
(statearr_34288_34319[(2)] = inst_34249);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34274__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (9))){
var inst_34238 = (state_34274[(7)]);
var inst_34251 = (state_34274[(2)]);
var inst_34252 = (inst_34238 + (1));
var inst_34238__$1 = inst_34252;
var state_34274__$1 = (function (){var statearr_34289 = state_34274;
(statearr_34289[(7)] = inst_34238__$1);

(statearr_34289[(10)] = inst_34251);

return statearr_34289;
})();
var statearr_34290_34320 = state_34274__$1;
(statearr_34290_34320[(2)] = null);

(statearr_34290_34320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (5))){
var inst_34258 = (state_34274[(2)]);
var state_34274__$1 = (function (){var statearr_34291 = state_34274;
(statearr_34291[(11)] = inst_34258);

return statearr_34291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34274__$1,(12),dchan);
} else {
if((state_val_34275 === (14))){
var inst_34260 = (state_34274[(8)]);
var inst_34265 = cljs.core.apply.call(null,f,inst_34260);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34274__$1,(16),out,inst_34265);
} else {
if((state_val_34275 === (16))){
var inst_34267 = (state_34274[(2)]);
var state_34274__$1 = (function (){var statearr_34292 = state_34274;
(statearr_34292[(12)] = inst_34267);

return statearr_34292;
})();
var statearr_34293_34321 = state_34274__$1;
(statearr_34293_34321[(2)] = null);

(statearr_34293_34321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (10))){
var inst_34242 = (state_34274[(2)]);
var inst_34243 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34274__$1 = (function (){var statearr_34294 = state_34274;
(statearr_34294[(13)] = inst_34242);

return statearr_34294;
})();
var statearr_34295_34322 = state_34274__$1;
(statearr_34295_34322[(2)] = inst_34243);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34274__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (8))){
var inst_34256 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34296_34323 = state_34274__$1;
(statearr_34296_34323[(2)] = inst_34256);

(statearr_34296_34323[(1)] = (5));


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
});})(c__19381__auto___34308,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19360__auto__,c__19381__auto___34308,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_34300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34300[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_34300[(1)] = (1));

return statearr_34300;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_34274){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_34274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e34301){if((e34301 instanceof Object)){
var ex__19364__auto__ = e34301;
var statearr_34302_34324 = state_34274;
(statearr_34302_34324[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34325 = state_34274;
state_34274 = G__34325;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_34274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_34274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___34308,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19383__auto__ = (function (){var statearr_34303 = f__19382__auto__.call(null);
(statearr_34303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___34308);

return statearr_34303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___34308,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args34327 = [];
var len__17416__auto___34383 = arguments.length;
var i__17417__auto___34384 = (0);
while(true){
if((i__17417__auto___34384 < len__17416__auto___34383)){
args34327.push((arguments[i__17417__auto___34384]));

var G__34385 = (i__17417__auto___34384 + (1));
i__17417__auto___34384 = G__34385;
continue;
} else {
}
break;
}

var G__34329 = args34327.length;
switch (G__34329) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34327.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___34387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___34387,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___34387,out){
return (function (state_34359){
var state_val_34360 = (state_34359[(1)]);
if((state_val_34360 === (7))){
var inst_34338 = (state_34359[(7)]);
var inst_34339 = (state_34359[(8)]);
var inst_34338__$1 = (state_34359[(2)]);
var inst_34339__$1 = cljs.core.nth.call(null,inst_34338__$1,(0),null);
var inst_34340 = cljs.core.nth.call(null,inst_34338__$1,(1),null);
var inst_34341 = (inst_34339__$1 == null);
var state_34359__$1 = (function (){var statearr_34361 = state_34359;
(statearr_34361[(7)] = inst_34338__$1);

(statearr_34361[(8)] = inst_34339__$1);

(statearr_34361[(9)] = inst_34340);

return statearr_34361;
})();
if(cljs.core.truth_(inst_34341)){
var statearr_34362_34388 = state_34359__$1;
(statearr_34362_34388[(1)] = (8));

} else {
var statearr_34363_34389 = state_34359__$1;
(statearr_34363_34389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (1))){
var inst_34330 = cljs.core.vec.call(null,chs);
var inst_34331 = inst_34330;
var state_34359__$1 = (function (){var statearr_34364 = state_34359;
(statearr_34364[(10)] = inst_34331);

return statearr_34364;
})();
var statearr_34365_34390 = state_34359__$1;
(statearr_34365_34390[(2)] = null);

(statearr_34365_34390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (4))){
var inst_34331 = (state_34359[(10)]);
var state_34359__$1 = state_34359;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34359__$1,(7),inst_34331);
} else {
if((state_val_34360 === (6))){
var inst_34355 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
var statearr_34366_34391 = state_34359__$1;
(statearr_34366_34391[(2)] = inst_34355);

(statearr_34366_34391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (3))){
var inst_34357 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34359__$1,inst_34357);
} else {
if((state_val_34360 === (2))){
var inst_34331 = (state_34359[(10)]);
var inst_34333 = cljs.core.count.call(null,inst_34331);
var inst_34334 = (inst_34333 > (0));
var state_34359__$1 = state_34359;
if(cljs.core.truth_(inst_34334)){
var statearr_34368_34392 = state_34359__$1;
(statearr_34368_34392[(1)] = (4));

} else {
var statearr_34369_34393 = state_34359__$1;
(statearr_34369_34393[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (11))){
var inst_34331 = (state_34359[(10)]);
var inst_34348 = (state_34359[(2)]);
var tmp34367 = inst_34331;
var inst_34331__$1 = tmp34367;
var state_34359__$1 = (function (){var statearr_34370 = state_34359;
(statearr_34370[(11)] = inst_34348);

(statearr_34370[(10)] = inst_34331__$1);

return statearr_34370;
})();
var statearr_34371_34394 = state_34359__$1;
(statearr_34371_34394[(2)] = null);

(statearr_34371_34394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (9))){
var inst_34339 = (state_34359[(8)]);
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34359__$1,(11),out,inst_34339);
} else {
if((state_val_34360 === (5))){
var inst_34353 = cljs.core.async.close_BANG_.call(null,out);
var state_34359__$1 = state_34359;
var statearr_34372_34395 = state_34359__$1;
(statearr_34372_34395[(2)] = inst_34353);

(statearr_34372_34395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (10))){
var inst_34351 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
var statearr_34373_34396 = state_34359__$1;
(statearr_34373_34396[(2)] = inst_34351);

(statearr_34373_34396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (8))){
var inst_34338 = (state_34359[(7)]);
var inst_34339 = (state_34359[(8)]);
var inst_34340 = (state_34359[(9)]);
var inst_34331 = (state_34359[(10)]);
var inst_34343 = (function (){var cs = inst_34331;
var vec__34336 = inst_34338;
var v = inst_34339;
var c = inst_34340;
return ((function (cs,vec__34336,v,c,inst_34338,inst_34339,inst_34340,inst_34331,state_val_34360,c__19381__auto___34387,out){
return (function (p1__34326_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34326_SHARP_);
});
;})(cs,vec__34336,v,c,inst_34338,inst_34339,inst_34340,inst_34331,state_val_34360,c__19381__auto___34387,out))
})();
var inst_34344 = cljs.core.filterv.call(null,inst_34343,inst_34331);
var inst_34331__$1 = inst_34344;
var state_34359__$1 = (function (){var statearr_34374 = state_34359;
(statearr_34374[(10)] = inst_34331__$1);

return statearr_34374;
})();
var statearr_34375_34397 = state_34359__$1;
(statearr_34375_34397[(2)] = null);

(statearr_34375_34397[(1)] = (2));


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
});})(c__19381__auto___34387,out))
;
return ((function (switch__19360__auto__,c__19381__auto___34387,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_34379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34379[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_34379[(1)] = (1));

return statearr_34379;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_34359){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_34359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e34380){if((e34380 instanceof Object)){
var ex__19364__auto__ = e34380;
var statearr_34381_34398 = state_34359;
(statearr_34381_34398[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34399 = state_34359;
state_34359 = G__34399;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_34359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_34359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___34387,out))
})();
var state__19383__auto__ = (function (){var statearr_34382 = f__19382__auto__.call(null);
(statearr_34382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___34387);

return statearr_34382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___34387,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args34400 = [];
var len__17416__auto___34449 = arguments.length;
var i__17417__auto___34450 = (0);
while(true){
if((i__17417__auto___34450 < len__17416__auto___34449)){
args34400.push((arguments[i__17417__auto___34450]));

var G__34451 = (i__17417__auto___34450 + (1));
i__17417__auto___34450 = G__34451;
continue;
} else {
}
break;
}

var G__34402 = args34400.length;
switch (G__34402) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34400.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___34453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___34453,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___34453,out){
return (function (state_34426){
var state_val_34427 = (state_34426[(1)]);
if((state_val_34427 === (7))){
var inst_34408 = (state_34426[(7)]);
var inst_34408__$1 = (state_34426[(2)]);
var inst_34409 = (inst_34408__$1 == null);
var inst_34410 = cljs.core.not.call(null,inst_34409);
var state_34426__$1 = (function (){var statearr_34428 = state_34426;
(statearr_34428[(7)] = inst_34408__$1);

return statearr_34428;
})();
if(inst_34410){
var statearr_34429_34454 = state_34426__$1;
(statearr_34429_34454[(1)] = (8));

} else {
var statearr_34430_34455 = state_34426__$1;
(statearr_34430_34455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (1))){
var inst_34403 = (0);
var state_34426__$1 = (function (){var statearr_34431 = state_34426;
(statearr_34431[(8)] = inst_34403);

return statearr_34431;
})();
var statearr_34432_34456 = state_34426__$1;
(statearr_34432_34456[(2)] = null);

(statearr_34432_34456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (4))){
var state_34426__$1 = state_34426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34426__$1,(7),ch);
} else {
if((state_val_34427 === (6))){
var inst_34421 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34433_34457 = state_34426__$1;
(statearr_34433_34457[(2)] = inst_34421);

(statearr_34433_34457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (3))){
var inst_34423 = (state_34426[(2)]);
var inst_34424 = cljs.core.async.close_BANG_.call(null,out);
var state_34426__$1 = (function (){var statearr_34434 = state_34426;
(statearr_34434[(9)] = inst_34423);

return statearr_34434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34426__$1,inst_34424);
} else {
if((state_val_34427 === (2))){
var inst_34403 = (state_34426[(8)]);
var inst_34405 = (inst_34403 < n);
var state_34426__$1 = state_34426;
if(cljs.core.truth_(inst_34405)){
var statearr_34435_34458 = state_34426__$1;
(statearr_34435_34458[(1)] = (4));

} else {
var statearr_34436_34459 = state_34426__$1;
(statearr_34436_34459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (11))){
var inst_34403 = (state_34426[(8)]);
var inst_34413 = (state_34426[(2)]);
var inst_34414 = (inst_34403 + (1));
var inst_34403__$1 = inst_34414;
var state_34426__$1 = (function (){var statearr_34437 = state_34426;
(statearr_34437[(8)] = inst_34403__$1);

(statearr_34437[(10)] = inst_34413);

return statearr_34437;
})();
var statearr_34438_34460 = state_34426__$1;
(statearr_34438_34460[(2)] = null);

(statearr_34438_34460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (9))){
var state_34426__$1 = state_34426;
var statearr_34439_34461 = state_34426__$1;
(statearr_34439_34461[(2)] = null);

(statearr_34439_34461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (5))){
var state_34426__$1 = state_34426;
var statearr_34440_34462 = state_34426__$1;
(statearr_34440_34462[(2)] = null);

(statearr_34440_34462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (10))){
var inst_34418 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34441_34463 = state_34426__$1;
(statearr_34441_34463[(2)] = inst_34418);

(statearr_34441_34463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (8))){
var inst_34408 = (state_34426[(7)]);
var state_34426__$1 = state_34426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34426__$1,(11),out,inst_34408);
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
});})(c__19381__auto___34453,out))
;
return ((function (switch__19360__auto__,c__19381__auto___34453,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_34445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34445[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_34445[(1)] = (1));

return statearr_34445;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_34426){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_34426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e34446){if((e34446 instanceof Object)){
var ex__19364__auto__ = e34446;
var statearr_34447_34464 = state_34426;
(statearr_34447_34464[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34465 = state_34426;
state_34426 = G__34465;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_34426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_34426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___34453,out))
})();
var state__19383__auto__ = (function (){var statearr_34448 = f__19382__auto__.call(null);
(statearr_34448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___34453);

return statearr_34448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___34453,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34473 = (function (map_LT_,f,ch,meta34474){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34474 = meta34474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34475,meta34474__$1){
var self__ = this;
var _34475__$1 = this;
return (new cljs.core.async.t_cljs$core$async34473(self__.map_LT_,self__.f,self__.ch,meta34474__$1));
});

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34475){
var self__ = this;
var _34475__$1 = this;
return self__.meta34474;
});

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34476 = (function (map_LT_,f,ch,meta34474,_,fn1,meta34477){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34474 = meta34474;
this._ = _;
this.fn1 = fn1;
this.meta34477 = meta34477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34478,meta34477__$1){
var self__ = this;
var _34478__$1 = this;
return (new cljs.core.async.t_cljs$core$async34476(self__.map_LT_,self__.f,self__.ch,self__.meta34474,self__._,self__.fn1,meta34477__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34478){
var self__ = this;
var _34478__$1 = this;
return self__.meta34477;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34466_SHARP_){
return f1.call(null,(((p1__34466_SHARP_ == null))?null:self__.f.call(null,p1__34466_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34476.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34474","meta34474",93334232,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34473","cljs.core.async/t_cljs$core$async34473",1932980890,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34477","meta34477",-940852540,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34476";

cljs.core.async.t_cljs$core$async34476.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async34476");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34476 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34476(map_LT___$1,f__$1,ch__$1,meta34474__$1,___$2,fn1__$1,meta34477){
return (new cljs.core.async.t_cljs$core$async34476(map_LT___$1,f__$1,ch__$1,meta34474__$1,___$2,fn1__$1,meta34477));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34476(self__.map_LT_,self__.f,self__.ch,self__.meta34474,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16346__auto__ = ret;
if(cljs.core.truth_(and__16346__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16346__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34474","meta34474",93334232,null)], null);
});

cljs.core.async.t_cljs$core$async34473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34473";

cljs.core.async.t_cljs$core$async34473.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async34473");
});

cljs.core.async.__GT_t_cljs$core$async34473 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34473(map_LT___$1,f__$1,ch__$1,meta34474){
return (new cljs.core.async.t_cljs$core$async34473(map_LT___$1,f__$1,ch__$1,meta34474));
});

}

return (new cljs.core.async.t_cljs$core$async34473(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34482 = (function (map_GT_,f,ch,meta34483){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34483 = meta34483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34484,meta34483__$1){
var self__ = this;
var _34484__$1 = this;
return (new cljs.core.async.t_cljs$core$async34482(self__.map_GT_,self__.f,self__.ch,meta34483__$1));
});

cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34484){
var self__ = this;
var _34484__$1 = this;
return self__.meta34483;
});

cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34483","meta34483",2012322527,null)], null);
});

cljs.core.async.t_cljs$core$async34482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34482";

cljs.core.async.t_cljs$core$async34482.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async34482");
});

cljs.core.async.__GT_t_cljs$core$async34482 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34482(map_GT___$1,f__$1,ch__$1,meta34483){
return (new cljs.core.async.t_cljs$core$async34482(map_GT___$1,f__$1,ch__$1,meta34483));
});

}

return (new cljs.core.async.t_cljs$core$async34482(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34488 = (function (filter_GT_,p,ch,meta34489){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34489 = meta34489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34490,meta34489__$1){
var self__ = this;
var _34490__$1 = this;
return (new cljs.core.async.t_cljs$core$async34488(self__.filter_GT_,self__.p,self__.ch,meta34489__$1));
});

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34490){
var self__ = this;
var _34490__$1 = this;
return self__.meta34489;
});

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34489","meta34489",561498808,null)], null);
});

cljs.core.async.t_cljs$core$async34488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34488";

cljs.core.async.t_cljs$core$async34488.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async34488");
});

cljs.core.async.__GT_t_cljs$core$async34488 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34488(filter_GT___$1,p__$1,ch__$1,meta34489){
return (new cljs.core.async.t_cljs$core$async34488(filter_GT___$1,p__$1,ch__$1,meta34489));
});

}

return (new cljs.core.async.t_cljs$core$async34488(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args34491 = [];
var len__17416__auto___34535 = arguments.length;
var i__17417__auto___34536 = (0);
while(true){
if((i__17417__auto___34536 < len__17416__auto___34535)){
args34491.push((arguments[i__17417__auto___34536]));

var G__34537 = (i__17417__auto___34536 + (1));
i__17417__auto___34536 = G__34537;
continue;
} else {
}
break;
}

var G__34493 = args34491.length;
switch (G__34493) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34491.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___34539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___34539,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___34539,out){
return (function (state_34514){
var state_val_34515 = (state_34514[(1)]);
if((state_val_34515 === (7))){
var inst_34510 = (state_34514[(2)]);
var state_34514__$1 = state_34514;
var statearr_34516_34540 = state_34514__$1;
(statearr_34516_34540[(2)] = inst_34510);

(statearr_34516_34540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (1))){
var state_34514__$1 = state_34514;
var statearr_34517_34541 = state_34514__$1;
(statearr_34517_34541[(2)] = null);

(statearr_34517_34541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (4))){
var inst_34496 = (state_34514[(7)]);
var inst_34496__$1 = (state_34514[(2)]);
var inst_34497 = (inst_34496__$1 == null);
var state_34514__$1 = (function (){var statearr_34518 = state_34514;
(statearr_34518[(7)] = inst_34496__$1);

return statearr_34518;
})();
if(cljs.core.truth_(inst_34497)){
var statearr_34519_34542 = state_34514__$1;
(statearr_34519_34542[(1)] = (5));

} else {
var statearr_34520_34543 = state_34514__$1;
(statearr_34520_34543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (6))){
var inst_34496 = (state_34514[(7)]);
var inst_34501 = p.call(null,inst_34496);
var state_34514__$1 = state_34514;
if(cljs.core.truth_(inst_34501)){
var statearr_34521_34544 = state_34514__$1;
(statearr_34521_34544[(1)] = (8));

} else {
var statearr_34522_34545 = state_34514__$1;
(statearr_34522_34545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (3))){
var inst_34512 = (state_34514[(2)]);
var state_34514__$1 = state_34514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34514__$1,inst_34512);
} else {
if((state_val_34515 === (2))){
var state_34514__$1 = state_34514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34514__$1,(4),ch);
} else {
if((state_val_34515 === (11))){
var inst_34504 = (state_34514[(2)]);
var state_34514__$1 = state_34514;
var statearr_34523_34546 = state_34514__$1;
(statearr_34523_34546[(2)] = inst_34504);

(statearr_34523_34546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (9))){
var state_34514__$1 = state_34514;
var statearr_34524_34547 = state_34514__$1;
(statearr_34524_34547[(2)] = null);

(statearr_34524_34547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (5))){
var inst_34499 = cljs.core.async.close_BANG_.call(null,out);
var state_34514__$1 = state_34514;
var statearr_34525_34548 = state_34514__$1;
(statearr_34525_34548[(2)] = inst_34499);

(statearr_34525_34548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (10))){
var inst_34507 = (state_34514[(2)]);
var state_34514__$1 = (function (){var statearr_34526 = state_34514;
(statearr_34526[(8)] = inst_34507);

return statearr_34526;
})();
var statearr_34527_34549 = state_34514__$1;
(statearr_34527_34549[(2)] = null);

(statearr_34527_34549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (8))){
var inst_34496 = (state_34514[(7)]);
var state_34514__$1 = state_34514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34514__$1,(11),out,inst_34496);
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
});})(c__19381__auto___34539,out))
;
return ((function (switch__19360__auto__,c__19381__auto___34539,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_34531 = [null,null,null,null,null,null,null,null,null];
(statearr_34531[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_34531[(1)] = (1));

return statearr_34531;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_34514){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_34514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e34532){if((e34532 instanceof Object)){
var ex__19364__auto__ = e34532;
var statearr_34533_34550 = state_34514;
(statearr_34533_34550[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34551 = state_34514;
state_34514 = G__34551;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_34514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_34514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___34539,out))
})();
var state__19383__auto__ = (function (){var statearr_34534 = f__19382__auto__.call(null);
(statearr_34534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___34539);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___34539,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34552 = [];
var len__17416__auto___34555 = arguments.length;
var i__17417__auto___34556 = (0);
while(true){
if((i__17417__auto___34556 < len__17416__auto___34555)){
args34552.push((arguments[i__17417__auto___34556]));

var G__34557 = (i__17417__auto___34556 + (1));
i__17417__auto___34556 = G__34557;
continue;
} else {
}
break;
}

var G__34554 = args34552.length;
switch (G__34554) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34552.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto__){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto__){
return (function (state_34724){
var state_val_34725 = (state_34724[(1)]);
if((state_val_34725 === (7))){
var inst_34720 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34726_34767 = state_34724__$1;
(statearr_34726_34767[(2)] = inst_34720);

(statearr_34726_34767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (20))){
var inst_34690 = (state_34724[(7)]);
var inst_34701 = (state_34724[(2)]);
var inst_34702 = cljs.core.next.call(null,inst_34690);
var inst_34676 = inst_34702;
var inst_34677 = null;
var inst_34678 = (0);
var inst_34679 = (0);
var state_34724__$1 = (function (){var statearr_34727 = state_34724;
(statearr_34727[(8)] = inst_34677);

(statearr_34727[(9)] = inst_34679);

(statearr_34727[(10)] = inst_34678);

(statearr_34727[(11)] = inst_34676);

(statearr_34727[(12)] = inst_34701);

return statearr_34727;
})();
var statearr_34728_34768 = state_34724__$1;
(statearr_34728_34768[(2)] = null);

(statearr_34728_34768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (1))){
var state_34724__$1 = state_34724;
var statearr_34729_34769 = state_34724__$1;
(statearr_34729_34769[(2)] = null);

(statearr_34729_34769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (4))){
var inst_34665 = (state_34724[(13)]);
var inst_34665__$1 = (state_34724[(2)]);
var inst_34666 = (inst_34665__$1 == null);
var state_34724__$1 = (function (){var statearr_34730 = state_34724;
(statearr_34730[(13)] = inst_34665__$1);

return statearr_34730;
})();
if(cljs.core.truth_(inst_34666)){
var statearr_34731_34770 = state_34724__$1;
(statearr_34731_34770[(1)] = (5));

} else {
var statearr_34732_34771 = state_34724__$1;
(statearr_34732_34771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (15))){
var state_34724__$1 = state_34724;
var statearr_34736_34772 = state_34724__$1;
(statearr_34736_34772[(2)] = null);

(statearr_34736_34772[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (21))){
var state_34724__$1 = state_34724;
var statearr_34737_34773 = state_34724__$1;
(statearr_34737_34773[(2)] = null);

(statearr_34737_34773[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (13))){
var inst_34677 = (state_34724[(8)]);
var inst_34679 = (state_34724[(9)]);
var inst_34678 = (state_34724[(10)]);
var inst_34676 = (state_34724[(11)]);
var inst_34686 = (state_34724[(2)]);
var inst_34687 = (inst_34679 + (1));
var tmp34733 = inst_34677;
var tmp34734 = inst_34678;
var tmp34735 = inst_34676;
var inst_34676__$1 = tmp34735;
var inst_34677__$1 = tmp34733;
var inst_34678__$1 = tmp34734;
var inst_34679__$1 = inst_34687;
var state_34724__$1 = (function (){var statearr_34738 = state_34724;
(statearr_34738[(8)] = inst_34677__$1);

(statearr_34738[(9)] = inst_34679__$1);

(statearr_34738[(10)] = inst_34678__$1);

(statearr_34738[(11)] = inst_34676__$1);

(statearr_34738[(14)] = inst_34686);

return statearr_34738;
})();
var statearr_34739_34774 = state_34724__$1;
(statearr_34739_34774[(2)] = null);

(statearr_34739_34774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (22))){
var state_34724__$1 = state_34724;
var statearr_34740_34775 = state_34724__$1;
(statearr_34740_34775[(2)] = null);

(statearr_34740_34775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (6))){
var inst_34665 = (state_34724[(13)]);
var inst_34674 = f.call(null,inst_34665);
var inst_34675 = cljs.core.seq.call(null,inst_34674);
var inst_34676 = inst_34675;
var inst_34677 = null;
var inst_34678 = (0);
var inst_34679 = (0);
var state_34724__$1 = (function (){var statearr_34741 = state_34724;
(statearr_34741[(8)] = inst_34677);

(statearr_34741[(9)] = inst_34679);

(statearr_34741[(10)] = inst_34678);

(statearr_34741[(11)] = inst_34676);

return statearr_34741;
})();
var statearr_34742_34776 = state_34724__$1;
(statearr_34742_34776[(2)] = null);

(statearr_34742_34776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (17))){
var inst_34690 = (state_34724[(7)]);
var inst_34694 = cljs.core.chunk_first.call(null,inst_34690);
var inst_34695 = cljs.core.chunk_rest.call(null,inst_34690);
var inst_34696 = cljs.core.count.call(null,inst_34694);
var inst_34676 = inst_34695;
var inst_34677 = inst_34694;
var inst_34678 = inst_34696;
var inst_34679 = (0);
var state_34724__$1 = (function (){var statearr_34743 = state_34724;
(statearr_34743[(8)] = inst_34677);

(statearr_34743[(9)] = inst_34679);

(statearr_34743[(10)] = inst_34678);

(statearr_34743[(11)] = inst_34676);

return statearr_34743;
})();
var statearr_34744_34777 = state_34724__$1;
(statearr_34744_34777[(2)] = null);

(statearr_34744_34777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (3))){
var inst_34722 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34724__$1,inst_34722);
} else {
if((state_val_34725 === (12))){
var inst_34710 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34745_34778 = state_34724__$1;
(statearr_34745_34778[(2)] = inst_34710);

(statearr_34745_34778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (2))){
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34724__$1,(4),in$);
} else {
if((state_val_34725 === (23))){
var inst_34718 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34746_34779 = state_34724__$1;
(statearr_34746_34779[(2)] = inst_34718);

(statearr_34746_34779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (19))){
var inst_34705 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34747_34780 = state_34724__$1;
(statearr_34747_34780[(2)] = inst_34705);

(statearr_34747_34780[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (11))){
var inst_34690 = (state_34724[(7)]);
var inst_34676 = (state_34724[(11)]);
var inst_34690__$1 = cljs.core.seq.call(null,inst_34676);
var state_34724__$1 = (function (){var statearr_34748 = state_34724;
(statearr_34748[(7)] = inst_34690__$1);

return statearr_34748;
})();
if(inst_34690__$1){
var statearr_34749_34781 = state_34724__$1;
(statearr_34749_34781[(1)] = (14));

} else {
var statearr_34750_34782 = state_34724__$1;
(statearr_34750_34782[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (9))){
var inst_34712 = (state_34724[(2)]);
var inst_34713 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34724__$1 = (function (){var statearr_34751 = state_34724;
(statearr_34751[(15)] = inst_34712);

return statearr_34751;
})();
if(cljs.core.truth_(inst_34713)){
var statearr_34752_34783 = state_34724__$1;
(statearr_34752_34783[(1)] = (21));

} else {
var statearr_34753_34784 = state_34724__$1;
(statearr_34753_34784[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (5))){
var inst_34668 = cljs.core.async.close_BANG_.call(null,out);
var state_34724__$1 = state_34724;
var statearr_34754_34785 = state_34724__$1;
(statearr_34754_34785[(2)] = inst_34668);

(statearr_34754_34785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (14))){
var inst_34690 = (state_34724[(7)]);
var inst_34692 = cljs.core.chunked_seq_QMARK_.call(null,inst_34690);
var state_34724__$1 = state_34724;
if(inst_34692){
var statearr_34755_34786 = state_34724__$1;
(statearr_34755_34786[(1)] = (17));

} else {
var statearr_34756_34787 = state_34724__$1;
(statearr_34756_34787[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (16))){
var inst_34708 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34757_34788 = state_34724__$1;
(statearr_34757_34788[(2)] = inst_34708);

(statearr_34757_34788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (10))){
var inst_34677 = (state_34724[(8)]);
var inst_34679 = (state_34724[(9)]);
var inst_34684 = cljs.core._nth.call(null,inst_34677,inst_34679);
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34724__$1,(13),out,inst_34684);
} else {
if((state_val_34725 === (18))){
var inst_34690 = (state_34724[(7)]);
var inst_34699 = cljs.core.first.call(null,inst_34690);
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34724__$1,(20),out,inst_34699);
} else {
if((state_val_34725 === (8))){
var inst_34679 = (state_34724[(9)]);
var inst_34678 = (state_34724[(10)]);
var inst_34681 = (inst_34679 < inst_34678);
var inst_34682 = inst_34681;
var state_34724__$1 = state_34724;
if(cljs.core.truth_(inst_34682)){
var statearr_34758_34789 = state_34724__$1;
(statearr_34758_34789[(1)] = (10));

} else {
var statearr_34759_34790 = state_34724__$1;
(statearr_34759_34790[(1)] = (11));

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
});})(c__19381__auto__))
;
return ((function (switch__19360__auto__,c__19381__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_34763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34763[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__);

(statearr_34763[(1)] = (1));

return statearr_34763;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____1 = (function (state_34724){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_34724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e34764){if((e34764 instanceof Object)){
var ex__19364__auto__ = e34764;
var statearr_34765_34791 = state_34724;
(statearr_34765_34791[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34792 = state_34724;
state_34724 = G__34792;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__ = function(state_34724){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____1.call(this,state_34724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__))
})();
var state__19383__auto__ = (function (){var statearr_34766 = f__19382__auto__.call(null);
(statearr_34766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_34766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto__))
);

return c__19381__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34793 = [];
var len__17416__auto___34796 = arguments.length;
var i__17417__auto___34797 = (0);
while(true){
if((i__17417__auto___34797 < len__17416__auto___34796)){
args34793.push((arguments[i__17417__auto___34797]));

var G__34798 = (i__17417__auto___34797 + (1));
i__17417__auto___34797 = G__34798;
continue;
} else {
}
break;
}

var G__34795 = args34793.length;
switch (G__34795) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34793.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args34800 = [];
var len__17416__auto___34803 = arguments.length;
var i__17417__auto___34804 = (0);
while(true){
if((i__17417__auto___34804 < len__17416__auto___34803)){
args34800.push((arguments[i__17417__auto___34804]));

var G__34805 = (i__17417__auto___34804 + (1));
i__17417__auto___34804 = G__34805;
continue;
} else {
}
break;
}

var G__34802 = args34800.length;
switch (G__34802) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34800.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args34807 = [];
var len__17416__auto___34858 = arguments.length;
var i__17417__auto___34859 = (0);
while(true){
if((i__17417__auto___34859 < len__17416__auto___34858)){
args34807.push((arguments[i__17417__auto___34859]));

var G__34860 = (i__17417__auto___34859 + (1));
i__17417__auto___34859 = G__34860;
continue;
} else {
}
break;
}

var G__34809 = args34807.length;
switch (G__34809) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34807.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___34862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___34862,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___34862,out){
return (function (state_34833){
var state_val_34834 = (state_34833[(1)]);
if((state_val_34834 === (7))){
var inst_34828 = (state_34833[(2)]);
var state_34833__$1 = state_34833;
var statearr_34835_34863 = state_34833__$1;
(statearr_34835_34863[(2)] = inst_34828);

(statearr_34835_34863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34834 === (1))){
var inst_34810 = null;
var state_34833__$1 = (function (){var statearr_34836 = state_34833;
(statearr_34836[(7)] = inst_34810);

return statearr_34836;
})();
var statearr_34837_34864 = state_34833__$1;
(statearr_34837_34864[(2)] = null);

(statearr_34837_34864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34834 === (4))){
var inst_34813 = (state_34833[(8)]);
var inst_34813__$1 = (state_34833[(2)]);
var inst_34814 = (inst_34813__$1 == null);
var inst_34815 = cljs.core.not.call(null,inst_34814);
var state_34833__$1 = (function (){var statearr_34838 = state_34833;
(statearr_34838[(8)] = inst_34813__$1);

return statearr_34838;
})();
if(inst_34815){
var statearr_34839_34865 = state_34833__$1;
(statearr_34839_34865[(1)] = (5));

} else {
var statearr_34840_34866 = state_34833__$1;
(statearr_34840_34866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34834 === (6))){
var state_34833__$1 = state_34833;
var statearr_34841_34867 = state_34833__$1;
(statearr_34841_34867[(2)] = null);

(statearr_34841_34867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34834 === (3))){
var inst_34830 = (state_34833[(2)]);
var inst_34831 = cljs.core.async.close_BANG_.call(null,out);
var state_34833__$1 = (function (){var statearr_34842 = state_34833;
(statearr_34842[(9)] = inst_34830);

return statearr_34842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34833__$1,inst_34831);
} else {
if((state_val_34834 === (2))){
var state_34833__$1 = state_34833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34833__$1,(4),ch);
} else {
if((state_val_34834 === (11))){
var inst_34813 = (state_34833[(8)]);
var inst_34822 = (state_34833[(2)]);
var inst_34810 = inst_34813;
var state_34833__$1 = (function (){var statearr_34843 = state_34833;
(statearr_34843[(7)] = inst_34810);

(statearr_34843[(10)] = inst_34822);

return statearr_34843;
})();
var statearr_34844_34868 = state_34833__$1;
(statearr_34844_34868[(2)] = null);

(statearr_34844_34868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34834 === (9))){
var inst_34813 = (state_34833[(8)]);
var state_34833__$1 = state_34833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34833__$1,(11),out,inst_34813);
} else {
if((state_val_34834 === (5))){
var inst_34810 = (state_34833[(7)]);
var inst_34813 = (state_34833[(8)]);
var inst_34817 = cljs.core._EQ_.call(null,inst_34813,inst_34810);
var state_34833__$1 = state_34833;
if(inst_34817){
var statearr_34846_34869 = state_34833__$1;
(statearr_34846_34869[(1)] = (8));

} else {
var statearr_34847_34870 = state_34833__$1;
(statearr_34847_34870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34834 === (10))){
var inst_34825 = (state_34833[(2)]);
var state_34833__$1 = state_34833;
var statearr_34848_34871 = state_34833__$1;
(statearr_34848_34871[(2)] = inst_34825);

(statearr_34848_34871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34834 === (8))){
var inst_34810 = (state_34833[(7)]);
var tmp34845 = inst_34810;
var inst_34810__$1 = tmp34845;
var state_34833__$1 = (function (){var statearr_34849 = state_34833;
(statearr_34849[(7)] = inst_34810__$1);

return statearr_34849;
})();
var statearr_34850_34872 = state_34833__$1;
(statearr_34850_34872[(2)] = null);

(statearr_34850_34872[(1)] = (2));


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
});})(c__19381__auto___34862,out))
;
return ((function (switch__19360__auto__,c__19381__auto___34862,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_34854 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34854[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_34854[(1)] = (1));

return statearr_34854;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_34833){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_34833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e34855){if((e34855 instanceof Object)){
var ex__19364__auto__ = e34855;
var statearr_34856_34873 = state_34833;
(statearr_34856_34873[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34874 = state_34833;
state_34833 = G__34874;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_34833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_34833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___34862,out))
})();
var state__19383__auto__ = (function (){var statearr_34857 = f__19382__auto__.call(null);
(statearr_34857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___34862);

return statearr_34857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___34862,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34875 = [];
var len__17416__auto___34945 = arguments.length;
var i__17417__auto___34946 = (0);
while(true){
if((i__17417__auto___34946 < len__17416__auto___34945)){
args34875.push((arguments[i__17417__auto___34946]));

var G__34947 = (i__17417__auto___34946 + (1));
i__17417__auto___34946 = G__34947;
continue;
} else {
}
break;
}

var G__34877 = args34875.length;
switch (G__34877) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34875.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___34949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___34949,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___34949,out){
return (function (state_34915){
var state_val_34916 = (state_34915[(1)]);
if((state_val_34916 === (7))){
var inst_34911 = (state_34915[(2)]);
var state_34915__$1 = state_34915;
var statearr_34917_34950 = state_34915__$1;
(statearr_34917_34950[(2)] = inst_34911);

(statearr_34917_34950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34916 === (1))){
var inst_34878 = (new Array(n));
var inst_34879 = inst_34878;
var inst_34880 = (0);
var state_34915__$1 = (function (){var statearr_34918 = state_34915;
(statearr_34918[(7)] = inst_34879);

(statearr_34918[(8)] = inst_34880);

return statearr_34918;
})();
var statearr_34919_34951 = state_34915__$1;
(statearr_34919_34951[(2)] = null);

(statearr_34919_34951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34916 === (4))){
var inst_34883 = (state_34915[(9)]);
var inst_34883__$1 = (state_34915[(2)]);
var inst_34884 = (inst_34883__$1 == null);
var inst_34885 = cljs.core.not.call(null,inst_34884);
var state_34915__$1 = (function (){var statearr_34920 = state_34915;
(statearr_34920[(9)] = inst_34883__$1);

return statearr_34920;
})();
if(inst_34885){
var statearr_34921_34952 = state_34915__$1;
(statearr_34921_34952[(1)] = (5));

} else {
var statearr_34922_34953 = state_34915__$1;
(statearr_34922_34953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34916 === (15))){
var inst_34905 = (state_34915[(2)]);
var state_34915__$1 = state_34915;
var statearr_34923_34954 = state_34915__$1;
(statearr_34923_34954[(2)] = inst_34905);

(statearr_34923_34954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34916 === (13))){
var state_34915__$1 = state_34915;
var statearr_34924_34955 = state_34915__$1;
(statearr_34924_34955[(2)] = null);

(statearr_34924_34955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34916 === (6))){
var inst_34880 = (state_34915[(8)]);
var inst_34901 = (inst_34880 > (0));
var state_34915__$1 = state_34915;
if(cljs.core.truth_(inst_34901)){
var statearr_34925_34956 = state_34915__$1;
(statearr_34925_34956[(1)] = (12));

} else {
var statearr_34926_34957 = state_34915__$1;
(statearr_34926_34957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34916 === (3))){
var inst_34913 = (state_34915[(2)]);
var state_34915__$1 = state_34915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34915__$1,inst_34913);
} else {
if((state_val_34916 === (12))){
var inst_34879 = (state_34915[(7)]);
var inst_34903 = cljs.core.vec.call(null,inst_34879);
var state_34915__$1 = state_34915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34915__$1,(15),out,inst_34903);
} else {
if((state_val_34916 === (2))){
var state_34915__$1 = state_34915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34915__$1,(4),ch);
} else {
if((state_val_34916 === (11))){
var inst_34895 = (state_34915[(2)]);
var inst_34896 = (new Array(n));
var inst_34879 = inst_34896;
var inst_34880 = (0);
var state_34915__$1 = (function (){var statearr_34927 = state_34915;
(statearr_34927[(7)] = inst_34879);

(statearr_34927[(10)] = inst_34895);

(statearr_34927[(8)] = inst_34880);

return statearr_34927;
})();
var statearr_34928_34958 = state_34915__$1;
(statearr_34928_34958[(2)] = null);

(statearr_34928_34958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34916 === (9))){
var inst_34879 = (state_34915[(7)]);
var inst_34893 = cljs.core.vec.call(null,inst_34879);
var state_34915__$1 = state_34915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34915__$1,(11),out,inst_34893);
} else {
if((state_val_34916 === (5))){
var inst_34879 = (state_34915[(7)]);
var inst_34883 = (state_34915[(9)]);
var inst_34880 = (state_34915[(8)]);
var inst_34888 = (state_34915[(11)]);
var inst_34887 = (inst_34879[inst_34880] = inst_34883);
var inst_34888__$1 = (inst_34880 + (1));
var inst_34889 = (inst_34888__$1 < n);
var state_34915__$1 = (function (){var statearr_34929 = state_34915;
(statearr_34929[(11)] = inst_34888__$1);

(statearr_34929[(12)] = inst_34887);

return statearr_34929;
})();
if(cljs.core.truth_(inst_34889)){
var statearr_34930_34959 = state_34915__$1;
(statearr_34930_34959[(1)] = (8));

} else {
var statearr_34931_34960 = state_34915__$1;
(statearr_34931_34960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34916 === (14))){
var inst_34908 = (state_34915[(2)]);
var inst_34909 = cljs.core.async.close_BANG_.call(null,out);
var state_34915__$1 = (function (){var statearr_34933 = state_34915;
(statearr_34933[(13)] = inst_34908);

return statearr_34933;
})();
var statearr_34934_34961 = state_34915__$1;
(statearr_34934_34961[(2)] = inst_34909);

(statearr_34934_34961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34916 === (10))){
var inst_34899 = (state_34915[(2)]);
var state_34915__$1 = state_34915;
var statearr_34935_34962 = state_34915__$1;
(statearr_34935_34962[(2)] = inst_34899);

(statearr_34935_34962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34916 === (8))){
var inst_34879 = (state_34915[(7)]);
var inst_34888 = (state_34915[(11)]);
var tmp34932 = inst_34879;
var inst_34879__$1 = tmp34932;
var inst_34880 = inst_34888;
var state_34915__$1 = (function (){var statearr_34936 = state_34915;
(statearr_34936[(7)] = inst_34879__$1);

(statearr_34936[(8)] = inst_34880);

return statearr_34936;
})();
var statearr_34937_34963 = state_34915__$1;
(statearr_34937_34963[(2)] = null);

(statearr_34937_34963[(1)] = (2));


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
});})(c__19381__auto___34949,out))
;
return ((function (switch__19360__auto__,c__19381__auto___34949,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_34941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34941[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_34941[(1)] = (1));

return statearr_34941;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_34915){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_34915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e34942){if((e34942 instanceof Object)){
var ex__19364__auto__ = e34942;
var statearr_34943_34964 = state_34915;
(statearr_34943_34964[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34965 = state_34915;
state_34915 = G__34965;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_34915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_34915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___34949,out))
})();
var state__19383__auto__ = (function (){var statearr_34944 = f__19382__auto__.call(null);
(statearr_34944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___34949);

return statearr_34944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___34949,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34966 = [];
var len__17416__auto___35040 = arguments.length;
var i__17417__auto___35041 = (0);
while(true){
if((i__17417__auto___35041 < len__17416__auto___35040)){
args34966.push((arguments[i__17417__auto___35041]));

var G__35042 = (i__17417__auto___35041 + (1));
i__17417__auto___35041 = G__35042;
continue;
} else {
}
break;
}

var G__34968 = args34966.length;
switch (G__34968) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34966.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___35044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___35044,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___35044,out){
return (function (state_35010){
var state_val_35011 = (state_35010[(1)]);
if((state_val_35011 === (7))){
var inst_35006 = (state_35010[(2)]);
var state_35010__$1 = state_35010;
var statearr_35012_35045 = state_35010__$1;
(statearr_35012_35045[(2)] = inst_35006);

(statearr_35012_35045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35011 === (1))){
var inst_34969 = [];
var inst_34970 = inst_34969;
var inst_34971 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35010__$1 = (function (){var statearr_35013 = state_35010;
(statearr_35013[(7)] = inst_34971);

(statearr_35013[(8)] = inst_34970);

return statearr_35013;
})();
var statearr_35014_35046 = state_35010__$1;
(statearr_35014_35046[(2)] = null);

(statearr_35014_35046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35011 === (4))){
var inst_34974 = (state_35010[(9)]);
var inst_34974__$1 = (state_35010[(2)]);
var inst_34975 = (inst_34974__$1 == null);
var inst_34976 = cljs.core.not.call(null,inst_34975);
var state_35010__$1 = (function (){var statearr_35015 = state_35010;
(statearr_35015[(9)] = inst_34974__$1);

return statearr_35015;
})();
if(inst_34976){
var statearr_35016_35047 = state_35010__$1;
(statearr_35016_35047[(1)] = (5));

} else {
var statearr_35017_35048 = state_35010__$1;
(statearr_35017_35048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35011 === (15))){
var inst_35000 = (state_35010[(2)]);
var state_35010__$1 = state_35010;
var statearr_35018_35049 = state_35010__$1;
(statearr_35018_35049[(2)] = inst_35000);

(statearr_35018_35049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35011 === (13))){
var state_35010__$1 = state_35010;
var statearr_35019_35050 = state_35010__$1;
(statearr_35019_35050[(2)] = null);

(statearr_35019_35050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35011 === (6))){
var inst_34970 = (state_35010[(8)]);
var inst_34995 = inst_34970.length;
var inst_34996 = (inst_34995 > (0));
var state_35010__$1 = state_35010;
if(cljs.core.truth_(inst_34996)){
var statearr_35020_35051 = state_35010__$1;
(statearr_35020_35051[(1)] = (12));

} else {
var statearr_35021_35052 = state_35010__$1;
(statearr_35021_35052[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35011 === (3))){
var inst_35008 = (state_35010[(2)]);
var state_35010__$1 = state_35010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35010__$1,inst_35008);
} else {
if((state_val_35011 === (12))){
var inst_34970 = (state_35010[(8)]);
var inst_34998 = cljs.core.vec.call(null,inst_34970);
var state_35010__$1 = state_35010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35010__$1,(15),out,inst_34998);
} else {
if((state_val_35011 === (2))){
var state_35010__$1 = state_35010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35010__$1,(4),ch);
} else {
if((state_val_35011 === (11))){
var inst_34974 = (state_35010[(9)]);
var inst_34978 = (state_35010[(10)]);
var inst_34988 = (state_35010[(2)]);
var inst_34989 = [];
var inst_34990 = inst_34989.push(inst_34974);
var inst_34970 = inst_34989;
var inst_34971 = inst_34978;
var state_35010__$1 = (function (){var statearr_35022 = state_35010;
(statearr_35022[(11)] = inst_34988);

(statearr_35022[(7)] = inst_34971);

(statearr_35022[(12)] = inst_34990);

(statearr_35022[(8)] = inst_34970);

return statearr_35022;
})();
var statearr_35023_35053 = state_35010__$1;
(statearr_35023_35053[(2)] = null);

(statearr_35023_35053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35011 === (9))){
var inst_34970 = (state_35010[(8)]);
var inst_34986 = cljs.core.vec.call(null,inst_34970);
var state_35010__$1 = state_35010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35010__$1,(11),out,inst_34986);
} else {
if((state_val_35011 === (5))){
var inst_34971 = (state_35010[(7)]);
var inst_34974 = (state_35010[(9)]);
var inst_34978 = (state_35010[(10)]);
var inst_34978__$1 = f.call(null,inst_34974);
var inst_34979 = cljs.core._EQ_.call(null,inst_34978__$1,inst_34971);
var inst_34980 = cljs.core.keyword_identical_QMARK_.call(null,inst_34971,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34981 = (inst_34979) || (inst_34980);
var state_35010__$1 = (function (){var statearr_35024 = state_35010;
(statearr_35024[(10)] = inst_34978__$1);

return statearr_35024;
})();
if(cljs.core.truth_(inst_34981)){
var statearr_35025_35054 = state_35010__$1;
(statearr_35025_35054[(1)] = (8));

} else {
var statearr_35026_35055 = state_35010__$1;
(statearr_35026_35055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35011 === (14))){
var inst_35003 = (state_35010[(2)]);
var inst_35004 = cljs.core.async.close_BANG_.call(null,out);
var state_35010__$1 = (function (){var statearr_35028 = state_35010;
(statearr_35028[(13)] = inst_35003);

return statearr_35028;
})();
var statearr_35029_35056 = state_35010__$1;
(statearr_35029_35056[(2)] = inst_35004);

(statearr_35029_35056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35011 === (10))){
var inst_34993 = (state_35010[(2)]);
var state_35010__$1 = state_35010;
var statearr_35030_35057 = state_35010__$1;
(statearr_35030_35057[(2)] = inst_34993);

(statearr_35030_35057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35011 === (8))){
var inst_34974 = (state_35010[(9)]);
var inst_34970 = (state_35010[(8)]);
var inst_34978 = (state_35010[(10)]);
var inst_34983 = inst_34970.push(inst_34974);
var tmp35027 = inst_34970;
var inst_34970__$1 = tmp35027;
var inst_34971 = inst_34978;
var state_35010__$1 = (function (){var statearr_35031 = state_35010;
(statearr_35031[(7)] = inst_34971);

(statearr_35031[(14)] = inst_34983);

(statearr_35031[(8)] = inst_34970__$1);

return statearr_35031;
})();
var statearr_35032_35058 = state_35010__$1;
(statearr_35032_35058[(2)] = null);

(statearr_35032_35058[(1)] = (2));


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
});})(c__19381__auto___35044,out))
;
return ((function (switch__19360__auto__,c__19381__auto___35044,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_35036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35036[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_35036[(1)] = (1));

return statearr_35036;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_35010){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_35010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e35037){if((e35037 instanceof Object)){
var ex__19364__auto__ = e35037;
var statearr_35038_35059 = state_35010;
(statearr_35038_35059[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35060 = state_35010;
state_35010 = G__35060;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_35010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_35010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___35044,out))
})();
var state__19383__auto__ = (function (){var statearr_35039 = f__19382__auto__.call(null);
(statearr_35039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___35044);

return statearr_35039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___35044,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map