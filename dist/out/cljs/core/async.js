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
if(typeof cljs.core.async.t_cljs$core$async27800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27800 = (function (fn_handler,f,meta27801){
this.fn_handler = fn_handler;
this.f = f;
this.meta27801 = meta27801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27802,meta27801__$1){
var self__ = this;
var _27802__$1 = this;
return (new cljs.core.async.t_cljs$core$async27800(self__.fn_handler,self__.f,meta27801__$1));
});

cljs.core.async.t_cljs$core$async27800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27802){
var self__ = this;
var _27802__$1 = this;
return self__.meta27801;
});

cljs.core.async.t_cljs$core$async27800.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27801","meta27801",-1903482712,null)], null);
});

cljs.core.async.t_cljs$core$async27800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27800";

cljs.core.async.t_cljs$core$async27800.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27800");
});

cljs.core.async.__GT_t_cljs$core$async27800 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async27800(fn_handler__$1,f__$1,meta27801){
return (new cljs.core.async.t_cljs$core$async27800(fn_handler__$1,f__$1,meta27801));
});

}

return (new cljs.core.async.t_cljs$core$async27800(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args27805 = [];
var len__17402__auto___27808 = arguments.length;
var i__17403__auto___27809 = (0);
while(true){
if((i__17403__auto___27809 < len__17402__auto___27808)){
args27805.push((arguments[i__17403__auto___27809]));

var G__27810 = (i__17403__auto___27809 + (1));
i__17403__auto___27809 = G__27810;
continue;
} else {
}
break;
}

var G__27807 = args27805.length;
switch (G__27807) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27805.length)].join('')));

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
var args27812 = [];
var len__17402__auto___27815 = arguments.length;
var i__17403__auto___27816 = (0);
while(true){
if((i__17403__auto___27816 < len__17402__auto___27815)){
args27812.push((arguments[i__17403__auto___27816]));

var G__27817 = (i__17403__auto___27816 + (1));
i__17403__auto___27816 = G__27817;
continue;
} else {
}
break;
}

var G__27814 = args27812.length;
switch (G__27814) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27812.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27819 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27819);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27819,ret){
return (function (){
return fn1.call(null,val_27819);
});})(val_27819,ret))
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
var args27820 = [];
var len__17402__auto___27823 = arguments.length;
var i__17403__auto___27824 = (0);
while(true){
if((i__17403__auto___27824 < len__17402__auto___27823)){
args27820.push((arguments[i__17403__auto___27824]));

var G__27825 = (i__17403__auto___27824 + (1));
i__17403__auto___27824 = G__27825;
continue;
} else {
}
break;
}

var G__27822 = args27820.length;
switch (G__27822) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27820.length)].join('')));

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
var n__17247__auto___27827 = n;
var x_27828 = (0);
while(true){
if((x_27828 < n__17247__auto___27827)){
(a[x_27828] = (0));

var G__27829 = (x_27828 + (1));
x_27828 = G__27829;
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

var G__27830 = (i + (1));
i = G__27830;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27834 = (function (alt_flag,flag,meta27835){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27835 = meta27835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27836,meta27835__$1){
var self__ = this;
var _27836__$1 = this;
return (new cljs.core.async.t_cljs$core$async27834(self__.alt_flag,self__.flag,meta27835__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27834.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27836){
var self__ = this;
var _27836__$1 = this;
return self__.meta27835;
});})(flag))
;

cljs.core.async.t_cljs$core$async27834.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27834.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27835","meta27835",660023803,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27834";

cljs.core.async.t_cljs$core$async27834.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27834");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27834 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27834(alt_flag__$1,flag__$1,meta27835){
return (new cljs.core.async.t_cljs$core$async27834(alt_flag__$1,flag__$1,meta27835));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27834(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27840 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27840 = (function (alt_handler,flag,cb,meta27841){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27841 = meta27841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27842,meta27841__$1){
var self__ = this;
var _27842__$1 = this;
return (new cljs.core.async.t_cljs$core$async27840(self__.alt_handler,self__.flag,self__.cb,meta27841__$1));
});

cljs.core.async.t_cljs$core$async27840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27842){
var self__ = this;
var _27842__$1 = this;
return self__.meta27841;
});

cljs.core.async.t_cljs$core$async27840.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27840.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27840.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27841","meta27841",-399482619,null)], null);
});

cljs.core.async.t_cljs$core$async27840.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27840";

cljs.core.async.t_cljs$core$async27840.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27840");
});

cljs.core.async.__GT_t_cljs$core$async27840 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27840(alt_handler__$1,flag__$1,cb__$1,meta27841){
return (new cljs.core.async.t_cljs$core$async27840(alt_handler__$1,flag__$1,cb__$1,meta27841));
});

}

return (new cljs.core.async.t_cljs$core$async27840(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27843_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27843_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27844_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27844_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16344__auto__ = wport;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27845 = (i + (1));
i = G__27845;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16344__auto__ = ret;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16332__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16332__auto__;
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
var args__17409__auto__ = [];
var len__17402__auto___27851 = arguments.length;
var i__17403__auto___27852 = (0);
while(true){
if((i__17403__auto___27852 < len__17402__auto___27851)){
args__17409__auto__.push((arguments[i__17403__auto___27852]));

var G__27853 = (i__17403__auto___27852 + (1));
i__17403__auto___27852 = G__27853;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27848){
var map__27849 = p__27848;
var map__27849__$1 = ((((!((map__27849 == null)))?((((map__27849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27849):map__27849);
var opts = map__27849__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27846){
var G__27847 = cljs.core.first.call(null,seq27846);
var seq27846__$1 = cljs.core.next.call(null,seq27846);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27847,seq27846__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27854 = [];
var len__17402__auto___27904 = arguments.length;
var i__17403__auto___27905 = (0);
while(true){
if((i__17403__auto___27905 < len__17402__auto___27904)){
args27854.push((arguments[i__17403__auto___27905]));

var G__27906 = (i__17403__auto___27905 + (1));
i__17403__auto___27905 = G__27906;
continue;
} else {
}
break;
}

var G__27856 = args27854.length;
switch (G__27856) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27854.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19424__auto___27908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___27908){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___27908){
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
var state_27880__$1 = state_27880;
var statearr_27883_27910 = state_27880__$1;
(statearr_27883_27910[(2)] = null);

(statearr_27883_27910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (4))){
var inst_27859 = (state_27880[(7)]);
var inst_27859__$1 = (state_27880[(2)]);
var inst_27860 = (inst_27859__$1 == null);
var state_27880__$1 = (function (){var statearr_27884 = state_27880;
(statearr_27884[(7)] = inst_27859__$1);

return statearr_27884;
})();
if(cljs.core.truth_(inst_27860)){
var statearr_27885_27911 = state_27880__$1;
(statearr_27885_27911[(1)] = (5));

} else {
var statearr_27886_27912 = state_27880__$1;
(statearr_27886_27912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (13))){
var state_27880__$1 = state_27880;
var statearr_27887_27913 = state_27880__$1;
(statearr_27887_27913[(2)] = null);

(statearr_27887_27913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (6))){
var inst_27859 = (state_27880[(7)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27880__$1,(11),to,inst_27859);
} else {
if((state_val_27881 === (3))){
var inst_27878 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27880__$1,inst_27878);
} else {
if((state_val_27881 === (12))){
var state_27880__$1 = state_27880;
var statearr_27888_27914 = state_27880__$1;
(statearr_27888_27914[(2)] = null);

(statearr_27888_27914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (2))){
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27880__$1,(4),from);
} else {
if((state_val_27881 === (11))){
var inst_27869 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27869)){
var statearr_27889_27915 = state_27880__$1;
(statearr_27889_27915[(1)] = (12));

} else {
var statearr_27890_27916 = state_27880__$1;
(statearr_27890_27916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (9))){
var state_27880__$1 = state_27880;
var statearr_27891_27917 = state_27880__$1;
(statearr_27891_27917[(2)] = null);

(statearr_27891_27917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (5))){
var state_27880__$1 = state_27880;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27892_27918 = state_27880__$1;
(statearr_27892_27918[(1)] = (8));

} else {
var statearr_27893_27919 = state_27880__$1;
(statearr_27893_27919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (14))){
var inst_27874 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27894_27920 = state_27880__$1;
(statearr_27894_27920[(2)] = inst_27874);

(statearr_27894_27920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (10))){
var inst_27866 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27895_27921 = state_27880__$1;
(statearr_27895_27921[(2)] = inst_27866);

(statearr_27895_27921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (8))){
var inst_27863 = cljs.core.async.close_BANG_.call(null,to);
var state_27880__$1 = state_27880;
var statearr_27896_27922 = state_27880__$1;
(statearr_27896_27922[(2)] = inst_27863);

(statearr_27896_27922[(1)] = (10));


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
});})(c__19424__auto___27908))
;
return ((function (switch__19359__auto__,c__19424__auto___27908){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_27900 = [null,null,null,null,null,null,null,null];
(statearr_27900[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_27900[(1)] = (1));

return statearr_27900;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_27880){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_27880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e27901){if((e27901 instanceof Object)){
var ex__19363__auto__ = e27901;
var statearr_27902_27923 = state_27880;
(statearr_27902_27923[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27924 = state_27880;
state_27880 = G__27924;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_27880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_27880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___27908))
})();
var state__19426__auto__ = (function (){var statearr_27903 = f__19425__auto__.call(null);
(statearr_27903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___27908);

return statearr_27903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___27908))
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
return (function (p__28108){
var vec__28109 = p__28108;
var v = cljs.core.nth.call(null,vec__28109,(0),null);
var p = cljs.core.nth.call(null,vec__28109,(1),null);
var job = vec__28109;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19424__auto___28291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___28291,res,vec__28109,v,p,job,jobs,results){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___28291,res,vec__28109,v,p,job,jobs,results){
return (function (state_28114){
var state_val_28115 = (state_28114[(1)]);
if((state_val_28115 === (1))){
var state_28114__$1 = state_28114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28114__$1,(2),res,v);
} else {
if((state_val_28115 === (2))){
var inst_28111 = (state_28114[(2)]);
var inst_28112 = cljs.core.async.close_BANG_.call(null,res);
var state_28114__$1 = (function (){var statearr_28116 = state_28114;
(statearr_28116[(7)] = inst_28111);

return statearr_28116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28114__$1,inst_28112);
} else {
return null;
}
}
});})(c__19424__auto___28291,res,vec__28109,v,p,job,jobs,results))
;
return ((function (switch__19359__auto__,c__19424__auto___28291,res,vec__28109,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_28120 = [null,null,null,null,null,null,null,null];
(statearr_28120[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_28120[(1)] = (1));

return statearr_28120;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_28114){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28121){if((e28121 instanceof Object)){
var ex__19363__auto__ = e28121;
var statearr_28122_28292 = state_28114;
(statearr_28122_28292[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28293 = state_28114;
state_28114 = G__28293;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_28114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_28114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___28291,res,vec__28109,v,p,job,jobs,results))
})();
var state__19426__auto__ = (function (){var statearr_28123 = f__19425__auto__.call(null);
(statearr_28123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___28291);

return statearr_28123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___28291,res,vec__28109,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28124){
var vec__28125 = p__28124;
var v = cljs.core.nth.call(null,vec__28125,(0),null);
var p = cljs.core.nth.call(null,vec__28125,(1),null);
var job = vec__28125;
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
var n__17247__auto___28294 = n;
var __28295 = (0);
while(true){
if((__28295 < n__17247__auto___28294)){
var G__28126_28296 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28126_28296) {
case "compute":
var c__19424__auto___28298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28295,c__19424__auto___28298,G__28126_28296,n__17247__auto___28294,jobs,results,process,async){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (__28295,c__19424__auto___28298,G__28126_28296,n__17247__auto___28294,jobs,results,process,async){
return (function (state_28139){
var state_val_28140 = (state_28139[(1)]);
if((state_val_28140 === (1))){
var state_28139__$1 = state_28139;
var statearr_28141_28299 = state_28139__$1;
(statearr_28141_28299[(2)] = null);

(statearr_28141_28299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (2))){
var state_28139__$1 = state_28139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28139__$1,(4),jobs);
} else {
if((state_val_28140 === (3))){
var inst_28137 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28139__$1,inst_28137);
} else {
if((state_val_28140 === (4))){
var inst_28129 = (state_28139[(2)]);
var inst_28130 = process.call(null,inst_28129);
var state_28139__$1 = state_28139;
if(cljs.core.truth_(inst_28130)){
var statearr_28142_28300 = state_28139__$1;
(statearr_28142_28300[(1)] = (5));

} else {
var statearr_28143_28301 = state_28139__$1;
(statearr_28143_28301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (5))){
var state_28139__$1 = state_28139;
var statearr_28144_28302 = state_28139__$1;
(statearr_28144_28302[(2)] = null);

(statearr_28144_28302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (6))){
var state_28139__$1 = state_28139;
var statearr_28145_28303 = state_28139__$1;
(statearr_28145_28303[(2)] = null);

(statearr_28145_28303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (7))){
var inst_28135 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
var statearr_28146_28304 = state_28139__$1;
(statearr_28146_28304[(2)] = inst_28135);

(statearr_28146_28304[(1)] = (3));


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
});})(__28295,c__19424__auto___28298,G__28126_28296,n__17247__auto___28294,jobs,results,process,async))
;
return ((function (__28295,switch__19359__auto__,c__19424__auto___28298,G__28126_28296,n__17247__auto___28294,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_28150 = [null,null,null,null,null,null,null];
(statearr_28150[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_28150[(1)] = (1));

return statearr_28150;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_28139){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28151){if((e28151 instanceof Object)){
var ex__19363__auto__ = e28151;
var statearr_28152_28305 = state_28139;
(statearr_28152_28305[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28306 = state_28139;
state_28139 = G__28306;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_28139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_28139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(__28295,switch__19359__auto__,c__19424__auto___28298,G__28126_28296,n__17247__auto___28294,jobs,results,process,async))
})();
var state__19426__auto__ = (function (){var statearr_28153 = f__19425__auto__.call(null);
(statearr_28153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___28298);

return statearr_28153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(__28295,c__19424__auto___28298,G__28126_28296,n__17247__auto___28294,jobs,results,process,async))
);


break;
case "async":
var c__19424__auto___28307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28295,c__19424__auto___28307,G__28126_28296,n__17247__auto___28294,jobs,results,process,async){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (__28295,c__19424__auto___28307,G__28126_28296,n__17247__auto___28294,jobs,results,process,async){
return (function (state_28166){
var state_val_28167 = (state_28166[(1)]);
if((state_val_28167 === (1))){
var state_28166__$1 = state_28166;
var statearr_28168_28308 = state_28166__$1;
(statearr_28168_28308[(2)] = null);

(statearr_28168_28308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (2))){
var state_28166__$1 = state_28166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28166__$1,(4),jobs);
} else {
if((state_val_28167 === (3))){
var inst_28164 = (state_28166[(2)]);
var state_28166__$1 = state_28166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28166__$1,inst_28164);
} else {
if((state_val_28167 === (4))){
var inst_28156 = (state_28166[(2)]);
var inst_28157 = async.call(null,inst_28156);
var state_28166__$1 = state_28166;
if(cljs.core.truth_(inst_28157)){
var statearr_28169_28309 = state_28166__$1;
(statearr_28169_28309[(1)] = (5));

} else {
var statearr_28170_28310 = state_28166__$1;
(statearr_28170_28310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (5))){
var state_28166__$1 = state_28166;
var statearr_28171_28311 = state_28166__$1;
(statearr_28171_28311[(2)] = null);

(statearr_28171_28311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (6))){
var state_28166__$1 = state_28166;
var statearr_28172_28312 = state_28166__$1;
(statearr_28172_28312[(2)] = null);

(statearr_28172_28312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28167 === (7))){
var inst_28162 = (state_28166[(2)]);
var state_28166__$1 = state_28166;
var statearr_28173_28313 = state_28166__$1;
(statearr_28173_28313[(2)] = inst_28162);

(statearr_28173_28313[(1)] = (3));


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
});})(__28295,c__19424__auto___28307,G__28126_28296,n__17247__auto___28294,jobs,results,process,async))
;
return ((function (__28295,switch__19359__auto__,c__19424__auto___28307,G__28126_28296,n__17247__auto___28294,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_28177 = [null,null,null,null,null,null,null];
(statearr_28177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_28177[(1)] = (1));

return statearr_28177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_28166){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28178){if((e28178 instanceof Object)){
var ex__19363__auto__ = e28178;
var statearr_28179_28314 = state_28166;
(statearr_28179_28314[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28315 = state_28166;
state_28166 = G__28315;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_28166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_28166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(__28295,switch__19359__auto__,c__19424__auto___28307,G__28126_28296,n__17247__auto___28294,jobs,results,process,async))
})();
var state__19426__auto__ = (function (){var statearr_28180 = f__19425__auto__.call(null);
(statearr_28180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___28307);

return statearr_28180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(__28295,c__19424__auto___28307,G__28126_28296,n__17247__auto___28294,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28316 = (__28295 + (1));
__28295 = G__28316;
continue;
} else {
}
break;
}

var c__19424__auto___28317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___28317,jobs,results,process,async){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___28317,jobs,results,process,async){
return (function (state_28202){
var state_val_28203 = (state_28202[(1)]);
if((state_val_28203 === (1))){
var state_28202__$1 = state_28202;
var statearr_28204_28318 = state_28202__$1;
(statearr_28204_28318[(2)] = null);

(statearr_28204_28318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (2))){
var state_28202__$1 = state_28202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28202__$1,(4),from);
} else {
if((state_val_28203 === (3))){
var inst_28200 = (state_28202[(2)]);
var state_28202__$1 = state_28202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28202__$1,inst_28200);
} else {
if((state_val_28203 === (4))){
var inst_28183 = (state_28202[(7)]);
var inst_28183__$1 = (state_28202[(2)]);
var inst_28184 = (inst_28183__$1 == null);
var state_28202__$1 = (function (){var statearr_28205 = state_28202;
(statearr_28205[(7)] = inst_28183__$1);

return statearr_28205;
})();
if(cljs.core.truth_(inst_28184)){
var statearr_28206_28319 = state_28202__$1;
(statearr_28206_28319[(1)] = (5));

} else {
var statearr_28207_28320 = state_28202__$1;
(statearr_28207_28320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (5))){
var inst_28186 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28202__$1 = state_28202;
var statearr_28208_28321 = state_28202__$1;
(statearr_28208_28321[(2)] = inst_28186);

(statearr_28208_28321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (6))){
var inst_28188 = (state_28202[(8)]);
var inst_28183 = (state_28202[(7)]);
var inst_28188__$1 = cljs.core.async.chan.call(null,(1));
var inst_28189 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28190 = [inst_28183,inst_28188__$1];
var inst_28191 = (new cljs.core.PersistentVector(null,2,(5),inst_28189,inst_28190,null));
var state_28202__$1 = (function (){var statearr_28209 = state_28202;
(statearr_28209[(8)] = inst_28188__$1);

return statearr_28209;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28202__$1,(8),jobs,inst_28191);
} else {
if((state_val_28203 === (7))){
var inst_28198 = (state_28202[(2)]);
var state_28202__$1 = state_28202;
var statearr_28210_28322 = state_28202__$1;
(statearr_28210_28322[(2)] = inst_28198);

(statearr_28210_28322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (8))){
var inst_28188 = (state_28202[(8)]);
var inst_28193 = (state_28202[(2)]);
var state_28202__$1 = (function (){var statearr_28211 = state_28202;
(statearr_28211[(9)] = inst_28193);

return statearr_28211;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28202__$1,(9),results,inst_28188);
} else {
if((state_val_28203 === (9))){
var inst_28195 = (state_28202[(2)]);
var state_28202__$1 = (function (){var statearr_28212 = state_28202;
(statearr_28212[(10)] = inst_28195);

return statearr_28212;
})();
var statearr_28213_28323 = state_28202__$1;
(statearr_28213_28323[(2)] = null);

(statearr_28213_28323[(1)] = (2));


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
});})(c__19424__auto___28317,jobs,results,process,async))
;
return ((function (switch__19359__auto__,c__19424__auto___28317,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_28217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_28217[(1)] = (1));

return statearr_28217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_28202){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28218){if((e28218 instanceof Object)){
var ex__19363__auto__ = e28218;
var statearr_28219_28324 = state_28202;
(statearr_28219_28324[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28325 = state_28202;
state_28202 = G__28325;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_28202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_28202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___28317,jobs,results,process,async))
})();
var state__19426__auto__ = (function (){var statearr_28220 = f__19425__auto__.call(null);
(statearr_28220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___28317);

return statearr_28220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___28317,jobs,results,process,async))
);


var c__19424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto__,jobs,results,process,async){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto__,jobs,results,process,async){
return (function (state_28258){
var state_val_28259 = (state_28258[(1)]);
if((state_val_28259 === (7))){
var inst_28254 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28260_28326 = state_28258__$1;
(statearr_28260_28326[(2)] = inst_28254);

(statearr_28260_28326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (20))){
var state_28258__$1 = state_28258;
var statearr_28261_28327 = state_28258__$1;
(statearr_28261_28327[(2)] = null);

(statearr_28261_28327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (1))){
var state_28258__$1 = state_28258;
var statearr_28262_28328 = state_28258__$1;
(statearr_28262_28328[(2)] = null);

(statearr_28262_28328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (4))){
var inst_28223 = (state_28258[(7)]);
var inst_28223__$1 = (state_28258[(2)]);
var inst_28224 = (inst_28223__$1 == null);
var state_28258__$1 = (function (){var statearr_28263 = state_28258;
(statearr_28263[(7)] = inst_28223__$1);

return statearr_28263;
})();
if(cljs.core.truth_(inst_28224)){
var statearr_28264_28329 = state_28258__$1;
(statearr_28264_28329[(1)] = (5));

} else {
var statearr_28265_28330 = state_28258__$1;
(statearr_28265_28330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (15))){
var inst_28236 = (state_28258[(8)]);
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28258__$1,(18),to,inst_28236);
} else {
if((state_val_28259 === (21))){
var inst_28249 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28266_28331 = state_28258__$1;
(statearr_28266_28331[(2)] = inst_28249);

(statearr_28266_28331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (13))){
var inst_28251 = (state_28258[(2)]);
var state_28258__$1 = (function (){var statearr_28267 = state_28258;
(statearr_28267[(9)] = inst_28251);

return statearr_28267;
})();
var statearr_28268_28332 = state_28258__$1;
(statearr_28268_28332[(2)] = null);

(statearr_28268_28332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (6))){
var inst_28223 = (state_28258[(7)]);
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28258__$1,(11),inst_28223);
} else {
if((state_val_28259 === (17))){
var inst_28244 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
if(cljs.core.truth_(inst_28244)){
var statearr_28269_28333 = state_28258__$1;
(statearr_28269_28333[(1)] = (19));

} else {
var statearr_28270_28334 = state_28258__$1;
(statearr_28270_28334[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (3))){
var inst_28256 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28258__$1,inst_28256);
} else {
if((state_val_28259 === (12))){
var inst_28233 = (state_28258[(10)]);
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28258__$1,(14),inst_28233);
} else {
if((state_val_28259 === (2))){
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28258__$1,(4),results);
} else {
if((state_val_28259 === (19))){
var state_28258__$1 = state_28258;
var statearr_28271_28335 = state_28258__$1;
(statearr_28271_28335[(2)] = null);

(statearr_28271_28335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (11))){
var inst_28233 = (state_28258[(2)]);
var state_28258__$1 = (function (){var statearr_28272 = state_28258;
(statearr_28272[(10)] = inst_28233);

return statearr_28272;
})();
var statearr_28273_28336 = state_28258__$1;
(statearr_28273_28336[(2)] = null);

(statearr_28273_28336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (9))){
var state_28258__$1 = state_28258;
var statearr_28274_28337 = state_28258__$1;
(statearr_28274_28337[(2)] = null);

(statearr_28274_28337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (5))){
var state_28258__$1 = state_28258;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28275_28338 = state_28258__$1;
(statearr_28275_28338[(1)] = (8));

} else {
var statearr_28276_28339 = state_28258__$1;
(statearr_28276_28339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (14))){
var inst_28238 = (state_28258[(11)]);
var inst_28236 = (state_28258[(8)]);
var inst_28236__$1 = (state_28258[(2)]);
var inst_28237 = (inst_28236__$1 == null);
var inst_28238__$1 = cljs.core.not.call(null,inst_28237);
var state_28258__$1 = (function (){var statearr_28277 = state_28258;
(statearr_28277[(11)] = inst_28238__$1);

(statearr_28277[(8)] = inst_28236__$1);

return statearr_28277;
})();
if(inst_28238__$1){
var statearr_28278_28340 = state_28258__$1;
(statearr_28278_28340[(1)] = (15));

} else {
var statearr_28279_28341 = state_28258__$1;
(statearr_28279_28341[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (16))){
var inst_28238 = (state_28258[(11)]);
var state_28258__$1 = state_28258;
var statearr_28280_28342 = state_28258__$1;
(statearr_28280_28342[(2)] = inst_28238);

(statearr_28280_28342[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (10))){
var inst_28230 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28281_28343 = state_28258__$1;
(statearr_28281_28343[(2)] = inst_28230);

(statearr_28281_28343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (18))){
var inst_28241 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28282_28344 = state_28258__$1;
(statearr_28282_28344[(2)] = inst_28241);

(statearr_28282_28344[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (8))){
var inst_28227 = cljs.core.async.close_BANG_.call(null,to);
var state_28258__$1 = state_28258;
var statearr_28283_28345 = state_28258__$1;
(statearr_28283_28345[(2)] = inst_28227);

(statearr_28283_28345[(1)] = (10));


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
});})(c__19424__auto__,jobs,results,process,async))
;
return ((function (switch__19359__auto__,c__19424__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_28287 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28287[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_28287[(1)] = (1));

return statearr_28287;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_28258){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28288){if((e28288 instanceof Object)){
var ex__19363__auto__ = e28288;
var statearr_28289_28346 = state_28258;
(statearr_28289_28346[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28347 = state_28258;
state_28258 = G__28347;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_28258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_28258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__,jobs,results,process,async))
})();
var state__19426__auto__ = (function (){var statearr_28290 = f__19425__auto__.call(null);
(statearr_28290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_28290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto__,jobs,results,process,async))
);

return c__19424__auto__;
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
var args28348 = [];
var len__17402__auto___28351 = arguments.length;
var i__17403__auto___28352 = (0);
while(true){
if((i__17403__auto___28352 < len__17402__auto___28351)){
args28348.push((arguments[i__17403__auto___28352]));

var G__28353 = (i__17403__auto___28352 + (1));
i__17403__auto___28352 = G__28353;
continue;
} else {
}
break;
}

var G__28350 = args28348.length;
switch (G__28350) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28348.length)].join('')));

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
var args28355 = [];
var len__17402__auto___28358 = arguments.length;
var i__17403__auto___28359 = (0);
while(true){
if((i__17403__auto___28359 < len__17402__auto___28358)){
args28355.push((arguments[i__17403__auto___28359]));

var G__28360 = (i__17403__auto___28359 + (1));
i__17403__auto___28359 = G__28360;
continue;
} else {
}
break;
}

var G__28357 = args28355.length;
switch (G__28357) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28355.length)].join('')));

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
var args28362 = [];
var len__17402__auto___28415 = arguments.length;
var i__17403__auto___28416 = (0);
while(true){
if((i__17403__auto___28416 < len__17402__auto___28415)){
args28362.push((arguments[i__17403__auto___28416]));

var G__28417 = (i__17403__auto___28416 + (1));
i__17403__auto___28416 = G__28417;
continue;
} else {
}
break;
}

var G__28364 = args28362.length;
switch (G__28364) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28362.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19424__auto___28419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___28419,tc,fc){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___28419,tc,fc){
return (function (state_28390){
var state_val_28391 = (state_28390[(1)]);
if((state_val_28391 === (7))){
var inst_28386 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
var statearr_28392_28420 = state_28390__$1;
(statearr_28392_28420[(2)] = inst_28386);

(statearr_28392_28420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (1))){
var state_28390__$1 = state_28390;
var statearr_28393_28421 = state_28390__$1;
(statearr_28393_28421[(2)] = null);

(statearr_28393_28421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (4))){
var inst_28367 = (state_28390[(7)]);
var inst_28367__$1 = (state_28390[(2)]);
var inst_28368 = (inst_28367__$1 == null);
var state_28390__$1 = (function (){var statearr_28394 = state_28390;
(statearr_28394[(7)] = inst_28367__$1);

return statearr_28394;
})();
if(cljs.core.truth_(inst_28368)){
var statearr_28395_28422 = state_28390__$1;
(statearr_28395_28422[(1)] = (5));

} else {
var statearr_28396_28423 = state_28390__$1;
(statearr_28396_28423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (13))){
var state_28390__$1 = state_28390;
var statearr_28397_28424 = state_28390__$1;
(statearr_28397_28424[(2)] = null);

(statearr_28397_28424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (6))){
var inst_28367 = (state_28390[(7)]);
var inst_28373 = p.call(null,inst_28367);
var state_28390__$1 = state_28390;
if(cljs.core.truth_(inst_28373)){
var statearr_28398_28425 = state_28390__$1;
(statearr_28398_28425[(1)] = (9));

} else {
var statearr_28399_28426 = state_28390__$1;
(statearr_28399_28426[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (3))){
var inst_28388 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28390__$1,inst_28388);
} else {
if((state_val_28391 === (12))){
var state_28390__$1 = state_28390;
var statearr_28400_28427 = state_28390__$1;
(statearr_28400_28427[(2)] = null);

(statearr_28400_28427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (2))){
var state_28390__$1 = state_28390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28390__$1,(4),ch);
} else {
if((state_val_28391 === (11))){
var inst_28367 = (state_28390[(7)]);
var inst_28377 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28390__$1,(8),inst_28377,inst_28367);
} else {
if((state_val_28391 === (9))){
var state_28390__$1 = state_28390;
var statearr_28401_28428 = state_28390__$1;
(statearr_28401_28428[(2)] = tc);

(statearr_28401_28428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (5))){
var inst_28370 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28371 = cljs.core.async.close_BANG_.call(null,fc);
var state_28390__$1 = (function (){var statearr_28402 = state_28390;
(statearr_28402[(8)] = inst_28370);

return statearr_28402;
})();
var statearr_28403_28429 = state_28390__$1;
(statearr_28403_28429[(2)] = inst_28371);

(statearr_28403_28429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (14))){
var inst_28384 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
var statearr_28404_28430 = state_28390__$1;
(statearr_28404_28430[(2)] = inst_28384);

(statearr_28404_28430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (10))){
var state_28390__$1 = state_28390;
var statearr_28405_28431 = state_28390__$1;
(statearr_28405_28431[(2)] = fc);

(statearr_28405_28431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28391 === (8))){
var inst_28379 = (state_28390[(2)]);
var state_28390__$1 = state_28390;
if(cljs.core.truth_(inst_28379)){
var statearr_28406_28432 = state_28390__$1;
(statearr_28406_28432[(1)] = (12));

} else {
var statearr_28407_28433 = state_28390__$1;
(statearr_28407_28433[(1)] = (13));

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
});})(c__19424__auto___28419,tc,fc))
;
return ((function (switch__19359__auto__,c__19424__auto___28419,tc,fc){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_28411 = [null,null,null,null,null,null,null,null,null];
(statearr_28411[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_28411[(1)] = (1));

return statearr_28411;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_28390){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28412){if((e28412 instanceof Object)){
var ex__19363__auto__ = e28412;
var statearr_28413_28434 = state_28390;
(statearr_28413_28434[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28435 = state_28390;
state_28390 = G__28435;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_28390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_28390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___28419,tc,fc))
})();
var state__19426__auto__ = (function (){var statearr_28414 = f__19425__auto__.call(null);
(statearr_28414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___28419);

return statearr_28414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___28419,tc,fc))
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
var c__19424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto__){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto__){
return (function (state_28482){
var state_val_28483 = (state_28482[(1)]);
if((state_val_28483 === (1))){
var inst_28468 = init;
var state_28482__$1 = (function (){var statearr_28484 = state_28482;
(statearr_28484[(7)] = inst_28468);

return statearr_28484;
})();
var statearr_28485_28500 = state_28482__$1;
(statearr_28485_28500[(2)] = null);

(statearr_28485_28500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (2))){
var state_28482__$1 = state_28482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28482__$1,(4),ch);
} else {
if((state_val_28483 === (3))){
var inst_28480 = (state_28482[(2)]);
var state_28482__$1 = state_28482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28482__$1,inst_28480);
} else {
if((state_val_28483 === (4))){
var inst_28471 = (state_28482[(8)]);
var inst_28471__$1 = (state_28482[(2)]);
var inst_28472 = (inst_28471__$1 == null);
var state_28482__$1 = (function (){var statearr_28486 = state_28482;
(statearr_28486[(8)] = inst_28471__$1);

return statearr_28486;
})();
if(cljs.core.truth_(inst_28472)){
var statearr_28487_28501 = state_28482__$1;
(statearr_28487_28501[(1)] = (5));

} else {
var statearr_28488_28502 = state_28482__$1;
(statearr_28488_28502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (5))){
var inst_28468 = (state_28482[(7)]);
var state_28482__$1 = state_28482;
var statearr_28489_28503 = state_28482__$1;
(statearr_28489_28503[(2)] = inst_28468);

(statearr_28489_28503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (6))){
var inst_28471 = (state_28482[(8)]);
var inst_28468 = (state_28482[(7)]);
var inst_28475 = f.call(null,inst_28468,inst_28471);
var inst_28468__$1 = inst_28475;
var state_28482__$1 = (function (){var statearr_28490 = state_28482;
(statearr_28490[(7)] = inst_28468__$1);

return statearr_28490;
})();
var statearr_28491_28504 = state_28482__$1;
(statearr_28491_28504[(2)] = null);

(statearr_28491_28504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (7))){
var inst_28478 = (state_28482[(2)]);
var state_28482__$1 = state_28482;
var statearr_28492_28505 = state_28482__$1;
(statearr_28492_28505[(2)] = inst_28478);

(statearr_28492_28505[(1)] = (3));


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
});})(c__19424__auto__))
;
return ((function (switch__19359__auto__,c__19424__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19360__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19360__auto____0 = (function (){
var statearr_28496 = [null,null,null,null,null,null,null,null,null];
(statearr_28496[(0)] = cljs$core$async$reduce_$_state_machine__19360__auto__);

(statearr_28496[(1)] = (1));

return statearr_28496;
});
var cljs$core$async$reduce_$_state_machine__19360__auto____1 = (function (state_28482){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28497){if((e28497 instanceof Object)){
var ex__19363__auto__ = e28497;
var statearr_28498_28506 = state_28482;
(statearr_28498_28506[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28507 = state_28482;
state_28482 = G__28507;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19360__auto__ = function(state_28482){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19360__auto____1.call(this,state_28482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19360__auto____0;
cljs$core$async$reduce_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19360__auto____1;
return cljs$core$async$reduce_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__))
})();
var state__19426__auto__ = (function (){var statearr_28499 = f__19425__auto__.call(null);
(statearr_28499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_28499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto__))
);

return c__19424__auto__;
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
var args28508 = [];
var len__17402__auto___28560 = arguments.length;
var i__17403__auto___28561 = (0);
while(true){
if((i__17403__auto___28561 < len__17402__auto___28560)){
args28508.push((arguments[i__17403__auto___28561]));

var G__28562 = (i__17403__auto___28561 + (1));
i__17403__auto___28561 = G__28562;
continue;
} else {
}
break;
}

var G__28510 = args28508.length;
switch (G__28510) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28508.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto__){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto__){
return (function (state_28535){
var state_val_28536 = (state_28535[(1)]);
if((state_val_28536 === (7))){
var inst_28517 = (state_28535[(2)]);
var state_28535__$1 = state_28535;
var statearr_28537_28564 = state_28535__$1;
(statearr_28537_28564[(2)] = inst_28517);

(statearr_28537_28564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (1))){
var inst_28511 = cljs.core.seq.call(null,coll);
var inst_28512 = inst_28511;
var state_28535__$1 = (function (){var statearr_28538 = state_28535;
(statearr_28538[(7)] = inst_28512);

return statearr_28538;
})();
var statearr_28539_28565 = state_28535__$1;
(statearr_28539_28565[(2)] = null);

(statearr_28539_28565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (4))){
var inst_28512 = (state_28535[(7)]);
var inst_28515 = cljs.core.first.call(null,inst_28512);
var state_28535__$1 = state_28535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28535__$1,(7),ch,inst_28515);
} else {
if((state_val_28536 === (13))){
var inst_28529 = (state_28535[(2)]);
var state_28535__$1 = state_28535;
var statearr_28540_28566 = state_28535__$1;
(statearr_28540_28566[(2)] = inst_28529);

(statearr_28540_28566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (6))){
var inst_28520 = (state_28535[(2)]);
var state_28535__$1 = state_28535;
if(cljs.core.truth_(inst_28520)){
var statearr_28541_28567 = state_28535__$1;
(statearr_28541_28567[(1)] = (8));

} else {
var statearr_28542_28568 = state_28535__$1;
(statearr_28542_28568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (3))){
var inst_28533 = (state_28535[(2)]);
var state_28535__$1 = state_28535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28535__$1,inst_28533);
} else {
if((state_val_28536 === (12))){
var state_28535__$1 = state_28535;
var statearr_28543_28569 = state_28535__$1;
(statearr_28543_28569[(2)] = null);

(statearr_28543_28569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (2))){
var inst_28512 = (state_28535[(7)]);
var state_28535__$1 = state_28535;
if(cljs.core.truth_(inst_28512)){
var statearr_28544_28570 = state_28535__$1;
(statearr_28544_28570[(1)] = (4));

} else {
var statearr_28545_28571 = state_28535__$1;
(statearr_28545_28571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (11))){
var inst_28526 = cljs.core.async.close_BANG_.call(null,ch);
var state_28535__$1 = state_28535;
var statearr_28546_28572 = state_28535__$1;
(statearr_28546_28572[(2)] = inst_28526);

(statearr_28546_28572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (9))){
var state_28535__$1 = state_28535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28547_28573 = state_28535__$1;
(statearr_28547_28573[(1)] = (11));

} else {
var statearr_28548_28574 = state_28535__$1;
(statearr_28548_28574[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (5))){
var inst_28512 = (state_28535[(7)]);
var state_28535__$1 = state_28535;
var statearr_28549_28575 = state_28535__$1;
(statearr_28549_28575[(2)] = inst_28512);

(statearr_28549_28575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (10))){
var inst_28531 = (state_28535[(2)]);
var state_28535__$1 = state_28535;
var statearr_28550_28576 = state_28535__$1;
(statearr_28550_28576[(2)] = inst_28531);

(statearr_28550_28576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (8))){
var inst_28512 = (state_28535[(7)]);
var inst_28522 = cljs.core.next.call(null,inst_28512);
var inst_28512__$1 = inst_28522;
var state_28535__$1 = (function (){var statearr_28551 = state_28535;
(statearr_28551[(7)] = inst_28512__$1);

return statearr_28551;
})();
var statearr_28552_28577 = state_28535__$1;
(statearr_28552_28577[(2)] = null);

(statearr_28552_28577[(1)] = (2));


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
});})(c__19424__auto__))
;
return ((function (switch__19359__auto__,c__19424__auto__){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_28556 = [null,null,null,null,null,null,null,null];
(statearr_28556[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_28556[(1)] = (1));

return statearr_28556;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_28535){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28557){if((e28557 instanceof Object)){
var ex__19363__auto__ = e28557;
var statearr_28558_28578 = state_28535;
(statearr_28558_28578[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28579 = state_28535;
state_28535 = G__28579;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_28535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_28535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__))
})();
var state__19426__auto__ = (function (){var statearr_28559 = f__19425__auto__.call(null);
(statearr_28559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_28559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto__))
);

return c__19424__auto__;
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
var x__16999__auto__ = (((_ == null))?null:_);
var m__17000__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,_);
} else {
var m__17000__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,_);
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
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17000__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,ch);
} else {
var m__17000__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,ch);
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
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m);
} else {
var m__17000__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28801 = (function (mult,ch,cs,meta28802){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28802 = meta28802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28803,meta28802__$1){
var self__ = this;
var _28803__$1 = this;
return (new cljs.core.async.t_cljs$core$async28801(self__.mult,self__.ch,self__.cs,meta28802__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28801.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28803){
var self__ = this;
var _28803__$1 = this;
return self__.meta28802;
});})(cs))
;

cljs.core.async.t_cljs$core$async28801.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28801.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28801.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28801.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28801.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28801.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28802","meta28802",896139273,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28801";

cljs.core.async.t_cljs$core$async28801.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async28801");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28801 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28801(mult__$1,ch__$1,cs__$1,meta28802){
return (new cljs.core.async.t_cljs$core$async28801(mult__$1,ch__$1,cs__$1,meta28802));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28801(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19424__auto___29022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29022,cs,m,dchan,dctr,done){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29022,cs,m,dchan,dctr,done){
return (function (state_28934){
var state_val_28935 = (state_28934[(1)]);
if((state_val_28935 === (7))){
var inst_28930 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28936_29023 = state_28934__$1;
(statearr_28936_29023[(2)] = inst_28930);

(statearr_28936_29023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (20))){
var inst_28835 = (state_28934[(7)]);
var inst_28845 = cljs.core.first.call(null,inst_28835);
var inst_28846 = cljs.core.nth.call(null,inst_28845,(0),null);
var inst_28847 = cljs.core.nth.call(null,inst_28845,(1),null);
var state_28934__$1 = (function (){var statearr_28937 = state_28934;
(statearr_28937[(8)] = inst_28846);

return statearr_28937;
})();
if(cljs.core.truth_(inst_28847)){
var statearr_28938_29024 = state_28934__$1;
(statearr_28938_29024[(1)] = (22));

} else {
var statearr_28939_29025 = state_28934__$1;
(statearr_28939_29025[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (27))){
var inst_28877 = (state_28934[(9)]);
var inst_28882 = (state_28934[(10)]);
var inst_28806 = (state_28934[(11)]);
var inst_28875 = (state_28934[(12)]);
var inst_28882__$1 = cljs.core._nth.call(null,inst_28875,inst_28877);
var inst_28883 = cljs.core.async.put_BANG_.call(null,inst_28882__$1,inst_28806,done);
var state_28934__$1 = (function (){var statearr_28940 = state_28934;
(statearr_28940[(10)] = inst_28882__$1);

return statearr_28940;
})();
if(cljs.core.truth_(inst_28883)){
var statearr_28941_29026 = state_28934__$1;
(statearr_28941_29026[(1)] = (30));

} else {
var statearr_28942_29027 = state_28934__$1;
(statearr_28942_29027[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (1))){
var state_28934__$1 = state_28934;
var statearr_28943_29028 = state_28934__$1;
(statearr_28943_29028[(2)] = null);

(statearr_28943_29028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (24))){
var inst_28835 = (state_28934[(7)]);
var inst_28852 = (state_28934[(2)]);
var inst_28853 = cljs.core.next.call(null,inst_28835);
var inst_28815 = inst_28853;
var inst_28816 = null;
var inst_28817 = (0);
var inst_28818 = (0);
var state_28934__$1 = (function (){var statearr_28944 = state_28934;
(statearr_28944[(13)] = inst_28816);

(statearr_28944[(14)] = inst_28815);

(statearr_28944[(15)] = inst_28818);

(statearr_28944[(16)] = inst_28852);

(statearr_28944[(17)] = inst_28817);

return statearr_28944;
})();
var statearr_28945_29029 = state_28934__$1;
(statearr_28945_29029[(2)] = null);

(statearr_28945_29029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (39))){
var state_28934__$1 = state_28934;
var statearr_28949_29030 = state_28934__$1;
(statearr_28949_29030[(2)] = null);

(statearr_28949_29030[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (4))){
var inst_28806 = (state_28934[(11)]);
var inst_28806__$1 = (state_28934[(2)]);
var inst_28807 = (inst_28806__$1 == null);
var state_28934__$1 = (function (){var statearr_28950 = state_28934;
(statearr_28950[(11)] = inst_28806__$1);

return statearr_28950;
})();
if(cljs.core.truth_(inst_28807)){
var statearr_28951_29031 = state_28934__$1;
(statearr_28951_29031[(1)] = (5));

} else {
var statearr_28952_29032 = state_28934__$1;
(statearr_28952_29032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (15))){
var inst_28816 = (state_28934[(13)]);
var inst_28815 = (state_28934[(14)]);
var inst_28818 = (state_28934[(15)]);
var inst_28817 = (state_28934[(17)]);
var inst_28831 = (state_28934[(2)]);
var inst_28832 = (inst_28818 + (1));
var tmp28946 = inst_28816;
var tmp28947 = inst_28815;
var tmp28948 = inst_28817;
var inst_28815__$1 = tmp28947;
var inst_28816__$1 = tmp28946;
var inst_28817__$1 = tmp28948;
var inst_28818__$1 = inst_28832;
var state_28934__$1 = (function (){var statearr_28953 = state_28934;
(statearr_28953[(13)] = inst_28816__$1);

(statearr_28953[(18)] = inst_28831);

(statearr_28953[(14)] = inst_28815__$1);

(statearr_28953[(15)] = inst_28818__$1);

(statearr_28953[(17)] = inst_28817__$1);

return statearr_28953;
})();
var statearr_28954_29033 = state_28934__$1;
(statearr_28954_29033[(2)] = null);

(statearr_28954_29033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (21))){
var inst_28856 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28958_29034 = state_28934__$1;
(statearr_28958_29034[(2)] = inst_28856);

(statearr_28958_29034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (31))){
var inst_28882 = (state_28934[(10)]);
var inst_28886 = done.call(null,null);
var inst_28887 = cljs.core.async.untap_STAR_.call(null,m,inst_28882);
var state_28934__$1 = (function (){var statearr_28959 = state_28934;
(statearr_28959[(19)] = inst_28886);

return statearr_28959;
})();
var statearr_28960_29035 = state_28934__$1;
(statearr_28960_29035[(2)] = inst_28887);

(statearr_28960_29035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (32))){
var inst_28877 = (state_28934[(9)]);
var inst_28874 = (state_28934[(20)]);
var inst_28876 = (state_28934[(21)]);
var inst_28875 = (state_28934[(12)]);
var inst_28889 = (state_28934[(2)]);
var inst_28890 = (inst_28877 + (1));
var tmp28955 = inst_28874;
var tmp28956 = inst_28876;
var tmp28957 = inst_28875;
var inst_28874__$1 = tmp28955;
var inst_28875__$1 = tmp28957;
var inst_28876__$1 = tmp28956;
var inst_28877__$1 = inst_28890;
var state_28934__$1 = (function (){var statearr_28961 = state_28934;
(statearr_28961[(22)] = inst_28889);

(statearr_28961[(9)] = inst_28877__$1);

(statearr_28961[(20)] = inst_28874__$1);

(statearr_28961[(21)] = inst_28876__$1);

(statearr_28961[(12)] = inst_28875__$1);

return statearr_28961;
})();
var statearr_28962_29036 = state_28934__$1;
(statearr_28962_29036[(2)] = null);

(statearr_28962_29036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (40))){
var inst_28902 = (state_28934[(23)]);
var inst_28906 = done.call(null,null);
var inst_28907 = cljs.core.async.untap_STAR_.call(null,m,inst_28902);
var state_28934__$1 = (function (){var statearr_28963 = state_28934;
(statearr_28963[(24)] = inst_28906);

return statearr_28963;
})();
var statearr_28964_29037 = state_28934__$1;
(statearr_28964_29037[(2)] = inst_28907);

(statearr_28964_29037[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (33))){
var inst_28893 = (state_28934[(25)]);
var inst_28895 = cljs.core.chunked_seq_QMARK_.call(null,inst_28893);
var state_28934__$1 = state_28934;
if(inst_28895){
var statearr_28965_29038 = state_28934__$1;
(statearr_28965_29038[(1)] = (36));

} else {
var statearr_28966_29039 = state_28934__$1;
(statearr_28966_29039[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (13))){
var inst_28825 = (state_28934[(26)]);
var inst_28828 = cljs.core.async.close_BANG_.call(null,inst_28825);
var state_28934__$1 = state_28934;
var statearr_28967_29040 = state_28934__$1;
(statearr_28967_29040[(2)] = inst_28828);

(statearr_28967_29040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (22))){
var inst_28846 = (state_28934[(8)]);
var inst_28849 = cljs.core.async.close_BANG_.call(null,inst_28846);
var state_28934__$1 = state_28934;
var statearr_28968_29041 = state_28934__$1;
(statearr_28968_29041[(2)] = inst_28849);

(statearr_28968_29041[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (36))){
var inst_28893 = (state_28934[(25)]);
var inst_28897 = cljs.core.chunk_first.call(null,inst_28893);
var inst_28898 = cljs.core.chunk_rest.call(null,inst_28893);
var inst_28899 = cljs.core.count.call(null,inst_28897);
var inst_28874 = inst_28898;
var inst_28875 = inst_28897;
var inst_28876 = inst_28899;
var inst_28877 = (0);
var state_28934__$1 = (function (){var statearr_28969 = state_28934;
(statearr_28969[(9)] = inst_28877);

(statearr_28969[(20)] = inst_28874);

(statearr_28969[(21)] = inst_28876);

(statearr_28969[(12)] = inst_28875);

return statearr_28969;
})();
var statearr_28970_29042 = state_28934__$1;
(statearr_28970_29042[(2)] = null);

(statearr_28970_29042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (41))){
var inst_28893 = (state_28934[(25)]);
var inst_28909 = (state_28934[(2)]);
var inst_28910 = cljs.core.next.call(null,inst_28893);
var inst_28874 = inst_28910;
var inst_28875 = null;
var inst_28876 = (0);
var inst_28877 = (0);
var state_28934__$1 = (function (){var statearr_28971 = state_28934;
(statearr_28971[(9)] = inst_28877);

(statearr_28971[(20)] = inst_28874);

(statearr_28971[(21)] = inst_28876);

(statearr_28971[(12)] = inst_28875);

(statearr_28971[(27)] = inst_28909);

return statearr_28971;
})();
var statearr_28972_29043 = state_28934__$1;
(statearr_28972_29043[(2)] = null);

(statearr_28972_29043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (43))){
var state_28934__$1 = state_28934;
var statearr_28973_29044 = state_28934__$1;
(statearr_28973_29044[(2)] = null);

(statearr_28973_29044[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (29))){
var inst_28918 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28974_29045 = state_28934__$1;
(statearr_28974_29045[(2)] = inst_28918);

(statearr_28974_29045[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (44))){
var inst_28927 = (state_28934[(2)]);
var state_28934__$1 = (function (){var statearr_28975 = state_28934;
(statearr_28975[(28)] = inst_28927);

return statearr_28975;
})();
var statearr_28976_29046 = state_28934__$1;
(statearr_28976_29046[(2)] = null);

(statearr_28976_29046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (6))){
var inst_28866 = (state_28934[(29)]);
var inst_28865 = cljs.core.deref.call(null,cs);
var inst_28866__$1 = cljs.core.keys.call(null,inst_28865);
var inst_28867 = cljs.core.count.call(null,inst_28866__$1);
var inst_28868 = cljs.core.reset_BANG_.call(null,dctr,inst_28867);
var inst_28873 = cljs.core.seq.call(null,inst_28866__$1);
var inst_28874 = inst_28873;
var inst_28875 = null;
var inst_28876 = (0);
var inst_28877 = (0);
var state_28934__$1 = (function (){var statearr_28977 = state_28934;
(statearr_28977[(9)] = inst_28877);

(statearr_28977[(29)] = inst_28866__$1);

(statearr_28977[(20)] = inst_28874);

(statearr_28977[(21)] = inst_28876);

(statearr_28977[(12)] = inst_28875);

(statearr_28977[(30)] = inst_28868);

return statearr_28977;
})();
var statearr_28978_29047 = state_28934__$1;
(statearr_28978_29047[(2)] = null);

(statearr_28978_29047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (28))){
var inst_28874 = (state_28934[(20)]);
var inst_28893 = (state_28934[(25)]);
var inst_28893__$1 = cljs.core.seq.call(null,inst_28874);
var state_28934__$1 = (function (){var statearr_28979 = state_28934;
(statearr_28979[(25)] = inst_28893__$1);

return statearr_28979;
})();
if(inst_28893__$1){
var statearr_28980_29048 = state_28934__$1;
(statearr_28980_29048[(1)] = (33));

} else {
var statearr_28981_29049 = state_28934__$1;
(statearr_28981_29049[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (25))){
var inst_28877 = (state_28934[(9)]);
var inst_28876 = (state_28934[(21)]);
var inst_28879 = (inst_28877 < inst_28876);
var inst_28880 = inst_28879;
var state_28934__$1 = state_28934;
if(cljs.core.truth_(inst_28880)){
var statearr_28982_29050 = state_28934__$1;
(statearr_28982_29050[(1)] = (27));

} else {
var statearr_28983_29051 = state_28934__$1;
(statearr_28983_29051[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (34))){
var state_28934__$1 = state_28934;
var statearr_28984_29052 = state_28934__$1;
(statearr_28984_29052[(2)] = null);

(statearr_28984_29052[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (17))){
var state_28934__$1 = state_28934;
var statearr_28985_29053 = state_28934__$1;
(statearr_28985_29053[(2)] = null);

(statearr_28985_29053[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (3))){
var inst_28932 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28934__$1,inst_28932);
} else {
if((state_val_28935 === (12))){
var inst_28861 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28986_29054 = state_28934__$1;
(statearr_28986_29054[(2)] = inst_28861);

(statearr_28986_29054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (2))){
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28934__$1,(4),ch);
} else {
if((state_val_28935 === (23))){
var state_28934__$1 = state_28934;
var statearr_28987_29055 = state_28934__$1;
(statearr_28987_29055[(2)] = null);

(statearr_28987_29055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (35))){
var inst_28916 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28988_29056 = state_28934__$1;
(statearr_28988_29056[(2)] = inst_28916);

(statearr_28988_29056[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (19))){
var inst_28835 = (state_28934[(7)]);
var inst_28839 = cljs.core.chunk_first.call(null,inst_28835);
var inst_28840 = cljs.core.chunk_rest.call(null,inst_28835);
var inst_28841 = cljs.core.count.call(null,inst_28839);
var inst_28815 = inst_28840;
var inst_28816 = inst_28839;
var inst_28817 = inst_28841;
var inst_28818 = (0);
var state_28934__$1 = (function (){var statearr_28989 = state_28934;
(statearr_28989[(13)] = inst_28816);

(statearr_28989[(14)] = inst_28815);

(statearr_28989[(15)] = inst_28818);

(statearr_28989[(17)] = inst_28817);

return statearr_28989;
})();
var statearr_28990_29057 = state_28934__$1;
(statearr_28990_29057[(2)] = null);

(statearr_28990_29057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (11))){
var inst_28815 = (state_28934[(14)]);
var inst_28835 = (state_28934[(7)]);
var inst_28835__$1 = cljs.core.seq.call(null,inst_28815);
var state_28934__$1 = (function (){var statearr_28991 = state_28934;
(statearr_28991[(7)] = inst_28835__$1);

return statearr_28991;
})();
if(inst_28835__$1){
var statearr_28992_29058 = state_28934__$1;
(statearr_28992_29058[(1)] = (16));

} else {
var statearr_28993_29059 = state_28934__$1;
(statearr_28993_29059[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (9))){
var inst_28863 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28994_29060 = state_28934__$1;
(statearr_28994_29060[(2)] = inst_28863);

(statearr_28994_29060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (5))){
var inst_28813 = cljs.core.deref.call(null,cs);
var inst_28814 = cljs.core.seq.call(null,inst_28813);
var inst_28815 = inst_28814;
var inst_28816 = null;
var inst_28817 = (0);
var inst_28818 = (0);
var state_28934__$1 = (function (){var statearr_28995 = state_28934;
(statearr_28995[(13)] = inst_28816);

(statearr_28995[(14)] = inst_28815);

(statearr_28995[(15)] = inst_28818);

(statearr_28995[(17)] = inst_28817);

return statearr_28995;
})();
var statearr_28996_29061 = state_28934__$1;
(statearr_28996_29061[(2)] = null);

(statearr_28996_29061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (14))){
var state_28934__$1 = state_28934;
var statearr_28997_29062 = state_28934__$1;
(statearr_28997_29062[(2)] = null);

(statearr_28997_29062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (45))){
var inst_28924 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_28998_29063 = state_28934__$1;
(statearr_28998_29063[(2)] = inst_28924);

(statearr_28998_29063[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (26))){
var inst_28866 = (state_28934[(29)]);
var inst_28920 = (state_28934[(2)]);
var inst_28921 = cljs.core.seq.call(null,inst_28866);
var state_28934__$1 = (function (){var statearr_28999 = state_28934;
(statearr_28999[(31)] = inst_28920);

return statearr_28999;
})();
if(inst_28921){
var statearr_29000_29064 = state_28934__$1;
(statearr_29000_29064[(1)] = (42));

} else {
var statearr_29001_29065 = state_28934__$1;
(statearr_29001_29065[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (16))){
var inst_28835 = (state_28934[(7)]);
var inst_28837 = cljs.core.chunked_seq_QMARK_.call(null,inst_28835);
var state_28934__$1 = state_28934;
if(inst_28837){
var statearr_29002_29066 = state_28934__$1;
(statearr_29002_29066[(1)] = (19));

} else {
var statearr_29003_29067 = state_28934__$1;
(statearr_29003_29067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (38))){
var inst_28913 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_29004_29068 = state_28934__$1;
(statearr_29004_29068[(2)] = inst_28913);

(statearr_29004_29068[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (30))){
var state_28934__$1 = state_28934;
var statearr_29005_29069 = state_28934__$1;
(statearr_29005_29069[(2)] = null);

(statearr_29005_29069[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (10))){
var inst_28816 = (state_28934[(13)]);
var inst_28818 = (state_28934[(15)]);
var inst_28824 = cljs.core._nth.call(null,inst_28816,inst_28818);
var inst_28825 = cljs.core.nth.call(null,inst_28824,(0),null);
var inst_28826 = cljs.core.nth.call(null,inst_28824,(1),null);
var state_28934__$1 = (function (){var statearr_29006 = state_28934;
(statearr_29006[(26)] = inst_28825);

return statearr_29006;
})();
if(cljs.core.truth_(inst_28826)){
var statearr_29007_29070 = state_28934__$1;
(statearr_29007_29070[(1)] = (13));

} else {
var statearr_29008_29071 = state_28934__$1;
(statearr_29008_29071[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (18))){
var inst_28859 = (state_28934[(2)]);
var state_28934__$1 = state_28934;
var statearr_29009_29072 = state_28934__$1;
(statearr_29009_29072[(2)] = inst_28859);

(statearr_29009_29072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (42))){
var state_28934__$1 = state_28934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28934__$1,(45),dchan);
} else {
if((state_val_28935 === (37))){
var inst_28902 = (state_28934[(23)]);
var inst_28806 = (state_28934[(11)]);
var inst_28893 = (state_28934[(25)]);
var inst_28902__$1 = cljs.core.first.call(null,inst_28893);
var inst_28903 = cljs.core.async.put_BANG_.call(null,inst_28902__$1,inst_28806,done);
var state_28934__$1 = (function (){var statearr_29010 = state_28934;
(statearr_29010[(23)] = inst_28902__$1);

return statearr_29010;
})();
if(cljs.core.truth_(inst_28903)){
var statearr_29011_29073 = state_28934__$1;
(statearr_29011_29073[(1)] = (39));

} else {
var statearr_29012_29074 = state_28934__$1;
(statearr_29012_29074[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28935 === (8))){
var inst_28818 = (state_28934[(15)]);
var inst_28817 = (state_28934[(17)]);
var inst_28820 = (inst_28818 < inst_28817);
var inst_28821 = inst_28820;
var state_28934__$1 = state_28934;
if(cljs.core.truth_(inst_28821)){
var statearr_29013_29075 = state_28934__$1;
(statearr_29013_29075[(1)] = (10));

} else {
var statearr_29014_29076 = state_28934__$1;
(statearr_29014_29076[(1)] = (11));

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
});})(c__19424__auto___29022,cs,m,dchan,dctr,done))
;
return ((function (switch__19359__auto__,c__19424__auto___29022,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19360__auto__ = null;
var cljs$core$async$mult_$_state_machine__19360__auto____0 = (function (){
var statearr_29018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29018[(0)] = cljs$core$async$mult_$_state_machine__19360__auto__);

(statearr_29018[(1)] = (1));

return statearr_29018;
});
var cljs$core$async$mult_$_state_machine__19360__auto____1 = (function (state_28934){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29019){if((e29019 instanceof Object)){
var ex__19363__auto__ = e29019;
var statearr_29020_29077 = state_28934;
(statearr_29020_29077[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29078 = state_28934;
state_28934 = G__29078;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19360__auto__ = function(state_28934){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19360__auto____1.call(this,state_28934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19360__auto____0;
cljs$core$async$mult_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19360__auto____1;
return cljs$core$async$mult_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29022,cs,m,dchan,dctr,done))
})();
var state__19426__auto__ = (function (){var statearr_29021 = f__19425__auto__.call(null);
(statearr_29021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29022);

return statearr_29021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29022,cs,m,dchan,dctr,done))
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
var args29079 = [];
var len__17402__auto___29082 = arguments.length;
var i__17403__auto___29083 = (0);
while(true){
if((i__17403__auto___29083 < len__17402__auto___29082)){
args29079.push((arguments[i__17403__auto___29083]));

var G__29084 = (i__17403__auto___29083 + (1));
i__17403__auto___29083 = G__29084;
continue;
} else {
}
break;
}

var G__29081 = args29079.length;
switch (G__29081) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29079.length)].join('')));

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
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,ch);
} else {
var m__17000__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,ch);
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
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,ch);
} else {
var m__17000__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,ch);
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
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m);
} else {
var m__17000__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m);
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
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,state_map);
} else {
var m__17000__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,state_map);
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
var x__16999__auto__ = (((m == null))?null:m);
var m__17000__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,m,mode);
} else {
var m__17000__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17409__auto__ = [];
var len__17402__auto___29096 = arguments.length;
var i__17403__auto___29097 = (0);
while(true){
if((i__17403__auto___29097 < len__17402__auto___29096)){
args__17409__auto__.push((arguments[i__17403__auto___29097]));

var G__29098 = (i__17403__auto___29097 + (1));
i__17403__auto___29097 = G__29098;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((3) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17410__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29090){
var map__29091 = p__29090;
var map__29091__$1 = ((((!((map__29091 == null)))?((((map__29091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29091):map__29091);
var opts = map__29091__$1;
var statearr_29093_29099 = state;
(statearr_29093_29099[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29091,map__29091__$1,opts){
return (function (val){
var statearr_29094_29100 = state;
(statearr_29094_29100[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29091,map__29091__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29095_29101 = state;
(statearr_29095_29101[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29086){
var G__29087 = cljs.core.first.call(null,seq29086);
var seq29086__$1 = cljs.core.next.call(null,seq29086);
var G__29088 = cljs.core.first.call(null,seq29086__$1);
var seq29086__$2 = cljs.core.next.call(null,seq29086__$1);
var G__29089 = cljs.core.first.call(null,seq29086__$2);
var seq29086__$3 = cljs.core.next.call(null,seq29086__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29087,G__29088,G__29089,seq29086__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29265 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29266){
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
this.meta29266 = meta29266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29267,meta29266__$1){
var self__ = this;
var _29267__$1 = this;
return (new cljs.core.async.t_cljs$core$async29265(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29266__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29267){
var self__ = this;
var _29267__$1 = this;
return self__.meta29266;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29265.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29266","meta29266",-886204401,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29265";

cljs.core.async.t_cljs$core$async29265.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29265");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29265 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29265(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29266){
return (new cljs.core.async.t_cljs$core$async29265(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29266));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29265(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19424__auto___29428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29365){
var state_val_29366 = (state_29365[(1)]);
if((state_val_29366 === (7))){
var inst_29283 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29367_29429 = state_29365__$1;
(statearr_29367_29429[(2)] = inst_29283);

(statearr_29367_29429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (20))){
var inst_29295 = (state_29365[(7)]);
var state_29365__$1 = state_29365;
var statearr_29368_29430 = state_29365__$1;
(statearr_29368_29430[(2)] = inst_29295);

(statearr_29368_29430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (27))){
var state_29365__$1 = state_29365;
var statearr_29369_29431 = state_29365__$1;
(statearr_29369_29431[(2)] = null);

(statearr_29369_29431[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (1))){
var inst_29271 = (state_29365[(8)]);
var inst_29271__$1 = calc_state.call(null);
var inst_29273 = (inst_29271__$1 == null);
var inst_29274 = cljs.core.not.call(null,inst_29273);
var state_29365__$1 = (function (){var statearr_29370 = state_29365;
(statearr_29370[(8)] = inst_29271__$1);

return statearr_29370;
})();
if(inst_29274){
var statearr_29371_29432 = state_29365__$1;
(statearr_29371_29432[(1)] = (2));

} else {
var statearr_29372_29433 = state_29365__$1;
(statearr_29372_29433[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (24))){
var inst_29325 = (state_29365[(9)]);
var inst_29318 = (state_29365[(10)]);
var inst_29339 = (state_29365[(11)]);
var inst_29339__$1 = inst_29318.call(null,inst_29325);
var state_29365__$1 = (function (){var statearr_29373 = state_29365;
(statearr_29373[(11)] = inst_29339__$1);

return statearr_29373;
})();
if(cljs.core.truth_(inst_29339__$1)){
var statearr_29374_29434 = state_29365__$1;
(statearr_29374_29434[(1)] = (29));

} else {
var statearr_29375_29435 = state_29365__$1;
(statearr_29375_29435[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (4))){
var inst_29286 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29286)){
var statearr_29376_29436 = state_29365__$1;
(statearr_29376_29436[(1)] = (8));

} else {
var statearr_29377_29437 = state_29365__$1;
(statearr_29377_29437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (15))){
var inst_29312 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29312)){
var statearr_29378_29438 = state_29365__$1;
(statearr_29378_29438[(1)] = (19));

} else {
var statearr_29379_29439 = state_29365__$1;
(statearr_29379_29439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (21))){
var inst_29317 = (state_29365[(12)]);
var inst_29317__$1 = (state_29365[(2)]);
var inst_29318 = cljs.core.get.call(null,inst_29317__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29319 = cljs.core.get.call(null,inst_29317__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29320 = cljs.core.get.call(null,inst_29317__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29365__$1 = (function (){var statearr_29380 = state_29365;
(statearr_29380[(10)] = inst_29318);

(statearr_29380[(13)] = inst_29319);

(statearr_29380[(12)] = inst_29317__$1);

return statearr_29380;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29365__$1,(22),inst_29320);
} else {
if((state_val_29366 === (31))){
var inst_29347 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29347)){
var statearr_29381_29440 = state_29365__$1;
(statearr_29381_29440[(1)] = (32));

} else {
var statearr_29382_29441 = state_29365__$1;
(statearr_29382_29441[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (32))){
var inst_29324 = (state_29365[(14)]);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29365__$1,(35),out,inst_29324);
} else {
if((state_val_29366 === (33))){
var inst_29317 = (state_29365[(12)]);
var inst_29295 = inst_29317;
var state_29365__$1 = (function (){var statearr_29383 = state_29365;
(statearr_29383[(7)] = inst_29295);

return statearr_29383;
})();
var statearr_29384_29442 = state_29365__$1;
(statearr_29384_29442[(2)] = null);

(statearr_29384_29442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (13))){
var inst_29295 = (state_29365[(7)]);
var inst_29302 = inst_29295.cljs$lang$protocol_mask$partition0$;
var inst_29303 = (inst_29302 & (64));
var inst_29304 = inst_29295.cljs$core$ISeq$;
var inst_29305 = (inst_29303) || (inst_29304);
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29305)){
var statearr_29385_29443 = state_29365__$1;
(statearr_29385_29443[(1)] = (16));

} else {
var statearr_29386_29444 = state_29365__$1;
(statearr_29386_29444[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (22))){
var inst_29325 = (state_29365[(9)]);
var inst_29324 = (state_29365[(14)]);
var inst_29323 = (state_29365[(2)]);
var inst_29324__$1 = cljs.core.nth.call(null,inst_29323,(0),null);
var inst_29325__$1 = cljs.core.nth.call(null,inst_29323,(1),null);
var inst_29326 = (inst_29324__$1 == null);
var inst_29327 = cljs.core._EQ_.call(null,inst_29325__$1,change);
var inst_29328 = (inst_29326) || (inst_29327);
var state_29365__$1 = (function (){var statearr_29387 = state_29365;
(statearr_29387[(9)] = inst_29325__$1);

(statearr_29387[(14)] = inst_29324__$1);

return statearr_29387;
})();
if(cljs.core.truth_(inst_29328)){
var statearr_29388_29445 = state_29365__$1;
(statearr_29388_29445[(1)] = (23));

} else {
var statearr_29389_29446 = state_29365__$1;
(statearr_29389_29446[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (36))){
var inst_29317 = (state_29365[(12)]);
var inst_29295 = inst_29317;
var state_29365__$1 = (function (){var statearr_29390 = state_29365;
(statearr_29390[(7)] = inst_29295);

return statearr_29390;
})();
var statearr_29391_29447 = state_29365__$1;
(statearr_29391_29447[(2)] = null);

(statearr_29391_29447[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (29))){
var inst_29339 = (state_29365[(11)]);
var state_29365__$1 = state_29365;
var statearr_29392_29448 = state_29365__$1;
(statearr_29392_29448[(2)] = inst_29339);

(statearr_29392_29448[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (6))){
var state_29365__$1 = state_29365;
var statearr_29393_29449 = state_29365__$1;
(statearr_29393_29449[(2)] = false);

(statearr_29393_29449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (28))){
var inst_29335 = (state_29365[(2)]);
var inst_29336 = calc_state.call(null);
var inst_29295 = inst_29336;
var state_29365__$1 = (function (){var statearr_29394 = state_29365;
(statearr_29394[(15)] = inst_29335);

(statearr_29394[(7)] = inst_29295);

return statearr_29394;
})();
var statearr_29395_29450 = state_29365__$1;
(statearr_29395_29450[(2)] = null);

(statearr_29395_29450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (25))){
var inst_29361 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29396_29451 = state_29365__$1;
(statearr_29396_29451[(2)] = inst_29361);

(statearr_29396_29451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (34))){
var inst_29359 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29397_29452 = state_29365__$1;
(statearr_29397_29452[(2)] = inst_29359);

(statearr_29397_29452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (17))){
var state_29365__$1 = state_29365;
var statearr_29398_29453 = state_29365__$1;
(statearr_29398_29453[(2)] = false);

(statearr_29398_29453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (3))){
var state_29365__$1 = state_29365;
var statearr_29399_29454 = state_29365__$1;
(statearr_29399_29454[(2)] = false);

(statearr_29399_29454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (12))){
var inst_29363 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29365__$1,inst_29363);
} else {
if((state_val_29366 === (2))){
var inst_29271 = (state_29365[(8)]);
var inst_29276 = inst_29271.cljs$lang$protocol_mask$partition0$;
var inst_29277 = (inst_29276 & (64));
var inst_29278 = inst_29271.cljs$core$ISeq$;
var inst_29279 = (inst_29277) || (inst_29278);
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29279)){
var statearr_29400_29455 = state_29365__$1;
(statearr_29400_29455[(1)] = (5));

} else {
var statearr_29401_29456 = state_29365__$1;
(statearr_29401_29456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (23))){
var inst_29324 = (state_29365[(14)]);
var inst_29330 = (inst_29324 == null);
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29330)){
var statearr_29402_29457 = state_29365__$1;
(statearr_29402_29457[(1)] = (26));

} else {
var statearr_29403_29458 = state_29365__$1;
(statearr_29403_29458[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (35))){
var inst_29350 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29350)){
var statearr_29404_29459 = state_29365__$1;
(statearr_29404_29459[(1)] = (36));

} else {
var statearr_29405_29460 = state_29365__$1;
(statearr_29405_29460[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (19))){
var inst_29295 = (state_29365[(7)]);
var inst_29314 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29295);
var state_29365__$1 = state_29365;
var statearr_29406_29461 = state_29365__$1;
(statearr_29406_29461[(2)] = inst_29314);

(statearr_29406_29461[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (11))){
var inst_29295 = (state_29365[(7)]);
var inst_29299 = (inst_29295 == null);
var inst_29300 = cljs.core.not.call(null,inst_29299);
var state_29365__$1 = state_29365;
if(inst_29300){
var statearr_29407_29462 = state_29365__$1;
(statearr_29407_29462[(1)] = (13));

} else {
var statearr_29408_29463 = state_29365__$1;
(statearr_29408_29463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (9))){
var inst_29271 = (state_29365[(8)]);
var state_29365__$1 = state_29365;
var statearr_29409_29464 = state_29365__$1;
(statearr_29409_29464[(2)] = inst_29271);

(statearr_29409_29464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (5))){
var state_29365__$1 = state_29365;
var statearr_29410_29465 = state_29365__$1;
(statearr_29410_29465[(2)] = true);

(statearr_29410_29465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (14))){
var state_29365__$1 = state_29365;
var statearr_29411_29466 = state_29365__$1;
(statearr_29411_29466[(2)] = false);

(statearr_29411_29466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (26))){
var inst_29325 = (state_29365[(9)]);
var inst_29332 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29325);
var state_29365__$1 = state_29365;
var statearr_29412_29467 = state_29365__$1;
(statearr_29412_29467[(2)] = inst_29332);

(statearr_29412_29467[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (16))){
var state_29365__$1 = state_29365;
var statearr_29413_29468 = state_29365__$1;
(statearr_29413_29468[(2)] = true);

(statearr_29413_29468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (38))){
var inst_29355 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29414_29469 = state_29365__$1;
(statearr_29414_29469[(2)] = inst_29355);

(statearr_29414_29469[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (30))){
var inst_29325 = (state_29365[(9)]);
var inst_29318 = (state_29365[(10)]);
var inst_29319 = (state_29365[(13)]);
var inst_29342 = cljs.core.empty_QMARK_.call(null,inst_29318);
var inst_29343 = inst_29319.call(null,inst_29325);
var inst_29344 = cljs.core.not.call(null,inst_29343);
var inst_29345 = (inst_29342) && (inst_29344);
var state_29365__$1 = state_29365;
var statearr_29415_29470 = state_29365__$1;
(statearr_29415_29470[(2)] = inst_29345);

(statearr_29415_29470[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (10))){
var inst_29271 = (state_29365[(8)]);
var inst_29291 = (state_29365[(2)]);
var inst_29292 = cljs.core.get.call(null,inst_29291,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29293 = cljs.core.get.call(null,inst_29291,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29294 = cljs.core.get.call(null,inst_29291,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29295 = inst_29271;
var state_29365__$1 = (function (){var statearr_29416 = state_29365;
(statearr_29416[(16)] = inst_29294);

(statearr_29416[(7)] = inst_29295);

(statearr_29416[(17)] = inst_29293);

(statearr_29416[(18)] = inst_29292);

return statearr_29416;
})();
var statearr_29417_29471 = state_29365__$1;
(statearr_29417_29471[(2)] = null);

(statearr_29417_29471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (18))){
var inst_29309 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29418_29472 = state_29365__$1;
(statearr_29418_29472[(2)] = inst_29309);

(statearr_29418_29472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (37))){
var state_29365__$1 = state_29365;
var statearr_29419_29473 = state_29365__$1;
(statearr_29419_29473[(2)] = null);

(statearr_29419_29473[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (8))){
var inst_29271 = (state_29365[(8)]);
var inst_29288 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29271);
var state_29365__$1 = state_29365;
var statearr_29420_29474 = state_29365__$1;
(statearr_29420_29474[(2)] = inst_29288);

(statearr_29420_29474[(1)] = (10));


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
});})(c__19424__auto___29428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19359__auto__,c__19424__auto___29428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19360__auto__ = null;
var cljs$core$async$mix_$_state_machine__19360__auto____0 = (function (){
var statearr_29424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29424[(0)] = cljs$core$async$mix_$_state_machine__19360__auto__);

(statearr_29424[(1)] = (1));

return statearr_29424;
});
var cljs$core$async$mix_$_state_machine__19360__auto____1 = (function (state_29365){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29425){if((e29425 instanceof Object)){
var ex__19363__auto__ = e29425;
var statearr_29426_29475 = state_29365;
(statearr_29426_29475[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29476 = state_29365;
state_29365 = G__29476;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19360__auto__ = function(state_29365){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19360__auto____1.call(this,state_29365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19360__auto____0;
cljs$core$async$mix_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19360__auto____1;
return cljs$core$async$mix_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19426__auto__ = (function (){var statearr_29427 = f__19425__auto__.call(null);
(statearr_29427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29428);

return statearr_29427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__16999__auto__ = (((p == null))?null:p);
var m__17000__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17000__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__16999__auto__ = (((p == null))?null:p);
var m__17000__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,p,v,ch);
} else {
var m__17000__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29477 = [];
var len__17402__auto___29480 = arguments.length;
var i__17403__auto___29481 = (0);
while(true){
if((i__17403__auto___29481 < len__17402__auto___29480)){
args29477.push((arguments[i__17403__auto___29481]));

var G__29482 = (i__17403__auto___29481 + (1));
i__17403__auto___29481 = G__29482;
continue;
} else {
}
break;
}

var G__29479 = args29477.length;
switch (G__29479) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29477.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16999__auto__ = (((p == null))?null:p);
var m__17000__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,p);
} else {
var m__17000__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,p);
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
var x__16999__auto__ = (((p == null))?null:p);
var m__17000__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,p,v);
} else {
var m__17000__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,p,v);
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
var args29485 = [];
var len__17402__auto___29610 = arguments.length;
var i__17403__auto___29611 = (0);
while(true){
if((i__17403__auto___29611 < len__17402__auto___29610)){
args29485.push((arguments[i__17403__auto___29611]));

var G__29612 = (i__17403__auto___29611 + (1));
i__17403__auto___29611 = G__29612;
continue;
} else {
}
break;
}

var G__29487 = args29485.length;
switch (G__29487) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29485.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16344__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16344__auto__,mults){
return (function (p1__29484_SHARP_){
if(cljs.core.truth_(p1__29484_SHARP_.call(null,topic))){
return p1__29484_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29484_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16344__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29488 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29489){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29489 = meta29489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29490,meta29489__$1){
var self__ = this;
var _29490__$1 = this;
return (new cljs.core.async.t_cljs$core$async29488(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29489__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29490){
var self__ = this;
var _29490__$1 = this;
return self__.meta29489;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29488.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29488.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29489","meta29489",-715890661,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29488";

cljs.core.async.t_cljs$core$async29488.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29488");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29488 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29488(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29489){
return (new cljs.core.async.t_cljs$core$async29488(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29489));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29488(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19424__auto___29614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29614,mults,ensure_mult,p){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29614,mults,ensure_mult,p){
return (function (state_29562){
var state_val_29563 = (state_29562[(1)]);
if((state_val_29563 === (7))){
var inst_29558 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29564_29615 = state_29562__$1;
(statearr_29564_29615[(2)] = inst_29558);

(statearr_29564_29615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (20))){
var state_29562__$1 = state_29562;
var statearr_29565_29616 = state_29562__$1;
(statearr_29565_29616[(2)] = null);

(statearr_29565_29616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (1))){
var state_29562__$1 = state_29562;
var statearr_29566_29617 = state_29562__$1;
(statearr_29566_29617[(2)] = null);

(statearr_29566_29617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (24))){
var inst_29541 = (state_29562[(7)]);
var inst_29550 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29541);
var state_29562__$1 = state_29562;
var statearr_29567_29618 = state_29562__$1;
(statearr_29567_29618[(2)] = inst_29550);

(statearr_29567_29618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (4))){
var inst_29493 = (state_29562[(8)]);
var inst_29493__$1 = (state_29562[(2)]);
var inst_29494 = (inst_29493__$1 == null);
var state_29562__$1 = (function (){var statearr_29568 = state_29562;
(statearr_29568[(8)] = inst_29493__$1);

return statearr_29568;
})();
if(cljs.core.truth_(inst_29494)){
var statearr_29569_29619 = state_29562__$1;
(statearr_29569_29619[(1)] = (5));

} else {
var statearr_29570_29620 = state_29562__$1;
(statearr_29570_29620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (15))){
var inst_29535 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29571_29621 = state_29562__$1;
(statearr_29571_29621[(2)] = inst_29535);

(statearr_29571_29621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (21))){
var inst_29555 = (state_29562[(2)]);
var state_29562__$1 = (function (){var statearr_29572 = state_29562;
(statearr_29572[(9)] = inst_29555);

return statearr_29572;
})();
var statearr_29573_29622 = state_29562__$1;
(statearr_29573_29622[(2)] = null);

(statearr_29573_29622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (13))){
var inst_29517 = (state_29562[(10)]);
var inst_29519 = cljs.core.chunked_seq_QMARK_.call(null,inst_29517);
var state_29562__$1 = state_29562;
if(inst_29519){
var statearr_29574_29623 = state_29562__$1;
(statearr_29574_29623[(1)] = (16));

} else {
var statearr_29575_29624 = state_29562__$1;
(statearr_29575_29624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (22))){
var inst_29547 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
if(cljs.core.truth_(inst_29547)){
var statearr_29576_29625 = state_29562__$1;
(statearr_29576_29625[(1)] = (23));

} else {
var statearr_29577_29626 = state_29562__$1;
(statearr_29577_29626[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (6))){
var inst_29493 = (state_29562[(8)]);
var inst_29543 = (state_29562[(11)]);
var inst_29541 = (state_29562[(7)]);
var inst_29541__$1 = topic_fn.call(null,inst_29493);
var inst_29542 = cljs.core.deref.call(null,mults);
var inst_29543__$1 = cljs.core.get.call(null,inst_29542,inst_29541__$1);
var state_29562__$1 = (function (){var statearr_29578 = state_29562;
(statearr_29578[(11)] = inst_29543__$1);

(statearr_29578[(7)] = inst_29541__$1);

return statearr_29578;
})();
if(cljs.core.truth_(inst_29543__$1)){
var statearr_29579_29627 = state_29562__$1;
(statearr_29579_29627[(1)] = (19));

} else {
var statearr_29580_29628 = state_29562__$1;
(statearr_29580_29628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (25))){
var inst_29552 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29581_29629 = state_29562__$1;
(statearr_29581_29629[(2)] = inst_29552);

(statearr_29581_29629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (17))){
var inst_29517 = (state_29562[(10)]);
var inst_29526 = cljs.core.first.call(null,inst_29517);
var inst_29527 = cljs.core.async.muxch_STAR_.call(null,inst_29526);
var inst_29528 = cljs.core.async.close_BANG_.call(null,inst_29527);
var inst_29529 = cljs.core.next.call(null,inst_29517);
var inst_29503 = inst_29529;
var inst_29504 = null;
var inst_29505 = (0);
var inst_29506 = (0);
var state_29562__$1 = (function (){var statearr_29582 = state_29562;
(statearr_29582[(12)] = inst_29505);

(statearr_29582[(13)] = inst_29503);

(statearr_29582[(14)] = inst_29528);

(statearr_29582[(15)] = inst_29504);

(statearr_29582[(16)] = inst_29506);

return statearr_29582;
})();
var statearr_29583_29630 = state_29562__$1;
(statearr_29583_29630[(2)] = null);

(statearr_29583_29630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (3))){
var inst_29560 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29562__$1,inst_29560);
} else {
if((state_val_29563 === (12))){
var inst_29537 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29584_29631 = state_29562__$1;
(statearr_29584_29631[(2)] = inst_29537);

(statearr_29584_29631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (2))){
var state_29562__$1 = state_29562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29562__$1,(4),ch);
} else {
if((state_val_29563 === (23))){
var state_29562__$1 = state_29562;
var statearr_29585_29632 = state_29562__$1;
(statearr_29585_29632[(2)] = null);

(statearr_29585_29632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (19))){
var inst_29493 = (state_29562[(8)]);
var inst_29543 = (state_29562[(11)]);
var inst_29545 = cljs.core.async.muxch_STAR_.call(null,inst_29543);
var state_29562__$1 = state_29562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29562__$1,(22),inst_29545,inst_29493);
} else {
if((state_val_29563 === (11))){
var inst_29503 = (state_29562[(13)]);
var inst_29517 = (state_29562[(10)]);
var inst_29517__$1 = cljs.core.seq.call(null,inst_29503);
var state_29562__$1 = (function (){var statearr_29586 = state_29562;
(statearr_29586[(10)] = inst_29517__$1);

return statearr_29586;
})();
if(inst_29517__$1){
var statearr_29587_29633 = state_29562__$1;
(statearr_29587_29633[(1)] = (13));

} else {
var statearr_29588_29634 = state_29562__$1;
(statearr_29588_29634[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (9))){
var inst_29539 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29589_29635 = state_29562__$1;
(statearr_29589_29635[(2)] = inst_29539);

(statearr_29589_29635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (5))){
var inst_29500 = cljs.core.deref.call(null,mults);
var inst_29501 = cljs.core.vals.call(null,inst_29500);
var inst_29502 = cljs.core.seq.call(null,inst_29501);
var inst_29503 = inst_29502;
var inst_29504 = null;
var inst_29505 = (0);
var inst_29506 = (0);
var state_29562__$1 = (function (){var statearr_29590 = state_29562;
(statearr_29590[(12)] = inst_29505);

(statearr_29590[(13)] = inst_29503);

(statearr_29590[(15)] = inst_29504);

(statearr_29590[(16)] = inst_29506);

return statearr_29590;
})();
var statearr_29591_29636 = state_29562__$1;
(statearr_29591_29636[(2)] = null);

(statearr_29591_29636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (14))){
var state_29562__$1 = state_29562;
var statearr_29595_29637 = state_29562__$1;
(statearr_29595_29637[(2)] = null);

(statearr_29595_29637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (16))){
var inst_29517 = (state_29562[(10)]);
var inst_29521 = cljs.core.chunk_first.call(null,inst_29517);
var inst_29522 = cljs.core.chunk_rest.call(null,inst_29517);
var inst_29523 = cljs.core.count.call(null,inst_29521);
var inst_29503 = inst_29522;
var inst_29504 = inst_29521;
var inst_29505 = inst_29523;
var inst_29506 = (0);
var state_29562__$1 = (function (){var statearr_29596 = state_29562;
(statearr_29596[(12)] = inst_29505);

(statearr_29596[(13)] = inst_29503);

(statearr_29596[(15)] = inst_29504);

(statearr_29596[(16)] = inst_29506);

return statearr_29596;
})();
var statearr_29597_29638 = state_29562__$1;
(statearr_29597_29638[(2)] = null);

(statearr_29597_29638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (10))){
var inst_29505 = (state_29562[(12)]);
var inst_29503 = (state_29562[(13)]);
var inst_29504 = (state_29562[(15)]);
var inst_29506 = (state_29562[(16)]);
var inst_29511 = cljs.core._nth.call(null,inst_29504,inst_29506);
var inst_29512 = cljs.core.async.muxch_STAR_.call(null,inst_29511);
var inst_29513 = cljs.core.async.close_BANG_.call(null,inst_29512);
var inst_29514 = (inst_29506 + (1));
var tmp29592 = inst_29505;
var tmp29593 = inst_29503;
var tmp29594 = inst_29504;
var inst_29503__$1 = tmp29593;
var inst_29504__$1 = tmp29594;
var inst_29505__$1 = tmp29592;
var inst_29506__$1 = inst_29514;
var state_29562__$1 = (function (){var statearr_29598 = state_29562;
(statearr_29598[(12)] = inst_29505__$1);

(statearr_29598[(13)] = inst_29503__$1);

(statearr_29598[(15)] = inst_29504__$1);

(statearr_29598[(17)] = inst_29513);

(statearr_29598[(16)] = inst_29506__$1);

return statearr_29598;
})();
var statearr_29599_29639 = state_29562__$1;
(statearr_29599_29639[(2)] = null);

(statearr_29599_29639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (18))){
var inst_29532 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29600_29640 = state_29562__$1;
(statearr_29600_29640[(2)] = inst_29532);

(statearr_29600_29640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (8))){
var inst_29505 = (state_29562[(12)]);
var inst_29506 = (state_29562[(16)]);
var inst_29508 = (inst_29506 < inst_29505);
var inst_29509 = inst_29508;
var state_29562__$1 = state_29562;
if(cljs.core.truth_(inst_29509)){
var statearr_29601_29641 = state_29562__$1;
(statearr_29601_29641[(1)] = (10));

} else {
var statearr_29602_29642 = state_29562__$1;
(statearr_29602_29642[(1)] = (11));

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
});})(c__19424__auto___29614,mults,ensure_mult,p))
;
return ((function (switch__19359__auto__,c__19424__auto___29614,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_29606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29606[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_29606[(1)] = (1));

return statearr_29606;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_29562){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29607){if((e29607 instanceof Object)){
var ex__19363__auto__ = e29607;
var statearr_29608_29643 = state_29562;
(statearr_29608_29643[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29644 = state_29562;
state_29562 = G__29644;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_29562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_29562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29614,mults,ensure_mult,p))
})();
var state__19426__auto__ = (function (){var statearr_29609 = f__19425__auto__.call(null);
(statearr_29609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29614);

return statearr_29609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29614,mults,ensure_mult,p))
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
var args29645 = [];
var len__17402__auto___29648 = arguments.length;
var i__17403__auto___29649 = (0);
while(true){
if((i__17403__auto___29649 < len__17402__auto___29648)){
args29645.push((arguments[i__17403__auto___29649]));

var G__29650 = (i__17403__auto___29649 + (1));
i__17403__auto___29649 = G__29650;
continue;
} else {
}
break;
}

var G__29647 = args29645.length;
switch (G__29647) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29645.length)].join('')));

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
var args29652 = [];
var len__17402__auto___29655 = arguments.length;
var i__17403__auto___29656 = (0);
while(true){
if((i__17403__auto___29656 < len__17402__auto___29655)){
args29652.push((arguments[i__17403__auto___29656]));

var G__29657 = (i__17403__auto___29656 + (1));
i__17403__auto___29656 = G__29657;
continue;
} else {
}
break;
}

var G__29654 = args29652.length;
switch (G__29654) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29652.length)].join('')));

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
var args29659 = [];
var len__17402__auto___29730 = arguments.length;
var i__17403__auto___29731 = (0);
while(true){
if((i__17403__auto___29731 < len__17402__auto___29730)){
args29659.push((arguments[i__17403__auto___29731]));

var G__29732 = (i__17403__auto___29731 + (1));
i__17403__auto___29731 = G__29732;
continue;
} else {
}
break;
}

var G__29661 = args29659.length;
switch (G__29661) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29659.length)].join('')));

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
var c__19424__auto___29734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29734,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29734,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29700){
var state_val_29701 = (state_29700[(1)]);
if((state_val_29701 === (7))){
var state_29700__$1 = state_29700;
var statearr_29702_29735 = state_29700__$1;
(statearr_29702_29735[(2)] = null);

(statearr_29702_29735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (1))){
var state_29700__$1 = state_29700;
var statearr_29703_29736 = state_29700__$1;
(statearr_29703_29736[(2)] = null);

(statearr_29703_29736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (4))){
var inst_29664 = (state_29700[(7)]);
var inst_29666 = (inst_29664 < cnt);
var state_29700__$1 = state_29700;
if(cljs.core.truth_(inst_29666)){
var statearr_29704_29737 = state_29700__$1;
(statearr_29704_29737[(1)] = (6));

} else {
var statearr_29705_29738 = state_29700__$1;
(statearr_29705_29738[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (15))){
var inst_29696 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29706_29739 = state_29700__$1;
(statearr_29706_29739[(2)] = inst_29696);

(statearr_29706_29739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (13))){
var inst_29689 = cljs.core.async.close_BANG_.call(null,out);
var state_29700__$1 = state_29700;
var statearr_29707_29740 = state_29700__$1;
(statearr_29707_29740[(2)] = inst_29689);

(statearr_29707_29740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (6))){
var state_29700__$1 = state_29700;
var statearr_29708_29741 = state_29700__$1;
(statearr_29708_29741[(2)] = null);

(statearr_29708_29741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (3))){
var inst_29698 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29700__$1,inst_29698);
} else {
if((state_val_29701 === (12))){
var inst_29686 = (state_29700[(8)]);
var inst_29686__$1 = (state_29700[(2)]);
var inst_29687 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29686__$1);
var state_29700__$1 = (function (){var statearr_29709 = state_29700;
(statearr_29709[(8)] = inst_29686__$1);

return statearr_29709;
})();
if(cljs.core.truth_(inst_29687)){
var statearr_29710_29742 = state_29700__$1;
(statearr_29710_29742[(1)] = (13));

} else {
var statearr_29711_29743 = state_29700__$1;
(statearr_29711_29743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (2))){
var inst_29663 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29664 = (0);
var state_29700__$1 = (function (){var statearr_29712 = state_29700;
(statearr_29712[(7)] = inst_29664);

(statearr_29712[(9)] = inst_29663);

return statearr_29712;
})();
var statearr_29713_29744 = state_29700__$1;
(statearr_29713_29744[(2)] = null);

(statearr_29713_29744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (11))){
var inst_29664 = (state_29700[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29700,(10),Object,null,(9));
var inst_29673 = chs__$1.call(null,inst_29664);
var inst_29674 = done.call(null,inst_29664);
var inst_29675 = cljs.core.async.take_BANG_.call(null,inst_29673,inst_29674);
var state_29700__$1 = state_29700;
var statearr_29714_29745 = state_29700__$1;
(statearr_29714_29745[(2)] = inst_29675);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29700__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (9))){
var inst_29664 = (state_29700[(7)]);
var inst_29677 = (state_29700[(2)]);
var inst_29678 = (inst_29664 + (1));
var inst_29664__$1 = inst_29678;
var state_29700__$1 = (function (){var statearr_29715 = state_29700;
(statearr_29715[(10)] = inst_29677);

(statearr_29715[(7)] = inst_29664__$1);

return statearr_29715;
})();
var statearr_29716_29746 = state_29700__$1;
(statearr_29716_29746[(2)] = null);

(statearr_29716_29746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (5))){
var inst_29684 = (state_29700[(2)]);
var state_29700__$1 = (function (){var statearr_29717 = state_29700;
(statearr_29717[(11)] = inst_29684);

return statearr_29717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29700__$1,(12),dchan);
} else {
if((state_val_29701 === (14))){
var inst_29686 = (state_29700[(8)]);
var inst_29691 = cljs.core.apply.call(null,f,inst_29686);
var state_29700__$1 = state_29700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29700__$1,(16),out,inst_29691);
} else {
if((state_val_29701 === (16))){
var inst_29693 = (state_29700[(2)]);
var state_29700__$1 = (function (){var statearr_29718 = state_29700;
(statearr_29718[(12)] = inst_29693);

return statearr_29718;
})();
var statearr_29719_29747 = state_29700__$1;
(statearr_29719_29747[(2)] = null);

(statearr_29719_29747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (10))){
var inst_29668 = (state_29700[(2)]);
var inst_29669 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29700__$1 = (function (){var statearr_29720 = state_29700;
(statearr_29720[(13)] = inst_29668);

return statearr_29720;
})();
var statearr_29721_29748 = state_29700__$1;
(statearr_29721_29748[(2)] = inst_29669);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29700__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (8))){
var inst_29682 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29722_29749 = state_29700__$1;
(statearr_29722_29749[(2)] = inst_29682);

(statearr_29722_29749[(1)] = (5));


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
});})(c__19424__auto___29734,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19359__auto__,c__19424__auto___29734,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_29726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29726[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_29726[(1)] = (1));

return statearr_29726;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_29700){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29727){if((e29727 instanceof Object)){
var ex__19363__auto__ = e29727;
var statearr_29728_29750 = state_29700;
(statearr_29728_29750[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29751 = state_29700;
state_29700 = G__29751;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_29700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_29700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29734,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19426__auto__ = (function (){var statearr_29729 = f__19425__auto__.call(null);
(statearr_29729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29734);

return statearr_29729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29734,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29753 = [];
var len__17402__auto___29809 = arguments.length;
var i__17403__auto___29810 = (0);
while(true){
if((i__17403__auto___29810 < len__17402__auto___29809)){
args29753.push((arguments[i__17403__auto___29810]));

var G__29811 = (i__17403__auto___29810 + (1));
i__17403__auto___29810 = G__29811;
continue;
} else {
}
break;
}

var G__29755 = args29753.length;
switch (G__29755) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29753.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___29813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29813,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29813,out){
return (function (state_29785){
var state_val_29786 = (state_29785[(1)]);
if((state_val_29786 === (7))){
var inst_29764 = (state_29785[(7)]);
var inst_29765 = (state_29785[(8)]);
var inst_29764__$1 = (state_29785[(2)]);
var inst_29765__$1 = cljs.core.nth.call(null,inst_29764__$1,(0),null);
var inst_29766 = cljs.core.nth.call(null,inst_29764__$1,(1),null);
var inst_29767 = (inst_29765__$1 == null);
var state_29785__$1 = (function (){var statearr_29787 = state_29785;
(statearr_29787[(7)] = inst_29764__$1);

(statearr_29787[(8)] = inst_29765__$1);

(statearr_29787[(9)] = inst_29766);

return statearr_29787;
})();
if(cljs.core.truth_(inst_29767)){
var statearr_29788_29814 = state_29785__$1;
(statearr_29788_29814[(1)] = (8));

} else {
var statearr_29789_29815 = state_29785__$1;
(statearr_29789_29815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (1))){
var inst_29756 = cljs.core.vec.call(null,chs);
var inst_29757 = inst_29756;
var state_29785__$1 = (function (){var statearr_29790 = state_29785;
(statearr_29790[(10)] = inst_29757);

return statearr_29790;
})();
var statearr_29791_29816 = state_29785__$1;
(statearr_29791_29816[(2)] = null);

(statearr_29791_29816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (4))){
var inst_29757 = (state_29785[(10)]);
var state_29785__$1 = state_29785;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29785__$1,(7),inst_29757);
} else {
if((state_val_29786 === (6))){
var inst_29781 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
var statearr_29792_29817 = state_29785__$1;
(statearr_29792_29817[(2)] = inst_29781);

(statearr_29792_29817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (3))){
var inst_29783 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29785__$1,inst_29783);
} else {
if((state_val_29786 === (2))){
var inst_29757 = (state_29785[(10)]);
var inst_29759 = cljs.core.count.call(null,inst_29757);
var inst_29760 = (inst_29759 > (0));
var state_29785__$1 = state_29785;
if(cljs.core.truth_(inst_29760)){
var statearr_29794_29818 = state_29785__$1;
(statearr_29794_29818[(1)] = (4));

} else {
var statearr_29795_29819 = state_29785__$1;
(statearr_29795_29819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (11))){
var inst_29757 = (state_29785[(10)]);
var inst_29774 = (state_29785[(2)]);
var tmp29793 = inst_29757;
var inst_29757__$1 = tmp29793;
var state_29785__$1 = (function (){var statearr_29796 = state_29785;
(statearr_29796[(10)] = inst_29757__$1);

(statearr_29796[(11)] = inst_29774);

return statearr_29796;
})();
var statearr_29797_29820 = state_29785__$1;
(statearr_29797_29820[(2)] = null);

(statearr_29797_29820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (9))){
var inst_29765 = (state_29785[(8)]);
var state_29785__$1 = state_29785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29785__$1,(11),out,inst_29765);
} else {
if((state_val_29786 === (5))){
var inst_29779 = cljs.core.async.close_BANG_.call(null,out);
var state_29785__$1 = state_29785;
var statearr_29798_29821 = state_29785__$1;
(statearr_29798_29821[(2)] = inst_29779);

(statearr_29798_29821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (10))){
var inst_29777 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
var statearr_29799_29822 = state_29785__$1;
(statearr_29799_29822[(2)] = inst_29777);

(statearr_29799_29822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (8))){
var inst_29764 = (state_29785[(7)]);
var inst_29757 = (state_29785[(10)]);
var inst_29765 = (state_29785[(8)]);
var inst_29766 = (state_29785[(9)]);
var inst_29769 = (function (){var cs = inst_29757;
var vec__29762 = inst_29764;
var v = inst_29765;
var c = inst_29766;
return ((function (cs,vec__29762,v,c,inst_29764,inst_29757,inst_29765,inst_29766,state_val_29786,c__19424__auto___29813,out){
return (function (p1__29752_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29752_SHARP_);
});
;})(cs,vec__29762,v,c,inst_29764,inst_29757,inst_29765,inst_29766,state_val_29786,c__19424__auto___29813,out))
})();
var inst_29770 = cljs.core.filterv.call(null,inst_29769,inst_29757);
var inst_29757__$1 = inst_29770;
var state_29785__$1 = (function (){var statearr_29800 = state_29785;
(statearr_29800[(10)] = inst_29757__$1);

return statearr_29800;
})();
var statearr_29801_29823 = state_29785__$1;
(statearr_29801_29823[(2)] = null);

(statearr_29801_29823[(1)] = (2));


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
});})(c__19424__auto___29813,out))
;
return ((function (switch__19359__auto__,c__19424__auto___29813,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_29805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29805[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_29805[(1)] = (1));

return statearr_29805;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_29785){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29806){if((e29806 instanceof Object)){
var ex__19363__auto__ = e29806;
var statearr_29807_29824 = state_29785;
(statearr_29807_29824[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29825 = state_29785;
state_29785 = G__29825;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_29785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_29785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29813,out))
})();
var state__19426__auto__ = (function (){var statearr_29808 = f__19425__auto__.call(null);
(statearr_29808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29813);

return statearr_29808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29813,out))
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
var args29826 = [];
var len__17402__auto___29875 = arguments.length;
var i__17403__auto___29876 = (0);
while(true){
if((i__17403__auto___29876 < len__17402__auto___29875)){
args29826.push((arguments[i__17403__auto___29876]));

var G__29877 = (i__17403__auto___29876 + (1));
i__17403__auto___29876 = G__29877;
continue;
} else {
}
break;
}

var G__29828 = args29826.length;
switch (G__29828) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29826.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___29879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29879,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29879,out){
return (function (state_29852){
var state_val_29853 = (state_29852[(1)]);
if((state_val_29853 === (7))){
var inst_29834 = (state_29852[(7)]);
var inst_29834__$1 = (state_29852[(2)]);
var inst_29835 = (inst_29834__$1 == null);
var inst_29836 = cljs.core.not.call(null,inst_29835);
var state_29852__$1 = (function (){var statearr_29854 = state_29852;
(statearr_29854[(7)] = inst_29834__$1);

return statearr_29854;
})();
if(inst_29836){
var statearr_29855_29880 = state_29852__$1;
(statearr_29855_29880[(1)] = (8));

} else {
var statearr_29856_29881 = state_29852__$1;
(statearr_29856_29881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (1))){
var inst_29829 = (0);
var state_29852__$1 = (function (){var statearr_29857 = state_29852;
(statearr_29857[(8)] = inst_29829);

return statearr_29857;
})();
var statearr_29858_29882 = state_29852__$1;
(statearr_29858_29882[(2)] = null);

(statearr_29858_29882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (4))){
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29852__$1,(7),ch);
} else {
if((state_val_29853 === (6))){
var inst_29847 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29859_29883 = state_29852__$1;
(statearr_29859_29883[(2)] = inst_29847);

(statearr_29859_29883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (3))){
var inst_29849 = (state_29852[(2)]);
var inst_29850 = cljs.core.async.close_BANG_.call(null,out);
var state_29852__$1 = (function (){var statearr_29860 = state_29852;
(statearr_29860[(9)] = inst_29849);

return statearr_29860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29852__$1,inst_29850);
} else {
if((state_val_29853 === (2))){
var inst_29829 = (state_29852[(8)]);
var inst_29831 = (inst_29829 < n);
var state_29852__$1 = state_29852;
if(cljs.core.truth_(inst_29831)){
var statearr_29861_29884 = state_29852__$1;
(statearr_29861_29884[(1)] = (4));

} else {
var statearr_29862_29885 = state_29852__$1;
(statearr_29862_29885[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (11))){
var inst_29829 = (state_29852[(8)]);
var inst_29839 = (state_29852[(2)]);
var inst_29840 = (inst_29829 + (1));
var inst_29829__$1 = inst_29840;
var state_29852__$1 = (function (){var statearr_29863 = state_29852;
(statearr_29863[(10)] = inst_29839);

(statearr_29863[(8)] = inst_29829__$1);

return statearr_29863;
})();
var statearr_29864_29886 = state_29852__$1;
(statearr_29864_29886[(2)] = null);

(statearr_29864_29886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (9))){
var state_29852__$1 = state_29852;
var statearr_29865_29887 = state_29852__$1;
(statearr_29865_29887[(2)] = null);

(statearr_29865_29887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (5))){
var state_29852__$1 = state_29852;
var statearr_29866_29888 = state_29852__$1;
(statearr_29866_29888[(2)] = null);

(statearr_29866_29888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (10))){
var inst_29844 = (state_29852[(2)]);
var state_29852__$1 = state_29852;
var statearr_29867_29889 = state_29852__$1;
(statearr_29867_29889[(2)] = inst_29844);

(statearr_29867_29889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29853 === (8))){
var inst_29834 = (state_29852[(7)]);
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29852__$1,(11),out,inst_29834);
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
});})(c__19424__auto___29879,out))
;
return ((function (switch__19359__auto__,c__19424__auto___29879,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_29871 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29871[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_29871[(1)] = (1));

return statearr_29871;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_29852){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29872){if((e29872 instanceof Object)){
var ex__19363__auto__ = e29872;
var statearr_29873_29890 = state_29852;
(statearr_29873_29890[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29891 = state_29852;
state_29852 = G__29891;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_29852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_29852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29879,out))
})();
var state__19426__auto__ = (function (){var statearr_29874 = f__19425__auto__.call(null);
(statearr_29874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29879);

return statearr_29874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29879,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29899 = (function (map_LT_,f,ch,meta29900){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29900 = meta29900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29901,meta29900__$1){
var self__ = this;
var _29901__$1 = this;
return (new cljs.core.async.t_cljs$core$async29899(self__.map_LT_,self__.f,self__.ch,meta29900__$1));
});

cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29901){
var self__ = this;
var _29901__$1 = this;
return self__.meta29900;
});

cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29902 = (function (map_LT_,f,ch,meta29900,_,fn1,meta29903){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29900 = meta29900;
this._ = _;
this.fn1 = fn1;
this.meta29903 = meta29903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29904,meta29903__$1){
var self__ = this;
var _29904__$1 = this;
return (new cljs.core.async.t_cljs$core$async29902(self__.map_LT_,self__.f,self__.ch,self__.meta29900,self__._,self__.fn1,meta29903__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29904){
var self__ = this;
var _29904__$1 = this;
return self__.meta29903;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29892_SHARP_){
return f1.call(null,(((p1__29892_SHARP_ == null))?null:self__.f.call(null,p1__29892_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29902.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29900","meta29900",881546046,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29899","cljs.core.async/t_cljs$core$async29899",136024287,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29903","meta29903",1849467828,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29902.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29902";

cljs.core.async.t_cljs$core$async29902.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29902");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29902 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29902(map_LT___$1,f__$1,ch__$1,meta29900__$1,___$2,fn1__$1,meta29903){
return (new cljs.core.async.t_cljs$core$async29902(map_LT___$1,f__$1,ch__$1,meta29900__$1,___$2,fn1__$1,meta29903));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29902(self__.map_LT_,self__.f,self__.ch,self__.meta29900,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16332__auto__ = ret;
if(cljs.core.truth_(and__16332__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16332__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29900","meta29900",881546046,null)], null);
});

cljs.core.async.t_cljs$core$async29899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29899";

cljs.core.async.t_cljs$core$async29899.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29899");
});

cljs.core.async.__GT_t_cljs$core$async29899 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29899(map_LT___$1,f__$1,ch__$1,meta29900){
return (new cljs.core.async.t_cljs$core$async29899(map_LT___$1,f__$1,ch__$1,meta29900));
});

}

return (new cljs.core.async.t_cljs$core$async29899(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29908 = (function (map_GT_,f,ch,meta29909){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29909 = meta29909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29910,meta29909__$1){
var self__ = this;
var _29910__$1 = this;
return (new cljs.core.async.t_cljs$core$async29908(self__.map_GT_,self__.f,self__.ch,meta29909__$1));
});

cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29910){
var self__ = this;
var _29910__$1 = this;
return self__.meta29909;
});

cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29909","meta29909",-330148425,null)], null);
});

cljs.core.async.t_cljs$core$async29908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29908";

cljs.core.async.t_cljs$core$async29908.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29908");
});

cljs.core.async.__GT_t_cljs$core$async29908 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29908(map_GT___$1,f__$1,ch__$1,meta29909){
return (new cljs.core.async.t_cljs$core$async29908(map_GT___$1,f__$1,ch__$1,meta29909));
});

}

return (new cljs.core.async.t_cljs$core$async29908(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29914 = (function (filter_GT_,p,ch,meta29915){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29915 = meta29915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29916,meta29915__$1){
var self__ = this;
var _29916__$1 = this;
return (new cljs.core.async.t_cljs$core$async29914(self__.filter_GT_,self__.p,self__.ch,meta29915__$1));
});

cljs.core.async.t_cljs$core$async29914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29916){
var self__ = this;
var _29916__$1 = this;
return self__.meta29915;
});

cljs.core.async.t_cljs$core$async29914.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29914.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29914.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29914.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29914.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29914.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29914.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29915","meta29915",413852618,null)], null);
});

cljs.core.async.t_cljs$core$async29914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29914";

cljs.core.async.t_cljs$core$async29914.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29914");
});

cljs.core.async.__GT_t_cljs$core$async29914 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29914(filter_GT___$1,p__$1,ch__$1,meta29915){
return (new cljs.core.async.t_cljs$core$async29914(filter_GT___$1,p__$1,ch__$1,meta29915));
});

}

return (new cljs.core.async.t_cljs$core$async29914(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29917 = [];
var len__17402__auto___29961 = arguments.length;
var i__17403__auto___29962 = (0);
while(true){
if((i__17403__auto___29962 < len__17402__auto___29961)){
args29917.push((arguments[i__17403__auto___29962]));

var G__29963 = (i__17403__auto___29962 + (1));
i__17403__auto___29962 = G__29963;
continue;
} else {
}
break;
}

var G__29919 = args29917.length;
switch (G__29919) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29917.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___29965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29965,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29965,out){
return (function (state_29940){
var state_val_29941 = (state_29940[(1)]);
if((state_val_29941 === (7))){
var inst_29936 = (state_29940[(2)]);
var state_29940__$1 = state_29940;
var statearr_29942_29966 = state_29940__$1;
(statearr_29942_29966[(2)] = inst_29936);

(statearr_29942_29966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (1))){
var state_29940__$1 = state_29940;
var statearr_29943_29967 = state_29940__$1;
(statearr_29943_29967[(2)] = null);

(statearr_29943_29967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (4))){
var inst_29922 = (state_29940[(7)]);
var inst_29922__$1 = (state_29940[(2)]);
var inst_29923 = (inst_29922__$1 == null);
var state_29940__$1 = (function (){var statearr_29944 = state_29940;
(statearr_29944[(7)] = inst_29922__$1);

return statearr_29944;
})();
if(cljs.core.truth_(inst_29923)){
var statearr_29945_29968 = state_29940__$1;
(statearr_29945_29968[(1)] = (5));

} else {
var statearr_29946_29969 = state_29940__$1;
(statearr_29946_29969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (6))){
var inst_29922 = (state_29940[(7)]);
var inst_29927 = p.call(null,inst_29922);
var state_29940__$1 = state_29940;
if(cljs.core.truth_(inst_29927)){
var statearr_29947_29970 = state_29940__$1;
(statearr_29947_29970[(1)] = (8));

} else {
var statearr_29948_29971 = state_29940__$1;
(statearr_29948_29971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (3))){
var inst_29938 = (state_29940[(2)]);
var state_29940__$1 = state_29940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29940__$1,inst_29938);
} else {
if((state_val_29941 === (2))){
var state_29940__$1 = state_29940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29940__$1,(4),ch);
} else {
if((state_val_29941 === (11))){
var inst_29930 = (state_29940[(2)]);
var state_29940__$1 = state_29940;
var statearr_29949_29972 = state_29940__$1;
(statearr_29949_29972[(2)] = inst_29930);

(statearr_29949_29972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (9))){
var state_29940__$1 = state_29940;
var statearr_29950_29973 = state_29940__$1;
(statearr_29950_29973[(2)] = null);

(statearr_29950_29973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (5))){
var inst_29925 = cljs.core.async.close_BANG_.call(null,out);
var state_29940__$1 = state_29940;
var statearr_29951_29974 = state_29940__$1;
(statearr_29951_29974[(2)] = inst_29925);

(statearr_29951_29974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (10))){
var inst_29933 = (state_29940[(2)]);
var state_29940__$1 = (function (){var statearr_29952 = state_29940;
(statearr_29952[(8)] = inst_29933);

return statearr_29952;
})();
var statearr_29953_29975 = state_29940__$1;
(statearr_29953_29975[(2)] = null);

(statearr_29953_29975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29941 === (8))){
var inst_29922 = (state_29940[(7)]);
var state_29940__$1 = state_29940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29940__$1,(11),out,inst_29922);
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
});})(c__19424__auto___29965,out))
;
return ((function (switch__19359__auto__,c__19424__auto___29965,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_29957 = [null,null,null,null,null,null,null,null,null];
(statearr_29957[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_29957[(1)] = (1));

return statearr_29957;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_29940){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29958){if((e29958 instanceof Object)){
var ex__19363__auto__ = e29958;
var statearr_29959_29976 = state_29940;
(statearr_29959_29976[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29977 = state_29940;
state_29940 = G__29977;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_29940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_29940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29965,out))
})();
var state__19426__auto__ = (function (){var statearr_29960 = f__19425__auto__.call(null);
(statearr_29960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29965);

return statearr_29960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29965,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29978 = [];
var len__17402__auto___29981 = arguments.length;
var i__17403__auto___29982 = (0);
while(true){
if((i__17403__auto___29982 < len__17402__auto___29981)){
args29978.push((arguments[i__17403__auto___29982]));

var G__29983 = (i__17403__auto___29982 + (1));
i__17403__auto___29982 = G__29983;
continue;
} else {
}
break;
}

var G__29980 = args29978.length;
switch (G__29980) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29978.length)].join('')));

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
var c__19424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto__){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto__){
return (function (state_30150){
var state_val_30151 = (state_30150[(1)]);
if((state_val_30151 === (7))){
var inst_30146 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30152_30193 = state_30150__$1;
(statearr_30152_30193[(2)] = inst_30146);

(statearr_30152_30193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (20))){
var inst_30116 = (state_30150[(7)]);
var inst_30127 = (state_30150[(2)]);
var inst_30128 = cljs.core.next.call(null,inst_30116);
var inst_30102 = inst_30128;
var inst_30103 = null;
var inst_30104 = (0);
var inst_30105 = (0);
var state_30150__$1 = (function (){var statearr_30153 = state_30150;
(statearr_30153[(8)] = inst_30105);

(statearr_30153[(9)] = inst_30103);

(statearr_30153[(10)] = inst_30102);

(statearr_30153[(11)] = inst_30104);

(statearr_30153[(12)] = inst_30127);

return statearr_30153;
})();
var statearr_30154_30194 = state_30150__$1;
(statearr_30154_30194[(2)] = null);

(statearr_30154_30194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (1))){
var state_30150__$1 = state_30150;
var statearr_30155_30195 = state_30150__$1;
(statearr_30155_30195[(2)] = null);

(statearr_30155_30195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (4))){
var inst_30091 = (state_30150[(13)]);
var inst_30091__$1 = (state_30150[(2)]);
var inst_30092 = (inst_30091__$1 == null);
var state_30150__$1 = (function (){var statearr_30156 = state_30150;
(statearr_30156[(13)] = inst_30091__$1);

return statearr_30156;
})();
if(cljs.core.truth_(inst_30092)){
var statearr_30157_30196 = state_30150__$1;
(statearr_30157_30196[(1)] = (5));

} else {
var statearr_30158_30197 = state_30150__$1;
(statearr_30158_30197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (15))){
var state_30150__$1 = state_30150;
var statearr_30162_30198 = state_30150__$1;
(statearr_30162_30198[(2)] = null);

(statearr_30162_30198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (21))){
var state_30150__$1 = state_30150;
var statearr_30163_30199 = state_30150__$1;
(statearr_30163_30199[(2)] = null);

(statearr_30163_30199[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (13))){
var inst_30105 = (state_30150[(8)]);
var inst_30103 = (state_30150[(9)]);
var inst_30102 = (state_30150[(10)]);
var inst_30104 = (state_30150[(11)]);
var inst_30112 = (state_30150[(2)]);
var inst_30113 = (inst_30105 + (1));
var tmp30159 = inst_30103;
var tmp30160 = inst_30102;
var tmp30161 = inst_30104;
var inst_30102__$1 = tmp30160;
var inst_30103__$1 = tmp30159;
var inst_30104__$1 = tmp30161;
var inst_30105__$1 = inst_30113;
var state_30150__$1 = (function (){var statearr_30164 = state_30150;
(statearr_30164[(8)] = inst_30105__$1);

(statearr_30164[(9)] = inst_30103__$1);

(statearr_30164[(10)] = inst_30102__$1);

(statearr_30164[(11)] = inst_30104__$1);

(statearr_30164[(14)] = inst_30112);

return statearr_30164;
})();
var statearr_30165_30200 = state_30150__$1;
(statearr_30165_30200[(2)] = null);

(statearr_30165_30200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (22))){
var state_30150__$1 = state_30150;
var statearr_30166_30201 = state_30150__$1;
(statearr_30166_30201[(2)] = null);

(statearr_30166_30201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (6))){
var inst_30091 = (state_30150[(13)]);
var inst_30100 = f.call(null,inst_30091);
var inst_30101 = cljs.core.seq.call(null,inst_30100);
var inst_30102 = inst_30101;
var inst_30103 = null;
var inst_30104 = (0);
var inst_30105 = (0);
var state_30150__$1 = (function (){var statearr_30167 = state_30150;
(statearr_30167[(8)] = inst_30105);

(statearr_30167[(9)] = inst_30103);

(statearr_30167[(10)] = inst_30102);

(statearr_30167[(11)] = inst_30104);

return statearr_30167;
})();
var statearr_30168_30202 = state_30150__$1;
(statearr_30168_30202[(2)] = null);

(statearr_30168_30202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (17))){
var inst_30116 = (state_30150[(7)]);
var inst_30120 = cljs.core.chunk_first.call(null,inst_30116);
var inst_30121 = cljs.core.chunk_rest.call(null,inst_30116);
var inst_30122 = cljs.core.count.call(null,inst_30120);
var inst_30102 = inst_30121;
var inst_30103 = inst_30120;
var inst_30104 = inst_30122;
var inst_30105 = (0);
var state_30150__$1 = (function (){var statearr_30169 = state_30150;
(statearr_30169[(8)] = inst_30105);

(statearr_30169[(9)] = inst_30103);

(statearr_30169[(10)] = inst_30102);

(statearr_30169[(11)] = inst_30104);

return statearr_30169;
})();
var statearr_30170_30203 = state_30150__$1;
(statearr_30170_30203[(2)] = null);

(statearr_30170_30203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (3))){
var inst_30148 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30150__$1,inst_30148);
} else {
if((state_val_30151 === (12))){
var inst_30136 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30171_30204 = state_30150__$1;
(statearr_30171_30204[(2)] = inst_30136);

(statearr_30171_30204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (2))){
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30150__$1,(4),in$);
} else {
if((state_val_30151 === (23))){
var inst_30144 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30172_30205 = state_30150__$1;
(statearr_30172_30205[(2)] = inst_30144);

(statearr_30172_30205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (19))){
var inst_30131 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30173_30206 = state_30150__$1;
(statearr_30173_30206[(2)] = inst_30131);

(statearr_30173_30206[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (11))){
var inst_30102 = (state_30150[(10)]);
var inst_30116 = (state_30150[(7)]);
var inst_30116__$1 = cljs.core.seq.call(null,inst_30102);
var state_30150__$1 = (function (){var statearr_30174 = state_30150;
(statearr_30174[(7)] = inst_30116__$1);

return statearr_30174;
})();
if(inst_30116__$1){
var statearr_30175_30207 = state_30150__$1;
(statearr_30175_30207[(1)] = (14));

} else {
var statearr_30176_30208 = state_30150__$1;
(statearr_30176_30208[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (9))){
var inst_30138 = (state_30150[(2)]);
var inst_30139 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30150__$1 = (function (){var statearr_30177 = state_30150;
(statearr_30177[(15)] = inst_30138);

return statearr_30177;
})();
if(cljs.core.truth_(inst_30139)){
var statearr_30178_30209 = state_30150__$1;
(statearr_30178_30209[(1)] = (21));

} else {
var statearr_30179_30210 = state_30150__$1;
(statearr_30179_30210[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (5))){
var inst_30094 = cljs.core.async.close_BANG_.call(null,out);
var state_30150__$1 = state_30150;
var statearr_30180_30211 = state_30150__$1;
(statearr_30180_30211[(2)] = inst_30094);

(statearr_30180_30211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (14))){
var inst_30116 = (state_30150[(7)]);
var inst_30118 = cljs.core.chunked_seq_QMARK_.call(null,inst_30116);
var state_30150__$1 = state_30150;
if(inst_30118){
var statearr_30181_30212 = state_30150__$1;
(statearr_30181_30212[(1)] = (17));

} else {
var statearr_30182_30213 = state_30150__$1;
(statearr_30182_30213[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (16))){
var inst_30134 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30183_30214 = state_30150__$1;
(statearr_30183_30214[(2)] = inst_30134);

(statearr_30183_30214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (10))){
var inst_30105 = (state_30150[(8)]);
var inst_30103 = (state_30150[(9)]);
var inst_30110 = cljs.core._nth.call(null,inst_30103,inst_30105);
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30150__$1,(13),out,inst_30110);
} else {
if((state_val_30151 === (18))){
var inst_30116 = (state_30150[(7)]);
var inst_30125 = cljs.core.first.call(null,inst_30116);
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30150__$1,(20),out,inst_30125);
} else {
if((state_val_30151 === (8))){
var inst_30105 = (state_30150[(8)]);
var inst_30104 = (state_30150[(11)]);
var inst_30107 = (inst_30105 < inst_30104);
var inst_30108 = inst_30107;
var state_30150__$1 = state_30150;
if(cljs.core.truth_(inst_30108)){
var statearr_30184_30215 = state_30150__$1;
(statearr_30184_30215[(1)] = (10));

} else {
var statearr_30185_30216 = state_30150__$1;
(statearr_30185_30216[(1)] = (11));

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
});})(c__19424__auto__))
;
return ((function (switch__19359__auto__,c__19424__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_30189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30189[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__);

(statearr_30189[(1)] = (1));

return statearr_30189;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____1 = (function (state_30150){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_30150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e30190){if((e30190 instanceof Object)){
var ex__19363__auto__ = e30190;
var statearr_30191_30217 = state_30150;
(statearr_30191_30217[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30218 = state_30150;
state_30150 = G__30218;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__ = function(state_30150){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____1.call(this,state_30150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__))
})();
var state__19426__auto__ = (function (){var statearr_30192 = f__19425__auto__.call(null);
(statearr_30192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_30192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto__))
);

return c__19424__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30219 = [];
var len__17402__auto___30222 = arguments.length;
var i__17403__auto___30223 = (0);
while(true){
if((i__17403__auto___30223 < len__17402__auto___30222)){
args30219.push((arguments[i__17403__auto___30223]));

var G__30224 = (i__17403__auto___30223 + (1));
i__17403__auto___30223 = G__30224;
continue;
} else {
}
break;
}

var G__30221 = args30219.length;
switch (G__30221) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30219.length)].join('')));

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
var args30226 = [];
var len__17402__auto___30229 = arguments.length;
var i__17403__auto___30230 = (0);
while(true){
if((i__17403__auto___30230 < len__17402__auto___30229)){
args30226.push((arguments[i__17403__auto___30230]));

var G__30231 = (i__17403__auto___30230 + (1));
i__17403__auto___30230 = G__30231;
continue;
} else {
}
break;
}

var G__30228 = args30226.length;
switch (G__30228) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30226.length)].join('')));

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
var args30233 = [];
var len__17402__auto___30284 = arguments.length;
var i__17403__auto___30285 = (0);
while(true){
if((i__17403__auto___30285 < len__17402__auto___30284)){
args30233.push((arguments[i__17403__auto___30285]));

var G__30286 = (i__17403__auto___30285 + (1));
i__17403__auto___30285 = G__30286;
continue;
} else {
}
break;
}

var G__30235 = args30233.length;
switch (G__30235) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30233.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___30288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___30288,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___30288,out){
return (function (state_30259){
var state_val_30260 = (state_30259[(1)]);
if((state_val_30260 === (7))){
var inst_30254 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30261_30289 = state_30259__$1;
(statearr_30261_30289[(2)] = inst_30254);

(statearr_30261_30289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (1))){
var inst_30236 = null;
var state_30259__$1 = (function (){var statearr_30262 = state_30259;
(statearr_30262[(7)] = inst_30236);

return statearr_30262;
})();
var statearr_30263_30290 = state_30259__$1;
(statearr_30263_30290[(2)] = null);

(statearr_30263_30290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (4))){
var inst_30239 = (state_30259[(8)]);
var inst_30239__$1 = (state_30259[(2)]);
var inst_30240 = (inst_30239__$1 == null);
var inst_30241 = cljs.core.not.call(null,inst_30240);
var state_30259__$1 = (function (){var statearr_30264 = state_30259;
(statearr_30264[(8)] = inst_30239__$1);

return statearr_30264;
})();
if(inst_30241){
var statearr_30265_30291 = state_30259__$1;
(statearr_30265_30291[(1)] = (5));

} else {
var statearr_30266_30292 = state_30259__$1;
(statearr_30266_30292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (6))){
var state_30259__$1 = state_30259;
var statearr_30267_30293 = state_30259__$1;
(statearr_30267_30293[(2)] = null);

(statearr_30267_30293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (3))){
var inst_30256 = (state_30259[(2)]);
var inst_30257 = cljs.core.async.close_BANG_.call(null,out);
var state_30259__$1 = (function (){var statearr_30268 = state_30259;
(statearr_30268[(9)] = inst_30256);

return statearr_30268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30259__$1,inst_30257);
} else {
if((state_val_30260 === (2))){
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30259__$1,(4),ch);
} else {
if((state_val_30260 === (11))){
var inst_30239 = (state_30259[(8)]);
var inst_30248 = (state_30259[(2)]);
var inst_30236 = inst_30239;
var state_30259__$1 = (function (){var statearr_30269 = state_30259;
(statearr_30269[(7)] = inst_30236);

(statearr_30269[(10)] = inst_30248);

return statearr_30269;
})();
var statearr_30270_30294 = state_30259__$1;
(statearr_30270_30294[(2)] = null);

(statearr_30270_30294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (9))){
var inst_30239 = (state_30259[(8)]);
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30259__$1,(11),out,inst_30239);
} else {
if((state_val_30260 === (5))){
var inst_30236 = (state_30259[(7)]);
var inst_30239 = (state_30259[(8)]);
var inst_30243 = cljs.core._EQ_.call(null,inst_30239,inst_30236);
var state_30259__$1 = state_30259;
if(inst_30243){
var statearr_30272_30295 = state_30259__$1;
(statearr_30272_30295[(1)] = (8));

} else {
var statearr_30273_30296 = state_30259__$1;
(statearr_30273_30296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (10))){
var inst_30251 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30274_30297 = state_30259__$1;
(statearr_30274_30297[(2)] = inst_30251);

(statearr_30274_30297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (8))){
var inst_30236 = (state_30259[(7)]);
var tmp30271 = inst_30236;
var inst_30236__$1 = tmp30271;
var state_30259__$1 = (function (){var statearr_30275 = state_30259;
(statearr_30275[(7)] = inst_30236__$1);

return statearr_30275;
})();
var statearr_30276_30298 = state_30259__$1;
(statearr_30276_30298[(2)] = null);

(statearr_30276_30298[(1)] = (2));


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
});})(c__19424__auto___30288,out))
;
return ((function (switch__19359__auto__,c__19424__auto___30288,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_30280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30280[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_30280[(1)] = (1));

return statearr_30280;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_30259){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_30259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e30281){if((e30281 instanceof Object)){
var ex__19363__auto__ = e30281;
var statearr_30282_30299 = state_30259;
(statearr_30282_30299[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30300 = state_30259;
state_30259 = G__30300;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_30259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_30259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___30288,out))
})();
var state__19426__auto__ = (function (){var statearr_30283 = f__19425__auto__.call(null);
(statearr_30283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___30288);

return statearr_30283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___30288,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30301 = [];
var len__17402__auto___30371 = arguments.length;
var i__17403__auto___30372 = (0);
while(true){
if((i__17403__auto___30372 < len__17402__auto___30371)){
args30301.push((arguments[i__17403__auto___30372]));

var G__30373 = (i__17403__auto___30372 + (1));
i__17403__auto___30372 = G__30373;
continue;
} else {
}
break;
}

var G__30303 = args30301.length;
switch (G__30303) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30301.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___30375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___30375,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___30375,out){
return (function (state_30341){
var state_val_30342 = (state_30341[(1)]);
if((state_val_30342 === (7))){
var inst_30337 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
var statearr_30343_30376 = state_30341__$1;
(statearr_30343_30376[(2)] = inst_30337);

(statearr_30343_30376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (1))){
var inst_30304 = (new Array(n));
var inst_30305 = inst_30304;
var inst_30306 = (0);
var state_30341__$1 = (function (){var statearr_30344 = state_30341;
(statearr_30344[(7)] = inst_30306);

(statearr_30344[(8)] = inst_30305);

return statearr_30344;
})();
var statearr_30345_30377 = state_30341__$1;
(statearr_30345_30377[(2)] = null);

(statearr_30345_30377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (4))){
var inst_30309 = (state_30341[(9)]);
var inst_30309__$1 = (state_30341[(2)]);
var inst_30310 = (inst_30309__$1 == null);
var inst_30311 = cljs.core.not.call(null,inst_30310);
var state_30341__$1 = (function (){var statearr_30346 = state_30341;
(statearr_30346[(9)] = inst_30309__$1);

return statearr_30346;
})();
if(inst_30311){
var statearr_30347_30378 = state_30341__$1;
(statearr_30347_30378[(1)] = (5));

} else {
var statearr_30348_30379 = state_30341__$1;
(statearr_30348_30379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (15))){
var inst_30331 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
var statearr_30349_30380 = state_30341__$1;
(statearr_30349_30380[(2)] = inst_30331);

(statearr_30349_30380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (13))){
var state_30341__$1 = state_30341;
var statearr_30350_30381 = state_30341__$1;
(statearr_30350_30381[(2)] = null);

(statearr_30350_30381[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (6))){
var inst_30306 = (state_30341[(7)]);
var inst_30327 = (inst_30306 > (0));
var state_30341__$1 = state_30341;
if(cljs.core.truth_(inst_30327)){
var statearr_30351_30382 = state_30341__$1;
(statearr_30351_30382[(1)] = (12));

} else {
var statearr_30352_30383 = state_30341__$1;
(statearr_30352_30383[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (3))){
var inst_30339 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30341__$1,inst_30339);
} else {
if((state_val_30342 === (12))){
var inst_30305 = (state_30341[(8)]);
var inst_30329 = cljs.core.vec.call(null,inst_30305);
var state_30341__$1 = state_30341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30341__$1,(15),out,inst_30329);
} else {
if((state_val_30342 === (2))){
var state_30341__$1 = state_30341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30341__$1,(4),ch);
} else {
if((state_val_30342 === (11))){
var inst_30321 = (state_30341[(2)]);
var inst_30322 = (new Array(n));
var inst_30305 = inst_30322;
var inst_30306 = (0);
var state_30341__$1 = (function (){var statearr_30353 = state_30341;
(statearr_30353[(7)] = inst_30306);

(statearr_30353[(10)] = inst_30321);

(statearr_30353[(8)] = inst_30305);

return statearr_30353;
})();
var statearr_30354_30384 = state_30341__$1;
(statearr_30354_30384[(2)] = null);

(statearr_30354_30384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (9))){
var inst_30305 = (state_30341[(8)]);
var inst_30319 = cljs.core.vec.call(null,inst_30305);
var state_30341__$1 = state_30341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30341__$1,(11),out,inst_30319);
} else {
if((state_val_30342 === (5))){
var inst_30309 = (state_30341[(9)]);
var inst_30314 = (state_30341[(11)]);
var inst_30306 = (state_30341[(7)]);
var inst_30305 = (state_30341[(8)]);
var inst_30313 = (inst_30305[inst_30306] = inst_30309);
var inst_30314__$1 = (inst_30306 + (1));
var inst_30315 = (inst_30314__$1 < n);
var state_30341__$1 = (function (){var statearr_30355 = state_30341;
(statearr_30355[(11)] = inst_30314__$1);

(statearr_30355[(12)] = inst_30313);

return statearr_30355;
})();
if(cljs.core.truth_(inst_30315)){
var statearr_30356_30385 = state_30341__$1;
(statearr_30356_30385[(1)] = (8));

} else {
var statearr_30357_30386 = state_30341__$1;
(statearr_30357_30386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (14))){
var inst_30334 = (state_30341[(2)]);
var inst_30335 = cljs.core.async.close_BANG_.call(null,out);
var state_30341__$1 = (function (){var statearr_30359 = state_30341;
(statearr_30359[(13)] = inst_30334);

return statearr_30359;
})();
var statearr_30360_30387 = state_30341__$1;
(statearr_30360_30387[(2)] = inst_30335);

(statearr_30360_30387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (10))){
var inst_30325 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
var statearr_30361_30388 = state_30341__$1;
(statearr_30361_30388[(2)] = inst_30325);

(statearr_30361_30388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (8))){
var inst_30314 = (state_30341[(11)]);
var inst_30305 = (state_30341[(8)]);
var tmp30358 = inst_30305;
var inst_30305__$1 = tmp30358;
var inst_30306 = inst_30314;
var state_30341__$1 = (function (){var statearr_30362 = state_30341;
(statearr_30362[(7)] = inst_30306);

(statearr_30362[(8)] = inst_30305__$1);

return statearr_30362;
})();
var statearr_30363_30389 = state_30341__$1;
(statearr_30363_30389[(2)] = null);

(statearr_30363_30389[(1)] = (2));


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
});})(c__19424__auto___30375,out))
;
return ((function (switch__19359__auto__,c__19424__auto___30375,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_30367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30367[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_30367[(1)] = (1));

return statearr_30367;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_30341){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_30341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e30368){if((e30368 instanceof Object)){
var ex__19363__auto__ = e30368;
var statearr_30369_30390 = state_30341;
(statearr_30369_30390[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30391 = state_30341;
state_30341 = G__30391;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_30341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_30341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___30375,out))
})();
var state__19426__auto__ = (function (){var statearr_30370 = f__19425__auto__.call(null);
(statearr_30370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___30375);

return statearr_30370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___30375,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30392 = [];
var len__17402__auto___30466 = arguments.length;
var i__17403__auto___30467 = (0);
while(true){
if((i__17403__auto___30467 < len__17402__auto___30466)){
args30392.push((arguments[i__17403__auto___30467]));

var G__30468 = (i__17403__auto___30467 + (1));
i__17403__auto___30467 = G__30468;
continue;
} else {
}
break;
}

var G__30394 = args30392.length;
switch (G__30394) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30392.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___30470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___30470,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___30470,out){
return (function (state_30436){
var state_val_30437 = (state_30436[(1)]);
if((state_val_30437 === (7))){
var inst_30432 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
var statearr_30438_30471 = state_30436__$1;
(statearr_30438_30471[(2)] = inst_30432);

(statearr_30438_30471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (1))){
var inst_30395 = [];
var inst_30396 = inst_30395;
var inst_30397 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30436__$1 = (function (){var statearr_30439 = state_30436;
(statearr_30439[(7)] = inst_30397);

(statearr_30439[(8)] = inst_30396);

return statearr_30439;
})();
var statearr_30440_30472 = state_30436__$1;
(statearr_30440_30472[(2)] = null);

(statearr_30440_30472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (4))){
var inst_30400 = (state_30436[(9)]);
var inst_30400__$1 = (state_30436[(2)]);
var inst_30401 = (inst_30400__$1 == null);
var inst_30402 = cljs.core.not.call(null,inst_30401);
var state_30436__$1 = (function (){var statearr_30441 = state_30436;
(statearr_30441[(9)] = inst_30400__$1);

return statearr_30441;
})();
if(inst_30402){
var statearr_30442_30473 = state_30436__$1;
(statearr_30442_30473[(1)] = (5));

} else {
var statearr_30443_30474 = state_30436__$1;
(statearr_30443_30474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (15))){
var inst_30426 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
var statearr_30444_30475 = state_30436__$1;
(statearr_30444_30475[(2)] = inst_30426);

(statearr_30444_30475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (13))){
var state_30436__$1 = state_30436;
var statearr_30445_30476 = state_30436__$1;
(statearr_30445_30476[(2)] = null);

(statearr_30445_30476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (6))){
var inst_30396 = (state_30436[(8)]);
var inst_30421 = inst_30396.length;
var inst_30422 = (inst_30421 > (0));
var state_30436__$1 = state_30436;
if(cljs.core.truth_(inst_30422)){
var statearr_30446_30477 = state_30436__$1;
(statearr_30446_30477[(1)] = (12));

} else {
var statearr_30447_30478 = state_30436__$1;
(statearr_30447_30478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (3))){
var inst_30434 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30436__$1,inst_30434);
} else {
if((state_val_30437 === (12))){
var inst_30396 = (state_30436[(8)]);
var inst_30424 = cljs.core.vec.call(null,inst_30396);
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30436__$1,(15),out,inst_30424);
} else {
if((state_val_30437 === (2))){
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30436__$1,(4),ch);
} else {
if((state_val_30437 === (11))){
var inst_30404 = (state_30436[(10)]);
var inst_30400 = (state_30436[(9)]);
var inst_30414 = (state_30436[(2)]);
var inst_30415 = [];
var inst_30416 = inst_30415.push(inst_30400);
var inst_30396 = inst_30415;
var inst_30397 = inst_30404;
var state_30436__$1 = (function (){var statearr_30448 = state_30436;
(statearr_30448[(11)] = inst_30416);

(statearr_30448[(7)] = inst_30397);

(statearr_30448[(8)] = inst_30396);

(statearr_30448[(12)] = inst_30414);

return statearr_30448;
})();
var statearr_30449_30479 = state_30436__$1;
(statearr_30449_30479[(2)] = null);

(statearr_30449_30479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (9))){
var inst_30396 = (state_30436[(8)]);
var inst_30412 = cljs.core.vec.call(null,inst_30396);
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30436__$1,(11),out,inst_30412);
} else {
if((state_val_30437 === (5))){
var inst_30397 = (state_30436[(7)]);
var inst_30404 = (state_30436[(10)]);
var inst_30400 = (state_30436[(9)]);
var inst_30404__$1 = f.call(null,inst_30400);
var inst_30405 = cljs.core._EQ_.call(null,inst_30404__$1,inst_30397);
var inst_30406 = cljs.core.keyword_identical_QMARK_.call(null,inst_30397,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30407 = (inst_30405) || (inst_30406);
var state_30436__$1 = (function (){var statearr_30450 = state_30436;
(statearr_30450[(10)] = inst_30404__$1);

return statearr_30450;
})();
if(cljs.core.truth_(inst_30407)){
var statearr_30451_30480 = state_30436__$1;
(statearr_30451_30480[(1)] = (8));

} else {
var statearr_30452_30481 = state_30436__$1;
(statearr_30452_30481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (14))){
var inst_30429 = (state_30436[(2)]);
var inst_30430 = cljs.core.async.close_BANG_.call(null,out);
var state_30436__$1 = (function (){var statearr_30454 = state_30436;
(statearr_30454[(13)] = inst_30429);

return statearr_30454;
})();
var statearr_30455_30482 = state_30436__$1;
(statearr_30455_30482[(2)] = inst_30430);

(statearr_30455_30482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (10))){
var inst_30419 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
var statearr_30456_30483 = state_30436__$1;
(statearr_30456_30483[(2)] = inst_30419);

(statearr_30456_30483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (8))){
var inst_30404 = (state_30436[(10)]);
var inst_30400 = (state_30436[(9)]);
var inst_30396 = (state_30436[(8)]);
var inst_30409 = inst_30396.push(inst_30400);
var tmp30453 = inst_30396;
var inst_30396__$1 = tmp30453;
var inst_30397 = inst_30404;
var state_30436__$1 = (function (){var statearr_30457 = state_30436;
(statearr_30457[(7)] = inst_30397);

(statearr_30457[(14)] = inst_30409);

(statearr_30457[(8)] = inst_30396__$1);

return statearr_30457;
})();
var statearr_30458_30484 = state_30436__$1;
(statearr_30458_30484[(2)] = null);

(statearr_30458_30484[(1)] = (2));


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
});})(c__19424__auto___30470,out))
;
return ((function (switch__19359__auto__,c__19424__auto___30470,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_30462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30462[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_30462[(1)] = (1));

return statearr_30462;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_30436){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_30436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e30463){if((e30463 instanceof Object)){
var ex__19363__auto__ = e30463;
var statearr_30464_30485 = state_30436;
(statearr_30464_30485[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30486 = state_30436;
state_30436 = G__30486;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_30436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_30436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___30470,out))
})();
var state__19426__auto__ = (function (){var statearr_30465 = f__19425__auto__.call(null);
(statearr_30465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___30470);

return statearr_30465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___30470,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map