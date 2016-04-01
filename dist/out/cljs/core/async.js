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
if(typeof cljs.core.async.t_cljs$core$async23782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23782 = (function (fn_handler,f,meta23783){
this.fn_handler = fn_handler;
this.f = f;
this.meta23783 = meta23783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23784,meta23783__$1){
var self__ = this;
var _23784__$1 = this;
return (new cljs.core.async.t_cljs$core$async23782(self__.fn_handler,self__.f,meta23783__$1));
});

cljs.core.async.t_cljs$core$async23782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23784){
var self__ = this;
var _23784__$1 = this;
return self__.meta23783;
});

cljs.core.async.t_cljs$core$async23782.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta23783","meta23783",335933981,null)], null);
});

cljs.core.async.t_cljs$core$async23782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23782";

cljs.core.async.t_cljs$core$async23782.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async23782");
});

cljs.core.async.__GT_t_cljs$core$async23782 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async23782(fn_handler__$1,f__$1,meta23783){
return (new cljs.core.async.t_cljs$core$async23782(fn_handler__$1,f__$1,meta23783));
});

}

return (new cljs.core.async.t_cljs$core$async23782(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args23787 = [];
var len__17416__auto___23790 = arguments.length;
var i__17417__auto___23791 = (0);
while(true){
if((i__17417__auto___23791 < len__17416__auto___23790)){
args23787.push((arguments[i__17417__auto___23791]));

var G__23792 = (i__17417__auto___23791 + (1));
i__17417__auto___23791 = G__23792;
continue;
} else {
}
break;
}

var G__23789 = args23787.length;
switch (G__23789) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23787.length)].join('')));

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
var args23794 = [];
var len__17416__auto___23797 = arguments.length;
var i__17417__auto___23798 = (0);
while(true){
if((i__17417__auto___23798 < len__17416__auto___23797)){
args23794.push((arguments[i__17417__auto___23798]));

var G__23799 = (i__17417__auto___23798 + (1));
i__17417__auto___23798 = G__23799;
continue;
} else {
}
break;
}

var G__23796 = args23794.length;
switch (G__23796) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23794.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23801 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23801);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23801,ret){
return (function (){
return fn1.call(null,val_23801);
});})(val_23801,ret))
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
var args23802 = [];
var len__17416__auto___23805 = arguments.length;
var i__17417__auto___23806 = (0);
while(true){
if((i__17417__auto___23806 < len__17416__auto___23805)){
args23802.push((arguments[i__17417__auto___23806]));

var G__23807 = (i__17417__auto___23806 + (1));
i__17417__auto___23806 = G__23807;
continue;
} else {
}
break;
}

var G__23804 = args23802.length;
switch (G__23804) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23802.length)].join('')));

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
var n__17261__auto___23809 = n;
var x_23810 = (0);
while(true){
if((x_23810 < n__17261__auto___23809)){
(a[x_23810] = (0));

var G__23811 = (x_23810 + (1));
x_23810 = G__23811;
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

var G__23812 = (i + (1));
i = G__23812;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23816 = (function (alt_flag,flag,meta23817){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23817 = meta23817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23818,meta23817__$1){
var self__ = this;
var _23818__$1 = this;
return (new cljs.core.async.t_cljs$core$async23816(self__.alt_flag,self__.flag,meta23817__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23818){
var self__ = this;
var _23818__$1 = this;
return self__.meta23817;
});})(flag))
;

cljs.core.async.t_cljs$core$async23816.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23816.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23817","meta23817",1260282314,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23816";

cljs.core.async.t_cljs$core$async23816.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async23816");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23816 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23816(alt_flag__$1,flag__$1,meta23817){
return (new cljs.core.async.t_cljs$core$async23816(alt_flag__$1,flag__$1,meta23817));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23816(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23822 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23822 = (function (alt_handler,flag,cb,meta23823){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23823 = meta23823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23824,meta23823__$1){
var self__ = this;
var _23824__$1 = this;
return (new cljs.core.async.t_cljs$core$async23822(self__.alt_handler,self__.flag,self__.cb,meta23823__$1));
});

cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23824){
var self__ = this;
var _23824__$1 = this;
return self__.meta23823;
});

cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23823","meta23823",1467416991,null)], null);
});

cljs.core.async.t_cljs$core$async23822.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23822";

cljs.core.async.t_cljs$core$async23822.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async23822");
});

cljs.core.async.__GT_t_cljs$core$async23822 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23822(alt_handler__$1,flag__$1,cb__$1,meta23823){
return (new cljs.core.async.t_cljs$core$async23822(alt_handler__$1,flag__$1,cb__$1,meta23823));
});

}

return (new cljs.core.async.t_cljs$core$async23822(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23825_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23825_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23826_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23826_SHARP_,port], null));
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
var G__23827 = (i + (1));
i = G__23827;
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
var len__17416__auto___23833 = arguments.length;
var i__17417__auto___23834 = (0);
while(true){
if((i__17417__auto___23834 < len__17416__auto___23833)){
args__17423__auto__.push((arguments[i__17417__auto___23834]));

var G__23835 = (i__17417__auto___23834 + (1));
i__17417__auto___23834 = G__23835;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23830){
var map__23831 = p__23830;
var map__23831__$1 = ((((!((map__23831 == null)))?((((map__23831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23831):map__23831);
var opts = map__23831__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23828){
var G__23829 = cljs.core.first.call(null,seq23828);
var seq23828__$1 = cljs.core.next.call(null,seq23828);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23829,seq23828__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23836 = [];
var len__17416__auto___23886 = arguments.length;
var i__17417__auto___23887 = (0);
while(true){
if((i__17417__auto___23887 < len__17416__auto___23886)){
args23836.push((arguments[i__17417__auto___23887]));

var G__23888 = (i__17417__auto___23887 + (1));
i__17417__auto___23887 = G__23888;
continue;
} else {
}
break;
}

var G__23838 = args23836.length;
switch (G__23838) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23836.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19380__auto___23890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___23890){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___23890){
return (function (state_23862){
var state_val_23863 = (state_23862[(1)]);
if((state_val_23863 === (7))){
var inst_23858 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
var statearr_23864_23891 = state_23862__$1;
(statearr_23864_23891[(2)] = inst_23858);

(statearr_23864_23891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (1))){
var state_23862__$1 = state_23862;
var statearr_23865_23892 = state_23862__$1;
(statearr_23865_23892[(2)] = null);

(statearr_23865_23892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (4))){
var inst_23841 = (state_23862[(7)]);
var inst_23841__$1 = (state_23862[(2)]);
var inst_23842 = (inst_23841__$1 == null);
var state_23862__$1 = (function (){var statearr_23866 = state_23862;
(statearr_23866[(7)] = inst_23841__$1);

return statearr_23866;
})();
if(cljs.core.truth_(inst_23842)){
var statearr_23867_23893 = state_23862__$1;
(statearr_23867_23893[(1)] = (5));

} else {
var statearr_23868_23894 = state_23862__$1;
(statearr_23868_23894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (13))){
var state_23862__$1 = state_23862;
var statearr_23869_23895 = state_23862__$1;
(statearr_23869_23895[(2)] = null);

(statearr_23869_23895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (6))){
var inst_23841 = (state_23862[(7)]);
var state_23862__$1 = state_23862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23862__$1,(11),to,inst_23841);
} else {
if((state_val_23863 === (3))){
var inst_23860 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23862__$1,inst_23860);
} else {
if((state_val_23863 === (12))){
var state_23862__$1 = state_23862;
var statearr_23870_23896 = state_23862__$1;
(statearr_23870_23896[(2)] = null);

(statearr_23870_23896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (2))){
var state_23862__$1 = state_23862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23862__$1,(4),from);
} else {
if((state_val_23863 === (11))){
var inst_23851 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
if(cljs.core.truth_(inst_23851)){
var statearr_23871_23897 = state_23862__$1;
(statearr_23871_23897[(1)] = (12));

} else {
var statearr_23872_23898 = state_23862__$1;
(statearr_23872_23898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (9))){
var state_23862__$1 = state_23862;
var statearr_23873_23899 = state_23862__$1;
(statearr_23873_23899[(2)] = null);

(statearr_23873_23899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (5))){
var state_23862__$1 = state_23862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23874_23900 = state_23862__$1;
(statearr_23874_23900[(1)] = (8));

} else {
var statearr_23875_23901 = state_23862__$1;
(statearr_23875_23901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (14))){
var inst_23856 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
var statearr_23876_23902 = state_23862__$1;
(statearr_23876_23902[(2)] = inst_23856);

(statearr_23876_23902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (10))){
var inst_23848 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
var statearr_23877_23903 = state_23862__$1;
(statearr_23877_23903[(2)] = inst_23848);

(statearr_23877_23903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (8))){
var inst_23845 = cljs.core.async.close_BANG_.call(null,to);
var state_23862__$1 = state_23862;
var statearr_23878_23904 = state_23862__$1;
(statearr_23878_23904[(2)] = inst_23845);

(statearr_23878_23904[(1)] = (10));


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
});})(c__19380__auto___23890))
;
return ((function (switch__19359__auto__,c__19380__auto___23890){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_23882 = [null,null,null,null,null,null,null,null];
(statearr_23882[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_23882[(1)] = (1));

return statearr_23882;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_23862){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_23862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e23883){if((e23883 instanceof Object)){
var ex__19363__auto__ = e23883;
var statearr_23884_23905 = state_23862;
(statearr_23884_23905[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23906 = state_23862;
state_23862 = G__23906;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_23862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_23862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___23890))
})();
var state__19382__auto__ = (function (){var statearr_23885 = f__19381__auto__.call(null);
(statearr_23885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___23890);

return statearr_23885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___23890))
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
return (function (p__24090){
var vec__24091 = p__24090;
var v = cljs.core.nth.call(null,vec__24091,(0),null);
var p = cljs.core.nth.call(null,vec__24091,(1),null);
var job = vec__24091;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19380__auto___24273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___24273,res,vec__24091,v,p,job,jobs,results){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___24273,res,vec__24091,v,p,job,jobs,results){
return (function (state_24096){
var state_val_24097 = (state_24096[(1)]);
if((state_val_24097 === (1))){
var state_24096__$1 = state_24096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24096__$1,(2),res,v);
} else {
if((state_val_24097 === (2))){
var inst_24093 = (state_24096[(2)]);
var inst_24094 = cljs.core.async.close_BANG_.call(null,res);
var state_24096__$1 = (function (){var statearr_24098 = state_24096;
(statearr_24098[(7)] = inst_24093);

return statearr_24098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24096__$1,inst_24094);
} else {
return null;
}
}
});})(c__19380__auto___24273,res,vec__24091,v,p,job,jobs,results))
;
return ((function (switch__19359__auto__,c__19380__auto___24273,res,vec__24091,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_24102 = [null,null,null,null,null,null,null,null];
(statearr_24102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_24102[(1)] = (1));

return statearr_24102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_24096){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_24096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e24103){if((e24103 instanceof Object)){
var ex__19363__auto__ = e24103;
var statearr_24104_24274 = state_24096;
(statearr_24104_24274[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24275 = state_24096;
state_24096 = G__24275;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_24096){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_24096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___24273,res,vec__24091,v,p,job,jobs,results))
})();
var state__19382__auto__ = (function (){var statearr_24105 = f__19381__auto__.call(null);
(statearr_24105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___24273);

return statearr_24105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___24273,res,vec__24091,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24106){
var vec__24107 = p__24106;
var v = cljs.core.nth.call(null,vec__24107,(0),null);
var p = cljs.core.nth.call(null,vec__24107,(1),null);
var job = vec__24107;
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
var n__17261__auto___24276 = n;
var __24277 = (0);
while(true){
if((__24277 < n__17261__auto___24276)){
var G__24108_24278 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24108_24278) {
case "compute":
var c__19380__auto___24280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24277,c__19380__auto___24280,G__24108_24278,n__17261__auto___24276,jobs,results,process,async){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (__24277,c__19380__auto___24280,G__24108_24278,n__17261__auto___24276,jobs,results,process,async){
return (function (state_24121){
var state_val_24122 = (state_24121[(1)]);
if((state_val_24122 === (1))){
var state_24121__$1 = state_24121;
var statearr_24123_24281 = state_24121__$1;
(statearr_24123_24281[(2)] = null);

(statearr_24123_24281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24122 === (2))){
var state_24121__$1 = state_24121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24121__$1,(4),jobs);
} else {
if((state_val_24122 === (3))){
var inst_24119 = (state_24121[(2)]);
var state_24121__$1 = state_24121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24121__$1,inst_24119);
} else {
if((state_val_24122 === (4))){
var inst_24111 = (state_24121[(2)]);
var inst_24112 = process.call(null,inst_24111);
var state_24121__$1 = state_24121;
if(cljs.core.truth_(inst_24112)){
var statearr_24124_24282 = state_24121__$1;
(statearr_24124_24282[(1)] = (5));

} else {
var statearr_24125_24283 = state_24121__$1;
(statearr_24125_24283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24122 === (5))){
var state_24121__$1 = state_24121;
var statearr_24126_24284 = state_24121__$1;
(statearr_24126_24284[(2)] = null);

(statearr_24126_24284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24122 === (6))){
var state_24121__$1 = state_24121;
var statearr_24127_24285 = state_24121__$1;
(statearr_24127_24285[(2)] = null);

(statearr_24127_24285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24122 === (7))){
var inst_24117 = (state_24121[(2)]);
var state_24121__$1 = state_24121;
var statearr_24128_24286 = state_24121__$1;
(statearr_24128_24286[(2)] = inst_24117);

(statearr_24128_24286[(1)] = (3));


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
});})(__24277,c__19380__auto___24280,G__24108_24278,n__17261__auto___24276,jobs,results,process,async))
;
return ((function (__24277,switch__19359__auto__,c__19380__auto___24280,G__24108_24278,n__17261__auto___24276,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_24132 = [null,null,null,null,null,null,null];
(statearr_24132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_24132[(1)] = (1));

return statearr_24132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_24121){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_24121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e24133){if((e24133 instanceof Object)){
var ex__19363__auto__ = e24133;
var statearr_24134_24287 = state_24121;
(statearr_24134_24287[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24288 = state_24121;
state_24121 = G__24288;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_24121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_24121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(__24277,switch__19359__auto__,c__19380__auto___24280,G__24108_24278,n__17261__auto___24276,jobs,results,process,async))
})();
var state__19382__auto__ = (function (){var statearr_24135 = f__19381__auto__.call(null);
(statearr_24135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___24280);

return statearr_24135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(__24277,c__19380__auto___24280,G__24108_24278,n__17261__auto___24276,jobs,results,process,async))
);


break;
case "async":
var c__19380__auto___24289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24277,c__19380__auto___24289,G__24108_24278,n__17261__auto___24276,jobs,results,process,async){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (__24277,c__19380__auto___24289,G__24108_24278,n__17261__auto___24276,jobs,results,process,async){
return (function (state_24148){
var state_val_24149 = (state_24148[(1)]);
if((state_val_24149 === (1))){
var state_24148__$1 = state_24148;
var statearr_24150_24290 = state_24148__$1;
(statearr_24150_24290[(2)] = null);

(statearr_24150_24290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (2))){
var state_24148__$1 = state_24148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24148__$1,(4),jobs);
} else {
if((state_val_24149 === (3))){
var inst_24146 = (state_24148[(2)]);
var state_24148__$1 = state_24148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24148__$1,inst_24146);
} else {
if((state_val_24149 === (4))){
var inst_24138 = (state_24148[(2)]);
var inst_24139 = async.call(null,inst_24138);
var state_24148__$1 = state_24148;
if(cljs.core.truth_(inst_24139)){
var statearr_24151_24291 = state_24148__$1;
(statearr_24151_24291[(1)] = (5));

} else {
var statearr_24152_24292 = state_24148__$1;
(statearr_24152_24292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (5))){
var state_24148__$1 = state_24148;
var statearr_24153_24293 = state_24148__$1;
(statearr_24153_24293[(2)] = null);

(statearr_24153_24293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (6))){
var state_24148__$1 = state_24148;
var statearr_24154_24294 = state_24148__$1;
(statearr_24154_24294[(2)] = null);

(statearr_24154_24294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24149 === (7))){
var inst_24144 = (state_24148[(2)]);
var state_24148__$1 = state_24148;
var statearr_24155_24295 = state_24148__$1;
(statearr_24155_24295[(2)] = inst_24144);

(statearr_24155_24295[(1)] = (3));


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
});})(__24277,c__19380__auto___24289,G__24108_24278,n__17261__auto___24276,jobs,results,process,async))
;
return ((function (__24277,switch__19359__auto__,c__19380__auto___24289,G__24108_24278,n__17261__auto___24276,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_24159 = [null,null,null,null,null,null,null];
(statearr_24159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_24159[(1)] = (1));

return statearr_24159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_24148){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_24148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e24160){if((e24160 instanceof Object)){
var ex__19363__auto__ = e24160;
var statearr_24161_24296 = state_24148;
(statearr_24161_24296[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24297 = state_24148;
state_24148 = G__24297;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_24148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_24148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(__24277,switch__19359__auto__,c__19380__auto___24289,G__24108_24278,n__17261__auto___24276,jobs,results,process,async))
})();
var state__19382__auto__ = (function (){var statearr_24162 = f__19381__auto__.call(null);
(statearr_24162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___24289);

return statearr_24162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(__24277,c__19380__auto___24289,G__24108_24278,n__17261__auto___24276,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24298 = (__24277 + (1));
__24277 = G__24298;
continue;
} else {
}
break;
}

var c__19380__auto___24299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___24299,jobs,results,process,async){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___24299,jobs,results,process,async){
return (function (state_24184){
var state_val_24185 = (state_24184[(1)]);
if((state_val_24185 === (1))){
var state_24184__$1 = state_24184;
var statearr_24186_24300 = state_24184__$1;
(statearr_24186_24300[(2)] = null);

(statearr_24186_24300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24185 === (2))){
var state_24184__$1 = state_24184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24184__$1,(4),from);
} else {
if((state_val_24185 === (3))){
var inst_24182 = (state_24184[(2)]);
var state_24184__$1 = state_24184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24184__$1,inst_24182);
} else {
if((state_val_24185 === (4))){
var inst_24165 = (state_24184[(7)]);
var inst_24165__$1 = (state_24184[(2)]);
var inst_24166 = (inst_24165__$1 == null);
var state_24184__$1 = (function (){var statearr_24187 = state_24184;
(statearr_24187[(7)] = inst_24165__$1);

return statearr_24187;
})();
if(cljs.core.truth_(inst_24166)){
var statearr_24188_24301 = state_24184__$1;
(statearr_24188_24301[(1)] = (5));

} else {
var statearr_24189_24302 = state_24184__$1;
(statearr_24189_24302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24185 === (5))){
var inst_24168 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24184__$1 = state_24184;
var statearr_24190_24303 = state_24184__$1;
(statearr_24190_24303[(2)] = inst_24168);

(statearr_24190_24303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24185 === (6))){
var inst_24165 = (state_24184[(7)]);
var inst_24170 = (state_24184[(8)]);
var inst_24170__$1 = cljs.core.async.chan.call(null,(1));
var inst_24171 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24172 = [inst_24165,inst_24170__$1];
var inst_24173 = (new cljs.core.PersistentVector(null,2,(5),inst_24171,inst_24172,null));
var state_24184__$1 = (function (){var statearr_24191 = state_24184;
(statearr_24191[(8)] = inst_24170__$1);

return statearr_24191;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24184__$1,(8),jobs,inst_24173);
} else {
if((state_val_24185 === (7))){
var inst_24180 = (state_24184[(2)]);
var state_24184__$1 = state_24184;
var statearr_24192_24304 = state_24184__$1;
(statearr_24192_24304[(2)] = inst_24180);

(statearr_24192_24304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24185 === (8))){
var inst_24170 = (state_24184[(8)]);
var inst_24175 = (state_24184[(2)]);
var state_24184__$1 = (function (){var statearr_24193 = state_24184;
(statearr_24193[(9)] = inst_24175);

return statearr_24193;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24184__$1,(9),results,inst_24170);
} else {
if((state_val_24185 === (9))){
var inst_24177 = (state_24184[(2)]);
var state_24184__$1 = (function (){var statearr_24194 = state_24184;
(statearr_24194[(10)] = inst_24177);

return statearr_24194;
})();
var statearr_24195_24305 = state_24184__$1;
(statearr_24195_24305[(2)] = null);

(statearr_24195_24305[(1)] = (2));


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
});})(c__19380__auto___24299,jobs,results,process,async))
;
return ((function (switch__19359__auto__,c__19380__auto___24299,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_24199 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_24199[(1)] = (1));

return statearr_24199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_24184){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_24184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e24200){if((e24200 instanceof Object)){
var ex__19363__auto__ = e24200;
var statearr_24201_24306 = state_24184;
(statearr_24201_24306[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24307 = state_24184;
state_24184 = G__24307;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_24184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_24184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___24299,jobs,results,process,async))
})();
var state__19382__auto__ = (function (){var statearr_24202 = f__19381__auto__.call(null);
(statearr_24202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___24299);

return statearr_24202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___24299,jobs,results,process,async))
);


var c__19380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto__,jobs,results,process,async){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto__,jobs,results,process,async){
return (function (state_24240){
var state_val_24241 = (state_24240[(1)]);
if((state_val_24241 === (7))){
var inst_24236 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24242_24308 = state_24240__$1;
(statearr_24242_24308[(2)] = inst_24236);

(statearr_24242_24308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (20))){
var state_24240__$1 = state_24240;
var statearr_24243_24309 = state_24240__$1;
(statearr_24243_24309[(2)] = null);

(statearr_24243_24309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (1))){
var state_24240__$1 = state_24240;
var statearr_24244_24310 = state_24240__$1;
(statearr_24244_24310[(2)] = null);

(statearr_24244_24310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (4))){
var inst_24205 = (state_24240[(7)]);
var inst_24205__$1 = (state_24240[(2)]);
var inst_24206 = (inst_24205__$1 == null);
var state_24240__$1 = (function (){var statearr_24245 = state_24240;
(statearr_24245[(7)] = inst_24205__$1);

return statearr_24245;
})();
if(cljs.core.truth_(inst_24206)){
var statearr_24246_24311 = state_24240__$1;
(statearr_24246_24311[(1)] = (5));

} else {
var statearr_24247_24312 = state_24240__$1;
(statearr_24247_24312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (15))){
var inst_24218 = (state_24240[(8)]);
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24240__$1,(18),to,inst_24218);
} else {
if((state_val_24241 === (21))){
var inst_24231 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24248_24313 = state_24240__$1;
(statearr_24248_24313[(2)] = inst_24231);

(statearr_24248_24313[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (13))){
var inst_24233 = (state_24240[(2)]);
var state_24240__$1 = (function (){var statearr_24249 = state_24240;
(statearr_24249[(9)] = inst_24233);

return statearr_24249;
})();
var statearr_24250_24314 = state_24240__$1;
(statearr_24250_24314[(2)] = null);

(statearr_24250_24314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (6))){
var inst_24205 = (state_24240[(7)]);
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24240__$1,(11),inst_24205);
} else {
if((state_val_24241 === (17))){
var inst_24226 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
if(cljs.core.truth_(inst_24226)){
var statearr_24251_24315 = state_24240__$1;
(statearr_24251_24315[(1)] = (19));

} else {
var statearr_24252_24316 = state_24240__$1;
(statearr_24252_24316[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (3))){
var inst_24238 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24240__$1,inst_24238);
} else {
if((state_val_24241 === (12))){
var inst_24215 = (state_24240[(10)]);
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24240__$1,(14),inst_24215);
} else {
if((state_val_24241 === (2))){
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24240__$1,(4),results);
} else {
if((state_val_24241 === (19))){
var state_24240__$1 = state_24240;
var statearr_24253_24317 = state_24240__$1;
(statearr_24253_24317[(2)] = null);

(statearr_24253_24317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (11))){
var inst_24215 = (state_24240[(2)]);
var state_24240__$1 = (function (){var statearr_24254 = state_24240;
(statearr_24254[(10)] = inst_24215);

return statearr_24254;
})();
var statearr_24255_24318 = state_24240__$1;
(statearr_24255_24318[(2)] = null);

(statearr_24255_24318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (9))){
var state_24240__$1 = state_24240;
var statearr_24256_24319 = state_24240__$1;
(statearr_24256_24319[(2)] = null);

(statearr_24256_24319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (5))){
var state_24240__$1 = state_24240;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24257_24320 = state_24240__$1;
(statearr_24257_24320[(1)] = (8));

} else {
var statearr_24258_24321 = state_24240__$1;
(statearr_24258_24321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (14))){
var inst_24220 = (state_24240[(11)]);
var inst_24218 = (state_24240[(8)]);
var inst_24218__$1 = (state_24240[(2)]);
var inst_24219 = (inst_24218__$1 == null);
var inst_24220__$1 = cljs.core.not.call(null,inst_24219);
var state_24240__$1 = (function (){var statearr_24259 = state_24240;
(statearr_24259[(11)] = inst_24220__$1);

(statearr_24259[(8)] = inst_24218__$1);

return statearr_24259;
})();
if(inst_24220__$1){
var statearr_24260_24322 = state_24240__$1;
(statearr_24260_24322[(1)] = (15));

} else {
var statearr_24261_24323 = state_24240__$1;
(statearr_24261_24323[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (16))){
var inst_24220 = (state_24240[(11)]);
var state_24240__$1 = state_24240;
var statearr_24262_24324 = state_24240__$1;
(statearr_24262_24324[(2)] = inst_24220);

(statearr_24262_24324[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (10))){
var inst_24212 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24263_24325 = state_24240__$1;
(statearr_24263_24325[(2)] = inst_24212);

(statearr_24263_24325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (18))){
var inst_24223 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24264_24326 = state_24240__$1;
(statearr_24264_24326[(2)] = inst_24223);

(statearr_24264_24326[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (8))){
var inst_24209 = cljs.core.async.close_BANG_.call(null,to);
var state_24240__$1 = state_24240;
var statearr_24265_24327 = state_24240__$1;
(statearr_24265_24327[(2)] = inst_24209);

(statearr_24265_24327[(1)] = (10));


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
});})(c__19380__auto__,jobs,results,process,async))
;
return ((function (switch__19359__auto__,c__19380__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_24269 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__);

(statearr_24269[(1)] = (1));

return statearr_24269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1 = (function (state_24240){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_24240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e24270){if((e24270 instanceof Object)){
var ex__19363__auto__ = e24270;
var statearr_24271_24328 = state_24240;
(statearr_24271_24328[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24329 = state_24240;
state_24240 = G__24329;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__ = function(state_24240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1.call(this,state_24240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto__,jobs,results,process,async))
})();
var state__19382__auto__ = (function (){var statearr_24272 = f__19381__auto__.call(null);
(statearr_24272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto__);

return statearr_24272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto__,jobs,results,process,async))
);

return c__19380__auto__;
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
var args24330 = [];
var len__17416__auto___24333 = arguments.length;
var i__17417__auto___24334 = (0);
while(true){
if((i__17417__auto___24334 < len__17416__auto___24333)){
args24330.push((arguments[i__17417__auto___24334]));

var G__24335 = (i__17417__auto___24334 + (1));
i__17417__auto___24334 = G__24335;
continue;
} else {
}
break;
}

var G__24332 = args24330.length;
switch (G__24332) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24330.length)].join('')));

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
var args24337 = [];
var len__17416__auto___24340 = arguments.length;
var i__17417__auto___24341 = (0);
while(true){
if((i__17417__auto___24341 < len__17416__auto___24340)){
args24337.push((arguments[i__17417__auto___24341]));

var G__24342 = (i__17417__auto___24341 + (1));
i__17417__auto___24341 = G__24342;
continue;
} else {
}
break;
}

var G__24339 = args24337.length;
switch (G__24339) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24337.length)].join('')));

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
var args24344 = [];
var len__17416__auto___24397 = arguments.length;
var i__17417__auto___24398 = (0);
while(true){
if((i__17417__auto___24398 < len__17416__auto___24397)){
args24344.push((arguments[i__17417__auto___24398]));

var G__24399 = (i__17417__auto___24398 + (1));
i__17417__auto___24398 = G__24399;
continue;
} else {
}
break;
}

var G__24346 = args24344.length;
switch (G__24346) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24344.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19380__auto___24401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___24401,tc,fc){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___24401,tc,fc){
return (function (state_24372){
var state_val_24373 = (state_24372[(1)]);
if((state_val_24373 === (7))){
var inst_24368 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
var statearr_24374_24402 = state_24372__$1;
(statearr_24374_24402[(2)] = inst_24368);

(statearr_24374_24402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (1))){
var state_24372__$1 = state_24372;
var statearr_24375_24403 = state_24372__$1;
(statearr_24375_24403[(2)] = null);

(statearr_24375_24403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (4))){
var inst_24349 = (state_24372[(7)]);
var inst_24349__$1 = (state_24372[(2)]);
var inst_24350 = (inst_24349__$1 == null);
var state_24372__$1 = (function (){var statearr_24376 = state_24372;
(statearr_24376[(7)] = inst_24349__$1);

return statearr_24376;
})();
if(cljs.core.truth_(inst_24350)){
var statearr_24377_24404 = state_24372__$1;
(statearr_24377_24404[(1)] = (5));

} else {
var statearr_24378_24405 = state_24372__$1;
(statearr_24378_24405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (13))){
var state_24372__$1 = state_24372;
var statearr_24379_24406 = state_24372__$1;
(statearr_24379_24406[(2)] = null);

(statearr_24379_24406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (6))){
var inst_24349 = (state_24372[(7)]);
var inst_24355 = p.call(null,inst_24349);
var state_24372__$1 = state_24372;
if(cljs.core.truth_(inst_24355)){
var statearr_24380_24407 = state_24372__$1;
(statearr_24380_24407[(1)] = (9));

} else {
var statearr_24381_24408 = state_24372__$1;
(statearr_24381_24408[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (3))){
var inst_24370 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24372__$1,inst_24370);
} else {
if((state_val_24373 === (12))){
var state_24372__$1 = state_24372;
var statearr_24382_24409 = state_24372__$1;
(statearr_24382_24409[(2)] = null);

(statearr_24382_24409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (2))){
var state_24372__$1 = state_24372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24372__$1,(4),ch);
} else {
if((state_val_24373 === (11))){
var inst_24349 = (state_24372[(7)]);
var inst_24359 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24372__$1,(8),inst_24359,inst_24349);
} else {
if((state_val_24373 === (9))){
var state_24372__$1 = state_24372;
var statearr_24383_24410 = state_24372__$1;
(statearr_24383_24410[(2)] = tc);

(statearr_24383_24410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (5))){
var inst_24352 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24353 = cljs.core.async.close_BANG_.call(null,fc);
var state_24372__$1 = (function (){var statearr_24384 = state_24372;
(statearr_24384[(8)] = inst_24352);

return statearr_24384;
})();
var statearr_24385_24411 = state_24372__$1;
(statearr_24385_24411[(2)] = inst_24353);

(statearr_24385_24411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (14))){
var inst_24366 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
var statearr_24386_24412 = state_24372__$1;
(statearr_24386_24412[(2)] = inst_24366);

(statearr_24386_24412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (10))){
var state_24372__$1 = state_24372;
var statearr_24387_24413 = state_24372__$1;
(statearr_24387_24413[(2)] = fc);

(statearr_24387_24413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (8))){
var inst_24361 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
if(cljs.core.truth_(inst_24361)){
var statearr_24388_24414 = state_24372__$1;
(statearr_24388_24414[(1)] = (12));

} else {
var statearr_24389_24415 = state_24372__$1;
(statearr_24389_24415[(1)] = (13));

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
});})(c__19380__auto___24401,tc,fc))
;
return ((function (switch__19359__auto__,c__19380__auto___24401,tc,fc){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_24393 = [null,null,null,null,null,null,null,null,null];
(statearr_24393[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_24393[(1)] = (1));

return statearr_24393;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_24372){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_24372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e24394){if((e24394 instanceof Object)){
var ex__19363__auto__ = e24394;
var statearr_24395_24416 = state_24372;
(statearr_24395_24416[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24417 = state_24372;
state_24372 = G__24417;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_24372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_24372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___24401,tc,fc))
})();
var state__19382__auto__ = (function (){var statearr_24396 = f__19381__auto__.call(null);
(statearr_24396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___24401);

return statearr_24396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___24401,tc,fc))
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
var c__19380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto__){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto__){
return (function (state_24464){
var state_val_24465 = (state_24464[(1)]);
if((state_val_24465 === (1))){
var inst_24450 = init;
var state_24464__$1 = (function (){var statearr_24466 = state_24464;
(statearr_24466[(7)] = inst_24450);

return statearr_24466;
})();
var statearr_24467_24482 = state_24464__$1;
(statearr_24467_24482[(2)] = null);

(statearr_24467_24482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (2))){
var state_24464__$1 = state_24464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24464__$1,(4),ch);
} else {
if((state_val_24465 === (3))){
var inst_24462 = (state_24464[(2)]);
var state_24464__$1 = state_24464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24464__$1,inst_24462);
} else {
if((state_val_24465 === (4))){
var inst_24453 = (state_24464[(8)]);
var inst_24453__$1 = (state_24464[(2)]);
var inst_24454 = (inst_24453__$1 == null);
var state_24464__$1 = (function (){var statearr_24468 = state_24464;
(statearr_24468[(8)] = inst_24453__$1);

return statearr_24468;
})();
if(cljs.core.truth_(inst_24454)){
var statearr_24469_24483 = state_24464__$1;
(statearr_24469_24483[(1)] = (5));

} else {
var statearr_24470_24484 = state_24464__$1;
(statearr_24470_24484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (5))){
var inst_24450 = (state_24464[(7)]);
var state_24464__$1 = state_24464;
var statearr_24471_24485 = state_24464__$1;
(statearr_24471_24485[(2)] = inst_24450);

(statearr_24471_24485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (6))){
var inst_24450 = (state_24464[(7)]);
var inst_24453 = (state_24464[(8)]);
var inst_24457 = f.call(null,inst_24450,inst_24453);
var inst_24450__$1 = inst_24457;
var state_24464__$1 = (function (){var statearr_24472 = state_24464;
(statearr_24472[(7)] = inst_24450__$1);

return statearr_24472;
})();
var statearr_24473_24486 = state_24464__$1;
(statearr_24473_24486[(2)] = null);

(statearr_24473_24486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (7))){
var inst_24460 = (state_24464[(2)]);
var state_24464__$1 = state_24464;
var statearr_24474_24487 = state_24464__$1;
(statearr_24474_24487[(2)] = inst_24460);

(statearr_24474_24487[(1)] = (3));


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
});})(c__19380__auto__))
;
return ((function (switch__19359__auto__,c__19380__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19360__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19360__auto____0 = (function (){
var statearr_24478 = [null,null,null,null,null,null,null,null,null];
(statearr_24478[(0)] = cljs$core$async$reduce_$_state_machine__19360__auto__);

(statearr_24478[(1)] = (1));

return statearr_24478;
});
var cljs$core$async$reduce_$_state_machine__19360__auto____1 = (function (state_24464){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_24464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e24479){if((e24479 instanceof Object)){
var ex__19363__auto__ = e24479;
var statearr_24480_24488 = state_24464;
(statearr_24480_24488[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24489 = state_24464;
state_24464 = G__24489;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19360__auto__ = function(state_24464){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19360__auto____1.call(this,state_24464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19360__auto____0;
cljs$core$async$reduce_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19360__auto____1;
return cljs$core$async$reduce_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto__))
})();
var state__19382__auto__ = (function (){var statearr_24481 = f__19381__auto__.call(null);
(statearr_24481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto__);

return statearr_24481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto__))
);

return c__19380__auto__;
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
var args24490 = [];
var len__17416__auto___24542 = arguments.length;
var i__17417__auto___24543 = (0);
while(true){
if((i__17417__auto___24543 < len__17416__auto___24542)){
args24490.push((arguments[i__17417__auto___24543]));

var G__24544 = (i__17417__auto___24543 + (1));
i__17417__auto___24543 = G__24544;
continue;
} else {
}
break;
}

var G__24492 = args24490.length;
switch (G__24492) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24490.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto__){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto__){
return (function (state_24517){
var state_val_24518 = (state_24517[(1)]);
if((state_val_24518 === (7))){
var inst_24499 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24519_24546 = state_24517__$1;
(statearr_24519_24546[(2)] = inst_24499);

(statearr_24519_24546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (1))){
var inst_24493 = cljs.core.seq.call(null,coll);
var inst_24494 = inst_24493;
var state_24517__$1 = (function (){var statearr_24520 = state_24517;
(statearr_24520[(7)] = inst_24494);

return statearr_24520;
})();
var statearr_24521_24547 = state_24517__$1;
(statearr_24521_24547[(2)] = null);

(statearr_24521_24547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (4))){
var inst_24494 = (state_24517[(7)]);
var inst_24497 = cljs.core.first.call(null,inst_24494);
var state_24517__$1 = state_24517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24517__$1,(7),ch,inst_24497);
} else {
if((state_val_24518 === (13))){
var inst_24511 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24522_24548 = state_24517__$1;
(statearr_24522_24548[(2)] = inst_24511);

(statearr_24522_24548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (6))){
var inst_24502 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
if(cljs.core.truth_(inst_24502)){
var statearr_24523_24549 = state_24517__$1;
(statearr_24523_24549[(1)] = (8));

} else {
var statearr_24524_24550 = state_24517__$1;
(statearr_24524_24550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (3))){
var inst_24515 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24517__$1,inst_24515);
} else {
if((state_val_24518 === (12))){
var state_24517__$1 = state_24517;
var statearr_24525_24551 = state_24517__$1;
(statearr_24525_24551[(2)] = null);

(statearr_24525_24551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (2))){
var inst_24494 = (state_24517[(7)]);
var state_24517__$1 = state_24517;
if(cljs.core.truth_(inst_24494)){
var statearr_24526_24552 = state_24517__$1;
(statearr_24526_24552[(1)] = (4));

} else {
var statearr_24527_24553 = state_24517__$1;
(statearr_24527_24553[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (11))){
var inst_24508 = cljs.core.async.close_BANG_.call(null,ch);
var state_24517__$1 = state_24517;
var statearr_24528_24554 = state_24517__$1;
(statearr_24528_24554[(2)] = inst_24508);

(statearr_24528_24554[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (9))){
var state_24517__$1 = state_24517;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24529_24555 = state_24517__$1;
(statearr_24529_24555[(1)] = (11));

} else {
var statearr_24530_24556 = state_24517__$1;
(statearr_24530_24556[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (5))){
var inst_24494 = (state_24517[(7)]);
var state_24517__$1 = state_24517;
var statearr_24531_24557 = state_24517__$1;
(statearr_24531_24557[(2)] = inst_24494);

(statearr_24531_24557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (10))){
var inst_24513 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24532_24558 = state_24517__$1;
(statearr_24532_24558[(2)] = inst_24513);

(statearr_24532_24558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (8))){
var inst_24494 = (state_24517[(7)]);
var inst_24504 = cljs.core.next.call(null,inst_24494);
var inst_24494__$1 = inst_24504;
var state_24517__$1 = (function (){var statearr_24533 = state_24517;
(statearr_24533[(7)] = inst_24494__$1);

return statearr_24533;
})();
var statearr_24534_24559 = state_24517__$1;
(statearr_24534_24559[(2)] = null);

(statearr_24534_24559[(1)] = (2));


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
});})(c__19380__auto__))
;
return ((function (switch__19359__auto__,c__19380__auto__){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_24538 = [null,null,null,null,null,null,null,null];
(statearr_24538[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_24538[(1)] = (1));

return statearr_24538;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_24517){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_24517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e24539){if((e24539 instanceof Object)){
var ex__19363__auto__ = e24539;
var statearr_24540_24560 = state_24517;
(statearr_24540_24560[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24561 = state_24517;
state_24517 = G__24561;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_24517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_24517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto__))
})();
var state__19382__auto__ = (function (){var statearr_24541 = f__19381__auto__.call(null);
(statearr_24541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto__);

return statearr_24541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto__))
);

return c__19380__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async24783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24783 = (function (mult,ch,cs,meta24784){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24784 = meta24784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24785,meta24784__$1){
var self__ = this;
var _24785__$1 = this;
return (new cljs.core.async.t_cljs$core$async24783(self__.mult,self__.ch,self__.cs,meta24784__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24785){
var self__ = this;
var _24785__$1 = this;
return self__.meta24784;
});})(cs))
;

cljs.core.async.t_cljs$core$async24783.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24783.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24783.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24783.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24783.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24783.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24784","meta24784",828576140,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24783";

cljs.core.async.t_cljs$core$async24783.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async24783");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24783 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24783(mult__$1,ch__$1,cs__$1,meta24784){
return (new cljs.core.async.t_cljs$core$async24783(mult__$1,ch__$1,cs__$1,meta24784));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24783(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19380__auto___25004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___25004,cs,m,dchan,dctr,done){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___25004,cs,m,dchan,dctr,done){
return (function (state_24916){
var state_val_24917 = (state_24916[(1)]);
if((state_val_24917 === (7))){
var inst_24912 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
var statearr_24918_25005 = state_24916__$1;
(statearr_24918_25005[(2)] = inst_24912);

(statearr_24918_25005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (20))){
var inst_24817 = (state_24916[(7)]);
var inst_24827 = cljs.core.first.call(null,inst_24817);
var inst_24828 = cljs.core.nth.call(null,inst_24827,(0),null);
var inst_24829 = cljs.core.nth.call(null,inst_24827,(1),null);
var state_24916__$1 = (function (){var statearr_24919 = state_24916;
(statearr_24919[(8)] = inst_24828);

return statearr_24919;
})();
if(cljs.core.truth_(inst_24829)){
var statearr_24920_25006 = state_24916__$1;
(statearr_24920_25006[(1)] = (22));

} else {
var statearr_24921_25007 = state_24916__$1;
(statearr_24921_25007[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (27))){
var inst_24788 = (state_24916[(9)]);
var inst_24859 = (state_24916[(10)]);
var inst_24864 = (state_24916[(11)]);
var inst_24857 = (state_24916[(12)]);
var inst_24864__$1 = cljs.core._nth.call(null,inst_24857,inst_24859);
var inst_24865 = cljs.core.async.put_BANG_.call(null,inst_24864__$1,inst_24788,done);
var state_24916__$1 = (function (){var statearr_24922 = state_24916;
(statearr_24922[(11)] = inst_24864__$1);

return statearr_24922;
})();
if(cljs.core.truth_(inst_24865)){
var statearr_24923_25008 = state_24916__$1;
(statearr_24923_25008[(1)] = (30));

} else {
var statearr_24924_25009 = state_24916__$1;
(statearr_24924_25009[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (1))){
var state_24916__$1 = state_24916;
var statearr_24925_25010 = state_24916__$1;
(statearr_24925_25010[(2)] = null);

(statearr_24925_25010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (24))){
var inst_24817 = (state_24916[(7)]);
var inst_24834 = (state_24916[(2)]);
var inst_24835 = cljs.core.next.call(null,inst_24817);
var inst_24797 = inst_24835;
var inst_24798 = null;
var inst_24799 = (0);
var inst_24800 = (0);
var state_24916__$1 = (function (){var statearr_24926 = state_24916;
(statearr_24926[(13)] = inst_24797);

(statearr_24926[(14)] = inst_24800);

(statearr_24926[(15)] = inst_24799);

(statearr_24926[(16)] = inst_24834);

(statearr_24926[(17)] = inst_24798);

return statearr_24926;
})();
var statearr_24927_25011 = state_24916__$1;
(statearr_24927_25011[(2)] = null);

(statearr_24927_25011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (39))){
var state_24916__$1 = state_24916;
var statearr_24931_25012 = state_24916__$1;
(statearr_24931_25012[(2)] = null);

(statearr_24931_25012[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (4))){
var inst_24788 = (state_24916[(9)]);
var inst_24788__$1 = (state_24916[(2)]);
var inst_24789 = (inst_24788__$1 == null);
var state_24916__$1 = (function (){var statearr_24932 = state_24916;
(statearr_24932[(9)] = inst_24788__$1);

return statearr_24932;
})();
if(cljs.core.truth_(inst_24789)){
var statearr_24933_25013 = state_24916__$1;
(statearr_24933_25013[(1)] = (5));

} else {
var statearr_24934_25014 = state_24916__$1;
(statearr_24934_25014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (15))){
var inst_24797 = (state_24916[(13)]);
var inst_24800 = (state_24916[(14)]);
var inst_24799 = (state_24916[(15)]);
var inst_24798 = (state_24916[(17)]);
var inst_24813 = (state_24916[(2)]);
var inst_24814 = (inst_24800 + (1));
var tmp24928 = inst_24797;
var tmp24929 = inst_24799;
var tmp24930 = inst_24798;
var inst_24797__$1 = tmp24928;
var inst_24798__$1 = tmp24930;
var inst_24799__$1 = tmp24929;
var inst_24800__$1 = inst_24814;
var state_24916__$1 = (function (){var statearr_24935 = state_24916;
(statearr_24935[(18)] = inst_24813);

(statearr_24935[(13)] = inst_24797__$1);

(statearr_24935[(14)] = inst_24800__$1);

(statearr_24935[(15)] = inst_24799__$1);

(statearr_24935[(17)] = inst_24798__$1);

return statearr_24935;
})();
var statearr_24936_25015 = state_24916__$1;
(statearr_24936_25015[(2)] = null);

(statearr_24936_25015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (21))){
var inst_24838 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
var statearr_24940_25016 = state_24916__$1;
(statearr_24940_25016[(2)] = inst_24838);

(statearr_24940_25016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (31))){
var inst_24864 = (state_24916[(11)]);
var inst_24868 = done.call(null,null);
var inst_24869 = cljs.core.async.untap_STAR_.call(null,m,inst_24864);
var state_24916__$1 = (function (){var statearr_24941 = state_24916;
(statearr_24941[(19)] = inst_24868);

return statearr_24941;
})();
var statearr_24942_25017 = state_24916__$1;
(statearr_24942_25017[(2)] = inst_24869);

(statearr_24942_25017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (32))){
var inst_24858 = (state_24916[(20)]);
var inst_24859 = (state_24916[(10)]);
var inst_24856 = (state_24916[(21)]);
var inst_24857 = (state_24916[(12)]);
var inst_24871 = (state_24916[(2)]);
var inst_24872 = (inst_24859 + (1));
var tmp24937 = inst_24858;
var tmp24938 = inst_24856;
var tmp24939 = inst_24857;
var inst_24856__$1 = tmp24938;
var inst_24857__$1 = tmp24939;
var inst_24858__$1 = tmp24937;
var inst_24859__$1 = inst_24872;
var state_24916__$1 = (function (){var statearr_24943 = state_24916;
(statearr_24943[(20)] = inst_24858__$1);

(statearr_24943[(10)] = inst_24859__$1);

(statearr_24943[(21)] = inst_24856__$1);

(statearr_24943[(12)] = inst_24857__$1);

(statearr_24943[(22)] = inst_24871);

return statearr_24943;
})();
var statearr_24944_25018 = state_24916__$1;
(statearr_24944_25018[(2)] = null);

(statearr_24944_25018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (40))){
var inst_24884 = (state_24916[(23)]);
var inst_24888 = done.call(null,null);
var inst_24889 = cljs.core.async.untap_STAR_.call(null,m,inst_24884);
var state_24916__$1 = (function (){var statearr_24945 = state_24916;
(statearr_24945[(24)] = inst_24888);

return statearr_24945;
})();
var statearr_24946_25019 = state_24916__$1;
(statearr_24946_25019[(2)] = inst_24889);

(statearr_24946_25019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (33))){
var inst_24875 = (state_24916[(25)]);
var inst_24877 = cljs.core.chunked_seq_QMARK_.call(null,inst_24875);
var state_24916__$1 = state_24916;
if(inst_24877){
var statearr_24947_25020 = state_24916__$1;
(statearr_24947_25020[(1)] = (36));

} else {
var statearr_24948_25021 = state_24916__$1;
(statearr_24948_25021[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (13))){
var inst_24807 = (state_24916[(26)]);
var inst_24810 = cljs.core.async.close_BANG_.call(null,inst_24807);
var state_24916__$1 = state_24916;
var statearr_24949_25022 = state_24916__$1;
(statearr_24949_25022[(2)] = inst_24810);

(statearr_24949_25022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (22))){
var inst_24828 = (state_24916[(8)]);
var inst_24831 = cljs.core.async.close_BANG_.call(null,inst_24828);
var state_24916__$1 = state_24916;
var statearr_24950_25023 = state_24916__$1;
(statearr_24950_25023[(2)] = inst_24831);

(statearr_24950_25023[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (36))){
var inst_24875 = (state_24916[(25)]);
var inst_24879 = cljs.core.chunk_first.call(null,inst_24875);
var inst_24880 = cljs.core.chunk_rest.call(null,inst_24875);
var inst_24881 = cljs.core.count.call(null,inst_24879);
var inst_24856 = inst_24880;
var inst_24857 = inst_24879;
var inst_24858 = inst_24881;
var inst_24859 = (0);
var state_24916__$1 = (function (){var statearr_24951 = state_24916;
(statearr_24951[(20)] = inst_24858);

(statearr_24951[(10)] = inst_24859);

(statearr_24951[(21)] = inst_24856);

(statearr_24951[(12)] = inst_24857);

return statearr_24951;
})();
var statearr_24952_25024 = state_24916__$1;
(statearr_24952_25024[(2)] = null);

(statearr_24952_25024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (41))){
var inst_24875 = (state_24916[(25)]);
var inst_24891 = (state_24916[(2)]);
var inst_24892 = cljs.core.next.call(null,inst_24875);
var inst_24856 = inst_24892;
var inst_24857 = null;
var inst_24858 = (0);
var inst_24859 = (0);
var state_24916__$1 = (function (){var statearr_24953 = state_24916;
(statearr_24953[(20)] = inst_24858);

(statearr_24953[(10)] = inst_24859);

(statearr_24953[(27)] = inst_24891);

(statearr_24953[(21)] = inst_24856);

(statearr_24953[(12)] = inst_24857);

return statearr_24953;
})();
var statearr_24954_25025 = state_24916__$1;
(statearr_24954_25025[(2)] = null);

(statearr_24954_25025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (43))){
var state_24916__$1 = state_24916;
var statearr_24955_25026 = state_24916__$1;
(statearr_24955_25026[(2)] = null);

(statearr_24955_25026[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (29))){
var inst_24900 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
var statearr_24956_25027 = state_24916__$1;
(statearr_24956_25027[(2)] = inst_24900);

(statearr_24956_25027[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (44))){
var inst_24909 = (state_24916[(2)]);
var state_24916__$1 = (function (){var statearr_24957 = state_24916;
(statearr_24957[(28)] = inst_24909);

return statearr_24957;
})();
var statearr_24958_25028 = state_24916__$1;
(statearr_24958_25028[(2)] = null);

(statearr_24958_25028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (6))){
var inst_24848 = (state_24916[(29)]);
var inst_24847 = cljs.core.deref.call(null,cs);
var inst_24848__$1 = cljs.core.keys.call(null,inst_24847);
var inst_24849 = cljs.core.count.call(null,inst_24848__$1);
var inst_24850 = cljs.core.reset_BANG_.call(null,dctr,inst_24849);
var inst_24855 = cljs.core.seq.call(null,inst_24848__$1);
var inst_24856 = inst_24855;
var inst_24857 = null;
var inst_24858 = (0);
var inst_24859 = (0);
var state_24916__$1 = (function (){var statearr_24959 = state_24916;
(statearr_24959[(20)] = inst_24858);

(statearr_24959[(10)] = inst_24859);

(statearr_24959[(21)] = inst_24856);

(statearr_24959[(12)] = inst_24857);

(statearr_24959[(29)] = inst_24848__$1);

(statearr_24959[(30)] = inst_24850);

return statearr_24959;
})();
var statearr_24960_25029 = state_24916__$1;
(statearr_24960_25029[(2)] = null);

(statearr_24960_25029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (28))){
var inst_24875 = (state_24916[(25)]);
var inst_24856 = (state_24916[(21)]);
var inst_24875__$1 = cljs.core.seq.call(null,inst_24856);
var state_24916__$1 = (function (){var statearr_24961 = state_24916;
(statearr_24961[(25)] = inst_24875__$1);

return statearr_24961;
})();
if(inst_24875__$1){
var statearr_24962_25030 = state_24916__$1;
(statearr_24962_25030[(1)] = (33));

} else {
var statearr_24963_25031 = state_24916__$1;
(statearr_24963_25031[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (25))){
var inst_24858 = (state_24916[(20)]);
var inst_24859 = (state_24916[(10)]);
var inst_24861 = (inst_24859 < inst_24858);
var inst_24862 = inst_24861;
var state_24916__$1 = state_24916;
if(cljs.core.truth_(inst_24862)){
var statearr_24964_25032 = state_24916__$1;
(statearr_24964_25032[(1)] = (27));

} else {
var statearr_24965_25033 = state_24916__$1;
(statearr_24965_25033[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (34))){
var state_24916__$1 = state_24916;
var statearr_24966_25034 = state_24916__$1;
(statearr_24966_25034[(2)] = null);

(statearr_24966_25034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (17))){
var state_24916__$1 = state_24916;
var statearr_24967_25035 = state_24916__$1;
(statearr_24967_25035[(2)] = null);

(statearr_24967_25035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (3))){
var inst_24914 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24916__$1,inst_24914);
} else {
if((state_val_24917 === (12))){
var inst_24843 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
var statearr_24968_25036 = state_24916__$1;
(statearr_24968_25036[(2)] = inst_24843);

(statearr_24968_25036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (2))){
var state_24916__$1 = state_24916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24916__$1,(4),ch);
} else {
if((state_val_24917 === (23))){
var state_24916__$1 = state_24916;
var statearr_24969_25037 = state_24916__$1;
(statearr_24969_25037[(2)] = null);

(statearr_24969_25037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (35))){
var inst_24898 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
var statearr_24970_25038 = state_24916__$1;
(statearr_24970_25038[(2)] = inst_24898);

(statearr_24970_25038[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (19))){
var inst_24817 = (state_24916[(7)]);
var inst_24821 = cljs.core.chunk_first.call(null,inst_24817);
var inst_24822 = cljs.core.chunk_rest.call(null,inst_24817);
var inst_24823 = cljs.core.count.call(null,inst_24821);
var inst_24797 = inst_24822;
var inst_24798 = inst_24821;
var inst_24799 = inst_24823;
var inst_24800 = (0);
var state_24916__$1 = (function (){var statearr_24971 = state_24916;
(statearr_24971[(13)] = inst_24797);

(statearr_24971[(14)] = inst_24800);

(statearr_24971[(15)] = inst_24799);

(statearr_24971[(17)] = inst_24798);

return statearr_24971;
})();
var statearr_24972_25039 = state_24916__$1;
(statearr_24972_25039[(2)] = null);

(statearr_24972_25039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (11))){
var inst_24797 = (state_24916[(13)]);
var inst_24817 = (state_24916[(7)]);
var inst_24817__$1 = cljs.core.seq.call(null,inst_24797);
var state_24916__$1 = (function (){var statearr_24973 = state_24916;
(statearr_24973[(7)] = inst_24817__$1);

return statearr_24973;
})();
if(inst_24817__$1){
var statearr_24974_25040 = state_24916__$1;
(statearr_24974_25040[(1)] = (16));

} else {
var statearr_24975_25041 = state_24916__$1;
(statearr_24975_25041[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (9))){
var inst_24845 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
var statearr_24976_25042 = state_24916__$1;
(statearr_24976_25042[(2)] = inst_24845);

(statearr_24976_25042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (5))){
var inst_24795 = cljs.core.deref.call(null,cs);
var inst_24796 = cljs.core.seq.call(null,inst_24795);
var inst_24797 = inst_24796;
var inst_24798 = null;
var inst_24799 = (0);
var inst_24800 = (0);
var state_24916__$1 = (function (){var statearr_24977 = state_24916;
(statearr_24977[(13)] = inst_24797);

(statearr_24977[(14)] = inst_24800);

(statearr_24977[(15)] = inst_24799);

(statearr_24977[(17)] = inst_24798);

return statearr_24977;
})();
var statearr_24978_25043 = state_24916__$1;
(statearr_24978_25043[(2)] = null);

(statearr_24978_25043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (14))){
var state_24916__$1 = state_24916;
var statearr_24979_25044 = state_24916__$1;
(statearr_24979_25044[(2)] = null);

(statearr_24979_25044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (45))){
var inst_24906 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
var statearr_24980_25045 = state_24916__$1;
(statearr_24980_25045[(2)] = inst_24906);

(statearr_24980_25045[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (26))){
var inst_24848 = (state_24916[(29)]);
var inst_24902 = (state_24916[(2)]);
var inst_24903 = cljs.core.seq.call(null,inst_24848);
var state_24916__$1 = (function (){var statearr_24981 = state_24916;
(statearr_24981[(31)] = inst_24902);

return statearr_24981;
})();
if(inst_24903){
var statearr_24982_25046 = state_24916__$1;
(statearr_24982_25046[(1)] = (42));

} else {
var statearr_24983_25047 = state_24916__$1;
(statearr_24983_25047[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (16))){
var inst_24817 = (state_24916[(7)]);
var inst_24819 = cljs.core.chunked_seq_QMARK_.call(null,inst_24817);
var state_24916__$1 = state_24916;
if(inst_24819){
var statearr_24984_25048 = state_24916__$1;
(statearr_24984_25048[(1)] = (19));

} else {
var statearr_24985_25049 = state_24916__$1;
(statearr_24985_25049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (38))){
var inst_24895 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
var statearr_24986_25050 = state_24916__$1;
(statearr_24986_25050[(2)] = inst_24895);

(statearr_24986_25050[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (30))){
var state_24916__$1 = state_24916;
var statearr_24987_25051 = state_24916__$1;
(statearr_24987_25051[(2)] = null);

(statearr_24987_25051[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (10))){
var inst_24800 = (state_24916[(14)]);
var inst_24798 = (state_24916[(17)]);
var inst_24806 = cljs.core._nth.call(null,inst_24798,inst_24800);
var inst_24807 = cljs.core.nth.call(null,inst_24806,(0),null);
var inst_24808 = cljs.core.nth.call(null,inst_24806,(1),null);
var state_24916__$1 = (function (){var statearr_24988 = state_24916;
(statearr_24988[(26)] = inst_24807);

return statearr_24988;
})();
if(cljs.core.truth_(inst_24808)){
var statearr_24989_25052 = state_24916__$1;
(statearr_24989_25052[(1)] = (13));

} else {
var statearr_24990_25053 = state_24916__$1;
(statearr_24990_25053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (18))){
var inst_24841 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
var statearr_24991_25054 = state_24916__$1;
(statearr_24991_25054[(2)] = inst_24841);

(statearr_24991_25054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (42))){
var state_24916__$1 = state_24916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24916__$1,(45),dchan);
} else {
if((state_val_24917 === (37))){
var inst_24875 = (state_24916[(25)]);
var inst_24788 = (state_24916[(9)]);
var inst_24884 = (state_24916[(23)]);
var inst_24884__$1 = cljs.core.first.call(null,inst_24875);
var inst_24885 = cljs.core.async.put_BANG_.call(null,inst_24884__$1,inst_24788,done);
var state_24916__$1 = (function (){var statearr_24992 = state_24916;
(statearr_24992[(23)] = inst_24884__$1);

return statearr_24992;
})();
if(cljs.core.truth_(inst_24885)){
var statearr_24993_25055 = state_24916__$1;
(statearr_24993_25055[(1)] = (39));

} else {
var statearr_24994_25056 = state_24916__$1;
(statearr_24994_25056[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (8))){
var inst_24800 = (state_24916[(14)]);
var inst_24799 = (state_24916[(15)]);
var inst_24802 = (inst_24800 < inst_24799);
var inst_24803 = inst_24802;
var state_24916__$1 = state_24916;
if(cljs.core.truth_(inst_24803)){
var statearr_24995_25057 = state_24916__$1;
(statearr_24995_25057[(1)] = (10));

} else {
var statearr_24996_25058 = state_24916__$1;
(statearr_24996_25058[(1)] = (11));

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
});})(c__19380__auto___25004,cs,m,dchan,dctr,done))
;
return ((function (switch__19359__auto__,c__19380__auto___25004,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19360__auto__ = null;
var cljs$core$async$mult_$_state_machine__19360__auto____0 = (function (){
var statearr_25000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25000[(0)] = cljs$core$async$mult_$_state_machine__19360__auto__);

(statearr_25000[(1)] = (1));

return statearr_25000;
});
var cljs$core$async$mult_$_state_machine__19360__auto____1 = (function (state_24916){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_24916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e25001){if((e25001 instanceof Object)){
var ex__19363__auto__ = e25001;
var statearr_25002_25059 = state_24916;
(statearr_25002_25059[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25060 = state_24916;
state_24916 = G__25060;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19360__auto__ = function(state_24916){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19360__auto____1.call(this,state_24916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19360__auto____0;
cljs$core$async$mult_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19360__auto____1;
return cljs$core$async$mult_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___25004,cs,m,dchan,dctr,done))
})();
var state__19382__auto__ = (function (){var statearr_25003 = f__19381__auto__.call(null);
(statearr_25003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___25004);

return statearr_25003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___25004,cs,m,dchan,dctr,done))
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
var args25061 = [];
var len__17416__auto___25064 = arguments.length;
var i__17417__auto___25065 = (0);
while(true){
if((i__17417__auto___25065 < len__17416__auto___25064)){
args25061.push((arguments[i__17417__auto___25065]));

var G__25066 = (i__17417__auto___25065 + (1));
i__17417__auto___25065 = G__25066;
continue;
} else {
}
break;
}

var G__25063 = args25061.length;
switch (G__25063) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25061.length)].join('')));

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
var len__17416__auto___25078 = arguments.length;
var i__17417__auto___25079 = (0);
while(true){
if((i__17417__auto___25079 < len__17416__auto___25078)){
args__17423__auto__.push((arguments[i__17417__auto___25079]));

var G__25080 = (i__17417__auto___25079 + (1));
i__17417__auto___25079 = G__25080;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((3) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17424__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25072){
var map__25073 = p__25072;
var map__25073__$1 = ((((!((map__25073 == null)))?((((map__25073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25073):map__25073);
var opts = map__25073__$1;
var statearr_25075_25081 = state;
(statearr_25075_25081[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25073,map__25073__$1,opts){
return (function (val){
var statearr_25076_25082 = state;
(statearr_25076_25082[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25073,map__25073__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25077_25083 = state;
(statearr_25077_25083[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25068){
var G__25069 = cljs.core.first.call(null,seq25068);
var seq25068__$1 = cljs.core.next.call(null,seq25068);
var G__25070 = cljs.core.first.call(null,seq25068__$1);
var seq25068__$2 = cljs.core.next.call(null,seq25068__$1);
var G__25071 = cljs.core.first.call(null,seq25068__$2);
var seq25068__$3 = cljs.core.next.call(null,seq25068__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25069,G__25070,G__25071,seq25068__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25247 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25248){
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
this.meta25248 = meta25248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25249,meta25248__$1){
var self__ = this;
var _25249__$1 = this;
return (new cljs.core.async.t_cljs$core$async25247(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25248__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25249){
var self__ = this;
var _25249__$1 = this;
return self__.meta25248;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25247.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25247.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25247.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25247.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25247.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25247.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25247.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25247.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25248","meta25248",609050014,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25247";

cljs.core.async.t_cljs$core$async25247.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async25247");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25247 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25247(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25248){
return (new cljs.core.async.t_cljs$core$async25247(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25248));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25247(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19380__auto___25410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___25410,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___25410,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25347){
var state_val_25348 = (state_25347[(1)]);
if((state_val_25348 === (7))){
var inst_25265 = (state_25347[(2)]);
var state_25347__$1 = state_25347;
var statearr_25349_25411 = state_25347__$1;
(statearr_25349_25411[(2)] = inst_25265);

(statearr_25349_25411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (20))){
var inst_25277 = (state_25347[(7)]);
var state_25347__$1 = state_25347;
var statearr_25350_25412 = state_25347__$1;
(statearr_25350_25412[(2)] = inst_25277);

(statearr_25350_25412[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (27))){
var state_25347__$1 = state_25347;
var statearr_25351_25413 = state_25347__$1;
(statearr_25351_25413[(2)] = null);

(statearr_25351_25413[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (1))){
var inst_25253 = (state_25347[(8)]);
var inst_25253__$1 = calc_state.call(null);
var inst_25255 = (inst_25253__$1 == null);
var inst_25256 = cljs.core.not.call(null,inst_25255);
var state_25347__$1 = (function (){var statearr_25352 = state_25347;
(statearr_25352[(8)] = inst_25253__$1);

return statearr_25352;
})();
if(inst_25256){
var statearr_25353_25414 = state_25347__$1;
(statearr_25353_25414[(1)] = (2));

} else {
var statearr_25354_25415 = state_25347__$1;
(statearr_25354_25415[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (24))){
var inst_25307 = (state_25347[(9)]);
var inst_25300 = (state_25347[(10)]);
var inst_25321 = (state_25347[(11)]);
var inst_25321__$1 = inst_25300.call(null,inst_25307);
var state_25347__$1 = (function (){var statearr_25355 = state_25347;
(statearr_25355[(11)] = inst_25321__$1);

return statearr_25355;
})();
if(cljs.core.truth_(inst_25321__$1)){
var statearr_25356_25416 = state_25347__$1;
(statearr_25356_25416[(1)] = (29));

} else {
var statearr_25357_25417 = state_25347__$1;
(statearr_25357_25417[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (4))){
var inst_25268 = (state_25347[(2)]);
var state_25347__$1 = state_25347;
if(cljs.core.truth_(inst_25268)){
var statearr_25358_25418 = state_25347__$1;
(statearr_25358_25418[(1)] = (8));

} else {
var statearr_25359_25419 = state_25347__$1;
(statearr_25359_25419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (15))){
var inst_25294 = (state_25347[(2)]);
var state_25347__$1 = state_25347;
if(cljs.core.truth_(inst_25294)){
var statearr_25360_25420 = state_25347__$1;
(statearr_25360_25420[(1)] = (19));

} else {
var statearr_25361_25421 = state_25347__$1;
(statearr_25361_25421[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (21))){
var inst_25299 = (state_25347[(12)]);
var inst_25299__$1 = (state_25347[(2)]);
var inst_25300 = cljs.core.get.call(null,inst_25299__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25301 = cljs.core.get.call(null,inst_25299__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25302 = cljs.core.get.call(null,inst_25299__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25347__$1 = (function (){var statearr_25362 = state_25347;
(statearr_25362[(13)] = inst_25301);

(statearr_25362[(10)] = inst_25300);

(statearr_25362[(12)] = inst_25299__$1);

return statearr_25362;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25347__$1,(22),inst_25302);
} else {
if((state_val_25348 === (31))){
var inst_25329 = (state_25347[(2)]);
var state_25347__$1 = state_25347;
if(cljs.core.truth_(inst_25329)){
var statearr_25363_25422 = state_25347__$1;
(statearr_25363_25422[(1)] = (32));

} else {
var statearr_25364_25423 = state_25347__$1;
(statearr_25364_25423[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (32))){
var inst_25306 = (state_25347[(14)]);
var state_25347__$1 = state_25347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25347__$1,(35),out,inst_25306);
} else {
if((state_val_25348 === (33))){
var inst_25299 = (state_25347[(12)]);
var inst_25277 = inst_25299;
var state_25347__$1 = (function (){var statearr_25365 = state_25347;
(statearr_25365[(7)] = inst_25277);

return statearr_25365;
})();
var statearr_25366_25424 = state_25347__$1;
(statearr_25366_25424[(2)] = null);

(statearr_25366_25424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (13))){
var inst_25277 = (state_25347[(7)]);
var inst_25284 = inst_25277.cljs$lang$protocol_mask$partition0$;
var inst_25285 = (inst_25284 & (64));
var inst_25286 = inst_25277.cljs$core$ISeq$;
var inst_25287 = (inst_25285) || (inst_25286);
var state_25347__$1 = state_25347;
if(cljs.core.truth_(inst_25287)){
var statearr_25367_25425 = state_25347__$1;
(statearr_25367_25425[(1)] = (16));

} else {
var statearr_25368_25426 = state_25347__$1;
(statearr_25368_25426[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (22))){
var inst_25307 = (state_25347[(9)]);
var inst_25306 = (state_25347[(14)]);
var inst_25305 = (state_25347[(2)]);
var inst_25306__$1 = cljs.core.nth.call(null,inst_25305,(0),null);
var inst_25307__$1 = cljs.core.nth.call(null,inst_25305,(1),null);
var inst_25308 = (inst_25306__$1 == null);
var inst_25309 = cljs.core._EQ_.call(null,inst_25307__$1,change);
var inst_25310 = (inst_25308) || (inst_25309);
var state_25347__$1 = (function (){var statearr_25369 = state_25347;
(statearr_25369[(9)] = inst_25307__$1);

(statearr_25369[(14)] = inst_25306__$1);

return statearr_25369;
})();
if(cljs.core.truth_(inst_25310)){
var statearr_25370_25427 = state_25347__$1;
(statearr_25370_25427[(1)] = (23));

} else {
var statearr_25371_25428 = state_25347__$1;
(statearr_25371_25428[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (36))){
var inst_25299 = (state_25347[(12)]);
var inst_25277 = inst_25299;
var state_25347__$1 = (function (){var statearr_25372 = state_25347;
(statearr_25372[(7)] = inst_25277);

return statearr_25372;
})();
var statearr_25373_25429 = state_25347__$1;
(statearr_25373_25429[(2)] = null);

(statearr_25373_25429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (29))){
var inst_25321 = (state_25347[(11)]);
var state_25347__$1 = state_25347;
var statearr_25374_25430 = state_25347__$1;
(statearr_25374_25430[(2)] = inst_25321);

(statearr_25374_25430[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (6))){
var state_25347__$1 = state_25347;
var statearr_25375_25431 = state_25347__$1;
(statearr_25375_25431[(2)] = false);

(statearr_25375_25431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (28))){
var inst_25317 = (state_25347[(2)]);
var inst_25318 = calc_state.call(null);
var inst_25277 = inst_25318;
var state_25347__$1 = (function (){var statearr_25376 = state_25347;
(statearr_25376[(15)] = inst_25317);

(statearr_25376[(7)] = inst_25277);

return statearr_25376;
})();
var statearr_25377_25432 = state_25347__$1;
(statearr_25377_25432[(2)] = null);

(statearr_25377_25432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (25))){
var inst_25343 = (state_25347[(2)]);
var state_25347__$1 = state_25347;
var statearr_25378_25433 = state_25347__$1;
(statearr_25378_25433[(2)] = inst_25343);

(statearr_25378_25433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (34))){
var inst_25341 = (state_25347[(2)]);
var state_25347__$1 = state_25347;
var statearr_25379_25434 = state_25347__$1;
(statearr_25379_25434[(2)] = inst_25341);

(statearr_25379_25434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (17))){
var state_25347__$1 = state_25347;
var statearr_25380_25435 = state_25347__$1;
(statearr_25380_25435[(2)] = false);

(statearr_25380_25435[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (3))){
var state_25347__$1 = state_25347;
var statearr_25381_25436 = state_25347__$1;
(statearr_25381_25436[(2)] = false);

(statearr_25381_25436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (12))){
var inst_25345 = (state_25347[(2)]);
var state_25347__$1 = state_25347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25347__$1,inst_25345);
} else {
if((state_val_25348 === (2))){
var inst_25253 = (state_25347[(8)]);
var inst_25258 = inst_25253.cljs$lang$protocol_mask$partition0$;
var inst_25259 = (inst_25258 & (64));
var inst_25260 = inst_25253.cljs$core$ISeq$;
var inst_25261 = (inst_25259) || (inst_25260);
var state_25347__$1 = state_25347;
if(cljs.core.truth_(inst_25261)){
var statearr_25382_25437 = state_25347__$1;
(statearr_25382_25437[(1)] = (5));

} else {
var statearr_25383_25438 = state_25347__$1;
(statearr_25383_25438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (23))){
var inst_25306 = (state_25347[(14)]);
var inst_25312 = (inst_25306 == null);
var state_25347__$1 = state_25347;
if(cljs.core.truth_(inst_25312)){
var statearr_25384_25439 = state_25347__$1;
(statearr_25384_25439[(1)] = (26));

} else {
var statearr_25385_25440 = state_25347__$1;
(statearr_25385_25440[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (35))){
var inst_25332 = (state_25347[(2)]);
var state_25347__$1 = state_25347;
if(cljs.core.truth_(inst_25332)){
var statearr_25386_25441 = state_25347__$1;
(statearr_25386_25441[(1)] = (36));

} else {
var statearr_25387_25442 = state_25347__$1;
(statearr_25387_25442[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (19))){
var inst_25277 = (state_25347[(7)]);
var inst_25296 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25277);
var state_25347__$1 = state_25347;
var statearr_25388_25443 = state_25347__$1;
(statearr_25388_25443[(2)] = inst_25296);

(statearr_25388_25443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (11))){
var inst_25277 = (state_25347[(7)]);
var inst_25281 = (inst_25277 == null);
var inst_25282 = cljs.core.not.call(null,inst_25281);
var state_25347__$1 = state_25347;
if(inst_25282){
var statearr_25389_25444 = state_25347__$1;
(statearr_25389_25444[(1)] = (13));

} else {
var statearr_25390_25445 = state_25347__$1;
(statearr_25390_25445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (9))){
var inst_25253 = (state_25347[(8)]);
var state_25347__$1 = state_25347;
var statearr_25391_25446 = state_25347__$1;
(statearr_25391_25446[(2)] = inst_25253);

(statearr_25391_25446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (5))){
var state_25347__$1 = state_25347;
var statearr_25392_25447 = state_25347__$1;
(statearr_25392_25447[(2)] = true);

(statearr_25392_25447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (14))){
var state_25347__$1 = state_25347;
var statearr_25393_25448 = state_25347__$1;
(statearr_25393_25448[(2)] = false);

(statearr_25393_25448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (26))){
var inst_25307 = (state_25347[(9)]);
var inst_25314 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25307);
var state_25347__$1 = state_25347;
var statearr_25394_25449 = state_25347__$1;
(statearr_25394_25449[(2)] = inst_25314);

(statearr_25394_25449[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (16))){
var state_25347__$1 = state_25347;
var statearr_25395_25450 = state_25347__$1;
(statearr_25395_25450[(2)] = true);

(statearr_25395_25450[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (38))){
var inst_25337 = (state_25347[(2)]);
var state_25347__$1 = state_25347;
var statearr_25396_25451 = state_25347__$1;
(statearr_25396_25451[(2)] = inst_25337);

(statearr_25396_25451[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (30))){
var inst_25307 = (state_25347[(9)]);
var inst_25301 = (state_25347[(13)]);
var inst_25300 = (state_25347[(10)]);
var inst_25324 = cljs.core.empty_QMARK_.call(null,inst_25300);
var inst_25325 = inst_25301.call(null,inst_25307);
var inst_25326 = cljs.core.not.call(null,inst_25325);
var inst_25327 = (inst_25324) && (inst_25326);
var state_25347__$1 = state_25347;
var statearr_25397_25452 = state_25347__$1;
(statearr_25397_25452[(2)] = inst_25327);

(statearr_25397_25452[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (10))){
var inst_25253 = (state_25347[(8)]);
var inst_25273 = (state_25347[(2)]);
var inst_25274 = cljs.core.get.call(null,inst_25273,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25275 = cljs.core.get.call(null,inst_25273,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25276 = cljs.core.get.call(null,inst_25273,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25277 = inst_25253;
var state_25347__$1 = (function (){var statearr_25398 = state_25347;
(statearr_25398[(16)] = inst_25276);

(statearr_25398[(17)] = inst_25274);

(statearr_25398[(18)] = inst_25275);

(statearr_25398[(7)] = inst_25277);

return statearr_25398;
})();
var statearr_25399_25453 = state_25347__$1;
(statearr_25399_25453[(2)] = null);

(statearr_25399_25453[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (18))){
var inst_25291 = (state_25347[(2)]);
var state_25347__$1 = state_25347;
var statearr_25400_25454 = state_25347__$1;
(statearr_25400_25454[(2)] = inst_25291);

(statearr_25400_25454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (37))){
var state_25347__$1 = state_25347;
var statearr_25401_25455 = state_25347__$1;
(statearr_25401_25455[(2)] = null);

(statearr_25401_25455[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25348 === (8))){
var inst_25253 = (state_25347[(8)]);
var inst_25270 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25253);
var state_25347__$1 = state_25347;
var statearr_25402_25456 = state_25347__$1;
(statearr_25402_25456[(2)] = inst_25270);

(statearr_25402_25456[(1)] = (10));


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
});})(c__19380__auto___25410,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19359__auto__,c__19380__auto___25410,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19360__auto__ = null;
var cljs$core$async$mix_$_state_machine__19360__auto____0 = (function (){
var statearr_25406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25406[(0)] = cljs$core$async$mix_$_state_machine__19360__auto__);

(statearr_25406[(1)] = (1));

return statearr_25406;
});
var cljs$core$async$mix_$_state_machine__19360__auto____1 = (function (state_25347){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_25347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e25407){if((e25407 instanceof Object)){
var ex__19363__auto__ = e25407;
var statearr_25408_25457 = state_25347;
(statearr_25408_25457[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25458 = state_25347;
state_25347 = G__25458;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19360__auto__ = function(state_25347){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19360__auto____1.call(this,state_25347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19360__auto____0;
cljs$core$async$mix_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19360__auto____1;
return cljs$core$async$mix_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___25410,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19382__auto__ = (function (){var statearr_25409 = f__19381__auto__.call(null);
(statearr_25409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___25410);

return statearr_25409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___25410,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25459 = [];
var len__17416__auto___25462 = arguments.length;
var i__17417__auto___25463 = (0);
while(true){
if((i__17417__auto___25463 < len__17416__auto___25462)){
args25459.push((arguments[i__17417__auto___25463]));

var G__25464 = (i__17417__auto___25463 + (1));
i__17417__auto___25463 = G__25464;
continue;
} else {
}
break;
}

var G__25461 = args25459.length;
switch (G__25461) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25459.length)].join('')));

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
var args25467 = [];
var len__17416__auto___25592 = arguments.length;
var i__17417__auto___25593 = (0);
while(true){
if((i__17417__auto___25593 < len__17416__auto___25592)){
args25467.push((arguments[i__17417__auto___25593]));

var G__25594 = (i__17417__auto___25593 + (1));
i__17417__auto___25593 = G__25594;
continue;
} else {
}
break;
}

var G__25469 = args25467.length;
switch (G__25469) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25467.length)].join('')));

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
return (function (p1__25466_SHARP_){
if(cljs.core.truth_(p1__25466_SHARP_.call(null,topic))){
return p1__25466_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25466_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16358__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25470 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25471){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25471 = meta25471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25472,meta25471__$1){
var self__ = this;
var _25472__$1 = this;
return (new cljs.core.async.t_cljs$core$async25470(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25471__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25472){
var self__ = this;
var _25472__$1 = this;
return self__.meta25471;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25470.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25470.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25471","meta25471",-1540967246,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25470";

cljs.core.async.t_cljs$core$async25470.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async25470");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25470 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25470(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25471){
return (new cljs.core.async.t_cljs$core$async25470(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25471));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25470(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19380__auto___25596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___25596,mults,ensure_mult,p){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___25596,mults,ensure_mult,p){
return (function (state_25544){
var state_val_25545 = (state_25544[(1)]);
if((state_val_25545 === (7))){
var inst_25540 = (state_25544[(2)]);
var state_25544__$1 = state_25544;
var statearr_25546_25597 = state_25544__$1;
(statearr_25546_25597[(2)] = inst_25540);

(statearr_25546_25597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (20))){
var state_25544__$1 = state_25544;
var statearr_25547_25598 = state_25544__$1;
(statearr_25547_25598[(2)] = null);

(statearr_25547_25598[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (1))){
var state_25544__$1 = state_25544;
var statearr_25548_25599 = state_25544__$1;
(statearr_25548_25599[(2)] = null);

(statearr_25548_25599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (24))){
var inst_25523 = (state_25544[(7)]);
var inst_25532 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25523);
var state_25544__$1 = state_25544;
var statearr_25549_25600 = state_25544__$1;
(statearr_25549_25600[(2)] = inst_25532);

(statearr_25549_25600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (4))){
var inst_25475 = (state_25544[(8)]);
var inst_25475__$1 = (state_25544[(2)]);
var inst_25476 = (inst_25475__$1 == null);
var state_25544__$1 = (function (){var statearr_25550 = state_25544;
(statearr_25550[(8)] = inst_25475__$1);

return statearr_25550;
})();
if(cljs.core.truth_(inst_25476)){
var statearr_25551_25601 = state_25544__$1;
(statearr_25551_25601[(1)] = (5));

} else {
var statearr_25552_25602 = state_25544__$1;
(statearr_25552_25602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (15))){
var inst_25517 = (state_25544[(2)]);
var state_25544__$1 = state_25544;
var statearr_25553_25603 = state_25544__$1;
(statearr_25553_25603[(2)] = inst_25517);

(statearr_25553_25603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (21))){
var inst_25537 = (state_25544[(2)]);
var state_25544__$1 = (function (){var statearr_25554 = state_25544;
(statearr_25554[(9)] = inst_25537);

return statearr_25554;
})();
var statearr_25555_25604 = state_25544__$1;
(statearr_25555_25604[(2)] = null);

(statearr_25555_25604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (13))){
var inst_25499 = (state_25544[(10)]);
var inst_25501 = cljs.core.chunked_seq_QMARK_.call(null,inst_25499);
var state_25544__$1 = state_25544;
if(inst_25501){
var statearr_25556_25605 = state_25544__$1;
(statearr_25556_25605[(1)] = (16));

} else {
var statearr_25557_25606 = state_25544__$1;
(statearr_25557_25606[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (22))){
var inst_25529 = (state_25544[(2)]);
var state_25544__$1 = state_25544;
if(cljs.core.truth_(inst_25529)){
var statearr_25558_25607 = state_25544__$1;
(statearr_25558_25607[(1)] = (23));

} else {
var statearr_25559_25608 = state_25544__$1;
(statearr_25559_25608[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (6))){
var inst_25475 = (state_25544[(8)]);
var inst_25525 = (state_25544[(11)]);
var inst_25523 = (state_25544[(7)]);
var inst_25523__$1 = topic_fn.call(null,inst_25475);
var inst_25524 = cljs.core.deref.call(null,mults);
var inst_25525__$1 = cljs.core.get.call(null,inst_25524,inst_25523__$1);
var state_25544__$1 = (function (){var statearr_25560 = state_25544;
(statearr_25560[(11)] = inst_25525__$1);

(statearr_25560[(7)] = inst_25523__$1);

return statearr_25560;
})();
if(cljs.core.truth_(inst_25525__$1)){
var statearr_25561_25609 = state_25544__$1;
(statearr_25561_25609[(1)] = (19));

} else {
var statearr_25562_25610 = state_25544__$1;
(statearr_25562_25610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (25))){
var inst_25534 = (state_25544[(2)]);
var state_25544__$1 = state_25544;
var statearr_25563_25611 = state_25544__$1;
(statearr_25563_25611[(2)] = inst_25534);

(statearr_25563_25611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (17))){
var inst_25499 = (state_25544[(10)]);
var inst_25508 = cljs.core.first.call(null,inst_25499);
var inst_25509 = cljs.core.async.muxch_STAR_.call(null,inst_25508);
var inst_25510 = cljs.core.async.close_BANG_.call(null,inst_25509);
var inst_25511 = cljs.core.next.call(null,inst_25499);
var inst_25485 = inst_25511;
var inst_25486 = null;
var inst_25487 = (0);
var inst_25488 = (0);
var state_25544__$1 = (function (){var statearr_25564 = state_25544;
(statearr_25564[(12)] = inst_25486);

(statearr_25564[(13)] = inst_25485);

(statearr_25564[(14)] = inst_25510);

(statearr_25564[(15)] = inst_25488);

(statearr_25564[(16)] = inst_25487);

return statearr_25564;
})();
var statearr_25565_25612 = state_25544__$1;
(statearr_25565_25612[(2)] = null);

(statearr_25565_25612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (3))){
var inst_25542 = (state_25544[(2)]);
var state_25544__$1 = state_25544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25544__$1,inst_25542);
} else {
if((state_val_25545 === (12))){
var inst_25519 = (state_25544[(2)]);
var state_25544__$1 = state_25544;
var statearr_25566_25613 = state_25544__$1;
(statearr_25566_25613[(2)] = inst_25519);

(statearr_25566_25613[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (2))){
var state_25544__$1 = state_25544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25544__$1,(4),ch);
} else {
if((state_val_25545 === (23))){
var state_25544__$1 = state_25544;
var statearr_25567_25614 = state_25544__$1;
(statearr_25567_25614[(2)] = null);

(statearr_25567_25614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (19))){
var inst_25475 = (state_25544[(8)]);
var inst_25525 = (state_25544[(11)]);
var inst_25527 = cljs.core.async.muxch_STAR_.call(null,inst_25525);
var state_25544__$1 = state_25544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25544__$1,(22),inst_25527,inst_25475);
} else {
if((state_val_25545 === (11))){
var inst_25499 = (state_25544[(10)]);
var inst_25485 = (state_25544[(13)]);
var inst_25499__$1 = cljs.core.seq.call(null,inst_25485);
var state_25544__$1 = (function (){var statearr_25568 = state_25544;
(statearr_25568[(10)] = inst_25499__$1);

return statearr_25568;
})();
if(inst_25499__$1){
var statearr_25569_25615 = state_25544__$1;
(statearr_25569_25615[(1)] = (13));

} else {
var statearr_25570_25616 = state_25544__$1;
(statearr_25570_25616[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (9))){
var inst_25521 = (state_25544[(2)]);
var state_25544__$1 = state_25544;
var statearr_25571_25617 = state_25544__$1;
(statearr_25571_25617[(2)] = inst_25521);

(statearr_25571_25617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (5))){
var inst_25482 = cljs.core.deref.call(null,mults);
var inst_25483 = cljs.core.vals.call(null,inst_25482);
var inst_25484 = cljs.core.seq.call(null,inst_25483);
var inst_25485 = inst_25484;
var inst_25486 = null;
var inst_25487 = (0);
var inst_25488 = (0);
var state_25544__$1 = (function (){var statearr_25572 = state_25544;
(statearr_25572[(12)] = inst_25486);

(statearr_25572[(13)] = inst_25485);

(statearr_25572[(15)] = inst_25488);

(statearr_25572[(16)] = inst_25487);

return statearr_25572;
})();
var statearr_25573_25618 = state_25544__$1;
(statearr_25573_25618[(2)] = null);

(statearr_25573_25618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (14))){
var state_25544__$1 = state_25544;
var statearr_25577_25619 = state_25544__$1;
(statearr_25577_25619[(2)] = null);

(statearr_25577_25619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (16))){
var inst_25499 = (state_25544[(10)]);
var inst_25503 = cljs.core.chunk_first.call(null,inst_25499);
var inst_25504 = cljs.core.chunk_rest.call(null,inst_25499);
var inst_25505 = cljs.core.count.call(null,inst_25503);
var inst_25485 = inst_25504;
var inst_25486 = inst_25503;
var inst_25487 = inst_25505;
var inst_25488 = (0);
var state_25544__$1 = (function (){var statearr_25578 = state_25544;
(statearr_25578[(12)] = inst_25486);

(statearr_25578[(13)] = inst_25485);

(statearr_25578[(15)] = inst_25488);

(statearr_25578[(16)] = inst_25487);

return statearr_25578;
})();
var statearr_25579_25620 = state_25544__$1;
(statearr_25579_25620[(2)] = null);

(statearr_25579_25620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (10))){
var inst_25486 = (state_25544[(12)]);
var inst_25485 = (state_25544[(13)]);
var inst_25488 = (state_25544[(15)]);
var inst_25487 = (state_25544[(16)]);
var inst_25493 = cljs.core._nth.call(null,inst_25486,inst_25488);
var inst_25494 = cljs.core.async.muxch_STAR_.call(null,inst_25493);
var inst_25495 = cljs.core.async.close_BANG_.call(null,inst_25494);
var inst_25496 = (inst_25488 + (1));
var tmp25574 = inst_25486;
var tmp25575 = inst_25485;
var tmp25576 = inst_25487;
var inst_25485__$1 = tmp25575;
var inst_25486__$1 = tmp25574;
var inst_25487__$1 = tmp25576;
var inst_25488__$1 = inst_25496;
var state_25544__$1 = (function (){var statearr_25580 = state_25544;
(statearr_25580[(12)] = inst_25486__$1);

(statearr_25580[(17)] = inst_25495);

(statearr_25580[(13)] = inst_25485__$1);

(statearr_25580[(15)] = inst_25488__$1);

(statearr_25580[(16)] = inst_25487__$1);

return statearr_25580;
})();
var statearr_25581_25621 = state_25544__$1;
(statearr_25581_25621[(2)] = null);

(statearr_25581_25621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (18))){
var inst_25514 = (state_25544[(2)]);
var state_25544__$1 = state_25544;
var statearr_25582_25622 = state_25544__$1;
(statearr_25582_25622[(2)] = inst_25514);

(statearr_25582_25622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25545 === (8))){
var inst_25488 = (state_25544[(15)]);
var inst_25487 = (state_25544[(16)]);
var inst_25490 = (inst_25488 < inst_25487);
var inst_25491 = inst_25490;
var state_25544__$1 = state_25544;
if(cljs.core.truth_(inst_25491)){
var statearr_25583_25623 = state_25544__$1;
(statearr_25583_25623[(1)] = (10));

} else {
var statearr_25584_25624 = state_25544__$1;
(statearr_25584_25624[(1)] = (11));

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
});})(c__19380__auto___25596,mults,ensure_mult,p))
;
return ((function (switch__19359__auto__,c__19380__auto___25596,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_25588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25588[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_25588[(1)] = (1));

return statearr_25588;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_25544){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_25544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e25589){if((e25589 instanceof Object)){
var ex__19363__auto__ = e25589;
var statearr_25590_25625 = state_25544;
(statearr_25590_25625[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25626 = state_25544;
state_25544 = G__25626;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_25544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_25544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___25596,mults,ensure_mult,p))
})();
var state__19382__auto__ = (function (){var statearr_25591 = f__19381__auto__.call(null);
(statearr_25591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___25596);

return statearr_25591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___25596,mults,ensure_mult,p))
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
var args25627 = [];
var len__17416__auto___25630 = arguments.length;
var i__17417__auto___25631 = (0);
while(true){
if((i__17417__auto___25631 < len__17416__auto___25630)){
args25627.push((arguments[i__17417__auto___25631]));

var G__25632 = (i__17417__auto___25631 + (1));
i__17417__auto___25631 = G__25632;
continue;
} else {
}
break;
}

var G__25629 = args25627.length;
switch (G__25629) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25627.length)].join('')));

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
var args25634 = [];
var len__17416__auto___25637 = arguments.length;
var i__17417__auto___25638 = (0);
while(true){
if((i__17417__auto___25638 < len__17416__auto___25637)){
args25634.push((arguments[i__17417__auto___25638]));

var G__25639 = (i__17417__auto___25638 + (1));
i__17417__auto___25638 = G__25639;
continue;
} else {
}
break;
}

var G__25636 = args25634.length;
switch (G__25636) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25634.length)].join('')));

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
var args25641 = [];
var len__17416__auto___25712 = arguments.length;
var i__17417__auto___25713 = (0);
while(true){
if((i__17417__auto___25713 < len__17416__auto___25712)){
args25641.push((arguments[i__17417__auto___25713]));

var G__25714 = (i__17417__auto___25713 + (1));
i__17417__auto___25713 = G__25714;
continue;
} else {
}
break;
}

var G__25643 = args25641.length;
switch (G__25643) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25641.length)].join('')));

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
var c__19380__auto___25716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___25716,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___25716,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25682){
var state_val_25683 = (state_25682[(1)]);
if((state_val_25683 === (7))){
var state_25682__$1 = state_25682;
var statearr_25684_25717 = state_25682__$1;
(statearr_25684_25717[(2)] = null);

(statearr_25684_25717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (1))){
var state_25682__$1 = state_25682;
var statearr_25685_25718 = state_25682__$1;
(statearr_25685_25718[(2)] = null);

(statearr_25685_25718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (4))){
var inst_25646 = (state_25682[(7)]);
var inst_25648 = (inst_25646 < cnt);
var state_25682__$1 = state_25682;
if(cljs.core.truth_(inst_25648)){
var statearr_25686_25719 = state_25682__$1;
(statearr_25686_25719[(1)] = (6));

} else {
var statearr_25687_25720 = state_25682__$1;
(statearr_25687_25720[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (15))){
var inst_25678 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
var statearr_25688_25721 = state_25682__$1;
(statearr_25688_25721[(2)] = inst_25678);

(statearr_25688_25721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (13))){
var inst_25671 = cljs.core.async.close_BANG_.call(null,out);
var state_25682__$1 = state_25682;
var statearr_25689_25722 = state_25682__$1;
(statearr_25689_25722[(2)] = inst_25671);

(statearr_25689_25722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (6))){
var state_25682__$1 = state_25682;
var statearr_25690_25723 = state_25682__$1;
(statearr_25690_25723[(2)] = null);

(statearr_25690_25723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (3))){
var inst_25680 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25682__$1,inst_25680);
} else {
if((state_val_25683 === (12))){
var inst_25668 = (state_25682[(8)]);
var inst_25668__$1 = (state_25682[(2)]);
var inst_25669 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25668__$1);
var state_25682__$1 = (function (){var statearr_25691 = state_25682;
(statearr_25691[(8)] = inst_25668__$1);

return statearr_25691;
})();
if(cljs.core.truth_(inst_25669)){
var statearr_25692_25724 = state_25682__$1;
(statearr_25692_25724[(1)] = (13));

} else {
var statearr_25693_25725 = state_25682__$1;
(statearr_25693_25725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (2))){
var inst_25645 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25646 = (0);
var state_25682__$1 = (function (){var statearr_25694 = state_25682;
(statearr_25694[(7)] = inst_25646);

(statearr_25694[(9)] = inst_25645);

return statearr_25694;
})();
var statearr_25695_25726 = state_25682__$1;
(statearr_25695_25726[(2)] = null);

(statearr_25695_25726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (11))){
var inst_25646 = (state_25682[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25682,(10),Object,null,(9));
var inst_25655 = chs__$1.call(null,inst_25646);
var inst_25656 = done.call(null,inst_25646);
var inst_25657 = cljs.core.async.take_BANG_.call(null,inst_25655,inst_25656);
var state_25682__$1 = state_25682;
var statearr_25696_25727 = state_25682__$1;
(statearr_25696_25727[(2)] = inst_25657);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25682__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (9))){
var inst_25646 = (state_25682[(7)]);
var inst_25659 = (state_25682[(2)]);
var inst_25660 = (inst_25646 + (1));
var inst_25646__$1 = inst_25660;
var state_25682__$1 = (function (){var statearr_25697 = state_25682;
(statearr_25697[(7)] = inst_25646__$1);

(statearr_25697[(10)] = inst_25659);

return statearr_25697;
})();
var statearr_25698_25728 = state_25682__$1;
(statearr_25698_25728[(2)] = null);

(statearr_25698_25728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (5))){
var inst_25666 = (state_25682[(2)]);
var state_25682__$1 = (function (){var statearr_25699 = state_25682;
(statearr_25699[(11)] = inst_25666);

return statearr_25699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25682__$1,(12),dchan);
} else {
if((state_val_25683 === (14))){
var inst_25668 = (state_25682[(8)]);
var inst_25673 = cljs.core.apply.call(null,f,inst_25668);
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25682__$1,(16),out,inst_25673);
} else {
if((state_val_25683 === (16))){
var inst_25675 = (state_25682[(2)]);
var state_25682__$1 = (function (){var statearr_25700 = state_25682;
(statearr_25700[(12)] = inst_25675);

return statearr_25700;
})();
var statearr_25701_25729 = state_25682__$1;
(statearr_25701_25729[(2)] = null);

(statearr_25701_25729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (10))){
var inst_25650 = (state_25682[(2)]);
var inst_25651 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25682__$1 = (function (){var statearr_25702 = state_25682;
(statearr_25702[(13)] = inst_25650);

return statearr_25702;
})();
var statearr_25703_25730 = state_25682__$1;
(statearr_25703_25730[(2)] = inst_25651);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25682__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (8))){
var inst_25664 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
var statearr_25704_25731 = state_25682__$1;
(statearr_25704_25731[(2)] = inst_25664);

(statearr_25704_25731[(1)] = (5));


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
});})(c__19380__auto___25716,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19359__auto__,c__19380__auto___25716,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_25708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25708[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_25708[(1)] = (1));

return statearr_25708;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_25682){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_25682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e25709){if((e25709 instanceof Object)){
var ex__19363__auto__ = e25709;
var statearr_25710_25732 = state_25682;
(statearr_25710_25732[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25733 = state_25682;
state_25682 = G__25733;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_25682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_25682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___25716,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19382__auto__ = (function (){var statearr_25711 = f__19381__auto__.call(null);
(statearr_25711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___25716);

return statearr_25711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___25716,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25735 = [];
var len__17416__auto___25791 = arguments.length;
var i__17417__auto___25792 = (0);
while(true){
if((i__17417__auto___25792 < len__17416__auto___25791)){
args25735.push((arguments[i__17417__auto___25792]));

var G__25793 = (i__17417__auto___25792 + (1));
i__17417__auto___25792 = G__25793;
continue;
} else {
}
break;
}

var G__25737 = args25735.length;
switch (G__25737) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25735.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19380__auto___25795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___25795,out){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___25795,out){
return (function (state_25767){
var state_val_25768 = (state_25767[(1)]);
if((state_val_25768 === (7))){
var inst_25747 = (state_25767[(7)]);
var inst_25746 = (state_25767[(8)]);
var inst_25746__$1 = (state_25767[(2)]);
var inst_25747__$1 = cljs.core.nth.call(null,inst_25746__$1,(0),null);
var inst_25748 = cljs.core.nth.call(null,inst_25746__$1,(1),null);
var inst_25749 = (inst_25747__$1 == null);
var state_25767__$1 = (function (){var statearr_25769 = state_25767;
(statearr_25769[(9)] = inst_25748);

(statearr_25769[(7)] = inst_25747__$1);

(statearr_25769[(8)] = inst_25746__$1);

return statearr_25769;
})();
if(cljs.core.truth_(inst_25749)){
var statearr_25770_25796 = state_25767__$1;
(statearr_25770_25796[(1)] = (8));

} else {
var statearr_25771_25797 = state_25767__$1;
(statearr_25771_25797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25768 === (1))){
var inst_25738 = cljs.core.vec.call(null,chs);
var inst_25739 = inst_25738;
var state_25767__$1 = (function (){var statearr_25772 = state_25767;
(statearr_25772[(10)] = inst_25739);

return statearr_25772;
})();
var statearr_25773_25798 = state_25767__$1;
(statearr_25773_25798[(2)] = null);

(statearr_25773_25798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25768 === (4))){
var inst_25739 = (state_25767[(10)]);
var state_25767__$1 = state_25767;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25767__$1,(7),inst_25739);
} else {
if((state_val_25768 === (6))){
var inst_25763 = (state_25767[(2)]);
var state_25767__$1 = state_25767;
var statearr_25774_25799 = state_25767__$1;
(statearr_25774_25799[(2)] = inst_25763);

(statearr_25774_25799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25768 === (3))){
var inst_25765 = (state_25767[(2)]);
var state_25767__$1 = state_25767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25767__$1,inst_25765);
} else {
if((state_val_25768 === (2))){
var inst_25739 = (state_25767[(10)]);
var inst_25741 = cljs.core.count.call(null,inst_25739);
var inst_25742 = (inst_25741 > (0));
var state_25767__$1 = state_25767;
if(cljs.core.truth_(inst_25742)){
var statearr_25776_25800 = state_25767__$1;
(statearr_25776_25800[(1)] = (4));

} else {
var statearr_25777_25801 = state_25767__$1;
(statearr_25777_25801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25768 === (11))){
var inst_25739 = (state_25767[(10)]);
var inst_25756 = (state_25767[(2)]);
var tmp25775 = inst_25739;
var inst_25739__$1 = tmp25775;
var state_25767__$1 = (function (){var statearr_25778 = state_25767;
(statearr_25778[(11)] = inst_25756);

(statearr_25778[(10)] = inst_25739__$1);

return statearr_25778;
})();
var statearr_25779_25802 = state_25767__$1;
(statearr_25779_25802[(2)] = null);

(statearr_25779_25802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25768 === (9))){
var inst_25747 = (state_25767[(7)]);
var state_25767__$1 = state_25767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25767__$1,(11),out,inst_25747);
} else {
if((state_val_25768 === (5))){
var inst_25761 = cljs.core.async.close_BANG_.call(null,out);
var state_25767__$1 = state_25767;
var statearr_25780_25803 = state_25767__$1;
(statearr_25780_25803[(2)] = inst_25761);

(statearr_25780_25803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25768 === (10))){
var inst_25759 = (state_25767[(2)]);
var state_25767__$1 = state_25767;
var statearr_25781_25804 = state_25767__$1;
(statearr_25781_25804[(2)] = inst_25759);

(statearr_25781_25804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25768 === (8))){
var inst_25748 = (state_25767[(9)]);
var inst_25747 = (state_25767[(7)]);
var inst_25739 = (state_25767[(10)]);
var inst_25746 = (state_25767[(8)]);
var inst_25751 = (function (){var cs = inst_25739;
var vec__25744 = inst_25746;
var v = inst_25747;
var c = inst_25748;
return ((function (cs,vec__25744,v,c,inst_25748,inst_25747,inst_25739,inst_25746,state_val_25768,c__19380__auto___25795,out){
return (function (p1__25734_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25734_SHARP_);
});
;})(cs,vec__25744,v,c,inst_25748,inst_25747,inst_25739,inst_25746,state_val_25768,c__19380__auto___25795,out))
})();
var inst_25752 = cljs.core.filterv.call(null,inst_25751,inst_25739);
var inst_25739__$1 = inst_25752;
var state_25767__$1 = (function (){var statearr_25782 = state_25767;
(statearr_25782[(10)] = inst_25739__$1);

return statearr_25782;
})();
var statearr_25783_25805 = state_25767__$1;
(statearr_25783_25805[(2)] = null);

(statearr_25783_25805[(1)] = (2));


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
});})(c__19380__auto___25795,out))
;
return ((function (switch__19359__auto__,c__19380__auto___25795,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_25787 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25787[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_25787[(1)] = (1));

return statearr_25787;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_25767){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_25767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e25788){if((e25788 instanceof Object)){
var ex__19363__auto__ = e25788;
var statearr_25789_25806 = state_25767;
(statearr_25789_25806[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25807 = state_25767;
state_25767 = G__25807;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_25767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_25767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___25795,out))
})();
var state__19382__auto__ = (function (){var statearr_25790 = f__19381__auto__.call(null);
(statearr_25790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___25795);

return statearr_25790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___25795,out))
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
var args25808 = [];
var len__17416__auto___25857 = arguments.length;
var i__17417__auto___25858 = (0);
while(true){
if((i__17417__auto___25858 < len__17416__auto___25857)){
args25808.push((arguments[i__17417__auto___25858]));

var G__25859 = (i__17417__auto___25858 + (1));
i__17417__auto___25858 = G__25859;
continue;
} else {
}
break;
}

var G__25810 = args25808.length;
switch (G__25810) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25808.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19380__auto___25861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___25861,out){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___25861,out){
return (function (state_25834){
var state_val_25835 = (state_25834[(1)]);
if((state_val_25835 === (7))){
var inst_25816 = (state_25834[(7)]);
var inst_25816__$1 = (state_25834[(2)]);
var inst_25817 = (inst_25816__$1 == null);
var inst_25818 = cljs.core.not.call(null,inst_25817);
var state_25834__$1 = (function (){var statearr_25836 = state_25834;
(statearr_25836[(7)] = inst_25816__$1);

return statearr_25836;
})();
if(inst_25818){
var statearr_25837_25862 = state_25834__$1;
(statearr_25837_25862[(1)] = (8));

} else {
var statearr_25838_25863 = state_25834__$1;
(statearr_25838_25863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (1))){
var inst_25811 = (0);
var state_25834__$1 = (function (){var statearr_25839 = state_25834;
(statearr_25839[(8)] = inst_25811);

return statearr_25839;
})();
var statearr_25840_25864 = state_25834__$1;
(statearr_25840_25864[(2)] = null);

(statearr_25840_25864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (4))){
var state_25834__$1 = state_25834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25834__$1,(7),ch);
} else {
if((state_val_25835 === (6))){
var inst_25829 = (state_25834[(2)]);
var state_25834__$1 = state_25834;
var statearr_25841_25865 = state_25834__$1;
(statearr_25841_25865[(2)] = inst_25829);

(statearr_25841_25865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (3))){
var inst_25831 = (state_25834[(2)]);
var inst_25832 = cljs.core.async.close_BANG_.call(null,out);
var state_25834__$1 = (function (){var statearr_25842 = state_25834;
(statearr_25842[(9)] = inst_25831);

return statearr_25842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25834__$1,inst_25832);
} else {
if((state_val_25835 === (2))){
var inst_25811 = (state_25834[(8)]);
var inst_25813 = (inst_25811 < n);
var state_25834__$1 = state_25834;
if(cljs.core.truth_(inst_25813)){
var statearr_25843_25866 = state_25834__$1;
(statearr_25843_25866[(1)] = (4));

} else {
var statearr_25844_25867 = state_25834__$1;
(statearr_25844_25867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (11))){
var inst_25811 = (state_25834[(8)]);
var inst_25821 = (state_25834[(2)]);
var inst_25822 = (inst_25811 + (1));
var inst_25811__$1 = inst_25822;
var state_25834__$1 = (function (){var statearr_25845 = state_25834;
(statearr_25845[(8)] = inst_25811__$1);

(statearr_25845[(10)] = inst_25821);

return statearr_25845;
})();
var statearr_25846_25868 = state_25834__$1;
(statearr_25846_25868[(2)] = null);

(statearr_25846_25868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (9))){
var state_25834__$1 = state_25834;
var statearr_25847_25869 = state_25834__$1;
(statearr_25847_25869[(2)] = null);

(statearr_25847_25869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (5))){
var state_25834__$1 = state_25834;
var statearr_25848_25870 = state_25834__$1;
(statearr_25848_25870[(2)] = null);

(statearr_25848_25870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (10))){
var inst_25826 = (state_25834[(2)]);
var state_25834__$1 = state_25834;
var statearr_25849_25871 = state_25834__$1;
(statearr_25849_25871[(2)] = inst_25826);

(statearr_25849_25871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (8))){
var inst_25816 = (state_25834[(7)]);
var state_25834__$1 = state_25834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25834__$1,(11),out,inst_25816);
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
});})(c__19380__auto___25861,out))
;
return ((function (switch__19359__auto__,c__19380__auto___25861,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_25853 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25853[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_25853[(1)] = (1));

return statearr_25853;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_25834){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_25834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e25854){if((e25854 instanceof Object)){
var ex__19363__auto__ = e25854;
var statearr_25855_25872 = state_25834;
(statearr_25855_25872[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25873 = state_25834;
state_25834 = G__25873;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_25834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_25834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___25861,out))
})();
var state__19382__auto__ = (function (){var statearr_25856 = f__19381__auto__.call(null);
(statearr_25856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___25861);

return statearr_25856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___25861,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25881 = (function (map_LT_,f,ch,meta25882){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25882 = meta25882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25883,meta25882__$1){
var self__ = this;
var _25883__$1 = this;
return (new cljs.core.async.t_cljs$core$async25881(self__.map_LT_,self__.f,self__.ch,meta25882__$1));
});

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25883){
var self__ = this;
var _25883__$1 = this;
return self__.meta25882;
});

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25884 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25884 = (function (map_LT_,f,ch,meta25882,_,fn1,meta25885){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25882 = meta25882;
this._ = _;
this.fn1 = fn1;
this.meta25885 = meta25885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25886,meta25885__$1){
var self__ = this;
var _25886__$1 = this;
return (new cljs.core.async.t_cljs$core$async25884(self__.map_LT_,self__.f,self__.ch,self__.meta25882,self__._,self__.fn1,meta25885__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25886){
var self__ = this;
var _25886__$1 = this;
return self__.meta25885;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25884.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25884.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25884.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25874_SHARP_){
return f1.call(null,(((p1__25874_SHARP_ == null))?null:self__.f.call(null,p1__25874_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25884.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25882","meta25882",-1411646807,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25881","cljs.core.async/t_cljs$core$async25881",-370956203,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25885","meta25885",-347507218,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25884.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25884";

cljs.core.async.t_cljs$core$async25884.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async25884");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25884 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25884(map_LT___$1,f__$1,ch__$1,meta25882__$1,___$2,fn1__$1,meta25885){
return (new cljs.core.async.t_cljs$core$async25884(map_LT___$1,f__$1,ch__$1,meta25882__$1,___$2,fn1__$1,meta25885));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25884(self__.map_LT_,self__.f,self__.ch,self__.meta25882,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25882","meta25882",-1411646807,null)], null);
});

cljs.core.async.t_cljs$core$async25881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25881";

cljs.core.async.t_cljs$core$async25881.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async25881");
});

cljs.core.async.__GT_t_cljs$core$async25881 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25881(map_LT___$1,f__$1,ch__$1,meta25882){
return (new cljs.core.async.t_cljs$core$async25881(map_LT___$1,f__$1,ch__$1,meta25882));
});

}

return (new cljs.core.async.t_cljs$core$async25881(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25890 = (function (map_GT_,f,ch,meta25891){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25891 = meta25891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25892,meta25891__$1){
var self__ = this;
var _25892__$1 = this;
return (new cljs.core.async.t_cljs$core$async25890(self__.map_GT_,self__.f,self__.ch,meta25891__$1));
});

cljs.core.async.t_cljs$core$async25890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25892){
var self__ = this;
var _25892__$1 = this;
return self__.meta25891;
});

cljs.core.async.t_cljs$core$async25890.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25890.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25890.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25890.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25890.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25890.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25891","meta25891",-673438007,null)], null);
});

cljs.core.async.t_cljs$core$async25890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25890";

cljs.core.async.t_cljs$core$async25890.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async25890");
});

cljs.core.async.__GT_t_cljs$core$async25890 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25890(map_GT___$1,f__$1,ch__$1,meta25891){
return (new cljs.core.async.t_cljs$core$async25890(map_GT___$1,f__$1,ch__$1,meta25891));
});

}

return (new cljs.core.async.t_cljs$core$async25890(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25896 = (function (filter_GT_,p,ch,meta25897){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25897 = meta25897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25898,meta25897__$1){
var self__ = this;
var _25898__$1 = this;
return (new cljs.core.async.t_cljs$core$async25896(self__.filter_GT_,self__.p,self__.ch,meta25897__$1));
});

cljs.core.async.t_cljs$core$async25896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25898){
var self__ = this;
var _25898__$1 = this;
return self__.meta25897;
});

cljs.core.async.t_cljs$core$async25896.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25896.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25896.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25896.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25897","meta25897",415253353,null)], null);
});

cljs.core.async.t_cljs$core$async25896.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25896";

cljs.core.async.t_cljs$core$async25896.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async25896");
});

cljs.core.async.__GT_t_cljs$core$async25896 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25896(filter_GT___$1,p__$1,ch__$1,meta25897){
return (new cljs.core.async.t_cljs$core$async25896(filter_GT___$1,p__$1,ch__$1,meta25897));
});

}

return (new cljs.core.async.t_cljs$core$async25896(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25899 = [];
var len__17416__auto___25943 = arguments.length;
var i__17417__auto___25944 = (0);
while(true){
if((i__17417__auto___25944 < len__17416__auto___25943)){
args25899.push((arguments[i__17417__auto___25944]));

var G__25945 = (i__17417__auto___25944 + (1));
i__17417__auto___25944 = G__25945;
continue;
} else {
}
break;
}

var G__25901 = args25899.length;
switch (G__25901) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25899.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19380__auto___25947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___25947,out){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___25947,out){
return (function (state_25922){
var state_val_25923 = (state_25922[(1)]);
if((state_val_25923 === (7))){
var inst_25918 = (state_25922[(2)]);
var state_25922__$1 = state_25922;
var statearr_25924_25948 = state_25922__$1;
(statearr_25924_25948[(2)] = inst_25918);

(statearr_25924_25948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (1))){
var state_25922__$1 = state_25922;
var statearr_25925_25949 = state_25922__$1;
(statearr_25925_25949[(2)] = null);

(statearr_25925_25949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (4))){
var inst_25904 = (state_25922[(7)]);
var inst_25904__$1 = (state_25922[(2)]);
var inst_25905 = (inst_25904__$1 == null);
var state_25922__$1 = (function (){var statearr_25926 = state_25922;
(statearr_25926[(7)] = inst_25904__$1);

return statearr_25926;
})();
if(cljs.core.truth_(inst_25905)){
var statearr_25927_25950 = state_25922__$1;
(statearr_25927_25950[(1)] = (5));

} else {
var statearr_25928_25951 = state_25922__$1;
(statearr_25928_25951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (6))){
var inst_25904 = (state_25922[(7)]);
var inst_25909 = p.call(null,inst_25904);
var state_25922__$1 = state_25922;
if(cljs.core.truth_(inst_25909)){
var statearr_25929_25952 = state_25922__$1;
(statearr_25929_25952[(1)] = (8));

} else {
var statearr_25930_25953 = state_25922__$1;
(statearr_25930_25953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (3))){
var inst_25920 = (state_25922[(2)]);
var state_25922__$1 = state_25922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25922__$1,inst_25920);
} else {
if((state_val_25923 === (2))){
var state_25922__$1 = state_25922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25922__$1,(4),ch);
} else {
if((state_val_25923 === (11))){
var inst_25912 = (state_25922[(2)]);
var state_25922__$1 = state_25922;
var statearr_25931_25954 = state_25922__$1;
(statearr_25931_25954[(2)] = inst_25912);

(statearr_25931_25954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (9))){
var state_25922__$1 = state_25922;
var statearr_25932_25955 = state_25922__$1;
(statearr_25932_25955[(2)] = null);

(statearr_25932_25955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (5))){
var inst_25907 = cljs.core.async.close_BANG_.call(null,out);
var state_25922__$1 = state_25922;
var statearr_25933_25956 = state_25922__$1;
(statearr_25933_25956[(2)] = inst_25907);

(statearr_25933_25956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (10))){
var inst_25915 = (state_25922[(2)]);
var state_25922__$1 = (function (){var statearr_25934 = state_25922;
(statearr_25934[(8)] = inst_25915);

return statearr_25934;
})();
var statearr_25935_25957 = state_25922__$1;
(statearr_25935_25957[(2)] = null);

(statearr_25935_25957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25923 === (8))){
var inst_25904 = (state_25922[(7)]);
var state_25922__$1 = state_25922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25922__$1,(11),out,inst_25904);
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
});})(c__19380__auto___25947,out))
;
return ((function (switch__19359__auto__,c__19380__auto___25947,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_25939 = [null,null,null,null,null,null,null,null,null];
(statearr_25939[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_25939[(1)] = (1));

return statearr_25939;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_25922){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_25922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e25940){if((e25940 instanceof Object)){
var ex__19363__auto__ = e25940;
var statearr_25941_25958 = state_25922;
(statearr_25941_25958[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25959 = state_25922;
state_25922 = G__25959;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_25922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_25922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___25947,out))
})();
var state__19382__auto__ = (function (){var statearr_25942 = f__19381__auto__.call(null);
(statearr_25942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___25947);

return statearr_25942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___25947,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25960 = [];
var len__17416__auto___25963 = arguments.length;
var i__17417__auto___25964 = (0);
while(true){
if((i__17417__auto___25964 < len__17416__auto___25963)){
args25960.push((arguments[i__17417__auto___25964]));

var G__25965 = (i__17417__auto___25964 + (1));
i__17417__auto___25964 = G__25965;
continue;
} else {
}
break;
}

var G__25962 = args25960.length;
switch (G__25962) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25960.length)].join('')));

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
var c__19380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto__){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto__){
return (function (state_26132){
var state_val_26133 = (state_26132[(1)]);
if((state_val_26133 === (7))){
var inst_26128 = (state_26132[(2)]);
var state_26132__$1 = state_26132;
var statearr_26134_26175 = state_26132__$1;
(statearr_26134_26175[(2)] = inst_26128);

(statearr_26134_26175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (20))){
var inst_26098 = (state_26132[(7)]);
var inst_26109 = (state_26132[(2)]);
var inst_26110 = cljs.core.next.call(null,inst_26098);
var inst_26084 = inst_26110;
var inst_26085 = null;
var inst_26086 = (0);
var inst_26087 = (0);
var state_26132__$1 = (function (){var statearr_26135 = state_26132;
(statearr_26135[(8)] = inst_26085);

(statearr_26135[(9)] = inst_26084);

(statearr_26135[(10)] = inst_26086);

(statearr_26135[(11)] = inst_26109);

(statearr_26135[(12)] = inst_26087);

return statearr_26135;
})();
var statearr_26136_26176 = state_26132__$1;
(statearr_26136_26176[(2)] = null);

(statearr_26136_26176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (1))){
var state_26132__$1 = state_26132;
var statearr_26137_26177 = state_26132__$1;
(statearr_26137_26177[(2)] = null);

(statearr_26137_26177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (4))){
var inst_26073 = (state_26132[(13)]);
var inst_26073__$1 = (state_26132[(2)]);
var inst_26074 = (inst_26073__$1 == null);
var state_26132__$1 = (function (){var statearr_26138 = state_26132;
(statearr_26138[(13)] = inst_26073__$1);

return statearr_26138;
})();
if(cljs.core.truth_(inst_26074)){
var statearr_26139_26178 = state_26132__$1;
(statearr_26139_26178[(1)] = (5));

} else {
var statearr_26140_26179 = state_26132__$1;
(statearr_26140_26179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (15))){
var state_26132__$1 = state_26132;
var statearr_26144_26180 = state_26132__$1;
(statearr_26144_26180[(2)] = null);

(statearr_26144_26180[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (21))){
var state_26132__$1 = state_26132;
var statearr_26145_26181 = state_26132__$1;
(statearr_26145_26181[(2)] = null);

(statearr_26145_26181[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (13))){
var inst_26085 = (state_26132[(8)]);
var inst_26084 = (state_26132[(9)]);
var inst_26086 = (state_26132[(10)]);
var inst_26087 = (state_26132[(12)]);
var inst_26094 = (state_26132[(2)]);
var inst_26095 = (inst_26087 + (1));
var tmp26141 = inst_26085;
var tmp26142 = inst_26084;
var tmp26143 = inst_26086;
var inst_26084__$1 = tmp26142;
var inst_26085__$1 = tmp26141;
var inst_26086__$1 = tmp26143;
var inst_26087__$1 = inst_26095;
var state_26132__$1 = (function (){var statearr_26146 = state_26132;
(statearr_26146[(14)] = inst_26094);

(statearr_26146[(8)] = inst_26085__$1);

(statearr_26146[(9)] = inst_26084__$1);

(statearr_26146[(10)] = inst_26086__$1);

(statearr_26146[(12)] = inst_26087__$1);

return statearr_26146;
})();
var statearr_26147_26182 = state_26132__$1;
(statearr_26147_26182[(2)] = null);

(statearr_26147_26182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (22))){
var state_26132__$1 = state_26132;
var statearr_26148_26183 = state_26132__$1;
(statearr_26148_26183[(2)] = null);

(statearr_26148_26183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (6))){
var inst_26073 = (state_26132[(13)]);
var inst_26082 = f.call(null,inst_26073);
var inst_26083 = cljs.core.seq.call(null,inst_26082);
var inst_26084 = inst_26083;
var inst_26085 = null;
var inst_26086 = (0);
var inst_26087 = (0);
var state_26132__$1 = (function (){var statearr_26149 = state_26132;
(statearr_26149[(8)] = inst_26085);

(statearr_26149[(9)] = inst_26084);

(statearr_26149[(10)] = inst_26086);

(statearr_26149[(12)] = inst_26087);

return statearr_26149;
})();
var statearr_26150_26184 = state_26132__$1;
(statearr_26150_26184[(2)] = null);

(statearr_26150_26184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (17))){
var inst_26098 = (state_26132[(7)]);
var inst_26102 = cljs.core.chunk_first.call(null,inst_26098);
var inst_26103 = cljs.core.chunk_rest.call(null,inst_26098);
var inst_26104 = cljs.core.count.call(null,inst_26102);
var inst_26084 = inst_26103;
var inst_26085 = inst_26102;
var inst_26086 = inst_26104;
var inst_26087 = (0);
var state_26132__$1 = (function (){var statearr_26151 = state_26132;
(statearr_26151[(8)] = inst_26085);

(statearr_26151[(9)] = inst_26084);

(statearr_26151[(10)] = inst_26086);

(statearr_26151[(12)] = inst_26087);

return statearr_26151;
})();
var statearr_26152_26185 = state_26132__$1;
(statearr_26152_26185[(2)] = null);

(statearr_26152_26185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (3))){
var inst_26130 = (state_26132[(2)]);
var state_26132__$1 = state_26132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26132__$1,inst_26130);
} else {
if((state_val_26133 === (12))){
var inst_26118 = (state_26132[(2)]);
var state_26132__$1 = state_26132;
var statearr_26153_26186 = state_26132__$1;
(statearr_26153_26186[(2)] = inst_26118);

(statearr_26153_26186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (2))){
var state_26132__$1 = state_26132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26132__$1,(4),in$);
} else {
if((state_val_26133 === (23))){
var inst_26126 = (state_26132[(2)]);
var state_26132__$1 = state_26132;
var statearr_26154_26187 = state_26132__$1;
(statearr_26154_26187[(2)] = inst_26126);

(statearr_26154_26187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (19))){
var inst_26113 = (state_26132[(2)]);
var state_26132__$1 = state_26132;
var statearr_26155_26188 = state_26132__$1;
(statearr_26155_26188[(2)] = inst_26113);

(statearr_26155_26188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (11))){
var inst_26098 = (state_26132[(7)]);
var inst_26084 = (state_26132[(9)]);
var inst_26098__$1 = cljs.core.seq.call(null,inst_26084);
var state_26132__$1 = (function (){var statearr_26156 = state_26132;
(statearr_26156[(7)] = inst_26098__$1);

return statearr_26156;
})();
if(inst_26098__$1){
var statearr_26157_26189 = state_26132__$1;
(statearr_26157_26189[(1)] = (14));

} else {
var statearr_26158_26190 = state_26132__$1;
(statearr_26158_26190[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (9))){
var inst_26120 = (state_26132[(2)]);
var inst_26121 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26132__$1 = (function (){var statearr_26159 = state_26132;
(statearr_26159[(15)] = inst_26120);

return statearr_26159;
})();
if(cljs.core.truth_(inst_26121)){
var statearr_26160_26191 = state_26132__$1;
(statearr_26160_26191[(1)] = (21));

} else {
var statearr_26161_26192 = state_26132__$1;
(statearr_26161_26192[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (5))){
var inst_26076 = cljs.core.async.close_BANG_.call(null,out);
var state_26132__$1 = state_26132;
var statearr_26162_26193 = state_26132__$1;
(statearr_26162_26193[(2)] = inst_26076);

(statearr_26162_26193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (14))){
var inst_26098 = (state_26132[(7)]);
var inst_26100 = cljs.core.chunked_seq_QMARK_.call(null,inst_26098);
var state_26132__$1 = state_26132;
if(inst_26100){
var statearr_26163_26194 = state_26132__$1;
(statearr_26163_26194[(1)] = (17));

} else {
var statearr_26164_26195 = state_26132__$1;
(statearr_26164_26195[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (16))){
var inst_26116 = (state_26132[(2)]);
var state_26132__$1 = state_26132;
var statearr_26165_26196 = state_26132__$1;
(statearr_26165_26196[(2)] = inst_26116);

(statearr_26165_26196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26133 === (10))){
var inst_26085 = (state_26132[(8)]);
var inst_26087 = (state_26132[(12)]);
var inst_26092 = cljs.core._nth.call(null,inst_26085,inst_26087);
var state_26132__$1 = state_26132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26132__$1,(13),out,inst_26092);
} else {
if((state_val_26133 === (18))){
var inst_26098 = (state_26132[(7)]);
var inst_26107 = cljs.core.first.call(null,inst_26098);
var state_26132__$1 = state_26132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26132__$1,(20),out,inst_26107);
} else {
if((state_val_26133 === (8))){
var inst_26086 = (state_26132[(10)]);
var inst_26087 = (state_26132[(12)]);
var inst_26089 = (inst_26087 < inst_26086);
var inst_26090 = inst_26089;
var state_26132__$1 = state_26132;
if(cljs.core.truth_(inst_26090)){
var statearr_26166_26197 = state_26132__$1;
(statearr_26166_26197[(1)] = (10));

} else {
var statearr_26167_26198 = state_26132__$1;
(statearr_26167_26198[(1)] = (11));

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
});})(c__19380__auto__))
;
return ((function (switch__19359__auto__,c__19380__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____0 = (function (){
var statearr_26171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26171[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__);

(statearr_26171[(1)] = (1));

return statearr_26171;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____1 = (function (state_26132){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_26132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e26172){if((e26172 instanceof Object)){
var ex__19363__auto__ = e26172;
var statearr_26173_26199 = state_26132;
(statearr_26173_26199[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26200 = state_26132;
state_26132 = G__26200;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__ = function(state_26132){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____1.call(this,state_26132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19360__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto__))
})();
var state__19382__auto__ = (function (){var statearr_26174 = f__19381__auto__.call(null);
(statearr_26174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto__);

return statearr_26174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto__))
);

return c__19380__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26201 = [];
var len__17416__auto___26204 = arguments.length;
var i__17417__auto___26205 = (0);
while(true){
if((i__17417__auto___26205 < len__17416__auto___26204)){
args26201.push((arguments[i__17417__auto___26205]));

var G__26206 = (i__17417__auto___26205 + (1));
i__17417__auto___26205 = G__26206;
continue;
} else {
}
break;
}

var G__26203 = args26201.length;
switch (G__26203) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26201.length)].join('')));

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
var args26208 = [];
var len__17416__auto___26211 = arguments.length;
var i__17417__auto___26212 = (0);
while(true){
if((i__17417__auto___26212 < len__17416__auto___26211)){
args26208.push((arguments[i__17417__auto___26212]));

var G__26213 = (i__17417__auto___26212 + (1));
i__17417__auto___26212 = G__26213;
continue;
} else {
}
break;
}

var G__26210 = args26208.length;
switch (G__26210) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26208.length)].join('')));

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
var args26215 = [];
var len__17416__auto___26266 = arguments.length;
var i__17417__auto___26267 = (0);
while(true){
if((i__17417__auto___26267 < len__17416__auto___26266)){
args26215.push((arguments[i__17417__auto___26267]));

var G__26268 = (i__17417__auto___26267 + (1));
i__17417__auto___26267 = G__26268;
continue;
} else {
}
break;
}

var G__26217 = args26215.length;
switch (G__26217) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26215.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19380__auto___26270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___26270,out){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___26270,out){
return (function (state_26241){
var state_val_26242 = (state_26241[(1)]);
if((state_val_26242 === (7))){
var inst_26236 = (state_26241[(2)]);
var state_26241__$1 = state_26241;
var statearr_26243_26271 = state_26241__$1;
(statearr_26243_26271[(2)] = inst_26236);

(statearr_26243_26271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (1))){
var inst_26218 = null;
var state_26241__$1 = (function (){var statearr_26244 = state_26241;
(statearr_26244[(7)] = inst_26218);

return statearr_26244;
})();
var statearr_26245_26272 = state_26241__$1;
(statearr_26245_26272[(2)] = null);

(statearr_26245_26272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (4))){
var inst_26221 = (state_26241[(8)]);
var inst_26221__$1 = (state_26241[(2)]);
var inst_26222 = (inst_26221__$1 == null);
var inst_26223 = cljs.core.not.call(null,inst_26222);
var state_26241__$1 = (function (){var statearr_26246 = state_26241;
(statearr_26246[(8)] = inst_26221__$1);

return statearr_26246;
})();
if(inst_26223){
var statearr_26247_26273 = state_26241__$1;
(statearr_26247_26273[(1)] = (5));

} else {
var statearr_26248_26274 = state_26241__$1;
(statearr_26248_26274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (6))){
var state_26241__$1 = state_26241;
var statearr_26249_26275 = state_26241__$1;
(statearr_26249_26275[(2)] = null);

(statearr_26249_26275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (3))){
var inst_26238 = (state_26241[(2)]);
var inst_26239 = cljs.core.async.close_BANG_.call(null,out);
var state_26241__$1 = (function (){var statearr_26250 = state_26241;
(statearr_26250[(9)] = inst_26238);

return statearr_26250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26241__$1,inst_26239);
} else {
if((state_val_26242 === (2))){
var state_26241__$1 = state_26241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26241__$1,(4),ch);
} else {
if((state_val_26242 === (11))){
var inst_26221 = (state_26241[(8)]);
var inst_26230 = (state_26241[(2)]);
var inst_26218 = inst_26221;
var state_26241__$1 = (function (){var statearr_26251 = state_26241;
(statearr_26251[(7)] = inst_26218);

(statearr_26251[(10)] = inst_26230);

return statearr_26251;
})();
var statearr_26252_26276 = state_26241__$1;
(statearr_26252_26276[(2)] = null);

(statearr_26252_26276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (9))){
var inst_26221 = (state_26241[(8)]);
var state_26241__$1 = state_26241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26241__$1,(11),out,inst_26221);
} else {
if((state_val_26242 === (5))){
var inst_26218 = (state_26241[(7)]);
var inst_26221 = (state_26241[(8)]);
var inst_26225 = cljs.core._EQ_.call(null,inst_26221,inst_26218);
var state_26241__$1 = state_26241;
if(inst_26225){
var statearr_26254_26277 = state_26241__$1;
(statearr_26254_26277[(1)] = (8));

} else {
var statearr_26255_26278 = state_26241__$1;
(statearr_26255_26278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (10))){
var inst_26233 = (state_26241[(2)]);
var state_26241__$1 = state_26241;
var statearr_26256_26279 = state_26241__$1;
(statearr_26256_26279[(2)] = inst_26233);

(statearr_26256_26279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (8))){
var inst_26218 = (state_26241[(7)]);
var tmp26253 = inst_26218;
var inst_26218__$1 = tmp26253;
var state_26241__$1 = (function (){var statearr_26257 = state_26241;
(statearr_26257[(7)] = inst_26218__$1);

return statearr_26257;
})();
var statearr_26258_26280 = state_26241__$1;
(statearr_26258_26280[(2)] = null);

(statearr_26258_26280[(1)] = (2));


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
});})(c__19380__auto___26270,out))
;
return ((function (switch__19359__auto__,c__19380__auto___26270,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_26262 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26262[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_26262[(1)] = (1));

return statearr_26262;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_26241){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_26241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e26263){if((e26263 instanceof Object)){
var ex__19363__auto__ = e26263;
var statearr_26264_26281 = state_26241;
(statearr_26264_26281[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26282 = state_26241;
state_26241 = G__26282;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_26241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_26241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___26270,out))
})();
var state__19382__auto__ = (function (){var statearr_26265 = f__19381__auto__.call(null);
(statearr_26265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___26270);

return statearr_26265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___26270,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26283 = [];
var len__17416__auto___26353 = arguments.length;
var i__17417__auto___26354 = (0);
while(true){
if((i__17417__auto___26354 < len__17416__auto___26353)){
args26283.push((arguments[i__17417__auto___26354]));

var G__26355 = (i__17417__auto___26354 + (1));
i__17417__auto___26354 = G__26355;
continue;
} else {
}
break;
}

var G__26285 = args26283.length;
switch (G__26285) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26283.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19380__auto___26357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___26357,out){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___26357,out){
return (function (state_26323){
var state_val_26324 = (state_26323[(1)]);
if((state_val_26324 === (7))){
var inst_26319 = (state_26323[(2)]);
var state_26323__$1 = state_26323;
var statearr_26325_26358 = state_26323__$1;
(statearr_26325_26358[(2)] = inst_26319);

(statearr_26325_26358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26324 === (1))){
var inst_26286 = (new Array(n));
var inst_26287 = inst_26286;
var inst_26288 = (0);
var state_26323__$1 = (function (){var statearr_26326 = state_26323;
(statearr_26326[(7)] = inst_26287);

(statearr_26326[(8)] = inst_26288);

return statearr_26326;
})();
var statearr_26327_26359 = state_26323__$1;
(statearr_26327_26359[(2)] = null);

(statearr_26327_26359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26324 === (4))){
var inst_26291 = (state_26323[(9)]);
var inst_26291__$1 = (state_26323[(2)]);
var inst_26292 = (inst_26291__$1 == null);
var inst_26293 = cljs.core.not.call(null,inst_26292);
var state_26323__$1 = (function (){var statearr_26328 = state_26323;
(statearr_26328[(9)] = inst_26291__$1);

return statearr_26328;
})();
if(inst_26293){
var statearr_26329_26360 = state_26323__$1;
(statearr_26329_26360[(1)] = (5));

} else {
var statearr_26330_26361 = state_26323__$1;
(statearr_26330_26361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26324 === (15))){
var inst_26313 = (state_26323[(2)]);
var state_26323__$1 = state_26323;
var statearr_26331_26362 = state_26323__$1;
(statearr_26331_26362[(2)] = inst_26313);

(statearr_26331_26362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26324 === (13))){
var state_26323__$1 = state_26323;
var statearr_26332_26363 = state_26323__$1;
(statearr_26332_26363[(2)] = null);

(statearr_26332_26363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26324 === (6))){
var inst_26288 = (state_26323[(8)]);
var inst_26309 = (inst_26288 > (0));
var state_26323__$1 = state_26323;
if(cljs.core.truth_(inst_26309)){
var statearr_26333_26364 = state_26323__$1;
(statearr_26333_26364[(1)] = (12));

} else {
var statearr_26334_26365 = state_26323__$1;
(statearr_26334_26365[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26324 === (3))){
var inst_26321 = (state_26323[(2)]);
var state_26323__$1 = state_26323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26323__$1,inst_26321);
} else {
if((state_val_26324 === (12))){
var inst_26287 = (state_26323[(7)]);
var inst_26311 = cljs.core.vec.call(null,inst_26287);
var state_26323__$1 = state_26323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26323__$1,(15),out,inst_26311);
} else {
if((state_val_26324 === (2))){
var state_26323__$1 = state_26323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26323__$1,(4),ch);
} else {
if((state_val_26324 === (11))){
var inst_26303 = (state_26323[(2)]);
var inst_26304 = (new Array(n));
var inst_26287 = inst_26304;
var inst_26288 = (0);
var state_26323__$1 = (function (){var statearr_26335 = state_26323;
(statearr_26335[(10)] = inst_26303);

(statearr_26335[(7)] = inst_26287);

(statearr_26335[(8)] = inst_26288);

return statearr_26335;
})();
var statearr_26336_26366 = state_26323__$1;
(statearr_26336_26366[(2)] = null);

(statearr_26336_26366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26324 === (9))){
var inst_26287 = (state_26323[(7)]);
var inst_26301 = cljs.core.vec.call(null,inst_26287);
var state_26323__$1 = state_26323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26323__$1,(11),out,inst_26301);
} else {
if((state_val_26324 === (5))){
var inst_26287 = (state_26323[(7)]);
var inst_26296 = (state_26323[(11)]);
var inst_26291 = (state_26323[(9)]);
var inst_26288 = (state_26323[(8)]);
var inst_26295 = (inst_26287[inst_26288] = inst_26291);
var inst_26296__$1 = (inst_26288 + (1));
var inst_26297 = (inst_26296__$1 < n);
var state_26323__$1 = (function (){var statearr_26337 = state_26323;
(statearr_26337[(11)] = inst_26296__$1);

(statearr_26337[(12)] = inst_26295);

return statearr_26337;
})();
if(cljs.core.truth_(inst_26297)){
var statearr_26338_26367 = state_26323__$1;
(statearr_26338_26367[(1)] = (8));

} else {
var statearr_26339_26368 = state_26323__$1;
(statearr_26339_26368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26324 === (14))){
var inst_26316 = (state_26323[(2)]);
var inst_26317 = cljs.core.async.close_BANG_.call(null,out);
var state_26323__$1 = (function (){var statearr_26341 = state_26323;
(statearr_26341[(13)] = inst_26316);

return statearr_26341;
})();
var statearr_26342_26369 = state_26323__$1;
(statearr_26342_26369[(2)] = inst_26317);

(statearr_26342_26369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26324 === (10))){
var inst_26307 = (state_26323[(2)]);
var state_26323__$1 = state_26323;
var statearr_26343_26370 = state_26323__$1;
(statearr_26343_26370[(2)] = inst_26307);

(statearr_26343_26370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26324 === (8))){
var inst_26287 = (state_26323[(7)]);
var inst_26296 = (state_26323[(11)]);
var tmp26340 = inst_26287;
var inst_26287__$1 = tmp26340;
var inst_26288 = inst_26296;
var state_26323__$1 = (function (){var statearr_26344 = state_26323;
(statearr_26344[(7)] = inst_26287__$1);

(statearr_26344[(8)] = inst_26288);

return statearr_26344;
})();
var statearr_26345_26371 = state_26323__$1;
(statearr_26345_26371[(2)] = null);

(statearr_26345_26371[(1)] = (2));


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
});})(c__19380__auto___26357,out))
;
return ((function (switch__19359__auto__,c__19380__auto___26357,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_26349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26349[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_26349[(1)] = (1));

return statearr_26349;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_26323){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_26323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e26350){if((e26350 instanceof Object)){
var ex__19363__auto__ = e26350;
var statearr_26351_26372 = state_26323;
(statearr_26351_26372[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26373 = state_26323;
state_26323 = G__26373;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_26323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_26323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___26357,out))
})();
var state__19382__auto__ = (function (){var statearr_26352 = f__19381__auto__.call(null);
(statearr_26352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___26357);

return statearr_26352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___26357,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26374 = [];
var len__17416__auto___26448 = arguments.length;
var i__17417__auto___26449 = (0);
while(true){
if((i__17417__auto___26449 < len__17416__auto___26448)){
args26374.push((arguments[i__17417__auto___26449]));

var G__26450 = (i__17417__auto___26449 + (1));
i__17417__auto___26449 = G__26450;
continue;
} else {
}
break;
}

var G__26376 = args26374.length;
switch (G__26376) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26374.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19380__auto___26452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19380__auto___26452,out){
return (function (){
var f__19381__auto__ = (function (){var switch__19359__auto__ = ((function (c__19380__auto___26452,out){
return (function (state_26418){
var state_val_26419 = (state_26418[(1)]);
if((state_val_26419 === (7))){
var inst_26414 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26420_26453 = state_26418__$1;
(statearr_26420_26453[(2)] = inst_26414);

(statearr_26420_26453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (1))){
var inst_26377 = [];
var inst_26378 = inst_26377;
var inst_26379 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26418__$1 = (function (){var statearr_26421 = state_26418;
(statearr_26421[(7)] = inst_26379);

(statearr_26421[(8)] = inst_26378);

return statearr_26421;
})();
var statearr_26422_26454 = state_26418__$1;
(statearr_26422_26454[(2)] = null);

(statearr_26422_26454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (4))){
var inst_26382 = (state_26418[(9)]);
var inst_26382__$1 = (state_26418[(2)]);
var inst_26383 = (inst_26382__$1 == null);
var inst_26384 = cljs.core.not.call(null,inst_26383);
var state_26418__$1 = (function (){var statearr_26423 = state_26418;
(statearr_26423[(9)] = inst_26382__$1);

return statearr_26423;
})();
if(inst_26384){
var statearr_26424_26455 = state_26418__$1;
(statearr_26424_26455[(1)] = (5));

} else {
var statearr_26425_26456 = state_26418__$1;
(statearr_26425_26456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (15))){
var inst_26408 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26426_26457 = state_26418__$1;
(statearr_26426_26457[(2)] = inst_26408);

(statearr_26426_26457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (13))){
var state_26418__$1 = state_26418;
var statearr_26427_26458 = state_26418__$1;
(statearr_26427_26458[(2)] = null);

(statearr_26427_26458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (6))){
var inst_26378 = (state_26418[(8)]);
var inst_26403 = inst_26378.length;
var inst_26404 = (inst_26403 > (0));
var state_26418__$1 = state_26418;
if(cljs.core.truth_(inst_26404)){
var statearr_26428_26459 = state_26418__$1;
(statearr_26428_26459[(1)] = (12));

} else {
var statearr_26429_26460 = state_26418__$1;
(statearr_26429_26460[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (3))){
var inst_26416 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26418__$1,inst_26416);
} else {
if((state_val_26419 === (12))){
var inst_26378 = (state_26418[(8)]);
var inst_26406 = cljs.core.vec.call(null,inst_26378);
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26418__$1,(15),out,inst_26406);
} else {
if((state_val_26419 === (2))){
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26418__$1,(4),ch);
} else {
if((state_val_26419 === (11))){
var inst_26386 = (state_26418[(10)]);
var inst_26382 = (state_26418[(9)]);
var inst_26396 = (state_26418[(2)]);
var inst_26397 = [];
var inst_26398 = inst_26397.push(inst_26382);
var inst_26378 = inst_26397;
var inst_26379 = inst_26386;
var state_26418__$1 = (function (){var statearr_26430 = state_26418;
(statearr_26430[(7)] = inst_26379);

(statearr_26430[(8)] = inst_26378);

(statearr_26430[(11)] = inst_26398);

(statearr_26430[(12)] = inst_26396);

return statearr_26430;
})();
var statearr_26431_26461 = state_26418__$1;
(statearr_26431_26461[(2)] = null);

(statearr_26431_26461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (9))){
var inst_26378 = (state_26418[(8)]);
var inst_26394 = cljs.core.vec.call(null,inst_26378);
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26418__$1,(11),out,inst_26394);
} else {
if((state_val_26419 === (5))){
var inst_26379 = (state_26418[(7)]);
var inst_26386 = (state_26418[(10)]);
var inst_26382 = (state_26418[(9)]);
var inst_26386__$1 = f.call(null,inst_26382);
var inst_26387 = cljs.core._EQ_.call(null,inst_26386__$1,inst_26379);
var inst_26388 = cljs.core.keyword_identical_QMARK_.call(null,inst_26379,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26389 = (inst_26387) || (inst_26388);
var state_26418__$1 = (function (){var statearr_26432 = state_26418;
(statearr_26432[(10)] = inst_26386__$1);

return statearr_26432;
})();
if(cljs.core.truth_(inst_26389)){
var statearr_26433_26462 = state_26418__$1;
(statearr_26433_26462[(1)] = (8));

} else {
var statearr_26434_26463 = state_26418__$1;
(statearr_26434_26463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (14))){
var inst_26411 = (state_26418[(2)]);
var inst_26412 = cljs.core.async.close_BANG_.call(null,out);
var state_26418__$1 = (function (){var statearr_26436 = state_26418;
(statearr_26436[(13)] = inst_26411);

return statearr_26436;
})();
var statearr_26437_26464 = state_26418__$1;
(statearr_26437_26464[(2)] = inst_26412);

(statearr_26437_26464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (10))){
var inst_26401 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26438_26465 = state_26418__$1;
(statearr_26438_26465[(2)] = inst_26401);

(statearr_26438_26465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (8))){
var inst_26378 = (state_26418[(8)]);
var inst_26386 = (state_26418[(10)]);
var inst_26382 = (state_26418[(9)]);
var inst_26391 = inst_26378.push(inst_26382);
var tmp26435 = inst_26378;
var inst_26378__$1 = tmp26435;
var inst_26379 = inst_26386;
var state_26418__$1 = (function (){var statearr_26439 = state_26418;
(statearr_26439[(7)] = inst_26379);

(statearr_26439[(8)] = inst_26378__$1);

(statearr_26439[(14)] = inst_26391);

return statearr_26439;
})();
var statearr_26440_26466 = state_26418__$1;
(statearr_26440_26466[(2)] = null);

(statearr_26440_26466[(1)] = (2));


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
});})(c__19380__auto___26452,out))
;
return ((function (switch__19359__auto__,c__19380__auto___26452,out){
return (function() {
var cljs$core$async$state_machine__19360__auto__ = null;
var cljs$core$async$state_machine__19360__auto____0 = (function (){
var statearr_26444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26444[(0)] = cljs$core$async$state_machine__19360__auto__);

(statearr_26444[(1)] = (1));

return statearr_26444;
});
var cljs$core$async$state_machine__19360__auto____1 = (function (state_26418){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_26418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e26445){if((e26445 instanceof Object)){
var ex__19363__auto__ = e26445;
var statearr_26446_26467 = state_26418;
(statearr_26446_26467[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26468 = state_26418;
state_26418 = G__26468;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
cljs$core$async$state_machine__19360__auto__ = function(state_26418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19360__auto____1.call(this,state_26418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19360__auto____0;
cljs$core$async$state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19360__auto____1;
return cljs$core$async$state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19380__auto___26452,out))
})();
var state__19382__auto__ = (function (){var statearr_26447 = f__19381__auto__.call(null);
(statearr_26447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19380__auto___26452);

return statearr_26447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19382__auto__);
});})(c__19380__auto___26452,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map