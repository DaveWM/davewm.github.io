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
if(typeof cljs.core.async.t_cljs$core$async23573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23573 = (function (fn_handler,f,meta23574){
this.fn_handler = fn_handler;
this.f = f;
this.meta23574 = meta23574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23575,meta23574__$1){
var self__ = this;
var _23575__$1 = this;
return (new cljs.core.async.t_cljs$core$async23573(self__.fn_handler,self__.f,meta23574__$1));
});

cljs.core.async.t_cljs$core$async23573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23575){
var self__ = this;
var _23575__$1 = this;
return self__.meta23574;
});

cljs.core.async.t_cljs$core$async23573.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta23574","meta23574",735067690,null)], null);
});

cljs.core.async.t_cljs$core$async23573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23573";

cljs.core.async.t_cljs$core$async23573.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async23573");
});

cljs.core.async.__GT_t_cljs$core$async23573 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async23573(fn_handler__$1,f__$1,meta23574){
return (new cljs.core.async.t_cljs$core$async23573(fn_handler__$1,f__$1,meta23574));
});

}

return (new cljs.core.async.t_cljs$core$async23573(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args23578 = [];
var len__17402__auto___23581 = arguments.length;
var i__17403__auto___23582 = (0);
while(true){
if((i__17403__auto___23582 < len__17402__auto___23581)){
args23578.push((arguments[i__17403__auto___23582]));

var G__23583 = (i__17403__auto___23582 + (1));
i__17403__auto___23582 = G__23583;
continue;
} else {
}
break;
}

var G__23580 = args23578.length;
switch (G__23580) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23578.length)].join('')));

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
var args23585 = [];
var len__17402__auto___23588 = arguments.length;
var i__17403__auto___23589 = (0);
while(true){
if((i__17403__auto___23589 < len__17402__auto___23588)){
args23585.push((arguments[i__17403__auto___23589]));

var G__23590 = (i__17403__auto___23589 + (1));
i__17403__auto___23589 = G__23590;
continue;
} else {
}
break;
}

var G__23587 = args23585.length;
switch (G__23587) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23585.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23592 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23592);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23592,ret){
return (function (){
return fn1.call(null,val_23592);
});})(val_23592,ret))
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
var args23593 = [];
var len__17402__auto___23596 = arguments.length;
var i__17403__auto___23597 = (0);
while(true){
if((i__17403__auto___23597 < len__17402__auto___23596)){
args23593.push((arguments[i__17403__auto___23597]));

var G__23598 = (i__17403__auto___23597 + (1));
i__17403__auto___23597 = G__23598;
continue;
} else {
}
break;
}

var G__23595 = args23593.length;
switch (G__23595) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23593.length)].join('')));

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
var n__17247__auto___23600 = n;
var x_23601 = (0);
while(true){
if((x_23601 < n__17247__auto___23600)){
(a[x_23601] = (0));

var G__23602 = (x_23601 + (1));
x_23601 = G__23602;
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

var G__23603 = (i + (1));
i = G__23603;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23607 = (function (alt_flag,flag,meta23608){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23608 = meta23608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23609,meta23608__$1){
var self__ = this;
var _23609__$1 = this;
return (new cljs.core.async.t_cljs$core$async23607(self__.alt_flag,self__.flag,meta23608__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23609){
var self__ = this;
var _23609__$1 = this;
return self__.meta23608;
});})(flag))
;

cljs.core.async.t_cljs$core$async23607.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23607.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23608","meta23608",833948400,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23607";

cljs.core.async.t_cljs$core$async23607.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async23607");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23607 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23607(alt_flag__$1,flag__$1,meta23608){
return (new cljs.core.async.t_cljs$core$async23607(alt_flag__$1,flag__$1,meta23608));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23607(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23613 = (function (alt_handler,flag,cb,meta23614){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23614 = meta23614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23615,meta23614__$1){
var self__ = this;
var _23615__$1 = this;
return (new cljs.core.async.t_cljs$core$async23613(self__.alt_handler,self__.flag,self__.cb,meta23614__$1));
});

cljs.core.async.t_cljs$core$async23613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23615){
var self__ = this;
var _23615__$1 = this;
return self__.meta23614;
});

cljs.core.async.t_cljs$core$async23613.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23614","meta23614",536622101,null)], null);
});

cljs.core.async.t_cljs$core$async23613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23613";

cljs.core.async.t_cljs$core$async23613.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async23613");
});

cljs.core.async.__GT_t_cljs$core$async23613 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23613(alt_handler__$1,flag__$1,cb__$1,meta23614){
return (new cljs.core.async.t_cljs$core$async23613(alt_handler__$1,flag__$1,cb__$1,meta23614));
});

}

return (new cljs.core.async.t_cljs$core$async23613(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23616_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23616_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23617_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23617_SHARP_,port], null));
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
var G__23618 = (i + (1));
i = G__23618;
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
var len__17402__auto___23624 = arguments.length;
var i__17403__auto___23625 = (0);
while(true){
if((i__17403__auto___23625 < len__17402__auto___23624)){
args__17409__auto__.push((arguments[i__17403__auto___23625]));

var G__23626 = (i__17403__auto___23625 + (1));
i__17403__auto___23625 = G__23626;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23621){
var map__23622 = p__23621;
var map__23622__$1 = ((((!((map__23622 == null)))?((((map__23622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23622):map__23622);
var opts = map__23622__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23619){
var G__23620 = cljs.core.first.call(null,seq23619);
var seq23619__$1 = cljs.core.next.call(null,seq23619);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23620,seq23619__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23627 = [];
var len__17402__auto___23677 = arguments.length;
var i__17403__auto___23678 = (0);
while(true){
if((i__17403__auto___23678 < len__17402__auto___23677)){
args23627.push((arguments[i__17403__auto___23678]));

var G__23679 = (i__17403__auto___23678 + (1));
i__17403__auto___23678 = G__23679;
continue;
} else {
}
break;
}

var G__23629 = args23627.length;
switch (G__23629) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23627.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19366__auto___23681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___23681){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___23681){
return (function (state_23653){
var state_val_23654 = (state_23653[(1)]);
if((state_val_23654 === (7))){
var inst_23649 = (state_23653[(2)]);
var state_23653__$1 = state_23653;
var statearr_23655_23682 = state_23653__$1;
(statearr_23655_23682[(2)] = inst_23649);

(statearr_23655_23682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (1))){
var state_23653__$1 = state_23653;
var statearr_23656_23683 = state_23653__$1;
(statearr_23656_23683[(2)] = null);

(statearr_23656_23683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (4))){
var inst_23632 = (state_23653[(7)]);
var inst_23632__$1 = (state_23653[(2)]);
var inst_23633 = (inst_23632__$1 == null);
var state_23653__$1 = (function (){var statearr_23657 = state_23653;
(statearr_23657[(7)] = inst_23632__$1);

return statearr_23657;
})();
if(cljs.core.truth_(inst_23633)){
var statearr_23658_23684 = state_23653__$1;
(statearr_23658_23684[(1)] = (5));

} else {
var statearr_23659_23685 = state_23653__$1;
(statearr_23659_23685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (13))){
var state_23653__$1 = state_23653;
var statearr_23660_23686 = state_23653__$1;
(statearr_23660_23686[(2)] = null);

(statearr_23660_23686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (6))){
var inst_23632 = (state_23653[(7)]);
var state_23653__$1 = state_23653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23653__$1,(11),to,inst_23632);
} else {
if((state_val_23654 === (3))){
var inst_23651 = (state_23653[(2)]);
var state_23653__$1 = state_23653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23653__$1,inst_23651);
} else {
if((state_val_23654 === (12))){
var state_23653__$1 = state_23653;
var statearr_23661_23687 = state_23653__$1;
(statearr_23661_23687[(2)] = null);

(statearr_23661_23687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (2))){
var state_23653__$1 = state_23653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23653__$1,(4),from);
} else {
if((state_val_23654 === (11))){
var inst_23642 = (state_23653[(2)]);
var state_23653__$1 = state_23653;
if(cljs.core.truth_(inst_23642)){
var statearr_23662_23688 = state_23653__$1;
(statearr_23662_23688[(1)] = (12));

} else {
var statearr_23663_23689 = state_23653__$1;
(statearr_23663_23689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (9))){
var state_23653__$1 = state_23653;
var statearr_23664_23690 = state_23653__$1;
(statearr_23664_23690[(2)] = null);

(statearr_23664_23690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (5))){
var state_23653__$1 = state_23653;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23665_23691 = state_23653__$1;
(statearr_23665_23691[(1)] = (8));

} else {
var statearr_23666_23692 = state_23653__$1;
(statearr_23666_23692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (14))){
var inst_23647 = (state_23653[(2)]);
var state_23653__$1 = state_23653;
var statearr_23667_23693 = state_23653__$1;
(statearr_23667_23693[(2)] = inst_23647);

(statearr_23667_23693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (10))){
var inst_23639 = (state_23653[(2)]);
var state_23653__$1 = state_23653;
var statearr_23668_23694 = state_23653__$1;
(statearr_23668_23694[(2)] = inst_23639);

(statearr_23668_23694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23654 === (8))){
var inst_23636 = cljs.core.async.close_BANG_.call(null,to);
var state_23653__$1 = state_23653;
var statearr_23669_23695 = state_23653__$1;
(statearr_23669_23695[(2)] = inst_23636);

(statearr_23669_23695[(1)] = (10));


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
});})(c__19366__auto___23681))
;
return ((function (switch__19345__auto__,c__19366__auto___23681){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_23673 = [null,null,null,null,null,null,null,null];
(statearr_23673[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_23673[(1)] = (1));

return statearr_23673;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_23653){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_23653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e23674){if((e23674 instanceof Object)){
var ex__19349__auto__ = e23674;
var statearr_23675_23696 = state_23653;
(statearr_23675_23696[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23697 = state_23653;
state_23653 = G__23697;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_23653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_23653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___23681))
})();
var state__19368__auto__ = (function (){var statearr_23676 = f__19367__auto__.call(null);
(statearr_23676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___23681);

return statearr_23676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___23681))
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
return (function (p__23881){
var vec__23882 = p__23881;
var v = cljs.core.nth.call(null,vec__23882,(0),null);
var p = cljs.core.nth.call(null,vec__23882,(1),null);
var job = vec__23882;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19366__auto___24064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___24064,res,vec__23882,v,p,job,jobs,results){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___24064,res,vec__23882,v,p,job,jobs,results){
return (function (state_23887){
var state_val_23888 = (state_23887[(1)]);
if((state_val_23888 === (1))){
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23887__$1,(2),res,v);
} else {
if((state_val_23888 === (2))){
var inst_23884 = (state_23887[(2)]);
var inst_23885 = cljs.core.async.close_BANG_.call(null,res);
var state_23887__$1 = (function (){var statearr_23889 = state_23887;
(statearr_23889[(7)] = inst_23884);

return statearr_23889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23887__$1,inst_23885);
} else {
return null;
}
}
});})(c__19366__auto___24064,res,vec__23882,v,p,job,jobs,results))
;
return ((function (switch__19345__auto__,c__19366__auto___24064,res,vec__23882,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_23893 = [null,null,null,null,null,null,null,null];
(statearr_23893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_23893[(1)] = (1));

return statearr_23893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_23887){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_23887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e23894){if((e23894 instanceof Object)){
var ex__19349__auto__ = e23894;
var statearr_23895_24065 = state_23887;
(statearr_23895_24065[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24066 = state_23887;
state_23887 = G__24066;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_23887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_23887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___24064,res,vec__23882,v,p,job,jobs,results))
})();
var state__19368__auto__ = (function (){var statearr_23896 = f__19367__auto__.call(null);
(statearr_23896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___24064);

return statearr_23896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___24064,res,vec__23882,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23897){
var vec__23898 = p__23897;
var v = cljs.core.nth.call(null,vec__23898,(0),null);
var p = cljs.core.nth.call(null,vec__23898,(1),null);
var job = vec__23898;
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
var n__17247__auto___24067 = n;
var __24068 = (0);
while(true){
if((__24068 < n__17247__auto___24067)){
var G__23899_24069 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23899_24069) {
case "compute":
var c__19366__auto___24071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24068,c__19366__auto___24071,G__23899_24069,n__17247__auto___24067,jobs,results,process,async){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (__24068,c__19366__auto___24071,G__23899_24069,n__17247__auto___24067,jobs,results,process,async){
return (function (state_23912){
var state_val_23913 = (state_23912[(1)]);
if((state_val_23913 === (1))){
var state_23912__$1 = state_23912;
var statearr_23914_24072 = state_23912__$1;
(statearr_23914_24072[(2)] = null);

(statearr_23914_24072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (2))){
var state_23912__$1 = state_23912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23912__$1,(4),jobs);
} else {
if((state_val_23913 === (3))){
var inst_23910 = (state_23912[(2)]);
var state_23912__$1 = state_23912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23912__$1,inst_23910);
} else {
if((state_val_23913 === (4))){
var inst_23902 = (state_23912[(2)]);
var inst_23903 = process.call(null,inst_23902);
var state_23912__$1 = state_23912;
if(cljs.core.truth_(inst_23903)){
var statearr_23915_24073 = state_23912__$1;
(statearr_23915_24073[(1)] = (5));

} else {
var statearr_23916_24074 = state_23912__$1;
(statearr_23916_24074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (5))){
var state_23912__$1 = state_23912;
var statearr_23917_24075 = state_23912__$1;
(statearr_23917_24075[(2)] = null);

(statearr_23917_24075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (6))){
var state_23912__$1 = state_23912;
var statearr_23918_24076 = state_23912__$1;
(statearr_23918_24076[(2)] = null);

(statearr_23918_24076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23913 === (7))){
var inst_23908 = (state_23912[(2)]);
var state_23912__$1 = state_23912;
var statearr_23919_24077 = state_23912__$1;
(statearr_23919_24077[(2)] = inst_23908);

(statearr_23919_24077[(1)] = (3));


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
});})(__24068,c__19366__auto___24071,G__23899_24069,n__17247__auto___24067,jobs,results,process,async))
;
return ((function (__24068,switch__19345__auto__,c__19366__auto___24071,G__23899_24069,n__17247__auto___24067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_23923 = [null,null,null,null,null,null,null];
(statearr_23923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_23923[(1)] = (1));

return statearr_23923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_23912){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_23912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e23924){if((e23924 instanceof Object)){
var ex__19349__auto__ = e23924;
var statearr_23925_24078 = state_23912;
(statearr_23925_24078[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24079 = state_23912;
state_23912 = G__24079;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_23912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_23912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(__24068,switch__19345__auto__,c__19366__auto___24071,G__23899_24069,n__17247__auto___24067,jobs,results,process,async))
})();
var state__19368__auto__ = (function (){var statearr_23926 = f__19367__auto__.call(null);
(statearr_23926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___24071);

return statearr_23926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(__24068,c__19366__auto___24071,G__23899_24069,n__17247__auto___24067,jobs,results,process,async))
);


break;
case "async":
var c__19366__auto___24080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24068,c__19366__auto___24080,G__23899_24069,n__17247__auto___24067,jobs,results,process,async){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (__24068,c__19366__auto___24080,G__23899_24069,n__17247__auto___24067,jobs,results,process,async){
return (function (state_23939){
var state_val_23940 = (state_23939[(1)]);
if((state_val_23940 === (1))){
var state_23939__$1 = state_23939;
var statearr_23941_24081 = state_23939__$1;
(statearr_23941_24081[(2)] = null);

(statearr_23941_24081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (2))){
var state_23939__$1 = state_23939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23939__$1,(4),jobs);
} else {
if((state_val_23940 === (3))){
var inst_23937 = (state_23939[(2)]);
var state_23939__$1 = state_23939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23939__$1,inst_23937);
} else {
if((state_val_23940 === (4))){
var inst_23929 = (state_23939[(2)]);
var inst_23930 = async.call(null,inst_23929);
var state_23939__$1 = state_23939;
if(cljs.core.truth_(inst_23930)){
var statearr_23942_24082 = state_23939__$1;
(statearr_23942_24082[(1)] = (5));

} else {
var statearr_23943_24083 = state_23939__$1;
(statearr_23943_24083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (5))){
var state_23939__$1 = state_23939;
var statearr_23944_24084 = state_23939__$1;
(statearr_23944_24084[(2)] = null);

(statearr_23944_24084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (6))){
var state_23939__$1 = state_23939;
var statearr_23945_24085 = state_23939__$1;
(statearr_23945_24085[(2)] = null);

(statearr_23945_24085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (7))){
var inst_23935 = (state_23939[(2)]);
var state_23939__$1 = state_23939;
var statearr_23946_24086 = state_23939__$1;
(statearr_23946_24086[(2)] = inst_23935);

(statearr_23946_24086[(1)] = (3));


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
});})(__24068,c__19366__auto___24080,G__23899_24069,n__17247__auto___24067,jobs,results,process,async))
;
return ((function (__24068,switch__19345__auto__,c__19366__auto___24080,G__23899_24069,n__17247__auto___24067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_23950 = [null,null,null,null,null,null,null];
(statearr_23950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_23950[(1)] = (1));

return statearr_23950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_23939){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_23939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e23951){if((e23951 instanceof Object)){
var ex__19349__auto__ = e23951;
var statearr_23952_24087 = state_23939;
(statearr_23952_24087[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24088 = state_23939;
state_23939 = G__24088;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_23939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_23939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(__24068,switch__19345__auto__,c__19366__auto___24080,G__23899_24069,n__17247__auto___24067,jobs,results,process,async))
})();
var state__19368__auto__ = (function (){var statearr_23953 = f__19367__auto__.call(null);
(statearr_23953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___24080);

return statearr_23953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(__24068,c__19366__auto___24080,G__23899_24069,n__17247__auto___24067,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24089 = (__24068 + (1));
__24068 = G__24089;
continue;
} else {
}
break;
}

var c__19366__auto___24090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___24090,jobs,results,process,async){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___24090,jobs,results,process,async){
return (function (state_23975){
var state_val_23976 = (state_23975[(1)]);
if((state_val_23976 === (1))){
var state_23975__$1 = state_23975;
var statearr_23977_24091 = state_23975__$1;
(statearr_23977_24091[(2)] = null);

(statearr_23977_24091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (2))){
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(4),from);
} else {
if((state_val_23976 === (3))){
var inst_23973 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23975__$1,inst_23973);
} else {
if((state_val_23976 === (4))){
var inst_23956 = (state_23975[(7)]);
var inst_23956__$1 = (state_23975[(2)]);
var inst_23957 = (inst_23956__$1 == null);
var state_23975__$1 = (function (){var statearr_23978 = state_23975;
(statearr_23978[(7)] = inst_23956__$1);

return statearr_23978;
})();
if(cljs.core.truth_(inst_23957)){
var statearr_23979_24092 = state_23975__$1;
(statearr_23979_24092[(1)] = (5));

} else {
var statearr_23980_24093 = state_23975__$1;
(statearr_23980_24093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (5))){
var inst_23959 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23975__$1 = state_23975;
var statearr_23981_24094 = state_23975__$1;
(statearr_23981_24094[(2)] = inst_23959);

(statearr_23981_24094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (6))){
var inst_23956 = (state_23975[(7)]);
var inst_23961 = (state_23975[(8)]);
var inst_23961__$1 = cljs.core.async.chan.call(null,(1));
var inst_23962 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23963 = [inst_23956,inst_23961__$1];
var inst_23964 = (new cljs.core.PersistentVector(null,2,(5),inst_23962,inst_23963,null));
var state_23975__$1 = (function (){var statearr_23982 = state_23975;
(statearr_23982[(8)] = inst_23961__$1);

return statearr_23982;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23975__$1,(8),jobs,inst_23964);
} else {
if((state_val_23976 === (7))){
var inst_23971 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23983_24095 = state_23975__$1;
(statearr_23983_24095[(2)] = inst_23971);

(statearr_23983_24095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23976 === (8))){
var inst_23961 = (state_23975[(8)]);
var inst_23966 = (state_23975[(2)]);
var state_23975__$1 = (function (){var statearr_23984 = state_23975;
(statearr_23984[(9)] = inst_23966);

return statearr_23984;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23975__$1,(9),results,inst_23961);
} else {
if((state_val_23976 === (9))){
var inst_23968 = (state_23975[(2)]);
var state_23975__$1 = (function (){var statearr_23985 = state_23975;
(statearr_23985[(10)] = inst_23968);

return statearr_23985;
})();
var statearr_23986_24096 = state_23975__$1;
(statearr_23986_24096[(2)] = null);

(statearr_23986_24096[(1)] = (2));


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
});})(c__19366__auto___24090,jobs,results,process,async))
;
return ((function (switch__19345__auto__,c__19366__auto___24090,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_23990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_23990[(1)] = (1));

return statearr_23990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_23975){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_23975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e23991){if((e23991 instanceof Object)){
var ex__19349__auto__ = e23991;
var statearr_23992_24097 = state_23975;
(statearr_23992_24097[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24098 = state_23975;
state_23975 = G__24098;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_23975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_23975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___24090,jobs,results,process,async))
})();
var state__19368__auto__ = (function (){var statearr_23993 = f__19367__auto__.call(null);
(statearr_23993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___24090);

return statearr_23993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___24090,jobs,results,process,async))
);


var c__19366__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto__,jobs,results,process,async){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto__,jobs,results,process,async){
return (function (state_24031){
var state_val_24032 = (state_24031[(1)]);
if((state_val_24032 === (7))){
var inst_24027 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
var statearr_24033_24099 = state_24031__$1;
(statearr_24033_24099[(2)] = inst_24027);

(statearr_24033_24099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (20))){
var state_24031__$1 = state_24031;
var statearr_24034_24100 = state_24031__$1;
(statearr_24034_24100[(2)] = null);

(statearr_24034_24100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (1))){
var state_24031__$1 = state_24031;
var statearr_24035_24101 = state_24031__$1;
(statearr_24035_24101[(2)] = null);

(statearr_24035_24101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (4))){
var inst_23996 = (state_24031[(7)]);
var inst_23996__$1 = (state_24031[(2)]);
var inst_23997 = (inst_23996__$1 == null);
var state_24031__$1 = (function (){var statearr_24036 = state_24031;
(statearr_24036[(7)] = inst_23996__$1);

return statearr_24036;
})();
if(cljs.core.truth_(inst_23997)){
var statearr_24037_24102 = state_24031__$1;
(statearr_24037_24102[(1)] = (5));

} else {
var statearr_24038_24103 = state_24031__$1;
(statearr_24038_24103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (15))){
var inst_24009 = (state_24031[(8)]);
var state_24031__$1 = state_24031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24031__$1,(18),to,inst_24009);
} else {
if((state_val_24032 === (21))){
var inst_24022 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
var statearr_24039_24104 = state_24031__$1;
(statearr_24039_24104[(2)] = inst_24022);

(statearr_24039_24104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (13))){
var inst_24024 = (state_24031[(2)]);
var state_24031__$1 = (function (){var statearr_24040 = state_24031;
(statearr_24040[(9)] = inst_24024);

return statearr_24040;
})();
var statearr_24041_24105 = state_24031__$1;
(statearr_24041_24105[(2)] = null);

(statearr_24041_24105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (6))){
var inst_23996 = (state_24031[(7)]);
var state_24031__$1 = state_24031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24031__$1,(11),inst_23996);
} else {
if((state_val_24032 === (17))){
var inst_24017 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
if(cljs.core.truth_(inst_24017)){
var statearr_24042_24106 = state_24031__$1;
(statearr_24042_24106[(1)] = (19));

} else {
var statearr_24043_24107 = state_24031__$1;
(statearr_24043_24107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (3))){
var inst_24029 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24031__$1,inst_24029);
} else {
if((state_val_24032 === (12))){
var inst_24006 = (state_24031[(10)]);
var state_24031__$1 = state_24031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24031__$1,(14),inst_24006);
} else {
if((state_val_24032 === (2))){
var state_24031__$1 = state_24031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24031__$1,(4),results);
} else {
if((state_val_24032 === (19))){
var state_24031__$1 = state_24031;
var statearr_24044_24108 = state_24031__$1;
(statearr_24044_24108[(2)] = null);

(statearr_24044_24108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (11))){
var inst_24006 = (state_24031[(2)]);
var state_24031__$1 = (function (){var statearr_24045 = state_24031;
(statearr_24045[(10)] = inst_24006);

return statearr_24045;
})();
var statearr_24046_24109 = state_24031__$1;
(statearr_24046_24109[(2)] = null);

(statearr_24046_24109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (9))){
var state_24031__$1 = state_24031;
var statearr_24047_24110 = state_24031__$1;
(statearr_24047_24110[(2)] = null);

(statearr_24047_24110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (5))){
var state_24031__$1 = state_24031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24048_24111 = state_24031__$1;
(statearr_24048_24111[(1)] = (8));

} else {
var statearr_24049_24112 = state_24031__$1;
(statearr_24049_24112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (14))){
var inst_24011 = (state_24031[(11)]);
var inst_24009 = (state_24031[(8)]);
var inst_24009__$1 = (state_24031[(2)]);
var inst_24010 = (inst_24009__$1 == null);
var inst_24011__$1 = cljs.core.not.call(null,inst_24010);
var state_24031__$1 = (function (){var statearr_24050 = state_24031;
(statearr_24050[(11)] = inst_24011__$1);

(statearr_24050[(8)] = inst_24009__$1);

return statearr_24050;
})();
if(inst_24011__$1){
var statearr_24051_24113 = state_24031__$1;
(statearr_24051_24113[(1)] = (15));

} else {
var statearr_24052_24114 = state_24031__$1;
(statearr_24052_24114[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (16))){
var inst_24011 = (state_24031[(11)]);
var state_24031__$1 = state_24031;
var statearr_24053_24115 = state_24031__$1;
(statearr_24053_24115[(2)] = inst_24011);

(statearr_24053_24115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (10))){
var inst_24003 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
var statearr_24054_24116 = state_24031__$1;
(statearr_24054_24116[(2)] = inst_24003);

(statearr_24054_24116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (18))){
var inst_24014 = (state_24031[(2)]);
var state_24031__$1 = state_24031;
var statearr_24055_24117 = state_24031__$1;
(statearr_24055_24117[(2)] = inst_24014);

(statearr_24055_24117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24032 === (8))){
var inst_24000 = cljs.core.async.close_BANG_.call(null,to);
var state_24031__$1 = state_24031;
var statearr_24056_24118 = state_24031__$1;
(statearr_24056_24118[(2)] = inst_24000);

(statearr_24056_24118[(1)] = (10));


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
var statearr_24060 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_24060[(1)] = (1));

return statearr_24060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_24031){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_24031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e24061){if((e24061 instanceof Object)){
var ex__19349__auto__ = e24061;
var statearr_24062_24119 = state_24031;
(statearr_24062_24119[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24120 = state_24031;
state_24031 = G__24120;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_24031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_24031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__,jobs,results,process,async))
})();
var state__19368__auto__ = (function (){var statearr_24063 = f__19367__auto__.call(null);
(statearr_24063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_24063;
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
var args24121 = [];
var len__17402__auto___24124 = arguments.length;
var i__17403__auto___24125 = (0);
while(true){
if((i__17403__auto___24125 < len__17402__auto___24124)){
args24121.push((arguments[i__17403__auto___24125]));

var G__24126 = (i__17403__auto___24125 + (1));
i__17403__auto___24125 = G__24126;
continue;
} else {
}
break;
}

var G__24123 = args24121.length;
switch (G__24123) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24121.length)].join('')));

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
var args24128 = [];
var len__17402__auto___24131 = arguments.length;
var i__17403__auto___24132 = (0);
while(true){
if((i__17403__auto___24132 < len__17402__auto___24131)){
args24128.push((arguments[i__17403__auto___24132]));

var G__24133 = (i__17403__auto___24132 + (1));
i__17403__auto___24132 = G__24133;
continue;
} else {
}
break;
}

var G__24130 = args24128.length;
switch (G__24130) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24128.length)].join('')));

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
var args24135 = [];
var len__17402__auto___24188 = arguments.length;
var i__17403__auto___24189 = (0);
while(true){
if((i__17403__auto___24189 < len__17402__auto___24188)){
args24135.push((arguments[i__17403__auto___24189]));

var G__24190 = (i__17403__auto___24189 + (1));
i__17403__auto___24189 = G__24190;
continue;
} else {
}
break;
}

var G__24137 = args24135.length;
switch (G__24137) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24135.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19366__auto___24192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___24192,tc,fc){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___24192,tc,fc){
return (function (state_24163){
var state_val_24164 = (state_24163[(1)]);
if((state_val_24164 === (7))){
var inst_24159 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24165_24193 = state_24163__$1;
(statearr_24165_24193[(2)] = inst_24159);

(statearr_24165_24193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (1))){
var state_24163__$1 = state_24163;
var statearr_24166_24194 = state_24163__$1;
(statearr_24166_24194[(2)] = null);

(statearr_24166_24194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (4))){
var inst_24140 = (state_24163[(7)]);
var inst_24140__$1 = (state_24163[(2)]);
var inst_24141 = (inst_24140__$1 == null);
var state_24163__$1 = (function (){var statearr_24167 = state_24163;
(statearr_24167[(7)] = inst_24140__$1);

return statearr_24167;
})();
if(cljs.core.truth_(inst_24141)){
var statearr_24168_24195 = state_24163__$1;
(statearr_24168_24195[(1)] = (5));

} else {
var statearr_24169_24196 = state_24163__$1;
(statearr_24169_24196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (13))){
var state_24163__$1 = state_24163;
var statearr_24170_24197 = state_24163__$1;
(statearr_24170_24197[(2)] = null);

(statearr_24170_24197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (6))){
var inst_24140 = (state_24163[(7)]);
var inst_24146 = p.call(null,inst_24140);
var state_24163__$1 = state_24163;
if(cljs.core.truth_(inst_24146)){
var statearr_24171_24198 = state_24163__$1;
(statearr_24171_24198[(1)] = (9));

} else {
var statearr_24172_24199 = state_24163__$1;
(statearr_24172_24199[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (3))){
var inst_24161 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24163__$1,inst_24161);
} else {
if((state_val_24164 === (12))){
var state_24163__$1 = state_24163;
var statearr_24173_24200 = state_24163__$1;
(statearr_24173_24200[(2)] = null);

(statearr_24173_24200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (2))){
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24163__$1,(4),ch);
} else {
if((state_val_24164 === (11))){
var inst_24140 = (state_24163[(7)]);
var inst_24150 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24163__$1,(8),inst_24150,inst_24140);
} else {
if((state_val_24164 === (9))){
var state_24163__$1 = state_24163;
var statearr_24174_24201 = state_24163__$1;
(statearr_24174_24201[(2)] = tc);

(statearr_24174_24201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (5))){
var inst_24143 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24144 = cljs.core.async.close_BANG_.call(null,fc);
var state_24163__$1 = (function (){var statearr_24175 = state_24163;
(statearr_24175[(8)] = inst_24143);

return statearr_24175;
})();
var statearr_24176_24202 = state_24163__$1;
(statearr_24176_24202[(2)] = inst_24144);

(statearr_24176_24202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (14))){
var inst_24157 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24177_24203 = state_24163__$1;
(statearr_24177_24203[(2)] = inst_24157);

(statearr_24177_24203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (10))){
var state_24163__$1 = state_24163;
var statearr_24178_24204 = state_24163__$1;
(statearr_24178_24204[(2)] = fc);

(statearr_24178_24204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (8))){
var inst_24152 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
if(cljs.core.truth_(inst_24152)){
var statearr_24179_24205 = state_24163__$1;
(statearr_24179_24205[(1)] = (12));

} else {
var statearr_24180_24206 = state_24163__$1;
(statearr_24180_24206[(1)] = (13));

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
});})(c__19366__auto___24192,tc,fc))
;
return ((function (switch__19345__auto__,c__19366__auto___24192,tc,fc){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_24184 = [null,null,null,null,null,null,null,null,null];
(statearr_24184[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_24184[(1)] = (1));

return statearr_24184;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_24163){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_24163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e24185){if((e24185 instanceof Object)){
var ex__19349__auto__ = e24185;
var statearr_24186_24207 = state_24163;
(statearr_24186_24207[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24208 = state_24163;
state_24163 = G__24208;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_24163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_24163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___24192,tc,fc))
})();
var state__19368__auto__ = (function (){var statearr_24187 = f__19367__auto__.call(null);
(statearr_24187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___24192);

return statearr_24187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___24192,tc,fc))
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
return (function (state_24255){
var state_val_24256 = (state_24255[(1)]);
if((state_val_24256 === (1))){
var inst_24241 = init;
var state_24255__$1 = (function (){var statearr_24257 = state_24255;
(statearr_24257[(7)] = inst_24241);

return statearr_24257;
})();
var statearr_24258_24273 = state_24255__$1;
(statearr_24258_24273[(2)] = null);

(statearr_24258_24273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (2))){
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24255__$1,(4),ch);
} else {
if((state_val_24256 === (3))){
var inst_24253 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24255__$1,inst_24253);
} else {
if((state_val_24256 === (4))){
var inst_24244 = (state_24255[(8)]);
var inst_24244__$1 = (state_24255[(2)]);
var inst_24245 = (inst_24244__$1 == null);
var state_24255__$1 = (function (){var statearr_24259 = state_24255;
(statearr_24259[(8)] = inst_24244__$1);

return statearr_24259;
})();
if(cljs.core.truth_(inst_24245)){
var statearr_24260_24274 = state_24255__$1;
(statearr_24260_24274[(1)] = (5));

} else {
var statearr_24261_24275 = state_24255__$1;
(statearr_24261_24275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (5))){
var inst_24241 = (state_24255[(7)]);
var state_24255__$1 = state_24255;
var statearr_24262_24276 = state_24255__$1;
(statearr_24262_24276[(2)] = inst_24241);

(statearr_24262_24276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (6))){
var inst_24244 = (state_24255[(8)]);
var inst_24241 = (state_24255[(7)]);
var inst_24248 = f.call(null,inst_24241,inst_24244);
var inst_24241__$1 = inst_24248;
var state_24255__$1 = (function (){var statearr_24263 = state_24255;
(statearr_24263[(7)] = inst_24241__$1);

return statearr_24263;
})();
var statearr_24264_24277 = state_24255__$1;
(statearr_24264_24277[(2)] = null);

(statearr_24264_24277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (7))){
var inst_24251 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24265_24278 = state_24255__$1;
(statearr_24265_24278[(2)] = inst_24251);

(statearr_24265_24278[(1)] = (3));


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
var statearr_24269 = [null,null,null,null,null,null,null,null,null];
(statearr_24269[(0)] = cljs$core$async$reduce_$_state_machine__19346__auto__);

(statearr_24269[(1)] = (1));

return statearr_24269;
});
var cljs$core$async$reduce_$_state_machine__19346__auto____1 = (function (state_24255){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_24255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e24270){if((e24270 instanceof Object)){
var ex__19349__auto__ = e24270;
var statearr_24271_24279 = state_24255;
(statearr_24271_24279[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24280 = state_24255;
state_24255 = G__24280;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19346__auto__ = function(state_24255){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19346__auto____1.call(this,state_24255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19346__auto____0;
cljs$core$async$reduce_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19346__auto____1;
return cljs$core$async$reduce_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__))
})();
var state__19368__auto__ = (function (){var statearr_24272 = f__19367__auto__.call(null);
(statearr_24272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_24272;
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
var args24281 = [];
var len__17402__auto___24333 = arguments.length;
var i__17403__auto___24334 = (0);
while(true){
if((i__17403__auto___24334 < len__17402__auto___24333)){
args24281.push((arguments[i__17403__auto___24334]));

var G__24335 = (i__17403__auto___24334 + (1));
i__17403__auto___24334 = G__24335;
continue;
} else {
}
break;
}

var G__24283 = args24281.length;
switch (G__24283) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24281.length)].join('')));

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
return (function (state_24308){
var state_val_24309 = (state_24308[(1)]);
if((state_val_24309 === (7))){
var inst_24290 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
var statearr_24310_24337 = state_24308__$1;
(statearr_24310_24337[(2)] = inst_24290);

(statearr_24310_24337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (1))){
var inst_24284 = cljs.core.seq.call(null,coll);
var inst_24285 = inst_24284;
var state_24308__$1 = (function (){var statearr_24311 = state_24308;
(statearr_24311[(7)] = inst_24285);

return statearr_24311;
})();
var statearr_24312_24338 = state_24308__$1;
(statearr_24312_24338[(2)] = null);

(statearr_24312_24338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (4))){
var inst_24285 = (state_24308[(7)]);
var inst_24288 = cljs.core.first.call(null,inst_24285);
var state_24308__$1 = state_24308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24308__$1,(7),ch,inst_24288);
} else {
if((state_val_24309 === (13))){
var inst_24302 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
var statearr_24313_24339 = state_24308__$1;
(statearr_24313_24339[(2)] = inst_24302);

(statearr_24313_24339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (6))){
var inst_24293 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
if(cljs.core.truth_(inst_24293)){
var statearr_24314_24340 = state_24308__$1;
(statearr_24314_24340[(1)] = (8));

} else {
var statearr_24315_24341 = state_24308__$1;
(statearr_24315_24341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (3))){
var inst_24306 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24308__$1,inst_24306);
} else {
if((state_val_24309 === (12))){
var state_24308__$1 = state_24308;
var statearr_24316_24342 = state_24308__$1;
(statearr_24316_24342[(2)] = null);

(statearr_24316_24342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (2))){
var inst_24285 = (state_24308[(7)]);
var state_24308__$1 = state_24308;
if(cljs.core.truth_(inst_24285)){
var statearr_24317_24343 = state_24308__$1;
(statearr_24317_24343[(1)] = (4));

} else {
var statearr_24318_24344 = state_24308__$1;
(statearr_24318_24344[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (11))){
var inst_24299 = cljs.core.async.close_BANG_.call(null,ch);
var state_24308__$1 = state_24308;
var statearr_24319_24345 = state_24308__$1;
(statearr_24319_24345[(2)] = inst_24299);

(statearr_24319_24345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (9))){
var state_24308__$1 = state_24308;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24320_24346 = state_24308__$1;
(statearr_24320_24346[(1)] = (11));

} else {
var statearr_24321_24347 = state_24308__$1;
(statearr_24321_24347[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (5))){
var inst_24285 = (state_24308[(7)]);
var state_24308__$1 = state_24308;
var statearr_24322_24348 = state_24308__$1;
(statearr_24322_24348[(2)] = inst_24285);

(statearr_24322_24348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (10))){
var inst_24304 = (state_24308[(2)]);
var state_24308__$1 = state_24308;
var statearr_24323_24349 = state_24308__$1;
(statearr_24323_24349[(2)] = inst_24304);

(statearr_24323_24349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24309 === (8))){
var inst_24285 = (state_24308[(7)]);
var inst_24295 = cljs.core.next.call(null,inst_24285);
var inst_24285__$1 = inst_24295;
var state_24308__$1 = (function (){var statearr_24324 = state_24308;
(statearr_24324[(7)] = inst_24285__$1);

return statearr_24324;
})();
var statearr_24325_24350 = state_24308__$1;
(statearr_24325_24350[(2)] = null);

(statearr_24325_24350[(1)] = (2));


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
var statearr_24329 = [null,null,null,null,null,null,null,null];
(statearr_24329[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_24329[(1)] = (1));

return statearr_24329;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_24308){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_24308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e24330){if((e24330 instanceof Object)){
var ex__19349__auto__ = e24330;
var statearr_24331_24351 = state_24308;
(statearr_24331_24351[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24352 = state_24308;
state_24308 = G__24352;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_24308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_24308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__))
})();
var state__19368__auto__ = (function (){var statearr_24332 = f__19367__auto__.call(null);
(statearr_24332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_24332;
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
if(typeof cljs.core.async.t_cljs$core$async24574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24574 = (function (mult,ch,cs,meta24575){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24575 = meta24575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24576,meta24575__$1){
var self__ = this;
var _24576__$1 = this;
return (new cljs.core.async.t_cljs$core$async24574(self__.mult,self__.ch,self__.cs,meta24575__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24576){
var self__ = this;
var _24576__$1 = this;
return self__.meta24575;
});})(cs))
;

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24574.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24574.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24575","meta24575",248939661,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24574.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24574";

cljs.core.async.t_cljs$core$async24574.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async24574");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24574 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24574(mult__$1,ch__$1,cs__$1,meta24575){
return (new cljs.core.async.t_cljs$core$async24574(mult__$1,ch__$1,cs__$1,meta24575));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24574(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19366__auto___24795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___24795,cs,m,dchan,dctr,done){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___24795,cs,m,dchan,dctr,done){
return (function (state_24707){
var state_val_24708 = (state_24707[(1)]);
if((state_val_24708 === (7))){
var inst_24703 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24709_24796 = state_24707__$1;
(statearr_24709_24796[(2)] = inst_24703);

(statearr_24709_24796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (20))){
var inst_24608 = (state_24707[(7)]);
var inst_24618 = cljs.core.first.call(null,inst_24608);
var inst_24619 = cljs.core.nth.call(null,inst_24618,(0),null);
var inst_24620 = cljs.core.nth.call(null,inst_24618,(1),null);
var state_24707__$1 = (function (){var statearr_24710 = state_24707;
(statearr_24710[(8)] = inst_24619);

return statearr_24710;
})();
if(cljs.core.truth_(inst_24620)){
var statearr_24711_24797 = state_24707__$1;
(statearr_24711_24797[(1)] = (22));

} else {
var statearr_24712_24798 = state_24707__$1;
(statearr_24712_24798[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (27))){
var inst_24650 = (state_24707[(9)]);
var inst_24655 = (state_24707[(10)]);
var inst_24648 = (state_24707[(11)]);
var inst_24579 = (state_24707[(12)]);
var inst_24655__$1 = cljs.core._nth.call(null,inst_24648,inst_24650);
var inst_24656 = cljs.core.async.put_BANG_.call(null,inst_24655__$1,inst_24579,done);
var state_24707__$1 = (function (){var statearr_24713 = state_24707;
(statearr_24713[(10)] = inst_24655__$1);

return statearr_24713;
})();
if(cljs.core.truth_(inst_24656)){
var statearr_24714_24799 = state_24707__$1;
(statearr_24714_24799[(1)] = (30));

} else {
var statearr_24715_24800 = state_24707__$1;
(statearr_24715_24800[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (1))){
var state_24707__$1 = state_24707;
var statearr_24716_24801 = state_24707__$1;
(statearr_24716_24801[(2)] = null);

(statearr_24716_24801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (24))){
var inst_24608 = (state_24707[(7)]);
var inst_24625 = (state_24707[(2)]);
var inst_24626 = cljs.core.next.call(null,inst_24608);
var inst_24588 = inst_24626;
var inst_24589 = null;
var inst_24590 = (0);
var inst_24591 = (0);
var state_24707__$1 = (function (){var statearr_24717 = state_24707;
(statearr_24717[(13)] = inst_24589);

(statearr_24717[(14)] = inst_24590);

(statearr_24717[(15)] = inst_24591);

(statearr_24717[(16)] = inst_24588);

(statearr_24717[(17)] = inst_24625);

return statearr_24717;
})();
var statearr_24718_24802 = state_24707__$1;
(statearr_24718_24802[(2)] = null);

(statearr_24718_24802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (39))){
var state_24707__$1 = state_24707;
var statearr_24722_24803 = state_24707__$1;
(statearr_24722_24803[(2)] = null);

(statearr_24722_24803[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (4))){
var inst_24579 = (state_24707[(12)]);
var inst_24579__$1 = (state_24707[(2)]);
var inst_24580 = (inst_24579__$1 == null);
var state_24707__$1 = (function (){var statearr_24723 = state_24707;
(statearr_24723[(12)] = inst_24579__$1);

return statearr_24723;
})();
if(cljs.core.truth_(inst_24580)){
var statearr_24724_24804 = state_24707__$1;
(statearr_24724_24804[(1)] = (5));

} else {
var statearr_24725_24805 = state_24707__$1;
(statearr_24725_24805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (15))){
var inst_24589 = (state_24707[(13)]);
var inst_24590 = (state_24707[(14)]);
var inst_24591 = (state_24707[(15)]);
var inst_24588 = (state_24707[(16)]);
var inst_24604 = (state_24707[(2)]);
var inst_24605 = (inst_24591 + (1));
var tmp24719 = inst_24589;
var tmp24720 = inst_24590;
var tmp24721 = inst_24588;
var inst_24588__$1 = tmp24721;
var inst_24589__$1 = tmp24719;
var inst_24590__$1 = tmp24720;
var inst_24591__$1 = inst_24605;
var state_24707__$1 = (function (){var statearr_24726 = state_24707;
(statearr_24726[(13)] = inst_24589__$1);

(statearr_24726[(14)] = inst_24590__$1);

(statearr_24726[(15)] = inst_24591__$1);

(statearr_24726[(16)] = inst_24588__$1);

(statearr_24726[(18)] = inst_24604);

return statearr_24726;
})();
var statearr_24727_24806 = state_24707__$1;
(statearr_24727_24806[(2)] = null);

(statearr_24727_24806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (21))){
var inst_24629 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24731_24807 = state_24707__$1;
(statearr_24731_24807[(2)] = inst_24629);

(statearr_24731_24807[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (31))){
var inst_24655 = (state_24707[(10)]);
var inst_24659 = done.call(null,null);
var inst_24660 = cljs.core.async.untap_STAR_.call(null,m,inst_24655);
var state_24707__$1 = (function (){var statearr_24732 = state_24707;
(statearr_24732[(19)] = inst_24659);

return statearr_24732;
})();
var statearr_24733_24808 = state_24707__$1;
(statearr_24733_24808[(2)] = inst_24660);

(statearr_24733_24808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (32))){
var inst_24650 = (state_24707[(9)]);
var inst_24647 = (state_24707[(20)]);
var inst_24648 = (state_24707[(11)]);
var inst_24649 = (state_24707[(21)]);
var inst_24662 = (state_24707[(2)]);
var inst_24663 = (inst_24650 + (1));
var tmp24728 = inst_24647;
var tmp24729 = inst_24648;
var tmp24730 = inst_24649;
var inst_24647__$1 = tmp24728;
var inst_24648__$1 = tmp24729;
var inst_24649__$1 = tmp24730;
var inst_24650__$1 = inst_24663;
var state_24707__$1 = (function (){var statearr_24734 = state_24707;
(statearr_24734[(9)] = inst_24650__$1);

(statearr_24734[(20)] = inst_24647__$1);

(statearr_24734[(11)] = inst_24648__$1);

(statearr_24734[(21)] = inst_24649__$1);

(statearr_24734[(22)] = inst_24662);

return statearr_24734;
})();
var statearr_24735_24809 = state_24707__$1;
(statearr_24735_24809[(2)] = null);

(statearr_24735_24809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (40))){
var inst_24675 = (state_24707[(23)]);
var inst_24679 = done.call(null,null);
var inst_24680 = cljs.core.async.untap_STAR_.call(null,m,inst_24675);
var state_24707__$1 = (function (){var statearr_24736 = state_24707;
(statearr_24736[(24)] = inst_24679);

return statearr_24736;
})();
var statearr_24737_24810 = state_24707__$1;
(statearr_24737_24810[(2)] = inst_24680);

(statearr_24737_24810[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (33))){
var inst_24666 = (state_24707[(25)]);
var inst_24668 = cljs.core.chunked_seq_QMARK_.call(null,inst_24666);
var state_24707__$1 = state_24707;
if(inst_24668){
var statearr_24738_24811 = state_24707__$1;
(statearr_24738_24811[(1)] = (36));

} else {
var statearr_24739_24812 = state_24707__$1;
(statearr_24739_24812[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (13))){
var inst_24598 = (state_24707[(26)]);
var inst_24601 = cljs.core.async.close_BANG_.call(null,inst_24598);
var state_24707__$1 = state_24707;
var statearr_24740_24813 = state_24707__$1;
(statearr_24740_24813[(2)] = inst_24601);

(statearr_24740_24813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (22))){
var inst_24619 = (state_24707[(8)]);
var inst_24622 = cljs.core.async.close_BANG_.call(null,inst_24619);
var state_24707__$1 = state_24707;
var statearr_24741_24814 = state_24707__$1;
(statearr_24741_24814[(2)] = inst_24622);

(statearr_24741_24814[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (36))){
var inst_24666 = (state_24707[(25)]);
var inst_24670 = cljs.core.chunk_first.call(null,inst_24666);
var inst_24671 = cljs.core.chunk_rest.call(null,inst_24666);
var inst_24672 = cljs.core.count.call(null,inst_24670);
var inst_24647 = inst_24671;
var inst_24648 = inst_24670;
var inst_24649 = inst_24672;
var inst_24650 = (0);
var state_24707__$1 = (function (){var statearr_24742 = state_24707;
(statearr_24742[(9)] = inst_24650);

(statearr_24742[(20)] = inst_24647);

(statearr_24742[(11)] = inst_24648);

(statearr_24742[(21)] = inst_24649);

return statearr_24742;
})();
var statearr_24743_24815 = state_24707__$1;
(statearr_24743_24815[(2)] = null);

(statearr_24743_24815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (41))){
var inst_24666 = (state_24707[(25)]);
var inst_24682 = (state_24707[(2)]);
var inst_24683 = cljs.core.next.call(null,inst_24666);
var inst_24647 = inst_24683;
var inst_24648 = null;
var inst_24649 = (0);
var inst_24650 = (0);
var state_24707__$1 = (function (){var statearr_24744 = state_24707;
(statearr_24744[(9)] = inst_24650);

(statearr_24744[(27)] = inst_24682);

(statearr_24744[(20)] = inst_24647);

(statearr_24744[(11)] = inst_24648);

(statearr_24744[(21)] = inst_24649);

return statearr_24744;
})();
var statearr_24745_24816 = state_24707__$1;
(statearr_24745_24816[(2)] = null);

(statearr_24745_24816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (43))){
var state_24707__$1 = state_24707;
var statearr_24746_24817 = state_24707__$1;
(statearr_24746_24817[(2)] = null);

(statearr_24746_24817[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (29))){
var inst_24691 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24747_24818 = state_24707__$1;
(statearr_24747_24818[(2)] = inst_24691);

(statearr_24747_24818[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (44))){
var inst_24700 = (state_24707[(2)]);
var state_24707__$1 = (function (){var statearr_24748 = state_24707;
(statearr_24748[(28)] = inst_24700);

return statearr_24748;
})();
var statearr_24749_24819 = state_24707__$1;
(statearr_24749_24819[(2)] = null);

(statearr_24749_24819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (6))){
var inst_24639 = (state_24707[(29)]);
var inst_24638 = cljs.core.deref.call(null,cs);
var inst_24639__$1 = cljs.core.keys.call(null,inst_24638);
var inst_24640 = cljs.core.count.call(null,inst_24639__$1);
var inst_24641 = cljs.core.reset_BANG_.call(null,dctr,inst_24640);
var inst_24646 = cljs.core.seq.call(null,inst_24639__$1);
var inst_24647 = inst_24646;
var inst_24648 = null;
var inst_24649 = (0);
var inst_24650 = (0);
var state_24707__$1 = (function (){var statearr_24750 = state_24707;
(statearr_24750[(30)] = inst_24641);

(statearr_24750[(9)] = inst_24650);

(statearr_24750[(20)] = inst_24647);

(statearr_24750[(11)] = inst_24648);

(statearr_24750[(21)] = inst_24649);

(statearr_24750[(29)] = inst_24639__$1);

return statearr_24750;
})();
var statearr_24751_24820 = state_24707__$1;
(statearr_24751_24820[(2)] = null);

(statearr_24751_24820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (28))){
var inst_24647 = (state_24707[(20)]);
var inst_24666 = (state_24707[(25)]);
var inst_24666__$1 = cljs.core.seq.call(null,inst_24647);
var state_24707__$1 = (function (){var statearr_24752 = state_24707;
(statearr_24752[(25)] = inst_24666__$1);

return statearr_24752;
})();
if(inst_24666__$1){
var statearr_24753_24821 = state_24707__$1;
(statearr_24753_24821[(1)] = (33));

} else {
var statearr_24754_24822 = state_24707__$1;
(statearr_24754_24822[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (25))){
var inst_24650 = (state_24707[(9)]);
var inst_24649 = (state_24707[(21)]);
var inst_24652 = (inst_24650 < inst_24649);
var inst_24653 = inst_24652;
var state_24707__$1 = state_24707;
if(cljs.core.truth_(inst_24653)){
var statearr_24755_24823 = state_24707__$1;
(statearr_24755_24823[(1)] = (27));

} else {
var statearr_24756_24824 = state_24707__$1;
(statearr_24756_24824[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (34))){
var state_24707__$1 = state_24707;
var statearr_24757_24825 = state_24707__$1;
(statearr_24757_24825[(2)] = null);

(statearr_24757_24825[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (17))){
var state_24707__$1 = state_24707;
var statearr_24758_24826 = state_24707__$1;
(statearr_24758_24826[(2)] = null);

(statearr_24758_24826[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (3))){
var inst_24705 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24707__$1,inst_24705);
} else {
if((state_val_24708 === (12))){
var inst_24634 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24759_24827 = state_24707__$1;
(statearr_24759_24827[(2)] = inst_24634);

(statearr_24759_24827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (2))){
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24707__$1,(4),ch);
} else {
if((state_val_24708 === (23))){
var state_24707__$1 = state_24707;
var statearr_24760_24828 = state_24707__$1;
(statearr_24760_24828[(2)] = null);

(statearr_24760_24828[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (35))){
var inst_24689 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24761_24829 = state_24707__$1;
(statearr_24761_24829[(2)] = inst_24689);

(statearr_24761_24829[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (19))){
var inst_24608 = (state_24707[(7)]);
var inst_24612 = cljs.core.chunk_first.call(null,inst_24608);
var inst_24613 = cljs.core.chunk_rest.call(null,inst_24608);
var inst_24614 = cljs.core.count.call(null,inst_24612);
var inst_24588 = inst_24613;
var inst_24589 = inst_24612;
var inst_24590 = inst_24614;
var inst_24591 = (0);
var state_24707__$1 = (function (){var statearr_24762 = state_24707;
(statearr_24762[(13)] = inst_24589);

(statearr_24762[(14)] = inst_24590);

(statearr_24762[(15)] = inst_24591);

(statearr_24762[(16)] = inst_24588);

return statearr_24762;
})();
var statearr_24763_24830 = state_24707__$1;
(statearr_24763_24830[(2)] = null);

(statearr_24763_24830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (11))){
var inst_24588 = (state_24707[(16)]);
var inst_24608 = (state_24707[(7)]);
var inst_24608__$1 = cljs.core.seq.call(null,inst_24588);
var state_24707__$1 = (function (){var statearr_24764 = state_24707;
(statearr_24764[(7)] = inst_24608__$1);

return statearr_24764;
})();
if(inst_24608__$1){
var statearr_24765_24831 = state_24707__$1;
(statearr_24765_24831[(1)] = (16));

} else {
var statearr_24766_24832 = state_24707__$1;
(statearr_24766_24832[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (9))){
var inst_24636 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24767_24833 = state_24707__$1;
(statearr_24767_24833[(2)] = inst_24636);

(statearr_24767_24833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (5))){
var inst_24586 = cljs.core.deref.call(null,cs);
var inst_24587 = cljs.core.seq.call(null,inst_24586);
var inst_24588 = inst_24587;
var inst_24589 = null;
var inst_24590 = (0);
var inst_24591 = (0);
var state_24707__$1 = (function (){var statearr_24768 = state_24707;
(statearr_24768[(13)] = inst_24589);

(statearr_24768[(14)] = inst_24590);

(statearr_24768[(15)] = inst_24591);

(statearr_24768[(16)] = inst_24588);

return statearr_24768;
})();
var statearr_24769_24834 = state_24707__$1;
(statearr_24769_24834[(2)] = null);

(statearr_24769_24834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (14))){
var state_24707__$1 = state_24707;
var statearr_24770_24835 = state_24707__$1;
(statearr_24770_24835[(2)] = null);

(statearr_24770_24835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (45))){
var inst_24697 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24771_24836 = state_24707__$1;
(statearr_24771_24836[(2)] = inst_24697);

(statearr_24771_24836[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (26))){
var inst_24639 = (state_24707[(29)]);
var inst_24693 = (state_24707[(2)]);
var inst_24694 = cljs.core.seq.call(null,inst_24639);
var state_24707__$1 = (function (){var statearr_24772 = state_24707;
(statearr_24772[(31)] = inst_24693);

return statearr_24772;
})();
if(inst_24694){
var statearr_24773_24837 = state_24707__$1;
(statearr_24773_24837[(1)] = (42));

} else {
var statearr_24774_24838 = state_24707__$1;
(statearr_24774_24838[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (16))){
var inst_24608 = (state_24707[(7)]);
var inst_24610 = cljs.core.chunked_seq_QMARK_.call(null,inst_24608);
var state_24707__$1 = state_24707;
if(inst_24610){
var statearr_24775_24839 = state_24707__$1;
(statearr_24775_24839[(1)] = (19));

} else {
var statearr_24776_24840 = state_24707__$1;
(statearr_24776_24840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (38))){
var inst_24686 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24777_24841 = state_24707__$1;
(statearr_24777_24841[(2)] = inst_24686);

(statearr_24777_24841[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (30))){
var state_24707__$1 = state_24707;
var statearr_24778_24842 = state_24707__$1;
(statearr_24778_24842[(2)] = null);

(statearr_24778_24842[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (10))){
var inst_24589 = (state_24707[(13)]);
var inst_24591 = (state_24707[(15)]);
var inst_24597 = cljs.core._nth.call(null,inst_24589,inst_24591);
var inst_24598 = cljs.core.nth.call(null,inst_24597,(0),null);
var inst_24599 = cljs.core.nth.call(null,inst_24597,(1),null);
var state_24707__$1 = (function (){var statearr_24779 = state_24707;
(statearr_24779[(26)] = inst_24598);

return statearr_24779;
})();
if(cljs.core.truth_(inst_24599)){
var statearr_24780_24843 = state_24707__$1;
(statearr_24780_24843[(1)] = (13));

} else {
var statearr_24781_24844 = state_24707__$1;
(statearr_24781_24844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (18))){
var inst_24632 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24782_24845 = state_24707__$1;
(statearr_24782_24845[(2)] = inst_24632);

(statearr_24782_24845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (42))){
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24707__$1,(45),dchan);
} else {
if((state_val_24708 === (37))){
var inst_24675 = (state_24707[(23)]);
var inst_24579 = (state_24707[(12)]);
var inst_24666 = (state_24707[(25)]);
var inst_24675__$1 = cljs.core.first.call(null,inst_24666);
var inst_24676 = cljs.core.async.put_BANG_.call(null,inst_24675__$1,inst_24579,done);
var state_24707__$1 = (function (){var statearr_24783 = state_24707;
(statearr_24783[(23)] = inst_24675__$1);

return statearr_24783;
})();
if(cljs.core.truth_(inst_24676)){
var statearr_24784_24846 = state_24707__$1;
(statearr_24784_24846[(1)] = (39));

} else {
var statearr_24785_24847 = state_24707__$1;
(statearr_24785_24847[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (8))){
var inst_24590 = (state_24707[(14)]);
var inst_24591 = (state_24707[(15)]);
var inst_24593 = (inst_24591 < inst_24590);
var inst_24594 = inst_24593;
var state_24707__$1 = state_24707;
if(cljs.core.truth_(inst_24594)){
var statearr_24786_24848 = state_24707__$1;
(statearr_24786_24848[(1)] = (10));

} else {
var statearr_24787_24849 = state_24707__$1;
(statearr_24787_24849[(1)] = (11));

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
});})(c__19366__auto___24795,cs,m,dchan,dctr,done))
;
return ((function (switch__19345__auto__,c__19366__auto___24795,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19346__auto__ = null;
var cljs$core$async$mult_$_state_machine__19346__auto____0 = (function (){
var statearr_24791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24791[(0)] = cljs$core$async$mult_$_state_machine__19346__auto__);

(statearr_24791[(1)] = (1));

return statearr_24791;
});
var cljs$core$async$mult_$_state_machine__19346__auto____1 = (function (state_24707){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_24707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e24792){if((e24792 instanceof Object)){
var ex__19349__auto__ = e24792;
var statearr_24793_24850 = state_24707;
(statearr_24793_24850[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24851 = state_24707;
state_24707 = G__24851;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19346__auto__ = function(state_24707){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19346__auto____1.call(this,state_24707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19346__auto____0;
cljs$core$async$mult_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19346__auto____1;
return cljs$core$async$mult_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___24795,cs,m,dchan,dctr,done))
})();
var state__19368__auto__ = (function (){var statearr_24794 = f__19367__auto__.call(null);
(statearr_24794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___24795);

return statearr_24794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___24795,cs,m,dchan,dctr,done))
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
var args24852 = [];
var len__17402__auto___24855 = arguments.length;
var i__17403__auto___24856 = (0);
while(true){
if((i__17403__auto___24856 < len__17402__auto___24855)){
args24852.push((arguments[i__17403__auto___24856]));

var G__24857 = (i__17403__auto___24856 + (1));
i__17403__auto___24856 = G__24857;
continue;
} else {
}
break;
}

var G__24854 = args24852.length;
switch (G__24854) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24852.length)].join('')));

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
var len__17402__auto___24869 = arguments.length;
var i__17403__auto___24870 = (0);
while(true){
if((i__17403__auto___24870 < len__17402__auto___24869)){
args__17409__auto__.push((arguments[i__17403__auto___24870]));

var G__24871 = (i__17403__auto___24870 + (1));
i__17403__auto___24870 = G__24871;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((3) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17410__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24863){
var map__24864 = p__24863;
var map__24864__$1 = ((((!((map__24864 == null)))?((((map__24864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24864):map__24864);
var opts = map__24864__$1;
var statearr_24866_24872 = state;
(statearr_24866_24872[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24864,map__24864__$1,opts){
return (function (val){
var statearr_24867_24873 = state;
(statearr_24867_24873[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24864,map__24864__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24868_24874 = state;
(statearr_24868_24874[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24859){
var G__24860 = cljs.core.first.call(null,seq24859);
var seq24859__$1 = cljs.core.next.call(null,seq24859);
var G__24861 = cljs.core.first.call(null,seq24859__$1);
var seq24859__$2 = cljs.core.next.call(null,seq24859__$1);
var G__24862 = cljs.core.first.call(null,seq24859__$2);
var seq24859__$3 = cljs.core.next.call(null,seq24859__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24860,G__24861,G__24862,seq24859__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25038 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25039){
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
this.meta25039 = meta25039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25040,meta25039__$1){
var self__ = this;
var _25040__$1 = this;
return (new cljs.core.async.t_cljs$core$async25038(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25039__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25040){
var self__ = this;
var _25040__$1 = this;
return self__.meta25039;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25038.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25038.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25039","meta25039",-930669591,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25038";

cljs.core.async.t_cljs$core$async25038.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async25038");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25038 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25038(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25039){
return (new cljs.core.async.t_cljs$core$async25038(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25039));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25038(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19366__auto___25201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___25201,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___25201,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25138){
var state_val_25139 = (state_25138[(1)]);
if((state_val_25139 === (7))){
var inst_25056 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
var statearr_25140_25202 = state_25138__$1;
(statearr_25140_25202[(2)] = inst_25056);

(statearr_25140_25202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (20))){
var inst_25068 = (state_25138[(7)]);
var state_25138__$1 = state_25138;
var statearr_25141_25203 = state_25138__$1;
(statearr_25141_25203[(2)] = inst_25068);

(statearr_25141_25203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (27))){
var state_25138__$1 = state_25138;
var statearr_25142_25204 = state_25138__$1;
(statearr_25142_25204[(2)] = null);

(statearr_25142_25204[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (1))){
var inst_25044 = (state_25138[(8)]);
var inst_25044__$1 = calc_state.call(null);
var inst_25046 = (inst_25044__$1 == null);
var inst_25047 = cljs.core.not.call(null,inst_25046);
var state_25138__$1 = (function (){var statearr_25143 = state_25138;
(statearr_25143[(8)] = inst_25044__$1);

return statearr_25143;
})();
if(inst_25047){
var statearr_25144_25205 = state_25138__$1;
(statearr_25144_25205[(1)] = (2));

} else {
var statearr_25145_25206 = state_25138__$1;
(statearr_25145_25206[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (24))){
var inst_25091 = (state_25138[(9)]);
var inst_25112 = (state_25138[(10)]);
var inst_25098 = (state_25138[(11)]);
var inst_25112__$1 = inst_25091.call(null,inst_25098);
var state_25138__$1 = (function (){var statearr_25146 = state_25138;
(statearr_25146[(10)] = inst_25112__$1);

return statearr_25146;
})();
if(cljs.core.truth_(inst_25112__$1)){
var statearr_25147_25207 = state_25138__$1;
(statearr_25147_25207[(1)] = (29));

} else {
var statearr_25148_25208 = state_25138__$1;
(statearr_25148_25208[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (4))){
var inst_25059 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
if(cljs.core.truth_(inst_25059)){
var statearr_25149_25209 = state_25138__$1;
(statearr_25149_25209[(1)] = (8));

} else {
var statearr_25150_25210 = state_25138__$1;
(statearr_25150_25210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (15))){
var inst_25085 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
if(cljs.core.truth_(inst_25085)){
var statearr_25151_25211 = state_25138__$1;
(statearr_25151_25211[(1)] = (19));

} else {
var statearr_25152_25212 = state_25138__$1;
(statearr_25152_25212[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (21))){
var inst_25090 = (state_25138[(12)]);
var inst_25090__$1 = (state_25138[(2)]);
var inst_25091 = cljs.core.get.call(null,inst_25090__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25092 = cljs.core.get.call(null,inst_25090__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25093 = cljs.core.get.call(null,inst_25090__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25138__$1 = (function (){var statearr_25153 = state_25138;
(statearr_25153[(13)] = inst_25092);

(statearr_25153[(9)] = inst_25091);

(statearr_25153[(12)] = inst_25090__$1);

return statearr_25153;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25138__$1,(22),inst_25093);
} else {
if((state_val_25139 === (31))){
var inst_25120 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
if(cljs.core.truth_(inst_25120)){
var statearr_25154_25213 = state_25138__$1;
(statearr_25154_25213[(1)] = (32));

} else {
var statearr_25155_25214 = state_25138__$1;
(statearr_25155_25214[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (32))){
var inst_25097 = (state_25138[(14)]);
var state_25138__$1 = state_25138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25138__$1,(35),out,inst_25097);
} else {
if((state_val_25139 === (33))){
var inst_25090 = (state_25138[(12)]);
var inst_25068 = inst_25090;
var state_25138__$1 = (function (){var statearr_25156 = state_25138;
(statearr_25156[(7)] = inst_25068);

return statearr_25156;
})();
var statearr_25157_25215 = state_25138__$1;
(statearr_25157_25215[(2)] = null);

(statearr_25157_25215[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (13))){
var inst_25068 = (state_25138[(7)]);
var inst_25075 = inst_25068.cljs$lang$protocol_mask$partition0$;
var inst_25076 = (inst_25075 & (64));
var inst_25077 = inst_25068.cljs$core$ISeq$;
var inst_25078 = (inst_25076) || (inst_25077);
var state_25138__$1 = state_25138;
if(cljs.core.truth_(inst_25078)){
var statearr_25158_25216 = state_25138__$1;
(statearr_25158_25216[(1)] = (16));

} else {
var statearr_25159_25217 = state_25138__$1;
(statearr_25159_25217[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (22))){
var inst_25097 = (state_25138[(14)]);
var inst_25098 = (state_25138[(11)]);
var inst_25096 = (state_25138[(2)]);
var inst_25097__$1 = cljs.core.nth.call(null,inst_25096,(0),null);
var inst_25098__$1 = cljs.core.nth.call(null,inst_25096,(1),null);
var inst_25099 = (inst_25097__$1 == null);
var inst_25100 = cljs.core._EQ_.call(null,inst_25098__$1,change);
var inst_25101 = (inst_25099) || (inst_25100);
var state_25138__$1 = (function (){var statearr_25160 = state_25138;
(statearr_25160[(14)] = inst_25097__$1);

(statearr_25160[(11)] = inst_25098__$1);

return statearr_25160;
})();
if(cljs.core.truth_(inst_25101)){
var statearr_25161_25218 = state_25138__$1;
(statearr_25161_25218[(1)] = (23));

} else {
var statearr_25162_25219 = state_25138__$1;
(statearr_25162_25219[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (36))){
var inst_25090 = (state_25138[(12)]);
var inst_25068 = inst_25090;
var state_25138__$1 = (function (){var statearr_25163 = state_25138;
(statearr_25163[(7)] = inst_25068);

return statearr_25163;
})();
var statearr_25164_25220 = state_25138__$1;
(statearr_25164_25220[(2)] = null);

(statearr_25164_25220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (29))){
var inst_25112 = (state_25138[(10)]);
var state_25138__$1 = state_25138;
var statearr_25165_25221 = state_25138__$1;
(statearr_25165_25221[(2)] = inst_25112);

(statearr_25165_25221[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (6))){
var state_25138__$1 = state_25138;
var statearr_25166_25222 = state_25138__$1;
(statearr_25166_25222[(2)] = false);

(statearr_25166_25222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (28))){
var inst_25108 = (state_25138[(2)]);
var inst_25109 = calc_state.call(null);
var inst_25068 = inst_25109;
var state_25138__$1 = (function (){var statearr_25167 = state_25138;
(statearr_25167[(7)] = inst_25068);

(statearr_25167[(15)] = inst_25108);

return statearr_25167;
})();
var statearr_25168_25223 = state_25138__$1;
(statearr_25168_25223[(2)] = null);

(statearr_25168_25223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (25))){
var inst_25134 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
var statearr_25169_25224 = state_25138__$1;
(statearr_25169_25224[(2)] = inst_25134);

(statearr_25169_25224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (34))){
var inst_25132 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
var statearr_25170_25225 = state_25138__$1;
(statearr_25170_25225[(2)] = inst_25132);

(statearr_25170_25225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (17))){
var state_25138__$1 = state_25138;
var statearr_25171_25226 = state_25138__$1;
(statearr_25171_25226[(2)] = false);

(statearr_25171_25226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (3))){
var state_25138__$1 = state_25138;
var statearr_25172_25227 = state_25138__$1;
(statearr_25172_25227[(2)] = false);

(statearr_25172_25227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (12))){
var inst_25136 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25138__$1,inst_25136);
} else {
if((state_val_25139 === (2))){
var inst_25044 = (state_25138[(8)]);
var inst_25049 = inst_25044.cljs$lang$protocol_mask$partition0$;
var inst_25050 = (inst_25049 & (64));
var inst_25051 = inst_25044.cljs$core$ISeq$;
var inst_25052 = (inst_25050) || (inst_25051);
var state_25138__$1 = state_25138;
if(cljs.core.truth_(inst_25052)){
var statearr_25173_25228 = state_25138__$1;
(statearr_25173_25228[(1)] = (5));

} else {
var statearr_25174_25229 = state_25138__$1;
(statearr_25174_25229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (23))){
var inst_25097 = (state_25138[(14)]);
var inst_25103 = (inst_25097 == null);
var state_25138__$1 = state_25138;
if(cljs.core.truth_(inst_25103)){
var statearr_25175_25230 = state_25138__$1;
(statearr_25175_25230[(1)] = (26));

} else {
var statearr_25176_25231 = state_25138__$1;
(statearr_25176_25231[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (35))){
var inst_25123 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
if(cljs.core.truth_(inst_25123)){
var statearr_25177_25232 = state_25138__$1;
(statearr_25177_25232[(1)] = (36));

} else {
var statearr_25178_25233 = state_25138__$1;
(statearr_25178_25233[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (19))){
var inst_25068 = (state_25138[(7)]);
var inst_25087 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25068);
var state_25138__$1 = state_25138;
var statearr_25179_25234 = state_25138__$1;
(statearr_25179_25234[(2)] = inst_25087);

(statearr_25179_25234[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (11))){
var inst_25068 = (state_25138[(7)]);
var inst_25072 = (inst_25068 == null);
var inst_25073 = cljs.core.not.call(null,inst_25072);
var state_25138__$1 = state_25138;
if(inst_25073){
var statearr_25180_25235 = state_25138__$1;
(statearr_25180_25235[(1)] = (13));

} else {
var statearr_25181_25236 = state_25138__$1;
(statearr_25181_25236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (9))){
var inst_25044 = (state_25138[(8)]);
var state_25138__$1 = state_25138;
var statearr_25182_25237 = state_25138__$1;
(statearr_25182_25237[(2)] = inst_25044);

(statearr_25182_25237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (5))){
var state_25138__$1 = state_25138;
var statearr_25183_25238 = state_25138__$1;
(statearr_25183_25238[(2)] = true);

(statearr_25183_25238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (14))){
var state_25138__$1 = state_25138;
var statearr_25184_25239 = state_25138__$1;
(statearr_25184_25239[(2)] = false);

(statearr_25184_25239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (26))){
var inst_25098 = (state_25138[(11)]);
var inst_25105 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25098);
var state_25138__$1 = state_25138;
var statearr_25185_25240 = state_25138__$1;
(statearr_25185_25240[(2)] = inst_25105);

(statearr_25185_25240[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (16))){
var state_25138__$1 = state_25138;
var statearr_25186_25241 = state_25138__$1;
(statearr_25186_25241[(2)] = true);

(statearr_25186_25241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (38))){
var inst_25128 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
var statearr_25187_25242 = state_25138__$1;
(statearr_25187_25242[(2)] = inst_25128);

(statearr_25187_25242[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (30))){
var inst_25092 = (state_25138[(13)]);
var inst_25091 = (state_25138[(9)]);
var inst_25098 = (state_25138[(11)]);
var inst_25115 = cljs.core.empty_QMARK_.call(null,inst_25091);
var inst_25116 = inst_25092.call(null,inst_25098);
var inst_25117 = cljs.core.not.call(null,inst_25116);
var inst_25118 = (inst_25115) && (inst_25117);
var state_25138__$1 = state_25138;
var statearr_25188_25243 = state_25138__$1;
(statearr_25188_25243[(2)] = inst_25118);

(statearr_25188_25243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (10))){
var inst_25044 = (state_25138[(8)]);
var inst_25064 = (state_25138[(2)]);
var inst_25065 = cljs.core.get.call(null,inst_25064,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25066 = cljs.core.get.call(null,inst_25064,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25067 = cljs.core.get.call(null,inst_25064,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25068 = inst_25044;
var state_25138__$1 = (function (){var statearr_25189 = state_25138;
(statearr_25189[(16)] = inst_25065);

(statearr_25189[(7)] = inst_25068);

(statearr_25189[(17)] = inst_25066);

(statearr_25189[(18)] = inst_25067);

return statearr_25189;
})();
var statearr_25190_25244 = state_25138__$1;
(statearr_25190_25244[(2)] = null);

(statearr_25190_25244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (18))){
var inst_25082 = (state_25138[(2)]);
var state_25138__$1 = state_25138;
var statearr_25191_25245 = state_25138__$1;
(statearr_25191_25245[(2)] = inst_25082);

(statearr_25191_25245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (37))){
var state_25138__$1 = state_25138;
var statearr_25192_25246 = state_25138__$1;
(statearr_25192_25246[(2)] = null);

(statearr_25192_25246[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25139 === (8))){
var inst_25044 = (state_25138[(8)]);
var inst_25061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25044);
var state_25138__$1 = state_25138;
var statearr_25193_25247 = state_25138__$1;
(statearr_25193_25247[(2)] = inst_25061);

(statearr_25193_25247[(1)] = (10));


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
});})(c__19366__auto___25201,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19345__auto__,c__19366__auto___25201,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19346__auto__ = null;
var cljs$core$async$mix_$_state_machine__19346__auto____0 = (function (){
var statearr_25197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25197[(0)] = cljs$core$async$mix_$_state_machine__19346__auto__);

(statearr_25197[(1)] = (1));

return statearr_25197;
});
var cljs$core$async$mix_$_state_machine__19346__auto____1 = (function (state_25138){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_25138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e25198){if((e25198 instanceof Object)){
var ex__19349__auto__ = e25198;
var statearr_25199_25248 = state_25138;
(statearr_25199_25248[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25249 = state_25138;
state_25138 = G__25249;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19346__auto__ = function(state_25138){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19346__auto____1.call(this,state_25138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19346__auto____0;
cljs$core$async$mix_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19346__auto____1;
return cljs$core$async$mix_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___25201,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19368__auto__ = (function (){var statearr_25200 = f__19367__auto__.call(null);
(statearr_25200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___25201);

return statearr_25200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___25201,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25250 = [];
var len__17402__auto___25253 = arguments.length;
var i__17403__auto___25254 = (0);
while(true){
if((i__17403__auto___25254 < len__17402__auto___25253)){
args25250.push((arguments[i__17403__auto___25254]));

var G__25255 = (i__17403__auto___25254 + (1));
i__17403__auto___25254 = G__25255;
continue;
} else {
}
break;
}

var G__25252 = args25250.length;
switch (G__25252) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25250.length)].join('')));

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
var args25258 = [];
var len__17402__auto___25383 = arguments.length;
var i__17403__auto___25384 = (0);
while(true){
if((i__17403__auto___25384 < len__17402__auto___25383)){
args25258.push((arguments[i__17403__auto___25384]));

var G__25385 = (i__17403__auto___25384 + (1));
i__17403__auto___25384 = G__25385;
continue;
} else {
}
break;
}

var G__25260 = args25258.length;
switch (G__25260) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25258.length)].join('')));

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
return (function (p1__25257_SHARP_){
if(cljs.core.truth_(p1__25257_SHARP_.call(null,topic))){
return p1__25257_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25257_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16344__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25261 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25262){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25262 = meta25262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25263,meta25262__$1){
var self__ = this;
var _25263__$1 = this;
return (new cljs.core.async.t_cljs$core$async25261(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25262__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25263){
var self__ = this;
var _25263__$1 = this;
return self__.meta25262;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25261.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25262","meta25262",-1124217323,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25261";

cljs.core.async.t_cljs$core$async25261.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async25261");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25261 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25261(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25262){
return (new cljs.core.async.t_cljs$core$async25261(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25262));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25261(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19366__auto___25387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___25387,mults,ensure_mult,p){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___25387,mults,ensure_mult,p){
return (function (state_25335){
var state_val_25336 = (state_25335[(1)]);
if((state_val_25336 === (7))){
var inst_25331 = (state_25335[(2)]);
var state_25335__$1 = state_25335;
var statearr_25337_25388 = state_25335__$1;
(statearr_25337_25388[(2)] = inst_25331);

(statearr_25337_25388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (20))){
var state_25335__$1 = state_25335;
var statearr_25338_25389 = state_25335__$1;
(statearr_25338_25389[(2)] = null);

(statearr_25338_25389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (1))){
var state_25335__$1 = state_25335;
var statearr_25339_25390 = state_25335__$1;
(statearr_25339_25390[(2)] = null);

(statearr_25339_25390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (24))){
var inst_25314 = (state_25335[(7)]);
var inst_25323 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25314);
var state_25335__$1 = state_25335;
var statearr_25340_25391 = state_25335__$1;
(statearr_25340_25391[(2)] = inst_25323);

(statearr_25340_25391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (4))){
var inst_25266 = (state_25335[(8)]);
var inst_25266__$1 = (state_25335[(2)]);
var inst_25267 = (inst_25266__$1 == null);
var state_25335__$1 = (function (){var statearr_25341 = state_25335;
(statearr_25341[(8)] = inst_25266__$1);

return statearr_25341;
})();
if(cljs.core.truth_(inst_25267)){
var statearr_25342_25392 = state_25335__$1;
(statearr_25342_25392[(1)] = (5));

} else {
var statearr_25343_25393 = state_25335__$1;
(statearr_25343_25393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (15))){
var inst_25308 = (state_25335[(2)]);
var state_25335__$1 = state_25335;
var statearr_25344_25394 = state_25335__$1;
(statearr_25344_25394[(2)] = inst_25308);

(statearr_25344_25394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (21))){
var inst_25328 = (state_25335[(2)]);
var state_25335__$1 = (function (){var statearr_25345 = state_25335;
(statearr_25345[(9)] = inst_25328);

return statearr_25345;
})();
var statearr_25346_25395 = state_25335__$1;
(statearr_25346_25395[(2)] = null);

(statearr_25346_25395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (13))){
var inst_25290 = (state_25335[(10)]);
var inst_25292 = cljs.core.chunked_seq_QMARK_.call(null,inst_25290);
var state_25335__$1 = state_25335;
if(inst_25292){
var statearr_25347_25396 = state_25335__$1;
(statearr_25347_25396[(1)] = (16));

} else {
var statearr_25348_25397 = state_25335__$1;
(statearr_25348_25397[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (22))){
var inst_25320 = (state_25335[(2)]);
var state_25335__$1 = state_25335;
if(cljs.core.truth_(inst_25320)){
var statearr_25349_25398 = state_25335__$1;
(statearr_25349_25398[(1)] = (23));

} else {
var statearr_25350_25399 = state_25335__$1;
(statearr_25350_25399[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (6))){
var inst_25316 = (state_25335[(11)]);
var inst_25314 = (state_25335[(7)]);
var inst_25266 = (state_25335[(8)]);
var inst_25314__$1 = topic_fn.call(null,inst_25266);
var inst_25315 = cljs.core.deref.call(null,mults);
var inst_25316__$1 = cljs.core.get.call(null,inst_25315,inst_25314__$1);
var state_25335__$1 = (function (){var statearr_25351 = state_25335;
(statearr_25351[(11)] = inst_25316__$1);

(statearr_25351[(7)] = inst_25314__$1);

return statearr_25351;
})();
if(cljs.core.truth_(inst_25316__$1)){
var statearr_25352_25400 = state_25335__$1;
(statearr_25352_25400[(1)] = (19));

} else {
var statearr_25353_25401 = state_25335__$1;
(statearr_25353_25401[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (25))){
var inst_25325 = (state_25335[(2)]);
var state_25335__$1 = state_25335;
var statearr_25354_25402 = state_25335__$1;
(statearr_25354_25402[(2)] = inst_25325);

(statearr_25354_25402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (17))){
var inst_25290 = (state_25335[(10)]);
var inst_25299 = cljs.core.first.call(null,inst_25290);
var inst_25300 = cljs.core.async.muxch_STAR_.call(null,inst_25299);
var inst_25301 = cljs.core.async.close_BANG_.call(null,inst_25300);
var inst_25302 = cljs.core.next.call(null,inst_25290);
var inst_25276 = inst_25302;
var inst_25277 = null;
var inst_25278 = (0);
var inst_25279 = (0);
var state_25335__$1 = (function (){var statearr_25355 = state_25335;
(statearr_25355[(12)] = inst_25279);

(statearr_25355[(13)] = inst_25301);

(statearr_25355[(14)] = inst_25276);

(statearr_25355[(15)] = inst_25278);

(statearr_25355[(16)] = inst_25277);

return statearr_25355;
})();
var statearr_25356_25403 = state_25335__$1;
(statearr_25356_25403[(2)] = null);

(statearr_25356_25403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (3))){
var inst_25333 = (state_25335[(2)]);
var state_25335__$1 = state_25335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25335__$1,inst_25333);
} else {
if((state_val_25336 === (12))){
var inst_25310 = (state_25335[(2)]);
var state_25335__$1 = state_25335;
var statearr_25357_25404 = state_25335__$1;
(statearr_25357_25404[(2)] = inst_25310);

(statearr_25357_25404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (2))){
var state_25335__$1 = state_25335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25335__$1,(4),ch);
} else {
if((state_val_25336 === (23))){
var state_25335__$1 = state_25335;
var statearr_25358_25405 = state_25335__$1;
(statearr_25358_25405[(2)] = null);

(statearr_25358_25405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (19))){
var inst_25316 = (state_25335[(11)]);
var inst_25266 = (state_25335[(8)]);
var inst_25318 = cljs.core.async.muxch_STAR_.call(null,inst_25316);
var state_25335__$1 = state_25335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25335__$1,(22),inst_25318,inst_25266);
} else {
if((state_val_25336 === (11))){
var inst_25276 = (state_25335[(14)]);
var inst_25290 = (state_25335[(10)]);
var inst_25290__$1 = cljs.core.seq.call(null,inst_25276);
var state_25335__$1 = (function (){var statearr_25359 = state_25335;
(statearr_25359[(10)] = inst_25290__$1);

return statearr_25359;
})();
if(inst_25290__$1){
var statearr_25360_25406 = state_25335__$1;
(statearr_25360_25406[(1)] = (13));

} else {
var statearr_25361_25407 = state_25335__$1;
(statearr_25361_25407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (9))){
var inst_25312 = (state_25335[(2)]);
var state_25335__$1 = state_25335;
var statearr_25362_25408 = state_25335__$1;
(statearr_25362_25408[(2)] = inst_25312);

(statearr_25362_25408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (5))){
var inst_25273 = cljs.core.deref.call(null,mults);
var inst_25274 = cljs.core.vals.call(null,inst_25273);
var inst_25275 = cljs.core.seq.call(null,inst_25274);
var inst_25276 = inst_25275;
var inst_25277 = null;
var inst_25278 = (0);
var inst_25279 = (0);
var state_25335__$1 = (function (){var statearr_25363 = state_25335;
(statearr_25363[(12)] = inst_25279);

(statearr_25363[(14)] = inst_25276);

(statearr_25363[(15)] = inst_25278);

(statearr_25363[(16)] = inst_25277);

return statearr_25363;
})();
var statearr_25364_25409 = state_25335__$1;
(statearr_25364_25409[(2)] = null);

(statearr_25364_25409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (14))){
var state_25335__$1 = state_25335;
var statearr_25368_25410 = state_25335__$1;
(statearr_25368_25410[(2)] = null);

(statearr_25368_25410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (16))){
var inst_25290 = (state_25335[(10)]);
var inst_25294 = cljs.core.chunk_first.call(null,inst_25290);
var inst_25295 = cljs.core.chunk_rest.call(null,inst_25290);
var inst_25296 = cljs.core.count.call(null,inst_25294);
var inst_25276 = inst_25295;
var inst_25277 = inst_25294;
var inst_25278 = inst_25296;
var inst_25279 = (0);
var state_25335__$1 = (function (){var statearr_25369 = state_25335;
(statearr_25369[(12)] = inst_25279);

(statearr_25369[(14)] = inst_25276);

(statearr_25369[(15)] = inst_25278);

(statearr_25369[(16)] = inst_25277);

return statearr_25369;
})();
var statearr_25370_25411 = state_25335__$1;
(statearr_25370_25411[(2)] = null);

(statearr_25370_25411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (10))){
var inst_25279 = (state_25335[(12)]);
var inst_25276 = (state_25335[(14)]);
var inst_25278 = (state_25335[(15)]);
var inst_25277 = (state_25335[(16)]);
var inst_25284 = cljs.core._nth.call(null,inst_25277,inst_25279);
var inst_25285 = cljs.core.async.muxch_STAR_.call(null,inst_25284);
var inst_25286 = cljs.core.async.close_BANG_.call(null,inst_25285);
var inst_25287 = (inst_25279 + (1));
var tmp25365 = inst_25276;
var tmp25366 = inst_25278;
var tmp25367 = inst_25277;
var inst_25276__$1 = tmp25365;
var inst_25277__$1 = tmp25367;
var inst_25278__$1 = tmp25366;
var inst_25279__$1 = inst_25287;
var state_25335__$1 = (function (){var statearr_25371 = state_25335;
(statearr_25371[(17)] = inst_25286);

(statearr_25371[(12)] = inst_25279__$1);

(statearr_25371[(14)] = inst_25276__$1);

(statearr_25371[(15)] = inst_25278__$1);

(statearr_25371[(16)] = inst_25277__$1);

return statearr_25371;
})();
var statearr_25372_25412 = state_25335__$1;
(statearr_25372_25412[(2)] = null);

(statearr_25372_25412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (18))){
var inst_25305 = (state_25335[(2)]);
var state_25335__$1 = state_25335;
var statearr_25373_25413 = state_25335__$1;
(statearr_25373_25413[(2)] = inst_25305);

(statearr_25373_25413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25336 === (8))){
var inst_25279 = (state_25335[(12)]);
var inst_25278 = (state_25335[(15)]);
var inst_25281 = (inst_25279 < inst_25278);
var inst_25282 = inst_25281;
var state_25335__$1 = state_25335;
if(cljs.core.truth_(inst_25282)){
var statearr_25374_25414 = state_25335__$1;
(statearr_25374_25414[(1)] = (10));

} else {
var statearr_25375_25415 = state_25335__$1;
(statearr_25375_25415[(1)] = (11));

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
});})(c__19366__auto___25387,mults,ensure_mult,p))
;
return ((function (switch__19345__auto__,c__19366__auto___25387,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_25379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25379[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_25379[(1)] = (1));

return statearr_25379;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_25335){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_25335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e25380){if((e25380 instanceof Object)){
var ex__19349__auto__ = e25380;
var statearr_25381_25416 = state_25335;
(statearr_25381_25416[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25417 = state_25335;
state_25335 = G__25417;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_25335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_25335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___25387,mults,ensure_mult,p))
})();
var state__19368__auto__ = (function (){var statearr_25382 = f__19367__auto__.call(null);
(statearr_25382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___25387);

return statearr_25382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___25387,mults,ensure_mult,p))
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
var args25418 = [];
var len__17402__auto___25421 = arguments.length;
var i__17403__auto___25422 = (0);
while(true){
if((i__17403__auto___25422 < len__17402__auto___25421)){
args25418.push((arguments[i__17403__auto___25422]));

var G__25423 = (i__17403__auto___25422 + (1));
i__17403__auto___25422 = G__25423;
continue;
} else {
}
break;
}

var G__25420 = args25418.length;
switch (G__25420) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25418.length)].join('')));

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
var args25425 = [];
var len__17402__auto___25428 = arguments.length;
var i__17403__auto___25429 = (0);
while(true){
if((i__17403__auto___25429 < len__17402__auto___25428)){
args25425.push((arguments[i__17403__auto___25429]));

var G__25430 = (i__17403__auto___25429 + (1));
i__17403__auto___25429 = G__25430;
continue;
} else {
}
break;
}

var G__25427 = args25425.length;
switch (G__25427) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25425.length)].join('')));

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
var args25432 = [];
var len__17402__auto___25503 = arguments.length;
var i__17403__auto___25504 = (0);
while(true){
if((i__17403__auto___25504 < len__17402__auto___25503)){
args25432.push((arguments[i__17403__auto___25504]));

var G__25505 = (i__17403__auto___25504 + (1));
i__17403__auto___25504 = G__25505;
continue;
} else {
}
break;
}

var G__25434 = args25432.length;
switch (G__25434) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25432.length)].join('')));

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
var c__19366__auto___25507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___25507,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___25507,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25473){
var state_val_25474 = (state_25473[(1)]);
if((state_val_25474 === (7))){
var state_25473__$1 = state_25473;
var statearr_25475_25508 = state_25473__$1;
(statearr_25475_25508[(2)] = null);

(statearr_25475_25508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (1))){
var state_25473__$1 = state_25473;
var statearr_25476_25509 = state_25473__$1;
(statearr_25476_25509[(2)] = null);

(statearr_25476_25509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (4))){
var inst_25437 = (state_25473[(7)]);
var inst_25439 = (inst_25437 < cnt);
var state_25473__$1 = state_25473;
if(cljs.core.truth_(inst_25439)){
var statearr_25477_25510 = state_25473__$1;
(statearr_25477_25510[(1)] = (6));

} else {
var statearr_25478_25511 = state_25473__$1;
(statearr_25478_25511[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (15))){
var inst_25469 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
var statearr_25479_25512 = state_25473__$1;
(statearr_25479_25512[(2)] = inst_25469);

(statearr_25479_25512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (13))){
var inst_25462 = cljs.core.async.close_BANG_.call(null,out);
var state_25473__$1 = state_25473;
var statearr_25480_25513 = state_25473__$1;
(statearr_25480_25513[(2)] = inst_25462);

(statearr_25480_25513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (6))){
var state_25473__$1 = state_25473;
var statearr_25481_25514 = state_25473__$1;
(statearr_25481_25514[(2)] = null);

(statearr_25481_25514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (3))){
var inst_25471 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25473__$1,inst_25471);
} else {
if((state_val_25474 === (12))){
var inst_25459 = (state_25473[(8)]);
var inst_25459__$1 = (state_25473[(2)]);
var inst_25460 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25459__$1);
var state_25473__$1 = (function (){var statearr_25482 = state_25473;
(statearr_25482[(8)] = inst_25459__$1);

return statearr_25482;
})();
if(cljs.core.truth_(inst_25460)){
var statearr_25483_25515 = state_25473__$1;
(statearr_25483_25515[(1)] = (13));

} else {
var statearr_25484_25516 = state_25473__$1;
(statearr_25484_25516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (2))){
var inst_25436 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25437 = (0);
var state_25473__$1 = (function (){var statearr_25485 = state_25473;
(statearr_25485[(7)] = inst_25437);

(statearr_25485[(9)] = inst_25436);

return statearr_25485;
})();
var statearr_25486_25517 = state_25473__$1;
(statearr_25486_25517[(2)] = null);

(statearr_25486_25517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (11))){
var inst_25437 = (state_25473[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25473,(10),Object,null,(9));
var inst_25446 = chs__$1.call(null,inst_25437);
var inst_25447 = done.call(null,inst_25437);
var inst_25448 = cljs.core.async.take_BANG_.call(null,inst_25446,inst_25447);
var state_25473__$1 = state_25473;
var statearr_25487_25518 = state_25473__$1;
(statearr_25487_25518[(2)] = inst_25448);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25473__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (9))){
var inst_25437 = (state_25473[(7)]);
var inst_25450 = (state_25473[(2)]);
var inst_25451 = (inst_25437 + (1));
var inst_25437__$1 = inst_25451;
var state_25473__$1 = (function (){var statearr_25488 = state_25473;
(statearr_25488[(7)] = inst_25437__$1);

(statearr_25488[(10)] = inst_25450);

return statearr_25488;
})();
var statearr_25489_25519 = state_25473__$1;
(statearr_25489_25519[(2)] = null);

(statearr_25489_25519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (5))){
var inst_25457 = (state_25473[(2)]);
var state_25473__$1 = (function (){var statearr_25490 = state_25473;
(statearr_25490[(11)] = inst_25457);

return statearr_25490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25473__$1,(12),dchan);
} else {
if((state_val_25474 === (14))){
var inst_25459 = (state_25473[(8)]);
var inst_25464 = cljs.core.apply.call(null,f,inst_25459);
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25473__$1,(16),out,inst_25464);
} else {
if((state_val_25474 === (16))){
var inst_25466 = (state_25473[(2)]);
var state_25473__$1 = (function (){var statearr_25491 = state_25473;
(statearr_25491[(12)] = inst_25466);

return statearr_25491;
})();
var statearr_25492_25520 = state_25473__$1;
(statearr_25492_25520[(2)] = null);

(statearr_25492_25520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (10))){
var inst_25441 = (state_25473[(2)]);
var inst_25442 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25473__$1 = (function (){var statearr_25493 = state_25473;
(statearr_25493[(13)] = inst_25441);

return statearr_25493;
})();
var statearr_25494_25521 = state_25473__$1;
(statearr_25494_25521[(2)] = inst_25442);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25473__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (8))){
var inst_25455 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
var statearr_25495_25522 = state_25473__$1;
(statearr_25495_25522[(2)] = inst_25455);

(statearr_25495_25522[(1)] = (5));


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
});})(c__19366__auto___25507,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19345__auto__,c__19366__auto___25507,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_25499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25499[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_25499[(1)] = (1));

return statearr_25499;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_25473){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_25473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e25500){if((e25500 instanceof Object)){
var ex__19349__auto__ = e25500;
var statearr_25501_25523 = state_25473;
(statearr_25501_25523[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25524 = state_25473;
state_25473 = G__25524;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_25473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_25473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___25507,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19368__auto__ = (function (){var statearr_25502 = f__19367__auto__.call(null);
(statearr_25502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___25507);

return statearr_25502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___25507,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25526 = [];
var len__17402__auto___25582 = arguments.length;
var i__17403__auto___25583 = (0);
while(true){
if((i__17403__auto___25583 < len__17402__auto___25582)){
args25526.push((arguments[i__17403__auto___25583]));

var G__25584 = (i__17403__auto___25583 + (1));
i__17403__auto___25583 = G__25584;
continue;
} else {
}
break;
}

var G__25528 = args25526.length;
switch (G__25528) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25526.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___25586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___25586,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___25586,out){
return (function (state_25558){
var state_val_25559 = (state_25558[(1)]);
if((state_val_25559 === (7))){
var inst_25537 = (state_25558[(7)]);
var inst_25538 = (state_25558[(8)]);
var inst_25537__$1 = (state_25558[(2)]);
var inst_25538__$1 = cljs.core.nth.call(null,inst_25537__$1,(0),null);
var inst_25539 = cljs.core.nth.call(null,inst_25537__$1,(1),null);
var inst_25540 = (inst_25538__$1 == null);
var state_25558__$1 = (function (){var statearr_25560 = state_25558;
(statearr_25560[(7)] = inst_25537__$1);

(statearr_25560[(9)] = inst_25539);

(statearr_25560[(8)] = inst_25538__$1);

return statearr_25560;
})();
if(cljs.core.truth_(inst_25540)){
var statearr_25561_25587 = state_25558__$1;
(statearr_25561_25587[(1)] = (8));

} else {
var statearr_25562_25588 = state_25558__$1;
(statearr_25562_25588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (1))){
var inst_25529 = cljs.core.vec.call(null,chs);
var inst_25530 = inst_25529;
var state_25558__$1 = (function (){var statearr_25563 = state_25558;
(statearr_25563[(10)] = inst_25530);

return statearr_25563;
})();
var statearr_25564_25589 = state_25558__$1;
(statearr_25564_25589[(2)] = null);

(statearr_25564_25589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (4))){
var inst_25530 = (state_25558[(10)]);
var state_25558__$1 = state_25558;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25558__$1,(7),inst_25530);
} else {
if((state_val_25559 === (6))){
var inst_25554 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25565_25590 = state_25558__$1;
(statearr_25565_25590[(2)] = inst_25554);

(statearr_25565_25590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (3))){
var inst_25556 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25558__$1,inst_25556);
} else {
if((state_val_25559 === (2))){
var inst_25530 = (state_25558[(10)]);
var inst_25532 = cljs.core.count.call(null,inst_25530);
var inst_25533 = (inst_25532 > (0));
var state_25558__$1 = state_25558;
if(cljs.core.truth_(inst_25533)){
var statearr_25567_25591 = state_25558__$1;
(statearr_25567_25591[(1)] = (4));

} else {
var statearr_25568_25592 = state_25558__$1;
(statearr_25568_25592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (11))){
var inst_25530 = (state_25558[(10)]);
var inst_25547 = (state_25558[(2)]);
var tmp25566 = inst_25530;
var inst_25530__$1 = tmp25566;
var state_25558__$1 = (function (){var statearr_25569 = state_25558;
(statearr_25569[(10)] = inst_25530__$1);

(statearr_25569[(11)] = inst_25547);

return statearr_25569;
})();
var statearr_25570_25593 = state_25558__$1;
(statearr_25570_25593[(2)] = null);

(statearr_25570_25593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (9))){
var inst_25538 = (state_25558[(8)]);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25558__$1,(11),out,inst_25538);
} else {
if((state_val_25559 === (5))){
var inst_25552 = cljs.core.async.close_BANG_.call(null,out);
var state_25558__$1 = state_25558;
var statearr_25571_25594 = state_25558__$1;
(statearr_25571_25594[(2)] = inst_25552);

(statearr_25571_25594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (10))){
var inst_25550 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25572_25595 = state_25558__$1;
(statearr_25572_25595[(2)] = inst_25550);

(statearr_25572_25595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (8))){
var inst_25537 = (state_25558[(7)]);
var inst_25530 = (state_25558[(10)]);
var inst_25539 = (state_25558[(9)]);
var inst_25538 = (state_25558[(8)]);
var inst_25542 = (function (){var cs = inst_25530;
var vec__25535 = inst_25537;
var v = inst_25538;
var c = inst_25539;
return ((function (cs,vec__25535,v,c,inst_25537,inst_25530,inst_25539,inst_25538,state_val_25559,c__19366__auto___25586,out){
return (function (p1__25525_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25525_SHARP_);
});
;})(cs,vec__25535,v,c,inst_25537,inst_25530,inst_25539,inst_25538,state_val_25559,c__19366__auto___25586,out))
})();
var inst_25543 = cljs.core.filterv.call(null,inst_25542,inst_25530);
var inst_25530__$1 = inst_25543;
var state_25558__$1 = (function (){var statearr_25573 = state_25558;
(statearr_25573[(10)] = inst_25530__$1);

return statearr_25573;
})();
var statearr_25574_25596 = state_25558__$1;
(statearr_25574_25596[(2)] = null);

(statearr_25574_25596[(1)] = (2));


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
});})(c__19366__auto___25586,out))
;
return ((function (switch__19345__auto__,c__19366__auto___25586,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_25578 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25578[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_25578[(1)] = (1));

return statearr_25578;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_25558){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_25558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e25579){if((e25579 instanceof Object)){
var ex__19349__auto__ = e25579;
var statearr_25580_25597 = state_25558;
(statearr_25580_25597[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25598 = state_25558;
state_25558 = G__25598;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_25558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_25558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___25586,out))
})();
var state__19368__auto__ = (function (){var statearr_25581 = f__19367__auto__.call(null);
(statearr_25581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___25586);

return statearr_25581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___25586,out))
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
var args25599 = [];
var len__17402__auto___25648 = arguments.length;
var i__17403__auto___25649 = (0);
while(true){
if((i__17403__auto___25649 < len__17402__auto___25648)){
args25599.push((arguments[i__17403__auto___25649]));

var G__25650 = (i__17403__auto___25649 + (1));
i__17403__auto___25649 = G__25650;
continue;
} else {
}
break;
}

var G__25601 = args25599.length;
switch (G__25601) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25599.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___25652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___25652,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___25652,out){
return (function (state_25625){
var state_val_25626 = (state_25625[(1)]);
if((state_val_25626 === (7))){
var inst_25607 = (state_25625[(7)]);
var inst_25607__$1 = (state_25625[(2)]);
var inst_25608 = (inst_25607__$1 == null);
var inst_25609 = cljs.core.not.call(null,inst_25608);
var state_25625__$1 = (function (){var statearr_25627 = state_25625;
(statearr_25627[(7)] = inst_25607__$1);

return statearr_25627;
})();
if(inst_25609){
var statearr_25628_25653 = state_25625__$1;
(statearr_25628_25653[(1)] = (8));

} else {
var statearr_25629_25654 = state_25625__$1;
(statearr_25629_25654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (1))){
var inst_25602 = (0);
var state_25625__$1 = (function (){var statearr_25630 = state_25625;
(statearr_25630[(8)] = inst_25602);

return statearr_25630;
})();
var statearr_25631_25655 = state_25625__$1;
(statearr_25631_25655[(2)] = null);

(statearr_25631_25655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (4))){
var state_25625__$1 = state_25625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25625__$1,(7),ch);
} else {
if((state_val_25626 === (6))){
var inst_25620 = (state_25625[(2)]);
var state_25625__$1 = state_25625;
var statearr_25632_25656 = state_25625__$1;
(statearr_25632_25656[(2)] = inst_25620);

(statearr_25632_25656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (3))){
var inst_25622 = (state_25625[(2)]);
var inst_25623 = cljs.core.async.close_BANG_.call(null,out);
var state_25625__$1 = (function (){var statearr_25633 = state_25625;
(statearr_25633[(9)] = inst_25622);

return statearr_25633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25625__$1,inst_25623);
} else {
if((state_val_25626 === (2))){
var inst_25602 = (state_25625[(8)]);
var inst_25604 = (inst_25602 < n);
var state_25625__$1 = state_25625;
if(cljs.core.truth_(inst_25604)){
var statearr_25634_25657 = state_25625__$1;
(statearr_25634_25657[(1)] = (4));

} else {
var statearr_25635_25658 = state_25625__$1;
(statearr_25635_25658[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (11))){
var inst_25602 = (state_25625[(8)]);
var inst_25612 = (state_25625[(2)]);
var inst_25613 = (inst_25602 + (1));
var inst_25602__$1 = inst_25613;
var state_25625__$1 = (function (){var statearr_25636 = state_25625;
(statearr_25636[(8)] = inst_25602__$1);

(statearr_25636[(10)] = inst_25612);

return statearr_25636;
})();
var statearr_25637_25659 = state_25625__$1;
(statearr_25637_25659[(2)] = null);

(statearr_25637_25659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (9))){
var state_25625__$1 = state_25625;
var statearr_25638_25660 = state_25625__$1;
(statearr_25638_25660[(2)] = null);

(statearr_25638_25660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (5))){
var state_25625__$1 = state_25625;
var statearr_25639_25661 = state_25625__$1;
(statearr_25639_25661[(2)] = null);

(statearr_25639_25661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (10))){
var inst_25617 = (state_25625[(2)]);
var state_25625__$1 = state_25625;
var statearr_25640_25662 = state_25625__$1;
(statearr_25640_25662[(2)] = inst_25617);

(statearr_25640_25662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (8))){
var inst_25607 = (state_25625[(7)]);
var state_25625__$1 = state_25625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25625__$1,(11),out,inst_25607);
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
});})(c__19366__auto___25652,out))
;
return ((function (switch__19345__auto__,c__19366__auto___25652,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_25644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25644[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_25644[(1)] = (1));

return statearr_25644;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_25625){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_25625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e25645){if((e25645 instanceof Object)){
var ex__19349__auto__ = e25645;
var statearr_25646_25663 = state_25625;
(statearr_25646_25663[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25664 = state_25625;
state_25625 = G__25664;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_25625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_25625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___25652,out))
})();
var state__19368__auto__ = (function (){var statearr_25647 = f__19367__auto__.call(null);
(statearr_25647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___25652);

return statearr_25647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___25652,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25672 = (function (map_LT_,f,ch,meta25673){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25673 = meta25673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25674,meta25673__$1){
var self__ = this;
var _25674__$1 = this;
return (new cljs.core.async.t_cljs$core$async25672(self__.map_LT_,self__.f,self__.ch,meta25673__$1));
});

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25674){
var self__ = this;
var _25674__$1 = this;
return self__.meta25673;
});

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25675 = (function (map_LT_,f,ch,meta25673,_,fn1,meta25676){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25673 = meta25673;
this._ = _;
this.fn1 = fn1;
this.meta25676 = meta25676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25677,meta25676__$1){
var self__ = this;
var _25677__$1 = this;
return (new cljs.core.async.t_cljs$core$async25675(self__.map_LT_,self__.f,self__.ch,self__.meta25673,self__._,self__.fn1,meta25676__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25677){
var self__ = this;
var _25677__$1 = this;
return self__.meta25676;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25665_SHARP_){
return f1.call(null,(((p1__25665_SHARP_ == null))?null:self__.f.call(null,p1__25665_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25675.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25673","meta25673",-827414933,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25672","cljs.core.async/t_cljs$core$async25672",909457588,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25676","meta25676",1078103423,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25675";

cljs.core.async.t_cljs$core$async25675.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async25675");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25675 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25675(map_LT___$1,f__$1,ch__$1,meta25673__$1,___$2,fn1__$1,meta25676){
return (new cljs.core.async.t_cljs$core$async25675(map_LT___$1,f__$1,ch__$1,meta25673__$1,___$2,fn1__$1,meta25676));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25675(self__.map_LT_,self__.f,self__.ch,self__.meta25673,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25673","meta25673",-827414933,null)], null);
});

cljs.core.async.t_cljs$core$async25672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25672";

cljs.core.async.t_cljs$core$async25672.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async25672");
});

cljs.core.async.__GT_t_cljs$core$async25672 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25672(map_LT___$1,f__$1,ch__$1,meta25673){
return (new cljs.core.async.t_cljs$core$async25672(map_LT___$1,f__$1,ch__$1,meta25673));
});

}

return (new cljs.core.async.t_cljs$core$async25672(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25681 = (function (map_GT_,f,ch,meta25682){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25682 = meta25682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25683,meta25682__$1){
var self__ = this;
var _25683__$1 = this;
return (new cljs.core.async.t_cljs$core$async25681(self__.map_GT_,self__.f,self__.ch,meta25682__$1));
});

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25683){
var self__ = this;
var _25683__$1 = this;
return self__.meta25682;
});

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25681.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25682","meta25682",-811320461,null)], null);
});

cljs.core.async.t_cljs$core$async25681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25681";

cljs.core.async.t_cljs$core$async25681.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async25681");
});

cljs.core.async.__GT_t_cljs$core$async25681 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25681(map_GT___$1,f__$1,ch__$1,meta25682){
return (new cljs.core.async.t_cljs$core$async25681(map_GT___$1,f__$1,ch__$1,meta25682));
});

}

return (new cljs.core.async.t_cljs$core$async25681(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25687 = (function (filter_GT_,p,ch,meta25688){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25688 = meta25688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25689,meta25688__$1){
var self__ = this;
var _25689__$1 = this;
return (new cljs.core.async.t_cljs$core$async25687(self__.filter_GT_,self__.p,self__.ch,meta25688__$1));
});

cljs.core.async.t_cljs$core$async25687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25689){
var self__ = this;
var _25689__$1 = this;
return self__.meta25688;
});

cljs.core.async.t_cljs$core$async25687.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25687.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25687.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25687.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25688","meta25688",-1559340351,null)], null);
});

cljs.core.async.t_cljs$core$async25687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25687";

cljs.core.async.t_cljs$core$async25687.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async25687");
});

cljs.core.async.__GT_t_cljs$core$async25687 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25687(filter_GT___$1,p__$1,ch__$1,meta25688){
return (new cljs.core.async.t_cljs$core$async25687(filter_GT___$1,p__$1,ch__$1,meta25688));
});

}

return (new cljs.core.async.t_cljs$core$async25687(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25690 = [];
var len__17402__auto___25734 = arguments.length;
var i__17403__auto___25735 = (0);
while(true){
if((i__17403__auto___25735 < len__17402__auto___25734)){
args25690.push((arguments[i__17403__auto___25735]));

var G__25736 = (i__17403__auto___25735 + (1));
i__17403__auto___25735 = G__25736;
continue;
} else {
}
break;
}

var G__25692 = args25690.length;
switch (G__25692) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25690.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___25738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___25738,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___25738,out){
return (function (state_25713){
var state_val_25714 = (state_25713[(1)]);
if((state_val_25714 === (7))){
var inst_25709 = (state_25713[(2)]);
var state_25713__$1 = state_25713;
var statearr_25715_25739 = state_25713__$1;
(statearr_25715_25739[(2)] = inst_25709);

(statearr_25715_25739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (1))){
var state_25713__$1 = state_25713;
var statearr_25716_25740 = state_25713__$1;
(statearr_25716_25740[(2)] = null);

(statearr_25716_25740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (4))){
var inst_25695 = (state_25713[(7)]);
var inst_25695__$1 = (state_25713[(2)]);
var inst_25696 = (inst_25695__$1 == null);
var state_25713__$1 = (function (){var statearr_25717 = state_25713;
(statearr_25717[(7)] = inst_25695__$1);

return statearr_25717;
})();
if(cljs.core.truth_(inst_25696)){
var statearr_25718_25741 = state_25713__$1;
(statearr_25718_25741[(1)] = (5));

} else {
var statearr_25719_25742 = state_25713__$1;
(statearr_25719_25742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (6))){
var inst_25695 = (state_25713[(7)]);
var inst_25700 = p.call(null,inst_25695);
var state_25713__$1 = state_25713;
if(cljs.core.truth_(inst_25700)){
var statearr_25720_25743 = state_25713__$1;
(statearr_25720_25743[(1)] = (8));

} else {
var statearr_25721_25744 = state_25713__$1;
(statearr_25721_25744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (3))){
var inst_25711 = (state_25713[(2)]);
var state_25713__$1 = state_25713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25713__$1,inst_25711);
} else {
if((state_val_25714 === (2))){
var state_25713__$1 = state_25713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25713__$1,(4),ch);
} else {
if((state_val_25714 === (11))){
var inst_25703 = (state_25713[(2)]);
var state_25713__$1 = state_25713;
var statearr_25722_25745 = state_25713__$1;
(statearr_25722_25745[(2)] = inst_25703);

(statearr_25722_25745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (9))){
var state_25713__$1 = state_25713;
var statearr_25723_25746 = state_25713__$1;
(statearr_25723_25746[(2)] = null);

(statearr_25723_25746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (5))){
var inst_25698 = cljs.core.async.close_BANG_.call(null,out);
var state_25713__$1 = state_25713;
var statearr_25724_25747 = state_25713__$1;
(statearr_25724_25747[(2)] = inst_25698);

(statearr_25724_25747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (10))){
var inst_25706 = (state_25713[(2)]);
var state_25713__$1 = (function (){var statearr_25725 = state_25713;
(statearr_25725[(8)] = inst_25706);

return statearr_25725;
})();
var statearr_25726_25748 = state_25713__$1;
(statearr_25726_25748[(2)] = null);

(statearr_25726_25748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25714 === (8))){
var inst_25695 = (state_25713[(7)]);
var state_25713__$1 = state_25713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25713__$1,(11),out,inst_25695);
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
});})(c__19366__auto___25738,out))
;
return ((function (switch__19345__auto__,c__19366__auto___25738,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_25730 = [null,null,null,null,null,null,null,null,null];
(statearr_25730[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_25730[(1)] = (1));

return statearr_25730;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_25713){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_25713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e25731){if((e25731 instanceof Object)){
var ex__19349__auto__ = e25731;
var statearr_25732_25749 = state_25713;
(statearr_25732_25749[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25750 = state_25713;
state_25713 = G__25750;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_25713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_25713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___25738,out))
})();
var state__19368__auto__ = (function (){var statearr_25733 = f__19367__auto__.call(null);
(statearr_25733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___25738);

return statearr_25733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___25738,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25751 = [];
var len__17402__auto___25754 = arguments.length;
var i__17403__auto___25755 = (0);
while(true){
if((i__17403__auto___25755 < len__17402__auto___25754)){
args25751.push((arguments[i__17403__auto___25755]));

var G__25756 = (i__17403__auto___25755 + (1));
i__17403__auto___25755 = G__25756;
continue;
} else {
}
break;
}

var G__25753 = args25751.length;
switch (G__25753) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25751.length)].join('')));

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
return (function (state_25923){
var state_val_25924 = (state_25923[(1)]);
if((state_val_25924 === (7))){
var inst_25919 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25925_25966 = state_25923__$1;
(statearr_25925_25966[(2)] = inst_25919);

(statearr_25925_25966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (20))){
var inst_25889 = (state_25923[(7)]);
var inst_25900 = (state_25923[(2)]);
var inst_25901 = cljs.core.next.call(null,inst_25889);
var inst_25875 = inst_25901;
var inst_25876 = null;
var inst_25877 = (0);
var inst_25878 = (0);
var state_25923__$1 = (function (){var statearr_25926 = state_25923;
(statearr_25926[(8)] = inst_25875);

(statearr_25926[(9)] = inst_25878);

(statearr_25926[(10)] = inst_25876);

(statearr_25926[(11)] = inst_25877);

(statearr_25926[(12)] = inst_25900);

return statearr_25926;
})();
var statearr_25927_25967 = state_25923__$1;
(statearr_25927_25967[(2)] = null);

(statearr_25927_25967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (1))){
var state_25923__$1 = state_25923;
var statearr_25928_25968 = state_25923__$1;
(statearr_25928_25968[(2)] = null);

(statearr_25928_25968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (4))){
var inst_25864 = (state_25923[(13)]);
var inst_25864__$1 = (state_25923[(2)]);
var inst_25865 = (inst_25864__$1 == null);
var state_25923__$1 = (function (){var statearr_25929 = state_25923;
(statearr_25929[(13)] = inst_25864__$1);

return statearr_25929;
})();
if(cljs.core.truth_(inst_25865)){
var statearr_25930_25969 = state_25923__$1;
(statearr_25930_25969[(1)] = (5));

} else {
var statearr_25931_25970 = state_25923__$1;
(statearr_25931_25970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (15))){
var state_25923__$1 = state_25923;
var statearr_25935_25971 = state_25923__$1;
(statearr_25935_25971[(2)] = null);

(statearr_25935_25971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (21))){
var state_25923__$1 = state_25923;
var statearr_25936_25972 = state_25923__$1;
(statearr_25936_25972[(2)] = null);

(statearr_25936_25972[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (13))){
var inst_25875 = (state_25923[(8)]);
var inst_25878 = (state_25923[(9)]);
var inst_25876 = (state_25923[(10)]);
var inst_25877 = (state_25923[(11)]);
var inst_25885 = (state_25923[(2)]);
var inst_25886 = (inst_25878 + (1));
var tmp25932 = inst_25875;
var tmp25933 = inst_25876;
var tmp25934 = inst_25877;
var inst_25875__$1 = tmp25932;
var inst_25876__$1 = tmp25933;
var inst_25877__$1 = tmp25934;
var inst_25878__$1 = inst_25886;
var state_25923__$1 = (function (){var statearr_25937 = state_25923;
(statearr_25937[(8)] = inst_25875__$1);

(statearr_25937[(14)] = inst_25885);

(statearr_25937[(9)] = inst_25878__$1);

(statearr_25937[(10)] = inst_25876__$1);

(statearr_25937[(11)] = inst_25877__$1);

return statearr_25937;
})();
var statearr_25938_25973 = state_25923__$1;
(statearr_25938_25973[(2)] = null);

(statearr_25938_25973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (22))){
var state_25923__$1 = state_25923;
var statearr_25939_25974 = state_25923__$1;
(statearr_25939_25974[(2)] = null);

(statearr_25939_25974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (6))){
var inst_25864 = (state_25923[(13)]);
var inst_25873 = f.call(null,inst_25864);
var inst_25874 = cljs.core.seq.call(null,inst_25873);
var inst_25875 = inst_25874;
var inst_25876 = null;
var inst_25877 = (0);
var inst_25878 = (0);
var state_25923__$1 = (function (){var statearr_25940 = state_25923;
(statearr_25940[(8)] = inst_25875);

(statearr_25940[(9)] = inst_25878);

(statearr_25940[(10)] = inst_25876);

(statearr_25940[(11)] = inst_25877);

return statearr_25940;
})();
var statearr_25941_25975 = state_25923__$1;
(statearr_25941_25975[(2)] = null);

(statearr_25941_25975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (17))){
var inst_25889 = (state_25923[(7)]);
var inst_25893 = cljs.core.chunk_first.call(null,inst_25889);
var inst_25894 = cljs.core.chunk_rest.call(null,inst_25889);
var inst_25895 = cljs.core.count.call(null,inst_25893);
var inst_25875 = inst_25894;
var inst_25876 = inst_25893;
var inst_25877 = inst_25895;
var inst_25878 = (0);
var state_25923__$1 = (function (){var statearr_25942 = state_25923;
(statearr_25942[(8)] = inst_25875);

(statearr_25942[(9)] = inst_25878);

(statearr_25942[(10)] = inst_25876);

(statearr_25942[(11)] = inst_25877);

return statearr_25942;
})();
var statearr_25943_25976 = state_25923__$1;
(statearr_25943_25976[(2)] = null);

(statearr_25943_25976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (3))){
var inst_25921 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25923__$1,inst_25921);
} else {
if((state_val_25924 === (12))){
var inst_25909 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25944_25977 = state_25923__$1;
(statearr_25944_25977[(2)] = inst_25909);

(statearr_25944_25977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (2))){
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25923__$1,(4),in$);
} else {
if((state_val_25924 === (23))){
var inst_25917 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25945_25978 = state_25923__$1;
(statearr_25945_25978[(2)] = inst_25917);

(statearr_25945_25978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (19))){
var inst_25904 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25946_25979 = state_25923__$1;
(statearr_25946_25979[(2)] = inst_25904);

(statearr_25946_25979[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (11))){
var inst_25875 = (state_25923[(8)]);
var inst_25889 = (state_25923[(7)]);
var inst_25889__$1 = cljs.core.seq.call(null,inst_25875);
var state_25923__$1 = (function (){var statearr_25947 = state_25923;
(statearr_25947[(7)] = inst_25889__$1);

return statearr_25947;
})();
if(inst_25889__$1){
var statearr_25948_25980 = state_25923__$1;
(statearr_25948_25980[(1)] = (14));

} else {
var statearr_25949_25981 = state_25923__$1;
(statearr_25949_25981[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (9))){
var inst_25911 = (state_25923[(2)]);
var inst_25912 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25923__$1 = (function (){var statearr_25950 = state_25923;
(statearr_25950[(15)] = inst_25911);

return statearr_25950;
})();
if(cljs.core.truth_(inst_25912)){
var statearr_25951_25982 = state_25923__$1;
(statearr_25951_25982[(1)] = (21));

} else {
var statearr_25952_25983 = state_25923__$1;
(statearr_25952_25983[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (5))){
var inst_25867 = cljs.core.async.close_BANG_.call(null,out);
var state_25923__$1 = state_25923;
var statearr_25953_25984 = state_25923__$1;
(statearr_25953_25984[(2)] = inst_25867);

(statearr_25953_25984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (14))){
var inst_25889 = (state_25923[(7)]);
var inst_25891 = cljs.core.chunked_seq_QMARK_.call(null,inst_25889);
var state_25923__$1 = state_25923;
if(inst_25891){
var statearr_25954_25985 = state_25923__$1;
(statearr_25954_25985[(1)] = (17));

} else {
var statearr_25955_25986 = state_25923__$1;
(statearr_25955_25986[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (16))){
var inst_25907 = (state_25923[(2)]);
var state_25923__$1 = state_25923;
var statearr_25956_25987 = state_25923__$1;
(statearr_25956_25987[(2)] = inst_25907);

(statearr_25956_25987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25924 === (10))){
var inst_25878 = (state_25923[(9)]);
var inst_25876 = (state_25923[(10)]);
var inst_25883 = cljs.core._nth.call(null,inst_25876,inst_25878);
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25923__$1,(13),out,inst_25883);
} else {
if((state_val_25924 === (18))){
var inst_25889 = (state_25923[(7)]);
var inst_25898 = cljs.core.first.call(null,inst_25889);
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25923__$1,(20),out,inst_25898);
} else {
if((state_val_25924 === (8))){
var inst_25878 = (state_25923[(9)]);
var inst_25877 = (state_25923[(11)]);
var inst_25880 = (inst_25878 < inst_25877);
var inst_25881 = inst_25880;
var state_25923__$1 = state_25923;
if(cljs.core.truth_(inst_25881)){
var statearr_25957_25988 = state_25923__$1;
(statearr_25957_25988[(1)] = (10));

} else {
var statearr_25958_25989 = state_25923__$1;
(statearr_25958_25989[(1)] = (11));

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
var statearr_25962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25962[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__);

(statearr_25962[(1)] = (1));

return statearr_25962;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____1 = (function (state_25923){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_25923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e25963){if((e25963 instanceof Object)){
var ex__19349__auto__ = e25963;
var statearr_25964_25990 = state_25923;
(statearr_25964_25990[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25991 = state_25923;
state_25923 = G__25991;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__ = function(state_25923){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____1.call(this,state_25923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto__))
})();
var state__19368__auto__ = (function (){var statearr_25965 = f__19367__auto__.call(null);
(statearr_25965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto__);

return statearr_25965;
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
var args25992 = [];
var len__17402__auto___25995 = arguments.length;
var i__17403__auto___25996 = (0);
while(true){
if((i__17403__auto___25996 < len__17402__auto___25995)){
args25992.push((arguments[i__17403__auto___25996]));

var G__25997 = (i__17403__auto___25996 + (1));
i__17403__auto___25996 = G__25997;
continue;
} else {
}
break;
}

var G__25994 = args25992.length;
switch (G__25994) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25992.length)].join('')));

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
var args25999 = [];
var len__17402__auto___26002 = arguments.length;
var i__17403__auto___26003 = (0);
while(true){
if((i__17403__auto___26003 < len__17402__auto___26002)){
args25999.push((arguments[i__17403__auto___26003]));

var G__26004 = (i__17403__auto___26003 + (1));
i__17403__auto___26003 = G__26004;
continue;
} else {
}
break;
}

var G__26001 = args25999.length;
switch (G__26001) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25999.length)].join('')));

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
var args26006 = [];
var len__17402__auto___26057 = arguments.length;
var i__17403__auto___26058 = (0);
while(true){
if((i__17403__auto___26058 < len__17402__auto___26057)){
args26006.push((arguments[i__17403__auto___26058]));

var G__26059 = (i__17403__auto___26058 + (1));
i__17403__auto___26058 = G__26059;
continue;
} else {
}
break;
}

var G__26008 = args26006.length;
switch (G__26008) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26006.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___26061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___26061,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___26061,out){
return (function (state_26032){
var state_val_26033 = (state_26032[(1)]);
if((state_val_26033 === (7))){
var inst_26027 = (state_26032[(2)]);
var state_26032__$1 = state_26032;
var statearr_26034_26062 = state_26032__$1;
(statearr_26034_26062[(2)] = inst_26027);

(statearr_26034_26062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26033 === (1))){
var inst_26009 = null;
var state_26032__$1 = (function (){var statearr_26035 = state_26032;
(statearr_26035[(7)] = inst_26009);

return statearr_26035;
})();
var statearr_26036_26063 = state_26032__$1;
(statearr_26036_26063[(2)] = null);

(statearr_26036_26063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26033 === (4))){
var inst_26012 = (state_26032[(8)]);
var inst_26012__$1 = (state_26032[(2)]);
var inst_26013 = (inst_26012__$1 == null);
var inst_26014 = cljs.core.not.call(null,inst_26013);
var state_26032__$1 = (function (){var statearr_26037 = state_26032;
(statearr_26037[(8)] = inst_26012__$1);

return statearr_26037;
})();
if(inst_26014){
var statearr_26038_26064 = state_26032__$1;
(statearr_26038_26064[(1)] = (5));

} else {
var statearr_26039_26065 = state_26032__$1;
(statearr_26039_26065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26033 === (6))){
var state_26032__$1 = state_26032;
var statearr_26040_26066 = state_26032__$1;
(statearr_26040_26066[(2)] = null);

(statearr_26040_26066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26033 === (3))){
var inst_26029 = (state_26032[(2)]);
var inst_26030 = cljs.core.async.close_BANG_.call(null,out);
var state_26032__$1 = (function (){var statearr_26041 = state_26032;
(statearr_26041[(9)] = inst_26029);

return statearr_26041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26032__$1,inst_26030);
} else {
if((state_val_26033 === (2))){
var state_26032__$1 = state_26032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26032__$1,(4),ch);
} else {
if((state_val_26033 === (11))){
var inst_26012 = (state_26032[(8)]);
var inst_26021 = (state_26032[(2)]);
var inst_26009 = inst_26012;
var state_26032__$1 = (function (){var statearr_26042 = state_26032;
(statearr_26042[(7)] = inst_26009);

(statearr_26042[(10)] = inst_26021);

return statearr_26042;
})();
var statearr_26043_26067 = state_26032__$1;
(statearr_26043_26067[(2)] = null);

(statearr_26043_26067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26033 === (9))){
var inst_26012 = (state_26032[(8)]);
var state_26032__$1 = state_26032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26032__$1,(11),out,inst_26012);
} else {
if((state_val_26033 === (5))){
var inst_26012 = (state_26032[(8)]);
var inst_26009 = (state_26032[(7)]);
var inst_26016 = cljs.core._EQ_.call(null,inst_26012,inst_26009);
var state_26032__$1 = state_26032;
if(inst_26016){
var statearr_26045_26068 = state_26032__$1;
(statearr_26045_26068[(1)] = (8));

} else {
var statearr_26046_26069 = state_26032__$1;
(statearr_26046_26069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26033 === (10))){
var inst_26024 = (state_26032[(2)]);
var state_26032__$1 = state_26032;
var statearr_26047_26070 = state_26032__$1;
(statearr_26047_26070[(2)] = inst_26024);

(statearr_26047_26070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26033 === (8))){
var inst_26009 = (state_26032[(7)]);
var tmp26044 = inst_26009;
var inst_26009__$1 = tmp26044;
var state_26032__$1 = (function (){var statearr_26048 = state_26032;
(statearr_26048[(7)] = inst_26009__$1);

return statearr_26048;
})();
var statearr_26049_26071 = state_26032__$1;
(statearr_26049_26071[(2)] = null);

(statearr_26049_26071[(1)] = (2));


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
});})(c__19366__auto___26061,out))
;
return ((function (switch__19345__auto__,c__19366__auto___26061,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_26053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26053[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_26053[(1)] = (1));

return statearr_26053;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_26032){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_26032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e26054){if((e26054 instanceof Object)){
var ex__19349__auto__ = e26054;
var statearr_26055_26072 = state_26032;
(statearr_26055_26072[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26073 = state_26032;
state_26032 = G__26073;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_26032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_26032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___26061,out))
})();
var state__19368__auto__ = (function (){var statearr_26056 = f__19367__auto__.call(null);
(statearr_26056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___26061);

return statearr_26056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___26061,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26074 = [];
var len__17402__auto___26144 = arguments.length;
var i__17403__auto___26145 = (0);
while(true){
if((i__17403__auto___26145 < len__17402__auto___26144)){
args26074.push((arguments[i__17403__auto___26145]));

var G__26146 = (i__17403__auto___26145 + (1));
i__17403__auto___26145 = G__26146;
continue;
} else {
}
break;
}

var G__26076 = args26074.length;
switch (G__26076) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26074.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___26148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___26148,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___26148,out){
return (function (state_26114){
var state_val_26115 = (state_26114[(1)]);
if((state_val_26115 === (7))){
var inst_26110 = (state_26114[(2)]);
var state_26114__$1 = state_26114;
var statearr_26116_26149 = state_26114__$1;
(statearr_26116_26149[(2)] = inst_26110);

(statearr_26116_26149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26115 === (1))){
var inst_26077 = (new Array(n));
var inst_26078 = inst_26077;
var inst_26079 = (0);
var state_26114__$1 = (function (){var statearr_26117 = state_26114;
(statearr_26117[(7)] = inst_26078);

(statearr_26117[(8)] = inst_26079);

return statearr_26117;
})();
var statearr_26118_26150 = state_26114__$1;
(statearr_26118_26150[(2)] = null);

(statearr_26118_26150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26115 === (4))){
var inst_26082 = (state_26114[(9)]);
var inst_26082__$1 = (state_26114[(2)]);
var inst_26083 = (inst_26082__$1 == null);
var inst_26084 = cljs.core.not.call(null,inst_26083);
var state_26114__$1 = (function (){var statearr_26119 = state_26114;
(statearr_26119[(9)] = inst_26082__$1);

return statearr_26119;
})();
if(inst_26084){
var statearr_26120_26151 = state_26114__$1;
(statearr_26120_26151[(1)] = (5));

} else {
var statearr_26121_26152 = state_26114__$1;
(statearr_26121_26152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26115 === (15))){
var inst_26104 = (state_26114[(2)]);
var state_26114__$1 = state_26114;
var statearr_26122_26153 = state_26114__$1;
(statearr_26122_26153[(2)] = inst_26104);

(statearr_26122_26153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26115 === (13))){
var state_26114__$1 = state_26114;
var statearr_26123_26154 = state_26114__$1;
(statearr_26123_26154[(2)] = null);

(statearr_26123_26154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26115 === (6))){
var inst_26079 = (state_26114[(8)]);
var inst_26100 = (inst_26079 > (0));
var state_26114__$1 = state_26114;
if(cljs.core.truth_(inst_26100)){
var statearr_26124_26155 = state_26114__$1;
(statearr_26124_26155[(1)] = (12));

} else {
var statearr_26125_26156 = state_26114__$1;
(statearr_26125_26156[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26115 === (3))){
var inst_26112 = (state_26114[(2)]);
var state_26114__$1 = state_26114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26114__$1,inst_26112);
} else {
if((state_val_26115 === (12))){
var inst_26078 = (state_26114[(7)]);
var inst_26102 = cljs.core.vec.call(null,inst_26078);
var state_26114__$1 = state_26114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26114__$1,(15),out,inst_26102);
} else {
if((state_val_26115 === (2))){
var state_26114__$1 = state_26114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26114__$1,(4),ch);
} else {
if((state_val_26115 === (11))){
var inst_26094 = (state_26114[(2)]);
var inst_26095 = (new Array(n));
var inst_26078 = inst_26095;
var inst_26079 = (0);
var state_26114__$1 = (function (){var statearr_26126 = state_26114;
(statearr_26126[(7)] = inst_26078);

(statearr_26126[(10)] = inst_26094);

(statearr_26126[(8)] = inst_26079);

return statearr_26126;
})();
var statearr_26127_26157 = state_26114__$1;
(statearr_26127_26157[(2)] = null);

(statearr_26127_26157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26115 === (9))){
var inst_26078 = (state_26114[(7)]);
var inst_26092 = cljs.core.vec.call(null,inst_26078);
var state_26114__$1 = state_26114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26114__$1,(11),out,inst_26092);
} else {
if((state_val_26115 === (5))){
var inst_26078 = (state_26114[(7)]);
var inst_26082 = (state_26114[(9)]);
var inst_26079 = (state_26114[(8)]);
var inst_26087 = (state_26114[(11)]);
var inst_26086 = (inst_26078[inst_26079] = inst_26082);
var inst_26087__$1 = (inst_26079 + (1));
var inst_26088 = (inst_26087__$1 < n);
var state_26114__$1 = (function (){var statearr_26128 = state_26114;
(statearr_26128[(12)] = inst_26086);

(statearr_26128[(11)] = inst_26087__$1);

return statearr_26128;
})();
if(cljs.core.truth_(inst_26088)){
var statearr_26129_26158 = state_26114__$1;
(statearr_26129_26158[(1)] = (8));

} else {
var statearr_26130_26159 = state_26114__$1;
(statearr_26130_26159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26115 === (14))){
var inst_26107 = (state_26114[(2)]);
var inst_26108 = cljs.core.async.close_BANG_.call(null,out);
var state_26114__$1 = (function (){var statearr_26132 = state_26114;
(statearr_26132[(13)] = inst_26107);

return statearr_26132;
})();
var statearr_26133_26160 = state_26114__$1;
(statearr_26133_26160[(2)] = inst_26108);

(statearr_26133_26160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26115 === (10))){
var inst_26098 = (state_26114[(2)]);
var state_26114__$1 = state_26114;
var statearr_26134_26161 = state_26114__$1;
(statearr_26134_26161[(2)] = inst_26098);

(statearr_26134_26161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26115 === (8))){
var inst_26078 = (state_26114[(7)]);
var inst_26087 = (state_26114[(11)]);
var tmp26131 = inst_26078;
var inst_26078__$1 = tmp26131;
var inst_26079 = inst_26087;
var state_26114__$1 = (function (){var statearr_26135 = state_26114;
(statearr_26135[(7)] = inst_26078__$1);

(statearr_26135[(8)] = inst_26079);

return statearr_26135;
})();
var statearr_26136_26162 = state_26114__$1;
(statearr_26136_26162[(2)] = null);

(statearr_26136_26162[(1)] = (2));


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
});})(c__19366__auto___26148,out))
;
return ((function (switch__19345__auto__,c__19366__auto___26148,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_26140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26140[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_26140[(1)] = (1));

return statearr_26140;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_26114){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_26114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e26141){if((e26141 instanceof Object)){
var ex__19349__auto__ = e26141;
var statearr_26142_26163 = state_26114;
(statearr_26142_26163[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26164 = state_26114;
state_26114 = G__26164;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_26114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_26114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___26148,out))
})();
var state__19368__auto__ = (function (){var statearr_26143 = f__19367__auto__.call(null);
(statearr_26143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___26148);

return statearr_26143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___26148,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26165 = [];
var len__17402__auto___26239 = arguments.length;
var i__17403__auto___26240 = (0);
while(true){
if((i__17403__auto___26240 < len__17402__auto___26239)){
args26165.push((arguments[i__17403__auto___26240]));

var G__26241 = (i__17403__auto___26240 + (1));
i__17403__auto___26240 = G__26241;
continue;
} else {
}
break;
}

var G__26167 = args26165.length;
switch (G__26167) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26165.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19366__auto___26243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19366__auto___26243,out){
return (function (){
var f__19367__auto__ = (function (){var switch__19345__auto__ = ((function (c__19366__auto___26243,out){
return (function (state_26209){
var state_val_26210 = (state_26209[(1)]);
if((state_val_26210 === (7))){
var inst_26205 = (state_26209[(2)]);
var state_26209__$1 = state_26209;
var statearr_26211_26244 = state_26209__$1;
(statearr_26211_26244[(2)] = inst_26205);

(statearr_26211_26244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (1))){
var inst_26168 = [];
var inst_26169 = inst_26168;
var inst_26170 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26209__$1 = (function (){var statearr_26212 = state_26209;
(statearr_26212[(7)] = inst_26169);

(statearr_26212[(8)] = inst_26170);

return statearr_26212;
})();
var statearr_26213_26245 = state_26209__$1;
(statearr_26213_26245[(2)] = null);

(statearr_26213_26245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (4))){
var inst_26173 = (state_26209[(9)]);
var inst_26173__$1 = (state_26209[(2)]);
var inst_26174 = (inst_26173__$1 == null);
var inst_26175 = cljs.core.not.call(null,inst_26174);
var state_26209__$1 = (function (){var statearr_26214 = state_26209;
(statearr_26214[(9)] = inst_26173__$1);

return statearr_26214;
})();
if(inst_26175){
var statearr_26215_26246 = state_26209__$1;
(statearr_26215_26246[(1)] = (5));

} else {
var statearr_26216_26247 = state_26209__$1;
(statearr_26216_26247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (15))){
var inst_26199 = (state_26209[(2)]);
var state_26209__$1 = state_26209;
var statearr_26217_26248 = state_26209__$1;
(statearr_26217_26248[(2)] = inst_26199);

(statearr_26217_26248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (13))){
var state_26209__$1 = state_26209;
var statearr_26218_26249 = state_26209__$1;
(statearr_26218_26249[(2)] = null);

(statearr_26218_26249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (6))){
var inst_26169 = (state_26209[(7)]);
var inst_26194 = inst_26169.length;
var inst_26195 = (inst_26194 > (0));
var state_26209__$1 = state_26209;
if(cljs.core.truth_(inst_26195)){
var statearr_26219_26250 = state_26209__$1;
(statearr_26219_26250[(1)] = (12));

} else {
var statearr_26220_26251 = state_26209__$1;
(statearr_26220_26251[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (3))){
var inst_26207 = (state_26209[(2)]);
var state_26209__$1 = state_26209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26209__$1,inst_26207);
} else {
if((state_val_26210 === (12))){
var inst_26169 = (state_26209[(7)]);
var inst_26197 = cljs.core.vec.call(null,inst_26169);
var state_26209__$1 = state_26209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26209__$1,(15),out,inst_26197);
} else {
if((state_val_26210 === (2))){
var state_26209__$1 = state_26209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26209__$1,(4),ch);
} else {
if((state_val_26210 === (11))){
var inst_26177 = (state_26209[(10)]);
var inst_26173 = (state_26209[(9)]);
var inst_26187 = (state_26209[(2)]);
var inst_26188 = [];
var inst_26189 = inst_26188.push(inst_26173);
var inst_26169 = inst_26188;
var inst_26170 = inst_26177;
var state_26209__$1 = (function (){var statearr_26221 = state_26209;
(statearr_26221[(7)] = inst_26169);

(statearr_26221[(11)] = inst_26187);

(statearr_26221[(12)] = inst_26189);

(statearr_26221[(8)] = inst_26170);

return statearr_26221;
})();
var statearr_26222_26252 = state_26209__$1;
(statearr_26222_26252[(2)] = null);

(statearr_26222_26252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (9))){
var inst_26169 = (state_26209[(7)]);
var inst_26185 = cljs.core.vec.call(null,inst_26169);
var state_26209__$1 = state_26209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26209__$1,(11),out,inst_26185);
} else {
if((state_val_26210 === (5))){
var inst_26177 = (state_26209[(10)]);
var inst_26173 = (state_26209[(9)]);
var inst_26170 = (state_26209[(8)]);
var inst_26177__$1 = f.call(null,inst_26173);
var inst_26178 = cljs.core._EQ_.call(null,inst_26177__$1,inst_26170);
var inst_26179 = cljs.core.keyword_identical_QMARK_.call(null,inst_26170,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26180 = (inst_26178) || (inst_26179);
var state_26209__$1 = (function (){var statearr_26223 = state_26209;
(statearr_26223[(10)] = inst_26177__$1);

return statearr_26223;
})();
if(cljs.core.truth_(inst_26180)){
var statearr_26224_26253 = state_26209__$1;
(statearr_26224_26253[(1)] = (8));

} else {
var statearr_26225_26254 = state_26209__$1;
(statearr_26225_26254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (14))){
var inst_26202 = (state_26209[(2)]);
var inst_26203 = cljs.core.async.close_BANG_.call(null,out);
var state_26209__$1 = (function (){var statearr_26227 = state_26209;
(statearr_26227[(13)] = inst_26202);

return statearr_26227;
})();
var statearr_26228_26255 = state_26209__$1;
(statearr_26228_26255[(2)] = inst_26203);

(statearr_26228_26255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (10))){
var inst_26192 = (state_26209[(2)]);
var state_26209__$1 = state_26209;
var statearr_26229_26256 = state_26209__$1;
(statearr_26229_26256[(2)] = inst_26192);

(statearr_26229_26256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (8))){
var inst_26177 = (state_26209[(10)]);
var inst_26169 = (state_26209[(7)]);
var inst_26173 = (state_26209[(9)]);
var inst_26182 = inst_26169.push(inst_26173);
var tmp26226 = inst_26169;
var inst_26169__$1 = tmp26226;
var inst_26170 = inst_26177;
var state_26209__$1 = (function (){var statearr_26230 = state_26209;
(statearr_26230[(7)] = inst_26169__$1);

(statearr_26230[(8)] = inst_26170);

(statearr_26230[(14)] = inst_26182);

return statearr_26230;
})();
var statearr_26231_26257 = state_26209__$1;
(statearr_26231_26257[(2)] = null);

(statearr_26231_26257[(1)] = (2));


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
});})(c__19366__auto___26243,out))
;
return ((function (switch__19345__auto__,c__19366__auto___26243,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_26235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26235[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_26235[(1)] = (1));

return statearr_26235;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_26209){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_26209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e26236){if((e26236 instanceof Object)){
var ex__19349__auto__ = e26236;
var statearr_26237_26258 = state_26209;
(statearr_26237_26258[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26259 = state_26209;
state_26209 = G__26259;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_26209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_26209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19366__auto___26243,out))
})();
var state__19368__auto__ = (function (){var statearr_26238 = f__19367__auto__.call(null);
(statearr_26238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19366__auto___26243);

return statearr_26238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19368__auto__);
});})(c__19366__auto___26243,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map