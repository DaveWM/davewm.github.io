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
if(typeof cljs.core.async.t_cljs$core$async25704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25704 = (function (fn_handler,f,meta25705){
this.fn_handler = fn_handler;
this.f = f;
this.meta25705 = meta25705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25706,meta25705__$1){
var self__ = this;
var _25706__$1 = this;
return (new cljs.core.async.t_cljs$core$async25704(self__.fn_handler,self__.f,meta25705__$1));
});

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25706){
var self__ = this;
var _25706__$1 = this;
return self__.meta25705;
});

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25705","meta25705",-1992181940,null)], null);
});

cljs.core.async.t_cljs$core$async25704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25704";

cljs.core.async.t_cljs$core$async25704.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async25704");
});

cljs.core.async.__GT_t_cljs$core$async25704 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async25704(fn_handler__$1,f__$1,meta25705){
return (new cljs.core.async.t_cljs$core$async25704(fn_handler__$1,f__$1,meta25705));
});

}

return (new cljs.core.async.t_cljs$core$async25704(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args25709 = [];
var len__17402__auto___25712 = arguments.length;
var i__17403__auto___25713 = (0);
while(true){
if((i__17403__auto___25713 < len__17402__auto___25712)){
args25709.push((arguments[i__17403__auto___25713]));

var G__25714 = (i__17403__auto___25713 + (1));
i__17403__auto___25713 = G__25714;
continue;
} else {
}
break;
}

var G__25711 = args25709.length;
switch (G__25711) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25709.length)].join('')));

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
var args25716 = [];
var len__17402__auto___25719 = arguments.length;
var i__17403__auto___25720 = (0);
while(true){
if((i__17403__auto___25720 < len__17402__auto___25719)){
args25716.push((arguments[i__17403__auto___25720]));

var G__25721 = (i__17403__auto___25720 + (1));
i__17403__auto___25720 = G__25721;
continue;
} else {
}
break;
}

var G__25718 = args25716.length;
switch (G__25718) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25716.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25723 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25723);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25723,ret){
return (function (){
return fn1.call(null,val_25723);
});})(val_25723,ret))
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
var args25724 = [];
var len__17402__auto___25727 = arguments.length;
var i__17403__auto___25728 = (0);
while(true){
if((i__17403__auto___25728 < len__17402__auto___25727)){
args25724.push((arguments[i__17403__auto___25728]));

var G__25729 = (i__17403__auto___25728 + (1));
i__17403__auto___25728 = G__25729;
continue;
} else {
}
break;
}

var G__25726 = args25724.length;
switch (G__25726) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25724.length)].join('')));

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
var n__17247__auto___25731 = n;
var x_25732 = (0);
while(true){
if((x_25732 < n__17247__auto___25731)){
(a[x_25732] = (0));

var G__25733 = (x_25732 + (1));
x_25732 = G__25733;
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

var G__25734 = (i + (1));
i = G__25734;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25738 = (function (alt_flag,flag,meta25739){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25739 = meta25739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25740,meta25739__$1){
var self__ = this;
var _25740__$1 = this;
return (new cljs.core.async.t_cljs$core$async25738(self__.alt_flag,self__.flag,meta25739__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25740){
var self__ = this;
var _25740__$1 = this;
return self__.meta25739;
});})(flag))
;

cljs.core.async.t_cljs$core$async25738.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25738.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25739","meta25739",1398934746,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25738";

cljs.core.async.t_cljs$core$async25738.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async25738");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25738 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25738(alt_flag__$1,flag__$1,meta25739){
return (new cljs.core.async.t_cljs$core$async25738(alt_flag__$1,flag__$1,meta25739));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25738(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25744 = (function (alt_handler,flag,cb,meta25745){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25745 = meta25745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25746,meta25745__$1){
var self__ = this;
var _25746__$1 = this;
return (new cljs.core.async.t_cljs$core$async25744(self__.alt_handler,self__.flag,self__.cb,meta25745__$1));
});

cljs.core.async.t_cljs$core$async25744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25746){
var self__ = this;
var _25746__$1 = this;
return self__.meta25745;
});

cljs.core.async.t_cljs$core$async25744.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25745","meta25745",1776549730,null)], null);
});

cljs.core.async.t_cljs$core$async25744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25744";

cljs.core.async.t_cljs$core$async25744.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async25744");
});

cljs.core.async.__GT_t_cljs$core$async25744 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25744(alt_handler__$1,flag__$1,cb__$1,meta25745){
return (new cljs.core.async.t_cljs$core$async25744(alt_handler__$1,flag__$1,cb__$1,meta25745));
});

}

return (new cljs.core.async.t_cljs$core$async25744(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25747_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25747_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25748_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25748_SHARP_,port], null));
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
var G__25749 = (i + (1));
i = G__25749;
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
var len__17402__auto___25755 = arguments.length;
var i__17403__auto___25756 = (0);
while(true){
if((i__17403__auto___25756 < len__17402__auto___25755)){
args__17409__auto__.push((arguments[i__17403__auto___25756]));

var G__25757 = (i__17403__auto___25756 + (1));
i__17403__auto___25756 = G__25757;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25752){
var map__25753 = p__25752;
var map__25753__$1 = ((((!((map__25753 == null)))?((((map__25753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25753):map__25753);
var opts = map__25753__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25750){
var G__25751 = cljs.core.first.call(null,seq25750);
var seq25750__$1 = cljs.core.next.call(null,seq25750);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25751,seq25750__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25758 = [];
var len__17402__auto___25808 = arguments.length;
var i__17403__auto___25809 = (0);
while(true){
if((i__17403__auto___25809 < len__17402__auto___25808)){
args25758.push((arguments[i__17403__auto___25809]));

var G__25810 = (i__17403__auto___25809 + (1));
i__17403__auto___25809 = G__25810;
continue;
} else {
}
break;
}

var G__25760 = args25758.length;
switch (G__25760) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25758.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19367__auto___25812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___25812){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___25812){
return (function (state_25784){
var state_val_25785 = (state_25784[(1)]);
if((state_val_25785 === (7))){
var inst_25780 = (state_25784[(2)]);
var state_25784__$1 = state_25784;
var statearr_25786_25813 = state_25784__$1;
(statearr_25786_25813[(2)] = inst_25780);

(statearr_25786_25813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (1))){
var state_25784__$1 = state_25784;
var statearr_25787_25814 = state_25784__$1;
(statearr_25787_25814[(2)] = null);

(statearr_25787_25814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (4))){
var inst_25763 = (state_25784[(7)]);
var inst_25763__$1 = (state_25784[(2)]);
var inst_25764 = (inst_25763__$1 == null);
var state_25784__$1 = (function (){var statearr_25788 = state_25784;
(statearr_25788[(7)] = inst_25763__$1);

return statearr_25788;
})();
if(cljs.core.truth_(inst_25764)){
var statearr_25789_25815 = state_25784__$1;
(statearr_25789_25815[(1)] = (5));

} else {
var statearr_25790_25816 = state_25784__$1;
(statearr_25790_25816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (13))){
var state_25784__$1 = state_25784;
var statearr_25791_25817 = state_25784__$1;
(statearr_25791_25817[(2)] = null);

(statearr_25791_25817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (6))){
var inst_25763 = (state_25784[(7)]);
var state_25784__$1 = state_25784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25784__$1,(11),to,inst_25763);
} else {
if((state_val_25785 === (3))){
var inst_25782 = (state_25784[(2)]);
var state_25784__$1 = state_25784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25784__$1,inst_25782);
} else {
if((state_val_25785 === (12))){
var state_25784__$1 = state_25784;
var statearr_25792_25818 = state_25784__$1;
(statearr_25792_25818[(2)] = null);

(statearr_25792_25818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (2))){
var state_25784__$1 = state_25784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25784__$1,(4),from);
} else {
if((state_val_25785 === (11))){
var inst_25773 = (state_25784[(2)]);
var state_25784__$1 = state_25784;
if(cljs.core.truth_(inst_25773)){
var statearr_25793_25819 = state_25784__$1;
(statearr_25793_25819[(1)] = (12));

} else {
var statearr_25794_25820 = state_25784__$1;
(statearr_25794_25820[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (9))){
var state_25784__$1 = state_25784;
var statearr_25795_25821 = state_25784__$1;
(statearr_25795_25821[(2)] = null);

(statearr_25795_25821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (5))){
var state_25784__$1 = state_25784;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25796_25822 = state_25784__$1;
(statearr_25796_25822[(1)] = (8));

} else {
var statearr_25797_25823 = state_25784__$1;
(statearr_25797_25823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (14))){
var inst_25778 = (state_25784[(2)]);
var state_25784__$1 = state_25784;
var statearr_25798_25824 = state_25784__$1;
(statearr_25798_25824[(2)] = inst_25778);

(statearr_25798_25824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (10))){
var inst_25770 = (state_25784[(2)]);
var state_25784__$1 = state_25784;
var statearr_25799_25825 = state_25784__$1;
(statearr_25799_25825[(2)] = inst_25770);

(statearr_25799_25825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (8))){
var inst_25767 = cljs.core.async.close_BANG_.call(null,to);
var state_25784__$1 = state_25784;
var statearr_25800_25826 = state_25784__$1;
(statearr_25800_25826[(2)] = inst_25767);

(statearr_25800_25826[(1)] = (10));


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
});})(c__19367__auto___25812))
;
return ((function (switch__19346__auto__,c__19367__auto___25812){
return (function() {
var cljs$core$async$state_machine__19347__auto__ = null;
var cljs$core$async$state_machine__19347__auto____0 = (function (){
var statearr_25804 = [null,null,null,null,null,null,null,null];
(statearr_25804[(0)] = cljs$core$async$state_machine__19347__auto__);

(statearr_25804[(1)] = (1));

return statearr_25804;
});
var cljs$core$async$state_machine__19347__auto____1 = (function (state_25784){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_25784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e25805){if((e25805 instanceof Object)){
var ex__19350__auto__ = e25805;
var statearr_25806_25827 = state_25784;
(statearr_25806_25827[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25828 = state_25784;
state_25784 = G__25828;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$state_machine__19347__auto__ = function(state_25784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19347__auto____1.call(this,state_25784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19347__auto____0;
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19347__auto____1;
return cljs$core$async$state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___25812))
})();
var state__19369__auto__ = (function (){var statearr_25807 = f__19368__auto__.call(null);
(statearr_25807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___25812);

return statearr_25807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___25812))
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
return (function (p__26012){
var vec__26013 = p__26012;
var v = cljs.core.nth.call(null,vec__26013,(0),null);
var p = cljs.core.nth.call(null,vec__26013,(1),null);
var job = vec__26013;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19367__auto___26195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___26195,res,vec__26013,v,p,job,jobs,results){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___26195,res,vec__26013,v,p,job,jobs,results){
return (function (state_26018){
var state_val_26019 = (state_26018[(1)]);
if((state_val_26019 === (1))){
var state_26018__$1 = state_26018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26018__$1,(2),res,v);
} else {
if((state_val_26019 === (2))){
var inst_26015 = (state_26018[(2)]);
var inst_26016 = cljs.core.async.close_BANG_.call(null,res);
var state_26018__$1 = (function (){var statearr_26020 = state_26018;
(statearr_26020[(7)] = inst_26015);

return statearr_26020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26018__$1,inst_26016);
} else {
return null;
}
}
});})(c__19367__auto___26195,res,vec__26013,v,p,job,jobs,results))
;
return ((function (switch__19346__auto__,c__19367__auto___26195,res,vec__26013,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0 = (function (){
var statearr_26024 = [null,null,null,null,null,null,null,null];
(statearr_26024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__);

(statearr_26024[(1)] = (1));

return statearr_26024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1 = (function (state_26018){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_26018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e26025){if((e26025 instanceof Object)){
var ex__19350__auto__ = e26025;
var statearr_26026_26196 = state_26018;
(statearr_26026_26196[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26197 = state_26018;
state_26018 = G__26197;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__ = function(state_26018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1.call(this,state_26018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___26195,res,vec__26013,v,p,job,jobs,results))
})();
var state__19369__auto__ = (function (){var statearr_26027 = f__19368__auto__.call(null);
(statearr_26027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___26195);

return statearr_26027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___26195,res,vec__26013,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26028){
var vec__26029 = p__26028;
var v = cljs.core.nth.call(null,vec__26029,(0),null);
var p = cljs.core.nth.call(null,vec__26029,(1),null);
var job = vec__26029;
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
var n__17247__auto___26198 = n;
var __26199 = (0);
while(true){
if((__26199 < n__17247__auto___26198)){
var G__26030_26200 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26030_26200) {
case "compute":
var c__19367__auto___26202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26199,c__19367__auto___26202,G__26030_26200,n__17247__auto___26198,jobs,results,process,async){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (__26199,c__19367__auto___26202,G__26030_26200,n__17247__auto___26198,jobs,results,process,async){
return (function (state_26043){
var state_val_26044 = (state_26043[(1)]);
if((state_val_26044 === (1))){
var state_26043__$1 = state_26043;
var statearr_26045_26203 = state_26043__$1;
(statearr_26045_26203[(2)] = null);

(statearr_26045_26203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (2))){
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26043__$1,(4),jobs);
} else {
if((state_val_26044 === (3))){
var inst_26041 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26043__$1,inst_26041);
} else {
if((state_val_26044 === (4))){
var inst_26033 = (state_26043[(2)]);
var inst_26034 = process.call(null,inst_26033);
var state_26043__$1 = state_26043;
if(cljs.core.truth_(inst_26034)){
var statearr_26046_26204 = state_26043__$1;
(statearr_26046_26204[(1)] = (5));

} else {
var statearr_26047_26205 = state_26043__$1;
(statearr_26047_26205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (5))){
var state_26043__$1 = state_26043;
var statearr_26048_26206 = state_26043__$1;
(statearr_26048_26206[(2)] = null);

(statearr_26048_26206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (6))){
var state_26043__$1 = state_26043;
var statearr_26049_26207 = state_26043__$1;
(statearr_26049_26207[(2)] = null);

(statearr_26049_26207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (7))){
var inst_26039 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26050_26208 = state_26043__$1;
(statearr_26050_26208[(2)] = inst_26039);

(statearr_26050_26208[(1)] = (3));


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
});})(__26199,c__19367__auto___26202,G__26030_26200,n__17247__auto___26198,jobs,results,process,async))
;
return ((function (__26199,switch__19346__auto__,c__19367__auto___26202,G__26030_26200,n__17247__auto___26198,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0 = (function (){
var statearr_26054 = [null,null,null,null,null,null,null];
(statearr_26054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__);

(statearr_26054[(1)] = (1));

return statearr_26054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1 = (function (state_26043){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_26043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e26055){if((e26055 instanceof Object)){
var ex__19350__auto__ = e26055;
var statearr_26056_26209 = state_26043;
(statearr_26056_26209[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26210 = state_26043;
state_26043 = G__26210;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__ = function(state_26043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1.call(this,state_26043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__;
})()
;})(__26199,switch__19346__auto__,c__19367__auto___26202,G__26030_26200,n__17247__auto___26198,jobs,results,process,async))
})();
var state__19369__auto__ = (function (){var statearr_26057 = f__19368__auto__.call(null);
(statearr_26057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___26202);

return statearr_26057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(__26199,c__19367__auto___26202,G__26030_26200,n__17247__auto___26198,jobs,results,process,async))
);


break;
case "async":
var c__19367__auto___26211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26199,c__19367__auto___26211,G__26030_26200,n__17247__auto___26198,jobs,results,process,async){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (__26199,c__19367__auto___26211,G__26030_26200,n__17247__auto___26198,jobs,results,process,async){
return (function (state_26070){
var state_val_26071 = (state_26070[(1)]);
if((state_val_26071 === (1))){
var state_26070__$1 = state_26070;
var statearr_26072_26212 = state_26070__$1;
(statearr_26072_26212[(2)] = null);

(statearr_26072_26212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (2))){
var state_26070__$1 = state_26070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26070__$1,(4),jobs);
} else {
if((state_val_26071 === (3))){
var inst_26068 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26070__$1,inst_26068);
} else {
if((state_val_26071 === (4))){
var inst_26060 = (state_26070[(2)]);
var inst_26061 = async.call(null,inst_26060);
var state_26070__$1 = state_26070;
if(cljs.core.truth_(inst_26061)){
var statearr_26073_26213 = state_26070__$1;
(statearr_26073_26213[(1)] = (5));

} else {
var statearr_26074_26214 = state_26070__$1;
(statearr_26074_26214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (5))){
var state_26070__$1 = state_26070;
var statearr_26075_26215 = state_26070__$1;
(statearr_26075_26215[(2)] = null);

(statearr_26075_26215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (6))){
var state_26070__$1 = state_26070;
var statearr_26076_26216 = state_26070__$1;
(statearr_26076_26216[(2)] = null);

(statearr_26076_26216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26071 === (7))){
var inst_26066 = (state_26070[(2)]);
var state_26070__$1 = state_26070;
var statearr_26077_26217 = state_26070__$1;
(statearr_26077_26217[(2)] = inst_26066);

(statearr_26077_26217[(1)] = (3));


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
});})(__26199,c__19367__auto___26211,G__26030_26200,n__17247__auto___26198,jobs,results,process,async))
;
return ((function (__26199,switch__19346__auto__,c__19367__auto___26211,G__26030_26200,n__17247__auto___26198,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0 = (function (){
var statearr_26081 = [null,null,null,null,null,null,null];
(statearr_26081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__);

(statearr_26081[(1)] = (1));

return statearr_26081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1 = (function (state_26070){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_26070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e26082){if((e26082 instanceof Object)){
var ex__19350__auto__ = e26082;
var statearr_26083_26218 = state_26070;
(statearr_26083_26218[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26219 = state_26070;
state_26070 = G__26219;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__ = function(state_26070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1.call(this,state_26070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__;
})()
;})(__26199,switch__19346__auto__,c__19367__auto___26211,G__26030_26200,n__17247__auto___26198,jobs,results,process,async))
})();
var state__19369__auto__ = (function (){var statearr_26084 = f__19368__auto__.call(null);
(statearr_26084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___26211);

return statearr_26084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(__26199,c__19367__auto___26211,G__26030_26200,n__17247__auto___26198,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26220 = (__26199 + (1));
__26199 = G__26220;
continue;
} else {
}
break;
}

var c__19367__auto___26221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___26221,jobs,results,process,async){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___26221,jobs,results,process,async){
return (function (state_26106){
var state_val_26107 = (state_26106[(1)]);
if((state_val_26107 === (1))){
var state_26106__$1 = state_26106;
var statearr_26108_26222 = state_26106__$1;
(statearr_26108_26222[(2)] = null);

(statearr_26108_26222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (2))){
var state_26106__$1 = state_26106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26106__$1,(4),from);
} else {
if((state_val_26107 === (3))){
var inst_26104 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26106__$1,inst_26104);
} else {
if((state_val_26107 === (4))){
var inst_26087 = (state_26106[(7)]);
var inst_26087__$1 = (state_26106[(2)]);
var inst_26088 = (inst_26087__$1 == null);
var state_26106__$1 = (function (){var statearr_26109 = state_26106;
(statearr_26109[(7)] = inst_26087__$1);

return statearr_26109;
})();
if(cljs.core.truth_(inst_26088)){
var statearr_26110_26223 = state_26106__$1;
(statearr_26110_26223[(1)] = (5));

} else {
var statearr_26111_26224 = state_26106__$1;
(statearr_26111_26224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (5))){
var inst_26090 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26106__$1 = state_26106;
var statearr_26112_26225 = state_26106__$1;
(statearr_26112_26225[(2)] = inst_26090);

(statearr_26112_26225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (6))){
var inst_26092 = (state_26106[(8)]);
var inst_26087 = (state_26106[(7)]);
var inst_26092__$1 = cljs.core.async.chan.call(null,(1));
var inst_26093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26094 = [inst_26087,inst_26092__$1];
var inst_26095 = (new cljs.core.PersistentVector(null,2,(5),inst_26093,inst_26094,null));
var state_26106__$1 = (function (){var statearr_26113 = state_26106;
(statearr_26113[(8)] = inst_26092__$1);

return statearr_26113;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26106__$1,(8),jobs,inst_26095);
} else {
if((state_val_26107 === (7))){
var inst_26102 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
var statearr_26114_26226 = state_26106__$1;
(statearr_26114_26226[(2)] = inst_26102);

(statearr_26114_26226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (8))){
var inst_26092 = (state_26106[(8)]);
var inst_26097 = (state_26106[(2)]);
var state_26106__$1 = (function (){var statearr_26115 = state_26106;
(statearr_26115[(9)] = inst_26097);

return statearr_26115;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26106__$1,(9),results,inst_26092);
} else {
if((state_val_26107 === (9))){
var inst_26099 = (state_26106[(2)]);
var state_26106__$1 = (function (){var statearr_26116 = state_26106;
(statearr_26116[(10)] = inst_26099);

return statearr_26116;
})();
var statearr_26117_26227 = state_26106__$1;
(statearr_26117_26227[(2)] = null);

(statearr_26117_26227[(1)] = (2));


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
});})(c__19367__auto___26221,jobs,results,process,async))
;
return ((function (switch__19346__auto__,c__19367__auto___26221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0 = (function (){
var statearr_26121 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__);

(statearr_26121[(1)] = (1));

return statearr_26121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1 = (function (state_26106){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_26106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e26122){if((e26122 instanceof Object)){
var ex__19350__auto__ = e26122;
var statearr_26123_26228 = state_26106;
(statearr_26123_26228[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26229 = state_26106;
state_26106 = G__26229;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__ = function(state_26106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1.call(this,state_26106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___26221,jobs,results,process,async))
})();
var state__19369__auto__ = (function (){var statearr_26124 = f__19368__auto__.call(null);
(statearr_26124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___26221);

return statearr_26124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___26221,jobs,results,process,async))
);


var c__19367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto__,jobs,results,process,async){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto__,jobs,results,process,async){
return (function (state_26162){
var state_val_26163 = (state_26162[(1)]);
if((state_val_26163 === (7))){
var inst_26158 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26164_26230 = state_26162__$1;
(statearr_26164_26230[(2)] = inst_26158);

(statearr_26164_26230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (20))){
var state_26162__$1 = state_26162;
var statearr_26165_26231 = state_26162__$1;
(statearr_26165_26231[(2)] = null);

(statearr_26165_26231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (1))){
var state_26162__$1 = state_26162;
var statearr_26166_26232 = state_26162__$1;
(statearr_26166_26232[(2)] = null);

(statearr_26166_26232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (4))){
var inst_26127 = (state_26162[(7)]);
var inst_26127__$1 = (state_26162[(2)]);
var inst_26128 = (inst_26127__$1 == null);
var state_26162__$1 = (function (){var statearr_26167 = state_26162;
(statearr_26167[(7)] = inst_26127__$1);

return statearr_26167;
})();
if(cljs.core.truth_(inst_26128)){
var statearr_26168_26233 = state_26162__$1;
(statearr_26168_26233[(1)] = (5));

} else {
var statearr_26169_26234 = state_26162__$1;
(statearr_26169_26234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (15))){
var inst_26140 = (state_26162[(8)]);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26162__$1,(18),to,inst_26140);
} else {
if((state_val_26163 === (21))){
var inst_26153 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26170_26235 = state_26162__$1;
(statearr_26170_26235[(2)] = inst_26153);

(statearr_26170_26235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (13))){
var inst_26155 = (state_26162[(2)]);
var state_26162__$1 = (function (){var statearr_26171 = state_26162;
(statearr_26171[(9)] = inst_26155);

return statearr_26171;
})();
var statearr_26172_26236 = state_26162__$1;
(statearr_26172_26236[(2)] = null);

(statearr_26172_26236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (6))){
var inst_26127 = (state_26162[(7)]);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26162__$1,(11),inst_26127);
} else {
if((state_val_26163 === (17))){
var inst_26148 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
if(cljs.core.truth_(inst_26148)){
var statearr_26173_26237 = state_26162__$1;
(statearr_26173_26237[(1)] = (19));

} else {
var statearr_26174_26238 = state_26162__$1;
(statearr_26174_26238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (3))){
var inst_26160 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26162__$1,inst_26160);
} else {
if((state_val_26163 === (12))){
var inst_26137 = (state_26162[(10)]);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26162__$1,(14),inst_26137);
} else {
if((state_val_26163 === (2))){
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26162__$1,(4),results);
} else {
if((state_val_26163 === (19))){
var state_26162__$1 = state_26162;
var statearr_26175_26239 = state_26162__$1;
(statearr_26175_26239[(2)] = null);

(statearr_26175_26239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (11))){
var inst_26137 = (state_26162[(2)]);
var state_26162__$1 = (function (){var statearr_26176 = state_26162;
(statearr_26176[(10)] = inst_26137);

return statearr_26176;
})();
var statearr_26177_26240 = state_26162__$1;
(statearr_26177_26240[(2)] = null);

(statearr_26177_26240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (9))){
var state_26162__$1 = state_26162;
var statearr_26178_26241 = state_26162__$1;
(statearr_26178_26241[(2)] = null);

(statearr_26178_26241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (5))){
var state_26162__$1 = state_26162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26179_26242 = state_26162__$1;
(statearr_26179_26242[(1)] = (8));

} else {
var statearr_26180_26243 = state_26162__$1;
(statearr_26180_26243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (14))){
var inst_26142 = (state_26162[(11)]);
var inst_26140 = (state_26162[(8)]);
var inst_26140__$1 = (state_26162[(2)]);
var inst_26141 = (inst_26140__$1 == null);
var inst_26142__$1 = cljs.core.not.call(null,inst_26141);
var state_26162__$1 = (function (){var statearr_26181 = state_26162;
(statearr_26181[(11)] = inst_26142__$1);

(statearr_26181[(8)] = inst_26140__$1);

return statearr_26181;
})();
if(inst_26142__$1){
var statearr_26182_26244 = state_26162__$1;
(statearr_26182_26244[(1)] = (15));

} else {
var statearr_26183_26245 = state_26162__$1;
(statearr_26183_26245[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (16))){
var inst_26142 = (state_26162[(11)]);
var state_26162__$1 = state_26162;
var statearr_26184_26246 = state_26162__$1;
(statearr_26184_26246[(2)] = inst_26142);

(statearr_26184_26246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (10))){
var inst_26134 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26185_26247 = state_26162__$1;
(statearr_26185_26247[(2)] = inst_26134);

(statearr_26185_26247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (18))){
var inst_26145 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26186_26248 = state_26162__$1;
(statearr_26186_26248[(2)] = inst_26145);

(statearr_26186_26248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (8))){
var inst_26131 = cljs.core.async.close_BANG_.call(null,to);
var state_26162__$1 = state_26162;
var statearr_26187_26249 = state_26162__$1;
(statearr_26187_26249[(2)] = inst_26131);

(statearr_26187_26249[(1)] = (10));


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
});})(c__19367__auto__,jobs,results,process,async))
;
return ((function (switch__19346__auto__,c__19367__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0 = (function (){
var statearr_26191 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__);

(statearr_26191[(1)] = (1));

return statearr_26191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1 = (function (state_26162){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_26162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e26192){if((e26192 instanceof Object)){
var ex__19350__auto__ = e26192;
var statearr_26193_26250 = state_26162;
(statearr_26193_26250[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26251 = state_26162;
state_26162 = G__26251;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__ = function(state_26162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1.call(this,state_26162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto__,jobs,results,process,async))
})();
var state__19369__auto__ = (function (){var statearr_26194 = f__19368__auto__.call(null);
(statearr_26194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto__);

return statearr_26194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto__,jobs,results,process,async))
);

return c__19367__auto__;
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
var args26252 = [];
var len__17402__auto___26255 = arguments.length;
var i__17403__auto___26256 = (0);
while(true){
if((i__17403__auto___26256 < len__17402__auto___26255)){
args26252.push((arguments[i__17403__auto___26256]));

var G__26257 = (i__17403__auto___26256 + (1));
i__17403__auto___26256 = G__26257;
continue;
} else {
}
break;
}

var G__26254 = args26252.length;
switch (G__26254) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26252.length)].join('')));

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
var args26259 = [];
var len__17402__auto___26262 = arguments.length;
var i__17403__auto___26263 = (0);
while(true){
if((i__17403__auto___26263 < len__17402__auto___26262)){
args26259.push((arguments[i__17403__auto___26263]));

var G__26264 = (i__17403__auto___26263 + (1));
i__17403__auto___26263 = G__26264;
continue;
} else {
}
break;
}

var G__26261 = args26259.length;
switch (G__26261) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26259.length)].join('')));

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
var args26266 = [];
var len__17402__auto___26319 = arguments.length;
var i__17403__auto___26320 = (0);
while(true){
if((i__17403__auto___26320 < len__17402__auto___26319)){
args26266.push((arguments[i__17403__auto___26320]));

var G__26321 = (i__17403__auto___26320 + (1));
i__17403__auto___26320 = G__26321;
continue;
} else {
}
break;
}

var G__26268 = args26266.length;
switch (G__26268) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26266.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19367__auto___26323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___26323,tc,fc){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___26323,tc,fc){
return (function (state_26294){
var state_val_26295 = (state_26294[(1)]);
if((state_val_26295 === (7))){
var inst_26290 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26296_26324 = state_26294__$1;
(statearr_26296_26324[(2)] = inst_26290);

(statearr_26296_26324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (1))){
var state_26294__$1 = state_26294;
var statearr_26297_26325 = state_26294__$1;
(statearr_26297_26325[(2)] = null);

(statearr_26297_26325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (4))){
var inst_26271 = (state_26294[(7)]);
var inst_26271__$1 = (state_26294[(2)]);
var inst_26272 = (inst_26271__$1 == null);
var state_26294__$1 = (function (){var statearr_26298 = state_26294;
(statearr_26298[(7)] = inst_26271__$1);

return statearr_26298;
})();
if(cljs.core.truth_(inst_26272)){
var statearr_26299_26326 = state_26294__$1;
(statearr_26299_26326[(1)] = (5));

} else {
var statearr_26300_26327 = state_26294__$1;
(statearr_26300_26327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (13))){
var state_26294__$1 = state_26294;
var statearr_26301_26328 = state_26294__$1;
(statearr_26301_26328[(2)] = null);

(statearr_26301_26328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (6))){
var inst_26271 = (state_26294[(7)]);
var inst_26277 = p.call(null,inst_26271);
var state_26294__$1 = state_26294;
if(cljs.core.truth_(inst_26277)){
var statearr_26302_26329 = state_26294__$1;
(statearr_26302_26329[(1)] = (9));

} else {
var statearr_26303_26330 = state_26294__$1;
(statearr_26303_26330[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (3))){
var inst_26292 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26294__$1,inst_26292);
} else {
if((state_val_26295 === (12))){
var state_26294__$1 = state_26294;
var statearr_26304_26331 = state_26294__$1;
(statearr_26304_26331[(2)] = null);

(statearr_26304_26331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (2))){
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26294__$1,(4),ch);
} else {
if((state_val_26295 === (11))){
var inst_26271 = (state_26294[(7)]);
var inst_26281 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26294__$1,(8),inst_26281,inst_26271);
} else {
if((state_val_26295 === (9))){
var state_26294__$1 = state_26294;
var statearr_26305_26332 = state_26294__$1;
(statearr_26305_26332[(2)] = tc);

(statearr_26305_26332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (5))){
var inst_26274 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26275 = cljs.core.async.close_BANG_.call(null,fc);
var state_26294__$1 = (function (){var statearr_26306 = state_26294;
(statearr_26306[(8)] = inst_26274);

return statearr_26306;
})();
var statearr_26307_26333 = state_26294__$1;
(statearr_26307_26333[(2)] = inst_26275);

(statearr_26307_26333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (14))){
var inst_26288 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26308_26334 = state_26294__$1;
(statearr_26308_26334[(2)] = inst_26288);

(statearr_26308_26334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (10))){
var state_26294__$1 = state_26294;
var statearr_26309_26335 = state_26294__$1;
(statearr_26309_26335[(2)] = fc);

(statearr_26309_26335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (8))){
var inst_26283 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
if(cljs.core.truth_(inst_26283)){
var statearr_26310_26336 = state_26294__$1;
(statearr_26310_26336[(1)] = (12));

} else {
var statearr_26311_26337 = state_26294__$1;
(statearr_26311_26337[(1)] = (13));

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
});})(c__19367__auto___26323,tc,fc))
;
return ((function (switch__19346__auto__,c__19367__auto___26323,tc,fc){
return (function() {
var cljs$core$async$state_machine__19347__auto__ = null;
var cljs$core$async$state_machine__19347__auto____0 = (function (){
var statearr_26315 = [null,null,null,null,null,null,null,null,null];
(statearr_26315[(0)] = cljs$core$async$state_machine__19347__auto__);

(statearr_26315[(1)] = (1));

return statearr_26315;
});
var cljs$core$async$state_machine__19347__auto____1 = (function (state_26294){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_26294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e26316){if((e26316 instanceof Object)){
var ex__19350__auto__ = e26316;
var statearr_26317_26338 = state_26294;
(statearr_26317_26338[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26339 = state_26294;
state_26294 = G__26339;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$state_machine__19347__auto__ = function(state_26294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19347__auto____1.call(this,state_26294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19347__auto____0;
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19347__auto____1;
return cljs$core$async$state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___26323,tc,fc))
})();
var state__19369__auto__ = (function (){var statearr_26318 = f__19368__auto__.call(null);
(statearr_26318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___26323);

return statearr_26318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___26323,tc,fc))
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
var c__19367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto__){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto__){
return (function (state_26386){
var state_val_26387 = (state_26386[(1)]);
if((state_val_26387 === (1))){
var inst_26372 = init;
var state_26386__$1 = (function (){var statearr_26388 = state_26386;
(statearr_26388[(7)] = inst_26372);

return statearr_26388;
})();
var statearr_26389_26404 = state_26386__$1;
(statearr_26389_26404[(2)] = null);

(statearr_26389_26404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (2))){
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26386__$1,(4),ch);
} else {
if((state_val_26387 === (3))){
var inst_26384 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26386__$1,inst_26384);
} else {
if((state_val_26387 === (4))){
var inst_26375 = (state_26386[(8)]);
var inst_26375__$1 = (state_26386[(2)]);
var inst_26376 = (inst_26375__$1 == null);
var state_26386__$1 = (function (){var statearr_26390 = state_26386;
(statearr_26390[(8)] = inst_26375__$1);

return statearr_26390;
})();
if(cljs.core.truth_(inst_26376)){
var statearr_26391_26405 = state_26386__$1;
(statearr_26391_26405[(1)] = (5));

} else {
var statearr_26392_26406 = state_26386__$1;
(statearr_26392_26406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (5))){
var inst_26372 = (state_26386[(7)]);
var state_26386__$1 = state_26386;
var statearr_26393_26407 = state_26386__$1;
(statearr_26393_26407[(2)] = inst_26372);

(statearr_26393_26407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (6))){
var inst_26372 = (state_26386[(7)]);
var inst_26375 = (state_26386[(8)]);
var inst_26379 = f.call(null,inst_26372,inst_26375);
var inst_26372__$1 = inst_26379;
var state_26386__$1 = (function (){var statearr_26394 = state_26386;
(statearr_26394[(7)] = inst_26372__$1);

return statearr_26394;
})();
var statearr_26395_26408 = state_26386__$1;
(statearr_26395_26408[(2)] = null);

(statearr_26395_26408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (7))){
var inst_26382 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26396_26409 = state_26386__$1;
(statearr_26396_26409[(2)] = inst_26382);

(statearr_26396_26409[(1)] = (3));


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
});})(c__19367__auto__))
;
return ((function (switch__19346__auto__,c__19367__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19347__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19347__auto____0 = (function (){
var statearr_26400 = [null,null,null,null,null,null,null,null,null];
(statearr_26400[(0)] = cljs$core$async$reduce_$_state_machine__19347__auto__);

(statearr_26400[(1)] = (1));

return statearr_26400;
});
var cljs$core$async$reduce_$_state_machine__19347__auto____1 = (function (state_26386){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_26386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e26401){if((e26401 instanceof Object)){
var ex__19350__auto__ = e26401;
var statearr_26402_26410 = state_26386;
(statearr_26402_26410[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26411 = state_26386;
state_26386 = G__26411;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19347__auto__ = function(state_26386){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19347__auto____1.call(this,state_26386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19347__auto____0;
cljs$core$async$reduce_$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19347__auto____1;
return cljs$core$async$reduce_$_state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto__))
})();
var state__19369__auto__ = (function (){var statearr_26403 = f__19368__auto__.call(null);
(statearr_26403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto__);

return statearr_26403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto__))
);

return c__19367__auto__;
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
var args26412 = [];
var len__17402__auto___26464 = arguments.length;
var i__17403__auto___26465 = (0);
while(true){
if((i__17403__auto___26465 < len__17402__auto___26464)){
args26412.push((arguments[i__17403__auto___26465]));

var G__26466 = (i__17403__auto___26465 + (1));
i__17403__auto___26465 = G__26466;
continue;
} else {
}
break;
}

var G__26414 = args26412.length;
switch (G__26414) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26412.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto__){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto__){
return (function (state_26439){
var state_val_26440 = (state_26439[(1)]);
if((state_val_26440 === (7))){
var inst_26421 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
var statearr_26441_26468 = state_26439__$1;
(statearr_26441_26468[(2)] = inst_26421);

(statearr_26441_26468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (1))){
var inst_26415 = cljs.core.seq.call(null,coll);
var inst_26416 = inst_26415;
var state_26439__$1 = (function (){var statearr_26442 = state_26439;
(statearr_26442[(7)] = inst_26416);

return statearr_26442;
})();
var statearr_26443_26469 = state_26439__$1;
(statearr_26443_26469[(2)] = null);

(statearr_26443_26469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (4))){
var inst_26416 = (state_26439[(7)]);
var inst_26419 = cljs.core.first.call(null,inst_26416);
var state_26439__$1 = state_26439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26439__$1,(7),ch,inst_26419);
} else {
if((state_val_26440 === (13))){
var inst_26433 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
var statearr_26444_26470 = state_26439__$1;
(statearr_26444_26470[(2)] = inst_26433);

(statearr_26444_26470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (6))){
var inst_26424 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
if(cljs.core.truth_(inst_26424)){
var statearr_26445_26471 = state_26439__$1;
(statearr_26445_26471[(1)] = (8));

} else {
var statearr_26446_26472 = state_26439__$1;
(statearr_26446_26472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (3))){
var inst_26437 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26439__$1,inst_26437);
} else {
if((state_val_26440 === (12))){
var state_26439__$1 = state_26439;
var statearr_26447_26473 = state_26439__$1;
(statearr_26447_26473[(2)] = null);

(statearr_26447_26473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (2))){
var inst_26416 = (state_26439[(7)]);
var state_26439__$1 = state_26439;
if(cljs.core.truth_(inst_26416)){
var statearr_26448_26474 = state_26439__$1;
(statearr_26448_26474[(1)] = (4));

} else {
var statearr_26449_26475 = state_26439__$1;
(statearr_26449_26475[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (11))){
var inst_26430 = cljs.core.async.close_BANG_.call(null,ch);
var state_26439__$1 = state_26439;
var statearr_26450_26476 = state_26439__$1;
(statearr_26450_26476[(2)] = inst_26430);

(statearr_26450_26476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (9))){
var state_26439__$1 = state_26439;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26451_26477 = state_26439__$1;
(statearr_26451_26477[(1)] = (11));

} else {
var statearr_26452_26478 = state_26439__$1;
(statearr_26452_26478[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (5))){
var inst_26416 = (state_26439[(7)]);
var state_26439__$1 = state_26439;
var statearr_26453_26479 = state_26439__$1;
(statearr_26453_26479[(2)] = inst_26416);

(statearr_26453_26479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (10))){
var inst_26435 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
var statearr_26454_26480 = state_26439__$1;
(statearr_26454_26480[(2)] = inst_26435);

(statearr_26454_26480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (8))){
var inst_26416 = (state_26439[(7)]);
var inst_26426 = cljs.core.next.call(null,inst_26416);
var inst_26416__$1 = inst_26426;
var state_26439__$1 = (function (){var statearr_26455 = state_26439;
(statearr_26455[(7)] = inst_26416__$1);

return statearr_26455;
})();
var statearr_26456_26481 = state_26439__$1;
(statearr_26456_26481[(2)] = null);

(statearr_26456_26481[(1)] = (2));


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
});})(c__19367__auto__))
;
return ((function (switch__19346__auto__,c__19367__auto__){
return (function() {
var cljs$core$async$state_machine__19347__auto__ = null;
var cljs$core$async$state_machine__19347__auto____0 = (function (){
var statearr_26460 = [null,null,null,null,null,null,null,null];
(statearr_26460[(0)] = cljs$core$async$state_machine__19347__auto__);

(statearr_26460[(1)] = (1));

return statearr_26460;
});
var cljs$core$async$state_machine__19347__auto____1 = (function (state_26439){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_26439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e26461){if((e26461 instanceof Object)){
var ex__19350__auto__ = e26461;
var statearr_26462_26482 = state_26439;
(statearr_26462_26482[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26483 = state_26439;
state_26439 = G__26483;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$state_machine__19347__auto__ = function(state_26439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19347__auto____1.call(this,state_26439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19347__auto____0;
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19347__auto____1;
return cljs$core$async$state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto__))
})();
var state__19369__auto__ = (function (){var statearr_26463 = f__19368__auto__.call(null);
(statearr_26463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto__);

return statearr_26463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto__))
);

return c__19367__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async26705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26705 = (function (mult,ch,cs,meta26706){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26706 = meta26706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26707,meta26706__$1){
var self__ = this;
var _26707__$1 = this;
return (new cljs.core.async.t_cljs$core$async26705(self__.mult,self__.ch,self__.cs,meta26706__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26707){
var self__ = this;
var _26707__$1 = this;
return self__.meta26706;
});})(cs))
;

cljs.core.async.t_cljs$core$async26705.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26705.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26705.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26705.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26705.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26705.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26706","meta26706",-1706778265,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26705";

cljs.core.async.t_cljs$core$async26705.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async26705");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26705 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26705(mult__$1,ch__$1,cs__$1,meta26706){
return (new cljs.core.async.t_cljs$core$async26705(mult__$1,ch__$1,cs__$1,meta26706));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26705(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19367__auto___26926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___26926,cs,m,dchan,dctr,done){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___26926,cs,m,dchan,dctr,done){
return (function (state_26838){
var state_val_26839 = (state_26838[(1)]);
if((state_val_26839 === (7))){
var inst_26834 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26840_26927 = state_26838__$1;
(statearr_26840_26927[(2)] = inst_26834);

(statearr_26840_26927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (20))){
var inst_26739 = (state_26838[(7)]);
var inst_26749 = cljs.core.first.call(null,inst_26739);
var inst_26750 = cljs.core.nth.call(null,inst_26749,(0),null);
var inst_26751 = cljs.core.nth.call(null,inst_26749,(1),null);
var state_26838__$1 = (function (){var statearr_26841 = state_26838;
(statearr_26841[(8)] = inst_26750);

return statearr_26841;
})();
if(cljs.core.truth_(inst_26751)){
var statearr_26842_26928 = state_26838__$1;
(statearr_26842_26928[(1)] = (22));

} else {
var statearr_26843_26929 = state_26838__$1;
(statearr_26843_26929[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (27))){
var inst_26710 = (state_26838[(9)]);
var inst_26781 = (state_26838[(10)]);
var inst_26786 = (state_26838[(11)]);
var inst_26779 = (state_26838[(12)]);
var inst_26786__$1 = cljs.core._nth.call(null,inst_26779,inst_26781);
var inst_26787 = cljs.core.async.put_BANG_.call(null,inst_26786__$1,inst_26710,done);
var state_26838__$1 = (function (){var statearr_26844 = state_26838;
(statearr_26844[(11)] = inst_26786__$1);

return statearr_26844;
})();
if(cljs.core.truth_(inst_26787)){
var statearr_26845_26930 = state_26838__$1;
(statearr_26845_26930[(1)] = (30));

} else {
var statearr_26846_26931 = state_26838__$1;
(statearr_26846_26931[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (1))){
var state_26838__$1 = state_26838;
var statearr_26847_26932 = state_26838__$1;
(statearr_26847_26932[(2)] = null);

(statearr_26847_26932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (24))){
var inst_26739 = (state_26838[(7)]);
var inst_26756 = (state_26838[(2)]);
var inst_26757 = cljs.core.next.call(null,inst_26739);
var inst_26719 = inst_26757;
var inst_26720 = null;
var inst_26721 = (0);
var inst_26722 = (0);
var state_26838__$1 = (function (){var statearr_26848 = state_26838;
(statearr_26848[(13)] = inst_26722);

(statearr_26848[(14)] = inst_26719);

(statearr_26848[(15)] = inst_26721);

(statearr_26848[(16)] = inst_26756);

(statearr_26848[(17)] = inst_26720);

return statearr_26848;
})();
var statearr_26849_26933 = state_26838__$1;
(statearr_26849_26933[(2)] = null);

(statearr_26849_26933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (39))){
var state_26838__$1 = state_26838;
var statearr_26853_26934 = state_26838__$1;
(statearr_26853_26934[(2)] = null);

(statearr_26853_26934[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (4))){
var inst_26710 = (state_26838[(9)]);
var inst_26710__$1 = (state_26838[(2)]);
var inst_26711 = (inst_26710__$1 == null);
var state_26838__$1 = (function (){var statearr_26854 = state_26838;
(statearr_26854[(9)] = inst_26710__$1);

return statearr_26854;
})();
if(cljs.core.truth_(inst_26711)){
var statearr_26855_26935 = state_26838__$1;
(statearr_26855_26935[(1)] = (5));

} else {
var statearr_26856_26936 = state_26838__$1;
(statearr_26856_26936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (15))){
var inst_26722 = (state_26838[(13)]);
var inst_26719 = (state_26838[(14)]);
var inst_26721 = (state_26838[(15)]);
var inst_26720 = (state_26838[(17)]);
var inst_26735 = (state_26838[(2)]);
var inst_26736 = (inst_26722 + (1));
var tmp26850 = inst_26719;
var tmp26851 = inst_26721;
var tmp26852 = inst_26720;
var inst_26719__$1 = tmp26850;
var inst_26720__$1 = tmp26852;
var inst_26721__$1 = tmp26851;
var inst_26722__$1 = inst_26736;
var state_26838__$1 = (function (){var statearr_26857 = state_26838;
(statearr_26857[(13)] = inst_26722__$1);

(statearr_26857[(18)] = inst_26735);

(statearr_26857[(14)] = inst_26719__$1);

(statearr_26857[(15)] = inst_26721__$1);

(statearr_26857[(17)] = inst_26720__$1);

return statearr_26857;
})();
var statearr_26858_26937 = state_26838__$1;
(statearr_26858_26937[(2)] = null);

(statearr_26858_26937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (21))){
var inst_26760 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26862_26938 = state_26838__$1;
(statearr_26862_26938[(2)] = inst_26760);

(statearr_26862_26938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (31))){
var inst_26786 = (state_26838[(11)]);
var inst_26790 = done.call(null,null);
var inst_26791 = cljs.core.async.untap_STAR_.call(null,m,inst_26786);
var state_26838__$1 = (function (){var statearr_26863 = state_26838;
(statearr_26863[(19)] = inst_26790);

return statearr_26863;
})();
var statearr_26864_26939 = state_26838__$1;
(statearr_26864_26939[(2)] = inst_26791);

(statearr_26864_26939[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (32))){
var inst_26780 = (state_26838[(20)]);
var inst_26781 = (state_26838[(10)]);
var inst_26778 = (state_26838[(21)]);
var inst_26779 = (state_26838[(12)]);
var inst_26793 = (state_26838[(2)]);
var inst_26794 = (inst_26781 + (1));
var tmp26859 = inst_26780;
var tmp26860 = inst_26778;
var tmp26861 = inst_26779;
var inst_26778__$1 = tmp26860;
var inst_26779__$1 = tmp26861;
var inst_26780__$1 = tmp26859;
var inst_26781__$1 = inst_26794;
var state_26838__$1 = (function (){var statearr_26865 = state_26838;
(statearr_26865[(20)] = inst_26780__$1);

(statearr_26865[(10)] = inst_26781__$1);

(statearr_26865[(21)] = inst_26778__$1);

(statearr_26865[(22)] = inst_26793);

(statearr_26865[(12)] = inst_26779__$1);

return statearr_26865;
})();
var statearr_26866_26940 = state_26838__$1;
(statearr_26866_26940[(2)] = null);

(statearr_26866_26940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (40))){
var inst_26806 = (state_26838[(23)]);
var inst_26810 = done.call(null,null);
var inst_26811 = cljs.core.async.untap_STAR_.call(null,m,inst_26806);
var state_26838__$1 = (function (){var statearr_26867 = state_26838;
(statearr_26867[(24)] = inst_26810);

return statearr_26867;
})();
var statearr_26868_26941 = state_26838__$1;
(statearr_26868_26941[(2)] = inst_26811);

(statearr_26868_26941[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (33))){
var inst_26797 = (state_26838[(25)]);
var inst_26799 = cljs.core.chunked_seq_QMARK_.call(null,inst_26797);
var state_26838__$1 = state_26838;
if(inst_26799){
var statearr_26869_26942 = state_26838__$1;
(statearr_26869_26942[(1)] = (36));

} else {
var statearr_26870_26943 = state_26838__$1;
(statearr_26870_26943[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (13))){
var inst_26729 = (state_26838[(26)]);
var inst_26732 = cljs.core.async.close_BANG_.call(null,inst_26729);
var state_26838__$1 = state_26838;
var statearr_26871_26944 = state_26838__$1;
(statearr_26871_26944[(2)] = inst_26732);

(statearr_26871_26944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (22))){
var inst_26750 = (state_26838[(8)]);
var inst_26753 = cljs.core.async.close_BANG_.call(null,inst_26750);
var state_26838__$1 = state_26838;
var statearr_26872_26945 = state_26838__$1;
(statearr_26872_26945[(2)] = inst_26753);

(statearr_26872_26945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (36))){
var inst_26797 = (state_26838[(25)]);
var inst_26801 = cljs.core.chunk_first.call(null,inst_26797);
var inst_26802 = cljs.core.chunk_rest.call(null,inst_26797);
var inst_26803 = cljs.core.count.call(null,inst_26801);
var inst_26778 = inst_26802;
var inst_26779 = inst_26801;
var inst_26780 = inst_26803;
var inst_26781 = (0);
var state_26838__$1 = (function (){var statearr_26873 = state_26838;
(statearr_26873[(20)] = inst_26780);

(statearr_26873[(10)] = inst_26781);

(statearr_26873[(21)] = inst_26778);

(statearr_26873[(12)] = inst_26779);

return statearr_26873;
})();
var statearr_26874_26946 = state_26838__$1;
(statearr_26874_26946[(2)] = null);

(statearr_26874_26946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (41))){
var inst_26797 = (state_26838[(25)]);
var inst_26813 = (state_26838[(2)]);
var inst_26814 = cljs.core.next.call(null,inst_26797);
var inst_26778 = inst_26814;
var inst_26779 = null;
var inst_26780 = (0);
var inst_26781 = (0);
var state_26838__$1 = (function (){var statearr_26875 = state_26838;
(statearr_26875[(20)] = inst_26780);

(statearr_26875[(10)] = inst_26781);

(statearr_26875[(21)] = inst_26778);

(statearr_26875[(27)] = inst_26813);

(statearr_26875[(12)] = inst_26779);

return statearr_26875;
})();
var statearr_26876_26947 = state_26838__$1;
(statearr_26876_26947[(2)] = null);

(statearr_26876_26947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (43))){
var state_26838__$1 = state_26838;
var statearr_26877_26948 = state_26838__$1;
(statearr_26877_26948[(2)] = null);

(statearr_26877_26948[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (29))){
var inst_26822 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26878_26949 = state_26838__$1;
(statearr_26878_26949[(2)] = inst_26822);

(statearr_26878_26949[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (44))){
var inst_26831 = (state_26838[(2)]);
var state_26838__$1 = (function (){var statearr_26879 = state_26838;
(statearr_26879[(28)] = inst_26831);

return statearr_26879;
})();
var statearr_26880_26950 = state_26838__$1;
(statearr_26880_26950[(2)] = null);

(statearr_26880_26950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (6))){
var inst_26770 = (state_26838[(29)]);
var inst_26769 = cljs.core.deref.call(null,cs);
var inst_26770__$1 = cljs.core.keys.call(null,inst_26769);
var inst_26771 = cljs.core.count.call(null,inst_26770__$1);
var inst_26772 = cljs.core.reset_BANG_.call(null,dctr,inst_26771);
var inst_26777 = cljs.core.seq.call(null,inst_26770__$1);
var inst_26778 = inst_26777;
var inst_26779 = null;
var inst_26780 = (0);
var inst_26781 = (0);
var state_26838__$1 = (function (){var statearr_26881 = state_26838;
(statearr_26881[(20)] = inst_26780);

(statearr_26881[(29)] = inst_26770__$1);

(statearr_26881[(30)] = inst_26772);

(statearr_26881[(10)] = inst_26781);

(statearr_26881[(21)] = inst_26778);

(statearr_26881[(12)] = inst_26779);

return statearr_26881;
})();
var statearr_26882_26951 = state_26838__$1;
(statearr_26882_26951[(2)] = null);

(statearr_26882_26951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (28))){
var inst_26797 = (state_26838[(25)]);
var inst_26778 = (state_26838[(21)]);
var inst_26797__$1 = cljs.core.seq.call(null,inst_26778);
var state_26838__$1 = (function (){var statearr_26883 = state_26838;
(statearr_26883[(25)] = inst_26797__$1);

return statearr_26883;
})();
if(inst_26797__$1){
var statearr_26884_26952 = state_26838__$1;
(statearr_26884_26952[(1)] = (33));

} else {
var statearr_26885_26953 = state_26838__$1;
(statearr_26885_26953[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (25))){
var inst_26780 = (state_26838[(20)]);
var inst_26781 = (state_26838[(10)]);
var inst_26783 = (inst_26781 < inst_26780);
var inst_26784 = inst_26783;
var state_26838__$1 = state_26838;
if(cljs.core.truth_(inst_26784)){
var statearr_26886_26954 = state_26838__$1;
(statearr_26886_26954[(1)] = (27));

} else {
var statearr_26887_26955 = state_26838__$1;
(statearr_26887_26955[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (34))){
var state_26838__$1 = state_26838;
var statearr_26888_26956 = state_26838__$1;
(statearr_26888_26956[(2)] = null);

(statearr_26888_26956[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (17))){
var state_26838__$1 = state_26838;
var statearr_26889_26957 = state_26838__$1;
(statearr_26889_26957[(2)] = null);

(statearr_26889_26957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (3))){
var inst_26836 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26838__$1,inst_26836);
} else {
if((state_val_26839 === (12))){
var inst_26765 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26890_26958 = state_26838__$1;
(statearr_26890_26958[(2)] = inst_26765);

(statearr_26890_26958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (2))){
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26838__$1,(4),ch);
} else {
if((state_val_26839 === (23))){
var state_26838__$1 = state_26838;
var statearr_26891_26959 = state_26838__$1;
(statearr_26891_26959[(2)] = null);

(statearr_26891_26959[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (35))){
var inst_26820 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26892_26960 = state_26838__$1;
(statearr_26892_26960[(2)] = inst_26820);

(statearr_26892_26960[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (19))){
var inst_26739 = (state_26838[(7)]);
var inst_26743 = cljs.core.chunk_first.call(null,inst_26739);
var inst_26744 = cljs.core.chunk_rest.call(null,inst_26739);
var inst_26745 = cljs.core.count.call(null,inst_26743);
var inst_26719 = inst_26744;
var inst_26720 = inst_26743;
var inst_26721 = inst_26745;
var inst_26722 = (0);
var state_26838__$1 = (function (){var statearr_26893 = state_26838;
(statearr_26893[(13)] = inst_26722);

(statearr_26893[(14)] = inst_26719);

(statearr_26893[(15)] = inst_26721);

(statearr_26893[(17)] = inst_26720);

return statearr_26893;
})();
var statearr_26894_26961 = state_26838__$1;
(statearr_26894_26961[(2)] = null);

(statearr_26894_26961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (11))){
var inst_26719 = (state_26838[(14)]);
var inst_26739 = (state_26838[(7)]);
var inst_26739__$1 = cljs.core.seq.call(null,inst_26719);
var state_26838__$1 = (function (){var statearr_26895 = state_26838;
(statearr_26895[(7)] = inst_26739__$1);

return statearr_26895;
})();
if(inst_26739__$1){
var statearr_26896_26962 = state_26838__$1;
(statearr_26896_26962[(1)] = (16));

} else {
var statearr_26897_26963 = state_26838__$1;
(statearr_26897_26963[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (9))){
var inst_26767 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26898_26964 = state_26838__$1;
(statearr_26898_26964[(2)] = inst_26767);

(statearr_26898_26964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (5))){
var inst_26717 = cljs.core.deref.call(null,cs);
var inst_26718 = cljs.core.seq.call(null,inst_26717);
var inst_26719 = inst_26718;
var inst_26720 = null;
var inst_26721 = (0);
var inst_26722 = (0);
var state_26838__$1 = (function (){var statearr_26899 = state_26838;
(statearr_26899[(13)] = inst_26722);

(statearr_26899[(14)] = inst_26719);

(statearr_26899[(15)] = inst_26721);

(statearr_26899[(17)] = inst_26720);

return statearr_26899;
})();
var statearr_26900_26965 = state_26838__$1;
(statearr_26900_26965[(2)] = null);

(statearr_26900_26965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (14))){
var state_26838__$1 = state_26838;
var statearr_26901_26966 = state_26838__$1;
(statearr_26901_26966[(2)] = null);

(statearr_26901_26966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (45))){
var inst_26828 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26902_26967 = state_26838__$1;
(statearr_26902_26967[(2)] = inst_26828);

(statearr_26902_26967[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (26))){
var inst_26770 = (state_26838[(29)]);
var inst_26824 = (state_26838[(2)]);
var inst_26825 = cljs.core.seq.call(null,inst_26770);
var state_26838__$1 = (function (){var statearr_26903 = state_26838;
(statearr_26903[(31)] = inst_26824);

return statearr_26903;
})();
if(inst_26825){
var statearr_26904_26968 = state_26838__$1;
(statearr_26904_26968[(1)] = (42));

} else {
var statearr_26905_26969 = state_26838__$1;
(statearr_26905_26969[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (16))){
var inst_26739 = (state_26838[(7)]);
var inst_26741 = cljs.core.chunked_seq_QMARK_.call(null,inst_26739);
var state_26838__$1 = state_26838;
if(inst_26741){
var statearr_26906_26970 = state_26838__$1;
(statearr_26906_26970[(1)] = (19));

} else {
var statearr_26907_26971 = state_26838__$1;
(statearr_26907_26971[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (38))){
var inst_26817 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26908_26972 = state_26838__$1;
(statearr_26908_26972[(2)] = inst_26817);

(statearr_26908_26972[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (30))){
var state_26838__$1 = state_26838;
var statearr_26909_26973 = state_26838__$1;
(statearr_26909_26973[(2)] = null);

(statearr_26909_26973[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (10))){
var inst_26722 = (state_26838[(13)]);
var inst_26720 = (state_26838[(17)]);
var inst_26728 = cljs.core._nth.call(null,inst_26720,inst_26722);
var inst_26729 = cljs.core.nth.call(null,inst_26728,(0),null);
var inst_26730 = cljs.core.nth.call(null,inst_26728,(1),null);
var state_26838__$1 = (function (){var statearr_26910 = state_26838;
(statearr_26910[(26)] = inst_26729);

return statearr_26910;
})();
if(cljs.core.truth_(inst_26730)){
var statearr_26911_26974 = state_26838__$1;
(statearr_26911_26974[(1)] = (13));

} else {
var statearr_26912_26975 = state_26838__$1;
(statearr_26912_26975[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (18))){
var inst_26763 = (state_26838[(2)]);
var state_26838__$1 = state_26838;
var statearr_26913_26976 = state_26838__$1;
(statearr_26913_26976[(2)] = inst_26763);

(statearr_26913_26976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (42))){
var state_26838__$1 = state_26838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26838__$1,(45),dchan);
} else {
if((state_val_26839 === (37))){
var inst_26797 = (state_26838[(25)]);
var inst_26710 = (state_26838[(9)]);
var inst_26806 = (state_26838[(23)]);
var inst_26806__$1 = cljs.core.first.call(null,inst_26797);
var inst_26807 = cljs.core.async.put_BANG_.call(null,inst_26806__$1,inst_26710,done);
var state_26838__$1 = (function (){var statearr_26914 = state_26838;
(statearr_26914[(23)] = inst_26806__$1);

return statearr_26914;
})();
if(cljs.core.truth_(inst_26807)){
var statearr_26915_26977 = state_26838__$1;
(statearr_26915_26977[(1)] = (39));

} else {
var statearr_26916_26978 = state_26838__$1;
(statearr_26916_26978[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26839 === (8))){
var inst_26722 = (state_26838[(13)]);
var inst_26721 = (state_26838[(15)]);
var inst_26724 = (inst_26722 < inst_26721);
var inst_26725 = inst_26724;
var state_26838__$1 = state_26838;
if(cljs.core.truth_(inst_26725)){
var statearr_26917_26979 = state_26838__$1;
(statearr_26917_26979[(1)] = (10));

} else {
var statearr_26918_26980 = state_26838__$1;
(statearr_26918_26980[(1)] = (11));

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
});})(c__19367__auto___26926,cs,m,dchan,dctr,done))
;
return ((function (switch__19346__auto__,c__19367__auto___26926,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19347__auto__ = null;
var cljs$core$async$mult_$_state_machine__19347__auto____0 = (function (){
var statearr_26922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26922[(0)] = cljs$core$async$mult_$_state_machine__19347__auto__);

(statearr_26922[(1)] = (1));

return statearr_26922;
});
var cljs$core$async$mult_$_state_machine__19347__auto____1 = (function (state_26838){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_26838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e26923){if((e26923 instanceof Object)){
var ex__19350__auto__ = e26923;
var statearr_26924_26981 = state_26838;
(statearr_26924_26981[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26982 = state_26838;
state_26838 = G__26982;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19347__auto__ = function(state_26838){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19347__auto____1.call(this,state_26838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19347__auto____0;
cljs$core$async$mult_$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19347__auto____1;
return cljs$core$async$mult_$_state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___26926,cs,m,dchan,dctr,done))
})();
var state__19369__auto__ = (function (){var statearr_26925 = f__19368__auto__.call(null);
(statearr_26925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___26926);

return statearr_26925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___26926,cs,m,dchan,dctr,done))
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
var args26983 = [];
var len__17402__auto___26986 = arguments.length;
var i__17403__auto___26987 = (0);
while(true){
if((i__17403__auto___26987 < len__17402__auto___26986)){
args26983.push((arguments[i__17403__auto___26987]));

var G__26988 = (i__17403__auto___26987 + (1));
i__17403__auto___26987 = G__26988;
continue;
} else {
}
break;
}

var G__26985 = args26983.length;
switch (G__26985) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26983.length)].join('')));

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
var len__17402__auto___27000 = arguments.length;
var i__17403__auto___27001 = (0);
while(true){
if((i__17403__auto___27001 < len__17402__auto___27000)){
args__17409__auto__.push((arguments[i__17403__auto___27001]));

var G__27002 = (i__17403__auto___27001 + (1));
i__17403__auto___27001 = G__27002;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((3) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17410__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26994){
var map__26995 = p__26994;
var map__26995__$1 = ((((!((map__26995 == null)))?((((map__26995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26995):map__26995);
var opts = map__26995__$1;
var statearr_26997_27003 = state;
(statearr_26997_27003[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26995,map__26995__$1,opts){
return (function (val){
var statearr_26998_27004 = state;
(statearr_26998_27004[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26995,map__26995__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26999_27005 = state;
(statearr_26999_27005[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26990){
var G__26991 = cljs.core.first.call(null,seq26990);
var seq26990__$1 = cljs.core.next.call(null,seq26990);
var G__26992 = cljs.core.first.call(null,seq26990__$1);
var seq26990__$2 = cljs.core.next.call(null,seq26990__$1);
var G__26993 = cljs.core.first.call(null,seq26990__$2);
var seq26990__$3 = cljs.core.next.call(null,seq26990__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26991,G__26992,G__26993,seq26990__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27169 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27170){
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
this.meta27170 = meta27170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27171,meta27170__$1){
var self__ = this;
var _27171__$1 = this;
return (new cljs.core.async.t_cljs$core$async27169(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27170__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27171){
var self__ = this;
var _27171__$1 = this;
return self__.meta27170;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27169.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27169.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27170","meta27170",1766408608,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27169";

cljs.core.async.t_cljs$core$async27169.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27169");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27169 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27169(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27170){
return (new cljs.core.async.t_cljs$core$async27169(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27170));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27169(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19367__auto___27332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___27332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___27332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27269){
var state_val_27270 = (state_27269[(1)]);
if((state_val_27270 === (7))){
var inst_27187 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27271_27333 = state_27269__$1;
(statearr_27271_27333[(2)] = inst_27187);

(statearr_27271_27333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (20))){
var inst_27199 = (state_27269[(7)]);
var state_27269__$1 = state_27269;
var statearr_27272_27334 = state_27269__$1;
(statearr_27272_27334[(2)] = inst_27199);

(statearr_27272_27334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (27))){
var state_27269__$1 = state_27269;
var statearr_27273_27335 = state_27269__$1;
(statearr_27273_27335[(2)] = null);

(statearr_27273_27335[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (1))){
var inst_27175 = (state_27269[(8)]);
var inst_27175__$1 = calc_state.call(null);
var inst_27177 = (inst_27175__$1 == null);
var inst_27178 = cljs.core.not.call(null,inst_27177);
var state_27269__$1 = (function (){var statearr_27274 = state_27269;
(statearr_27274[(8)] = inst_27175__$1);

return statearr_27274;
})();
if(inst_27178){
var statearr_27275_27336 = state_27269__$1;
(statearr_27275_27336[(1)] = (2));

} else {
var statearr_27276_27337 = state_27269__$1;
(statearr_27276_27337[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (24))){
var inst_27229 = (state_27269[(9)]);
var inst_27222 = (state_27269[(10)]);
var inst_27243 = (state_27269[(11)]);
var inst_27243__$1 = inst_27222.call(null,inst_27229);
var state_27269__$1 = (function (){var statearr_27277 = state_27269;
(statearr_27277[(11)] = inst_27243__$1);

return statearr_27277;
})();
if(cljs.core.truth_(inst_27243__$1)){
var statearr_27278_27338 = state_27269__$1;
(statearr_27278_27338[(1)] = (29));

} else {
var statearr_27279_27339 = state_27269__$1;
(statearr_27279_27339[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (4))){
var inst_27190 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
if(cljs.core.truth_(inst_27190)){
var statearr_27280_27340 = state_27269__$1;
(statearr_27280_27340[(1)] = (8));

} else {
var statearr_27281_27341 = state_27269__$1;
(statearr_27281_27341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (15))){
var inst_27216 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
if(cljs.core.truth_(inst_27216)){
var statearr_27282_27342 = state_27269__$1;
(statearr_27282_27342[(1)] = (19));

} else {
var statearr_27283_27343 = state_27269__$1;
(statearr_27283_27343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (21))){
var inst_27221 = (state_27269[(12)]);
var inst_27221__$1 = (state_27269[(2)]);
var inst_27222 = cljs.core.get.call(null,inst_27221__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27223 = cljs.core.get.call(null,inst_27221__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27224 = cljs.core.get.call(null,inst_27221__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27269__$1 = (function (){var statearr_27284 = state_27269;
(statearr_27284[(12)] = inst_27221__$1);

(statearr_27284[(10)] = inst_27222);

(statearr_27284[(13)] = inst_27223);

return statearr_27284;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27269__$1,(22),inst_27224);
} else {
if((state_val_27270 === (31))){
var inst_27251 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
if(cljs.core.truth_(inst_27251)){
var statearr_27285_27344 = state_27269__$1;
(statearr_27285_27344[(1)] = (32));

} else {
var statearr_27286_27345 = state_27269__$1;
(statearr_27286_27345[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (32))){
var inst_27228 = (state_27269[(14)]);
var state_27269__$1 = state_27269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27269__$1,(35),out,inst_27228);
} else {
if((state_val_27270 === (33))){
var inst_27221 = (state_27269[(12)]);
var inst_27199 = inst_27221;
var state_27269__$1 = (function (){var statearr_27287 = state_27269;
(statearr_27287[(7)] = inst_27199);

return statearr_27287;
})();
var statearr_27288_27346 = state_27269__$1;
(statearr_27288_27346[(2)] = null);

(statearr_27288_27346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (13))){
var inst_27199 = (state_27269[(7)]);
var inst_27206 = inst_27199.cljs$lang$protocol_mask$partition0$;
var inst_27207 = (inst_27206 & (64));
var inst_27208 = inst_27199.cljs$core$ISeq$;
var inst_27209 = (inst_27207) || (inst_27208);
var state_27269__$1 = state_27269;
if(cljs.core.truth_(inst_27209)){
var statearr_27289_27347 = state_27269__$1;
(statearr_27289_27347[(1)] = (16));

} else {
var statearr_27290_27348 = state_27269__$1;
(statearr_27290_27348[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (22))){
var inst_27229 = (state_27269[(9)]);
var inst_27228 = (state_27269[(14)]);
var inst_27227 = (state_27269[(2)]);
var inst_27228__$1 = cljs.core.nth.call(null,inst_27227,(0),null);
var inst_27229__$1 = cljs.core.nth.call(null,inst_27227,(1),null);
var inst_27230 = (inst_27228__$1 == null);
var inst_27231 = cljs.core._EQ_.call(null,inst_27229__$1,change);
var inst_27232 = (inst_27230) || (inst_27231);
var state_27269__$1 = (function (){var statearr_27291 = state_27269;
(statearr_27291[(9)] = inst_27229__$1);

(statearr_27291[(14)] = inst_27228__$1);

return statearr_27291;
})();
if(cljs.core.truth_(inst_27232)){
var statearr_27292_27349 = state_27269__$1;
(statearr_27292_27349[(1)] = (23));

} else {
var statearr_27293_27350 = state_27269__$1;
(statearr_27293_27350[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (36))){
var inst_27221 = (state_27269[(12)]);
var inst_27199 = inst_27221;
var state_27269__$1 = (function (){var statearr_27294 = state_27269;
(statearr_27294[(7)] = inst_27199);

return statearr_27294;
})();
var statearr_27295_27351 = state_27269__$1;
(statearr_27295_27351[(2)] = null);

(statearr_27295_27351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (29))){
var inst_27243 = (state_27269[(11)]);
var state_27269__$1 = state_27269;
var statearr_27296_27352 = state_27269__$1;
(statearr_27296_27352[(2)] = inst_27243);

(statearr_27296_27352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (6))){
var state_27269__$1 = state_27269;
var statearr_27297_27353 = state_27269__$1;
(statearr_27297_27353[(2)] = false);

(statearr_27297_27353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (28))){
var inst_27239 = (state_27269[(2)]);
var inst_27240 = calc_state.call(null);
var inst_27199 = inst_27240;
var state_27269__$1 = (function (){var statearr_27298 = state_27269;
(statearr_27298[(7)] = inst_27199);

(statearr_27298[(15)] = inst_27239);

return statearr_27298;
})();
var statearr_27299_27354 = state_27269__$1;
(statearr_27299_27354[(2)] = null);

(statearr_27299_27354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (25))){
var inst_27265 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27300_27355 = state_27269__$1;
(statearr_27300_27355[(2)] = inst_27265);

(statearr_27300_27355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (34))){
var inst_27263 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27301_27356 = state_27269__$1;
(statearr_27301_27356[(2)] = inst_27263);

(statearr_27301_27356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (17))){
var state_27269__$1 = state_27269;
var statearr_27302_27357 = state_27269__$1;
(statearr_27302_27357[(2)] = false);

(statearr_27302_27357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (3))){
var state_27269__$1 = state_27269;
var statearr_27303_27358 = state_27269__$1;
(statearr_27303_27358[(2)] = false);

(statearr_27303_27358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (12))){
var inst_27267 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27269__$1,inst_27267);
} else {
if((state_val_27270 === (2))){
var inst_27175 = (state_27269[(8)]);
var inst_27180 = inst_27175.cljs$lang$protocol_mask$partition0$;
var inst_27181 = (inst_27180 & (64));
var inst_27182 = inst_27175.cljs$core$ISeq$;
var inst_27183 = (inst_27181) || (inst_27182);
var state_27269__$1 = state_27269;
if(cljs.core.truth_(inst_27183)){
var statearr_27304_27359 = state_27269__$1;
(statearr_27304_27359[(1)] = (5));

} else {
var statearr_27305_27360 = state_27269__$1;
(statearr_27305_27360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (23))){
var inst_27228 = (state_27269[(14)]);
var inst_27234 = (inst_27228 == null);
var state_27269__$1 = state_27269;
if(cljs.core.truth_(inst_27234)){
var statearr_27306_27361 = state_27269__$1;
(statearr_27306_27361[(1)] = (26));

} else {
var statearr_27307_27362 = state_27269__$1;
(statearr_27307_27362[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (35))){
var inst_27254 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
if(cljs.core.truth_(inst_27254)){
var statearr_27308_27363 = state_27269__$1;
(statearr_27308_27363[(1)] = (36));

} else {
var statearr_27309_27364 = state_27269__$1;
(statearr_27309_27364[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (19))){
var inst_27199 = (state_27269[(7)]);
var inst_27218 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27199);
var state_27269__$1 = state_27269;
var statearr_27310_27365 = state_27269__$1;
(statearr_27310_27365[(2)] = inst_27218);

(statearr_27310_27365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (11))){
var inst_27199 = (state_27269[(7)]);
var inst_27203 = (inst_27199 == null);
var inst_27204 = cljs.core.not.call(null,inst_27203);
var state_27269__$1 = state_27269;
if(inst_27204){
var statearr_27311_27366 = state_27269__$1;
(statearr_27311_27366[(1)] = (13));

} else {
var statearr_27312_27367 = state_27269__$1;
(statearr_27312_27367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (9))){
var inst_27175 = (state_27269[(8)]);
var state_27269__$1 = state_27269;
var statearr_27313_27368 = state_27269__$1;
(statearr_27313_27368[(2)] = inst_27175);

(statearr_27313_27368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (5))){
var state_27269__$1 = state_27269;
var statearr_27314_27369 = state_27269__$1;
(statearr_27314_27369[(2)] = true);

(statearr_27314_27369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (14))){
var state_27269__$1 = state_27269;
var statearr_27315_27370 = state_27269__$1;
(statearr_27315_27370[(2)] = false);

(statearr_27315_27370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (26))){
var inst_27229 = (state_27269[(9)]);
var inst_27236 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27229);
var state_27269__$1 = state_27269;
var statearr_27316_27371 = state_27269__$1;
(statearr_27316_27371[(2)] = inst_27236);

(statearr_27316_27371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (16))){
var state_27269__$1 = state_27269;
var statearr_27317_27372 = state_27269__$1;
(statearr_27317_27372[(2)] = true);

(statearr_27317_27372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (38))){
var inst_27259 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27318_27373 = state_27269__$1;
(statearr_27318_27373[(2)] = inst_27259);

(statearr_27318_27373[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (30))){
var inst_27229 = (state_27269[(9)]);
var inst_27222 = (state_27269[(10)]);
var inst_27223 = (state_27269[(13)]);
var inst_27246 = cljs.core.empty_QMARK_.call(null,inst_27222);
var inst_27247 = inst_27223.call(null,inst_27229);
var inst_27248 = cljs.core.not.call(null,inst_27247);
var inst_27249 = (inst_27246) && (inst_27248);
var state_27269__$1 = state_27269;
var statearr_27319_27374 = state_27269__$1;
(statearr_27319_27374[(2)] = inst_27249);

(statearr_27319_27374[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (10))){
var inst_27175 = (state_27269[(8)]);
var inst_27195 = (state_27269[(2)]);
var inst_27196 = cljs.core.get.call(null,inst_27195,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27197 = cljs.core.get.call(null,inst_27195,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27198 = cljs.core.get.call(null,inst_27195,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27199 = inst_27175;
var state_27269__$1 = (function (){var statearr_27320 = state_27269;
(statearr_27320[(16)] = inst_27196);

(statearr_27320[(17)] = inst_27197);

(statearr_27320[(7)] = inst_27199);

(statearr_27320[(18)] = inst_27198);

return statearr_27320;
})();
var statearr_27321_27375 = state_27269__$1;
(statearr_27321_27375[(2)] = null);

(statearr_27321_27375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (18))){
var inst_27213 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27322_27376 = state_27269__$1;
(statearr_27322_27376[(2)] = inst_27213);

(statearr_27322_27376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (37))){
var state_27269__$1 = state_27269;
var statearr_27323_27377 = state_27269__$1;
(statearr_27323_27377[(2)] = null);

(statearr_27323_27377[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (8))){
var inst_27175 = (state_27269[(8)]);
var inst_27192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27175);
var state_27269__$1 = state_27269;
var statearr_27324_27378 = state_27269__$1;
(statearr_27324_27378[(2)] = inst_27192);

(statearr_27324_27378[(1)] = (10));


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
});})(c__19367__auto___27332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19346__auto__,c__19367__auto___27332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19347__auto__ = null;
var cljs$core$async$mix_$_state_machine__19347__auto____0 = (function (){
var statearr_27328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27328[(0)] = cljs$core$async$mix_$_state_machine__19347__auto__);

(statearr_27328[(1)] = (1));

return statearr_27328;
});
var cljs$core$async$mix_$_state_machine__19347__auto____1 = (function (state_27269){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_27269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e27329){if((e27329 instanceof Object)){
var ex__19350__auto__ = e27329;
var statearr_27330_27379 = state_27269;
(statearr_27330_27379[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27380 = state_27269;
state_27269 = G__27380;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19347__auto__ = function(state_27269){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19347__auto____1.call(this,state_27269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19347__auto____0;
cljs$core$async$mix_$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19347__auto____1;
return cljs$core$async$mix_$_state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___27332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19369__auto__ = (function (){var statearr_27331 = f__19368__auto__.call(null);
(statearr_27331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___27332);

return statearr_27331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___27332,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args27381 = [];
var len__17402__auto___27384 = arguments.length;
var i__17403__auto___27385 = (0);
while(true){
if((i__17403__auto___27385 < len__17402__auto___27384)){
args27381.push((arguments[i__17403__auto___27385]));

var G__27386 = (i__17403__auto___27385 + (1));
i__17403__auto___27385 = G__27386;
continue;
} else {
}
break;
}

var G__27383 = args27381.length;
switch (G__27383) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27381.length)].join('')));

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
var args27389 = [];
var len__17402__auto___27514 = arguments.length;
var i__17403__auto___27515 = (0);
while(true){
if((i__17403__auto___27515 < len__17402__auto___27514)){
args27389.push((arguments[i__17403__auto___27515]));

var G__27516 = (i__17403__auto___27515 + (1));
i__17403__auto___27515 = G__27516;
continue;
} else {
}
break;
}

var G__27391 = args27389.length;
switch (G__27391) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27389.length)].join('')));

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
return (function (p1__27388_SHARP_){
if(cljs.core.truth_(p1__27388_SHARP_.call(null,topic))){
return p1__27388_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27388_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16344__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27392 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27393){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27393 = meta27393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27394,meta27393__$1){
var self__ = this;
var _27394__$1 = this;
return (new cljs.core.async.t_cljs$core$async27392(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27393__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27394){
var self__ = this;
var _27394__$1 = this;
return self__.meta27393;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27392.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27392.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27392.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27392.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27392.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27392.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27393","meta27393",848755440,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27392";

cljs.core.async.t_cljs$core$async27392.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27392");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27392 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27392(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27393){
return (new cljs.core.async.t_cljs$core$async27392(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27393));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27392(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19367__auto___27518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___27518,mults,ensure_mult,p){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___27518,mults,ensure_mult,p){
return (function (state_27466){
var state_val_27467 = (state_27466[(1)]);
if((state_val_27467 === (7))){
var inst_27462 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27468_27519 = state_27466__$1;
(statearr_27468_27519[(2)] = inst_27462);

(statearr_27468_27519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (20))){
var state_27466__$1 = state_27466;
var statearr_27469_27520 = state_27466__$1;
(statearr_27469_27520[(2)] = null);

(statearr_27469_27520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (1))){
var state_27466__$1 = state_27466;
var statearr_27470_27521 = state_27466__$1;
(statearr_27470_27521[(2)] = null);

(statearr_27470_27521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (24))){
var inst_27445 = (state_27466[(7)]);
var inst_27454 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27445);
var state_27466__$1 = state_27466;
var statearr_27471_27522 = state_27466__$1;
(statearr_27471_27522[(2)] = inst_27454);

(statearr_27471_27522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (4))){
var inst_27397 = (state_27466[(8)]);
var inst_27397__$1 = (state_27466[(2)]);
var inst_27398 = (inst_27397__$1 == null);
var state_27466__$1 = (function (){var statearr_27472 = state_27466;
(statearr_27472[(8)] = inst_27397__$1);

return statearr_27472;
})();
if(cljs.core.truth_(inst_27398)){
var statearr_27473_27523 = state_27466__$1;
(statearr_27473_27523[(1)] = (5));

} else {
var statearr_27474_27524 = state_27466__$1;
(statearr_27474_27524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (15))){
var inst_27439 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27475_27525 = state_27466__$1;
(statearr_27475_27525[(2)] = inst_27439);

(statearr_27475_27525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (21))){
var inst_27459 = (state_27466[(2)]);
var state_27466__$1 = (function (){var statearr_27476 = state_27466;
(statearr_27476[(9)] = inst_27459);

return statearr_27476;
})();
var statearr_27477_27526 = state_27466__$1;
(statearr_27477_27526[(2)] = null);

(statearr_27477_27526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (13))){
var inst_27421 = (state_27466[(10)]);
var inst_27423 = cljs.core.chunked_seq_QMARK_.call(null,inst_27421);
var state_27466__$1 = state_27466;
if(inst_27423){
var statearr_27478_27527 = state_27466__$1;
(statearr_27478_27527[(1)] = (16));

} else {
var statearr_27479_27528 = state_27466__$1;
(statearr_27479_27528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (22))){
var inst_27451 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
if(cljs.core.truth_(inst_27451)){
var statearr_27480_27529 = state_27466__$1;
(statearr_27480_27529[(1)] = (23));

} else {
var statearr_27481_27530 = state_27466__$1;
(statearr_27481_27530[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (6))){
var inst_27397 = (state_27466[(8)]);
var inst_27445 = (state_27466[(7)]);
var inst_27447 = (state_27466[(11)]);
var inst_27445__$1 = topic_fn.call(null,inst_27397);
var inst_27446 = cljs.core.deref.call(null,mults);
var inst_27447__$1 = cljs.core.get.call(null,inst_27446,inst_27445__$1);
var state_27466__$1 = (function (){var statearr_27482 = state_27466;
(statearr_27482[(7)] = inst_27445__$1);

(statearr_27482[(11)] = inst_27447__$1);

return statearr_27482;
})();
if(cljs.core.truth_(inst_27447__$1)){
var statearr_27483_27531 = state_27466__$1;
(statearr_27483_27531[(1)] = (19));

} else {
var statearr_27484_27532 = state_27466__$1;
(statearr_27484_27532[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (25))){
var inst_27456 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27485_27533 = state_27466__$1;
(statearr_27485_27533[(2)] = inst_27456);

(statearr_27485_27533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (17))){
var inst_27421 = (state_27466[(10)]);
var inst_27430 = cljs.core.first.call(null,inst_27421);
var inst_27431 = cljs.core.async.muxch_STAR_.call(null,inst_27430);
var inst_27432 = cljs.core.async.close_BANG_.call(null,inst_27431);
var inst_27433 = cljs.core.next.call(null,inst_27421);
var inst_27407 = inst_27433;
var inst_27408 = null;
var inst_27409 = (0);
var inst_27410 = (0);
var state_27466__$1 = (function (){var statearr_27486 = state_27466;
(statearr_27486[(12)] = inst_27410);

(statearr_27486[(13)] = inst_27408);

(statearr_27486[(14)] = inst_27407);

(statearr_27486[(15)] = inst_27432);

(statearr_27486[(16)] = inst_27409);

return statearr_27486;
})();
var statearr_27487_27534 = state_27466__$1;
(statearr_27487_27534[(2)] = null);

(statearr_27487_27534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (3))){
var inst_27464 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27466__$1,inst_27464);
} else {
if((state_val_27467 === (12))){
var inst_27441 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27488_27535 = state_27466__$1;
(statearr_27488_27535[(2)] = inst_27441);

(statearr_27488_27535[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (2))){
var state_27466__$1 = state_27466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27466__$1,(4),ch);
} else {
if((state_val_27467 === (23))){
var state_27466__$1 = state_27466;
var statearr_27489_27536 = state_27466__$1;
(statearr_27489_27536[(2)] = null);

(statearr_27489_27536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (19))){
var inst_27397 = (state_27466[(8)]);
var inst_27447 = (state_27466[(11)]);
var inst_27449 = cljs.core.async.muxch_STAR_.call(null,inst_27447);
var state_27466__$1 = state_27466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27466__$1,(22),inst_27449,inst_27397);
} else {
if((state_val_27467 === (11))){
var inst_27407 = (state_27466[(14)]);
var inst_27421 = (state_27466[(10)]);
var inst_27421__$1 = cljs.core.seq.call(null,inst_27407);
var state_27466__$1 = (function (){var statearr_27490 = state_27466;
(statearr_27490[(10)] = inst_27421__$1);

return statearr_27490;
})();
if(inst_27421__$1){
var statearr_27491_27537 = state_27466__$1;
(statearr_27491_27537[(1)] = (13));

} else {
var statearr_27492_27538 = state_27466__$1;
(statearr_27492_27538[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (9))){
var inst_27443 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27493_27539 = state_27466__$1;
(statearr_27493_27539[(2)] = inst_27443);

(statearr_27493_27539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (5))){
var inst_27404 = cljs.core.deref.call(null,mults);
var inst_27405 = cljs.core.vals.call(null,inst_27404);
var inst_27406 = cljs.core.seq.call(null,inst_27405);
var inst_27407 = inst_27406;
var inst_27408 = null;
var inst_27409 = (0);
var inst_27410 = (0);
var state_27466__$1 = (function (){var statearr_27494 = state_27466;
(statearr_27494[(12)] = inst_27410);

(statearr_27494[(13)] = inst_27408);

(statearr_27494[(14)] = inst_27407);

(statearr_27494[(16)] = inst_27409);

return statearr_27494;
})();
var statearr_27495_27540 = state_27466__$1;
(statearr_27495_27540[(2)] = null);

(statearr_27495_27540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (14))){
var state_27466__$1 = state_27466;
var statearr_27499_27541 = state_27466__$1;
(statearr_27499_27541[(2)] = null);

(statearr_27499_27541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (16))){
var inst_27421 = (state_27466[(10)]);
var inst_27425 = cljs.core.chunk_first.call(null,inst_27421);
var inst_27426 = cljs.core.chunk_rest.call(null,inst_27421);
var inst_27427 = cljs.core.count.call(null,inst_27425);
var inst_27407 = inst_27426;
var inst_27408 = inst_27425;
var inst_27409 = inst_27427;
var inst_27410 = (0);
var state_27466__$1 = (function (){var statearr_27500 = state_27466;
(statearr_27500[(12)] = inst_27410);

(statearr_27500[(13)] = inst_27408);

(statearr_27500[(14)] = inst_27407);

(statearr_27500[(16)] = inst_27409);

return statearr_27500;
})();
var statearr_27501_27542 = state_27466__$1;
(statearr_27501_27542[(2)] = null);

(statearr_27501_27542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (10))){
var inst_27410 = (state_27466[(12)]);
var inst_27408 = (state_27466[(13)]);
var inst_27407 = (state_27466[(14)]);
var inst_27409 = (state_27466[(16)]);
var inst_27415 = cljs.core._nth.call(null,inst_27408,inst_27410);
var inst_27416 = cljs.core.async.muxch_STAR_.call(null,inst_27415);
var inst_27417 = cljs.core.async.close_BANG_.call(null,inst_27416);
var inst_27418 = (inst_27410 + (1));
var tmp27496 = inst_27408;
var tmp27497 = inst_27407;
var tmp27498 = inst_27409;
var inst_27407__$1 = tmp27497;
var inst_27408__$1 = tmp27496;
var inst_27409__$1 = tmp27498;
var inst_27410__$1 = inst_27418;
var state_27466__$1 = (function (){var statearr_27502 = state_27466;
(statearr_27502[(12)] = inst_27410__$1);

(statearr_27502[(13)] = inst_27408__$1);

(statearr_27502[(14)] = inst_27407__$1);

(statearr_27502[(16)] = inst_27409__$1);

(statearr_27502[(17)] = inst_27417);

return statearr_27502;
})();
var statearr_27503_27543 = state_27466__$1;
(statearr_27503_27543[(2)] = null);

(statearr_27503_27543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (18))){
var inst_27436 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27504_27544 = state_27466__$1;
(statearr_27504_27544[(2)] = inst_27436);

(statearr_27504_27544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (8))){
var inst_27410 = (state_27466[(12)]);
var inst_27409 = (state_27466[(16)]);
var inst_27412 = (inst_27410 < inst_27409);
var inst_27413 = inst_27412;
var state_27466__$1 = state_27466;
if(cljs.core.truth_(inst_27413)){
var statearr_27505_27545 = state_27466__$1;
(statearr_27505_27545[(1)] = (10));

} else {
var statearr_27506_27546 = state_27466__$1;
(statearr_27506_27546[(1)] = (11));

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
});})(c__19367__auto___27518,mults,ensure_mult,p))
;
return ((function (switch__19346__auto__,c__19367__auto___27518,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19347__auto__ = null;
var cljs$core$async$state_machine__19347__auto____0 = (function (){
var statearr_27510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27510[(0)] = cljs$core$async$state_machine__19347__auto__);

(statearr_27510[(1)] = (1));

return statearr_27510;
});
var cljs$core$async$state_machine__19347__auto____1 = (function (state_27466){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_27466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e27511){if((e27511 instanceof Object)){
var ex__19350__auto__ = e27511;
var statearr_27512_27547 = state_27466;
(statearr_27512_27547[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27548 = state_27466;
state_27466 = G__27548;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$state_machine__19347__auto__ = function(state_27466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19347__auto____1.call(this,state_27466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19347__auto____0;
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19347__auto____1;
return cljs$core$async$state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___27518,mults,ensure_mult,p))
})();
var state__19369__auto__ = (function (){var statearr_27513 = f__19368__auto__.call(null);
(statearr_27513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___27518);

return statearr_27513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___27518,mults,ensure_mult,p))
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
var args27549 = [];
var len__17402__auto___27552 = arguments.length;
var i__17403__auto___27553 = (0);
while(true){
if((i__17403__auto___27553 < len__17402__auto___27552)){
args27549.push((arguments[i__17403__auto___27553]));

var G__27554 = (i__17403__auto___27553 + (1));
i__17403__auto___27553 = G__27554;
continue;
} else {
}
break;
}

var G__27551 = args27549.length;
switch (G__27551) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27549.length)].join('')));

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
var args27556 = [];
var len__17402__auto___27559 = arguments.length;
var i__17403__auto___27560 = (0);
while(true){
if((i__17403__auto___27560 < len__17402__auto___27559)){
args27556.push((arguments[i__17403__auto___27560]));

var G__27561 = (i__17403__auto___27560 + (1));
i__17403__auto___27560 = G__27561;
continue;
} else {
}
break;
}

var G__27558 = args27556.length;
switch (G__27558) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27556.length)].join('')));

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
var args27563 = [];
var len__17402__auto___27634 = arguments.length;
var i__17403__auto___27635 = (0);
while(true){
if((i__17403__auto___27635 < len__17402__auto___27634)){
args27563.push((arguments[i__17403__auto___27635]));

var G__27636 = (i__17403__auto___27635 + (1));
i__17403__auto___27635 = G__27636;
continue;
} else {
}
break;
}

var G__27565 = args27563.length;
switch (G__27565) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27563.length)].join('')));

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
var c__19367__auto___27638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___27638,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___27638,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27604){
var state_val_27605 = (state_27604[(1)]);
if((state_val_27605 === (7))){
var state_27604__$1 = state_27604;
var statearr_27606_27639 = state_27604__$1;
(statearr_27606_27639[(2)] = null);

(statearr_27606_27639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (1))){
var state_27604__$1 = state_27604;
var statearr_27607_27640 = state_27604__$1;
(statearr_27607_27640[(2)] = null);

(statearr_27607_27640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (4))){
var inst_27568 = (state_27604[(7)]);
var inst_27570 = (inst_27568 < cnt);
var state_27604__$1 = state_27604;
if(cljs.core.truth_(inst_27570)){
var statearr_27608_27641 = state_27604__$1;
(statearr_27608_27641[(1)] = (6));

} else {
var statearr_27609_27642 = state_27604__$1;
(statearr_27609_27642[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (15))){
var inst_27600 = (state_27604[(2)]);
var state_27604__$1 = state_27604;
var statearr_27610_27643 = state_27604__$1;
(statearr_27610_27643[(2)] = inst_27600);

(statearr_27610_27643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (13))){
var inst_27593 = cljs.core.async.close_BANG_.call(null,out);
var state_27604__$1 = state_27604;
var statearr_27611_27644 = state_27604__$1;
(statearr_27611_27644[(2)] = inst_27593);

(statearr_27611_27644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (6))){
var state_27604__$1 = state_27604;
var statearr_27612_27645 = state_27604__$1;
(statearr_27612_27645[(2)] = null);

(statearr_27612_27645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (3))){
var inst_27602 = (state_27604[(2)]);
var state_27604__$1 = state_27604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27604__$1,inst_27602);
} else {
if((state_val_27605 === (12))){
var inst_27590 = (state_27604[(8)]);
var inst_27590__$1 = (state_27604[(2)]);
var inst_27591 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27590__$1);
var state_27604__$1 = (function (){var statearr_27613 = state_27604;
(statearr_27613[(8)] = inst_27590__$1);

return statearr_27613;
})();
if(cljs.core.truth_(inst_27591)){
var statearr_27614_27646 = state_27604__$1;
(statearr_27614_27646[(1)] = (13));

} else {
var statearr_27615_27647 = state_27604__$1;
(statearr_27615_27647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (2))){
var inst_27567 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27568 = (0);
var state_27604__$1 = (function (){var statearr_27616 = state_27604;
(statearr_27616[(7)] = inst_27568);

(statearr_27616[(9)] = inst_27567);

return statearr_27616;
})();
var statearr_27617_27648 = state_27604__$1;
(statearr_27617_27648[(2)] = null);

(statearr_27617_27648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (11))){
var inst_27568 = (state_27604[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27604,(10),Object,null,(9));
var inst_27577 = chs__$1.call(null,inst_27568);
var inst_27578 = done.call(null,inst_27568);
var inst_27579 = cljs.core.async.take_BANG_.call(null,inst_27577,inst_27578);
var state_27604__$1 = state_27604;
var statearr_27618_27649 = state_27604__$1;
(statearr_27618_27649[(2)] = inst_27579);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27604__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (9))){
var inst_27568 = (state_27604[(7)]);
var inst_27581 = (state_27604[(2)]);
var inst_27582 = (inst_27568 + (1));
var inst_27568__$1 = inst_27582;
var state_27604__$1 = (function (){var statearr_27619 = state_27604;
(statearr_27619[(10)] = inst_27581);

(statearr_27619[(7)] = inst_27568__$1);

return statearr_27619;
})();
var statearr_27620_27650 = state_27604__$1;
(statearr_27620_27650[(2)] = null);

(statearr_27620_27650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (5))){
var inst_27588 = (state_27604[(2)]);
var state_27604__$1 = (function (){var statearr_27621 = state_27604;
(statearr_27621[(11)] = inst_27588);

return statearr_27621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27604__$1,(12),dchan);
} else {
if((state_val_27605 === (14))){
var inst_27590 = (state_27604[(8)]);
var inst_27595 = cljs.core.apply.call(null,f,inst_27590);
var state_27604__$1 = state_27604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27604__$1,(16),out,inst_27595);
} else {
if((state_val_27605 === (16))){
var inst_27597 = (state_27604[(2)]);
var state_27604__$1 = (function (){var statearr_27622 = state_27604;
(statearr_27622[(12)] = inst_27597);

return statearr_27622;
})();
var statearr_27623_27651 = state_27604__$1;
(statearr_27623_27651[(2)] = null);

(statearr_27623_27651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (10))){
var inst_27572 = (state_27604[(2)]);
var inst_27573 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27604__$1 = (function (){var statearr_27624 = state_27604;
(statearr_27624[(13)] = inst_27572);

return statearr_27624;
})();
var statearr_27625_27652 = state_27604__$1;
(statearr_27625_27652[(2)] = inst_27573);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27604__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27605 === (8))){
var inst_27586 = (state_27604[(2)]);
var state_27604__$1 = state_27604;
var statearr_27626_27653 = state_27604__$1;
(statearr_27626_27653[(2)] = inst_27586);

(statearr_27626_27653[(1)] = (5));


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
});})(c__19367__auto___27638,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19346__auto__,c__19367__auto___27638,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19347__auto__ = null;
var cljs$core$async$state_machine__19347__auto____0 = (function (){
var statearr_27630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27630[(0)] = cljs$core$async$state_machine__19347__auto__);

(statearr_27630[(1)] = (1));

return statearr_27630;
});
var cljs$core$async$state_machine__19347__auto____1 = (function (state_27604){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_27604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e27631){if((e27631 instanceof Object)){
var ex__19350__auto__ = e27631;
var statearr_27632_27654 = state_27604;
(statearr_27632_27654[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27655 = state_27604;
state_27604 = G__27655;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$state_machine__19347__auto__ = function(state_27604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19347__auto____1.call(this,state_27604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19347__auto____0;
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19347__auto____1;
return cljs$core$async$state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___27638,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19369__auto__ = (function (){var statearr_27633 = f__19368__auto__.call(null);
(statearr_27633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___27638);

return statearr_27633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___27638,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27657 = [];
var len__17402__auto___27713 = arguments.length;
var i__17403__auto___27714 = (0);
while(true){
if((i__17403__auto___27714 < len__17402__auto___27713)){
args27657.push((arguments[i__17403__auto___27714]));

var G__27715 = (i__17403__auto___27714 + (1));
i__17403__auto___27714 = G__27715;
continue;
} else {
}
break;
}

var G__27659 = args27657.length;
switch (G__27659) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27657.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19367__auto___27717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___27717,out){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___27717,out){
return (function (state_27689){
var state_val_27690 = (state_27689[(1)]);
if((state_val_27690 === (7))){
var inst_27669 = (state_27689[(7)]);
var inst_27668 = (state_27689[(8)]);
var inst_27668__$1 = (state_27689[(2)]);
var inst_27669__$1 = cljs.core.nth.call(null,inst_27668__$1,(0),null);
var inst_27670 = cljs.core.nth.call(null,inst_27668__$1,(1),null);
var inst_27671 = (inst_27669__$1 == null);
var state_27689__$1 = (function (){var statearr_27691 = state_27689;
(statearr_27691[(9)] = inst_27670);

(statearr_27691[(7)] = inst_27669__$1);

(statearr_27691[(8)] = inst_27668__$1);

return statearr_27691;
})();
if(cljs.core.truth_(inst_27671)){
var statearr_27692_27718 = state_27689__$1;
(statearr_27692_27718[(1)] = (8));

} else {
var statearr_27693_27719 = state_27689__$1;
(statearr_27693_27719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (1))){
var inst_27660 = cljs.core.vec.call(null,chs);
var inst_27661 = inst_27660;
var state_27689__$1 = (function (){var statearr_27694 = state_27689;
(statearr_27694[(10)] = inst_27661);

return statearr_27694;
})();
var statearr_27695_27720 = state_27689__$1;
(statearr_27695_27720[(2)] = null);

(statearr_27695_27720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (4))){
var inst_27661 = (state_27689[(10)]);
var state_27689__$1 = state_27689;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27689__$1,(7),inst_27661);
} else {
if((state_val_27690 === (6))){
var inst_27685 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27696_27721 = state_27689__$1;
(statearr_27696_27721[(2)] = inst_27685);

(statearr_27696_27721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (3))){
var inst_27687 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27689__$1,inst_27687);
} else {
if((state_val_27690 === (2))){
var inst_27661 = (state_27689[(10)]);
var inst_27663 = cljs.core.count.call(null,inst_27661);
var inst_27664 = (inst_27663 > (0));
var state_27689__$1 = state_27689;
if(cljs.core.truth_(inst_27664)){
var statearr_27698_27722 = state_27689__$1;
(statearr_27698_27722[(1)] = (4));

} else {
var statearr_27699_27723 = state_27689__$1;
(statearr_27699_27723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (11))){
var inst_27661 = (state_27689[(10)]);
var inst_27678 = (state_27689[(2)]);
var tmp27697 = inst_27661;
var inst_27661__$1 = tmp27697;
var state_27689__$1 = (function (){var statearr_27700 = state_27689;
(statearr_27700[(11)] = inst_27678);

(statearr_27700[(10)] = inst_27661__$1);

return statearr_27700;
})();
var statearr_27701_27724 = state_27689__$1;
(statearr_27701_27724[(2)] = null);

(statearr_27701_27724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (9))){
var inst_27669 = (state_27689[(7)]);
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27689__$1,(11),out,inst_27669);
} else {
if((state_val_27690 === (5))){
var inst_27683 = cljs.core.async.close_BANG_.call(null,out);
var state_27689__$1 = state_27689;
var statearr_27702_27725 = state_27689__$1;
(statearr_27702_27725[(2)] = inst_27683);

(statearr_27702_27725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (10))){
var inst_27681 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27703_27726 = state_27689__$1;
(statearr_27703_27726[(2)] = inst_27681);

(statearr_27703_27726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (8))){
var inst_27670 = (state_27689[(9)]);
var inst_27669 = (state_27689[(7)]);
var inst_27668 = (state_27689[(8)]);
var inst_27661 = (state_27689[(10)]);
var inst_27673 = (function (){var cs = inst_27661;
var vec__27666 = inst_27668;
var v = inst_27669;
var c = inst_27670;
return ((function (cs,vec__27666,v,c,inst_27670,inst_27669,inst_27668,inst_27661,state_val_27690,c__19367__auto___27717,out){
return (function (p1__27656_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27656_SHARP_);
});
;})(cs,vec__27666,v,c,inst_27670,inst_27669,inst_27668,inst_27661,state_val_27690,c__19367__auto___27717,out))
})();
var inst_27674 = cljs.core.filterv.call(null,inst_27673,inst_27661);
var inst_27661__$1 = inst_27674;
var state_27689__$1 = (function (){var statearr_27704 = state_27689;
(statearr_27704[(10)] = inst_27661__$1);

return statearr_27704;
})();
var statearr_27705_27727 = state_27689__$1;
(statearr_27705_27727[(2)] = null);

(statearr_27705_27727[(1)] = (2));


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
});})(c__19367__auto___27717,out))
;
return ((function (switch__19346__auto__,c__19367__auto___27717,out){
return (function() {
var cljs$core$async$state_machine__19347__auto__ = null;
var cljs$core$async$state_machine__19347__auto____0 = (function (){
var statearr_27709 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27709[(0)] = cljs$core$async$state_machine__19347__auto__);

(statearr_27709[(1)] = (1));

return statearr_27709;
});
var cljs$core$async$state_machine__19347__auto____1 = (function (state_27689){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_27689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e27710){if((e27710 instanceof Object)){
var ex__19350__auto__ = e27710;
var statearr_27711_27728 = state_27689;
(statearr_27711_27728[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27729 = state_27689;
state_27689 = G__27729;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$state_machine__19347__auto__ = function(state_27689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19347__auto____1.call(this,state_27689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19347__auto____0;
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19347__auto____1;
return cljs$core$async$state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___27717,out))
})();
var state__19369__auto__ = (function (){var statearr_27712 = f__19368__auto__.call(null);
(statearr_27712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___27717);

return statearr_27712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___27717,out))
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
var args27730 = [];
var len__17402__auto___27779 = arguments.length;
var i__17403__auto___27780 = (0);
while(true){
if((i__17403__auto___27780 < len__17402__auto___27779)){
args27730.push((arguments[i__17403__auto___27780]));

var G__27781 = (i__17403__auto___27780 + (1));
i__17403__auto___27780 = G__27781;
continue;
} else {
}
break;
}

var G__27732 = args27730.length;
switch (G__27732) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27730.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19367__auto___27783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___27783,out){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___27783,out){
return (function (state_27756){
var state_val_27757 = (state_27756[(1)]);
if((state_val_27757 === (7))){
var inst_27738 = (state_27756[(7)]);
var inst_27738__$1 = (state_27756[(2)]);
var inst_27739 = (inst_27738__$1 == null);
var inst_27740 = cljs.core.not.call(null,inst_27739);
var state_27756__$1 = (function (){var statearr_27758 = state_27756;
(statearr_27758[(7)] = inst_27738__$1);

return statearr_27758;
})();
if(inst_27740){
var statearr_27759_27784 = state_27756__$1;
(statearr_27759_27784[(1)] = (8));

} else {
var statearr_27760_27785 = state_27756__$1;
(statearr_27760_27785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (1))){
var inst_27733 = (0);
var state_27756__$1 = (function (){var statearr_27761 = state_27756;
(statearr_27761[(8)] = inst_27733);

return statearr_27761;
})();
var statearr_27762_27786 = state_27756__$1;
(statearr_27762_27786[(2)] = null);

(statearr_27762_27786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (4))){
var state_27756__$1 = state_27756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27756__$1,(7),ch);
} else {
if((state_val_27757 === (6))){
var inst_27751 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
var statearr_27763_27787 = state_27756__$1;
(statearr_27763_27787[(2)] = inst_27751);

(statearr_27763_27787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (3))){
var inst_27753 = (state_27756[(2)]);
var inst_27754 = cljs.core.async.close_BANG_.call(null,out);
var state_27756__$1 = (function (){var statearr_27764 = state_27756;
(statearr_27764[(9)] = inst_27753);

return statearr_27764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27756__$1,inst_27754);
} else {
if((state_val_27757 === (2))){
var inst_27733 = (state_27756[(8)]);
var inst_27735 = (inst_27733 < n);
var state_27756__$1 = state_27756;
if(cljs.core.truth_(inst_27735)){
var statearr_27765_27788 = state_27756__$1;
(statearr_27765_27788[(1)] = (4));

} else {
var statearr_27766_27789 = state_27756__$1;
(statearr_27766_27789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (11))){
var inst_27733 = (state_27756[(8)]);
var inst_27743 = (state_27756[(2)]);
var inst_27744 = (inst_27733 + (1));
var inst_27733__$1 = inst_27744;
var state_27756__$1 = (function (){var statearr_27767 = state_27756;
(statearr_27767[(8)] = inst_27733__$1);

(statearr_27767[(10)] = inst_27743);

return statearr_27767;
})();
var statearr_27768_27790 = state_27756__$1;
(statearr_27768_27790[(2)] = null);

(statearr_27768_27790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (9))){
var state_27756__$1 = state_27756;
var statearr_27769_27791 = state_27756__$1;
(statearr_27769_27791[(2)] = null);

(statearr_27769_27791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (5))){
var state_27756__$1 = state_27756;
var statearr_27770_27792 = state_27756__$1;
(statearr_27770_27792[(2)] = null);

(statearr_27770_27792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (10))){
var inst_27748 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
var statearr_27771_27793 = state_27756__$1;
(statearr_27771_27793[(2)] = inst_27748);

(statearr_27771_27793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (8))){
var inst_27738 = (state_27756[(7)]);
var state_27756__$1 = state_27756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27756__$1,(11),out,inst_27738);
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
});})(c__19367__auto___27783,out))
;
return ((function (switch__19346__auto__,c__19367__auto___27783,out){
return (function() {
var cljs$core$async$state_machine__19347__auto__ = null;
var cljs$core$async$state_machine__19347__auto____0 = (function (){
var statearr_27775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27775[(0)] = cljs$core$async$state_machine__19347__auto__);

(statearr_27775[(1)] = (1));

return statearr_27775;
});
var cljs$core$async$state_machine__19347__auto____1 = (function (state_27756){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_27756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e27776){if((e27776 instanceof Object)){
var ex__19350__auto__ = e27776;
var statearr_27777_27794 = state_27756;
(statearr_27777_27794[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27795 = state_27756;
state_27756 = G__27795;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$state_machine__19347__auto__ = function(state_27756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19347__auto____1.call(this,state_27756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19347__auto____0;
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19347__auto____1;
return cljs$core$async$state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___27783,out))
})();
var state__19369__auto__ = (function (){var statearr_27778 = f__19368__auto__.call(null);
(statearr_27778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___27783);

return statearr_27778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___27783,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27803 = (function (map_LT_,f,ch,meta27804){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27804 = meta27804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27805,meta27804__$1){
var self__ = this;
var _27805__$1 = this;
return (new cljs.core.async.t_cljs$core$async27803(self__.map_LT_,self__.f,self__.ch,meta27804__$1));
});

cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27805){
var self__ = this;
var _27805__$1 = this;
return self__.meta27804;
});

cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27806 = (function (map_LT_,f,ch,meta27804,_,fn1,meta27807){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27804 = meta27804;
this._ = _;
this.fn1 = fn1;
this.meta27807 = meta27807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27808,meta27807__$1){
var self__ = this;
var _27808__$1 = this;
return (new cljs.core.async.t_cljs$core$async27806(self__.map_LT_,self__.f,self__.ch,self__.meta27804,self__._,self__.fn1,meta27807__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27808){
var self__ = this;
var _27808__$1 = this;
return self__.meta27807;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27806.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27796_SHARP_){
return f1.call(null,(((p1__27796_SHARP_ == null))?null:self__.f.call(null,p1__27796_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27806.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27804","meta27804",-44422893,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27803","cljs.core.async/t_cljs$core$async27803",1255297033,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27807","meta27807",1746151722,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27806";

cljs.core.async.t_cljs$core$async27806.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27806");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27806 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27806(map_LT___$1,f__$1,ch__$1,meta27804__$1,___$2,fn1__$1,meta27807){
return (new cljs.core.async.t_cljs$core$async27806(map_LT___$1,f__$1,ch__$1,meta27804__$1,___$2,fn1__$1,meta27807));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27806(self__.map_LT_,self__.f,self__.ch,self__.meta27804,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27804","meta27804",-44422893,null)], null);
});

cljs.core.async.t_cljs$core$async27803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27803";

cljs.core.async.t_cljs$core$async27803.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27803");
});

cljs.core.async.__GT_t_cljs$core$async27803 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27803(map_LT___$1,f__$1,ch__$1,meta27804){
return (new cljs.core.async.t_cljs$core$async27803(map_LT___$1,f__$1,ch__$1,meta27804));
});

}

return (new cljs.core.async.t_cljs$core$async27803(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27812 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27812 = (function (map_GT_,f,ch,meta27813){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27813 = meta27813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27814,meta27813__$1){
var self__ = this;
var _27814__$1 = this;
return (new cljs.core.async.t_cljs$core$async27812(self__.map_GT_,self__.f,self__.ch,meta27813__$1));
});

cljs.core.async.t_cljs$core$async27812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27814){
var self__ = this;
var _27814__$1 = this;
return self__.meta27813;
});

cljs.core.async.t_cljs$core$async27812.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27812.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27812.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27813","meta27813",1419515709,null)], null);
});

cljs.core.async.t_cljs$core$async27812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27812";

cljs.core.async.t_cljs$core$async27812.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27812");
});

cljs.core.async.__GT_t_cljs$core$async27812 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27812(map_GT___$1,f__$1,ch__$1,meta27813){
return (new cljs.core.async.t_cljs$core$async27812(map_GT___$1,f__$1,ch__$1,meta27813));
});

}

return (new cljs.core.async.t_cljs$core$async27812(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27818 = (function (filter_GT_,p,ch,meta27819){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27819 = meta27819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27820,meta27819__$1){
var self__ = this;
var _27820__$1 = this;
return (new cljs.core.async.t_cljs$core$async27818(self__.filter_GT_,self__.p,self__.ch,meta27819__$1));
});

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27820){
var self__ = this;
var _27820__$1 = this;
return self__.meta27819;
});

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27819","meta27819",2053433592,null)], null);
});

cljs.core.async.t_cljs$core$async27818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27818";

cljs.core.async.t_cljs$core$async27818.cljs$lang$ctorPrWriter = (function (this__16942__auto__,writer__16943__auto__,opt__16944__auto__){
return cljs.core._write.call(null,writer__16943__auto__,"cljs.core.async/t_cljs$core$async27818");
});

cljs.core.async.__GT_t_cljs$core$async27818 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27818(filter_GT___$1,p__$1,ch__$1,meta27819){
return (new cljs.core.async.t_cljs$core$async27818(filter_GT___$1,p__$1,ch__$1,meta27819));
});

}

return (new cljs.core.async.t_cljs$core$async27818(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27821 = [];
var len__17402__auto___27865 = arguments.length;
var i__17403__auto___27866 = (0);
while(true){
if((i__17403__auto___27866 < len__17402__auto___27865)){
args27821.push((arguments[i__17403__auto___27866]));

var G__27867 = (i__17403__auto___27866 + (1));
i__17403__auto___27866 = G__27867;
continue;
} else {
}
break;
}

var G__27823 = args27821.length;
switch (G__27823) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27821.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19367__auto___27869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___27869,out){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___27869,out){
return (function (state_27844){
var state_val_27845 = (state_27844[(1)]);
if((state_val_27845 === (7))){
var inst_27840 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27846_27870 = state_27844__$1;
(statearr_27846_27870[(2)] = inst_27840);

(statearr_27846_27870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (1))){
var state_27844__$1 = state_27844;
var statearr_27847_27871 = state_27844__$1;
(statearr_27847_27871[(2)] = null);

(statearr_27847_27871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (4))){
var inst_27826 = (state_27844[(7)]);
var inst_27826__$1 = (state_27844[(2)]);
var inst_27827 = (inst_27826__$1 == null);
var state_27844__$1 = (function (){var statearr_27848 = state_27844;
(statearr_27848[(7)] = inst_27826__$1);

return statearr_27848;
})();
if(cljs.core.truth_(inst_27827)){
var statearr_27849_27872 = state_27844__$1;
(statearr_27849_27872[(1)] = (5));

} else {
var statearr_27850_27873 = state_27844__$1;
(statearr_27850_27873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (6))){
var inst_27826 = (state_27844[(7)]);
var inst_27831 = p.call(null,inst_27826);
var state_27844__$1 = state_27844;
if(cljs.core.truth_(inst_27831)){
var statearr_27851_27874 = state_27844__$1;
(statearr_27851_27874[(1)] = (8));

} else {
var statearr_27852_27875 = state_27844__$1;
(statearr_27852_27875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (3))){
var inst_27842 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27844__$1,inst_27842);
} else {
if((state_val_27845 === (2))){
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27844__$1,(4),ch);
} else {
if((state_val_27845 === (11))){
var inst_27834 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27853_27876 = state_27844__$1;
(statearr_27853_27876[(2)] = inst_27834);

(statearr_27853_27876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (9))){
var state_27844__$1 = state_27844;
var statearr_27854_27877 = state_27844__$1;
(statearr_27854_27877[(2)] = null);

(statearr_27854_27877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (5))){
var inst_27829 = cljs.core.async.close_BANG_.call(null,out);
var state_27844__$1 = state_27844;
var statearr_27855_27878 = state_27844__$1;
(statearr_27855_27878[(2)] = inst_27829);

(statearr_27855_27878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (10))){
var inst_27837 = (state_27844[(2)]);
var state_27844__$1 = (function (){var statearr_27856 = state_27844;
(statearr_27856[(8)] = inst_27837);

return statearr_27856;
})();
var statearr_27857_27879 = state_27844__$1;
(statearr_27857_27879[(2)] = null);

(statearr_27857_27879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (8))){
var inst_27826 = (state_27844[(7)]);
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27844__$1,(11),out,inst_27826);
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
});})(c__19367__auto___27869,out))
;
return ((function (switch__19346__auto__,c__19367__auto___27869,out){
return (function() {
var cljs$core$async$state_machine__19347__auto__ = null;
var cljs$core$async$state_machine__19347__auto____0 = (function (){
var statearr_27861 = [null,null,null,null,null,null,null,null,null];
(statearr_27861[(0)] = cljs$core$async$state_machine__19347__auto__);

(statearr_27861[(1)] = (1));

return statearr_27861;
});
var cljs$core$async$state_machine__19347__auto____1 = (function (state_27844){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_27844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e27862){if((e27862 instanceof Object)){
var ex__19350__auto__ = e27862;
var statearr_27863_27880 = state_27844;
(statearr_27863_27880[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27881 = state_27844;
state_27844 = G__27881;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$state_machine__19347__auto__ = function(state_27844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19347__auto____1.call(this,state_27844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19347__auto____0;
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19347__auto____1;
return cljs$core$async$state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___27869,out))
})();
var state__19369__auto__ = (function (){var statearr_27864 = f__19368__auto__.call(null);
(statearr_27864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___27869);

return statearr_27864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___27869,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27882 = [];
var len__17402__auto___27885 = arguments.length;
var i__17403__auto___27886 = (0);
while(true){
if((i__17403__auto___27886 < len__17402__auto___27885)){
args27882.push((arguments[i__17403__auto___27886]));

var G__27887 = (i__17403__auto___27886 + (1));
i__17403__auto___27886 = G__27887;
continue;
} else {
}
break;
}

var G__27884 = args27882.length;
switch (G__27884) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27882.length)].join('')));

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
var c__19367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto__){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto__){
return (function (state_28054){
var state_val_28055 = (state_28054[(1)]);
if((state_val_28055 === (7))){
var inst_28050 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28056_28097 = state_28054__$1;
(statearr_28056_28097[(2)] = inst_28050);

(statearr_28056_28097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (20))){
var inst_28020 = (state_28054[(7)]);
var inst_28031 = (state_28054[(2)]);
var inst_28032 = cljs.core.next.call(null,inst_28020);
var inst_28006 = inst_28032;
var inst_28007 = null;
var inst_28008 = (0);
var inst_28009 = (0);
var state_28054__$1 = (function (){var statearr_28057 = state_28054;
(statearr_28057[(8)] = inst_28006);

(statearr_28057[(9)] = inst_28007);

(statearr_28057[(10)] = inst_28009);

(statearr_28057[(11)] = inst_28031);

(statearr_28057[(12)] = inst_28008);

return statearr_28057;
})();
var statearr_28058_28098 = state_28054__$1;
(statearr_28058_28098[(2)] = null);

(statearr_28058_28098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (1))){
var state_28054__$1 = state_28054;
var statearr_28059_28099 = state_28054__$1;
(statearr_28059_28099[(2)] = null);

(statearr_28059_28099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (4))){
var inst_27995 = (state_28054[(13)]);
var inst_27995__$1 = (state_28054[(2)]);
var inst_27996 = (inst_27995__$1 == null);
var state_28054__$1 = (function (){var statearr_28060 = state_28054;
(statearr_28060[(13)] = inst_27995__$1);

return statearr_28060;
})();
if(cljs.core.truth_(inst_27996)){
var statearr_28061_28100 = state_28054__$1;
(statearr_28061_28100[(1)] = (5));

} else {
var statearr_28062_28101 = state_28054__$1;
(statearr_28062_28101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (15))){
var state_28054__$1 = state_28054;
var statearr_28066_28102 = state_28054__$1;
(statearr_28066_28102[(2)] = null);

(statearr_28066_28102[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (21))){
var state_28054__$1 = state_28054;
var statearr_28067_28103 = state_28054__$1;
(statearr_28067_28103[(2)] = null);

(statearr_28067_28103[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (13))){
var inst_28006 = (state_28054[(8)]);
var inst_28007 = (state_28054[(9)]);
var inst_28009 = (state_28054[(10)]);
var inst_28008 = (state_28054[(12)]);
var inst_28016 = (state_28054[(2)]);
var inst_28017 = (inst_28009 + (1));
var tmp28063 = inst_28006;
var tmp28064 = inst_28007;
var tmp28065 = inst_28008;
var inst_28006__$1 = tmp28063;
var inst_28007__$1 = tmp28064;
var inst_28008__$1 = tmp28065;
var inst_28009__$1 = inst_28017;
var state_28054__$1 = (function (){var statearr_28068 = state_28054;
(statearr_28068[(8)] = inst_28006__$1);

(statearr_28068[(9)] = inst_28007__$1);

(statearr_28068[(10)] = inst_28009__$1);

(statearr_28068[(12)] = inst_28008__$1);

(statearr_28068[(14)] = inst_28016);

return statearr_28068;
})();
var statearr_28069_28104 = state_28054__$1;
(statearr_28069_28104[(2)] = null);

(statearr_28069_28104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (22))){
var state_28054__$1 = state_28054;
var statearr_28070_28105 = state_28054__$1;
(statearr_28070_28105[(2)] = null);

(statearr_28070_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (6))){
var inst_27995 = (state_28054[(13)]);
var inst_28004 = f.call(null,inst_27995);
var inst_28005 = cljs.core.seq.call(null,inst_28004);
var inst_28006 = inst_28005;
var inst_28007 = null;
var inst_28008 = (0);
var inst_28009 = (0);
var state_28054__$1 = (function (){var statearr_28071 = state_28054;
(statearr_28071[(8)] = inst_28006);

(statearr_28071[(9)] = inst_28007);

(statearr_28071[(10)] = inst_28009);

(statearr_28071[(12)] = inst_28008);

return statearr_28071;
})();
var statearr_28072_28106 = state_28054__$1;
(statearr_28072_28106[(2)] = null);

(statearr_28072_28106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (17))){
var inst_28020 = (state_28054[(7)]);
var inst_28024 = cljs.core.chunk_first.call(null,inst_28020);
var inst_28025 = cljs.core.chunk_rest.call(null,inst_28020);
var inst_28026 = cljs.core.count.call(null,inst_28024);
var inst_28006 = inst_28025;
var inst_28007 = inst_28024;
var inst_28008 = inst_28026;
var inst_28009 = (0);
var state_28054__$1 = (function (){var statearr_28073 = state_28054;
(statearr_28073[(8)] = inst_28006);

(statearr_28073[(9)] = inst_28007);

(statearr_28073[(10)] = inst_28009);

(statearr_28073[(12)] = inst_28008);

return statearr_28073;
})();
var statearr_28074_28107 = state_28054__$1;
(statearr_28074_28107[(2)] = null);

(statearr_28074_28107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (3))){
var inst_28052 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28054__$1,inst_28052);
} else {
if((state_val_28055 === (12))){
var inst_28040 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28075_28108 = state_28054__$1;
(statearr_28075_28108[(2)] = inst_28040);

(statearr_28075_28108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (2))){
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28054__$1,(4),in$);
} else {
if((state_val_28055 === (23))){
var inst_28048 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28076_28109 = state_28054__$1;
(statearr_28076_28109[(2)] = inst_28048);

(statearr_28076_28109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (19))){
var inst_28035 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28077_28110 = state_28054__$1;
(statearr_28077_28110[(2)] = inst_28035);

(statearr_28077_28110[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (11))){
var inst_28006 = (state_28054[(8)]);
var inst_28020 = (state_28054[(7)]);
var inst_28020__$1 = cljs.core.seq.call(null,inst_28006);
var state_28054__$1 = (function (){var statearr_28078 = state_28054;
(statearr_28078[(7)] = inst_28020__$1);

return statearr_28078;
})();
if(inst_28020__$1){
var statearr_28079_28111 = state_28054__$1;
(statearr_28079_28111[(1)] = (14));

} else {
var statearr_28080_28112 = state_28054__$1;
(statearr_28080_28112[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (9))){
var inst_28042 = (state_28054[(2)]);
var inst_28043 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28054__$1 = (function (){var statearr_28081 = state_28054;
(statearr_28081[(15)] = inst_28042);

return statearr_28081;
})();
if(cljs.core.truth_(inst_28043)){
var statearr_28082_28113 = state_28054__$1;
(statearr_28082_28113[(1)] = (21));

} else {
var statearr_28083_28114 = state_28054__$1;
(statearr_28083_28114[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (5))){
var inst_27998 = cljs.core.async.close_BANG_.call(null,out);
var state_28054__$1 = state_28054;
var statearr_28084_28115 = state_28054__$1;
(statearr_28084_28115[(2)] = inst_27998);

(statearr_28084_28115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (14))){
var inst_28020 = (state_28054[(7)]);
var inst_28022 = cljs.core.chunked_seq_QMARK_.call(null,inst_28020);
var state_28054__$1 = state_28054;
if(inst_28022){
var statearr_28085_28116 = state_28054__$1;
(statearr_28085_28116[(1)] = (17));

} else {
var statearr_28086_28117 = state_28054__$1;
(statearr_28086_28117[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (16))){
var inst_28038 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28087_28118 = state_28054__$1;
(statearr_28087_28118[(2)] = inst_28038);

(statearr_28087_28118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (10))){
var inst_28007 = (state_28054[(9)]);
var inst_28009 = (state_28054[(10)]);
var inst_28014 = cljs.core._nth.call(null,inst_28007,inst_28009);
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28054__$1,(13),out,inst_28014);
} else {
if((state_val_28055 === (18))){
var inst_28020 = (state_28054[(7)]);
var inst_28029 = cljs.core.first.call(null,inst_28020);
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28054__$1,(20),out,inst_28029);
} else {
if((state_val_28055 === (8))){
var inst_28009 = (state_28054[(10)]);
var inst_28008 = (state_28054[(12)]);
var inst_28011 = (inst_28009 < inst_28008);
var inst_28012 = inst_28011;
var state_28054__$1 = state_28054;
if(cljs.core.truth_(inst_28012)){
var statearr_28088_28119 = state_28054__$1;
(statearr_28088_28119[(1)] = (10));

} else {
var statearr_28089_28120 = state_28054__$1;
(statearr_28089_28120[(1)] = (11));

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
});})(c__19367__auto__))
;
return ((function (switch__19346__auto__,c__19367__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19347__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19347__auto____0 = (function (){
var statearr_28093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28093[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19347__auto__);

(statearr_28093[(1)] = (1));

return statearr_28093;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19347__auto____1 = (function (state_28054){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_28054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e28094){if((e28094 instanceof Object)){
var ex__19350__auto__ = e28094;
var statearr_28095_28121 = state_28054;
(statearr_28095_28121[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28122 = state_28054;
state_28054 = G__28122;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19347__auto__ = function(state_28054){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19347__auto____1.call(this,state_28054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19347__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19347__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto__))
})();
var state__19369__auto__ = (function (){var statearr_28096 = f__19368__auto__.call(null);
(statearr_28096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto__);

return statearr_28096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto__))
);

return c__19367__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28123 = [];
var len__17402__auto___28126 = arguments.length;
var i__17403__auto___28127 = (0);
while(true){
if((i__17403__auto___28127 < len__17402__auto___28126)){
args28123.push((arguments[i__17403__auto___28127]));

var G__28128 = (i__17403__auto___28127 + (1));
i__17403__auto___28127 = G__28128;
continue;
} else {
}
break;
}

var G__28125 = args28123.length;
switch (G__28125) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28123.length)].join('')));

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
var args28130 = [];
var len__17402__auto___28133 = arguments.length;
var i__17403__auto___28134 = (0);
while(true){
if((i__17403__auto___28134 < len__17402__auto___28133)){
args28130.push((arguments[i__17403__auto___28134]));

var G__28135 = (i__17403__auto___28134 + (1));
i__17403__auto___28134 = G__28135;
continue;
} else {
}
break;
}

var G__28132 = args28130.length;
switch (G__28132) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28130.length)].join('')));

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
var args28137 = [];
var len__17402__auto___28188 = arguments.length;
var i__17403__auto___28189 = (0);
while(true){
if((i__17403__auto___28189 < len__17402__auto___28188)){
args28137.push((arguments[i__17403__auto___28189]));

var G__28190 = (i__17403__auto___28189 + (1));
i__17403__auto___28189 = G__28190;
continue;
} else {
}
break;
}

var G__28139 = args28137.length;
switch (G__28139) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28137.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19367__auto___28192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___28192,out){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___28192,out){
return (function (state_28163){
var state_val_28164 = (state_28163[(1)]);
if((state_val_28164 === (7))){
var inst_28158 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28165_28193 = state_28163__$1;
(statearr_28165_28193[(2)] = inst_28158);

(statearr_28165_28193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (1))){
var inst_28140 = null;
var state_28163__$1 = (function (){var statearr_28166 = state_28163;
(statearr_28166[(7)] = inst_28140);

return statearr_28166;
})();
var statearr_28167_28194 = state_28163__$1;
(statearr_28167_28194[(2)] = null);

(statearr_28167_28194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (4))){
var inst_28143 = (state_28163[(8)]);
var inst_28143__$1 = (state_28163[(2)]);
var inst_28144 = (inst_28143__$1 == null);
var inst_28145 = cljs.core.not.call(null,inst_28144);
var state_28163__$1 = (function (){var statearr_28168 = state_28163;
(statearr_28168[(8)] = inst_28143__$1);

return statearr_28168;
})();
if(inst_28145){
var statearr_28169_28195 = state_28163__$1;
(statearr_28169_28195[(1)] = (5));

} else {
var statearr_28170_28196 = state_28163__$1;
(statearr_28170_28196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (6))){
var state_28163__$1 = state_28163;
var statearr_28171_28197 = state_28163__$1;
(statearr_28171_28197[(2)] = null);

(statearr_28171_28197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (3))){
var inst_28160 = (state_28163[(2)]);
var inst_28161 = cljs.core.async.close_BANG_.call(null,out);
var state_28163__$1 = (function (){var statearr_28172 = state_28163;
(statearr_28172[(9)] = inst_28160);

return statearr_28172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28163__$1,inst_28161);
} else {
if((state_val_28164 === (2))){
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28163__$1,(4),ch);
} else {
if((state_val_28164 === (11))){
var inst_28143 = (state_28163[(8)]);
var inst_28152 = (state_28163[(2)]);
var inst_28140 = inst_28143;
var state_28163__$1 = (function (){var statearr_28173 = state_28163;
(statearr_28173[(7)] = inst_28140);

(statearr_28173[(10)] = inst_28152);

return statearr_28173;
})();
var statearr_28174_28198 = state_28163__$1;
(statearr_28174_28198[(2)] = null);

(statearr_28174_28198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (9))){
var inst_28143 = (state_28163[(8)]);
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28163__$1,(11),out,inst_28143);
} else {
if((state_val_28164 === (5))){
var inst_28143 = (state_28163[(8)]);
var inst_28140 = (state_28163[(7)]);
var inst_28147 = cljs.core._EQ_.call(null,inst_28143,inst_28140);
var state_28163__$1 = state_28163;
if(inst_28147){
var statearr_28176_28199 = state_28163__$1;
(statearr_28176_28199[(1)] = (8));

} else {
var statearr_28177_28200 = state_28163__$1;
(statearr_28177_28200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (10))){
var inst_28155 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28178_28201 = state_28163__$1;
(statearr_28178_28201[(2)] = inst_28155);

(statearr_28178_28201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (8))){
var inst_28140 = (state_28163[(7)]);
var tmp28175 = inst_28140;
var inst_28140__$1 = tmp28175;
var state_28163__$1 = (function (){var statearr_28179 = state_28163;
(statearr_28179[(7)] = inst_28140__$1);

return statearr_28179;
})();
var statearr_28180_28202 = state_28163__$1;
(statearr_28180_28202[(2)] = null);

(statearr_28180_28202[(1)] = (2));


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
});})(c__19367__auto___28192,out))
;
return ((function (switch__19346__auto__,c__19367__auto___28192,out){
return (function() {
var cljs$core$async$state_machine__19347__auto__ = null;
var cljs$core$async$state_machine__19347__auto____0 = (function (){
var statearr_28184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28184[(0)] = cljs$core$async$state_machine__19347__auto__);

(statearr_28184[(1)] = (1));

return statearr_28184;
});
var cljs$core$async$state_machine__19347__auto____1 = (function (state_28163){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_28163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e28185){if((e28185 instanceof Object)){
var ex__19350__auto__ = e28185;
var statearr_28186_28203 = state_28163;
(statearr_28186_28203[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28204 = state_28163;
state_28163 = G__28204;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$state_machine__19347__auto__ = function(state_28163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19347__auto____1.call(this,state_28163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19347__auto____0;
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19347__auto____1;
return cljs$core$async$state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___28192,out))
})();
var state__19369__auto__ = (function (){var statearr_28187 = f__19368__auto__.call(null);
(statearr_28187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___28192);

return statearr_28187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___28192,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28205 = [];
var len__17402__auto___28275 = arguments.length;
var i__17403__auto___28276 = (0);
while(true){
if((i__17403__auto___28276 < len__17402__auto___28275)){
args28205.push((arguments[i__17403__auto___28276]));

var G__28277 = (i__17403__auto___28276 + (1));
i__17403__auto___28276 = G__28277;
continue;
} else {
}
break;
}

var G__28207 = args28205.length;
switch (G__28207) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28205.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19367__auto___28279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___28279,out){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___28279,out){
return (function (state_28245){
var state_val_28246 = (state_28245[(1)]);
if((state_val_28246 === (7))){
var inst_28241 = (state_28245[(2)]);
var state_28245__$1 = state_28245;
var statearr_28247_28280 = state_28245__$1;
(statearr_28247_28280[(2)] = inst_28241);

(statearr_28247_28280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (1))){
var inst_28208 = (new Array(n));
var inst_28209 = inst_28208;
var inst_28210 = (0);
var state_28245__$1 = (function (){var statearr_28248 = state_28245;
(statearr_28248[(7)] = inst_28209);

(statearr_28248[(8)] = inst_28210);

return statearr_28248;
})();
var statearr_28249_28281 = state_28245__$1;
(statearr_28249_28281[(2)] = null);

(statearr_28249_28281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (4))){
var inst_28213 = (state_28245[(9)]);
var inst_28213__$1 = (state_28245[(2)]);
var inst_28214 = (inst_28213__$1 == null);
var inst_28215 = cljs.core.not.call(null,inst_28214);
var state_28245__$1 = (function (){var statearr_28250 = state_28245;
(statearr_28250[(9)] = inst_28213__$1);

return statearr_28250;
})();
if(inst_28215){
var statearr_28251_28282 = state_28245__$1;
(statearr_28251_28282[(1)] = (5));

} else {
var statearr_28252_28283 = state_28245__$1;
(statearr_28252_28283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (15))){
var inst_28235 = (state_28245[(2)]);
var state_28245__$1 = state_28245;
var statearr_28253_28284 = state_28245__$1;
(statearr_28253_28284[(2)] = inst_28235);

(statearr_28253_28284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (13))){
var state_28245__$1 = state_28245;
var statearr_28254_28285 = state_28245__$1;
(statearr_28254_28285[(2)] = null);

(statearr_28254_28285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (6))){
var inst_28210 = (state_28245[(8)]);
var inst_28231 = (inst_28210 > (0));
var state_28245__$1 = state_28245;
if(cljs.core.truth_(inst_28231)){
var statearr_28255_28286 = state_28245__$1;
(statearr_28255_28286[(1)] = (12));

} else {
var statearr_28256_28287 = state_28245__$1;
(statearr_28256_28287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (3))){
var inst_28243 = (state_28245[(2)]);
var state_28245__$1 = state_28245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28245__$1,inst_28243);
} else {
if((state_val_28246 === (12))){
var inst_28209 = (state_28245[(7)]);
var inst_28233 = cljs.core.vec.call(null,inst_28209);
var state_28245__$1 = state_28245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28245__$1,(15),out,inst_28233);
} else {
if((state_val_28246 === (2))){
var state_28245__$1 = state_28245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28245__$1,(4),ch);
} else {
if((state_val_28246 === (11))){
var inst_28225 = (state_28245[(2)]);
var inst_28226 = (new Array(n));
var inst_28209 = inst_28226;
var inst_28210 = (0);
var state_28245__$1 = (function (){var statearr_28257 = state_28245;
(statearr_28257[(10)] = inst_28225);

(statearr_28257[(7)] = inst_28209);

(statearr_28257[(8)] = inst_28210);

return statearr_28257;
})();
var statearr_28258_28288 = state_28245__$1;
(statearr_28258_28288[(2)] = null);

(statearr_28258_28288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (9))){
var inst_28209 = (state_28245[(7)]);
var inst_28223 = cljs.core.vec.call(null,inst_28209);
var state_28245__$1 = state_28245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28245__$1,(11),out,inst_28223);
} else {
if((state_val_28246 === (5))){
var inst_28213 = (state_28245[(9)]);
var inst_28218 = (state_28245[(11)]);
var inst_28209 = (state_28245[(7)]);
var inst_28210 = (state_28245[(8)]);
var inst_28217 = (inst_28209[inst_28210] = inst_28213);
var inst_28218__$1 = (inst_28210 + (1));
var inst_28219 = (inst_28218__$1 < n);
var state_28245__$1 = (function (){var statearr_28259 = state_28245;
(statearr_28259[(11)] = inst_28218__$1);

(statearr_28259[(12)] = inst_28217);

return statearr_28259;
})();
if(cljs.core.truth_(inst_28219)){
var statearr_28260_28289 = state_28245__$1;
(statearr_28260_28289[(1)] = (8));

} else {
var statearr_28261_28290 = state_28245__$1;
(statearr_28261_28290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (14))){
var inst_28238 = (state_28245[(2)]);
var inst_28239 = cljs.core.async.close_BANG_.call(null,out);
var state_28245__$1 = (function (){var statearr_28263 = state_28245;
(statearr_28263[(13)] = inst_28238);

return statearr_28263;
})();
var statearr_28264_28291 = state_28245__$1;
(statearr_28264_28291[(2)] = inst_28239);

(statearr_28264_28291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (10))){
var inst_28229 = (state_28245[(2)]);
var state_28245__$1 = state_28245;
var statearr_28265_28292 = state_28245__$1;
(statearr_28265_28292[(2)] = inst_28229);

(statearr_28265_28292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28246 === (8))){
var inst_28218 = (state_28245[(11)]);
var inst_28209 = (state_28245[(7)]);
var tmp28262 = inst_28209;
var inst_28209__$1 = tmp28262;
var inst_28210 = inst_28218;
var state_28245__$1 = (function (){var statearr_28266 = state_28245;
(statearr_28266[(7)] = inst_28209__$1);

(statearr_28266[(8)] = inst_28210);

return statearr_28266;
})();
var statearr_28267_28293 = state_28245__$1;
(statearr_28267_28293[(2)] = null);

(statearr_28267_28293[(1)] = (2));


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
});})(c__19367__auto___28279,out))
;
return ((function (switch__19346__auto__,c__19367__auto___28279,out){
return (function() {
var cljs$core$async$state_machine__19347__auto__ = null;
var cljs$core$async$state_machine__19347__auto____0 = (function (){
var statearr_28271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28271[(0)] = cljs$core$async$state_machine__19347__auto__);

(statearr_28271[(1)] = (1));

return statearr_28271;
});
var cljs$core$async$state_machine__19347__auto____1 = (function (state_28245){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_28245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e28272){if((e28272 instanceof Object)){
var ex__19350__auto__ = e28272;
var statearr_28273_28294 = state_28245;
(statearr_28273_28294[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28295 = state_28245;
state_28245 = G__28295;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$state_machine__19347__auto__ = function(state_28245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19347__auto____1.call(this,state_28245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19347__auto____0;
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19347__auto____1;
return cljs$core$async$state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___28279,out))
})();
var state__19369__auto__ = (function (){var statearr_28274 = f__19368__auto__.call(null);
(statearr_28274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___28279);

return statearr_28274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___28279,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28296 = [];
var len__17402__auto___28370 = arguments.length;
var i__17403__auto___28371 = (0);
while(true){
if((i__17403__auto___28371 < len__17402__auto___28370)){
args28296.push((arguments[i__17403__auto___28371]));

var G__28372 = (i__17403__auto___28371 + (1));
i__17403__auto___28371 = G__28372;
continue;
} else {
}
break;
}

var G__28298 = args28296.length;
switch (G__28298) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28296.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19367__auto___28374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19367__auto___28374,out){
return (function (){
var f__19368__auto__ = (function (){var switch__19346__auto__ = ((function (c__19367__auto___28374,out){
return (function (state_28340){
var state_val_28341 = (state_28340[(1)]);
if((state_val_28341 === (7))){
var inst_28336 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
var statearr_28342_28375 = state_28340__$1;
(statearr_28342_28375[(2)] = inst_28336);

(statearr_28342_28375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (1))){
var inst_28299 = [];
var inst_28300 = inst_28299;
var inst_28301 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28340__$1 = (function (){var statearr_28343 = state_28340;
(statearr_28343[(7)] = inst_28300);

(statearr_28343[(8)] = inst_28301);

return statearr_28343;
})();
var statearr_28344_28376 = state_28340__$1;
(statearr_28344_28376[(2)] = null);

(statearr_28344_28376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (4))){
var inst_28304 = (state_28340[(9)]);
var inst_28304__$1 = (state_28340[(2)]);
var inst_28305 = (inst_28304__$1 == null);
var inst_28306 = cljs.core.not.call(null,inst_28305);
var state_28340__$1 = (function (){var statearr_28345 = state_28340;
(statearr_28345[(9)] = inst_28304__$1);

return statearr_28345;
})();
if(inst_28306){
var statearr_28346_28377 = state_28340__$1;
(statearr_28346_28377[(1)] = (5));

} else {
var statearr_28347_28378 = state_28340__$1;
(statearr_28347_28378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (15))){
var inst_28330 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
var statearr_28348_28379 = state_28340__$1;
(statearr_28348_28379[(2)] = inst_28330);

(statearr_28348_28379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (13))){
var state_28340__$1 = state_28340;
var statearr_28349_28380 = state_28340__$1;
(statearr_28349_28380[(2)] = null);

(statearr_28349_28380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (6))){
var inst_28300 = (state_28340[(7)]);
var inst_28325 = inst_28300.length;
var inst_28326 = (inst_28325 > (0));
var state_28340__$1 = state_28340;
if(cljs.core.truth_(inst_28326)){
var statearr_28350_28381 = state_28340__$1;
(statearr_28350_28381[(1)] = (12));

} else {
var statearr_28351_28382 = state_28340__$1;
(statearr_28351_28382[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (3))){
var inst_28338 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28340__$1,inst_28338);
} else {
if((state_val_28341 === (12))){
var inst_28300 = (state_28340[(7)]);
var inst_28328 = cljs.core.vec.call(null,inst_28300);
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28340__$1,(15),out,inst_28328);
} else {
if((state_val_28341 === (2))){
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28340__$1,(4),ch);
} else {
if((state_val_28341 === (11))){
var inst_28304 = (state_28340[(9)]);
var inst_28308 = (state_28340[(10)]);
var inst_28318 = (state_28340[(2)]);
var inst_28319 = [];
var inst_28320 = inst_28319.push(inst_28304);
var inst_28300 = inst_28319;
var inst_28301 = inst_28308;
var state_28340__$1 = (function (){var statearr_28352 = state_28340;
(statearr_28352[(11)] = inst_28318);

(statearr_28352[(7)] = inst_28300);

(statearr_28352[(12)] = inst_28320);

(statearr_28352[(8)] = inst_28301);

return statearr_28352;
})();
var statearr_28353_28383 = state_28340__$1;
(statearr_28353_28383[(2)] = null);

(statearr_28353_28383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (9))){
var inst_28300 = (state_28340[(7)]);
var inst_28316 = cljs.core.vec.call(null,inst_28300);
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28340__$1,(11),out,inst_28316);
} else {
if((state_val_28341 === (5))){
var inst_28304 = (state_28340[(9)]);
var inst_28301 = (state_28340[(8)]);
var inst_28308 = (state_28340[(10)]);
var inst_28308__$1 = f.call(null,inst_28304);
var inst_28309 = cljs.core._EQ_.call(null,inst_28308__$1,inst_28301);
var inst_28310 = cljs.core.keyword_identical_QMARK_.call(null,inst_28301,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28311 = (inst_28309) || (inst_28310);
var state_28340__$1 = (function (){var statearr_28354 = state_28340;
(statearr_28354[(10)] = inst_28308__$1);

return statearr_28354;
})();
if(cljs.core.truth_(inst_28311)){
var statearr_28355_28384 = state_28340__$1;
(statearr_28355_28384[(1)] = (8));

} else {
var statearr_28356_28385 = state_28340__$1;
(statearr_28356_28385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (14))){
var inst_28333 = (state_28340[(2)]);
var inst_28334 = cljs.core.async.close_BANG_.call(null,out);
var state_28340__$1 = (function (){var statearr_28358 = state_28340;
(statearr_28358[(13)] = inst_28333);

return statearr_28358;
})();
var statearr_28359_28386 = state_28340__$1;
(statearr_28359_28386[(2)] = inst_28334);

(statearr_28359_28386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (10))){
var inst_28323 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
var statearr_28360_28387 = state_28340__$1;
(statearr_28360_28387[(2)] = inst_28323);

(statearr_28360_28387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (8))){
var inst_28304 = (state_28340[(9)]);
var inst_28300 = (state_28340[(7)]);
var inst_28308 = (state_28340[(10)]);
var inst_28313 = inst_28300.push(inst_28304);
var tmp28357 = inst_28300;
var inst_28300__$1 = tmp28357;
var inst_28301 = inst_28308;
var state_28340__$1 = (function (){var statearr_28361 = state_28340;
(statearr_28361[(7)] = inst_28300__$1);

(statearr_28361[(8)] = inst_28301);

(statearr_28361[(14)] = inst_28313);

return statearr_28361;
})();
var statearr_28362_28388 = state_28340__$1;
(statearr_28362_28388[(2)] = null);

(statearr_28362_28388[(1)] = (2));


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
});})(c__19367__auto___28374,out))
;
return ((function (switch__19346__auto__,c__19367__auto___28374,out){
return (function() {
var cljs$core$async$state_machine__19347__auto__ = null;
var cljs$core$async$state_machine__19347__auto____0 = (function (){
var statearr_28366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28366[(0)] = cljs$core$async$state_machine__19347__auto__);

(statearr_28366[(1)] = (1));

return statearr_28366;
});
var cljs$core$async$state_machine__19347__auto____1 = (function (state_28340){
while(true){
var ret_value__19348__auto__ = (function (){try{while(true){
var result__19349__auto__ = switch__19346__auto__.call(null,state_28340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19349__auto__;
}
break;
}
}catch (e28367){if((e28367 instanceof Object)){
var ex__19350__auto__ = e28367;
var statearr_28368_28389 = state_28340;
(statearr_28368_28389[(5)] = ex__19350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28390 = state_28340;
state_28340 = G__28390;
continue;
} else {
return ret_value__19348__auto__;
}
break;
}
});
cljs$core$async$state_machine__19347__auto__ = function(state_28340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19347__auto____1.call(this,state_28340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19347__auto____0;
cljs$core$async$state_machine__19347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19347__auto____1;
return cljs$core$async$state_machine__19347__auto__;
})()
;})(switch__19346__auto__,c__19367__auto___28374,out))
})();
var state__19369__auto__ = (function (){var statearr_28369 = f__19368__auto__.call(null);
(statearr_28369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19367__auto___28374);

return statearr_28369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19369__auto__);
});})(c__19367__auto___28374,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map