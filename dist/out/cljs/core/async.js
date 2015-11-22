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
if(typeof cljs.core.async.t_cljs$core$async27717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27717 = (function (fn_handler,f,meta27718){
this.fn_handler = fn_handler;
this.f = f;
this.meta27718 = meta27718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27719,meta27718__$1){
var self__ = this;
var _27719__$1 = this;
return (new cljs.core.async.t_cljs$core$async27717(self__.fn_handler,self__.f,meta27718__$1));
});

cljs.core.async.t_cljs$core$async27717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27719){
var self__ = this;
var _27719__$1 = this;
return self__.meta27718;
});

cljs.core.async.t_cljs$core$async27717.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27718","meta27718",-361864273,null)], null);
});

cljs.core.async.t_cljs$core$async27717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27717";

cljs.core.async.t_cljs$core$async27717.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27717");
});

cljs.core.async.__GT_t_cljs$core$async27717 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async27717(fn_handler__$1,f__$1,meta27718){
return (new cljs.core.async.t_cljs$core$async27717(fn_handler__$1,f__$1,meta27718));
});

}

return (new cljs.core.async.t_cljs$core$async27717(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args27722 = [];
var len__17402__auto___27725 = arguments.length;
var i__17403__auto___27726 = (0);
while(true){
if((i__17403__auto___27726 < len__17402__auto___27725)){
args27722.push((arguments[i__17403__auto___27726]));

var G__27727 = (i__17403__auto___27726 + (1));
i__17403__auto___27726 = G__27727;
continue;
} else {
}
break;
}

var G__27724 = args27722.length;
switch (G__27724) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27722.length)].join('')));

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
var args27729 = [];
var len__17402__auto___27732 = arguments.length;
var i__17403__auto___27733 = (0);
while(true){
if((i__17403__auto___27733 < len__17402__auto___27732)){
args27729.push((arguments[i__17403__auto___27733]));

var G__27734 = (i__17403__auto___27733 + (1));
i__17403__auto___27733 = G__27734;
continue;
} else {
}
break;
}

var G__27731 = args27729.length;
switch (G__27731) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27729.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27736 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27736);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27736,ret){
return (function (){
return fn1.call(null,val_27736);
});})(val_27736,ret))
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
var args27737 = [];
var len__17402__auto___27740 = arguments.length;
var i__17403__auto___27741 = (0);
while(true){
if((i__17403__auto___27741 < len__17402__auto___27740)){
args27737.push((arguments[i__17403__auto___27741]));

var G__27742 = (i__17403__auto___27741 + (1));
i__17403__auto___27741 = G__27742;
continue;
} else {
}
break;
}

var G__27739 = args27737.length;
switch (G__27739) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27737.length)].join('')));

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
var n__17247__auto___27744 = n;
var x_27745 = (0);
while(true){
if((x_27745 < n__17247__auto___27744)){
(a[x_27745] = (0));

var G__27746 = (x_27745 + (1));
x_27745 = G__27746;
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

var G__27747 = (i + (1));
i = G__27747;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27751 = (function (alt_flag,flag,meta27752){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27752 = meta27752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27753,meta27752__$1){
var self__ = this;
var _27753__$1 = this;
return (new cljs.core.async.t_cljs$core$async27751(self__.alt_flag,self__.flag,meta27752__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27753){
var self__ = this;
var _27753__$1 = this;
return self__.meta27752;
});})(flag))
;

cljs.core.async.t_cljs$core$async27751.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27751.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27752","meta27752",488488797,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27751";

cljs.core.async.t_cljs$core$async27751.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27751");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27751 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27751(alt_flag__$1,flag__$1,meta27752){
return (new cljs.core.async.t_cljs$core$async27751(alt_flag__$1,flag__$1,meta27752));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27751(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27757 = (function (alt_handler,flag,cb,meta27758){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27758 = meta27758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27759,meta27758__$1){
var self__ = this;
var _27759__$1 = this;
return (new cljs.core.async.t_cljs$core$async27757(self__.alt_handler,self__.flag,self__.cb,meta27758__$1));
});

cljs.core.async.t_cljs$core$async27757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27759){
var self__ = this;
var _27759__$1 = this;
return self__.meta27758;
});

cljs.core.async.t_cljs$core$async27757.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27758","meta27758",2138466109,null)], null);
});

cljs.core.async.t_cljs$core$async27757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27757";

cljs.core.async.t_cljs$core$async27757.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27757");
});

cljs.core.async.__GT_t_cljs$core$async27757 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27757(alt_handler__$1,flag__$1,cb__$1,meta27758){
return (new cljs.core.async.t_cljs$core$async27757(alt_handler__$1,flag__$1,cb__$1,meta27758));
});

}

return (new cljs.core.async.t_cljs$core$async27757(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27760_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27760_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27761_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27761_SHARP_,port], null));
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
var G__27762 = (i + (1));
i = G__27762;
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
var len__17402__auto___27768 = arguments.length;
var i__17403__auto___27769 = (0);
while(true){
if((i__17403__auto___27769 < len__17402__auto___27768)){
args__17409__auto__.push((arguments[i__17403__auto___27769]));

var G__27770 = (i__17403__auto___27769 + (1));
i__17403__auto___27769 = G__27770;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27765){
var map__27766 = p__27765;
var map__27766__$1 = ((((!((map__27766 == null)))?((((map__27766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27766):map__27766);
var opts = map__27766__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27763){
var G__27764 = cljs.core.first.call(null,seq27763);
var seq27763__$1 = cljs.core.next.call(null,seq27763);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27764,seq27763__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27771 = [];
var len__17402__auto___27821 = arguments.length;
var i__17403__auto___27822 = (0);
while(true){
if((i__17403__auto___27822 < len__17402__auto___27821)){
args27771.push((arguments[i__17403__auto___27822]));

var G__27823 = (i__17403__auto___27822 + (1));
i__17403__auto___27822 = G__27823;
continue;
} else {
}
break;
}

var G__27773 = args27771.length;
switch (G__27773) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27771.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19424__auto___27825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___27825){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___27825){
return (function (state_27797){
var state_val_27798 = (state_27797[(1)]);
if((state_val_27798 === (7))){
var inst_27793 = (state_27797[(2)]);
var state_27797__$1 = state_27797;
var statearr_27799_27826 = state_27797__$1;
(statearr_27799_27826[(2)] = inst_27793);

(statearr_27799_27826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (1))){
var state_27797__$1 = state_27797;
var statearr_27800_27827 = state_27797__$1;
(statearr_27800_27827[(2)] = null);

(statearr_27800_27827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (4))){
var inst_27776 = (state_27797[(7)]);
var inst_27776__$1 = (state_27797[(2)]);
var inst_27777 = (inst_27776__$1 == null);
var state_27797__$1 = (function (){var statearr_27801 = state_27797;
(statearr_27801[(7)] = inst_27776__$1);

return statearr_27801;
})();
if(cljs.core.truth_(inst_27777)){
var statearr_27802_27828 = state_27797__$1;
(statearr_27802_27828[(1)] = (5));

} else {
var statearr_27803_27829 = state_27797__$1;
(statearr_27803_27829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (13))){
var state_27797__$1 = state_27797;
var statearr_27804_27830 = state_27797__$1;
(statearr_27804_27830[(2)] = null);

(statearr_27804_27830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (6))){
var inst_27776 = (state_27797[(7)]);
var state_27797__$1 = state_27797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27797__$1,(11),to,inst_27776);
} else {
if((state_val_27798 === (3))){
var inst_27795 = (state_27797[(2)]);
var state_27797__$1 = state_27797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27797__$1,inst_27795);
} else {
if((state_val_27798 === (12))){
var state_27797__$1 = state_27797;
var statearr_27805_27831 = state_27797__$1;
(statearr_27805_27831[(2)] = null);

(statearr_27805_27831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (2))){
var state_27797__$1 = state_27797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27797__$1,(4),from);
} else {
if((state_val_27798 === (11))){
var inst_27786 = (state_27797[(2)]);
var state_27797__$1 = state_27797;
if(cljs.core.truth_(inst_27786)){
var statearr_27806_27832 = state_27797__$1;
(statearr_27806_27832[(1)] = (12));

} else {
var statearr_27807_27833 = state_27797__$1;
(statearr_27807_27833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (9))){
var state_27797__$1 = state_27797;
var statearr_27808_27834 = state_27797__$1;
(statearr_27808_27834[(2)] = null);

(statearr_27808_27834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (5))){
var state_27797__$1 = state_27797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27809_27835 = state_27797__$1;
(statearr_27809_27835[(1)] = (8));

} else {
var statearr_27810_27836 = state_27797__$1;
(statearr_27810_27836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (14))){
var inst_27791 = (state_27797[(2)]);
var state_27797__$1 = state_27797;
var statearr_27811_27837 = state_27797__$1;
(statearr_27811_27837[(2)] = inst_27791);

(statearr_27811_27837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (10))){
var inst_27783 = (state_27797[(2)]);
var state_27797__$1 = state_27797;
var statearr_27812_27838 = state_27797__$1;
(statearr_27812_27838[(2)] = inst_27783);

(statearr_27812_27838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (8))){
var inst_27780 = cljs.core.async.close_BANG_.call(null,to);
var state_27797__$1 = state_27797;
var statearr_27813_27839 = state_27797__$1;
(statearr_27813_27839[(2)] = inst_27780);

(statearr_27813_27839[(1)] = (10));


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
});})(c__19424__auto___27825))
;
return ((function (switch__19359__auto__,c__19424__auto___27825){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_27817 = [null,null,null,null,null,null,null,null];
(statearr_27817[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_27817[(1)] = (1));

return statearr_27817;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_27797){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_27797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e27818){if((e27818 instanceof Object)){
var ex__19363__auto__ = e27818;
var statearr_27819_27840 = state_27797;
(statearr_27819_27840[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27841 = state_27797;
state_27797 = G__27841;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_27797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_27797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___27825))
})();
var state__19426__auto__ = (function (){var statearr_27820 = f__19425__auto__.call(null);
(statearr_27820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___27825);

return statearr_27820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___27825))
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
return (function (p__28025){
var vec__28026 = p__28025;
var v = cljs.core.nth.call(null,vec__28026,(0),null);
var p = cljs.core.nth.call(null,vec__28026,(1),null);
var job = vec__28026;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19424__auto___28208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___28208,res,vec__28026,v,p,job,jobs,results){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___28208,res,vec__28026,v,p,job,jobs,results){
return (function (state_28031){
var state_val_28032 = (state_28031[(1)]);
if((state_val_28032 === (1))){
var state_28031__$1 = state_28031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28031__$1,(2),res,v);
} else {
if((state_val_28032 === (2))){
var inst_28028 = (state_28031[(2)]);
var inst_28029 = cljs.core.async.close_BANG_.call(null,res);
var state_28031__$1 = (function (){var statearr_28033 = state_28031;
(statearr_28033[(7)] = inst_28028);

return statearr_28033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28031__$1,inst_28029);
} else {
return null;
}
}
});})(c__19424__auto___28208,res,vec__28026,v,p,job,jobs,results))
;
return ((function (switch__19359__auto__,c__19424__auto___28208,res,vec__28026,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_28037 = [null,null,null,null,null,null,null,null];
(statearr_28037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_28037[(1)] = (1));

return statearr_28037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_28031){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28038){if((e28038 instanceof Object)){
var ex__19363__auto__ = e28038;
var statearr_28039_28209 = state_28031;
(statearr_28039_28209[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28210 = state_28031;
state_28031 = G__28210;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_28031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_28031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___28208,res,vec__28026,v,p,job,jobs,results))
})();
var state__19426__auto__ = (function (){var statearr_28040 = f__19425__auto__.call(null);
(statearr_28040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___28208);

return statearr_28040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___28208,res,vec__28026,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28041){
var vec__28042 = p__28041;
var v = cljs.core.nth.call(null,vec__28042,(0),null);
var p = cljs.core.nth.call(null,vec__28042,(1),null);
var job = vec__28042;
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
var n__17247__auto___28211 = n;
var __28212 = (0);
while(true){
if((__28212 < n__17247__auto___28211)){
var G__28043_28213 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28043_28213) {
case "compute":
var c__19424__auto___28215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28212,c__19424__auto___28215,G__28043_28213,n__17247__auto___28211,jobs,results,process,async){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (__28212,c__19424__auto___28215,G__28043_28213,n__17247__auto___28211,jobs,results,process,async){
return (function (state_28056){
var state_val_28057 = (state_28056[(1)]);
if((state_val_28057 === (1))){
var state_28056__$1 = state_28056;
var statearr_28058_28216 = state_28056__$1;
(statearr_28058_28216[(2)] = null);

(statearr_28058_28216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28057 === (2))){
var state_28056__$1 = state_28056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28056__$1,(4),jobs);
} else {
if((state_val_28057 === (3))){
var inst_28054 = (state_28056[(2)]);
var state_28056__$1 = state_28056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28056__$1,inst_28054);
} else {
if((state_val_28057 === (4))){
var inst_28046 = (state_28056[(2)]);
var inst_28047 = process.call(null,inst_28046);
var state_28056__$1 = state_28056;
if(cljs.core.truth_(inst_28047)){
var statearr_28059_28217 = state_28056__$1;
(statearr_28059_28217[(1)] = (5));

} else {
var statearr_28060_28218 = state_28056__$1;
(statearr_28060_28218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28057 === (5))){
var state_28056__$1 = state_28056;
var statearr_28061_28219 = state_28056__$1;
(statearr_28061_28219[(2)] = null);

(statearr_28061_28219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28057 === (6))){
var state_28056__$1 = state_28056;
var statearr_28062_28220 = state_28056__$1;
(statearr_28062_28220[(2)] = null);

(statearr_28062_28220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28057 === (7))){
var inst_28052 = (state_28056[(2)]);
var state_28056__$1 = state_28056;
var statearr_28063_28221 = state_28056__$1;
(statearr_28063_28221[(2)] = inst_28052);

(statearr_28063_28221[(1)] = (3));


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
});})(__28212,c__19424__auto___28215,G__28043_28213,n__17247__auto___28211,jobs,results,process,async))
;
return ((function (__28212,switch__19359__auto__,c__19424__auto___28215,G__28043_28213,n__17247__auto___28211,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_28067 = [null,null,null,null,null,null,null];
(statearr_28067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_28067[(1)] = (1));

return statearr_28067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_28056){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28068){if((e28068 instanceof Object)){
var ex__19363__auto__ = e28068;
var statearr_28069_28222 = state_28056;
(statearr_28069_28222[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28223 = state_28056;
state_28056 = G__28223;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_28056){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_28056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(__28212,switch__19359__auto__,c__19424__auto___28215,G__28043_28213,n__17247__auto___28211,jobs,results,process,async))
})();
var state__19426__auto__ = (function (){var statearr_28070 = f__19425__auto__.call(null);
(statearr_28070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___28215);

return statearr_28070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(__28212,c__19424__auto___28215,G__28043_28213,n__17247__auto___28211,jobs,results,process,async))
);


break;
case "async":
var c__19424__auto___28224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28212,c__19424__auto___28224,G__28043_28213,n__17247__auto___28211,jobs,results,process,async){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (__28212,c__19424__auto___28224,G__28043_28213,n__17247__auto___28211,jobs,results,process,async){
return (function (state_28083){
var state_val_28084 = (state_28083[(1)]);
if((state_val_28084 === (1))){
var state_28083__$1 = state_28083;
var statearr_28085_28225 = state_28083__$1;
(statearr_28085_28225[(2)] = null);

(statearr_28085_28225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (2))){
var state_28083__$1 = state_28083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28083__$1,(4),jobs);
} else {
if((state_val_28084 === (3))){
var inst_28081 = (state_28083[(2)]);
var state_28083__$1 = state_28083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28083__$1,inst_28081);
} else {
if((state_val_28084 === (4))){
var inst_28073 = (state_28083[(2)]);
var inst_28074 = async.call(null,inst_28073);
var state_28083__$1 = state_28083;
if(cljs.core.truth_(inst_28074)){
var statearr_28086_28226 = state_28083__$1;
(statearr_28086_28226[(1)] = (5));

} else {
var statearr_28087_28227 = state_28083__$1;
(statearr_28087_28227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (5))){
var state_28083__$1 = state_28083;
var statearr_28088_28228 = state_28083__$1;
(statearr_28088_28228[(2)] = null);

(statearr_28088_28228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (6))){
var state_28083__$1 = state_28083;
var statearr_28089_28229 = state_28083__$1;
(statearr_28089_28229[(2)] = null);

(statearr_28089_28229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28084 === (7))){
var inst_28079 = (state_28083[(2)]);
var state_28083__$1 = state_28083;
var statearr_28090_28230 = state_28083__$1;
(statearr_28090_28230[(2)] = inst_28079);

(statearr_28090_28230[(1)] = (3));


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
});})(__28212,c__19424__auto___28224,G__28043_28213,n__17247__auto___28211,jobs,results,process,async))
;
return ((function (__28212,switch__19359__auto__,c__19424__auto___28224,G__28043_28213,n__17247__auto___28211,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_28094 = [null,null,null,null,null,null,null];
(statearr_28094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_28094[(1)] = (1));

return statearr_28094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_28083){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28095){if((e28095 instanceof Object)){
var ex__19363__auto__ = e28095;
var statearr_28096_28231 = state_28083;
(statearr_28096_28231[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28232 = state_28083;
state_28083 = G__28232;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_28083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_28083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(__28212,switch__19359__auto__,c__19424__auto___28224,G__28043_28213,n__17247__auto___28211,jobs,results,process,async))
})();
var state__19426__auto__ = (function (){var statearr_28097 = f__19425__auto__.call(null);
(statearr_28097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___28224);

return statearr_28097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(__28212,c__19424__auto___28224,G__28043_28213,n__17247__auto___28211,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28233 = (__28212 + (1));
__28212 = G__28233;
continue;
} else {
}
break;
}

var c__19424__auto___28234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___28234,jobs,results,process,async){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___28234,jobs,results,process,async){
return (function (state_28119){
var state_val_28120 = (state_28119[(1)]);
if((state_val_28120 === (1))){
var state_28119__$1 = state_28119;
var statearr_28121_28235 = state_28119__$1;
(statearr_28121_28235[(2)] = null);

(statearr_28121_28235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (2))){
var state_28119__$1 = state_28119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28119__$1,(4),from);
} else {
if((state_val_28120 === (3))){
var inst_28117 = (state_28119[(2)]);
var state_28119__$1 = state_28119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28119__$1,inst_28117);
} else {
if((state_val_28120 === (4))){
var inst_28100 = (state_28119[(7)]);
var inst_28100__$1 = (state_28119[(2)]);
var inst_28101 = (inst_28100__$1 == null);
var state_28119__$1 = (function (){var statearr_28122 = state_28119;
(statearr_28122[(7)] = inst_28100__$1);

return statearr_28122;
})();
if(cljs.core.truth_(inst_28101)){
var statearr_28123_28236 = state_28119__$1;
(statearr_28123_28236[(1)] = (5));

} else {
var statearr_28124_28237 = state_28119__$1;
(statearr_28124_28237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (5))){
var inst_28103 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28119__$1 = state_28119;
var statearr_28125_28238 = state_28119__$1;
(statearr_28125_28238[(2)] = inst_28103);

(statearr_28125_28238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (6))){
var inst_28100 = (state_28119[(7)]);
var inst_28105 = (state_28119[(8)]);
var inst_28105__$1 = cljs.core.async.chan.call(null,(1));
var inst_28106 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28107 = [inst_28100,inst_28105__$1];
var inst_28108 = (new cljs.core.PersistentVector(null,2,(5),inst_28106,inst_28107,null));
var state_28119__$1 = (function (){var statearr_28126 = state_28119;
(statearr_28126[(8)] = inst_28105__$1);

return statearr_28126;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28119__$1,(8),jobs,inst_28108);
} else {
if((state_val_28120 === (7))){
var inst_28115 = (state_28119[(2)]);
var state_28119__$1 = state_28119;
var statearr_28127_28239 = state_28119__$1;
(statearr_28127_28239[(2)] = inst_28115);

(statearr_28127_28239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28120 === (8))){
var inst_28105 = (state_28119[(8)]);
var inst_28110 = (state_28119[(2)]);
var state_28119__$1 = (function (){var statearr_28128 = state_28119;
(statearr_28128[(9)] = inst_28110);

return statearr_28128;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28119__$1,(9),results,inst_28105);
} else {
if((state_val_28120 === (9))){
var inst_28112 = (state_28119[(2)]);
var state_28119__$1 = (function (){var statearr_28129 = state_28119;
(statearr_28129[(10)] = inst_28112);

return statearr_28129;
})();
var statearr_28130_28240 = state_28119__$1;
(statearr_28130_28240[(2)] = null);

(statearr_28130_28240[(1)] = (2));


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
});})(c__19424__auto___28234,jobs,results,process,async))
;
return ((function (switch__19359__auto__,c__19424__auto___28234,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_28134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_28134[(1)] = (1));

return statearr_28134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_28119){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28135){if((e28135 instanceof Object)){
var ex__19363__auto__ = e28135;
var statearr_28136_28241 = state_28119;
(statearr_28136_28241[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28242 = state_28119;
state_28119 = G__28242;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_28119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_28119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___28234,jobs,results,process,async))
})();
var state__19426__auto__ = (function (){var statearr_28137 = f__19425__auto__.call(null);
(statearr_28137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___28234);

return statearr_28137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___28234,jobs,results,process,async))
);


var c__19424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto__,jobs,results,process,async){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto__,jobs,results,process,async){
return (function (state_28175){
var state_val_28176 = (state_28175[(1)]);
if((state_val_28176 === (7))){
var inst_28171 = (state_28175[(2)]);
var state_28175__$1 = state_28175;
var statearr_28177_28243 = state_28175__$1;
(statearr_28177_28243[(2)] = inst_28171);

(statearr_28177_28243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (20))){
var state_28175__$1 = state_28175;
var statearr_28178_28244 = state_28175__$1;
(statearr_28178_28244[(2)] = null);

(statearr_28178_28244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (1))){
var state_28175__$1 = state_28175;
var statearr_28179_28245 = state_28175__$1;
(statearr_28179_28245[(2)] = null);

(statearr_28179_28245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (4))){
var inst_28140 = (state_28175[(7)]);
var inst_28140__$1 = (state_28175[(2)]);
var inst_28141 = (inst_28140__$1 == null);
var state_28175__$1 = (function (){var statearr_28180 = state_28175;
(statearr_28180[(7)] = inst_28140__$1);

return statearr_28180;
})();
if(cljs.core.truth_(inst_28141)){
var statearr_28181_28246 = state_28175__$1;
(statearr_28181_28246[(1)] = (5));

} else {
var statearr_28182_28247 = state_28175__$1;
(statearr_28182_28247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (15))){
var inst_28153 = (state_28175[(8)]);
var state_28175__$1 = state_28175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28175__$1,(18),to,inst_28153);
} else {
if((state_val_28176 === (21))){
var inst_28166 = (state_28175[(2)]);
var state_28175__$1 = state_28175;
var statearr_28183_28248 = state_28175__$1;
(statearr_28183_28248[(2)] = inst_28166);

(statearr_28183_28248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (13))){
var inst_28168 = (state_28175[(2)]);
var state_28175__$1 = (function (){var statearr_28184 = state_28175;
(statearr_28184[(9)] = inst_28168);

return statearr_28184;
})();
var statearr_28185_28249 = state_28175__$1;
(statearr_28185_28249[(2)] = null);

(statearr_28185_28249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (6))){
var inst_28140 = (state_28175[(7)]);
var state_28175__$1 = state_28175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28175__$1,(11),inst_28140);
} else {
if((state_val_28176 === (17))){
var inst_28161 = (state_28175[(2)]);
var state_28175__$1 = state_28175;
if(cljs.core.truth_(inst_28161)){
var statearr_28186_28250 = state_28175__$1;
(statearr_28186_28250[(1)] = (19));

} else {
var statearr_28187_28251 = state_28175__$1;
(statearr_28187_28251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (3))){
var inst_28173 = (state_28175[(2)]);
var state_28175__$1 = state_28175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28175__$1,inst_28173);
} else {
if((state_val_28176 === (12))){
var inst_28150 = (state_28175[(10)]);
var state_28175__$1 = state_28175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28175__$1,(14),inst_28150);
} else {
if((state_val_28176 === (2))){
var state_28175__$1 = state_28175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28175__$1,(4),results);
} else {
if((state_val_28176 === (19))){
var state_28175__$1 = state_28175;
var statearr_28188_28252 = state_28175__$1;
(statearr_28188_28252[(2)] = null);

(statearr_28188_28252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (11))){
var inst_28150 = (state_28175[(2)]);
var state_28175__$1 = (function (){var statearr_28189 = state_28175;
(statearr_28189[(10)] = inst_28150);

return statearr_28189;
})();
var statearr_28190_28253 = state_28175__$1;
(statearr_28190_28253[(2)] = null);

(statearr_28190_28253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (9))){
var state_28175__$1 = state_28175;
var statearr_28191_28254 = state_28175__$1;
(statearr_28191_28254[(2)] = null);

(statearr_28191_28254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (5))){
var state_28175__$1 = state_28175;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28192_28255 = state_28175__$1;
(statearr_28192_28255[(1)] = (8));

} else {
var statearr_28193_28256 = state_28175__$1;
(statearr_28193_28256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (14))){
var inst_28153 = (state_28175[(8)]);
var inst_28155 = (state_28175[(11)]);
var inst_28153__$1 = (state_28175[(2)]);
var inst_28154 = (inst_28153__$1 == null);
var inst_28155__$1 = cljs.core.not.call(null,inst_28154);
var state_28175__$1 = (function (){var statearr_28194 = state_28175;
(statearr_28194[(8)] = inst_28153__$1);

(statearr_28194[(11)] = inst_28155__$1);

return statearr_28194;
})();
if(inst_28155__$1){
var statearr_28195_28257 = state_28175__$1;
(statearr_28195_28257[(1)] = (15));

} else {
var statearr_28196_28258 = state_28175__$1;
(statearr_28196_28258[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (16))){
var inst_28155 = (state_28175[(11)]);
var state_28175__$1 = state_28175;
var statearr_28197_28259 = state_28175__$1;
(statearr_28197_28259[(2)] = inst_28155);

(statearr_28197_28259[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (10))){
var inst_28147 = (state_28175[(2)]);
var state_28175__$1 = state_28175;
var statearr_28198_28260 = state_28175__$1;
(statearr_28198_28260[(2)] = inst_28147);

(statearr_28198_28260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (18))){
var inst_28158 = (state_28175[(2)]);
var state_28175__$1 = state_28175;
var statearr_28199_28261 = state_28175__$1;
(statearr_28199_28261[(2)] = inst_28158);

(statearr_28199_28261[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28176 === (8))){
var inst_28144 = cljs.core.async.close_BANG_.call(null,to);
var state_28175__$1 = state_28175;
var statearr_28200_28262 = state_28175__$1;
(statearr_28200_28262[(2)] = inst_28144);

(statearr_28200_28262[(1)] = (10));


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
var statearr_28204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_28204[(1)] = (1));

return statearr_28204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_28175){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28205){if((e28205 instanceof Object)){
var ex__19363__auto__ = e28205;
var statearr_28206_28263 = state_28175;
(statearr_28206_28263[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28264 = state_28175;
state_28175 = G__28264;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_28175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_28175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__,jobs,results,process,async))
})();
var state__19426__auto__ = (function (){var statearr_28207 = f__19425__auto__.call(null);
(statearr_28207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_28207;
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
var args28265 = [];
var len__17402__auto___28268 = arguments.length;
var i__17403__auto___28269 = (0);
while(true){
if((i__17403__auto___28269 < len__17402__auto___28268)){
args28265.push((arguments[i__17403__auto___28269]));

var G__28270 = (i__17403__auto___28269 + (1));
i__17403__auto___28269 = G__28270;
continue;
} else {
}
break;
}

var G__28267 = args28265.length;
switch (G__28267) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28265.length)].join('')));

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
var args28272 = [];
var len__17402__auto___28275 = arguments.length;
var i__17403__auto___28276 = (0);
while(true){
if((i__17403__auto___28276 < len__17402__auto___28275)){
args28272.push((arguments[i__17403__auto___28276]));

var G__28277 = (i__17403__auto___28276 + (1));
i__17403__auto___28276 = G__28277;
continue;
} else {
}
break;
}

var G__28274 = args28272.length;
switch (G__28274) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28272.length)].join('')));

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
var args28279 = [];
var len__17402__auto___28332 = arguments.length;
var i__17403__auto___28333 = (0);
while(true){
if((i__17403__auto___28333 < len__17402__auto___28332)){
args28279.push((arguments[i__17403__auto___28333]));

var G__28334 = (i__17403__auto___28333 + (1));
i__17403__auto___28333 = G__28334;
continue;
} else {
}
break;
}

var G__28281 = args28279.length;
switch (G__28281) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28279.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19424__auto___28336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___28336,tc,fc){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___28336,tc,fc){
return (function (state_28307){
var state_val_28308 = (state_28307[(1)]);
if((state_val_28308 === (7))){
var inst_28303 = (state_28307[(2)]);
var state_28307__$1 = state_28307;
var statearr_28309_28337 = state_28307__$1;
(statearr_28309_28337[(2)] = inst_28303);

(statearr_28309_28337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (1))){
var state_28307__$1 = state_28307;
var statearr_28310_28338 = state_28307__$1;
(statearr_28310_28338[(2)] = null);

(statearr_28310_28338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (4))){
var inst_28284 = (state_28307[(7)]);
var inst_28284__$1 = (state_28307[(2)]);
var inst_28285 = (inst_28284__$1 == null);
var state_28307__$1 = (function (){var statearr_28311 = state_28307;
(statearr_28311[(7)] = inst_28284__$1);

return statearr_28311;
})();
if(cljs.core.truth_(inst_28285)){
var statearr_28312_28339 = state_28307__$1;
(statearr_28312_28339[(1)] = (5));

} else {
var statearr_28313_28340 = state_28307__$1;
(statearr_28313_28340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (13))){
var state_28307__$1 = state_28307;
var statearr_28314_28341 = state_28307__$1;
(statearr_28314_28341[(2)] = null);

(statearr_28314_28341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (6))){
var inst_28284 = (state_28307[(7)]);
var inst_28290 = p.call(null,inst_28284);
var state_28307__$1 = state_28307;
if(cljs.core.truth_(inst_28290)){
var statearr_28315_28342 = state_28307__$1;
(statearr_28315_28342[(1)] = (9));

} else {
var statearr_28316_28343 = state_28307__$1;
(statearr_28316_28343[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (3))){
var inst_28305 = (state_28307[(2)]);
var state_28307__$1 = state_28307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28307__$1,inst_28305);
} else {
if((state_val_28308 === (12))){
var state_28307__$1 = state_28307;
var statearr_28317_28344 = state_28307__$1;
(statearr_28317_28344[(2)] = null);

(statearr_28317_28344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (2))){
var state_28307__$1 = state_28307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28307__$1,(4),ch);
} else {
if((state_val_28308 === (11))){
var inst_28284 = (state_28307[(7)]);
var inst_28294 = (state_28307[(2)]);
var state_28307__$1 = state_28307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28307__$1,(8),inst_28294,inst_28284);
} else {
if((state_val_28308 === (9))){
var state_28307__$1 = state_28307;
var statearr_28318_28345 = state_28307__$1;
(statearr_28318_28345[(2)] = tc);

(statearr_28318_28345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (5))){
var inst_28287 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28288 = cljs.core.async.close_BANG_.call(null,fc);
var state_28307__$1 = (function (){var statearr_28319 = state_28307;
(statearr_28319[(8)] = inst_28287);

return statearr_28319;
})();
var statearr_28320_28346 = state_28307__$1;
(statearr_28320_28346[(2)] = inst_28288);

(statearr_28320_28346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (14))){
var inst_28301 = (state_28307[(2)]);
var state_28307__$1 = state_28307;
var statearr_28321_28347 = state_28307__$1;
(statearr_28321_28347[(2)] = inst_28301);

(statearr_28321_28347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (10))){
var state_28307__$1 = state_28307;
var statearr_28322_28348 = state_28307__$1;
(statearr_28322_28348[(2)] = fc);

(statearr_28322_28348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (8))){
var inst_28296 = (state_28307[(2)]);
var state_28307__$1 = state_28307;
if(cljs.core.truth_(inst_28296)){
var statearr_28323_28349 = state_28307__$1;
(statearr_28323_28349[(1)] = (12));

} else {
var statearr_28324_28350 = state_28307__$1;
(statearr_28324_28350[(1)] = (13));

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
});})(c__19424__auto___28336,tc,fc))
;
return ((function (switch__19359__auto__,c__19424__auto___28336,tc,fc){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_28328 = [null,null,null,null,null,null,null,null,null];
(statearr_28328[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_28328[(1)] = (1));

return statearr_28328;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_28307){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28329){if((e28329 instanceof Object)){
var ex__19363__auto__ = e28329;
var statearr_28330_28351 = state_28307;
(statearr_28330_28351[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28352 = state_28307;
state_28307 = G__28352;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_28307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_28307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___28336,tc,fc))
})();
var state__19426__auto__ = (function (){var statearr_28331 = f__19425__auto__.call(null);
(statearr_28331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___28336);

return statearr_28331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___28336,tc,fc))
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
return (function (state_28399){
var state_val_28400 = (state_28399[(1)]);
if((state_val_28400 === (1))){
var inst_28385 = init;
var state_28399__$1 = (function (){var statearr_28401 = state_28399;
(statearr_28401[(7)] = inst_28385);

return statearr_28401;
})();
var statearr_28402_28417 = state_28399__$1;
(statearr_28402_28417[(2)] = null);

(statearr_28402_28417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (2))){
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28399__$1,(4),ch);
} else {
if((state_val_28400 === (3))){
var inst_28397 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28399__$1,inst_28397);
} else {
if((state_val_28400 === (4))){
var inst_28388 = (state_28399[(8)]);
var inst_28388__$1 = (state_28399[(2)]);
var inst_28389 = (inst_28388__$1 == null);
var state_28399__$1 = (function (){var statearr_28403 = state_28399;
(statearr_28403[(8)] = inst_28388__$1);

return statearr_28403;
})();
if(cljs.core.truth_(inst_28389)){
var statearr_28404_28418 = state_28399__$1;
(statearr_28404_28418[(1)] = (5));

} else {
var statearr_28405_28419 = state_28399__$1;
(statearr_28405_28419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (5))){
var inst_28385 = (state_28399[(7)]);
var state_28399__$1 = state_28399;
var statearr_28406_28420 = state_28399__$1;
(statearr_28406_28420[(2)] = inst_28385);

(statearr_28406_28420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (6))){
var inst_28385 = (state_28399[(7)]);
var inst_28388 = (state_28399[(8)]);
var inst_28392 = f.call(null,inst_28385,inst_28388);
var inst_28385__$1 = inst_28392;
var state_28399__$1 = (function (){var statearr_28407 = state_28399;
(statearr_28407[(7)] = inst_28385__$1);

return statearr_28407;
})();
var statearr_28408_28421 = state_28399__$1;
(statearr_28408_28421[(2)] = null);

(statearr_28408_28421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28400 === (7))){
var inst_28395 = (state_28399[(2)]);
var state_28399__$1 = state_28399;
var statearr_28409_28422 = state_28399__$1;
(statearr_28409_28422[(2)] = inst_28395);

(statearr_28409_28422[(1)] = (3));


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
var statearr_28413 = [null,null,null,null,null,null,null,null,null];
(statearr_28413[(0)] = cljs$core$async$reduce_$_state_machine__19360__auto__);

(statearr_28413[(1)] = (1));

return statearr_28413;
});
var cljs$core$async$reduce_$_state_machine__19360__auto____1 = (function (state_28399){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28414){if((e28414 instanceof Object)){
var ex__19363__auto__ = e28414;
var statearr_28415_28423 = state_28399;
(statearr_28415_28423[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28424 = state_28399;
state_28399 = G__28424;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19360__auto__ = function(state_28399){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19360__auto____1.call(this,state_28399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19360__auto____0;
cljs$core$async$reduce_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19360__auto____1;
return cljs$core$async$reduce_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__))
})();
var state__19426__auto__ = (function (){var statearr_28416 = f__19425__auto__.call(null);
(statearr_28416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_28416;
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
var args28425 = [];
var len__17402__auto___28477 = arguments.length;
var i__17403__auto___28478 = (0);
while(true){
if((i__17403__auto___28478 < len__17402__auto___28477)){
args28425.push((arguments[i__17403__auto___28478]));

var G__28479 = (i__17403__auto___28478 + (1));
i__17403__auto___28478 = G__28479;
continue;
} else {
}
break;
}

var G__28427 = args28425.length;
switch (G__28427) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28425.length)].join('')));

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
return (function (state_28452){
var state_val_28453 = (state_28452[(1)]);
if((state_val_28453 === (7))){
var inst_28434 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
var statearr_28454_28481 = state_28452__$1;
(statearr_28454_28481[(2)] = inst_28434);

(statearr_28454_28481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (1))){
var inst_28428 = cljs.core.seq.call(null,coll);
var inst_28429 = inst_28428;
var state_28452__$1 = (function (){var statearr_28455 = state_28452;
(statearr_28455[(7)] = inst_28429);

return statearr_28455;
})();
var statearr_28456_28482 = state_28452__$1;
(statearr_28456_28482[(2)] = null);

(statearr_28456_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (4))){
var inst_28429 = (state_28452[(7)]);
var inst_28432 = cljs.core.first.call(null,inst_28429);
var state_28452__$1 = state_28452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28452__$1,(7),ch,inst_28432);
} else {
if((state_val_28453 === (13))){
var inst_28446 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
var statearr_28457_28483 = state_28452__$1;
(statearr_28457_28483[(2)] = inst_28446);

(statearr_28457_28483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (6))){
var inst_28437 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
if(cljs.core.truth_(inst_28437)){
var statearr_28458_28484 = state_28452__$1;
(statearr_28458_28484[(1)] = (8));

} else {
var statearr_28459_28485 = state_28452__$1;
(statearr_28459_28485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (3))){
var inst_28450 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28452__$1,inst_28450);
} else {
if((state_val_28453 === (12))){
var state_28452__$1 = state_28452;
var statearr_28460_28486 = state_28452__$1;
(statearr_28460_28486[(2)] = null);

(statearr_28460_28486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (2))){
var inst_28429 = (state_28452[(7)]);
var state_28452__$1 = state_28452;
if(cljs.core.truth_(inst_28429)){
var statearr_28461_28487 = state_28452__$1;
(statearr_28461_28487[(1)] = (4));

} else {
var statearr_28462_28488 = state_28452__$1;
(statearr_28462_28488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (11))){
var inst_28443 = cljs.core.async.close_BANG_.call(null,ch);
var state_28452__$1 = state_28452;
var statearr_28463_28489 = state_28452__$1;
(statearr_28463_28489[(2)] = inst_28443);

(statearr_28463_28489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (9))){
var state_28452__$1 = state_28452;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28464_28490 = state_28452__$1;
(statearr_28464_28490[(1)] = (11));

} else {
var statearr_28465_28491 = state_28452__$1;
(statearr_28465_28491[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (5))){
var inst_28429 = (state_28452[(7)]);
var state_28452__$1 = state_28452;
var statearr_28466_28492 = state_28452__$1;
(statearr_28466_28492[(2)] = inst_28429);

(statearr_28466_28492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (10))){
var inst_28448 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
var statearr_28467_28493 = state_28452__$1;
(statearr_28467_28493[(2)] = inst_28448);

(statearr_28467_28493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (8))){
var inst_28429 = (state_28452[(7)]);
var inst_28439 = cljs.core.next.call(null,inst_28429);
var inst_28429__$1 = inst_28439;
var state_28452__$1 = (function (){var statearr_28468 = state_28452;
(statearr_28468[(7)] = inst_28429__$1);

return statearr_28468;
})();
var statearr_28469_28494 = state_28452__$1;
(statearr_28469_28494[(2)] = null);

(statearr_28469_28494[(1)] = (2));


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
var statearr_28473 = [null,null,null,null,null,null,null,null];
(statearr_28473[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_28473[(1)] = (1));

return statearr_28473;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_28452){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28474){if((e28474 instanceof Object)){
var ex__19363__auto__ = e28474;
var statearr_28475_28495 = state_28452;
(statearr_28475_28495[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28496 = state_28452;
state_28452 = G__28496;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_28452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_28452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__))
})();
var state__19426__auto__ = (function (){var statearr_28476 = f__19425__auto__.call(null);
(statearr_28476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_28476;
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
if(typeof cljs.core.async.t_cljs$core$async28718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28718 = (function (mult,ch,cs,meta28719){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28719 = meta28719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28720,meta28719__$1){
var self__ = this;
var _28720__$1 = this;
return (new cljs.core.async.t_cljs$core$async28718(self__.mult,self__.ch,self__.cs,meta28719__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28720){
var self__ = this;
var _28720__$1 = this;
return self__.meta28719;
});})(cs))
;

cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28718.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28719","meta28719",-2098976927,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28718";

cljs.core.async.t_cljs$core$async28718.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async28718");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28718 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28718(mult__$1,ch__$1,cs__$1,meta28719){
return (new cljs.core.async.t_cljs$core$async28718(mult__$1,ch__$1,cs__$1,meta28719));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28718(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19424__auto___28939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___28939,cs,m,dchan,dctr,done){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___28939,cs,m,dchan,dctr,done){
return (function (state_28851){
var state_val_28852 = (state_28851[(1)]);
if((state_val_28852 === (7))){
var inst_28847 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28853_28940 = state_28851__$1;
(statearr_28853_28940[(2)] = inst_28847);

(statearr_28853_28940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (20))){
var inst_28752 = (state_28851[(7)]);
var inst_28762 = cljs.core.first.call(null,inst_28752);
var inst_28763 = cljs.core.nth.call(null,inst_28762,(0),null);
var inst_28764 = cljs.core.nth.call(null,inst_28762,(1),null);
var state_28851__$1 = (function (){var statearr_28854 = state_28851;
(statearr_28854[(8)] = inst_28763);

return statearr_28854;
})();
if(cljs.core.truth_(inst_28764)){
var statearr_28855_28941 = state_28851__$1;
(statearr_28855_28941[(1)] = (22));

} else {
var statearr_28856_28942 = state_28851__$1;
(statearr_28856_28942[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (27))){
var inst_28799 = (state_28851[(9)]);
var inst_28723 = (state_28851[(10)]);
var inst_28792 = (state_28851[(11)]);
var inst_28794 = (state_28851[(12)]);
var inst_28799__$1 = cljs.core._nth.call(null,inst_28792,inst_28794);
var inst_28800 = cljs.core.async.put_BANG_.call(null,inst_28799__$1,inst_28723,done);
var state_28851__$1 = (function (){var statearr_28857 = state_28851;
(statearr_28857[(9)] = inst_28799__$1);

return statearr_28857;
})();
if(cljs.core.truth_(inst_28800)){
var statearr_28858_28943 = state_28851__$1;
(statearr_28858_28943[(1)] = (30));

} else {
var statearr_28859_28944 = state_28851__$1;
(statearr_28859_28944[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (1))){
var state_28851__$1 = state_28851;
var statearr_28860_28945 = state_28851__$1;
(statearr_28860_28945[(2)] = null);

(statearr_28860_28945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (24))){
var inst_28752 = (state_28851[(7)]);
var inst_28769 = (state_28851[(2)]);
var inst_28770 = cljs.core.next.call(null,inst_28752);
var inst_28732 = inst_28770;
var inst_28733 = null;
var inst_28734 = (0);
var inst_28735 = (0);
var state_28851__$1 = (function (){var statearr_28861 = state_28851;
(statearr_28861[(13)] = inst_28769);

(statearr_28861[(14)] = inst_28733);

(statearr_28861[(15)] = inst_28735);

(statearr_28861[(16)] = inst_28732);

(statearr_28861[(17)] = inst_28734);

return statearr_28861;
})();
var statearr_28862_28946 = state_28851__$1;
(statearr_28862_28946[(2)] = null);

(statearr_28862_28946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (39))){
var state_28851__$1 = state_28851;
var statearr_28866_28947 = state_28851__$1;
(statearr_28866_28947[(2)] = null);

(statearr_28866_28947[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (4))){
var inst_28723 = (state_28851[(10)]);
var inst_28723__$1 = (state_28851[(2)]);
var inst_28724 = (inst_28723__$1 == null);
var state_28851__$1 = (function (){var statearr_28867 = state_28851;
(statearr_28867[(10)] = inst_28723__$1);

return statearr_28867;
})();
if(cljs.core.truth_(inst_28724)){
var statearr_28868_28948 = state_28851__$1;
(statearr_28868_28948[(1)] = (5));

} else {
var statearr_28869_28949 = state_28851__$1;
(statearr_28869_28949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (15))){
var inst_28733 = (state_28851[(14)]);
var inst_28735 = (state_28851[(15)]);
var inst_28732 = (state_28851[(16)]);
var inst_28734 = (state_28851[(17)]);
var inst_28748 = (state_28851[(2)]);
var inst_28749 = (inst_28735 + (1));
var tmp28863 = inst_28733;
var tmp28864 = inst_28732;
var tmp28865 = inst_28734;
var inst_28732__$1 = tmp28864;
var inst_28733__$1 = tmp28863;
var inst_28734__$1 = tmp28865;
var inst_28735__$1 = inst_28749;
var state_28851__$1 = (function (){var statearr_28870 = state_28851;
(statearr_28870[(14)] = inst_28733__$1);

(statearr_28870[(18)] = inst_28748);

(statearr_28870[(15)] = inst_28735__$1);

(statearr_28870[(16)] = inst_28732__$1);

(statearr_28870[(17)] = inst_28734__$1);

return statearr_28870;
})();
var statearr_28871_28950 = state_28851__$1;
(statearr_28871_28950[(2)] = null);

(statearr_28871_28950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (21))){
var inst_28773 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28875_28951 = state_28851__$1;
(statearr_28875_28951[(2)] = inst_28773);

(statearr_28875_28951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (31))){
var inst_28799 = (state_28851[(9)]);
var inst_28803 = done.call(null,null);
var inst_28804 = cljs.core.async.untap_STAR_.call(null,m,inst_28799);
var state_28851__$1 = (function (){var statearr_28876 = state_28851;
(statearr_28876[(19)] = inst_28803);

return statearr_28876;
})();
var statearr_28877_28952 = state_28851__$1;
(statearr_28877_28952[(2)] = inst_28804);

(statearr_28877_28952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (32))){
var inst_28793 = (state_28851[(20)]);
var inst_28791 = (state_28851[(21)]);
var inst_28792 = (state_28851[(11)]);
var inst_28794 = (state_28851[(12)]);
var inst_28806 = (state_28851[(2)]);
var inst_28807 = (inst_28794 + (1));
var tmp28872 = inst_28793;
var tmp28873 = inst_28791;
var tmp28874 = inst_28792;
var inst_28791__$1 = tmp28873;
var inst_28792__$1 = tmp28874;
var inst_28793__$1 = tmp28872;
var inst_28794__$1 = inst_28807;
var state_28851__$1 = (function (){var statearr_28878 = state_28851;
(statearr_28878[(20)] = inst_28793__$1);

(statearr_28878[(21)] = inst_28791__$1);

(statearr_28878[(22)] = inst_28806);

(statearr_28878[(11)] = inst_28792__$1);

(statearr_28878[(12)] = inst_28794__$1);

return statearr_28878;
})();
var statearr_28879_28953 = state_28851__$1;
(statearr_28879_28953[(2)] = null);

(statearr_28879_28953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (40))){
var inst_28819 = (state_28851[(23)]);
var inst_28823 = done.call(null,null);
var inst_28824 = cljs.core.async.untap_STAR_.call(null,m,inst_28819);
var state_28851__$1 = (function (){var statearr_28880 = state_28851;
(statearr_28880[(24)] = inst_28823);

return statearr_28880;
})();
var statearr_28881_28954 = state_28851__$1;
(statearr_28881_28954[(2)] = inst_28824);

(statearr_28881_28954[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (33))){
var inst_28810 = (state_28851[(25)]);
var inst_28812 = cljs.core.chunked_seq_QMARK_.call(null,inst_28810);
var state_28851__$1 = state_28851;
if(inst_28812){
var statearr_28882_28955 = state_28851__$1;
(statearr_28882_28955[(1)] = (36));

} else {
var statearr_28883_28956 = state_28851__$1;
(statearr_28883_28956[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (13))){
var inst_28742 = (state_28851[(26)]);
var inst_28745 = cljs.core.async.close_BANG_.call(null,inst_28742);
var state_28851__$1 = state_28851;
var statearr_28884_28957 = state_28851__$1;
(statearr_28884_28957[(2)] = inst_28745);

(statearr_28884_28957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (22))){
var inst_28763 = (state_28851[(8)]);
var inst_28766 = cljs.core.async.close_BANG_.call(null,inst_28763);
var state_28851__$1 = state_28851;
var statearr_28885_28958 = state_28851__$1;
(statearr_28885_28958[(2)] = inst_28766);

(statearr_28885_28958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (36))){
var inst_28810 = (state_28851[(25)]);
var inst_28814 = cljs.core.chunk_first.call(null,inst_28810);
var inst_28815 = cljs.core.chunk_rest.call(null,inst_28810);
var inst_28816 = cljs.core.count.call(null,inst_28814);
var inst_28791 = inst_28815;
var inst_28792 = inst_28814;
var inst_28793 = inst_28816;
var inst_28794 = (0);
var state_28851__$1 = (function (){var statearr_28886 = state_28851;
(statearr_28886[(20)] = inst_28793);

(statearr_28886[(21)] = inst_28791);

(statearr_28886[(11)] = inst_28792);

(statearr_28886[(12)] = inst_28794);

return statearr_28886;
})();
var statearr_28887_28959 = state_28851__$1;
(statearr_28887_28959[(2)] = null);

(statearr_28887_28959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (41))){
var inst_28810 = (state_28851[(25)]);
var inst_28826 = (state_28851[(2)]);
var inst_28827 = cljs.core.next.call(null,inst_28810);
var inst_28791 = inst_28827;
var inst_28792 = null;
var inst_28793 = (0);
var inst_28794 = (0);
var state_28851__$1 = (function (){var statearr_28888 = state_28851;
(statearr_28888[(20)] = inst_28793);

(statearr_28888[(27)] = inst_28826);

(statearr_28888[(21)] = inst_28791);

(statearr_28888[(11)] = inst_28792);

(statearr_28888[(12)] = inst_28794);

return statearr_28888;
})();
var statearr_28889_28960 = state_28851__$1;
(statearr_28889_28960[(2)] = null);

(statearr_28889_28960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (43))){
var state_28851__$1 = state_28851;
var statearr_28890_28961 = state_28851__$1;
(statearr_28890_28961[(2)] = null);

(statearr_28890_28961[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (29))){
var inst_28835 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28891_28962 = state_28851__$1;
(statearr_28891_28962[(2)] = inst_28835);

(statearr_28891_28962[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (44))){
var inst_28844 = (state_28851[(2)]);
var state_28851__$1 = (function (){var statearr_28892 = state_28851;
(statearr_28892[(28)] = inst_28844);

return statearr_28892;
})();
var statearr_28893_28963 = state_28851__$1;
(statearr_28893_28963[(2)] = null);

(statearr_28893_28963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (6))){
var inst_28783 = (state_28851[(29)]);
var inst_28782 = cljs.core.deref.call(null,cs);
var inst_28783__$1 = cljs.core.keys.call(null,inst_28782);
var inst_28784 = cljs.core.count.call(null,inst_28783__$1);
var inst_28785 = cljs.core.reset_BANG_.call(null,dctr,inst_28784);
var inst_28790 = cljs.core.seq.call(null,inst_28783__$1);
var inst_28791 = inst_28790;
var inst_28792 = null;
var inst_28793 = (0);
var inst_28794 = (0);
var state_28851__$1 = (function (){var statearr_28894 = state_28851;
(statearr_28894[(20)] = inst_28793);

(statearr_28894[(29)] = inst_28783__$1);

(statearr_28894[(21)] = inst_28791);

(statearr_28894[(30)] = inst_28785);

(statearr_28894[(11)] = inst_28792);

(statearr_28894[(12)] = inst_28794);

return statearr_28894;
})();
var statearr_28895_28964 = state_28851__$1;
(statearr_28895_28964[(2)] = null);

(statearr_28895_28964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (28))){
var inst_28791 = (state_28851[(21)]);
var inst_28810 = (state_28851[(25)]);
var inst_28810__$1 = cljs.core.seq.call(null,inst_28791);
var state_28851__$1 = (function (){var statearr_28896 = state_28851;
(statearr_28896[(25)] = inst_28810__$1);

return statearr_28896;
})();
if(inst_28810__$1){
var statearr_28897_28965 = state_28851__$1;
(statearr_28897_28965[(1)] = (33));

} else {
var statearr_28898_28966 = state_28851__$1;
(statearr_28898_28966[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (25))){
var inst_28793 = (state_28851[(20)]);
var inst_28794 = (state_28851[(12)]);
var inst_28796 = (inst_28794 < inst_28793);
var inst_28797 = inst_28796;
var state_28851__$1 = state_28851;
if(cljs.core.truth_(inst_28797)){
var statearr_28899_28967 = state_28851__$1;
(statearr_28899_28967[(1)] = (27));

} else {
var statearr_28900_28968 = state_28851__$1;
(statearr_28900_28968[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (34))){
var state_28851__$1 = state_28851;
var statearr_28901_28969 = state_28851__$1;
(statearr_28901_28969[(2)] = null);

(statearr_28901_28969[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (17))){
var state_28851__$1 = state_28851;
var statearr_28902_28970 = state_28851__$1;
(statearr_28902_28970[(2)] = null);

(statearr_28902_28970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (3))){
var inst_28849 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28851__$1,inst_28849);
} else {
if((state_val_28852 === (12))){
var inst_28778 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28903_28971 = state_28851__$1;
(statearr_28903_28971[(2)] = inst_28778);

(statearr_28903_28971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (2))){
var state_28851__$1 = state_28851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28851__$1,(4),ch);
} else {
if((state_val_28852 === (23))){
var state_28851__$1 = state_28851;
var statearr_28904_28972 = state_28851__$1;
(statearr_28904_28972[(2)] = null);

(statearr_28904_28972[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (35))){
var inst_28833 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28905_28973 = state_28851__$1;
(statearr_28905_28973[(2)] = inst_28833);

(statearr_28905_28973[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (19))){
var inst_28752 = (state_28851[(7)]);
var inst_28756 = cljs.core.chunk_first.call(null,inst_28752);
var inst_28757 = cljs.core.chunk_rest.call(null,inst_28752);
var inst_28758 = cljs.core.count.call(null,inst_28756);
var inst_28732 = inst_28757;
var inst_28733 = inst_28756;
var inst_28734 = inst_28758;
var inst_28735 = (0);
var state_28851__$1 = (function (){var statearr_28906 = state_28851;
(statearr_28906[(14)] = inst_28733);

(statearr_28906[(15)] = inst_28735);

(statearr_28906[(16)] = inst_28732);

(statearr_28906[(17)] = inst_28734);

return statearr_28906;
})();
var statearr_28907_28974 = state_28851__$1;
(statearr_28907_28974[(2)] = null);

(statearr_28907_28974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (11))){
var inst_28732 = (state_28851[(16)]);
var inst_28752 = (state_28851[(7)]);
var inst_28752__$1 = cljs.core.seq.call(null,inst_28732);
var state_28851__$1 = (function (){var statearr_28908 = state_28851;
(statearr_28908[(7)] = inst_28752__$1);

return statearr_28908;
})();
if(inst_28752__$1){
var statearr_28909_28975 = state_28851__$1;
(statearr_28909_28975[(1)] = (16));

} else {
var statearr_28910_28976 = state_28851__$1;
(statearr_28910_28976[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (9))){
var inst_28780 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28911_28977 = state_28851__$1;
(statearr_28911_28977[(2)] = inst_28780);

(statearr_28911_28977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (5))){
var inst_28730 = cljs.core.deref.call(null,cs);
var inst_28731 = cljs.core.seq.call(null,inst_28730);
var inst_28732 = inst_28731;
var inst_28733 = null;
var inst_28734 = (0);
var inst_28735 = (0);
var state_28851__$1 = (function (){var statearr_28912 = state_28851;
(statearr_28912[(14)] = inst_28733);

(statearr_28912[(15)] = inst_28735);

(statearr_28912[(16)] = inst_28732);

(statearr_28912[(17)] = inst_28734);

return statearr_28912;
})();
var statearr_28913_28978 = state_28851__$1;
(statearr_28913_28978[(2)] = null);

(statearr_28913_28978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (14))){
var state_28851__$1 = state_28851;
var statearr_28914_28979 = state_28851__$1;
(statearr_28914_28979[(2)] = null);

(statearr_28914_28979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (45))){
var inst_28841 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28915_28980 = state_28851__$1;
(statearr_28915_28980[(2)] = inst_28841);

(statearr_28915_28980[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (26))){
var inst_28783 = (state_28851[(29)]);
var inst_28837 = (state_28851[(2)]);
var inst_28838 = cljs.core.seq.call(null,inst_28783);
var state_28851__$1 = (function (){var statearr_28916 = state_28851;
(statearr_28916[(31)] = inst_28837);

return statearr_28916;
})();
if(inst_28838){
var statearr_28917_28981 = state_28851__$1;
(statearr_28917_28981[(1)] = (42));

} else {
var statearr_28918_28982 = state_28851__$1;
(statearr_28918_28982[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (16))){
var inst_28752 = (state_28851[(7)]);
var inst_28754 = cljs.core.chunked_seq_QMARK_.call(null,inst_28752);
var state_28851__$1 = state_28851;
if(inst_28754){
var statearr_28919_28983 = state_28851__$1;
(statearr_28919_28983[(1)] = (19));

} else {
var statearr_28920_28984 = state_28851__$1;
(statearr_28920_28984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (38))){
var inst_28830 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28921_28985 = state_28851__$1;
(statearr_28921_28985[(2)] = inst_28830);

(statearr_28921_28985[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (30))){
var state_28851__$1 = state_28851;
var statearr_28922_28986 = state_28851__$1;
(statearr_28922_28986[(2)] = null);

(statearr_28922_28986[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (10))){
var inst_28733 = (state_28851[(14)]);
var inst_28735 = (state_28851[(15)]);
var inst_28741 = cljs.core._nth.call(null,inst_28733,inst_28735);
var inst_28742 = cljs.core.nth.call(null,inst_28741,(0),null);
var inst_28743 = cljs.core.nth.call(null,inst_28741,(1),null);
var state_28851__$1 = (function (){var statearr_28923 = state_28851;
(statearr_28923[(26)] = inst_28742);

return statearr_28923;
})();
if(cljs.core.truth_(inst_28743)){
var statearr_28924_28987 = state_28851__$1;
(statearr_28924_28987[(1)] = (13));

} else {
var statearr_28925_28988 = state_28851__$1;
(statearr_28925_28988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (18))){
var inst_28776 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28926_28989 = state_28851__$1;
(statearr_28926_28989[(2)] = inst_28776);

(statearr_28926_28989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (42))){
var state_28851__$1 = state_28851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28851__$1,(45),dchan);
} else {
if((state_val_28852 === (37))){
var inst_28723 = (state_28851[(10)]);
var inst_28810 = (state_28851[(25)]);
var inst_28819 = (state_28851[(23)]);
var inst_28819__$1 = cljs.core.first.call(null,inst_28810);
var inst_28820 = cljs.core.async.put_BANG_.call(null,inst_28819__$1,inst_28723,done);
var state_28851__$1 = (function (){var statearr_28927 = state_28851;
(statearr_28927[(23)] = inst_28819__$1);

return statearr_28927;
})();
if(cljs.core.truth_(inst_28820)){
var statearr_28928_28990 = state_28851__$1;
(statearr_28928_28990[(1)] = (39));

} else {
var statearr_28929_28991 = state_28851__$1;
(statearr_28929_28991[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (8))){
var inst_28735 = (state_28851[(15)]);
var inst_28734 = (state_28851[(17)]);
var inst_28737 = (inst_28735 < inst_28734);
var inst_28738 = inst_28737;
var state_28851__$1 = state_28851;
if(cljs.core.truth_(inst_28738)){
var statearr_28930_28992 = state_28851__$1;
(statearr_28930_28992[(1)] = (10));

} else {
var statearr_28931_28993 = state_28851__$1;
(statearr_28931_28993[(1)] = (11));

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
});})(c__19424__auto___28939,cs,m,dchan,dctr,done))
;
return ((function (switch__19359__auto__,c__19424__auto___28939,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19360__auto__ = null;
var cljs$core$async$mult_$_state_machine__19360__auto____0 = (function (){
var statearr_28935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28935[(0)] = cljs$core$async$mult_$_state_machine__19360__auto__);

(statearr_28935[(1)] = (1));

return statearr_28935;
});
var cljs$core$async$mult_$_state_machine__19360__auto____1 = (function (state_28851){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_28851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e28936){if((e28936 instanceof Object)){
var ex__19363__auto__ = e28936;
var statearr_28937_28994 = state_28851;
(statearr_28937_28994[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28995 = state_28851;
state_28851 = G__28995;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19360__auto__ = function(state_28851){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19360__auto____1.call(this,state_28851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19360__auto____0;
cljs$core$async$mult_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19360__auto____1;
return cljs$core$async$mult_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___28939,cs,m,dchan,dctr,done))
})();
var state__19426__auto__ = (function (){var statearr_28938 = f__19425__auto__.call(null);
(statearr_28938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___28939);

return statearr_28938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___28939,cs,m,dchan,dctr,done))
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
var args28996 = [];
var len__17402__auto___28999 = arguments.length;
var i__17403__auto___29000 = (0);
while(true){
if((i__17403__auto___29000 < len__17402__auto___28999)){
args28996.push((arguments[i__17403__auto___29000]));

var G__29001 = (i__17403__auto___29000 + (1));
i__17403__auto___29000 = G__29001;
continue;
} else {
}
break;
}

var G__28998 = args28996.length;
switch (G__28998) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28996.length)].join('')));

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
var len__17402__auto___29013 = arguments.length;
var i__17403__auto___29014 = (0);
while(true){
if((i__17403__auto___29014 < len__17402__auto___29013)){
args__17409__auto__.push((arguments[i__17403__auto___29014]));

var G__29015 = (i__17403__auto___29014 + (1));
i__17403__auto___29014 = G__29015;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((3) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17410__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29007){
var map__29008 = p__29007;
var map__29008__$1 = ((((!((map__29008 == null)))?((((map__29008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29008):map__29008);
var opts = map__29008__$1;
var statearr_29010_29016 = state;
(statearr_29010_29016[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29008,map__29008__$1,opts){
return (function (val){
var statearr_29011_29017 = state;
(statearr_29011_29017[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29008,map__29008__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29012_29018 = state;
(statearr_29012_29018[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29003){
var G__29004 = cljs.core.first.call(null,seq29003);
var seq29003__$1 = cljs.core.next.call(null,seq29003);
var G__29005 = cljs.core.first.call(null,seq29003__$1);
var seq29003__$2 = cljs.core.next.call(null,seq29003__$1);
var G__29006 = cljs.core.first.call(null,seq29003__$2);
var seq29003__$3 = cljs.core.next.call(null,seq29003__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29004,G__29005,G__29006,seq29003__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29182 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29182 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29183){
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
this.meta29183 = meta29183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29184,meta29183__$1){
var self__ = this;
var _29184__$1 = this;
return (new cljs.core.async.t_cljs$core$async29182(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29183__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29184){
var self__ = this;
var _29184__$1 = this;
return self__.meta29183;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29182.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29182.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29182.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29182.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29182.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29182.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29182.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29182.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29182.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29183","meta29183",-904267014,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29182.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29182";

cljs.core.async.t_cljs$core$async29182.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29182");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29182 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29182(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29183){
return (new cljs.core.async.t_cljs$core$async29182(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29183));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29182(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19424__auto___29345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29282){
var state_val_29283 = (state_29282[(1)]);
if((state_val_29283 === (7))){
var inst_29200 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
var statearr_29284_29346 = state_29282__$1;
(statearr_29284_29346[(2)] = inst_29200);

(statearr_29284_29346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (20))){
var inst_29212 = (state_29282[(7)]);
var state_29282__$1 = state_29282;
var statearr_29285_29347 = state_29282__$1;
(statearr_29285_29347[(2)] = inst_29212);

(statearr_29285_29347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (27))){
var state_29282__$1 = state_29282;
var statearr_29286_29348 = state_29282__$1;
(statearr_29286_29348[(2)] = null);

(statearr_29286_29348[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (1))){
var inst_29188 = (state_29282[(8)]);
var inst_29188__$1 = calc_state.call(null);
var inst_29190 = (inst_29188__$1 == null);
var inst_29191 = cljs.core.not.call(null,inst_29190);
var state_29282__$1 = (function (){var statearr_29287 = state_29282;
(statearr_29287[(8)] = inst_29188__$1);

return statearr_29287;
})();
if(inst_29191){
var statearr_29288_29349 = state_29282__$1;
(statearr_29288_29349[(1)] = (2));

} else {
var statearr_29289_29350 = state_29282__$1;
(statearr_29289_29350[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (24))){
var inst_29256 = (state_29282[(9)]);
var inst_29242 = (state_29282[(10)]);
var inst_29235 = (state_29282[(11)]);
var inst_29256__$1 = inst_29235.call(null,inst_29242);
var state_29282__$1 = (function (){var statearr_29290 = state_29282;
(statearr_29290[(9)] = inst_29256__$1);

return statearr_29290;
})();
if(cljs.core.truth_(inst_29256__$1)){
var statearr_29291_29351 = state_29282__$1;
(statearr_29291_29351[(1)] = (29));

} else {
var statearr_29292_29352 = state_29282__$1;
(statearr_29292_29352[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (4))){
var inst_29203 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
if(cljs.core.truth_(inst_29203)){
var statearr_29293_29353 = state_29282__$1;
(statearr_29293_29353[(1)] = (8));

} else {
var statearr_29294_29354 = state_29282__$1;
(statearr_29294_29354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (15))){
var inst_29229 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
if(cljs.core.truth_(inst_29229)){
var statearr_29295_29355 = state_29282__$1;
(statearr_29295_29355[(1)] = (19));

} else {
var statearr_29296_29356 = state_29282__$1;
(statearr_29296_29356[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (21))){
var inst_29234 = (state_29282[(12)]);
var inst_29234__$1 = (state_29282[(2)]);
var inst_29235 = cljs.core.get.call(null,inst_29234__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29236 = cljs.core.get.call(null,inst_29234__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29237 = cljs.core.get.call(null,inst_29234__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29282__$1 = (function (){var statearr_29297 = state_29282;
(statearr_29297[(12)] = inst_29234__$1);

(statearr_29297[(11)] = inst_29235);

(statearr_29297[(13)] = inst_29236);

return statearr_29297;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29282__$1,(22),inst_29237);
} else {
if((state_val_29283 === (31))){
var inst_29264 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
if(cljs.core.truth_(inst_29264)){
var statearr_29298_29357 = state_29282__$1;
(statearr_29298_29357[(1)] = (32));

} else {
var statearr_29299_29358 = state_29282__$1;
(statearr_29299_29358[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (32))){
var inst_29241 = (state_29282[(14)]);
var state_29282__$1 = state_29282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29282__$1,(35),out,inst_29241);
} else {
if((state_val_29283 === (33))){
var inst_29234 = (state_29282[(12)]);
var inst_29212 = inst_29234;
var state_29282__$1 = (function (){var statearr_29300 = state_29282;
(statearr_29300[(7)] = inst_29212);

return statearr_29300;
})();
var statearr_29301_29359 = state_29282__$1;
(statearr_29301_29359[(2)] = null);

(statearr_29301_29359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (13))){
var inst_29212 = (state_29282[(7)]);
var inst_29219 = inst_29212.cljs$lang$protocol_mask$partition0$;
var inst_29220 = (inst_29219 & (64));
var inst_29221 = inst_29212.cljs$core$ISeq$;
var inst_29222 = (inst_29220) || (inst_29221);
var state_29282__$1 = state_29282;
if(cljs.core.truth_(inst_29222)){
var statearr_29302_29360 = state_29282__$1;
(statearr_29302_29360[(1)] = (16));

} else {
var statearr_29303_29361 = state_29282__$1;
(statearr_29303_29361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (22))){
var inst_29242 = (state_29282[(10)]);
var inst_29241 = (state_29282[(14)]);
var inst_29240 = (state_29282[(2)]);
var inst_29241__$1 = cljs.core.nth.call(null,inst_29240,(0),null);
var inst_29242__$1 = cljs.core.nth.call(null,inst_29240,(1),null);
var inst_29243 = (inst_29241__$1 == null);
var inst_29244 = cljs.core._EQ_.call(null,inst_29242__$1,change);
var inst_29245 = (inst_29243) || (inst_29244);
var state_29282__$1 = (function (){var statearr_29304 = state_29282;
(statearr_29304[(10)] = inst_29242__$1);

(statearr_29304[(14)] = inst_29241__$1);

return statearr_29304;
})();
if(cljs.core.truth_(inst_29245)){
var statearr_29305_29362 = state_29282__$1;
(statearr_29305_29362[(1)] = (23));

} else {
var statearr_29306_29363 = state_29282__$1;
(statearr_29306_29363[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (36))){
var inst_29234 = (state_29282[(12)]);
var inst_29212 = inst_29234;
var state_29282__$1 = (function (){var statearr_29307 = state_29282;
(statearr_29307[(7)] = inst_29212);

return statearr_29307;
})();
var statearr_29308_29364 = state_29282__$1;
(statearr_29308_29364[(2)] = null);

(statearr_29308_29364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (29))){
var inst_29256 = (state_29282[(9)]);
var state_29282__$1 = state_29282;
var statearr_29309_29365 = state_29282__$1;
(statearr_29309_29365[(2)] = inst_29256);

(statearr_29309_29365[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (6))){
var state_29282__$1 = state_29282;
var statearr_29310_29366 = state_29282__$1;
(statearr_29310_29366[(2)] = false);

(statearr_29310_29366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (28))){
var inst_29252 = (state_29282[(2)]);
var inst_29253 = calc_state.call(null);
var inst_29212 = inst_29253;
var state_29282__$1 = (function (){var statearr_29311 = state_29282;
(statearr_29311[(7)] = inst_29212);

(statearr_29311[(15)] = inst_29252);

return statearr_29311;
})();
var statearr_29312_29367 = state_29282__$1;
(statearr_29312_29367[(2)] = null);

(statearr_29312_29367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (25))){
var inst_29278 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
var statearr_29313_29368 = state_29282__$1;
(statearr_29313_29368[(2)] = inst_29278);

(statearr_29313_29368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (34))){
var inst_29276 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
var statearr_29314_29369 = state_29282__$1;
(statearr_29314_29369[(2)] = inst_29276);

(statearr_29314_29369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (17))){
var state_29282__$1 = state_29282;
var statearr_29315_29370 = state_29282__$1;
(statearr_29315_29370[(2)] = false);

(statearr_29315_29370[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (3))){
var state_29282__$1 = state_29282;
var statearr_29316_29371 = state_29282__$1;
(statearr_29316_29371[(2)] = false);

(statearr_29316_29371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (12))){
var inst_29280 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29282__$1,inst_29280);
} else {
if((state_val_29283 === (2))){
var inst_29188 = (state_29282[(8)]);
var inst_29193 = inst_29188.cljs$lang$protocol_mask$partition0$;
var inst_29194 = (inst_29193 & (64));
var inst_29195 = inst_29188.cljs$core$ISeq$;
var inst_29196 = (inst_29194) || (inst_29195);
var state_29282__$1 = state_29282;
if(cljs.core.truth_(inst_29196)){
var statearr_29317_29372 = state_29282__$1;
(statearr_29317_29372[(1)] = (5));

} else {
var statearr_29318_29373 = state_29282__$1;
(statearr_29318_29373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (23))){
var inst_29241 = (state_29282[(14)]);
var inst_29247 = (inst_29241 == null);
var state_29282__$1 = state_29282;
if(cljs.core.truth_(inst_29247)){
var statearr_29319_29374 = state_29282__$1;
(statearr_29319_29374[(1)] = (26));

} else {
var statearr_29320_29375 = state_29282__$1;
(statearr_29320_29375[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (35))){
var inst_29267 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
if(cljs.core.truth_(inst_29267)){
var statearr_29321_29376 = state_29282__$1;
(statearr_29321_29376[(1)] = (36));

} else {
var statearr_29322_29377 = state_29282__$1;
(statearr_29322_29377[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (19))){
var inst_29212 = (state_29282[(7)]);
var inst_29231 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29212);
var state_29282__$1 = state_29282;
var statearr_29323_29378 = state_29282__$1;
(statearr_29323_29378[(2)] = inst_29231);

(statearr_29323_29378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (11))){
var inst_29212 = (state_29282[(7)]);
var inst_29216 = (inst_29212 == null);
var inst_29217 = cljs.core.not.call(null,inst_29216);
var state_29282__$1 = state_29282;
if(inst_29217){
var statearr_29324_29379 = state_29282__$1;
(statearr_29324_29379[(1)] = (13));

} else {
var statearr_29325_29380 = state_29282__$1;
(statearr_29325_29380[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (9))){
var inst_29188 = (state_29282[(8)]);
var state_29282__$1 = state_29282;
var statearr_29326_29381 = state_29282__$1;
(statearr_29326_29381[(2)] = inst_29188);

(statearr_29326_29381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (5))){
var state_29282__$1 = state_29282;
var statearr_29327_29382 = state_29282__$1;
(statearr_29327_29382[(2)] = true);

(statearr_29327_29382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (14))){
var state_29282__$1 = state_29282;
var statearr_29328_29383 = state_29282__$1;
(statearr_29328_29383[(2)] = false);

(statearr_29328_29383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (26))){
var inst_29242 = (state_29282[(10)]);
var inst_29249 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29242);
var state_29282__$1 = state_29282;
var statearr_29329_29384 = state_29282__$1;
(statearr_29329_29384[(2)] = inst_29249);

(statearr_29329_29384[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (16))){
var state_29282__$1 = state_29282;
var statearr_29330_29385 = state_29282__$1;
(statearr_29330_29385[(2)] = true);

(statearr_29330_29385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (38))){
var inst_29272 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
var statearr_29331_29386 = state_29282__$1;
(statearr_29331_29386[(2)] = inst_29272);

(statearr_29331_29386[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (30))){
var inst_29242 = (state_29282[(10)]);
var inst_29235 = (state_29282[(11)]);
var inst_29236 = (state_29282[(13)]);
var inst_29259 = cljs.core.empty_QMARK_.call(null,inst_29235);
var inst_29260 = inst_29236.call(null,inst_29242);
var inst_29261 = cljs.core.not.call(null,inst_29260);
var inst_29262 = (inst_29259) && (inst_29261);
var state_29282__$1 = state_29282;
var statearr_29332_29387 = state_29282__$1;
(statearr_29332_29387[(2)] = inst_29262);

(statearr_29332_29387[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (10))){
var inst_29188 = (state_29282[(8)]);
var inst_29208 = (state_29282[(2)]);
var inst_29209 = cljs.core.get.call(null,inst_29208,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29210 = cljs.core.get.call(null,inst_29208,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29211 = cljs.core.get.call(null,inst_29208,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29212 = inst_29188;
var state_29282__$1 = (function (){var statearr_29333 = state_29282;
(statearr_29333[(7)] = inst_29212);

(statearr_29333[(16)] = inst_29211);

(statearr_29333[(17)] = inst_29210);

(statearr_29333[(18)] = inst_29209);

return statearr_29333;
})();
var statearr_29334_29388 = state_29282__$1;
(statearr_29334_29388[(2)] = null);

(statearr_29334_29388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (18))){
var inst_29226 = (state_29282[(2)]);
var state_29282__$1 = state_29282;
var statearr_29335_29389 = state_29282__$1;
(statearr_29335_29389[(2)] = inst_29226);

(statearr_29335_29389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (37))){
var state_29282__$1 = state_29282;
var statearr_29336_29390 = state_29282__$1;
(statearr_29336_29390[(2)] = null);

(statearr_29336_29390[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29283 === (8))){
var inst_29188 = (state_29282[(8)]);
var inst_29205 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29188);
var state_29282__$1 = state_29282;
var statearr_29337_29391 = state_29282__$1;
(statearr_29337_29391[(2)] = inst_29205);

(statearr_29337_29391[(1)] = (10));


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
});})(c__19424__auto___29345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19359__auto__,c__19424__auto___29345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19360__auto__ = null;
var cljs$core$async$mix_$_state_machine__19360__auto____0 = (function (){
var statearr_29341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29341[(0)] = cljs$core$async$mix_$_state_machine__19360__auto__);

(statearr_29341[(1)] = (1));

return statearr_29341;
});
var cljs$core$async$mix_$_state_machine__19360__auto____1 = (function (state_29282){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29342){if((e29342 instanceof Object)){
var ex__19363__auto__ = e29342;
var statearr_29343_29392 = state_29282;
(statearr_29343_29392[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29393 = state_29282;
state_29282 = G__29393;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19360__auto__ = function(state_29282){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19360__auto____1.call(this,state_29282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19360__auto____0;
cljs$core$async$mix_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19360__auto____1;
return cljs$core$async$mix_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19426__auto__ = (function (){var statearr_29344 = f__19425__auto__.call(null);
(statearr_29344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29345);

return statearr_29344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29345,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args29394 = [];
var len__17402__auto___29397 = arguments.length;
var i__17403__auto___29398 = (0);
while(true){
if((i__17403__auto___29398 < len__17402__auto___29397)){
args29394.push((arguments[i__17403__auto___29398]));

var G__29399 = (i__17403__auto___29398 + (1));
i__17403__auto___29398 = G__29399;
continue;
} else {
}
break;
}

var G__29396 = args29394.length;
switch (G__29396) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29394.length)].join('')));

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
var args29402 = [];
var len__17402__auto___29527 = arguments.length;
var i__17403__auto___29528 = (0);
while(true){
if((i__17403__auto___29528 < len__17402__auto___29527)){
args29402.push((arguments[i__17403__auto___29528]));

var G__29529 = (i__17403__auto___29528 + (1));
i__17403__auto___29528 = G__29529;
continue;
} else {
}
break;
}

var G__29404 = args29402.length;
switch (G__29404) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29402.length)].join('')));

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
return (function (p1__29401_SHARP_){
if(cljs.core.truth_(p1__29401_SHARP_.call(null,topic))){
return p1__29401_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29401_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16344__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29405 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29405 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29406){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29406 = meta29406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29407,meta29406__$1){
var self__ = this;
var _29407__$1 = this;
return (new cljs.core.async.t_cljs$core$async29405(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29406__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29407){
var self__ = this;
var _29407__$1 = this;
return self__.meta29406;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29405.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29405.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29405.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29405.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29405.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29405.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29405.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29406","meta29406",109032012,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29405.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29405";

cljs.core.async.t_cljs$core$async29405.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29405");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29405 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29405(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29406){
return (new cljs.core.async.t_cljs$core$async29405(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29406));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29405(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19424__auto___29531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29531,mults,ensure_mult,p){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29531,mults,ensure_mult,p){
return (function (state_29479){
var state_val_29480 = (state_29479[(1)]);
if((state_val_29480 === (7))){
var inst_29475 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29481_29532 = state_29479__$1;
(statearr_29481_29532[(2)] = inst_29475);

(statearr_29481_29532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (20))){
var state_29479__$1 = state_29479;
var statearr_29482_29533 = state_29479__$1;
(statearr_29482_29533[(2)] = null);

(statearr_29482_29533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (1))){
var state_29479__$1 = state_29479;
var statearr_29483_29534 = state_29479__$1;
(statearr_29483_29534[(2)] = null);

(statearr_29483_29534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (24))){
var inst_29458 = (state_29479[(7)]);
var inst_29467 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29458);
var state_29479__$1 = state_29479;
var statearr_29484_29535 = state_29479__$1;
(statearr_29484_29535[(2)] = inst_29467);

(statearr_29484_29535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (4))){
var inst_29410 = (state_29479[(8)]);
var inst_29410__$1 = (state_29479[(2)]);
var inst_29411 = (inst_29410__$1 == null);
var state_29479__$1 = (function (){var statearr_29485 = state_29479;
(statearr_29485[(8)] = inst_29410__$1);

return statearr_29485;
})();
if(cljs.core.truth_(inst_29411)){
var statearr_29486_29536 = state_29479__$1;
(statearr_29486_29536[(1)] = (5));

} else {
var statearr_29487_29537 = state_29479__$1;
(statearr_29487_29537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (15))){
var inst_29452 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29488_29538 = state_29479__$1;
(statearr_29488_29538[(2)] = inst_29452);

(statearr_29488_29538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (21))){
var inst_29472 = (state_29479[(2)]);
var state_29479__$1 = (function (){var statearr_29489 = state_29479;
(statearr_29489[(9)] = inst_29472);

return statearr_29489;
})();
var statearr_29490_29539 = state_29479__$1;
(statearr_29490_29539[(2)] = null);

(statearr_29490_29539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (13))){
var inst_29434 = (state_29479[(10)]);
var inst_29436 = cljs.core.chunked_seq_QMARK_.call(null,inst_29434);
var state_29479__$1 = state_29479;
if(inst_29436){
var statearr_29491_29540 = state_29479__$1;
(statearr_29491_29540[(1)] = (16));

} else {
var statearr_29492_29541 = state_29479__$1;
(statearr_29492_29541[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (22))){
var inst_29464 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
if(cljs.core.truth_(inst_29464)){
var statearr_29493_29542 = state_29479__$1;
(statearr_29493_29542[(1)] = (23));

} else {
var statearr_29494_29543 = state_29479__$1;
(statearr_29494_29543[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (6))){
var inst_29410 = (state_29479[(8)]);
var inst_29460 = (state_29479[(11)]);
var inst_29458 = (state_29479[(7)]);
var inst_29458__$1 = topic_fn.call(null,inst_29410);
var inst_29459 = cljs.core.deref.call(null,mults);
var inst_29460__$1 = cljs.core.get.call(null,inst_29459,inst_29458__$1);
var state_29479__$1 = (function (){var statearr_29495 = state_29479;
(statearr_29495[(11)] = inst_29460__$1);

(statearr_29495[(7)] = inst_29458__$1);

return statearr_29495;
})();
if(cljs.core.truth_(inst_29460__$1)){
var statearr_29496_29544 = state_29479__$1;
(statearr_29496_29544[(1)] = (19));

} else {
var statearr_29497_29545 = state_29479__$1;
(statearr_29497_29545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (25))){
var inst_29469 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29498_29546 = state_29479__$1;
(statearr_29498_29546[(2)] = inst_29469);

(statearr_29498_29546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (17))){
var inst_29434 = (state_29479[(10)]);
var inst_29443 = cljs.core.first.call(null,inst_29434);
var inst_29444 = cljs.core.async.muxch_STAR_.call(null,inst_29443);
var inst_29445 = cljs.core.async.close_BANG_.call(null,inst_29444);
var inst_29446 = cljs.core.next.call(null,inst_29434);
var inst_29420 = inst_29446;
var inst_29421 = null;
var inst_29422 = (0);
var inst_29423 = (0);
var state_29479__$1 = (function (){var statearr_29499 = state_29479;
(statearr_29499[(12)] = inst_29445);

(statearr_29499[(13)] = inst_29422);

(statearr_29499[(14)] = inst_29420);

(statearr_29499[(15)] = inst_29421);

(statearr_29499[(16)] = inst_29423);

return statearr_29499;
})();
var statearr_29500_29547 = state_29479__$1;
(statearr_29500_29547[(2)] = null);

(statearr_29500_29547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (3))){
var inst_29477 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29479__$1,inst_29477);
} else {
if((state_val_29480 === (12))){
var inst_29454 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29501_29548 = state_29479__$1;
(statearr_29501_29548[(2)] = inst_29454);

(statearr_29501_29548[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (2))){
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29479__$1,(4),ch);
} else {
if((state_val_29480 === (23))){
var state_29479__$1 = state_29479;
var statearr_29502_29549 = state_29479__$1;
(statearr_29502_29549[(2)] = null);

(statearr_29502_29549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (19))){
var inst_29410 = (state_29479[(8)]);
var inst_29460 = (state_29479[(11)]);
var inst_29462 = cljs.core.async.muxch_STAR_.call(null,inst_29460);
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29479__$1,(22),inst_29462,inst_29410);
} else {
if((state_val_29480 === (11))){
var inst_29434 = (state_29479[(10)]);
var inst_29420 = (state_29479[(14)]);
var inst_29434__$1 = cljs.core.seq.call(null,inst_29420);
var state_29479__$1 = (function (){var statearr_29503 = state_29479;
(statearr_29503[(10)] = inst_29434__$1);

return statearr_29503;
})();
if(inst_29434__$1){
var statearr_29504_29550 = state_29479__$1;
(statearr_29504_29550[(1)] = (13));

} else {
var statearr_29505_29551 = state_29479__$1;
(statearr_29505_29551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (9))){
var inst_29456 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29506_29552 = state_29479__$1;
(statearr_29506_29552[(2)] = inst_29456);

(statearr_29506_29552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (5))){
var inst_29417 = cljs.core.deref.call(null,mults);
var inst_29418 = cljs.core.vals.call(null,inst_29417);
var inst_29419 = cljs.core.seq.call(null,inst_29418);
var inst_29420 = inst_29419;
var inst_29421 = null;
var inst_29422 = (0);
var inst_29423 = (0);
var state_29479__$1 = (function (){var statearr_29507 = state_29479;
(statearr_29507[(13)] = inst_29422);

(statearr_29507[(14)] = inst_29420);

(statearr_29507[(15)] = inst_29421);

(statearr_29507[(16)] = inst_29423);

return statearr_29507;
})();
var statearr_29508_29553 = state_29479__$1;
(statearr_29508_29553[(2)] = null);

(statearr_29508_29553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (14))){
var state_29479__$1 = state_29479;
var statearr_29512_29554 = state_29479__$1;
(statearr_29512_29554[(2)] = null);

(statearr_29512_29554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (16))){
var inst_29434 = (state_29479[(10)]);
var inst_29438 = cljs.core.chunk_first.call(null,inst_29434);
var inst_29439 = cljs.core.chunk_rest.call(null,inst_29434);
var inst_29440 = cljs.core.count.call(null,inst_29438);
var inst_29420 = inst_29439;
var inst_29421 = inst_29438;
var inst_29422 = inst_29440;
var inst_29423 = (0);
var state_29479__$1 = (function (){var statearr_29513 = state_29479;
(statearr_29513[(13)] = inst_29422);

(statearr_29513[(14)] = inst_29420);

(statearr_29513[(15)] = inst_29421);

(statearr_29513[(16)] = inst_29423);

return statearr_29513;
})();
var statearr_29514_29555 = state_29479__$1;
(statearr_29514_29555[(2)] = null);

(statearr_29514_29555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (10))){
var inst_29422 = (state_29479[(13)]);
var inst_29420 = (state_29479[(14)]);
var inst_29421 = (state_29479[(15)]);
var inst_29423 = (state_29479[(16)]);
var inst_29428 = cljs.core._nth.call(null,inst_29421,inst_29423);
var inst_29429 = cljs.core.async.muxch_STAR_.call(null,inst_29428);
var inst_29430 = cljs.core.async.close_BANG_.call(null,inst_29429);
var inst_29431 = (inst_29423 + (1));
var tmp29509 = inst_29422;
var tmp29510 = inst_29420;
var tmp29511 = inst_29421;
var inst_29420__$1 = tmp29510;
var inst_29421__$1 = tmp29511;
var inst_29422__$1 = tmp29509;
var inst_29423__$1 = inst_29431;
var state_29479__$1 = (function (){var statearr_29515 = state_29479;
(statearr_29515[(17)] = inst_29430);

(statearr_29515[(13)] = inst_29422__$1);

(statearr_29515[(14)] = inst_29420__$1);

(statearr_29515[(15)] = inst_29421__$1);

(statearr_29515[(16)] = inst_29423__$1);

return statearr_29515;
})();
var statearr_29516_29556 = state_29479__$1;
(statearr_29516_29556[(2)] = null);

(statearr_29516_29556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (18))){
var inst_29449 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29517_29557 = state_29479__$1;
(statearr_29517_29557[(2)] = inst_29449);

(statearr_29517_29557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (8))){
var inst_29422 = (state_29479[(13)]);
var inst_29423 = (state_29479[(16)]);
var inst_29425 = (inst_29423 < inst_29422);
var inst_29426 = inst_29425;
var state_29479__$1 = state_29479;
if(cljs.core.truth_(inst_29426)){
var statearr_29518_29558 = state_29479__$1;
(statearr_29518_29558[(1)] = (10));

} else {
var statearr_29519_29559 = state_29479__$1;
(statearr_29519_29559[(1)] = (11));

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
});})(c__19424__auto___29531,mults,ensure_mult,p))
;
return ((function (switch__19359__auto__,c__19424__auto___29531,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_29523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29523[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_29523[(1)] = (1));

return statearr_29523;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_29479){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29524){if((e29524 instanceof Object)){
var ex__19363__auto__ = e29524;
var statearr_29525_29560 = state_29479;
(statearr_29525_29560[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29561 = state_29479;
state_29479 = G__29561;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_29479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_29479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29531,mults,ensure_mult,p))
})();
var state__19426__auto__ = (function (){var statearr_29526 = f__19425__auto__.call(null);
(statearr_29526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29531);

return statearr_29526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29531,mults,ensure_mult,p))
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
var args29562 = [];
var len__17402__auto___29565 = arguments.length;
var i__17403__auto___29566 = (0);
while(true){
if((i__17403__auto___29566 < len__17402__auto___29565)){
args29562.push((arguments[i__17403__auto___29566]));

var G__29567 = (i__17403__auto___29566 + (1));
i__17403__auto___29566 = G__29567;
continue;
} else {
}
break;
}

var G__29564 = args29562.length;
switch (G__29564) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29562.length)].join('')));

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
var args29569 = [];
var len__17402__auto___29572 = arguments.length;
var i__17403__auto___29573 = (0);
while(true){
if((i__17403__auto___29573 < len__17402__auto___29572)){
args29569.push((arguments[i__17403__auto___29573]));

var G__29574 = (i__17403__auto___29573 + (1));
i__17403__auto___29573 = G__29574;
continue;
} else {
}
break;
}

var G__29571 = args29569.length;
switch (G__29571) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29569.length)].join('')));

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
var args29576 = [];
var len__17402__auto___29647 = arguments.length;
var i__17403__auto___29648 = (0);
while(true){
if((i__17403__auto___29648 < len__17402__auto___29647)){
args29576.push((arguments[i__17403__auto___29648]));

var G__29649 = (i__17403__auto___29648 + (1));
i__17403__auto___29648 = G__29649;
continue;
} else {
}
break;
}

var G__29578 = args29576.length;
switch (G__29578) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29576.length)].join('')));

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
var c__19424__auto___29651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29651,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29651,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29617){
var state_val_29618 = (state_29617[(1)]);
if((state_val_29618 === (7))){
var state_29617__$1 = state_29617;
var statearr_29619_29652 = state_29617__$1;
(statearr_29619_29652[(2)] = null);

(statearr_29619_29652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (1))){
var state_29617__$1 = state_29617;
var statearr_29620_29653 = state_29617__$1;
(statearr_29620_29653[(2)] = null);

(statearr_29620_29653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (4))){
var inst_29581 = (state_29617[(7)]);
var inst_29583 = (inst_29581 < cnt);
var state_29617__$1 = state_29617;
if(cljs.core.truth_(inst_29583)){
var statearr_29621_29654 = state_29617__$1;
(statearr_29621_29654[(1)] = (6));

} else {
var statearr_29622_29655 = state_29617__$1;
(statearr_29622_29655[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (15))){
var inst_29613 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29623_29656 = state_29617__$1;
(statearr_29623_29656[(2)] = inst_29613);

(statearr_29623_29656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (13))){
var inst_29606 = cljs.core.async.close_BANG_.call(null,out);
var state_29617__$1 = state_29617;
var statearr_29624_29657 = state_29617__$1;
(statearr_29624_29657[(2)] = inst_29606);

(statearr_29624_29657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (6))){
var state_29617__$1 = state_29617;
var statearr_29625_29658 = state_29617__$1;
(statearr_29625_29658[(2)] = null);

(statearr_29625_29658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (3))){
var inst_29615 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29617__$1,inst_29615);
} else {
if((state_val_29618 === (12))){
var inst_29603 = (state_29617[(8)]);
var inst_29603__$1 = (state_29617[(2)]);
var inst_29604 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29603__$1);
var state_29617__$1 = (function (){var statearr_29626 = state_29617;
(statearr_29626[(8)] = inst_29603__$1);

return statearr_29626;
})();
if(cljs.core.truth_(inst_29604)){
var statearr_29627_29659 = state_29617__$1;
(statearr_29627_29659[(1)] = (13));

} else {
var statearr_29628_29660 = state_29617__$1;
(statearr_29628_29660[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (2))){
var inst_29580 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29581 = (0);
var state_29617__$1 = (function (){var statearr_29629 = state_29617;
(statearr_29629[(9)] = inst_29580);

(statearr_29629[(7)] = inst_29581);

return statearr_29629;
})();
var statearr_29630_29661 = state_29617__$1;
(statearr_29630_29661[(2)] = null);

(statearr_29630_29661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (11))){
var inst_29581 = (state_29617[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29617,(10),Object,null,(9));
var inst_29590 = chs__$1.call(null,inst_29581);
var inst_29591 = done.call(null,inst_29581);
var inst_29592 = cljs.core.async.take_BANG_.call(null,inst_29590,inst_29591);
var state_29617__$1 = state_29617;
var statearr_29631_29662 = state_29617__$1;
(statearr_29631_29662[(2)] = inst_29592);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29617__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (9))){
var inst_29581 = (state_29617[(7)]);
var inst_29594 = (state_29617[(2)]);
var inst_29595 = (inst_29581 + (1));
var inst_29581__$1 = inst_29595;
var state_29617__$1 = (function (){var statearr_29632 = state_29617;
(statearr_29632[(7)] = inst_29581__$1);

(statearr_29632[(10)] = inst_29594);

return statearr_29632;
})();
var statearr_29633_29663 = state_29617__$1;
(statearr_29633_29663[(2)] = null);

(statearr_29633_29663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (5))){
var inst_29601 = (state_29617[(2)]);
var state_29617__$1 = (function (){var statearr_29634 = state_29617;
(statearr_29634[(11)] = inst_29601);

return statearr_29634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29617__$1,(12),dchan);
} else {
if((state_val_29618 === (14))){
var inst_29603 = (state_29617[(8)]);
var inst_29608 = cljs.core.apply.call(null,f,inst_29603);
var state_29617__$1 = state_29617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29617__$1,(16),out,inst_29608);
} else {
if((state_val_29618 === (16))){
var inst_29610 = (state_29617[(2)]);
var state_29617__$1 = (function (){var statearr_29635 = state_29617;
(statearr_29635[(12)] = inst_29610);

return statearr_29635;
})();
var statearr_29636_29664 = state_29617__$1;
(statearr_29636_29664[(2)] = null);

(statearr_29636_29664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (10))){
var inst_29585 = (state_29617[(2)]);
var inst_29586 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29617__$1 = (function (){var statearr_29637 = state_29617;
(statearr_29637[(13)] = inst_29585);

return statearr_29637;
})();
var statearr_29638_29665 = state_29617__$1;
(statearr_29638_29665[(2)] = inst_29586);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29617__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (8))){
var inst_29599 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29639_29666 = state_29617__$1;
(statearr_29639_29666[(2)] = inst_29599);

(statearr_29639_29666[(1)] = (5));


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
});})(c__19424__auto___29651,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19359__auto__,c__19424__auto___29651,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_29643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29643[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_29643[(1)] = (1));

return statearr_29643;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_29617){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29644){if((e29644 instanceof Object)){
var ex__19363__auto__ = e29644;
var statearr_29645_29667 = state_29617;
(statearr_29645_29667[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29668 = state_29617;
state_29617 = G__29668;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_29617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_29617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29651,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19426__auto__ = (function (){var statearr_29646 = f__19425__auto__.call(null);
(statearr_29646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29651);

return statearr_29646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29651,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29670 = [];
var len__17402__auto___29726 = arguments.length;
var i__17403__auto___29727 = (0);
while(true){
if((i__17403__auto___29727 < len__17402__auto___29726)){
args29670.push((arguments[i__17403__auto___29727]));

var G__29728 = (i__17403__auto___29727 + (1));
i__17403__auto___29727 = G__29728;
continue;
} else {
}
break;
}

var G__29672 = args29670.length;
switch (G__29672) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29670.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___29730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29730,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29730,out){
return (function (state_29702){
var state_val_29703 = (state_29702[(1)]);
if((state_val_29703 === (7))){
var inst_29682 = (state_29702[(7)]);
var inst_29681 = (state_29702[(8)]);
var inst_29681__$1 = (state_29702[(2)]);
var inst_29682__$1 = cljs.core.nth.call(null,inst_29681__$1,(0),null);
var inst_29683 = cljs.core.nth.call(null,inst_29681__$1,(1),null);
var inst_29684 = (inst_29682__$1 == null);
var state_29702__$1 = (function (){var statearr_29704 = state_29702;
(statearr_29704[(9)] = inst_29683);

(statearr_29704[(7)] = inst_29682__$1);

(statearr_29704[(8)] = inst_29681__$1);

return statearr_29704;
})();
if(cljs.core.truth_(inst_29684)){
var statearr_29705_29731 = state_29702__$1;
(statearr_29705_29731[(1)] = (8));

} else {
var statearr_29706_29732 = state_29702__$1;
(statearr_29706_29732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (1))){
var inst_29673 = cljs.core.vec.call(null,chs);
var inst_29674 = inst_29673;
var state_29702__$1 = (function (){var statearr_29707 = state_29702;
(statearr_29707[(10)] = inst_29674);

return statearr_29707;
})();
var statearr_29708_29733 = state_29702__$1;
(statearr_29708_29733[(2)] = null);

(statearr_29708_29733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (4))){
var inst_29674 = (state_29702[(10)]);
var state_29702__$1 = state_29702;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29702__$1,(7),inst_29674);
} else {
if((state_val_29703 === (6))){
var inst_29698 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
var statearr_29709_29734 = state_29702__$1;
(statearr_29709_29734[(2)] = inst_29698);

(statearr_29709_29734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (3))){
var inst_29700 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29702__$1,inst_29700);
} else {
if((state_val_29703 === (2))){
var inst_29674 = (state_29702[(10)]);
var inst_29676 = cljs.core.count.call(null,inst_29674);
var inst_29677 = (inst_29676 > (0));
var state_29702__$1 = state_29702;
if(cljs.core.truth_(inst_29677)){
var statearr_29711_29735 = state_29702__$1;
(statearr_29711_29735[(1)] = (4));

} else {
var statearr_29712_29736 = state_29702__$1;
(statearr_29712_29736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (11))){
var inst_29674 = (state_29702[(10)]);
var inst_29691 = (state_29702[(2)]);
var tmp29710 = inst_29674;
var inst_29674__$1 = tmp29710;
var state_29702__$1 = (function (){var statearr_29713 = state_29702;
(statearr_29713[(10)] = inst_29674__$1);

(statearr_29713[(11)] = inst_29691);

return statearr_29713;
})();
var statearr_29714_29737 = state_29702__$1;
(statearr_29714_29737[(2)] = null);

(statearr_29714_29737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (9))){
var inst_29682 = (state_29702[(7)]);
var state_29702__$1 = state_29702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29702__$1,(11),out,inst_29682);
} else {
if((state_val_29703 === (5))){
var inst_29696 = cljs.core.async.close_BANG_.call(null,out);
var state_29702__$1 = state_29702;
var statearr_29715_29738 = state_29702__$1;
(statearr_29715_29738[(2)] = inst_29696);

(statearr_29715_29738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (10))){
var inst_29694 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
var statearr_29716_29739 = state_29702__$1;
(statearr_29716_29739[(2)] = inst_29694);

(statearr_29716_29739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (8))){
var inst_29683 = (state_29702[(9)]);
var inst_29674 = (state_29702[(10)]);
var inst_29682 = (state_29702[(7)]);
var inst_29681 = (state_29702[(8)]);
var inst_29686 = (function (){var cs = inst_29674;
var vec__29679 = inst_29681;
var v = inst_29682;
var c = inst_29683;
return ((function (cs,vec__29679,v,c,inst_29683,inst_29674,inst_29682,inst_29681,state_val_29703,c__19424__auto___29730,out){
return (function (p1__29669_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29669_SHARP_);
});
;})(cs,vec__29679,v,c,inst_29683,inst_29674,inst_29682,inst_29681,state_val_29703,c__19424__auto___29730,out))
})();
var inst_29687 = cljs.core.filterv.call(null,inst_29686,inst_29674);
var inst_29674__$1 = inst_29687;
var state_29702__$1 = (function (){var statearr_29717 = state_29702;
(statearr_29717[(10)] = inst_29674__$1);

return statearr_29717;
})();
var statearr_29718_29740 = state_29702__$1;
(statearr_29718_29740[(2)] = null);

(statearr_29718_29740[(1)] = (2));


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
});})(c__19424__auto___29730,out))
;
return ((function (switch__19359__auto__,c__19424__auto___29730,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_29722 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29722[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_29722[(1)] = (1));

return statearr_29722;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_29702){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29723){if((e29723 instanceof Object)){
var ex__19363__auto__ = e29723;
var statearr_29724_29741 = state_29702;
(statearr_29724_29741[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29742 = state_29702;
state_29702 = G__29742;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_29702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_29702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29730,out))
})();
var state__19426__auto__ = (function (){var statearr_29725 = f__19425__auto__.call(null);
(statearr_29725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29730);

return statearr_29725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29730,out))
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
var args29743 = [];
var len__17402__auto___29792 = arguments.length;
var i__17403__auto___29793 = (0);
while(true){
if((i__17403__auto___29793 < len__17402__auto___29792)){
args29743.push((arguments[i__17403__auto___29793]));

var G__29794 = (i__17403__auto___29793 + (1));
i__17403__auto___29793 = G__29794;
continue;
} else {
}
break;
}

var G__29745 = args29743.length;
switch (G__29745) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29743.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___29796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29796,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29796,out){
return (function (state_29769){
var state_val_29770 = (state_29769[(1)]);
if((state_val_29770 === (7))){
var inst_29751 = (state_29769[(7)]);
var inst_29751__$1 = (state_29769[(2)]);
var inst_29752 = (inst_29751__$1 == null);
var inst_29753 = cljs.core.not.call(null,inst_29752);
var state_29769__$1 = (function (){var statearr_29771 = state_29769;
(statearr_29771[(7)] = inst_29751__$1);

return statearr_29771;
})();
if(inst_29753){
var statearr_29772_29797 = state_29769__$1;
(statearr_29772_29797[(1)] = (8));

} else {
var statearr_29773_29798 = state_29769__$1;
(statearr_29773_29798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29770 === (1))){
var inst_29746 = (0);
var state_29769__$1 = (function (){var statearr_29774 = state_29769;
(statearr_29774[(8)] = inst_29746);

return statearr_29774;
})();
var statearr_29775_29799 = state_29769__$1;
(statearr_29775_29799[(2)] = null);

(statearr_29775_29799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29770 === (4))){
var state_29769__$1 = state_29769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29769__$1,(7),ch);
} else {
if((state_val_29770 === (6))){
var inst_29764 = (state_29769[(2)]);
var state_29769__$1 = state_29769;
var statearr_29776_29800 = state_29769__$1;
(statearr_29776_29800[(2)] = inst_29764);

(statearr_29776_29800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29770 === (3))){
var inst_29766 = (state_29769[(2)]);
var inst_29767 = cljs.core.async.close_BANG_.call(null,out);
var state_29769__$1 = (function (){var statearr_29777 = state_29769;
(statearr_29777[(9)] = inst_29766);

return statearr_29777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29769__$1,inst_29767);
} else {
if((state_val_29770 === (2))){
var inst_29746 = (state_29769[(8)]);
var inst_29748 = (inst_29746 < n);
var state_29769__$1 = state_29769;
if(cljs.core.truth_(inst_29748)){
var statearr_29778_29801 = state_29769__$1;
(statearr_29778_29801[(1)] = (4));

} else {
var statearr_29779_29802 = state_29769__$1;
(statearr_29779_29802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29770 === (11))){
var inst_29746 = (state_29769[(8)]);
var inst_29756 = (state_29769[(2)]);
var inst_29757 = (inst_29746 + (1));
var inst_29746__$1 = inst_29757;
var state_29769__$1 = (function (){var statearr_29780 = state_29769;
(statearr_29780[(8)] = inst_29746__$1);

(statearr_29780[(10)] = inst_29756);

return statearr_29780;
})();
var statearr_29781_29803 = state_29769__$1;
(statearr_29781_29803[(2)] = null);

(statearr_29781_29803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29770 === (9))){
var state_29769__$1 = state_29769;
var statearr_29782_29804 = state_29769__$1;
(statearr_29782_29804[(2)] = null);

(statearr_29782_29804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29770 === (5))){
var state_29769__$1 = state_29769;
var statearr_29783_29805 = state_29769__$1;
(statearr_29783_29805[(2)] = null);

(statearr_29783_29805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29770 === (10))){
var inst_29761 = (state_29769[(2)]);
var state_29769__$1 = state_29769;
var statearr_29784_29806 = state_29769__$1;
(statearr_29784_29806[(2)] = inst_29761);

(statearr_29784_29806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29770 === (8))){
var inst_29751 = (state_29769[(7)]);
var state_29769__$1 = state_29769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29769__$1,(11),out,inst_29751);
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
});})(c__19424__auto___29796,out))
;
return ((function (switch__19359__auto__,c__19424__auto___29796,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_29788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29788[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_29788[(1)] = (1));

return statearr_29788;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_29769){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29789){if((e29789 instanceof Object)){
var ex__19363__auto__ = e29789;
var statearr_29790_29807 = state_29769;
(statearr_29790_29807[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29808 = state_29769;
state_29769 = G__29808;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_29769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_29769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29796,out))
})();
var state__19426__auto__ = (function (){var statearr_29791 = f__19425__auto__.call(null);
(statearr_29791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29796);

return statearr_29791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29796,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29816 = (function (map_LT_,f,ch,meta29817){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29817 = meta29817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29818,meta29817__$1){
var self__ = this;
var _29818__$1 = this;
return (new cljs.core.async.t_cljs$core$async29816(self__.map_LT_,self__.f,self__.ch,meta29817__$1));
});

cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29818){
var self__ = this;
var _29818__$1 = this;
return self__.meta29817;
});

cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29819 = (function (map_LT_,f,ch,meta29817,_,fn1,meta29820){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29817 = meta29817;
this._ = _;
this.fn1 = fn1;
this.meta29820 = meta29820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29821,meta29820__$1){
var self__ = this;
var _29821__$1 = this;
return (new cljs.core.async.t_cljs$core$async29819(self__.map_LT_,self__.f,self__.ch,self__.meta29817,self__._,self__.fn1,meta29820__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29821){
var self__ = this;
var _29821__$1 = this;
return self__.meta29820;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29819.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29809_SHARP_){
return f1.call(null,(((p1__29809_SHARP_ == null))?null:self__.f.call(null,p1__29809_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29819.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29817","meta29817",-532919526,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29816","cljs.core.async/t_cljs$core$async29816",-1368293089,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29820","meta29820",1172898543,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29819";

cljs.core.async.t_cljs$core$async29819.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29819");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29819 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29819(map_LT___$1,f__$1,ch__$1,meta29817__$1,___$2,fn1__$1,meta29820){
return (new cljs.core.async.t_cljs$core$async29819(map_LT___$1,f__$1,ch__$1,meta29817__$1,___$2,fn1__$1,meta29820));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29819(self__.map_LT_,self__.f,self__.ch,self__.meta29817,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29816.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29817","meta29817",-532919526,null)], null);
});

cljs.core.async.t_cljs$core$async29816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29816";

cljs.core.async.t_cljs$core$async29816.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29816");
});

cljs.core.async.__GT_t_cljs$core$async29816 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29816(map_LT___$1,f__$1,ch__$1,meta29817){
return (new cljs.core.async.t_cljs$core$async29816(map_LT___$1,f__$1,ch__$1,meta29817));
});

}

return (new cljs.core.async.t_cljs$core$async29816(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29825 = (function (map_GT_,f,ch,meta29826){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29826 = meta29826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29827,meta29826__$1){
var self__ = this;
var _29827__$1 = this;
return (new cljs.core.async.t_cljs$core$async29825(self__.map_GT_,self__.f,self__.ch,meta29826__$1));
});

cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29827){
var self__ = this;
var _29827__$1 = this;
return self__.meta29826;
});

cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29826","meta29826",1522954689,null)], null);
});

cljs.core.async.t_cljs$core$async29825.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29825";

cljs.core.async.t_cljs$core$async29825.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29825");
});

cljs.core.async.__GT_t_cljs$core$async29825 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29825(map_GT___$1,f__$1,ch__$1,meta29826){
return (new cljs.core.async.t_cljs$core$async29825(map_GT___$1,f__$1,ch__$1,meta29826));
});

}

return (new cljs.core.async.t_cljs$core$async29825(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29831 = (function (filter_GT_,p,ch,meta29832){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29832 = meta29832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29833,meta29832__$1){
var self__ = this;
var _29833__$1 = this;
return (new cljs.core.async.t_cljs$core$async29831(self__.filter_GT_,self__.p,self__.ch,meta29832__$1));
});

cljs.core.async.t_cljs$core$async29831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29833){
var self__ = this;
var _29833__$1 = this;
return self__.meta29832;
});

cljs.core.async.t_cljs$core$async29831.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29831.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29831.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29831.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29831.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29831.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29831.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29832","meta29832",-509780082,null)], null);
});

cljs.core.async.t_cljs$core$async29831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29831";

cljs.core.async.t_cljs$core$async29831.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async29831");
});

cljs.core.async.__GT_t_cljs$core$async29831 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29831(filter_GT___$1,p__$1,ch__$1,meta29832){
return (new cljs.core.async.t_cljs$core$async29831(filter_GT___$1,p__$1,ch__$1,meta29832));
});

}

return (new cljs.core.async.t_cljs$core$async29831(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29834 = [];
var len__17402__auto___29878 = arguments.length;
var i__17403__auto___29879 = (0);
while(true){
if((i__17403__auto___29879 < len__17402__auto___29878)){
args29834.push((arguments[i__17403__auto___29879]));

var G__29880 = (i__17403__auto___29879 + (1));
i__17403__auto___29879 = G__29880;
continue;
} else {
}
break;
}

var G__29836 = args29834.length;
switch (G__29836) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29834.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___29882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___29882,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___29882,out){
return (function (state_29857){
var state_val_29858 = (state_29857[(1)]);
if((state_val_29858 === (7))){
var inst_29853 = (state_29857[(2)]);
var state_29857__$1 = state_29857;
var statearr_29859_29883 = state_29857__$1;
(statearr_29859_29883[(2)] = inst_29853);

(statearr_29859_29883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (1))){
var state_29857__$1 = state_29857;
var statearr_29860_29884 = state_29857__$1;
(statearr_29860_29884[(2)] = null);

(statearr_29860_29884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (4))){
var inst_29839 = (state_29857[(7)]);
var inst_29839__$1 = (state_29857[(2)]);
var inst_29840 = (inst_29839__$1 == null);
var state_29857__$1 = (function (){var statearr_29861 = state_29857;
(statearr_29861[(7)] = inst_29839__$1);

return statearr_29861;
})();
if(cljs.core.truth_(inst_29840)){
var statearr_29862_29885 = state_29857__$1;
(statearr_29862_29885[(1)] = (5));

} else {
var statearr_29863_29886 = state_29857__$1;
(statearr_29863_29886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (6))){
var inst_29839 = (state_29857[(7)]);
var inst_29844 = p.call(null,inst_29839);
var state_29857__$1 = state_29857;
if(cljs.core.truth_(inst_29844)){
var statearr_29864_29887 = state_29857__$1;
(statearr_29864_29887[(1)] = (8));

} else {
var statearr_29865_29888 = state_29857__$1;
(statearr_29865_29888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (3))){
var inst_29855 = (state_29857[(2)]);
var state_29857__$1 = state_29857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29857__$1,inst_29855);
} else {
if((state_val_29858 === (2))){
var state_29857__$1 = state_29857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29857__$1,(4),ch);
} else {
if((state_val_29858 === (11))){
var inst_29847 = (state_29857[(2)]);
var state_29857__$1 = state_29857;
var statearr_29866_29889 = state_29857__$1;
(statearr_29866_29889[(2)] = inst_29847);

(statearr_29866_29889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (9))){
var state_29857__$1 = state_29857;
var statearr_29867_29890 = state_29857__$1;
(statearr_29867_29890[(2)] = null);

(statearr_29867_29890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (5))){
var inst_29842 = cljs.core.async.close_BANG_.call(null,out);
var state_29857__$1 = state_29857;
var statearr_29868_29891 = state_29857__$1;
(statearr_29868_29891[(2)] = inst_29842);

(statearr_29868_29891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (10))){
var inst_29850 = (state_29857[(2)]);
var state_29857__$1 = (function (){var statearr_29869 = state_29857;
(statearr_29869[(8)] = inst_29850);

return statearr_29869;
})();
var statearr_29870_29892 = state_29857__$1;
(statearr_29870_29892[(2)] = null);

(statearr_29870_29892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (8))){
var inst_29839 = (state_29857[(7)]);
var state_29857__$1 = state_29857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29857__$1,(11),out,inst_29839);
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
});})(c__19424__auto___29882,out))
;
return ((function (switch__19359__auto__,c__19424__auto___29882,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_29874 = [null,null,null,null,null,null,null,null,null];
(statearr_29874[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_29874[(1)] = (1));

return statearr_29874;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_29857){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_29857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e29875){if((e29875 instanceof Object)){
var ex__19363__auto__ = e29875;
var statearr_29876_29893 = state_29857;
(statearr_29876_29893[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29894 = state_29857;
state_29857 = G__29894;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_29857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_29857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___29882,out))
})();
var state__19426__auto__ = (function (){var statearr_29877 = f__19425__auto__.call(null);
(statearr_29877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___29882);

return statearr_29877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___29882,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29895 = [];
var len__17402__auto___29898 = arguments.length;
var i__17403__auto___29899 = (0);
while(true){
if((i__17403__auto___29899 < len__17402__auto___29898)){
args29895.push((arguments[i__17403__auto___29899]));

var G__29900 = (i__17403__auto___29899 + (1));
i__17403__auto___29899 = G__29900;
continue;
} else {
}
break;
}

var G__29897 = args29895.length;
switch (G__29897) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29895.length)].join('')));

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
return (function (state_30067){
var state_val_30068 = (state_30067[(1)]);
if((state_val_30068 === (7))){
var inst_30063 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30069_30110 = state_30067__$1;
(statearr_30069_30110[(2)] = inst_30063);

(statearr_30069_30110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (20))){
var inst_30033 = (state_30067[(7)]);
var inst_30044 = (state_30067[(2)]);
var inst_30045 = cljs.core.next.call(null,inst_30033);
var inst_30019 = inst_30045;
var inst_30020 = null;
var inst_30021 = (0);
var inst_30022 = (0);
var state_30067__$1 = (function (){var statearr_30070 = state_30067;
(statearr_30070[(8)] = inst_30022);

(statearr_30070[(9)] = inst_30021);

(statearr_30070[(10)] = inst_30020);

(statearr_30070[(11)] = inst_30044);

(statearr_30070[(12)] = inst_30019);

return statearr_30070;
})();
var statearr_30071_30111 = state_30067__$1;
(statearr_30071_30111[(2)] = null);

(statearr_30071_30111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (1))){
var state_30067__$1 = state_30067;
var statearr_30072_30112 = state_30067__$1;
(statearr_30072_30112[(2)] = null);

(statearr_30072_30112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (4))){
var inst_30008 = (state_30067[(13)]);
var inst_30008__$1 = (state_30067[(2)]);
var inst_30009 = (inst_30008__$1 == null);
var state_30067__$1 = (function (){var statearr_30073 = state_30067;
(statearr_30073[(13)] = inst_30008__$1);

return statearr_30073;
})();
if(cljs.core.truth_(inst_30009)){
var statearr_30074_30113 = state_30067__$1;
(statearr_30074_30113[(1)] = (5));

} else {
var statearr_30075_30114 = state_30067__$1;
(statearr_30075_30114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (15))){
var state_30067__$1 = state_30067;
var statearr_30079_30115 = state_30067__$1;
(statearr_30079_30115[(2)] = null);

(statearr_30079_30115[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (21))){
var state_30067__$1 = state_30067;
var statearr_30080_30116 = state_30067__$1;
(statearr_30080_30116[(2)] = null);

(statearr_30080_30116[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (13))){
var inst_30022 = (state_30067[(8)]);
var inst_30021 = (state_30067[(9)]);
var inst_30020 = (state_30067[(10)]);
var inst_30019 = (state_30067[(12)]);
var inst_30029 = (state_30067[(2)]);
var inst_30030 = (inst_30022 + (1));
var tmp30076 = inst_30021;
var tmp30077 = inst_30020;
var tmp30078 = inst_30019;
var inst_30019__$1 = tmp30078;
var inst_30020__$1 = tmp30077;
var inst_30021__$1 = tmp30076;
var inst_30022__$1 = inst_30030;
var state_30067__$1 = (function (){var statearr_30081 = state_30067;
(statearr_30081[(8)] = inst_30022__$1);

(statearr_30081[(9)] = inst_30021__$1);

(statearr_30081[(10)] = inst_30020__$1);

(statearr_30081[(14)] = inst_30029);

(statearr_30081[(12)] = inst_30019__$1);

return statearr_30081;
})();
var statearr_30082_30117 = state_30067__$1;
(statearr_30082_30117[(2)] = null);

(statearr_30082_30117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (22))){
var state_30067__$1 = state_30067;
var statearr_30083_30118 = state_30067__$1;
(statearr_30083_30118[(2)] = null);

(statearr_30083_30118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (6))){
var inst_30008 = (state_30067[(13)]);
var inst_30017 = f.call(null,inst_30008);
var inst_30018 = cljs.core.seq.call(null,inst_30017);
var inst_30019 = inst_30018;
var inst_30020 = null;
var inst_30021 = (0);
var inst_30022 = (0);
var state_30067__$1 = (function (){var statearr_30084 = state_30067;
(statearr_30084[(8)] = inst_30022);

(statearr_30084[(9)] = inst_30021);

(statearr_30084[(10)] = inst_30020);

(statearr_30084[(12)] = inst_30019);

return statearr_30084;
})();
var statearr_30085_30119 = state_30067__$1;
(statearr_30085_30119[(2)] = null);

(statearr_30085_30119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (17))){
var inst_30033 = (state_30067[(7)]);
var inst_30037 = cljs.core.chunk_first.call(null,inst_30033);
var inst_30038 = cljs.core.chunk_rest.call(null,inst_30033);
var inst_30039 = cljs.core.count.call(null,inst_30037);
var inst_30019 = inst_30038;
var inst_30020 = inst_30037;
var inst_30021 = inst_30039;
var inst_30022 = (0);
var state_30067__$1 = (function (){var statearr_30086 = state_30067;
(statearr_30086[(8)] = inst_30022);

(statearr_30086[(9)] = inst_30021);

(statearr_30086[(10)] = inst_30020);

(statearr_30086[(12)] = inst_30019);

return statearr_30086;
})();
var statearr_30087_30120 = state_30067__$1;
(statearr_30087_30120[(2)] = null);

(statearr_30087_30120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (3))){
var inst_30065 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30067__$1,inst_30065);
} else {
if((state_val_30068 === (12))){
var inst_30053 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30088_30121 = state_30067__$1;
(statearr_30088_30121[(2)] = inst_30053);

(statearr_30088_30121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (2))){
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30067__$1,(4),in$);
} else {
if((state_val_30068 === (23))){
var inst_30061 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30089_30122 = state_30067__$1;
(statearr_30089_30122[(2)] = inst_30061);

(statearr_30089_30122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (19))){
var inst_30048 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30090_30123 = state_30067__$1;
(statearr_30090_30123[(2)] = inst_30048);

(statearr_30090_30123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (11))){
var inst_30033 = (state_30067[(7)]);
var inst_30019 = (state_30067[(12)]);
var inst_30033__$1 = cljs.core.seq.call(null,inst_30019);
var state_30067__$1 = (function (){var statearr_30091 = state_30067;
(statearr_30091[(7)] = inst_30033__$1);

return statearr_30091;
})();
if(inst_30033__$1){
var statearr_30092_30124 = state_30067__$1;
(statearr_30092_30124[(1)] = (14));

} else {
var statearr_30093_30125 = state_30067__$1;
(statearr_30093_30125[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (9))){
var inst_30055 = (state_30067[(2)]);
var inst_30056 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30067__$1 = (function (){var statearr_30094 = state_30067;
(statearr_30094[(15)] = inst_30055);

return statearr_30094;
})();
if(cljs.core.truth_(inst_30056)){
var statearr_30095_30126 = state_30067__$1;
(statearr_30095_30126[(1)] = (21));

} else {
var statearr_30096_30127 = state_30067__$1;
(statearr_30096_30127[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (5))){
var inst_30011 = cljs.core.async.close_BANG_.call(null,out);
var state_30067__$1 = state_30067;
var statearr_30097_30128 = state_30067__$1;
(statearr_30097_30128[(2)] = inst_30011);

(statearr_30097_30128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (14))){
var inst_30033 = (state_30067[(7)]);
var inst_30035 = cljs.core.chunked_seq_QMARK_.call(null,inst_30033);
var state_30067__$1 = state_30067;
if(inst_30035){
var statearr_30098_30129 = state_30067__$1;
(statearr_30098_30129[(1)] = (17));

} else {
var statearr_30099_30130 = state_30067__$1;
(statearr_30099_30130[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (16))){
var inst_30051 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30100_30131 = state_30067__$1;
(statearr_30100_30131[(2)] = inst_30051);

(statearr_30100_30131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (10))){
var inst_30022 = (state_30067[(8)]);
var inst_30020 = (state_30067[(10)]);
var inst_30027 = cljs.core._nth.call(null,inst_30020,inst_30022);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30067__$1,(13),out,inst_30027);
} else {
if((state_val_30068 === (18))){
var inst_30033 = (state_30067[(7)]);
var inst_30042 = cljs.core.first.call(null,inst_30033);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30067__$1,(20),out,inst_30042);
} else {
if((state_val_30068 === (8))){
var inst_30022 = (state_30067[(8)]);
var inst_30021 = (state_30067[(9)]);
var inst_30024 = (inst_30022 < inst_30021);
var inst_30025 = inst_30024;
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30025)){
var statearr_30101_30132 = state_30067__$1;
(statearr_30101_30132[(1)] = (10));

} else {
var statearr_30102_30133 = state_30067__$1;
(statearr_30102_30133[(1)] = (11));

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
var statearr_30106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30106[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__);

(statearr_30106[(1)] = (1));

return statearr_30106;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____1 = (function (state_30067){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_30067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e30107){if((e30107 instanceof Object)){
var ex__19363__auto__ = e30107;
var statearr_30108_30134 = state_30067;
(statearr_30108_30134[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30135 = state_30067;
state_30067 = G__30135;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__ = function(state_30067){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____1.call(this,state_30067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__))
})();
var state__19426__auto__ = (function (){var statearr_30109 = f__19425__auto__.call(null);
(statearr_30109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_30109;
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
var args30136 = [];
var len__17402__auto___30139 = arguments.length;
var i__17403__auto___30140 = (0);
while(true){
if((i__17403__auto___30140 < len__17402__auto___30139)){
args30136.push((arguments[i__17403__auto___30140]));

var G__30141 = (i__17403__auto___30140 + (1));
i__17403__auto___30140 = G__30141;
continue;
} else {
}
break;
}

var G__30138 = args30136.length;
switch (G__30138) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30136.length)].join('')));

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
var args30143 = [];
var len__17402__auto___30146 = arguments.length;
var i__17403__auto___30147 = (0);
while(true){
if((i__17403__auto___30147 < len__17402__auto___30146)){
args30143.push((arguments[i__17403__auto___30147]));

var G__30148 = (i__17403__auto___30147 + (1));
i__17403__auto___30147 = G__30148;
continue;
} else {
}
break;
}

var G__30145 = args30143.length;
switch (G__30145) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30143.length)].join('')));

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
var args30150 = [];
var len__17402__auto___30201 = arguments.length;
var i__17403__auto___30202 = (0);
while(true){
if((i__17403__auto___30202 < len__17402__auto___30201)){
args30150.push((arguments[i__17403__auto___30202]));

var G__30203 = (i__17403__auto___30202 + (1));
i__17403__auto___30202 = G__30203;
continue;
} else {
}
break;
}

var G__30152 = args30150.length;
switch (G__30152) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30150.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___30205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___30205,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___30205,out){
return (function (state_30176){
var state_val_30177 = (state_30176[(1)]);
if((state_val_30177 === (7))){
var inst_30171 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
var statearr_30178_30206 = state_30176__$1;
(statearr_30178_30206[(2)] = inst_30171);

(statearr_30178_30206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (1))){
var inst_30153 = null;
var state_30176__$1 = (function (){var statearr_30179 = state_30176;
(statearr_30179[(7)] = inst_30153);

return statearr_30179;
})();
var statearr_30180_30207 = state_30176__$1;
(statearr_30180_30207[(2)] = null);

(statearr_30180_30207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (4))){
var inst_30156 = (state_30176[(8)]);
var inst_30156__$1 = (state_30176[(2)]);
var inst_30157 = (inst_30156__$1 == null);
var inst_30158 = cljs.core.not.call(null,inst_30157);
var state_30176__$1 = (function (){var statearr_30181 = state_30176;
(statearr_30181[(8)] = inst_30156__$1);

return statearr_30181;
})();
if(inst_30158){
var statearr_30182_30208 = state_30176__$1;
(statearr_30182_30208[(1)] = (5));

} else {
var statearr_30183_30209 = state_30176__$1;
(statearr_30183_30209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (6))){
var state_30176__$1 = state_30176;
var statearr_30184_30210 = state_30176__$1;
(statearr_30184_30210[(2)] = null);

(statearr_30184_30210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (3))){
var inst_30173 = (state_30176[(2)]);
var inst_30174 = cljs.core.async.close_BANG_.call(null,out);
var state_30176__$1 = (function (){var statearr_30185 = state_30176;
(statearr_30185[(9)] = inst_30173);

return statearr_30185;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30176__$1,inst_30174);
} else {
if((state_val_30177 === (2))){
var state_30176__$1 = state_30176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30176__$1,(4),ch);
} else {
if((state_val_30177 === (11))){
var inst_30156 = (state_30176[(8)]);
var inst_30165 = (state_30176[(2)]);
var inst_30153 = inst_30156;
var state_30176__$1 = (function (){var statearr_30186 = state_30176;
(statearr_30186[(10)] = inst_30165);

(statearr_30186[(7)] = inst_30153);

return statearr_30186;
})();
var statearr_30187_30211 = state_30176__$1;
(statearr_30187_30211[(2)] = null);

(statearr_30187_30211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (9))){
var inst_30156 = (state_30176[(8)]);
var state_30176__$1 = state_30176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30176__$1,(11),out,inst_30156);
} else {
if((state_val_30177 === (5))){
var inst_30156 = (state_30176[(8)]);
var inst_30153 = (state_30176[(7)]);
var inst_30160 = cljs.core._EQ_.call(null,inst_30156,inst_30153);
var state_30176__$1 = state_30176;
if(inst_30160){
var statearr_30189_30212 = state_30176__$1;
(statearr_30189_30212[(1)] = (8));

} else {
var statearr_30190_30213 = state_30176__$1;
(statearr_30190_30213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (10))){
var inst_30168 = (state_30176[(2)]);
var state_30176__$1 = state_30176;
var statearr_30191_30214 = state_30176__$1;
(statearr_30191_30214[(2)] = inst_30168);

(statearr_30191_30214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30177 === (8))){
var inst_30153 = (state_30176[(7)]);
var tmp30188 = inst_30153;
var inst_30153__$1 = tmp30188;
var state_30176__$1 = (function (){var statearr_30192 = state_30176;
(statearr_30192[(7)] = inst_30153__$1);

return statearr_30192;
})();
var statearr_30193_30215 = state_30176__$1;
(statearr_30193_30215[(2)] = null);

(statearr_30193_30215[(1)] = (2));


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
});})(c__19424__auto___30205,out))
;
return ((function (switch__19359__auto__,c__19424__auto___30205,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_30197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30197[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_30197[(1)] = (1));

return statearr_30197;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_30176){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_30176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e30198){if((e30198 instanceof Object)){
var ex__19363__auto__ = e30198;
var statearr_30199_30216 = state_30176;
(statearr_30199_30216[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30217 = state_30176;
state_30176 = G__30217;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_30176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_30176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___30205,out))
})();
var state__19426__auto__ = (function (){var statearr_30200 = f__19425__auto__.call(null);
(statearr_30200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___30205);

return statearr_30200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___30205,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30218 = [];
var len__17402__auto___30288 = arguments.length;
var i__17403__auto___30289 = (0);
while(true){
if((i__17403__auto___30289 < len__17402__auto___30288)){
args30218.push((arguments[i__17403__auto___30289]));

var G__30290 = (i__17403__auto___30289 + (1));
i__17403__auto___30289 = G__30290;
continue;
} else {
}
break;
}

var G__30220 = args30218.length;
switch (G__30220) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30218.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___30292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___30292,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___30292,out){
return (function (state_30258){
var state_val_30259 = (state_30258[(1)]);
if((state_val_30259 === (7))){
var inst_30254 = (state_30258[(2)]);
var state_30258__$1 = state_30258;
var statearr_30260_30293 = state_30258__$1;
(statearr_30260_30293[(2)] = inst_30254);

(statearr_30260_30293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (1))){
var inst_30221 = (new Array(n));
var inst_30222 = inst_30221;
var inst_30223 = (0);
var state_30258__$1 = (function (){var statearr_30261 = state_30258;
(statearr_30261[(7)] = inst_30222);

(statearr_30261[(8)] = inst_30223);

return statearr_30261;
})();
var statearr_30262_30294 = state_30258__$1;
(statearr_30262_30294[(2)] = null);

(statearr_30262_30294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (4))){
var inst_30226 = (state_30258[(9)]);
var inst_30226__$1 = (state_30258[(2)]);
var inst_30227 = (inst_30226__$1 == null);
var inst_30228 = cljs.core.not.call(null,inst_30227);
var state_30258__$1 = (function (){var statearr_30263 = state_30258;
(statearr_30263[(9)] = inst_30226__$1);

return statearr_30263;
})();
if(inst_30228){
var statearr_30264_30295 = state_30258__$1;
(statearr_30264_30295[(1)] = (5));

} else {
var statearr_30265_30296 = state_30258__$1;
(statearr_30265_30296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (15))){
var inst_30248 = (state_30258[(2)]);
var state_30258__$1 = state_30258;
var statearr_30266_30297 = state_30258__$1;
(statearr_30266_30297[(2)] = inst_30248);

(statearr_30266_30297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (13))){
var state_30258__$1 = state_30258;
var statearr_30267_30298 = state_30258__$1;
(statearr_30267_30298[(2)] = null);

(statearr_30267_30298[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (6))){
var inst_30223 = (state_30258[(8)]);
var inst_30244 = (inst_30223 > (0));
var state_30258__$1 = state_30258;
if(cljs.core.truth_(inst_30244)){
var statearr_30268_30299 = state_30258__$1;
(statearr_30268_30299[(1)] = (12));

} else {
var statearr_30269_30300 = state_30258__$1;
(statearr_30269_30300[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (3))){
var inst_30256 = (state_30258[(2)]);
var state_30258__$1 = state_30258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30258__$1,inst_30256);
} else {
if((state_val_30259 === (12))){
var inst_30222 = (state_30258[(7)]);
var inst_30246 = cljs.core.vec.call(null,inst_30222);
var state_30258__$1 = state_30258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30258__$1,(15),out,inst_30246);
} else {
if((state_val_30259 === (2))){
var state_30258__$1 = state_30258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30258__$1,(4),ch);
} else {
if((state_val_30259 === (11))){
var inst_30238 = (state_30258[(2)]);
var inst_30239 = (new Array(n));
var inst_30222 = inst_30239;
var inst_30223 = (0);
var state_30258__$1 = (function (){var statearr_30270 = state_30258;
(statearr_30270[(10)] = inst_30238);

(statearr_30270[(7)] = inst_30222);

(statearr_30270[(8)] = inst_30223);

return statearr_30270;
})();
var statearr_30271_30301 = state_30258__$1;
(statearr_30271_30301[(2)] = null);

(statearr_30271_30301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (9))){
var inst_30222 = (state_30258[(7)]);
var inst_30236 = cljs.core.vec.call(null,inst_30222);
var state_30258__$1 = state_30258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30258__$1,(11),out,inst_30236);
} else {
if((state_val_30259 === (5))){
var inst_30231 = (state_30258[(11)]);
var inst_30222 = (state_30258[(7)]);
var inst_30223 = (state_30258[(8)]);
var inst_30226 = (state_30258[(9)]);
var inst_30230 = (inst_30222[inst_30223] = inst_30226);
var inst_30231__$1 = (inst_30223 + (1));
var inst_30232 = (inst_30231__$1 < n);
var state_30258__$1 = (function (){var statearr_30272 = state_30258;
(statearr_30272[(12)] = inst_30230);

(statearr_30272[(11)] = inst_30231__$1);

return statearr_30272;
})();
if(cljs.core.truth_(inst_30232)){
var statearr_30273_30302 = state_30258__$1;
(statearr_30273_30302[(1)] = (8));

} else {
var statearr_30274_30303 = state_30258__$1;
(statearr_30274_30303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (14))){
var inst_30251 = (state_30258[(2)]);
var inst_30252 = cljs.core.async.close_BANG_.call(null,out);
var state_30258__$1 = (function (){var statearr_30276 = state_30258;
(statearr_30276[(13)] = inst_30251);

return statearr_30276;
})();
var statearr_30277_30304 = state_30258__$1;
(statearr_30277_30304[(2)] = inst_30252);

(statearr_30277_30304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (10))){
var inst_30242 = (state_30258[(2)]);
var state_30258__$1 = state_30258;
var statearr_30278_30305 = state_30258__$1;
(statearr_30278_30305[(2)] = inst_30242);

(statearr_30278_30305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (8))){
var inst_30231 = (state_30258[(11)]);
var inst_30222 = (state_30258[(7)]);
var tmp30275 = inst_30222;
var inst_30222__$1 = tmp30275;
var inst_30223 = inst_30231;
var state_30258__$1 = (function (){var statearr_30279 = state_30258;
(statearr_30279[(7)] = inst_30222__$1);

(statearr_30279[(8)] = inst_30223);

return statearr_30279;
})();
var statearr_30280_30306 = state_30258__$1;
(statearr_30280_30306[(2)] = null);

(statearr_30280_30306[(1)] = (2));


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
});})(c__19424__auto___30292,out))
;
return ((function (switch__19359__auto__,c__19424__auto___30292,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_30284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30284[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_30284[(1)] = (1));

return statearr_30284;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_30258){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_30258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e30285){if((e30285 instanceof Object)){
var ex__19363__auto__ = e30285;
var statearr_30286_30307 = state_30258;
(statearr_30286_30307[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30308 = state_30258;
state_30258 = G__30308;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_30258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_30258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___30292,out))
})();
var state__19426__auto__ = (function (){var statearr_30287 = f__19425__auto__.call(null);
(statearr_30287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___30292);

return statearr_30287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___30292,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30309 = [];
var len__17402__auto___30383 = arguments.length;
var i__17403__auto___30384 = (0);
while(true){
if((i__17403__auto___30384 < len__17402__auto___30383)){
args30309.push((arguments[i__17403__auto___30384]));

var G__30385 = (i__17403__auto___30384 + (1));
i__17403__auto___30384 = G__30385;
continue;
} else {
}
break;
}

var G__30311 = args30309.length;
switch (G__30311) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30309.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19424__auto___30387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___30387,out){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___30387,out){
return (function (state_30353){
var state_val_30354 = (state_30353[(1)]);
if((state_val_30354 === (7))){
var inst_30349 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30355_30388 = state_30353__$1;
(statearr_30355_30388[(2)] = inst_30349);

(statearr_30355_30388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (1))){
var inst_30312 = [];
var inst_30313 = inst_30312;
var inst_30314 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30353__$1 = (function (){var statearr_30356 = state_30353;
(statearr_30356[(7)] = inst_30314);

(statearr_30356[(8)] = inst_30313);

return statearr_30356;
})();
var statearr_30357_30389 = state_30353__$1;
(statearr_30357_30389[(2)] = null);

(statearr_30357_30389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (4))){
var inst_30317 = (state_30353[(9)]);
var inst_30317__$1 = (state_30353[(2)]);
var inst_30318 = (inst_30317__$1 == null);
var inst_30319 = cljs.core.not.call(null,inst_30318);
var state_30353__$1 = (function (){var statearr_30358 = state_30353;
(statearr_30358[(9)] = inst_30317__$1);

return statearr_30358;
})();
if(inst_30319){
var statearr_30359_30390 = state_30353__$1;
(statearr_30359_30390[(1)] = (5));

} else {
var statearr_30360_30391 = state_30353__$1;
(statearr_30360_30391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (15))){
var inst_30343 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30361_30392 = state_30353__$1;
(statearr_30361_30392[(2)] = inst_30343);

(statearr_30361_30392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (13))){
var state_30353__$1 = state_30353;
var statearr_30362_30393 = state_30353__$1;
(statearr_30362_30393[(2)] = null);

(statearr_30362_30393[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (6))){
var inst_30313 = (state_30353[(8)]);
var inst_30338 = inst_30313.length;
var inst_30339 = (inst_30338 > (0));
var state_30353__$1 = state_30353;
if(cljs.core.truth_(inst_30339)){
var statearr_30363_30394 = state_30353__$1;
(statearr_30363_30394[(1)] = (12));

} else {
var statearr_30364_30395 = state_30353__$1;
(statearr_30364_30395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (3))){
var inst_30351 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30353__$1,inst_30351);
} else {
if((state_val_30354 === (12))){
var inst_30313 = (state_30353[(8)]);
var inst_30341 = cljs.core.vec.call(null,inst_30313);
var state_30353__$1 = state_30353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30353__$1,(15),out,inst_30341);
} else {
if((state_val_30354 === (2))){
var state_30353__$1 = state_30353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30353__$1,(4),ch);
} else {
if((state_val_30354 === (11))){
var inst_30321 = (state_30353[(10)]);
var inst_30317 = (state_30353[(9)]);
var inst_30331 = (state_30353[(2)]);
var inst_30332 = [];
var inst_30333 = inst_30332.push(inst_30317);
var inst_30313 = inst_30332;
var inst_30314 = inst_30321;
var state_30353__$1 = (function (){var statearr_30365 = state_30353;
(statearr_30365[(7)] = inst_30314);

(statearr_30365[(11)] = inst_30333);

(statearr_30365[(8)] = inst_30313);

(statearr_30365[(12)] = inst_30331);

return statearr_30365;
})();
var statearr_30366_30396 = state_30353__$1;
(statearr_30366_30396[(2)] = null);

(statearr_30366_30396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (9))){
var inst_30313 = (state_30353[(8)]);
var inst_30329 = cljs.core.vec.call(null,inst_30313);
var state_30353__$1 = state_30353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30353__$1,(11),out,inst_30329);
} else {
if((state_val_30354 === (5))){
var inst_30314 = (state_30353[(7)]);
var inst_30321 = (state_30353[(10)]);
var inst_30317 = (state_30353[(9)]);
var inst_30321__$1 = f.call(null,inst_30317);
var inst_30322 = cljs.core._EQ_.call(null,inst_30321__$1,inst_30314);
var inst_30323 = cljs.core.keyword_identical_QMARK_.call(null,inst_30314,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30324 = (inst_30322) || (inst_30323);
var state_30353__$1 = (function (){var statearr_30367 = state_30353;
(statearr_30367[(10)] = inst_30321__$1);

return statearr_30367;
})();
if(cljs.core.truth_(inst_30324)){
var statearr_30368_30397 = state_30353__$1;
(statearr_30368_30397[(1)] = (8));

} else {
var statearr_30369_30398 = state_30353__$1;
(statearr_30369_30398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (14))){
var inst_30346 = (state_30353[(2)]);
var inst_30347 = cljs.core.async.close_BANG_.call(null,out);
var state_30353__$1 = (function (){var statearr_30371 = state_30353;
(statearr_30371[(13)] = inst_30346);

return statearr_30371;
})();
var statearr_30372_30399 = state_30353__$1;
(statearr_30372_30399[(2)] = inst_30347);

(statearr_30372_30399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (10))){
var inst_30336 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30373_30400 = state_30353__$1;
(statearr_30373_30400[(2)] = inst_30336);

(statearr_30373_30400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (8))){
var inst_30321 = (state_30353[(10)]);
var inst_30317 = (state_30353[(9)]);
var inst_30313 = (state_30353[(8)]);
var inst_30326 = inst_30313.push(inst_30317);
var tmp30370 = inst_30313;
var inst_30313__$1 = tmp30370;
var inst_30314 = inst_30321;
var state_30353__$1 = (function (){var statearr_30374 = state_30353;
(statearr_30374[(14)] = inst_30326);

(statearr_30374[(7)] = inst_30314);

(statearr_30374[(8)] = inst_30313__$1);

return statearr_30374;
})();
var statearr_30375_30401 = state_30353__$1;
(statearr_30375_30401[(2)] = null);

(statearr_30375_30401[(1)] = (2));


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
});})(c__19424__auto___30387,out))
;
return ((function (switch__19359__auto__,c__19424__auto___30387,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_30379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30379[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_30379[(1)] = (1));

return statearr_30379;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_30353){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_30353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e30380){if((e30380 instanceof Object)){
var ex__19363__auto__ = e30380;
var statearr_30381_30402 = state_30353;
(statearr_30381_30402[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30403 = state_30353;
state_30353 = G__30403;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_30353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_30353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___30387,out))
})();
var state__19426__auto__ = (function (){var statearr_30382 = f__19425__auto__.call(null);
(statearr_30382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___30387);

return statearr_30382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___30387,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map