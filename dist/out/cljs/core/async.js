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
if(typeof cljs.core.async.t_cljs$core$async31381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31381 = (function (fn_handler,f,meta31382){
this.fn_handler = fn_handler;
this.f = f;
this.meta31382 = meta31382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31383,meta31382__$1){
var self__ = this;
var _31383__$1 = this;
return (new cljs.core.async.t_cljs$core$async31381(self__.fn_handler,self__.f,meta31382__$1));
});

cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31383){
var self__ = this;
var _31383__$1 = this;
return self__.meta31382;
});

cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta31382","meta31382",1197502953,null)], null);
});

cljs.core.async.t_cljs$core$async31381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31381";

cljs.core.async.t_cljs$core$async31381.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async31381");
});

cljs.core.async.__GT_t_cljs$core$async31381 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async31381(fn_handler__$1,f__$1,meta31382){
return (new cljs.core.async.t_cljs$core$async31381(fn_handler__$1,f__$1,meta31382));
});

}

return (new cljs.core.async.t_cljs$core$async31381(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args31386 = [];
var len__17416__auto___31389 = arguments.length;
var i__17417__auto___31390 = (0);
while(true){
if((i__17417__auto___31390 < len__17416__auto___31389)){
args31386.push((arguments[i__17417__auto___31390]));

var G__31391 = (i__17417__auto___31390 + (1));
i__17417__auto___31390 = G__31391;
continue;
} else {
}
break;
}

var G__31388 = args31386.length;
switch (G__31388) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31386.length)].join('')));

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
var args31393 = [];
var len__17416__auto___31396 = arguments.length;
var i__17417__auto___31397 = (0);
while(true){
if((i__17417__auto___31397 < len__17416__auto___31396)){
args31393.push((arguments[i__17417__auto___31397]));

var G__31398 = (i__17417__auto___31397 + (1));
i__17417__auto___31397 = G__31398;
continue;
} else {
}
break;
}

var G__31395 = args31393.length;
switch (G__31395) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31393.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31400 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31400);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31400,ret){
return (function (){
return fn1.call(null,val_31400);
});})(val_31400,ret))
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
var args31401 = [];
var len__17416__auto___31404 = arguments.length;
var i__17417__auto___31405 = (0);
while(true){
if((i__17417__auto___31405 < len__17416__auto___31404)){
args31401.push((arguments[i__17417__auto___31405]));

var G__31406 = (i__17417__auto___31405 + (1));
i__17417__auto___31405 = G__31406;
continue;
} else {
}
break;
}

var G__31403 = args31401.length;
switch (G__31403) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31401.length)].join('')));

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
var n__17261__auto___31408 = n;
var x_31409 = (0);
while(true){
if((x_31409 < n__17261__auto___31408)){
(a[x_31409] = (0));

var G__31410 = (x_31409 + (1));
x_31409 = G__31410;
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

var G__31411 = (i + (1));
i = G__31411;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31415 = (function (alt_flag,flag,meta31416){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31416 = meta31416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31417,meta31416__$1){
var self__ = this;
var _31417__$1 = this;
return (new cljs.core.async.t_cljs$core$async31415(self__.alt_flag,self__.flag,meta31416__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31417){
var self__ = this;
var _31417__$1 = this;
return self__.meta31416;
});})(flag))
;

cljs.core.async.t_cljs$core$async31415.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31415.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31416","meta31416",-1240701518,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31415";

cljs.core.async.t_cljs$core$async31415.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async31415");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31415 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31415(alt_flag__$1,flag__$1,meta31416){
return (new cljs.core.async.t_cljs$core$async31415(alt_flag__$1,flag__$1,meta31416));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31415(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31421 = (function (alt_handler,flag,cb,meta31422){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31422 = meta31422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31423,meta31422__$1){
var self__ = this;
var _31423__$1 = this;
return (new cljs.core.async.t_cljs$core$async31421(self__.alt_handler,self__.flag,self__.cb,meta31422__$1));
});

cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31423){
var self__ = this;
var _31423__$1 = this;
return self__.meta31422;
});

cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31422","meta31422",787320076,null)], null);
});

cljs.core.async.t_cljs$core$async31421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31421";

cljs.core.async.t_cljs$core$async31421.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async31421");
});

cljs.core.async.__GT_t_cljs$core$async31421 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31421(alt_handler__$1,flag__$1,cb__$1,meta31422){
return (new cljs.core.async.t_cljs$core$async31421(alt_handler__$1,flag__$1,cb__$1,meta31422));
});

}

return (new cljs.core.async.t_cljs$core$async31421(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31424_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31424_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31425_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31425_SHARP_,port], null));
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
var G__31426 = (i + (1));
i = G__31426;
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
var len__17416__auto___31432 = arguments.length;
var i__17417__auto___31433 = (0);
while(true){
if((i__17417__auto___31433 < len__17416__auto___31432)){
args__17423__auto__.push((arguments[i__17417__auto___31433]));

var G__31434 = (i__17417__auto___31433 + (1));
i__17417__auto___31433 = G__31434;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31429){
var map__31430 = p__31429;
var map__31430__$1 = ((((!((map__31430 == null)))?((((map__31430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31430):map__31430);
var opts = map__31430__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31427){
var G__31428 = cljs.core.first.call(null,seq31427);
var seq31427__$1 = cljs.core.next.call(null,seq31427);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31428,seq31427__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args31435 = [];
var len__17416__auto___31485 = arguments.length;
var i__17417__auto___31486 = (0);
while(true){
if((i__17417__auto___31486 < len__17416__auto___31485)){
args31435.push((arguments[i__17417__auto___31486]));

var G__31487 = (i__17417__auto___31486 + (1));
i__17417__auto___31486 = G__31487;
continue;
} else {
}
break;
}

var G__31437 = args31435.length;
switch (G__31437) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31435.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19438__auto___31489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___31489){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___31489){
return (function (state_31461){
var state_val_31462 = (state_31461[(1)]);
if((state_val_31462 === (7))){
var inst_31457 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31463_31490 = state_31461__$1;
(statearr_31463_31490[(2)] = inst_31457);

(statearr_31463_31490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (1))){
var state_31461__$1 = state_31461;
var statearr_31464_31491 = state_31461__$1;
(statearr_31464_31491[(2)] = null);

(statearr_31464_31491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (4))){
var inst_31440 = (state_31461[(7)]);
var inst_31440__$1 = (state_31461[(2)]);
var inst_31441 = (inst_31440__$1 == null);
var state_31461__$1 = (function (){var statearr_31465 = state_31461;
(statearr_31465[(7)] = inst_31440__$1);

return statearr_31465;
})();
if(cljs.core.truth_(inst_31441)){
var statearr_31466_31492 = state_31461__$1;
(statearr_31466_31492[(1)] = (5));

} else {
var statearr_31467_31493 = state_31461__$1;
(statearr_31467_31493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (13))){
var state_31461__$1 = state_31461;
var statearr_31468_31494 = state_31461__$1;
(statearr_31468_31494[(2)] = null);

(statearr_31468_31494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (6))){
var inst_31440 = (state_31461[(7)]);
var state_31461__$1 = state_31461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31461__$1,(11),to,inst_31440);
} else {
if((state_val_31462 === (3))){
var inst_31459 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31461__$1,inst_31459);
} else {
if((state_val_31462 === (12))){
var state_31461__$1 = state_31461;
var statearr_31469_31495 = state_31461__$1;
(statearr_31469_31495[(2)] = null);

(statearr_31469_31495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (2))){
var state_31461__$1 = state_31461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31461__$1,(4),from);
} else {
if((state_val_31462 === (11))){
var inst_31450 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
if(cljs.core.truth_(inst_31450)){
var statearr_31470_31496 = state_31461__$1;
(statearr_31470_31496[(1)] = (12));

} else {
var statearr_31471_31497 = state_31461__$1;
(statearr_31471_31497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (9))){
var state_31461__$1 = state_31461;
var statearr_31472_31498 = state_31461__$1;
(statearr_31472_31498[(2)] = null);

(statearr_31472_31498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (5))){
var state_31461__$1 = state_31461;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31473_31499 = state_31461__$1;
(statearr_31473_31499[(1)] = (8));

} else {
var statearr_31474_31500 = state_31461__$1;
(statearr_31474_31500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (14))){
var inst_31455 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31475_31501 = state_31461__$1;
(statearr_31475_31501[(2)] = inst_31455);

(statearr_31475_31501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (10))){
var inst_31447 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31476_31502 = state_31461__$1;
(statearr_31476_31502[(2)] = inst_31447);

(statearr_31476_31502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (8))){
var inst_31444 = cljs.core.async.close_BANG_.call(null,to);
var state_31461__$1 = state_31461;
var statearr_31477_31503 = state_31461__$1;
(statearr_31477_31503[(2)] = inst_31444);

(statearr_31477_31503[(1)] = (10));


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
});})(c__19438__auto___31489))
;
return ((function (switch__19373__auto__,c__19438__auto___31489){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_31481 = [null,null,null,null,null,null,null,null];
(statearr_31481[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_31481[(1)] = (1));

return statearr_31481;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_31461){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_31461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e31482){if((e31482 instanceof Object)){
var ex__19377__auto__ = e31482;
var statearr_31483_31504 = state_31461;
(statearr_31483_31504[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31505 = state_31461;
state_31461 = G__31505;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_31461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_31461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___31489))
})();
var state__19440__auto__ = (function (){var statearr_31484 = f__19439__auto__.call(null);
(statearr_31484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___31489);

return statearr_31484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___31489))
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
return (function (p__31689){
var vec__31690 = p__31689;
var v = cljs.core.nth.call(null,vec__31690,(0),null);
var p = cljs.core.nth.call(null,vec__31690,(1),null);
var job = vec__31690;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19438__auto___31872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___31872,res,vec__31690,v,p,job,jobs,results){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___31872,res,vec__31690,v,p,job,jobs,results){
return (function (state_31695){
var state_val_31696 = (state_31695[(1)]);
if((state_val_31696 === (1))){
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31695__$1,(2),res,v);
} else {
if((state_val_31696 === (2))){
var inst_31692 = (state_31695[(2)]);
var inst_31693 = cljs.core.async.close_BANG_.call(null,res);
var state_31695__$1 = (function (){var statearr_31697 = state_31695;
(statearr_31697[(7)] = inst_31692);

return statearr_31697;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31695__$1,inst_31693);
} else {
return null;
}
}
});})(c__19438__auto___31872,res,vec__31690,v,p,job,jobs,results))
;
return ((function (switch__19373__auto__,c__19438__auto___31872,res,vec__31690,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_31701 = [null,null,null,null,null,null,null,null];
(statearr_31701[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_31701[(1)] = (1));

return statearr_31701;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_31695){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_31695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e31702){if((e31702 instanceof Object)){
var ex__19377__auto__ = e31702;
var statearr_31703_31873 = state_31695;
(statearr_31703_31873[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31874 = state_31695;
state_31695 = G__31874;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_31695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_31695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___31872,res,vec__31690,v,p,job,jobs,results))
})();
var state__19440__auto__ = (function (){var statearr_31704 = f__19439__auto__.call(null);
(statearr_31704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___31872);

return statearr_31704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___31872,res,vec__31690,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31705){
var vec__31706 = p__31705;
var v = cljs.core.nth.call(null,vec__31706,(0),null);
var p = cljs.core.nth.call(null,vec__31706,(1),null);
var job = vec__31706;
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
var n__17261__auto___31875 = n;
var __31876 = (0);
while(true){
if((__31876 < n__17261__auto___31875)){
var G__31707_31877 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31707_31877) {
case "compute":
var c__19438__auto___31879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31876,c__19438__auto___31879,G__31707_31877,n__17261__auto___31875,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (__31876,c__19438__auto___31879,G__31707_31877,n__17261__auto___31875,jobs,results,process,async){
return (function (state_31720){
var state_val_31721 = (state_31720[(1)]);
if((state_val_31721 === (1))){
var state_31720__$1 = state_31720;
var statearr_31722_31880 = state_31720__$1;
(statearr_31722_31880[(2)] = null);

(statearr_31722_31880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (2))){
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31720__$1,(4),jobs);
} else {
if((state_val_31721 === (3))){
var inst_31718 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31720__$1,inst_31718);
} else {
if((state_val_31721 === (4))){
var inst_31710 = (state_31720[(2)]);
var inst_31711 = process.call(null,inst_31710);
var state_31720__$1 = state_31720;
if(cljs.core.truth_(inst_31711)){
var statearr_31723_31881 = state_31720__$1;
(statearr_31723_31881[(1)] = (5));

} else {
var statearr_31724_31882 = state_31720__$1;
(statearr_31724_31882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (5))){
var state_31720__$1 = state_31720;
var statearr_31725_31883 = state_31720__$1;
(statearr_31725_31883[(2)] = null);

(statearr_31725_31883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (6))){
var state_31720__$1 = state_31720;
var statearr_31726_31884 = state_31720__$1;
(statearr_31726_31884[(2)] = null);

(statearr_31726_31884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (7))){
var inst_31716 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
var statearr_31727_31885 = state_31720__$1;
(statearr_31727_31885[(2)] = inst_31716);

(statearr_31727_31885[(1)] = (3));


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
});})(__31876,c__19438__auto___31879,G__31707_31877,n__17261__auto___31875,jobs,results,process,async))
;
return ((function (__31876,switch__19373__auto__,c__19438__auto___31879,G__31707_31877,n__17261__auto___31875,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_31731 = [null,null,null,null,null,null,null];
(statearr_31731[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_31731[(1)] = (1));

return statearr_31731;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_31720){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_31720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e31732){if((e31732 instanceof Object)){
var ex__19377__auto__ = e31732;
var statearr_31733_31886 = state_31720;
(statearr_31733_31886[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31887 = state_31720;
state_31720 = G__31887;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_31720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_31720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(__31876,switch__19373__auto__,c__19438__auto___31879,G__31707_31877,n__17261__auto___31875,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_31734 = f__19439__auto__.call(null);
(statearr_31734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___31879);

return statearr_31734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(__31876,c__19438__auto___31879,G__31707_31877,n__17261__auto___31875,jobs,results,process,async))
);


break;
case "async":
var c__19438__auto___31888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31876,c__19438__auto___31888,G__31707_31877,n__17261__auto___31875,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (__31876,c__19438__auto___31888,G__31707_31877,n__17261__auto___31875,jobs,results,process,async){
return (function (state_31747){
var state_val_31748 = (state_31747[(1)]);
if((state_val_31748 === (1))){
var state_31747__$1 = state_31747;
var statearr_31749_31889 = state_31747__$1;
(statearr_31749_31889[(2)] = null);

(statearr_31749_31889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (2))){
var state_31747__$1 = state_31747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31747__$1,(4),jobs);
} else {
if((state_val_31748 === (3))){
var inst_31745 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31747__$1,inst_31745);
} else {
if((state_val_31748 === (4))){
var inst_31737 = (state_31747[(2)]);
var inst_31738 = async.call(null,inst_31737);
var state_31747__$1 = state_31747;
if(cljs.core.truth_(inst_31738)){
var statearr_31750_31890 = state_31747__$1;
(statearr_31750_31890[(1)] = (5));

} else {
var statearr_31751_31891 = state_31747__$1;
(statearr_31751_31891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (5))){
var state_31747__$1 = state_31747;
var statearr_31752_31892 = state_31747__$1;
(statearr_31752_31892[(2)] = null);

(statearr_31752_31892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (6))){
var state_31747__$1 = state_31747;
var statearr_31753_31893 = state_31747__$1;
(statearr_31753_31893[(2)] = null);

(statearr_31753_31893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (7))){
var inst_31743 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
var statearr_31754_31894 = state_31747__$1;
(statearr_31754_31894[(2)] = inst_31743);

(statearr_31754_31894[(1)] = (3));


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
});})(__31876,c__19438__auto___31888,G__31707_31877,n__17261__auto___31875,jobs,results,process,async))
;
return ((function (__31876,switch__19373__auto__,c__19438__auto___31888,G__31707_31877,n__17261__auto___31875,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_31758 = [null,null,null,null,null,null,null];
(statearr_31758[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_31758[(1)] = (1));

return statearr_31758;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_31747){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_31747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e31759){if((e31759 instanceof Object)){
var ex__19377__auto__ = e31759;
var statearr_31760_31895 = state_31747;
(statearr_31760_31895[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31896 = state_31747;
state_31747 = G__31896;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_31747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_31747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(__31876,switch__19373__auto__,c__19438__auto___31888,G__31707_31877,n__17261__auto___31875,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_31761 = f__19439__auto__.call(null);
(statearr_31761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___31888);

return statearr_31761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(__31876,c__19438__auto___31888,G__31707_31877,n__17261__auto___31875,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31897 = (__31876 + (1));
__31876 = G__31897;
continue;
} else {
}
break;
}

var c__19438__auto___31898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___31898,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___31898,jobs,results,process,async){
return (function (state_31783){
var state_val_31784 = (state_31783[(1)]);
if((state_val_31784 === (1))){
var state_31783__$1 = state_31783;
var statearr_31785_31899 = state_31783__$1;
(statearr_31785_31899[(2)] = null);

(statearr_31785_31899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (2))){
var state_31783__$1 = state_31783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31783__$1,(4),from);
} else {
if((state_val_31784 === (3))){
var inst_31781 = (state_31783[(2)]);
var state_31783__$1 = state_31783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31783__$1,inst_31781);
} else {
if((state_val_31784 === (4))){
var inst_31764 = (state_31783[(7)]);
var inst_31764__$1 = (state_31783[(2)]);
var inst_31765 = (inst_31764__$1 == null);
var state_31783__$1 = (function (){var statearr_31786 = state_31783;
(statearr_31786[(7)] = inst_31764__$1);

return statearr_31786;
})();
if(cljs.core.truth_(inst_31765)){
var statearr_31787_31900 = state_31783__$1;
(statearr_31787_31900[(1)] = (5));

} else {
var statearr_31788_31901 = state_31783__$1;
(statearr_31788_31901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (5))){
var inst_31767 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31783__$1 = state_31783;
var statearr_31789_31902 = state_31783__$1;
(statearr_31789_31902[(2)] = inst_31767);

(statearr_31789_31902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (6))){
var inst_31764 = (state_31783[(7)]);
var inst_31769 = (state_31783[(8)]);
var inst_31769__$1 = cljs.core.async.chan.call(null,(1));
var inst_31770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31771 = [inst_31764,inst_31769__$1];
var inst_31772 = (new cljs.core.PersistentVector(null,2,(5),inst_31770,inst_31771,null));
var state_31783__$1 = (function (){var statearr_31790 = state_31783;
(statearr_31790[(8)] = inst_31769__$1);

return statearr_31790;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31783__$1,(8),jobs,inst_31772);
} else {
if((state_val_31784 === (7))){
var inst_31779 = (state_31783[(2)]);
var state_31783__$1 = state_31783;
var statearr_31791_31903 = state_31783__$1;
(statearr_31791_31903[(2)] = inst_31779);

(statearr_31791_31903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (8))){
var inst_31769 = (state_31783[(8)]);
var inst_31774 = (state_31783[(2)]);
var state_31783__$1 = (function (){var statearr_31792 = state_31783;
(statearr_31792[(9)] = inst_31774);

return statearr_31792;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31783__$1,(9),results,inst_31769);
} else {
if((state_val_31784 === (9))){
var inst_31776 = (state_31783[(2)]);
var state_31783__$1 = (function (){var statearr_31793 = state_31783;
(statearr_31793[(10)] = inst_31776);

return statearr_31793;
})();
var statearr_31794_31904 = state_31783__$1;
(statearr_31794_31904[(2)] = null);

(statearr_31794_31904[(1)] = (2));


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
});})(c__19438__auto___31898,jobs,results,process,async))
;
return ((function (switch__19373__auto__,c__19438__auto___31898,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_31798 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_31798[(1)] = (1));

return statearr_31798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_31783){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_31783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e31799){if((e31799 instanceof Object)){
var ex__19377__auto__ = e31799;
var statearr_31800_31905 = state_31783;
(statearr_31800_31905[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31906 = state_31783;
state_31783 = G__31906;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_31783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_31783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___31898,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_31801 = f__19439__auto__.call(null);
(statearr_31801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___31898);

return statearr_31801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___31898,jobs,results,process,async))
);


var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__,jobs,results,process,async){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__,jobs,results,process,async){
return (function (state_31839){
var state_val_31840 = (state_31839[(1)]);
if((state_val_31840 === (7))){
var inst_31835 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31841_31907 = state_31839__$1;
(statearr_31841_31907[(2)] = inst_31835);

(statearr_31841_31907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (20))){
var state_31839__$1 = state_31839;
var statearr_31842_31908 = state_31839__$1;
(statearr_31842_31908[(2)] = null);

(statearr_31842_31908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (1))){
var state_31839__$1 = state_31839;
var statearr_31843_31909 = state_31839__$1;
(statearr_31843_31909[(2)] = null);

(statearr_31843_31909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (4))){
var inst_31804 = (state_31839[(7)]);
var inst_31804__$1 = (state_31839[(2)]);
var inst_31805 = (inst_31804__$1 == null);
var state_31839__$1 = (function (){var statearr_31844 = state_31839;
(statearr_31844[(7)] = inst_31804__$1);

return statearr_31844;
})();
if(cljs.core.truth_(inst_31805)){
var statearr_31845_31910 = state_31839__$1;
(statearr_31845_31910[(1)] = (5));

} else {
var statearr_31846_31911 = state_31839__$1;
(statearr_31846_31911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (15))){
var inst_31817 = (state_31839[(8)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31839__$1,(18),to,inst_31817);
} else {
if((state_val_31840 === (21))){
var inst_31830 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31847_31912 = state_31839__$1;
(statearr_31847_31912[(2)] = inst_31830);

(statearr_31847_31912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (13))){
var inst_31832 = (state_31839[(2)]);
var state_31839__$1 = (function (){var statearr_31848 = state_31839;
(statearr_31848[(9)] = inst_31832);

return statearr_31848;
})();
var statearr_31849_31913 = state_31839__$1;
(statearr_31849_31913[(2)] = null);

(statearr_31849_31913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (6))){
var inst_31804 = (state_31839[(7)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31839__$1,(11),inst_31804);
} else {
if((state_val_31840 === (17))){
var inst_31825 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
if(cljs.core.truth_(inst_31825)){
var statearr_31850_31914 = state_31839__$1;
(statearr_31850_31914[(1)] = (19));

} else {
var statearr_31851_31915 = state_31839__$1;
(statearr_31851_31915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (3))){
var inst_31837 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31839__$1,inst_31837);
} else {
if((state_val_31840 === (12))){
var inst_31814 = (state_31839[(10)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31839__$1,(14),inst_31814);
} else {
if((state_val_31840 === (2))){
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31839__$1,(4),results);
} else {
if((state_val_31840 === (19))){
var state_31839__$1 = state_31839;
var statearr_31852_31916 = state_31839__$1;
(statearr_31852_31916[(2)] = null);

(statearr_31852_31916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (11))){
var inst_31814 = (state_31839[(2)]);
var state_31839__$1 = (function (){var statearr_31853 = state_31839;
(statearr_31853[(10)] = inst_31814);

return statearr_31853;
})();
var statearr_31854_31917 = state_31839__$1;
(statearr_31854_31917[(2)] = null);

(statearr_31854_31917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (9))){
var state_31839__$1 = state_31839;
var statearr_31855_31918 = state_31839__$1;
(statearr_31855_31918[(2)] = null);

(statearr_31855_31918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (5))){
var state_31839__$1 = state_31839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31856_31919 = state_31839__$1;
(statearr_31856_31919[(1)] = (8));

} else {
var statearr_31857_31920 = state_31839__$1;
(statearr_31857_31920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (14))){
var inst_31817 = (state_31839[(8)]);
var inst_31819 = (state_31839[(11)]);
var inst_31817__$1 = (state_31839[(2)]);
var inst_31818 = (inst_31817__$1 == null);
var inst_31819__$1 = cljs.core.not.call(null,inst_31818);
var state_31839__$1 = (function (){var statearr_31858 = state_31839;
(statearr_31858[(8)] = inst_31817__$1);

(statearr_31858[(11)] = inst_31819__$1);

return statearr_31858;
})();
if(inst_31819__$1){
var statearr_31859_31921 = state_31839__$1;
(statearr_31859_31921[(1)] = (15));

} else {
var statearr_31860_31922 = state_31839__$1;
(statearr_31860_31922[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (16))){
var inst_31819 = (state_31839[(11)]);
var state_31839__$1 = state_31839;
var statearr_31861_31923 = state_31839__$1;
(statearr_31861_31923[(2)] = inst_31819);

(statearr_31861_31923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (10))){
var inst_31811 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31862_31924 = state_31839__$1;
(statearr_31862_31924[(2)] = inst_31811);

(statearr_31862_31924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (18))){
var inst_31822 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31863_31925 = state_31839__$1;
(statearr_31863_31925[(2)] = inst_31822);

(statearr_31863_31925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (8))){
var inst_31808 = cljs.core.async.close_BANG_.call(null,to);
var state_31839__$1 = state_31839;
var statearr_31864_31926 = state_31839__$1;
(statearr_31864_31926[(2)] = inst_31808);

(statearr_31864_31926[(1)] = (10));


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
});})(c__19438__auto__,jobs,results,process,async))
;
return ((function (switch__19373__auto__,c__19438__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_31868 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__);

(statearr_31868[(1)] = (1));

return statearr_31868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1 = (function (state_31839){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_31839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e31869){if((e31869 instanceof Object)){
var ex__19377__auto__ = e31869;
var statearr_31870_31927 = state_31839;
(statearr_31870_31927[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31928 = state_31839;
state_31839 = G__31928;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__ = function(state_31839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1.call(this,state_31839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__,jobs,results,process,async))
})();
var state__19440__auto__ = (function (){var statearr_31871 = f__19439__auto__.call(null);
(statearr_31871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_31871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__,jobs,results,process,async))
);

return c__19438__auto__;
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
var args31929 = [];
var len__17416__auto___31932 = arguments.length;
var i__17417__auto___31933 = (0);
while(true){
if((i__17417__auto___31933 < len__17416__auto___31932)){
args31929.push((arguments[i__17417__auto___31933]));

var G__31934 = (i__17417__auto___31933 + (1));
i__17417__auto___31933 = G__31934;
continue;
} else {
}
break;
}

var G__31931 = args31929.length;
switch (G__31931) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31929.length)].join('')));

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
var args31936 = [];
var len__17416__auto___31939 = arguments.length;
var i__17417__auto___31940 = (0);
while(true){
if((i__17417__auto___31940 < len__17416__auto___31939)){
args31936.push((arguments[i__17417__auto___31940]));

var G__31941 = (i__17417__auto___31940 + (1));
i__17417__auto___31940 = G__31941;
continue;
} else {
}
break;
}

var G__31938 = args31936.length;
switch (G__31938) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31936.length)].join('')));

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
var args31943 = [];
var len__17416__auto___31996 = arguments.length;
var i__17417__auto___31997 = (0);
while(true){
if((i__17417__auto___31997 < len__17416__auto___31996)){
args31943.push((arguments[i__17417__auto___31997]));

var G__31998 = (i__17417__auto___31997 + (1));
i__17417__auto___31997 = G__31998;
continue;
} else {
}
break;
}

var G__31945 = args31943.length;
switch (G__31945) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31943.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19438__auto___32000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___32000,tc,fc){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___32000,tc,fc){
return (function (state_31971){
var state_val_31972 = (state_31971[(1)]);
if((state_val_31972 === (7))){
var inst_31967 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_31973_32001 = state_31971__$1;
(statearr_31973_32001[(2)] = inst_31967);

(statearr_31973_32001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (1))){
var state_31971__$1 = state_31971;
var statearr_31974_32002 = state_31971__$1;
(statearr_31974_32002[(2)] = null);

(statearr_31974_32002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (4))){
var inst_31948 = (state_31971[(7)]);
var inst_31948__$1 = (state_31971[(2)]);
var inst_31949 = (inst_31948__$1 == null);
var state_31971__$1 = (function (){var statearr_31975 = state_31971;
(statearr_31975[(7)] = inst_31948__$1);

return statearr_31975;
})();
if(cljs.core.truth_(inst_31949)){
var statearr_31976_32003 = state_31971__$1;
(statearr_31976_32003[(1)] = (5));

} else {
var statearr_31977_32004 = state_31971__$1;
(statearr_31977_32004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (13))){
var state_31971__$1 = state_31971;
var statearr_31978_32005 = state_31971__$1;
(statearr_31978_32005[(2)] = null);

(statearr_31978_32005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (6))){
var inst_31948 = (state_31971[(7)]);
var inst_31954 = p.call(null,inst_31948);
var state_31971__$1 = state_31971;
if(cljs.core.truth_(inst_31954)){
var statearr_31979_32006 = state_31971__$1;
(statearr_31979_32006[(1)] = (9));

} else {
var statearr_31980_32007 = state_31971__$1;
(statearr_31980_32007[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (3))){
var inst_31969 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31971__$1,inst_31969);
} else {
if((state_val_31972 === (12))){
var state_31971__$1 = state_31971;
var statearr_31981_32008 = state_31971__$1;
(statearr_31981_32008[(2)] = null);

(statearr_31981_32008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (2))){
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31971__$1,(4),ch);
} else {
if((state_val_31972 === (11))){
var inst_31948 = (state_31971[(7)]);
var inst_31958 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31971__$1,(8),inst_31958,inst_31948);
} else {
if((state_val_31972 === (9))){
var state_31971__$1 = state_31971;
var statearr_31982_32009 = state_31971__$1;
(statearr_31982_32009[(2)] = tc);

(statearr_31982_32009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (5))){
var inst_31951 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31952 = cljs.core.async.close_BANG_.call(null,fc);
var state_31971__$1 = (function (){var statearr_31983 = state_31971;
(statearr_31983[(8)] = inst_31951);

return statearr_31983;
})();
var statearr_31984_32010 = state_31971__$1;
(statearr_31984_32010[(2)] = inst_31952);

(statearr_31984_32010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (14))){
var inst_31965 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_31985_32011 = state_31971__$1;
(statearr_31985_32011[(2)] = inst_31965);

(statearr_31985_32011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (10))){
var state_31971__$1 = state_31971;
var statearr_31986_32012 = state_31971__$1;
(statearr_31986_32012[(2)] = fc);

(statearr_31986_32012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (8))){
var inst_31960 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
if(cljs.core.truth_(inst_31960)){
var statearr_31987_32013 = state_31971__$1;
(statearr_31987_32013[(1)] = (12));

} else {
var statearr_31988_32014 = state_31971__$1;
(statearr_31988_32014[(1)] = (13));

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
});})(c__19438__auto___32000,tc,fc))
;
return ((function (switch__19373__auto__,c__19438__auto___32000,tc,fc){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_31992 = [null,null,null,null,null,null,null,null,null];
(statearr_31992[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_31992[(1)] = (1));

return statearr_31992;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_31971){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_31971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e31993){if((e31993 instanceof Object)){
var ex__19377__auto__ = e31993;
var statearr_31994_32015 = state_31971;
(statearr_31994_32015[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32016 = state_31971;
state_31971 = G__32016;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_31971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_31971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___32000,tc,fc))
})();
var state__19440__auto__ = (function (){var statearr_31995 = f__19439__auto__.call(null);
(statearr_31995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___32000);

return statearr_31995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___32000,tc,fc))
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
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__){
return (function (state_32063){
var state_val_32064 = (state_32063[(1)]);
if((state_val_32064 === (1))){
var inst_32049 = init;
var state_32063__$1 = (function (){var statearr_32065 = state_32063;
(statearr_32065[(7)] = inst_32049);

return statearr_32065;
})();
var statearr_32066_32081 = state_32063__$1;
(statearr_32066_32081[(2)] = null);

(statearr_32066_32081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (2))){
var state_32063__$1 = state_32063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32063__$1,(4),ch);
} else {
if((state_val_32064 === (3))){
var inst_32061 = (state_32063[(2)]);
var state_32063__$1 = state_32063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32063__$1,inst_32061);
} else {
if((state_val_32064 === (4))){
var inst_32052 = (state_32063[(8)]);
var inst_32052__$1 = (state_32063[(2)]);
var inst_32053 = (inst_32052__$1 == null);
var state_32063__$1 = (function (){var statearr_32067 = state_32063;
(statearr_32067[(8)] = inst_32052__$1);

return statearr_32067;
})();
if(cljs.core.truth_(inst_32053)){
var statearr_32068_32082 = state_32063__$1;
(statearr_32068_32082[(1)] = (5));

} else {
var statearr_32069_32083 = state_32063__$1;
(statearr_32069_32083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (5))){
var inst_32049 = (state_32063[(7)]);
var state_32063__$1 = state_32063;
var statearr_32070_32084 = state_32063__$1;
(statearr_32070_32084[(2)] = inst_32049);

(statearr_32070_32084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (6))){
var inst_32052 = (state_32063[(8)]);
var inst_32049 = (state_32063[(7)]);
var inst_32056 = f.call(null,inst_32049,inst_32052);
var inst_32049__$1 = inst_32056;
var state_32063__$1 = (function (){var statearr_32071 = state_32063;
(statearr_32071[(7)] = inst_32049__$1);

return statearr_32071;
})();
var statearr_32072_32085 = state_32063__$1;
(statearr_32072_32085[(2)] = null);

(statearr_32072_32085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (7))){
var inst_32059 = (state_32063[(2)]);
var state_32063__$1 = state_32063;
var statearr_32073_32086 = state_32063__$1;
(statearr_32073_32086[(2)] = inst_32059);

(statearr_32073_32086[(1)] = (3));


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
});})(c__19438__auto__))
;
return ((function (switch__19373__auto__,c__19438__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19374__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19374__auto____0 = (function (){
var statearr_32077 = [null,null,null,null,null,null,null,null,null];
(statearr_32077[(0)] = cljs$core$async$reduce_$_state_machine__19374__auto__);

(statearr_32077[(1)] = (1));

return statearr_32077;
});
var cljs$core$async$reduce_$_state_machine__19374__auto____1 = (function (state_32063){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_32063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e32078){if((e32078 instanceof Object)){
var ex__19377__auto__ = e32078;
var statearr_32079_32087 = state_32063;
(statearr_32079_32087[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32088 = state_32063;
state_32063 = G__32088;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19374__auto__ = function(state_32063){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19374__auto____1.call(this,state_32063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19374__auto____0;
cljs$core$async$reduce_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19374__auto____1;
return cljs$core$async$reduce_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_32080 = f__19439__auto__.call(null);
(statearr_32080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_32080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__))
);

return c__19438__auto__;
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
var args32089 = [];
var len__17416__auto___32141 = arguments.length;
var i__17417__auto___32142 = (0);
while(true){
if((i__17417__auto___32142 < len__17416__auto___32141)){
args32089.push((arguments[i__17417__auto___32142]));

var G__32143 = (i__17417__auto___32142 + (1));
i__17417__auto___32142 = G__32143;
continue;
} else {
}
break;
}

var G__32091 = args32089.length;
switch (G__32091) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32089.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__){
return (function (state_32116){
var state_val_32117 = (state_32116[(1)]);
if((state_val_32117 === (7))){
var inst_32098 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32118_32145 = state_32116__$1;
(statearr_32118_32145[(2)] = inst_32098);

(statearr_32118_32145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (1))){
var inst_32092 = cljs.core.seq.call(null,coll);
var inst_32093 = inst_32092;
var state_32116__$1 = (function (){var statearr_32119 = state_32116;
(statearr_32119[(7)] = inst_32093);

return statearr_32119;
})();
var statearr_32120_32146 = state_32116__$1;
(statearr_32120_32146[(2)] = null);

(statearr_32120_32146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (4))){
var inst_32093 = (state_32116[(7)]);
var inst_32096 = cljs.core.first.call(null,inst_32093);
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32116__$1,(7),ch,inst_32096);
} else {
if((state_val_32117 === (13))){
var inst_32110 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32121_32147 = state_32116__$1;
(statearr_32121_32147[(2)] = inst_32110);

(statearr_32121_32147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (6))){
var inst_32101 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
if(cljs.core.truth_(inst_32101)){
var statearr_32122_32148 = state_32116__$1;
(statearr_32122_32148[(1)] = (8));

} else {
var statearr_32123_32149 = state_32116__$1;
(statearr_32123_32149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (3))){
var inst_32114 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32116__$1,inst_32114);
} else {
if((state_val_32117 === (12))){
var state_32116__$1 = state_32116;
var statearr_32124_32150 = state_32116__$1;
(statearr_32124_32150[(2)] = null);

(statearr_32124_32150[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (2))){
var inst_32093 = (state_32116[(7)]);
var state_32116__$1 = state_32116;
if(cljs.core.truth_(inst_32093)){
var statearr_32125_32151 = state_32116__$1;
(statearr_32125_32151[(1)] = (4));

} else {
var statearr_32126_32152 = state_32116__$1;
(statearr_32126_32152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (11))){
var inst_32107 = cljs.core.async.close_BANG_.call(null,ch);
var state_32116__$1 = state_32116;
var statearr_32127_32153 = state_32116__$1;
(statearr_32127_32153[(2)] = inst_32107);

(statearr_32127_32153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (9))){
var state_32116__$1 = state_32116;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32128_32154 = state_32116__$1;
(statearr_32128_32154[(1)] = (11));

} else {
var statearr_32129_32155 = state_32116__$1;
(statearr_32129_32155[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (5))){
var inst_32093 = (state_32116[(7)]);
var state_32116__$1 = state_32116;
var statearr_32130_32156 = state_32116__$1;
(statearr_32130_32156[(2)] = inst_32093);

(statearr_32130_32156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (10))){
var inst_32112 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32131_32157 = state_32116__$1;
(statearr_32131_32157[(2)] = inst_32112);

(statearr_32131_32157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (8))){
var inst_32093 = (state_32116[(7)]);
var inst_32103 = cljs.core.next.call(null,inst_32093);
var inst_32093__$1 = inst_32103;
var state_32116__$1 = (function (){var statearr_32132 = state_32116;
(statearr_32132[(7)] = inst_32093__$1);

return statearr_32132;
})();
var statearr_32133_32158 = state_32116__$1;
(statearr_32133_32158[(2)] = null);

(statearr_32133_32158[(1)] = (2));


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
});})(c__19438__auto__))
;
return ((function (switch__19373__auto__,c__19438__auto__){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_32137 = [null,null,null,null,null,null,null,null];
(statearr_32137[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_32137[(1)] = (1));

return statearr_32137;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_32116){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_32116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e32138){if((e32138 instanceof Object)){
var ex__19377__auto__ = e32138;
var statearr_32139_32159 = state_32116;
(statearr_32139_32159[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32160 = state_32116;
state_32116 = G__32160;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_32116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_32116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_32140 = f__19439__auto__.call(null);
(statearr_32140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_32140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__))
);

return c__19438__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async32382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32382 = (function (mult,ch,cs,meta32383){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32383 = meta32383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32384,meta32383__$1){
var self__ = this;
var _32384__$1 = this;
return (new cljs.core.async.t_cljs$core$async32382(self__.mult,self__.ch,self__.cs,meta32383__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32384){
var self__ = this;
var _32384__$1 = this;
return self__.meta32383;
});})(cs))
;

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32382.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32383","meta32383",169438892,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32382.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32382";

cljs.core.async.t_cljs$core$async32382.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async32382");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32382 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32382(mult__$1,ch__$1,cs__$1,meta32383){
return (new cljs.core.async.t_cljs$core$async32382(mult__$1,ch__$1,cs__$1,meta32383));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32382(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19438__auto___32603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___32603,cs,m,dchan,dctr,done){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___32603,cs,m,dchan,dctr,done){
return (function (state_32515){
var state_val_32516 = (state_32515[(1)]);
if((state_val_32516 === (7))){
var inst_32511 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32517_32604 = state_32515__$1;
(statearr_32517_32604[(2)] = inst_32511);

(statearr_32517_32604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (20))){
var inst_32416 = (state_32515[(7)]);
var inst_32426 = cljs.core.first.call(null,inst_32416);
var inst_32427 = cljs.core.nth.call(null,inst_32426,(0),null);
var inst_32428 = cljs.core.nth.call(null,inst_32426,(1),null);
var state_32515__$1 = (function (){var statearr_32518 = state_32515;
(statearr_32518[(8)] = inst_32427);

return statearr_32518;
})();
if(cljs.core.truth_(inst_32428)){
var statearr_32519_32605 = state_32515__$1;
(statearr_32519_32605[(1)] = (22));

} else {
var statearr_32520_32606 = state_32515__$1;
(statearr_32520_32606[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (27))){
var inst_32458 = (state_32515[(9)]);
var inst_32387 = (state_32515[(10)]);
var inst_32463 = (state_32515[(11)]);
var inst_32456 = (state_32515[(12)]);
var inst_32463__$1 = cljs.core._nth.call(null,inst_32456,inst_32458);
var inst_32464 = cljs.core.async.put_BANG_.call(null,inst_32463__$1,inst_32387,done);
var state_32515__$1 = (function (){var statearr_32521 = state_32515;
(statearr_32521[(11)] = inst_32463__$1);

return statearr_32521;
})();
if(cljs.core.truth_(inst_32464)){
var statearr_32522_32607 = state_32515__$1;
(statearr_32522_32607[(1)] = (30));

} else {
var statearr_32523_32608 = state_32515__$1;
(statearr_32523_32608[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (1))){
var state_32515__$1 = state_32515;
var statearr_32524_32609 = state_32515__$1;
(statearr_32524_32609[(2)] = null);

(statearr_32524_32609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (24))){
var inst_32416 = (state_32515[(7)]);
var inst_32433 = (state_32515[(2)]);
var inst_32434 = cljs.core.next.call(null,inst_32416);
var inst_32396 = inst_32434;
var inst_32397 = null;
var inst_32398 = (0);
var inst_32399 = (0);
var state_32515__$1 = (function (){var statearr_32525 = state_32515;
(statearr_32525[(13)] = inst_32397);

(statearr_32525[(14)] = inst_32399);

(statearr_32525[(15)] = inst_32433);

(statearr_32525[(16)] = inst_32396);

(statearr_32525[(17)] = inst_32398);

return statearr_32525;
})();
var statearr_32526_32610 = state_32515__$1;
(statearr_32526_32610[(2)] = null);

(statearr_32526_32610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (39))){
var state_32515__$1 = state_32515;
var statearr_32530_32611 = state_32515__$1;
(statearr_32530_32611[(2)] = null);

(statearr_32530_32611[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (4))){
var inst_32387 = (state_32515[(10)]);
var inst_32387__$1 = (state_32515[(2)]);
var inst_32388 = (inst_32387__$1 == null);
var state_32515__$1 = (function (){var statearr_32531 = state_32515;
(statearr_32531[(10)] = inst_32387__$1);

return statearr_32531;
})();
if(cljs.core.truth_(inst_32388)){
var statearr_32532_32612 = state_32515__$1;
(statearr_32532_32612[(1)] = (5));

} else {
var statearr_32533_32613 = state_32515__$1;
(statearr_32533_32613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (15))){
var inst_32397 = (state_32515[(13)]);
var inst_32399 = (state_32515[(14)]);
var inst_32396 = (state_32515[(16)]);
var inst_32398 = (state_32515[(17)]);
var inst_32412 = (state_32515[(2)]);
var inst_32413 = (inst_32399 + (1));
var tmp32527 = inst_32397;
var tmp32528 = inst_32396;
var tmp32529 = inst_32398;
var inst_32396__$1 = tmp32528;
var inst_32397__$1 = tmp32527;
var inst_32398__$1 = tmp32529;
var inst_32399__$1 = inst_32413;
var state_32515__$1 = (function (){var statearr_32534 = state_32515;
(statearr_32534[(13)] = inst_32397__$1);

(statearr_32534[(14)] = inst_32399__$1);

(statearr_32534[(18)] = inst_32412);

(statearr_32534[(16)] = inst_32396__$1);

(statearr_32534[(17)] = inst_32398__$1);

return statearr_32534;
})();
var statearr_32535_32614 = state_32515__$1;
(statearr_32535_32614[(2)] = null);

(statearr_32535_32614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (21))){
var inst_32437 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32539_32615 = state_32515__$1;
(statearr_32539_32615[(2)] = inst_32437);

(statearr_32539_32615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (31))){
var inst_32463 = (state_32515[(11)]);
var inst_32467 = done.call(null,null);
var inst_32468 = cljs.core.async.untap_STAR_.call(null,m,inst_32463);
var state_32515__$1 = (function (){var statearr_32540 = state_32515;
(statearr_32540[(19)] = inst_32467);

return statearr_32540;
})();
var statearr_32541_32616 = state_32515__$1;
(statearr_32541_32616[(2)] = inst_32468);

(statearr_32541_32616[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (32))){
var inst_32458 = (state_32515[(9)]);
var inst_32457 = (state_32515[(20)]);
var inst_32455 = (state_32515[(21)]);
var inst_32456 = (state_32515[(12)]);
var inst_32470 = (state_32515[(2)]);
var inst_32471 = (inst_32458 + (1));
var tmp32536 = inst_32457;
var tmp32537 = inst_32455;
var tmp32538 = inst_32456;
var inst_32455__$1 = tmp32537;
var inst_32456__$1 = tmp32538;
var inst_32457__$1 = tmp32536;
var inst_32458__$1 = inst_32471;
var state_32515__$1 = (function (){var statearr_32542 = state_32515;
(statearr_32542[(9)] = inst_32458__$1);

(statearr_32542[(20)] = inst_32457__$1);

(statearr_32542[(21)] = inst_32455__$1);

(statearr_32542[(12)] = inst_32456__$1);

(statearr_32542[(22)] = inst_32470);

return statearr_32542;
})();
var statearr_32543_32617 = state_32515__$1;
(statearr_32543_32617[(2)] = null);

(statearr_32543_32617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (40))){
var inst_32483 = (state_32515[(23)]);
var inst_32487 = done.call(null,null);
var inst_32488 = cljs.core.async.untap_STAR_.call(null,m,inst_32483);
var state_32515__$1 = (function (){var statearr_32544 = state_32515;
(statearr_32544[(24)] = inst_32487);

return statearr_32544;
})();
var statearr_32545_32618 = state_32515__$1;
(statearr_32545_32618[(2)] = inst_32488);

(statearr_32545_32618[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (33))){
var inst_32474 = (state_32515[(25)]);
var inst_32476 = cljs.core.chunked_seq_QMARK_.call(null,inst_32474);
var state_32515__$1 = state_32515;
if(inst_32476){
var statearr_32546_32619 = state_32515__$1;
(statearr_32546_32619[(1)] = (36));

} else {
var statearr_32547_32620 = state_32515__$1;
(statearr_32547_32620[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (13))){
var inst_32406 = (state_32515[(26)]);
var inst_32409 = cljs.core.async.close_BANG_.call(null,inst_32406);
var state_32515__$1 = state_32515;
var statearr_32548_32621 = state_32515__$1;
(statearr_32548_32621[(2)] = inst_32409);

(statearr_32548_32621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (22))){
var inst_32427 = (state_32515[(8)]);
var inst_32430 = cljs.core.async.close_BANG_.call(null,inst_32427);
var state_32515__$1 = state_32515;
var statearr_32549_32622 = state_32515__$1;
(statearr_32549_32622[(2)] = inst_32430);

(statearr_32549_32622[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (36))){
var inst_32474 = (state_32515[(25)]);
var inst_32478 = cljs.core.chunk_first.call(null,inst_32474);
var inst_32479 = cljs.core.chunk_rest.call(null,inst_32474);
var inst_32480 = cljs.core.count.call(null,inst_32478);
var inst_32455 = inst_32479;
var inst_32456 = inst_32478;
var inst_32457 = inst_32480;
var inst_32458 = (0);
var state_32515__$1 = (function (){var statearr_32550 = state_32515;
(statearr_32550[(9)] = inst_32458);

(statearr_32550[(20)] = inst_32457);

(statearr_32550[(21)] = inst_32455);

(statearr_32550[(12)] = inst_32456);

return statearr_32550;
})();
var statearr_32551_32623 = state_32515__$1;
(statearr_32551_32623[(2)] = null);

(statearr_32551_32623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (41))){
var inst_32474 = (state_32515[(25)]);
var inst_32490 = (state_32515[(2)]);
var inst_32491 = cljs.core.next.call(null,inst_32474);
var inst_32455 = inst_32491;
var inst_32456 = null;
var inst_32457 = (0);
var inst_32458 = (0);
var state_32515__$1 = (function (){var statearr_32552 = state_32515;
(statearr_32552[(9)] = inst_32458);

(statearr_32552[(20)] = inst_32457);

(statearr_32552[(21)] = inst_32455);

(statearr_32552[(27)] = inst_32490);

(statearr_32552[(12)] = inst_32456);

return statearr_32552;
})();
var statearr_32553_32624 = state_32515__$1;
(statearr_32553_32624[(2)] = null);

(statearr_32553_32624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (43))){
var state_32515__$1 = state_32515;
var statearr_32554_32625 = state_32515__$1;
(statearr_32554_32625[(2)] = null);

(statearr_32554_32625[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (29))){
var inst_32499 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32555_32626 = state_32515__$1;
(statearr_32555_32626[(2)] = inst_32499);

(statearr_32555_32626[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (44))){
var inst_32508 = (state_32515[(2)]);
var state_32515__$1 = (function (){var statearr_32556 = state_32515;
(statearr_32556[(28)] = inst_32508);

return statearr_32556;
})();
var statearr_32557_32627 = state_32515__$1;
(statearr_32557_32627[(2)] = null);

(statearr_32557_32627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (6))){
var inst_32447 = (state_32515[(29)]);
var inst_32446 = cljs.core.deref.call(null,cs);
var inst_32447__$1 = cljs.core.keys.call(null,inst_32446);
var inst_32448 = cljs.core.count.call(null,inst_32447__$1);
var inst_32449 = cljs.core.reset_BANG_.call(null,dctr,inst_32448);
var inst_32454 = cljs.core.seq.call(null,inst_32447__$1);
var inst_32455 = inst_32454;
var inst_32456 = null;
var inst_32457 = (0);
var inst_32458 = (0);
var state_32515__$1 = (function (){var statearr_32558 = state_32515;
(statearr_32558[(9)] = inst_32458);

(statearr_32558[(20)] = inst_32457);

(statearr_32558[(30)] = inst_32449);

(statearr_32558[(29)] = inst_32447__$1);

(statearr_32558[(21)] = inst_32455);

(statearr_32558[(12)] = inst_32456);

return statearr_32558;
})();
var statearr_32559_32628 = state_32515__$1;
(statearr_32559_32628[(2)] = null);

(statearr_32559_32628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (28))){
var inst_32474 = (state_32515[(25)]);
var inst_32455 = (state_32515[(21)]);
var inst_32474__$1 = cljs.core.seq.call(null,inst_32455);
var state_32515__$1 = (function (){var statearr_32560 = state_32515;
(statearr_32560[(25)] = inst_32474__$1);

return statearr_32560;
})();
if(inst_32474__$1){
var statearr_32561_32629 = state_32515__$1;
(statearr_32561_32629[(1)] = (33));

} else {
var statearr_32562_32630 = state_32515__$1;
(statearr_32562_32630[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (25))){
var inst_32458 = (state_32515[(9)]);
var inst_32457 = (state_32515[(20)]);
var inst_32460 = (inst_32458 < inst_32457);
var inst_32461 = inst_32460;
var state_32515__$1 = state_32515;
if(cljs.core.truth_(inst_32461)){
var statearr_32563_32631 = state_32515__$1;
(statearr_32563_32631[(1)] = (27));

} else {
var statearr_32564_32632 = state_32515__$1;
(statearr_32564_32632[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (34))){
var state_32515__$1 = state_32515;
var statearr_32565_32633 = state_32515__$1;
(statearr_32565_32633[(2)] = null);

(statearr_32565_32633[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (17))){
var state_32515__$1 = state_32515;
var statearr_32566_32634 = state_32515__$1;
(statearr_32566_32634[(2)] = null);

(statearr_32566_32634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (3))){
var inst_32513 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32515__$1,inst_32513);
} else {
if((state_val_32516 === (12))){
var inst_32442 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32567_32635 = state_32515__$1;
(statearr_32567_32635[(2)] = inst_32442);

(statearr_32567_32635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (2))){
var state_32515__$1 = state_32515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32515__$1,(4),ch);
} else {
if((state_val_32516 === (23))){
var state_32515__$1 = state_32515;
var statearr_32568_32636 = state_32515__$1;
(statearr_32568_32636[(2)] = null);

(statearr_32568_32636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (35))){
var inst_32497 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32569_32637 = state_32515__$1;
(statearr_32569_32637[(2)] = inst_32497);

(statearr_32569_32637[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (19))){
var inst_32416 = (state_32515[(7)]);
var inst_32420 = cljs.core.chunk_first.call(null,inst_32416);
var inst_32421 = cljs.core.chunk_rest.call(null,inst_32416);
var inst_32422 = cljs.core.count.call(null,inst_32420);
var inst_32396 = inst_32421;
var inst_32397 = inst_32420;
var inst_32398 = inst_32422;
var inst_32399 = (0);
var state_32515__$1 = (function (){var statearr_32570 = state_32515;
(statearr_32570[(13)] = inst_32397);

(statearr_32570[(14)] = inst_32399);

(statearr_32570[(16)] = inst_32396);

(statearr_32570[(17)] = inst_32398);

return statearr_32570;
})();
var statearr_32571_32638 = state_32515__$1;
(statearr_32571_32638[(2)] = null);

(statearr_32571_32638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (11))){
var inst_32416 = (state_32515[(7)]);
var inst_32396 = (state_32515[(16)]);
var inst_32416__$1 = cljs.core.seq.call(null,inst_32396);
var state_32515__$1 = (function (){var statearr_32572 = state_32515;
(statearr_32572[(7)] = inst_32416__$1);

return statearr_32572;
})();
if(inst_32416__$1){
var statearr_32573_32639 = state_32515__$1;
(statearr_32573_32639[(1)] = (16));

} else {
var statearr_32574_32640 = state_32515__$1;
(statearr_32574_32640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (9))){
var inst_32444 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32575_32641 = state_32515__$1;
(statearr_32575_32641[(2)] = inst_32444);

(statearr_32575_32641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (5))){
var inst_32394 = cljs.core.deref.call(null,cs);
var inst_32395 = cljs.core.seq.call(null,inst_32394);
var inst_32396 = inst_32395;
var inst_32397 = null;
var inst_32398 = (0);
var inst_32399 = (0);
var state_32515__$1 = (function (){var statearr_32576 = state_32515;
(statearr_32576[(13)] = inst_32397);

(statearr_32576[(14)] = inst_32399);

(statearr_32576[(16)] = inst_32396);

(statearr_32576[(17)] = inst_32398);

return statearr_32576;
})();
var statearr_32577_32642 = state_32515__$1;
(statearr_32577_32642[(2)] = null);

(statearr_32577_32642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (14))){
var state_32515__$1 = state_32515;
var statearr_32578_32643 = state_32515__$1;
(statearr_32578_32643[(2)] = null);

(statearr_32578_32643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (45))){
var inst_32505 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32579_32644 = state_32515__$1;
(statearr_32579_32644[(2)] = inst_32505);

(statearr_32579_32644[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (26))){
var inst_32447 = (state_32515[(29)]);
var inst_32501 = (state_32515[(2)]);
var inst_32502 = cljs.core.seq.call(null,inst_32447);
var state_32515__$1 = (function (){var statearr_32580 = state_32515;
(statearr_32580[(31)] = inst_32501);

return statearr_32580;
})();
if(inst_32502){
var statearr_32581_32645 = state_32515__$1;
(statearr_32581_32645[(1)] = (42));

} else {
var statearr_32582_32646 = state_32515__$1;
(statearr_32582_32646[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (16))){
var inst_32416 = (state_32515[(7)]);
var inst_32418 = cljs.core.chunked_seq_QMARK_.call(null,inst_32416);
var state_32515__$1 = state_32515;
if(inst_32418){
var statearr_32583_32647 = state_32515__$1;
(statearr_32583_32647[(1)] = (19));

} else {
var statearr_32584_32648 = state_32515__$1;
(statearr_32584_32648[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (38))){
var inst_32494 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32585_32649 = state_32515__$1;
(statearr_32585_32649[(2)] = inst_32494);

(statearr_32585_32649[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (30))){
var state_32515__$1 = state_32515;
var statearr_32586_32650 = state_32515__$1;
(statearr_32586_32650[(2)] = null);

(statearr_32586_32650[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (10))){
var inst_32397 = (state_32515[(13)]);
var inst_32399 = (state_32515[(14)]);
var inst_32405 = cljs.core._nth.call(null,inst_32397,inst_32399);
var inst_32406 = cljs.core.nth.call(null,inst_32405,(0),null);
var inst_32407 = cljs.core.nth.call(null,inst_32405,(1),null);
var state_32515__$1 = (function (){var statearr_32587 = state_32515;
(statearr_32587[(26)] = inst_32406);

return statearr_32587;
})();
if(cljs.core.truth_(inst_32407)){
var statearr_32588_32651 = state_32515__$1;
(statearr_32588_32651[(1)] = (13));

} else {
var statearr_32589_32652 = state_32515__$1;
(statearr_32589_32652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (18))){
var inst_32440 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32590_32653 = state_32515__$1;
(statearr_32590_32653[(2)] = inst_32440);

(statearr_32590_32653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (42))){
var state_32515__$1 = state_32515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32515__$1,(45),dchan);
} else {
if((state_val_32516 === (37))){
var inst_32474 = (state_32515[(25)]);
var inst_32483 = (state_32515[(23)]);
var inst_32387 = (state_32515[(10)]);
var inst_32483__$1 = cljs.core.first.call(null,inst_32474);
var inst_32484 = cljs.core.async.put_BANG_.call(null,inst_32483__$1,inst_32387,done);
var state_32515__$1 = (function (){var statearr_32591 = state_32515;
(statearr_32591[(23)] = inst_32483__$1);

return statearr_32591;
})();
if(cljs.core.truth_(inst_32484)){
var statearr_32592_32654 = state_32515__$1;
(statearr_32592_32654[(1)] = (39));

} else {
var statearr_32593_32655 = state_32515__$1;
(statearr_32593_32655[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (8))){
var inst_32399 = (state_32515[(14)]);
var inst_32398 = (state_32515[(17)]);
var inst_32401 = (inst_32399 < inst_32398);
var inst_32402 = inst_32401;
var state_32515__$1 = state_32515;
if(cljs.core.truth_(inst_32402)){
var statearr_32594_32656 = state_32515__$1;
(statearr_32594_32656[(1)] = (10));

} else {
var statearr_32595_32657 = state_32515__$1;
(statearr_32595_32657[(1)] = (11));

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
});})(c__19438__auto___32603,cs,m,dchan,dctr,done))
;
return ((function (switch__19373__auto__,c__19438__auto___32603,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19374__auto__ = null;
var cljs$core$async$mult_$_state_machine__19374__auto____0 = (function (){
var statearr_32599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32599[(0)] = cljs$core$async$mult_$_state_machine__19374__auto__);

(statearr_32599[(1)] = (1));

return statearr_32599;
});
var cljs$core$async$mult_$_state_machine__19374__auto____1 = (function (state_32515){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_32515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e32600){if((e32600 instanceof Object)){
var ex__19377__auto__ = e32600;
var statearr_32601_32658 = state_32515;
(statearr_32601_32658[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32659 = state_32515;
state_32515 = G__32659;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19374__auto__ = function(state_32515){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19374__auto____1.call(this,state_32515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19374__auto____0;
cljs$core$async$mult_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19374__auto____1;
return cljs$core$async$mult_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___32603,cs,m,dchan,dctr,done))
})();
var state__19440__auto__ = (function (){var statearr_32602 = f__19439__auto__.call(null);
(statearr_32602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___32603);

return statearr_32602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___32603,cs,m,dchan,dctr,done))
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
var args32660 = [];
var len__17416__auto___32663 = arguments.length;
var i__17417__auto___32664 = (0);
while(true){
if((i__17417__auto___32664 < len__17416__auto___32663)){
args32660.push((arguments[i__17417__auto___32664]));

var G__32665 = (i__17417__auto___32664 + (1));
i__17417__auto___32664 = G__32665;
continue;
} else {
}
break;
}

var G__32662 = args32660.length;
switch (G__32662) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32660.length)].join('')));

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
var len__17416__auto___32677 = arguments.length;
var i__17417__auto___32678 = (0);
while(true){
if((i__17417__auto___32678 < len__17416__auto___32677)){
args__17423__auto__.push((arguments[i__17417__auto___32678]));

var G__32679 = (i__17417__auto___32678 + (1));
i__17417__auto___32678 = G__32679;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((3) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17424__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32671){
var map__32672 = p__32671;
var map__32672__$1 = ((((!((map__32672 == null)))?((((map__32672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32672):map__32672);
var opts = map__32672__$1;
var statearr_32674_32680 = state;
(statearr_32674_32680[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__32672,map__32672__$1,opts){
return (function (val){
var statearr_32675_32681 = state;
(statearr_32675_32681[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32672,map__32672__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_32676_32682 = state;
(statearr_32676_32682[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32667){
var G__32668 = cljs.core.first.call(null,seq32667);
var seq32667__$1 = cljs.core.next.call(null,seq32667);
var G__32669 = cljs.core.first.call(null,seq32667__$1);
var seq32667__$2 = cljs.core.next.call(null,seq32667__$1);
var G__32670 = cljs.core.first.call(null,seq32667__$2);
var seq32667__$3 = cljs.core.next.call(null,seq32667__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32668,G__32669,G__32670,seq32667__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32846 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32847){
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
this.meta32847 = meta32847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32848,meta32847__$1){
var self__ = this;
var _32848__$1 = this;
return (new cljs.core.async.t_cljs$core$async32846(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32847__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32848){
var self__ = this;
var _32848__$1 = this;
return self__.meta32847;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32846.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32846.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32846.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32846.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32846.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32846.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32846.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32846.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32847","meta32847",-381501285,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32846";

cljs.core.async.t_cljs$core$async32846.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async32846");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32846 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32846(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32847){
return (new cljs.core.async.t_cljs$core$async32846(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32847));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32846(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19438__auto___33009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___33009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___33009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32946){
var state_val_32947 = (state_32946[(1)]);
if((state_val_32947 === (7))){
var inst_32864 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_32948_33010 = state_32946__$1;
(statearr_32948_33010[(2)] = inst_32864);

(statearr_32948_33010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (20))){
var inst_32876 = (state_32946[(7)]);
var state_32946__$1 = state_32946;
var statearr_32949_33011 = state_32946__$1;
(statearr_32949_33011[(2)] = inst_32876);

(statearr_32949_33011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (27))){
var state_32946__$1 = state_32946;
var statearr_32950_33012 = state_32946__$1;
(statearr_32950_33012[(2)] = null);

(statearr_32950_33012[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (1))){
var inst_32852 = (state_32946[(8)]);
var inst_32852__$1 = calc_state.call(null);
var inst_32854 = (inst_32852__$1 == null);
var inst_32855 = cljs.core.not.call(null,inst_32854);
var state_32946__$1 = (function (){var statearr_32951 = state_32946;
(statearr_32951[(8)] = inst_32852__$1);

return statearr_32951;
})();
if(inst_32855){
var statearr_32952_33013 = state_32946__$1;
(statearr_32952_33013[(1)] = (2));

} else {
var statearr_32953_33014 = state_32946__$1;
(statearr_32953_33014[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (24))){
var inst_32899 = (state_32946[(9)]);
var inst_32920 = (state_32946[(10)]);
var inst_32906 = (state_32946[(11)]);
var inst_32920__$1 = inst_32899.call(null,inst_32906);
var state_32946__$1 = (function (){var statearr_32954 = state_32946;
(statearr_32954[(10)] = inst_32920__$1);

return statearr_32954;
})();
if(cljs.core.truth_(inst_32920__$1)){
var statearr_32955_33015 = state_32946__$1;
(statearr_32955_33015[(1)] = (29));

} else {
var statearr_32956_33016 = state_32946__$1;
(statearr_32956_33016[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (4))){
var inst_32867 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32867)){
var statearr_32957_33017 = state_32946__$1;
(statearr_32957_33017[(1)] = (8));

} else {
var statearr_32958_33018 = state_32946__$1;
(statearr_32958_33018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (15))){
var inst_32893 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32893)){
var statearr_32959_33019 = state_32946__$1;
(statearr_32959_33019[(1)] = (19));

} else {
var statearr_32960_33020 = state_32946__$1;
(statearr_32960_33020[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (21))){
var inst_32898 = (state_32946[(12)]);
var inst_32898__$1 = (state_32946[(2)]);
var inst_32899 = cljs.core.get.call(null,inst_32898__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32900 = cljs.core.get.call(null,inst_32898__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32901 = cljs.core.get.call(null,inst_32898__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32946__$1 = (function (){var statearr_32961 = state_32946;
(statearr_32961[(9)] = inst_32899);

(statearr_32961[(12)] = inst_32898__$1);

(statearr_32961[(13)] = inst_32900);

return statearr_32961;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32946__$1,(22),inst_32901);
} else {
if((state_val_32947 === (31))){
var inst_32928 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32928)){
var statearr_32962_33021 = state_32946__$1;
(statearr_32962_33021[(1)] = (32));

} else {
var statearr_32963_33022 = state_32946__$1;
(statearr_32963_33022[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (32))){
var inst_32905 = (state_32946[(14)]);
var state_32946__$1 = state_32946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32946__$1,(35),out,inst_32905);
} else {
if((state_val_32947 === (33))){
var inst_32898 = (state_32946[(12)]);
var inst_32876 = inst_32898;
var state_32946__$1 = (function (){var statearr_32964 = state_32946;
(statearr_32964[(7)] = inst_32876);

return statearr_32964;
})();
var statearr_32965_33023 = state_32946__$1;
(statearr_32965_33023[(2)] = null);

(statearr_32965_33023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (13))){
var inst_32876 = (state_32946[(7)]);
var inst_32883 = inst_32876.cljs$lang$protocol_mask$partition0$;
var inst_32884 = (inst_32883 & (64));
var inst_32885 = inst_32876.cljs$core$ISeq$;
var inst_32886 = (inst_32884) || (inst_32885);
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32886)){
var statearr_32966_33024 = state_32946__$1;
(statearr_32966_33024[(1)] = (16));

} else {
var statearr_32967_33025 = state_32946__$1;
(statearr_32967_33025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (22))){
var inst_32906 = (state_32946[(11)]);
var inst_32905 = (state_32946[(14)]);
var inst_32904 = (state_32946[(2)]);
var inst_32905__$1 = cljs.core.nth.call(null,inst_32904,(0),null);
var inst_32906__$1 = cljs.core.nth.call(null,inst_32904,(1),null);
var inst_32907 = (inst_32905__$1 == null);
var inst_32908 = cljs.core._EQ_.call(null,inst_32906__$1,change);
var inst_32909 = (inst_32907) || (inst_32908);
var state_32946__$1 = (function (){var statearr_32968 = state_32946;
(statearr_32968[(11)] = inst_32906__$1);

(statearr_32968[(14)] = inst_32905__$1);

return statearr_32968;
})();
if(cljs.core.truth_(inst_32909)){
var statearr_32969_33026 = state_32946__$1;
(statearr_32969_33026[(1)] = (23));

} else {
var statearr_32970_33027 = state_32946__$1;
(statearr_32970_33027[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (36))){
var inst_32898 = (state_32946[(12)]);
var inst_32876 = inst_32898;
var state_32946__$1 = (function (){var statearr_32971 = state_32946;
(statearr_32971[(7)] = inst_32876);

return statearr_32971;
})();
var statearr_32972_33028 = state_32946__$1;
(statearr_32972_33028[(2)] = null);

(statearr_32972_33028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (29))){
var inst_32920 = (state_32946[(10)]);
var state_32946__$1 = state_32946;
var statearr_32973_33029 = state_32946__$1;
(statearr_32973_33029[(2)] = inst_32920);

(statearr_32973_33029[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (6))){
var state_32946__$1 = state_32946;
var statearr_32974_33030 = state_32946__$1;
(statearr_32974_33030[(2)] = false);

(statearr_32974_33030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (28))){
var inst_32916 = (state_32946[(2)]);
var inst_32917 = calc_state.call(null);
var inst_32876 = inst_32917;
var state_32946__$1 = (function (){var statearr_32975 = state_32946;
(statearr_32975[(7)] = inst_32876);

(statearr_32975[(15)] = inst_32916);

return statearr_32975;
})();
var statearr_32976_33031 = state_32946__$1;
(statearr_32976_33031[(2)] = null);

(statearr_32976_33031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (25))){
var inst_32942 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_32977_33032 = state_32946__$1;
(statearr_32977_33032[(2)] = inst_32942);

(statearr_32977_33032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (34))){
var inst_32940 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_32978_33033 = state_32946__$1;
(statearr_32978_33033[(2)] = inst_32940);

(statearr_32978_33033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (17))){
var state_32946__$1 = state_32946;
var statearr_32979_33034 = state_32946__$1;
(statearr_32979_33034[(2)] = false);

(statearr_32979_33034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (3))){
var state_32946__$1 = state_32946;
var statearr_32980_33035 = state_32946__$1;
(statearr_32980_33035[(2)] = false);

(statearr_32980_33035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (12))){
var inst_32944 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32946__$1,inst_32944);
} else {
if((state_val_32947 === (2))){
var inst_32852 = (state_32946[(8)]);
var inst_32857 = inst_32852.cljs$lang$protocol_mask$partition0$;
var inst_32858 = (inst_32857 & (64));
var inst_32859 = inst_32852.cljs$core$ISeq$;
var inst_32860 = (inst_32858) || (inst_32859);
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32860)){
var statearr_32981_33036 = state_32946__$1;
(statearr_32981_33036[(1)] = (5));

} else {
var statearr_32982_33037 = state_32946__$1;
(statearr_32982_33037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (23))){
var inst_32905 = (state_32946[(14)]);
var inst_32911 = (inst_32905 == null);
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32911)){
var statearr_32983_33038 = state_32946__$1;
(statearr_32983_33038[(1)] = (26));

} else {
var statearr_32984_33039 = state_32946__$1;
(statearr_32984_33039[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (35))){
var inst_32931 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32931)){
var statearr_32985_33040 = state_32946__$1;
(statearr_32985_33040[(1)] = (36));

} else {
var statearr_32986_33041 = state_32946__$1;
(statearr_32986_33041[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (19))){
var inst_32876 = (state_32946[(7)]);
var inst_32895 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32876);
var state_32946__$1 = state_32946;
var statearr_32987_33042 = state_32946__$1;
(statearr_32987_33042[(2)] = inst_32895);

(statearr_32987_33042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (11))){
var inst_32876 = (state_32946[(7)]);
var inst_32880 = (inst_32876 == null);
var inst_32881 = cljs.core.not.call(null,inst_32880);
var state_32946__$1 = state_32946;
if(inst_32881){
var statearr_32988_33043 = state_32946__$1;
(statearr_32988_33043[(1)] = (13));

} else {
var statearr_32989_33044 = state_32946__$1;
(statearr_32989_33044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (9))){
var inst_32852 = (state_32946[(8)]);
var state_32946__$1 = state_32946;
var statearr_32990_33045 = state_32946__$1;
(statearr_32990_33045[(2)] = inst_32852);

(statearr_32990_33045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (5))){
var state_32946__$1 = state_32946;
var statearr_32991_33046 = state_32946__$1;
(statearr_32991_33046[(2)] = true);

(statearr_32991_33046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (14))){
var state_32946__$1 = state_32946;
var statearr_32992_33047 = state_32946__$1;
(statearr_32992_33047[(2)] = false);

(statearr_32992_33047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (26))){
var inst_32906 = (state_32946[(11)]);
var inst_32913 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32906);
var state_32946__$1 = state_32946;
var statearr_32993_33048 = state_32946__$1;
(statearr_32993_33048[(2)] = inst_32913);

(statearr_32993_33048[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (16))){
var state_32946__$1 = state_32946;
var statearr_32994_33049 = state_32946__$1;
(statearr_32994_33049[(2)] = true);

(statearr_32994_33049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (38))){
var inst_32936 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_32995_33050 = state_32946__$1;
(statearr_32995_33050[(2)] = inst_32936);

(statearr_32995_33050[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (30))){
var inst_32899 = (state_32946[(9)]);
var inst_32906 = (state_32946[(11)]);
var inst_32900 = (state_32946[(13)]);
var inst_32923 = cljs.core.empty_QMARK_.call(null,inst_32899);
var inst_32924 = inst_32900.call(null,inst_32906);
var inst_32925 = cljs.core.not.call(null,inst_32924);
var inst_32926 = (inst_32923) && (inst_32925);
var state_32946__$1 = state_32946;
var statearr_32996_33051 = state_32946__$1;
(statearr_32996_33051[(2)] = inst_32926);

(statearr_32996_33051[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (10))){
var inst_32852 = (state_32946[(8)]);
var inst_32872 = (state_32946[(2)]);
var inst_32873 = cljs.core.get.call(null,inst_32872,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32874 = cljs.core.get.call(null,inst_32872,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32875 = cljs.core.get.call(null,inst_32872,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32876 = inst_32852;
var state_32946__$1 = (function (){var statearr_32997 = state_32946;
(statearr_32997[(7)] = inst_32876);

(statearr_32997[(16)] = inst_32874);

(statearr_32997[(17)] = inst_32875);

(statearr_32997[(18)] = inst_32873);

return statearr_32997;
})();
var statearr_32998_33052 = state_32946__$1;
(statearr_32998_33052[(2)] = null);

(statearr_32998_33052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (18))){
var inst_32890 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_32999_33053 = state_32946__$1;
(statearr_32999_33053[(2)] = inst_32890);

(statearr_32999_33053[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (37))){
var state_32946__$1 = state_32946;
var statearr_33000_33054 = state_32946__$1;
(statearr_33000_33054[(2)] = null);

(statearr_33000_33054[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (8))){
var inst_32852 = (state_32946[(8)]);
var inst_32869 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32852);
var state_32946__$1 = state_32946;
var statearr_33001_33055 = state_32946__$1;
(statearr_33001_33055[(2)] = inst_32869);

(statearr_33001_33055[(1)] = (10));


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
});})(c__19438__auto___33009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19373__auto__,c__19438__auto___33009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19374__auto__ = null;
var cljs$core$async$mix_$_state_machine__19374__auto____0 = (function (){
var statearr_33005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33005[(0)] = cljs$core$async$mix_$_state_machine__19374__auto__);

(statearr_33005[(1)] = (1));

return statearr_33005;
});
var cljs$core$async$mix_$_state_machine__19374__auto____1 = (function (state_32946){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_32946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e33006){if((e33006 instanceof Object)){
var ex__19377__auto__ = e33006;
var statearr_33007_33056 = state_32946;
(statearr_33007_33056[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33057 = state_32946;
state_32946 = G__33057;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19374__auto__ = function(state_32946){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19374__auto____1.call(this,state_32946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19374__auto____0;
cljs$core$async$mix_$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19374__auto____1;
return cljs$core$async$mix_$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___33009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19440__auto__ = (function (){var statearr_33008 = f__19439__auto__.call(null);
(statearr_33008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___33009);

return statearr_33008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___33009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args33058 = [];
var len__17416__auto___33061 = arguments.length;
var i__17417__auto___33062 = (0);
while(true){
if((i__17417__auto___33062 < len__17416__auto___33061)){
args33058.push((arguments[i__17417__auto___33062]));

var G__33063 = (i__17417__auto___33062 + (1));
i__17417__auto___33062 = G__33063;
continue;
} else {
}
break;
}

var G__33060 = args33058.length;
switch (G__33060) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33058.length)].join('')));

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
var args33066 = [];
var len__17416__auto___33191 = arguments.length;
var i__17417__auto___33192 = (0);
while(true){
if((i__17417__auto___33192 < len__17416__auto___33191)){
args33066.push((arguments[i__17417__auto___33192]));

var G__33193 = (i__17417__auto___33192 + (1));
i__17417__auto___33192 = G__33193;
continue;
} else {
}
break;
}

var G__33068 = args33066.length;
switch (G__33068) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33066.length)].join('')));

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
return (function (p1__33065_SHARP_){
if(cljs.core.truth_(p1__33065_SHARP_.call(null,topic))){
return p1__33065_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33065_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16358__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33069 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33070){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33070 = meta33070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33071,meta33070__$1){
var self__ = this;
var _33071__$1 = this;
return (new cljs.core.async.t_cljs$core$async33069(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33070__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33071){
var self__ = this;
var _33071__$1 = this;
return self__.meta33070;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33069.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33069.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33069.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33069.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33069.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33069.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33069.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33069.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33070","meta33070",948074857,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33069";

cljs.core.async.t_cljs$core$async33069.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async33069");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33069 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33069(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33070){
return (new cljs.core.async.t_cljs$core$async33069(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33070));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33069(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19438__auto___33195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___33195,mults,ensure_mult,p){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___33195,mults,ensure_mult,p){
return (function (state_33143){
var state_val_33144 = (state_33143[(1)]);
if((state_val_33144 === (7))){
var inst_33139 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33145_33196 = state_33143__$1;
(statearr_33145_33196[(2)] = inst_33139);

(statearr_33145_33196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (20))){
var state_33143__$1 = state_33143;
var statearr_33146_33197 = state_33143__$1;
(statearr_33146_33197[(2)] = null);

(statearr_33146_33197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (1))){
var state_33143__$1 = state_33143;
var statearr_33147_33198 = state_33143__$1;
(statearr_33147_33198[(2)] = null);

(statearr_33147_33198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (24))){
var inst_33122 = (state_33143[(7)]);
var inst_33131 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33122);
var state_33143__$1 = state_33143;
var statearr_33148_33199 = state_33143__$1;
(statearr_33148_33199[(2)] = inst_33131);

(statearr_33148_33199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (4))){
var inst_33074 = (state_33143[(8)]);
var inst_33074__$1 = (state_33143[(2)]);
var inst_33075 = (inst_33074__$1 == null);
var state_33143__$1 = (function (){var statearr_33149 = state_33143;
(statearr_33149[(8)] = inst_33074__$1);

return statearr_33149;
})();
if(cljs.core.truth_(inst_33075)){
var statearr_33150_33200 = state_33143__$1;
(statearr_33150_33200[(1)] = (5));

} else {
var statearr_33151_33201 = state_33143__$1;
(statearr_33151_33201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (15))){
var inst_33116 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33152_33202 = state_33143__$1;
(statearr_33152_33202[(2)] = inst_33116);

(statearr_33152_33202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (21))){
var inst_33136 = (state_33143[(2)]);
var state_33143__$1 = (function (){var statearr_33153 = state_33143;
(statearr_33153[(9)] = inst_33136);

return statearr_33153;
})();
var statearr_33154_33203 = state_33143__$1;
(statearr_33154_33203[(2)] = null);

(statearr_33154_33203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (13))){
var inst_33098 = (state_33143[(10)]);
var inst_33100 = cljs.core.chunked_seq_QMARK_.call(null,inst_33098);
var state_33143__$1 = state_33143;
if(inst_33100){
var statearr_33155_33204 = state_33143__$1;
(statearr_33155_33204[(1)] = (16));

} else {
var statearr_33156_33205 = state_33143__$1;
(statearr_33156_33205[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (22))){
var inst_33128 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
if(cljs.core.truth_(inst_33128)){
var statearr_33157_33206 = state_33143__$1;
(statearr_33157_33206[(1)] = (23));

} else {
var statearr_33158_33207 = state_33143__$1;
(statearr_33158_33207[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (6))){
var inst_33074 = (state_33143[(8)]);
var inst_33124 = (state_33143[(11)]);
var inst_33122 = (state_33143[(7)]);
var inst_33122__$1 = topic_fn.call(null,inst_33074);
var inst_33123 = cljs.core.deref.call(null,mults);
var inst_33124__$1 = cljs.core.get.call(null,inst_33123,inst_33122__$1);
var state_33143__$1 = (function (){var statearr_33159 = state_33143;
(statearr_33159[(11)] = inst_33124__$1);

(statearr_33159[(7)] = inst_33122__$1);

return statearr_33159;
})();
if(cljs.core.truth_(inst_33124__$1)){
var statearr_33160_33208 = state_33143__$1;
(statearr_33160_33208[(1)] = (19));

} else {
var statearr_33161_33209 = state_33143__$1;
(statearr_33161_33209[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (25))){
var inst_33133 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33162_33210 = state_33143__$1;
(statearr_33162_33210[(2)] = inst_33133);

(statearr_33162_33210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (17))){
var inst_33098 = (state_33143[(10)]);
var inst_33107 = cljs.core.first.call(null,inst_33098);
var inst_33108 = cljs.core.async.muxch_STAR_.call(null,inst_33107);
var inst_33109 = cljs.core.async.close_BANG_.call(null,inst_33108);
var inst_33110 = cljs.core.next.call(null,inst_33098);
var inst_33084 = inst_33110;
var inst_33085 = null;
var inst_33086 = (0);
var inst_33087 = (0);
var state_33143__$1 = (function (){var statearr_33163 = state_33143;
(statearr_33163[(12)] = inst_33109);

(statearr_33163[(13)] = inst_33086);

(statearr_33163[(14)] = inst_33087);

(statearr_33163[(15)] = inst_33084);

(statearr_33163[(16)] = inst_33085);

return statearr_33163;
})();
var statearr_33164_33211 = state_33143__$1;
(statearr_33164_33211[(2)] = null);

(statearr_33164_33211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (3))){
var inst_33141 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33143__$1,inst_33141);
} else {
if((state_val_33144 === (12))){
var inst_33118 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33165_33212 = state_33143__$1;
(statearr_33165_33212[(2)] = inst_33118);

(statearr_33165_33212[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (2))){
var state_33143__$1 = state_33143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33143__$1,(4),ch);
} else {
if((state_val_33144 === (23))){
var state_33143__$1 = state_33143;
var statearr_33166_33213 = state_33143__$1;
(statearr_33166_33213[(2)] = null);

(statearr_33166_33213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (19))){
var inst_33074 = (state_33143[(8)]);
var inst_33124 = (state_33143[(11)]);
var inst_33126 = cljs.core.async.muxch_STAR_.call(null,inst_33124);
var state_33143__$1 = state_33143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33143__$1,(22),inst_33126,inst_33074);
} else {
if((state_val_33144 === (11))){
var inst_33084 = (state_33143[(15)]);
var inst_33098 = (state_33143[(10)]);
var inst_33098__$1 = cljs.core.seq.call(null,inst_33084);
var state_33143__$1 = (function (){var statearr_33167 = state_33143;
(statearr_33167[(10)] = inst_33098__$1);

return statearr_33167;
})();
if(inst_33098__$1){
var statearr_33168_33214 = state_33143__$1;
(statearr_33168_33214[(1)] = (13));

} else {
var statearr_33169_33215 = state_33143__$1;
(statearr_33169_33215[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (9))){
var inst_33120 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33170_33216 = state_33143__$1;
(statearr_33170_33216[(2)] = inst_33120);

(statearr_33170_33216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (5))){
var inst_33081 = cljs.core.deref.call(null,mults);
var inst_33082 = cljs.core.vals.call(null,inst_33081);
var inst_33083 = cljs.core.seq.call(null,inst_33082);
var inst_33084 = inst_33083;
var inst_33085 = null;
var inst_33086 = (0);
var inst_33087 = (0);
var state_33143__$1 = (function (){var statearr_33171 = state_33143;
(statearr_33171[(13)] = inst_33086);

(statearr_33171[(14)] = inst_33087);

(statearr_33171[(15)] = inst_33084);

(statearr_33171[(16)] = inst_33085);

return statearr_33171;
})();
var statearr_33172_33217 = state_33143__$1;
(statearr_33172_33217[(2)] = null);

(statearr_33172_33217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (14))){
var state_33143__$1 = state_33143;
var statearr_33176_33218 = state_33143__$1;
(statearr_33176_33218[(2)] = null);

(statearr_33176_33218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (16))){
var inst_33098 = (state_33143[(10)]);
var inst_33102 = cljs.core.chunk_first.call(null,inst_33098);
var inst_33103 = cljs.core.chunk_rest.call(null,inst_33098);
var inst_33104 = cljs.core.count.call(null,inst_33102);
var inst_33084 = inst_33103;
var inst_33085 = inst_33102;
var inst_33086 = inst_33104;
var inst_33087 = (0);
var state_33143__$1 = (function (){var statearr_33177 = state_33143;
(statearr_33177[(13)] = inst_33086);

(statearr_33177[(14)] = inst_33087);

(statearr_33177[(15)] = inst_33084);

(statearr_33177[(16)] = inst_33085);

return statearr_33177;
})();
var statearr_33178_33219 = state_33143__$1;
(statearr_33178_33219[(2)] = null);

(statearr_33178_33219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (10))){
var inst_33086 = (state_33143[(13)]);
var inst_33087 = (state_33143[(14)]);
var inst_33084 = (state_33143[(15)]);
var inst_33085 = (state_33143[(16)]);
var inst_33092 = cljs.core._nth.call(null,inst_33085,inst_33087);
var inst_33093 = cljs.core.async.muxch_STAR_.call(null,inst_33092);
var inst_33094 = cljs.core.async.close_BANG_.call(null,inst_33093);
var inst_33095 = (inst_33087 + (1));
var tmp33173 = inst_33086;
var tmp33174 = inst_33084;
var tmp33175 = inst_33085;
var inst_33084__$1 = tmp33174;
var inst_33085__$1 = tmp33175;
var inst_33086__$1 = tmp33173;
var inst_33087__$1 = inst_33095;
var state_33143__$1 = (function (){var statearr_33179 = state_33143;
(statearr_33179[(13)] = inst_33086__$1);

(statearr_33179[(14)] = inst_33087__$1);

(statearr_33179[(15)] = inst_33084__$1);

(statearr_33179[(17)] = inst_33094);

(statearr_33179[(16)] = inst_33085__$1);

return statearr_33179;
})();
var statearr_33180_33220 = state_33143__$1;
(statearr_33180_33220[(2)] = null);

(statearr_33180_33220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (18))){
var inst_33113 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33181_33221 = state_33143__$1;
(statearr_33181_33221[(2)] = inst_33113);

(statearr_33181_33221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (8))){
var inst_33086 = (state_33143[(13)]);
var inst_33087 = (state_33143[(14)]);
var inst_33089 = (inst_33087 < inst_33086);
var inst_33090 = inst_33089;
var state_33143__$1 = state_33143;
if(cljs.core.truth_(inst_33090)){
var statearr_33182_33222 = state_33143__$1;
(statearr_33182_33222[(1)] = (10));

} else {
var statearr_33183_33223 = state_33143__$1;
(statearr_33183_33223[(1)] = (11));

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
});})(c__19438__auto___33195,mults,ensure_mult,p))
;
return ((function (switch__19373__auto__,c__19438__auto___33195,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_33187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33187[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_33187[(1)] = (1));

return statearr_33187;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_33143){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_33143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e33188){if((e33188 instanceof Object)){
var ex__19377__auto__ = e33188;
var statearr_33189_33224 = state_33143;
(statearr_33189_33224[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33225 = state_33143;
state_33143 = G__33225;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_33143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_33143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___33195,mults,ensure_mult,p))
})();
var state__19440__auto__ = (function (){var statearr_33190 = f__19439__auto__.call(null);
(statearr_33190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___33195);

return statearr_33190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___33195,mults,ensure_mult,p))
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
var args33226 = [];
var len__17416__auto___33229 = arguments.length;
var i__17417__auto___33230 = (0);
while(true){
if((i__17417__auto___33230 < len__17416__auto___33229)){
args33226.push((arguments[i__17417__auto___33230]));

var G__33231 = (i__17417__auto___33230 + (1));
i__17417__auto___33230 = G__33231;
continue;
} else {
}
break;
}

var G__33228 = args33226.length;
switch (G__33228) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33226.length)].join('')));

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
var args33233 = [];
var len__17416__auto___33236 = arguments.length;
var i__17417__auto___33237 = (0);
while(true){
if((i__17417__auto___33237 < len__17416__auto___33236)){
args33233.push((arguments[i__17417__auto___33237]));

var G__33238 = (i__17417__auto___33237 + (1));
i__17417__auto___33237 = G__33238;
continue;
} else {
}
break;
}

var G__33235 = args33233.length;
switch (G__33235) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33233.length)].join('')));

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
var args33240 = [];
var len__17416__auto___33311 = arguments.length;
var i__17417__auto___33312 = (0);
while(true){
if((i__17417__auto___33312 < len__17416__auto___33311)){
args33240.push((arguments[i__17417__auto___33312]));

var G__33313 = (i__17417__auto___33312 + (1));
i__17417__auto___33312 = G__33313;
continue;
} else {
}
break;
}

var G__33242 = args33240.length;
switch (G__33242) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33240.length)].join('')));

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
var c__19438__auto___33315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___33315,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___33315,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33281){
var state_val_33282 = (state_33281[(1)]);
if((state_val_33282 === (7))){
var state_33281__$1 = state_33281;
var statearr_33283_33316 = state_33281__$1;
(statearr_33283_33316[(2)] = null);

(statearr_33283_33316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (1))){
var state_33281__$1 = state_33281;
var statearr_33284_33317 = state_33281__$1;
(statearr_33284_33317[(2)] = null);

(statearr_33284_33317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (4))){
var inst_33245 = (state_33281[(7)]);
var inst_33247 = (inst_33245 < cnt);
var state_33281__$1 = state_33281;
if(cljs.core.truth_(inst_33247)){
var statearr_33285_33318 = state_33281__$1;
(statearr_33285_33318[(1)] = (6));

} else {
var statearr_33286_33319 = state_33281__$1;
(statearr_33286_33319[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (15))){
var inst_33277 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33287_33320 = state_33281__$1;
(statearr_33287_33320[(2)] = inst_33277);

(statearr_33287_33320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (13))){
var inst_33270 = cljs.core.async.close_BANG_.call(null,out);
var state_33281__$1 = state_33281;
var statearr_33288_33321 = state_33281__$1;
(statearr_33288_33321[(2)] = inst_33270);

(statearr_33288_33321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (6))){
var state_33281__$1 = state_33281;
var statearr_33289_33322 = state_33281__$1;
(statearr_33289_33322[(2)] = null);

(statearr_33289_33322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (3))){
var inst_33279 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33281__$1,inst_33279);
} else {
if((state_val_33282 === (12))){
var inst_33267 = (state_33281[(8)]);
var inst_33267__$1 = (state_33281[(2)]);
var inst_33268 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33267__$1);
var state_33281__$1 = (function (){var statearr_33290 = state_33281;
(statearr_33290[(8)] = inst_33267__$1);

return statearr_33290;
})();
if(cljs.core.truth_(inst_33268)){
var statearr_33291_33323 = state_33281__$1;
(statearr_33291_33323[(1)] = (13));

} else {
var statearr_33292_33324 = state_33281__$1;
(statearr_33292_33324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (2))){
var inst_33244 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33245 = (0);
var state_33281__$1 = (function (){var statearr_33293 = state_33281;
(statearr_33293[(7)] = inst_33245);

(statearr_33293[(9)] = inst_33244);

return statearr_33293;
})();
var statearr_33294_33325 = state_33281__$1;
(statearr_33294_33325[(2)] = null);

(statearr_33294_33325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (11))){
var inst_33245 = (state_33281[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33281,(10),Object,null,(9));
var inst_33254 = chs__$1.call(null,inst_33245);
var inst_33255 = done.call(null,inst_33245);
var inst_33256 = cljs.core.async.take_BANG_.call(null,inst_33254,inst_33255);
var state_33281__$1 = state_33281;
var statearr_33295_33326 = state_33281__$1;
(statearr_33295_33326[(2)] = inst_33256);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33281__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (9))){
var inst_33245 = (state_33281[(7)]);
var inst_33258 = (state_33281[(2)]);
var inst_33259 = (inst_33245 + (1));
var inst_33245__$1 = inst_33259;
var state_33281__$1 = (function (){var statearr_33296 = state_33281;
(statearr_33296[(10)] = inst_33258);

(statearr_33296[(7)] = inst_33245__$1);

return statearr_33296;
})();
var statearr_33297_33327 = state_33281__$1;
(statearr_33297_33327[(2)] = null);

(statearr_33297_33327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (5))){
var inst_33265 = (state_33281[(2)]);
var state_33281__$1 = (function (){var statearr_33298 = state_33281;
(statearr_33298[(11)] = inst_33265);

return statearr_33298;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33281__$1,(12),dchan);
} else {
if((state_val_33282 === (14))){
var inst_33267 = (state_33281[(8)]);
var inst_33272 = cljs.core.apply.call(null,f,inst_33267);
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33281__$1,(16),out,inst_33272);
} else {
if((state_val_33282 === (16))){
var inst_33274 = (state_33281[(2)]);
var state_33281__$1 = (function (){var statearr_33299 = state_33281;
(statearr_33299[(12)] = inst_33274);

return statearr_33299;
})();
var statearr_33300_33328 = state_33281__$1;
(statearr_33300_33328[(2)] = null);

(statearr_33300_33328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (10))){
var inst_33249 = (state_33281[(2)]);
var inst_33250 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33281__$1 = (function (){var statearr_33301 = state_33281;
(statearr_33301[(13)] = inst_33249);

return statearr_33301;
})();
var statearr_33302_33329 = state_33281__$1;
(statearr_33302_33329[(2)] = inst_33250);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33281__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (8))){
var inst_33263 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33303_33330 = state_33281__$1;
(statearr_33303_33330[(2)] = inst_33263);

(statearr_33303_33330[(1)] = (5));


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
});})(c__19438__auto___33315,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19373__auto__,c__19438__auto___33315,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_33307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33307[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_33307[(1)] = (1));

return statearr_33307;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_33281){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_33281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e33308){if((e33308 instanceof Object)){
var ex__19377__auto__ = e33308;
var statearr_33309_33331 = state_33281;
(statearr_33309_33331[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33332 = state_33281;
state_33281 = G__33332;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_33281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_33281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___33315,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19440__auto__ = (function (){var statearr_33310 = f__19439__auto__.call(null);
(statearr_33310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___33315);

return statearr_33310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___33315,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33334 = [];
var len__17416__auto___33390 = arguments.length;
var i__17417__auto___33391 = (0);
while(true){
if((i__17417__auto___33391 < len__17416__auto___33390)){
args33334.push((arguments[i__17417__auto___33391]));

var G__33392 = (i__17417__auto___33391 + (1));
i__17417__auto___33391 = G__33392;
continue;
} else {
}
break;
}

var G__33336 = args33334.length;
switch (G__33336) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33334.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___33394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___33394,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___33394,out){
return (function (state_33366){
var state_val_33367 = (state_33366[(1)]);
if((state_val_33367 === (7))){
var inst_33346 = (state_33366[(7)]);
var inst_33345 = (state_33366[(8)]);
var inst_33345__$1 = (state_33366[(2)]);
var inst_33346__$1 = cljs.core.nth.call(null,inst_33345__$1,(0),null);
var inst_33347 = cljs.core.nth.call(null,inst_33345__$1,(1),null);
var inst_33348 = (inst_33346__$1 == null);
var state_33366__$1 = (function (){var statearr_33368 = state_33366;
(statearr_33368[(9)] = inst_33347);

(statearr_33368[(7)] = inst_33346__$1);

(statearr_33368[(8)] = inst_33345__$1);

return statearr_33368;
})();
if(cljs.core.truth_(inst_33348)){
var statearr_33369_33395 = state_33366__$1;
(statearr_33369_33395[(1)] = (8));

} else {
var statearr_33370_33396 = state_33366__$1;
(statearr_33370_33396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (1))){
var inst_33337 = cljs.core.vec.call(null,chs);
var inst_33338 = inst_33337;
var state_33366__$1 = (function (){var statearr_33371 = state_33366;
(statearr_33371[(10)] = inst_33338);

return statearr_33371;
})();
var statearr_33372_33397 = state_33366__$1;
(statearr_33372_33397[(2)] = null);

(statearr_33372_33397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (4))){
var inst_33338 = (state_33366[(10)]);
var state_33366__$1 = state_33366;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33366__$1,(7),inst_33338);
} else {
if((state_val_33367 === (6))){
var inst_33362 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
var statearr_33373_33398 = state_33366__$1;
(statearr_33373_33398[(2)] = inst_33362);

(statearr_33373_33398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (3))){
var inst_33364 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33366__$1,inst_33364);
} else {
if((state_val_33367 === (2))){
var inst_33338 = (state_33366[(10)]);
var inst_33340 = cljs.core.count.call(null,inst_33338);
var inst_33341 = (inst_33340 > (0));
var state_33366__$1 = state_33366;
if(cljs.core.truth_(inst_33341)){
var statearr_33375_33399 = state_33366__$1;
(statearr_33375_33399[(1)] = (4));

} else {
var statearr_33376_33400 = state_33366__$1;
(statearr_33376_33400[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (11))){
var inst_33338 = (state_33366[(10)]);
var inst_33355 = (state_33366[(2)]);
var tmp33374 = inst_33338;
var inst_33338__$1 = tmp33374;
var state_33366__$1 = (function (){var statearr_33377 = state_33366;
(statearr_33377[(11)] = inst_33355);

(statearr_33377[(10)] = inst_33338__$1);

return statearr_33377;
})();
var statearr_33378_33401 = state_33366__$1;
(statearr_33378_33401[(2)] = null);

(statearr_33378_33401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (9))){
var inst_33346 = (state_33366[(7)]);
var state_33366__$1 = state_33366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33366__$1,(11),out,inst_33346);
} else {
if((state_val_33367 === (5))){
var inst_33360 = cljs.core.async.close_BANG_.call(null,out);
var state_33366__$1 = state_33366;
var statearr_33379_33402 = state_33366__$1;
(statearr_33379_33402[(2)] = inst_33360);

(statearr_33379_33402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (10))){
var inst_33358 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
var statearr_33380_33403 = state_33366__$1;
(statearr_33380_33403[(2)] = inst_33358);

(statearr_33380_33403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (8))){
var inst_33347 = (state_33366[(9)]);
var inst_33346 = (state_33366[(7)]);
var inst_33338 = (state_33366[(10)]);
var inst_33345 = (state_33366[(8)]);
var inst_33350 = (function (){var cs = inst_33338;
var vec__33343 = inst_33345;
var v = inst_33346;
var c = inst_33347;
return ((function (cs,vec__33343,v,c,inst_33347,inst_33346,inst_33338,inst_33345,state_val_33367,c__19438__auto___33394,out){
return (function (p1__33333_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33333_SHARP_);
});
;})(cs,vec__33343,v,c,inst_33347,inst_33346,inst_33338,inst_33345,state_val_33367,c__19438__auto___33394,out))
})();
var inst_33351 = cljs.core.filterv.call(null,inst_33350,inst_33338);
var inst_33338__$1 = inst_33351;
var state_33366__$1 = (function (){var statearr_33381 = state_33366;
(statearr_33381[(10)] = inst_33338__$1);

return statearr_33381;
})();
var statearr_33382_33404 = state_33366__$1;
(statearr_33382_33404[(2)] = null);

(statearr_33382_33404[(1)] = (2));


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
});})(c__19438__auto___33394,out))
;
return ((function (switch__19373__auto__,c__19438__auto___33394,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_33386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33386[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_33386[(1)] = (1));

return statearr_33386;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_33366){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_33366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e33387){if((e33387 instanceof Object)){
var ex__19377__auto__ = e33387;
var statearr_33388_33405 = state_33366;
(statearr_33388_33405[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33406 = state_33366;
state_33366 = G__33406;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_33366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_33366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___33394,out))
})();
var state__19440__auto__ = (function (){var statearr_33389 = f__19439__auto__.call(null);
(statearr_33389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___33394);

return statearr_33389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___33394,out))
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
var args33407 = [];
var len__17416__auto___33456 = arguments.length;
var i__17417__auto___33457 = (0);
while(true){
if((i__17417__auto___33457 < len__17416__auto___33456)){
args33407.push((arguments[i__17417__auto___33457]));

var G__33458 = (i__17417__auto___33457 + (1));
i__17417__auto___33457 = G__33458;
continue;
} else {
}
break;
}

var G__33409 = args33407.length;
switch (G__33409) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33407.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___33460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___33460,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___33460,out){
return (function (state_33433){
var state_val_33434 = (state_33433[(1)]);
if((state_val_33434 === (7))){
var inst_33415 = (state_33433[(7)]);
var inst_33415__$1 = (state_33433[(2)]);
var inst_33416 = (inst_33415__$1 == null);
var inst_33417 = cljs.core.not.call(null,inst_33416);
var state_33433__$1 = (function (){var statearr_33435 = state_33433;
(statearr_33435[(7)] = inst_33415__$1);

return statearr_33435;
})();
if(inst_33417){
var statearr_33436_33461 = state_33433__$1;
(statearr_33436_33461[(1)] = (8));

} else {
var statearr_33437_33462 = state_33433__$1;
(statearr_33437_33462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33434 === (1))){
var inst_33410 = (0);
var state_33433__$1 = (function (){var statearr_33438 = state_33433;
(statearr_33438[(8)] = inst_33410);

return statearr_33438;
})();
var statearr_33439_33463 = state_33433__$1;
(statearr_33439_33463[(2)] = null);

(statearr_33439_33463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33434 === (4))){
var state_33433__$1 = state_33433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33433__$1,(7),ch);
} else {
if((state_val_33434 === (6))){
var inst_33428 = (state_33433[(2)]);
var state_33433__$1 = state_33433;
var statearr_33440_33464 = state_33433__$1;
(statearr_33440_33464[(2)] = inst_33428);

(statearr_33440_33464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33434 === (3))){
var inst_33430 = (state_33433[(2)]);
var inst_33431 = cljs.core.async.close_BANG_.call(null,out);
var state_33433__$1 = (function (){var statearr_33441 = state_33433;
(statearr_33441[(9)] = inst_33430);

return statearr_33441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33433__$1,inst_33431);
} else {
if((state_val_33434 === (2))){
var inst_33410 = (state_33433[(8)]);
var inst_33412 = (inst_33410 < n);
var state_33433__$1 = state_33433;
if(cljs.core.truth_(inst_33412)){
var statearr_33442_33465 = state_33433__$1;
(statearr_33442_33465[(1)] = (4));

} else {
var statearr_33443_33466 = state_33433__$1;
(statearr_33443_33466[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33434 === (11))){
var inst_33410 = (state_33433[(8)]);
var inst_33420 = (state_33433[(2)]);
var inst_33421 = (inst_33410 + (1));
var inst_33410__$1 = inst_33421;
var state_33433__$1 = (function (){var statearr_33444 = state_33433;
(statearr_33444[(10)] = inst_33420);

(statearr_33444[(8)] = inst_33410__$1);

return statearr_33444;
})();
var statearr_33445_33467 = state_33433__$1;
(statearr_33445_33467[(2)] = null);

(statearr_33445_33467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33434 === (9))){
var state_33433__$1 = state_33433;
var statearr_33446_33468 = state_33433__$1;
(statearr_33446_33468[(2)] = null);

(statearr_33446_33468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33434 === (5))){
var state_33433__$1 = state_33433;
var statearr_33447_33469 = state_33433__$1;
(statearr_33447_33469[(2)] = null);

(statearr_33447_33469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33434 === (10))){
var inst_33425 = (state_33433[(2)]);
var state_33433__$1 = state_33433;
var statearr_33448_33470 = state_33433__$1;
(statearr_33448_33470[(2)] = inst_33425);

(statearr_33448_33470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33434 === (8))){
var inst_33415 = (state_33433[(7)]);
var state_33433__$1 = state_33433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33433__$1,(11),out,inst_33415);
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
});})(c__19438__auto___33460,out))
;
return ((function (switch__19373__auto__,c__19438__auto___33460,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_33452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33452[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_33452[(1)] = (1));

return statearr_33452;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_33433){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_33433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e33453){if((e33453 instanceof Object)){
var ex__19377__auto__ = e33453;
var statearr_33454_33471 = state_33433;
(statearr_33454_33471[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33472 = state_33433;
state_33433 = G__33472;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_33433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_33433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___33460,out))
})();
var state__19440__auto__ = (function (){var statearr_33455 = f__19439__auto__.call(null);
(statearr_33455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___33460);

return statearr_33455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___33460,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33480 = (function (map_LT_,f,ch,meta33481){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33481 = meta33481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33482,meta33481__$1){
var self__ = this;
var _33482__$1 = this;
return (new cljs.core.async.t_cljs$core$async33480(self__.map_LT_,self__.f,self__.ch,meta33481__$1));
});

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33482){
var self__ = this;
var _33482__$1 = this;
return self__.meta33481;
});

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33483 = (function (map_LT_,f,ch,meta33481,_,fn1,meta33484){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33481 = meta33481;
this._ = _;
this.fn1 = fn1;
this.meta33484 = meta33484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33485,meta33484__$1){
var self__ = this;
var _33485__$1 = this;
return (new cljs.core.async.t_cljs$core$async33483(self__.map_LT_,self__.f,self__.ch,self__.meta33481,self__._,self__.fn1,meta33484__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33485){
var self__ = this;
var _33485__$1 = this;
return self__.meta33484;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33473_SHARP_){
return f1.call(null,(((p1__33473_SHARP_ == null))?null:self__.f.call(null,p1__33473_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33483.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33481","meta33481",1909387096,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33480","cljs.core.async/t_cljs$core$async33480",-275865389,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33484","meta33484",-2024025573,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33483";

cljs.core.async.t_cljs$core$async33483.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async33483");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33483 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33483(map_LT___$1,f__$1,ch__$1,meta33481__$1,___$2,fn1__$1,meta33484){
return (new cljs.core.async.t_cljs$core$async33483(map_LT___$1,f__$1,ch__$1,meta33481__$1,___$2,fn1__$1,meta33484));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33483(self__.map_LT_,self__.f,self__.ch,self__.meta33481,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33481","meta33481",1909387096,null)], null);
});

cljs.core.async.t_cljs$core$async33480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33480";

cljs.core.async.t_cljs$core$async33480.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async33480");
});

cljs.core.async.__GT_t_cljs$core$async33480 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33480(map_LT___$1,f__$1,ch__$1,meta33481){
return (new cljs.core.async.t_cljs$core$async33480(map_LT___$1,f__$1,ch__$1,meta33481));
});

}

return (new cljs.core.async.t_cljs$core$async33480(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33489 = (function (map_GT_,f,ch,meta33490){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33490 = meta33490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33491,meta33490__$1){
var self__ = this;
var _33491__$1 = this;
return (new cljs.core.async.t_cljs$core$async33489(self__.map_GT_,self__.f,self__.ch,meta33490__$1));
});

cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33491){
var self__ = this;
var _33491__$1 = this;
return self__.meta33490;
});

cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33490","meta33490",-1671501259,null)], null);
});

cljs.core.async.t_cljs$core$async33489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33489";

cljs.core.async.t_cljs$core$async33489.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async33489");
});

cljs.core.async.__GT_t_cljs$core$async33489 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33489(map_GT___$1,f__$1,ch__$1,meta33490){
return (new cljs.core.async.t_cljs$core$async33489(map_GT___$1,f__$1,ch__$1,meta33490));
});

}

return (new cljs.core.async.t_cljs$core$async33489(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33495 = (function (filter_GT_,p,ch,meta33496){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33496 = meta33496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33497,meta33496__$1){
var self__ = this;
var _33497__$1 = this;
return (new cljs.core.async.t_cljs$core$async33495(self__.filter_GT_,self__.p,self__.ch,meta33496__$1));
});

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33497){
var self__ = this;
var _33497__$1 = this;
return self__.meta33496;
});

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33496","meta33496",-1462775882,null)], null);
});

cljs.core.async.t_cljs$core$async33495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33495";

cljs.core.async.t_cljs$core$async33495.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async33495");
});

cljs.core.async.__GT_t_cljs$core$async33495 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33495(filter_GT___$1,p__$1,ch__$1,meta33496){
return (new cljs.core.async.t_cljs$core$async33495(filter_GT___$1,p__$1,ch__$1,meta33496));
});

}

return (new cljs.core.async.t_cljs$core$async33495(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33498 = [];
var len__17416__auto___33542 = arguments.length;
var i__17417__auto___33543 = (0);
while(true){
if((i__17417__auto___33543 < len__17416__auto___33542)){
args33498.push((arguments[i__17417__auto___33543]));

var G__33544 = (i__17417__auto___33543 + (1));
i__17417__auto___33543 = G__33544;
continue;
} else {
}
break;
}

var G__33500 = args33498.length;
switch (G__33500) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33498.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___33546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___33546,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___33546,out){
return (function (state_33521){
var state_val_33522 = (state_33521[(1)]);
if((state_val_33522 === (7))){
var inst_33517 = (state_33521[(2)]);
var state_33521__$1 = state_33521;
var statearr_33523_33547 = state_33521__$1;
(statearr_33523_33547[(2)] = inst_33517);

(statearr_33523_33547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (1))){
var state_33521__$1 = state_33521;
var statearr_33524_33548 = state_33521__$1;
(statearr_33524_33548[(2)] = null);

(statearr_33524_33548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (4))){
var inst_33503 = (state_33521[(7)]);
var inst_33503__$1 = (state_33521[(2)]);
var inst_33504 = (inst_33503__$1 == null);
var state_33521__$1 = (function (){var statearr_33525 = state_33521;
(statearr_33525[(7)] = inst_33503__$1);

return statearr_33525;
})();
if(cljs.core.truth_(inst_33504)){
var statearr_33526_33549 = state_33521__$1;
(statearr_33526_33549[(1)] = (5));

} else {
var statearr_33527_33550 = state_33521__$1;
(statearr_33527_33550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (6))){
var inst_33503 = (state_33521[(7)]);
var inst_33508 = p.call(null,inst_33503);
var state_33521__$1 = state_33521;
if(cljs.core.truth_(inst_33508)){
var statearr_33528_33551 = state_33521__$1;
(statearr_33528_33551[(1)] = (8));

} else {
var statearr_33529_33552 = state_33521__$1;
(statearr_33529_33552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (3))){
var inst_33519 = (state_33521[(2)]);
var state_33521__$1 = state_33521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33521__$1,inst_33519);
} else {
if((state_val_33522 === (2))){
var state_33521__$1 = state_33521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33521__$1,(4),ch);
} else {
if((state_val_33522 === (11))){
var inst_33511 = (state_33521[(2)]);
var state_33521__$1 = state_33521;
var statearr_33530_33553 = state_33521__$1;
(statearr_33530_33553[(2)] = inst_33511);

(statearr_33530_33553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (9))){
var state_33521__$1 = state_33521;
var statearr_33531_33554 = state_33521__$1;
(statearr_33531_33554[(2)] = null);

(statearr_33531_33554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (5))){
var inst_33506 = cljs.core.async.close_BANG_.call(null,out);
var state_33521__$1 = state_33521;
var statearr_33532_33555 = state_33521__$1;
(statearr_33532_33555[(2)] = inst_33506);

(statearr_33532_33555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (10))){
var inst_33514 = (state_33521[(2)]);
var state_33521__$1 = (function (){var statearr_33533 = state_33521;
(statearr_33533[(8)] = inst_33514);

return statearr_33533;
})();
var statearr_33534_33556 = state_33521__$1;
(statearr_33534_33556[(2)] = null);

(statearr_33534_33556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (8))){
var inst_33503 = (state_33521[(7)]);
var state_33521__$1 = state_33521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33521__$1,(11),out,inst_33503);
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
});})(c__19438__auto___33546,out))
;
return ((function (switch__19373__auto__,c__19438__auto___33546,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_33538 = [null,null,null,null,null,null,null,null,null];
(statearr_33538[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_33538[(1)] = (1));

return statearr_33538;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_33521){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_33521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e33539){if((e33539 instanceof Object)){
var ex__19377__auto__ = e33539;
var statearr_33540_33557 = state_33521;
(statearr_33540_33557[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33558 = state_33521;
state_33521 = G__33558;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_33521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_33521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___33546,out))
})();
var state__19440__auto__ = (function (){var statearr_33541 = f__19439__auto__.call(null);
(statearr_33541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___33546);

return statearr_33541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___33546,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33559 = [];
var len__17416__auto___33562 = arguments.length;
var i__17417__auto___33563 = (0);
while(true){
if((i__17417__auto___33563 < len__17416__auto___33562)){
args33559.push((arguments[i__17417__auto___33563]));

var G__33564 = (i__17417__auto___33563 + (1));
i__17417__auto___33563 = G__33564;
continue;
} else {
}
break;
}

var G__33561 = args33559.length;
switch (G__33561) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33559.length)].join('')));

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
var c__19438__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto__){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto__){
return (function (state_33731){
var state_val_33732 = (state_33731[(1)]);
if((state_val_33732 === (7))){
var inst_33727 = (state_33731[(2)]);
var state_33731__$1 = state_33731;
var statearr_33733_33774 = state_33731__$1;
(statearr_33733_33774[(2)] = inst_33727);

(statearr_33733_33774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (20))){
var inst_33697 = (state_33731[(7)]);
var inst_33708 = (state_33731[(2)]);
var inst_33709 = cljs.core.next.call(null,inst_33697);
var inst_33683 = inst_33709;
var inst_33684 = null;
var inst_33685 = (0);
var inst_33686 = (0);
var state_33731__$1 = (function (){var statearr_33734 = state_33731;
(statearr_33734[(8)] = inst_33708);

(statearr_33734[(9)] = inst_33685);

(statearr_33734[(10)] = inst_33686);

(statearr_33734[(11)] = inst_33683);

(statearr_33734[(12)] = inst_33684);

return statearr_33734;
})();
var statearr_33735_33775 = state_33731__$1;
(statearr_33735_33775[(2)] = null);

(statearr_33735_33775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (1))){
var state_33731__$1 = state_33731;
var statearr_33736_33776 = state_33731__$1;
(statearr_33736_33776[(2)] = null);

(statearr_33736_33776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (4))){
var inst_33672 = (state_33731[(13)]);
var inst_33672__$1 = (state_33731[(2)]);
var inst_33673 = (inst_33672__$1 == null);
var state_33731__$1 = (function (){var statearr_33737 = state_33731;
(statearr_33737[(13)] = inst_33672__$1);

return statearr_33737;
})();
if(cljs.core.truth_(inst_33673)){
var statearr_33738_33777 = state_33731__$1;
(statearr_33738_33777[(1)] = (5));

} else {
var statearr_33739_33778 = state_33731__$1;
(statearr_33739_33778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (15))){
var state_33731__$1 = state_33731;
var statearr_33743_33779 = state_33731__$1;
(statearr_33743_33779[(2)] = null);

(statearr_33743_33779[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (21))){
var state_33731__$1 = state_33731;
var statearr_33744_33780 = state_33731__$1;
(statearr_33744_33780[(2)] = null);

(statearr_33744_33780[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (13))){
var inst_33685 = (state_33731[(9)]);
var inst_33686 = (state_33731[(10)]);
var inst_33683 = (state_33731[(11)]);
var inst_33684 = (state_33731[(12)]);
var inst_33693 = (state_33731[(2)]);
var inst_33694 = (inst_33686 + (1));
var tmp33740 = inst_33685;
var tmp33741 = inst_33683;
var tmp33742 = inst_33684;
var inst_33683__$1 = tmp33741;
var inst_33684__$1 = tmp33742;
var inst_33685__$1 = tmp33740;
var inst_33686__$1 = inst_33694;
var state_33731__$1 = (function (){var statearr_33745 = state_33731;
(statearr_33745[(14)] = inst_33693);

(statearr_33745[(9)] = inst_33685__$1);

(statearr_33745[(10)] = inst_33686__$1);

(statearr_33745[(11)] = inst_33683__$1);

(statearr_33745[(12)] = inst_33684__$1);

return statearr_33745;
})();
var statearr_33746_33781 = state_33731__$1;
(statearr_33746_33781[(2)] = null);

(statearr_33746_33781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (22))){
var state_33731__$1 = state_33731;
var statearr_33747_33782 = state_33731__$1;
(statearr_33747_33782[(2)] = null);

(statearr_33747_33782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (6))){
var inst_33672 = (state_33731[(13)]);
var inst_33681 = f.call(null,inst_33672);
var inst_33682 = cljs.core.seq.call(null,inst_33681);
var inst_33683 = inst_33682;
var inst_33684 = null;
var inst_33685 = (0);
var inst_33686 = (0);
var state_33731__$1 = (function (){var statearr_33748 = state_33731;
(statearr_33748[(9)] = inst_33685);

(statearr_33748[(10)] = inst_33686);

(statearr_33748[(11)] = inst_33683);

(statearr_33748[(12)] = inst_33684);

return statearr_33748;
})();
var statearr_33749_33783 = state_33731__$1;
(statearr_33749_33783[(2)] = null);

(statearr_33749_33783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (17))){
var inst_33697 = (state_33731[(7)]);
var inst_33701 = cljs.core.chunk_first.call(null,inst_33697);
var inst_33702 = cljs.core.chunk_rest.call(null,inst_33697);
var inst_33703 = cljs.core.count.call(null,inst_33701);
var inst_33683 = inst_33702;
var inst_33684 = inst_33701;
var inst_33685 = inst_33703;
var inst_33686 = (0);
var state_33731__$1 = (function (){var statearr_33750 = state_33731;
(statearr_33750[(9)] = inst_33685);

(statearr_33750[(10)] = inst_33686);

(statearr_33750[(11)] = inst_33683);

(statearr_33750[(12)] = inst_33684);

return statearr_33750;
})();
var statearr_33751_33784 = state_33731__$1;
(statearr_33751_33784[(2)] = null);

(statearr_33751_33784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (3))){
var inst_33729 = (state_33731[(2)]);
var state_33731__$1 = state_33731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33731__$1,inst_33729);
} else {
if((state_val_33732 === (12))){
var inst_33717 = (state_33731[(2)]);
var state_33731__$1 = state_33731;
var statearr_33752_33785 = state_33731__$1;
(statearr_33752_33785[(2)] = inst_33717);

(statearr_33752_33785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (2))){
var state_33731__$1 = state_33731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33731__$1,(4),in$);
} else {
if((state_val_33732 === (23))){
var inst_33725 = (state_33731[(2)]);
var state_33731__$1 = state_33731;
var statearr_33753_33786 = state_33731__$1;
(statearr_33753_33786[(2)] = inst_33725);

(statearr_33753_33786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (19))){
var inst_33712 = (state_33731[(2)]);
var state_33731__$1 = state_33731;
var statearr_33754_33787 = state_33731__$1;
(statearr_33754_33787[(2)] = inst_33712);

(statearr_33754_33787[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (11))){
var inst_33683 = (state_33731[(11)]);
var inst_33697 = (state_33731[(7)]);
var inst_33697__$1 = cljs.core.seq.call(null,inst_33683);
var state_33731__$1 = (function (){var statearr_33755 = state_33731;
(statearr_33755[(7)] = inst_33697__$1);

return statearr_33755;
})();
if(inst_33697__$1){
var statearr_33756_33788 = state_33731__$1;
(statearr_33756_33788[(1)] = (14));

} else {
var statearr_33757_33789 = state_33731__$1;
(statearr_33757_33789[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (9))){
var inst_33719 = (state_33731[(2)]);
var inst_33720 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33731__$1 = (function (){var statearr_33758 = state_33731;
(statearr_33758[(15)] = inst_33719);

return statearr_33758;
})();
if(cljs.core.truth_(inst_33720)){
var statearr_33759_33790 = state_33731__$1;
(statearr_33759_33790[(1)] = (21));

} else {
var statearr_33760_33791 = state_33731__$1;
(statearr_33760_33791[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (5))){
var inst_33675 = cljs.core.async.close_BANG_.call(null,out);
var state_33731__$1 = state_33731;
var statearr_33761_33792 = state_33731__$1;
(statearr_33761_33792[(2)] = inst_33675);

(statearr_33761_33792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (14))){
var inst_33697 = (state_33731[(7)]);
var inst_33699 = cljs.core.chunked_seq_QMARK_.call(null,inst_33697);
var state_33731__$1 = state_33731;
if(inst_33699){
var statearr_33762_33793 = state_33731__$1;
(statearr_33762_33793[(1)] = (17));

} else {
var statearr_33763_33794 = state_33731__$1;
(statearr_33763_33794[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (16))){
var inst_33715 = (state_33731[(2)]);
var state_33731__$1 = state_33731;
var statearr_33764_33795 = state_33731__$1;
(statearr_33764_33795[(2)] = inst_33715);

(statearr_33764_33795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33732 === (10))){
var inst_33686 = (state_33731[(10)]);
var inst_33684 = (state_33731[(12)]);
var inst_33691 = cljs.core._nth.call(null,inst_33684,inst_33686);
var state_33731__$1 = state_33731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33731__$1,(13),out,inst_33691);
} else {
if((state_val_33732 === (18))){
var inst_33697 = (state_33731[(7)]);
var inst_33706 = cljs.core.first.call(null,inst_33697);
var state_33731__$1 = state_33731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33731__$1,(20),out,inst_33706);
} else {
if((state_val_33732 === (8))){
var inst_33685 = (state_33731[(9)]);
var inst_33686 = (state_33731[(10)]);
var inst_33688 = (inst_33686 < inst_33685);
var inst_33689 = inst_33688;
var state_33731__$1 = state_33731;
if(cljs.core.truth_(inst_33689)){
var statearr_33765_33796 = state_33731__$1;
(statearr_33765_33796[(1)] = (10));

} else {
var statearr_33766_33797 = state_33731__$1;
(statearr_33766_33797[(1)] = (11));

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
});})(c__19438__auto__))
;
return ((function (switch__19373__auto__,c__19438__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____0 = (function (){
var statearr_33770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33770[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__);

(statearr_33770[(1)] = (1));

return statearr_33770;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____1 = (function (state_33731){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_33731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e33771){if((e33771 instanceof Object)){
var ex__19377__auto__ = e33771;
var statearr_33772_33798 = state_33731;
(statearr_33772_33798[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33799 = state_33731;
state_33731 = G__33799;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__ = function(state_33731){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____1.call(this,state_33731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19374__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto__))
})();
var state__19440__auto__ = (function (){var statearr_33773 = f__19439__auto__.call(null);
(statearr_33773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto__);

return statearr_33773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto__))
);

return c__19438__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33800 = [];
var len__17416__auto___33803 = arguments.length;
var i__17417__auto___33804 = (0);
while(true){
if((i__17417__auto___33804 < len__17416__auto___33803)){
args33800.push((arguments[i__17417__auto___33804]));

var G__33805 = (i__17417__auto___33804 + (1));
i__17417__auto___33804 = G__33805;
continue;
} else {
}
break;
}

var G__33802 = args33800.length;
switch (G__33802) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33800.length)].join('')));

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
var args33807 = [];
var len__17416__auto___33810 = arguments.length;
var i__17417__auto___33811 = (0);
while(true){
if((i__17417__auto___33811 < len__17416__auto___33810)){
args33807.push((arguments[i__17417__auto___33811]));

var G__33812 = (i__17417__auto___33811 + (1));
i__17417__auto___33811 = G__33812;
continue;
} else {
}
break;
}

var G__33809 = args33807.length;
switch (G__33809) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33807.length)].join('')));

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
var args33814 = [];
var len__17416__auto___33865 = arguments.length;
var i__17417__auto___33866 = (0);
while(true){
if((i__17417__auto___33866 < len__17416__auto___33865)){
args33814.push((arguments[i__17417__auto___33866]));

var G__33867 = (i__17417__auto___33866 + (1));
i__17417__auto___33866 = G__33867;
continue;
} else {
}
break;
}

var G__33816 = args33814.length;
switch (G__33816) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33814.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___33869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___33869,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___33869,out){
return (function (state_33840){
var state_val_33841 = (state_33840[(1)]);
if((state_val_33841 === (7))){
var inst_33835 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33842_33870 = state_33840__$1;
(statearr_33842_33870[(2)] = inst_33835);

(statearr_33842_33870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (1))){
var inst_33817 = null;
var state_33840__$1 = (function (){var statearr_33843 = state_33840;
(statearr_33843[(7)] = inst_33817);

return statearr_33843;
})();
var statearr_33844_33871 = state_33840__$1;
(statearr_33844_33871[(2)] = null);

(statearr_33844_33871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (4))){
var inst_33820 = (state_33840[(8)]);
var inst_33820__$1 = (state_33840[(2)]);
var inst_33821 = (inst_33820__$1 == null);
var inst_33822 = cljs.core.not.call(null,inst_33821);
var state_33840__$1 = (function (){var statearr_33845 = state_33840;
(statearr_33845[(8)] = inst_33820__$1);

return statearr_33845;
})();
if(inst_33822){
var statearr_33846_33872 = state_33840__$1;
(statearr_33846_33872[(1)] = (5));

} else {
var statearr_33847_33873 = state_33840__$1;
(statearr_33847_33873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (6))){
var state_33840__$1 = state_33840;
var statearr_33848_33874 = state_33840__$1;
(statearr_33848_33874[(2)] = null);

(statearr_33848_33874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (3))){
var inst_33837 = (state_33840[(2)]);
var inst_33838 = cljs.core.async.close_BANG_.call(null,out);
var state_33840__$1 = (function (){var statearr_33849 = state_33840;
(statearr_33849[(9)] = inst_33837);

return statearr_33849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33840__$1,inst_33838);
} else {
if((state_val_33841 === (2))){
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33840__$1,(4),ch);
} else {
if((state_val_33841 === (11))){
var inst_33820 = (state_33840[(8)]);
var inst_33829 = (state_33840[(2)]);
var inst_33817 = inst_33820;
var state_33840__$1 = (function (){var statearr_33850 = state_33840;
(statearr_33850[(10)] = inst_33829);

(statearr_33850[(7)] = inst_33817);

return statearr_33850;
})();
var statearr_33851_33875 = state_33840__$1;
(statearr_33851_33875[(2)] = null);

(statearr_33851_33875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (9))){
var inst_33820 = (state_33840[(8)]);
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33840__$1,(11),out,inst_33820);
} else {
if((state_val_33841 === (5))){
var inst_33820 = (state_33840[(8)]);
var inst_33817 = (state_33840[(7)]);
var inst_33824 = cljs.core._EQ_.call(null,inst_33820,inst_33817);
var state_33840__$1 = state_33840;
if(inst_33824){
var statearr_33853_33876 = state_33840__$1;
(statearr_33853_33876[(1)] = (8));

} else {
var statearr_33854_33877 = state_33840__$1;
(statearr_33854_33877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (10))){
var inst_33832 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33855_33878 = state_33840__$1;
(statearr_33855_33878[(2)] = inst_33832);

(statearr_33855_33878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (8))){
var inst_33817 = (state_33840[(7)]);
var tmp33852 = inst_33817;
var inst_33817__$1 = tmp33852;
var state_33840__$1 = (function (){var statearr_33856 = state_33840;
(statearr_33856[(7)] = inst_33817__$1);

return statearr_33856;
})();
var statearr_33857_33879 = state_33840__$1;
(statearr_33857_33879[(2)] = null);

(statearr_33857_33879[(1)] = (2));


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
});})(c__19438__auto___33869,out))
;
return ((function (switch__19373__auto__,c__19438__auto___33869,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_33861 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33861[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_33861[(1)] = (1));

return statearr_33861;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_33840){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_33840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e33862){if((e33862 instanceof Object)){
var ex__19377__auto__ = e33862;
var statearr_33863_33880 = state_33840;
(statearr_33863_33880[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33881 = state_33840;
state_33840 = G__33881;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_33840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_33840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___33869,out))
})();
var state__19440__auto__ = (function (){var statearr_33864 = f__19439__auto__.call(null);
(statearr_33864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___33869);

return statearr_33864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___33869,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33882 = [];
var len__17416__auto___33952 = arguments.length;
var i__17417__auto___33953 = (0);
while(true){
if((i__17417__auto___33953 < len__17416__auto___33952)){
args33882.push((arguments[i__17417__auto___33953]));

var G__33954 = (i__17417__auto___33953 + (1));
i__17417__auto___33953 = G__33954;
continue;
} else {
}
break;
}

var G__33884 = args33882.length;
switch (G__33884) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33882.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___33956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___33956,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___33956,out){
return (function (state_33922){
var state_val_33923 = (state_33922[(1)]);
if((state_val_33923 === (7))){
var inst_33918 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
var statearr_33924_33957 = state_33922__$1;
(statearr_33924_33957[(2)] = inst_33918);

(statearr_33924_33957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (1))){
var inst_33885 = (new Array(n));
var inst_33886 = inst_33885;
var inst_33887 = (0);
var state_33922__$1 = (function (){var statearr_33925 = state_33922;
(statearr_33925[(7)] = inst_33887);

(statearr_33925[(8)] = inst_33886);

return statearr_33925;
})();
var statearr_33926_33958 = state_33922__$1;
(statearr_33926_33958[(2)] = null);

(statearr_33926_33958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (4))){
var inst_33890 = (state_33922[(9)]);
var inst_33890__$1 = (state_33922[(2)]);
var inst_33891 = (inst_33890__$1 == null);
var inst_33892 = cljs.core.not.call(null,inst_33891);
var state_33922__$1 = (function (){var statearr_33927 = state_33922;
(statearr_33927[(9)] = inst_33890__$1);

return statearr_33927;
})();
if(inst_33892){
var statearr_33928_33959 = state_33922__$1;
(statearr_33928_33959[(1)] = (5));

} else {
var statearr_33929_33960 = state_33922__$1;
(statearr_33929_33960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (15))){
var inst_33912 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
var statearr_33930_33961 = state_33922__$1;
(statearr_33930_33961[(2)] = inst_33912);

(statearr_33930_33961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (13))){
var state_33922__$1 = state_33922;
var statearr_33931_33962 = state_33922__$1;
(statearr_33931_33962[(2)] = null);

(statearr_33931_33962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (6))){
var inst_33887 = (state_33922[(7)]);
var inst_33908 = (inst_33887 > (0));
var state_33922__$1 = state_33922;
if(cljs.core.truth_(inst_33908)){
var statearr_33932_33963 = state_33922__$1;
(statearr_33932_33963[(1)] = (12));

} else {
var statearr_33933_33964 = state_33922__$1;
(statearr_33933_33964[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (3))){
var inst_33920 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33922__$1,inst_33920);
} else {
if((state_val_33923 === (12))){
var inst_33886 = (state_33922[(8)]);
var inst_33910 = cljs.core.vec.call(null,inst_33886);
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33922__$1,(15),out,inst_33910);
} else {
if((state_val_33923 === (2))){
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33922__$1,(4),ch);
} else {
if((state_val_33923 === (11))){
var inst_33902 = (state_33922[(2)]);
var inst_33903 = (new Array(n));
var inst_33886 = inst_33903;
var inst_33887 = (0);
var state_33922__$1 = (function (){var statearr_33934 = state_33922;
(statearr_33934[(7)] = inst_33887);

(statearr_33934[(8)] = inst_33886);

(statearr_33934[(10)] = inst_33902);

return statearr_33934;
})();
var statearr_33935_33965 = state_33922__$1;
(statearr_33935_33965[(2)] = null);

(statearr_33935_33965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (9))){
var inst_33886 = (state_33922[(8)]);
var inst_33900 = cljs.core.vec.call(null,inst_33886);
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33922__$1,(11),out,inst_33900);
} else {
if((state_val_33923 === (5))){
var inst_33890 = (state_33922[(9)]);
var inst_33887 = (state_33922[(7)]);
var inst_33886 = (state_33922[(8)]);
var inst_33895 = (state_33922[(11)]);
var inst_33894 = (inst_33886[inst_33887] = inst_33890);
var inst_33895__$1 = (inst_33887 + (1));
var inst_33896 = (inst_33895__$1 < n);
var state_33922__$1 = (function (){var statearr_33936 = state_33922;
(statearr_33936[(12)] = inst_33894);

(statearr_33936[(11)] = inst_33895__$1);

return statearr_33936;
})();
if(cljs.core.truth_(inst_33896)){
var statearr_33937_33966 = state_33922__$1;
(statearr_33937_33966[(1)] = (8));

} else {
var statearr_33938_33967 = state_33922__$1;
(statearr_33938_33967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (14))){
var inst_33915 = (state_33922[(2)]);
var inst_33916 = cljs.core.async.close_BANG_.call(null,out);
var state_33922__$1 = (function (){var statearr_33940 = state_33922;
(statearr_33940[(13)] = inst_33915);

return statearr_33940;
})();
var statearr_33941_33968 = state_33922__$1;
(statearr_33941_33968[(2)] = inst_33916);

(statearr_33941_33968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (10))){
var inst_33906 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
var statearr_33942_33969 = state_33922__$1;
(statearr_33942_33969[(2)] = inst_33906);

(statearr_33942_33969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33923 === (8))){
var inst_33886 = (state_33922[(8)]);
var inst_33895 = (state_33922[(11)]);
var tmp33939 = inst_33886;
var inst_33886__$1 = tmp33939;
var inst_33887 = inst_33895;
var state_33922__$1 = (function (){var statearr_33943 = state_33922;
(statearr_33943[(7)] = inst_33887);

(statearr_33943[(8)] = inst_33886__$1);

return statearr_33943;
})();
var statearr_33944_33970 = state_33922__$1;
(statearr_33944_33970[(2)] = null);

(statearr_33944_33970[(1)] = (2));


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
});})(c__19438__auto___33956,out))
;
return ((function (switch__19373__auto__,c__19438__auto___33956,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_33948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33948[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_33948[(1)] = (1));

return statearr_33948;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_33922){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_33922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e33949){if((e33949 instanceof Object)){
var ex__19377__auto__ = e33949;
var statearr_33950_33971 = state_33922;
(statearr_33950_33971[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33972 = state_33922;
state_33922 = G__33972;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_33922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_33922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___33956,out))
})();
var state__19440__auto__ = (function (){var statearr_33951 = f__19439__auto__.call(null);
(statearr_33951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___33956);

return statearr_33951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___33956,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33973 = [];
var len__17416__auto___34047 = arguments.length;
var i__17417__auto___34048 = (0);
while(true){
if((i__17417__auto___34048 < len__17416__auto___34047)){
args33973.push((arguments[i__17417__auto___34048]));

var G__34049 = (i__17417__auto___34048 + (1));
i__17417__auto___34048 = G__34049;
continue;
} else {
}
break;
}

var G__33975 = args33973.length;
switch (G__33975) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33973.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19438__auto___34051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19438__auto___34051,out){
return (function (){
var f__19439__auto__ = (function (){var switch__19373__auto__ = ((function (c__19438__auto___34051,out){
return (function (state_34017){
var state_val_34018 = (state_34017[(1)]);
if((state_val_34018 === (7))){
var inst_34013 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
var statearr_34019_34052 = state_34017__$1;
(statearr_34019_34052[(2)] = inst_34013);

(statearr_34019_34052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (1))){
var inst_33976 = [];
var inst_33977 = inst_33976;
var inst_33978 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34017__$1 = (function (){var statearr_34020 = state_34017;
(statearr_34020[(7)] = inst_33977);

(statearr_34020[(8)] = inst_33978);

return statearr_34020;
})();
var statearr_34021_34053 = state_34017__$1;
(statearr_34021_34053[(2)] = null);

(statearr_34021_34053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (4))){
var inst_33981 = (state_34017[(9)]);
var inst_33981__$1 = (state_34017[(2)]);
var inst_33982 = (inst_33981__$1 == null);
var inst_33983 = cljs.core.not.call(null,inst_33982);
var state_34017__$1 = (function (){var statearr_34022 = state_34017;
(statearr_34022[(9)] = inst_33981__$1);

return statearr_34022;
})();
if(inst_33983){
var statearr_34023_34054 = state_34017__$1;
(statearr_34023_34054[(1)] = (5));

} else {
var statearr_34024_34055 = state_34017__$1;
(statearr_34024_34055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (15))){
var inst_34007 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
var statearr_34025_34056 = state_34017__$1;
(statearr_34025_34056[(2)] = inst_34007);

(statearr_34025_34056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (13))){
var state_34017__$1 = state_34017;
var statearr_34026_34057 = state_34017__$1;
(statearr_34026_34057[(2)] = null);

(statearr_34026_34057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (6))){
var inst_33977 = (state_34017[(7)]);
var inst_34002 = inst_33977.length;
var inst_34003 = (inst_34002 > (0));
var state_34017__$1 = state_34017;
if(cljs.core.truth_(inst_34003)){
var statearr_34027_34058 = state_34017__$1;
(statearr_34027_34058[(1)] = (12));

} else {
var statearr_34028_34059 = state_34017__$1;
(statearr_34028_34059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (3))){
var inst_34015 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34017__$1,inst_34015);
} else {
if((state_val_34018 === (12))){
var inst_33977 = (state_34017[(7)]);
var inst_34005 = cljs.core.vec.call(null,inst_33977);
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34017__$1,(15),out,inst_34005);
} else {
if((state_val_34018 === (2))){
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34017__$1,(4),ch);
} else {
if((state_val_34018 === (11))){
var inst_33981 = (state_34017[(9)]);
var inst_33985 = (state_34017[(10)]);
var inst_33995 = (state_34017[(2)]);
var inst_33996 = [];
var inst_33997 = inst_33996.push(inst_33981);
var inst_33977 = inst_33996;
var inst_33978 = inst_33985;
var state_34017__$1 = (function (){var statearr_34029 = state_34017;
(statearr_34029[(11)] = inst_33997);

(statearr_34029[(7)] = inst_33977);

(statearr_34029[(12)] = inst_33995);

(statearr_34029[(8)] = inst_33978);

return statearr_34029;
})();
var statearr_34030_34060 = state_34017__$1;
(statearr_34030_34060[(2)] = null);

(statearr_34030_34060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (9))){
var inst_33977 = (state_34017[(7)]);
var inst_33993 = cljs.core.vec.call(null,inst_33977);
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34017__$1,(11),out,inst_33993);
} else {
if((state_val_34018 === (5))){
var inst_33981 = (state_34017[(9)]);
var inst_33985 = (state_34017[(10)]);
var inst_33978 = (state_34017[(8)]);
var inst_33985__$1 = f.call(null,inst_33981);
var inst_33986 = cljs.core._EQ_.call(null,inst_33985__$1,inst_33978);
var inst_33987 = cljs.core.keyword_identical_QMARK_.call(null,inst_33978,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33988 = (inst_33986) || (inst_33987);
var state_34017__$1 = (function (){var statearr_34031 = state_34017;
(statearr_34031[(10)] = inst_33985__$1);

return statearr_34031;
})();
if(cljs.core.truth_(inst_33988)){
var statearr_34032_34061 = state_34017__$1;
(statearr_34032_34061[(1)] = (8));

} else {
var statearr_34033_34062 = state_34017__$1;
(statearr_34033_34062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (14))){
var inst_34010 = (state_34017[(2)]);
var inst_34011 = cljs.core.async.close_BANG_.call(null,out);
var state_34017__$1 = (function (){var statearr_34035 = state_34017;
(statearr_34035[(13)] = inst_34010);

return statearr_34035;
})();
var statearr_34036_34063 = state_34017__$1;
(statearr_34036_34063[(2)] = inst_34011);

(statearr_34036_34063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (10))){
var inst_34000 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
var statearr_34037_34064 = state_34017__$1;
(statearr_34037_34064[(2)] = inst_34000);

(statearr_34037_34064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (8))){
var inst_33981 = (state_34017[(9)]);
var inst_33985 = (state_34017[(10)]);
var inst_33977 = (state_34017[(7)]);
var inst_33990 = inst_33977.push(inst_33981);
var tmp34034 = inst_33977;
var inst_33977__$1 = tmp34034;
var inst_33978 = inst_33985;
var state_34017__$1 = (function (){var statearr_34038 = state_34017;
(statearr_34038[(14)] = inst_33990);

(statearr_34038[(7)] = inst_33977__$1);

(statearr_34038[(8)] = inst_33978);

return statearr_34038;
})();
var statearr_34039_34065 = state_34017__$1;
(statearr_34039_34065[(2)] = null);

(statearr_34039_34065[(1)] = (2));


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
});})(c__19438__auto___34051,out))
;
return ((function (switch__19373__auto__,c__19438__auto___34051,out){
return (function() {
var cljs$core$async$state_machine__19374__auto__ = null;
var cljs$core$async$state_machine__19374__auto____0 = (function (){
var statearr_34043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34043[(0)] = cljs$core$async$state_machine__19374__auto__);

(statearr_34043[(1)] = (1));

return statearr_34043;
});
var cljs$core$async$state_machine__19374__auto____1 = (function (state_34017){
while(true){
var ret_value__19375__auto__ = (function (){try{while(true){
var result__19376__auto__ = switch__19373__auto__.call(null,state_34017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19376__auto__;
}
break;
}
}catch (e34044){if((e34044 instanceof Object)){
var ex__19377__auto__ = e34044;
var statearr_34045_34066 = state_34017;
(statearr_34045_34066[(5)] = ex__19377__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34067 = state_34017;
state_34017 = G__34067;
continue;
} else {
return ret_value__19375__auto__;
}
break;
}
});
cljs$core$async$state_machine__19374__auto__ = function(state_34017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19374__auto____1.call(this,state_34017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19374__auto____0;
cljs$core$async$state_machine__19374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19374__auto____1;
return cljs$core$async$state_machine__19374__auto__;
})()
;})(switch__19373__auto__,c__19438__auto___34051,out))
})();
var state__19440__auto__ = (function (){var statearr_34046 = f__19439__auto__.call(null);
(statearr_34046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19438__auto___34051);

return statearr_34046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19440__auto__);
});})(c__19438__auto___34051,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map