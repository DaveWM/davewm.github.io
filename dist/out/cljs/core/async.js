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
if(typeof cljs.core.async.t_cljs$core$async29755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29755 = (function (fn_handler,f,meta29756){
this.fn_handler = fn_handler;
this.f = f;
this.meta29756 = meta29756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29757,meta29756__$1){
var self__ = this;
var _29757__$1 = this;
return (new cljs.core.async.t_cljs$core$async29755(self__.fn_handler,self__.f,meta29756__$1));
});

cljs.core.async.t_cljs$core$async29755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29757){
var self__ = this;
var _29757__$1 = this;
return self__.meta29756;
});

cljs.core.async.t_cljs$core$async29755.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29756","meta29756",-153537296,null)], null);
});

cljs.core.async.t_cljs$core$async29755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29755";

cljs.core.async.t_cljs$core$async29755.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29755");
});

cljs.core.async.__GT_t_cljs$core$async29755 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async29755(fn_handler__$1,f__$1,meta29756){
return (new cljs.core.async.t_cljs$core$async29755(fn_handler__$1,f__$1,meta29756));
});

}

return (new cljs.core.async.t_cljs$core$async29755(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args29760 = [];
var len__17402__auto___29763 = arguments.length;
var i__17403__auto___29764 = (0);
while(true){
if((i__17403__auto___29764 < len__17402__auto___29763)){
args29760.push((arguments[i__17403__auto___29764]));

var G__29765 = (i__17403__auto___29764 + (1));
i__17403__auto___29764 = G__29765;
continue;
} else {
}
break;
}

var G__29762 = args29760.length;
switch (G__29762) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29760.length)].join('')));

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
var args29767 = [];
var len__17402__auto___29770 = arguments.length;
var i__17403__auto___29771 = (0);
while(true){
if((i__17403__auto___29771 < len__17402__auto___29770)){
args29767.push((arguments[i__17403__auto___29771]));

var G__29772 = (i__17403__auto___29771 + (1));
i__17403__auto___29771 = G__29772;
continue;
} else {
}
break;
}

var G__29769 = args29767.length;
switch (G__29769) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29767.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29774 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29774);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29774,ret){
return (function (){
return fn1.call(null,val_29774);
});})(val_29774,ret))
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
var args29775 = [];
var len__17402__auto___29778 = arguments.length;
var i__17403__auto___29779 = (0);
while(true){
if((i__17403__auto___29779 < len__17402__auto___29778)){
args29775.push((arguments[i__17403__auto___29779]));

var G__29780 = (i__17403__auto___29779 + (1));
i__17403__auto___29779 = G__29780;
continue;
} else {
}
break;
}

var G__29777 = args29775.length;
switch (G__29777) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29775.length)].join('')));

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
var n__17247__auto___29782 = n;
var x_29783 = (0);
while(true){
if((x_29783 < n__17247__auto___29782)){
(a[x_29783] = (0));

var G__29784 = (x_29783 + (1));
x_29783 = G__29784;
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

var G__29785 = (i + (1));
i = G__29785;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29789 = (function (alt_flag,flag,meta29790){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29790 = meta29790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29791,meta29790__$1){
var self__ = this;
var _29791__$1 = this;
return (new cljs.core.async.t_cljs$core$async29789(self__.alt_flag,self__.flag,meta29790__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29791){
var self__ = this;
var _29791__$1 = this;
return self__.meta29790;
});})(flag))
;

cljs.core.async.t_cljs$core$async29789.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29789.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29790","meta29790",742605037,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29789";

cljs.core.async.t_cljs$core$async29789.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29789");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29789 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29789(alt_flag__$1,flag__$1,meta29790){
return (new cljs.core.async.t_cljs$core$async29789(alt_flag__$1,flag__$1,meta29790));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29789(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29795 = (function (alt_handler,flag,cb,meta29796){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29796 = meta29796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29797,meta29796__$1){
var self__ = this;
var _29797__$1 = this;
return (new cljs.core.async.t_cljs$core$async29795(self__.alt_handler,self__.flag,self__.cb,meta29796__$1));
});

cljs.core.async.t_cljs$core$async29795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29797){
var self__ = this;
var _29797__$1 = this;
return self__.meta29796;
});

cljs.core.async.t_cljs$core$async29795.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29796","meta29796",230373800,null)], null);
});

cljs.core.async.t_cljs$core$async29795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29795";

cljs.core.async.t_cljs$core$async29795.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29795");
});

cljs.core.async.__GT_t_cljs$core$async29795 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29795(alt_handler__$1,flag__$1,cb__$1,meta29796){
return (new cljs.core.async.t_cljs$core$async29795(alt_handler__$1,flag__$1,cb__$1,meta29796));
});

}

return (new cljs.core.async.t_cljs$core$async29795(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29798_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29798_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29799_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29799_SHARP_,port], null));
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
var G__29800 = (i + (1));
i = G__29800;
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
var len__17402__auto___29806 = arguments.length;
var i__17403__auto___29807 = (0);
while(true){
if((i__17403__auto___29807 < len__17402__auto___29806)){
args__17409__auto__.push((arguments[i__17403__auto___29807]));

var G__29808 = (i__17403__auto___29807 + (1));
i__17403__auto___29807 = G__29808;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29803){
var map__29804 = p__29803;
var map__29804__$1 = ((((!((map__29804 == null)))?((((map__29804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29804):map__29804);
var opts = map__29804__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29801){
var G__29802 = cljs.core.first.call(null,seq29801);
var seq29801__$1 = cljs.core.next.call(null,seq29801);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29802,seq29801__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29809 = [];
var len__17402__auto___29859 = arguments.length;
var i__17403__auto___29860 = (0);
while(true){
if((i__17403__auto___29860 < len__17402__auto___29859)){
args29809.push((arguments[i__17403__auto___29860]));

var G__29861 = (i__17403__auto___29860 + (1));
i__17403__auto___29860 = G__29861;
continue;
} else {
}
break;
}

var G__29811 = args29809.length;
switch (G__29811) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29809.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19366__auto___29863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___29863){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___29863){
return (function (state_29835){
var state_val_29836 = (state_29835[(1)]);
if((state_val_29836 === (7))){
var inst_29831 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29837_29864 = state_29835__$1;
(statearr_29837_29864[(2)] = inst_29831);

(statearr_29837_29864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (1))){
var state_29835__$1 = state_29835;
var statearr_29838_29865 = state_29835__$1;
(statearr_29838_29865[(2)] = null);

(statearr_29838_29865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (4))){
var inst_29814 = (state_29835[(7)]);
var inst_29814__$1 = (state_29835[(2)]);
var inst_29815 = (inst_29814__$1 == null);
var state_29835__$1 = (function (){var statearr_29839 = state_29835;
(statearr_29839[(7)] = inst_29814__$1);

return statearr_29839;
})();
if(cljs.core.truth_(inst_29815)){
var statearr_29840_29866 = state_29835__$1;
(statearr_29840_29866[(1)] = (5));

} else {
var statearr_29841_29867 = state_29835__$1;
(statearr_29841_29867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (13))){
var state_29835__$1 = state_29835;
var statearr_29842_29868 = state_29835__$1;
(statearr_29842_29868[(2)] = null);

(statearr_29842_29868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (6))){
var inst_29814 = (state_29835[(7)]);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29835__$1,(11),to,inst_29814);
} else {
if((state_val_29836 === (3))){
var inst_29833 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29835__$1,inst_29833);
} else {
if((state_val_29836 === (12))){
var state_29835__$1 = state_29835;
var statearr_29843_29869 = state_29835__$1;
(statearr_29843_29869[(2)] = null);

(statearr_29843_29869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (2))){
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(4),from);
} else {
if((state_val_29836 === (11))){
var inst_29824 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
if(cljs.core.truth_(inst_29824)){
var statearr_29844_29870 = state_29835__$1;
(statearr_29844_29870[(1)] = (12));

} else {
var statearr_29845_29871 = state_29835__$1;
(statearr_29845_29871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (9))){
var state_29835__$1 = state_29835;
var statearr_29846_29872 = state_29835__$1;
(statearr_29846_29872[(2)] = null);

(statearr_29846_29872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (5))){
var state_29835__$1 = state_29835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29847_29873 = state_29835__$1;
(statearr_29847_29873[(1)] = (8));

} else {
var statearr_29848_29874 = state_29835__$1;
(statearr_29848_29874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (14))){
var inst_29829 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29849_29875 = state_29835__$1;
(statearr_29849_29875[(2)] = inst_29829);

(statearr_29849_29875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (10))){
var inst_29821 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29850_29876 = state_29835__$1;
(statearr_29850_29876[(2)] = inst_29821);

(statearr_29850_29876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (8))){
var inst_29818 = cljs.core.async.close_BANG_.call(null,to);
var state_29835__$1 = state_29835;
var statearr_29851_29877 = state_29835__$1;
(statearr_29851_29877[(2)] = inst_29818);

(statearr_29851_29877[(1)] = (10));


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
});})(c__19366__auto___29863))
;
return ((function (switch__19345__auto__,c__19366__auto___29863){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_29855 = [null,null,null,null,null,null,null,null];
(statearr_29855[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_29855[(1)] = (1));

return statearr_29855;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_29835){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_29835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e29856){if((e29856 instanceof Object)){
var ex__19349__auto__ = e29856;
var statearr_29857_29878 = state_29835;
(statearr_29857_29878[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29879 = state_29835;
state_29835 = G__29879;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_29835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_29835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___29863))
})();
var state__19368__auto__ = (function (){var statearr_29858 = f__19367__auto__.call(null);
(statearr_29858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___29863);

return statearr_29858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___29863))
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
return (function (p__30063){
var vec__30064 = p__30063;
var v = cljs.core.nth.call(null,vec__30064,(0),null);
var p = cljs.core.nth.call(null,vec__30064,(1),null);
var job = vec__30064;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19366__auto___30246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___30246,res,vec__30064,v,p,job,jobs,results){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___30246,res,vec__30064,v,p,job,jobs,results){
return (function (state_30069){
var state_val_30070 = (state_30069[(1)]);
if((state_val_30070 === (1))){
var state_30069__$1 = state_30069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30069__$1,(2),res,v);
} else {
if((state_val_30070 === (2))){
var inst_30066 = (state_30069[(2)]);
var inst_30067 = cljs.core.async.close_BANG_.call(null,res);
var state_30069__$1 = (function (){var statearr_30071 = state_30069;
(statearr_30071[(7)] = inst_30066);

return statearr_30071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30069__$1,inst_30067);
} else {
return null;
}
}
});})(c__19366__auto___30246,res,vec__30064,v,p,job,jobs,results))
;
return ((function (switch__19345__auto__,c__19366__auto___30246,res,vec__30064,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_30075 = [null,null,null,null,null,null,null,null];
(statearr_30075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_30075[(1)] = (1));

return statearr_30075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_30069){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_30069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e30076){if((e30076 instanceof Object)){
var ex__19349__auto__ = e30076;
var statearr_30077_30247 = state_30069;
(statearr_30077_30247[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30248 = state_30069;
state_30069 = G__30248;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_30069){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_30069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___30246,res,vec__30064,v,p,job,jobs,results))
})();
var state__19368__auto__ = (function (){var statearr_30078 = f__19367__auto__.call(null);
(statearr_30078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___30246);

return statearr_30078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___30246,res,vec__30064,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30079){
var vec__30080 = p__30079;
var v = cljs.core.nth.call(null,vec__30080,(0),null);
var p = cljs.core.nth.call(null,vec__30080,(1),null);
var job = vec__30080;
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
var n__17247__auto___30249 = n;
var __30250 = (0);
while(true){
if((__30250 < n__17247__auto___30249)){
var G__30081_30251 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30081_30251) {
case "compute":
var c__19366__auto___30253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30250,c__19366__auto___30253,G__30081_30251,n__17247__auto___30249,jobs,results,process,async){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (__30250,c__19366__auto___30253,G__30081_30251,n__17247__auto___30249,jobs,results,process,async){
return (function (state_30094){
var state_val_30095 = (state_30094[(1)]);
if((state_val_30095 === (1))){
var state_30094__$1 = state_30094;
var statearr_30096_30254 = state_30094__$1;
(statearr_30096_30254[(2)] = null);

(statearr_30096_30254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30095 === (2))){
var state_30094__$1 = state_30094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30094__$1,(4),jobs);
} else {
if((state_val_30095 === (3))){
var inst_30092 = (state_30094[(2)]);
var state_30094__$1 = state_30094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30094__$1,inst_30092);
} else {
if((state_val_30095 === (4))){
var inst_30084 = (state_30094[(2)]);
var inst_30085 = process.call(null,inst_30084);
var state_30094__$1 = state_30094;
if(cljs.core.truth_(inst_30085)){
var statearr_30097_30255 = state_30094__$1;
(statearr_30097_30255[(1)] = (5));

} else {
var statearr_30098_30256 = state_30094__$1;
(statearr_30098_30256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30095 === (5))){
var state_30094__$1 = state_30094;
var statearr_30099_30257 = state_30094__$1;
(statearr_30099_30257[(2)] = null);

(statearr_30099_30257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30095 === (6))){
var state_30094__$1 = state_30094;
var statearr_30100_30258 = state_30094__$1;
(statearr_30100_30258[(2)] = null);

(statearr_30100_30258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30095 === (7))){
var inst_30090 = (state_30094[(2)]);
var state_30094__$1 = state_30094;
var statearr_30101_30259 = state_30094__$1;
(statearr_30101_30259[(2)] = inst_30090);

(statearr_30101_30259[(1)] = (3));


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
});})(__30250,c__19366__auto___30253,G__30081_30251,n__17247__auto___30249,jobs,results,process,async))
;
return ((function (__30250,switch__19345__auto__,c__19366__auto___30253,G__30081_30251,n__17247__auto___30249,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_30105 = [null,null,null,null,null,null,null];
(statearr_30105[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_30105[(1)] = (1));

return statearr_30105;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_30094){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_30094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e30106){if((e30106 instanceof Object)){
var ex__19349__auto__ = e30106;
var statearr_30107_30260 = state_30094;
(statearr_30107_30260[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30261 = state_30094;
state_30094 = G__30261;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_30094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_30094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(__30250,switch__19345__auto__,c__19366__auto___30253,G__30081_30251,n__17247__auto___30249,jobs,results,process,async))
})();
var state__19368__auto__ = (function (){var statearr_30108 = f__19367__auto__.call(null);
(statearr_30108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___30253);

return statearr_30108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(__30250,c__19366__auto___30253,G__30081_30251,n__17247__auto___30249,jobs,results,process,async))
);


break;
case "async":
var c__19366__auto___30262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30250,c__19366__auto___30262,G__30081_30251,n__17247__auto___30249,jobs,results,process,async){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (__30250,c__19366__auto___30262,G__30081_30251,n__17247__auto___30249,jobs,results,process,async){
return (function (state_30121){
var state_val_30122 = (state_30121[(1)]);
if((state_val_30122 === (1))){
var state_30121__$1 = state_30121;
var statearr_30123_30263 = state_30121__$1;
(statearr_30123_30263[(2)] = null);

(statearr_30123_30263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30122 === (2))){
var state_30121__$1 = state_30121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30121__$1,(4),jobs);
} else {
if((state_val_30122 === (3))){
var inst_30119 = (state_30121[(2)]);
var state_30121__$1 = state_30121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30121__$1,inst_30119);
} else {
if((state_val_30122 === (4))){
var inst_30111 = (state_30121[(2)]);
var inst_30112 = async.call(null,inst_30111);
var state_30121__$1 = state_30121;
if(cljs.core.truth_(inst_30112)){
var statearr_30124_30264 = state_30121__$1;
(statearr_30124_30264[(1)] = (5));

} else {
var statearr_30125_30265 = state_30121__$1;
(statearr_30125_30265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30122 === (5))){
var state_30121__$1 = state_30121;
var statearr_30126_30266 = state_30121__$1;
(statearr_30126_30266[(2)] = null);

(statearr_30126_30266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30122 === (6))){
var state_30121__$1 = state_30121;
var statearr_30127_30267 = state_30121__$1;
(statearr_30127_30267[(2)] = null);

(statearr_30127_30267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30122 === (7))){
var inst_30117 = (state_30121[(2)]);
var state_30121__$1 = state_30121;
var statearr_30128_30268 = state_30121__$1;
(statearr_30128_30268[(2)] = inst_30117);

(statearr_30128_30268[(1)] = (3));


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
});})(__30250,c__19366__auto___30262,G__30081_30251,n__17247__auto___30249,jobs,results,process,async))
;
return ((function (__30250,switch__19345__auto__,c__19366__auto___30262,G__30081_30251,n__17247__auto___30249,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_30132 = [null,null,null,null,null,null,null];
(statearr_30132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_30132[(1)] = (1));

return statearr_30132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_30121){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_30121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e30133){if((e30133 instanceof Object)){
var ex__19349__auto__ = e30133;
var statearr_30134_30269 = state_30121;
(statearr_30134_30269[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30270 = state_30121;
state_30121 = G__30270;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_30121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_30121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(__30250,switch__19345__auto__,c__19366__auto___30262,G__30081_30251,n__17247__auto___30249,jobs,results,process,async))
})();
var state__19368__auto__ = (function (){var statearr_30135 = f__19367__auto__.call(null);
(statearr_30135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___30262);

return statearr_30135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(__30250,c__19366__auto___30262,G__30081_30251,n__17247__auto___30249,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30271 = (__30250 + (1));
__30250 = G__30271;
continue;
} else {
}
break;
}

var c__19366__auto___30272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___30272,jobs,results,process,async){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___30272,jobs,results,process,async){
return (function (state_30157){
var state_val_30158 = (state_30157[(1)]);
if((state_val_30158 === (1))){
var state_30157__$1 = state_30157;
var statearr_30159_30273 = state_30157__$1;
(statearr_30159_30273[(2)] = null);

(statearr_30159_30273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (2))){
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30157__$1,(4),from);
} else {
if((state_val_30158 === (3))){
var inst_30155 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30157__$1,inst_30155);
} else {
if((state_val_30158 === (4))){
var inst_30138 = (state_30157[(7)]);
var inst_30138__$1 = (state_30157[(2)]);
var inst_30139 = (inst_30138__$1 == null);
var state_30157__$1 = (function (){var statearr_30160 = state_30157;
(statearr_30160[(7)] = inst_30138__$1);

return statearr_30160;
})();
if(cljs.core.truth_(inst_30139)){
var statearr_30161_30274 = state_30157__$1;
(statearr_30161_30274[(1)] = (5));

} else {
var statearr_30162_30275 = state_30157__$1;
(statearr_30162_30275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (5))){
var inst_30141 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30157__$1 = state_30157;
var statearr_30163_30276 = state_30157__$1;
(statearr_30163_30276[(2)] = inst_30141);

(statearr_30163_30276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (6))){
var inst_30138 = (state_30157[(7)]);
var inst_30143 = (state_30157[(8)]);
var inst_30143__$1 = cljs.core.async.chan.call(null,(1));
var inst_30144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30145 = [inst_30138,inst_30143__$1];
var inst_30146 = (new cljs.core.PersistentVector(null,2,(5),inst_30144,inst_30145,null));
var state_30157__$1 = (function (){var statearr_30164 = state_30157;
(statearr_30164[(8)] = inst_30143__$1);

return statearr_30164;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30157__$1,(8),jobs,inst_30146);
} else {
if((state_val_30158 === (7))){
var inst_30153 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30165_30277 = state_30157__$1;
(statearr_30165_30277[(2)] = inst_30153);

(statearr_30165_30277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (8))){
var inst_30143 = (state_30157[(8)]);
var inst_30148 = (state_30157[(2)]);
var state_30157__$1 = (function (){var statearr_30166 = state_30157;
(statearr_30166[(9)] = inst_30148);

return statearr_30166;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30157__$1,(9),results,inst_30143);
} else {
if((state_val_30158 === (9))){
var inst_30150 = (state_30157[(2)]);
var state_30157__$1 = (function (){var statearr_30167 = state_30157;
(statearr_30167[(10)] = inst_30150);

return statearr_30167;
})();
var statearr_30168_30278 = state_30157__$1;
(statearr_30168_30278[(2)] = null);

(statearr_30168_30278[(1)] = (2));


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
});})(c__19366__auto___30272,jobs,results,process,async))
;
return ((function (switch__19345__auto__,c__19366__auto___30272,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_30172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_30172[(1)] = (1));

return statearr_30172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_30157){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_30157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e30173){if((e30173 instanceof Object)){
var ex__19349__auto__ = e30173;
var statearr_30174_30279 = state_30157;
(statearr_30174_30279[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30280 = state_30157;
state_30157 = G__30280;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_30157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_30157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___30272,jobs,results,process,async))
})();
var state__19368__auto__ = (function (){var statearr_30175 = f__19367__auto__.call(null);
(statearr_30175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___30272);

return statearr_30175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___30272,jobs,results,process,async))
);


var c__19366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto__,jobs,results,process,async){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto__,jobs,results,process,async){
return (function (state_30213){
var state_val_30214 = (state_30213[(1)]);
if((state_val_30214 === (7))){
var inst_30209 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30215_30281 = state_30213__$1;
(statearr_30215_30281[(2)] = inst_30209);

(statearr_30215_30281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (20))){
var state_30213__$1 = state_30213;
var statearr_30216_30282 = state_30213__$1;
(statearr_30216_30282[(2)] = null);

(statearr_30216_30282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (1))){
var state_30213__$1 = state_30213;
var statearr_30217_30283 = state_30213__$1;
(statearr_30217_30283[(2)] = null);

(statearr_30217_30283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (4))){
var inst_30178 = (state_30213[(7)]);
var inst_30178__$1 = (state_30213[(2)]);
var inst_30179 = (inst_30178__$1 == null);
var state_30213__$1 = (function (){var statearr_30218 = state_30213;
(statearr_30218[(7)] = inst_30178__$1);

return statearr_30218;
})();
if(cljs.core.truth_(inst_30179)){
var statearr_30219_30284 = state_30213__$1;
(statearr_30219_30284[(1)] = (5));

} else {
var statearr_30220_30285 = state_30213__$1;
(statearr_30220_30285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (15))){
var inst_30191 = (state_30213[(8)]);
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30213__$1,(18),to,inst_30191);
} else {
if((state_val_30214 === (21))){
var inst_30204 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30221_30286 = state_30213__$1;
(statearr_30221_30286[(2)] = inst_30204);

(statearr_30221_30286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (13))){
var inst_30206 = (state_30213[(2)]);
var state_30213__$1 = (function (){var statearr_30222 = state_30213;
(statearr_30222[(9)] = inst_30206);

return statearr_30222;
})();
var statearr_30223_30287 = state_30213__$1;
(statearr_30223_30287[(2)] = null);

(statearr_30223_30287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (6))){
var inst_30178 = (state_30213[(7)]);
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30213__$1,(11),inst_30178);
} else {
if((state_val_30214 === (17))){
var inst_30199 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
if(cljs.core.truth_(inst_30199)){
var statearr_30224_30288 = state_30213__$1;
(statearr_30224_30288[(1)] = (19));

} else {
var statearr_30225_30289 = state_30213__$1;
(statearr_30225_30289[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (3))){
var inst_30211 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30213__$1,inst_30211);
} else {
if((state_val_30214 === (12))){
var inst_30188 = (state_30213[(10)]);
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30213__$1,(14),inst_30188);
} else {
if((state_val_30214 === (2))){
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30213__$1,(4),results);
} else {
if((state_val_30214 === (19))){
var state_30213__$1 = state_30213;
var statearr_30226_30290 = state_30213__$1;
(statearr_30226_30290[(2)] = null);

(statearr_30226_30290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (11))){
var inst_30188 = (state_30213[(2)]);
var state_30213__$1 = (function (){var statearr_30227 = state_30213;
(statearr_30227[(10)] = inst_30188);

return statearr_30227;
})();
var statearr_30228_30291 = state_30213__$1;
(statearr_30228_30291[(2)] = null);

(statearr_30228_30291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (9))){
var state_30213__$1 = state_30213;
var statearr_30229_30292 = state_30213__$1;
(statearr_30229_30292[(2)] = null);

(statearr_30229_30292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (5))){
var state_30213__$1 = state_30213;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30230_30293 = state_30213__$1;
(statearr_30230_30293[(1)] = (8));

} else {
var statearr_30231_30294 = state_30213__$1;
(statearr_30231_30294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (14))){
var inst_30193 = (state_30213[(11)]);
var inst_30191 = (state_30213[(8)]);
var inst_30191__$1 = (state_30213[(2)]);
var inst_30192 = (inst_30191__$1 == null);
var inst_30193__$1 = cljs.core.not.call(null,inst_30192);
var state_30213__$1 = (function (){var statearr_30232 = state_30213;
(statearr_30232[(11)] = inst_30193__$1);

(statearr_30232[(8)] = inst_30191__$1);

return statearr_30232;
})();
if(inst_30193__$1){
var statearr_30233_30295 = state_30213__$1;
(statearr_30233_30295[(1)] = (15));

} else {
var statearr_30234_30296 = state_30213__$1;
(statearr_30234_30296[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (16))){
var inst_30193 = (state_30213[(11)]);
var state_30213__$1 = state_30213;
var statearr_30235_30297 = state_30213__$1;
(statearr_30235_30297[(2)] = inst_30193);

(statearr_30235_30297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (10))){
var inst_30185 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30236_30298 = state_30213__$1;
(statearr_30236_30298[(2)] = inst_30185);

(statearr_30236_30298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (18))){
var inst_30196 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30237_30299 = state_30213__$1;
(statearr_30237_30299[(2)] = inst_30196);

(statearr_30237_30299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (8))){
var inst_30182 = cljs.core.async.close_BANG_.call(null,to);
var state_30213__$1 = state_30213;
var statearr_30238_30300 = state_30213__$1;
(statearr_30238_30300[(2)] = inst_30182);

(statearr_30238_30300[(1)] = (10));


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
});})(c__19366__auto__,jobs,results,process,async))
;
return ((function (switch__19345__auto__,c__19366__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_30242 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_30242[(1)] = (1));

return statearr_30242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_30213){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_30213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e30243){if((e30243 instanceof Object)){
var ex__19349__auto__ = e30243;
var statearr_30244_30301 = state_30213;
(statearr_30244_30301[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30302 = state_30213;
state_30213 = G__30302;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_30213){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_30213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__,jobs,results,process,async))
})();
var state__19368__auto__ = (function (){var statearr_30245 = f__19367__auto__.call(null);
(statearr_30245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_30245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto__,jobs,results,process,async))
);

return c__19366__auto__;
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
var args30303 = [];
var len__17402__auto___30306 = arguments.length;
var i__17403__auto___30307 = (0);
while(true){
if((i__17403__auto___30307 < len__17402__auto___30306)){
args30303.push((arguments[i__17403__auto___30307]));

var G__30308 = (i__17403__auto___30307 + (1));
i__17403__auto___30307 = G__30308;
continue;
} else {
}
break;
}

var G__30305 = args30303.length;
switch (G__30305) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30303.length)].join('')));

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
var args30310 = [];
var len__17402__auto___30313 = arguments.length;
var i__17403__auto___30314 = (0);
while(true){
if((i__17403__auto___30314 < len__17402__auto___30313)){
args30310.push((arguments[i__17403__auto___30314]));

var G__30315 = (i__17403__auto___30314 + (1));
i__17403__auto___30314 = G__30315;
continue;
} else {
}
break;
}

var G__30312 = args30310.length;
switch (G__30312) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30310.length)].join('')));

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
var args30317 = [];
var len__17402__auto___30370 = arguments.length;
var i__17403__auto___30371 = (0);
while(true){
if((i__17403__auto___30371 < len__17402__auto___30370)){
args30317.push((arguments[i__17403__auto___30371]));

var G__30372 = (i__17403__auto___30371 + (1));
i__17403__auto___30371 = G__30372;
continue;
} else {
}
break;
}

var G__30319 = args30317.length;
switch (G__30319) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30317.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19366__auto___30374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___30374,tc,fc){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___30374,tc,fc){
return (function (state_30345){
var state_val_30346 = (state_30345[(1)]);
if((state_val_30346 === (7))){
var inst_30341 = (state_30345[(2)]);
var state_30345__$1 = state_30345;
var statearr_30347_30375 = state_30345__$1;
(statearr_30347_30375[(2)] = inst_30341);

(statearr_30347_30375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (1))){
var state_30345__$1 = state_30345;
var statearr_30348_30376 = state_30345__$1;
(statearr_30348_30376[(2)] = null);

(statearr_30348_30376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (4))){
var inst_30322 = (state_30345[(7)]);
var inst_30322__$1 = (state_30345[(2)]);
var inst_30323 = (inst_30322__$1 == null);
var state_30345__$1 = (function (){var statearr_30349 = state_30345;
(statearr_30349[(7)] = inst_30322__$1);

return statearr_30349;
})();
if(cljs.core.truth_(inst_30323)){
var statearr_30350_30377 = state_30345__$1;
(statearr_30350_30377[(1)] = (5));

} else {
var statearr_30351_30378 = state_30345__$1;
(statearr_30351_30378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (13))){
var state_30345__$1 = state_30345;
var statearr_30352_30379 = state_30345__$1;
(statearr_30352_30379[(2)] = null);

(statearr_30352_30379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (6))){
var inst_30322 = (state_30345[(7)]);
var inst_30328 = p.call(null,inst_30322);
var state_30345__$1 = state_30345;
if(cljs.core.truth_(inst_30328)){
var statearr_30353_30380 = state_30345__$1;
(statearr_30353_30380[(1)] = (9));

} else {
var statearr_30354_30381 = state_30345__$1;
(statearr_30354_30381[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (3))){
var inst_30343 = (state_30345[(2)]);
var state_30345__$1 = state_30345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30345__$1,inst_30343);
} else {
if((state_val_30346 === (12))){
var state_30345__$1 = state_30345;
var statearr_30355_30382 = state_30345__$1;
(statearr_30355_30382[(2)] = null);

(statearr_30355_30382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (2))){
var state_30345__$1 = state_30345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30345__$1,(4),ch);
} else {
if((state_val_30346 === (11))){
var inst_30322 = (state_30345[(7)]);
var inst_30332 = (state_30345[(2)]);
var state_30345__$1 = state_30345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30345__$1,(8),inst_30332,inst_30322);
} else {
if((state_val_30346 === (9))){
var state_30345__$1 = state_30345;
var statearr_30356_30383 = state_30345__$1;
(statearr_30356_30383[(2)] = tc);

(statearr_30356_30383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (5))){
var inst_30325 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30326 = cljs.core.async.close_BANG_.call(null,fc);
var state_30345__$1 = (function (){var statearr_30357 = state_30345;
(statearr_30357[(8)] = inst_30325);

return statearr_30357;
})();
var statearr_30358_30384 = state_30345__$1;
(statearr_30358_30384[(2)] = inst_30326);

(statearr_30358_30384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (14))){
var inst_30339 = (state_30345[(2)]);
var state_30345__$1 = state_30345;
var statearr_30359_30385 = state_30345__$1;
(statearr_30359_30385[(2)] = inst_30339);

(statearr_30359_30385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (10))){
var state_30345__$1 = state_30345;
var statearr_30360_30386 = state_30345__$1;
(statearr_30360_30386[(2)] = fc);

(statearr_30360_30386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30346 === (8))){
var inst_30334 = (state_30345[(2)]);
var state_30345__$1 = state_30345;
if(cljs.core.truth_(inst_30334)){
var statearr_30361_30387 = state_30345__$1;
(statearr_30361_30387[(1)] = (12));

} else {
var statearr_30362_30388 = state_30345__$1;
(statearr_30362_30388[(1)] = (13));

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
});})(c__19366__auto___30374,tc,fc))
;
return ((function (switch__19345__auto__,c__19366__auto___30374,tc,fc){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_30366 = [null,null,null,null,null,null,null,null,null];
(statearr_30366[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_30366[(1)] = (1));

return statearr_30366;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_30345){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_30345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e30367){if((e30367 instanceof Object)){
var ex__19349__auto__ = e30367;
var statearr_30368_30389 = state_30345;
(statearr_30368_30389[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30390 = state_30345;
state_30345 = G__30390;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_30345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_30345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___30374,tc,fc))
})();
var state__19368__auto__ = (function (){var statearr_30369 = f__19367__auto__.call(null);
(statearr_30369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___30374);

return statearr_30369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___30374,tc,fc))
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
var c__19366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto__){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto__){
return (function (state_30437){
var state_val_30438 = (state_30437[(1)]);
if((state_val_30438 === (1))){
var inst_30423 = init;
var state_30437__$1 = (function (){var statearr_30439 = state_30437;
(statearr_30439[(7)] = inst_30423);

return statearr_30439;
})();
var statearr_30440_30455 = state_30437__$1;
(statearr_30440_30455[(2)] = null);

(statearr_30440_30455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (2))){
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30437__$1,(4),ch);
} else {
if((state_val_30438 === (3))){
var inst_30435 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30437__$1,inst_30435);
} else {
if((state_val_30438 === (4))){
var inst_30426 = (state_30437[(8)]);
var inst_30426__$1 = (state_30437[(2)]);
var inst_30427 = (inst_30426__$1 == null);
var state_30437__$1 = (function (){var statearr_30441 = state_30437;
(statearr_30441[(8)] = inst_30426__$1);

return statearr_30441;
})();
if(cljs.core.truth_(inst_30427)){
var statearr_30442_30456 = state_30437__$1;
(statearr_30442_30456[(1)] = (5));

} else {
var statearr_30443_30457 = state_30437__$1;
(statearr_30443_30457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (5))){
var inst_30423 = (state_30437[(7)]);
var state_30437__$1 = state_30437;
var statearr_30444_30458 = state_30437__$1;
(statearr_30444_30458[(2)] = inst_30423);

(statearr_30444_30458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (6))){
var inst_30423 = (state_30437[(7)]);
var inst_30426 = (state_30437[(8)]);
var inst_30430 = f.call(null,inst_30423,inst_30426);
var inst_30423__$1 = inst_30430;
var state_30437__$1 = (function (){var statearr_30445 = state_30437;
(statearr_30445[(7)] = inst_30423__$1);

return statearr_30445;
})();
var statearr_30446_30459 = state_30437__$1;
(statearr_30446_30459[(2)] = null);

(statearr_30446_30459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (7))){
var inst_30433 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
var statearr_30447_30460 = state_30437__$1;
(statearr_30447_30460[(2)] = inst_30433);

(statearr_30447_30460[(1)] = (3));


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
});})(c__19366__auto__))
;
return ((function (switch__19345__auto__,c__19366__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19346__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19346__auto____0 = (function (){
var statearr_30451 = [null,null,null,null,null,null,null,null,null];
(statearr_30451[(0)] = cljs$core$async$reduce_$_state_machine__19346__auto__);

(statearr_30451[(1)] = (1));

return statearr_30451;
});
var cljs$core$async$reduce_$_state_machine__19346__auto____1 = (function (state_30437){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_30437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e30452){if((e30452 instanceof Object)){
var ex__19349__auto__ = e30452;
var statearr_30453_30461 = state_30437;
(statearr_30453_30461[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30462 = state_30437;
state_30437 = G__30462;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19346__auto__ = function(state_30437){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19346__auto____1.call(this,state_30437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19346__auto____0;
cljs$core$async$reduce_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19346__auto____1;
return cljs$core$async$reduce_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__))
})();
var state__19368__auto__ = (function (){var statearr_30454 = f__19367__auto__.call(null);
(statearr_30454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_30454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto__))
);

return c__19366__auto__;
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
var args30463 = [];
var len__17402__auto___30515 = arguments.length;
var i__17403__auto___30516 = (0);
while(true){
if((i__17403__auto___30516 < len__17402__auto___30515)){
args30463.push((arguments[i__17403__auto___30516]));

var G__30517 = (i__17403__auto___30516 + (1));
i__17403__auto___30516 = G__30517;
continue;
} else {
}
break;
}

var G__30465 = args30463.length;
switch (G__30465) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30463.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto__){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto__){
return (function (state_30490){
var state_val_30491 = (state_30490[(1)]);
if((state_val_30491 === (7))){
var inst_30472 = (state_30490[(2)]);
var state_30490__$1 = state_30490;
var statearr_30492_30519 = state_30490__$1;
(statearr_30492_30519[(2)] = inst_30472);

(statearr_30492_30519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (1))){
var inst_30466 = cljs.core.seq.call(null,coll);
var inst_30467 = inst_30466;
var state_30490__$1 = (function (){var statearr_30493 = state_30490;
(statearr_30493[(7)] = inst_30467);

return statearr_30493;
})();
var statearr_30494_30520 = state_30490__$1;
(statearr_30494_30520[(2)] = null);

(statearr_30494_30520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (4))){
var inst_30467 = (state_30490[(7)]);
var inst_30470 = cljs.core.first.call(null,inst_30467);
var state_30490__$1 = state_30490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30490__$1,(7),ch,inst_30470);
} else {
if((state_val_30491 === (13))){
var inst_30484 = (state_30490[(2)]);
var state_30490__$1 = state_30490;
var statearr_30495_30521 = state_30490__$1;
(statearr_30495_30521[(2)] = inst_30484);

(statearr_30495_30521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (6))){
var inst_30475 = (state_30490[(2)]);
var state_30490__$1 = state_30490;
if(cljs.core.truth_(inst_30475)){
var statearr_30496_30522 = state_30490__$1;
(statearr_30496_30522[(1)] = (8));

} else {
var statearr_30497_30523 = state_30490__$1;
(statearr_30497_30523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (3))){
var inst_30488 = (state_30490[(2)]);
var state_30490__$1 = state_30490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30490__$1,inst_30488);
} else {
if((state_val_30491 === (12))){
var state_30490__$1 = state_30490;
var statearr_30498_30524 = state_30490__$1;
(statearr_30498_30524[(2)] = null);

(statearr_30498_30524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (2))){
var inst_30467 = (state_30490[(7)]);
var state_30490__$1 = state_30490;
if(cljs.core.truth_(inst_30467)){
var statearr_30499_30525 = state_30490__$1;
(statearr_30499_30525[(1)] = (4));

} else {
var statearr_30500_30526 = state_30490__$1;
(statearr_30500_30526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (11))){
var inst_30481 = cljs.core.async.close_BANG_.call(null,ch);
var state_30490__$1 = state_30490;
var statearr_30501_30527 = state_30490__$1;
(statearr_30501_30527[(2)] = inst_30481);

(statearr_30501_30527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (9))){
var state_30490__$1 = state_30490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30502_30528 = state_30490__$1;
(statearr_30502_30528[(1)] = (11));

} else {
var statearr_30503_30529 = state_30490__$1;
(statearr_30503_30529[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (5))){
var inst_30467 = (state_30490[(7)]);
var state_30490__$1 = state_30490;
var statearr_30504_30530 = state_30490__$1;
(statearr_30504_30530[(2)] = inst_30467);

(statearr_30504_30530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (10))){
var inst_30486 = (state_30490[(2)]);
var state_30490__$1 = state_30490;
var statearr_30505_30531 = state_30490__$1;
(statearr_30505_30531[(2)] = inst_30486);

(statearr_30505_30531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (8))){
var inst_30467 = (state_30490[(7)]);
var inst_30477 = cljs.core.next.call(null,inst_30467);
var inst_30467__$1 = inst_30477;
var state_30490__$1 = (function (){var statearr_30506 = state_30490;
(statearr_30506[(7)] = inst_30467__$1);

return statearr_30506;
})();
var statearr_30507_30532 = state_30490__$1;
(statearr_30507_30532[(2)] = null);

(statearr_30507_30532[(1)] = (2));


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
});})(c__19366__auto__))
;
return ((function (switch__19345__auto__,c__19366__auto__){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_30511 = [null,null,null,null,null,null,null,null];
(statearr_30511[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_30511[(1)] = (1));

return statearr_30511;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_30490){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_30490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e30512){if((e30512 instanceof Object)){
var ex__19349__auto__ = e30512;
var statearr_30513_30533 = state_30490;
(statearr_30513_30533[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30534 = state_30490;
state_30490 = G__30534;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_30490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_30490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__))
})();
var state__19368__auto__ = (function (){var statearr_30514 = f__19367__auto__.call(null);
(statearr_30514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_30514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto__))
);

return c__19366__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async30756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30756 = (function (mult,ch,cs,meta30757){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30757 = meta30757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30758,meta30757__$1){
var self__ = this;
var _30758__$1 = this;
return (new cljs.core.async.t_cljs$core$async30756(self__.mult,self__.ch,self__.cs,meta30757__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30758){
var self__ = this;
var _30758__$1 = this;
return self__.meta30757;
});})(cs))
;

cljs.core.async.t_cljs$core$async30756.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30756.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30756.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30756.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30756.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30756.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30757","meta30757",-249462478,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30756";

cljs.core.async.t_cljs$core$async30756.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async30756");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30756 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30756(mult__$1,ch__$1,cs__$1,meta30757){
return (new cljs.core.async.t_cljs$core$async30756(mult__$1,ch__$1,cs__$1,meta30757));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30756(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19366__auto___30977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___30977,cs,m,dchan,dctr,done){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___30977,cs,m,dchan,dctr,done){
return (function (state_30889){
var state_val_30890 = (state_30889[(1)]);
if((state_val_30890 === (7))){
var inst_30885 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30891_30978 = state_30889__$1;
(statearr_30891_30978[(2)] = inst_30885);

(statearr_30891_30978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (20))){
var inst_30790 = (state_30889[(7)]);
var inst_30800 = cljs.core.first.call(null,inst_30790);
var inst_30801 = cljs.core.nth.call(null,inst_30800,(0),null);
var inst_30802 = cljs.core.nth.call(null,inst_30800,(1),null);
var state_30889__$1 = (function (){var statearr_30892 = state_30889;
(statearr_30892[(8)] = inst_30801);

return statearr_30892;
})();
if(cljs.core.truth_(inst_30802)){
var statearr_30893_30979 = state_30889__$1;
(statearr_30893_30979[(1)] = (22));

} else {
var statearr_30894_30980 = state_30889__$1;
(statearr_30894_30980[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (27))){
var inst_30830 = (state_30889[(9)]);
var inst_30837 = (state_30889[(10)]);
var inst_30761 = (state_30889[(11)]);
var inst_30832 = (state_30889[(12)]);
var inst_30837__$1 = cljs.core._nth.call(null,inst_30830,inst_30832);
var inst_30838 = cljs.core.async.put_BANG_.call(null,inst_30837__$1,inst_30761,done);
var state_30889__$1 = (function (){var statearr_30895 = state_30889;
(statearr_30895[(10)] = inst_30837__$1);

return statearr_30895;
})();
if(cljs.core.truth_(inst_30838)){
var statearr_30896_30981 = state_30889__$1;
(statearr_30896_30981[(1)] = (30));

} else {
var statearr_30897_30982 = state_30889__$1;
(statearr_30897_30982[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (1))){
var state_30889__$1 = state_30889;
var statearr_30898_30983 = state_30889__$1;
(statearr_30898_30983[(2)] = null);

(statearr_30898_30983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (24))){
var inst_30790 = (state_30889[(7)]);
var inst_30807 = (state_30889[(2)]);
var inst_30808 = cljs.core.next.call(null,inst_30790);
var inst_30770 = inst_30808;
var inst_30771 = null;
var inst_30772 = (0);
var inst_30773 = (0);
var state_30889__$1 = (function (){var statearr_30899 = state_30889;
(statearr_30899[(13)] = inst_30772);

(statearr_30899[(14)] = inst_30771);

(statearr_30899[(15)] = inst_30773);

(statearr_30899[(16)] = inst_30807);

(statearr_30899[(17)] = inst_30770);

return statearr_30899;
})();
var statearr_30900_30984 = state_30889__$1;
(statearr_30900_30984[(2)] = null);

(statearr_30900_30984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (39))){
var state_30889__$1 = state_30889;
var statearr_30904_30985 = state_30889__$1;
(statearr_30904_30985[(2)] = null);

(statearr_30904_30985[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (4))){
var inst_30761 = (state_30889[(11)]);
var inst_30761__$1 = (state_30889[(2)]);
var inst_30762 = (inst_30761__$1 == null);
var state_30889__$1 = (function (){var statearr_30905 = state_30889;
(statearr_30905[(11)] = inst_30761__$1);

return statearr_30905;
})();
if(cljs.core.truth_(inst_30762)){
var statearr_30906_30986 = state_30889__$1;
(statearr_30906_30986[(1)] = (5));

} else {
var statearr_30907_30987 = state_30889__$1;
(statearr_30907_30987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (15))){
var inst_30772 = (state_30889[(13)]);
var inst_30771 = (state_30889[(14)]);
var inst_30773 = (state_30889[(15)]);
var inst_30770 = (state_30889[(17)]);
var inst_30786 = (state_30889[(2)]);
var inst_30787 = (inst_30773 + (1));
var tmp30901 = inst_30772;
var tmp30902 = inst_30771;
var tmp30903 = inst_30770;
var inst_30770__$1 = tmp30903;
var inst_30771__$1 = tmp30902;
var inst_30772__$1 = tmp30901;
var inst_30773__$1 = inst_30787;
var state_30889__$1 = (function (){var statearr_30908 = state_30889;
(statearr_30908[(13)] = inst_30772__$1);

(statearr_30908[(18)] = inst_30786);

(statearr_30908[(14)] = inst_30771__$1);

(statearr_30908[(15)] = inst_30773__$1);

(statearr_30908[(17)] = inst_30770__$1);

return statearr_30908;
})();
var statearr_30909_30988 = state_30889__$1;
(statearr_30909_30988[(2)] = null);

(statearr_30909_30988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (21))){
var inst_30811 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30913_30989 = state_30889__$1;
(statearr_30913_30989[(2)] = inst_30811);

(statearr_30913_30989[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (31))){
var inst_30837 = (state_30889[(10)]);
var inst_30841 = done.call(null,null);
var inst_30842 = cljs.core.async.untap_STAR_.call(null,m,inst_30837);
var state_30889__$1 = (function (){var statearr_30914 = state_30889;
(statearr_30914[(19)] = inst_30841);

return statearr_30914;
})();
var statearr_30915_30990 = state_30889__$1;
(statearr_30915_30990[(2)] = inst_30842);

(statearr_30915_30990[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (32))){
var inst_30830 = (state_30889[(9)]);
var inst_30829 = (state_30889[(20)]);
var inst_30831 = (state_30889[(21)]);
var inst_30832 = (state_30889[(12)]);
var inst_30844 = (state_30889[(2)]);
var inst_30845 = (inst_30832 + (1));
var tmp30910 = inst_30830;
var tmp30911 = inst_30829;
var tmp30912 = inst_30831;
var inst_30829__$1 = tmp30911;
var inst_30830__$1 = tmp30910;
var inst_30831__$1 = tmp30912;
var inst_30832__$1 = inst_30845;
var state_30889__$1 = (function (){var statearr_30916 = state_30889;
(statearr_30916[(9)] = inst_30830__$1);

(statearr_30916[(20)] = inst_30829__$1);

(statearr_30916[(21)] = inst_30831__$1);

(statearr_30916[(22)] = inst_30844);

(statearr_30916[(12)] = inst_30832__$1);

return statearr_30916;
})();
var statearr_30917_30991 = state_30889__$1;
(statearr_30917_30991[(2)] = null);

(statearr_30917_30991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (40))){
var inst_30857 = (state_30889[(23)]);
var inst_30861 = done.call(null,null);
var inst_30862 = cljs.core.async.untap_STAR_.call(null,m,inst_30857);
var state_30889__$1 = (function (){var statearr_30918 = state_30889;
(statearr_30918[(24)] = inst_30861);

return statearr_30918;
})();
var statearr_30919_30992 = state_30889__$1;
(statearr_30919_30992[(2)] = inst_30862);

(statearr_30919_30992[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (33))){
var inst_30848 = (state_30889[(25)]);
var inst_30850 = cljs.core.chunked_seq_QMARK_.call(null,inst_30848);
var state_30889__$1 = state_30889;
if(inst_30850){
var statearr_30920_30993 = state_30889__$1;
(statearr_30920_30993[(1)] = (36));

} else {
var statearr_30921_30994 = state_30889__$1;
(statearr_30921_30994[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (13))){
var inst_30780 = (state_30889[(26)]);
var inst_30783 = cljs.core.async.close_BANG_.call(null,inst_30780);
var state_30889__$1 = state_30889;
var statearr_30922_30995 = state_30889__$1;
(statearr_30922_30995[(2)] = inst_30783);

(statearr_30922_30995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (22))){
var inst_30801 = (state_30889[(8)]);
var inst_30804 = cljs.core.async.close_BANG_.call(null,inst_30801);
var state_30889__$1 = state_30889;
var statearr_30923_30996 = state_30889__$1;
(statearr_30923_30996[(2)] = inst_30804);

(statearr_30923_30996[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (36))){
var inst_30848 = (state_30889[(25)]);
var inst_30852 = cljs.core.chunk_first.call(null,inst_30848);
var inst_30853 = cljs.core.chunk_rest.call(null,inst_30848);
var inst_30854 = cljs.core.count.call(null,inst_30852);
var inst_30829 = inst_30853;
var inst_30830 = inst_30852;
var inst_30831 = inst_30854;
var inst_30832 = (0);
var state_30889__$1 = (function (){var statearr_30924 = state_30889;
(statearr_30924[(9)] = inst_30830);

(statearr_30924[(20)] = inst_30829);

(statearr_30924[(21)] = inst_30831);

(statearr_30924[(12)] = inst_30832);

return statearr_30924;
})();
var statearr_30925_30997 = state_30889__$1;
(statearr_30925_30997[(2)] = null);

(statearr_30925_30997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (41))){
var inst_30848 = (state_30889[(25)]);
var inst_30864 = (state_30889[(2)]);
var inst_30865 = cljs.core.next.call(null,inst_30848);
var inst_30829 = inst_30865;
var inst_30830 = null;
var inst_30831 = (0);
var inst_30832 = (0);
var state_30889__$1 = (function (){var statearr_30926 = state_30889;
(statearr_30926[(9)] = inst_30830);

(statearr_30926[(27)] = inst_30864);

(statearr_30926[(20)] = inst_30829);

(statearr_30926[(21)] = inst_30831);

(statearr_30926[(12)] = inst_30832);

return statearr_30926;
})();
var statearr_30927_30998 = state_30889__$1;
(statearr_30927_30998[(2)] = null);

(statearr_30927_30998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (43))){
var state_30889__$1 = state_30889;
var statearr_30928_30999 = state_30889__$1;
(statearr_30928_30999[(2)] = null);

(statearr_30928_30999[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (29))){
var inst_30873 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30929_31000 = state_30889__$1;
(statearr_30929_31000[(2)] = inst_30873);

(statearr_30929_31000[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (44))){
var inst_30882 = (state_30889[(2)]);
var state_30889__$1 = (function (){var statearr_30930 = state_30889;
(statearr_30930[(28)] = inst_30882);

return statearr_30930;
})();
var statearr_30931_31001 = state_30889__$1;
(statearr_30931_31001[(2)] = null);

(statearr_30931_31001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (6))){
var inst_30821 = (state_30889[(29)]);
var inst_30820 = cljs.core.deref.call(null,cs);
var inst_30821__$1 = cljs.core.keys.call(null,inst_30820);
var inst_30822 = cljs.core.count.call(null,inst_30821__$1);
var inst_30823 = cljs.core.reset_BANG_.call(null,dctr,inst_30822);
var inst_30828 = cljs.core.seq.call(null,inst_30821__$1);
var inst_30829 = inst_30828;
var inst_30830 = null;
var inst_30831 = (0);
var inst_30832 = (0);
var state_30889__$1 = (function (){var statearr_30932 = state_30889;
(statearr_30932[(9)] = inst_30830);

(statearr_30932[(20)] = inst_30829);

(statearr_30932[(30)] = inst_30823);

(statearr_30932[(29)] = inst_30821__$1);

(statearr_30932[(21)] = inst_30831);

(statearr_30932[(12)] = inst_30832);

return statearr_30932;
})();
var statearr_30933_31002 = state_30889__$1;
(statearr_30933_31002[(2)] = null);

(statearr_30933_31002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (28))){
var inst_30829 = (state_30889[(20)]);
var inst_30848 = (state_30889[(25)]);
var inst_30848__$1 = cljs.core.seq.call(null,inst_30829);
var state_30889__$1 = (function (){var statearr_30934 = state_30889;
(statearr_30934[(25)] = inst_30848__$1);

return statearr_30934;
})();
if(inst_30848__$1){
var statearr_30935_31003 = state_30889__$1;
(statearr_30935_31003[(1)] = (33));

} else {
var statearr_30936_31004 = state_30889__$1;
(statearr_30936_31004[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (25))){
var inst_30831 = (state_30889[(21)]);
var inst_30832 = (state_30889[(12)]);
var inst_30834 = (inst_30832 < inst_30831);
var inst_30835 = inst_30834;
var state_30889__$1 = state_30889;
if(cljs.core.truth_(inst_30835)){
var statearr_30937_31005 = state_30889__$1;
(statearr_30937_31005[(1)] = (27));

} else {
var statearr_30938_31006 = state_30889__$1;
(statearr_30938_31006[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (34))){
var state_30889__$1 = state_30889;
var statearr_30939_31007 = state_30889__$1;
(statearr_30939_31007[(2)] = null);

(statearr_30939_31007[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (17))){
var state_30889__$1 = state_30889;
var statearr_30940_31008 = state_30889__$1;
(statearr_30940_31008[(2)] = null);

(statearr_30940_31008[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (3))){
var inst_30887 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30889__$1,inst_30887);
} else {
if((state_val_30890 === (12))){
var inst_30816 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30941_31009 = state_30889__$1;
(statearr_30941_31009[(2)] = inst_30816);

(statearr_30941_31009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (2))){
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30889__$1,(4),ch);
} else {
if((state_val_30890 === (23))){
var state_30889__$1 = state_30889;
var statearr_30942_31010 = state_30889__$1;
(statearr_30942_31010[(2)] = null);

(statearr_30942_31010[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (35))){
var inst_30871 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30943_31011 = state_30889__$1;
(statearr_30943_31011[(2)] = inst_30871);

(statearr_30943_31011[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (19))){
var inst_30790 = (state_30889[(7)]);
var inst_30794 = cljs.core.chunk_first.call(null,inst_30790);
var inst_30795 = cljs.core.chunk_rest.call(null,inst_30790);
var inst_30796 = cljs.core.count.call(null,inst_30794);
var inst_30770 = inst_30795;
var inst_30771 = inst_30794;
var inst_30772 = inst_30796;
var inst_30773 = (0);
var state_30889__$1 = (function (){var statearr_30944 = state_30889;
(statearr_30944[(13)] = inst_30772);

(statearr_30944[(14)] = inst_30771);

(statearr_30944[(15)] = inst_30773);

(statearr_30944[(17)] = inst_30770);

return statearr_30944;
})();
var statearr_30945_31012 = state_30889__$1;
(statearr_30945_31012[(2)] = null);

(statearr_30945_31012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (11))){
var inst_30790 = (state_30889[(7)]);
var inst_30770 = (state_30889[(17)]);
var inst_30790__$1 = cljs.core.seq.call(null,inst_30770);
var state_30889__$1 = (function (){var statearr_30946 = state_30889;
(statearr_30946[(7)] = inst_30790__$1);

return statearr_30946;
})();
if(inst_30790__$1){
var statearr_30947_31013 = state_30889__$1;
(statearr_30947_31013[(1)] = (16));

} else {
var statearr_30948_31014 = state_30889__$1;
(statearr_30948_31014[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (9))){
var inst_30818 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30949_31015 = state_30889__$1;
(statearr_30949_31015[(2)] = inst_30818);

(statearr_30949_31015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (5))){
var inst_30768 = cljs.core.deref.call(null,cs);
var inst_30769 = cljs.core.seq.call(null,inst_30768);
var inst_30770 = inst_30769;
var inst_30771 = null;
var inst_30772 = (0);
var inst_30773 = (0);
var state_30889__$1 = (function (){var statearr_30950 = state_30889;
(statearr_30950[(13)] = inst_30772);

(statearr_30950[(14)] = inst_30771);

(statearr_30950[(15)] = inst_30773);

(statearr_30950[(17)] = inst_30770);

return statearr_30950;
})();
var statearr_30951_31016 = state_30889__$1;
(statearr_30951_31016[(2)] = null);

(statearr_30951_31016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (14))){
var state_30889__$1 = state_30889;
var statearr_30952_31017 = state_30889__$1;
(statearr_30952_31017[(2)] = null);

(statearr_30952_31017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (45))){
var inst_30879 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30953_31018 = state_30889__$1;
(statearr_30953_31018[(2)] = inst_30879);

(statearr_30953_31018[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (26))){
var inst_30821 = (state_30889[(29)]);
var inst_30875 = (state_30889[(2)]);
var inst_30876 = cljs.core.seq.call(null,inst_30821);
var state_30889__$1 = (function (){var statearr_30954 = state_30889;
(statearr_30954[(31)] = inst_30875);

return statearr_30954;
})();
if(inst_30876){
var statearr_30955_31019 = state_30889__$1;
(statearr_30955_31019[(1)] = (42));

} else {
var statearr_30956_31020 = state_30889__$1;
(statearr_30956_31020[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (16))){
var inst_30790 = (state_30889[(7)]);
var inst_30792 = cljs.core.chunked_seq_QMARK_.call(null,inst_30790);
var state_30889__$1 = state_30889;
if(inst_30792){
var statearr_30957_31021 = state_30889__$1;
(statearr_30957_31021[(1)] = (19));

} else {
var statearr_30958_31022 = state_30889__$1;
(statearr_30958_31022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (38))){
var inst_30868 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30959_31023 = state_30889__$1;
(statearr_30959_31023[(2)] = inst_30868);

(statearr_30959_31023[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (30))){
var state_30889__$1 = state_30889;
var statearr_30960_31024 = state_30889__$1;
(statearr_30960_31024[(2)] = null);

(statearr_30960_31024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (10))){
var inst_30771 = (state_30889[(14)]);
var inst_30773 = (state_30889[(15)]);
var inst_30779 = cljs.core._nth.call(null,inst_30771,inst_30773);
var inst_30780 = cljs.core.nth.call(null,inst_30779,(0),null);
var inst_30781 = cljs.core.nth.call(null,inst_30779,(1),null);
var state_30889__$1 = (function (){var statearr_30961 = state_30889;
(statearr_30961[(26)] = inst_30780);

return statearr_30961;
})();
if(cljs.core.truth_(inst_30781)){
var statearr_30962_31025 = state_30889__$1;
(statearr_30962_31025[(1)] = (13));

} else {
var statearr_30963_31026 = state_30889__$1;
(statearr_30963_31026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (18))){
var inst_30814 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30964_31027 = state_30889__$1;
(statearr_30964_31027[(2)] = inst_30814);

(statearr_30964_31027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (42))){
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30889__$1,(45),dchan);
} else {
if((state_val_30890 === (37))){
var inst_30857 = (state_30889[(23)]);
var inst_30848 = (state_30889[(25)]);
var inst_30761 = (state_30889[(11)]);
var inst_30857__$1 = cljs.core.first.call(null,inst_30848);
var inst_30858 = cljs.core.async.put_BANG_.call(null,inst_30857__$1,inst_30761,done);
var state_30889__$1 = (function (){var statearr_30965 = state_30889;
(statearr_30965[(23)] = inst_30857__$1);

return statearr_30965;
})();
if(cljs.core.truth_(inst_30858)){
var statearr_30966_31028 = state_30889__$1;
(statearr_30966_31028[(1)] = (39));

} else {
var statearr_30967_31029 = state_30889__$1;
(statearr_30967_31029[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (8))){
var inst_30772 = (state_30889[(13)]);
var inst_30773 = (state_30889[(15)]);
var inst_30775 = (inst_30773 < inst_30772);
var inst_30776 = inst_30775;
var state_30889__$1 = state_30889;
if(cljs.core.truth_(inst_30776)){
var statearr_30968_31030 = state_30889__$1;
(statearr_30968_31030[(1)] = (10));

} else {
var statearr_30969_31031 = state_30889__$1;
(statearr_30969_31031[(1)] = (11));

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
});})(c__19366__auto___30977,cs,m,dchan,dctr,done))
;
return ((function (switch__19345__auto__,c__19366__auto___30977,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19346__auto__ = null;
var cljs$core$async$mult_$_state_machine__19346__auto____0 = (function (){
var statearr_30973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30973[(0)] = cljs$core$async$mult_$_state_machine__19346__auto__);

(statearr_30973[(1)] = (1));

return statearr_30973;
});
var cljs$core$async$mult_$_state_machine__19346__auto____1 = (function (state_30889){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_30889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e30974){if((e30974 instanceof Object)){
var ex__19349__auto__ = e30974;
var statearr_30975_31032 = state_30889;
(statearr_30975_31032[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31033 = state_30889;
state_30889 = G__31033;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19346__auto__ = function(state_30889){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19346__auto____1.call(this,state_30889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19346__auto____0;
cljs$core$async$mult_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19346__auto____1;
return cljs$core$async$mult_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___30977,cs,m,dchan,dctr,done))
})();
var state__19368__auto__ = (function (){var statearr_30976 = f__19367__auto__.call(null);
(statearr_30976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___30977);

return statearr_30976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___30977,cs,m,dchan,dctr,done))
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
var args31034 = [];
var len__17402__auto___31037 = arguments.length;
var i__17403__auto___31038 = (0);
while(true){
if((i__17403__auto___31038 < len__17402__auto___31037)){
args31034.push((arguments[i__17403__auto___31038]));

var G__31039 = (i__17403__auto___31038 + (1));
i__17403__auto___31038 = G__31039;
continue;
} else {
}
break;
}

var G__31036 = args31034.length;
switch (G__31036) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31034.length)].join('')));

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
var len__17402__auto___31051 = arguments.length;
var i__17403__auto___31052 = (0);
while(true){
if((i__17403__auto___31052 < len__17402__auto___31051)){
args__17409__auto__.push((arguments[i__17403__auto___31052]));

var G__31053 = (i__17403__auto___31052 + (1));
i__17403__auto___31052 = G__31053;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((3) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17410__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31045){
var map__31046 = p__31045;
var map__31046__$1 = ((((!((map__31046 == null)))?((((map__31046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31046):map__31046);
var opts = map__31046__$1;
var statearr_31048_31054 = state;
(statearr_31048_31054[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31046,map__31046__$1,opts){
return (function (val){
var statearr_31049_31055 = state;
(statearr_31049_31055[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31046,map__31046__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31050_31056 = state;
(statearr_31050_31056[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31041){
var G__31042 = cljs.core.first.call(null,seq31041);
var seq31041__$1 = cljs.core.next.call(null,seq31041);
var G__31043 = cljs.core.first.call(null,seq31041__$1);
var seq31041__$2 = cljs.core.next.call(null,seq31041__$1);
var G__31044 = cljs.core.first.call(null,seq31041__$2);
var seq31041__$3 = cljs.core.next.call(null,seq31041__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31042,G__31043,G__31044,seq31041__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31220 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31221){
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
this.meta31221 = meta31221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31222,meta31221__$1){
var self__ = this;
var _31222__$1 = this;
return (new cljs.core.async.t_cljs$core$async31220(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31221__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31222){
var self__ = this;
var _31222__$1 = this;
return self__.meta31221;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31220.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31220.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31220.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31220.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31220.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31220.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31220.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31220.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31221","meta31221",1263605444,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31220";

cljs.core.async.t_cljs$core$async31220.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async31220");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31220 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31220(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31221){
return (new cljs.core.async.t_cljs$core$async31220(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31221));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31220(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19366__auto___31383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___31383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___31383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31320){
var state_val_31321 = (state_31320[(1)]);
if((state_val_31321 === (7))){
var inst_31238 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
var statearr_31322_31384 = state_31320__$1;
(statearr_31322_31384[(2)] = inst_31238);

(statearr_31322_31384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (20))){
var inst_31250 = (state_31320[(7)]);
var state_31320__$1 = state_31320;
var statearr_31323_31385 = state_31320__$1;
(statearr_31323_31385[(2)] = inst_31250);

(statearr_31323_31385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (27))){
var state_31320__$1 = state_31320;
var statearr_31324_31386 = state_31320__$1;
(statearr_31324_31386[(2)] = null);

(statearr_31324_31386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (1))){
var inst_31226 = (state_31320[(8)]);
var inst_31226__$1 = calc_state.call(null);
var inst_31228 = (inst_31226__$1 == null);
var inst_31229 = cljs.core.not.call(null,inst_31228);
var state_31320__$1 = (function (){var statearr_31325 = state_31320;
(statearr_31325[(8)] = inst_31226__$1);

return statearr_31325;
})();
if(inst_31229){
var statearr_31326_31387 = state_31320__$1;
(statearr_31326_31387[(1)] = (2));

} else {
var statearr_31327_31388 = state_31320__$1;
(statearr_31327_31388[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (24))){
var inst_31294 = (state_31320[(9)]);
var inst_31280 = (state_31320[(10)]);
var inst_31273 = (state_31320[(11)]);
var inst_31294__$1 = inst_31273.call(null,inst_31280);
var state_31320__$1 = (function (){var statearr_31328 = state_31320;
(statearr_31328[(9)] = inst_31294__$1);

return statearr_31328;
})();
if(cljs.core.truth_(inst_31294__$1)){
var statearr_31329_31389 = state_31320__$1;
(statearr_31329_31389[(1)] = (29));

} else {
var statearr_31330_31390 = state_31320__$1;
(statearr_31330_31390[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (4))){
var inst_31241 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
if(cljs.core.truth_(inst_31241)){
var statearr_31331_31391 = state_31320__$1;
(statearr_31331_31391[(1)] = (8));

} else {
var statearr_31332_31392 = state_31320__$1;
(statearr_31332_31392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (15))){
var inst_31267 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
if(cljs.core.truth_(inst_31267)){
var statearr_31333_31393 = state_31320__$1;
(statearr_31333_31393[(1)] = (19));

} else {
var statearr_31334_31394 = state_31320__$1;
(statearr_31334_31394[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (21))){
var inst_31272 = (state_31320[(12)]);
var inst_31272__$1 = (state_31320[(2)]);
var inst_31273 = cljs.core.get.call(null,inst_31272__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31274 = cljs.core.get.call(null,inst_31272__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31275 = cljs.core.get.call(null,inst_31272__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31320__$1 = (function (){var statearr_31335 = state_31320;
(statearr_31335[(13)] = inst_31274);

(statearr_31335[(12)] = inst_31272__$1);

(statearr_31335[(11)] = inst_31273);

return statearr_31335;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31320__$1,(22),inst_31275);
} else {
if((state_val_31321 === (31))){
var inst_31302 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
if(cljs.core.truth_(inst_31302)){
var statearr_31336_31395 = state_31320__$1;
(statearr_31336_31395[(1)] = (32));

} else {
var statearr_31337_31396 = state_31320__$1;
(statearr_31337_31396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (32))){
var inst_31279 = (state_31320[(14)]);
var state_31320__$1 = state_31320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31320__$1,(35),out,inst_31279);
} else {
if((state_val_31321 === (33))){
var inst_31272 = (state_31320[(12)]);
var inst_31250 = inst_31272;
var state_31320__$1 = (function (){var statearr_31338 = state_31320;
(statearr_31338[(7)] = inst_31250);

return statearr_31338;
})();
var statearr_31339_31397 = state_31320__$1;
(statearr_31339_31397[(2)] = null);

(statearr_31339_31397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (13))){
var inst_31250 = (state_31320[(7)]);
var inst_31257 = inst_31250.cljs$lang$protocol_mask$partition0$;
var inst_31258 = (inst_31257 & (64));
var inst_31259 = inst_31250.cljs$core$ISeq$;
var inst_31260 = (inst_31258) || (inst_31259);
var state_31320__$1 = state_31320;
if(cljs.core.truth_(inst_31260)){
var statearr_31340_31398 = state_31320__$1;
(statearr_31340_31398[(1)] = (16));

} else {
var statearr_31341_31399 = state_31320__$1;
(statearr_31341_31399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (22))){
var inst_31279 = (state_31320[(14)]);
var inst_31280 = (state_31320[(10)]);
var inst_31278 = (state_31320[(2)]);
var inst_31279__$1 = cljs.core.nth.call(null,inst_31278,(0),null);
var inst_31280__$1 = cljs.core.nth.call(null,inst_31278,(1),null);
var inst_31281 = (inst_31279__$1 == null);
var inst_31282 = cljs.core._EQ_.call(null,inst_31280__$1,change);
var inst_31283 = (inst_31281) || (inst_31282);
var state_31320__$1 = (function (){var statearr_31342 = state_31320;
(statearr_31342[(14)] = inst_31279__$1);

(statearr_31342[(10)] = inst_31280__$1);

return statearr_31342;
})();
if(cljs.core.truth_(inst_31283)){
var statearr_31343_31400 = state_31320__$1;
(statearr_31343_31400[(1)] = (23));

} else {
var statearr_31344_31401 = state_31320__$1;
(statearr_31344_31401[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (36))){
var inst_31272 = (state_31320[(12)]);
var inst_31250 = inst_31272;
var state_31320__$1 = (function (){var statearr_31345 = state_31320;
(statearr_31345[(7)] = inst_31250);

return statearr_31345;
})();
var statearr_31346_31402 = state_31320__$1;
(statearr_31346_31402[(2)] = null);

(statearr_31346_31402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (29))){
var inst_31294 = (state_31320[(9)]);
var state_31320__$1 = state_31320;
var statearr_31347_31403 = state_31320__$1;
(statearr_31347_31403[(2)] = inst_31294);

(statearr_31347_31403[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (6))){
var state_31320__$1 = state_31320;
var statearr_31348_31404 = state_31320__$1;
(statearr_31348_31404[(2)] = false);

(statearr_31348_31404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (28))){
var inst_31290 = (state_31320[(2)]);
var inst_31291 = calc_state.call(null);
var inst_31250 = inst_31291;
var state_31320__$1 = (function (){var statearr_31349 = state_31320;
(statearr_31349[(15)] = inst_31290);

(statearr_31349[(7)] = inst_31250);

return statearr_31349;
})();
var statearr_31350_31405 = state_31320__$1;
(statearr_31350_31405[(2)] = null);

(statearr_31350_31405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (25))){
var inst_31316 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
var statearr_31351_31406 = state_31320__$1;
(statearr_31351_31406[(2)] = inst_31316);

(statearr_31351_31406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (34))){
var inst_31314 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
var statearr_31352_31407 = state_31320__$1;
(statearr_31352_31407[(2)] = inst_31314);

(statearr_31352_31407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (17))){
var state_31320__$1 = state_31320;
var statearr_31353_31408 = state_31320__$1;
(statearr_31353_31408[(2)] = false);

(statearr_31353_31408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (3))){
var state_31320__$1 = state_31320;
var statearr_31354_31409 = state_31320__$1;
(statearr_31354_31409[(2)] = false);

(statearr_31354_31409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (12))){
var inst_31318 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31320__$1,inst_31318);
} else {
if((state_val_31321 === (2))){
var inst_31226 = (state_31320[(8)]);
var inst_31231 = inst_31226.cljs$lang$protocol_mask$partition0$;
var inst_31232 = (inst_31231 & (64));
var inst_31233 = inst_31226.cljs$core$ISeq$;
var inst_31234 = (inst_31232) || (inst_31233);
var state_31320__$1 = state_31320;
if(cljs.core.truth_(inst_31234)){
var statearr_31355_31410 = state_31320__$1;
(statearr_31355_31410[(1)] = (5));

} else {
var statearr_31356_31411 = state_31320__$1;
(statearr_31356_31411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (23))){
var inst_31279 = (state_31320[(14)]);
var inst_31285 = (inst_31279 == null);
var state_31320__$1 = state_31320;
if(cljs.core.truth_(inst_31285)){
var statearr_31357_31412 = state_31320__$1;
(statearr_31357_31412[(1)] = (26));

} else {
var statearr_31358_31413 = state_31320__$1;
(statearr_31358_31413[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (35))){
var inst_31305 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
if(cljs.core.truth_(inst_31305)){
var statearr_31359_31414 = state_31320__$1;
(statearr_31359_31414[(1)] = (36));

} else {
var statearr_31360_31415 = state_31320__$1;
(statearr_31360_31415[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (19))){
var inst_31250 = (state_31320[(7)]);
var inst_31269 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31250);
var state_31320__$1 = state_31320;
var statearr_31361_31416 = state_31320__$1;
(statearr_31361_31416[(2)] = inst_31269);

(statearr_31361_31416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (11))){
var inst_31250 = (state_31320[(7)]);
var inst_31254 = (inst_31250 == null);
var inst_31255 = cljs.core.not.call(null,inst_31254);
var state_31320__$1 = state_31320;
if(inst_31255){
var statearr_31362_31417 = state_31320__$1;
(statearr_31362_31417[(1)] = (13));

} else {
var statearr_31363_31418 = state_31320__$1;
(statearr_31363_31418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (9))){
var inst_31226 = (state_31320[(8)]);
var state_31320__$1 = state_31320;
var statearr_31364_31419 = state_31320__$1;
(statearr_31364_31419[(2)] = inst_31226);

(statearr_31364_31419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (5))){
var state_31320__$1 = state_31320;
var statearr_31365_31420 = state_31320__$1;
(statearr_31365_31420[(2)] = true);

(statearr_31365_31420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (14))){
var state_31320__$1 = state_31320;
var statearr_31366_31421 = state_31320__$1;
(statearr_31366_31421[(2)] = false);

(statearr_31366_31421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (26))){
var inst_31280 = (state_31320[(10)]);
var inst_31287 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31280);
var state_31320__$1 = state_31320;
var statearr_31367_31422 = state_31320__$1;
(statearr_31367_31422[(2)] = inst_31287);

(statearr_31367_31422[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (16))){
var state_31320__$1 = state_31320;
var statearr_31368_31423 = state_31320__$1;
(statearr_31368_31423[(2)] = true);

(statearr_31368_31423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (38))){
var inst_31310 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
var statearr_31369_31424 = state_31320__$1;
(statearr_31369_31424[(2)] = inst_31310);

(statearr_31369_31424[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (30))){
var inst_31280 = (state_31320[(10)]);
var inst_31274 = (state_31320[(13)]);
var inst_31273 = (state_31320[(11)]);
var inst_31297 = cljs.core.empty_QMARK_.call(null,inst_31273);
var inst_31298 = inst_31274.call(null,inst_31280);
var inst_31299 = cljs.core.not.call(null,inst_31298);
var inst_31300 = (inst_31297) && (inst_31299);
var state_31320__$1 = state_31320;
var statearr_31370_31425 = state_31320__$1;
(statearr_31370_31425[(2)] = inst_31300);

(statearr_31370_31425[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (10))){
var inst_31226 = (state_31320[(8)]);
var inst_31246 = (state_31320[(2)]);
var inst_31247 = cljs.core.get.call(null,inst_31246,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31248 = cljs.core.get.call(null,inst_31246,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31249 = cljs.core.get.call(null,inst_31246,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31250 = inst_31226;
var state_31320__$1 = (function (){var statearr_31371 = state_31320;
(statearr_31371[(16)] = inst_31247);

(statearr_31371[(17)] = inst_31249);

(statearr_31371[(18)] = inst_31248);

(statearr_31371[(7)] = inst_31250);

return statearr_31371;
})();
var statearr_31372_31426 = state_31320__$1;
(statearr_31372_31426[(2)] = null);

(statearr_31372_31426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (18))){
var inst_31264 = (state_31320[(2)]);
var state_31320__$1 = state_31320;
var statearr_31373_31427 = state_31320__$1;
(statearr_31373_31427[(2)] = inst_31264);

(statearr_31373_31427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (37))){
var state_31320__$1 = state_31320;
var statearr_31374_31428 = state_31320__$1;
(statearr_31374_31428[(2)] = null);

(statearr_31374_31428[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31321 === (8))){
var inst_31226 = (state_31320[(8)]);
var inst_31243 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31226);
var state_31320__$1 = state_31320;
var statearr_31375_31429 = state_31320__$1;
(statearr_31375_31429[(2)] = inst_31243);

(statearr_31375_31429[(1)] = (10));


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
});})(c__19366__auto___31383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19345__auto__,c__19366__auto___31383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19346__auto__ = null;
var cljs$core$async$mix_$_state_machine__19346__auto____0 = (function (){
var statearr_31379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31379[(0)] = cljs$core$async$mix_$_state_machine__19346__auto__);

(statearr_31379[(1)] = (1));

return statearr_31379;
});
var cljs$core$async$mix_$_state_machine__19346__auto____1 = (function (state_31320){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_31320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e31380){if((e31380 instanceof Object)){
var ex__19349__auto__ = e31380;
var statearr_31381_31430 = state_31320;
(statearr_31381_31430[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31431 = state_31320;
state_31320 = G__31431;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19346__auto__ = function(state_31320){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19346__auto____1.call(this,state_31320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19346__auto____0;
cljs$core$async$mix_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19346__auto____1;
return cljs$core$async$mix_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___31383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19368__auto__ = (function (){var statearr_31382 = f__19367__auto__.call(null);
(statearr_31382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___31383);

return statearr_31382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___31383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args31432 = [];
var len__17402__auto___31435 = arguments.length;
var i__17403__auto___31436 = (0);
while(true){
if((i__17403__auto___31436 < len__17402__auto___31435)){
args31432.push((arguments[i__17403__auto___31436]));

var G__31437 = (i__17403__auto___31436 + (1));
i__17403__auto___31436 = G__31437;
continue;
} else {
}
break;
}

var G__31434 = args31432.length;
switch (G__31434) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31432.length)].join('')));

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
var args31440 = [];
var len__17402__auto___31565 = arguments.length;
var i__17403__auto___31566 = (0);
while(true){
if((i__17403__auto___31566 < len__17402__auto___31565)){
args31440.push((arguments[i__17403__auto___31566]));

var G__31567 = (i__17403__auto___31566 + (1));
i__17403__auto___31566 = G__31567;
continue;
} else {
}
break;
}

var G__31442 = args31440.length;
switch (G__31442) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31440.length)].join('')));

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
return (function (p1__31439_SHARP_){
if(cljs.core.truth_(p1__31439_SHARP_.call(null,topic))){
return p1__31439_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31439_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16344__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31443 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31444){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31444 = meta31444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31445,meta31444__$1){
var self__ = this;
var _31445__$1 = this;
return (new cljs.core.async.t_cljs$core$async31443(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31444__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31445){
var self__ = this;
var _31445__$1 = this;
return self__.meta31444;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31443.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31443.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31443.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31443.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31443.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31443.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31444","meta31444",-2101466852,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31443";

cljs.core.async.t_cljs$core$async31443.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async31443");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31443 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31444){
return (new cljs.core.async.t_cljs$core$async31443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31444));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31443(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19366__auto___31569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___31569,mults,ensure_mult,p){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___31569,mults,ensure_mult,p){
return (function (state_31517){
var state_val_31518 = (state_31517[(1)]);
if((state_val_31518 === (7))){
var inst_31513 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31519_31570 = state_31517__$1;
(statearr_31519_31570[(2)] = inst_31513);

(statearr_31519_31570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (20))){
var state_31517__$1 = state_31517;
var statearr_31520_31571 = state_31517__$1;
(statearr_31520_31571[(2)] = null);

(statearr_31520_31571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (1))){
var state_31517__$1 = state_31517;
var statearr_31521_31572 = state_31517__$1;
(statearr_31521_31572[(2)] = null);

(statearr_31521_31572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (24))){
var inst_31496 = (state_31517[(7)]);
var inst_31505 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31496);
var state_31517__$1 = state_31517;
var statearr_31522_31573 = state_31517__$1;
(statearr_31522_31573[(2)] = inst_31505);

(statearr_31522_31573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (4))){
var inst_31448 = (state_31517[(8)]);
var inst_31448__$1 = (state_31517[(2)]);
var inst_31449 = (inst_31448__$1 == null);
var state_31517__$1 = (function (){var statearr_31523 = state_31517;
(statearr_31523[(8)] = inst_31448__$1);

return statearr_31523;
})();
if(cljs.core.truth_(inst_31449)){
var statearr_31524_31574 = state_31517__$1;
(statearr_31524_31574[(1)] = (5));

} else {
var statearr_31525_31575 = state_31517__$1;
(statearr_31525_31575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (15))){
var inst_31490 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31526_31576 = state_31517__$1;
(statearr_31526_31576[(2)] = inst_31490);

(statearr_31526_31576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (21))){
var inst_31510 = (state_31517[(2)]);
var state_31517__$1 = (function (){var statearr_31527 = state_31517;
(statearr_31527[(9)] = inst_31510);

return statearr_31527;
})();
var statearr_31528_31577 = state_31517__$1;
(statearr_31528_31577[(2)] = null);

(statearr_31528_31577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (13))){
var inst_31472 = (state_31517[(10)]);
var inst_31474 = cljs.core.chunked_seq_QMARK_.call(null,inst_31472);
var state_31517__$1 = state_31517;
if(inst_31474){
var statearr_31529_31578 = state_31517__$1;
(statearr_31529_31578[(1)] = (16));

} else {
var statearr_31530_31579 = state_31517__$1;
(statearr_31530_31579[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (22))){
var inst_31502 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
if(cljs.core.truth_(inst_31502)){
var statearr_31531_31580 = state_31517__$1;
(statearr_31531_31580[(1)] = (23));

} else {
var statearr_31532_31581 = state_31517__$1;
(statearr_31532_31581[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (6))){
var inst_31448 = (state_31517[(8)]);
var inst_31496 = (state_31517[(7)]);
var inst_31498 = (state_31517[(11)]);
var inst_31496__$1 = topic_fn.call(null,inst_31448);
var inst_31497 = cljs.core.deref.call(null,mults);
var inst_31498__$1 = cljs.core.get.call(null,inst_31497,inst_31496__$1);
var state_31517__$1 = (function (){var statearr_31533 = state_31517;
(statearr_31533[(7)] = inst_31496__$1);

(statearr_31533[(11)] = inst_31498__$1);

return statearr_31533;
})();
if(cljs.core.truth_(inst_31498__$1)){
var statearr_31534_31582 = state_31517__$1;
(statearr_31534_31582[(1)] = (19));

} else {
var statearr_31535_31583 = state_31517__$1;
(statearr_31535_31583[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (25))){
var inst_31507 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31536_31584 = state_31517__$1;
(statearr_31536_31584[(2)] = inst_31507);

(statearr_31536_31584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (17))){
var inst_31472 = (state_31517[(10)]);
var inst_31481 = cljs.core.first.call(null,inst_31472);
var inst_31482 = cljs.core.async.muxch_STAR_.call(null,inst_31481);
var inst_31483 = cljs.core.async.close_BANG_.call(null,inst_31482);
var inst_31484 = cljs.core.next.call(null,inst_31472);
var inst_31458 = inst_31484;
var inst_31459 = null;
var inst_31460 = (0);
var inst_31461 = (0);
var state_31517__$1 = (function (){var statearr_31537 = state_31517;
(statearr_31537[(12)] = inst_31461);

(statearr_31537[(13)] = inst_31458);

(statearr_31537[(14)] = inst_31483);

(statearr_31537[(15)] = inst_31459);

(statearr_31537[(16)] = inst_31460);

return statearr_31537;
})();
var statearr_31538_31585 = state_31517__$1;
(statearr_31538_31585[(2)] = null);

(statearr_31538_31585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (3))){
var inst_31515 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31517__$1,inst_31515);
} else {
if((state_val_31518 === (12))){
var inst_31492 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31539_31586 = state_31517__$1;
(statearr_31539_31586[(2)] = inst_31492);

(statearr_31539_31586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (2))){
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31517__$1,(4),ch);
} else {
if((state_val_31518 === (23))){
var state_31517__$1 = state_31517;
var statearr_31540_31587 = state_31517__$1;
(statearr_31540_31587[(2)] = null);

(statearr_31540_31587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (19))){
var inst_31448 = (state_31517[(8)]);
var inst_31498 = (state_31517[(11)]);
var inst_31500 = cljs.core.async.muxch_STAR_.call(null,inst_31498);
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31517__$1,(22),inst_31500,inst_31448);
} else {
if((state_val_31518 === (11))){
var inst_31458 = (state_31517[(13)]);
var inst_31472 = (state_31517[(10)]);
var inst_31472__$1 = cljs.core.seq.call(null,inst_31458);
var state_31517__$1 = (function (){var statearr_31541 = state_31517;
(statearr_31541[(10)] = inst_31472__$1);

return statearr_31541;
})();
if(inst_31472__$1){
var statearr_31542_31588 = state_31517__$1;
(statearr_31542_31588[(1)] = (13));

} else {
var statearr_31543_31589 = state_31517__$1;
(statearr_31543_31589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (9))){
var inst_31494 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31544_31590 = state_31517__$1;
(statearr_31544_31590[(2)] = inst_31494);

(statearr_31544_31590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (5))){
var inst_31455 = cljs.core.deref.call(null,mults);
var inst_31456 = cljs.core.vals.call(null,inst_31455);
var inst_31457 = cljs.core.seq.call(null,inst_31456);
var inst_31458 = inst_31457;
var inst_31459 = null;
var inst_31460 = (0);
var inst_31461 = (0);
var state_31517__$1 = (function (){var statearr_31545 = state_31517;
(statearr_31545[(12)] = inst_31461);

(statearr_31545[(13)] = inst_31458);

(statearr_31545[(15)] = inst_31459);

(statearr_31545[(16)] = inst_31460);

return statearr_31545;
})();
var statearr_31546_31591 = state_31517__$1;
(statearr_31546_31591[(2)] = null);

(statearr_31546_31591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (14))){
var state_31517__$1 = state_31517;
var statearr_31550_31592 = state_31517__$1;
(statearr_31550_31592[(2)] = null);

(statearr_31550_31592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (16))){
var inst_31472 = (state_31517[(10)]);
var inst_31476 = cljs.core.chunk_first.call(null,inst_31472);
var inst_31477 = cljs.core.chunk_rest.call(null,inst_31472);
var inst_31478 = cljs.core.count.call(null,inst_31476);
var inst_31458 = inst_31477;
var inst_31459 = inst_31476;
var inst_31460 = inst_31478;
var inst_31461 = (0);
var state_31517__$1 = (function (){var statearr_31551 = state_31517;
(statearr_31551[(12)] = inst_31461);

(statearr_31551[(13)] = inst_31458);

(statearr_31551[(15)] = inst_31459);

(statearr_31551[(16)] = inst_31460);

return statearr_31551;
})();
var statearr_31552_31593 = state_31517__$1;
(statearr_31552_31593[(2)] = null);

(statearr_31552_31593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (10))){
var inst_31461 = (state_31517[(12)]);
var inst_31458 = (state_31517[(13)]);
var inst_31459 = (state_31517[(15)]);
var inst_31460 = (state_31517[(16)]);
var inst_31466 = cljs.core._nth.call(null,inst_31459,inst_31461);
var inst_31467 = cljs.core.async.muxch_STAR_.call(null,inst_31466);
var inst_31468 = cljs.core.async.close_BANG_.call(null,inst_31467);
var inst_31469 = (inst_31461 + (1));
var tmp31547 = inst_31458;
var tmp31548 = inst_31459;
var tmp31549 = inst_31460;
var inst_31458__$1 = tmp31547;
var inst_31459__$1 = tmp31548;
var inst_31460__$1 = tmp31549;
var inst_31461__$1 = inst_31469;
var state_31517__$1 = (function (){var statearr_31553 = state_31517;
(statearr_31553[(12)] = inst_31461__$1);

(statearr_31553[(17)] = inst_31468);

(statearr_31553[(13)] = inst_31458__$1);

(statearr_31553[(15)] = inst_31459__$1);

(statearr_31553[(16)] = inst_31460__$1);

return statearr_31553;
})();
var statearr_31554_31594 = state_31517__$1;
(statearr_31554_31594[(2)] = null);

(statearr_31554_31594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (18))){
var inst_31487 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31555_31595 = state_31517__$1;
(statearr_31555_31595[(2)] = inst_31487);

(statearr_31555_31595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (8))){
var inst_31461 = (state_31517[(12)]);
var inst_31460 = (state_31517[(16)]);
var inst_31463 = (inst_31461 < inst_31460);
var inst_31464 = inst_31463;
var state_31517__$1 = state_31517;
if(cljs.core.truth_(inst_31464)){
var statearr_31556_31596 = state_31517__$1;
(statearr_31556_31596[(1)] = (10));

} else {
var statearr_31557_31597 = state_31517__$1;
(statearr_31557_31597[(1)] = (11));

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
});})(c__19366__auto___31569,mults,ensure_mult,p))
;
return ((function (switch__19345__auto__,c__19366__auto___31569,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_31561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31561[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_31561[(1)] = (1));

return statearr_31561;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_31517){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_31517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e31562){if((e31562 instanceof Object)){
var ex__19349__auto__ = e31562;
var statearr_31563_31598 = state_31517;
(statearr_31563_31598[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31599 = state_31517;
state_31517 = G__31599;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_31517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_31517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___31569,mults,ensure_mult,p))
})();
var state__19368__auto__ = (function (){var statearr_31564 = f__19367__auto__.call(null);
(statearr_31564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___31569);

return statearr_31564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___31569,mults,ensure_mult,p))
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
var args31600 = [];
var len__17402__auto___31603 = arguments.length;
var i__17403__auto___31604 = (0);
while(true){
if((i__17403__auto___31604 < len__17402__auto___31603)){
args31600.push((arguments[i__17403__auto___31604]));

var G__31605 = (i__17403__auto___31604 + (1));
i__17403__auto___31604 = G__31605;
continue;
} else {
}
break;
}

var G__31602 = args31600.length;
switch (G__31602) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31600.length)].join('')));

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
var args31607 = [];
var len__17402__auto___31610 = arguments.length;
var i__17403__auto___31611 = (0);
while(true){
if((i__17403__auto___31611 < len__17402__auto___31610)){
args31607.push((arguments[i__17403__auto___31611]));

var G__31612 = (i__17403__auto___31611 + (1));
i__17403__auto___31611 = G__31612;
continue;
} else {
}
break;
}

var G__31609 = args31607.length;
switch (G__31609) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31607.length)].join('')));

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
var args31614 = [];
var len__17402__auto___31685 = arguments.length;
var i__17403__auto___31686 = (0);
while(true){
if((i__17403__auto___31686 < len__17402__auto___31685)){
args31614.push((arguments[i__17403__auto___31686]));

var G__31687 = (i__17403__auto___31686 + (1));
i__17403__auto___31686 = G__31687;
continue;
} else {
}
break;
}

var G__31616 = args31614.length;
switch (G__31616) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31614.length)].join('')));

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
var c__19366__auto___31689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___31689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___31689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31655){
var state_val_31656 = (state_31655[(1)]);
if((state_val_31656 === (7))){
var state_31655__$1 = state_31655;
var statearr_31657_31690 = state_31655__$1;
(statearr_31657_31690[(2)] = null);

(statearr_31657_31690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (1))){
var state_31655__$1 = state_31655;
var statearr_31658_31691 = state_31655__$1;
(statearr_31658_31691[(2)] = null);

(statearr_31658_31691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (4))){
var inst_31619 = (state_31655[(7)]);
var inst_31621 = (inst_31619 < cnt);
var state_31655__$1 = state_31655;
if(cljs.core.truth_(inst_31621)){
var statearr_31659_31692 = state_31655__$1;
(statearr_31659_31692[(1)] = (6));

} else {
var statearr_31660_31693 = state_31655__$1;
(statearr_31660_31693[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (15))){
var inst_31651 = (state_31655[(2)]);
var state_31655__$1 = state_31655;
var statearr_31661_31694 = state_31655__$1;
(statearr_31661_31694[(2)] = inst_31651);

(statearr_31661_31694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (13))){
var inst_31644 = cljs.core.async.close_BANG_.call(null,out);
var state_31655__$1 = state_31655;
var statearr_31662_31695 = state_31655__$1;
(statearr_31662_31695[(2)] = inst_31644);

(statearr_31662_31695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (6))){
var state_31655__$1 = state_31655;
var statearr_31663_31696 = state_31655__$1;
(statearr_31663_31696[(2)] = null);

(statearr_31663_31696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (3))){
var inst_31653 = (state_31655[(2)]);
var state_31655__$1 = state_31655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31655__$1,inst_31653);
} else {
if((state_val_31656 === (12))){
var inst_31641 = (state_31655[(8)]);
var inst_31641__$1 = (state_31655[(2)]);
var inst_31642 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31641__$1);
var state_31655__$1 = (function (){var statearr_31664 = state_31655;
(statearr_31664[(8)] = inst_31641__$1);

return statearr_31664;
})();
if(cljs.core.truth_(inst_31642)){
var statearr_31665_31697 = state_31655__$1;
(statearr_31665_31697[(1)] = (13));

} else {
var statearr_31666_31698 = state_31655__$1;
(statearr_31666_31698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (2))){
var inst_31618 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31619 = (0);
var state_31655__$1 = (function (){var statearr_31667 = state_31655;
(statearr_31667[(7)] = inst_31619);

(statearr_31667[(9)] = inst_31618);

return statearr_31667;
})();
var statearr_31668_31699 = state_31655__$1;
(statearr_31668_31699[(2)] = null);

(statearr_31668_31699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (11))){
var inst_31619 = (state_31655[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31655,(10),Object,null,(9));
var inst_31628 = chs__$1.call(null,inst_31619);
var inst_31629 = done.call(null,inst_31619);
var inst_31630 = cljs.core.async.take_BANG_.call(null,inst_31628,inst_31629);
var state_31655__$1 = state_31655;
var statearr_31669_31700 = state_31655__$1;
(statearr_31669_31700[(2)] = inst_31630);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (9))){
var inst_31619 = (state_31655[(7)]);
var inst_31632 = (state_31655[(2)]);
var inst_31633 = (inst_31619 + (1));
var inst_31619__$1 = inst_31633;
var state_31655__$1 = (function (){var statearr_31670 = state_31655;
(statearr_31670[(10)] = inst_31632);

(statearr_31670[(7)] = inst_31619__$1);

return statearr_31670;
})();
var statearr_31671_31701 = state_31655__$1;
(statearr_31671_31701[(2)] = null);

(statearr_31671_31701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (5))){
var inst_31639 = (state_31655[(2)]);
var state_31655__$1 = (function (){var statearr_31672 = state_31655;
(statearr_31672[(11)] = inst_31639);

return statearr_31672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31655__$1,(12),dchan);
} else {
if((state_val_31656 === (14))){
var inst_31641 = (state_31655[(8)]);
var inst_31646 = cljs.core.apply.call(null,f,inst_31641);
var state_31655__$1 = state_31655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31655__$1,(16),out,inst_31646);
} else {
if((state_val_31656 === (16))){
var inst_31648 = (state_31655[(2)]);
var state_31655__$1 = (function (){var statearr_31673 = state_31655;
(statearr_31673[(12)] = inst_31648);

return statearr_31673;
})();
var statearr_31674_31702 = state_31655__$1;
(statearr_31674_31702[(2)] = null);

(statearr_31674_31702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (10))){
var inst_31623 = (state_31655[(2)]);
var inst_31624 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31655__$1 = (function (){var statearr_31675 = state_31655;
(statearr_31675[(13)] = inst_31623);

return statearr_31675;
})();
var statearr_31676_31703 = state_31655__$1;
(statearr_31676_31703[(2)] = inst_31624);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31656 === (8))){
var inst_31637 = (state_31655[(2)]);
var state_31655__$1 = state_31655;
var statearr_31677_31704 = state_31655__$1;
(statearr_31677_31704[(2)] = inst_31637);

(statearr_31677_31704[(1)] = (5));


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
});})(c__19366__auto___31689,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19345__auto__,c__19366__auto___31689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_31681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31681[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_31681[(1)] = (1));

return statearr_31681;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_31655){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_31655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e31682){if((e31682 instanceof Object)){
var ex__19349__auto__ = e31682;
var statearr_31683_31705 = state_31655;
(statearr_31683_31705[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31706 = state_31655;
state_31655 = G__31706;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_31655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_31655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___31689,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19368__auto__ = (function (){var statearr_31684 = f__19367__auto__.call(null);
(statearr_31684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___31689);

return statearr_31684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___31689,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31708 = [];
var len__17402__auto___31764 = arguments.length;
var i__17403__auto___31765 = (0);
while(true){
if((i__17403__auto___31765 < len__17402__auto___31764)){
args31708.push((arguments[i__17403__auto___31765]));

var G__31766 = (i__17403__auto___31765 + (1));
i__17403__auto___31765 = G__31766;
continue;
} else {
}
break;
}

var G__31710 = args31708.length;
switch (G__31710) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31708.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___31768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___31768,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___31768,out){
return (function (state_31740){
var state_val_31741 = (state_31740[(1)]);
if((state_val_31741 === (7))){
var inst_31720 = (state_31740[(7)]);
var inst_31719 = (state_31740[(8)]);
var inst_31719__$1 = (state_31740[(2)]);
var inst_31720__$1 = cljs.core.nth.call(null,inst_31719__$1,(0),null);
var inst_31721 = cljs.core.nth.call(null,inst_31719__$1,(1),null);
var inst_31722 = (inst_31720__$1 == null);
var state_31740__$1 = (function (){var statearr_31742 = state_31740;
(statearr_31742[(7)] = inst_31720__$1);

(statearr_31742[(9)] = inst_31721);

(statearr_31742[(8)] = inst_31719__$1);

return statearr_31742;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31743_31769 = state_31740__$1;
(statearr_31743_31769[(1)] = (8));

} else {
var statearr_31744_31770 = state_31740__$1;
(statearr_31744_31770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (1))){
var inst_31711 = cljs.core.vec.call(null,chs);
var inst_31712 = inst_31711;
var state_31740__$1 = (function (){var statearr_31745 = state_31740;
(statearr_31745[(10)] = inst_31712);

return statearr_31745;
})();
var statearr_31746_31771 = state_31740__$1;
(statearr_31746_31771[(2)] = null);

(statearr_31746_31771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (4))){
var inst_31712 = (state_31740[(10)]);
var state_31740__$1 = state_31740;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31740__$1,(7),inst_31712);
} else {
if((state_val_31741 === (6))){
var inst_31736 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
var statearr_31747_31772 = state_31740__$1;
(statearr_31747_31772[(2)] = inst_31736);

(statearr_31747_31772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (3))){
var inst_31738 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31740__$1,inst_31738);
} else {
if((state_val_31741 === (2))){
var inst_31712 = (state_31740[(10)]);
var inst_31714 = cljs.core.count.call(null,inst_31712);
var inst_31715 = (inst_31714 > (0));
var state_31740__$1 = state_31740;
if(cljs.core.truth_(inst_31715)){
var statearr_31749_31773 = state_31740__$1;
(statearr_31749_31773[(1)] = (4));

} else {
var statearr_31750_31774 = state_31740__$1;
(statearr_31750_31774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (11))){
var inst_31712 = (state_31740[(10)]);
var inst_31729 = (state_31740[(2)]);
var tmp31748 = inst_31712;
var inst_31712__$1 = tmp31748;
var state_31740__$1 = (function (){var statearr_31751 = state_31740;
(statearr_31751[(11)] = inst_31729);

(statearr_31751[(10)] = inst_31712__$1);

return statearr_31751;
})();
var statearr_31752_31775 = state_31740__$1;
(statearr_31752_31775[(2)] = null);

(statearr_31752_31775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (9))){
var inst_31720 = (state_31740[(7)]);
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31740__$1,(11),out,inst_31720);
} else {
if((state_val_31741 === (5))){
var inst_31734 = cljs.core.async.close_BANG_.call(null,out);
var state_31740__$1 = state_31740;
var statearr_31753_31776 = state_31740__$1;
(statearr_31753_31776[(2)] = inst_31734);

(statearr_31753_31776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (10))){
var inst_31732 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
var statearr_31754_31777 = state_31740__$1;
(statearr_31754_31777[(2)] = inst_31732);

(statearr_31754_31777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (8))){
var inst_31720 = (state_31740[(7)]);
var inst_31721 = (state_31740[(9)]);
var inst_31712 = (state_31740[(10)]);
var inst_31719 = (state_31740[(8)]);
var inst_31724 = (function (){var cs = inst_31712;
var vec__31717 = inst_31719;
var v = inst_31720;
var c = inst_31721;
return ((function (cs,vec__31717,v,c,inst_31720,inst_31721,inst_31712,inst_31719,state_val_31741,c__19366__auto___31768,out){
return (function (p1__31707_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31707_SHARP_);
});
;})(cs,vec__31717,v,c,inst_31720,inst_31721,inst_31712,inst_31719,state_val_31741,c__19366__auto___31768,out))
})();
var inst_31725 = cljs.core.filterv.call(null,inst_31724,inst_31712);
var inst_31712__$1 = inst_31725;
var state_31740__$1 = (function (){var statearr_31755 = state_31740;
(statearr_31755[(10)] = inst_31712__$1);

return statearr_31755;
})();
var statearr_31756_31778 = state_31740__$1;
(statearr_31756_31778[(2)] = null);

(statearr_31756_31778[(1)] = (2));


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
});})(c__19366__auto___31768,out))
;
return ((function (switch__19345__auto__,c__19366__auto___31768,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_31760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31760[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_31760[(1)] = (1));

return statearr_31760;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_31740){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_31740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e31761){if((e31761 instanceof Object)){
var ex__19349__auto__ = e31761;
var statearr_31762_31779 = state_31740;
(statearr_31762_31779[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31780 = state_31740;
state_31740 = G__31780;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_31740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_31740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___31768,out))
})();
var state__19368__auto__ = (function (){var statearr_31763 = f__19367__auto__.call(null);
(statearr_31763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___31768);

return statearr_31763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___31768,out))
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
var args31781 = [];
var len__17402__auto___31830 = arguments.length;
var i__17403__auto___31831 = (0);
while(true){
if((i__17403__auto___31831 < len__17402__auto___31830)){
args31781.push((arguments[i__17403__auto___31831]));

var G__31832 = (i__17403__auto___31831 + (1));
i__17403__auto___31831 = G__31832;
continue;
} else {
}
break;
}

var G__31783 = args31781.length;
switch (G__31783) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31781.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___31834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___31834,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___31834,out){
return (function (state_31807){
var state_val_31808 = (state_31807[(1)]);
if((state_val_31808 === (7))){
var inst_31789 = (state_31807[(7)]);
var inst_31789__$1 = (state_31807[(2)]);
var inst_31790 = (inst_31789__$1 == null);
var inst_31791 = cljs.core.not.call(null,inst_31790);
var state_31807__$1 = (function (){var statearr_31809 = state_31807;
(statearr_31809[(7)] = inst_31789__$1);

return statearr_31809;
})();
if(inst_31791){
var statearr_31810_31835 = state_31807__$1;
(statearr_31810_31835[(1)] = (8));

} else {
var statearr_31811_31836 = state_31807__$1;
(statearr_31811_31836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (1))){
var inst_31784 = (0);
var state_31807__$1 = (function (){var statearr_31812 = state_31807;
(statearr_31812[(8)] = inst_31784);

return statearr_31812;
})();
var statearr_31813_31837 = state_31807__$1;
(statearr_31813_31837[(2)] = null);

(statearr_31813_31837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (4))){
var state_31807__$1 = state_31807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31807__$1,(7),ch);
} else {
if((state_val_31808 === (6))){
var inst_31802 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31814_31838 = state_31807__$1;
(statearr_31814_31838[(2)] = inst_31802);

(statearr_31814_31838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (3))){
var inst_31804 = (state_31807[(2)]);
var inst_31805 = cljs.core.async.close_BANG_.call(null,out);
var state_31807__$1 = (function (){var statearr_31815 = state_31807;
(statearr_31815[(9)] = inst_31804);

return statearr_31815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31807__$1,inst_31805);
} else {
if((state_val_31808 === (2))){
var inst_31784 = (state_31807[(8)]);
var inst_31786 = (inst_31784 < n);
var state_31807__$1 = state_31807;
if(cljs.core.truth_(inst_31786)){
var statearr_31816_31839 = state_31807__$1;
(statearr_31816_31839[(1)] = (4));

} else {
var statearr_31817_31840 = state_31807__$1;
(statearr_31817_31840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (11))){
var inst_31784 = (state_31807[(8)]);
var inst_31794 = (state_31807[(2)]);
var inst_31795 = (inst_31784 + (1));
var inst_31784__$1 = inst_31795;
var state_31807__$1 = (function (){var statearr_31818 = state_31807;
(statearr_31818[(10)] = inst_31794);

(statearr_31818[(8)] = inst_31784__$1);

return statearr_31818;
})();
var statearr_31819_31841 = state_31807__$1;
(statearr_31819_31841[(2)] = null);

(statearr_31819_31841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (9))){
var state_31807__$1 = state_31807;
var statearr_31820_31842 = state_31807__$1;
(statearr_31820_31842[(2)] = null);

(statearr_31820_31842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (5))){
var state_31807__$1 = state_31807;
var statearr_31821_31843 = state_31807__$1;
(statearr_31821_31843[(2)] = null);

(statearr_31821_31843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (10))){
var inst_31799 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31822_31844 = state_31807__$1;
(statearr_31822_31844[(2)] = inst_31799);

(statearr_31822_31844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31808 === (8))){
var inst_31789 = (state_31807[(7)]);
var state_31807__$1 = state_31807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31807__$1,(11),out,inst_31789);
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
});})(c__19366__auto___31834,out))
;
return ((function (switch__19345__auto__,c__19366__auto___31834,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_31826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31826[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_31826[(1)] = (1));

return statearr_31826;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_31807){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_31807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e31827){if((e31827 instanceof Object)){
var ex__19349__auto__ = e31827;
var statearr_31828_31845 = state_31807;
(statearr_31828_31845[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31846 = state_31807;
state_31807 = G__31846;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_31807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_31807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___31834,out))
})();
var state__19368__auto__ = (function (){var statearr_31829 = f__19367__auto__.call(null);
(statearr_31829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___31834);

return statearr_31829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___31834,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31854 = (function (map_LT_,f,ch,meta31855){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31855 = meta31855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31856,meta31855__$1){
var self__ = this;
var _31856__$1 = this;
return (new cljs.core.async.t_cljs$core$async31854(self__.map_LT_,self__.f,self__.ch,meta31855__$1));
});

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31856){
var self__ = this;
var _31856__$1 = this;
return self__.meta31855;
});

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31857 = (function (map_LT_,f,ch,meta31855,_,fn1,meta31858){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31855 = meta31855;
this._ = _;
this.fn1 = fn1;
this.meta31858 = meta31858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31859,meta31858__$1){
var self__ = this;
var _31859__$1 = this;
return (new cljs.core.async.t_cljs$core$async31857(self__.map_LT_,self__.f,self__.ch,self__.meta31855,self__._,self__.fn1,meta31858__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31859){
var self__ = this;
var _31859__$1 = this;
return self__.meta31858;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31847_SHARP_){
return f1.call(null,(((p1__31847_SHARP_ == null))?null:self__.f.call(null,p1__31847_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31857.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31855","meta31855",684699359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31854","cljs.core.async/t_cljs$core$async31854",1713401837,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31858","meta31858",805916421,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31857";

cljs.core.async.t_cljs$core$async31857.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async31857");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31857 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31857(map_LT___$1,f__$1,ch__$1,meta31855__$1,___$2,fn1__$1,meta31858){
return (new cljs.core.async.t_cljs$core$async31857(map_LT___$1,f__$1,ch__$1,meta31855__$1,___$2,fn1__$1,meta31858));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31857(self__.map_LT_,self__.f,self__.ch,self__.meta31855,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31855","meta31855",684699359,null)], null);
});

cljs.core.async.t_cljs$core$async31854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31854";

cljs.core.async.t_cljs$core$async31854.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async31854");
});

cljs.core.async.__GT_t_cljs$core$async31854 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31854(map_LT___$1,f__$1,ch__$1,meta31855){
return (new cljs.core.async.t_cljs$core$async31854(map_LT___$1,f__$1,ch__$1,meta31855));
});

}

return (new cljs.core.async.t_cljs$core$async31854(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31863 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31863 = (function (map_GT_,f,ch,meta31864){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31864 = meta31864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31865,meta31864__$1){
var self__ = this;
var _31865__$1 = this;
return (new cljs.core.async.t_cljs$core$async31863(self__.map_GT_,self__.f,self__.ch,meta31864__$1));
});

cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31865){
var self__ = this;
var _31865__$1 = this;
return self__.meta31864;
});

cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31864","meta31864",791494493,null)], null);
});

cljs.core.async.t_cljs$core$async31863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31863";

cljs.core.async.t_cljs$core$async31863.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async31863");
});

cljs.core.async.__GT_t_cljs$core$async31863 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31863(map_GT___$1,f__$1,ch__$1,meta31864){
return (new cljs.core.async.t_cljs$core$async31863(map_GT___$1,f__$1,ch__$1,meta31864));
});

}

return (new cljs.core.async.t_cljs$core$async31863(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31869 = (function (filter_GT_,p,ch,meta31870){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31870 = meta31870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31871,meta31870__$1){
var self__ = this;
var _31871__$1 = this;
return (new cljs.core.async.t_cljs$core$async31869(self__.filter_GT_,self__.p,self__.ch,meta31870__$1));
});

cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31871){
var self__ = this;
var _31871__$1 = this;
return self__.meta31870;
});

cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31870","meta31870",1023545625,null)], null);
});

cljs.core.async.t_cljs$core$async31869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31869";

cljs.core.async.t_cljs$core$async31869.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async31869");
});

cljs.core.async.__GT_t_cljs$core$async31869 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31869(filter_GT___$1,p__$1,ch__$1,meta31870){
return (new cljs.core.async.t_cljs$core$async31869(filter_GT___$1,p__$1,ch__$1,meta31870));
});

}

return (new cljs.core.async.t_cljs$core$async31869(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31872 = [];
var len__17402__auto___31916 = arguments.length;
var i__17403__auto___31917 = (0);
while(true){
if((i__17403__auto___31917 < len__17402__auto___31916)){
args31872.push((arguments[i__17403__auto___31917]));

var G__31918 = (i__17403__auto___31917 + (1));
i__17403__auto___31917 = G__31918;
continue;
} else {
}
break;
}

var G__31874 = args31872.length;
switch (G__31874) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31872.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___31920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___31920,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___31920,out){
return (function (state_31895){
var state_val_31896 = (state_31895[(1)]);
if((state_val_31896 === (7))){
var inst_31891 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31897_31921 = state_31895__$1;
(statearr_31897_31921[(2)] = inst_31891);

(statearr_31897_31921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (1))){
var state_31895__$1 = state_31895;
var statearr_31898_31922 = state_31895__$1;
(statearr_31898_31922[(2)] = null);

(statearr_31898_31922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (4))){
var inst_31877 = (state_31895[(7)]);
var inst_31877__$1 = (state_31895[(2)]);
var inst_31878 = (inst_31877__$1 == null);
var state_31895__$1 = (function (){var statearr_31899 = state_31895;
(statearr_31899[(7)] = inst_31877__$1);

return statearr_31899;
})();
if(cljs.core.truth_(inst_31878)){
var statearr_31900_31923 = state_31895__$1;
(statearr_31900_31923[(1)] = (5));

} else {
var statearr_31901_31924 = state_31895__$1;
(statearr_31901_31924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (6))){
var inst_31877 = (state_31895[(7)]);
var inst_31882 = p.call(null,inst_31877);
var state_31895__$1 = state_31895;
if(cljs.core.truth_(inst_31882)){
var statearr_31902_31925 = state_31895__$1;
(statearr_31902_31925[(1)] = (8));

} else {
var statearr_31903_31926 = state_31895__$1;
(statearr_31903_31926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (3))){
var inst_31893 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31895__$1,inst_31893);
} else {
if((state_val_31896 === (2))){
var state_31895__$1 = state_31895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31895__$1,(4),ch);
} else {
if((state_val_31896 === (11))){
var inst_31885 = (state_31895[(2)]);
var state_31895__$1 = state_31895;
var statearr_31904_31927 = state_31895__$1;
(statearr_31904_31927[(2)] = inst_31885);

(statearr_31904_31927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (9))){
var state_31895__$1 = state_31895;
var statearr_31905_31928 = state_31895__$1;
(statearr_31905_31928[(2)] = null);

(statearr_31905_31928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (5))){
var inst_31880 = cljs.core.async.close_BANG_.call(null,out);
var state_31895__$1 = state_31895;
var statearr_31906_31929 = state_31895__$1;
(statearr_31906_31929[(2)] = inst_31880);

(statearr_31906_31929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (10))){
var inst_31888 = (state_31895[(2)]);
var state_31895__$1 = (function (){var statearr_31907 = state_31895;
(statearr_31907[(8)] = inst_31888);

return statearr_31907;
})();
var statearr_31908_31930 = state_31895__$1;
(statearr_31908_31930[(2)] = null);

(statearr_31908_31930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31896 === (8))){
var inst_31877 = (state_31895[(7)]);
var state_31895__$1 = state_31895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31895__$1,(11),out,inst_31877);
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
});})(c__19366__auto___31920,out))
;
return ((function (switch__19345__auto__,c__19366__auto___31920,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_31912 = [null,null,null,null,null,null,null,null,null];
(statearr_31912[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_31912[(1)] = (1));

return statearr_31912;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_31895){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_31895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e31913){if((e31913 instanceof Object)){
var ex__19349__auto__ = e31913;
var statearr_31914_31931 = state_31895;
(statearr_31914_31931[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31932 = state_31895;
state_31895 = G__31932;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_31895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_31895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___31920,out))
})();
var state__19368__auto__ = (function (){var statearr_31915 = f__19367__auto__.call(null);
(statearr_31915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___31920);

return statearr_31915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___31920,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31933 = [];
var len__17402__auto___31936 = arguments.length;
var i__17403__auto___31937 = (0);
while(true){
if((i__17403__auto___31937 < len__17402__auto___31936)){
args31933.push((arguments[i__17403__auto___31937]));

var G__31938 = (i__17403__auto___31937 + (1));
i__17403__auto___31937 = G__31938;
continue;
} else {
}
break;
}

var G__31935 = args31933.length;
switch (G__31935) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31933.length)].join('')));

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
var c__19366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto__){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto__){
return (function (state_32105){
var state_val_32106 = (state_32105[(1)]);
if((state_val_32106 === (7))){
var inst_32101 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32107_32148 = state_32105__$1;
(statearr_32107_32148[(2)] = inst_32101);

(statearr_32107_32148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (20))){
var inst_32071 = (state_32105[(7)]);
var inst_32082 = (state_32105[(2)]);
var inst_32083 = cljs.core.next.call(null,inst_32071);
var inst_32057 = inst_32083;
var inst_32058 = null;
var inst_32059 = (0);
var inst_32060 = (0);
var state_32105__$1 = (function (){var statearr_32108 = state_32105;
(statearr_32108[(8)] = inst_32082);

(statearr_32108[(9)] = inst_32057);

(statearr_32108[(10)] = inst_32058);

(statearr_32108[(11)] = inst_32059);

(statearr_32108[(12)] = inst_32060);

return statearr_32108;
})();
var statearr_32109_32149 = state_32105__$1;
(statearr_32109_32149[(2)] = null);

(statearr_32109_32149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (1))){
var state_32105__$1 = state_32105;
var statearr_32110_32150 = state_32105__$1;
(statearr_32110_32150[(2)] = null);

(statearr_32110_32150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (4))){
var inst_32046 = (state_32105[(13)]);
var inst_32046__$1 = (state_32105[(2)]);
var inst_32047 = (inst_32046__$1 == null);
var state_32105__$1 = (function (){var statearr_32111 = state_32105;
(statearr_32111[(13)] = inst_32046__$1);

return statearr_32111;
})();
if(cljs.core.truth_(inst_32047)){
var statearr_32112_32151 = state_32105__$1;
(statearr_32112_32151[(1)] = (5));

} else {
var statearr_32113_32152 = state_32105__$1;
(statearr_32113_32152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (15))){
var state_32105__$1 = state_32105;
var statearr_32117_32153 = state_32105__$1;
(statearr_32117_32153[(2)] = null);

(statearr_32117_32153[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (21))){
var state_32105__$1 = state_32105;
var statearr_32118_32154 = state_32105__$1;
(statearr_32118_32154[(2)] = null);

(statearr_32118_32154[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (13))){
var inst_32057 = (state_32105[(9)]);
var inst_32058 = (state_32105[(10)]);
var inst_32059 = (state_32105[(11)]);
var inst_32060 = (state_32105[(12)]);
var inst_32067 = (state_32105[(2)]);
var inst_32068 = (inst_32060 + (1));
var tmp32114 = inst_32057;
var tmp32115 = inst_32058;
var tmp32116 = inst_32059;
var inst_32057__$1 = tmp32114;
var inst_32058__$1 = tmp32115;
var inst_32059__$1 = tmp32116;
var inst_32060__$1 = inst_32068;
var state_32105__$1 = (function (){var statearr_32119 = state_32105;
(statearr_32119[(9)] = inst_32057__$1);

(statearr_32119[(10)] = inst_32058__$1);

(statearr_32119[(14)] = inst_32067);

(statearr_32119[(11)] = inst_32059__$1);

(statearr_32119[(12)] = inst_32060__$1);

return statearr_32119;
})();
var statearr_32120_32155 = state_32105__$1;
(statearr_32120_32155[(2)] = null);

(statearr_32120_32155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (22))){
var state_32105__$1 = state_32105;
var statearr_32121_32156 = state_32105__$1;
(statearr_32121_32156[(2)] = null);

(statearr_32121_32156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (6))){
var inst_32046 = (state_32105[(13)]);
var inst_32055 = f.call(null,inst_32046);
var inst_32056 = cljs.core.seq.call(null,inst_32055);
var inst_32057 = inst_32056;
var inst_32058 = null;
var inst_32059 = (0);
var inst_32060 = (0);
var state_32105__$1 = (function (){var statearr_32122 = state_32105;
(statearr_32122[(9)] = inst_32057);

(statearr_32122[(10)] = inst_32058);

(statearr_32122[(11)] = inst_32059);

(statearr_32122[(12)] = inst_32060);

return statearr_32122;
})();
var statearr_32123_32157 = state_32105__$1;
(statearr_32123_32157[(2)] = null);

(statearr_32123_32157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (17))){
var inst_32071 = (state_32105[(7)]);
var inst_32075 = cljs.core.chunk_first.call(null,inst_32071);
var inst_32076 = cljs.core.chunk_rest.call(null,inst_32071);
var inst_32077 = cljs.core.count.call(null,inst_32075);
var inst_32057 = inst_32076;
var inst_32058 = inst_32075;
var inst_32059 = inst_32077;
var inst_32060 = (0);
var state_32105__$1 = (function (){var statearr_32124 = state_32105;
(statearr_32124[(9)] = inst_32057);

(statearr_32124[(10)] = inst_32058);

(statearr_32124[(11)] = inst_32059);

(statearr_32124[(12)] = inst_32060);

return statearr_32124;
})();
var statearr_32125_32158 = state_32105__$1;
(statearr_32125_32158[(2)] = null);

(statearr_32125_32158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (3))){
var inst_32103 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32105__$1,inst_32103);
} else {
if((state_val_32106 === (12))){
var inst_32091 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32126_32159 = state_32105__$1;
(statearr_32126_32159[(2)] = inst_32091);

(statearr_32126_32159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (2))){
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32105__$1,(4),in$);
} else {
if((state_val_32106 === (23))){
var inst_32099 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32127_32160 = state_32105__$1;
(statearr_32127_32160[(2)] = inst_32099);

(statearr_32127_32160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (19))){
var inst_32086 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32128_32161 = state_32105__$1;
(statearr_32128_32161[(2)] = inst_32086);

(statearr_32128_32161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (11))){
var inst_32057 = (state_32105[(9)]);
var inst_32071 = (state_32105[(7)]);
var inst_32071__$1 = cljs.core.seq.call(null,inst_32057);
var state_32105__$1 = (function (){var statearr_32129 = state_32105;
(statearr_32129[(7)] = inst_32071__$1);

return statearr_32129;
})();
if(inst_32071__$1){
var statearr_32130_32162 = state_32105__$1;
(statearr_32130_32162[(1)] = (14));

} else {
var statearr_32131_32163 = state_32105__$1;
(statearr_32131_32163[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (9))){
var inst_32093 = (state_32105[(2)]);
var inst_32094 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32105__$1 = (function (){var statearr_32132 = state_32105;
(statearr_32132[(15)] = inst_32093);

return statearr_32132;
})();
if(cljs.core.truth_(inst_32094)){
var statearr_32133_32164 = state_32105__$1;
(statearr_32133_32164[(1)] = (21));

} else {
var statearr_32134_32165 = state_32105__$1;
(statearr_32134_32165[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (5))){
var inst_32049 = cljs.core.async.close_BANG_.call(null,out);
var state_32105__$1 = state_32105;
var statearr_32135_32166 = state_32105__$1;
(statearr_32135_32166[(2)] = inst_32049);

(statearr_32135_32166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (14))){
var inst_32071 = (state_32105[(7)]);
var inst_32073 = cljs.core.chunked_seq_QMARK_.call(null,inst_32071);
var state_32105__$1 = state_32105;
if(inst_32073){
var statearr_32136_32167 = state_32105__$1;
(statearr_32136_32167[(1)] = (17));

} else {
var statearr_32137_32168 = state_32105__$1;
(statearr_32137_32168[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (16))){
var inst_32089 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32138_32169 = state_32105__$1;
(statearr_32138_32169[(2)] = inst_32089);

(statearr_32138_32169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (10))){
var inst_32058 = (state_32105[(10)]);
var inst_32060 = (state_32105[(12)]);
var inst_32065 = cljs.core._nth.call(null,inst_32058,inst_32060);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32105__$1,(13),out,inst_32065);
} else {
if((state_val_32106 === (18))){
var inst_32071 = (state_32105[(7)]);
var inst_32080 = cljs.core.first.call(null,inst_32071);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32105__$1,(20),out,inst_32080);
} else {
if((state_val_32106 === (8))){
var inst_32059 = (state_32105[(11)]);
var inst_32060 = (state_32105[(12)]);
var inst_32062 = (inst_32060 < inst_32059);
var inst_32063 = inst_32062;
var state_32105__$1 = state_32105;
if(cljs.core.truth_(inst_32063)){
var statearr_32139_32170 = state_32105__$1;
(statearr_32139_32170[(1)] = (10));

} else {
var statearr_32140_32171 = state_32105__$1;
(statearr_32140_32171[(1)] = (11));

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
});})(c__19366__auto__))
;
return ((function (switch__19345__auto__,c__19366__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_32144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32144[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__);

(statearr_32144[(1)] = (1));

return statearr_32144;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____1 = (function (state_32105){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_32105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e32145){if((e32145 instanceof Object)){
var ex__19349__auto__ = e32145;
var statearr_32146_32172 = state_32105;
(statearr_32146_32172[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32173 = state_32105;
state_32105 = G__32173;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__ = function(state_32105){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____1.call(this,state_32105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__))
})();
var state__19368__auto__ = (function (){var statearr_32147 = f__19367__auto__.call(null);
(statearr_32147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_32147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto__))
);

return c__19366__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32174 = [];
var len__17402__auto___32177 = arguments.length;
var i__17403__auto___32178 = (0);
while(true){
if((i__17403__auto___32178 < len__17402__auto___32177)){
args32174.push((arguments[i__17403__auto___32178]));

var G__32179 = (i__17403__auto___32178 + (1));
i__17403__auto___32178 = G__32179;
continue;
} else {
}
break;
}

var G__32176 = args32174.length;
switch (G__32176) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32174.length)].join('')));

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
var args32181 = [];
var len__17402__auto___32184 = arguments.length;
var i__17403__auto___32185 = (0);
while(true){
if((i__17403__auto___32185 < len__17402__auto___32184)){
args32181.push((arguments[i__17403__auto___32185]));

var G__32186 = (i__17403__auto___32185 + (1));
i__17403__auto___32185 = G__32186;
continue;
} else {
}
break;
}

var G__32183 = args32181.length;
switch (G__32183) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32181.length)].join('')));

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
var args32188 = [];
var len__17402__auto___32239 = arguments.length;
var i__17403__auto___32240 = (0);
while(true){
if((i__17403__auto___32240 < len__17402__auto___32239)){
args32188.push((arguments[i__17403__auto___32240]));

var G__32241 = (i__17403__auto___32240 + (1));
i__17403__auto___32240 = G__32241;
continue;
} else {
}
break;
}

var G__32190 = args32188.length;
switch (G__32190) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32188.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___32243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___32243,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___32243,out){
return (function (state_32214){
var state_val_32215 = (state_32214[(1)]);
if((state_val_32215 === (7))){
var inst_32209 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
var statearr_32216_32244 = state_32214__$1;
(statearr_32216_32244[(2)] = inst_32209);

(statearr_32216_32244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (1))){
var inst_32191 = null;
var state_32214__$1 = (function (){var statearr_32217 = state_32214;
(statearr_32217[(7)] = inst_32191);

return statearr_32217;
})();
var statearr_32218_32245 = state_32214__$1;
(statearr_32218_32245[(2)] = null);

(statearr_32218_32245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (4))){
var inst_32194 = (state_32214[(8)]);
var inst_32194__$1 = (state_32214[(2)]);
var inst_32195 = (inst_32194__$1 == null);
var inst_32196 = cljs.core.not.call(null,inst_32195);
var state_32214__$1 = (function (){var statearr_32219 = state_32214;
(statearr_32219[(8)] = inst_32194__$1);

return statearr_32219;
})();
if(inst_32196){
var statearr_32220_32246 = state_32214__$1;
(statearr_32220_32246[(1)] = (5));

} else {
var statearr_32221_32247 = state_32214__$1;
(statearr_32221_32247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (6))){
var state_32214__$1 = state_32214;
var statearr_32222_32248 = state_32214__$1;
(statearr_32222_32248[(2)] = null);

(statearr_32222_32248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (3))){
var inst_32211 = (state_32214[(2)]);
var inst_32212 = cljs.core.async.close_BANG_.call(null,out);
var state_32214__$1 = (function (){var statearr_32223 = state_32214;
(statearr_32223[(9)] = inst_32211);

return statearr_32223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32214__$1,inst_32212);
} else {
if((state_val_32215 === (2))){
var state_32214__$1 = state_32214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32214__$1,(4),ch);
} else {
if((state_val_32215 === (11))){
var inst_32194 = (state_32214[(8)]);
var inst_32203 = (state_32214[(2)]);
var inst_32191 = inst_32194;
var state_32214__$1 = (function (){var statearr_32224 = state_32214;
(statearr_32224[(7)] = inst_32191);

(statearr_32224[(10)] = inst_32203);

return statearr_32224;
})();
var statearr_32225_32249 = state_32214__$1;
(statearr_32225_32249[(2)] = null);

(statearr_32225_32249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (9))){
var inst_32194 = (state_32214[(8)]);
var state_32214__$1 = state_32214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32214__$1,(11),out,inst_32194);
} else {
if((state_val_32215 === (5))){
var inst_32191 = (state_32214[(7)]);
var inst_32194 = (state_32214[(8)]);
var inst_32198 = cljs.core._EQ_.call(null,inst_32194,inst_32191);
var state_32214__$1 = state_32214;
if(inst_32198){
var statearr_32227_32250 = state_32214__$1;
(statearr_32227_32250[(1)] = (8));

} else {
var statearr_32228_32251 = state_32214__$1;
(statearr_32228_32251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (10))){
var inst_32206 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
var statearr_32229_32252 = state_32214__$1;
(statearr_32229_32252[(2)] = inst_32206);

(statearr_32229_32252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (8))){
var inst_32191 = (state_32214[(7)]);
var tmp32226 = inst_32191;
var inst_32191__$1 = tmp32226;
var state_32214__$1 = (function (){var statearr_32230 = state_32214;
(statearr_32230[(7)] = inst_32191__$1);

return statearr_32230;
})();
var statearr_32231_32253 = state_32214__$1;
(statearr_32231_32253[(2)] = null);

(statearr_32231_32253[(1)] = (2));


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
});})(c__19366__auto___32243,out))
;
return ((function (switch__19345__auto__,c__19366__auto___32243,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_32235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32235[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_32235[(1)] = (1));

return statearr_32235;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_32214){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_32214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e32236){if((e32236 instanceof Object)){
var ex__19349__auto__ = e32236;
var statearr_32237_32254 = state_32214;
(statearr_32237_32254[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32255 = state_32214;
state_32214 = G__32255;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_32214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_32214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___32243,out))
})();
var state__19368__auto__ = (function (){var statearr_32238 = f__19367__auto__.call(null);
(statearr_32238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___32243);

return statearr_32238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___32243,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32256 = [];
var len__17402__auto___32326 = arguments.length;
var i__17403__auto___32327 = (0);
while(true){
if((i__17403__auto___32327 < len__17402__auto___32326)){
args32256.push((arguments[i__17403__auto___32327]));

var G__32328 = (i__17403__auto___32327 + (1));
i__17403__auto___32327 = G__32328;
continue;
} else {
}
break;
}

var G__32258 = args32256.length;
switch (G__32258) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32256.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___32330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___32330,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___32330,out){
return (function (state_32296){
var state_val_32297 = (state_32296[(1)]);
if((state_val_32297 === (7))){
var inst_32292 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32298_32331 = state_32296__$1;
(statearr_32298_32331[(2)] = inst_32292);

(statearr_32298_32331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (1))){
var inst_32259 = (new Array(n));
var inst_32260 = inst_32259;
var inst_32261 = (0);
var state_32296__$1 = (function (){var statearr_32299 = state_32296;
(statearr_32299[(7)] = inst_32260);

(statearr_32299[(8)] = inst_32261);

return statearr_32299;
})();
var statearr_32300_32332 = state_32296__$1;
(statearr_32300_32332[(2)] = null);

(statearr_32300_32332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (4))){
var inst_32264 = (state_32296[(9)]);
var inst_32264__$1 = (state_32296[(2)]);
var inst_32265 = (inst_32264__$1 == null);
var inst_32266 = cljs.core.not.call(null,inst_32265);
var state_32296__$1 = (function (){var statearr_32301 = state_32296;
(statearr_32301[(9)] = inst_32264__$1);

return statearr_32301;
})();
if(inst_32266){
var statearr_32302_32333 = state_32296__$1;
(statearr_32302_32333[(1)] = (5));

} else {
var statearr_32303_32334 = state_32296__$1;
(statearr_32303_32334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (15))){
var inst_32286 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32304_32335 = state_32296__$1;
(statearr_32304_32335[(2)] = inst_32286);

(statearr_32304_32335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (13))){
var state_32296__$1 = state_32296;
var statearr_32305_32336 = state_32296__$1;
(statearr_32305_32336[(2)] = null);

(statearr_32305_32336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (6))){
var inst_32261 = (state_32296[(8)]);
var inst_32282 = (inst_32261 > (0));
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32282)){
var statearr_32306_32337 = state_32296__$1;
(statearr_32306_32337[(1)] = (12));

} else {
var statearr_32307_32338 = state_32296__$1;
(statearr_32307_32338[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (3))){
var inst_32294 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32296__$1,inst_32294);
} else {
if((state_val_32297 === (12))){
var inst_32260 = (state_32296[(7)]);
var inst_32284 = cljs.core.vec.call(null,inst_32260);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32296__$1,(15),out,inst_32284);
} else {
if((state_val_32297 === (2))){
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32296__$1,(4),ch);
} else {
if((state_val_32297 === (11))){
var inst_32276 = (state_32296[(2)]);
var inst_32277 = (new Array(n));
var inst_32260 = inst_32277;
var inst_32261 = (0);
var state_32296__$1 = (function (){var statearr_32308 = state_32296;
(statearr_32308[(10)] = inst_32276);

(statearr_32308[(7)] = inst_32260);

(statearr_32308[(8)] = inst_32261);

return statearr_32308;
})();
var statearr_32309_32339 = state_32296__$1;
(statearr_32309_32339[(2)] = null);

(statearr_32309_32339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (9))){
var inst_32260 = (state_32296[(7)]);
var inst_32274 = cljs.core.vec.call(null,inst_32260);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32296__$1,(11),out,inst_32274);
} else {
if((state_val_32297 === (5))){
var inst_32269 = (state_32296[(11)]);
var inst_32260 = (state_32296[(7)]);
var inst_32261 = (state_32296[(8)]);
var inst_32264 = (state_32296[(9)]);
var inst_32268 = (inst_32260[inst_32261] = inst_32264);
var inst_32269__$1 = (inst_32261 + (1));
var inst_32270 = (inst_32269__$1 < n);
var state_32296__$1 = (function (){var statearr_32310 = state_32296;
(statearr_32310[(11)] = inst_32269__$1);

(statearr_32310[(12)] = inst_32268);

return statearr_32310;
})();
if(cljs.core.truth_(inst_32270)){
var statearr_32311_32340 = state_32296__$1;
(statearr_32311_32340[(1)] = (8));

} else {
var statearr_32312_32341 = state_32296__$1;
(statearr_32312_32341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (14))){
var inst_32289 = (state_32296[(2)]);
var inst_32290 = cljs.core.async.close_BANG_.call(null,out);
var state_32296__$1 = (function (){var statearr_32314 = state_32296;
(statearr_32314[(13)] = inst_32289);

return statearr_32314;
})();
var statearr_32315_32342 = state_32296__$1;
(statearr_32315_32342[(2)] = inst_32290);

(statearr_32315_32342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (10))){
var inst_32280 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32316_32343 = state_32296__$1;
(statearr_32316_32343[(2)] = inst_32280);

(statearr_32316_32343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (8))){
var inst_32269 = (state_32296[(11)]);
var inst_32260 = (state_32296[(7)]);
var tmp32313 = inst_32260;
var inst_32260__$1 = tmp32313;
var inst_32261 = inst_32269;
var state_32296__$1 = (function (){var statearr_32317 = state_32296;
(statearr_32317[(7)] = inst_32260__$1);

(statearr_32317[(8)] = inst_32261);

return statearr_32317;
})();
var statearr_32318_32344 = state_32296__$1;
(statearr_32318_32344[(2)] = null);

(statearr_32318_32344[(1)] = (2));


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
});})(c__19366__auto___32330,out))
;
return ((function (switch__19345__auto__,c__19366__auto___32330,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_32322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32322[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_32322[(1)] = (1));

return statearr_32322;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_32296){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_32296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e32323){if((e32323 instanceof Object)){
var ex__19349__auto__ = e32323;
var statearr_32324_32345 = state_32296;
(statearr_32324_32345[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32346 = state_32296;
state_32296 = G__32346;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_32296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_32296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___32330,out))
})();
var state__19368__auto__ = (function (){var statearr_32325 = f__19367__auto__.call(null);
(statearr_32325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___32330);

return statearr_32325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___32330,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32347 = [];
var len__17402__auto___32421 = arguments.length;
var i__17403__auto___32422 = (0);
while(true){
if((i__17403__auto___32422 < len__17402__auto___32421)){
args32347.push((arguments[i__17403__auto___32422]));

var G__32423 = (i__17403__auto___32422 + (1));
i__17403__auto___32422 = G__32423;
continue;
} else {
}
break;
}

var G__32349 = args32347.length;
switch (G__32349) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32347.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___32425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___32425,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___32425,out){
return (function (state_32391){
var state_val_32392 = (state_32391[(1)]);
if((state_val_32392 === (7))){
var inst_32387 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32393_32426 = state_32391__$1;
(statearr_32393_32426[(2)] = inst_32387);

(statearr_32393_32426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (1))){
var inst_32350 = [];
var inst_32351 = inst_32350;
var inst_32352 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32391__$1 = (function (){var statearr_32394 = state_32391;
(statearr_32394[(7)] = inst_32351);

(statearr_32394[(8)] = inst_32352);

return statearr_32394;
})();
var statearr_32395_32427 = state_32391__$1;
(statearr_32395_32427[(2)] = null);

(statearr_32395_32427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (4))){
var inst_32355 = (state_32391[(9)]);
var inst_32355__$1 = (state_32391[(2)]);
var inst_32356 = (inst_32355__$1 == null);
var inst_32357 = cljs.core.not.call(null,inst_32356);
var state_32391__$1 = (function (){var statearr_32396 = state_32391;
(statearr_32396[(9)] = inst_32355__$1);

return statearr_32396;
})();
if(inst_32357){
var statearr_32397_32428 = state_32391__$1;
(statearr_32397_32428[(1)] = (5));

} else {
var statearr_32398_32429 = state_32391__$1;
(statearr_32398_32429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (15))){
var inst_32381 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32399_32430 = state_32391__$1;
(statearr_32399_32430[(2)] = inst_32381);

(statearr_32399_32430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (13))){
var state_32391__$1 = state_32391;
var statearr_32400_32431 = state_32391__$1;
(statearr_32400_32431[(2)] = null);

(statearr_32400_32431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (6))){
var inst_32351 = (state_32391[(7)]);
var inst_32376 = inst_32351.length;
var inst_32377 = (inst_32376 > (0));
var state_32391__$1 = state_32391;
if(cljs.core.truth_(inst_32377)){
var statearr_32401_32432 = state_32391__$1;
(statearr_32401_32432[(1)] = (12));

} else {
var statearr_32402_32433 = state_32391__$1;
(statearr_32402_32433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (3))){
var inst_32389 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32391__$1,inst_32389);
} else {
if((state_val_32392 === (12))){
var inst_32351 = (state_32391[(7)]);
var inst_32379 = cljs.core.vec.call(null,inst_32351);
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32391__$1,(15),out,inst_32379);
} else {
if((state_val_32392 === (2))){
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32391__$1,(4),ch);
} else {
if((state_val_32392 === (11))){
var inst_32355 = (state_32391[(9)]);
var inst_32359 = (state_32391[(10)]);
var inst_32369 = (state_32391[(2)]);
var inst_32370 = [];
var inst_32371 = inst_32370.push(inst_32355);
var inst_32351 = inst_32370;
var inst_32352 = inst_32359;
var state_32391__$1 = (function (){var statearr_32403 = state_32391;
(statearr_32403[(11)] = inst_32369);

(statearr_32403[(7)] = inst_32351);

(statearr_32403[(8)] = inst_32352);

(statearr_32403[(12)] = inst_32371);

return statearr_32403;
})();
var statearr_32404_32434 = state_32391__$1;
(statearr_32404_32434[(2)] = null);

(statearr_32404_32434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (9))){
var inst_32351 = (state_32391[(7)]);
var inst_32367 = cljs.core.vec.call(null,inst_32351);
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32391__$1,(11),out,inst_32367);
} else {
if((state_val_32392 === (5))){
var inst_32355 = (state_32391[(9)]);
var inst_32352 = (state_32391[(8)]);
var inst_32359 = (state_32391[(10)]);
var inst_32359__$1 = f.call(null,inst_32355);
var inst_32360 = cljs.core._EQ_.call(null,inst_32359__$1,inst_32352);
var inst_32361 = cljs.core.keyword_identical_QMARK_.call(null,inst_32352,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32362 = (inst_32360) || (inst_32361);
var state_32391__$1 = (function (){var statearr_32405 = state_32391;
(statearr_32405[(10)] = inst_32359__$1);

return statearr_32405;
})();
if(cljs.core.truth_(inst_32362)){
var statearr_32406_32435 = state_32391__$1;
(statearr_32406_32435[(1)] = (8));

} else {
var statearr_32407_32436 = state_32391__$1;
(statearr_32407_32436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (14))){
var inst_32384 = (state_32391[(2)]);
var inst_32385 = cljs.core.async.close_BANG_.call(null,out);
var state_32391__$1 = (function (){var statearr_32409 = state_32391;
(statearr_32409[(13)] = inst_32384);

return statearr_32409;
})();
var statearr_32410_32437 = state_32391__$1;
(statearr_32410_32437[(2)] = inst_32385);

(statearr_32410_32437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (10))){
var inst_32374 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32411_32438 = state_32391__$1;
(statearr_32411_32438[(2)] = inst_32374);

(statearr_32411_32438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (8))){
var inst_32355 = (state_32391[(9)]);
var inst_32351 = (state_32391[(7)]);
var inst_32359 = (state_32391[(10)]);
var inst_32364 = inst_32351.push(inst_32355);
var tmp32408 = inst_32351;
var inst_32351__$1 = tmp32408;
var inst_32352 = inst_32359;
var state_32391__$1 = (function (){var statearr_32412 = state_32391;
(statearr_32412[(7)] = inst_32351__$1);

(statearr_32412[(8)] = inst_32352);

(statearr_32412[(14)] = inst_32364);

return statearr_32412;
})();
var statearr_32413_32439 = state_32391__$1;
(statearr_32413_32439[(2)] = null);

(statearr_32413_32439[(1)] = (2));


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
});})(c__19366__auto___32425,out))
;
return ((function (switch__19345__auto__,c__19366__auto___32425,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_32417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32417[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_32417[(1)] = (1));

return statearr_32417;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_32391){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_32391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e32418){if((e32418 instanceof Object)){
var ex__19349__auto__ = e32418;
var statearr_32419_32440 = state_32391;
(statearr_32419_32440[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32441 = state_32391;
state_32391 = G__32441;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_32391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_32391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___32425,out))
})();
var state__19368__auto__ = (function (){var statearr_32420 = f__19367__auto__.call(null);
(statearr_32420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___32425);

return statearr_32420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___32425,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map