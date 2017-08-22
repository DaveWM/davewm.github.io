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
if(typeof cljs.core.async.t_cljs$core$async25990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25990 = (function (fn_handler,f,meta25991){
this.fn_handler = fn_handler;
this.f = f;
this.meta25991 = meta25991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25992,meta25991__$1){
var self__ = this;
var _25992__$1 = this;
return (new cljs.core.async.t_cljs$core$async25990(self__.fn_handler,self__.f,meta25991__$1));
});

cljs.core.async.t_cljs$core$async25990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25992){
var self__ = this;
var _25992__$1 = this;
return self__.meta25991;
});

cljs.core.async.t_cljs$core$async25990.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25991","meta25991",-868396248,null)], null);
});

cljs.core.async.t_cljs$core$async25990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25990";

cljs.core.async.t_cljs$core$async25990.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async25990");
});

cljs.core.async.__GT_t_cljs$core$async25990 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async25990(fn_handler__$1,f__$1,meta25991){
return (new cljs.core.async.t_cljs$core$async25990(fn_handler__$1,f__$1,meta25991));
});

}

return (new cljs.core.async.t_cljs$core$async25990(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args25995 = [];
var len__17416__auto___25998 = arguments.length;
var i__17417__auto___25999 = (0);
while(true){
if((i__17417__auto___25999 < len__17416__auto___25998)){
args25995.push((arguments[i__17417__auto___25999]));

var G__26000 = (i__17417__auto___25999 + (1));
i__17417__auto___25999 = G__26000;
continue;
} else {
}
break;
}

var G__25997 = args25995.length;
switch (G__25997) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25995.length)].join('')));

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
var args26002 = [];
var len__17416__auto___26005 = arguments.length;
var i__17417__auto___26006 = (0);
while(true){
if((i__17417__auto___26006 < len__17416__auto___26005)){
args26002.push((arguments[i__17417__auto___26006]));

var G__26007 = (i__17417__auto___26006 + (1));
i__17417__auto___26006 = G__26007;
continue;
} else {
}
break;
}

var G__26004 = args26002.length;
switch (G__26004) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26002.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26009 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26009);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26009,ret){
return (function (){
return fn1.call(null,val_26009);
});})(val_26009,ret))
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
var args26010 = [];
var len__17416__auto___26013 = arguments.length;
var i__17417__auto___26014 = (0);
while(true){
if((i__17417__auto___26014 < len__17416__auto___26013)){
args26010.push((arguments[i__17417__auto___26014]));

var G__26015 = (i__17417__auto___26014 + (1));
i__17417__auto___26014 = G__26015;
continue;
} else {
}
break;
}

var G__26012 = args26010.length;
switch (G__26012) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26010.length)].join('')));

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
var n__17261__auto___26017 = n;
var x_26018 = (0);
while(true){
if((x_26018 < n__17261__auto___26017)){
(a[x_26018] = (0));

var G__26019 = (x_26018 + (1));
x_26018 = G__26019;
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

var G__26020 = (i + (1));
i = G__26020;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26024 = (function (alt_flag,flag,meta26025){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26025 = meta26025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26026,meta26025__$1){
var self__ = this;
var _26026__$1 = this;
return (new cljs.core.async.t_cljs$core$async26024(self__.alt_flag,self__.flag,meta26025__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26026){
var self__ = this;
var _26026__$1 = this;
return self__.meta26025;
});})(flag))
;

cljs.core.async.t_cljs$core$async26024.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26024.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26025","meta26025",-1178562578,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26024";

cljs.core.async.t_cljs$core$async26024.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async26024");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26024 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26024(alt_flag__$1,flag__$1,meta26025){
return (new cljs.core.async.t_cljs$core$async26024(alt_flag__$1,flag__$1,meta26025));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26024(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26030 = (function (alt_handler,flag,cb,meta26031){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26031 = meta26031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26032,meta26031__$1){
var self__ = this;
var _26032__$1 = this;
return (new cljs.core.async.t_cljs$core$async26030(self__.alt_handler,self__.flag,self__.cb,meta26031__$1));
});

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26032){
var self__ = this;
var _26032__$1 = this;
return self__.meta26031;
});

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26031","meta26031",-741311444,null)], null);
});

cljs.core.async.t_cljs$core$async26030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26030";

cljs.core.async.t_cljs$core$async26030.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async26030");
});

cljs.core.async.__GT_t_cljs$core$async26030 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26030(alt_handler__$1,flag__$1,cb__$1,meta26031){
return (new cljs.core.async.t_cljs$core$async26030(alt_handler__$1,flag__$1,cb__$1,meta26031));
});

}

return (new cljs.core.async.t_cljs$core$async26030(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26033_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26033_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26034_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26034_SHARP_,port], null));
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
var G__26035 = (i + (1));
i = G__26035;
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
var len__17416__auto___26041 = arguments.length;
var i__17417__auto___26042 = (0);
while(true){
if((i__17417__auto___26042 < len__17416__auto___26041)){
args__17423__auto__.push((arguments[i__17417__auto___26042]));

var G__26043 = (i__17417__auto___26042 + (1));
i__17417__auto___26042 = G__26043;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26038){
var map__26039 = p__26038;
var map__26039__$1 = ((((!((map__26039 == null)))?((((map__26039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26039):map__26039);
var opts = map__26039__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26036){
var G__26037 = cljs.core.first.call(null,seq26036);
var seq26036__$1 = cljs.core.next.call(null,seq26036);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26037,seq26036__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26044 = [];
var len__17416__auto___26094 = arguments.length;
var i__17417__auto___26095 = (0);
while(true){
if((i__17417__auto___26095 < len__17416__auto___26094)){
args26044.push((arguments[i__17417__auto___26095]));

var G__26096 = (i__17417__auto___26095 + (1));
i__17417__auto___26095 = G__26096;
continue;
} else {
}
break;
}

var G__26046 = args26044.length;
switch (G__26046) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26044.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19381__auto___26098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___26098){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___26098){
return (function (state_26070){
var state_val_26071 = (state_26070[(1)]);
if((state_val_26071 === (7))){
var inst_26066 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
var statearr_26072_26099 = state_26070__$1;
(statearr_26072_26099[(2)] = inst_26066);

(statearr_26072_26099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (1))){
var state_26070__$1 = state_26070;
var statearr_26073_26100 = state_26070__$1;
(statearr_26073_26100[(2)] = null);

(statearr_26073_26100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (4))){
var inst_26049 = (state_26070[(7)]);
var inst_26049__$1 = (state_26070[(2)]);
var inst_26050 = (inst_26049__$1 == null);
var state_26070__$1 = (function (){var statearr_26074 = state_26070;
(statearr_26074[(7)] = inst_26049__$1);

return statearr_26074;
})();
if(cljs.core.truth_(inst_26050)){
var statearr_26075_26101 = state_26070__$1;
(statearr_26075_26101[(1)] = (5));

} else {
var statearr_26076_26102 = state_26070__$1;
(statearr_26076_26102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (13))){
var state_26070__$1 = state_26070;
var statearr_26077_26103 = state_26070__$1;
(statearr_26077_26103[(2)] = null);

(statearr_26077_26103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (6))){
var inst_26049 = (state_26070[(7)]);
var state_26070__$1 = state_26070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26070__$1,(11),to,inst_26049);
} else {
if((state_val_26071 === (3))){
var inst_26068 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26070__$1,inst_26068);
} else {
if((state_val_26071 === (12))){
var state_26070__$1 = state_26070;
var statearr_26078_26104 = state_26070__$1;
(statearr_26078_26104[(2)] = null);

(statearr_26078_26104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (2))){
var state_26070__$1 = state_26070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26070__$1,(4),from);
} else {
if((state_val_26071 === (11))){
var inst_26059 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
if(cljs.core.truth_(inst_26059)){
var statearr_26079_26105 = state_26070__$1;
(statearr_26079_26105[(1)] = (12));

} else {
var statearr_26080_26106 = state_26070__$1;
(statearr_26080_26106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (9))){
var state_26070__$1 = state_26070;
var statearr_26081_26107 = state_26070__$1;
(statearr_26081_26107[(2)] = null);

(statearr_26081_26107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (5))){
var state_26070__$1 = state_26070;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26082_26108 = state_26070__$1;
(statearr_26082_26108[(1)] = (8));

} else {
var statearr_26083_26109 = state_26070__$1;
(statearr_26083_26109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (14))){
var inst_26064 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
var statearr_26084_26110 = state_26070__$1;
(statearr_26084_26110[(2)] = inst_26064);

(statearr_26084_26110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (10))){
var inst_26056 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
var statearr_26085_26111 = state_26070__$1;
(statearr_26085_26111[(2)] = inst_26056);

(statearr_26085_26111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (8))){
var inst_26053 = cljs.core.async.close_BANG_.call(null,to);
var state_26070__$1 = state_26070;
var statearr_26086_26112 = state_26070__$1;
(statearr_26086_26112[(2)] = inst_26053);

(statearr_26086_26112[(1)] = (10));


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
});})(c__19381__auto___26098))
;
return ((function (switch__19360__auto__,c__19381__auto___26098){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_26090 = [null,null,null,null,null,null,null,null];
(statearr_26090[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_26090[(1)] = (1));

return statearr_26090;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_26070){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_26070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e26091){if((e26091 instanceof Object)){
var ex__19364__auto__ = e26091;
var statearr_26092_26113 = state_26070;
(statearr_26092_26113[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26114 = state_26070;
state_26070 = G__26114;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_26070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_26070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___26098))
})();
var state__19383__auto__ = (function (){var statearr_26093 = f__19382__auto__.call(null);
(statearr_26093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___26098);

return statearr_26093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___26098))
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
return (function (p__26298){
var vec__26299 = p__26298;
var v = cljs.core.nth.call(null,vec__26299,(0),null);
var p = cljs.core.nth.call(null,vec__26299,(1),null);
var job = vec__26299;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19381__auto___26481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___26481,res,vec__26299,v,p,job,jobs,results){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___26481,res,vec__26299,v,p,job,jobs,results){
return (function (state_26304){
var state_val_26305 = (state_26304[(1)]);
if((state_val_26305 === (1))){
var state_26304__$1 = state_26304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26304__$1,(2),res,v);
} else {
if((state_val_26305 === (2))){
var inst_26301 = (state_26304[(2)]);
var inst_26302 = cljs.core.async.close_BANG_.call(null,res);
var state_26304__$1 = (function (){var statearr_26306 = state_26304;
(statearr_26306[(7)] = inst_26301);

return statearr_26306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26304__$1,inst_26302);
} else {
return null;
}
}
});})(c__19381__auto___26481,res,vec__26299,v,p,job,jobs,results))
;
return ((function (switch__19360__auto__,c__19381__auto___26481,res,vec__26299,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_26310 = [null,null,null,null,null,null,null,null];
(statearr_26310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_26310[(1)] = (1));

return statearr_26310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_26304){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_26304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e26311){if((e26311 instanceof Object)){
var ex__19364__auto__ = e26311;
var statearr_26312_26482 = state_26304;
(statearr_26312_26482[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26483 = state_26304;
state_26304 = G__26483;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_26304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_26304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___26481,res,vec__26299,v,p,job,jobs,results))
})();
var state__19383__auto__ = (function (){var statearr_26313 = f__19382__auto__.call(null);
(statearr_26313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___26481);

return statearr_26313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___26481,res,vec__26299,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26314){
var vec__26315 = p__26314;
var v = cljs.core.nth.call(null,vec__26315,(0),null);
var p = cljs.core.nth.call(null,vec__26315,(1),null);
var job = vec__26315;
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
var n__17261__auto___26484 = n;
var __26485 = (0);
while(true){
if((__26485 < n__17261__auto___26484)){
var G__26316_26486 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26316_26486) {
case "compute":
var c__19381__auto___26488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26485,c__19381__auto___26488,G__26316_26486,n__17261__auto___26484,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (__26485,c__19381__auto___26488,G__26316_26486,n__17261__auto___26484,jobs,results,process,async){
return (function (state_26329){
var state_val_26330 = (state_26329[(1)]);
if((state_val_26330 === (1))){
var state_26329__$1 = state_26329;
var statearr_26331_26489 = state_26329__$1;
(statearr_26331_26489[(2)] = null);

(statearr_26331_26489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (2))){
var state_26329__$1 = state_26329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26329__$1,(4),jobs);
} else {
if((state_val_26330 === (3))){
var inst_26327 = (state_26329[(2)]);
var state_26329__$1 = state_26329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26329__$1,inst_26327);
} else {
if((state_val_26330 === (4))){
var inst_26319 = (state_26329[(2)]);
var inst_26320 = process.call(null,inst_26319);
var state_26329__$1 = state_26329;
if(cljs.core.truth_(inst_26320)){
var statearr_26332_26490 = state_26329__$1;
(statearr_26332_26490[(1)] = (5));

} else {
var statearr_26333_26491 = state_26329__$1;
(statearr_26333_26491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (5))){
var state_26329__$1 = state_26329;
var statearr_26334_26492 = state_26329__$1;
(statearr_26334_26492[(2)] = null);

(statearr_26334_26492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (6))){
var state_26329__$1 = state_26329;
var statearr_26335_26493 = state_26329__$1;
(statearr_26335_26493[(2)] = null);

(statearr_26335_26493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26330 === (7))){
var inst_26325 = (state_26329[(2)]);
var state_26329__$1 = state_26329;
var statearr_26336_26494 = state_26329__$1;
(statearr_26336_26494[(2)] = inst_26325);

(statearr_26336_26494[(1)] = (3));


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
});})(__26485,c__19381__auto___26488,G__26316_26486,n__17261__auto___26484,jobs,results,process,async))
;
return ((function (__26485,switch__19360__auto__,c__19381__auto___26488,G__26316_26486,n__17261__auto___26484,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_26340 = [null,null,null,null,null,null,null];
(statearr_26340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_26340[(1)] = (1));

return statearr_26340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_26329){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_26329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e26341){if((e26341 instanceof Object)){
var ex__19364__auto__ = e26341;
var statearr_26342_26495 = state_26329;
(statearr_26342_26495[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26496 = state_26329;
state_26329 = G__26496;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_26329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_26329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(__26485,switch__19360__auto__,c__19381__auto___26488,G__26316_26486,n__17261__auto___26484,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_26343 = f__19382__auto__.call(null);
(statearr_26343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___26488);

return statearr_26343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(__26485,c__19381__auto___26488,G__26316_26486,n__17261__auto___26484,jobs,results,process,async))
);


break;
case "async":
var c__19381__auto___26497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26485,c__19381__auto___26497,G__26316_26486,n__17261__auto___26484,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (__26485,c__19381__auto___26497,G__26316_26486,n__17261__auto___26484,jobs,results,process,async){
return (function (state_26356){
var state_val_26357 = (state_26356[(1)]);
if((state_val_26357 === (1))){
var state_26356__$1 = state_26356;
var statearr_26358_26498 = state_26356__$1;
(statearr_26358_26498[(2)] = null);

(statearr_26358_26498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (2))){
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26356__$1,(4),jobs);
} else {
if((state_val_26357 === (3))){
var inst_26354 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26356__$1,inst_26354);
} else {
if((state_val_26357 === (4))){
var inst_26346 = (state_26356[(2)]);
var inst_26347 = async.call(null,inst_26346);
var state_26356__$1 = state_26356;
if(cljs.core.truth_(inst_26347)){
var statearr_26359_26499 = state_26356__$1;
(statearr_26359_26499[(1)] = (5));

} else {
var statearr_26360_26500 = state_26356__$1;
(statearr_26360_26500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (5))){
var state_26356__$1 = state_26356;
var statearr_26361_26501 = state_26356__$1;
(statearr_26361_26501[(2)] = null);

(statearr_26361_26501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (6))){
var state_26356__$1 = state_26356;
var statearr_26362_26502 = state_26356__$1;
(statearr_26362_26502[(2)] = null);

(statearr_26362_26502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (7))){
var inst_26352 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26363_26503 = state_26356__$1;
(statearr_26363_26503[(2)] = inst_26352);

(statearr_26363_26503[(1)] = (3));


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
});})(__26485,c__19381__auto___26497,G__26316_26486,n__17261__auto___26484,jobs,results,process,async))
;
return ((function (__26485,switch__19360__auto__,c__19381__auto___26497,G__26316_26486,n__17261__auto___26484,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_26367 = [null,null,null,null,null,null,null];
(statearr_26367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_26367[(1)] = (1));

return statearr_26367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_26356){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_26356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e26368){if((e26368 instanceof Object)){
var ex__19364__auto__ = e26368;
var statearr_26369_26504 = state_26356;
(statearr_26369_26504[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26505 = state_26356;
state_26356 = G__26505;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_26356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_26356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(__26485,switch__19360__auto__,c__19381__auto___26497,G__26316_26486,n__17261__auto___26484,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_26370 = f__19382__auto__.call(null);
(statearr_26370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___26497);

return statearr_26370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(__26485,c__19381__auto___26497,G__26316_26486,n__17261__auto___26484,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26506 = (__26485 + (1));
__26485 = G__26506;
continue;
} else {
}
break;
}

var c__19381__auto___26507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___26507,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___26507,jobs,results,process,async){
return (function (state_26392){
var state_val_26393 = (state_26392[(1)]);
if((state_val_26393 === (1))){
var state_26392__$1 = state_26392;
var statearr_26394_26508 = state_26392__$1;
(statearr_26394_26508[(2)] = null);

(statearr_26394_26508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26393 === (2))){
var state_26392__$1 = state_26392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26392__$1,(4),from);
} else {
if((state_val_26393 === (3))){
var inst_26390 = (state_26392[(2)]);
var state_26392__$1 = state_26392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26392__$1,inst_26390);
} else {
if((state_val_26393 === (4))){
var inst_26373 = (state_26392[(7)]);
var inst_26373__$1 = (state_26392[(2)]);
var inst_26374 = (inst_26373__$1 == null);
var state_26392__$1 = (function (){var statearr_26395 = state_26392;
(statearr_26395[(7)] = inst_26373__$1);

return statearr_26395;
})();
if(cljs.core.truth_(inst_26374)){
var statearr_26396_26509 = state_26392__$1;
(statearr_26396_26509[(1)] = (5));

} else {
var statearr_26397_26510 = state_26392__$1;
(statearr_26397_26510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26393 === (5))){
var inst_26376 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26392__$1 = state_26392;
var statearr_26398_26511 = state_26392__$1;
(statearr_26398_26511[(2)] = inst_26376);

(statearr_26398_26511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26393 === (6))){
var inst_26378 = (state_26392[(8)]);
var inst_26373 = (state_26392[(7)]);
var inst_26378__$1 = cljs.core.async.chan.call(null,(1));
var inst_26379 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26380 = [inst_26373,inst_26378__$1];
var inst_26381 = (new cljs.core.PersistentVector(null,2,(5),inst_26379,inst_26380,null));
var state_26392__$1 = (function (){var statearr_26399 = state_26392;
(statearr_26399[(8)] = inst_26378__$1);

return statearr_26399;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26392__$1,(8),jobs,inst_26381);
} else {
if((state_val_26393 === (7))){
var inst_26388 = (state_26392[(2)]);
var state_26392__$1 = state_26392;
var statearr_26400_26512 = state_26392__$1;
(statearr_26400_26512[(2)] = inst_26388);

(statearr_26400_26512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26393 === (8))){
var inst_26378 = (state_26392[(8)]);
var inst_26383 = (state_26392[(2)]);
var state_26392__$1 = (function (){var statearr_26401 = state_26392;
(statearr_26401[(9)] = inst_26383);

return statearr_26401;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26392__$1,(9),results,inst_26378);
} else {
if((state_val_26393 === (9))){
var inst_26385 = (state_26392[(2)]);
var state_26392__$1 = (function (){var statearr_26402 = state_26392;
(statearr_26402[(10)] = inst_26385);

return statearr_26402;
})();
var statearr_26403_26513 = state_26392__$1;
(statearr_26403_26513[(2)] = null);

(statearr_26403_26513[(1)] = (2));


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
});})(c__19381__auto___26507,jobs,results,process,async))
;
return ((function (switch__19360__auto__,c__19381__auto___26507,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_26407 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_26407[(1)] = (1));

return statearr_26407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_26392){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_26392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e26408){if((e26408 instanceof Object)){
var ex__19364__auto__ = e26408;
var statearr_26409_26514 = state_26392;
(statearr_26409_26514[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26515 = state_26392;
state_26392 = G__26515;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_26392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_26392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___26507,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_26410 = f__19382__auto__.call(null);
(statearr_26410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___26507);

return statearr_26410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___26507,jobs,results,process,async))
);


var c__19381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto__,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto__,jobs,results,process,async){
return (function (state_26448){
var state_val_26449 = (state_26448[(1)]);
if((state_val_26449 === (7))){
var inst_26444 = (state_26448[(2)]);
var state_26448__$1 = state_26448;
var statearr_26450_26516 = state_26448__$1;
(statearr_26450_26516[(2)] = inst_26444);

(statearr_26450_26516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (20))){
var state_26448__$1 = state_26448;
var statearr_26451_26517 = state_26448__$1;
(statearr_26451_26517[(2)] = null);

(statearr_26451_26517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (1))){
var state_26448__$1 = state_26448;
var statearr_26452_26518 = state_26448__$1;
(statearr_26452_26518[(2)] = null);

(statearr_26452_26518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (4))){
var inst_26413 = (state_26448[(7)]);
var inst_26413__$1 = (state_26448[(2)]);
var inst_26414 = (inst_26413__$1 == null);
var state_26448__$1 = (function (){var statearr_26453 = state_26448;
(statearr_26453[(7)] = inst_26413__$1);

return statearr_26453;
})();
if(cljs.core.truth_(inst_26414)){
var statearr_26454_26519 = state_26448__$1;
(statearr_26454_26519[(1)] = (5));

} else {
var statearr_26455_26520 = state_26448__$1;
(statearr_26455_26520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (15))){
var inst_26426 = (state_26448[(8)]);
var state_26448__$1 = state_26448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26448__$1,(18),to,inst_26426);
} else {
if((state_val_26449 === (21))){
var inst_26439 = (state_26448[(2)]);
var state_26448__$1 = state_26448;
var statearr_26456_26521 = state_26448__$1;
(statearr_26456_26521[(2)] = inst_26439);

(statearr_26456_26521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (13))){
var inst_26441 = (state_26448[(2)]);
var state_26448__$1 = (function (){var statearr_26457 = state_26448;
(statearr_26457[(9)] = inst_26441);

return statearr_26457;
})();
var statearr_26458_26522 = state_26448__$1;
(statearr_26458_26522[(2)] = null);

(statearr_26458_26522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (6))){
var inst_26413 = (state_26448[(7)]);
var state_26448__$1 = state_26448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26448__$1,(11),inst_26413);
} else {
if((state_val_26449 === (17))){
var inst_26434 = (state_26448[(2)]);
var state_26448__$1 = state_26448;
if(cljs.core.truth_(inst_26434)){
var statearr_26459_26523 = state_26448__$1;
(statearr_26459_26523[(1)] = (19));

} else {
var statearr_26460_26524 = state_26448__$1;
(statearr_26460_26524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (3))){
var inst_26446 = (state_26448[(2)]);
var state_26448__$1 = state_26448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26448__$1,inst_26446);
} else {
if((state_val_26449 === (12))){
var inst_26423 = (state_26448[(10)]);
var state_26448__$1 = state_26448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26448__$1,(14),inst_26423);
} else {
if((state_val_26449 === (2))){
var state_26448__$1 = state_26448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26448__$1,(4),results);
} else {
if((state_val_26449 === (19))){
var state_26448__$1 = state_26448;
var statearr_26461_26525 = state_26448__$1;
(statearr_26461_26525[(2)] = null);

(statearr_26461_26525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (11))){
var inst_26423 = (state_26448[(2)]);
var state_26448__$1 = (function (){var statearr_26462 = state_26448;
(statearr_26462[(10)] = inst_26423);

return statearr_26462;
})();
var statearr_26463_26526 = state_26448__$1;
(statearr_26463_26526[(2)] = null);

(statearr_26463_26526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (9))){
var state_26448__$1 = state_26448;
var statearr_26464_26527 = state_26448__$1;
(statearr_26464_26527[(2)] = null);

(statearr_26464_26527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (5))){
var state_26448__$1 = state_26448;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26465_26528 = state_26448__$1;
(statearr_26465_26528[(1)] = (8));

} else {
var statearr_26466_26529 = state_26448__$1;
(statearr_26466_26529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (14))){
var inst_26426 = (state_26448[(8)]);
var inst_26428 = (state_26448[(11)]);
var inst_26426__$1 = (state_26448[(2)]);
var inst_26427 = (inst_26426__$1 == null);
var inst_26428__$1 = cljs.core.not.call(null,inst_26427);
var state_26448__$1 = (function (){var statearr_26467 = state_26448;
(statearr_26467[(8)] = inst_26426__$1);

(statearr_26467[(11)] = inst_26428__$1);

return statearr_26467;
})();
if(inst_26428__$1){
var statearr_26468_26530 = state_26448__$1;
(statearr_26468_26530[(1)] = (15));

} else {
var statearr_26469_26531 = state_26448__$1;
(statearr_26469_26531[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (16))){
var inst_26428 = (state_26448[(11)]);
var state_26448__$1 = state_26448;
var statearr_26470_26532 = state_26448__$1;
(statearr_26470_26532[(2)] = inst_26428);

(statearr_26470_26532[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (10))){
var inst_26420 = (state_26448[(2)]);
var state_26448__$1 = state_26448;
var statearr_26471_26533 = state_26448__$1;
(statearr_26471_26533[(2)] = inst_26420);

(statearr_26471_26533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (18))){
var inst_26431 = (state_26448[(2)]);
var state_26448__$1 = state_26448;
var statearr_26472_26534 = state_26448__$1;
(statearr_26472_26534[(2)] = inst_26431);

(statearr_26472_26534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26449 === (8))){
var inst_26417 = cljs.core.async.close_BANG_.call(null,to);
var state_26448__$1 = state_26448;
var statearr_26473_26535 = state_26448__$1;
(statearr_26473_26535[(2)] = inst_26417);

(statearr_26473_26535[(1)] = (10));


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
var statearr_26477 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_26477[(1)] = (1));

return statearr_26477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_26448){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_26448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e26478){if((e26478 instanceof Object)){
var ex__19364__auto__ = e26478;
var statearr_26479_26536 = state_26448;
(statearr_26479_26536[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26537 = state_26448;
state_26448 = G__26537;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_26448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_26448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_26480 = f__19382__auto__.call(null);
(statearr_26480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_26480;
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
var args26538 = [];
var len__17416__auto___26541 = arguments.length;
var i__17417__auto___26542 = (0);
while(true){
if((i__17417__auto___26542 < len__17416__auto___26541)){
args26538.push((arguments[i__17417__auto___26542]));

var G__26543 = (i__17417__auto___26542 + (1));
i__17417__auto___26542 = G__26543;
continue;
} else {
}
break;
}

var G__26540 = args26538.length;
switch (G__26540) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26538.length)].join('')));

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
var args26545 = [];
var len__17416__auto___26548 = arguments.length;
var i__17417__auto___26549 = (0);
while(true){
if((i__17417__auto___26549 < len__17416__auto___26548)){
args26545.push((arguments[i__17417__auto___26549]));

var G__26550 = (i__17417__auto___26549 + (1));
i__17417__auto___26549 = G__26550;
continue;
} else {
}
break;
}

var G__26547 = args26545.length;
switch (G__26547) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26545.length)].join('')));

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
var args26552 = [];
var len__17416__auto___26605 = arguments.length;
var i__17417__auto___26606 = (0);
while(true){
if((i__17417__auto___26606 < len__17416__auto___26605)){
args26552.push((arguments[i__17417__auto___26606]));

var G__26607 = (i__17417__auto___26606 + (1));
i__17417__auto___26606 = G__26607;
continue;
} else {
}
break;
}

var G__26554 = args26552.length;
switch (G__26554) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26552.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19381__auto___26609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___26609,tc,fc){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___26609,tc,fc){
return (function (state_26580){
var state_val_26581 = (state_26580[(1)]);
if((state_val_26581 === (7))){
var inst_26576 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26582_26610 = state_26580__$1;
(statearr_26582_26610[(2)] = inst_26576);

(statearr_26582_26610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (1))){
var state_26580__$1 = state_26580;
var statearr_26583_26611 = state_26580__$1;
(statearr_26583_26611[(2)] = null);

(statearr_26583_26611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (4))){
var inst_26557 = (state_26580[(7)]);
var inst_26557__$1 = (state_26580[(2)]);
var inst_26558 = (inst_26557__$1 == null);
var state_26580__$1 = (function (){var statearr_26584 = state_26580;
(statearr_26584[(7)] = inst_26557__$1);

return statearr_26584;
})();
if(cljs.core.truth_(inst_26558)){
var statearr_26585_26612 = state_26580__$1;
(statearr_26585_26612[(1)] = (5));

} else {
var statearr_26586_26613 = state_26580__$1;
(statearr_26586_26613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (13))){
var state_26580__$1 = state_26580;
var statearr_26587_26614 = state_26580__$1;
(statearr_26587_26614[(2)] = null);

(statearr_26587_26614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (6))){
var inst_26557 = (state_26580[(7)]);
var inst_26563 = p.call(null,inst_26557);
var state_26580__$1 = state_26580;
if(cljs.core.truth_(inst_26563)){
var statearr_26588_26615 = state_26580__$1;
(statearr_26588_26615[(1)] = (9));

} else {
var statearr_26589_26616 = state_26580__$1;
(statearr_26589_26616[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (3))){
var inst_26578 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26580__$1,inst_26578);
} else {
if((state_val_26581 === (12))){
var state_26580__$1 = state_26580;
var statearr_26590_26617 = state_26580__$1;
(statearr_26590_26617[(2)] = null);

(statearr_26590_26617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (2))){
var state_26580__$1 = state_26580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26580__$1,(4),ch);
} else {
if((state_val_26581 === (11))){
var inst_26557 = (state_26580[(7)]);
var inst_26567 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26580__$1,(8),inst_26567,inst_26557);
} else {
if((state_val_26581 === (9))){
var state_26580__$1 = state_26580;
var statearr_26591_26618 = state_26580__$1;
(statearr_26591_26618[(2)] = tc);

(statearr_26591_26618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (5))){
var inst_26560 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26561 = cljs.core.async.close_BANG_.call(null,fc);
var state_26580__$1 = (function (){var statearr_26592 = state_26580;
(statearr_26592[(8)] = inst_26560);

return statearr_26592;
})();
var statearr_26593_26619 = state_26580__$1;
(statearr_26593_26619[(2)] = inst_26561);

(statearr_26593_26619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (14))){
var inst_26574 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
var statearr_26594_26620 = state_26580__$1;
(statearr_26594_26620[(2)] = inst_26574);

(statearr_26594_26620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (10))){
var state_26580__$1 = state_26580;
var statearr_26595_26621 = state_26580__$1;
(statearr_26595_26621[(2)] = fc);

(statearr_26595_26621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26581 === (8))){
var inst_26569 = (state_26580[(2)]);
var state_26580__$1 = state_26580;
if(cljs.core.truth_(inst_26569)){
var statearr_26596_26622 = state_26580__$1;
(statearr_26596_26622[(1)] = (12));

} else {
var statearr_26597_26623 = state_26580__$1;
(statearr_26597_26623[(1)] = (13));

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
});})(c__19381__auto___26609,tc,fc))
;
return ((function (switch__19360__auto__,c__19381__auto___26609,tc,fc){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_26601 = [null,null,null,null,null,null,null,null,null];
(statearr_26601[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_26601[(1)] = (1));

return statearr_26601;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_26580){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_26580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e26602){if((e26602 instanceof Object)){
var ex__19364__auto__ = e26602;
var statearr_26603_26624 = state_26580;
(statearr_26603_26624[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26625 = state_26580;
state_26580 = G__26625;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_26580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_26580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___26609,tc,fc))
})();
var state__19383__auto__ = (function (){var statearr_26604 = f__19382__auto__.call(null);
(statearr_26604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___26609);

return statearr_26604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___26609,tc,fc))
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
return (function (state_26672){
var state_val_26673 = (state_26672[(1)]);
if((state_val_26673 === (1))){
var inst_26658 = init;
var state_26672__$1 = (function (){var statearr_26674 = state_26672;
(statearr_26674[(7)] = inst_26658);

return statearr_26674;
})();
var statearr_26675_26690 = state_26672__$1;
(statearr_26675_26690[(2)] = null);

(statearr_26675_26690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (2))){
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(4),ch);
} else {
if((state_val_26673 === (3))){
var inst_26670 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26672__$1,inst_26670);
} else {
if((state_val_26673 === (4))){
var inst_26661 = (state_26672[(8)]);
var inst_26661__$1 = (state_26672[(2)]);
var inst_26662 = (inst_26661__$1 == null);
var state_26672__$1 = (function (){var statearr_26676 = state_26672;
(statearr_26676[(8)] = inst_26661__$1);

return statearr_26676;
})();
if(cljs.core.truth_(inst_26662)){
var statearr_26677_26691 = state_26672__$1;
(statearr_26677_26691[(1)] = (5));

} else {
var statearr_26678_26692 = state_26672__$1;
(statearr_26678_26692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (5))){
var inst_26658 = (state_26672[(7)]);
var state_26672__$1 = state_26672;
var statearr_26679_26693 = state_26672__$1;
(statearr_26679_26693[(2)] = inst_26658);

(statearr_26679_26693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (6))){
var inst_26661 = (state_26672[(8)]);
var inst_26658 = (state_26672[(7)]);
var inst_26665 = f.call(null,inst_26658,inst_26661);
var inst_26658__$1 = inst_26665;
var state_26672__$1 = (function (){var statearr_26680 = state_26672;
(statearr_26680[(7)] = inst_26658__$1);

return statearr_26680;
})();
var statearr_26681_26694 = state_26672__$1;
(statearr_26681_26694[(2)] = null);

(statearr_26681_26694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (7))){
var inst_26668 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26682_26695 = state_26672__$1;
(statearr_26682_26695[(2)] = inst_26668);

(statearr_26682_26695[(1)] = (3));


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
var statearr_26686 = [null,null,null,null,null,null,null,null,null];
(statearr_26686[(0)] = cljs$core$async$reduce_$_state_machine__19361__auto__);

(statearr_26686[(1)] = (1));

return statearr_26686;
});
var cljs$core$async$reduce_$_state_machine__19361__auto____1 = (function (state_26672){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_26672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e26687){if((e26687 instanceof Object)){
var ex__19364__auto__ = e26687;
var statearr_26688_26696 = state_26672;
(statearr_26688_26696[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26697 = state_26672;
state_26672 = G__26697;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19361__auto__ = function(state_26672){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19361__auto____1.call(this,state_26672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19361__auto____0;
cljs$core$async$reduce_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19361__auto____1;
return cljs$core$async$reduce_$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__))
})();
var state__19383__auto__ = (function (){var statearr_26689 = f__19382__auto__.call(null);
(statearr_26689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_26689;
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
var args26698 = [];
var len__17416__auto___26750 = arguments.length;
var i__17417__auto___26751 = (0);
while(true){
if((i__17417__auto___26751 < len__17416__auto___26750)){
args26698.push((arguments[i__17417__auto___26751]));

var G__26752 = (i__17417__auto___26751 + (1));
i__17417__auto___26751 = G__26752;
continue;
} else {
}
break;
}

var G__26700 = args26698.length;
switch (G__26700) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26698.length)].join('')));

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
return (function (state_26725){
var state_val_26726 = (state_26725[(1)]);
if((state_val_26726 === (7))){
var inst_26707 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
var statearr_26727_26754 = state_26725__$1;
(statearr_26727_26754[(2)] = inst_26707);

(statearr_26727_26754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (1))){
var inst_26701 = cljs.core.seq.call(null,coll);
var inst_26702 = inst_26701;
var state_26725__$1 = (function (){var statearr_26728 = state_26725;
(statearr_26728[(7)] = inst_26702);

return statearr_26728;
})();
var statearr_26729_26755 = state_26725__$1;
(statearr_26729_26755[(2)] = null);

(statearr_26729_26755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (4))){
var inst_26702 = (state_26725[(7)]);
var inst_26705 = cljs.core.first.call(null,inst_26702);
var state_26725__$1 = state_26725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26725__$1,(7),ch,inst_26705);
} else {
if((state_val_26726 === (13))){
var inst_26719 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
var statearr_26730_26756 = state_26725__$1;
(statearr_26730_26756[(2)] = inst_26719);

(statearr_26730_26756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (6))){
var inst_26710 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
if(cljs.core.truth_(inst_26710)){
var statearr_26731_26757 = state_26725__$1;
(statearr_26731_26757[(1)] = (8));

} else {
var statearr_26732_26758 = state_26725__$1;
(statearr_26732_26758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (3))){
var inst_26723 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26725__$1,inst_26723);
} else {
if((state_val_26726 === (12))){
var state_26725__$1 = state_26725;
var statearr_26733_26759 = state_26725__$1;
(statearr_26733_26759[(2)] = null);

(statearr_26733_26759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (2))){
var inst_26702 = (state_26725[(7)]);
var state_26725__$1 = state_26725;
if(cljs.core.truth_(inst_26702)){
var statearr_26734_26760 = state_26725__$1;
(statearr_26734_26760[(1)] = (4));

} else {
var statearr_26735_26761 = state_26725__$1;
(statearr_26735_26761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (11))){
var inst_26716 = cljs.core.async.close_BANG_.call(null,ch);
var state_26725__$1 = state_26725;
var statearr_26736_26762 = state_26725__$1;
(statearr_26736_26762[(2)] = inst_26716);

(statearr_26736_26762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (9))){
var state_26725__$1 = state_26725;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26737_26763 = state_26725__$1;
(statearr_26737_26763[(1)] = (11));

} else {
var statearr_26738_26764 = state_26725__$1;
(statearr_26738_26764[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (5))){
var inst_26702 = (state_26725[(7)]);
var state_26725__$1 = state_26725;
var statearr_26739_26765 = state_26725__$1;
(statearr_26739_26765[(2)] = inst_26702);

(statearr_26739_26765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (10))){
var inst_26721 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
var statearr_26740_26766 = state_26725__$1;
(statearr_26740_26766[(2)] = inst_26721);

(statearr_26740_26766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26726 === (8))){
var inst_26702 = (state_26725[(7)]);
var inst_26712 = cljs.core.next.call(null,inst_26702);
var inst_26702__$1 = inst_26712;
var state_26725__$1 = (function (){var statearr_26741 = state_26725;
(statearr_26741[(7)] = inst_26702__$1);

return statearr_26741;
})();
var statearr_26742_26767 = state_26725__$1;
(statearr_26742_26767[(2)] = null);

(statearr_26742_26767[(1)] = (2));


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
var statearr_26746 = [null,null,null,null,null,null,null,null];
(statearr_26746[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_26746[(1)] = (1));

return statearr_26746;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_26725){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_26725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e26747){if((e26747 instanceof Object)){
var ex__19364__auto__ = e26747;
var statearr_26748_26768 = state_26725;
(statearr_26748_26768[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26769 = state_26725;
state_26725 = G__26769;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_26725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_26725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__))
})();
var state__19383__auto__ = (function (){var statearr_26749 = f__19382__auto__.call(null);
(statearr_26749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_26749;
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
if(typeof cljs.core.async.t_cljs$core$async26991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26991 = (function (mult,ch,cs,meta26992){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26992 = meta26992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26993,meta26992__$1){
var self__ = this;
var _26993__$1 = this;
return (new cljs.core.async.t_cljs$core$async26991(self__.mult,self__.ch,self__.cs,meta26992__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26991.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26993){
var self__ = this;
var _26993__$1 = this;
return self__.meta26992;
});})(cs))
;

cljs.core.async.t_cljs$core$async26991.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26991.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26991.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26991.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26991.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26991.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26991.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26992","meta26992",-2091746131,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26991";

cljs.core.async.t_cljs$core$async26991.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async26991");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26991 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26991(mult__$1,ch__$1,cs__$1,meta26992){
return (new cljs.core.async.t_cljs$core$async26991(mult__$1,ch__$1,cs__$1,meta26992));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26991(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19381__auto___27212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___27212,cs,m,dchan,dctr,done){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___27212,cs,m,dchan,dctr,done){
return (function (state_27124){
var state_val_27125 = (state_27124[(1)]);
if((state_val_27125 === (7))){
var inst_27120 = (state_27124[(2)]);
var state_27124__$1 = state_27124;
var statearr_27126_27213 = state_27124__$1;
(statearr_27126_27213[(2)] = inst_27120);

(statearr_27126_27213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (20))){
var inst_27025 = (state_27124[(7)]);
var inst_27035 = cljs.core.first.call(null,inst_27025);
var inst_27036 = cljs.core.nth.call(null,inst_27035,(0),null);
var inst_27037 = cljs.core.nth.call(null,inst_27035,(1),null);
var state_27124__$1 = (function (){var statearr_27127 = state_27124;
(statearr_27127[(8)] = inst_27036);

return statearr_27127;
})();
if(cljs.core.truth_(inst_27037)){
var statearr_27128_27214 = state_27124__$1;
(statearr_27128_27214[(1)] = (22));

} else {
var statearr_27129_27215 = state_27124__$1;
(statearr_27129_27215[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (27))){
var inst_26996 = (state_27124[(9)]);
var inst_27065 = (state_27124[(10)]);
var inst_27067 = (state_27124[(11)]);
var inst_27072 = (state_27124[(12)]);
var inst_27072__$1 = cljs.core._nth.call(null,inst_27065,inst_27067);
var inst_27073 = cljs.core.async.put_BANG_.call(null,inst_27072__$1,inst_26996,done);
var state_27124__$1 = (function (){var statearr_27130 = state_27124;
(statearr_27130[(12)] = inst_27072__$1);

return statearr_27130;
})();
if(cljs.core.truth_(inst_27073)){
var statearr_27131_27216 = state_27124__$1;
(statearr_27131_27216[(1)] = (30));

} else {
var statearr_27132_27217 = state_27124__$1;
(statearr_27132_27217[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (1))){
var state_27124__$1 = state_27124;
var statearr_27133_27218 = state_27124__$1;
(statearr_27133_27218[(2)] = null);

(statearr_27133_27218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (24))){
var inst_27025 = (state_27124[(7)]);
var inst_27042 = (state_27124[(2)]);
var inst_27043 = cljs.core.next.call(null,inst_27025);
var inst_27005 = inst_27043;
var inst_27006 = null;
var inst_27007 = (0);
var inst_27008 = (0);
var state_27124__$1 = (function (){var statearr_27134 = state_27124;
(statearr_27134[(13)] = inst_27006);

(statearr_27134[(14)] = inst_27042);

(statearr_27134[(15)] = inst_27005);

(statearr_27134[(16)] = inst_27007);

(statearr_27134[(17)] = inst_27008);

return statearr_27134;
})();
var statearr_27135_27219 = state_27124__$1;
(statearr_27135_27219[(2)] = null);

(statearr_27135_27219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (39))){
var state_27124__$1 = state_27124;
var statearr_27139_27220 = state_27124__$1;
(statearr_27139_27220[(2)] = null);

(statearr_27139_27220[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (4))){
var inst_26996 = (state_27124[(9)]);
var inst_26996__$1 = (state_27124[(2)]);
var inst_26997 = (inst_26996__$1 == null);
var state_27124__$1 = (function (){var statearr_27140 = state_27124;
(statearr_27140[(9)] = inst_26996__$1);

return statearr_27140;
})();
if(cljs.core.truth_(inst_26997)){
var statearr_27141_27221 = state_27124__$1;
(statearr_27141_27221[(1)] = (5));

} else {
var statearr_27142_27222 = state_27124__$1;
(statearr_27142_27222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (15))){
var inst_27006 = (state_27124[(13)]);
var inst_27005 = (state_27124[(15)]);
var inst_27007 = (state_27124[(16)]);
var inst_27008 = (state_27124[(17)]);
var inst_27021 = (state_27124[(2)]);
var inst_27022 = (inst_27008 + (1));
var tmp27136 = inst_27006;
var tmp27137 = inst_27005;
var tmp27138 = inst_27007;
var inst_27005__$1 = tmp27137;
var inst_27006__$1 = tmp27136;
var inst_27007__$1 = tmp27138;
var inst_27008__$1 = inst_27022;
var state_27124__$1 = (function (){var statearr_27143 = state_27124;
(statearr_27143[(13)] = inst_27006__$1);

(statearr_27143[(18)] = inst_27021);

(statearr_27143[(15)] = inst_27005__$1);

(statearr_27143[(16)] = inst_27007__$1);

(statearr_27143[(17)] = inst_27008__$1);

return statearr_27143;
})();
var statearr_27144_27223 = state_27124__$1;
(statearr_27144_27223[(2)] = null);

(statearr_27144_27223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (21))){
var inst_27046 = (state_27124[(2)]);
var state_27124__$1 = state_27124;
var statearr_27148_27224 = state_27124__$1;
(statearr_27148_27224[(2)] = inst_27046);

(statearr_27148_27224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (31))){
var inst_27072 = (state_27124[(12)]);
var inst_27076 = done.call(null,null);
var inst_27077 = cljs.core.async.untap_STAR_.call(null,m,inst_27072);
var state_27124__$1 = (function (){var statearr_27149 = state_27124;
(statearr_27149[(19)] = inst_27076);

return statearr_27149;
})();
var statearr_27150_27225 = state_27124__$1;
(statearr_27150_27225[(2)] = inst_27077);

(statearr_27150_27225[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (32))){
var inst_27066 = (state_27124[(20)]);
var inst_27065 = (state_27124[(10)]);
var inst_27064 = (state_27124[(21)]);
var inst_27067 = (state_27124[(11)]);
var inst_27079 = (state_27124[(2)]);
var inst_27080 = (inst_27067 + (1));
var tmp27145 = inst_27066;
var tmp27146 = inst_27065;
var tmp27147 = inst_27064;
var inst_27064__$1 = tmp27147;
var inst_27065__$1 = tmp27146;
var inst_27066__$1 = tmp27145;
var inst_27067__$1 = inst_27080;
var state_27124__$1 = (function (){var statearr_27151 = state_27124;
(statearr_27151[(20)] = inst_27066__$1);

(statearr_27151[(10)] = inst_27065__$1);

(statearr_27151[(21)] = inst_27064__$1);

(statearr_27151[(22)] = inst_27079);

(statearr_27151[(11)] = inst_27067__$1);

return statearr_27151;
})();
var statearr_27152_27226 = state_27124__$1;
(statearr_27152_27226[(2)] = null);

(statearr_27152_27226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (40))){
var inst_27092 = (state_27124[(23)]);
var inst_27096 = done.call(null,null);
var inst_27097 = cljs.core.async.untap_STAR_.call(null,m,inst_27092);
var state_27124__$1 = (function (){var statearr_27153 = state_27124;
(statearr_27153[(24)] = inst_27096);

return statearr_27153;
})();
var statearr_27154_27227 = state_27124__$1;
(statearr_27154_27227[(2)] = inst_27097);

(statearr_27154_27227[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (33))){
var inst_27083 = (state_27124[(25)]);
var inst_27085 = cljs.core.chunked_seq_QMARK_.call(null,inst_27083);
var state_27124__$1 = state_27124;
if(inst_27085){
var statearr_27155_27228 = state_27124__$1;
(statearr_27155_27228[(1)] = (36));

} else {
var statearr_27156_27229 = state_27124__$1;
(statearr_27156_27229[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (13))){
var inst_27015 = (state_27124[(26)]);
var inst_27018 = cljs.core.async.close_BANG_.call(null,inst_27015);
var state_27124__$1 = state_27124;
var statearr_27157_27230 = state_27124__$1;
(statearr_27157_27230[(2)] = inst_27018);

(statearr_27157_27230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (22))){
var inst_27036 = (state_27124[(8)]);
var inst_27039 = cljs.core.async.close_BANG_.call(null,inst_27036);
var state_27124__$1 = state_27124;
var statearr_27158_27231 = state_27124__$1;
(statearr_27158_27231[(2)] = inst_27039);

(statearr_27158_27231[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (36))){
var inst_27083 = (state_27124[(25)]);
var inst_27087 = cljs.core.chunk_first.call(null,inst_27083);
var inst_27088 = cljs.core.chunk_rest.call(null,inst_27083);
var inst_27089 = cljs.core.count.call(null,inst_27087);
var inst_27064 = inst_27088;
var inst_27065 = inst_27087;
var inst_27066 = inst_27089;
var inst_27067 = (0);
var state_27124__$1 = (function (){var statearr_27159 = state_27124;
(statearr_27159[(20)] = inst_27066);

(statearr_27159[(10)] = inst_27065);

(statearr_27159[(21)] = inst_27064);

(statearr_27159[(11)] = inst_27067);

return statearr_27159;
})();
var statearr_27160_27232 = state_27124__$1;
(statearr_27160_27232[(2)] = null);

(statearr_27160_27232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (41))){
var inst_27083 = (state_27124[(25)]);
var inst_27099 = (state_27124[(2)]);
var inst_27100 = cljs.core.next.call(null,inst_27083);
var inst_27064 = inst_27100;
var inst_27065 = null;
var inst_27066 = (0);
var inst_27067 = (0);
var state_27124__$1 = (function (){var statearr_27161 = state_27124;
(statearr_27161[(20)] = inst_27066);

(statearr_27161[(10)] = inst_27065);

(statearr_27161[(27)] = inst_27099);

(statearr_27161[(21)] = inst_27064);

(statearr_27161[(11)] = inst_27067);

return statearr_27161;
})();
var statearr_27162_27233 = state_27124__$1;
(statearr_27162_27233[(2)] = null);

(statearr_27162_27233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (43))){
var state_27124__$1 = state_27124;
var statearr_27163_27234 = state_27124__$1;
(statearr_27163_27234[(2)] = null);

(statearr_27163_27234[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (29))){
var inst_27108 = (state_27124[(2)]);
var state_27124__$1 = state_27124;
var statearr_27164_27235 = state_27124__$1;
(statearr_27164_27235[(2)] = inst_27108);

(statearr_27164_27235[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (44))){
var inst_27117 = (state_27124[(2)]);
var state_27124__$1 = (function (){var statearr_27165 = state_27124;
(statearr_27165[(28)] = inst_27117);

return statearr_27165;
})();
var statearr_27166_27236 = state_27124__$1;
(statearr_27166_27236[(2)] = null);

(statearr_27166_27236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (6))){
var inst_27056 = (state_27124[(29)]);
var inst_27055 = cljs.core.deref.call(null,cs);
var inst_27056__$1 = cljs.core.keys.call(null,inst_27055);
var inst_27057 = cljs.core.count.call(null,inst_27056__$1);
var inst_27058 = cljs.core.reset_BANG_.call(null,dctr,inst_27057);
var inst_27063 = cljs.core.seq.call(null,inst_27056__$1);
var inst_27064 = inst_27063;
var inst_27065 = null;
var inst_27066 = (0);
var inst_27067 = (0);
var state_27124__$1 = (function (){var statearr_27167 = state_27124;
(statearr_27167[(30)] = inst_27058);

(statearr_27167[(20)] = inst_27066);

(statearr_27167[(10)] = inst_27065);

(statearr_27167[(21)] = inst_27064);

(statearr_27167[(29)] = inst_27056__$1);

(statearr_27167[(11)] = inst_27067);

return statearr_27167;
})();
var statearr_27168_27237 = state_27124__$1;
(statearr_27168_27237[(2)] = null);

(statearr_27168_27237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (28))){
var inst_27083 = (state_27124[(25)]);
var inst_27064 = (state_27124[(21)]);
var inst_27083__$1 = cljs.core.seq.call(null,inst_27064);
var state_27124__$1 = (function (){var statearr_27169 = state_27124;
(statearr_27169[(25)] = inst_27083__$1);

return statearr_27169;
})();
if(inst_27083__$1){
var statearr_27170_27238 = state_27124__$1;
(statearr_27170_27238[(1)] = (33));

} else {
var statearr_27171_27239 = state_27124__$1;
(statearr_27171_27239[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (25))){
var inst_27066 = (state_27124[(20)]);
var inst_27067 = (state_27124[(11)]);
var inst_27069 = (inst_27067 < inst_27066);
var inst_27070 = inst_27069;
var state_27124__$1 = state_27124;
if(cljs.core.truth_(inst_27070)){
var statearr_27172_27240 = state_27124__$1;
(statearr_27172_27240[(1)] = (27));

} else {
var statearr_27173_27241 = state_27124__$1;
(statearr_27173_27241[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (34))){
var state_27124__$1 = state_27124;
var statearr_27174_27242 = state_27124__$1;
(statearr_27174_27242[(2)] = null);

(statearr_27174_27242[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (17))){
var state_27124__$1 = state_27124;
var statearr_27175_27243 = state_27124__$1;
(statearr_27175_27243[(2)] = null);

(statearr_27175_27243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (3))){
var inst_27122 = (state_27124[(2)]);
var state_27124__$1 = state_27124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27124__$1,inst_27122);
} else {
if((state_val_27125 === (12))){
var inst_27051 = (state_27124[(2)]);
var state_27124__$1 = state_27124;
var statearr_27176_27244 = state_27124__$1;
(statearr_27176_27244[(2)] = inst_27051);

(statearr_27176_27244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (2))){
var state_27124__$1 = state_27124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27124__$1,(4),ch);
} else {
if((state_val_27125 === (23))){
var state_27124__$1 = state_27124;
var statearr_27177_27245 = state_27124__$1;
(statearr_27177_27245[(2)] = null);

(statearr_27177_27245[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (35))){
var inst_27106 = (state_27124[(2)]);
var state_27124__$1 = state_27124;
var statearr_27178_27246 = state_27124__$1;
(statearr_27178_27246[(2)] = inst_27106);

(statearr_27178_27246[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (19))){
var inst_27025 = (state_27124[(7)]);
var inst_27029 = cljs.core.chunk_first.call(null,inst_27025);
var inst_27030 = cljs.core.chunk_rest.call(null,inst_27025);
var inst_27031 = cljs.core.count.call(null,inst_27029);
var inst_27005 = inst_27030;
var inst_27006 = inst_27029;
var inst_27007 = inst_27031;
var inst_27008 = (0);
var state_27124__$1 = (function (){var statearr_27179 = state_27124;
(statearr_27179[(13)] = inst_27006);

(statearr_27179[(15)] = inst_27005);

(statearr_27179[(16)] = inst_27007);

(statearr_27179[(17)] = inst_27008);

return statearr_27179;
})();
var statearr_27180_27247 = state_27124__$1;
(statearr_27180_27247[(2)] = null);

(statearr_27180_27247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (11))){
var inst_27025 = (state_27124[(7)]);
var inst_27005 = (state_27124[(15)]);
var inst_27025__$1 = cljs.core.seq.call(null,inst_27005);
var state_27124__$1 = (function (){var statearr_27181 = state_27124;
(statearr_27181[(7)] = inst_27025__$1);

return statearr_27181;
})();
if(inst_27025__$1){
var statearr_27182_27248 = state_27124__$1;
(statearr_27182_27248[(1)] = (16));

} else {
var statearr_27183_27249 = state_27124__$1;
(statearr_27183_27249[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (9))){
var inst_27053 = (state_27124[(2)]);
var state_27124__$1 = state_27124;
var statearr_27184_27250 = state_27124__$1;
(statearr_27184_27250[(2)] = inst_27053);

(statearr_27184_27250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (5))){
var inst_27003 = cljs.core.deref.call(null,cs);
var inst_27004 = cljs.core.seq.call(null,inst_27003);
var inst_27005 = inst_27004;
var inst_27006 = null;
var inst_27007 = (0);
var inst_27008 = (0);
var state_27124__$1 = (function (){var statearr_27185 = state_27124;
(statearr_27185[(13)] = inst_27006);

(statearr_27185[(15)] = inst_27005);

(statearr_27185[(16)] = inst_27007);

(statearr_27185[(17)] = inst_27008);

return statearr_27185;
})();
var statearr_27186_27251 = state_27124__$1;
(statearr_27186_27251[(2)] = null);

(statearr_27186_27251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (14))){
var state_27124__$1 = state_27124;
var statearr_27187_27252 = state_27124__$1;
(statearr_27187_27252[(2)] = null);

(statearr_27187_27252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (45))){
var inst_27114 = (state_27124[(2)]);
var state_27124__$1 = state_27124;
var statearr_27188_27253 = state_27124__$1;
(statearr_27188_27253[(2)] = inst_27114);

(statearr_27188_27253[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (26))){
var inst_27056 = (state_27124[(29)]);
var inst_27110 = (state_27124[(2)]);
var inst_27111 = cljs.core.seq.call(null,inst_27056);
var state_27124__$1 = (function (){var statearr_27189 = state_27124;
(statearr_27189[(31)] = inst_27110);

return statearr_27189;
})();
if(inst_27111){
var statearr_27190_27254 = state_27124__$1;
(statearr_27190_27254[(1)] = (42));

} else {
var statearr_27191_27255 = state_27124__$1;
(statearr_27191_27255[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (16))){
var inst_27025 = (state_27124[(7)]);
var inst_27027 = cljs.core.chunked_seq_QMARK_.call(null,inst_27025);
var state_27124__$1 = state_27124;
if(inst_27027){
var statearr_27192_27256 = state_27124__$1;
(statearr_27192_27256[(1)] = (19));

} else {
var statearr_27193_27257 = state_27124__$1;
(statearr_27193_27257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (38))){
var inst_27103 = (state_27124[(2)]);
var state_27124__$1 = state_27124;
var statearr_27194_27258 = state_27124__$1;
(statearr_27194_27258[(2)] = inst_27103);

(statearr_27194_27258[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (30))){
var state_27124__$1 = state_27124;
var statearr_27195_27259 = state_27124__$1;
(statearr_27195_27259[(2)] = null);

(statearr_27195_27259[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (10))){
var inst_27006 = (state_27124[(13)]);
var inst_27008 = (state_27124[(17)]);
var inst_27014 = cljs.core._nth.call(null,inst_27006,inst_27008);
var inst_27015 = cljs.core.nth.call(null,inst_27014,(0),null);
var inst_27016 = cljs.core.nth.call(null,inst_27014,(1),null);
var state_27124__$1 = (function (){var statearr_27196 = state_27124;
(statearr_27196[(26)] = inst_27015);

return statearr_27196;
})();
if(cljs.core.truth_(inst_27016)){
var statearr_27197_27260 = state_27124__$1;
(statearr_27197_27260[(1)] = (13));

} else {
var statearr_27198_27261 = state_27124__$1;
(statearr_27198_27261[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (18))){
var inst_27049 = (state_27124[(2)]);
var state_27124__$1 = state_27124;
var statearr_27199_27262 = state_27124__$1;
(statearr_27199_27262[(2)] = inst_27049);

(statearr_27199_27262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (42))){
var state_27124__$1 = state_27124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27124__$1,(45),dchan);
} else {
if((state_val_27125 === (37))){
var inst_27083 = (state_27124[(25)]);
var inst_27092 = (state_27124[(23)]);
var inst_26996 = (state_27124[(9)]);
var inst_27092__$1 = cljs.core.first.call(null,inst_27083);
var inst_27093 = cljs.core.async.put_BANG_.call(null,inst_27092__$1,inst_26996,done);
var state_27124__$1 = (function (){var statearr_27200 = state_27124;
(statearr_27200[(23)] = inst_27092__$1);

return statearr_27200;
})();
if(cljs.core.truth_(inst_27093)){
var statearr_27201_27263 = state_27124__$1;
(statearr_27201_27263[(1)] = (39));

} else {
var statearr_27202_27264 = state_27124__$1;
(statearr_27202_27264[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27125 === (8))){
var inst_27007 = (state_27124[(16)]);
var inst_27008 = (state_27124[(17)]);
var inst_27010 = (inst_27008 < inst_27007);
var inst_27011 = inst_27010;
var state_27124__$1 = state_27124;
if(cljs.core.truth_(inst_27011)){
var statearr_27203_27265 = state_27124__$1;
(statearr_27203_27265[(1)] = (10));

} else {
var statearr_27204_27266 = state_27124__$1;
(statearr_27204_27266[(1)] = (11));

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
});})(c__19381__auto___27212,cs,m,dchan,dctr,done))
;
return ((function (switch__19360__auto__,c__19381__auto___27212,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19361__auto__ = null;
var cljs$core$async$mult_$_state_machine__19361__auto____0 = (function (){
var statearr_27208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27208[(0)] = cljs$core$async$mult_$_state_machine__19361__auto__);

(statearr_27208[(1)] = (1));

return statearr_27208;
});
var cljs$core$async$mult_$_state_machine__19361__auto____1 = (function (state_27124){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27209){if((e27209 instanceof Object)){
var ex__19364__auto__ = e27209;
var statearr_27210_27267 = state_27124;
(statearr_27210_27267[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27268 = state_27124;
state_27124 = G__27268;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19361__auto__ = function(state_27124){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19361__auto____1.call(this,state_27124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19361__auto____0;
cljs$core$async$mult_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19361__auto____1;
return cljs$core$async$mult_$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___27212,cs,m,dchan,dctr,done))
})();
var state__19383__auto__ = (function (){var statearr_27211 = f__19382__auto__.call(null);
(statearr_27211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___27212);

return statearr_27211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___27212,cs,m,dchan,dctr,done))
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
var args27269 = [];
var len__17416__auto___27272 = arguments.length;
var i__17417__auto___27273 = (0);
while(true){
if((i__17417__auto___27273 < len__17416__auto___27272)){
args27269.push((arguments[i__17417__auto___27273]));

var G__27274 = (i__17417__auto___27273 + (1));
i__17417__auto___27273 = G__27274;
continue;
} else {
}
break;
}

var G__27271 = args27269.length;
switch (G__27271) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27269.length)].join('')));

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
var len__17416__auto___27286 = arguments.length;
var i__17417__auto___27287 = (0);
while(true){
if((i__17417__auto___27287 < len__17416__auto___27286)){
args__17423__auto__.push((arguments[i__17417__auto___27287]));

var G__27288 = (i__17417__auto___27287 + (1));
i__17417__auto___27287 = G__27288;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((3) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17424__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27280){
var map__27281 = p__27280;
var map__27281__$1 = ((((!((map__27281 == null)))?((((map__27281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27281):map__27281);
var opts = map__27281__$1;
var statearr_27283_27289 = state;
(statearr_27283_27289[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27281,map__27281__$1,opts){
return (function (val){
var statearr_27284_27290 = state;
(statearr_27284_27290[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27281,map__27281__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27285_27291 = state;
(statearr_27285_27291[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27276){
var G__27277 = cljs.core.first.call(null,seq27276);
var seq27276__$1 = cljs.core.next.call(null,seq27276);
var G__27278 = cljs.core.first.call(null,seq27276__$1);
var seq27276__$2 = cljs.core.next.call(null,seq27276__$1);
var G__27279 = cljs.core.first.call(null,seq27276__$2);
var seq27276__$3 = cljs.core.next.call(null,seq27276__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27277,G__27278,G__27279,seq27276__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27455 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27456){
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
this.meta27456 = meta27456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27457,meta27456__$1){
var self__ = this;
var _27457__$1 = this;
return (new cljs.core.async.t_cljs$core$async27455(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27456__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27457){
var self__ = this;
var _27457__$1 = this;
return self__.meta27456;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27455.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27455.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27456","meta27456",-448323657,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27455";

cljs.core.async.t_cljs$core$async27455.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27455");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27455 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27455(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27456){
return (new cljs.core.async.t_cljs$core$async27455(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27456));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27455(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19381__auto___27618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___27618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___27618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27555){
var state_val_27556 = (state_27555[(1)]);
if((state_val_27556 === (7))){
var inst_27473 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27557_27619 = state_27555__$1;
(statearr_27557_27619[(2)] = inst_27473);

(statearr_27557_27619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (20))){
var inst_27485 = (state_27555[(7)]);
var state_27555__$1 = state_27555;
var statearr_27558_27620 = state_27555__$1;
(statearr_27558_27620[(2)] = inst_27485);

(statearr_27558_27620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (27))){
var state_27555__$1 = state_27555;
var statearr_27559_27621 = state_27555__$1;
(statearr_27559_27621[(2)] = null);

(statearr_27559_27621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (1))){
var inst_27461 = (state_27555[(8)]);
var inst_27461__$1 = calc_state.call(null);
var inst_27463 = (inst_27461__$1 == null);
var inst_27464 = cljs.core.not.call(null,inst_27463);
var state_27555__$1 = (function (){var statearr_27560 = state_27555;
(statearr_27560[(8)] = inst_27461__$1);

return statearr_27560;
})();
if(inst_27464){
var statearr_27561_27622 = state_27555__$1;
(statearr_27561_27622[(1)] = (2));

} else {
var statearr_27562_27623 = state_27555__$1;
(statearr_27562_27623[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (24))){
var inst_27515 = (state_27555[(9)]);
var inst_27529 = (state_27555[(10)]);
var inst_27508 = (state_27555[(11)]);
var inst_27529__$1 = inst_27508.call(null,inst_27515);
var state_27555__$1 = (function (){var statearr_27563 = state_27555;
(statearr_27563[(10)] = inst_27529__$1);

return statearr_27563;
})();
if(cljs.core.truth_(inst_27529__$1)){
var statearr_27564_27624 = state_27555__$1;
(statearr_27564_27624[(1)] = (29));

} else {
var statearr_27565_27625 = state_27555__$1;
(statearr_27565_27625[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (4))){
var inst_27476 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
if(cljs.core.truth_(inst_27476)){
var statearr_27566_27626 = state_27555__$1;
(statearr_27566_27626[(1)] = (8));

} else {
var statearr_27567_27627 = state_27555__$1;
(statearr_27567_27627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (15))){
var inst_27502 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
if(cljs.core.truth_(inst_27502)){
var statearr_27568_27628 = state_27555__$1;
(statearr_27568_27628[(1)] = (19));

} else {
var statearr_27569_27629 = state_27555__$1;
(statearr_27569_27629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (21))){
var inst_27507 = (state_27555[(12)]);
var inst_27507__$1 = (state_27555[(2)]);
var inst_27508 = cljs.core.get.call(null,inst_27507__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27509 = cljs.core.get.call(null,inst_27507__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27510 = cljs.core.get.call(null,inst_27507__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27555__$1 = (function (){var statearr_27570 = state_27555;
(statearr_27570[(11)] = inst_27508);

(statearr_27570[(12)] = inst_27507__$1);

(statearr_27570[(13)] = inst_27509);

return statearr_27570;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27555__$1,(22),inst_27510);
} else {
if((state_val_27556 === (31))){
var inst_27537 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
if(cljs.core.truth_(inst_27537)){
var statearr_27571_27630 = state_27555__$1;
(statearr_27571_27630[(1)] = (32));

} else {
var statearr_27572_27631 = state_27555__$1;
(statearr_27572_27631[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (32))){
var inst_27514 = (state_27555[(14)]);
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27555__$1,(35),out,inst_27514);
} else {
if((state_val_27556 === (33))){
var inst_27507 = (state_27555[(12)]);
var inst_27485 = inst_27507;
var state_27555__$1 = (function (){var statearr_27573 = state_27555;
(statearr_27573[(7)] = inst_27485);

return statearr_27573;
})();
var statearr_27574_27632 = state_27555__$1;
(statearr_27574_27632[(2)] = null);

(statearr_27574_27632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (13))){
var inst_27485 = (state_27555[(7)]);
var inst_27492 = inst_27485.cljs$lang$protocol_mask$partition0$;
var inst_27493 = (inst_27492 & (64));
var inst_27494 = inst_27485.cljs$core$ISeq$;
var inst_27495 = (inst_27493) || (inst_27494);
var state_27555__$1 = state_27555;
if(cljs.core.truth_(inst_27495)){
var statearr_27575_27633 = state_27555__$1;
(statearr_27575_27633[(1)] = (16));

} else {
var statearr_27576_27634 = state_27555__$1;
(statearr_27576_27634[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (22))){
var inst_27515 = (state_27555[(9)]);
var inst_27514 = (state_27555[(14)]);
var inst_27513 = (state_27555[(2)]);
var inst_27514__$1 = cljs.core.nth.call(null,inst_27513,(0),null);
var inst_27515__$1 = cljs.core.nth.call(null,inst_27513,(1),null);
var inst_27516 = (inst_27514__$1 == null);
var inst_27517 = cljs.core._EQ_.call(null,inst_27515__$1,change);
var inst_27518 = (inst_27516) || (inst_27517);
var state_27555__$1 = (function (){var statearr_27577 = state_27555;
(statearr_27577[(9)] = inst_27515__$1);

(statearr_27577[(14)] = inst_27514__$1);

return statearr_27577;
})();
if(cljs.core.truth_(inst_27518)){
var statearr_27578_27635 = state_27555__$1;
(statearr_27578_27635[(1)] = (23));

} else {
var statearr_27579_27636 = state_27555__$1;
(statearr_27579_27636[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (36))){
var inst_27507 = (state_27555[(12)]);
var inst_27485 = inst_27507;
var state_27555__$1 = (function (){var statearr_27580 = state_27555;
(statearr_27580[(7)] = inst_27485);

return statearr_27580;
})();
var statearr_27581_27637 = state_27555__$1;
(statearr_27581_27637[(2)] = null);

(statearr_27581_27637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (29))){
var inst_27529 = (state_27555[(10)]);
var state_27555__$1 = state_27555;
var statearr_27582_27638 = state_27555__$1;
(statearr_27582_27638[(2)] = inst_27529);

(statearr_27582_27638[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (6))){
var state_27555__$1 = state_27555;
var statearr_27583_27639 = state_27555__$1;
(statearr_27583_27639[(2)] = false);

(statearr_27583_27639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (28))){
var inst_27525 = (state_27555[(2)]);
var inst_27526 = calc_state.call(null);
var inst_27485 = inst_27526;
var state_27555__$1 = (function (){var statearr_27584 = state_27555;
(statearr_27584[(7)] = inst_27485);

(statearr_27584[(15)] = inst_27525);

return statearr_27584;
})();
var statearr_27585_27640 = state_27555__$1;
(statearr_27585_27640[(2)] = null);

(statearr_27585_27640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (25))){
var inst_27551 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27586_27641 = state_27555__$1;
(statearr_27586_27641[(2)] = inst_27551);

(statearr_27586_27641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (34))){
var inst_27549 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27587_27642 = state_27555__$1;
(statearr_27587_27642[(2)] = inst_27549);

(statearr_27587_27642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (17))){
var state_27555__$1 = state_27555;
var statearr_27588_27643 = state_27555__$1;
(statearr_27588_27643[(2)] = false);

(statearr_27588_27643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (3))){
var state_27555__$1 = state_27555;
var statearr_27589_27644 = state_27555__$1;
(statearr_27589_27644[(2)] = false);

(statearr_27589_27644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (12))){
var inst_27553 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27555__$1,inst_27553);
} else {
if((state_val_27556 === (2))){
var inst_27461 = (state_27555[(8)]);
var inst_27466 = inst_27461.cljs$lang$protocol_mask$partition0$;
var inst_27467 = (inst_27466 & (64));
var inst_27468 = inst_27461.cljs$core$ISeq$;
var inst_27469 = (inst_27467) || (inst_27468);
var state_27555__$1 = state_27555;
if(cljs.core.truth_(inst_27469)){
var statearr_27590_27645 = state_27555__$1;
(statearr_27590_27645[(1)] = (5));

} else {
var statearr_27591_27646 = state_27555__$1;
(statearr_27591_27646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (23))){
var inst_27514 = (state_27555[(14)]);
var inst_27520 = (inst_27514 == null);
var state_27555__$1 = state_27555;
if(cljs.core.truth_(inst_27520)){
var statearr_27592_27647 = state_27555__$1;
(statearr_27592_27647[(1)] = (26));

} else {
var statearr_27593_27648 = state_27555__$1;
(statearr_27593_27648[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (35))){
var inst_27540 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
if(cljs.core.truth_(inst_27540)){
var statearr_27594_27649 = state_27555__$1;
(statearr_27594_27649[(1)] = (36));

} else {
var statearr_27595_27650 = state_27555__$1;
(statearr_27595_27650[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (19))){
var inst_27485 = (state_27555[(7)]);
var inst_27504 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27485);
var state_27555__$1 = state_27555;
var statearr_27596_27651 = state_27555__$1;
(statearr_27596_27651[(2)] = inst_27504);

(statearr_27596_27651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (11))){
var inst_27485 = (state_27555[(7)]);
var inst_27489 = (inst_27485 == null);
var inst_27490 = cljs.core.not.call(null,inst_27489);
var state_27555__$1 = state_27555;
if(inst_27490){
var statearr_27597_27652 = state_27555__$1;
(statearr_27597_27652[(1)] = (13));

} else {
var statearr_27598_27653 = state_27555__$1;
(statearr_27598_27653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (9))){
var inst_27461 = (state_27555[(8)]);
var state_27555__$1 = state_27555;
var statearr_27599_27654 = state_27555__$1;
(statearr_27599_27654[(2)] = inst_27461);

(statearr_27599_27654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (5))){
var state_27555__$1 = state_27555;
var statearr_27600_27655 = state_27555__$1;
(statearr_27600_27655[(2)] = true);

(statearr_27600_27655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (14))){
var state_27555__$1 = state_27555;
var statearr_27601_27656 = state_27555__$1;
(statearr_27601_27656[(2)] = false);

(statearr_27601_27656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (26))){
var inst_27515 = (state_27555[(9)]);
var inst_27522 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27515);
var state_27555__$1 = state_27555;
var statearr_27602_27657 = state_27555__$1;
(statearr_27602_27657[(2)] = inst_27522);

(statearr_27602_27657[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (16))){
var state_27555__$1 = state_27555;
var statearr_27603_27658 = state_27555__$1;
(statearr_27603_27658[(2)] = true);

(statearr_27603_27658[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (38))){
var inst_27545 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27604_27659 = state_27555__$1;
(statearr_27604_27659[(2)] = inst_27545);

(statearr_27604_27659[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (30))){
var inst_27515 = (state_27555[(9)]);
var inst_27508 = (state_27555[(11)]);
var inst_27509 = (state_27555[(13)]);
var inst_27532 = cljs.core.empty_QMARK_.call(null,inst_27508);
var inst_27533 = inst_27509.call(null,inst_27515);
var inst_27534 = cljs.core.not.call(null,inst_27533);
var inst_27535 = (inst_27532) && (inst_27534);
var state_27555__$1 = state_27555;
var statearr_27605_27660 = state_27555__$1;
(statearr_27605_27660[(2)] = inst_27535);

(statearr_27605_27660[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (10))){
var inst_27461 = (state_27555[(8)]);
var inst_27481 = (state_27555[(2)]);
var inst_27482 = cljs.core.get.call(null,inst_27481,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27483 = cljs.core.get.call(null,inst_27481,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27484 = cljs.core.get.call(null,inst_27481,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27485 = inst_27461;
var state_27555__$1 = (function (){var statearr_27606 = state_27555;
(statearr_27606[(7)] = inst_27485);

(statearr_27606[(16)] = inst_27482);

(statearr_27606[(17)] = inst_27484);

(statearr_27606[(18)] = inst_27483);

return statearr_27606;
})();
var statearr_27607_27661 = state_27555__$1;
(statearr_27607_27661[(2)] = null);

(statearr_27607_27661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (18))){
var inst_27499 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
var statearr_27608_27662 = state_27555__$1;
(statearr_27608_27662[(2)] = inst_27499);

(statearr_27608_27662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (37))){
var state_27555__$1 = state_27555;
var statearr_27609_27663 = state_27555__$1;
(statearr_27609_27663[(2)] = null);

(statearr_27609_27663[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27556 === (8))){
var inst_27461 = (state_27555[(8)]);
var inst_27478 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27461);
var state_27555__$1 = state_27555;
var statearr_27610_27664 = state_27555__$1;
(statearr_27610_27664[(2)] = inst_27478);

(statearr_27610_27664[(1)] = (10));


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
});})(c__19381__auto___27618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19360__auto__,c__19381__auto___27618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19361__auto__ = null;
var cljs$core$async$mix_$_state_machine__19361__auto____0 = (function (){
var statearr_27614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27614[(0)] = cljs$core$async$mix_$_state_machine__19361__auto__);

(statearr_27614[(1)] = (1));

return statearr_27614;
});
var cljs$core$async$mix_$_state_machine__19361__auto____1 = (function (state_27555){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27615){if((e27615 instanceof Object)){
var ex__19364__auto__ = e27615;
var statearr_27616_27665 = state_27555;
(statearr_27616_27665[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27666 = state_27555;
state_27555 = G__27666;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19361__auto__ = function(state_27555){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19361__auto____1.call(this,state_27555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19361__auto____0;
cljs$core$async$mix_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19361__auto____1;
return cljs$core$async$mix_$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___27618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19383__auto__ = (function (){var statearr_27617 = f__19382__auto__.call(null);
(statearr_27617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___27618);

return statearr_27617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___27618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args27667 = [];
var len__17416__auto___27670 = arguments.length;
var i__17417__auto___27671 = (0);
while(true){
if((i__17417__auto___27671 < len__17416__auto___27670)){
args27667.push((arguments[i__17417__auto___27671]));

var G__27672 = (i__17417__auto___27671 + (1));
i__17417__auto___27671 = G__27672;
continue;
} else {
}
break;
}

var G__27669 = args27667.length;
switch (G__27669) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27667.length)].join('')));

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
var args27675 = [];
var len__17416__auto___27800 = arguments.length;
var i__17417__auto___27801 = (0);
while(true){
if((i__17417__auto___27801 < len__17416__auto___27800)){
args27675.push((arguments[i__17417__auto___27801]));

var G__27802 = (i__17417__auto___27801 + (1));
i__17417__auto___27801 = G__27802;
continue;
} else {
}
break;
}

var G__27677 = args27675.length;
switch (G__27677) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27675.length)].join('')));

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
return (function (p1__27674_SHARP_){
if(cljs.core.truth_(p1__27674_SHARP_.call(null,topic))){
return p1__27674_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27674_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16358__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27678 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27679){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27679 = meta27679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27680,meta27679__$1){
var self__ = this;
var _27680__$1 = this;
return (new cljs.core.async.t_cljs$core$async27678(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27679__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27680){
var self__ = this;
var _27680__$1 = this;
return self__.meta27679;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27678.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27679","meta27679",963268858,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27678";

cljs.core.async.t_cljs$core$async27678.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27678");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27678 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27679){
return (new cljs.core.async.t_cljs$core$async27678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27679));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27678(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19381__auto___27804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___27804,mults,ensure_mult,p){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___27804,mults,ensure_mult,p){
return (function (state_27752){
var state_val_27753 = (state_27752[(1)]);
if((state_val_27753 === (7))){
var inst_27748 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27754_27805 = state_27752__$1;
(statearr_27754_27805[(2)] = inst_27748);

(statearr_27754_27805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (20))){
var state_27752__$1 = state_27752;
var statearr_27755_27806 = state_27752__$1;
(statearr_27755_27806[(2)] = null);

(statearr_27755_27806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (1))){
var state_27752__$1 = state_27752;
var statearr_27756_27807 = state_27752__$1;
(statearr_27756_27807[(2)] = null);

(statearr_27756_27807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (24))){
var inst_27731 = (state_27752[(7)]);
var inst_27740 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27731);
var state_27752__$1 = state_27752;
var statearr_27757_27808 = state_27752__$1;
(statearr_27757_27808[(2)] = inst_27740);

(statearr_27757_27808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (4))){
var inst_27683 = (state_27752[(8)]);
var inst_27683__$1 = (state_27752[(2)]);
var inst_27684 = (inst_27683__$1 == null);
var state_27752__$1 = (function (){var statearr_27758 = state_27752;
(statearr_27758[(8)] = inst_27683__$1);

return statearr_27758;
})();
if(cljs.core.truth_(inst_27684)){
var statearr_27759_27809 = state_27752__$1;
(statearr_27759_27809[(1)] = (5));

} else {
var statearr_27760_27810 = state_27752__$1;
(statearr_27760_27810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (15))){
var inst_27725 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27761_27811 = state_27752__$1;
(statearr_27761_27811[(2)] = inst_27725);

(statearr_27761_27811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (21))){
var inst_27745 = (state_27752[(2)]);
var state_27752__$1 = (function (){var statearr_27762 = state_27752;
(statearr_27762[(9)] = inst_27745);

return statearr_27762;
})();
var statearr_27763_27812 = state_27752__$1;
(statearr_27763_27812[(2)] = null);

(statearr_27763_27812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (13))){
var inst_27707 = (state_27752[(10)]);
var inst_27709 = cljs.core.chunked_seq_QMARK_.call(null,inst_27707);
var state_27752__$1 = state_27752;
if(inst_27709){
var statearr_27764_27813 = state_27752__$1;
(statearr_27764_27813[(1)] = (16));

} else {
var statearr_27765_27814 = state_27752__$1;
(statearr_27765_27814[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (22))){
var inst_27737 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
if(cljs.core.truth_(inst_27737)){
var statearr_27766_27815 = state_27752__$1;
(statearr_27766_27815[(1)] = (23));

} else {
var statearr_27767_27816 = state_27752__$1;
(statearr_27767_27816[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (6))){
var inst_27683 = (state_27752[(8)]);
var inst_27733 = (state_27752[(11)]);
var inst_27731 = (state_27752[(7)]);
var inst_27731__$1 = topic_fn.call(null,inst_27683);
var inst_27732 = cljs.core.deref.call(null,mults);
var inst_27733__$1 = cljs.core.get.call(null,inst_27732,inst_27731__$1);
var state_27752__$1 = (function (){var statearr_27768 = state_27752;
(statearr_27768[(11)] = inst_27733__$1);

(statearr_27768[(7)] = inst_27731__$1);

return statearr_27768;
})();
if(cljs.core.truth_(inst_27733__$1)){
var statearr_27769_27817 = state_27752__$1;
(statearr_27769_27817[(1)] = (19));

} else {
var statearr_27770_27818 = state_27752__$1;
(statearr_27770_27818[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (25))){
var inst_27742 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27771_27819 = state_27752__$1;
(statearr_27771_27819[(2)] = inst_27742);

(statearr_27771_27819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (17))){
var inst_27707 = (state_27752[(10)]);
var inst_27716 = cljs.core.first.call(null,inst_27707);
var inst_27717 = cljs.core.async.muxch_STAR_.call(null,inst_27716);
var inst_27718 = cljs.core.async.close_BANG_.call(null,inst_27717);
var inst_27719 = cljs.core.next.call(null,inst_27707);
var inst_27693 = inst_27719;
var inst_27694 = null;
var inst_27695 = (0);
var inst_27696 = (0);
var state_27752__$1 = (function (){var statearr_27772 = state_27752;
(statearr_27772[(12)] = inst_27718);

(statearr_27772[(13)] = inst_27694);

(statearr_27772[(14)] = inst_27693);

(statearr_27772[(15)] = inst_27696);

(statearr_27772[(16)] = inst_27695);

return statearr_27772;
})();
var statearr_27773_27820 = state_27752__$1;
(statearr_27773_27820[(2)] = null);

(statearr_27773_27820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (3))){
var inst_27750 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27752__$1,inst_27750);
} else {
if((state_val_27753 === (12))){
var inst_27727 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27774_27821 = state_27752__$1;
(statearr_27774_27821[(2)] = inst_27727);

(statearr_27774_27821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (2))){
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27752__$1,(4),ch);
} else {
if((state_val_27753 === (23))){
var state_27752__$1 = state_27752;
var statearr_27775_27822 = state_27752__$1;
(statearr_27775_27822[(2)] = null);

(statearr_27775_27822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (19))){
var inst_27683 = (state_27752[(8)]);
var inst_27733 = (state_27752[(11)]);
var inst_27735 = cljs.core.async.muxch_STAR_.call(null,inst_27733);
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27752__$1,(22),inst_27735,inst_27683);
} else {
if((state_val_27753 === (11))){
var inst_27693 = (state_27752[(14)]);
var inst_27707 = (state_27752[(10)]);
var inst_27707__$1 = cljs.core.seq.call(null,inst_27693);
var state_27752__$1 = (function (){var statearr_27776 = state_27752;
(statearr_27776[(10)] = inst_27707__$1);

return statearr_27776;
})();
if(inst_27707__$1){
var statearr_27777_27823 = state_27752__$1;
(statearr_27777_27823[(1)] = (13));

} else {
var statearr_27778_27824 = state_27752__$1;
(statearr_27778_27824[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (9))){
var inst_27729 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27779_27825 = state_27752__$1;
(statearr_27779_27825[(2)] = inst_27729);

(statearr_27779_27825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (5))){
var inst_27690 = cljs.core.deref.call(null,mults);
var inst_27691 = cljs.core.vals.call(null,inst_27690);
var inst_27692 = cljs.core.seq.call(null,inst_27691);
var inst_27693 = inst_27692;
var inst_27694 = null;
var inst_27695 = (0);
var inst_27696 = (0);
var state_27752__$1 = (function (){var statearr_27780 = state_27752;
(statearr_27780[(13)] = inst_27694);

(statearr_27780[(14)] = inst_27693);

(statearr_27780[(15)] = inst_27696);

(statearr_27780[(16)] = inst_27695);

return statearr_27780;
})();
var statearr_27781_27826 = state_27752__$1;
(statearr_27781_27826[(2)] = null);

(statearr_27781_27826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (14))){
var state_27752__$1 = state_27752;
var statearr_27785_27827 = state_27752__$1;
(statearr_27785_27827[(2)] = null);

(statearr_27785_27827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (16))){
var inst_27707 = (state_27752[(10)]);
var inst_27711 = cljs.core.chunk_first.call(null,inst_27707);
var inst_27712 = cljs.core.chunk_rest.call(null,inst_27707);
var inst_27713 = cljs.core.count.call(null,inst_27711);
var inst_27693 = inst_27712;
var inst_27694 = inst_27711;
var inst_27695 = inst_27713;
var inst_27696 = (0);
var state_27752__$1 = (function (){var statearr_27786 = state_27752;
(statearr_27786[(13)] = inst_27694);

(statearr_27786[(14)] = inst_27693);

(statearr_27786[(15)] = inst_27696);

(statearr_27786[(16)] = inst_27695);

return statearr_27786;
})();
var statearr_27787_27828 = state_27752__$1;
(statearr_27787_27828[(2)] = null);

(statearr_27787_27828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (10))){
var inst_27694 = (state_27752[(13)]);
var inst_27693 = (state_27752[(14)]);
var inst_27696 = (state_27752[(15)]);
var inst_27695 = (state_27752[(16)]);
var inst_27701 = cljs.core._nth.call(null,inst_27694,inst_27696);
var inst_27702 = cljs.core.async.muxch_STAR_.call(null,inst_27701);
var inst_27703 = cljs.core.async.close_BANG_.call(null,inst_27702);
var inst_27704 = (inst_27696 + (1));
var tmp27782 = inst_27694;
var tmp27783 = inst_27693;
var tmp27784 = inst_27695;
var inst_27693__$1 = tmp27783;
var inst_27694__$1 = tmp27782;
var inst_27695__$1 = tmp27784;
var inst_27696__$1 = inst_27704;
var state_27752__$1 = (function (){var statearr_27788 = state_27752;
(statearr_27788[(13)] = inst_27694__$1);

(statearr_27788[(17)] = inst_27703);

(statearr_27788[(14)] = inst_27693__$1);

(statearr_27788[(15)] = inst_27696__$1);

(statearr_27788[(16)] = inst_27695__$1);

return statearr_27788;
})();
var statearr_27789_27829 = state_27752__$1;
(statearr_27789_27829[(2)] = null);

(statearr_27789_27829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (18))){
var inst_27722 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27790_27830 = state_27752__$1;
(statearr_27790_27830[(2)] = inst_27722);

(statearr_27790_27830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (8))){
var inst_27696 = (state_27752[(15)]);
var inst_27695 = (state_27752[(16)]);
var inst_27698 = (inst_27696 < inst_27695);
var inst_27699 = inst_27698;
var state_27752__$1 = state_27752;
if(cljs.core.truth_(inst_27699)){
var statearr_27791_27831 = state_27752__$1;
(statearr_27791_27831[(1)] = (10));

} else {
var statearr_27792_27832 = state_27752__$1;
(statearr_27792_27832[(1)] = (11));

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
});})(c__19381__auto___27804,mults,ensure_mult,p))
;
return ((function (switch__19360__auto__,c__19381__auto___27804,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_27796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27796[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_27796[(1)] = (1));

return statearr_27796;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_27752){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27797){if((e27797 instanceof Object)){
var ex__19364__auto__ = e27797;
var statearr_27798_27833 = state_27752;
(statearr_27798_27833[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27834 = state_27752;
state_27752 = G__27834;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_27752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_27752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___27804,mults,ensure_mult,p))
})();
var state__19383__auto__ = (function (){var statearr_27799 = f__19382__auto__.call(null);
(statearr_27799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___27804);

return statearr_27799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___27804,mults,ensure_mult,p))
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
var args27835 = [];
var len__17416__auto___27838 = arguments.length;
var i__17417__auto___27839 = (0);
while(true){
if((i__17417__auto___27839 < len__17416__auto___27838)){
args27835.push((arguments[i__17417__auto___27839]));

var G__27840 = (i__17417__auto___27839 + (1));
i__17417__auto___27839 = G__27840;
continue;
} else {
}
break;
}

var G__27837 = args27835.length;
switch (G__27837) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27835.length)].join('')));

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
var args27842 = [];
var len__17416__auto___27845 = arguments.length;
var i__17417__auto___27846 = (0);
while(true){
if((i__17417__auto___27846 < len__17416__auto___27845)){
args27842.push((arguments[i__17417__auto___27846]));

var G__27847 = (i__17417__auto___27846 + (1));
i__17417__auto___27846 = G__27847;
continue;
} else {
}
break;
}

var G__27844 = args27842.length;
switch (G__27844) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27842.length)].join('')));

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
var args27849 = [];
var len__17416__auto___27920 = arguments.length;
var i__17417__auto___27921 = (0);
while(true){
if((i__17417__auto___27921 < len__17416__auto___27920)){
args27849.push((arguments[i__17417__auto___27921]));

var G__27922 = (i__17417__auto___27921 + (1));
i__17417__auto___27921 = G__27922;
continue;
} else {
}
break;
}

var G__27851 = args27849.length;
switch (G__27851) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27849.length)].join('')));

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
var c__19381__auto___27924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___27924,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___27924,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27890){
var state_val_27891 = (state_27890[(1)]);
if((state_val_27891 === (7))){
var state_27890__$1 = state_27890;
var statearr_27892_27925 = state_27890__$1;
(statearr_27892_27925[(2)] = null);

(statearr_27892_27925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (1))){
var state_27890__$1 = state_27890;
var statearr_27893_27926 = state_27890__$1;
(statearr_27893_27926[(2)] = null);

(statearr_27893_27926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (4))){
var inst_27854 = (state_27890[(7)]);
var inst_27856 = (inst_27854 < cnt);
var state_27890__$1 = state_27890;
if(cljs.core.truth_(inst_27856)){
var statearr_27894_27927 = state_27890__$1;
(statearr_27894_27927[(1)] = (6));

} else {
var statearr_27895_27928 = state_27890__$1;
(statearr_27895_27928[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (15))){
var inst_27886 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
var statearr_27896_27929 = state_27890__$1;
(statearr_27896_27929[(2)] = inst_27886);

(statearr_27896_27929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (13))){
var inst_27879 = cljs.core.async.close_BANG_.call(null,out);
var state_27890__$1 = state_27890;
var statearr_27897_27930 = state_27890__$1;
(statearr_27897_27930[(2)] = inst_27879);

(statearr_27897_27930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (6))){
var state_27890__$1 = state_27890;
var statearr_27898_27931 = state_27890__$1;
(statearr_27898_27931[(2)] = null);

(statearr_27898_27931[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (3))){
var inst_27888 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27890__$1,inst_27888);
} else {
if((state_val_27891 === (12))){
var inst_27876 = (state_27890[(8)]);
var inst_27876__$1 = (state_27890[(2)]);
var inst_27877 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27876__$1);
var state_27890__$1 = (function (){var statearr_27899 = state_27890;
(statearr_27899[(8)] = inst_27876__$1);

return statearr_27899;
})();
if(cljs.core.truth_(inst_27877)){
var statearr_27900_27932 = state_27890__$1;
(statearr_27900_27932[(1)] = (13));

} else {
var statearr_27901_27933 = state_27890__$1;
(statearr_27901_27933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (2))){
var inst_27853 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27854 = (0);
var state_27890__$1 = (function (){var statearr_27902 = state_27890;
(statearr_27902[(9)] = inst_27853);

(statearr_27902[(7)] = inst_27854);

return statearr_27902;
})();
var statearr_27903_27934 = state_27890__$1;
(statearr_27903_27934[(2)] = null);

(statearr_27903_27934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (11))){
var inst_27854 = (state_27890[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27890,(10),Object,null,(9));
var inst_27863 = chs__$1.call(null,inst_27854);
var inst_27864 = done.call(null,inst_27854);
var inst_27865 = cljs.core.async.take_BANG_.call(null,inst_27863,inst_27864);
var state_27890__$1 = state_27890;
var statearr_27904_27935 = state_27890__$1;
(statearr_27904_27935[(2)] = inst_27865);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (9))){
var inst_27854 = (state_27890[(7)]);
var inst_27867 = (state_27890[(2)]);
var inst_27868 = (inst_27854 + (1));
var inst_27854__$1 = inst_27868;
var state_27890__$1 = (function (){var statearr_27905 = state_27890;
(statearr_27905[(10)] = inst_27867);

(statearr_27905[(7)] = inst_27854__$1);

return statearr_27905;
})();
var statearr_27906_27936 = state_27890__$1;
(statearr_27906_27936[(2)] = null);

(statearr_27906_27936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (5))){
var inst_27874 = (state_27890[(2)]);
var state_27890__$1 = (function (){var statearr_27907 = state_27890;
(statearr_27907[(11)] = inst_27874);

return statearr_27907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27890__$1,(12),dchan);
} else {
if((state_val_27891 === (14))){
var inst_27876 = (state_27890[(8)]);
var inst_27881 = cljs.core.apply.call(null,f,inst_27876);
var state_27890__$1 = state_27890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27890__$1,(16),out,inst_27881);
} else {
if((state_val_27891 === (16))){
var inst_27883 = (state_27890[(2)]);
var state_27890__$1 = (function (){var statearr_27908 = state_27890;
(statearr_27908[(12)] = inst_27883);

return statearr_27908;
})();
var statearr_27909_27937 = state_27890__$1;
(statearr_27909_27937[(2)] = null);

(statearr_27909_27937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (10))){
var inst_27858 = (state_27890[(2)]);
var inst_27859 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27890__$1 = (function (){var statearr_27910 = state_27890;
(statearr_27910[(13)] = inst_27858);

return statearr_27910;
})();
var statearr_27911_27938 = state_27890__$1;
(statearr_27911_27938[(2)] = inst_27859);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (8))){
var inst_27872 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
var statearr_27912_27939 = state_27890__$1;
(statearr_27912_27939[(2)] = inst_27872);

(statearr_27912_27939[(1)] = (5));


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
});})(c__19381__auto___27924,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19360__auto__,c__19381__auto___27924,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_27916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27916[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_27916[(1)] = (1));

return statearr_27916;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_27890){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27917){if((e27917 instanceof Object)){
var ex__19364__auto__ = e27917;
var statearr_27918_27940 = state_27890;
(statearr_27918_27940[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27941 = state_27890;
state_27890 = G__27941;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_27890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_27890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___27924,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19383__auto__ = (function (){var statearr_27919 = f__19382__auto__.call(null);
(statearr_27919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___27924);

return statearr_27919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___27924,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27943 = [];
var len__17416__auto___27999 = arguments.length;
var i__17417__auto___28000 = (0);
while(true){
if((i__17417__auto___28000 < len__17416__auto___27999)){
args27943.push((arguments[i__17417__auto___28000]));

var G__28001 = (i__17417__auto___28000 + (1));
i__17417__auto___28000 = G__28001;
continue;
} else {
}
break;
}

var G__27945 = args27943.length;
switch (G__27945) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27943.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___28003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___28003,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___28003,out){
return (function (state_27975){
var state_val_27976 = (state_27975[(1)]);
if((state_val_27976 === (7))){
var inst_27955 = (state_27975[(7)]);
var inst_27954 = (state_27975[(8)]);
var inst_27954__$1 = (state_27975[(2)]);
var inst_27955__$1 = cljs.core.nth.call(null,inst_27954__$1,(0),null);
var inst_27956 = cljs.core.nth.call(null,inst_27954__$1,(1),null);
var inst_27957 = (inst_27955__$1 == null);
var state_27975__$1 = (function (){var statearr_27977 = state_27975;
(statearr_27977[(9)] = inst_27956);

(statearr_27977[(7)] = inst_27955__$1);

(statearr_27977[(8)] = inst_27954__$1);

return statearr_27977;
})();
if(cljs.core.truth_(inst_27957)){
var statearr_27978_28004 = state_27975__$1;
(statearr_27978_28004[(1)] = (8));

} else {
var statearr_27979_28005 = state_27975__$1;
(statearr_27979_28005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (1))){
var inst_27946 = cljs.core.vec.call(null,chs);
var inst_27947 = inst_27946;
var state_27975__$1 = (function (){var statearr_27980 = state_27975;
(statearr_27980[(10)] = inst_27947);

return statearr_27980;
})();
var statearr_27981_28006 = state_27975__$1;
(statearr_27981_28006[(2)] = null);

(statearr_27981_28006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (4))){
var inst_27947 = (state_27975[(10)]);
var state_27975__$1 = state_27975;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27975__$1,(7),inst_27947);
} else {
if((state_val_27976 === (6))){
var inst_27971 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
var statearr_27982_28007 = state_27975__$1;
(statearr_27982_28007[(2)] = inst_27971);

(statearr_27982_28007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (3))){
var inst_27973 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27975__$1,inst_27973);
} else {
if((state_val_27976 === (2))){
var inst_27947 = (state_27975[(10)]);
var inst_27949 = cljs.core.count.call(null,inst_27947);
var inst_27950 = (inst_27949 > (0));
var state_27975__$1 = state_27975;
if(cljs.core.truth_(inst_27950)){
var statearr_27984_28008 = state_27975__$1;
(statearr_27984_28008[(1)] = (4));

} else {
var statearr_27985_28009 = state_27975__$1;
(statearr_27985_28009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (11))){
var inst_27947 = (state_27975[(10)]);
var inst_27964 = (state_27975[(2)]);
var tmp27983 = inst_27947;
var inst_27947__$1 = tmp27983;
var state_27975__$1 = (function (){var statearr_27986 = state_27975;
(statearr_27986[(11)] = inst_27964);

(statearr_27986[(10)] = inst_27947__$1);

return statearr_27986;
})();
var statearr_27987_28010 = state_27975__$1;
(statearr_27987_28010[(2)] = null);

(statearr_27987_28010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (9))){
var inst_27955 = (state_27975[(7)]);
var state_27975__$1 = state_27975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27975__$1,(11),out,inst_27955);
} else {
if((state_val_27976 === (5))){
var inst_27969 = cljs.core.async.close_BANG_.call(null,out);
var state_27975__$1 = state_27975;
var statearr_27988_28011 = state_27975__$1;
(statearr_27988_28011[(2)] = inst_27969);

(statearr_27988_28011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (10))){
var inst_27967 = (state_27975[(2)]);
var state_27975__$1 = state_27975;
var statearr_27989_28012 = state_27975__$1;
(statearr_27989_28012[(2)] = inst_27967);

(statearr_27989_28012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27976 === (8))){
var inst_27956 = (state_27975[(9)]);
var inst_27955 = (state_27975[(7)]);
var inst_27954 = (state_27975[(8)]);
var inst_27947 = (state_27975[(10)]);
var inst_27959 = (function (){var cs = inst_27947;
var vec__27952 = inst_27954;
var v = inst_27955;
var c = inst_27956;
return ((function (cs,vec__27952,v,c,inst_27956,inst_27955,inst_27954,inst_27947,state_val_27976,c__19381__auto___28003,out){
return (function (p1__27942_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27942_SHARP_);
});
;})(cs,vec__27952,v,c,inst_27956,inst_27955,inst_27954,inst_27947,state_val_27976,c__19381__auto___28003,out))
})();
var inst_27960 = cljs.core.filterv.call(null,inst_27959,inst_27947);
var inst_27947__$1 = inst_27960;
var state_27975__$1 = (function (){var statearr_27990 = state_27975;
(statearr_27990[(10)] = inst_27947__$1);

return statearr_27990;
})();
var statearr_27991_28013 = state_27975__$1;
(statearr_27991_28013[(2)] = null);

(statearr_27991_28013[(1)] = (2));


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
});})(c__19381__auto___28003,out))
;
return ((function (switch__19360__auto__,c__19381__auto___28003,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_27995 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27995[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_27995[(1)] = (1));

return statearr_27995;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_27975){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27996){if((e27996 instanceof Object)){
var ex__19364__auto__ = e27996;
var statearr_27997_28014 = state_27975;
(statearr_27997_28014[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28015 = state_27975;
state_27975 = G__28015;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_27975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_27975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___28003,out))
})();
var state__19383__auto__ = (function (){var statearr_27998 = f__19382__auto__.call(null);
(statearr_27998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___28003);

return statearr_27998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___28003,out))
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
var args28016 = [];
var len__17416__auto___28065 = arguments.length;
var i__17417__auto___28066 = (0);
while(true){
if((i__17417__auto___28066 < len__17416__auto___28065)){
args28016.push((arguments[i__17417__auto___28066]));

var G__28067 = (i__17417__auto___28066 + (1));
i__17417__auto___28066 = G__28067;
continue;
} else {
}
break;
}

var G__28018 = args28016.length;
switch (G__28018) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28016.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___28069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___28069,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___28069,out){
return (function (state_28042){
var state_val_28043 = (state_28042[(1)]);
if((state_val_28043 === (7))){
var inst_28024 = (state_28042[(7)]);
var inst_28024__$1 = (state_28042[(2)]);
var inst_28025 = (inst_28024__$1 == null);
var inst_28026 = cljs.core.not.call(null,inst_28025);
var state_28042__$1 = (function (){var statearr_28044 = state_28042;
(statearr_28044[(7)] = inst_28024__$1);

return statearr_28044;
})();
if(inst_28026){
var statearr_28045_28070 = state_28042__$1;
(statearr_28045_28070[(1)] = (8));

} else {
var statearr_28046_28071 = state_28042__$1;
(statearr_28046_28071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (1))){
var inst_28019 = (0);
var state_28042__$1 = (function (){var statearr_28047 = state_28042;
(statearr_28047[(8)] = inst_28019);

return statearr_28047;
})();
var statearr_28048_28072 = state_28042__$1;
(statearr_28048_28072[(2)] = null);

(statearr_28048_28072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (4))){
var state_28042__$1 = state_28042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28042__$1,(7),ch);
} else {
if((state_val_28043 === (6))){
var inst_28037 = (state_28042[(2)]);
var state_28042__$1 = state_28042;
var statearr_28049_28073 = state_28042__$1;
(statearr_28049_28073[(2)] = inst_28037);

(statearr_28049_28073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (3))){
var inst_28039 = (state_28042[(2)]);
var inst_28040 = cljs.core.async.close_BANG_.call(null,out);
var state_28042__$1 = (function (){var statearr_28050 = state_28042;
(statearr_28050[(9)] = inst_28039);

return statearr_28050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28042__$1,inst_28040);
} else {
if((state_val_28043 === (2))){
var inst_28019 = (state_28042[(8)]);
var inst_28021 = (inst_28019 < n);
var state_28042__$1 = state_28042;
if(cljs.core.truth_(inst_28021)){
var statearr_28051_28074 = state_28042__$1;
(statearr_28051_28074[(1)] = (4));

} else {
var statearr_28052_28075 = state_28042__$1;
(statearr_28052_28075[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (11))){
var inst_28019 = (state_28042[(8)]);
var inst_28029 = (state_28042[(2)]);
var inst_28030 = (inst_28019 + (1));
var inst_28019__$1 = inst_28030;
var state_28042__$1 = (function (){var statearr_28053 = state_28042;
(statearr_28053[(8)] = inst_28019__$1);

(statearr_28053[(10)] = inst_28029);

return statearr_28053;
})();
var statearr_28054_28076 = state_28042__$1;
(statearr_28054_28076[(2)] = null);

(statearr_28054_28076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (9))){
var state_28042__$1 = state_28042;
var statearr_28055_28077 = state_28042__$1;
(statearr_28055_28077[(2)] = null);

(statearr_28055_28077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (5))){
var state_28042__$1 = state_28042;
var statearr_28056_28078 = state_28042__$1;
(statearr_28056_28078[(2)] = null);

(statearr_28056_28078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (10))){
var inst_28034 = (state_28042[(2)]);
var state_28042__$1 = state_28042;
var statearr_28057_28079 = state_28042__$1;
(statearr_28057_28079[(2)] = inst_28034);

(statearr_28057_28079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28043 === (8))){
var inst_28024 = (state_28042[(7)]);
var state_28042__$1 = state_28042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28042__$1,(11),out,inst_28024);
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
});})(c__19381__auto___28069,out))
;
return ((function (switch__19360__auto__,c__19381__auto___28069,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_28061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28061[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_28061[(1)] = (1));

return statearr_28061;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_28042){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_28042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e28062){if((e28062 instanceof Object)){
var ex__19364__auto__ = e28062;
var statearr_28063_28080 = state_28042;
(statearr_28063_28080[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28081 = state_28042;
state_28042 = G__28081;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_28042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_28042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___28069,out))
})();
var state__19383__auto__ = (function (){var statearr_28064 = f__19382__auto__.call(null);
(statearr_28064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___28069);

return statearr_28064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___28069,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28089 = (function (map_LT_,f,ch,meta28090){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28090 = meta28090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28091,meta28090__$1){
var self__ = this;
var _28091__$1 = this;
return (new cljs.core.async.t_cljs$core$async28089(self__.map_LT_,self__.f,self__.ch,meta28090__$1));
});

cljs.core.async.t_cljs$core$async28089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28091){
var self__ = this;
var _28091__$1 = this;
return self__.meta28090;
});

cljs.core.async.t_cljs$core$async28089.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28089.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28089.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28092 = (function (map_LT_,f,ch,meta28090,_,fn1,meta28093){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28090 = meta28090;
this._ = _;
this.fn1 = fn1;
this.meta28093 = meta28093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28094,meta28093__$1){
var self__ = this;
var _28094__$1 = this;
return (new cljs.core.async.t_cljs$core$async28092(self__.map_LT_,self__.f,self__.ch,self__.meta28090,self__._,self__.fn1,meta28093__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28094){
var self__ = this;
var _28094__$1 = this;
return self__.meta28093;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28092.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28082_SHARP_){
return f1.call(null,(((p1__28082_SHARP_ == null))?null:self__.f.call(null,p1__28082_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28092.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28090","meta28090",-1350582413,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28089","cljs.core.async/t_cljs$core$async28089",-585505451,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28093","meta28093",946539172,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28092";

cljs.core.async.t_cljs$core$async28092.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async28092");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28092 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28092(map_LT___$1,f__$1,ch__$1,meta28090__$1,___$2,fn1__$1,meta28093){
return (new cljs.core.async.t_cljs$core$async28092(map_LT___$1,f__$1,ch__$1,meta28090__$1,___$2,fn1__$1,meta28093));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28092(self__.map_LT_,self__.f,self__.ch,self__.meta28090,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28089.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28090","meta28090",-1350582413,null)], null);
});

cljs.core.async.t_cljs$core$async28089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28089";

cljs.core.async.t_cljs$core$async28089.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async28089");
});

cljs.core.async.__GT_t_cljs$core$async28089 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28089(map_LT___$1,f__$1,ch__$1,meta28090){
return (new cljs.core.async.t_cljs$core$async28089(map_LT___$1,f__$1,ch__$1,meta28090));
});

}

return (new cljs.core.async.t_cljs$core$async28089(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28098 = (function (map_GT_,f,ch,meta28099){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28099 = meta28099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28100,meta28099__$1){
var self__ = this;
var _28100__$1 = this;
return (new cljs.core.async.t_cljs$core$async28098(self__.map_GT_,self__.f,self__.ch,meta28099__$1));
});

cljs.core.async.t_cljs$core$async28098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28100){
var self__ = this;
var _28100__$1 = this;
return self__.meta28099;
});

cljs.core.async.t_cljs$core$async28098.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28098.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28098.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28098.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28098.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28098.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28099","meta28099",859301718,null)], null);
});

cljs.core.async.t_cljs$core$async28098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28098";

cljs.core.async.t_cljs$core$async28098.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async28098");
});

cljs.core.async.__GT_t_cljs$core$async28098 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28098(map_GT___$1,f__$1,ch__$1,meta28099){
return (new cljs.core.async.t_cljs$core$async28098(map_GT___$1,f__$1,ch__$1,meta28099));
});

}

return (new cljs.core.async.t_cljs$core$async28098(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28104 = (function (filter_GT_,p,ch,meta28105){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28105 = meta28105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28106,meta28105__$1){
var self__ = this;
var _28106__$1 = this;
return (new cljs.core.async.t_cljs$core$async28104(self__.filter_GT_,self__.p,self__.ch,meta28105__$1));
});

cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28106){
var self__ = this;
var _28106__$1 = this;
return self__.meta28105;
});

cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28105","meta28105",-1599464398,null)], null);
});

cljs.core.async.t_cljs$core$async28104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28104";

cljs.core.async.t_cljs$core$async28104.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async28104");
});

cljs.core.async.__GT_t_cljs$core$async28104 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28104(filter_GT___$1,p__$1,ch__$1,meta28105){
return (new cljs.core.async.t_cljs$core$async28104(filter_GT___$1,p__$1,ch__$1,meta28105));
});

}

return (new cljs.core.async.t_cljs$core$async28104(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28107 = [];
var len__17416__auto___28151 = arguments.length;
var i__17417__auto___28152 = (0);
while(true){
if((i__17417__auto___28152 < len__17416__auto___28151)){
args28107.push((arguments[i__17417__auto___28152]));

var G__28153 = (i__17417__auto___28152 + (1));
i__17417__auto___28152 = G__28153;
continue;
} else {
}
break;
}

var G__28109 = args28107.length;
switch (G__28109) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28107.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___28155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___28155,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___28155,out){
return (function (state_28130){
var state_val_28131 = (state_28130[(1)]);
if((state_val_28131 === (7))){
var inst_28126 = (state_28130[(2)]);
var state_28130__$1 = state_28130;
var statearr_28132_28156 = state_28130__$1;
(statearr_28132_28156[(2)] = inst_28126);

(statearr_28132_28156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (1))){
var state_28130__$1 = state_28130;
var statearr_28133_28157 = state_28130__$1;
(statearr_28133_28157[(2)] = null);

(statearr_28133_28157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (4))){
var inst_28112 = (state_28130[(7)]);
var inst_28112__$1 = (state_28130[(2)]);
var inst_28113 = (inst_28112__$1 == null);
var state_28130__$1 = (function (){var statearr_28134 = state_28130;
(statearr_28134[(7)] = inst_28112__$1);

return statearr_28134;
})();
if(cljs.core.truth_(inst_28113)){
var statearr_28135_28158 = state_28130__$1;
(statearr_28135_28158[(1)] = (5));

} else {
var statearr_28136_28159 = state_28130__$1;
(statearr_28136_28159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (6))){
var inst_28112 = (state_28130[(7)]);
var inst_28117 = p.call(null,inst_28112);
var state_28130__$1 = state_28130;
if(cljs.core.truth_(inst_28117)){
var statearr_28137_28160 = state_28130__$1;
(statearr_28137_28160[(1)] = (8));

} else {
var statearr_28138_28161 = state_28130__$1;
(statearr_28138_28161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (3))){
var inst_28128 = (state_28130[(2)]);
var state_28130__$1 = state_28130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28130__$1,inst_28128);
} else {
if((state_val_28131 === (2))){
var state_28130__$1 = state_28130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28130__$1,(4),ch);
} else {
if((state_val_28131 === (11))){
var inst_28120 = (state_28130[(2)]);
var state_28130__$1 = state_28130;
var statearr_28139_28162 = state_28130__$1;
(statearr_28139_28162[(2)] = inst_28120);

(statearr_28139_28162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (9))){
var state_28130__$1 = state_28130;
var statearr_28140_28163 = state_28130__$1;
(statearr_28140_28163[(2)] = null);

(statearr_28140_28163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (5))){
var inst_28115 = cljs.core.async.close_BANG_.call(null,out);
var state_28130__$1 = state_28130;
var statearr_28141_28164 = state_28130__$1;
(statearr_28141_28164[(2)] = inst_28115);

(statearr_28141_28164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (10))){
var inst_28123 = (state_28130[(2)]);
var state_28130__$1 = (function (){var statearr_28142 = state_28130;
(statearr_28142[(8)] = inst_28123);

return statearr_28142;
})();
var statearr_28143_28165 = state_28130__$1;
(statearr_28143_28165[(2)] = null);

(statearr_28143_28165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28131 === (8))){
var inst_28112 = (state_28130[(7)]);
var state_28130__$1 = state_28130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28130__$1,(11),out,inst_28112);
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
});})(c__19381__auto___28155,out))
;
return ((function (switch__19360__auto__,c__19381__auto___28155,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_28147 = [null,null,null,null,null,null,null,null,null];
(statearr_28147[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_28147[(1)] = (1));

return statearr_28147;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_28130){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_28130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e28148){if((e28148 instanceof Object)){
var ex__19364__auto__ = e28148;
var statearr_28149_28166 = state_28130;
(statearr_28149_28166[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28167 = state_28130;
state_28130 = G__28167;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_28130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_28130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___28155,out))
})();
var state__19383__auto__ = (function (){var statearr_28150 = f__19382__auto__.call(null);
(statearr_28150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___28155);

return statearr_28150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___28155,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28168 = [];
var len__17416__auto___28171 = arguments.length;
var i__17417__auto___28172 = (0);
while(true){
if((i__17417__auto___28172 < len__17416__auto___28171)){
args28168.push((arguments[i__17417__auto___28172]));

var G__28173 = (i__17417__auto___28172 + (1));
i__17417__auto___28172 = G__28173;
continue;
} else {
}
break;
}

var G__28170 = args28168.length;
switch (G__28170) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28168.length)].join('')));

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
return (function (state_28340){
var state_val_28341 = (state_28340[(1)]);
if((state_val_28341 === (7))){
var inst_28336 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
var statearr_28342_28383 = state_28340__$1;
(statearr_28342_28383[(2)] = inst_28336);

(statearr_28342_28383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (20))){
var inst_28306 = (state_28340[(7)]);
var inst_28317 = (state_28340[(2)]);
var inst_28318 = cljs.core.next.call(null,inst_28306);
var inst_28292 = inst_28318;
var inst_28293 = null;
var inst_28294 = (0);
var inst_28295 = (0);
var state_28340__$1 = (function (){var statearr_28343 = state_28340;
(statearr_28343[(8)] = inst_28317);

(statearr_28343[(9)] = inst_28294);

(statearr_28343[(10)] = inst_28292);

(statearr_28343[(11)] = inst_28293);

(statearr_28343[(12)] = inst_28295);

return statearr_28343;
})();
var statearr_28344_28384 = state_28340__$1;
(statearr_28344_28384[(2)] = null);

(statearr_28344_28384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (1))){
var state_28340__$1 = state_28340;
var statearr_28345_28385 = state_28340__$1;
(statearr_28345_28385[(2)] = null);

(statearr_28345_28385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (4))){
var inst_28281 = (state_28340[(13)]);
var inst_28281__$1 = (state_28340[(2)]);
var inst_28282 = (inst_28281__$1 == null);
var state_28340__$1 = (function (){var statearr_28346 = state_28340;
(statearr_28346[(13)] = inst_28281__$1);

return statearr_28346;
})();
if(cljs.core.truth_(inst_28282)){
var statearr_28347_28386 = state_28340__$1;
(statearr_28347_28386[(1)] = (5));

} else {
var statearr_28348_28387 = state_28340__$1;
(statearr_28348_28387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (15))){
var state_28340__$1 = state_28340;
var statearr_28352_28388 = state_28340__$1;
(statearr_28352_28388[(2)] = null);

(statearr_28352_28388[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (21))){
var state_28340__$1 = state_28340;
var statearr_28353_28389 = state_28340__$1;
(statearr_28353_28389[(2)] = null);

(statearr_28353_28389[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (13))){
var inst_28294 = (state_28340[(9)]);
var inst_28292 = (state_28340[(10)]);
var inst_28293 = (state_28340[(11)]);
var inst_28295 = (state_28340[(12)]);
var inst_28302 = (state_28340[(2)]);
var inst_28303 = (inst_28295 + (1));
var tmp28349 = inst_28294;
var tmp28350 = inst_28292;
var tmp28351 = inst_28293;
var inst_28292__$1 = tmp28350;
var inst_28293__$1 = tmp28351;
var inst_28294__$1 = tmp28349;
var inst_28295__$1 = inst_28303;
var state_28340__$1 = (function (){var statearr_28354 = state_28340;
(statearr_28354[(9)] = inst_28294__$1);

(statearr_28354[(10)] = inst_28292__$1);

(statearr_28354[(11)] = inst_28293__$1);

(statearr_28354[(14)] = inst_28302);

(statearr_28354[(12)] = inst_28295__$1);

return statearr_28354;
})();
var statearr_28355_28390 = state_28340__$1;
(statearr_28355_28390[(2)] = null);

(statearr_28355_28390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (22))){
var state_28340__$1 = state_28340;
var statearr_28356_28391 = state_28340__$1;
(statearr_28356_28391[(2)] = null);

(statearr_28356_28391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (6))){
var inst_28281 = (state_28340[(13)]);
var inst_28290 = f.call(null,inst_28281);
var inst_28291 = cljs.core.seq.call(null,inst_28290);
var inst_28292 = inst_28291;
var inst_28293 = null;
var inst_28294 = (0);
var inst_28295 = (0);
var state_28340__$1 = (function (){var statearr_28357 = state_28340;
(statearr_28357[(9)] = inst_28294);

(statearr_28357[(10)] = inst_28292);

(statearr_28357[(11)] = inst_28293);

(statearr_28357[(12)] = inst_28295);

return statearr_28357;
})();
var statearr_28358_28392 = state_28340__$1;
(statearr_28358_28392[(2)] = null);

(statearr_28358_28392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (17))){
var inst_28306 = (state_28340[(7)]);
var inst_28310 = cljs.core.chunk_first.call(null,inst_28306);
var inst_28311 = cljs.core.chunk_rest.call(null,inst_28306);
var inst_28312 = cljs.core.count.call(null,inst_28310);
var inst_28292 = inst_28311;
var inst_28293 = inst_28310;
var inst_28294 = inst_28312;
var inst_28295 = (0);
var state_28340__$1 = (function (){var statearr_28359 = state_28340;
(statearr_28359[(9)] = inst_28294);

(statearr_28359[(10)] = inst_28292);

(statearr_28359[(11)] = inst_28293);

(statearr_28359[(12)] = inst_28295);

return statearr_28359;
})();
var statearr_28360_28393 = state_28340__$1;
(statearr_28360_28393[(2)] = null);

(statearr_28360_28393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (3))){
var inst_28338 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28340__$1,inst_28338);
} else {
if((state_val_28341 === (12))){
var inst_28326 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
var statearr_28361_28394 = state_28340__$1;
(statearr_28361_28394[(2)] = inst_28326);

(statearr_28361_28394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (2))){
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28340__$1,(4),in$);
} else {
if((state_val_28341 === (23))){
var inst_28334 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
var statearr_28362_28395 = state_28340__$1;
(statearr_28362_28395[(2)] = inst_28334);

(statearr_28362_28395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (19))){
var inst_28321 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
var statearr_28363_28396 = state_28340__$1;
(statearr_28363_28396[(2)] = inst_28321);

(statearr_28363_28396[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (11))){
var inst_28292 = (state_28340[(10)]);
var inst_28306 = (state_28340[(7)]);
var inst_28306__$1 = cljs.core.seq.call(null,inst_28292);
var state_28340__$1 = (function (){var statearr_28364 = state_28340;
(statearr_28364[(7)] = inst_28306__$1);

return statearr_28364;
})();
if(inst_28306__$1){
var statearr_28365_28397 = state_28340__$1;
(statearr_28365_28397[(1)] = (14));

} else {
var statearr_28366_28398 = state_28340__$1;
(statearr_28366_28398[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (9))){
var inst_28328 = (state_28340[(2)]);
var inst_28329 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28340__$1 = (function (){var statearr_28367 = state_28340;
(statearr_28367[(15)] = inst_28328);

return statearr_28367;
})();
if(cljs.core.truth_(inst_28329)){
var statearr_28368_28399 = state_28340__$1;
(statearr_28368_28399[(1)] = (21));

} else {
var statearr_28369_28400 = state_28340__$1;
(statearr_28369_28400[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (5))){
var inst_28284 = cljs.core.async.close_BANG_.call(null,out);
var state_28340__$1 = state_28340;
var statearr_28370_28401 = state_28340__$1;
(statearr_28370_28401[(2)] = inst_28284);

(statearr_28370_28401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (14))){
var inst_28306 = (state_28340[(7)]);
var inst_28308 = cljs.core.chunked_seq_QMARK_.call(null,inst_28306);
var state_28340__$1 = state_28340;
if(inst_28308){
var statearr_28371_28402 = state_28340__$1;
(statearr_28371_28402[(1)] = (17));

} else {
var statearr_28372_28403 = state_28340__$1;
(statearr_28372_28403[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (16))){
var inst_28324 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
var statearr_28373_28404 = state_28340__$1;
(statearr_28373_28404[(2)] = inst_28324);

(statearr_28373_28404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (10))){
var inst_28293 = (state_28340[(11)]);
var inst_28295 = (state_28340[(12)]);
var inst_28300 = cljs.core._nth.call(null,inst_28293,inst_28295);
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28340__$1,(13),out,inst_28300);
} else {
if((state_val_28341 === (18))){
var inst_28306 = (state_28340[(7)]);
var inst_28315 = cljs.core.first.call(null,inst_28306);
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28340__$1,(20),out,inst_28315);
} else {
if((state_val_28341 === (8))){
var inst_28294 = (state_28340[(9)]);
var inst_28295 = (state_28340[(12)]);
var inst_28297 = (inst_28295 < inst_28294);
var inst_28298 = inst_28297;
var state_28340__$1 = state_28340;
if(cljs.core.truth_(inst_28298)){
var statearr_28374_28405 = state_28340__$1;
(statearr_28374_28405[(1)] = (10));

} else {
var statearr_28375_28406 = state_28340__$1;
(statearr_28375_28406[(1)] = (11));

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
var statearr_28379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28379[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__);

(statearr_28379[(1)] = (1));

return statearr_28379;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____1 = (function (state_28340){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_28340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e28380){if((e28380 instanceof Object)){
var ex__19364__auto__ = e28380;
var statearr_28381_28407 = state_28340;
(statearr_28381_28407[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28408 = state_28340;
state_28340 = G__28408;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__ = function(state_28340){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____1.call(this,state_28340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__))
})();
var state__19383__auto__ = (function (){var statearr_28382 = f__19382__auto__.call(null);
(statearr_28382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_28382;
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
var args28409 = [];
var len__17416__auto___28412 = arguments.length;
var i__17417__auto___28413 = (0);
while(true){
if((i__17417__auto___28413 < len__17416__auto___28412)){
args28409.push((arguments[i__17417__auto___28413]));

var G__28414 = (i__17417__auto___28413 + (1));
i__17417__auto___28413 = G__28414;
continue;
} else {
}
break;
}

var G__28411 = args28409.length;
switch (G__28411) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28409.length)].join('')));

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
var args28416 = [];
var len__17416__auto___28419 = arguments.length;
var i__17417__auto___28420 = (0);
while(true){
if((i__17417__auto___28420 < len__17416__auto___28419)){
args28416.push((arguments[i__17417__auto___28420]));

var G__28421 = (i__17417__auto___28420 + (1));
i__17417__auto___28420 = G__28421;
continue;
} else {
}
break;
}

var G__28418 = args28416.length;
switch (G__28418) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28416.length)].join('')));

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
var args28423 = [];
var len__17416__auto___28474 = arguments.length;
var i__17417__auto___28475 = (0);
while(true){
if((i__17417__auto___28475 < len__17416__auto___28474)){
args28423.push((arguments[i__17417__auto___28475]));

var G__28476 = (i__17417__auto___28475 + (1));
i__17417__auto___28475 = G__28476;
continue;
} else {
}
break;
}

var G__28425 = args28423.length;
switch (G__28425) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28423.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___28478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___28478,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___28478,out){
return (function (state_28449){
var state_val_28450 = (state_28449[(1)]);
if((state_val_28450 === (7))){
var inst_28444 = (state_28449[(2)]);
var state_28449__$1 = state_28449;
var statearr_28451_28479 = state_28449__$1;
(statearr_28451_28479[(2)] = inst_28444);

(statearr_28451_28479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28450 === (1))){
var inst_28426 = null;
var state_28449__$1 = (function (){var statearr_28452 = state_28449;
(statearr_28452[(7)] = inst_28426);

return statearr_28452;
})();
var statearr_28453_28480 = state_28449__$1;
(statearr_28453_28480[(2)] = null);

(statearr_28453_28480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28450 === (4))){
var inst_28429 = (state_28449[(8)]);
var inst_28429__$1 = (state_28449[(2)]);
var inst_28430 = (inst_28429__$1 == null);
var inst_28431 = cljs.core.not.call(null,inst_28430);
var state_28449__$1 = (function (){var statearr_28454 = state_28449;
(statearr_28454[(8)] = inst_28429__$1);

return statearr_28454;
})();
if(inst_28431){
var statearr_28455_28481 = state_28449__$1;
(statearr_28455_28481[(1)] = (5));

} else {
var statearr_28456_28482 = state_28449__$1;
(statearr_28456_28482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28450 === (6))){
var state_28449__$1 = state_28449;
var statearr_28457_28483 = state_28449__$1;
(statearr_28457_28483[(2)] = null);

(statearr_28457_28483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28450 === (3))){
var inst_28446 = (state_28449[(2)]);
var inst_28447 = cljs.core.async.close_BANG_.call(null,out);
var state_28449__$1 = (function (){var statearr_28458 = state_28449;
(statearr_28458[(9)] = inst_28446);

return statearr_28458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28449__$1,inst_28447);
} else {
if((state_val_28450 === (2))){
var state_28449__$1 = state_28449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28449__$1,(4),ch);
} else {
if((state_val_28450 === (11))){
var inst_28429 = (state_28449[(8)]);
var inst_28438 = (state_28449[(2)]);
var inst_28426 = inst_28429;
var state_28449__$1 = (function (){var statearr_28459 = state_28449;
(statearr_28459[(7)] = inst_28426);

(statearr_28459[(10)] = inst_28438);

return statearr_28459;
})();
var statearr_28460_28484 = state_28449__$1;
(statearr_28460_28484[(2)] = null);

(statearr_28460_28484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28450 === (9))){
var inst_28429 = (state_28449[(8)]);
var state_28449__$1 = state_28449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28449__$1,(11),out,inst_28429);
} else {
if((state_val_28450 === (5))){
var inst_28426 = (state_28449[(7)]);
var inst_28429 = (state_28449[(8)]);
var inst_28433 = cljs.core._EQ_.call(null,inst_28429,inst_28426);
var state_28449__$1 = state_28449;
if(inst_28433){
var statearr_28462_28485 = state_28449__$1;
(statearr_28462_28485[(1)] = (8));

} else {
var statearr_28463_28486 = state_28449__$1;
(statearr_28463_28486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28450 === (10))){
var inst_28441 = (state_28449[(2)]);
var state_28449__$1 = state_28449;
var statearr_28464_28487 = state_28449__$1;
(statearr_28464_28487[(2)] = inst_28441);

(statearr_28464_28487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28450 === (8))){
var inst_28426 = (state_28449[(7)]);
var tmp28461 = inst_28426;
var inst_28426__$1 = tmp28461;
var state_28449__$1 = (function (){var statearr_28465 = state_28449;
(statearr_28465[(7)] = inst_28426__$1);

return statearr_28465;
})();
var statearr_28466_28488 = state_28449__$1;
(statearr_28466_28488[(2)] = null);

(statearr_28466_28488[(1)] = (2));


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
});})(c__19381__auto___28478,out))
;
return ((function (switch__19360__auto__,c__19381__auto___28478,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_28470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28470[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_28470[(1)] = (1));

return statearr_28470;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_28449){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_28449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e28471){if((e28471 instanceof Object)){
var ex__19364__auto__ = e28471;
var statearr_28472_28489 = state_28449;
(statearr_28472_28489[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28490 = state_28449;
state_28449 = G__28490;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_28449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_28449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___28478,out))
})();
var state__19383__auto__ = (function (){var statearr_28473 = f__19382__auto__.call(null);
(statearr_28473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___28478);

return statearr_28473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___28478,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28491 = [];
var len__17416__auto___28561 = arguments.length;
var i__17417__auto___28562 = (0);
while(true){
if((i__17417__auto___28562 < len__17416__auto___28561)){
args28491.push((arguments[i__17417__auto___28562]));

var G__28563 = (i__17417__auto___28562 + (1));
i__17417__auto___28562 = G__28563;
continue;
} else {
}
break;
}

var G__28493 = args28491.length;
switch (G__28493) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28491.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___28565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___28565,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___28565,out){
return (function (state_28531){
var state_val_28532 = (state_28531[(1)]);
if((state_val_28532 === (7))){
var inst_28527 = (state_28531[(2)]);
var state_28531__$1 = state_28531;
var statearr_28533_28566 = state_28531__$1;
(statearr_28533_28566[(2)] = inst_28527);

(statearr_28533_28566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (1))){
var inst_28494 = (new Array(n));
var inst_28495 = inst_28494;
var inst_28496 = (0);
var state_28531__$1 = (function (){var statearr_28534 = state_28531;
(statearr_28534[(7)] = inst_28495);

(statearr_28534[(8)] = inst_28496);

return statearr_28534;
})();
var statearr_28535_28567 = state_28531__$1;
(statearr_28535_28567[(2)] = null);

(statearr_28535_28567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (4))){
var inst_28499 = (state_28531[(9)]);
var inst_28499__$1 = (state_28531[(2)]);
var inst_28500 = (inst_28499__$1 == null);
var inst_28501 = cljs.core.not.call(null,inst_28500);
var state_28531__$1 = (function (){var statearr_28536 = state_28531;
(statearr_28536[(9)] = inst_28499__$1);

return statearr_28536;
})();
if(inst_28501){
var statearr_28537_28568 = state_28531__$1;
(statearr_28537_28568[(1)] = (5));

} else {
var statearr_28538_28569 = state_28531__$1;
(statearr_28538_28569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (15))){
var inst_28521 = (state_28531[(2)]);
var state_28531__$1 = state_28531;
var statearr_28539_28570 = state_28531__$1;
(statearr_28539_28570[(2)] = inst_28521);

(statearr_28539_28570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (13))){
var state_28531__$1 = state_28531;
var statearr_28540_28571 = state_28531__$1;
(statearr_28540_28571[(2)] = null);

(statearr_28540_28571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (6))){
var inst_28496 = (state_28531[(8)]);
var inst_28517 = (inst_28496 > (0));
var state_28531__$1 = state_28531;
if(cljs.core.truth_(inst_28517)){
var statearr_28541_28572 = state_28531__$1;
(statearr_28541_28572[(1)] = (12));

} else {
var statearr_28542_28573 = state_28531__$1;
(statearr_28542_28573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (3))){
var inst_28529 = (state_28531[(2)]);
var state_28531__$1 = state_28531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28531__$1,inst_28529);
} else {
if((state_val_28532 === (12))){
var inst_28495 = (state_28531[(7)]);
var inst_28519 = cljs.core.vec.call(null,inst_28495);
var state_28531__$1 = state_28531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28531__$1,(15),out,inst_28519);
} else {
if((state_val_28532 === (2))){
var state_28531__$1 = state_28531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28531__$1,(4),ch);
} else {
if((state_val_28532 === (11))){
var inst_28511 = (state_28531[(2)]);
var inst_28512 = (new Array(n));
var inst_28495 = inst_28512;
var inst_28496 = (0);
var state_28531__$1 = (function (){var statearr_28543 = state_28531;
(statearr_28543[(7)] = inst_28495);

(statearr_28543[(10)] = inst_28511);

(statearr_28543[(8)] = inst_28496);

return statearr_28543;
})();
var statearr_28544_28574 = state_28531__$1;
(statearr_28544_28574[(2)] = null);

(statearr_28544_28574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (9))){
var inst_28495 = (state_28531[(7)]);
var inst_28509 = cljs.core.vec.call(null,inst_28495);
var state_28531__$1 = state_28531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28531__$1,(11),out,inst_28509);
} else {
if((state_val_28532 === (5))){
var inst_28499 = (state_28531[(9)]);
var inst_28504 = (state_28531[(11)]);
var inst_28495 = (state_28531[(7)]);
var inst_28496 = (state_28531[(8)]);
var inst_28503 = (inst_28495[inst_28496] = inst_28499);
var inst_28504__$1 = (inst_28496 + (1));
var inst_28505 = (inst_28504__$1 < n);
var state_28531__$1 = (function (){var statearr_28545 = state_28531;
(statearr_28545[(11)] = inst_28504__$1);

(statearr_28545[(12)] = inst_28503);

return statearr_28545;
})();
if(cljs.core.truth_(inst_28505)){
var statearr_28546_28575 = state_28531__$1;
(statearr_28546_28575[(1)] = (8));

} else {
var statearr_28547_28576 = state_28531__$1;
(statearr_28547_28576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (14))){
var inst_28524 = (state_28531[(2)]);
var inst_28525 = cljs.core.async.close_BANG_.call(null,out);
var state_28531__$1 = (function (){var statearr_28549 = state_28531;
(statearr_28549[(13)] = inst_28524);

return statearr_28549;
})();
var statearr_28550_28577 = state_28531__$1;
(statearr_28550_28577[(2)] = inst_28525);

(statearr_28550_28577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (10))){
var inst_28515 = (state_28531[(2)]);
var state_28531__$1 = state_28531;
var statearr_28551_28578 = state_28531__$1;
(statearr_28551_28578[(2)] = inst_28515);

(statearr_28551_28578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (8))){
var inst_28504 = (state_28531[(11)]);
var inst_28495 = (state_28531[(7)]);
var tmp28548 = inst_28495;
var inst_28495__$1 = tmp28548;
var inst_28496 = inst_28504;
var state_28531__$1 = (function (){var statearr_28552 = state_28531;
(statearr_28552[(7)] = inst_28495__$1);

(statearr_28552[(8)] = inst_28496);

return statearr_28552;
})();
var statearr_28553_28579 = state_28531__$1;
(statearr_28553_28579[(2)] = null);

(statearr_28553_28579[(1)] = (2));


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
});})(c__19381__auto___28565,out))
;
return ((function (switch__19360__auto__,c__19381__auto___28565,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_28557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28557[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_28557[(1)] = (1));

return statearr_28557;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_28531){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_28531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e28558){if((e28558 instanceof Object)){
var ex__19364__auto__ = e28558;
var statearr_28559_28580 = state_28531;
(statearr_28559_28580[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28581 = state_28531;
state_28531 = G__28581;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_28531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_28531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___28565,out))
})();
var state__19383__auto__ = (function (){var statearr_28560 = f__19382__auto__.call(null);
(statearr_28560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___28565);

return statearr_28560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___28565,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28582 = [];
var len__17416__auto___28656 = arguments.length;
var i__17417__auto___28657 = (0);
while(true){
if((i__17417__auto___28657 < len__17416__auto___28656)){
args28582.push((arguments[i__17417__auto___28657]));

var G__28658 = (i__17417__auto___28657 + (1));
i__17417__auto___28657 = G__28658;
continue;
} else {
}
break;
}

var G__28584 = args28582.length;
switch (G__28584) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28582.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___28660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___28660,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___28660,out){
return (function (state_28626){
var state_val_28627 = (state_28626[(1)]);
if((state_val_28627 === (7))){
var inst_28622 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28628_28661 = state_28626__$1;
(statearr_28628_28661[(2)] = inst_28622);

(statearr_28628_28661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (1))){
var inst_28585 = [];
var inst_28586 = inst_28585;
var inst_28587 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28626__$1 = (function (){var statearr_28629 = state_28626;
(statearr_28629[(7)] = inst_28586);

(statearr_28629[(8)] = inst_28587);

return statearr_28629;
})();
var statearr_28630_28662 = state_28626__$1;
(statearr_28630_28662[(2)] = null);

(statearr_28630_28662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (4))){
var inst_28590 = (state_28626[(9)]);
var inst_28590__$1 = (state_28626[(2)]);
var inst_28591 = (inst_28590__$1 == null);
var inst_28592 = cljs.core.not.call(null,inst_28591);
var state_28626__$1 = (function (){var statearr_28631 = state_28626;
(statearr_28631[(9)] = inst_28590__$1);

return statearr_28631;
})();
if(inst_28592){
var statearr_28632_28663 = state_28626__$1;
(statearr_28632_28663[(1)] = (5));

} else {
var statearr_28633_28664 = state_28626__$1;
(statearr_28633_28664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (15))){
var inst_28616 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28634_28665 = state_28626__$1;
(statearr_28634_28665[(2)] = inst_28616);

(statearr_28634_28665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (13))){
var state_28626__$1 = state_28626;
var statearr_28635_28666 = state_28626__$1;
(statearr_28635_28666[(2)] = null);

(statearr_28635_28666[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (6))){
var inst_28586 = (state_28626[(7)]);
var inst_28611 = inst_28586.length;
var inst_28612 = (inst_28611 > (0));
var state_28626__$1 = state_28626;
if(cljs.core.truth_(inst_28612)){
var statearr_28636_28667 = state_28626__$1;
(statearr_28636_28667[(1)] = (12));

} else {
var statearr_28637_28668 = state_28626__$1;
(statearr_28637_28668[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (3))){
var inst_28624 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28626__$1,inst_28624);
} else {
if((state_val_28627 === (12))){
var inst_28586 = (state_28626[(7)]);
var inst_28614 = cljs.core.vec.call(null,inst_28586);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28626__$1,(15),out,inst_28614);
} else {
if((state_val_28627 === (2))){
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28626__$1,(4),ch);
} else {
if((state_val_28627 === (11))){
var inst_28590 = (state_28626[(9)]);
var inst_28594 = (state_28626[(10)]);
var inst_28604 = (state_28626[(2)]);
var inst_28605 = [];
var inst_28606 = inst_28605.push(inst_28590);
var inst_28586 = inst_28605;
var inst_28587 = inst_28594;
var state_28626__$1 = (function (){var statearr_28638 = state_28626;
(statearr_28638[(11)] = inst_28604);

(statearr_28638[(7)] = inst_28586);

(statearr_28638[(12)] = inst_28606);

(statearr_28638[(8)] = inst_28587);

return statearr_28638;
})();
var statearr_28639_28669 = state_28626__$1;
(statearr_28639_28669[(2)] = null);

(statearr_28639_28669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (9))){
var inst_28586 = (state_28626[(7)]);
var inst_28602 = cljs.core.vec.call(null,inst_28586);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28626__$1,(11),out,inst_28602);
} else {
if((state_val_28627 === (5))){
var inst_28590 = (state_28626[(9)]);
var inst_28587 = (state_28626[(8)]);
var inst_28594 = (state_28626[(10)]);
var inst_28594__$1 = f.call(null,inst_28590);
var inst_28595 = cljs.core._EQ_.call(null,inst_28594__$1,inst_28587);
var inst_28596 = cljs.core.keyword_identical_QMARK_.call(null,inst_28587,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28597 = (inst_28595) || (inst_28596);
var state_28626__$1 = (function (){var statearr_28640 = state_28626;
(statearr_28640[(10)] = inst_28594__$1);

return statearr_28640;
})();
if(cljs.core.truth_(inst_28597)){
var statearr_28641_28670 = state_28626__$1;
(statearr_28641_28670[(1)] = (8));

} else {
var statearr_28642_28671 = state_28626__$1;
(statearr_28642_28671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (14))){
var inst_28619 = (state_28626[(2)]);
var inst_28620 = cljs.core.async.close_BANG_.call(null,out);
var state_28626__$1 = (function (){var statearr_28644 = state_28626;
(statearr_28644[(13)] = inst_28619);

return statearr_28644;
})();
var statearr_28645_28672 = state_28626__$1;
(statearr_28645_28672[(2)] = inst_28620);

(statearr_28645_28672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (10))){
var inst_28609 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28646_28673 = state_28626__$1;
(statearr_28646_28673[(2)] = inst_28609);

(statearr_28646_28673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (8))){
var inst_28586 = (state_28626[(7)]);
var inst_28590 = (state_28626[(9)]);
var inst_28594 = (state_28626[(10)]);
var inst_28599 = inst_28586.push(inst_28590);
var tmp28643 = inst_28586;
var inst_28586__$1 = tmp28643;
var inst_28587 = inst_28594;
var state_28626__$1 = (function (){var statearr_28647 = state_28626;
(statearr_28647[(7)] = inst_28586__$1);

(statearr_28647[(14)] = inst_28599);

(statearr_28647[(8)] = inst_28587);

return statearr_28647;
})();
var statearr_28648_28674 = state_28626__$1;
(statearr_28648_28674[(2)] = null);

(statearr_28648_28674[(1)] = (2));


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
});})(c__19381__auto___28660,out))
;
return ((function (switch__19360__auto__,c__19381__auto___28660,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_28652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28652[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_28652[(1)] = (1));

return statearr_28652;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_28626){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_28626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e28653){if((e28653 instanceof Object)){
var ex__19364__auto__ = e28653;
var statearr_28654_28675 = state_28626;
(statearr_28654_28675[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28676 = state_28626;
state_28626 = G__28676;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_28626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_28626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___28660,out))
})();
var state__19383__auto__ = (function (){var statearr_28655 = f__19382__auto__.call(null);
(statearr_28655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___28660);

return statearr_28655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___28660,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map