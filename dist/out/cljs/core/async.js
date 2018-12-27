// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31078 = arguments.length;
switch (G__31078) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31079 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31079 = (function (f,blockable,meta31080){
this.f = f;
this.blockable = blockable;
this.meta31080 = meta31080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31081,meta31080__$1){
var self__ = this;
var _31081__$1 = this;
return (new cljs.core.async.t_cljs$core$async31079(self__.f,self__.blockable,meta31080__$1));
});

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31081){
var self__ = this;
var _31081__$1 = this;
return self__.meta31080;
});

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31080","meta31080",1347087362,null)], null);
});

cljs.core.async.t_cljs$core$async31079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31079";

cljs.core.async.t_cljs$core$async31079.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31079");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31079.
 */
cljs.core.async.__GT_t_cljs$core$async31079 = (function cljs$core$async$__GT_t_cljs$core$async31079(f__$1,blockable__$1,meta31080){
return (new cljs.core.async.t_cljs$core$async31079(f__$1,blockable__$1,meta31080));
});

}

return (new cljs.core.async.t_cljs$core$async31079(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__31085 = arguments.length;
switch (G__31085) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31088 = arguments.length;
switch (G__31088) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__31091 = arguments.length;
switch (G__31091) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31093 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31093);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31093,ret){
return (function (){
return fn1.call(null,val_31093);
});})(val_31093,ret))
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
var G__31095 = arguments.length;
switch (G__31095) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
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
var n__4518__auto___31097 = n;
var x_31098 = (0);
while(true){
if((x_31098 < n__4518__auto___31097)){
(a[x_31098] = (0));

var G__31099 = (x_31098 + (1));
x_31098 = G__31099;
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

var G__31100 = (i + (1));
i = G__31100;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31101 = (function (flag,meta31102){
this.flag = flag;
this.meta31102 = meta31102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31103,meta31102__$1){
var self__ = this;
var _31103__$1 = this;
return (new cljs.core.async.t_cljs$core$async31101(self__.flag,meta31102__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31103){
var self__ = this;
var _31103__$1 = this;
return self__.meta31102;
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31102","meta31102",-706429532,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31101";

cljs.core.async.t_cljs$core$async31101.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31101");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31101.
 */
cljs.core.async.__GT_t_cljs$core$async31101 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31101(flag__$1,meta31102){
return (new cljs.core.async.t_cljs$core$async31101(flag__$1,meta31102));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31101(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31104 = (function (flag,cb,meta31105){
this.flag = flag;
this.cb = cb;
this.meta31105 = meta31105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31106,meta31105__$1){
var self__ = this;
var _31106__$1 = this;
return (new cljs.core.async.t_cljs$core$async31104(self__.flag,self__.cb,meta31105__$1));
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31106){
var self__ = this;
var _31106__$1 = this;
return self__.meta31105;
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31105","meta31105",1740122376,null)], null);
});

cljs.core.async.t_cljs$core$async31104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31104";

cljs.core.async.t_cljs$core$async31104.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31104");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31104.
 */
cljs.core.async.__GT_t_cljs$core$async31104 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31104(flag__$1,cb__$1,meta31105){
return (new cljs.core.async.t_cljs$core$async31104(flag__$1,cb__$1,meta31105));
});

}

return (new cljs.core.async.t_cljs$core$async31104(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31107_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31107_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31108_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31108_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31109 = (i + (1));
i = G__31109;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4647__auto__ = [];
var len__4641__auto___31115 = arguments.length;
var i__4642__auto___31116 = (0);
while(true){
if((i__4642__auto___31116 < len__4641__auto___31115)){
args__4647__auto__.push((arguments[i__4642__auto___31116]));

var G__31117 = (i__4642__auto___31116 + (1));
i__4642__auto___31116 = G__31117;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31112){
var map__31113 = p__31112;
var map__31113__$1 = (((((!((map__31113 == null))))?(((((map__31113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31113):map__31113);
var opts = map__31113__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31110){
var G__31111 = cljs.core.first.call(null,seq31110);
var seq31110__$1 = cljs.core.next.call(null,seq31110);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31111,seq31110__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31119 = arguments.length;
switch (G__31119) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29154__auto___31165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___31165){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___31165){
return (function (state_31143){
var state_val_31144 = (state_31143[(1)]);
if((state_val_31144 === (7))){
var inst_31139 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31145_31166 = state_31143__$1;
(statearr_31145_31166[(2)] = inst_31139);

(statearr_31145_31166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (1))){
var state_31143__$1 = state_31143;
var statearr_31146_31167 = state_31143__$1;
(statearr_31146_31167[(2)] = null);

(statearr_31146_31167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (4))){
var inst_31122 = (state_31143[(7)]);
var inst_31122__$1 = (state_31143[(2)]);
var inst_31123 = (inst_31122__$1 == null);
var state_31143__$1 = (function (){var statearr_31147 = state_31143;
(statearr_31147[(7)] = inst_31122__$1);

return statearr_31147;
})();
if(cljs.core.truth_(inst_31123)){
var statearr_31148_31168 = state_31143__$1;
(statearr_31148_31168[(1)] = (5));

} else {
var statearr_31149_31169 = state_31143__$1;
(statearr_31149_31169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (13))){
var state_31143__$1 = state_31143;
var statearr_31150_31170 = state_31143__$1;
(statearr_31150_31170[(2)] = null);

(statearr_31150_31170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (6))){
var inst_31122 = (state_31143[(7)]);
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31143__$1,(11),to,inst_31122);
} else {
if((state_val_31144 === (3))){
var inst_31141 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31143__$1,inst_31141);
} else {
if((state_val_31144 === (12))){
var state_31143__$1 = state_31143;
var statearr_31151_31171 = state_31143__$1;
(statearr_31151_31171[(2)] = null);

(statearr_31151_31171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (2))){
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31143__$1,(4),from);
} else {
if((state_val_31144 === (11))){
var inst_31132 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31132)){
var statearr_31152_31172 = state_31143__$1;
(statearr_31152_31172[(1)] = (12));

} else {
var statearr_31153_31173 = state_31143__$1;
(statearr_31153_31173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (9))){
var state_31143__$1 = state_31143;
var statearr_31154_31174 = state_31143__$1;
(statearr_31154_31174[(2)] = null);

(statearr_31154_31174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (5))){
var state_31143__$1 = state_31143;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31155_31175 = state_31143__$1;
(statearr_31155_31175[(1)] = (8));

} else {
var statearr_31156_31176 = state_31143__$1;
(statearr_31156_31176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (14))){
var inst_31137 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31157_31177 = state_31143__$1;
(statearr_31157_31177[(2)] = inst_31137);

(statearr_31157_31177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (10))){
var inst_31129 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31158_31178 = state_31143__$1;
(statearr_31158_31178[(2)] = inst_31129);

(statearr_31158_31178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (8))){
var inst_31126 = cljs.core.async.close_BANG_.call(null,to);
var state_31143__$1 = state_31143;
var statearr_31159_31179 = state_31143__$1;
(statearr_31159_31179[(2)] = inst_31126);

(statearr_31159_31179[(1)] = (10));


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
});})(c__29154__auto___31165))
;
return ((function (switch__28987__auto__,c__29154__auto___31165){
return (function() {
var cljs$core$async$state_machine__28988__auto__ = null;
var cljs$core$async$state_machine__28988__auto____0 = (function (){
var statearr_31160 = [null,null,null,null,null,null,null,null];
(statearr_31160[(0)] = cljs$core$async$state_machine__28988__auto__);

(statearr_31160[(1)] = (1));

return statearr_31160;
});
var cljs$core$async$state_machine__28988__auto____1 = (function (state_31143){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_31143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e31161){if((e31161 instanceof Object)){
var ex__28991__auto__ = e31161;
var statearr_31162_31180 = state_31143;
(statearr_31162_31180[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31181 = state_31143;
state_31143 = G__31181;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$state_machine__28988__auto__ = function(state_31143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28988__auto____1.call(this,state_31143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28988__auto____0;
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28988__auto____1;
return cljs$core$async$state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___31165))
})();
var state__29156__auto__ = (function (){var statearr_31163 = f__29155__auto__.call(null);
(statearr_31163[(6)] = c__29154__auto___31165);

return statearr_31163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___31165))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31182){
var vec__31183 = p__31182;
var v = cljs.core.nth.call(null,vec__31183,(0),null);
var p = cljs.core.nth.call(null,vec__31183,(1),null);
var job = vec__31183;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29154__auto___31354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___31354,res,vec__31183,v,p,job,jobs,results){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___31354,res,vec__31183,v,p,job,jobs,results){
return (function (state_31190){
var state_val_31191 = (state_31190[(1)]);
if((state_val_31191 === (1))){
var state_31190__$1 = state_31190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31190__$1,(2),res,v);
} else {
if((state_val_31191 === (2))){
var inst_31187 = (state_31190[(2)]);
var inst_31188 = cljs.core.async.close_BANG_.call(null,res);
var state_31190__$1 = (function (){var statearr_31192 = state_31190;
(statearr_31192[(7)] = inst_31187);

return statearr_31192;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31190__$1,inst_31188);
} else {
return null;
}
}
});})(c__29154__auto___31354,res,vec__31183,v,p,job,jobs,results))
;
return ((function (switch__28987__auto__,c__29154__auto___31354,res,vec__31183,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0 = (function (){
var statearr_31193 = [null,null,null,null,null,null,null,null];
(statearr_31193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__);

(statearr_31193[(1)] = (1));

return statearr_31193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1 = (function (state_31190){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_31190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e31194){if((e31194 instanceof Object)){
var ex__28991__auto__ = e31194;
var statearr_31195_31355 = state_31190;
(statearr_31195_31355[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31356 = state_31190;
state_31190 = G__31356;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__ = function(state_31190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1.call(this,state_31190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___31354,res,vec__31183,v,p,job,jobs,results))
})();
var state__29156__auto__ = (function (){var statearr_31196 = f__29155__auto__.call(null);
(statearr_31196[(6)] = c__29154__auto___31354);

return statearr_31196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___31354,res,vec__31183,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31197){
var vec__31198 = p__31197;
var v = cljs.core.nth.call(null,vec__31198,(0),null);
var p = cljs.core.nth.call(null,vec__31198,(1),null);
var job = vec__31198;
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
var n__4518__auto___31357 = n;
var __31358 = (0);
while(true){
if((__31358 < n__4518__auto___31357)){
var G__31201_31359 = type;
var G__31201_31360__$1 = (((G__31201_31359 instanceof cljs.core.Keyword))?G__31201_31359.fqn:null);
switch (G__31201_31360__$1) {
case "compute":
var c__29154__auto___31362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31358,c__29154__auto___31362,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (__31358,c__29154__auto___31362,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async){
return (function (state_31214){
var state_val_31215 = (state_31214[(1)]);
if((state_val_31215 === (1))){
var state_31214__$1 = state_31214;
var statearr_31216_31363 = state_31214__$1;
(statearr_31216_31363[(2)] = null);

(statearr_31216_31363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (2))){
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31214__$1,(4),jobs);
} else {
if((state_val_31215 === (3))){
var inst_31212 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31214__$1,inst_31212);
} else {
if((state_val_31215 === (4))){
var inst_31204 = (state_31214[(2)]);
var inst_31205 = process.call(null,inst_31204);
var state_31214__$1 = state_31214;
if(cljs.core.truth_(inst_31205)){
var statearr_31217_31364 = state_31214__$1;
(statearr_31217_31364[(1)] = (5));

} else {
var statearr_31218_31365 = state_31214__$1;
(statearr_31218_31365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (5))){
var state_31214__$1 = state_31214;
var statearr_31219_31366 = state_31214__$1;
(statearr_31219_31366[(2)] = null);

(statearr_31219_31366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (6))){
var state_31214__$1 = state_31214;
var statearr_31220_31367 = state_31214__$1;
(statearr_31220_31367[(2)] = null);

(statearr_31220_31367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (7))){
var inst_31210 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
var statearr_31221_31368 = state_31214__$1;
(statearr_31221_31368[(2)] = inst_31210);

(statearr_31221_31368[(1)] = (3));


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
});})(__31358,c__29154__auto___31362,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async))
;
return ((function (__31358,switch__28987__auto__,c__29154__auto___31362,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0 = (function (){
var statearr_31222 = [null,null,null,null,null,null,null];
(statearr_31222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__);

(statearr_31222[(1)] = (1));

return statearr_31222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1 = (function (state_31214){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_31214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e31223){if((e31223 instanceof Object)){
var ex__28991__auto__ = e31223;
var statearr_31224_31369 = state_31214;
(statearr_31224_31369[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31370 = state_31214;
state_31214 = G__31370;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__ = function(state_31214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1.call(this,state_31214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__;
})()
;})(__31358,switch__28987__auto__,c__29154__auto___31362,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async))
})();
var state__29156__auto__ = (function (){var statearr_31225 = f__29155__auto__.call(null);
(statearr_31225[(6)] = c__29154__auto___31362);

return statearr_31225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(__31358,c__29154__auto___31362,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async))
);


break;
case "async":
var c__29154__auto___31371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31358,c__29154__auto___31371,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (__31358,c__29154__auto___31371,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async){
return (function (state_31238){
var state_val_31239 = (state_31238[(1)]);
if((state_val_31239 === (1))){
var state_31238__$1 = state_31238;
var statearr_31240_31372 = state_31238__$1;
(statearr_31240_31372[(2)] = null);

(statearr_31240_31372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (2))){
var state_31238__$1 = state_31238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31238__$1,(4),jobs);
} else {
if((state_val_31239 === (3))){
var inst_31236 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31238__$1,inst_31236);
} else {
if((state_val_31239 === (4))){
var inst_31228 = (state_31238[(2)]);
var inst_31229 = async.call(null,inst_31228);
var state_31238__$1 = state_31238;
if(cljs.core.truth_(inst_31229)){
var statearr_31241_31373 = state_31238__$1;
(statearr_31241_31373[(1)] = (5));

} else {
var statearr_31242_31374 = state_31238__$1;
(statearr_31242_31374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (5))){
var state_31238__$1 = state_31238;
var statearr_31243_31375 = state_31238__$1;
(statearr_31243_31375[(2)] = null);

(statearr_31243_31375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (6))){
var state_31238__$1 = state_31238;
var statearr_31244_31376 = state_31238__$1;
(statearr_31244_31376[(2)] = null);

(statearr_31244_31376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (7))){
var inst_31234 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
var statearr_31245_31377 = state_31238__$1;
(statearr_31245_31377[(2)] = inst_31234);

(statearr_31245_31377[(1)] = (3));


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
});})(__31358,c__29154__auto___31371,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async))
;
return ((function (__31358,switch__28987__auto__,c__29154__auto___31371,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0 = (function (){
var statearr_31246 = [null,null,null,null,null,null,null];
(statearr_31246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__);

(statearr_31246[(1)] = (1));

return statearr_31246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1 = (function (state_31238){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_31238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e31247){if((e31247 instanceof Object)){
var ex__28991__auto__ = e31247;
var statearr_31248_31378 = state_31238;
(statearr_31248_31378[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31379 = state_31238;
state_31238 = G__31379;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__ = function(state_31238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1.call(this,state_31238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__;
})()
;})(__31358,switch__28987__auto__,c__29154__auto___31371,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async))
})();
var state__29156__auto__ = (function (){var statearr_31249 = f__29155__auto__.call(null);
(statearr_31249[(6)] = c__29154__auto___31371);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(__31358,c__29154__auto___31371,G__31201_31359,G__31201_31360__$1,n__4518__auto___31357,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31201_31360__$1)].join('')));

}

var G__31380 = (__31358 + (1));
__31358 = G__31380;
continue;
} else {
}
break;
}

var c__29154__auto___31381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___31381,jobs,results,process,async){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___31381,jobs,results,process,async){
return (function (state_31271){
var state_val_31272 = (state_31271[(1)]);
if((state_val_31272 === (7))){
var inst_31267 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31273_31382 = state_31271__$1;
(statearr_31273_31382[(2)] = inst_31267);

(statearr_31273_31382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (1))){
var state_31271__$1 = state_31271;
var statearr_31274_31383 = state_31271__$1;
(statearr_31274_31383[(2)] = null);

(statearr_31274_31383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (4))){
var inst_31252 = (state_31271[(7)]);
var inst_31252__$1 = (state_31271[(2)]);
var inst_31253 = (inst_31252__$1 == null);
var state_31271__$1 = (function (){var statearr_31275 = state_31271;
(statearr_31275[(7)] = inst_31252__$1);

return statearr_31275;
})();
if(cljs.core.truth_(inst_31253)){
var statearr_31276_31384 = state_31271__$1;
(statearr_31276_31384[(1)] = (5));

} else {
var statearr_31277_31385 = state_31271__$1;
(statearr_31277_31385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (6))){
var inst_31257 = (state_31271[(8)]);
var inst_31252 = (state_31271[(7)]);
var inst_31257__$1 = cljs.core.async.chan.call(null,(1));
var inst_31258 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31259 = [inst_31252,inst_31257__$1];
var inst_31260 = (new cljs.core.PersistentVector(null,2,(5),inst_31258,inst_31259,null));
var state_31271__$1 = (function (){var statearr_31278 = state_31271;
(statearr_31278[(8)] = inst_31257__$1);

return statearr_31278;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31271__$1,(8),jobs,inst_31260);
} else {
if((state_val_31272 === (3))){
var inst_31269 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31271__$1,inst_31269);
} else {
if((state_val_31272 === (2))){
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31271__$1,(4),from);
} else {
if((state_val_31272 === (9))){
var inst_31264 = (state_31271[(2)]);
var state_31271__$1 = (function (){var statearr_31279 = state_31271;
(statearr_31279[(9)] = inst_31264);

return statearr_31279;
})();
var statearr_31280_31386 = state_31271__$1;
(statearr_31280_31386[(2)] = null);

(statearr_31280_31386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (5))){
var inst_31255 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31271__$1 = state_31271;
var statearr_31281_31387 = state_31271__$1;
(statearr_31281_31387[(2)] = inst_31255);

(statearr_31281_31387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (8))){
var inst_31257 = (state_31271[(8)]);
var inst_31262 = (state_31271[(2)]);
var state_31271__$1 = (function (){var statearr_31282 = state_31271;
(statearr_31282[(10)] = inst_31262);

return statearr_31282;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31271__$1,(9),results,inst_31257);
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
});})(c__29154__auto___31381,jobs,results,process,async))
;
return ((function (switch__28987__auto__,c__29154__auto___31381,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0 = (function (){
var statearr_31283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__);

(statearr_31283[(1)] = (1));

return statearr_31283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1 = (function (state_31271){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_31271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e31284){if((e31284 instanceof Object)){
var ex__28991__auto__ = e31284;
var statearr_31285_31388 = state_31271;
(statearr_31285_31388[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31389 = state_31271;
state_31271 = G__31389;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__ = function(state_31271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1.call(this,state_31271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___31381,jobs,results,process,async))
})();
var state__29156__auto__ = (function (){var statearr_31286 = f__29155__auto__.call(null);
(statearr_31286[(6)] = c__29154__auto___31381);

return statearr_31286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___31381,jobs,results,process,async))
);


var c__29154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto__,jobs,results,process,async){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto__,jobs,results,process,async){
return (function (state_31324){
var state_val_31325 = (state_31324[(1)]);
if((state_val_31325 === (7))){
var inst_31320 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31326_31390 = state_31324__$1;
(statearr_31326_31390[(2)] = inst_31320);

(statearr_31326_31390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (20))){
var state_31324__$1 = state_31324;
var statearr_31327_31391 = state_31324__$1;
(statearr_31327_31391[(2)] = null);

(statearr_31327_31391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (1))){
var state_31324__$1 = state_31324;
var statearr_31328_31392 = state_31324__$1;
(statearr_31328_31392[(2)] = null);

(statearr_31328_31392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (4))){
var inst_31289 = (state_31324[(7)]);
var inst_31289__$1 = (state_31324[(2)]);
var inst_31290 = (inst_31289__$1 == null);
var state_31324__$1 = (function (){var statearr_31329 = state_31324;
(statearr_31329[(7)] = inst_31289__$1);

return statearr_31329;
})();
if(cljs.core.truth_(inst_31290)){
var statearr_31330_31393 = state_31324__$1;
(statearr_31330_31393[(1)] = (5));

} else {
var statearr_31331_31394 = state_31324__$1;
(statearr_31331_31394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (15))){
var inst_31302 = (state_31324[(8)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31324__$1,(18),to,inst_31302);
} else {
if((state_val_31325 === (21))){
var inst_31315 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31332_31395 = state_31324__$1;
(statearr_31332_31395[(2)] = inst_31315);

(statearr_31332_31395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (13))){
var inst_31317 = (state_31324[(2)]);
var state_31324__$1 = (function (){var statearr_31333 = state_31324;
(statearr_31333[(9)] = inst_31317);

return statearr_31333;
})();
var statearr_31334_31396 = state_31324__$1;
(statearr_31334_31396[(2)] = null);

(statearr_31334_31396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (6))){
var inst_31289 = (state_31324[(7)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31324__$1,(11),inst_31289);
} else {
if((state_val_31325 === (17))){
var inst_31310 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
if(cljs.core.truth_(inst_31310)){
var statearr_31335_31397 = state_31324__$1;
(statearr_31335_31397[(1)] = (19));

} else {
var statearr_31336_31398 = state_31324__$1;
(statearr_31336_31398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (3))){
var inst_31322 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31324__$1,inst_31322);
} else {
if((state_val_31325 === (12))){
var inst_31299 = (state_31324[(10)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31324__$1,(14),inst_31299);
} else {
if((state_val_31325 === (2))){
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31324__$1,(4),results);
} else {
if((state_val_31325 === (19))){
var state_31324__$1 = state_31324;
var statearr_31337_31399 = state_31324__$1;
(statearr_31337_31399[(2)] = null);

(statearr_31337_31399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (11))){
var inst_31299 = (state_31324[(2)]);
var state_31324__$1 = (function (){var statearr_31338 = state_31324;
(statearr_31338[(10)] = inst_31299);

return statearr_31338;
})();
var statearr_31339_31400 = state_31324__$1;
(statearr_31339_31400[(2)] = null);

(statearr_31339_31400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (9))){
var state_31324__$1 = state_31324;
var statearr_31340_31401 = state_31324__$1;
(statearr_31340_31401[(2)] = null);

(statearr_31340_31401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (5))){
var state_31324__$1 = state_31324;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31341_31402 = state_31324__$1;
(statearr_31341_31402[(1)] = (8));

} else {
var statearr_31342_31403 = state_31324__$1;
(statearr_31342_31403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (14))){
var inst_31302 = (state_31324[(8)]);
var inst_31304 = (state_31324[(11)]);
var inst_31302__$1 = (state_31324[(2)]);
var inst_31303 = (inst_31302__$1 == null);
var inst_31304__$1 = cljs.core.not.call(null,inst_31303);
var state_31324__$1 = (function (){var statearr_31343 = state_31324;
(statearr_31343[(8)] = inst_31302__$1);

(statearr_31343[(11)] = inst_31304__$1);

return statearr_31343;
})();
if(inst_31304__$1){
var statearr_31344_31404 = state_31324__$1;
(statearr_31344_31404[(1)] = (15));

} else {
var statearr_31345_31405 = state_31324__$1;
(statearr_31345_31405[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (16))){
var inst_31304 = (state_31324[(11)]);
var state_31324__$1 = state_31324;
var statearr_31346_31406 = state_31324__$1;
(statearr_31346_31406[(2)] = inst_31304);

(statearr_31346_31406[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (10))){
var inst_31296 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31347_31407 = state_31324__$1;
(statearr_31347_31407[(2)] = inst_31296);

(statearr_31347_31407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (18))){
var inst_31307 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31348_31408 = state_31324__$1;
(statearr_31348_31408[(2)] = inst_31307);

(statearr_31348_31408[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (8))){
var inst_31293 = cljs.core.async.close_BANG_.call(null,to);
var state_31324__$1 = state_31324;
var statearr_31349_31409 = state_31324__$1;
(statearr_31349_31409[(2)] = inst_31293);

(statearr_31349_31409[(1)] = (10));


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
});})(c__29154__auto__,jobs,results,process,async))
;
return ((function (switch__28987__auto__,c__29154__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0 = (function (){
var statearr_31350 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__);

(statearr_31350[(1)] = (1));

return statearr_31350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1 = (function (state_31324){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_31324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e31351){if((e31351 instanceof Object)){
var ex__28991__auto__ = e31351;
var statearr_31352_31410 = state_31324;
(statearr_31352_31410[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31411 = state_31324;
state_31324 = G__31411;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__ = function(state_31324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1.call(this,state_31324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28988__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto__,jobs,results,process,async))
})();
var state__29156__auto__ = (function (){var statearr_31353 = f__29155__auto__.call(null);
(statearr_31353[(6)] = c__29154__auto__);

return statearr_31353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto__,jobs,results,process,async))
);

return c__29154__auto__;
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
var G__31413 = arguments.length;
switch (G__31413) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__31416 = arguments.length;
switch (G__31416) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__31419 = arguments.length;
switch (G__31419) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29154__auto___31468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___31468,tc,fc){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___31468,tc,fc){
return (function (state_31445){
var state_val_31446 = (state_31445[(1)]);
if((state_val_31446 === (7))){
var inst_31441 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
var statearr_31447_31469 = state_31445__$1;
(statearr_31447_31469[(2)] = inst_31441);

(statearr_31447_31469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (1))){
var state_31445__$1 = state_31445;
var statearr_31448_31470 = state_31445__$1;
(statearr_31448_31470[(2)] = null);

(statearr_31448_31470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (4))){
var inst_31422 = (state_31445[(7)]);
var inst_31422__$1 = (state_31445[(2)]);
var inst_31423 = (inst_31422__$1 == null);
var state_31445__$1 = (function (){var statearr_31449 = state_31445;
(statearr_31449[(7)] = inst_31422__$1);

return statearr_31449;
})();
if(cljs.core.truth_(inst_31423)){
var statearr_31450_31471 = state_31445__$1;
(statearr_31450_31471[(1)] = (5));

} else {
var statearr_31451_31472 = state_31445__$1;
(statearr_31451_31472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (13))){
var state_31445__$1 = state_31445;
var statearr_31452_31473 = state_31445__$1;
(statearr_31452_31473[(2)] = null);

(statearr_31452_31473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (6))){
var inst_31422 = (state_31445[(7)]);
var inst_31428 = p.call(null,inst_31422);
var state_31445__$1 = state_31445;
if(cljs.core.truth_(inst_31428)){
var statearr_31453_31474 = state_31445__$1;
(statearr_31453_31474[(1)] = (9));

} else {
var statearr_31454_31475 = state_31445__$1;
(statearr_31454_31475[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (3))){
var inst_31443 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31445__$1,inst_31443);
} else {
if((state_val_31446 === (12))){
var state_31445__$1 = state_31445;
var statearr_31455_31476 = state_31445__$1;
(statearr_31455_31476[(2)] = null);

(statearr_31455_31476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (2))){
var state_31445__$1 = state_31445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31445__$1,(4),ch);
} else {
if((state_val_31446 === (11))){
var inst_31422 = (state_31445[(7)]);
var inst_31432 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31445__$1,(8),inst_31432,inst_31422);
} else {
if((state_val_31446 === (9))){
var state_31445__$1 = state_31445;
var statearr_31456_31477 = state_31445__$1;
(statearr_31456_31477[(2)] = tc);

(statearr_31456_31477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (5))){
var inst_31425 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31426 = cljs.core.async.close_BANG_.call(null,fc);
var state_31445__$1 = (function (){var statearr_31457 = state_31445;
(statearr_31457[(8)] = inst_31425);

return statearr_31457;
})();
var statearr_31458_31478 = state_31445__$1;
(statearr_31458_31478[(2)] = inst_31426);

(statearr_31458_31478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (14))){
var inst_31439 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
var statearr_31459_31479 = state_31445__$1;
(statearr_31459_31479[(2)] = inst_31439);

(statearr_31459_31479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (10))){
var state_31445__$1 = state_31445;
var statearr_31460_31480 = state_31445__$1;
(statearr_31460_31480[(2)] = fc);

(statearr_31460_31480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (8))){
var inst_31434 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
if(cljs.core.truth_(inst_31434)){
var statearr_31461_31481 = state_31445__$1;
(statearr_31461_31481[(1)] = (12));

} else {
var statearr_31462_31482 = state_31445__$1;
(statearr_31462_31482[(1)] = (13));

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
});})(c__29154__auto___31468,tc,fc))
;
return ((function (switch__28987__auto__,c__29154__auto___31468,tc,fc){
return (function() {
var cljs$core$async$state_machine__28988__auto__ = null;
var cljs$core$async$state_machine__28988__auto____0 = (function (){
var statearr_31463 = [null,null,null,null,null,null,null,null,null];
(statearr_31463[(0)] = cljs$core$async$state_machine__28988__auto__);

(statearr_31463[(1)] = (1));

return statearr_31463;
});
var cljs$core$async$state_machine__28988__auto____1 = (function (state_31445){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_31445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e31464){if((e31464 instanceof Object)){
var ex__28991__auto__ = e31464;
var statearr_31465_31483 = state_31445;
(statearr_31465_31483[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31484 = state_31445;
state_31445 = G__31484;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$state_machine__28988__auto__ = function(state_31445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28988__auto____1.call(this,state_31445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28988__auto____0;
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28988__auto____1;
return cljs$core$async$state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___31468,tc,fc))
})();
var state__29156__auto__ = (function (){var statearr_31466 = f__29155__auto__.call(null);
(statearr_31466[(6)] = c__29154__auto___31468);

return statearr_31466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___31468,tc,fc))
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
var c__29154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto__){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto__){
return (function (state_31505){
var state_val_31506 = (state_31505[(1)]);
if((state_val_31506 === (7))){
var inst_31501 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
var statearr_31507_31525 = state_31505__$1;
(statearr_31507_31525[(2)] = inst_31501);

(statearr_31507_31525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (1))){
var inst_31485 = init;
var state_31505__$1 = (function (){var statearr_31508 = state_31505;
(statearr_31508[(7)] = inst_31485);

return statearr_31508;
})();
var statearr_31509_31526 = state_31505__$1;
(statearr_31509_31526[(2)] = null);

(statearr_31509_31526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (4))){
var inst_31488 = (state_31505[(8)]);
var inst_31488__$1 = (state_31505[(2)]);
var inst_31489 = (inst_31488__$1 == null);
var state_31505__$1 = (function (){var statearr_31510 = state_31505;
(statearr_31510[(8)] = inst_31488__$1);

return statearr_31510;
})();
if(cljs.core.truth_(inst_31489)){
var statearr_31511_31527 = state_31505__$1;
(statearr_31511_31527[(1)] = (5));

} else {
var statearr_31512_31528 = state_31505__$1;
(statearr_31512_31528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (6))){
var inst_31485 = (state_31505[(7)]);
var inst_31492 = (state_31505[(9)]);
var inst_31488 = (state_31505[(8)]);
var inst_31492__$1 = f.call(null,inst_31485,inst_31488);
var inst_31493 = cljs.core.reduced_QMARK_.call(null,inst_31492__$1);
var state_31505__$1 = (function (){var statearr_31513 = state_31505;
(statearr_31513[(9)] = inst_31492__$1);

return statearr_31513;
})();
if(inst_31493){
var statearr_31514_31529 = state_31505__$1;
(statearr_31514_31529[(1)] = (8));

} else {
var statearr_31515_31530 = state_31505__$1;
(statearr_31515_31530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (3))){
var inst_31503 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31505__$1,inst_31503);
} else {
if((state_val_31506 === (2))){
var state_31505__$1 = state_31505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31505__$1,(4),ch);
} else {
if((state_val_31506 === (9))){
var inst_31492 = (state_31505[(9)]);
var inst_31485 = inst_31492;
var state_31505__$1 = (function (){var statearr_31516 = state_31505;
(statearr_31516[(7)] = inst_31485);

return statearr_31516;
})();
var statearr_31517_31531 = state_31505__$1;
(statearr_31517_31531[(2)] = null);

(statearr_31517_31531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (5))){
var inst_31485 = (state_31505[(7)]);
var state_31505__$1 = state_31505;
var statearr_31518_31532 = state_31505__$1;
(statearr_31518_31532[(2)] = inst_31485);

(statearr_31518_31532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (10))){
var inst_31499 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
var statearr_31519_31533 = state_31505__$1;
(statearr_31519_31533[(2)] = inst_31499);

(statearr_31519_31533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (8))){
var inst_31492 = (state_31505[(9)]);
var inst_31495 = cljs.core.deref.call(null,inst_31492);
var state_31505__$1 = state_31505;
var statearr_31520_31534 = state_31505__$1;
(statearr_31520_31534[(2)] = inst_31495);

(statearr_31520_31534[(1)] = (10));


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
});})(c__29154__auto__))
;
return ((function (switch__28987__auto__,c__29154__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28988__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28988__auto____0 = (function (){
var statearr_31521 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31521[(0)] = cljs$core$async$reduce_$_state_machine__28988__auto__);

(statearr_31521[(1)] = (1));

return statearr_31521;
});
var cljs$core$async$reduce_$_state_machine__28988__auto____1 = (function (state_31505){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_31505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e31522){if((e31522 instanceof Object)){
var ex__28991__auto__ = e31522;
var statearr_31523_31535 = state_31505;
(statearr_31523_31535[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31536 = state_31505;
state_31505 = G__31536;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28988__auto__ = function(state_31505){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28988__auto____1.call(this,state_31505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28988__auto____0;
cljs$core$async$reduce_$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28988__auto____1;
return cljs$core$async$reduce_$_state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto__))
})();
var state__29156__auto__ = (function (){var statearr_31524 = f__29155__auto__.call(null);
(statearr_31524[(6)] = c__29154__auto__);

return statearr_31524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto__))
);

return c__29154__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto__,f__$1){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto__,f__$1){
return (function (state_31542){
var state_val_31543 = (state_31542[(1)]);
if((state_val_31543 === (1))){
var inst_31537 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31542__$1 = state_31542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31542__$1,(2),inst_31537);
} else {
if((state_val_31543 === (2))){
var inst_31539 = (state_31542[(2)]);
var inst_31540 = f__$1.call(null,inst_31539);
var state_31542__$1 = state_31542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31542__$1,inst_31540);
} else {
return null;
}
}
});})(c__29154__auto__,f__$1))
;
return ((function (switch__28987__auto__,c__29154__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28988__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28988__auto____0 = (function (){
var statearr_31544 = [null,null,null,null,null,null,null];
(statearr_31544[(0)] = cljs$core$async$transduce_$_state_machine__28988__auto__);

(statearr_31544[(1)] = (1));

return statearr_31544;
});
var cljs$core$async$transduce_$_state_machine__28988__auto____1 = (function (state_31542){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_31542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e31545){if((e31545 instanceof Object)){
var ex__28991__auto__ = e31545;
var statearr_31546_31548 = state_31542;
(statearr_31546_31548[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31549 = state_31542;
state_31542 = G__31549;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28988__auto__ = function(state_31542){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28988__auto____1.call(this,state_31542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28988__auto____0;
cljs$core$async$transduce_$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28988__auto____1;
return cljs$core$async$transduce_$_state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto__,f__$1))
})();
var state__29156__auto__ = (function (){var statearr_31547 = f__29155__auto__.call(null);
(statearr_31547[(6)] = c__29154__auto__);

return statearr_31547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto__,f__$1))
);

return c__29154__auto__;
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
var G__31551 = arguments.length;
switch (G__31551) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto__){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto__){
return (function (state_31576){
var state_val_31577 = (state_31576[(1)]);
if((state_val_31577 === (7))){
var inst_31558 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31578_31599 = state_31576__$1;
(statearr_31578_31599[(2)] = inst_31558);

(statearr_31578_31599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (1))){
var inst_31552 = cljs.core.seq.call(null,coll);
var inst_31553 = inst_31552;
var state_31576__$1 = (function (){var statearr_31579 = state_31576;
(statearr_31579[(7)] = inst_31553);

return statearr_31579;
})();
var statearr_31580_31600 = state_31576__$1;
(statearr_31580_31600[(2)] = null);

(statearr_31580_31600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (4))){
var inst_31553 = (state_31576[(7)]);
var inst_31556 = cljs.core.first.call(null,inst_31553);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31576__$1,(7),ch,inst_31556);
} else {
if((state_val_31577 === (13))){
var inst_31570 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31581_31601 = state_31576__$1;
(statearr_31581_31601[(2)] = inst_31570);

(statearr_31581_31601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (6))){
var inst_31561 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31561)){
var statearr_31582_31602 = state_31576__$1;
(statearr_31582_31602[(1)] = (8));

} else {
var statearr_31583_31603 = state_31576__$1;
(statearr_31583_31603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (3))){
var inst_31574 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31576__$1,inst_31574);
} else {
if((state_val_31577 === (12))){
var state_31576__$1 = state_31576;
var statearr_31584_31604 = state_31576__$1;
(statearr_31584_31604[(2)] = null);

(statearr_31584_31604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (2))){
var inst_31553 = (state_31576[(7)]);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31553)){
var statearr_31585_31605 = state_31576__$1;
(statearr_31585_31605[(1)] = (4));

} else {
var statearr_31586_31606 = state_31576__$1;
(statearr_31586_31606[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (11))){
var inst_31567 = cljs.core.async.close_BANG_.call(null,ch);
var state_31576__$1 = state_31576;
var statearr_31587_31607 = state_31576__$1;
(statearr_31587_31607[(2)] = inst_31567);

(statearr_31587_31607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (9))){
var state_31576__$1 = state_31576;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31588_31608 = state_31576__$1;
(statearr_31588_31608[(1)] = (11));

} else {
var statearr_31589_31609 = state_31576__$1;
(statearr_31589_31609[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (5))){
var inst_31553 = (state_31576[(7)]);
var state_31576__$1 = state_31576;
var statearr_31590_31610 = state_31576__$1;
(statearr_31590_31610[(2)] = inst_31553);

(statearr_31590_31610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (10))){
var inst_31572 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31591_31611 = state_31576__$1;
(statearr_31591_31611[(2)] = inst_31572);

(statearr_31591_31611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (8))){
var inst_31553 = (state_31576[(7)]);
var inst_31563 = cljs.core.next.call(null,inst_31553);
var inst_31553__$1 = inst_31563;
var state_31576__$1 = (function (){var statearr_31592 = state_31576;
(statearr_31592[(7)] = inst_31553__$1);

return statearr_31592;
})();
var statearr_31593_31612 = state_31576__$1;
(statearr_31593_31612[(2)] = null);

(statearr_31593_31612[(1)] = (2));


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
});})(c__29154__auto__))
;
return ((function (switch__28987__auto__,c__29154__auto__){
return (function() {
var cljs$core$async$state_machine__28988__auto__ = null;
var cljs$core$async$state_machine__28988__auto____0 = (function (){
var statearr_31594 = [null,null,null,null,null,null,null,null];
(statearr_31594[(0)] = cljs$core$async$state_machine__28988__auto__);

(statearr_31594[(1)] = (1));

return statearr_31594;
});
var cljs$core$async$state_machine__28988__auto____1 = (function (state_31576){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_31576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e31595){if((e31595 instanceof Object)){
var ex__28991__auto__ = e31595;
var statearr_31596_31613 = state_31576;
(statearr_31596_31613[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31614 = state_31576;
state_31576 = G__31614;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$state_machine__28988__auto__ = function(state_31576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28988__auto____1.call(this,state_31576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28988__auto____0;
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28988__auto____1;
return cljs$core$async$state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto__))
})();
var state__29156__auto__ = (function (){var statearr_31597 = f__29155__auto__.call(null);
(statearr_31597[(6)] = c__29154__auto__);

return statearr_31597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto__))
);

return c__29154__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31615 = (function (ch,cs,meta31616){
this.ch = ch;
this.cs = cs;
this.meta31616 = meta31616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31617,meta31616__$1){
var self__ = this;
var _31617__$1 = this;
return (new cljs.core.async.t_cljs$core$async31615(self__.ch,self__.cs,meta31616__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31617){
var self__ = this;
var _31617__$1 = this;
return self__.meta31616;
});})(cs))
;

cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31615.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31616","meta31616",-106616050,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31615";

cljs.core.async.t_cljs$core$async31615.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31615");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31615.
 */
cljs.core.async.__GT_t_cljs$core$async31615 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31615(ch__$1,cs__$1,meta31616){
return (new cljs.core.async.t_cljs$core$async31615(ch__$1,cs__$1,meta31616));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31615(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29154__auto___31837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___31837,cs,m,dchan,dctr,done){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___31837,cs,m,dchan,dctr,done){
return (function (state_31752){
var state_val_31753 = (state_31752[(1)]);
if((state_val_31753 === (7))){
var inst_31748 = (state_31752[(2)]);
var state_31752__$1 = state_31752;
var statearr_31754_31838 = state_31752__$1;
(statearr_31754_31838[(2)] = inst_31748);

(statearr_31754_31838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (20))){
var inst_31651 = (state_31752[(7)]);
var inst_31663 = cljs.core.first.call(null,inst_31651);
var inst_31664 = cljs.core.nth.call(null,inst_31663,(0),null);
var inst_31665 = cljs.core.nth.call(null,inst_31663,(1),null);
var state_31752__$1 = (function (){var statearr_31755 = state_31752;
(statearr_31755[(8)] = inst_31664);

return statearr_31755;
})();
if(cljs.core.truth_(inst_31665)){
var statearr_31756_31839 = state_31752__$1;
(statearr_31756_31839[(1)] = (22));

} else {
var statearr_31757_31840 = state_31752__$1;
(statearr_31757_31840[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (27))){
var inst_31700 = (state_31752[(9)]);
var inst_31695 = (state_31752[(10)]);
var inst_31620 = (state_31752[(11)]);
var inst_31693 = (state_31752[(12)]);
var inst_31700__$1 = cljs.core._nth.call(null,inst_31693,inst_31695);
var inst_31701 = cljs.core.async.put_BANG_.call(null,inst_31700__$1,inst_31620,done);
var state_31752__$1 = (function (){var statearr_31758 = state_31752;
(statearr_31758[(9)] = inst_31700__$1);

return statearr_31758;
})();
if(cljs.core.truth_(inst_31701)){
var statearr_31759_31841 = state_31752__$1;
(statearr_31759_31841[(1)] = (30));

} else {
var statearr_31760_31842 = state_31752__$1;
(statearr_31760_31842[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (1))){
var state_31752__$1 = state_31752;
var statearr_31761_31843 = state_31752__$1;
(statearr_31761_31843[(2)] = null);

(statearr_31761_31843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (24))){
var inst_31651 = (state_31752[(7)]);
var inst_31670 = (state_31752[(2)]);
var inst_31671 = cljs.core.next.call(null,inst_31651);
var inst_31629 = inst_31671;
var inst_31630 = null;
var inst_31631 = (0);
var inst_31632 = (0);
var state_31752__$1 = (function (){var statearr_31762 = state_31752;
(statearr_31762[(13)] = inst_31632);

(statearr_31762[(14)] = inst_31631);

(statearr_31762[(15)] = inst_31670);

(statearr_31762[(16)] = inst_31630);

(statearr_31762[(17)] = inst_31629);

return statearr_31762;
})();
var statearr_31763_31844 = state_31752__$1;
(statearr_31763_31844[(2)] = null);

(statearr_31763_31844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (39))){
var state_31752__$1 = state_31752;
var statearr_31767_31845 = state_31752__$1;
(statearr_31767_31845[(2)] = null);

(statearr_31767_31845[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (4))){
var inst_31620 = (state_31752[(11)]);
var inst_31620__$1 = (state_31752[(2)]);
var inst_31621 = (inst_31620__$1 == null);
var state_31752__$1 = (function (){var statearr_31768 = state_31752;
(statearr_31768[(11)] = inst_31620__$1);

return statearr_31768;
})();
if(cljs.core.truth_(inst_31621)){
var statearr_31769_31846 = state_31752__$1;
(statearr_31769_31846[(1)] = (5));

} else {
var statearr_31770_31847 = state_31752__$1;
(statearr_31770_31847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (15))){
var inst_31632 = (state_31752[(13)]);
var inst_31631 = (state_31752[(14)]);
var inst_31630 = (state_31752[(16)]);
var inst_31629 = (state_31752[(17)]);
var inst_31647 = (state_31752[(2)]);
var inst_31648 = (inst_31632 + (1));
var tmp31764 = inst_31631;
var tmp31765 = inst_31630;
var tmp31766 = inst_31629;
var inst_31629__$1 = tmp31766;
var inst_31630__$1 = tmp31765;
var inst_31631__$1 = tmp31764;
var inst_31632__$1 = inst_31648;
var state_31752__$1 = (function (){var statearr_31771 = state_31752;
(statearr_31771[(13)] = inst_31632__$1);

(statearr_31771[(14)] = inst_31631__$1);

(statearr_31771[(18)] = inst_31647);

(statearr_31771[(16)] = inst_31630__$1);

(statearr_31771[(17)] = inst_31629__$1);

return statearr_31771;
})();
var statearr_31772_31848 = state_31752__$1;
(statearr_31772_31848[(2)] = null);

(statearr_31772_31848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (21))){
var inst_31674 = (state_31752[(2)]);
var state_31752__$1 = state_31752;
var statearr_31776_31849 = state_31752__$1;
(statearr_31776_31849[(2)] = inst_31674);

(statearr_31776_31849[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (31))){
var inst_31700 = (state_31752[(9)]);
var inst_31704 = done.call(null,null);
var inst_31705 = cljs.core.async.untap_STAR_.call(null,m,inst_31700);
var state_31752__$1 = (function (){var statearr_31777 = state_31752;
(statearr_31777[(19)] = inst_31704);

return statearr_31777;
})();
var statearr_31778_31850 = state_31752__$1;
(statearr_31778_31850[(2)] = inst_31705);

(statearr_31778_31850[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (32))){
var inst_31694 = (state_31752[(20)]);
var inst_31692 = (state_31752[(21)]);
var inst_31695 = (state_31752[(10)]);
var inst_31693 = (state_31752[(12)]);
var inst_31707 = (state_31752[(2)]);
var inst_31708 = (inst_31695 + (1));
var tmp31773 = inst_31694;
var tmp31774 = inst_31692;
var tmp31775 = inst_31693;
var inst_31692__$1 = tmp31774;
var inst_31693__$1 = tmp31775;
var inst_31694__$1 = tmp31773;
var inst_31695__$1 = inst_31708;
var state_31752__$1 = (function (){var statearr_31779 = state_31752;
(statearr_31779[(22)] = inst_31707);

(statearr_31779[(20)] = inst_31694__$1);

(statearr_31779[(21)] = inst_31692__$1);

(statearr_31779[(10)] = inst_31695__$1);

(statearr_31779[(12)] = inst_31693__$1);

return statearr_31779;
})();
var statearr_31780_31851 = state_31752__$1;
(statearr_31780_31851[(2)] = null);

(statearr_31780_31851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (40))){
var inst_31720 = (state_31752[(23)]);
var inst_31724 = done.call(null,null);
var inst_31725 = cljs.core.async.untap_STAR_.call(null,m,inst_31720);
var state_31752__$1 = (function (){var statearr_31781 = state_31752;
(statearr_31781[(24)] = inst_31724);

return statearr_31781;
})();
var statearr_31782_31852 = state_31752__$1;
(statearr_31782_31852[(2)] = inst_31725);

(statearr_31782_31852[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (33))){
var inst_31711 = (state_31752[(25)]);
var inst_31713 = cljs.core.chunked_seq_QMARK_.call(null,inst_31711);
var state_31752__$1 = state_31752;
if(inst_31713){
var statearr_31783_31853 = state_31752__$1;
(statearr_31783_31853[(1)] = (36));

} else {
var statearr_31784_31854 = state_31752__$1;
(statearr_31784_31854[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (13))){
var inst_31641 = (state_31752[(26)]);
var inst_31644 = cljs.core.async.close_BANG_.call(null,inst_31641);
var state_31752__$1 = state_31752;
var statearr_31785_31855 = state_31752__$1;
(statearr_31785_31855[(2)] = inst_31644);

(statearr_31785_31855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (22))){
var inst_31664 = (state_31752[(8)]);
var inst_31667 = cljs.core.async.close_BANG_.call(null,inst_31664);
var state_31752__$1 = state_31752;
var statearr_31786_31856 = state_31752__$1;
(statearr_31786_31856[(2)] = inst_31667);

(statearr_31786_31856[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (36))){
var inst_31711 = (state_31752[(25)]);
var inst_31715 = cljs.core.chunk_first.call(null,inst_31711);
var inst_31716 = cljs.core.chunk_rest.call(null,inst_31711);
var inst_31717 = cljs.core.count.call(null,inst_31715);
var inst_31692 = inst_31716;
var inst_31693 = inst_31715;
var inst_31694 = inst_31717;
var inst_31695 = (0);
var state_31752__$1 = (function (){var statearr_31787 = state_31752;
(statearr_31787[(20)] = inst_31694);

(statearr_31787[(21)] = inst_31692);

(statearr_31787[(10)] = inst_31695);

(statearr_31787[(12)] = inst_31693);

return statearr_31787;
})();
var statearr_31788_31857 = state_31752__$1;
(statearr_31788_31857[(2)] = null);

(statearr_31788_31857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (41))){
var inst_31711 = (state_31752[(25)]);
var inst_31727 = (state_31752[(2)]);
var inst_31728 = cljs.core.next.call(null,inst_31711);
var inst_31692 = inst_31728;
var inst_31693 = null;
var inst_31694 = (0);
var inst_31695 = (0);
var state_31752__$1 = (function (){var statearr_31789 = state_31752;
(statearr_31789[(27)] = inst_31727);

(statearr_31789[(20)] = inst_31694);

(statearr_31789[(21)] = inst_31692);

(statearr_31789[(10)] = inst_31695);

(statearr_31789[(12)] = inst_31693);

return statearr_31789;
})();
var statearr_31790_31858 = state_31752__$1;
(statearr_31790_31858[(2)] = null);

(statearr_31790_31858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (43))){
var state_31752__$1 = state_31752;
var statearr_31791_31859 = state_31752__$1;
(statearr_31791_31859[(2)] = null);

(statearr_31791_31859[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (29))){
var inst_31736 = (state_31752[(2)]);
var state_31752__$1 = state_31752;
var statearr_31792_31860 = state_31752__$1;
(statearr_31792_31860[(2)] = inst_31736);

(statearr_31792_31860[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (44))){
var inst_31745 = (state_31752[(2)]);
var state_31752__$1 = (function (){var statearr_31793 = state_31752;
(statearr_31793[(28)] = inst_31745);

return statearr_31793;
})();
var statearr_31794_31861 = state_31752__$1;
(statearr_31794_31861[(2)] = null);

(statearr_31794_31861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (6))){
var inst_31684 = (state_31752[(29)]);
var inst_31683 = cljs.core.deref.call(null,cs);
var inst_31684__$1 = cljs.core.keys.call(null,inst_31683);
var inst_31685 = cljs.core.count.call(null,inst_31684__$1);
var inst_31686 = cljs.core.reset_BANG_.call(null,dctr,inst_31685);
var inst_31691 = cljs.core.seq.call(null,inst_31684__$1);
var inst_31692 = inst_31691;
var inst_31693 = null;
var inst_31694 = (0);
var inst_31695 = (0);
var state_31752__$1 = (function (){var statearr_31795 = state_31752;
(statearr_31795[(20)] = inst_31694);

(statearr_31795[(21)] = inst_31692);

(statearr_31795[(10)] = inst_31695);

(statearr_31795[(29)] = inst_31684__$1);

(statearr_31795[(30)] = inst_31686);

(statearr_31795[(12)] = inst_31693);

return statearr_31795;
})();
var statearr_31796_31862 = state_31752__$1;
(statearr_31796_31862[(2)] = null);

(statearr_31796_31862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (28))){
var inst_31692 = (state_31752[(21)]);
var inst_31711 = (state_31752[(25)]);
var inst_31711__$1 = cljs.core.seq.call(null,inst_31692);
var state_31752__$1 = (function (){var statearr_31797 = state_31752;
(statearr_31797[(25)] = inst_31711__$1);

return statearr_31797;
})();
if(inst_31711__$1){
var statearr_31798_31863 = state_31752__$1;
(statearr_31798_31863[(1)] = (33));

} else {
var statearr_31799_31864 = state_31752__$1;
(statearr_31799_31864[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (25))){
var inst_31694 = (state_31752[(20)]);
var inst_31695 = (state_31752[(10)]);
var inst_31697 = (inst_31695 < inst_31694);
var inst_31698 = inst_31697;
var state_31752__$1 = state_31752;
if(cljs.core.truth_(inst_31698)){
var statearr_31800_31865 = state_31752__$1;
(statearr_31800_31865[(1)] = (27));

} else {
var statearr_31801_31866 = state_31752__$1;
(statearr_31801_31866[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (34))){
var state_31752__$1 = state_31752;
var statearr_31802_31867 = state_31752__$1;
(statearr_31802_31867[(2)] = null);

(statearr_31802_31867[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (17))){
var state_31752__$1 = state_31752;
var statearr_31803_31868 = state_31752__$1;
(statearr_31803_31868[(2)] = null);

(statearr_31803_31868[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (3))){
var inst_31750 = (state_31752[(2)]);
var state_31752__$1 = state_31752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31752__$1,inst_31750);
} else {
if((state_val_31753 === (12))){
var inst_31679 = (state_31752[(2)]);
var state_31752__$1 = state_31752;
var statearr_31804_31869 = state_31752__$1;
(statearr_31804_31869[(2)] = inst_31679);

(statearr_31804_31869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (2))){
var state_31752__$1 = state_31752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31752__$1,(4),ch);
} else {
if((state_val_31753 === (23))){
var state_31752__$1 = state_31752;
var statearr_31805_31870 = state_31752__$1;
(statearr_31805_31870[(2)] = null);

(statearr_31805_31870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (35))){
var inst_31734 = (state_31752[(2)]);
var state_31752__$1 = state_31752;
var statearr_31806_31871 = state_31752__$1;
(statearr_31806_31871[(2)] = inst_31734);

(statearr_31806_31871[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (19))){
var inst_31651 = (state_31752[(7)]);
var inst_31655 = cljs.core.chunk_first.call(null,inst_31651);
var inst_31656 = cljs.core.chunk_rest.call(null,inst_31651);
var inst_31657 = cljs.core.count.call(null,inst_31655);
var inst_31629 = inst_31656;
var inst_31630 = inst_31655;
var inst_31631 = inst_31657;
var inst_31632 = (0);
var state_31752__$1 = (function (){var statearr_31807 = state_31752;
(statearr_31807[(13)] = inst_31632);

(statearr_31807[(14)] = inst_31631);

(statearr_31807[(16)] = inst_31630);

(statearr_31807[(17)] = inst_31629);

return statearr_31807;
})();
var statearr_31808_31872 = state_31752__$1;
(statearr_31808_31872[(2)] = null);

(statearr_31808_31872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (11))){
var inst_31629 = (state_31752[(17)]);
var inst_31651 = (state_31752[(7)]);
var inst_31651__$1 = cljs.core.seq.call(null,inst_31629);
var state_31752__$1 = (function (){var statearr_31809 = state_31752;
(statearr_31809[(7)] = inst_31651__$1);

return statearr_31809;
})();
if(inst_31651__$1){
var statearr_31810_31873 = state_31752__$1;
(statearr_31810_31873[(1)] = (16));

} else {
var statearr_31811_31874 = state_31752__$1;
(statearr_31811_31874[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (9))){
var inst_31681 = (state_31752[(2)]);
var state_31752__$1 = state_31752;
var statearr_31812_31875 = state_31752__$1;
(statearr_31812_31875[(2)] = inst_31681);

(statearr_31812_31875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (5))){
var inst_31627 = cljs.core.deref.call(null,cs);
var inst_31628 = cljs.core.seq.call(null,inst_31627);
var inst_31629 = inst_31628;
var inst_31630 = null;
var inst_31631 = (0);
var inst_31632 = (0);
var state_31752__$1 = (function (){var statearr_31813 = state_31752;
(statearr_31813[(13)] = inst_31632);

(statearr_31813[(14)] = inst_31631);

(statearr_31813[(16)] = inst_31630);

(statearr_31813[(17)] = inst_31629);

return statearr_31813;
})();
var statearr_31814_31876 = state_31752__$1;
(statearr_31814_31876[(2)] = null);

(statearr_31814_31876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (14))){
var state_31752__$1 = state_31752;
var statearr_31815_31877 = state_31752__$1;
(statearr_31815_31877[(2)] = null);

(statearr_31815_31877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (45))){
var inst_31742 = (state_31752[(2)]);
var state_31752__$1 = state_31752;
var statearr_31816_31878 = state_31752__$1;
(statearr_31816_31878[(2)] = inst_31742);

(statearr_31816_31878[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (26))){
var inst_31684 = (state_31752[(29)]);
var inst_31738 = (state_31752[(2)]);
var inst_31739 = cljs.core.seq.call(null,inst_31684);
var state_31752__$1 = (function (){var statearr_31817 = state_31752;
(statearr_31817[(31)] = inst_31738);

return statearr_31817;
})();
if(inst_31739){
var statearr_31818_31879 = state_31752__$1;
(statearr_31818_31879[(1)] = (42));

} else {
var statearr_31819_31880 = state_31752__$1;
(statearr_31819_31880[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (16))){
var inst_31651 = (state_31752[(7)]);
var inst_31653 = cljs.core.chunked_seq_QMARK_.call(null,inst_31651);
var state_31752__$1 = state_31752;
if(inst_31653){
var statearr_31820_31881 = state_31752__$1;
(statearr_31820_31881[(1)] = (19));

} else {
var statearr_31821_31882 = state_31752__$1;
(statearr_31821_31882[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (38))){
var inst_31731 = (state_31752[(2)]);
var state_31752__$1 = state_31752;
var statearr_31822_31883 = state_31752__$1;
(statearr_31822_31883[(2)] = inst_31731);

(statearr_31822_31883[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (30))){
var state_31752__$1 = state_31752;
var statearr_31823_31884 = state_31752__$1;
(statearr_31823_31884[(2)] = null);

(statearr_31823_31884[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (10))){
var inst_31632 = (state_31752[(13)]);
var inst_31630 = (state_31752[(16)]);
var inst_31640 = cljs.core._nth.call(null,inst_31630,inst_31632);
var inst_31641 = cljs.core.nth.call(null,inst_31640,(0),null);
var inst_31642 = cljs.core.nth.call(null,inst_31640,(1),null);
var state_31752__$1 = (function (){var statearr_31824 = state_31752;
(statearr_31824[(26)] = inst_31641);

return statearr_31824;
})();
if(cljs.core.truth_(inst_31642)){
var statearr_31825_31885 = state_31752__$1;
(statearr_31825_31885[(1)] = (13));

} else {
var statearr_31826_31886 = state_31752__$1;
(statearr_31826_31886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (18))){
var inst_31677 = (state_31752[(2)]);
var state_31752__$1 = state_31752;
var statearr_31827_31887 = state_31752__$1;
(statearr_31827_31887[(2)] = inst_31677);

(statearr_31827_31887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (42))){
var state_31752__$1 = state_31752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31752__$1,(45),dchan);
} else {
if((state_val_31753 === (37))){
var inst_31720 = (state_31752[(23)]);
var inst_31711 = (state_31752[(25)]);
var inst_31620 = (state_31752[(11)]);
var inst_31720__$1 = cljs.core.first.call(null,inst_31711);
var inst_31721 = cljs.core.async.put_BANG_.call(null,inst_31720__$1,inst_31620,done);
var state_31752__$1 = (function (){var statearr_31828 = state_31752;
(statearr_31828[(23)] = inst_31720__$1);

return statearr_31828;
})();
if(cljs.core.truth_(inst_31721)){
var statearr_31829_31888 = state_31752__$1;
(statearr_31829_31888[(1)] = (39));

} else {
var statearr_31830_31889 = state_31752__$1;
(statearr_31830_31889[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31753 === (8))){
var inst_31632 = (state_31752[(13)]);
var inst_31631 = (state_31752[(14)]);
var inst_31634 = (inst_31632 < inst_31631);
var inst_31635 = inst_31634;
var state_31752__$1 = state_31752;
if(cljs.core.truth_(inst_31635)){
var statearr_31831_31890 = state_31752__$1;
(statearr_31831_31890[(1)] = (10));

} else {
var statearr_31832_31891 = state_31752__$1;
(statearr_31832_31891[(1)] = (11));

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
});})(c__29154__auto___31837,cs,m,dchan,dctr,done))
;
return ((function (switch__28987__auto__,c__29154__auto___31837,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28988__auto__ = null;
var cljs$core$async$mult_$_state_machine__28988__auto____0 = (function (){
var statearr_31833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31833[(0)] = cljs$core$async$mult_$_state_machine__28988__auto__);

(statearr_31833[(1)] = (1));

return statearr_31833;
});
var cljs$core$async$mult_$_state_machine__28988__auto____1 = (function (state_31752){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_31752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e31834){if((e31834 instanceof Object)){
var ex__28991__auto__ = e31834;
var statearr_31835_31892 = state_31752;
(statearr_31835_31892[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31893 = state_31752;
state_31752 = G__31893;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28988__auto__ = function(state_31752){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28988__auto____1.call(this,state_31752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28988__auto____0;
cljs$core$async$mult_$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28988__auto____1;
return cljs$core$async$mult_$_state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___31837,cs,m,dchan,dctr,done))
})();
var state__29156__auto__ = (function (){var statearr_31836 = f__29155__auto__.call(null);
(statearr_31836[(6)] = c__29154__auto___31837);

return statearr_31836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___31837,cs,m,dchan,dctr,done))
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
var G__31895 = arguments.length;
switch (G__31895) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31907 = arguments.length;
var i__4642__auto___31908 = (0);
while(true){
if((i__4642__auto___31908 < len__4641__auto___31907)){
args__4647__auto__.push((arguments[i__4642__auto___31908]));

var G__31909 = (i__4642__auto___31908 + (1));
i__4642__auto___31908 = G__31909;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31901){
var map__31902 = p__31901;
var map__31902__$1 = (((((!((map__31902 == null))))?(((((map__31902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31902):map__31902);
var opts = map__31902__$1;
var statearr_31904_31910 = state;
(statearr_31904_31910[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__31902,map__31902__$1,opts){
return (function (val){
var statearr_31905_31911 = state;
(statearr_31905_31911[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31902,map__31902__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31906_31912 = state;
(statearr_31906_31912[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31897){
var G__31898 = cljs.core.first.call(null,seq31897);
var seq31897__$1 = cljs.core.next.call(null,seq31897);
var G__31899 = cljs.core.first.call(null,seq31897__$1);
var seq31897__$2 = cljs.core.next.call(null,seq31897__$1);
var G__31900 = cljs.core.first.call(null,seq31897__$2);
var seq31897__$3 = cljs.core.next.call(null,seq31897__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31898,G__31899,G__31900,seq31897__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31913 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31914){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31914 = meta31914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31915,meta31914__$1){
var self__ = this;
var _31915__$1 = this;
return (new cljs.core.async.t_cljs$core$async31913(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31914__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31915){
var self__ = this;
var _31915__$1 = this;
return self__.meta31914;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31913.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31913.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31914","meta31914",-178376901,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31913";

cljs.core.async.t_cljs$core$async31913.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31913");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31913.
 */
cljs.core.async.__GT_t_cljs$core$async31913 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31913(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31914){
return (new cljs.core.async.t_cljs$core$async31913(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31914));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31913(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29154__auto___32077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___32077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___32077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32017){
var state_val_32018 = (state_32017[(1)]);
if((state_val_32018 === (7))){
var inst_31932 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32019_32078 = state_32017__$1;
(statearr_32019_32078[(2)] = inst_31932);

(statearr_32019_32078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (20))){
var inst_31944 = (state_32017[(7)]);
var state_32017__$1 = state_32017;
var statearr_32020_32079 = state_32017__$1;
(statearr_32020_32079[(2)] = inst_31944);

(statearr_32020_32079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (27))){
var state_32017__$1 = state_32017;
var statearr_32021_32080 = state_32017__$1;
(statearr_32021_32080[(2)] = null);

(statearr_32021_32080[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (1))){
var inst_31919 = (state_32017[(8)]);
var inst_31919__$1 = calc_state.call(null);
var inst_31921 = (inst_31919__$1 == null);
var inst_31922 = cljs.core.not.call(null,inst_31921);
var state_32017__$1 = (function (){var statearr_32022 = state_32017;
(statearr_32022[(8)] = inst_31919__$1);

return statearr_32022;
})();
if(inst_31922){
var statearr_32023_32081 = state_32017__$1;
(statearr_32023_32081[(1)] = (2));

} else {
var statearr_32024_32082 = state_32017__$1;
(statearr_32024_32082[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (24))){
var inst_31977 = (state_32017[(9)]);
var inst_31968 = (state_32017[(10)]);
var inst_31991 = (state_32017[(11)]);
var inst_31991__$1 = inst_31968.call(null,inst_31977);
var state_32017__$1 = (function (){var statearr_32025 = state_32017;
(statearr_32025[(11)] = inst_31991__$1);

return statearr_32025;
})();
if(cljs.core.truth_(inst_31991__$1)){
var statearr_32026_32083 = state_32017__$1;
(statearr_32026_32083[(1)] = (29));

} else {
var statearr_32027_32084 = state_32017__$1;
(statearr_32027_32084[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (4))){
var inst_31935 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_31935)){
var statearr_32028_32085 = state_32017__$1;
(statearr_32028_32085[(1)] = (8));

} else {
var statearr_32029_32086 = state_32017__$1;
(statearr_32029_32086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (15))){
var inst_31962 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_31962)){
var statearr_32030_32087 = state_32017__$1;
(statearr_32030_32087[(1)] = (19));

} else {
var statearr_32031_32088 = state_32017__$1;
(statearr_32031_32088[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (21))){
var inst_31967 = (state_32017[(12)]);
var inst_31967__$1 = (state_32017[(2)]);
var inst_31968 = cljs.core.get.call(null,inst_31967__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31969 = cljs.core.get.call(null,inst_31967__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31970 = cljs.core.get.call(null,inst_31967__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32017__$1 = (function (){var statearr_32032 = state_32017;
(statearr_32032[(12)] = inst_31967__$1);

(statearr_32032[(13)] = inst_31969);

(statearr_32032[(10)] = inst_31968);

return statearr_32032;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32017__$1,(22),inst_31970);
} else {
if((state_val_32018 === (31))){
var inst_31999 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_31999)){
var statearr_32033_32089 = state_32017__$1;
(statearr_32033_32089[(1)] = (32));

} else {
var statearr_32034_32090 = state_32017__$1;
(statearr_32034_32090[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (32))){
var inst_31976 = (state_32017[(14)]);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32017__$1,(35),out,inst_31976);
} else {
if((state_val_32018 === (33))){
var inst_31967 = (state_32017[(12)]);
var inst_31944 = inst_31967;
var state_32017__$1 = (function (){var statearr_32035 = state_32017;
(statearr_32035[(7)] = inst_31944);

return statearr_32035;
})();
var statearr_32036_32091 = state_32017__$1;
(statearr_32036_32091[(2)] = null);

(statearr_32036_32091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (13))){
var inst_31944 = (state_32017[(7)]);
var inst_31951 = inst_31944.cljs$lang$protocol_mask$partition0$;
var inst_31952 = (inst_31951 & (64));
var inst_31953 = inst_31944.cljs$core$ISeq$;
var inst_31954 = (cljs.core.PROTOCOL_SENTINEL === inst_31953);
var inst_31955 = ((inst_31952) || (inst_31954));
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_31955)){
var statearr_32037_32092 = state_32017__$1;
(statearr_32037_32092[(1)] = (16));

} else {
var statearr_32038_32093 = state_32017__$1;
(statearr_32038_32093[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (22))){
var inst_31976 = (state_32017[(14)]);
var inst_31977 = (state_32017[(9)]);
var inst_31975 = (state_32017[(2)]);
var inst_31976__$1 = cljs.core.nth.call(null,inst_31975,(0),null);
var inst_31977__$1 = cljs.core.nth.call(null,inst_31975,(1),null);
var inst_31978 = (inst_31976__$1 == null);
var inst_31979 = cljs.core._EQ_.call(null,inst_31977__$1,change);
var inst_31980 = ((inst_31978) || (inst_31979));
var state_32017__$1 = (function (){var statearr_32039 = state_32017;
(statearr_32039[(14)] = inst_31976__$1);

(statearr_32039[(9)] = inst_31977__$1);

return statearr_32039;
})();
if(cljs.core.truth_(inst_31980)){
var statearr_32040_32094 = state_32017__$1;
(statearr_32040_32094[(1)] = (23));

} else {
var statearr_32041_32095 = state_32017__$1;
(statearr_32041_32095[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (36))){
var inst_31967 = (state_32017[(12)]);
var inst_31944 = inst_31967;
var state_32017__$1 = (function (){var statearr_32042 = state_32017;
(statearr_32042[(7)] = inst_31944);

return statearr_32042;
})();
var statearr_32043_32096 = state_32017__$1;
(statearr_32043_32096[(2)] = null);

(statearr_32043_32096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (29))){
var inst_31991 = (state_32017[(11)]);
var state_32017__$1 = state_32017;
var statearr_32044_32097 = state_32017__$1;
(statearr_32044_32097[(2)] = inst_31991);

(statearr_32044_32097[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (6))){
var state_32017__$1 = state_32017;
var statearr_32045_32098 = state_32017__$1;
(statearr_32045_32098[(2)] = false);

(statearr_32045_32098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (28))){
var inst_31987 = (state_32017[(2)]);
var inst_31988 = calc_state.call(null);
var inst_31944 = inst_31988;
var state_32017__$1 = (function (){var statearr_32046 = state_32017;
(statearr_32046[(7)] = inst_31944);

(statearr_32046[(15)] = inst_31987);

return statearr_32046;
})();
var statearr_32047_32099 = state_32017__$1;
(statearr_32047_32099[(2)] = null);

(statearr_32047_32099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (25))){
var inst_32013 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32048_32100 = state_32017__$1;
(statearr_32048_32100[(2)] = inst_32013);

(statearr_32048_32100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (34))){
var inst_32011 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32049_32101 = state_32017__$1;
(statearr_32049_32101[(2)] = inst_32011);

(statearr_32049_32101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (17))){
var state_32017__$1 = state_32017;
var statearr_32050_32102 = state_32017__$1;
(statearr_32050_32102[(2)] = false);

(statearr_32050_32102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (3))){
var state_32017__$1 = state_32017;
var statearr_32051_32103 = state_32017__$1;
(statearr_32051_32103[(2)] = false);

(statearr_32051_32103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (12))){
var inst_32015 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32017__$1,inst_32015);
} else {
if((state_val_32018 === (2))){
var inst_31919 = (state_32017[(8)]);
var inst_31924 = inst_31919.cljs$lang$protocol_mask$partition0$;
var inst_31925 = (inst_31924 & (64));
var inst_31926 = inst_31919.cljs$core$ISeq$;
var inst_31927 = (cljs.core.PROTOCOL_SENTINEL === inst_31926);
var inst_31928 = ((inst_31925) || (inst_31927));
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_31928)){
var statearr_32052_32104 = state_32017__$1;
(statearr_32052_32104[(1)] = (5));

} else {
var statearr_32053_32105 = state_32017__$1;
(statearr_32053_32105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (23))){
var inst_31976 = (state_32017[(14)]);
var inst_31982 = (inst_31976 == null);
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_31982)){
var statearr_32054_32106 = state_32017__$1;
(statearr_32054_32106[(1)] = (26));

} else {
var statearr_32055_32107 = state_32017__$1;
(statearr_32055_32107[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (35))){
var inst_32002 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_32002)){
var statearr_32056_32108 = state_32017__$1;
(statearr_32056_32108[(1)] = (36));

} else {
var statearr_32057_32109 = state_32017__$1;
(statearr_32057_32109[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (19))){
var inst_31944 = (state_32017[(7)]);
var inst_31964 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31944);
var state_32017__$1 = state_32017;
var statearr_32058_32110 = state_32017__$1;
(statearr_32058_32110[(2)] = inst_31964);

(statearr_32058_32110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (11))){
var inst_31944 = (state_32017[(7)]);
var inst_31948 = (inst_31944 == null);
var inst_31949 = cljs.core.not.call(null,inst_31948);
var state_32017__$1 = state_32017;
if(inst_31949){
var statearr_32059_32111 = state_32017__$1;
(statearr_32059_32111[(1)] = (13));

} else {
var statearr_32060_32112 = state_32017__$1;
(statearr_32060_32112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (9))){
var inst_31919 = (state_32017[(8)]);
var state_32017__$1 = state_32017;
var statearr_32061_32113 = state_32017__$1;
(statearr_32061_32113[(2)] = inst_31919);

(statearr_32061_32113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (5))){
var state_32017__$1 = state_32017;
var statearr_32062_32114 = state_32017__$1;
(statearr_32062_32114[(2)] = true);

(statearr_32062_32114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (14))){
var state_32017__$1 = state_32017;
var statearr_32063_32115 = state_32017__$1;
(statearr_32063_32115[(2)] = false);

(statearr_32063_32115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (26))){
var inst_31977 = (state_32017[(9)]);
var inst_31984 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31977);
var state_32017__$1 = state_32017;
var statearr_32064_32116 = state_32017__$1;
(statearr_32064_32116[(2)] = inst_31984);

(statearr_32064_32116[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (16))){
var state_32017__$1 = state_32017;
var statearr_32065_32117 = state_32017__$1;
(statearr_32065_32117[(2)] = true);

(statearr_32065_32117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (38))){
var inst_32007 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32066_32118 = state_32017__$1;
(statearr_32066_32118[(2)] = inst_32007);

(statearr_32066_32118[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (30))){
var inst_31977 = (state_32017[(9)]);
var inst_31969 = (state_32017[(13)]);
var inst_31968 = (state_32017[(10)]);
var inst_31994 = cljs.core.empty_QMARK_.call(null,inst_31968);
var inst_31995 = inst_31969.call(null,inst_31977);
var inst_31996 = cljs.core.not.call(null,inst_31995);
var inst_31997 = ((inst_31994) && (inst_31996));
var state_32017__$1 = state_32017;
var statearr_32067_32119 = state_32017__$1;
(statearr_32067_32119[(2)] = inst_31997);

(statearr_32067_32119[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (10))){
var inst_31919 = (state_32017[(8)]);
var inst_31940 = (state_32017[(2)]);
var inst_31941 = cljs.core.get.call(null,inst_31940,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31942 = cljs.core.get.call(null,inst_31940,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31943 = cljs.core.get.call(null,inst_31940,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31944 = inst_31919;
var state_32017__$1 = (function (){var statearr_32068 = state_32017;
(statearr_32068[(7)] = inst_31944);

(statearr_32068[(16)] = inst_31943);

(statearr_32068[(17)] = inst_31942);

(statearr_32068[(18)] = inst_31941);

return statearr_32068;
})();
var statearr_32069_32120 = state_32017__$1;
(statearr_32069_32120[(2)] = null);

(statearr_32069_32120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (18))){
var inst_31959 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32070_32121 = state_32017__$1;
(statearr_32070_32121[(2)] = inst_31959);

(statearr_32070_32121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (37))){
var state_32017__$1 = state_32017;
var statearr_32071_32122 = state_32017__$1;
(statearr_32071_32122[(2)] = null);

(statearr_32071_32122[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (8))){
var inst_31919 = (state_32017[(8)]);
var inst_31937 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31919);
var state_32017__$1 = state_32017;
var statearr_32072_32123 = state_32017__$1;
(statearr_32072_32123[(2)] = inst_31937);

(statearr_32072_32123[(1)] = (10));


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
});})(c__29154__auto___32077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28987__auto__,c__29154__auto___32077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28988__auto__ = null;
var cljs$core$async$mix_$_state_machine__28988__auto____0 = (function (){
var statearr_32073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32073[(0)] = cljs$core$async$mix_$_state_machine__28988__auto__);

(statearr_32073[(1)] = (1));

return statearr_32073;
});
var cljs$core$async$mix_$_state_machine__28988__auto____1 = (function (state_32017){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_32017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e32074){if((e32074 instanceof Object)){
var ex__28991__auto__ = e32074;
var statearr_32075_32124 = state_32017;
(statearr_32075_32124[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32125 = state_32017;
state_32017 = G__32125;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28988__auto__ = function(state_32017){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28988__auto____1.call(this,state_32017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28988__auto____0;
cljs$core$async$mix_$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28988__auto____1;
return cljs$core$async$mix_$_state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___32077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29156__auto__ = (function (){var statearr_32076 = f__29155__auto__.call(null);
(statearr_32076[(6)] = c__29154__auto___32077);

return statearr_32076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___32077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32127 = arguments.length;
switch (G__32127) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
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
var G__32131 = arguments.length;
switch (G__32131) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__32129_SHARP_){
if(cljs.core.truth_(p1__32129_SHARP_.call(null,topic))){
return p1__32129_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32129_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32132 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32133){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32133 = meta32133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32134,meta32133__$1){
var self__ = this;
var _32134__$1 = this;
return (new cljs.core.async.t_cljs$core$async32132(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32133__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32134){
var self__ = this;
var _32134__$1 = this;
return self__.meta32133;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32133","meta32133",-1822451578,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32132";

cljs.core.async.t_cljs$core$async32132.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32132");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32132.
 */
cljs.core.async.__GT_t_cljs$core$async32132 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32132(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32133){
return (new cljs.core.async.t_cljs$core$async32132(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32133));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32132(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29154__auto___32252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___32252,mults,ensure_mult,p){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___32252,mults,ensure_mult,p){
return (function (state_32206){
var state_val_32207 = (state_32206[(1)]);
if((state_val_32207 === (7))){
var inst_32202 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32208_32253 = state_32206__$1;
(statearr_32208_32253[(2)] = inst_32202);

(statearr_32208_32253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (20))){
var state_32206__$1 = state_32206;
var statearr_32209_32254 = state_32206__$1;
(statearr_32209_32254[(2)] = null);

(statearr_32209_32254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (1))){
var state_32206__$1 = state_32206;
var statearr_32210_32255 = state_32206__$1;
(statearr_32210_32255[(2)] = null);

(statearr_32210_32255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (24))){
var inst_32185 = (state_32206[(7)]);
var inst_32194 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32185);
var state_32206__$1 = state_32206;
var statearr_32211_32256 = state_32206__$1;
(statearr_32211_32256[(2)] = inst_32194);

(statearr_32211_32256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (4))){
var inst_32137 = (state_32206[(8)]);
var inst_32137__$1 = (state_32206[(2)]);
var inst_32138 = (inst_32137__$1 == null);
var state_32206__$1 = (function (){var statearr_32212 = state_32206;
(statearr_32212[(8)] = inst_32137__$1);

return statearr_32212;
})();
if(cljs.core.truth_(inst_32138)){
var statearr_32213_32257 = state_32206__$1;
(statearr_32213_32257[(1)] = (5));

} else {
var statearr_32214_32258 = state_32206__$1;
(statearr_32214_32258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (15))){
var inst_32179 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32215_32259 = state_32206__$1;
(statearr_32215_32259[(2)] = inst_32179);

(statearr_32215_32259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (21))){
var inst_32199 = (state_32206[(2)]);
var state_32206__$1 = (function (){var statearr_32216 = state_32206;
(statearr_32216[(9)] = inst_32199);

return statearr_32216;
})();
var statearr_32217_32260 = state_32206__$1;
(statearr_32217_32260[(2)] = null);

(statearr_32217_32260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (13))){
var inst_32161 = (state_32206[(10)]);
var inst_32163 = cljs.core.chunked_seq_QMARK_.call(null,inst_32161);
var state_32206__$1 = state_32206;
if(inst_32163){
var statearr_32218_32261 = state_32206__$1;
(statearr_32218_32261[(1)] = (16));

} else {
var statearr_32219_32262 = state_32206__$1;
(statearr_32219_32262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (22))){
var inst_32191 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
if(cljs.core.truth_(inst_32191)){
var statearr_32220_32263 = state_32206__$1;
(statearr_32220_32263[(1)] = (23));

} else {
var statearr_32221_32264 = state_32206__$1;
(statearr_32221_32264[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (6))){
var inst_32137 = (state_32206[(8)]);
var inst_32187 = (state_32206[(11)]);
var inst_32185 = (state_32206[(7)]);
var inst_32185__$1 = topic_fn.call(null,inst_32137);
var inst_32186 = cljs.core.deref.call(null,mults);
var inst_32187__$1 = cljs.core.get.call(null,inst_32186,inst_32185__$1);
var state_32206__$1 = (function (){var statearr_32222 = state_32206;
(statearr_32222[(11)] = inst_32187__$1);

(statearr_32222[(7)] = inst_32185__$1);

return statearr_32222;
})();
if(cljs.core.truth_(inst_32187__$1)){
var statearr_32223_32265 = state_32206__$1;
(statearr_32223_32265[(1)] = (19));

} else {
var statearr_32224_32266 = state_32206__$1;
(statearr_32224_32266[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (25))){
var inst_32196 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32225_32267 = state_32206__$1;
(statearr_32225_32267[(2)] = inst_32196);

(statearr_32225_32267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (17))){
var inst_32161 = (state_32206[(10)]);
var inst_32170 = cljs.core.first.call(null,inst_32161);
var inst_32171 = cljs.core.async.muxch_STAR_.call(null,inst_32170);
var inst_32172 = cljs.core.async.close_BANG_.call(null,inst_32171);
var inst_32173 = cljs.core.next.call(null,inst_32161);
var inst_32147 = inst_32173;
var inst_32148 = null;
var inst_32149 = (0);
var inst_32150 = (0);
var state_32206__$1 = (function (){var statearr_32226 = state_32206;
(statearr_32226[(12)] = inst_32149);

(statearr_32226[(13)] = inst_32147);

(statearr_32226[(14)] = inst_32148);

(statearr_32226[(15)] = inst_32150);

(statearr_32226[(16)] = inst_32172);

return statearr_32226;
})();
var statearr_32227_32268 = state_32206__$1;
(statearr_32227_32268[(2)] = null);

(statearr_32227_32268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (3))){
var inst_32204 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32206__$1,inst_32204);
} else {
if((state_val_32207 === (12))){
var inst_32181 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32228_32269 = state_32206__$1;
(statearr_32228_32269[(2)] = inst_32181);

(statearr_32228_32269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (2))){
var state_32206__$1 = state_32206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32206__$1,(4),ch);
} else {
if((state_val_32207 === (23))){
var state_32206__$1 = state_32206;
var statearr_32229_32270 = state_32206__$1;
(statearr_32229_32270[(2)] = null);

(statearr_32229_32270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (19))){
var inst_32137 = (state_32206[(8)]);
var inst_32187 = (state_32206[(11)]);
var inst_32189 = cljs.core.async.muxch_STAR_.call(null,inst_32187);
var state_32206__$1 = state_32206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32206__$1,(22),inst_32189,inst_32137);
} else {
if((state_val_32207 === (11))){
var inst_32161 = (state_32206[(10)]);
var inst_32147 = (state_32206[(13)]);
var inst_32161__$1 = cljs.core.seq.call(null,inst_32147);
var state_32206__$1 = (function (){var statearr_32230 = state_32206;
(statearr_32230[(10)] = inst_32161__$1);

return statearr_32230;
})();
if(inst_32161__$1){
var statearr_32231_32271 = state_32206__$1;
(statearr_32231_32271[(1)] = (13));

} else {
var statearr_32232_32272 = state_32206__$1;
(statearr_32232_32272[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (9))){
var inst_32183 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32233_32273 = state_32206__$1;
(statearr_32233_32273[(2)] = inst_32183);

(statearr_32233_32273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (5))){
var inst_32144 = cljs.core.deref.call(null,mults);
var inst_32145 = cljs.core.vals.call(null,inst_32144);
var inst_32146 = cljs.core.seq.call(null,inst_32145);
var inst_32147 = inst_32146;
var inst_32148 = null;
var inst_32149 = (0);
var inst_32150 = (0);
var state_32206__$1 = (function (){var statearr_32234 = state_32206;
(statearr_32234[(12)] = inst_32149);

(statearr_32234[(13)] = inst_32147);

(statearr_32234[(14)] = inst_32148);

(statearr_32234[(15)] = inst_32150);

return statearr_32234;
})();
var statearr_32235_32274 = state_32206__$1;
(statearr_32235_32274[(2)] = null);

(statearr_32235_32274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (14))){
var state_32206__$1 = state_32206;
var statearr_32239_32275 = state_32206__$1;
(statearr_32239_32275[(2)] = null);

(statearr_32239_32275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (16))){
var inst_32161 = (state_32206[(10)]);
var inst_32165 = cljs.core.chunk_first.call(null,inst_32161);
var inst_32166 = cljs.core.chunk_rest.call(null,inst_32161);
var inst_32167 = cljs.core.count.call(null,inst_32165);
var inst_32147 = inst_32166;
var inst_32148 = inst_32165;
var inst_32149 = inst_32167;
var inst_32150 = (0);
var state_32206__$1 = (function (){var statearr_32240 = state_32206;
(statearr_32240[(12)] = inst_32149);

(statearr_32240[(13)] = inst_32147);

(statearr_32240[(14)] = inst_32148);

(statearr_32240[(15)] = inst_32150);

return statearr_32240;
})();
var statearr_32241_32276 = state_32206__$1;
(statearr_32241_32276[(2)] = null);

(statearr_32241_32276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (10))){
var inst_32149 = (state_32206[(12)]);
var inst_32147 = (state_32206[(13)]);
var inst_32148 = (state_32206[(14)]);
var inst_32150 = (state_32206[(15)]);
var inst_32155 = cljs.core._nth.call(null,inst_32148,inst_32150);
var inst_32156 = cljs.core.async.muxch_STAR_.call(null,inst_32155);
var inst_32157 = cljs.core.async.close_BANG_.call(null,inst_32156);
var inst_32158 = (inst_32150 + (1));
var tmp32236 = inst_32149;
var tmp32237 = inst_32147;
var tmp32238 = inst_32148;
var inst_32147__$1 = tmp32237;
var inst_32148__$1 = tmp32238;
var inst_32149__$1 = tmp32236;
var inst_32150__$1 = inst_32158;
var state_32206__$1 = (function (){var statearr_32242 = state_32206;
(statearr_32242[(12)] = inst_32149__$1);

(statearr_32242[(17)] = inst_32157);

(statearr_32242[(13)] = inst_32147__$1);

(statearr_32242[(14)] = inst_32148__$1);

(statearr_32242[(15)] = inst_32150__$1);

return statearr_32242;
})();
var statearr_32243_32277 = state_32206__$1;
(statearr_32243_32277[(2)] = null);

(statearr_32243_32277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (18))){
var inst_32176 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32244_32278 = state_32206__$1;
(statearr_32244_32278[(2)] = inst_32176);

(statearr_32244_32278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (8))){
var inst_32149 = (state_32206[(12)]);
var inst_32150 = (state_32206[(15)]);
var inst_32152 = (inst_32150 < inst_32149);
var inst_32153 = inst_32152;
var state_32206__$1 = state_32206;
if(cljs.core.truth_(inst_32153)){
var statearr_32245_32279 = state_32206__$1;
(statearr_32245_32279[(1)] = (10));

} else {
var statearr_32246_32280 = state_32206__$1;
(statearr_32246_32280[(1)] = (11));

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
});})(c__29154__auto___32252,mults,ensure_mult,p))
;
return ((function (switch__28987__auto__,c__29154__auto___32252,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28988__auto__ = null;
var cljs$core$async$state_machine__28988__auto____0 = (function (){
var statearr_32247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32247[(0)] = cljs$core$async$state_machine__28988__auto__);

(statearr_32247[(1)] = (1));

return statearr_32247;
});
var cljs$core$async$state_machine__28988__auto____1 = (function (state_32206){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_32206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e32248){if((e32248 instanceof Object)){
var ex__28991__auto__ = e32248;
var statearr_32249_32281 = state_32206;
(statearr_32249_32281[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32282 = state_32206;
state_32206 = G__32282;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$state_machine__28988__auto__ = function(state_32206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28988__auto____1.call(this,state_32206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28988__auto____0;
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28988__auto____1;
return cljs$core$async$state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___32252,mults,ensure_mult,p))
})();
var state__29156__auto__ = (function (){var statearr_32250 = f__29155__auto__.call(null);
(statearr_32250[(6)] = c__29154__auto___32252);

return statearr_32250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___32252,mults,ensure_mult,p))
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
var G__32284 = arguments.length;
switch (G__32284) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__32287 = arguments.length;
switch (G__32287) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__32290 = arguments.length;
switch (G__32290) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__29154__auto___32357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___32357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___32357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32329){
var state_val_32330 = (state_32329[(1)]);
if((state_val_32330 === (7))){
var state_32329__$1 = state_32329;
var statearr_32331_32358 = state_32329__$1;
(statearr_32331_32358[(2)] = null);

(statearr_32331_32358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (1))){
var state_32329__$1 = state_32329;
var statearr_32332_32359 = state_32329__$1;
(statearr_32332_32359[(2)] = null);

(statearr_32332_32359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (4))){
var inst_32293 = (state_32329[(7)]);
var inst_32295 = (inst_32293 < cnt);
var state_32329__$1 = state_32329;
if(cljs.core.truth_(inst_32295)){
var statearr_32333_32360 = state_32329__$1;
(statearr_32333_32360[(1)] = (6));

} else {
var statearr_32334_32361 = state_32329__$1;
(statearr_32334_32361[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (15))){
var inst_32325 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
var statearr_32335_32362 = state_32329__$1;
(statearr_32335_32362[(2)] = inst_32325);

(statearr_32335_32362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (13))){
var inst_32318 = cljs.core.async.close_BANG_.call(null,out);
var state_32329__$1 = state_32329;
var statearr_32336_32363 = state_32329__$1;
(statearr_32336_32363[(2)] = inst_32318);

(statearr_32336_32363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (6))){
var state_32329__$1 = state_32329;
var statearr_32337_32364 = state_32329__$1;
(statearr_32337_32364[(2)] = null);

(statearr_32337_32364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (3))){
var inst_32327 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32329__$1,inst_32327);
} else {
if((state_val_32330 === (12))){
var inst_32315 = (state_32329[(8)]);
var inst_32315__$1 = (state_32329[(2)]);
var inst_32316 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32315__$1);
var state_32329__$1 = (function (){var statearr_32338 = state_32329;
(statearr_32338[(8)] = inst_32315__$1);

return statearr_32338;
})();
if(cljs.core.truth_(inst_32316)){
var statearr_32339_32365 = state_32329__$1;
(statearr_32339_32365[(1)] = (13));

} else {
var statearr_32340_32366 = state_32329__$1;
(statearr_32340_32366[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (2))){
var inst_32292 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32293 = (0);
var state_32329__$1 = (function (){var statearr_32341 = state_32329;
(statearr_32341[(9)] = inst_32292);

(statearr_32341[(7)] = inst_32293);

return statearr_32341;
})();
var statearr_32342_32367 = state_32329__$1;
(statearr_32342_32367[(2)] = null);

(statearr_32342_32367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (11))){
var inst_32293 = (state_32329[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32329,(10),Object,null,(9));
var inst_32302 = chs__$1.call(null,inst_32293);
var inst_32303 = done.call(null,inst_32293);
var inst_32304 = cljs.core.async.take_BANG_.call(null,inst_32302,inst_32303);
var state_32329__$1 = state_32329;
var statearr_32343_32368 = state_32329__$1;
(statearr_32343_32368[(2)] = inst_32304);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32329__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (9))){
var inst_32293 = (state_32329[(7)]);
var inst_32306 = (state_32329[(2)]);
var inst_32307 = (inst_32293 + (1));
var inst_32293__$1 = inst_32307;
var state_32329__$1 = (function (){var statearr_32344 = state_32329;
(statearr_32344[(10)] = inst_32306);

(statearr_32344[(7)] = inst_32293__$1);

return statearr_32344;
})();
var statearr_32345_32369 = state_32329__$1;
(statearr_32345_32369[(2)] = null);

(statearr_32345_32369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (5))){
var inst_32313 = (state_32329[(2)]);
var state_32329__$1 = (function (){var statearr_32346 = state_32329;
(statearr_32346[(11)] = inst_32313);

return statearr_32346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32329__$1,(12),dchan);
} else {
if((state_val_32330 === (14))){
var inst_32315 = (state_32329[(8)]);
var inst_32320 = cljs.core.apply.call(null,f,inst_32315);
var state_32329__$1 = state_32329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32329__$1,(16),out,inst_32320);
} else {
if((state_val_32330 === (16))){
var inst_32322 = (state_32329[(2)]);
var state_32329__$1 = (function (){var statearr_32347 = state_32329;
(statearr_32347[(12)] = inst_32322);

return statearr_32347;
})();
var statearr_32348_32370 = state_32329__$1;
(statearr_32348_32370[(2)] = null);

(statearr_32348_32370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (10))){
var inst_32297 = (state_32329[(2)]);
var inst_32298 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32329__$1 = (function (){var statearr_32349 = state_32329;
(statearr_32349[(13)] = inst_32297);

return statearr_32349;
})();
var statearr_32350_32371 = state_32329__$1;
(statearr_32350_32371[(2)] = inst_32298);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32329__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (8))){
var inst_32311 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
var statearr_32351_32372 = state_32329__$1;
(statearr_32351_32372[(2)] = inst_32311);

(statearr_32351_32372[(1)] = (5));


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
});})(c__29154__auto___32357,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28987__auto__,c__29154__auto___32357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28988__auto__ = null;
var cljs$core$async$state_machine__28988__auto____0 = (function (){
var statearr_32352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32352[(0)] = cljs$core$async$state_machine__28988__auto__);

(statearr_32352[(1)] = (1));

return statearr_32352;
});
var cljs$core$async$state_machine__28988__auto____1 = (function (state_32329){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_32329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e32353){if((e32353 instanceof Object)){
var ex__28991__auto__ = e32353;
var statearr_32354_32373 = state_32329;
(statearr_32354_32373[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32374 = state_32329;
state_32329 = G__32374;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$state_machine__28988__auto__ = function(state_32329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28988__auto____1.call(this,state_32329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28988__auto____0;
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28988__auto____1;
return cljs$core$async$state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___32357,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29156__auto__ = (function (){var statearr_32355 = f__29155__auto__.call(null);
(statearr_32355[(6)] = c__29154__auto___32357);

return statearr_32355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___32357,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32377 = arguments.length;
switch (G__32377) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29154__auto___32431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___32431,out){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___32431,out){
return (function (state_32409){
var state_val_32410 = (state_32409[(1)]);
if((state_val_32410 === (7))){
var inst_32388 = (state_32409[(7)]);
var inst_32389 = (state_32409[(8)]);
var inst_32388__$1 = (state_32409[(2)]);
var inst_32389__$1 = cljs.core.nth.call(null,inst_32388__$1,(0),null);
var inst_32390 = cljs.core.nth.call(null,inst_32388__$1,(1),null);
var inst_32391 = (inst_32389__$1 == null);
var state_32409__$1 = (function (){var statearr_32411 = state_32409;
(statearr_32411[(7)] = inst_32388__$1);

(statearr_32411[(9)] = inst_32390);

(statearr_32411[(8)] = inst_32389__$1);

return statearr_32411;
})();
if(cljs.core.truth_(inst_32391)){
var statearr_32412_32432 = state_32409__$1;
(statearr_32412_32432[(1)] = (8));

} else {
var statearr_32413_32433 = state_32409__$1;
(statearr_32413_32433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (1))){
var inst_32378 = cljs.core.vec.call(null,chs);
var inst_32379 = inst_32378;
var state_32409__$1 = (function (){var statearr_32414 = state_32409;
(statearr_32414[(10)] = inst_32379);

return statearr_32414;
})();
var statearr_32415_32434 = state_32409__$1;
(statearr_32415_32434[(2)] = null);

(statearr_32415_32434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (4))){
var inst_32379 = (state_32409[(10)]);
var state_32409__$1 = state_32409;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32409__$1,(7),inst_32379);
} else {
if((state_val_32410 === (6))){
var inst_32405 = (state_32409[(2)]);
var state_32409__$1 = state_32409;
var statearr_32416_32435 = state_32409__$1;
(statearr_32416_32435[(2)] = inst_32405);

(statearr_32416_32435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (3))){
var inst_32407 = (state_32409[(2)]);
var state_32409__$1 = state_32409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32409__$1,inst_32407);
} else {
if((state_val_32410 === (2))){
var inst_32379 = (state_32409[(10)]);
var inst_32381 = cljs.core.count.call(null,inst_32379);
var inst_32382 = (inst_32381 > (0));
var state_32409__$1 = state_32409;
if(cljs.core.truth_(inst_32382)){
var statearr_32418_32436 = state_32409__$1;
(statearr_32418_32436[(1)] = (4));

} else {
var statearr_32419_32437 = state_32409__$1;
(statearr_32419_32437[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (11))){
var inst_32379 = (state_32409[(10)]);
var inst_32398 = (state_32409[(2)]);
var tmp32417 = inst_32379;
var inst_32379__$1 = tmp32417;
var state_32409__$1 = (function (){var statearr_32420 = state_32409;
(statearr_32420[(10)] = inst_32379__$1);

(statearr_32420[(11)] = inst_32398);

return statearr_32420;
})();
var statearr_32421_32438 = state_32409__$1;
(statearr_32421_32438[(2)] = null);

(statearr_32421_32438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (9))){
var inst_32389 = (state_32409[(8)]);
var state_32409__$1 = state_32409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32409__$1,(11),out,inst_32389);
} else {
if((state_val_32410 === (5))){
var inst_32403 = cljs.core.async.close_BANG_.call(null,out);
var state_32409__$1 = state_32409;
var statearr_32422_32439 = state_32409__$1;
(statearr_32422_32439[(2)] = inst_32403);

(statearr_32422_32439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (10))){
var inst_32401 = (state_32409[(2)]);
var state_32409__$1 = state_32409;
var statearr_32423_32440 = state_32409__$1;
(statearr_32423_32440[(2)] = inst_32401);

(statearr_32423_32440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (8))){
var inst_32388 = (state_32409[(7)]);
var inst_32390 = (state_32409[(9)]);
var inst_32379 = (state_32409[(10)]);
var inst_32389 = (state_32409[(8)]);
var inst_32393 = (function (){var cs = inst_32379;
var vec__32384 = inst_32388;
var v = inst_32389;
var c = inst_32390;
return ((function (cs,vec__32384,v,c,inst_32388,inst_32390,inst_32379,inst_32389,state_val_32410,c__29154__auto___32431,out){
return (function (p1__32375_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32375_SHARP_);
});
;})(cs,vec__32384,v,c,inst_32388,inst_32390,inst_32379,inst_32389,state_val_32410,c__29154__auto___32431,out))
})();
var inst_32394 = cljs.core.filterv.call(null,inst_32393,inst_32379);
var inst_32379__$1 = inst_32394;
var state_32409__$1 = (function (){var statearr_32424 = state_32409;
(statearr_32424[(10)] = inst_32379__$1);

return statearr_32424;
})();
var statearr_32425_32441 = state_32409__$1;
(statearr_32425_32441[(2)] = null);

(statearr_32425_32441[(1)] = (2));


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
});})(c__29154__auto___32431,out))
;
return ((function (switch__28987__auto__,c__29154__auto___32431,out){
return (function() {
var cljs$core$async$state_machine__28988__auto__ = null;
var cljs$core$async$state_machine__28988__auto____0 = (function (){
var statearr_32426 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32426[(0)] = cljs$core$async$state_machine__28988__auto__);

(statearr_32426[(1)] = (1));

return statearr_32426;
});
var cljs$core$async$state_machine__28988__auto____1 = (function (state_32409){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_32409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e32427){if((e32427 instanceof Object)){
var ex__28991__auto__ = e32427;
var statearr_32428_32442 = state_32409;
(statearr_32428_32442[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32443 = state_32409;
state_32409 = G__32443;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$state_machine__28988__auto__ = function(state_32409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28988__auto____1.call(this,state_32409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28988__auto____0;
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28988__auto____1;
return cljs$core$async$state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___32431,out))
})();
var state__29156__auto__ = (function (){var statearr_32429 = f__29155__auto__.call(null);
(statearr_32429[(6)] = c__29154__auto___32431);

return statearr_32429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___32431,out))
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
var G__32445 = arguments.length;
switch (G__32445) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29154__auto___32490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___32490,out){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___32490,out){
return (function (state_32469){
var state_val_32470 = (state_32469[(1)]);
if((state_val_32470 === (7))){
var inst_32451 = (state_32469[(7)]);
var inst_32451__$1 = (state_32469[(2)]);
var inst_32452 = (inst_32451__$1 == null);
var inst_32453 = cljs.core.not.call(null,inst_32452);
var state_32469__$1 = (function (){var statearr_32471 = state_32469;
(statearr_32471[(7)] = inst_32451__$1);

return statearr_32471;
})();
if(inst_32453){
var statearr_32472_32491 = state_32469__$1;
(statearr_32472_32491[(1)] = (8));

} else {
var statearr_32473_32492 = state_32469__$1;
(statearr_32473_32492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32470 === (1))){
var inst_32446 = (0);
var state_32469__$1 = (function (){var statearr_32474 = state_32469;
(statearr_32474[(8)] = inst_32446);

return statearr_32474;
})();
var statearr_32475_32493 = state_32469__$1;
(statearr_32475_32493[(2)] = null);

(statearr_32475_32493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32470 === (4))){
var state_32469__$1 = state_32469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32469__$1,(7),ch);
} else {
if((state_val_32470 === (6))){
var inst_32464 = (state_32469[(2)]);
var state_32469__$1 = state_32469;
var statearr_32476_32494 = state_32469__$1;
(statearr_32476_32494[(2)] = inst_32464);

(statearr_32476_32494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32470 === (3))){
var inst_32466 = (state_32469[(2)]);
var inst_32467 = cljs.core.async.close_BANG_.call(null,out);
var state_32469__$1 = (function (){var statearr_32477 = state_32469;
(statearr_32477[(9)] = inst_32466);

return statearr_32477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32469__$1,inst_32467);
} else {
if((state_val_32470 === (2))){
var inst_32446 = (state_32469[(8)]);
var inst_32448 = (inst_32446 < n);
var state_32469__$1 = state_32469;
if(cljs.core.truth_(inst_32448)){
var statearr_32478_32495 = state_32469__$1;
(statearr_32478_32495[(1)] = (4));

} else {
var statearr_32479_32496 = state_32469__$1;
(statearr_32479_32496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32470 === (11))){
var inst_32446 = (state_32469[(8)]);
var inst_32456 = (state_32469[(2)]);
var inst_32457 = (inst_32446 + (1));
var inst_32446__$1 = inst_32457;
var state_32469__$1 = (function (){var statearr_32480 = state_32469;
(statearr_32480[(8)] = inst_32446__$1);

(statearr_32480[(10)] = inst_32456);

return statearr_32480;
})();
var statearr_32481_32497 = state_32469__$1;
(statearr_32481_32497[(2)] = null);

(statearr_32481_32497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32470 === (9))){
var state_32469__$1 = state_32469;
var statearr_32482_32498 = state_32469__$1;
(statearr_32482_32498[(2)] = null);

(statearr_32482_32498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32470 === (5))){
var state_32469__$1 = state_32469;
var statearr_32483_32499 = state_32469__$1;
(statearr_32483_32499[(2)] = null);

(statearr_32483_32499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32470 === (10))){
var inst_32461 = (state_32469[(2)]);
var state_32469__$1 = state_32469;
var statearr_32484_32500 = state_32469__$1;
(statearr_32484_32500[(2)] = inst_32461);

(statearr_32484_32500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32470 === (8))){
var inst_32451 = (state_32469[(7)]);
var state_32469__$1 = state_32469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32469__$1,(11),out,inst_32451);
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
});})(c__29154__auto___32490,out))
;
return ((function (switch__28987__auto__,c__29154__auto___32490,out){
return (function() {
var cljs$core$async$state_machine__28988__auto__ = null;
var cljs$core$async$state_machine__28988__auto____0 = (function (){
var statearr_32485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32485[(0)] = cljs$core$async$state_machine__28988__auto__);

(statearr_32485[(1)] = (1));

return statearr_32485;
});
var cljs$core$async$state_machine__28988__auto____1 = (function (state_32469){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_32469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e32486){if((e32486 instanceof Object)){
var ex__28991__auto__ = e32486;
var statearr_32487_32501 = state_32469;
(statearr_32487_32501[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32502 = state_32469;
state_32469 = G__32502;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$state_machine__28988__auto__ = function(state_32469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28988__auto____1.call(this,state_32469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28988__auto____0;
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28988__auto____1;
return cljs$core$async$state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___32490,out))
})();
var state__29156__auto__ = (function (){var statearr_32488 = f__29155__auto__.call(null);
(statearr_32488[(6)] = c__29154__auto___32490);

return statearr_32488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___32490,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32504 = (function (f,ch,meta32505){
this.f = f;
this.ch = ch;
this.meta32505 = meta32505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32506,meta32505__$1){
var self__ = this;
var _32506__$1 = this;
return (new cljs.core.async.t_cljs$core$async32504(self__.f,self__.ch,meta32505__$1));
});

cljs.core.async.t_cljs$core$async32504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32506){
var self__ = this;
var _32506__$1 = this;
return self__.meta32505;
});

cljs.core.async.t_cljs$core$async32504.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32504.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32504.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32507 = (function (f,ch,meta32505,_,fn1,meta32508){
this.f = f;
this.ch = ch;
this.meta32505 = meta32505;
this._ = _;
this.fn1 = fn1;
this.meta32508 = meta32508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32509,meta32508__$1){
var self__ = this;
var _32509__$1 = this;
return (new cljs.core.async.t_cljs$core$async32507(self__.f,self__.ch,self__.meta32505,self__._,self__.fn1,meta32508__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32509){
var self__ = this;
var _32509__$1 = this;
return self__.meta32508;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32503_SHARP_){
return f1.call(null,(((p1__32503_SHARP_ == null))?null:self__.f.call(null,p1__32503_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32507.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32505","meta32505",700270747,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32504","cljs.core.async/t_cljs$core$async32504",-424508731,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32508","meta32508",1029110579,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32507";

cljs.core.async.t_cljs$core$async32507.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32507");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32507.
 */
cljs.core.async.__GT_t_cljs$core$async32507 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32507(f__$1,ch__$1,meta32505__$1,___$2,fn1__$1,meta32508){
return (new cljs.core.async.t_cljs$core$async32507(f__$1,ch__$1,meta32505__$1,___$2,fn1__$1,meta32508));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32507(self__.f,self__.ch,self__.meta32505,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32504.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32505","meta32505",700270747,null)], null);
});

cljs.core.async.t_cljs$core$async32504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32504";

cljs.core.async.t_cljs$core$async32504.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32504");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32504.
 */
cljs.core.async.__GT_t_cljs$core$async32504 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32504(f__$1,ch__$1,meta32505){
return (new cljs.core.async.t_cljs$core$async32504(f__$1,ch__$1,meta32505));
});

}

return (new cljs.core.async.t_cljs$core$async32504(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32510 = (function (f,ch,meta32511){
this.f = f;
this.ch = ch;
this.meta32511 = meta32511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32512,meta32511__$1){
var self__ = this;
var _32512__$1 = this;
return (new cljs.core.async.t_cljs$core$async32510(self__.f,self__.ch,meta32511__$1));
});

cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32512){
var self__ = this;
var _32512__$1 = this;
return self__.meta32511;
});

cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32510.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32511","meta32511",-1988885463,null)], null);
});

cljs.core.async.t_cljs$core$async32510.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32510";

cljs.core.async.t_cljs$core$async32510.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32510");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32510.
 */
cljs.core.async.__GT_t_cljs$core$async32510 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32510(f__$1,ch__$1,meta32511){
return (new cljs.core.async.t_cljs$core$async32510(f__$1,ch__$1,meta32511));
});

}

return (new cljs.core.async.t_cljs$core$async32510(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32513 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32513 = (function (p,ch,meta32514){
this.p = p;
this.ch = ch;
this.meta32514 = meta32514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32515,meta32514__$1){
var self__ = this;
var _32515__$1 = this;
return (new cljs.core.async.t_cljs$core$async32513(self__.p,self__.ch,meta32514__$1));
});

cljs.core.async.t_cljs$core$async32513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32515){
var self__ = this;
var _32515__$1 = this;
return self__.meta32514;
});

cljs.core.async.t_cljs$core$async32513.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32513.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32513.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32513.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32513.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32513.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32513.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32514","meta32514",-1059183315,null)], null);
});

cljs.core.async.t_cljs$core$async32513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32513";

cljs.core.async.t_cljs$core$async32513.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32513");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32513.
 */
cljs.core.async.__GT_t_cljs$core$async32513 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32513(p__$1,ch__$1,meta32514){
return (new cljs.core.async.t_cljs$core$async32513(p__$1,ch__$1,meta32514));
});

}

return (new cljs.core.async.t_cljs$core$async32513(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32517 = arguments.length;
switch (G__32517) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29154__auto___32557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___32557,out){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___32557,out){
return (function (state_32538){
var state_val_32539 = (state_32538[(1)]);
if((state_val_32539 === (7))){
var inst_32534 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32540_32558 = state_32538__$1;
(statearr_32540_32558[(2)] = inst_32534);

(statearr_32540_32558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (1))){
var state_32538__$1 = state_32538;
var statearr_32541_32559 = state_32538__$1;
(statearr_32541_32559[(2)] = null);

(statearr_32541_32559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (4))){
var inst_32520 = (state_32538[(7)]);
var inst_32520__$1 = (state_32538[(2)]);
var inst_32521 = (inst_32520__$1 == null);
var state_32538__$1 = (function (){var statearr_32542 = state_32538;
(statearr_32542[(7)] = inst_32520__$1);

return statearr_32542;
})();
if(cljs.core.truth_(inst_32521)){
var statearr_32543_32560 = state_32538__$1;
(statearr_32543_32560[(1)] = (5));

} else {
var statearr_32544_32561 = state_32538__$1;
(statearr_32544_32561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (6))){
var inst_32520 = (state_32538[(7)]);
var inst_32525 = p.call(null,inst_32520);
var state_32538__$1 = state_32538;
if(cljs.core.truth_(inst_32525)){
var statearr_32545_32562 = state_32538__$1;
(statearr_32545_32562[(1)] = (8));

} else {
var statearr_32546_32563 = state_32538__$1;
(statearr_32546_32563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (3))){
var inst_32536 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32538__$1,inst_32536);
} else {
if((state_val_32539 === (2))){
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32538__$1,(4),ch);
} else {
if((state_val_32539 === (11))){
var inst_32528 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32547_32564 = state_32538__$1;
(statearr_32547_32564[(2)] = inst_32528);

(statearr_32547_32564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (9))){
var state_32538__$1 = state_32538;
var statearr_32548_32565 = state_32538__$1;
(statearr_32548_32565[(2)] = null);

(statearr_32548_32565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (5))){
var inst_32523 = cljs.core.async.close_BANG_.call(null,out);
var state_32538__$1 = state_32538;
var statearr_32549_32566 = state_32538__$1;
(statearr_32549_32566[(2)] = inst_32523);

(statearr_32549_32566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (10))){
var inst_32531 = (state_32538[(2)]);
var state_32538__$1 = (function (){var statearr_32550 = state_32538;
(statearr_32550[(8)] = inst_32531);

return statearr_32550;
})();
var statearr_32551_32567 = state_32538__$1;
(statearr_32551_32567[(2)] = null);

(statearr_32551_32567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (8))){
var inst_32520 = (state_32538[(7)]);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32538__$1,(11),out,inst_32520);
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
});})(c__29154__auto___32557,out))
;
return ((function (switch__28987__auto__,c__29154__auto___32557,out){
return (function() {
var cljs$core$async$state_machine__28988__auto__ = null;
var cljs$core$async$state_machine__28988__auto____0 = (function (){
var statearr_32552 = [null,null,null,null,null,null,null,null,null];
(statearr_32552[(0)] = cljs$core$async$state_machine__28988__auto__);

(statearr_32552[(1)] = (1));

return statearr_32552;
});
var cljs$core$async$state_machine__28988__auto____1 = (function (state_32538){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_32538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e32553){if((e32553 instanceof Object)){
var ex__28991__auto__ = e32553;
var statearr_32554_32568 = state_32538;
(statearr_32554_32568[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32569 = state_32538;
state_32538 = G__32569;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$state_machine__28988__auto__ = function(state_32538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28988__auto____1.call(this,state_32538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28988__auto____0;
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28988__auto____1;
return cljs$core$async$state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___32557,out))
})();
var state__29156__auto__ = (function (){var statearr_32555 = f__29155__auto__.call(null);
(statearr_32555[(6)] = c__29154__auto___32557);

return statearr_32555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___32557,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32571 = arguments.length;
switch (G__32571) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__29154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto__){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto__){
return (function (state_32634){
var state_val_32635 = (state_32634[(1)]);
if((state_val_32635 === (7))){
var inst_32630 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32636_32674 = state_32634__$1;
(statearr_32636_32674[(2)] = inst_32630);

(statearr_32636_32674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (20))){
var inst_32600 = (state_32634[(7)]);
var inst_32611 = (state_32634[(2)]);
var inst_32612 = cljs.core.next.call(null,inst_32600);
var inst_32586 = inst_32612;
var inst_32587 = null;
var inst_32588 = (0);
var inst_32589 = (0);
var state_32634__$1 = (function (){var statearr_32637 = state_32634;
(statearr_32637[(8)] = inst_32586);

(statearr_32637[(9)] = inst_32589);

(statearr_32637[(10)] = inst_32588);

(statearr_32637[(11)] = inst_32587);

(statearr_32637[(12)] = inst_32611);

return statearr_32637;
})();
var statearr_32638_32675 = state_32634__$1;
(statearr_32638_32675[(2)] = null);

(statearr_32638_32675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (1))){
var state_32634__$1 = state_32634;
var statearr_32639_32676 = state_32634__$1;
(statearr_32639_32676[(2)] = null);

(statearr_32639_32676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (4))){
var inst_32575 = (state_32634[(13)]);
var inst_32575__$1 = (state_32634[(2)]);
var inst_32576 = (inst_32575__$1 == null);
var state_32634__$1 = (function (){var statearr_32640 = state_32634;
(statearr_32640[(13)] = inst_32575__$1);

return statearr_32640;
})();
if(cljs.core.truth_(inst_32576)){
var statearr_32641_32677 = state_32634__$1;
(statearr_32641_32677[(1)] = (5));

} else {
var statearr_32642_32678 = state_32634__$1;
(statearr_32642_32678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (15))){
var state_32634__$1 = state_32634;
var statearr_32646_32679 = state_32634__$1;
(statearr_32646_32679[(2)] = null);

(statearr_32646_32679[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (21))){
var state_32634__$1 = state_32634;
var statearr_32647_32680 = state_32634__$1;
(statearr_32647_32680[(2)] = null);

(statearr_32647_32680[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (13))){
var inst_32586 = (state_32634[(8)]);
var inst_32589 = (state_32634[(9)]);
var inst_32588 = (state_32634[(10)]);
var inst_32587 = (state_32634[(11)]);
var inst_32596 = (state_32634[(2)]);
var inst_32597 = (inst_32589 + (1));
var tmp32643 = inst_32586;
var tmp32644 = inst_32588;
var tmp32645 = inst_32587;
var inst_32586__$1 = tmp32643;
var inst_32587__$1 = tmp32645;
var inst_32588__$1 = tmp32644;
var inst_32589__$1 = inst_32597;
var state_32634__$1 = (function (){var statearr_32648 = state_32634;
(statearr_32648[(8)] = inst_32586__$1);

(statearr_32648[(14)] = inst_32596);

(statearr_32648[(9)] = inst_32589__$1);

(statearr_32648[(10)] = inst_32588__$1);

(statearr_32648[(11)] = inst_32587__$1);

return statearr_32648;
})();
var statearr_32649_32681 = state_32634__$1;
(statearr_32649_32681[(2)] = null);

(statearr_32649_32681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (22))){
var state_32634__$1 = state_32634;
var statearr_32650_32682 = state_32634__$1;
(statearr_32650_32682[(2)] = null);

(statearr_32650_32682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (6))){
var inst_32575 = (state_32634[(13)]);
var inst_32584 = f.call(null,inst_32575);
var inst_32585 = cljs.core.seq.call(null,inst_32584);
var inst_32586 = inst_32585;
var inst_32587 = null;
var inst_32588 = (0);
var inst_32589 = (0);
var state_32634__$1 = (function (){var statearr_32651 = state_32634;
(statearr_32651[(8)] = inst_32586);

(statearr_32651[(9)] = inst_32589);

(statearr_32651[(10)] = inst_32588);

(statearr_32651[(11)] = inst_32587);

return statearr_32651;
})();
var statearr_32652_32683 = state_32634__$1;
(statearr_32652_32683[(2)] = null);

(statearr_32652_32683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (17))){
var inst_32600 = (state_32634[(7)]);
var inst_32604 = cljs.core.chunk_first.call(null,inst_32600);
var inst_32605 = cljs.core.chunk_rest.call(null,inst_32600);
var inst_32606 = cljs.core.count.call(null,inst_32604);
var inst_32586 = inst_32605;
var inst_32587 = inst_32604;
var inst_32588 = inst_32606;
var inst_32589 = (0);
var state_32634__$1 = (function (){var statearr_32653 = state_32634;
(statearr_32653[(8)] = inst_32586);

(statearr_32653[(9)] = inst_32589);

(statearr_32653[(10)] = inst_32588);

(statearr_32653[(11)] = inst_32587);

return statearr_32653;
})();
var statearr_32654_32684 = state_32634__$1;
(statearr_32654_32684[(2)] = null);

(statearr_32654_32684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (3))){
var inst_32632 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32634__$1,inst_32632);
} else {
if((state_val_32635 === (12))){
var inst_32620 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32655_32685 = state_32634__$1;
(statearr_32655_32685[(2)] = inst_32620);

(statearr_32655_32685[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (2))){
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32634__$1,(4),in$);
} else {
if((state_val_32635 === (23))){
var inst_32628 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32656_32686 = state_32634__$1;
(statearr_32656_32686[(2)] = inst_32628);

(statearr_32656_32686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (19))){
var inst_32615 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32657_32687 = state_32634__$1;
(statearr_32657_32687[(2)] = inst_32615);

(statearr_32657_32687[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (11))){
var inst_32586 = (state_32634[(8)]);
var inst_32600 = (state_32634[(7)]);
var inst_32600__$1 = cljs.core.seq.call(null,inst_32586);
var state_32634__$1 = (function (){var statearr_32658 = state_32634;
(statearr_32658[(7)] = inst_32600__$1);

return statearr_32658;
})();
if(inst_32600__$1){
var statearr_32659_32688 = state_32634__$1;
(statearr_32659_32688[(1)] = (14));

} else {
var statearr_32660_32689 = state_32634__$1;
(statearr_32660_32689[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (9))){
var inst_32622 = (state_32634[(2)]);
var inst_32623 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32634__$1 = (function (){var statearr_32661 = state_32634;
(statearr_32661[(15)] = inst_32622);

return statearr_32661;
})();
if(cljs.core.truth_(inst_32623)){
var statearr_32662_32690 = state_32634__$1;
(statearr_32662_32690[(1)] = (21));

} else {
var statearr_32663_32691 = state_32634__$1;
(statearr_32663_32691[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (5))){
var inst_32578 = cljs.core.async.close_BANG_.call(null,out);
var state_32634__$1 = state_32634;
var statearr_32664_32692 = state_32634__$1;
(statearr_32664_32692[(2)] = inst_32578);

(statearr_32664_32692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (14))){
var inst_32600 = (state_32634[(7)]);
var inst_32602 = cljs.core.chunked_seq_QMARK_.call(null,inst_32600);
var state_32634__$1 = state_32634;
if(inst_32602){
var statearr_32665_32693 = state_32634__$1;
(statearr_32665_32693[(1)] = (17));

} else {
var statearr_32666_32694 = state_32634__$1;
(statearr_32666_32694[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (16))){
var inst_32618 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32667_32695 = state_32634__$1;
(statearr_32667_32695[(2)] = inst_32618);

(statearr_32667_32695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (10))){
var inst_32589 = (state_32634[(9)]);
var inst_32587 = (state_32634[(11)]);
var inst_32594 = cljs.core._nth.call(null,inst_32587,inst_32589);
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32634__$1,(13),out,inst_32594);
} else {
if((state_val_32635 === (18))){
var inst_32600 = (state_32634[(7)]);
var inst_32609 = cljs.core.first.call(null,inst_32600);
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32634__$1,(20),out,inst_32609);
} else {
if((state_val_32635 === (8))){
var inst_32589 = (state_32634[(9)]);
var inst_32588 = (state_32634[(10)]);
var inst_32591 = (inst_32589 < inst_32588);
var inst_32592 = inst_32591;
var state_32634__$1 = state_32634;
if(cljs.core.truth_(inst_32592)){
var statearr_32668_32696 = state_32634__$1;
(statearr_32668_32696[(1)] = (10));

} else {
var statearr_32669_32697 = state_32634__$1;
(statearr_32669_32697[(1)] = (11));

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
});})(c__29154__auto__))
;
return ((function (switch__28987__auto__,c__29154__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28988__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28988__auto____0 = (function (){
var statearr_32670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32670[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28988__auto__);

(statearr_32670[(1)] = (1));

return statearr_32670;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28988__auto____1 = (function (state_32634){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_32634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e32671){if((e32671 instanceof Object)){
var ex__28991__auto__ = e32671;
var statearr_32672_32698 = state_32634;
(statearr_32672_32698[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32699 = state_32634;
state_32634 = G__32699;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28988__auto__ = function(state_32634){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28988__auto____1.call(this,state_32634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28988__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28988__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto__))
})();
var state__29156__auto__ = (function (){var statearr_32673 = f__29155__auto__.call(null);
(statearr_32673[(6)] = c__29154__auto__);

return statearr_32673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto__))
);

return c__29154__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32701 = arguments.length;
switch (G__32701) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__32704 = arguments.length;
switch (G__32704) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__32707 = arguments.length;
switch (G__32707) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29154__auto___32754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___32754,out){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___32754,out){
return (function (state_32731){
var state_val_32732 = (state_32731[(1)]);
if((state_val_32732 === (7))){
var inst_32726 = (state_32731[(2)]);
var state_32731__$1 = state_32731;
var statearr_32733_32755 = state_32731__$1;
(statearr_32733_32755[(2)] = inst_32726);

(statearr_32733_32755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32732 === (1))){
var inst_32708 = null;
var state_32731__$1 = (function (){var statearr_32734 = state_32731;
(statearr_32734[(7)] = inst_32708);

return statearr_32734;
})();
var statearr_32735_32756 = state_32731__$1;
(statearr_32735_32756[(2)] = null);

(statearr_32735_32756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32732 === (4))){
var inst_32711 = (state_32731[(8)]);
var inst_32711__$1 = (state_32731[(2)]);
var inst_32712 = (inst_32711__$1 == null);
var inst_32713 = cljs.core.not.call(null,inst_32712);
var state_32731__$1 = (function (){var statearr_32736 = state_32731;
(statearr_32736[(8)] = inst_32711__$1);

return statearr_32736;
})();
if(inst_32713){
var statearr_32737_32757 = state_32731__$1;
(statearr_32737_32757[(1)] = (5));

} else {
var statearr_32738_32758 = state_32731__$1;
(statearr_32738_32758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32732 === (6))){
var state_32731__$1 = state_32731;
var statearr_32739_32759 = state_32731__$1;
(statearr_32739_32759[(2)] = null);

(statearr_32739_32759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32732 === (3))){
var inst_32728 = (state_32731[(2)]);
var inst_32729 = cljs.core.async.close_BANG_.call(null,out);
var state_32731__$1 = (function (){var statearr_32740 = state_32731;
(statearr_32740[(9)] = inst_32728);

return statearr_32740;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32731__$1,inst_32729);
} else {
if((state_val_32732 === (2))){
var state_32731__$1 = state_32731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32731__$1,(4),ch);
} else {
if((state_val_32732 === (11))){
var inst_32711 = (state_32731[(8)]);
var inst_32720 = (state_32731[(2)]);
var inst_32708 = inst_32711;
var state_32731__$1 = (function (){var statearr_32741 = state_32731;
(statearr_32741[(7)] = inst_32708);

(statearr_32741[(10)] = inst_32720);

return statearr_32741;
})();
var statearr_32742_32760 = state_32731__$1;
(statearr_32742_32760[(2)] = null);

(statearr_32742_32760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32732 === (9))){
var inst_32711 = (state_32731[(8)]);
var state_32731__$1 = state_32731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32731__$1,(11),out,inst_32711);
} else {
if((state_val_32732 === (5))){
var inst_32708 = (state_32731[(7)]);
var inst_32711 = (state_32731[(8)]);
var inst_32715 = cljs.core._EQ_.call(null,inst_32711,inst_32708);
var state_32731__$1 = state_32731;
if(inst_32715){
var statearr_32744_32761 = state_32731__$1;
(statearr_32744_32761[(1)] = (8));

} else {
var statearr_32745_32762 = state_32731__$1;
(statearr_32745_32762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32732 === (10))){
var inst_32723 = (state_32731[(2)]);
var state_32731__$1 = state_32731;
var statearr_32746_32763 = state_32731__$1;
(statearr_32746_32763[(2)] = inst_32723);

(statearr_32746_32763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32732 === (8))){
var inst_32708 = (state_32731[(7)]);
var tmp32743 = inst_32708;
var inst_32708__$1 = tmp32743;
var state_32731__$1 = (function (){var statearr_32747 = state_32731;
(statearr_32747[(7)] = inst_32708__$1);

return statearr_32747;
})();
var statearr_32748_32764 = state_32731__$1;
(statearr_32748_32764[(2)] = null);

(statearr_32748_32764[(1)] = (2));


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
});})(c__29154__auto___32754,out))
;
return ((function (switch__28987__auto__,c__29154__auto___32754,out){
return (function() {
var cljs$core$async$state_machine__28988__auto__ = null;
var cljs$core$async$state_machine__28988__auto____0 = (function (){
var statearr_32749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32749[(0)] = cljs$core$async$state_machine__28988__auto__);

(statearr_32749[(1)] = (1));

return statearr_32749;
});
var cljs$core$async$state_machine__28988__auto____1 = (function (state_32731){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_32731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e32750){if((e32750 instanceof Object)){
var ex__28991__auto__ = e32750;
var statearr_32751_32765 = state_32731;
(statearr_32751_32765[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32766 = state_32731;
state_32731 = G__32766;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$state_machine__28988__auto__ = function(state_32731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28988__auto____1.call(this,state_32731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28988__auto____0;
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28988__auto____1;
return cljs$core$async$state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___32754,out))
})();
var state__29156__auto__ = (function (){var statearr_32752 = f__29155__auto__.call(null);
(statearr_32752[(6)] = c__29154__auto___32754);

return statearr_32752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___32754,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32768 = arguments.length;
switch (G__32768) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29154__auto___32834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___32834,out){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___32834,out){
return (function (state_32806){
var state_val_32807 = (state_32806[(1)]);
if((state_val_32807 === (7))){
var inst_32802 = (state_32806[(2)]);
var state_32806__$1 = state_32806;
var statearr_32808_32835 = state_32806__$1;
(statearr_32808_32835[(2)] = inst_32802);

(statearr_32808_32835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (1))){
var inst_32769 = (new Array(n));
var inst_32770 = inst_32769;
var inst_32771 = (0);
var state_32806__$1 = (function (){var statearr_32809 = state_32806;
(statearr_32809[(7)] = inst_32771);

(statearr_32809[(8)] = inst_32770);

return statearr_32809;
})();
var statearr_32810_32836 = state_32806__$1;
(statearr_32810_32836[(2)] = null);

(statearr_32810_32836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (4))){
var inst_32774 = (state_32806[(9)]);
var inst_32774__$1 = (state_32806[(2)]);
var inst_32775 = (inst_32774__$1 == null);
var inst_32776 = cljs.core.not.call(null,inst_32775);
var state_32806__$1 = (function (){var statearr_32811 = state_32806;
(statearr_32811[(9)] = inst_32774__$1);

return statearr_32811;
})();
if(inst_32776){
var statearr_32812_32837 = state_32806__$1;
(statearr_32812_32837[(1)] = (5));

} else {
var statearr_32813_32838 = state_32806__$1;
(statearr_32813_32838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (15))){
var inst_32796 = (state_32806[(2)]);
var state_32806__$1 = state_32806;
var statearr_32814_32839 = state_32806__$1;
(statearr_32814_32839[(2)] = inst_32796);

(statearr_32814_32839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (13))){
var state_32806__$1 = state_32806;
var statearr_32815_32840 = state_32806__$1;
(statearr_32815_32840[(2)] = null);

(statearr_32815_32840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (6))){
var inst_32771 = (state_32806[(7)]);
var inst_32792 = (inst_32771 > (0));
var state_32806__$1 = state_32806;
if(cljs.core.truth_(inst_32792)){
var statearr_32816_32841 = state_32806__$1;
(statearr_32816_32841[(1)] = (12));

} else {
var statearr_32817_32842 = state_32806__$1;
(statearr_32817_32842[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (3))){
var inst_32804 = (state_32806[(2)]);
var state_32806__$1 = state_32806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32806__$1,inst_32804);
} else {
if((state_val_32807 === (12))){
var inst_32770 = (state_32806[(8)]);
var inst_32794 = cljs.core.vec.call(null,inst_32770);
var state_32806__$1 = state_32806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32806__$1,(15),out,inst_32794);
} else {
if((state_val_32807 === (2))){
var state_32806__$1 = state_32806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32806__$1,(4),ch);
} else {
if((state_val_32807 === (11))){
var inst_32786 = (state_32806[(2)]);
var inst_32787 = (new Array(n));
var inst_32770 = inst_32787;
var inst_32771 = (0);
var state_32806__$1 = (function (){var statearr_32818 = state_32806;
(statearr_32818[(7)] = inst_32771);

(statearr_32818[(8)] = inst_32770);

(statearr_32818[(10)] = inst_32786);

return statearr_32818;
})();
var statearr_32819_32843 = state_32806__$1;
(statearr_32819_32843[(2)] = null);

(statearr_32819_32843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (9))){
var inst_32770 = (state_32806[(8)]);
var inst_32784 = cljs.core.vec.call(null,inst_32770);
var state_32806__$1 = state_32806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32806__$1,(11),out,inst_32784);
} else {
if((state_val_32807 === (5))){
var inst_32771 = (state_32806[(7)]);
var inst_32770 = (state_32806[(8)]);
var inst_32779 = (state_32806[(11)]);
var inst_32774 = (state_32806[(9)]);
var inst_32778 = (inst_32770[inst_32771] = inst_32774);
var inst_32779__$1 = (inst_32771 + (1));
var inst_32780 = (inst_32779__$1 < n);
var state_32806__$1 = (function (){var statearr_32820 = state_32806;
(statearr_32820[(12)] = inst_32778);

(statearr_32820[(11)] = inst_32779__$1);

return statearr_32820;
})();
if(cljs.core.truth_(inst_32780)){
var statearr_32821_32844 = state_32806__$1;
(statearr_32821_32844[(1)] = (8));

} else {
var statearr_32822_32845 = state_32806__$1;
(statearr_32822_32845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (14))){
var inst_32799 = (state_32806[(2)]);
var inst_32800 = cljs.core.async.close_BANG_.call(null,out);
var state_32806__$1 = (function (){var statearr_32824 = state_32806;
(statearr_32824[(13)] = inst_32799);

return statearr_32824;
})();
var statearr_32825_32846 = state_32806__$1;
(statearr_32825_32846[(2)] = inst_32800);

(statearr_32825_32846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (10))){
var inst_32790 = (state_32806[(2)]);
var state_32806__$1 = state_32806;
var statearr_32826_32847 = state_32806__$1;
(statearr_32826_32847[(2)] = inst_32790);

(statearr_32826_32847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32807 === (8))){
var inst_32770 = (state_32806[(8)]);
var inst_32779 = (state_32806[(11)]);
var tmp32823 = inst_32770;
var inst_32770__$1 = tmp32823;
var inst_32771 = inst_32779;
var state_32806__$1 = (function (){var statearr_32827 = state_32806;
(statearr_32827[(7)] = inst_32771);

(statearr_32827[(8)] = inst_32770__$1);

return statearr_32827;
})();
var statearr_32828_32848 = state_32806__$1;
(statearr_32828_32848[(2)] = null);

(statearr_32828_32848[(1)] = (2));


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
});})(c__29154__auto___32834,out))
;
return ((function (switch__28987__auto__,c__29154__auto___32834,out){
return (function() {
var cljs$core$async$state_machine__28988__auto__ = null;
var cljs$core$async$state_machine__28988__auto____0 = (function (){
var statearr_32829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32829[(0)] = cljs$core$async$state_machine__28988__auto__);

(statearr_32829[(1)] = (1));

return statearr_32829;
});
var cljs$core$async$state_machine__28988__auto____1 = (function (state_32806){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_32806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e32830){if((e32830 instanceof Object)){
var ex__28991__auto__ = e32830;
var statearr_32831_32849 = state_32806;
(statearr_32831_32849[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32850 = state_32806;
state_32806 = G__32850;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$state_machine__28988__auto__ = function(state_32806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28988__auto____1.call(this,state_32806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28988__auto____0;
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28988__auto____1;
return cljs$core$async$state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___32834,out))
})();
var state__29156__auto__ = (function (){var statearr_32832 = f__29155__auto__.call(null);
(statearr_32832[(6)] = c__29154__auto___32834);

return statearr_32832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___32834,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32852 = arguments.length;
switch (G__32852) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29154__auto___32922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29154__auto___32922,out){
return (function (){
var f__29155__auto__ = (function (){var switch__28987__auto__ = ((function (c__29154__auto___32922,out){
return (function (state_32894){
var state_val_32895 = (state_32894[(1)]);
if((state_val_32895 === (7))){
var inst_32890 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
var statearr_32896_32923 = state_32894__$1;
(statearr_32896_32923[(2)] = inst_32890);

(statearr_32896_32923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (1))){
var inst_32853 = [];
var inst_32854 = inst_32853;
var inst_32855 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32894__$1 = (function (){var statearr_32897 = state_32894;
(statearr_32897[(7)] = inst_32854);

(statearr_32897[(8)] = inst_32855);

return statearr_32897;
})();
var statearr_32898_32924 = state_32894__$1;
(statearr_32898_32924[(2)] = null);

(statearr_32898_32924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (4))){
var inst_32858 = (state_32894[(9)]);
var inst_32858__$1 = (state_32894[(2)]);
var inst_32859 = (inst_32858__$1 == null);
var inst_32860 = cljs.core.not.call(null,inst_32859);
var state_32894__$1 = (function (){var statearr_32899 = state_32894;
(statearr_32899[(9)] = inst_32858__$1);

return statearr_32899;
})();
if(inst_32860){
var statearr_32900_32925 = state_32894__$1;
(statearr_32900_32925[(1)] = (5));

} else {
var statearr_32901_32926 = state_32894__$1;
(statearr_32901_32926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (15))){
var inst_32884 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
var statearr_32902_32927 = state_32894__$1;
(statearr_32902_32927[(2)] = inst_32884);

(statearr_32902_32927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (13))){
var state_32894__$1 = state_32894;
var statearr_32903_32928 = state_32894__$1;
(statearr_32903_32928[(2)] = null);

(statearr_32903_32928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (6))){
var inst_32854 = (state_32894[(7)]);
var inst_32879 = inst_32854.length;
var inst_32880 = (inst_32879 > (0));
var state_32894__$1 = state_32894;
if(cljs.core.truth_(inst_32880)){
var statearr_32904_32929 = state_32894__$1;
(statearr_32904_32929[(1)] = (12));

} else {
var statearr_32905_32930 = state_32894__$1;
(statearr_32905_32930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (3))){
var inst_32892 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32894__$1,inst_32892);
} else {
if((state_val_32895 === (12))){
var inst_32854 = (state_32894[(7)]);
var inst_32882 = cljs.core.vec.call(null,inst_32854);
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32894__$1,(15),out,inst_32882);
} else {
if((state_val_32895 === (2))){
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32894__$1,(4),ch);
} else {
if((state_val_32895 === (11))){
var inst_32862 = (state_32894[(10)]);
var inst_32858 = (state_32894[(9)]);
var inst_32872 = (state_32894[(2)]);
var inst_32873 = [];
var inst_32874 = inst_32873.push(inst_32858);
var inst_32854 = inst_32873;
var inst_32855 = inst_32862;
var state_32894__$1 = (function (){var statearr_32906 = state_32894;
(statearr_32906[(7)] = inst_32854);

(statearr_32906[(11)] = inst_32874);

(statearr_32906[(12)] = inst_32872);

(statearr_32906[(8)] = inst_32855);

return statearr_32906;
})();
var statearr_32907_32931 = state_32894__$1;
(statearr_32907_32931[(2)] = null);

(statearr_32907_32931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (9))){
var inst_32854 = (state_32894[(7)]);
var inst_32870 = cljs.core.vec.call(null,inst_32854);
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32894__$1,(11),out,inst_32870);
} else {
if((state_val_32895 === (5))){
var inst_32862 = (state_32894[(10)]);
var inst_32858 = (state_32894[(9)]);
var inst_32855 = (state_32894[(8)]);
var inst_32862__$1 = f.call(null,inst_32858);
var inst_32863 = cljs.core._EQ_.call(null,inst_32862__$1,inst_32855);
var inst_32864 = cljs.core.keyword_identical_QMARK_.call(null,inst_32855,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32865 = ((inst_32863) || (inst_32864));
var state_32894__$1 = (function (){var statearr_32908 = state_32894;
(statearr_32908[(10)] = inst_32862__$1);

return statearr_32908;
})();
if(cljs.core.truth_(inst_32865)){
var statearr_32909_32932 = state_32894__$1;
(statearr_32909_32932[(1)] = (8));

} else {
var statearr_32910_32933 = state_32894__$1;
(statearr_32910_32933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (14))){
var inst_32887 = (state_32894[(2)]);
var inst_32888 = cljs.core.async.close_BANG_.call(null,out);
var state_32894__$1 = (function (){var statearr_32912 = state_32894;
(statearr_32912[(13)] = inst_32887);

return statearr_32912;
})();
var statearr_32913_32934 = state_32894__$1;
(statearr_32913_32934[(2)] = inst_32888);

(statearr_32913_32934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (10))){
var inst_32877 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
var statearr_32914_32935 = state_32894__$1;
(statearr_32914_32935[(2)] = inst_32877);

(statearr_32914_32935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (8))){
var inst_32854 = (state_32894[(7)]);
var inst_32862 = (state_32894[(10)]);
var inst_32858 = (state_32894[(9)]);
var inst_32867 = inst_32854.push(inst_32858);
var tmp32911 = inst_32854;
var inst_32854__$1 = tmp32911;
var inst_32855 = inst_32862;
var state_32894__$1 = (function (){var statearr_32915 = state_32894;
(statearr_32915[(7)] = inst_32854__$1);

(statearr_32915[(14)] = inst_32867);

(statearr_32915[(8)] = inst_32855);

return statearr_32915;
})();
var statearr_32916_32936 = state_32894__$1;
(statearr_32916_32936[(2)] = null);

(statearr_32916_32936[(1)] = (2));


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
});})(c__29154__auto___32922,out))
;
return ((function (switch__28987__auto__,c__29154__auto___32922,out){
return (function() {
var cljs$core$async$state_machine__28988__auto__ = null;
var cljs$core$async$state_machine__28988__auto____0 = (function (){
var statearr_32917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32917[(0)] = cljs$core$async$state_machine__28988__auto__);

(statearr_32917[(1)] = (1));

return statearr_32917;
});
var cljs$core$async$state_machine__28988__auto____1 = (function (state_32894){
while(true){
var ret_value__28989__auto__ = (function (){try{while(true){
var result__28990__auto__ = switch__28987__auto__.call(null,state_32894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28990__auto__;
}
break;
}
}catch (e32918){if((e32918 instanceof Object)){
var ex__28991__auto__ = e32918;
var statearr_32919_32937 = state_32894;
(statearr_32919_32937[(5)] = ex__28991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32938 = state_32894;
state_32894 = G__32938;
continue;
} else {
return ret_value__28989__auto__;
}
break;
}
});
cljs$core$async$state_machine__28988__auto__ = function(state_32894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28988__auto____1.call(this,state_32894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28988__auto____0;
cljs$core$async$state_machine__28988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28988__auto____1;
return cljs$core$async$state_machine__28988__auto__;
})()
;})(switch__28987__auto__,c__29154__auto___32922,out))
})();
var state__29156__auto__ = (function (){var statearr_32920 = f__29155__auto__.call(null);
(statearr_32920[(6)] = c__29154__auto___32922);

return statearr_32920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29156__auto__);
});})(c__29154__auto___32922,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545933895197
