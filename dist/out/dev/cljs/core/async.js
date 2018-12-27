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
var G__26152 = arguments.length;
switch (G__26152) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26153 = (function (f,blockable,meta26154){
this.f = f;
this.blockable = blockable;
this.meta26154 = meta26154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26155,meta26154__$1){
var self__ = this;
var _26155__$1 = this;
return (new cljs.core.async.t_cljs$core$async26153(self__.f,self__.blockable,meta26154__$1));
});

cljs.core.async.t_cljs$core$async26153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26155){
var self__ = this;
var _26155__$1 = this;
return self__.meta26154;
});

cljs.core.async.t_cljs$core$async26153.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26153.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26154","meta26154",742900492,null)], null);
});

cljs.core.async.t_cljs$core$async26153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26153";

cljs.core.async.t_cljs$core$async26153.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26153");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26153.
 */
cljs.core.async.__GT_t_cljs$core$async26153 = (function cljs$core$async$__GT_t_cljs$core$async26153(f__$1,blockable__$1,meta26154){
return (new cljs.core.async.t_cljs$core$async26153(f__$1,blockable__$1,meta26154));
});

}

return (new cljs.core.async.t_cljs$core$async26153(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26159 = arguments.length;
switch (G__26159) {
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
var G__26162 = arguments.length;
switch (G__26162) {
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
var G__26165 = arguments.length;
switch (G__26165) {
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
var val_26167 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26167);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26167,ret){
return (function (){
return fn1.call(null,val_26167);
});})(val_26167,ret))
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
var G__26169 = arguments.length;
switch (G__26169) {
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
var n__4518__auto___26171 = n;
var x_26172 = (0);
while(true){
if((x_26172 < n__4518__auto___26171)){
(a[x_26172] = (0));

var G__26173 = (x_26172 + (1));
x_26172 = G__26173;
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

var G__26174 = (i + (1));
i = G__26174;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26175 = (function (flag,meta26176){
this.flag = flag;
this.meta26176 = meta26176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26177,meta26176__$1){
var self__ = this;
var _26177__$1 = this;
return (new cljs.core.async.t_cljs$core$async26175(self__.flag,meta26176__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26177){
var self__ = this;
var _26177__$1 = this;
return self__.meta26176;
});})(flag))
;

cljs.core.async.t_cljs$core$async26175.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26175.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26175.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26176","meta26176",730660518,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26175";

cljs.core.async.t_cljs$core$async26175.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26175");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26175.
 */
cljs.core.async.__GT_t_cljs$core$async26175 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26175(flag__$1,meta26176){
return (new cljs.core.async.t_cljs$core$async26175(flag__$1,meta26176));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26175(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26178 = (function (flag,cb,meta26179){
this.flag = flag;
this.cb = cb;
this.meta26179 = meta26179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26180,meta26179__$1){
var self__ = this;
var _26180__$1 = this;
return (new cljs.core.async.t_cljs$core$async26178(self__.flag,self__.cb,meta26179__$1));
});

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26180){
var self__ = this;
var _26180__$1 = this;
return self__.meta26179;
});

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26179","meta26179",-1473937411,null)], null);
});

cljs.core.async.t_cljs$core$async26178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26178";

cljs.core.async.t_cljs$core$async26178.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26178");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26178.
 */
cljs.core.async.__GT_t_cljs$core$async26178 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26178(flag__$1,cb__$1,meta26179){
return (new cljs.core.async.t_cljs$core$async26178(flag__$1,cb__$1,meta26179));
});

}

return (new cljs.core.async.t_cljs$core$async26178(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26181_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26181_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26182_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26182_SHARP_,port], null));
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
var G__26183 = (i + (1));
i = G__26183;
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
var len__4641__auto___26189 = arguments.length;
var i__4642__auto___26190 = (0);
while(true){
if((i__4642__auto___26190 < len__4641__auto___26189)){
args__4647__auto__.push((arguments[i__4642__auto___26190]));

var G__26191 = (i__4642__auto___26190 + (1));
i__4642__auto___26190 = G__26191;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26186){
var map__26187 = p__26186;
var map__26187__$1 = (((((!((map__26187 == null))))?(((((map__26187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26187):map__26187);
var opts = map__26187__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26184){
var G__26185 = cljs.core.first.call(null,seq26184);
var seq26184__$1 = cljs.core.next.call(null,seq26184);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26185,seq26184__$1);
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
var G__26193 = arguments.length;
switch (G__26193) {
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
var c__26092__auto___26239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___26239){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___26239){
return (function (state_26217){
var state_val_26218 = (state_26217[(1)]);
if((state_val_26218 === (7))){
var inst_26213 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
var statearr_26219_26240 = state_26217__$1;
(statearr_26219_26240[(2)] = inst_26213);

(statearr_26219_26240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (1))){
var state_26217__$1 = state_26217;
var statearr_26220_26241 = state_26217__$1;
(statearr_26220_26241[(2)] = null);

(statearr_26220_26241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (4))){
var inst_26196 = (state_26217[(7)]);
var inst_26196__$1 = (state_26217[(2)]);
var inst_26197 = (inst_26196__$1 == null);
var state_26217__$1 = (function (){var statearr_26221 = state_26217;
(statearr_26221[(7)] = inst_26196__$1);

return statearr_26221;
})();
if(cljs.core.truth_(inst_26197)){
var statearr_26222_26242 = state_26217__$1;
(statearr_26222_26242[(1)] = (5));

} else {
var statearr_26223_26243 = state_26217__$1;
(statearr_26223_26243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (13))){
var state_26217__$1 = state_26217;
var statearr_26224_26244 = state_26217__$1;
(statearr_26224_26244[(2)] = null);

(statearr_26224_26244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (6))){
var inst_26196 = (state_26217[(7)]);
var state_26217__$1 = state_26217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26217__$1,(11),to,inst_26196);
} else {
if((state_val_26218 === (3))){
var inst_26215 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26217__$1,inst_26215);
} else {
if((state_val_26218 === (12))){
var state_26217__$1 = state_26217;
var statearr_26225_26245 = state_26217__$1;
(statearr_26225_26245[(2)] = null);

(statearr_26225_26245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (2))){
var state_26217__$1 = state_26217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26217__$1,(4),from);
} else {
if((state_val_26218 === (11))){
var inst_26206 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
if(cljs.core.truth_(inst_26206)){
var statearr_26226_26246 = state_26217__$1;
(statearr_26226_26246[(1)] = (12));

} else {
var statearr_26227_26247 = state_26217__$1;
(statearr_26227_26247[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (9))){
var state_26217__$1 = state_26217;
var statearr_26228_26248 = state_26217__$1;
(statearr_26228_26248[(2)] = null);

(statearr_26228_26248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (5))){
var state_26217__$1 = state_26217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26229_26249 = state_26217__$1;
(statearr_26229_26249[(1)] = (8));

} else {
var statearr_26230_26250 = state_26217__$1;
(statearr_26230_26250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (14))){
var inst_26211 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
var statearr_26231_26251 = state_26217__$1;
(statearr_26231_26251[(2)] = inst_26211);

(statearr_26231_26251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (10))){
var inst_26203 = (state_26217[(2)]);
var state_26217__$1 = state_26217;
var statearr_26232_26252 = state_26217__$1;
(statearr_26232_26252[(2)] = inst_26203);

(statearr_26232_26252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26218 === (8))){
var inst_26200 = cljs.core.async.close_BANG_.call(null,to);
var state_26217__$1 = state_26217;
var statearr_26233_26253 = state_26217__$1;
(statearr_26233_26253[(2)] = inst_26200);

(statearr_26233_26253[(1)] = (10));


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
});})(c__26092__auto___26239))
;
return ((function (switch__25997__auto__,c__26092__auto___26239){
return (function() {
var cljs$core$async$state_machine__25998__auto__ = null;
var cljs$core$async$state_machine__25998__auto____0 = (function (){
var statearr_26234 = [null,null,null,null,null,null,null,null];
(statearr_26234[(0)] = cljs$core$async$state_machine__25998__auto__);

(statearr_26234[(1)] = (1));

return statearr_26234;
});
var cljs$core$async$state_machine__25998__auto____1 = (function (state_26217){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_26217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e26235){if((e26235 instanceof Object)){
var ex__26001__auto__ = e26235;
var statearr_26236_26254 = state_26217;
(statearr_26236_26254[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26255 = state_26217;
state_26217 = G__26255;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$state_machine__25998__auto__ = function(state_26217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25998__auto____1.call(this,state_26217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25998__auto____0;
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25998__auto____1;
return cljs$core$async$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___26239))
})();
var state__26094__auto__ = (function (){var statearr_26237 = f__26093__auto__.call(null);
(statearr_26237[(6)] = c__26092__auto___26239);

return statearr_26237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___26239))
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
return (function (p__26256){
var vec__26257 = p__26256;
var v = cljs.core.nth.call(null,vec__26257,(0),null);
var p = cljs.core.nth.call(null,vec__26257,(1),null);
var job = vec__26257;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26092__auto___26428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___26428,res,vec__26257,v,p,job,jobs,results){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___26428,res,vec__26257,v,p,job,jobs,results){
return (function (state_26264){
var state_val_26265 = (state_26264[(1)]);
if((state_val_26265 === (1))){
var state_26264__$1 = state_26264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26264__$1,(2),res,v);
} else {
if((state_val_26265 === (2))){
var inst_26261 = (state_26264[(2)]);
var inst_26262 = cljs.core.async.close_BANG_.call(null,res);
var state_26264__$1 = (function (){var statearr_26266 = state_26264;
(statearr_26266[(7)] = inst_26261);

return statearr_26266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26264__$1,inst_26262);
} else {
return null;
}
}
});})(c__26092__auto___26428,res,vec__26257,v,p,job,jobs,results))
;
return ((function (switch__25997__auto__,c__26092__auto___26428,res,vec__26257,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0 = (function (){
var statearr_26267 = [null,null,null,null,null,null,null,null];
(statearr_26267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__);

(statearr_26267[(1)] = (1));

return statearr_26267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1 = (function (state_26264){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_26264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e26268){if((e26268 instanceof Object)){
var ex__26001__auto__ = e26268;
var statearr_26269_26429 = state_26264;
(statearr_26269_26429[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26430 = state_26264;
state_26264 = G__26430;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__ = function(state_26264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1.call(this,state_26264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___26428,res,vec__26257,v,p,job,jobs,results))
})();
var state__26094__auto__ = (function (){var statearr_26270 = f__26093__auto__.call(null);
(statearr_26270[(6)] = c__26092__auto___26428);

return statearr_26270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___26428,res,vec__26257,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26271){
var vec__26272 = p__26271;
var v = cljs.core.nth.call(null,vec__26272,(0),null);
var p = cljs.core.nth.call(null,vec__26272,(1),null);
var job = vec__26272;
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
var n__4518__auto___26431 = n;
var __26432 = (0);
while(true){
if((__26432 < n__4518__auto___26431)){
var G__26275_26433 = type;
var G__26275_26434__$1 = (((G__26275_26433 instanceof cljs.core.Keyword))?G__26275_26433.fqn:null);
switch (G__26275_26434__$1) {
case "compute":
var c__26092__auto___26436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26432,c__26092__auto___26436,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (__26432,c__26092__auto___26436,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async){
return (function (state_26288){
var state_val_26289 = (state_26288[(1)]);
if((state_val_26289 === (1))){
var state_26288__$1 = state_26288;
var statearr_26290_26437 = state_26288__$1;
(statearr_26290_26437[(2)] = null);

(statearr_26290_26437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (2))){
var state_26288__$1 = state_26288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26288__$1,(4),jobs);
} else {
if((state_val_26289 === (3))){
var inst_26286 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26288__$1,inst_26286);
} else {
if((state_val_26289 === (4))){
var inst_26278 = (state_26288[(2)]);
var inst_26279 = process.call(null,inst_26278);
var state_26288__$1 = state_26288;
if(cljs.core.truth_(inst_26279)){
var statearr_26291_26438 = state_26288__$1;
(statearr_26291_26438[(1)] = (5));

} else {
var statearr_26292_26439 = state_26288__$1;
(statearr_26292_26439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (5))){
var state_26288__$1 = state_26288;
var statearr_26293_26440 = state_26288__$1;
(statearr_26293_26440[(2)] = null);

(statearr_26293_26440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (6))){
var state_26288__$1 = state_26288;
var statearr_26294_26441 = state_26288__$1;
(statearr_26294_26441[(2)] = null);

(statearr_26294_26441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (7))){
var inst_26284 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26295_26442 = state_26288__$1;
(statearr_26295_26442[(2)] = inst_26284);

(statearr_26295_26442[(1)] = (3));


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
});})(__26432,c__26092__auto___26436,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async))
;
return ((function (__26432,switch__25997__auto__,c__26092__auto___26436,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0 = (function (){
var statearr_26296 = [null,null,null,null,null,null,null];
(statearr_26296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__);

(statearr_26296[(1)] = (1));

return statearr_26296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1 = (function (state_26288){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_26288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e26297){if((e26297 instanceof Object)){
var ex__26001__auto__ = e26297;
var statearr_26298_26443 = state_26288;
(statearr_26298_26443[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26444 = state_26288;
state_26288 = G__26444;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__ = function(state_26288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1.call(this,state_26288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__;
})()
;})(__26432,switch__25997__auto__,c__26092__auto___26436,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async))
})();
var state__26094__auto__ = (function (){var statearr_26299 = f__26093__auto__.call(null);
(statearr_26299[(6)] = c__26092__auto___26436);

return statearr_26299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(__26432,c__26092__auto___26436,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async))
);


break;
case "async":
var c__26092__auto___26445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26432,c__26092__auto___26445,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (__26432,c__26092__auto___26445,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async){
return (function (state_26312){
var state_val_26313 = (state_26312[(1)]);
if((state_val_26313 === (1))){
var state_26312__$1 = state_26312;
var statearr_26314_26446 = state_26312__$1;
(statearr_26314_26446[(2)] = null);

(statearr_26314_26446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (2))){
var state_26312__$1 = state_26312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26312__$1,(4),jobs);
} else {
if((state_val_26313 === (3))){
var inst_26310 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26312__$1,inst_26310);
} else {
if((state_val_26313 === (4))){
var inst_26302 = (state_26312[(2)]);
var inst_26303 = async.call(null,inst_26302);
var state_26312__$1 = state_26312;
if(cljs.core.truth_(inst_26303)){
var statearr_26315_26447 = state_26312__$1;
(statearr_26315_26447[(1)] = (5));

} else {
var statearr_26316_26448 = state_26312__$1;
(statearr_26316_26448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (5))){
var state_26312__$1 = state_26312;
var statearr_26317_26449 = state_26312__$1;
(statearr_26317_26449[(2)] = null);

(statearr_26317_26449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (6))){
var state_26312__$1 = state_26312;
var statearr_26318_26450 = state_26312__$1;
(statearr_26318_26450[(2)] = null);

(statearr_26318_26450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (7))){
var inst_26308 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26319_26451 = state_26312__$1;
(statearr_26319_26451[(2)] = inst_26308);

(statearr_26319_26451[(1)] = (3));


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
});})(__26432,c__26092__auto___26445,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async))
;
return ((function (__26432,switch__25997__auto__,c__26092__auto___26445,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0 = (function (){
var statearr_26320 = [null,null,null,null,null,null,null];
(statearr_26320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__);

(statearr_26320[(1)] = (1));

return statearr_26320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1 = (function (state_26312){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_26312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e26321){if((e26321 instanceof Object)){
var ex__26001__auto__ = e26321;
var statearr_26322_26452 = state_26312;
(statearr_26322_26452[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26453 = state_26312;
state_26312 = G__26453;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__ = function(state_26312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1.call(this,state_26312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__;
})()
;})(__26432,switch__25997__auto__,c__26092__auto___26445,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async))
})();
var state__26094__auto__ = (function (){var statearr_26323 = f__26093__auto__.call(null);
(statearr_26323[(6)] = c__26092__auto___26445);

return statearr_26323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(__26432,c__26092__auto___26445,G__26275_26433,G__26275_26434__$1,n__4518__auto___26431,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26275_26434__$1)].join('')));

}

var G__26454 = (__26432 + (1));
__26432 = G__26454;
continue;
} else {
}
break;
}

var c__26092__auto___26455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___26455,jobs,results,process,async){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___26455,jobs,results,process,async){
return (function (state_26345){
var state_val_26346 = (state_26345[(1)]);
if((state_val_26346 === (7))){
var inst_26341 = (state_26345[(2)]);
var state_26345__$1 = state_26345;
var statearr_26347_26456 = state_26345__$1;
(statearr_26347_26456[(2)] = inst_26341);

(statearr_26347_26456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (1))){
var state_26345__$1 = state_26345;
var statearr_26348_26457 = state_26345__$1;
(statearr_26348_26457[(2)] = null);

(statearr_26348_26457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (4))){
var inst_26326 = (state_26345[(7)]);
var inst_26326__$1 = (state_26345[(2)]);
var inst_26327 = (inst_26326__$1 == null);
var state_26345__$1 = (function (){var statearr_26349 = state_26345;
(statearr_26349[(7)] = inst_26326__$1);

return statearr_26349;
})();
if(cljs.core.truth_(inst_26327)){
var statearr_26350_26458 = state_26345__$1;
(statearr_26350_26458[(1)] = (5));

} else {
var statearr_26351_26459 = state_26345__$1;
(statearr_26351_26459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (6))){
var inst_26331 = (state_26345[(8)]);
var inst_26326 = (state_26345[(7)]);
var inst_26331__$1 = cljs.core.async.chan.call(null,(1));
var inst_26332 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26333 = [inst_26326,inst_26331__$1];
var inst_26334 = (new cljs.core.PersistentVector(null,2,(5),inst_26332,inst_26333,null));
var state_26345__$1 = (function (){var statearr_26352 = state_26345;
(statearr_26352[(8)] = inst_26331__$1);

return statearr_26352;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26345__$1,(8),jobs,inst_26334);
} else {
if((state_val_26346 === (3))){
var inst_26343 = (state_26345[(2)]);
var state_26345__$1 = state_26345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26345__$1,inst_26343);
} else {
if((state_val_26346 === (2))){
var state_26345__$1 = state_26345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26345__$1,(4),from);
} else {
if((state_val_26346 === (9))){
var inst_26338 = (state_26345[(2)]);
var state_26345__$1 = (function (){var statearr_26353 = state_26345;
(statearr_26353[(9)] = inst_26338);

return statearr_26353;
})();
var statearr_26354_26460 = state_26345__$1;
(statearr_26354_26460[(2)] = null);

(statearr_26354_26460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (5))){
var inst_26329 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26345__$1 = state_26345;
var statearr_26355_26461 = state_26345__$1;
(statearr_26355_26461[(2)] = inst_26329);

(statearr_26355_26461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (8))){
var inst_26331 = (state_26345[(8)]);
var inst_26336 = (state_26345[(2)]);
var state_26345__$1 = (function (){var statearr_26356 = state_26345;
(statearr_26356[(10)] = inst_26336);

return statearr_26356;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26345__$1,(9),results,inst_26331);
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
});})(c__26092__auto___26455,jobs,results,process,async))
;
return ((function (switch__25997__auto__,c__26092__auto___26455,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0 = (function (){
var statearr_26357 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__);

(statearr_26357[(1)] = (1));

return statearr_26357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1 = (function (state_26345){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_26345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e26358){if((e26358 instanceof Object)){
var ex__26001__auto__ = e26358;
var statearr_26359_26462 = state_26345;
(statearr_26359_26462[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26463 = state_26345;
state_26345 = G__26463;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__ = function(state_26345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1.call(this,state_26345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___26455,jobs,results,process,async))
})();
var state__26094__auto__ = (function (){var statearr_26360 = f__26093__auto__.call(null);
(statearr_26360[(6)] = c__26092__auto___26455);

return statearr_26360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___26455,jobs,results,process,async))
);


var c__26092__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto__,jobs,results,process,async){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto__,jobs,results,process,async){
return (function (state_26398){
var state_val_26399 = (state_26398[(1)]);
if((state_val_26399 === (7))){
var inst_26394 = (state_26398[(2)]);
var state_26398__$1 = state_26398;
var statearr_26400_26464 = state_26398__$1;
(statearr_26400_26464[(2)] = inst_26394);

(statearr_26400_26464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (20))){
var state_26398__$1 = state_26398;
var statearr_26401_26465 = state_26398__$1;
(statearr_26401_26465[(2)] = null);

(statearr_26401_26465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (1))){
var state_26398__$1 = state_26398;
var statearr_26402_26466 = state_26398__$1;
(statearr_26402_26466[(2)] = null);

(statearr_26402_26466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (4))){
var inst_26363 = (state_26398[(7)]);
var inst_26363__$1 = (state_26398[(2)]);
var inst_26364 = (inst_26363__$1 == null);
var state_26398__$1 = (function (){var statearr_26403 = state_26398;
(statearr_26403[(7)] = inst_26363__$1);

return statearr_26403;
})();
if(cljs.core.truth_(inst_26364)){
var statearr_26404_26467 = state_26398__$1;
(statearr_26404_26467[(1)] = (5));

} else {
var statearr_26405_26468 = state_26398__$1;
(statearr_26405_26468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (15))){
var inst_26376 = (state_26398[(8)]);
var state_26398__$1 = state_26398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26398__$1,(18),to,inst_26376);
} else {
if((state_val_26399 === (21))){
var inst_26389 = (state_26398[(2)]);
var state_26398__$1 = state_26398;
var statearr_26406_26469 = state_26398__$1;
(statearr_26406_26469[(2)] = inst_26389);

(statearr_26406_26469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (13))){
var inst_26391 = (state_26398[(2)]);
var state_26398__$1 = (function (){var statearr_26407 = state_26398;
(statearr_26407[(9)] = inst_26391);

return statearr_26407;
})();
var statearr_26408_26470 = state_26398__$1;
(statearr_26408_26470[(2)] = null);

(statearr_26408_26470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (6))){
var inst_26363 = (state_26398[(7)]);
var state_26398__$1 = state_26398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26398__$1,(11),inst_26363);
} else {
if((state_val_26399 === (17))){
var inst_26384 = (state_26398[(2)]);
var state_26398__$1 = state_26398;
if(cljs.core.truth_(inst_26384)){
var statearr_26409_26471 = state_26398__$1;
(statearr_26409_26471[(1)] = (19));

} else {
var statearr_26410_26472 = state_26398__$1;
(statearr_26410_26472[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (3))){
var inst_26396 = (state_26398[(2)]);
var state_26398__$1 = state_26398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26398__$1,inst_26396);
} else {
if((state_val_26399 === (12))){
var inst_26373 = (state_26398[(10)]);
var state_26398__$1 = state_26398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26398__$1,(14),inst_26373);
} else {
if((state_val_26399 === (2))){
var state_26398__$1 = state_26398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26398__$1,(4),results);
} else {
if((state_val_26399 === (19))){
var state_26398__$1 = state_26398;
var statearr_26411_26473 = state_26398__$1;
(statearr_26411_26473[(2)] = null);

(statearr_26411_26473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (11))){
var inst_26373 = (state_26398[(2)]);
var state_26398__$1 = (function (){var statearr_26412 = state_26398;
(statearr_26412[(10)] = inst_26373);

return statearr_26412;
})();
var statearr_26413_26474 = state_26398__$1;
(statearr_26413_26474[(2)] = null);

(statearr_26413_26474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (9))){
var state_26398__$1 = state_26398;
var statearr_26414_26475 = state_26398__$1;
(statearr_26414_26475[(2)] = null);

(statearr_26414_26475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (5))){
var state_26398__$1 = state_26398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26415_26476 = state_26398__$1;
(statearr_26415_26476[(1)] = (8));

} else {
var statearr_26416_26477 = state_26398__$1;
(statearr_26416_26477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (14))){
var inst_26378 = (state_26398[(11)]);
var inst_26376 = (state_26398[(8)]);
var inst_26376__$1 = (state_26398[(2)]);
var inst_26377 = (inst_26376__$1 == null);
var inst_26378__$1 = cljs.core.not.call(null,inst_26377);
var state_26398__$1 = (function (){var statearr_26417 = state_26398;
(statearr_26417[(11)] = inst_26378__$1);

(statearr_26417[(8)] = inst_26376__$1);

return statearr_26417;
})();
if(inst_26378__$1){
var statearr_26418_26478 = state_26398__$1;
(statearr_26418_26478[(1)] = (15));

} else {
var statearr_26419_26479 = state_26398__$1;
(statearr_26419_26479[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (16))){
var inst_26378 = (state_26398[(11)]);
var state_26398__$1 = state_26398;
var statearr_26420_26480 = state_26398__$1;
(statearr_26420_26480[(2)] = inst_26378);

(statearr_26420_26480[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (10))){
var inst_26370 = (state_26398[(2)]);
var state_26398__$1 = state_26398;
var statearr_26421_26481 = state_26398__$1;
(statearr_26421_26481[(2)] = inst_26370);

(statearr_26421_26481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (18))){
var inst_26381 = (state_26398[(2)]);
var state_26398__$1 = state_26398;
var statearr_26422_26482 = state_26398__$1;
(statearr_26422_26482[(2)] = inst_26381);

(statearr_26422_26482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26399 === (8))){
var inst_26367 = cljs.core.async.close_BANG_.call(null,to);
var state_26398__$1 = state_26398;
var statearr_26423_26483 = state_26398__$1;
(statearr_26423_26483[(2)] = inst_26367);

(statearr_26423_26483[(1)] = (10));


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
});})(c__26092__auto__,jobs,results,process,async))
;
return ((function (switch__25997__auto__,c__26092__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0 = (function (){
var statearr_26424 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__);

(statearr_26424[(1)] = (1));

return statearr_26424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1 = (function (state_26398){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_26398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e26425){if((e26425 instanceof Object)){
var ex__26001__auto__ = e26425;
var statearr_26426_26484 = state_26398;
(statearr_26426_26484[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26485 = state_26398;
state_26398 = G__26485;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__ = function(state_26398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1.call(this,state_26398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto__,jobs,results,process,async))
})();
var state__26094__auto__ = (function (){var statearr_26427 = f__26093__auto__.call(null);
(statearr_26427[(6)] = c__26092__auto__);

return statearr_26427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto__,jobs,results,process,async))
);

return c__26092__auto__;
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
var G__26487 = arguments.length;
switch (G__26487) {
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
var G__26490 = arguments.length;
switch (G__26490) {
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
var G__26493 = arguments.length;
switch (G__26493) {
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
var c__26092__auto___26542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___26542,tc,fc){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___26542,tc,fc){
return (function (state_26519){
var state_val_26520 = (state_26519[(1)]);
if((state_val_26520 === (7))){
var inst_26515 = (state_26519[(2)]);
var state_26519__$1 = state_26519;
var statearr_26521_26543 = state_26519__$1;
(statearr_26521_26543[(2)] = inst_26515);

(statearr_26521_26543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26520 === (1))){
var state_26519__$1 = state_26519;
var statearr_26522_26544 = state_26519__$1;
(statearr_26522_26544[(2)] = null);

(statearr_26522_26544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26520 === (4))){
var inst_26496 = (state_26519[(7)]);
var inst_26496__$1 = (state_26519[(2)]);
var inst_26497 = (inst_26496__$1 == null);
var state_26519__$1 = (function (){var statearr_26523 = state_26519;
(statearr_26523[(7)] = inst_26496__$1);

return statearr_26523;
})();
if(cljs.core.truth_(inst_26497)){
var statearr_26524_26545 = state_26519__$1;
(statearr_26524_26545[(1)] = (5));

} else {
var statearr_26525_26546 = state_26519__$1;
(statearr_26525_26546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26520 === (13))){
var state_26519__$1 = state_26519;
var statearr_26526_26547 = state_26519__$1;
(statearr_26526_26547[(2)] = null);

(statearr_26526_26547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26520 === (6))){
var inst_26496 = (state_26519[(7)]);
var inst_26502 = p.call(null,inst_26496);
var state_26519__$1 = state_26519;
if(cljs.core.truth_(inst_26502)){
var statearr_26527_26548 = state_26519__$1;
(statearr_26527_26548[(1)] = (9));

} else {
var statearr_26528_26549 = state_26519__$1;
(statearr_26528_26549[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26520 === (3))){
var inst_26517 = (state_26519[(2)]);
var state_26519__$1 = state_26519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26519__$1,inst_26517);
} else {
if((state_val_26520 === (12))){
var state_26519__$1 = state_26519;
var statearr_26529_26550 = state_26519__$1;
(statearr_26529_26550[(2)] = null);

(statearr_26529_26550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26520 === (2))){
var state_26519__$1 = state_26519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26519__$1,(4),ch);
} else {
if((state_val_26520 === (11))){
var inst_26496 = (state_26519[(7)]);
var inst_26506 = (state_26519[(2)]);
var state_26519__$1 = state_26519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26519__$1,(8),inst_26506,inst_26496);
} else {
if((state_val_26520 === (9))){
var state_26519__$1 = state_26519;
var statearr_26530_26551 = state_26519__$1;
(statearr_26530_26551[(2)] = tc);

(statearr_26530_26551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26520 === (5))){
var inst_26499 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26500 = cljs.core.async.close_BANG_.call(null,fc);
var state_26519__$1 = (function (){var statearr_26531 = state_26519;
(statearr_26531[(8)] = inst_26499);

return statearr_26531;
})();
var statearr_26532_26552 = state_26519__$1;
(statearr_26532_26552[(2)] = inst_26500);

(statearr_26532_26552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26520 === (14))){
var inst_26513 = (state_26519[(2)]);
var state_26519__$1 = state_26519;
var statearr_26533_26553 = state_26519__$1;
(statearr_26533_26553[(2)] = inst_26513);

(statearr_26533_26553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26520 === (10))){
var state_26519__$1 = state_26519;
var statearr_26534_26554 = state_26519__$1;
(statearr_26534_26554[(2)] = fc);

(statearr_26534_26554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26520 === (8))){
var inst_26508 = (state_26519[(2)]);
var state_26519__$1 = state_26519;
if(cljs.core.truth_(inst_26508)){
var statearr_26535_26555 = state_26519__$1;
(statearr_26535_26555[(1)] = (12));

} else {
var statearr_26536_26556 = state_26519__$1;
(statearr_26536_26556[(1)] = (13));

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
});})(c__26092__auto___26542,tc,fc))
;
return ((function (switch__25997__auto__,c__26092__auto___26542,tc,fc){
return (function() {
var cljs$core$async$state_machine__25998__auto__ = null;
var cljs$core$async$state_machine__25998__auto____0 = (function (){
var statearr_26537 = [null,null,null,null,null,null,null,null,null];
(statearr_26537[(0)] = cljs$core$async$state_machine__25998__auto__);

(statearr_26537[(1)] = (1));

return statearr_26537;
});
var cljs$core$async$state_machine__25998__auto____1 = (function (state_26519){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_26519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e26538){if((e26538 instanceof Object)){
var ex__26001__auto__ = e26538;
var statearr_26539_26557 = state_26519;
(statearr_26539_26557[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26558 = state_26519;
state_26519 = G__26558;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$state_machine__25998__auto__ = function(state_26519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25998__auto____1.call(this,state_26519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25998__auto____0;
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25998__auto____1;
return cljs$core$async$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___26542,tc,fc))
})();
var state__26094__auto__ = (function (){var statearr_26540 = f__26093__auto__.call(null);
(statearr_26540[(6)] = c__26092__auto___26542);

return statearr_26540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___26542,tc,fc))
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
var c__26092__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto__){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto__){
return (function (state_26579){
var state_val_26580 = (state_26579[(1)]);
if((state_val_26580 === (7))){
var inst_26575 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
var statearr_26581_26599 = state_26579__$1;
(statearr_26581_26599[(2)] = inst_26575);

(statearr_26581_26599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (1))){
var inst_26559 = init;
var state_26579__$1 = (function (){var statearr_26582 = state_26579;
(statearr_26582[(7)] = inst_26559);

return statearr_26582;
})();
var statearr_26583_26600 = state_26579__$1;
(statearr_26583_26600[(2)] = null);

(statearr_26583_26600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (4))){
var inst_26562 = (state_26579[(8)]);
var inst_26562__$1 = (state_26579[(2)]);
var inst_26563 = (inst_26562__$1 == null);
var state_26579__$1 = (function (){var statearr_26584 = state_26579;
(statearr_26584[(8)] = inst_26562__$1);

return statearr_26584;
})();
if(cljs.core.truth_(inst_26563)){
var statearr_26585_26601 = state_26579__$1;
(statearr_26585_26601[(1)] = (5));

} else {
var statearr_26586_26602 = state_26579__$1;
(statearr_26586_26602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (6))){
var inst_26566 = (state_26579[(9)]);
var inst_26559 = (state_26579[(7)]);
var inst_26562 = (state_26579[(8)]);
var inst_26566__$1 = f.call(null,inst_26559,inst_26562);
var inst_26567 = cljs.core.reduced_QMARK_.call(null,inst_26566__$1);
var state_26579__$1 = (function (){var statearr_26587 = state_26579;
(statearr_26587[(9)] = inst_26566__$1);

return statearr_26587;
})();
if(inst_26567){
var statearr_26588_26603 = state_26579__$1;
(statearr_26588_26603[(1)] = (8));

} else {
var statearr_26589_26604 = state_26579__$1;
(statearr_26589_26604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (3))){
var inst_26577 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26579__$1,inst_26577);
} else {
if((state_val_26580 === (2))){
var state_26579__$1 = state_26579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26579__$1,(4),ch);
} else {
if((state_val_26580 === (9))){
var inst_26566 = (state_26579[(9)]);
var inst_26559 = inst_26566;
var state_26579__$1 = (function (){var statearr_26590 = state_26579;
(statearr_26590[(7)] = inst_26559);

return statearr_26590;
})();
var statearr_26591_26605 = state_26579__$1;
(statearr_26591_26605[(2)] = null);

(statearr_26591_26605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (5))){
var inst_26559 = (state_26579[(7)]);
var state_26579__$1 = state_26579;
var statearr_26592_26606 = state_26579__$1;
(statearr_26592_26606[(2)] = inst_26559);

(statearr_26592_26606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (10))){
var inst_26573 = (state_26579[(2)]);
var state_26579__$1 = state_26579;
var statearr_26593_26607 = state_26579__$1;
(statearr_26593_26607[(2)] = inst_26573);

(statearr_26593_26607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26580 === (8))){
var inst_26566 = (state_26579[(9)]);
var inst_26569 = cljs.core.deref.call(null,inst_26566);
var state_26579__$1 = state_26579;
var statearr_26594_26608 = state_26579__$1;
(statearr_26594_26608[(2)] = inst_26569);

(statearr_26594_26608[(1)] = (10));


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
});})(c__26092__auto__))
;
return ((function (switch__25997__auto__,c__26092__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25998__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25998__auto____0 = (function (){
var statearr_26595 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26595[(0)] = cljs$core$async$reduce_$_state_machine__25998__auto__);

(statearr_26595[(1)] = (1));

return statearr_26595;
});
var cljs$core$async$reduce_$_state_machine__25998__auto____1 = (function (state_26579){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_26579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e26596){if((e26596 instanceof Object)){
var ex__26001__auto__ = e26596;
var statearr_26597_26609 = state_26579;
(statearr_26597_26609[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26610 = state_26579;
state_26579 = G__26610;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25998__auto__ = function(state_26579){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25998__auto____1.call(this,state_26579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25998__auto____0;
cljs$core$async$reduce_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25998__auto____1;
return cljs$core$async$reduce_$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto__))
})();
var state__26094__auto__ = (function (){var statearr_26598 = f__26093__auto__.call(null);
(statearr_26598[(6)] = c__26092__auto__);

return statearr_26598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto__))
);

return c__26092__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26092__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto__,f__$1){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto__,f__$1){
return (function (state_26616){
var state_val_26617 = (state_26616[(1)]);
if((state_val_26617 === (1))){
var inst_26611 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26616__$1 = state_26616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26616__$1,(2),inst_26611);
} else {
if((state_val_26617 === (2))){
var inst_26613 = (state_26616[(2)]);
var inst_26614 = f__$1.call(null,inst_26613);
var state_26616__$1 = state_26616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26616__$1,inst_26614);
} else {
return null;
}
}
});})(c__26092__auto__,f__$1))
;
return ((function (switch__25997__auto__,c__26092__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25998__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25998__auto____0 = (function (){
var statearr_26618 = [null,null,null,null,null,null,null];
(statearr_26618[(0)] = cljs$core$async$transduce_$_state_machine__25998__auto__);

(statearr_26618[(1)] = (1));

return statearr_26618;
});
var cljs$core$async$transduce_$_state_machine__25998__auto____1 = (function (state_26616){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_26616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e26619){if((e26619 instanceof Object)){
var ex__26001__auto__ = e26619;
var statearr_26620_26622 = state_26616;
(statearr_26620_26622[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26623 = state_26616;
state_26616 = G__26623;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25998__auto__ = function(state_26616){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25998__auto____1.call(this,state_26616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25998__auto____0;
cljs$core$async$transduce_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25998__auto____1;
return cljs$core$async$transduce_$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto__,f__$1))
})();
var state__26094__auto__ = (function (){var statearr_26621 = f__26093__auto__.call(null);
(statearr_26621[(6)] = c__26092__auto__);

return statearr_26621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto__,f__$1))
);

return c__26092__auto__;
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
var G__26625 = arguments.length;
switch (G__26625) {
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
var c__26092__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto__){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto__){
return (function (state_26650){
var state_val_26651 = (state_26650[(1)]);
if((state_val_26651 === (7))){
var inst_26632 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
var statearr_26652_26673 = state_26650__$1;
(statearr_26652_26673[(2)] = inst_26632);

(statearr_26652_26673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (1))){
var inst_26626 = cljs.core.seq.call(null,coll);
var inst_26627 = inst_26626;
var state_26650__$1 = (function (){var statearr_26653 = state_26650;
(statearr_26653[(7)] = inst_26627);

return statearr_26653;
})();
var statearr_26654_26674 = state_26650__$1;
(statearr_26654_26674[(2)] = null);

(statearr_26654_26674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (4))){
var inst_26627 = (state_26650[(7)]);
var inst_26630 = cljs.core.first.call(null,inst_26627);
var state_26650__$1 = state_26650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26650__$1,(7),ch,inst_26630);
} else {
if((state_val_26651 === (13))){
var inst_26644 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
var statearr_26655_26675 = state_26650__$1;
(statearr_26655_26675[(2)] = inst_26644);

(statearr_26655_26675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (6))){
var inst_26635 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
if(cljs.core.truth_(inst_26635)){
var statearr_26656_26676 = state_26650__$1;
(statearr_26656_26676[(1)] = (8));

} else {
var statearr_26657_26677 = state_26650__$1;
(statearr_26657_26677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (3))){
var inst_26648 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26650__$1,inst_26648);
} else {
if((state_val_26651 === (12))){
var state_26650__$1 = state_26650;
var statearr_26658_26678 = state_26650__$1;
(statearr_26658_26678[(2)] = null);

(statearr_26658_26678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (2))){
var inst_26627 = (state_26650[(7)]);
var state_26650__$1 = state_26650;
if(cljs.core.truth_(inst_26627)){
var statearr_26659_26679 = state_26650__$1;
(statearr_26659_26679[(1)] = (4));

} else {
var statearr_26660_26680 = state_26650__$1;
(statearr_26660_26680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (11))){
var inst_26641 = cljs.core.async.close_BANG_.call(null,ch);
var state_26650__$1 = state_26650;
var statearr_26661_26681 = state_26650__$1;
(statearr_26661_26681[(2)] = inst_26641);

(statearr_26661_26681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (9))){
var state_26650__$1 = state_26650;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26662_26682 = state_26650__$1;
(statearr_26662_26682[(1)] = (11));

} else {
var statearr_26663_26683 = state_26650__$1;
(statearr_26663_26683[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (5))){
var inst_26627 = (state_26650[(7)]);
var state_26650__$1 = state_26650;
var statearr_26664_26684 = state_26650__$1;
(statearr_26664_26684[(2)] = inst_26627);

(statearr_26664_26684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (10))){
var inst_26646 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
var statearr_26665_26685 = state_26650__$1;
(statearr_26665_26685[(2)] = inst_26646);

(statearr_26665_26685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (8))){
var inst_26627 = (state_26650[(7)]);
var inst_26637 = cljs.core.next.call(null,inst_26627);
var inst_26627__$1 = inst_26637;
var state_26650__$1 = (function (){var statearr_26666 = state_26650;
(statearr_26666[(7)] = inst_26627__$1);

return statearr_26666;
})();
var statearr_26667_26686 = state_26650__$1;
(statearr_26667_26686[(2)] = null);

(statearr_26667_26686[(1)] = (2));


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
});})(c__26092__auto__))
;
return ((function (switch__25997__auto__,c__26092__auto__){
return (function() {
var cljs$core$async$state_machine__25998__auto__ = null;
var cljs$core$async$state_machine__25998__auto____0 = (function (){
var statearr_26668 = [null,null,null,null,null,null,null,null];
(statearr_26668[(0)] = cljs$core$async$state_machine__25998__auto__);

(statearr_26668[(1)] = (1));

return statearr_26668;
});
var cljs$core$async$state_machine__25998__auto____1 = (function (state_26650){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_26650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e26669){if((e26669 instanceof Object)){
var ex__26001__auto__ = e26669;
var statearr_26670_26687 = state_26650;
(statearr_26670_26687[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26688 = state_26650;
state_26650 = G__26688;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$state_machine__25998__auto__ = function(state_26650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25998__auto____1.call(this,state_26650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25998__auto____0;
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25998__auto____1;
return cljs$core$async$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto__))
})();
var state__26094__auto__ = (function (){var statearr_26671 = f__26093__auto__.call(null);
(statearr_26671[(6)] = c__26092__auto__);

return statearr_26671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto__))
);

return c__26092__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26689 = (function (ch,cs,meta26690){
this.ch = ch;
this.cs = cs;
this.meta26690 = meta26690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26691,meta26690__$1){
var self__ = this;
var _26691__$1 = this;
return (new cljs.core.async.t_cljs$core$async26689(self__.ch,self__.cs,meta26690__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26691){
var self__ = this;
var _26691__$1 = this;
return self__.meta26690;
});})(cs))
;

cljs.core.async.t_cljs$core$async26689.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26689.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26689.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26689.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26689.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26689.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26690","meta26690",-1225546430,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26689";

cljs.core.async.t_cljs$core$async26689.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26689");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26689.
 */
cljs.core.async.__GT_t_cljs$core$async26689 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26689(ch__$1,cs__$1,meta26690){
return (new cljs.core.async.t_cljs$core$async26689(ch__$1,cs__$1,meta26690));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26689(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26092__auto___26911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___26911,cs,m,dchan,dctr,done){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___26911,cs,m,dchan,dctr,done){
return (function (state_26826){
var state_val_26827 = (state_26826[(1)]);
if((state_val_26827 === (7))){
var inst_26822 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26828_26912 = state_26826__$1;
(statearr_26828_26912[(2)] = inst_26822);

(statearr_26828_26912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (20))){
var inst_26725 = (state_26826[(7)]);
var inst_26737 = cljs.core.first.call(null,inst_26725);
var inst_26738 = cljs.core.nth.call(null,inst_26737,(0),null);
var inst_26739 = cljs.core.nth.call(null,inst_26737,(1),null);
var state_26826__$1 = (function (){var statearr_26829 = state_26826;
(statearr_26829[(8)] = inst_26738);

return statearr_26829;
})();
if(cljs.core.truth_(inst_26739)){
var statearr_26830_26913 = state_26826__$1;
(statearr_26830_26913[(1)] = (22));

} else {
var statearr_26831_26914 = state_26826__$1;
(statearr_26831_26914[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (27))){
var inst_26769 = (state_26826[(9)]);
var inst_26767 = (state_26826[(10)]);
var inst_26694 = (state_26826[(11)]);
var inst_26774 = (state_26826[(12)]);
var inst_26774__$1 = cljs.core._nth.call(null,inst_26767,inst_26769);
var inst_26775 = cljs.core.async.put_BANG_.call(null,inst_26774__$1,inst_26694,done);
var state_26826__$1 = (function (){var statearr_26832 = state_26826;
(statearr_26832[(12)] = inst_26774__$1);

return statearr_26832;
})();
if(cljs.core.truth_(inst_26775)){
var statearr_26833_26915 = state_26826__$1;
(statearr_26833_26915[(1)] = (30));

} else {
var statearr_26834_26916 = state_26826__$1;
(statearr_26834_26916[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (1))){
var state_26826__$1 = state_26826;
var statearr_26835_26917 = state_26826__$1;
(statearr_26835_26917[(2)] = null);

(statearr_26835_26917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (24))){
var inst_26725 = (state_26826[(7)]);
var inst_26744 = (state_26826[(2)]);
var inst_26745 = cljs.core.next.call(null,inst_26725);
var inst_26703 = inst_26745;
var inst_26704 = null;
var inst_26705 = (0);
var inst_26706 = (0);
var state_26826__$1 = (function (){var statearr_26836 = state_26826;
(statearr_26836[(13)] = inst_26744);

(statearr_26836[(14)] = inst_26706);

(statearr_26836[(15)] = inst_26703);

(statearr_26836[(16)] = inst_26705);

(statearr_26836[(17)] = inst_26704);

return statearr_26836;
})();
var statearr_26837_26918 = state_26826__$1;
(statearr_26837_26918[(2)] = null);

(statearr_26837_26918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (39))){
var state_26826__$1 = state_26826;
var statearr_26841_26919 = state_26826__$1;
(statearr_26841_26919[(2)] = null);

(statearr_26841_26919[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (4))){
var inst_26694 = (state_26826[(11)]);
var inst_26694__$1 = (state_26826[(2)]);
var inst_26695 = (inst_26694__$1 == null);
var state_26826__$1 = (function (){var statearr_26842 = state_26826;
(statearr_26842[(11)] = inst_26694__$1);

return statearr_26842;
})();
if(cljs.core.truth_(inst_26695)){
var statearr_26843_26920 = state_26826__$1;
(statearr_26843_26920[(1)] = (5));

} else {
var statearr_26844_26921 = state_26826__$1;
(statearr_26844_26921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (15))){
var inst_26706 = (state_26826[(14)]);
var inst_26703 = (state_26826[(15)]);
var inst_26705 = (state_26826[(16)]);
var inst_26704 = (state_26826[(17)]);
var inst_26721 = (state_26826[(2)]);
var inst_26722 = (inst_26706 + (1));
var tmp26838 = inst_26703;
var tmp26839 = inst_26705;
var tmp26840 = inst_26704;
var inst_26703__$1 = tmp26838;
var inst_26704__$1 = tmp26840;
var inst_26705__$1 = tmp26839;
var inst_26706__$1 = inst_26722;
var state_26826__$1 = (function (){var statearr_26845 = state_26826;
(statearr_26845[(18)] = inst_26721);

(statearr_26845[(14)] = inst_26706__$1);

(statearr_26845[(15)] = inst_26703__$1);

(statearr_26845[(16)] = inst_26705__$1);

(statearr_26845[(17)] = inst_26704__$1);

return statearr_26845;
})();
var statearr_26846_26922 = state_26826__$1;
(statearr_26846_26922[(2)] = null);

(statearr_26846_26922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (21))){
var inst_26748 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26850_26923 = state_26826__$1;
(statearr_26850_26923[(2)] = inst_26748);

(statearr_26850_26923[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (31))){
var inst_26774 = (state_26826[(12)]);
var inst_26778 = done.call(null,null);
var inst_26779 = cljs.core.async.untap_STAR_.call(null,m,inst_26774);
var state_26826__$1 = (function (){var statearr_26851 = state_26826;
(statearr_26851[(19)] = inst_26778);

return statearr_26851;
})();
var statearr_26852_26924 = state_26826__$1;
(statearr_26852_26924[(2)] = inst_26779);

(statearr_26852_26924[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (32))){
var inst_26766 = (state_26826[(20)]);
var inst_26769 = (state_26826[(9)]);
var inst_26768 = (state_26826[(21)]);
var inst_26767 = (state_26826[(10)]);
var inst_26781 = (state_26826[(2)]);
var inst_26782 = (inst_26769 + (1));
var tmp26847 = inst_26766;
var tmp26848 = inst_26768;
var tmp26849 = inst_26767;
var inst_26766__$1 = tmp26847;
var inst_26767__$1 = tmp26849;
var inst_26768__$1 = tmp26848;
var inst_26769__$1 = inst_26782;
var state_26826__$1 = (function (){var statearr_26853 = state_26826;
(statearr_26853[(20)] = inst_26766__$1);

(statearr_26853[(9)] = inst_26769__$1);

(statearr_26853[(21)] = inst_26768__$1);

(statearr_26853[(10)] = inst_26767__$1);

(statearr_26853[(22)] = inst_26781);

return statearr_26853;
})();
var statearr_26854_26925 = state_26826__$1;
(statearr_26854_26925[(2)] = null);

(statearr_26854_26925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (40))){
var inst_26794 = (state_26826[(23)]);
var inst_26798 = done.call(null,null);
var inst_26799 = cljs.core.async.untap_STAR_.call(null,m,inst_26794);
var state_26826__$1 = (function (){var statearr_26855 = state_26826;
(statearr_26855[(24)] = inst_26798);

return statearr_26855;
})();
var statearr_26856_26926 = state_26826__$1;
(statearr_26856_26926[(2)] = inst_26799);

(statearr_26856_26926[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (33))){
var inst_26785 = (state_26826[(25)]);
var inst_26787 = cljs.core.chunked_seq_QMARK_.call(null,inst_26785);
var state_26826__$1 = state_26826;
if(inst_26787){
var statearr_26857_26927 = state_26826__$1;
(statearr_26857_26927[(1)] = (36));

} else {
var statearr_26858_26928 = state_26826__$1;
(statearr_26858_26928[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (13))){
var inst_26715 = (state_26826[(26)]);
var inst_26718 = cljs.core.async.close_BANG_.call(null,inst_26715);
var state_26826__$1 = state_26826;
var statearr_26859_26929 = state_26826__$1;
(statearr_26859_26929[(2)] = inst_26718);

(statearr_26859_26929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (22))){
var inst_26738 = (state_26826[(8)]);
var inst_26741 = cljs.core.async.close_BANG_.call(null,inst_26738);
var state_26826__$1 = state_26826;
var statearr_26860_26930 = state_26826__$1;
(statearr_26860_26930[(2)] = inst_26741);

(statearr_26860_26930[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (36))){
var inst_26785 = (state_26826[(25)]);
var inst_26789 = cljs.core.chunk_first.call(null,inst_26785);
var inst_26790 = cljs.core.chunk_rest.call(null,inst_26785);
var inst_26791 = cljs.core.count.call(null,inst_26789);
var inst_26766 = inst_26790;
var inst_26767 = inst_26789;
var inst_26768 = inst_26791;
var inst_26769 = (0);
var state_26826__$1 = (function (){var statearr_26861 = state_26826;
(statearr_26861[(20)] = inst_26766);

(statearr_26861[(9)] = inst_26769);

(statearr_26861[(21)] = inst_26768);

(statearr_26861[(10)] = inst_26767);

return statearr_26861;
})();
var statearr_26862_26931 = state_26826__$1;
(statearr_26862_26931[(2)] = null);

(statearr_26862_26931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (41))){
var inst_26785 = (state_26826[(25)]);
var inst_26801 = (state_26826[(2)]);
var inst_26802 = cljs.core.next.call(null,inst_26785);
var inst_26766 = inst_26802;
var inst_26767 = null;
var inst_26768 = (0);
var inst_26769 = (0);
var state_26826__$1 = (function (){var statearr_26863 = state_26826;
(statearr_26863[(20)] = inst_26766);

(statearr_26863[(9)] = inst_26769);

(statearr_26863[(21)] = inst_26768);

(statearr_26863[(10)] = inst_26767);

(statearr_26863[(27)] = inst_26801);

return statearr_26863;
})();
var statearr_26864_26932 = state_26826__$1;
(statearr_26864_26932[(2)] = null);

(statearr_26864_26932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (43))){
var state_26826__$1 = state_26826;
var statearr_26865_26933 = state_26826__$1;
(statearr_26865_26933[(2)] = null);

(statearr_26865_26933[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (29))){
var inst_26810 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26866_26934 = state_26826__$1;
(statearr_26866_26934[(2)] = inst_26810);

(statearr_26866_26934[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (44))){
var inst_26819 = (state_26826[(2)]);
var state_26826__$1 = (function (){var statearr_26867 = state_26826;
(statearr_26867[(28)] = inst_26819);

return statearr_26867;
})();
var statearr_26868_26935 = state_26826__$1;
(statearr_26868_26935[(2)] = null);

(statearr_26868_26935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (6))){
var inst_26758 = (state_26826[(29)]);
var inst_26757 = cljs.core.deref.call(null,cs);
var inst_26758__$1 = cljs.core.keys.call(null,inst_26757);
var inst_26759 = cljs.core.count.call(null,inst_26758__$1);
var inst_26760 = cljs.core.reset_BANG_.call(null,dctr,inst_26759);
var inst_26765 = cljs.core.seq.call(null,inst_26758__$1);
var inst_26766 = inst_26765;
var inst_26767 = null;
var inst_26768 = (0);
var inst_26769 = (0);
var state_26826__$1 = (function (){var statearr_26869 = state_26826;
(statearr_26869[(30)] = inst_26760);

(statearr_26869[(20)] = inst_26766);

(statearr_26869[(9)] = inst_26769);

(statearr_26869[(21)] = inst_26768);

(statearr_26869[(10)] = inst_26767);

(statearr_26869[(29)] = inst_26758__$1);

return statearr_26869;
})();
var statearr_26870_26936 = state_26826__$1;
(statearr_26870_26936[(2)] = null);

(statearr_26870_26936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (28))){
var inst_26766 = (state_26826[(20)]);
var inst_26785 = (state_26826[(25)]);
var inst_26785__$1 = cljs.core.seq.call(null,inst_26766);
var state_26826__$1 = (function (){var statearr_26871 = state_26826;
(statearr_26871[(25)] = inst_26785__$1);

return statearr_26871;
})();
if(inst_26785__$1){
var statearr_26872_26937 = state_26826__$1;
(statearr_26872_26937[(1)] = (33));

} else {
var statearr_26873_26938 = state_26826__$1;
(statearr_26873_26938[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (25))){
var inst_26769 = (state_26826[(9)]);
var inst_26768 = (state_26826[(21)]);
var inst_26771 = (inst_26769 < inst_26768);
var inst_26772 = inst_26771;
var state_26826__$1 = state_26826;
if(cljs.core.truth_(inst_26772)){
var statearr_26874_26939 = state_26826__$1;
(statearr_26874_26939[(1)] = (27));

} else {
var statearr_26875_26940 = state_26826__$1;
(statearr_26875_26940[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (34))){
var state_26826__$1 = state_26826;
var statearr_26876_26941 = state_26826__$1;
(statearr_26876_26941[(2)] = null);

(statearr_26876_26941[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (17))){
var state_26826__$1 = state_26826;
var statearr_26877_26942 = state_26826__$1;
(statearr_26877_26942[(2)] = null);

(statearr_26877_26942[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (3))){
var inst_26824 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26826__$1,inst_26824);
} else {
if((state_val_26827 === (12))){
var inst_26753 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26878_26943 = state_26826__$1;
(statearr_26878_26943[(2)] = inst_26753);

(statearr_26878_26943[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (2))){
var state_26826__$1 = state_26826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26826__$1,(4),ch);
} else {
if((state_val_26827 === (23))){
var state_26826__$1 = state_26826;
var statearr_26879_26944 = state_26826__$1;
(statearr_26879_26944[(2)] = null);

(statearr_26879_26944[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (35))){
var inst_26808 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26880_26945 = state_26826__$1;
(statearr_26880_26945[(2)] = inst_26808);

(statearr_26880_26945[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (19))){
var inst_26725 = (state_26826[(7)]);
var inst_26729 = cljs.core.chunk_first.call(null,inst_26725);
var inst_26730 = cljs.core.chunk_rest.call(null,inst_26725);
var inst_26731 = cljs.core.count.call(null,inst_26729);
var inst_26703 = inst_26730;
var inst_26704 = inst_26729;
var inst_26705 = inst_26731;
var inst_26706 = (0);
var state_26826__$1 = (function (){var statearr_26881 = state_26826;
(statearr_26881[(14)] = inst_26706);

(statearr_26881[(15)] = inst_26703);

(statearr_26881[(16)] = inst_26705);

(statearr_26881[(17)] = inst_26704);

return statearr_26881;
})();
var statearr_26882_26946 = state_26826__$1;
(statearr_26882_26946[(2)] = null);

(statearr_26882_26946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (11))){
var inst_26725 = (state_26826[(7)]);
var inst_26703 = (state_26826[(15)]);
var inst_26725__$1 = cljs.core.seq.call(null,inst_26703);
var state_26826__$1 = (function (){var statearr_26883 = state_26826;
(statearr_26883[(7)] = inst_26725__$1);

return statearr_26883;
})();
if(inst_26725__$1){
var statearr_26884_26947 = state_26826__$1;
(statearr_26884_26947[(1)] = (16));

} else {
var statearr_26885_26948 = state_26826__$1;
(statearr_26885_26948[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (9))){
var inst_26755 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26886_26949 = state_26826__$1;
(statearr_26886_26949[(2)] = inst_26755);

(statearr_26886_26949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (5))){
var inst_26701 = cljs.core.deref.call(null,cs);
var inst_26702 = cljs.core.seq.call(null,inst_26701);
var inst_26703 = inst_26702;
var inst_26704 = null;
var inst_26705 = (0);
var inst_26706 = (0);
var state_26826__$1 = (function (){var statearr_26887 = state_26826;
(statearr_26887[(14)] = inst_26706);

(statearr_26887[(15)] = inst_26703);

(statearr_26887[(16)] = inst_26705);

(statearr_26887[(17)] = inst_26704);

return statearr_26887;
})();
var statearr_26888_26950 = state_26826__$1;
(statearr_26888_26950[(2)] = null);

(statearr_26888_26950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (14))){
var state_26826__$1 = state_26826;
var statearr_26889_26951 = state_26826__$1;
(statearr_26889_26951[(2)] = null);

(statearr_26889_26951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (45))){
var inst_26816 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26890_26952 = state_26826__$1;
(statearr_26890_26952[(2)] = inst_26816);

(statearr_26890_26952[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (26))){
var inst_26758 = (state_26826[(29)]);
var inst_26812 = (state_26826[(2)]);
var inst_26813 = cljs.core.seq.call(null,inst_26758);
var state_26826__$1 = (function (){var statearr_26891 = state_26826;
(statearr_26891[(31)] = inst_26812);

return statearr_26891;
})();
if(inst_26813){
var statearr_26892_26953 = state_26826__$1;
(statearr_26892_26953[(1)] = (42));

} else {
var statearr_26893_26954 = state_26826__$1;
(statearr_26893_26954[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (16))){
var inst_26725 = (state_26826[(7)]);
var inst_26727 = cljs.core.chunked_seq_QMARK_.call(null,inst_26725);
var state_26826__$1 = state_26826;
if(inst_26727){
var statearr_26894_26955 = state_26826__$1;
(statearr_26894_26955[(1)] = (19));

} else {
var statearr_26895_26956 = state_26826__$1;
(statearr_26895_26956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (38))){
var inst_26805 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26896_26957 = state_26826__$1;
(statearr_26896_26957[(2)] = inst_26805);

(statearr_26896_26957[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (30))){
var state_26826__$1 = state_26826;
var statearr_26897_26958 = state_26826__$1;
(statearr_26897_26958[(2)] = null);

(statearr_26897_26958[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (10))){
var inst_26706 = (state_26826[(14)]);
var inst_26704 = (state_26826[(17)]);
var inst_26714 = cljs.core._nth.call(null,inst_26704,inst_26706);
var inst_26715 = cljs.core.nth.call(null,inst_26714,(0),null);
var inst_26716 = cljs.core.nth.call(null,inst_26714,(1),null);
var state_26826__$1 = (function (){var statearr_26898 = state_26826;
(statearr_26898[(26)] = inst_26715);

return statearr_26898;
})();
if(cljs.core.truth_(inst_26716)){
var statearr_26899_26959 = state_26826__$1;
(statearr_26899_26959[(1)] = (13));

} else {
var statearr_26900_26960 = state_26826__$1;
(statearr_26900_26960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (18))){
var inst_26751 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26901_26961 = state_26826__$1;
(statearr_26901_26961[(2)] = inst_26751);

(statearr_26901_26961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (42))){
var state_26826__$1 = state_26826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26826__$1,(45),dchan);
} else {
if((state_val_26827 === (37))){
var inst_26694 = (state_26826[(11)]);
var inst_26785 = (state_26826[(25)]);
var inst_26794 = (state_26826[(23)]);
var inst_26794__$1 = cljs.core.first.call(null,inst_26785);
var inst_26795 = cljs.core.async.put_BANG_.call(null,inst_26794__$1,inst_26694,done);
var state_26826__$1 = (function (){var statearr_26902 = state_26826;
(statearr_26902[(23)] = inst_26794__$1);

return statearr_26902;
})();
if(cljs.core.truth_(inst_26795)){
var statearr_26903_26962 = state_26826__$1;
(statearr_26903_26962[(1)] = (39));

} else {
var statearr_26904_26963 = state_26826__$1;
(statearr_26904_26963[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (8))){
var inst_26706 = (state_26826[(14)]);
var inst_26705 = (state_26826[(16)]);
var inst_26708 = (inst_26706 < inst_26705);
var inst_26709 = inst_26708;
var state_26826__$1 = state_26826;
if(cljs.core.truth_(inst_26709)){
var statearr_26905_26964 = state_26826__$1;
(statearr_26905_26964[(1)] = (10));

} else {
var statearr_26906_26965 = state_26826__$1;
(statearr_26906_26965[(1)] = (11));

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
});})(c__26092__auto___26911,cs,m,dchan,dctr,done))
;
return ((function (switch__25997__auto__,c__26092__auto___26911,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25998__auto__ = null;
var cljs$core$async$mult_$_state_machine__25998__auto____0 = (function (){
var statearr_26907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26907[(0)] = cljs$core$async$mult_$_state_machine__25998__auto__);

(statearr_26907[(1)] = (1));

return statearr_26907;
});
var cljs$core$async$mult_$_state_machine__25998__auto____1 = (function (state_26826){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_26826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e26908){if((e26908 instanceof Object)){
var ex__26001__auto__ = e26908;
var statearr_26909_26966 = state_26826;
(statearr_26909_26966[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26967 = state_26826;
state_26826 = G__26967;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25998__auto__ = function(state_26826){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25998__auto____1.call(this,state_26826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25998__auto____0;
cljs$core$async$mult_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25998__auto____1;
return cljs$core$async$mult_$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___26911,cs,m,dchan,dctr,done))
})();
var state__26094__auto__ = (function (){var statearr_26910 = f__26093__auto__.call(null);
(statearr_26910[(6)] = c__26092__auto___26911);

return statearr_26910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___26911,cs,m,dchan,dctr,done))
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
var G__26969 = arguments.length;
switch (G__26969) {
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
var len__4641__auto___26981 = arguments.length;
var i__4642__auto___26982 = (0);
while(true){
if((i__4642__auto___26982 < len__4641__auto___26981)){
args__4647__auto__.push((arguments[i__4642__auto___26982]));

var G__26983 = (i__4642__auto___26982 + (1));
i__4642__auto___26982 = G__26983;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26975){
var map__26976 = p__26975;
var map__26976__$1 = (((((!((map__26976 == null))))?(((((map__26976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26976):map__26976);
var opts = map__26976__$1;
var statearr_26978_26984 = state;
(statearr_26978_26984[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__26976,map__26976__$1,opts){
return (function (val){
var statearr_26979_26985 = state;
(statearr_26979_26985[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26976,map__26976__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_26980_26986 = state;
(statearr_26980_26986[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26971){
var G__26972 = cljs.core.first.call(null,seq26971);
var seq26971__$1 = cljs.core.next.call(null,seq26971);
var G__26973 = cljs.core.first.call(null,seq26971__$1);
var seq26971__$2 = cljs.core.next.call(null,seq26971__$1);
var G__26974 = cljs.core.first.call(null,seq26971__$2);
var seq26971__$3 = cljs.core.next.call(null,seq26971__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26972,G__26973,G__26974,seq26971__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26987 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26988){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26988 = meta26988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26989,meta26988__$1){
var self__ = this;
var _26989__$1 = this;
return (new cljs.core.async.t_cljs$core$async26987(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26988__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26989){
var self__ = this;
var _26989__$1 = this;
return self__.meta26988;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26987.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26987.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26988","meta26988",1882056860,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26987";

cljs.core.async.t_cljs$core$async26987.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26987");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26987.
 */
cljs.core.async.__GT_t_cljs$core$async26987 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26987(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26988){
return (new cljs.core.async.t_cljs$core$async26987(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26988));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26987(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26092__auto___27151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___27151,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___27151,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27091){
var state_val_27092 = (state_27091[(1)]);
if((state_val_27092 === (7))){
var inst_27006 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
var statearr_27093_27152 = state_27091__$1;
(statearr_27093_27152[(2)] = inst_27006);

(statearr_27093_27152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (20))){
var inst_27018 = (state_27091[(7)]);
var state_27091__$1 = state_27091;
var statearr_27094_27153 = state_27091__$1;
(statearr_27094_27153[(2)] = inst_27018);

(statearr_27094_27153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (27))){
var state_27091__$1 = state_27091;
var statearr_27095_27154 = state_27091__$1;
(statearr_27095_27154[(2)] = null);

(statearr_27095_27154[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (1))){
var inst_26993 = (state_27091[(8)]);
var inst_26993__$1 = calc_state.call(null);
var inst_26995 = (inst_26993__$1 == null);
var inst_26996 = cljs.core.not.call(null,inst_26995);
var state_27091__$1 = (function (){var statearr_27096 = state_27091;
(statearr_27096[(8)] = inst_26993__$1);

return statearr_27096;
})();
if(inst_26996){
var statearr_27097_27155 = state_27091__$1;
(statearr_27097_27155[(1)] = (2));

} else {
var statearr_27098_27156 = state_27091__$1;
(statearr_27098_27156[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (24))){
var inst_27042 = (state_27091[(9)]);
var inst_27065 = (state_27091[(10)]);
var inst_27051 = (state_27091[(11)]);
var inst_27065__$1 = inst_27042.call(null,inst_27051);
var state_27091__$1 = (function (){var statearr_27099 = state_27091;
(statearr_27099[(10)] = inst_27065__$1);

return statearr_27099;
})();
if(cljs.core.truth_(inst_27065__$1)){
var statearr_27100_27157 = state_27091__$1;
(statearr_27100_27157[(1)] = (29));

} else {
var statearr_27101_27158 = state_27091__$1;
(statearr_27101_27158[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (4))){
var inst_27009 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
if(cljs.core.truth_(inst_27009)){
var statearr_27102_27159 = state_27091__$1;
(statearr_27102_27159[(1)] = (8));

} else {
var statearr_27103_27160 = state_27091__$1;
(statearr_27103_27160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (15))){
var inst_27036 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
if(cljs.core.truth_(inst_27036)){
var statearr_27104_27161 = state_27091__$1;
(statearr_27104_27161[(1)] = (19));

} else {
var statearr_27105_27162 = state_27091__$1;
(statearr_27105_27162[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (21))){
var inst_27041 = (state_27091[(12)]);
var inst_27041__$1 = (state_27091[(2)]);
var inst_27042 = cljs.core.get.call(null,inst_27041__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27043 = cljs.core.get.call(null,inst_27041__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27044 = cljs.core.get.call(null,inst_27041__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27091__$1 = (function (){var statearr_27106 = state_27091;
(statearr_27106[(9)] = inst_27042);

(statearr_27106[(13)] = inst_27043);

(statearr_27106[(12)] = inst_27041__$1);

return statearr_27106;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27091__$1,(22),inst_27044);
} else {
if((state_val_27092 === (31))){
var inst_27073 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
if(cljs.core.truth_(inst_27073)){
var statearr_27107_27163 = state_27091__$1;
(statearr_27107_27163[(1)] = (32));

} else {
var statearr_27108_27164 = state_27091__$1;
(statearr_27108_27164[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (32))){
var inst_27050 = (state_27091[(14)]);
var state_27091__$1 = state_27091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27091__$1,(35),out,inst_27050);
} else {
if((state_val_27092 === (33))){
var inst_27041 = (state_27091[(12)]);
var inst_27018 = inst_27041;
var state_27091__$1 = (function (){var statearr_27109 = state_27091;
(statearr_27109[(7)] = inst_27018);

return statearr_27109;
})();
var statearr_27110_27165 = state_27091__$1;
(statearr_27110_27165[(2)] = null);

(statearr_27110_27165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (13))){
var inst_27018 = (state_27091[(7)]);
var inst_27025 = inst_27018.cljs$lang$protocol_mask$partition0$;
var inst_27026 = (inst_27025 & (64));
var inst_27027 = inst_27018.cljs$core$ISeq$;
var inst_27028 = (cljs.core.PROTOCOL_SENTINEL === inst_27027);
var inst_27029 = ((inst_27026) || (inst_27028));
var state_27091__$1 = state_27091;
if(cljs.core.truth_(inst_27029)){
var statearr_27111_27166 = state_27091__$1;
(statearr_27111_27166[(1)] = (16));

} else {
var statearr_27112_27167 = state_27091__$1;
(statearr_27112_27167[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (22))){
var inst_27050 = (state_27091[(14)]);
var inst_27051 = (state_27091[(11)]);
var inst_27049 = (state_27091[(2)]);
var inst_27050__$1 = cljs.core.nth.call(null,inst_27049,(0),null);
var inst_27051__$1 = cljs.core.nth.call(null,inst_27049,(1),null);
var inst_27052 = (inst_27050__$1 == null);
var inst_27053 = cljs.core._EQ_.call(null,inst_27051__$1,change);
var inst_27054 = ((inst_27052) || (inst_27053));
var state_27091__$1 = (function (){var statearr_27113 = state_27091;
(statearr_27113[(14)] = inst_27050__$1);

(statearr_27113[(11)] = inst_27051__$1);

return statearr_27113;
})();
if(cljs.core.truth_(inst_27054)){
var statearr_27114_27168 = state_27091__$1;
(statearr_27114_27168[(1)] = (23));

} else {
var statearr_27115_27169 = state_27091__$1;
(statearr_27115_27169[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (36))){
var inst_27041 = (state_27091[(12)]);
var inst_27018 = inst_27041;
var state_27091__$1 = (function (){var statearr_27116 = state_27091;
(statearr_27116[(7)] = inst_27018);

return statearr_27116;
})();
var statearr_27117_27170 = state_27091__$1;
(statearr_27117_27170[(2)] = null);

(statearr_27117_27170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (29))){
var inst_27065 = (state_27091[(10)]);
var state_27091__$1 = state_27091;
var statearr_27118_27171 = state_27091__$1;
(statearr_27118_27171[(2)] = inst_27065);

(statearr_27118_27171[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (6))){
var state_27091__$1 = state_27091;
var statearr_27119_27172 = state_27091__$1;
(statearr_27119_27172[(2)] = false);

(statearr_27119_27172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (28))){
var inst_27061 = (state_27091[(2)]);
var inst_27062 = calc_state.call(null);
var inst_27018 = inst_27062;
var state_27091__$1 = (function (){var statearr_27120 = state_27091;
(statearr_27120[(7)] = inst_27018);

(statearr_27120[(15)] = inst_27061);

return statearr_27120;
})();
var statearr_27121_27173 = state_27091__$1;
(statearr_27121_27173[(2)] = null);

(statearr_27121_27173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (25))){
var inst_27087 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
var statearr_27122_27174 = state_27091__$1;
(statearr_27122_27174[(2)] = inst_27087);

(statearr_27122_27174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (34))){
var inst_27085 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
var statearr_27123_27175 = state_27091__$1;
(statearr_27123_27175[(2)] = inst_27085);

(statearr_27123_27175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (17))){
var state_27091__$1 = state_27091;
var statearr_27124_27176 = state_27091__$1;
(statearr_27124_27176[(2)] = false);

(statearr_27124_27176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (3))){
var state_27091__$1 = state_27091;
var statearr_27125_27177 = state_27091__$1;
(statearr_27125_27177[(2)] = false);

(statearr_27125_27177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (12))){
var inst_27089 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27091__$1,inst_27089);
} else {
if((state_val_27092 === (2))){
var inst_26993 = (state_27091[(8)]);
var inst_26998 = inst_26993.cljs$lang$protocol_mask$partition0$;
var inst_26999 = (inst_26998 & (64));
var inst_27000 = inst_26993.cljs$core$ISeq$;
var inst_27001 = (cljs.core.PROTOCOL_SENTINEL === inst_27000);
var inst_27002 = ((inst_26999) || (inst_27001));
var state_27091__$1 = state_27091;
if(cljs.core.truth_(inst_27002)){
var statearr_27126_27178 = state_27091__$1;
(statearr_27126_27178[(1)] = (5));

} else {
var statearr_27127_27179 = state_27091__$1;
(statearr_27127_27179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (23))){
var inst_27050 = (state_27091[(14)]);
var inst_27056 = (inst_27050 == null);
var state_27091__$1 = state_27091;
if(cljs.core.truth_(inst_27056)){
var statearr_27128_27180 = state_27091__$1;
(statearr_27128_27180[(1)] = (26));

} else {
var statearr_27129_27181 = state_27091__$1;
(statearr_27129_27181[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (35))){
var inst_27076 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
if(cljs.core.truth_(inst_27076)){
var statearr_27130_27182 = state_27091__$1;
(statearr_27130_27182[(1)] = (36));

} else {
var statearr_27131_27183 = state_27091__$1;
(statearr_27131_27183[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (19))){
var inst_27018 = (state_27091[(7)]);
var inst_27038 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27018);
var state_27091__$1 = state_27091;
var statearr_27132_27184 = state_27091__$1;
(statearr_27132_27184[(2)] = inst_27038);

(statearr_27132_27184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (11))){
var inst_27018 = (state_27091[(7)]);
var inst_27022 = (inst_27018 == null);
var inst_27023 = cljs.core.not.call(null,inst_27022);
var state_27091__$1 = state_27091;
if(inst_27023){
var statearr_27133_27185 = state_27091__$1;
(statearr_27133_27185[(1)] = (13));

} else {
var statearr_27134_27186 = state_27091__$1;
(statearr_27134_27186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (9))){
var inst_26993 = (state_27091[(8)]);
var state_27091__$1 = state_27091;
var statearr_27135_27187 = state_27091__$1;
(statearr_27135_27187[(2)] = inst_26993);

(statearr_27135_27187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (5))){
var state_27091__$1 = state_27091;
var statearr_27136_27188 = state_27091__$1;
(statearr_27136_27188[(2)] = true);

(statearr_27136_27188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (14))){
var state_27091__$1 = state_27091;
var statearr_27137_27189 = state_27091__$1;
(statearr_27137_27189[(2)] = false);

(statearr_27137_27189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (26))){
var inst_27051 = (state_27091[(11)]);
var inst_27058 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27051);
var state_27091__$1 = state_27091;
var statearr_27138_27190 = state_27091__$1;
(statearr_27138_27190[(2)] = inst_27058);

(statearr_27138_27190[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (16))){
var state_27091__$1 = state_27091;
var statearr_27139_27191 = state_27091__$1;
(statearr_27139_27191[(2)] = true);

(statearr_27139_27191[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (38))){
var inst_27081 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
var statearr_27140_27192 = state_27091__$1;
(statearr_27140_27192[(2)] = inst_27081);

(statearr_27140_27192[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (30))){
var inst_27042 = (state_27091[(9)]);
var inst_27043 = (state_27091[(13)]);
var inst_27051 = (state_27091[(11)]);
var inst_27068 = cljs.core.empty_QMARK_.call(null,inst_27042);
var inst_27069 = inst_27043.call(null,inst_27051);
var inst_27070 = cljs.core.not.call(null,inst_27069);
var inst_27071 = ((inst_27068) && (inst_27070));
var state_27091__$1 = state_27091;
var statearr_27141_27193 = state_27091__$1;
(statearr_27141_27193[(2)] = inst_27071);

(statearr_27141_27193[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (10))){
var inst_26993 = (state_27091[(8)]);
var inst_27014 = (state_27091[(2)]);
var inst_27015 = cljs.core.get.call(null,inst_27014,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27016 = cljs.core.get.call(null,inst_27014,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27017 = cljs.core.get.call(null,inst_27014,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27018 = inst_26993;
var state_27091__$1 = (function (){var statearr_27142 = state_27091;
(statearr_27142[(7)] = inst_27018);

(statearr_27142[(16)] = inst_27015);

(statearr_27142[(17)] = inst_27016);

(statearr_27142[(18)] = inst_27017);

return statearr_27142;
})();
var statearr_27143_27194 = state_27091__$1;
(statearr_27143_27194[(2)] = null);

(statearr_27143_27194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (18))){
var inst_27033 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
var statearr_27144_27195 = state_27091__$1;
(statearr_27144_27195[(2)] = inst_27033);

(statearr_27144_27195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (37))){
var state_27091__$1 = state_27091;
var statearr_27145_27196 = state_27091__$1;
(statearr_27145_27196[(2)] = null);

(statearr_27145_27196[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (8))){
var inst_26993 = (state_27091[(8)]);
var inst_27011 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26993);
var state_27091__$1 = state_27091;
var statearr_27146_27197 = state_27091__$1;
(statearr_27146_27197[(2)] = inst_27011);

(statearr_27146_27197[(1)] = (10));


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
});})(c__26092__auto___27151,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25997__auto__,c__26092__auto___27151,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25998__auto__ = null;
var cljs$core$async$mix_$_state_machine__25998__auto____0 = (function (){
var statearr_27147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27147[(0)] = cljs$core$async$mix_$_state_machine__25998__auto__);

(statearr_27147[(1)] = (1));

return statearr_27147;
});
var cljs$core$async$mix_$_state_machine__25998__auto____1 = (function (state_27091){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_27091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e27148){if((e27148 instanceof Object)){
var ex__26001__auto__ = e27148;
var statearr_27149_27198 = state_27091;
(statearr_27149_27198[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27199 = state_27091;
state_27091 = G__27199;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25998__auto__ = function(state_27091){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25998__auto____1.call(this,state_27091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25998__auto____0;
cljs$core$async$mix_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25998__auto____1;
return cljs$core$async$mix_$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___27151,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26094__auto__ = (function (){var statearr_27150 = f__26093__auto__.call(null);
(statearr_27150[(6)] = c__26092__auto___27151);

return statearr_27150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___27151,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__27201 = arguments.length;
switch (G__27201) {
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
var G__27205 = arguments.length;
switch (G__27205) {
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
return (function (p1__27203_SHARP_){
if(cljs.core.truth_(p1__27203_SHARP_.call(null,topic))){
return p1__27203_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27203_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27206 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27207){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27207 = meta27207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27208,meta27207__$1){
var self__ = this;
var _27208__$1 = this;
return (new cljs.core.async.t_cljs$core$async27206(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27207__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27208){
var self__ = this;
var _27208__$1 = this;
return self__.meta27207;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27206.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27206.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27206.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27206.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27206.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27206.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27206.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27207","meta27207",-815477851,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27206";

cljs.core.async.t_cljs$core$async27206.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27206");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27206.
 */
cljs.core.async.__GT_t_cljs$core$async27206 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27206(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27207){
return (new cljs.core.async.t_cljs$core$async27206(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27207));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27206(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26092__auto___27326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___27326,mults,ensure_mult,p){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___27326,mults,ensure_mult,p){
return (function (state_27280){
var state_val_27281 = (state_27280[(1)]);
if((state_val_27281 === (7))){
var inst_27276 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27282_27327 = state_27280__$1;
(statearr_27282_27327[(2)] = inst_27276);

(statearr_27282_27327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (20))){
var state_27280__$1 = state_27280;
var statearr_27283_27328 = state_27280__$1;
(statearr_27283_27328[(2)] = null);

(statearr_27283_27328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (1))){
var state_27280__$1 = state_27280;
var statearr_27284_27329 = state_27280__$1;
(statearr_27284_27329[(2)] = null);

(statearr_27284_27329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (24))){
var inst_27259 = (state_27280[(7)]);
var inst_27268 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27259);
var state_27280__$1 = state_27280;
var statearr_27285_27330 = state_27280__$1;
(statearr_27285_27330[(2)] = inst_27268);

(statearr_27285_27330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (4))){
var inst_27211 = (state_27280[(8)]);
var inst_27211__$1 = (state_27280[(2)]);
var inst_27212 = (inst_27211__$1 == null);
var state_27280__$1 = (function (){var statearr_27286 = state_27280;
(statearr_27286[(8)] = inst_27211__$1);

return statearr_27286;
})();
if(cljs.core.truth_(inst_27212)){
var statearr_27287_27331 = state_27280__$1;
(statearr_27287_27331[(1)] = (5));

} else {
var statearr_27288_27332 = state_27280__$1;
(statearr_27288_27332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (15))){
var inst_27253 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27289_27333 = state_27280__$1;
(statearr_27289_27333[(2)] = inst_27253);

(statearr_27289_27333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (21))){
var inst_27273 = (state_27280[(2)]);
var state_27280__$1 = (function (){var statearr_27290 = state_27280;
(statearr_27290[(9)] = inst_27273);

return statearr_27290;
})();
var statearr_27291_27334 = state_27280__$1;
(statearr_27291_27334[(2)] = null);

(statearr_27291_27334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (13))){
var inst_27235 = (state_27280[(10)]);
var inst_27237 = cljs.core.chunked_seq_QMARK_.call(null,inst_27235);
var state_27280__$1 = state_27280;
if(inst_27237){
var statearr_27292_27335 = state_27280__$1;
(statearr_27292_27335[(1)] = (16));

} else {
var statearr_27293_27336 = state_27280__$1;
(statearr_27293_27336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (22))){
var inst_27265 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
if(cljs.core.truth_(inst_27265)){
var statearr_27294_27337 = state_27280__$1;
(statearr_27294_27337[(1)] = (23));

} else {
var statearr_27295_27338 = state_27280__$1;
(statearr_27295_27338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (6))){
var inst_27259 = (state_27280[(7)]);
var inst_27261 = (state_27280[(11)]);
var inst_27211 = (state_27280[(8)]);
var inst_27259__$1 = topic_fn.call(null,inst_27211);
var inst_27260 = cljs.core.deref.call(null,mults);
var inst_27261__$1 = cljs.core.get.call(null,inst_27260,inst_27259__$1);
var state_27280__$1 = (function (){var statearr_27296 = state_27280;
(statearr_27296[(7)] = inst_27259__$1);

(statearr_27296[(11)] = inst_27261__$1);

return statearr_27296;
})();
if(cljs.core.truth_(inst_27261__$1)){
var statearr_27297_27339 = state_27280__$1;
(statearr_27297_27339[(1)] = (19));

} else {
var statearr_27298_27340 = state_27280__$1;
(statearr_27298_27340[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (25))){
var inst_27270 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27299_27341 = state_27280__$1;
(statearr_27299_27341[(2)] = inst_27270);

(statearr_27299_27341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (17))){
var inst_27235 = (state_27280[(10)]);
var inst_27244 = cljs.core.first.call(null,inst_27235);
var inst_27245 = cljs.core.async.muxch_STAR_.call(null,inst_27244);
var inst_27246 = cljs.core.async.close_BANG_.call(null,inst_27245);
var inst_27247 = cljs.core.next.call(null,inst_27235);
var inst_27221 = inst_27247;
var inst_27222 = null;
var inst_27223 = (0);
var inst_27224 = (0);
var state_27280__$1 = (function (){var statearr_27300 = state_27280;
(statearr_27300[(12)] = inst_27224);

(statearr_27300[(13)] = inst_27221);

(statearr_27300[(14)] = inst_27222);

(statearr_27300[(15)] = inst_27223);

(statearr_27300[(16)] = inst_27246);

return statearr_27300;
})();
var statearr_27301_27342 = state_27280__$1;
(statearr_27301_27342[(2)] = null);

(statearr_27301_27342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (3))){
var inst_27278 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27280__$1,inst_27278);
} else {
if((state_val_27281 === (12))){
var inst_27255 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27302_27343 = state_27280__$1;
(statearr_27302_27343[(2)] = inst_27255);

(statearr_27302_27343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (2))){
var state_27280__$1 = state_27280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27280__$1,(4),ch);
} else {
if((state_val_27281 === (23))){
var state_27280__$1 = state_27280;
var statearr_27303_27344 = state_27280__$1;
(statearr_27303_27344[(2)] = null);

(statearr_27303_27344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (19))){
var inst_27261 = (state_27280[(11)]);
var inst_27211 = (state_27280[(8)]);
var inst_27263 = cljs.core.async.muxch_STAR_.call(null,inst_27261);
var state_27280__$1 = state_27280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27280__$1,(22),inst_27263,inst_27211);
} else {
if((state_val_27281 === (11))){
var inst_27221 = (state_27280[(13)]);
var inst_27235 = (state_27280[(10)]);
var inst_27235__$1 = cljs.core.seq.call(null,inst_27221);
var state_27280__$1 = (function (){var statearr_27304 = state_27280;
(statearr_27304[(10)] = inst_27235__$1);

return statearr_27304;
})();
if(inst_27235__$1){
var statearr_27305_27345 = state_27280__$1;
(statearr_27305_27345[(1)] = (13));

} else {
var statearr_27306_27346 = state_27280__$1;
(statearr_27306_27346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (9))){
var inst_27257 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27307_27347 = state_27280__$1;
(statearr_27307_27347[(2)] = inst_27257);

(statearr_27307_27347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (5))){
var inst_27218 = cljs.core.deref.call(null,mults);
var inst_27219 = cljs.core.vals.call(null,inst_27218);
var inst_27220 = cljs.core.seq.call(null,inst_27219);
var inst_27221 = inst_27220;
var inst_27222 = null;
var inst_27223 = (0);
var inst_27224 = (0);
var state_27280__$1 = (function (){var statearr_27308 = state_27280;
(statearr_27308[(12)] = inst_27224);

(statearr_27308[(13)] = inst_27221);

(statearr_27308[(14)] = inst_27222);

(statearr_27308[(15)] = inst_27223);

return statearr_27308;
})();
var statearr_27309_27348 = state_27280__$1;
(statearr_27309_27348[(2)] = null);

(statearr_27309_27348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (14))){
var state_27280__$1 = state_27280;
var statearr_27313_27349 = state_27280__$1;
(statearr_27313_27349[(2)] = null);

(statearr_27313_27349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (16))){
var inst_27235 = (state_27280[(10)]);
var inst_27239 = cljs.core.chunk_first.call(null,inst_27235);
var inst_27240 = cljs.core.chunk_rest.call(null,inst_27235);
var inst_27241 = cljs.core.count.call(null,inst_27239);
var inst_27221 = inst_27240;
var inst_27222 = inst_27239;
var inst_27223 = inst_27241;
var inst_27224 = (0);
var state_27280__$1 = (function (){var statearr_27314 = state_27280;
(statearr_27314[(12)] = inst_27224);

(statearr_27314[(13)] = inst_27221);

(statearr_27314[(14)] = inst_27222);

(statearr_27314[(15)] = inst_27223);

return statearr_27314;
})();
var statearr_27315_27350 = state_27280__$1;
(statearr_27315_27350[(2)] = null);

(statearr_27315_27350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (10))){
var inst_27224 = (state_27280[(12)]);
var inst_27221 = (state_27280[(13)]);
var inst_27222 = (state_27280[(14)]);
var inst_27223 = (state_27280[(15)]);
var inst_27229 = cljs.core._nth.call(null,inst_27222,inst_27224);
var inst_27230 = cljs.core.async.muxch_STAR_.call(null,inst_27229);
var inst_27231 = cljs.core.async.close_BANG_.call(null,inst_27230);
var inst_27232 = (inst_27224 + (1));
var tmp27310 = inst_27221;
var tmp27311 = inst_27222;
var tmp27312 = inst_27223;
var inst_27221__$1 = tmp27310;
var inst_27222__$1 = tmp27311;
var inst_27223__$1 = tmp27312;
var inst_27224__$1 = inst_27232;
var state_27280__$1 = (function (){var statearr_27316 = state_27280;
(statearr_27316[(12)] = inst_27224__$1);

(statearr_27316[(13)] = inst_27221__$1);

(statearr_27316[(17)] = inst_27231);

(statearr_27316[(14)] = inst_27222__$1);

(statearr_27316[(15)] = inst_27223__$1);

return statearr_27316;
})();
var statearr_27317_27351 = state_27280__$1;
(statearr_27317_27351[(2)] = null);

(statearr_27317_27351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (18))){
var inst_27250 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27318_27352 = state_27280__$1;
(statearr_27318_27352[(2)] = inst_27250);

(statearr_27318_27352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (8))){
var inst_27224 = (state_27280[(12)]);
var inst_27223 = (state_27280[(15)]);
var inst_27226 = (inst_27224 < inst_27223);
var inst_27227 = inst_27226;
var state_27280__$1 = state_27280;
if(cljs.core.truth_(inst_27227)){
var statearr_27319_27353 = state_27280__$1;
(statearr_27319_27353[(1)] = (10));

} else {
var statearr_27320_27354 = state_27280__$1;
(statearr_27320_27354[(1)] = (11));

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
});})(c__26092__auto___27326,mults,ensure_mult,p))
;
return ((function (switch__25997__auto__,c__26092__auto___27326,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25998__auto__ = null;
var cljs$core$async$state_machine__25998__auto____0 = (function (){
var statearr_27321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27321[(0)] = cljs$core$async$state_machine__25998__auto__);

(statearr_27321[(1)] = (1));

return statearr_27321;
});
var cljs$core$async$state_machine__25998__auto____1 = (function (state_27280){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_27280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e27322){if((e27322 instanceof Object)){
var ex__26001__auto__ = e27322;
var statearr_27323_27355 = state_27280;
(statearr_27323_27355[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27356 = state_27280;
state_27280 = G__27356;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$state_machine__25998__auto__ = function(state_27280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25998__auto____1.call(this,state_27280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25998__auto____0;
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25998__auto____1;
return cljs$core$async$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___27326,mults,ensure_mult,p))
})();
var state__26094__auto__ = (function (){var statearr_27324 = f__26093__auto__.call(null);
(statearr_27324[(6)] = c__26092__auto___27326);

return statearr_27324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___27326,mults,ensure_mult,p))
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
var G__27358 = arguments.length;
switch (G__27358) {
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
var G__27361 = arguments.length;
switch (G__27361) {
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
var G__27364 = arguments.length;
switch (G__27364) {
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
var c__26092__auto___27431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___27431,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___27431,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27403){
var state_val_27404 = (state_27403[(1)]);
if((state_val_27404 === (7))){
var state_27403__$1 = state_27403;
var statearr_27405_27432 = state_27403__$1;
(statearr_27405_27432[(2)] = null);

(statearr_27405_27432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (1))){
var state_27403__$1 = state_27403;
var statearr_27406_27433 = state_27403__$1;
(statearr_27406_27433[(2)] = null);

(statearr_27406_27433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (4))){
var inst_27367 = (state_27403[(7)]);
var inst_27369 = (inst_27367 < cnt);
var state_27403__$1 = state_27403;
if(cljs.core.truth_(inst_27369)){
var statearr_27407_27434 = state_27403__$1;
(statearr_27407_27434[(1)] = (6));

} else {
var statearr_27408_27435 = state_27403__$1;
(statearr_27408_27435[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (15))){
var inst_27399 = (state_27403[(2)]);
var state_27403__$1 = state_27403;
var statearr_27409_27436 = state_27403__$1;
(statearr_27409_27436[(2)] = inst_27399);

(statearr_27409_27436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (13))){
var inst_27392 = cljs.core.async.close_BANG_.call(null,out);
var state_27403__$1 = state_27403;
var statearr_27410_27437 = state_27403__$1;
(statearr_27410_27437[(2)] = inst_27392);

(statearr_27410_27437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (6))){
var state_27403__$1 = state_27403;
var statearr_27411_27438 = state_27403__$1;
(statearr_27411_27438[(2)] = null);

(statearr_27411_27438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (3))){
var inst_27401 = (state_27403[(2)]);
var state_27403__$1 = state_27403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27403__$1,inst_27401);
} else {
if((state_val_27404 === (12))){
var inst_27389 = (state_27403[(8)]);
var inst_27389__$1 = (state_27403[(2)]);
var inst_27390 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27389__$1);
var state_27403__$1 = (function (){var statearr_27412 = state_27403;
(statearr_27412[(8)] = inst_27389__$1);

return statearr_27412;
})();
if(cljs.core.truth_(inst_27390)){
var statearr_27413_27439 = state_27403__$1;
(statearr_27413_27439[(1)] = (13));

} else {
var statearr_27414_27440 = state_27403__$1;
(statearr_27414_27440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (2))){
var inst_27366 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27367 = (0);
var state_27403__$1 = (function (){var statearr_27415 = state_27403;
(statearr_27415[(7)] = inst_27367);

(statearr_27415[(9)] = inst_27366);

return statearr_27415;
})();
var statearr_27416_27441 = state_27403__$1;
(statearr_27416_27441[(2)] = null);

(statearr_27416_27441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (11))){
var inst_27367 = (state_27403[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27403,(10),Object,null,(9));
var inst_27376 = chs__$1.call(null,inst_27367);
var inst_27377 = done.call(null,inst_27367);
var inst_27378 = cljs.core.async.take_BANG_.call(null,inst_27376,inst_27377);
var state_27403__$1 = state_27403;
var statearr_27417_27442 = state_27403__$1;
(statearr_27417_27442[(2)] = inst_27378);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27403__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (9))){
var inst_27367 = (state_27403[(7)]);
var inst_27380 = (state_27403[(2)]);
var inst_27381 = (inst_27367 + (1));
var inst_27367__$1 = inst_27381;
var state_27403__$1 = (function (){var statearr_27418 = state_27403;
(statearr_27418[(7)] = inst_27367__$1);

(statearr_27418[(10)] = inst_27380);

return statearr_27418;
})();
var statearr_27419_27443 = state_27403__$1;
(statearr_27419_27443[(2)] = null);

(statearr_27419_27443[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (5))){
var inst_27387 = (state_27403[(2)]);
var state_27403__$1 = (function (){var statearr_27420 = state_27403;
(statearr_27420[(11)] = inst_27387);

return statearr_27420;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27403__$1,(12),dchan);
} else {
if((state_val_27404 === (14))){
var inst_27389 = (state_27403[(8)]);
var inst_27394 = cljs.core.apply.call(null,f,inst_27389);
var state_27403__$1 = state_27403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27403__$1,(16),out,inst_27394);
} else {
if((state_val_27404 === (16))){
var inst_27396 = (state_27403[(2)]);
var state_27403__$1 = (function (){var statearr_27421 = state_27403;
(statearr_27421[(12)] = inst_27396);

return statearr_27421;
})();
var statearr_27422_27444 = state_27403__$1;
(statearr_27422_27444[(2)] = null);

(statearr_27422_27444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (10))){
var inst_27371 = (state_27403[(2)]);
var inst_27372 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27403__$1 = (function (){var statearr_27423 = state_27403;
(statearr_27423[(13)] = inst_27371);

return statearr_27423;
})();
var statearr_27424_27445 = state_27403__$1;
(statearr_27424_27445[(2)] = inst_27372);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27403__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (8))){
var inst_27385 = (state_27403[(2)]);
var state_27403__$1 = state_27403;
var statearr_27425_27446 = state_27403__$1;
(statearr_27425_27446[(2)] = inst_27385);

(statearr_27425_27446[(1)] = (5));


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
});})(c__26092__auto___27431,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25997__auto__,c__26092__auto___27431,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25998__auto__ = null;
var cljs$core$async$state_machine__25998__auto____0 = (function (){
var statearr_27426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27426[(0)] = cljs$core$async$state_machine__25998__auto__);

(statearr_27426[(1)] = (1));

return statearr_27426;
});
var cljs$core$async$state_machine__25998__auto____1 = (function (state_27403){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_27403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e27427){if((e27427 instanceof Object)){
var ex__26001__auto__ = e27427;
var statearr_27428_27447 = state_27403;
(statearr_27428_27447[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27448 = state_27403;
state_27403 = G__27448;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$state_machine__25998__auto__ = function(state_27403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25998__auto____1.call(this,state_27403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25998__auto____0;
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25998__auto____1;
return cljs$core$async$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___27431,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26094__auto__ = (function (){var statearr_27429 = f__26093__auto__.call(null);
(statearr_27429[(6)] = c__26092__auto___27431);

return statearr_27429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___27431,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27451 = arguments.length;
switch (G__27451) {
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
var c__26092__auto___27505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___27505,out){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___27505,out){
return (function (state_27483){
var state_val_27484 = (state_27483[(1)]);
if((state_val_27484 === (7))){
var inst_27462 = (state_27483[(7)]);
var inst_27463 = (state_27483[(8)]);
var inst_27462__$1 = (state_27483[(2)]);
var inst_27463__$1 = cljs.core.nth.call(null,inst_27462__$1,(0),null);
var inst_27464 = cljs.core.nth.call(null,inst_27462__$1,(1),null);
var inst_27465 = (inst_27463__$1 == null);
var state_27483__$1 = (function (){var statearr_27485 = state_27483;
(statearr_27485[(7)] = inst_27462__$1);

(statearr_27485[(8)] = inst_27463__$1);

(statearr_27485[(9)] = inst_27464);

return statearr_27485;
})();
if(cljs.core.truth_(inst_27465)){
var statearr_27486_27506 = state_27483__$1;
(statearr_27486_27506[(1)] = (8));

} else {
var statearr_27487_27507 = state_27483__$1;
(statearr_27487_27507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (1))){
var inst_27452 = cljs.core.vec.call(null,chs);
var inst_27453 = inst_27452;
var state_27483__$1 = (function (){var statearr_27488 = state_27483;
(statearr_27488[(10)] = inst_27453);

return statearr_27488;
})();
var statearr_27489_27508 = state_27483__$1;
(statearr_27489_27508[(2)] = null);

(statearr_27489_27508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (4))){
var inst_27453 = (state_27483[(10)]);
var state_27483__$1 = state_27483;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27483__$1,(7),inst_27453);
} else {
if((state_val_27484 === (6))){
var inst_27479 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
var statearr_27490_27509 = state_27483__$1;
(statearr_27490_27509[(2)] = inst_27479);

(statearr_27490_27509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (3))){
var inst_27481 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27483__$1,inst_27481);
} else {
if((state_val_27484 === (2))){
var inst_27453 = (state_27483[(10)]);
var inst_27455 = cljs.core.count.call(null,inst_27453);
var inst_27456 = (inst_27455 > (0));
var state_27483__$1 = state_27483;
if(cljs.core.truth_(inst_27456)){
var statearr_27492_27510 = state_27483__$1;
(statearr_27492_27510[(1)] = (4));

} else {
var statearr_27493_27511 = state_27483__$1;
(statearr_27493_27511[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (11))){
var inst_27453 = (state_27483[(10)]);
var inst_27472 = (state_27483[(2)]);
var tmp27491 = inst_27453;
var inst_27453__$1 = tmp27491;
var state_27483__$1 = (function (){var statearr_27494 = state_27483;
(statearr_27494[(11)] = inst_27472);

(statearr_27494[(10)] = inst_27453__$1);

return statearr_27494;
})();
var statearr_27495_27512 = state_27483__$1;
(statearr_27495_27512[(2)] = null);

(statearr_27495_27512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (9))){
var inst_27463 = (state_27483[(8)]);
var state_27483__$1 = state_27483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27483__$1,(11),out,inst_27463);
} else {
if((state_val_27484 === (5))){
var inst_27477 = cljs.core.async.close_BANG_.call(null,out);
var state_27483__$1 = state_27483;
var statearr_27496_27513 = state_27483__$1;
(statearr_27496_27513[(2)] = inst_27477);

(statearr_27496_27513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (10))){
var inst_27475 = (state_27483[(2)]);
var state_27483__$1 = state_27483;
var statearr_27497_27514 = state_27483__$1;
(statearr_27497_27514[(2)] = inst_27475);

(statearr_27497_27514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27484 === (8))){
var inst_27462 = (state_27483[(7)]);
var inst_27463 = (state_27483[(8)]);
var inst_27464 = (state_27483[(9)]);
var inst_27453 = (state_27483[(10)]);
var inst_27467 = (function (){var cs = inst_27453;
var vec__27458 = inst_27462;
var v = inst_27463;
var c = inst_27464;
return ((function (cs,vec__27458,v,c,inst_27462,inst_27463,inst_27464,inst_27453,state_val_27484,c__26092__auto___27505,out){
return (function (p1__27449_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27449_SHARP_);
});
;})(cs,vec__27458,v,c,inst_27462,inst_27463,inst_27464,inst_27453,state_val_27484,c__26092__auto___27505,out))
})();
var inst_27468 = cljs.core.filterv.call(null,inst_27467,inst_27453);
var inst_27453__$1 = inst_27468;
var state_27483__$1 = (function (){var statearr_27498 = state_27483;
(statearr_27498[(10)] = inst_27453__$1);

return statearr_27498;
})();
var statearr_27499_27515 = state_27483__$1;
(statearr_27499_27515[(2)] = null);

(statearr_27499_27515[(1)] = (2));


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
});})(c__26092__auto___27505,out))
;
return ((function (switch__25997__auto__,c__26092__auto___27505,out){
return (function() {
var cljs$core$async$state_machine__25998__auto__ = null;
var cljs$core$async$state_machine__25998__auto____0 = (function (){
var statearr_27500 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27500[(0)] = cljs$core$async$state_machine__25998__auto__);

(statearr_27500[(1)] = (1));

return statearr_27500;
});
var cljs$core$async$state_machine__25998__auto____1 = (function (state_27483){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_27483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e27501){if((e27501 instanceof Object)){
var ex__26001__auto__ = e27501;
var statearr_27502_27516 = state_27483;
(statearr_27502_27516[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27517 = state_27483;
state_27483 = G__27517;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$state_machine__25998__auto__ = function(state_27483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25998__auto____1.call(this,state_27483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25998__auto____0;
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25998__auto____1;
return cljs$core$async$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___27505,out))
})();
var state__26094__auto__ = (function (){var statearr_27503 = f__26093__auto__.call(null);
(statearr_27503[(6)] = c__26092__auto___27505);

return statearr_27503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___27505,out))
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
var G__27519 = arguments.length;
switch (G__27519) {
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
var c__26092__auto___27564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___27564,out){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___27564,out){
return (function (state_27543){
var state_val_27544 = (state_27543[(1)]);
if((state_val_27544 === (7))){
var inst_27525 = (state_27543[(7)]);
var inst_27525__$1 = (state_27543[(2)]);
var inst_27526 = (inst_27525__$1 == null);
var inst_27527 = cljs.core.not.call(null,inst_27526);
var state_27543__$1 = (function (){var statearr_27545 = state_27543;
(statearr_27545[(7)] = inst_27525__$1);

return statearr_27545;
})();
if(inst_27527){
var statearr_27546_27565 = state_27543__$1;
(statearr_27546_27565[(1)] = (8));

} else {
var statearr_27547_27566 = state_27543__$1;
(statearr_27547_27566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (1))){
var inst_27520 = (0);
var state_27543__$1 = (function (){var statearr_27548 = state_27543;
(statearr_27548[(8)] = inst_27520);

return statearr_27548;
})();
var statearr_27549_27567 = state_27543__$1;
(statearr_27549_27567[(2)] = null);

(statearr_27549_27567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (4))){
var state_27543__$1 = state_27543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27543__$1,(7),ch);
} else {
if((state_val_27544 === (6))){
var inst_27538 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27550_27568 = state_27543__$1;
(statearr_27550_27568[(2)] = inst_27538);

(statearr_27550_27568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (3))){
var inst_27540 = (state_27543[(2)]);
var inst_27541 = cljs.core.async.close_BANG_.call(null,out);
var state_27543__$1 = (function (){var statearr_27551 = state_27543;
(statearr_27551[(9)] = inst_27540);

return statearr_27551;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27543__$1,inst_27541);
} else {
if((state_val_27544 === (2))){
var inst_27520 = (state_27543[(8)]);
var inst_27522 = (inst_27520 < n);
var state_27543__$1 = state_27543;
if(cljs.core.truth_(inst_27522)){
var statearr_27552_27569 = state_27543__$1;
(statearr_27552_27569[(1)] = (4));

} else {
var statearr_27553_27570 = state_27543__$1;
(statearr_27553_27570[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (11))){
var inst_27520 = (state_27543[(8)]);
var inst_27530 = (state_27543[(2)]);
var inst_27531 = (inst_27520 + (1));
var inst_27520__$1 = inst_27531;
var state_27543__$1 = (function (){var statearr_27554 = state_27543;
(statearr_27554[(8)] = inst_27520__$1);

(statearr_27554[(10)] = inst_27530);

return statearr_27554;
})();
var statearr_27555_27571 = state_27543__$1;
(statearr_27555_27571[(2)] = null);

(statearr_27555_27571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (9))){
var state_27543__$1 = state_27543;
var statearr_27556_27572 = state_27543__$1;
(statearr_27556_27572[(2)] = null);

(statearr_27556_27572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (5))){
var state_27543__$1 = state_27543;
var statearr_27557_27573 = state_27543__$1;
(statearr_27557_27573[(2)] = null);

(statearr_27557_27573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (10))){
var inst_27535 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27558_27574 = state_27543__$1;
(statearr_27558_27574[(2)] = inst_27535);

(statearr_27558_27574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (8))){
var inst_27525 = (state_27543[(7)]);
var state_27543__$1 = state_27543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27543__$1,(11),out,inst_27525);
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
});})(c__26092__auto___27564,out))
;
return ((function (switch__25997__auto__,c__26092__auto___27564,out){
return (function() {
var cljs$core$async$state_machine__25998__auto__ = null;
var cljs$core$async$state_machine__25998__auto____0 = (function (){
var statearr_27559 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27559[(0)] = cljs$core$async$state_machine__25998__auto__);

(statearr_27559[(1)] = (1));

return statearr_27559;
});
var cljs$core$async$state_machine__25998__auto____1 = (function (state_27543){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_27543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e27560){if((e27560 instanceof Object)){
var ex__26001__auto__ = e27560;
var statearr_27561_27575 = state_27543;
(statearr_27561_27575[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27576 = state_27543;
state_27543 = G__27576;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$state_machine__25998__auto__ = function(state_27543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25998__auto____1.call(this,state_27543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25998__auto____0;
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25998__auto____1;
return cljs$core$async$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___27564,out))
})();
var state__26094__auto__ = (function (){var statearr_27562 = f__26093__auto__.call(null);
(statearr_27562[(6)] = c__26092__auto___27564);

return statearr_27562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___27564,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27578 = (function (f,ch,meta27579){
this.f = f;
this.ch = ch;
this.meta27579 = meta27579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27580,meta27579__$1){
var self__ = this;
var _27580__$1 = this;
return (new cljs.core.async.t_cljs$core$async27578(self__.f,self__.ch,meta27579__$1));
});

cljs.core.async.t_cljs$core$async27578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27580){
var self__ = this;
var _27580__$1 = this;
return self__.meta27579;
});

cljs.core.async.t_cljs$core$async27578.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27578.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27578.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27581 = (function (f,ch,meta27579,_,fn1,meta27582){
this.f = f;
this.ch = ch;
this.meta27579 = meta27579;
this._ = _;
this.fn1 = fn1;
this.meta27582 = meta27582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27583,meta27582__$1){
var self__ = this;
var _27583__$1 = this;
return (new cljs.core.async.t_cljs$core$async27581(self__.f,self__.ch,self__.meta27579,self__._,self__.fn1,meta27582__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27583){
var self__ = this;
var _27583__$1 = this;
return self__.meta27582;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27577_SHARP_){
return f1.call(null,(((p1__27577_SHARP_ == null))?null:self__.f.call(null,p1__27577_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27581.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27579","meta27579",66643556,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27578","cljs.core.async/t_cljs$core$async27578",1762554216,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27582","meta27582",-1351202414,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27581";

cljs.core.async.t_cljs$core$async27581.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27581");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27581.
 */
cljs.core.async.__GT_t_cljs$core$async27581 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27581(f__$1,ch__$1,meta27579__$1,___$2,fn1__$1,meta27582){
return (new cljs.core.async.t_cljs$core$async27581(f__$1,ch__$1,meta27579__$1,___$2,fn1__$1,meta27582));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27581(self__.f,self__.ch,self__.meta27579,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27578.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27579","meta27579",66643556,null)], null);
});

cljs.core.async.t_cljs$core$async27578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27578";

cljs.core.async.t_cljs$core$async27578.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27578");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27578.
 */
cljs.core.async.__GT_t_cljs$core$async27578 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27578(f__$1,ch__$1,meta27579){
return (new cljs.core.async.t_cljs$core$async27578(f__$1,ch__$1,meta27579));
});

}

return (new cljs.core.async.t_cljs$core$async27578(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27584 = (function (f,ch,meta27585){
this.f = f;
this.ch = ch;
this.meta27585 = meta27585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27586,meta27585__$1){
var self__ = this;
var _27586__$1 = this;
return (new cljs.core.async.t_cljs$core$async27584(self__.f,self__.ch,meta27585__$1));
});

cljs.core.async.t_cljs$core$async27584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27586){
var self__ = this;
var _27586__$1 = this;
return self__.meta27585;
});

cljs.core.async.t_cljs$core$async27584.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27584.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27584.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27585","meta27585",1556218022,null)], null);
});

cljs.core.async.t_cljs$core$async27584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27584";

cljs.core.async.t_cljs$core$async27584.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27584");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27584.
 */
cljs.core.async.__GT_t_cljs$core$async27584 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27584(f__$1,ch__$1,meta27585){
return (new cljs.core.async.t_cljs$core$async27584(f__$1,ch__$1,meta27585));
});

}

return (new cljs.core.async.t_cljs$core$async27584(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27587 = (function (p,ch,meta27588){
this.p = p;
this.ch = ch;
this.meta27588 = meta27588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27589,meta27588__$1){
var self__ = this;
var _27589__$1 = this;
return (new cljs.core.async.t_cljs$core$async27587(self__.p,self__.ch,meta27588__$1));
});

cljs.core.async.t_cljs$core$async27587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27589){
var self__ = this;
var _27589__$1 = this;
return self__.meta27588;
});

cljs.core.async.t_cljs$core$async27587.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27587.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27587.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27587.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27587.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27587.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27587.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27588","meta27588",-1239894604,null)], null);
});

cljs.core.async.t_cljs$core$async27587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27587";

cljs.core.async.t_cljs$core$async27587.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27587");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27587.
 */
cljs.core.async.__GT_t_cljs$core$async27587 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27587(p__$1,ch__$1,meta27588){
return (new cljs.core.async.t_cljs$core$async27587(p__$1,ch__$1,meta27588));
});

}

return (new cljs.core.async.t_cljs$core$async27587(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27591 = arguments.length;
switch (G__27591) {
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
var c__26092__auto___27631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___27631,out){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___27631,out){
return (function (state_27612){
var state_val_27613 = (state_27612[(1)]);
if((state_val_27613 === (7))){
var inst_27608 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27614_27632 = state_27612__$1;
(statearr_27614_27632[(2)] = inst_27608);

(statearr_27614_27632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (1))){
var state_27612__$1 = state_27612;
var statearr_27615_27633 = state_27612__$1;
(statearr_27615_27633[(2)] = null);

(statearr_27615_27633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (4))){
var inst_27594 = (state_27612[(7)]);
var inst_27594__$1 = (state_27612[(2)]);
var inst_27595 = (inst_27594__$1 == null);
var state_27612__$1 = (function (){var statearr_27616 = state_27612;
(statearr_27616[(7)] = inst_27594__$1);

return statearr_27616;
})();
if(cljs.core.truth_(inst_27595)){
var statearr_27617_27634 = state_27612__$1;
(statearr_27617_27634[(1)] = (5));

} else {
var statearr_27618_27635 = state_27612__$1;
(statearr_27618_27635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (6))){
var inst_27594 = (state_27612[(7)]);
var inst_27599 = p.call(null,inst_27594);
var state_27612__$1 = state_27612;
if(cljs.core.truth_(inst_27599)){
var statearr_27619_27636 = state_27612__$1;
(statearr_27619_27636[(1)] = (8));

} else {
var statearr_27620_27637 = state_27612__$1;
(statearr_27620_27637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (3))){
var inst_27610 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27612__$1,inst_27610);
} else {
if((state_val_27613 === (2))){
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27612__$1,(4),ch);
} else {
if((state_val_27613 === (11))){
var inst_27602 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27621_27638 = state_27612__$1;
(statearr_27621_27638[(2)] = inst_27602);

(statearr_27621_27638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (9))){
var state_27612__$1 = state_27612;
var statearr_27622_27639 = state_27612__$1;
(statearr_27622_27639[(2)] = null);

(statearr_27622_27639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (5))){
var inst_27597 = cljs.core.async.close_BANG_.call(null,out);
var state_27612__$1 = state_27612;
var statearr_27623_27640 = state_27612__$1;
(statearr_27623_27640[(2)] = inst_27597);

(statearr_27623_27640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (10))){
var inst_27605 = (state_27612[(2)]);
var state_27612__$1 = (function (){var statearr_27624 = state_27612;
(statearr_27624[(8)] = inst_27605);

return statearr_27624;
})();
var statearr_27625_27641 = state_27612__$1;
(statearr_27625_27641[(2)] = null);

(statearr_27625_27641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (8))){
var inst_27594 = (state_27612[(7)]);
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27612__$1,(11),out,inst_27594);
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
});})(c__26092__auto___27631,out))
;
return ((function (switch__25997__auto__,c__26092__auto___27631,out){
return (function() {
var cljs$core$async$state_machine__25998__auto__ = null;
var cljs$core$async$state_machine__25998__auto____0 = (function (){
var statearr_27626 = [null,null,null,null,null,null,null,null,null];
(statearr_27626[(0)] = cljs$core$async$state_machine__25998__auto__);

(statearr_27626[(1)] = (1));

return statearr_27626;
});
var cljs$core$async$state_machine__25998__auto____1 = (function (state_27612){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_27612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e27627){if((e27627 instanceof Object)){
var ex__26001__auto__ = e27627;
var statearr_27628_27642 = state_27612;
(statearr_27628_27642[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27643 = state_27612;
state_27612 = G__27643;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$state_machine__25998__auto__ = function(state_27612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25998__auto____1.call(this,state_27612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25998__auto____0;
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25998__auto____1;
return cljs$core$async$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___27631,out))
})();
var state__26094__auto__ = (function (){var statearr_27629 = f__26093__auto__.call(null);
(statearr_27629[(6)] = c__26092__auto___27631);

return statearr_27629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___27631,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27645 = arguments.length;
switch (G__27645) {
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
var c__26092__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto__){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto__){
return (function (state_27708){
var state_val_27709 = (state_27708[(1)]);
if((state_val_27709 === (7))){
var inst_27704 = (state_27708[(2)]);
var state_27708__$1 = state_27708;
var statearr_27710_27748 = state_27708__$1;
(statearr_27710_27748[(2)] = inst_27704);

(statearr_27710_27748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (20))){
var inst_27674 = (state_27708[(7)]);
var inst_27685 = (state_27708[(2)]);
var inst_27686 = cljs.core.next.call(null,inst_27674);
var inst_27660 = inst_27686;
var inst_27661 = null;
var inst_27662 = (0);
var inst_27663 = (0);
var state_27708__$1 = (function (){var statearr_27711 = state_27708;
(statearr_27711[(8)] = inst_27663);

(statearr_27711[(9)] = inst_27662);

(statearr_27711[(10)] = inst_27661);

(statearr_27711[(11)] = inst_27685);

(statearr_27711[(12)] = inst_27660);

return statearr_27711;
})();
var statearr_27712_27749 = state_27708__$1;
(statearr_27712_27749[(2)] = null);

(statearr_27712_27749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (1))){
var state_27708__$1 = state_27708;
var statearr_27713_27750 = state_27708__$1;
(statearr_27713_27750[(2)] = null);

(statearr_27713_27750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (4))){
var inst_27649 = (state_27708[(13)]);
var inst_27649__$1 = (state_27708[(2)]);
var inst_27650 = (inst_27649__$1 == null);
var state_27708__$1 = (function (){var statearr_27714 = state_27708;
(statearr_27714[(13)] = inst_27649__$1);

return statearr_27714;
})();
if(cljs.core.truth_(inst_27650)){
var statearr_27715_27751 = state_27708__$1;
(statearr_27715_27751[(1)] = (5));

} else {
var statearr_27716_27752 = state_27708__$1;
(statearr_27716_27752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (15))){
var state_27708__$1 = state_27708;
var statearr_27720_27753 = state_27708__$1;
(statearr_27720_27753[(2)] = null);

(statearr_27720_27753[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (21))){
var state_27708__$1 = state_27708;
var statearr_27721_27754 = state_27708__$1;
(statearr_27721_27754[(2)] = null);

(statearr_27721_27754[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (13))){
var inst_27663 = (state_27708[(8)]);
var inst_27662 = (state_27708[(9)]);
var inst_27661 = (state_27708[(10)]);
var inst_27660 = (state_27708[(12)]);
var inst_27670 = (state_27708[(2)]);
var inst_27671 = (inst_27663 + (1));
var tmp27717 = inst_27662;
var tmp27718 = inst_27661;
var tmp27719 = inst_27660;
var inst_27660__$1 = tmp27719;
var inst_27661__$1 = tmp27718;
var inst_27662__$1 = tmp27717;
var inst_27663__$1 = inst_27671;
var state_27708__$1 = (function (){var statearr_27722 = state_27708;
(statearr_27722[(8)] = inst_27663__$1);

(statearr_27722[(14)] = inst_27670);

(statearr_27722[(9)] = inst_27662__$1);

(statearr_27722[(10)] = inst_27661__$1);

(statearr_27722[(12)] = inst_27660__$1);

return statearr_27722;
})();
var statearr_27723_27755 = state_27708__$1;
(statearr_27723_27755[(2)] = null);

(statearr_27723_27755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (22))){
var state_27708__$1 = state_27708;
var statearr_27724_27756 = state_27708__$1;
(statearr_27724_27756[(2)] = null);

(statearr_27724_27756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (6))){
var inst_27649 = (state_27708[(13)]);
var inst_27658 = f.call(null,inst_27649);
var inst_27659 = cljs.core.seq.call(null,inst_27658);
var inst_27660 = inst_27659;
var inst_27661 = null;
var inst_27662 = (0);
var inst_27663 = (0);
var state_27708__$1 = (function (){var statearr_27725 = state_27708;
(statearr_27725[(8)] = inst_27663);

(statearr_27725[(9)] = inst_27662);

(statearr_27725[(10)] = inst_27661);

(statearr_27725[(12)] = inst_27660);

return statearr_27725;
})();
var statearr_27726_27757 = state_27708__$1;
(statearr_27726_27757[(2)] = null);

(statearr_27726_27757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (17))){
var inst_27674 = (state_27708[(7)]);
var inst_27678 = cljs.core.chunk_first.call(null,inst_27674);
var inst_27679 = cljs.core.chunk_rest.call(null,inst_27674);
var inst_27680 = cljs.core.count.call(null,inst_27678);
var inst_27660 = inst_27679;
var inst_27661 = inst_27678;
var inst_27662 = inst_27680;
var inst_27663 = (0);
var state_27708__$1 = (function (){var statearr_27727 = state_27708;
(statearr_27727[(8)] = inst_27663);

(statearr_27727[(9)] = inst_27662);

(statearr_27727[(10)] = inst_27661);

(statearr_27727[(12)] = inst_27660);

return statearr_27727;
})();
var statearr_27728_27758 = state_27708__$1;
(statearr_27728_27758[(2)] = null);

(statearr_27728_27758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (3))){
var inst_27706 = (state_27708[(2)]);
var state_27708__$1 = state_27708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27708__$1,inst_27706);
} else {
if((state_val_27709 === (12))){
var inst_27694 = (state_27708[(2)]);
var state_27708__$1 = state_27708;
var statearr_27729_27759 = state_27708__$1;
(statearr_27729_27759[(2)] = inst_27694);

(statearr_27729_27759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (2))){
var state_27708__$1 = state_27708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27708__$1,(4),in$);
} else {
if((state_val_27709 === (23))){
var inst_27702 = (state_27708[(2)]);
var state_27708__$1 = state_27708;
var statearr_27730_27760 = state_27708__$1;
(statearr_27730_27760[(2)] = inst_27702);

(statearr_27730_27760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (19))){
var inst_27689 = (state_27708[(2)]);
var state_27708__$1 = state_27708;
var statearr_27731_27761 = state_27708__$1;
(statearr_27731_27761[(2)] = inst_27689);

(statearr_27731_27761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (11))){
var inst_27674 = (state_27708[(7)]);
var inst_27660 = (state_27708[(12)]);
var inst_27674__$1 = cljs.core.seq.call(null,inst_27660);
var state_27708__$1 = (function (){var statearr_27732 = state_27708;
(statearr_27732[(7)] = inst_27674__$1);

return statearr_27732;
})();
if(inst_27674__$1){
var statearr_27733_27762 = state_27708__$1;
(statearr_27733_27762[(1)] = (14));

} else {
var statearr_27734_27763 = state_27708__$1;
(statearr_27734_27763[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (9))){
var inst_27696 = (state_27708[(2)]);
var inst_27697 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27708__$1 = (function (){var statearr_27735 = state_27708;
(statearr_27735[(15)] = inst_27696);

return statearr_27735;
})();
if(cljs.core.truth_(inst_27697)){
var statearr_27736_27764 = state_27708__$1;
(statearr_27736_27764[(1)] = (21));

} else {
var statearr_27737_27765 = state_27708__$1;
(statearr_27737_27765[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (5))){
var inst_27652 = cljs.core.async.close_BANG_.call(null,out);
var state_27708__$1 = state_27708;
var statearr_27738_27766 = state_27708__$1;
(statearr_27738_27766[(2)] = inst_27652);

(statearr_27738_27766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (14))){
var inst_27674 = (state_27708[(7)]);
var inst_27676 = cljs.core.chunked_seq_QMARK_.call(null,inst_27674);
var state_27708__$1 = state_27708;
if(inst_27676){
var statearr_27739_27767 = state_27708__$1;
(statearr_27739_27767[(1)] = (17));

} else {
var statearr_27740_27768 = state_27708__$1;
(statearr_27740_27768[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (16))){
var inst_27692 = (state_27708[(2)]);
var state_27708__$1 = state_27708;
var statearr_27741_27769 = state_27708__$1;
(statearr_27741_27769[(2)] = inst_27692);

(statearr_27741_27769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27709 === (10))){
var inst_27663 = (state_27708[(8)]);
var inst_27661 = (state_27708[(10)]);
var inst_27668 = cljs.core._nth.call(null,inst_27661,inst_27663);
var state_27708__$1 = state_27708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27708__$1,(13),out,inst_27668);
} else {
if((state_val_27709 === (18))){
var inst_27674 = (state_27708[(7)]);
var inst_27683 = cljs.core.first.call(null,inst_27674);
var state_27708__$1 = state_27708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27708__$1,(20),out,inst_27683);
} else {
if((state_val_27709 === (8))){
var inst_27663 = (state_27708[(8)]);
var inst_27662 = (state_27708[(9)]);
var inst_27665 = (inst_27663 < inst_27662);
var inst_27666 = inst_27665;
var state_27708__$1 = state_27708;
if(cljs.core.truth_(inst_27666)){
var statearr_27742_27770 = state_27708__$1;
(statearr_27742_27770[(1)] = (10));

} else {
var statearr_27743_27771 = state_27708__$1;
(statearr_27743_27771[(1)] = (11));

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
});})(c__26092__auto__))
;
return ((function (switch__25997__auto__,c__26092__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25998__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25998__auto____0 = (function (){
var statearr_27744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27744[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25998__auto__);

(statearr_27744[(1)] = (1));

return statearr_27744;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25998__auto____1 = (function (state_27708){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_27708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e27745){if((e27745 instanceof Object)){
var ex__26001__auto__ = e27745;
var statearr_27746_27772 = state_27708;
(statearr_27746_27772[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27773 = state_27708;
state_27708 = G__27773;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25998__auto__ = function(state_27708){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25998__auto____1.call(this,state_27708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25998__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25998__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto__))
})();
var state__26094__auto__ = (function (){var statearr_27747 = f__26093__auto__.call(null);
(statearr_27747[(6)] = c__26092__auto__);

return statearr_27747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto__))
);

return c__26092__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27775 = arguments.length;
switch (G__27775) {
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
var G__27778 = arguments.length;
switch (G__27778) {
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
var G__27781 = arguments.length;
switch (G__27781) {
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
var c__26092__auto___27828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___27828,out){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___27828,out){
return (function (state_27805){
var state_val_27806 = (state_27805[(1)]);
if((state_val_27806 === (7))){
var inst_27800 = (state_27805[(2)]);
var state_27805__$1 = state_27805;
var statearr_27807_27829 = state_27805__$1;
(statearr_27807_27829[(2)] = inst_27800);

(statearr_27807_27829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (1))){
var inst_27782 = null;
var state_27805__$1 = (function (){var statearr_27808 = state_27805;
(statearr_27808[(7)] = inst_27782);

return statearr_27808;
})();
var statearr_27809_27830 = state_27805__$1;
(statearr_27809_27830[(2)] = null);

(statearr_27809_27830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (4))){
var inst_27785 = (state_27805[(8)]);
var inst_27785__$1 = (state_27805[(2)]);
var inst_27786 = (inst_27785__$1 == null);
var inst_27787 = cljs.core.not.call(null,inst_27786);
var state_27805__$1 = (function (){var statearr_27810 = state_27805;
(statearr_27810[(8)] = inst_27785__$1);

return statearr_27810;
})();
if(inst_27787){
var statearr_27811_27831 = state_27805__$1;
(statearr_27811_27831[(1)] = (5));

} else {
var statearr_27812_27832 = state_27805__$1;
(statearr_27812_27832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (6))){
var state_27805__$1 = state_27805;
var statearr_27813_27833 = state_27805__$1;
(statearr_27813_27833[(2)] = null);

(statearr_27813_27833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (3))){
var inst_27802 = (state_27805[(2)]);
var inst_27803 = cljs.core.async.close_BANG_.call(null,out);
var state_27805__$1 = (function (){var statearr_27814 = state_27805;
(statearr_27814[(9)] = inst_27802);

return statearr_27814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27805__$1,inst_27803);
} else {
if((state_val_27806 === (2))){
var state_27805__$1 = state_27805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27805__$1,(4),ch);
} else {
if((state_val_27806 === (11))){
var inst_27785 = (state_27805[(8)]);
var inst_27794 = (state_27805[(2)]);
var inst_27782 = inst_27785;
var state_27805__$1 = (function (){var statearr_27815 = state_27805;
(statearr_27815[(10)] = inst_27794);

(statearr_27815[(7)] = inst_27782);

return statearr_27815;
})();
var statearr_27816_27834 = state_27805__$1;
(statearr_27816_27834[(2)] = null);

(statearr_27816_27834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (9))){
var inst_27785 = (state_27805[(8)]);
var state_27805__$1 = state_27805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27805__$1,(11),out,inst_27785);
} else {
if((state_val_27806 === (5))){
var inst_27785 = (state_27805[(8)]);
var inst_27782 = (state_27805[(7)]);
var inst_27789 = cljs.core._EQ_.call(null,inst_27785,inst_27782);
var state_27805__$1 = state_27805;
if(inst_27789){
var statearr_27818_27835 = state_27805__$1;
(statearr_27818_27835[(1)] = (8));

} else {
var statearr_27819_27836 = state_27805__$1;
(statearr_27819_27836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (10))){
var inst_27797 = (state_27805[(2)]);
var state_27805__$1 = state_27805;
var statearr_27820_27837 = state_27805__$1;
(statearr_27820_27837[(2)] = inst_27797);

(statearr_27820_27837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27806 === (8))){
var inst_27782 = (state_27805[(7)]);
var tmp27817 = inst_27782;
var inst_27782__$1 = tmp27817;
var state_27805__$1 = (function (){var statearr_27821 = state_27805;
(statearr_27821[(7)] = inst_27782__$1);

return statearr_27821;
})();
var statearr_27822_27838 = state_27805__$1;
(statearr_27822_27838[(2)] = null);

(statearr_27822_27838[(1)] = (2));


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
});})(c__26092__auto___27828,out))
;
return ((function (switch__25997__auto__,c__26092__auto___27828,out){
return (function() {
var cljs$core$async$state_machine__25998__auto__ = null;
var cljs$core$async$state_machine__25998__auto____0 = (function (){
var statearr_27823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27823[(0)] = cljs$core$async$state_machine__25998__auto__);

(statearr_27823[(1)] = (1));

return statearr_27823;
});
var cljs$core$async$state_machine__25998__auto____1 = (function (state_27805){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_27805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e27824){if((e27824 instanceof Object)){
var ex__26001__auto__ = e27824;
var statearr_27825_27839 = state_27805;
(statearr_27825_27839[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27840 = state_27805;
state_27805 = G__27840;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$state_machine__25998__auto__ = function(state_27805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25998__auto____1.call(this,state_27805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25998__auto____0;
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25998__auto____1;
return cljs$core$async$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___27828,out))
})();
var state__26094__auto__ = (function (){var statearr_27826 = f__26093__auto__.call(null);
(statearr_27826[(6)] = c__26092__auto___27828);

return statearr_27826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___27828,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27842 = arguments.length;
switch (G__27842) {
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
var c__26092__auto___27908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___27908,out){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___27908,out){
return (function (state_27880){
var state_val_27881 = (state_27880[(1)]);
if((state_val_27881 === (7))){
var inst_27876 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27882_27909 = state_27880__$1;
(statearr_27882_27909[(2)] = inst_27876);

(statearr_27882_27909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (1))){
var inst_27843 = (new Array(n));
var inst_27844 = inst_27843;
var inst_27845 = (0);
var state_27880__$1 = (function (){var statearr_27883 = state_27880;
(statearr_27883[(7)] = inst_27844);

(statearr_27883[(8)] = inst_27845);

return statearr_27883;
})();
var statearr_27884_27910 = state_27880__$1;
(statearr_27884_27910[(2)] = null);

(statearr_27884_27910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (4))){
var inst_27848 = (state_27880[(9)]);
var inst_27848__$1 = (state_27880[(2)]);
var inst_27849 = (inst_27848__$1 == null);
var inst_27850 = cljs.core.not.call(null,inst_27849);
var state_27880__$1 = (function (){var statearr_27885 = state_27880;
(statearr_27885[(9)] = inst_27848__$1);

return statearr_27885;
})();
if(inst_27850){
var statearr_27886_27911 = state_27880__$1;
(statearr_27886_27911[(1)] = (5));

} else {
var statearr_27887_27912 = state_27880__$1;
(statearr_27887_27912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (15))){
var inst_27870 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27888_27913 = state_27880__$1;
(statearr_27888_27913[(2)] = inst_27870);

(statearr_27888_27913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (13))){
var state_27880__$1 = state_27880;
var statearr_27889_27914 = state_27880__$1;
(statearr_27889_27914[(2)] = null);

(statearr_27889_27914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (6))){
var inst_27845 = (state_27880[(8)]);
var inst_27866 = (inst_27845 > (0));
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27866)){
var statearr_27890_27915 = state_27880__$1;
(statearr_27890_27915[(1)] = (12));

} else {
var statearr_27891_27916 = state_27880__$1;
(statearr_27891_27916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (3))){
var inst_27878 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27880__$1,inst_27878);
} else {
if((state_val_27881 === (12))){
var inst_27844 = (state_27880[(7)]);
var inst_27868 = cljs.core.vec.call(null,inst_27844);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27880__$1,(15),out,inst_27868);
} else {
if((state_val_27881 === (2))){
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27880__$1,(4),ch);
} else {
if((state_val_27881 === (11))){
var inst_27860 = (state_27880[(2)]);
var inst_27861 = (new Array(n));
var inst_27844 = inst_27861;
var inst_27845 = (0);
var state_27880__$1 = (function (){var statearr_27892 = state_27880;
(statearr_27892[(10)] = inst_27860);

(statearr_27892[(7)] = inst_27844);

(statearr_27892[(8)] = inst_27845);

return statearr_27892;
})();
var statearr_27893_27917 = state_27880__$1;
(statearr_27893_27917[(2)] = null);

(statearr_27893_27917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (9))){
var inst_27844 = (state_27880[(7)]);
var inst_27858 = cljs.core.vec.call(null,inst_27844);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27880__$1,(11),out,inst_27858);
} else {
if((state_val_27881 === (5))){
var inst_27844 = (state_27880[(7)]);
var inst_27848 = (state_27880[(9)]);
var inst_27853 = (state_27880[(11)]);
var inst_27845 = (state_27880[(8)]);
var inst_27852 = (inst_27844[inst_27845] = inst_27848);
var inst_27853__$1 = (inst_27845 + (1));
var inst_27854 = (inst_27853__$1 < n);
var state_27880__$1 = (function (){var statearr_27894 = state_27880;
(statearr_27894[(12)] = inst_27852);

(statearr_27894[(11)] = inst_27853__$1);

return statearr_27894;
})();
if(cljs.core.truth_(inst_27854)){
var statearr_27895_27918 = state_27880__$1;
(statearr_27895_27918[(1)] = (8));

} else {
var statearr_27896_27919 = state_27880__$1;
(statearr_27896_27919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (14))){
var inst_27873 = (state_27880[(2)]);
var inst_27874 = cljs.core.async.close_BANG_.call(null,out);
var state_27880__$1 = (function (){var statearr_27898 = state_27880;
(statearr_27898[(13)] = inst_27873);

return statearr_27898;
})();
var statearr_27899_27920 = state_27880__$1;
(statearr_27899_27920[(2)] = inst_27874);

(statearr_27899_27920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (10))){
var inst_27864 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27900_27921 = state_27880__$1;
(statearr_27900_27921[(2)] = inst_27864);

(statearr_27900_27921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (8))){
var inst_27844 = (state_27880[(7)]);
var inst_27853 = (state_27880[(11)]);
var tmp27897 = inst_27844;
var inst_27844__$1 = tmp27897;
var inst_27845 = inst_27853;
var state_27880__$1 = (function (){var statearr_27901 = state_27880;
(statearr_27901[(7)] = inst_27844__$1);

(statearr_27901[(8)] = inst_27845);

return statearr_27901;
})();
var statearr_27902_27922 = state_27880__$1;
(statearr_27902_27922[(2)] = null);

(statearr_27902_27922[(1)] = (2));


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
});})(c__26092__auto___27908,out))
;
return ((function (switch__25997__auto__,c__26092__auto___27908,out){
return (function() {
var cljs$core$async$state_machine__25998__auto__ = null;
var cljs$core$async$state_machine__25998__auto____0 = (function (){
var statearr_27903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27903[(0)] = cljs$core$async$state_machine__25998__auto__);

(statearr_27903[(1)] = (1));

return statearr_27903;
});
var cljs$core$async$state_machine__25998__auto____1 = (function (state_27880){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_27880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e27904){if((e27904 instanceof Object)){
var ex__26001__auto__ = e27904;
var statearr_27905_27923 = state_27880;
(statearr_27905_27923[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27924 = state_27880;
state_27880 = G__27924;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$state_machine__25998__auto__ = function(state_27880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25998__auto____1.call(this,state_27880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25998__auto____0;
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25998__auto____1;
return cljs$core$async$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___27908,out))
})();
var state__26094__auto__ = (function (){var statearr_27906 = f__26093__auto__.call(null);
(statearr_27906[(6)] = c__26092__auto___27908);

return statearr_27906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___27908,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27926 = arguments.length;
switch (G__27926) {
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
var c__26092__auto___27996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___27996,out){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___27996,out){
return (function (state_27968){
var state_val_27969 = (state_27968[(1)]);
if((state_val_27969 === (7))){
var inst_27964 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_27970_27997 = state_27968__$1;
(statearr_27970_27997[(2)] = inst_27964);

(statearr_27970_27997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (1))){
var inst_27927 = [];
var inst_27928 = inst_27927;
var inst_27929 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27968__$1 = (function (){var statearr_27971 = state_27968;
(statearr_27971[(7)] = inst_27929);

(statearr_27971[(8)] = inst_27928);

return statearr_27971;
})();
var statearr_27972_27998 = state_27968__$1;
(statearr_27972_27998[(2)] = null);

(statearr_27972_27998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (4))){
var inst_27932 = (state_27968[(9)]);
var inst_27932__$1 = (state_27968[(2)]);
var inst_27933 = (inst_27932__$1 == null);
var inst_27934 = cljs.core.not.call(null,inst_27933);
var state_27968__$1 = (function (){var statearr_27973 = state_27968;
(statearr_27973[(9)] = inst_27932__$1);

return statearr_27973;
})();
if(inst_27934){
var statearr_27974_27999 = state_27968__$1;
(statearr_27974_27999[(1)] = (5));

} else {
var statearr_27975_28000 = state_27968__$1;
(statearr_27975_28000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (15))){
var inst_27958 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_27976_28001 = state_27968__$1;
(statearr_27976_28001[(2)] = inst_27958);

(statearr_27976_28001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (13))){
var state_27968__$1 = state_27968;
var statearr_27977_28002 = state_27968__$1;
(statearr_27977_28002[(2)] = null);

(statearr_27977_28002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (6))){
var inst_27928 = (state_27968[(8)]);
var inst_27953 = inst_27928.length;
var inst_27954 = (inst_27953 > (0));
var state_27968__$1 = state_27968;
if(cljs.core.truth_(inst_27954)){
var statearr_27978_28003 = state_27968__$1;
(statearr_27978_28003[(1)] = (12));

} else {
var statearr_27979_28004 = state_27968__$1;
(statearr_27979_28004[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (3))){
var inst_27966 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27968__$1,inst_27966);
} else {
if((state_val_27969 === (12))){
var inst_27928 = (state_27968[(8)]);
var inst_27956 = cljs.core.vec.call(null,inst_27928);
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27968__$1,(15),out,inst_27956);
} else {
if((state_val_27969 === (2))){
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27968__$1,(4),ch);
} else {
if((state_val_27969 === (11))){
var inst_27932 = (state_27968[(9)]);
var inst_27936 = (state_27968[(10)]);
var inst_27946 = (state_27968[(2)]);
var inst_27947 = [];
var inst_27948 = inst_27947.push(inst_27932);
var inst_27928 = inst_27947;
var inst_27929 = inst_27936;
var state_27968__$1 = (function (){var statearr_27980 = state_27968;
(statearr_27980[(7)] = inst_27929);

(statearr_27980[(8)] = inst_27928);

(statearr_27980[(11)] = inst_27948);

(statearr_27980[(12)] = inst_27946);

return statearr_27980;
})();
var statearr_27981_28005 = state_27968__$1;
(statearr_27981_28005[(2)] = null);

(statearr_27981_28005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (9))){
var inst_27928 = (state_27968[(8)]);
var inst_27944 = cljs.core.vec.call(null,inst_27928);
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27968__$1,(11),out,inst_27944);
} else {
if((state_val_27969 === (5))){
var inst_27929 = (state_27968[(7)]);
var inst_27932 = (state_27968[(9)]);
var inst_27936 = (state_27968[(10)]);
var inst_27936__$1 = f.call(null,inst_27932);
var inst_27937 = cljs.core._EQ_.call(null,inst_27936__$1,inst_27929);
var inst_27938 = cljs.core.keyword_identical_QMARK_.call(null,inst_27929,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27939 = ((inst_27937) || (inst_27938));
var state_27968__$1 = (function (){var statearr_27982 = state_27968;
(statearr_27982[(10)] = inst_27936__$1);

return statearr_27982;
})();
if(cljs.core.truth_(inst_27939)){
var statearr_27983_28006 = state_27968__$1;
(statearr_27983_28006[(1)] = (8));

} else {
var statearr_27984_28007 = state_27968__$1;
(statearr_27984_28007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (14))){
var inst_27961 = (state_27968[(2)]);
var inst_27962 = cljs.core.async.close_BANG_.call(null,out);
var state_27968__$1 = (function (){var statearr_27986 = state_27968;
(statearr_27986[(13)] = inst_27961);

return statearr_27986;
})();
var statearr_27987_28008 = state_27968__$1;
(statearr_27987_28008[(2)] = inst_27962);

(statearr_27987_28008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (10))){
var inst_27951 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_27988_28009 = state_27968__$1;
(statearr_27988_28009[(2)] = inst_27951);

(statearr_27988_28009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (8))){
var inst_27932 = (state_27968[(9)]);
var inst_27928 = (state_27968[(8)]);
var inst_27936 = (state_27968[(10)]);
var inst_27941 = inst_27928.push(inst_27932);
var tmp27985 = inst_27928;
var inst_27928__$1 = tmp27985;
var inst_27929 = inst_27936;
var state_27968__$1 = (function (){var statearr_27989 = state_27968;
(statearr_27989[(7)] = inst_27929);

(statearr_27989[(8)] = inst_27928__$1);

(statearr_27989[(14)] = inst_27941);

return statearr_27989;
})();
var statearr_27990_28010 = state_27968__$1;
(statearr_27990_28010[(2)] = null);

(statearr_27990_28010[(1)] = (2));


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
});})(c__26092__auto___27996,out))
;
return ((function (switch__25997__auto__,c__26092__auto___27996,out){
return (function() {
var cljs$core$async$state_machine__25998__auto__ = null;
var cljs$core$async$state_machine__25998__auto____0 = (function (){
var statearr_27991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27991[(0)] = cljs$core$async$state_machine__25998__auto__);

(statearr_27991[(1)] = (1));

return statearr_27991;
});
var cljs$core$async$state_machine__25998__auto____1 = (function (state_27968){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_27968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e27992){if((e27992 instanceof Object)){
var ex__26001__auto__ = e27992;
var statearr_27993_28011 = state_27968;
(statearr_27993_28011[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28012 = state_27968;
state_27968 = G__28012;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
cljs$core$async$state_machine__25998__auto__ = function(state_27968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25998__auto____1.call(this,state_27968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25998__auto____0;
cljs$core$async$state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25998__auto____1;
return cljs$core$async$state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___27996,out))
})();
var state__26094__auto__ = (function (){var statearr_27994 = f__26093__auto__.call(null);
(statearr_27994[(6)] = c__26092__auto___27996);

return statearr_27994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___27996,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545934928937
