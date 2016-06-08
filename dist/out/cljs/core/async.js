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
if(typeof cljs.core.async.t_cljs$core$async27212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27212 = (function (fn_handler,f,meta27213){
this.fn_handler = fn_handler;
this.f = f;
this.meta27213 = meta27213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27214,meta27213__$1){
var self__ = this;
var _27214__$1 = this;
return (new cljs.core.async.t_cljs$core$async27212(self__.fn_handler,self__.f,meta27213__$1));
});

cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27214){
var self__ = this;
var _27214__$1 = this;
return self__.meta27213;
});

cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27213","meta27213",696531769,null)], null);
});

cljs.core.async.t_cljs$core$async27212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27212";

cljs.core.async.t_cljs$core$async27212.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27212");
});

cljs.core.async.__GT_t_cljs$core$async27212 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async27212(fn_handler__$1,f__$1,meta27213){
return (new cljs.core.async.t_cljs$core$async27212(fn_handler__$1,f__$1,meta27213));
});

}

return (new cljs.core.async.t_cljs$core$async27212(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args27217 = [];
var len__17416__auto___27220 = arguments.length;
var i__17417__auto___27221 = (0);
while(true){
if((i__17417__auto___27221 < len__17416__auto___27220)){
args27217.push((arguments[i__17417__auto___27221]));

var G__27222 = (i__17417__auto___27221 + (1));
i__17417__auto___27221 = G__27222;
continue;
} else {
}
break;
}

var G__27219 = args27217.length;
switch (G__27219) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27217.length)].join('')));

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
var args27224 = [];
var len__17416__auto___27227 = arguments.length;
var i__17417__auto___27228 = (0);
while(true){
if((i__17417__auto___27228 < len__17416__auto___27227)){
args27224.push((arguments[i__17417__auto___27228]));

var G__27229 = (i__17417__auto___27228 + (1));
i__17417__auto___27228 = G__27229;
continue;
} else {
}
break;
}

var G__27226 = args27224.length;
switch (G__27226) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27224.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27231 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27231);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27231,ret){
return (function (){
return fn1.call(null,val_27231);
});})(val_27231,ret))
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
var args27232 = [];
var len__17416__auto___27235 = arguments.length;
var i__17417__auto___27236 = (0);
while(true){
if((i__17417__auto___27236 < len__17416__auto___27235)){
args27232.push((arguments[i__17417__auto___27236]));

var G__27237 = (i__17417__auto___27236 + (1));
i__17417__auto___27236 = G__27237;
continue;
} else {
}
break;
}

var G__27234 = args27232.length;
switch (G__27234) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27232.length)].join('')));

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
var n__17261__auto___27239 = n;
var x_27240 = (0);
while(true){
if((x_27240 < n__17261__auto___27239)){
(a[x_27240] = (0));

var G__27241 = (x_27240 + (1));
x_27240 = G__27241;
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

var G__27242 = (i + (1));
i = G__27242;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27246 = (function (alt_flag,flag,meta27247){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27247 = meta27247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27248,meta27247__$1){
var self__ = this;
var _27248__$1 = this;
return (new cljs.core.async.t_cljs$core$async27246(self__.alt_flag,self__.flag,meta27247__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27248){
var self__ = this;
var _27248__$1 = this;
return self__.meta27247;
});})(flag))
;

cljs.core.async.t_cljs$core$async27246.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27246.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27247","meta27247",-2127805492,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27246";

cljs.core.async.t_cljs$core$async27246.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27246");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27246 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27246(alt_flag__$1,flag__$1,meta27247){
return (new cljs.core.async.t_cljs$core$async27246(alt_flag__$1,flag__$1,meta27247));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27246(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27252 = (function (alt_handler,flag,cb,meta27253){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27253 = meta27253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27254,meta27253__$1){
var self__ = this;
var _27254__$1 = this;
return (new cljs.core.async.t_cljs$core$async27252(self__.alt_handler,self__.flag,self__.cb,meta27253__$1));
});

cljs.core.async.t_cljs$core$async27252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27254){
var self__ = this;
var _27254__$1 = this;
return self__.meta27253;
});

cljs.core.async.t_cljs$core$async27252.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27253","meta27253",-1009815590,null)], null);
});

cljs.core.async.t_cljs$core$async27252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27252";

cljs.core.async.t_cljs$core$async27252.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async27252");
});

cljs.core.async.__GT_t_cljs$core$async27252 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27252(alt_handler__$1,flag__$1,cb__$1,meta27253){
return (new cljs.core.async.t_cljs$core$async27252(alt_handler__$1,flag__$1,cb__$1,meta27253));
});

}

return (new cljs.core.async.t_cljs$core$async27252(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27255_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27255_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27256_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27256_SHARP_,port], null));
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
var G__27257 = (i + (1));
i = G__27257;
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
var len__17416__auto___27263 = arguments.length;
var i__17417__auto___27264 = (0);
while(true){
if((i__17417__auto___27264 < len__17416__auto___27263)){
args__17423__auto__.push((arguments[i__17417__auto___27264]));

var G__27265 = (i__17417__auto___27264 + (1));
i__17417__auto___27264 = G__27265;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27260){
var map__27261 = p__27260;
var map__27261__$1 = ((((!((map__27261 == null)))?((((map__27261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27261):map__27261);
var opts = map__27261__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27258){
var G__27259 = cljs.core.first.call(null,seq27258);
var seq27258__$1 = cljs.core.next.call(null,seq27258);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27259,seq27258__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27266 = [];
var len__17416__auto___27316 = arguments.length;
var i__17417__auto___27317 = (0);
while(true){
if((i__17417__auto___27317 < len__17416__auto___27316)){
args27266.push((arguments[i__17417__auto___27317]));

var G__27318 = (i__17417__auto___27317 + (1));
i__17417__auto___27317 = G__27318;
continue;
} else {
}
break;
}

var G__27268 = args27266.length;
switch (G__27268) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27266.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19381__auto___27320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___27320){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___27320){
return (function (state_27292){
var state_val_27293 = (state_27292[(1)]);
if((state_val_27293 === (7))){
var inst_27288 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27294_27321 = state_27292__$1;
(statearr_27294_27321[(2)] = inst_27288);

(statearr_27294_27321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (1))){
var state_27292__$1 = state_27292;
var statearr_27295_27322 = state_27292__$1;
(statearr_27295_27322[(2)] = null);

(statearr_27295_27322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (4))){
var inst_27271 = (state_27292[(7)]);
var inst_27271__$1 = (state_27292[(2)]);
var inst_27272 = (inst_27271__$1 == null);
var state_27292__$1 = (function (){var statearr_27296 = state_27292;
(statearr_27296[(7)] = inst_27271__$1);

return statearr_27296;
})();
if(cljs.core.truth_(inst_27272)){
var statearr_27297_27323 = state_27292__$1;
(statearr_27297_27323[(1)] = (5));

} else {
var statearr_27298_27324 = state_27292__$1;
(statearr_27298_27324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (13))){
var state_27292__$1 = state_27292;
var statearr_27299_27325 = state_27292__$1;
(statearr_27299_27325[(2)] = null);

(statearr_27299_27325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (6))){
var inst_27271 = (state_27292[(7)]);
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27292__$1,(11),to,inst_27271);
} else {
if((state_val_27293 === (3))){
var inst_27290 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27292__$1,inst_27290);
} else {
if((state_val_27293 === (12))){
var state_27292__$1 = state_27292;
var statearr_27300_27326 = state_27292__$1;
(statearr_27300_27326[(2)] = null);

(statearr_27300_27326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (2))){
var state_27292__$1 = state_27292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27292__$1,(4),from);
} else {
if((state_val_27293 === (11))){
var inst_27281 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
if(cljs.core.truth_(inst_27281)){
var statearr_27301_27327 = state_27292__$1;
(statearr_27301_27327[(1)] = (12));

} else {
var statearr_27302_27328 = state_27292__$1;
(statearr_27302_27328[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (9))){
var state_27292__$1 = state_27292;
var statearr_27303_27329 = state_27292__$1;
(statearr_27303_27329[(2)] = null);

(statearr_27303_27329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (5))){
var state_27292__$1 = state_27292;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27304_27330 = state_27292__$1;
(statearr_27304_27330[(1)] = (8));

} else {
var statearr_27305_27331 = state_27292__$1;
(statearr_27305_27331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (14))){
var inst_27286 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27306_27332 = state_27292__$1;
(statearr_27306_27332[(2)] = inst_27286);

(statearr_27306_27332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (10))){
var inst_27278 = (state_27292[(2)]);
var state_27292__$1 = state_27292;
var statearr_27307_27333 = state_27292__$1;
(statearr_27307_27333[(2)] = inst_27278);

(statearr_27307_27333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27293 === (8))){
var inst_27275 = cljs.core.async.close_BANG_.call(null,to);
var state_27292__$1 = state_27292;
var statearr_27308_27334 = state_27292__$1;
(statearr_27308_27334[(2)] = inst_27275);

(statearr_27308_27334[(1)] = (10));


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
});})(c__19381__auto___27320))
;
return ((function (switch__19360__auto__,c__19381__auto___27320){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_27312 = [null,null,null,null,null,null,null,null];
(statearr_27312[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_27312[(1)] = (1));

return statearr_27312;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_27292){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27313){if((e27313 instanceof Object)){
var ex__19364__auto__ = e27313;
var statearr_27314_27335 = state_27292;
(statearr_27314_27335[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27336 = state_27292;
state_27292 = G__27336;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_27292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_27292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___27320))
})();
var state__19383__auto__ = (function (){var statearr_27315 = f__19382__auto__.call(null);
(statearr_27315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___27320);

return statearr_27315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___27320))
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
return (function (p__27520){
var vec__27521 = p__27520;
var v = cljs.core.nth.call(null,vec__27521,(0),null);
var p = cljs.core.nth.call(null,vec__27521,(1),null);
var job = vec__27521;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19381__auto___27703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___27703,res,vec__27521,v,p,job,jobs,results){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___27703,res,vec__27521,v,p,job,jobs,results){
return (function (state_27526){
var state_val_27527 = (state_27526[(1)]);
if((state_val_27527 === (1))){
var state_27526__$1 = state_27526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27526__$1,(2),res,v);
} else {
if((state_val_27527 === (2))){
var inst_27523 = (state_27526[(2)]);
var inst_27524 = cljs.core.async.close_BANG_.call(null,res);
var state_27526__$1 = (function (){var statearr_27528 = state_27526;
(statearr_27528[(7)] = inst_27523);

return statearr_27528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27526__$1,inst_27524);
} else {
return null;
}
}
});})(c__19381__auto___27703,res,vec__27521,v,p,job,jobs,results))
;
return ((function (switch__19360__auto__,c__19381__auto___27703,res,vec__27521,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_27532 = [null,null,null,null,null,null,null,null];
(statearr_27532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_27532[(1)] = (1));

return statearr_27532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_27526){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27533){if((e27533 instanceof Object)){
var ex__19364__auto__ = e27533;
var statearr_27534_27704 = state_27526;
(statearr_27534_27704[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27705 = state_27526;
state_27526 = G__27705;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_27526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_27526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___27703,res,vec__27521,v,p,job,jobs,results))
})();
var state__19383__auto__ = (function (){var statearr_27535 = f__19382__auto__.call(null);
(statearr_27535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___27703);

return statearr_27535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___27703,res,vec__27521,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27536){
var vec__27537 = p__27536;
var v = cljs.core.nth.call(null,vec__27537,(0),null);
var p = cljs.core.nth.call(null,vec__27537,(1),null);
var job = vec__27537;
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
var n__17261__auto___27706 = n;
var __27707 = (0);
while(true){
if((__27707 < n__17261__auto___27706)){
var G__27538_27708 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27538_27708) {
case "compute":
var c__19381__auto___27710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27707,c__19381__auto___27710,G__27538_27708,n__17261__auto___27706,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (__27707,c__19381__auto___27710,G__27538_27708,n__17261__auto___27706,jobs,results,process,async){
return (function (state_27551){
var state_val_27552 = (state_27551[(1)]);
if((state_val_27552 === (1))){
var state_27551__$1 = state_27551;
var statearr_27553_27711 = state_27551__$1;
(statearr_27553_27711[(2)] = null);

(statearr_27553_27711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (2))){
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(4),jobs);
} else {
if((state_val_27552 === (3))){
var inst_27549 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27551__$1,inst_27549);
} else {
if((state_val_27552 === (4))){
var inst_27541 = (state_27551[(2)]);
var inst_27542 = process.call(null,inst_27541);
var state_27551__$1 = state_27551;
if(cljs.core.truth_(inst_27542)){
var statearr_27554_27712 = state_27551__$1;
(statearr_27554_27712[(1)] = (5));

} else {
var statearr_27555_27713 = state_27551__$1;
(statearr_27555_27713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (5))){
var state_27551__$1 = state_27551;
var statearr_27556_27714 = state_27551__$1;
(statearr_27556_27714[(2)] = null);

(statearr_27556_27714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (6))){
var state_27551__$1 = state_27551;
var statearr_27557_27715 = state_27551__$1;
(statearr_27557_27715[(2)] = null);

(statearr_27557_27715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (7))){
var inst_27547 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27558_27716 = state_27551__$1;
(statearr_27558_27716[(2)] = inst_27547);

(statearr_27558_27716[(1)] = (3));


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
});})(__27707,c__19381__auto___27710,G__27538_27708,n__17261__auto___27706,jobs,results,process,async))
;
return ((function (__27707,switch__19360__auto__,c__19381__auto___27710,G__27538_27708,n__17261__auto___27706,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_27562 = [null,null,null,null,null,null,null];
(statearr_27562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_27562[(1)] = (1));

return statearr_27562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_27551){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27563){if((e27563 instanceof Object)){
var ex__19364__auto__ = e27563;
var statearr_27564_27717 = state_27551;
(statearr_27564_27717[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27718 = state_27551;
state_27551 = G__27718;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_27551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_27551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(__27707,switch__19360__auto__,c__19381__auto___27710,G__27538_27708,n__17261__auto___27706,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_27565 = f__19382__auto__.call(null);
(statearr_27565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___27710);

return statearr_27565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(__27707,c__19381__auto___27710,G__27538_27708,n__17261__auto___27706,jobs,results,process,async))
);


break;
case "async":
var c__19381__auto___27719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27707,c__19381__auto___27719,G__27538_27708,n__17261__auto___27706,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (__27707,c__19381__auto___27719,G__27538_27708,n__17261__auto___27706,jobs,results,process,async){
return (function (state_27578){
var state_val_27579 = (state_27578[(1)]);
if((state_val_27579 === (1))){
var state_27578__$1 = state_27578;
var statearr_27580_27720 = state_27578__$1;
(statearr_27580_27720[(2)] = null);

(statearr_27580_27720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (2))){
var state_27578__$1 = state_27578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27578__$1,(4),jobs);
} else {
if((state_val_27579 === (3))){
var inst_27576 = (state_27578[(2)]);
var state_27578__$1 = state_27578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27578__$1,inst_27576);
} else {
if((state_val_27579 === (4))){
var inst_27568 = (state_27578[(2)]);
var inst_27569 = async.call(null,inst_27568);
var state_27578__$1 = state_27578;
if(cljs.core.truth_(inst_27569)){
var statearr_27581_27721 = state_27578__$1;
(statearr_27581_27721[(1)] = (5));

} else {
var statearr_27582_27722 = state_27578__$1;
(statearr_27582_27722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (5))){
var state_27578__$1 = state_27578;
var statearr_27583_27723 = state_27578__$1;
(statearr_27583_27723[(2)] = null);

(statearr_27583_27723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (6))){
var state_27578__$1 = state_27578;
var statearr_27584_27724 = state_27578__$1;
(statearr_27584_27724[(2)] = null);

(statearr_27584_27724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27579 === (7))){
var inst_27574 = (state_27578[(2)]);
var state_27578__$1 = state_27578;
var statearr_27585_27725 = state_27578__$1;
(statearr_27585_27725[(2)] = inst_27574);

(statearr_27585_27725[(1)] = (3));


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
});})(__27707,c__19381__auto___27719,G__27538_27708,n__17261__auto___27706,jobs,results,process,async))
;
return ((function (__27707,switch__19360__auto__,c__19381__auto___27719,G__27538_27708,n__17261__auto___27706,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_27589 = [null,null,null,null,null,null,null];
(statearr_27589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_27589[(1)] = (1));

return statearr_27589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_27578){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27590){if((e27590 instanceof Object)){
var ex__19364__auto__ = e27590;
var statearr_27591_27726 = state_27578;
(statearr_27591_27726[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27727 = state_27578;
state_27578 = G__27727;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_27578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_27578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(__27707,switch__19360__auto__,c__19381__auto___27719,G__27538_27708,n__17261__auto___27706,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_27592 = f__19382__auto__.call(null);
(statearr_27592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___27719);

return statearr_27592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(__27707,c__19381__auto___27719,G__27538_27708,n__17261__auto___27706,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27728 = (__27707 + (1));
__27707 = G__27728;
continue;
} else {
}
break;
}

var c__19381__auto___27729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___27729,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___27729,jobs,results,process,async){
return (function (state_27614){
var state_val_27615 = (state_27614[(1)]);
if((state_val_27615 === (1))){
var state_27614__$1 = state_27614;
var statearr_27616_27730 = state_27614__$1;
(statearr_27616_27730[(2)] = null);

(statearr_27616_27730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (2))){
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27614__$1,(4),from);
} else {
if((state_val_27615 === (3))){
var inst_27612 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27614__$1,inst_27612);
} else {
if((state_val_27615 === (4))){
var inst_27595 = (state_27614[(7)]);
var inst_27595__$1 = (state_27614[(2)]);
var inst_27596 = (inst_27595__$1 == null);
var state_27614__$1 = (function (){var statearr_27617 = state_27614;
(statearr_27617[(7)] = inst_27595__$1);

return statearr_27617;
})();
if(cljs.core.truth_(inst_27596)){
var statearr_27618_27731 = state_27614__$1;
(statearr_27618_27731[(1)] = (5));

} else {
var statearr_27619_27732 = state_27614__$1;
(statearr_27619_27732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (5))){
var inst_27598 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27614__$1 = state_27614;
var statearr_27620_27733 = state_27614__$1;
(statearr_27620_27733[(2)] = inst_27598);

(statearr_27620_27733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (6))){
var inst_27600 = (state_27614[(8)]);
var inst_27595 = (state_27614[(7)]);
var inst_27600__$1 = cljs.core.async.chan.call(null,(1));
var inst_27601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27602 = [inst_27595,inst_27600__$1];
var inst_27603 = (new cljs.core.PersistentVector(null,2,(5),inst_27601,inst_27602,null));
var state_27614__$1 = (function (){var statearr_27621 = state_27614;
(statearr_27621[(8)] = inst_27600__$1);

return statearr_27621;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27614__$1,(8),jobs,inst_27603);
} else {
if((state_val_27615 === (7))){
var inst_27610 = (state_27614[(2)]);
var state_27614__$1 = state_27614;
var statearr_27622_27734 = state_27614__$1;
(statearr_27622_27734[(2)] = inst_27610);

(statearr_27622_27734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27615 === (8))){
var inst_27600 = (state_27614[(8)]);
var inst_27605 = (state_27614[(2)]);
var state_27614__$1 = (function (){var statearr_27623 = state_27614;
(statearr_27623[(9)] = inst_27605);

return statearr_27623;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27614__$1,(9),results,inst_27600);
} else {
if((state_val_27615 === (9))){
var inst_27607 = (state_27614[(2)]);
var state_27614__$1 = (function (){var statearr_27624 = state_27614;
(statearr_27624[(10)] = inst_27607);

return statearr_27624;
})();
var statearr_27625_27735 = state_27614__$1;
(statearr_27625_27735[(2)] = null);

(statearr_27625_27735[(1)] = (2));


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
});})(c__19381__auto___27729,jobs,results,process,async))
;
return ((function (switch__19360__auto__,c__19381__auto___27729,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0 = (function (){
var statearr_27629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_27629[(1)] = (1));

return statearr_27629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_27614){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27630){if((e27630 instanceof Object)){
var ex__19364__auto__ = e27630;
var statearr_27631_27736 = state_27614;
(statearr_27631_27736[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27737 = state_27614;
state_27614 = G__27737;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_27614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_27614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___27729,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_27632 = f__19382__auto__.call(null);
(statearr_27632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___27729);

return statearr_27632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___27729,jobs,results,process,async))
);


var c__19381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto__,jobs,results,process,async){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto__,jobs,results,process,async){
return (function (state_27670){
var state_val_27671 = (state_27670[(1)]);
if((state_val_27671 === (7))){
var inst_27666 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27672_27738 = state_27670__$1;
(statearr_27672_27738[(2)] = inst_27666);

(statearr_27672_27738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (20))){
var state_27670__$1 = state_27670;
var statearr_27673_27739 = state_27670__$1;
(statearr_27673_27739[(2)] = null);

(statearr_27673_27739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (1))){
var state_27670__$1 = state_27670;
var statearr_27674_27740 = state_27670__$1;
(statearr_27674_27740[(2)] = null);

(statearr_27674_27740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (4))){
var inst_27635 = (state_27670[(7)]);
var inst_27635__$1 = (state_27670[(2)]);
var inst_27636 = (inst_27635__$1 == null);
var state_27670__$1 = (function (){var statearr_27675 = state_27670;
(statearr_27675[(7)] = inst_27635__$1);

return statearr_27675;
})();
if(cljs.core.truth_(inst_27636)){
var statearr_27676_27741 = state_27670__$1;
(statearr_27676_27741[(1)] = (5));

} else {
var statearr_27677_27742 = state_27670__$1;
(statearr_27677_27742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (15))){
var inst_27648 = (state_27670[(8)]);
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27670__$1,(18),to,inst_27648);
} else {
if((state_val_27671 === (21))){
var inst_27661 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27678_27743 = state_27670__$1;
(statearr_27678_27743[(2)] = inst_27661);

(statearr_27678_27743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (13))){
var inst_27663 = (state_27670[(2)]);
var state_27670__$1 = (function (){var statearr_27679 = state_27670;
(statearr_27679[(9)] = inst_27663);

return statearr_27679;
})();
var statearr_27680_27744 = state_27670__$1;
(statearr_27680_27744[(2)] = null);

(statearr_27680_27744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (6))){
var inst_27635 = (state_27670[(7)]);
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27670__$1,(11),inst_27635);
} else {
if((state_val_27671 === (17))){
var inst_27656 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
if(cljs.core.truth_(inst_27656)){
var statearr_27681_27745 = state_27670__$1;
(statearr_27681_27745[(1)] = (19));

} else {
var statearr_27682_27746 = state_27670__$1;
(statearr_27682_27746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (3))){
var inst_27668 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27670__$1,inst_27668);
} else {
if((state_val_27671 === (12))){
var inst_27645 = (state_27670[(10)]);
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27670__$1,(14),inst_27645);
} else {
if((state_val_27671 === (2))){
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27670__$1,(4),results);
} else {
if((state_val_27671 === (19))){
var state_27670__$1 = state_27670;
var statearr_27683_27747 = state_27670__$1;
(statearr_27683_27747[(2)] = null);

(statearr_27683_27747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (11))){
var inst_27645 = (state_27670[(2)]);
var state_27670__$1 = (function (){var statearr_27684 = state_27670;
(statearr_27684[(10)] = inst_27645);

return statearr_27684;
})();
var statearr_27685_27748 = state_27670__$1;
(statearr_27685_27748[(2)] = null);

(statearr_27685_27748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (9))){
var state_27670__$1 = state_27670;
var statearr_27686_27749 = state_27670__$1;
(statearr_27686_27749[(2)] = null);

(statearr_27686_27749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (5))){
var state_27670__$1 = state_27670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27687_27750 = state_27670__$1;
(statearr_27687_27750[(1)] = (8));

} else {
var statearr_27688_27751 = state_27670__$1;
(statearr_27688_27751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (14))){
var inst_27648 = (state_27670[(8)]);
var inst_27650 = (state_27670[(11)]);
var inst_27648__$1 = (state_27670[(2)]);
var inst_27649 = (inst_27648__$1 == null);
var inst_27650__$1 = cljs.core.not.call(null,inst_27649);
var state_27670__$1 = (function (){var statearr_27689 = state_27670;
(statearr_27689[(8)] = inst_27648__$1);

(statearr_27689[(11)] = inst_27650__$1);

return statearr_27689;
})();
if(inst_27650__$1){
var statearr_27690_27752 = state_27670__$1;
(statearr_27690_27752[(1)] = (15));

} else {
var statearr_27691_27753 = state_27670__$1;
(statearr_27691_27753[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (16))){
var inst_27650 = (state_27670[(11)]);
var state_27670__$1 = state_27670;
var statearr_27692_27754 = state_27670__$1;
(statearr_27692_27754[(2)] = inst_27650);

(statearr_27692_27754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (10))){
var inst_27642 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27693_27755 = state_27670__$1;
(statearr_27693_27755[(2)] = inst_27642);

(statearr_27693_27755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (18))){
var inst_27653 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27694_27756 = state_27670__$1;
(statearr_27694_27756[(2)] = inst_27653);

(statearr_27694_27756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (8))){
var inst_27639 = cljs.core.async.close_BANG_.call(null,to);
var state_27670__$1 = state_27670;
var statearr_27695_27757 = state_27670__$1;
(statearr_27695_27757[(2)] = inst_27639);

(statearr_27695_27757[(1)] = (10));


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
var statearr_27699 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__);

(statearr_27699[(1)] = (1));

return statearr_27699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1 = (function (state_27670){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27700){if((e27700 instanceof Object)){
var ex__19364__auto__ = e27700;
var statearr_27701_27758 = state_27670;
(statearr_27701_27758[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27759 = state_27670;
state_27670 = G__27759;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__ = function(state_27670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1.call(this,state_27670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__,jobs,results,process,async))
})();
var state__19383__auto__ = (function (){var statearr_27702 = f__19382__auto__.call(null);
(statearr_27702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_27702;
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
var args27760 = [];
var len__17416__auto___27763 = arguments.length;
var i__17417__auto___27764 = (0);
while(true){
if((i__17417__auto___27764 < len__17416__auto___27763)){
args27760.push((arguments[i__17417__auto___27764]));

var G__27765 = (i__17417__auto___27764 + (1));
i__17417__auto___27764 = G__27765;
continue;
} else {
}
break;
}

var G__27762 = args27760.length;
switch (G__27762) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27760.length)].join('')));

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
var args27767 = [];
var len__17416__auto___27770 = arguments.length;
var i__17417__auto___27771 = (0);
while(true){
if((i__17417__auto___27771 < len__17416__auto___27770)){
args27767.push((arguments[i__17417__auto___27771]));

var G__27772 = (i__17417__auto___27771 + (1));
i__17417__auto___27771 = G__27772;
continue;
} else {
}
break;
}

var G__27769 = args27767.length;
switch (G__27769) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27767.length)].join('')));

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
var args27774 = [];
var len__17416__auto___27827 = arguments.length;
var i__17417__auto___27828 = (0);
while(true){
if((i__17417__auto___27828 < len__17416__auto___27827)){
args27774.push((arguments[i__17417__auto___27828]));

var G__27829 = (i__17417__auto___27828 + (1));
i__17417__auto___27828 = G__27829;
continue;
} else {
}
break;
}

var G__27776 = args27774.length;
switch (G__27776) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27774.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19381__auto___27831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___27831,tc,fc){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___27831,tc,fc){
return (function (state_27802){
var state_val_27803 = (state_27802[(1)]);
if((state_val_27803 === (7))){
var inst_27798 = (state_27802[(2)]);
var state_27802__$1 = state_27802;
var statearr_27804_27832 = state_27802__$1;
(statearr_27804_27832[(2)] = inst_27798);

(statearr_27804_27832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (1))){
var state_27802__$1 = state_27802;
var statearr_27805_27833 = state_27802__$1;
(statearr_27805_27833[(2)] = null);

(statearr_27805_27833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (4))){
var inst_27779 = (state_27802[(7)]);
var inst_27779__$1 = (state_27802[(2)]);
var inst_27780 = (inst_27779__$1 == null);
var state_27802__$1 = (function (){var statearr_27806 = state_27802;
(statearr_27806[(7)] = inst_27779__$1);

return statearr_27806;
})();
if(cljs.core.truth_(inst_27780)){
var statearr_27807_27834 = state_27802__$1;
(statearr_27807_27834[(1)] = (5));

} else {
var statearr_27808_27835 = state_27802__$1;
(statearr_27808_27835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (13))){
var state_27802__$1 = state_27802;
var statearr_27809_27836 = state_27802__$1;
(statearr_27809_27836[(2)] = null);

(statearr_27809_27836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (6))){
var inst_27779 = (state_27802[(7)]);
var inst_27785 = p.call(null,inst_27779);
var state_27802__$1 = state_27802;
if(cljs.core.truth_(inst_27785)){
var statearr_27810_27837 = state_27802__$1;
(statearr_27810_27837[(1)] = (9));

} else {
var statearr_27811_27838 = state_27802__$1;
(statearr_27811_27838[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (3))){
var inst_27800 = (state_27802[(2)]);
var state_27802__$1 = state_27802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27802__$1,inst_27800);
} else {
if((state_val_27803 === (12))){
var state_27802__$1 = state_27802;
var statearr_27812_27839 = state_27802__$1;
(statearr_27812_27839[(2)] = null);

(statearr_27812_27839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (2))){
var state_27802__$1 = state_27802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27802__$1,(4),ch);
} else {
if((state_val_27803 === (11))){
var inst_27779 = (state_27802[(7)]);
var inst_27789 = (state_27802[(2)]);
var state_27802__$1 = state_27802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27802__$1,(8),inst_27789,inst_27779);
} else {
if((state_val_27803 === (9))){
var state_27802__$1 = state_27802;
var statearr_27813_27840 = state_27802__$1;
(statearr_27813_27840[(2)] = tc);

(statearr_27813_27840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (5))){
var inst_27782 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27783 = cljs.core.async.close_BANG_.call(null,fc);
var state_27802__$1 = (function (){var statearr_27814 = state_27802;
(statearr_27814[(8)] = inst_27782);

return statearr_27814;
})();
var statearr_27815_27841 = state_27802__$1;
(statearr_27815_27841[(2)] = inst_27783);

(statearr_27815_27841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (14))){
var inst_27796 = (state_27802[(2)]);
var state_27802__$1 = state_27802;
var statearr_27816_27842 = state_27802__$1;
(statearr_27816_27842[(2)] = inst_27796);

(statearr_27816_27842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (10))){
var state_27802__$1 = state_27802;
var statearr_27817_27843 = state_27802__$1;
(statearr_27817_27843[(2)] = fc);

(statearr_27817_27843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27803 === (8))){
var inst_27791 = (state_27802[(2)]);
var state_27802__$1 = state_27802;
if(cljs.core.truth_(inst_27791)){
var statearr_27818_27844 = state_27802__$1;
(statearr_27818_27844[(1)] = (12));

} else {
var statearr_27819_27845 = state_27802__$1;
(statearr_27819_27845[(1)] = (13));

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
});})(c__19381__auto___27831,tc,fc))
;
return ((function (switch__19360__auto__,c__19381__auto___27831,tc,fc){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_27823 = [null,null,null,null,null,null,null,null,null];
(statearr_27823[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_27823[(1)] = (1));

return statearr_27823;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_27802){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27824){if((e27824 instanceof Object)){
var ex__19364__auto__ = e27824;
var statearr_27825_27846 = state_27802;
(statearr_27825_27846[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27847 = state_27802;
state_27802 = G__27847;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_27802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_27802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___27831,tc,fc))
})();
var state__19383__auto__ = (function (){var statearr_27826 = f__19382__auto__.call(null);
(statearr_27826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___27831);

return statearr_27826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___27831,tc,fc))
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
return (function (state_27894){
var state_val_27895 = (state_27894[(1)]);
if((state_val_27895 === (1))){
var inst_27880 = init;
var state_27894__$1 = (function (){var statearr_27896 = state_27894;
(statearr_27896[(7)] = inst_27880);

return statearr_27896;
})();
var statearr_27897_27912 = state_27894__$1;
(statearr_27897_27912[(2)] = null);

(statearr_27897_27912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (2))){
var state_27894__$1 = state_27894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27894__$1,(4),ch);
} else {
if((state_val_27895 === (3))){
var inst_27892 = (state_27894[(2)]);
var state_27894__$1 = state_27894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27894__$1,inst_27892);
} else {
if((state_val_27895 === (4))){
var inst_27883 = (state_27894[(8)]);
var inst_27883__$1 = (state_27894[(2)]);
var inst_27884 = (inst_27883__$1 == null);
var state_27894__$1 = (function (){var statearr_27898 = state_27894;
(statearr_27898[(8)] = inst_27883__$1);

return statearr_27898;
})();
if(cljs.core.truth_(inst_27884)){
var statearr_27899_27913 = state_27894__$1;
(statearr_27899_27913[(1)] = (5));

} else {
var statearr_27900_27914 = state_27894__$1;
(statearr_27900_27914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (5))){
var inst_27880 = (state_27894[(7)]);
var state_27894__$1 = state_27894;
var statearr_27901_27915 = state_27894__$1;
(statearr_27901_27915[(2)] = inst_27880);

(statearr_27901_27915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (6))){
var inst_27883 = (state_27894[(8)]);
var inst_27880 = (state_27894[(7)]);
var inst_27887 = f.call(null,inst_27880,inst_27883);
var inst_27880__$1 = inst_27887;
var state_27894__$1 = (function (){var statearr_27902 = state_27894;
(statearr_27902[(7)] = inst_27880__$1);

return statearr_27902;
})();
var statearr_27903_27916 = state_27894__$1;
(statearr_27903_27916[(2)] = null);

(statearr_27903_27916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (7))){
var inst_27890 = (state_27894[(2)]);
var state_27894__$1 = state_27894;
var statearr_27904_27917 = state_27894__$1;
(statearr_27904_27917[(2)] = inst_27890);

(statearr_27904_27917[(1)] = (3));


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
var statearr_27908 = [null,null,null,null,null,null,null,null,null];
(statearr_27908[(0)] = cljs$core$async$reduce_$_state_machine__19361__auto__);

(statearr_27908[(1)] = (1));

return statearr_27908;
});
var cljs$core$async$reduce_$_state_machine__19361__auto____1 = (function (state_27894){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27909){if((e27909 instanceof Object)){
var ex__19364__auto__ = e27909;
var statearr_27910_27918 = state_27894;
(statearr_27910_27918[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27919 = state_27894;
state_27894 = G__27919;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19361__auto__ = function(state_27894){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19361__auto____1.call(this,state_27894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19361__auto____0;
cljs$core$async$reduce_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19361__auto____1;
return cljs$core$async$reduce_$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__))
})();
var state__19383__auto__ = (function (){var statearr_27911 = f__19382__auto__.call(null);
(statearr_27911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_27911;
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
var args27920 = [];
var len__17416__auto___27972 = arguments.length;
var i__17417__auto___27973 = (0);
while(true){
if((i__17417__auto___27973 < len__17416__auto___27972)){
args27920.push((arguments[i__17417__auto___27973]));

var G__27974 = (i__17417__auto___27973 + (1));
i__17417__auto___27973 = G__27974;
continue;
} else {
}
break;
}

var G__27922 = args27920.length;
switch (G__27922) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27920.length)].join('')));

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
return (function (state_27947){
var state_val_27948 = (state_27947[(1)]);
if((state_val_27948 === (7))){
var inst_27929 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
var statearr_27949_27976 = state_27947__$1;
(statearr_27949_27976[(2)] = inst_27929);

(statearr_27949_27976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (1))){
var inst_27923 = cljs.core.seq.call(null,coll);
var inst_27924 = inst_27923;
var state_27947__$1 = (function (){var statearr_27950 = state_27947;
(statearr_27950[(7)] = inst_27924);

return statearr_27950;
})();
var statearr_27951_27977 = state_27947__$1;
(statearr_27951_27977[(2)] = null);

(statearr_27951_27977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (4))){
var inst_27924 = (state_27947[(7)]);
var inst_27927 = cljs.core.first.call(null,inst_27924);
var state_27947__$1 = state_27947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27947__$1,(7),ch,inst_27927);
} else {
if((state_val_27948 === (13))){
var inst_27941 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
var statearr_27952_27978 = state_27947__$1;
(statearr_27952_27978[(2)] = inst_27941);

(statearr_27952_27978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (6))){
var inst_27932 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
if(cljs.core.truth_(inst_27932)){
var statearr_27953_27979 = state_27947__$1;
(statearr_27953_27979[(1)] = (8));

} else {
var statearr_27954_27980 = state_27947__$1;
(statearr_27954_27980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (3))){
var inst_27945 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27947__$1,inst_27945);
} else {
if((state_val_27948 === (12))){
var state_27947__$1 = state_27947;
var statearr_27955_27981 = state_27947__$1;
(statearr_27955_27981[(2)] = null);

(statearr_27955_27981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (2))){
var inst_27924 = (state_27947[(7)]);
var state_27947__$1 = state_27947;
if(cljs.core.truth_(inst_27924)){
var statearr_27956_27982 = state_27947__$1;
(statearr_27956_27982[(1)] = (4));

} else {
var statearr_27957_27983 = state_27947__$1;
(statearr_27957_27983[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (11))){
var inst_27938 = cljs.core.async.close_BANG_.call(null,ch);
var state_27947__$1 = state_27947;
var statearr_27958_27984 = state_27947__$1;
(statearr_27958_27984[(2)] = inst_27938);

(statearr_27958_27984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (9))){
var state_27947__$1 = state_27947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27959_27985 = state_27947__$1;
(statearr_27959_27985[(1)] = (11));

} else {
var statearr_27960_27986 = state_27947__$1;
(statearr_27960_27986[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (5))){
var inst_27924 = (state_27947[(7)]);
var state_27947__$1 = state_27947;
var statearr_27961_27987 = state_27947__$1;
(statearr_27961_27987[(2)] = inst_27924);

(statearr_27961_27987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (10))){
var inst_27943 = (state_27947[(2)]);
var state_27947__$1 = state_27947;
var statearr_27962_27988 = state_27947__$1;
(statearr_27962_27988[(2)] = inst_27943);

(statearr_27962_27988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27948 === (8))){
var inst_27924 = (state_27947[(7)]);
var inst_27934 = cljs.core.next.call(null,inst_27924);
var inst_27924__$1 = inst_27934;
var state_27947__$1 = (function (){var statearr_27963 = state_27947;
(statearr_27963[(7)] = inst_27924__$1);

return statearr_27963;
})();
var statearr_27964_27989 = state_27947__$1;
(statearr_27964_27989[(2)] = null);

(statearr_27964_27989[(1)] = (2));


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
var statearr_27968 = [null,null,null,null,null,null,null,null];
(statearr_27968[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_27968[(1)] = (1));

return statearr_27968;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_27947){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_27947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e27969){if((e27969 instanceof Object)){
var ex__19364__auto__ = e27969;
var statearr_27970_27990 = state_27947;
(statearr_27970_27990[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27991 = state_27947;
state_27947 = G__27991;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_27947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_27947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__))
})();
var state__19383__auto__ = (function (){var statearr_27971 = f__19382__auto__.call(null);
(statearr_27971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_27971;
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
if(typeof cljs.core.async.t_cljs$core$async28213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28213 = (function (mult,ch,cs,meta28214){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28214 = meta28214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28215,meta28214__$1){
var self__ = this;
var _28215__$1 = this;
return (new cljs.core.async.t_cljs$core$async28213(self__.mult,self__.ch,self__.cs,meta28214__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28215){
var self__ = this;
var _28215__$1 = this;
return self__.meta28214;
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28214","meta28214",454367163,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28213";

cljs.core.async.t_cljs$core$async28213.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async28213");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28213 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28213(mult__$1,ch__$1,cs__$1,meta28214){
return (new cljs.core.async.t_cljs$core$async28213(mult__$1,ch__$1,cs__$1,meta28214));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28213(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19381__auto___28434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___28434,cs,m,dchan,dctr,done){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___28434,cs,m,dchan,dctr,done){
return (function (state_28346){
var state_val_28347 = (state_28346[(1)]);
if((state_val_28347 === (7))){
var inst_28342 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28348_28435 = state_28346__$1;
(statearr_28348_28435[(2)] = inst_28342);

(statearr_28348_28435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (20))){
var inst_28247 = (state_28346[(7)]);
var inst_28257 = cljs.core.first.call(null,inst_28247);
var inst_28258 = cljs.core.nth.call(null,inst_28257,(0),null);
var inst_28259 = cljs.core.nth.call(null,inst_28257,(1),null);
var state_28346__$1 = (function (){var statearr_28349 = state_28346;
(statearr_28349[(8)] = inst_28258);

return statearr_28349;
})();
if(cljs.core.truth_(inst_28259)){
var statearr_28350_28436 = state_28346__$1;
(statearr_28350_28436[(1)] = (22));

} else {
var statearr_28351_28437 = state_28346__$1;
(statearr_28351_28437[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (27))){
var inst_28218 = (state_28346[(9)]);
var inst_28294 = (state_28346[(10)]);
var inst_28287 = (state_28346[(11)]);
var inst_28289 = (state_28346[(12)]);
var inst_28294__$1 = cljs.core._nth.call(null,inst_28287,inst_28289);
var inst_28295 = cljs.core.async.put_BANG_.call(null,inst_28294__$1,inst_28218,done);
var state_28346__$1 = (function (){var statearr_28352 = state_28346;
(statearr_28352[(10)] = inst_28294__$1);

return statearr_28352;
})();
if(cljs.core.truth_(inst_28295)){
var statearr_28353_28438 = state_28346__$1;
(statearr_28353_28438[(1)] = (30));

} else {
var statearr_28354_28439 = state_28346__$1;
(statearr_28354_28439[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (1))){
var state_28346__$1 = state_28346;
var statearr_28355_28440 = state_28346__$1;
(statearr_28355_28440[(2)] = null);

(statearr_28355_28440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (24))){
var inst_28247 = (state_28346[(7)]);
var inst_28264 = (state_28346[(2)]);
var inst_28265 = cljs.core.next.call(null,inst_28247);
var inst_28227 = inst_28265;
var inst_28228 = null;
var inst_28229 = (0);
var inst_28230 = (0);
var state_28346__$1 = (function (){var statearr_28356 = state_28346;
(statearr_28356[(13)] = inst_28230);

(statearr_28356[(14)] = inst_28229);

(statearr_28356[(15)] = inst_28227);

(statearr_28356[(16)] = inst_28228);

(statearr_28356[(17)] = inst_28264);

return statearr_28356;
})();
var statearr_28357_28441 = state_28346__$1;
(statearr_28357_28441[(2)] = null);

(statearr_28357_28441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (39))){
var state_28346__$1 = state_28346;
var statearr_28361_28442 = state_28346__$1;
(statearr_28361_28442[(2)] = null);

(statearr_28361_28442[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (4))){
var inst_28218 = (state_28346[(9)]);
var inst_28218__$1 = (state_28346[(2)]);
var inst_28219 = (inst_28218__$1 == null);
var state_28346__$1 = (function (){var statearr_28362 = state_28346;
(statearr_28362[(9)] = inst_28218__$1);

return statearr_28362;
})();
if(cljs.core.truth_(inst_28219)){
var statearr_28363_28443 = state_28346__$1;
(statearr_28363_28443[(1)] = (5));

} else {
var statearr_28364_28444 = state_28346__$1;
(statearr_28364_28444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (15))){
var inst_28230 = (state_28346[(13)]);
var inst_28229 = (state_28346[(14)]);
var inst_28227 = (state_28346[(15)]);
var inst_28228 = (state_28346[(16)]);
var inst_28243 = (state_28346[(2)]);
var inst_28244 = (inst_28230 + (1));
var tmp28358 = inst_28229;
var tmp28359 = inst_28227;
var tmp28360 = inst_28228;
var inst_28227__$1 = tmp28359;
var inst_28228__$1 = tmp28360;
var inst_28229__$1 = tmp28358;
var inst_28230__$1 = inst_28244;
var state_28346__$1 = (function (){var statearr_28365 = state_28346;
(statearr_28365[(13)] = inst_28230__$1);

(statearr_28365[(18)] = inst_28243);

(statearr_28365[(14)] = inst_28229__$1);

(statearr_28365[(15)] = inst_28227__$1);

(statearr_28365[(16)] = inst_28228__$1);

return statearr_28365;
})();
var statearr_28366_28445 = state_28346__$1;
(statearr_28366_28445[(2)] = null);

(statearr_28366_28445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (21))){
var inst_28268 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28370_28446 = state_28346__$1;
(statearr_28370_28446[(2)] = inst_28268);

(statearr_28370_28446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (31))){
var inst_28294 = (state_28346[(10)]);
var inst_28298 = done.call(null,null);
var inst_28299 = cljs.core.async.untap_STAR_.call(null,m,inst_28294);
var state_28346__$1 = (function (){var statearr_28371 = state_28346;
(statearr_28371[(19)] = inst_28298);

return statearr_28371;
})();
var statearr_28372_28447 = state_28346__$1;
(statearr_28372_28447[(2)] = inst_28299);

(statearr_28372_28447[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (32))){
var inst_28287 = (state_28346[(11)]);
var inst_28289 = (state_28346[(12)]);
var inst_28288 = (state_28346[(20)]);
var inst_28286 = (state_28346[(21)]);
var inst_28301 = (state_28346[(2)]);
var inst_28302 = (inst_28289 + (1));
var tmp28367 = inst_28287;
var tmp28368 = inst_28288;
var tmp28369 = inst_28286;
var inst_28286__$1 = tmp28369;
var inst_28287__$1 = tmp28367;
var inst_28288__$1 = tmp28368;
var inst_28289__$1 = inst_28302;
var state_28346__$1 = (function (){var statearr_28373 = state_28346;
(statearr_28373[(11)] = inst_28287__$1);

(statearr_28373[(12)] = inst_28289__$1);

(statearr_28373[(22)] = inst_28301);

(statearr_28373[(20)] = inst_28288__$1);

(statearr_28373[(21)] = inst_28286__$1);

return statearr_28373;
})();
var statearr_28374_28448 = state_28346__$1;
(statearr_28374_28448[(2)] = null);

(statearr_28374_28448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (40))){
var inst_28314 = (state_28346[(23)]);
var inst_28318 = done.call(null,null);
var inst_28319 = cljs.core.async.untap_STAR_.call(null,m,inst_28314);
var state_28346__$1 = (function (){var statearr_28375 = state_28346;
(statearr_28375[(24)] = inst_28318);

return statearr_28375;
})();
var statearr_28376_28449 = state_28346__$1;
(statearr_28376_28449[(2)] = inst_28319);

(statearr_28376_28449[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (33))){
var inst_28305 = (state_28346[(25)]);
var inst_28307 = cljs.core.chunked_seq_QMARK_.call(null,inst_28305);
var state_28346__$1 = state_28346;
if(inst_28307){
var statearr_28377_28450 = state_28346__$1;
(statearr_28377_28450[(1)] = (36));

} else {
var statearr_28378_28451 = state_28346__$1;
(statearr_28378_28451[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (13))){
var inst_28237 = (state_28346[(26)]);
var inst_28240 = cljs.core.async.close_BANG_.call(null,inst_28237);
var state_28346__$1 = state_28346;
var statearr_28379_28452 = state_28346__$1;
(statearr_28379_28452[(2)] = inst_28240);

(statearr_28379_28452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (22))){
var inst_28258 = (state_28346[(8)]);
var inst_28261 = cljs.core.async.close_BANG_.call(null,inst_28258);
var state_28346__$1 = state_28346;
var statearr_28380_28453 = state_28346__$1;
(statearr_28380_28453[(2)] = inst_28261);

(statearr_28380_28453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (36))){
var inst_28305 = (state_28346[(25)]);
var inst_28309 = cljs.core.chunk_first.call(null,inst_28305);
var inst_28310 = cljs.core.chunk_rest.call(null,inst_28305);
var inst_28311 = cljs.core.count.call(null,inst_28309);
var inst_28286 = inst_28310;
var inst_28287 = inst_28309;
var inst_28288 = inst_28311;
var inst_28289 = (0);
var state_28346__$1 = (function (){var statearr_28381 = state_28346;
(statearr_28381[(11)] = inst_28287);

(statearr_28381[(12)] = inst_28289);

(statearr_28381[(20)] = inst_28288);

(statearr_28381[(21)] = inst_28286);

return statearr_28381;
})();
var statearr_28382_28454 = state_28346__$1;
(statearr_28382_28454[(2)] = null);

(statearr_28382_28454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (41))){
var inst_28305 = (state_28346[(25)]);
var inst_28321 = (state_28346[(2)]);
var inst_28322 = cljs.core.next.call(null,inst_28305);
var inst_28286 = inst_28322;
var inst_28287 = null;
var inst_28288 = (0);
var inst_28289 = (0);
var state_28346__$1 = (function (){var statearr_28383 = state_28346;
(statearr_28383[(27)] = inst_28321);

(statearr_28383[(11)] = inst_28287);

(statearr_28383[(12)] = inst_28289);

(statearr_28383[(20)] = inst_28288);

(statearr_28383[(21)] = inst_28286);

return statearr_28383;
})();
var statearr_28384_28455 = state_28346__$1;
(statearr_28384_28455[(2)] = null);

(statearr_28384_28455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (43))){
var state_28346__$1 = state_28346;
var statearr_28385_28456 = state_28346__$1;
(statearr_28385_28456[(2)] = null);

(statearr_28385_28456[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (29))){
var inst_28330 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28386_28457 = state_28346__$1;
(statearr_28386_28457[(2)] = inst_28330);

(statearr_28386_28457[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (44))){
var inst_28339 = (state_28346[(2)]);
var state_28346__$1 = (function (){var statearr_28387 = state_28346;
(statearr_28387[(28)] = inst_28339);

return statearr_28387;
})();
var statearr_28388_28458 = state_28346__$1;
(statearr_28388_28458[(2)] = null);

(statearr_28388_28458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (6))){
var inst_28278 = (state_28346[(29)]);
var inst_28277 = cljs.core.deref.call(null,cs);
var inst_28278__$1 = cljs.core.keys.call(null,inst_28277);
var inst_28279 = cljs.core.count.call(null,inst_28278__$1);
var inst_28280 = cljs.core.reset_BANG_.call(null,dctr,inst_28279);
var inst_28285 = cljs.core.seq.call(null,inst_28278__$1);
var inst_28286 = inst_28285;
var inst_28287 = null;
var inst_28288 = (0);
var inst_28289 = (0);
var state_28346__$1 = (function (){var statearr_28389 = state_28346;
(statearr_28389[(30)] = inst_28280);

(statearr_28389[(11)] = inst_28287);

(statearr_28389[(12)] = inst_28289);

(statearr_28389[(29)] = inst_28278__$1);

(statearr_28389[(20)] = inst_28288);

(statearr_28389[(21)] = inst_28286);

return statearr_28389;
})();
var statearr_28390_28459 = state_28346__$1;
(statearr_28390_28459[(2)] = null);

(statearr_28390_28459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (28))){
var inst_28305 = (state_28346[(25)]);
var inst_28286 = (state_28346[(21)]);
var inst_28305__$1 = cljs.core.seq.call(null,inst_28286);
var state_28346__$1 = (function (){var statearr_28391 = state_28346;
(statearr_28391[(25)] = inst_28305__$1);

return statearr_28391;
})();
if(inst_28305__$1){
var statearr_28392_28460 = state_28346__$1;
(statearr_28392_28460[(1)] = (33));

} else {
var statearr_28393_28461 = state_28346__$1;
(statearr_28393_28461[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (25))){
var inst_28289 = (state_28346[(12)]);
var inst_28288 = (state_28346[(20)]);
var inst_28291 = (inst_28289 < inst_28288);
var inst_28292 = inst_28291;
var state_28346__$1 = state_28346;
if(cljs.core.truth_(inst_28292)){
var statearr_28394_28462 = state_28346__$1;
(statearr_28394_28462[(1)] = (27));

} else {
var statearr_28395_28463 = state_28346__$1;
(statearr_28395_28463[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (34))){
var state_28346__$1 = state_28346;
var statearr_28396_28464 = state_28346__$1;
(statearr_28396_28464[(2)] = null);

(statearr_28396_28464[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (17))){
var state_28346__$1 = state_28346;
var statearr_28397_28465 = state_28346__$1;
(statearr_28397_28465[(2)] = null);

(statearr_28397_28465[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (3))){
var inst_28344 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28346__$1,inst_28344);
} else {
if((state_val_28347 === (12))){
var inst_28273 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28398_28466 = state_28346__$1;
(statearr_28398_28466[(2)] = inst_28273);

(statearr_28398_28466[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (2))){
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28346__$1,(4),ch);
} else {
if((state_val_28347 === (23))){
var state_28346__$1 = state_28346;
var statearr_28399_28467 = state_28346__$1;
(statearr_28399_28467[(2)] = null);

(statearr_28399_28467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (35))){
var inst_28328 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28400_28468 = state_28346__$1;
(statearr_28400_28468[(2)] = inst_28328);

(statearr_28400_28468[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (19))){
var inst_28247 = (state_28346[(7)]);
var inst_28251 = cljs.core.chunk_first.call(null,inst_28247);
var inst_28252 = cljs.core.chunk_rest.call(null,inst_28247);
var inst_28253 = cljs.core.count.call(null,inst_28251);
var inst_28227 = inst_28252;
var inst_28228 = inst_28251;
var inst_28229 = inst_28253;
var inst_28230 = (0);
var state_28346__$1 = (function (){var statearr_28401 = state_28346;
(statearr_28401[(13)] = inst_28230);

(statearr_28401[(14)] = inst_28229);

(statearr_28401[(15)] = inst_28227);

(statearr_28401[(16)] = inst_28228);

return statearr_28401;
})();
var statearr_28402_28469 = state_28346__$1;
(statearr_28402_28469[(2)] = null);

(statearr_28402_28469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (11))){
var inst_28247 = (state_28346[(7)]);
var inst_28227 = (state_28346[(15)]);
var inst_28247__$1 = cljs.core.seq.call(null,inst_28227);
var state_28346__$1 = (function (){var statearr_28403 = state_28346;
(statearr_28403[(7)] = inst_28247__$1);

return statearr_28403;
})();
if(inst_28247__$1){
var statearr_28404_28470 = state_28346__$1;
(statearr_28404_28470[(1)] = (16));

} else {
var statearr_28405_28471 = state_28346__$1;
(statearr_28405_28471[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (9))){
var inst_28275 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28406_28472 = state_28346__$1;
(statearr_28406_28472[(2)] = inst_28275);

(statearr_28406_28472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (5))){
var inst_28225 = cljs.core.deref.call(null,cs);
var inst_28226 = cljs.core.seq.call(null,inst_28225);
var inst_28227 = inst_28226;
var inst_28228 = null;
var inst_28229 = (0);
var inst_28230 = (0);
var state_28346__$1 = (function (){var statearr_28407 = state_28346;
(statearr_28407[(13)] = inst_28230);

(statearr_28407[(14)] = inst_28229);

(statearr_28407[(15)] = inst_28227);

(statearr_28407[(16)] = inst_28228);

return statearr_28407;
})();
var statearr_28408_28473 = state_28346__$1;
(statearr_28408_28473[(2)] = null);

(statearr_28408_28473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (14))){
var state_28346__$1 = state_28346;
var statearr_28409_28474 = state_28346__$1;
(statearr_28409_28474[(2)] = null);

(statearr_28409_28474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (45))){
var inst_28336 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28410_28475 = state_28346__$1;
(statearr_28410_28475[(2)] = inst_28336);

(statearr_28410_28475[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (26))){
var inst_28278 = (state_28346[(29)]);
var inst_28332 = (state_28346[(2)]);
var inst_28333 = cljs.core.seq.call(null,inst_28278);
var state_28346__$1 = (function (){var statearr_28411 = state_28346;
(statearr_28411[(31)] = inst_28332);

return statearr_28411;
})();
if(inst_28333){
var statearr_28412_28476 = state_28346__$1;
(statearr_28412_28476[(1)] = (42));

} else {
var statearr_28413_28477 = state_28346__$1;
(statearr_28413_28477[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (16))){
var inst_28247 = (state_28346[(7)]);
var inst_28249 = cljs.core.chunked_seq_QMARK_.call(null,inst_28247);
var state_28346__$1 = state_28346;
if(inst_28249){
var statearr_28414_28478 = state_28346__$1;
(statearr_28414_28478[(1)] = (19));

} else {
var statearr_28415_28479 = state_28346__$1;
(statearr_28415_28479[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (38))){
var inst_28325 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28416_28480 = state_28346__$1;
(statearr_28416_28480[(2)] = inst_28325);

(statearr_28416_28480[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (30))){
var state_28346__$1 = state_28346;
var statearr_28417_28481 = state_28346__$1;
(statearr_28417_28481[(2)] = null);

(statearr_28417_28481[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (10))){
var inst_28230 = (state_28346[(13)]);
var inst_28228 = (state_28346[(16)]);
var inst_28236 = cljs.core._nth.call(null,inst_28228,inst_28230);
var inst_28237 = cljs.core.nth.call(null,inst_28236,(0),null);
var inst_28238 = cljs.core.nth.call(null,inst_28236,(1),null);
var state_28346__$1 = (function (){var statearr_28418 = state_28346;
(statearr_28418[(26)] = inst_28237);

return statearr_28418;
})();
if(cljs.core.truth_(inst_28238)){
var statearr_28419_28482 = state_28346__$1;
(statearr_28419_28482[(1)] = (13));

} else {
var statearr_28420_28483 = state_28346__$1;
(statearr_28420_28483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (18))){
var inst_28271 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28421_28484 = state_28346__$1;
(statearr_28421_28484[(2)] = inst_28271);

(statearr_28421_28484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (42))){
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28346__$1,(45),dchan);
} else {
if((state_val_28347 === (37))){
var inst_28218 = (state_28346[(9)]);
var inst_28314 = (state_28346[(23)]);
var inst_28305 = (state_28346[(25)]);
var inst_28314__$1 = cljs.core.first.call(null,inst_28305);
var inst_28315 = cljs.core.async.put_BANG_.call(null,inst_28314__$1,inst_28218,done);
var state_28346__$1 = (function (){var statearr_28422 = state_28346;
(statearr_28422[(23)] = inst_28314__$1);

return statearr_28422;
})();
if(cljs.core.truth_(inst_28315)){
var statearr_28423_28485 = state_28346__$1;
(statearr_28423_28485[(1)] = (39));

} else {
var statearr_28424_28486 = state_28346__$1;
(statearr_28424_28486[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (8))){
var inst_28230 = (state_28346[(13)]);
var inst_28229 = (state_28346[(14)]);
var inst_28232 = (inst_28230 < inst_28229);
var inst_28233 = inst_28232;
var state_28346__$1 = state_28346;
if(cljs.core.truth_(inst_28233)){
var statearr_28425_28487 = state_28346__$1;
(statearr_28425_28487[(1)] = (10));

} else {
var statearr_28426_28488 = state_28346__$1;
(statearr_28426_28488[(1)] = (11));

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
});})(c__19381__auto___28434,cs,m,dchan,dctr,done))
;
return ((function (switch__19360__auto__,c__19381__auto___28434,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19361__auto__ = null;
var cljs$core$async$mult_$_state_machine__19361__auto____0 = (function (){
var statearr_28430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28430[(0)] = cljs$core$async$mult_$_state_machine__19361__auto__);

(statearr_28430[(1)] = (1));

return statearr_28430;
});
var cljs$core$async$mult_$_state_machine__19361__auto____1 = (function (state_28346){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_28346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e28431){if((e28431 instanceof Object)){
var ex__19364__auto__ = e28431;
var statearr_28432_28489 = state_28346;
(statearr_28432_28489[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28490 = state_28346;
state_28346 = G__28490;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19361__auto__ = function(state_28346){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19361__auto____1.call(this,state_28346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19361__auto____0;
cljs$core$async$mult_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19361__auto____1;
return cljs$core$async$mult_$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___28434,cs,m,dchan,dctr,done))
})();
var state__19383__auto__ = (function (){var statearr_28433 = f__19382__auto__.call(null);
(statearr_28433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___28434);

return statearr_28433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___28434,cs,m,dchan,dctr,done))
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
var args28491 = [];
var len__17416__auto___28494 = arguments.length;
var i__17417__auto___28495 = (0);
while(true){
if((i__17417__auto___28495 < len__17416__auto___28494)){
args28491.push((arguments[i__17417__auto___28495]));

var G__28496 = (i__17417__auto___28495 + (1));
i__17417__auto___28495 = G__28496;
continue;
} else {
}
break;
}

var G__28493 = args28491.length;
switch (G__28493) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28491.length)].join('')));

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
var len__17416__auto___28508 = arguments.length;
var i__17417__auto___28509 = (0);
while(true){
if((i__17417__auto___28509 < len__17416__auto___28508)){
args__17423__auto__.push((arguments[i__17417__auto___28509]));

var G__28510 = (i__17417__auto___28509 + (1));
i__17417__auto___28509 = G__28510;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((3) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17424__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28502){
var map__28503 = p__28502;
var map__28503__$1 = ((((!((map__28503 == null)))?((((map__28503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28503):map__28503);
var opts = map__28503__$1;
var statearr_28505_28511 = state;
(statearr_28505_28511[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28503,map__28503__$1,opts){
return (function (val){
var statearr_28506_28512 = state;
(statearr_28506_28512[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28503,map__28503__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28507_28513 = state;
(statearr_28507_28513[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28498){
var G__28499 = cljs.core.first.call(null,seq28498);
var seq28498__$1 = cljs.core.next.call(null,seq28498);
var G__28500 = cljs.core.first.call(null,seq28498__$1);
var seq28498__$2 = cljs.core.next.call(null,seq28498__$1);
var G__28501 = cljs.core.first.call(null,seq28498__$2);
var seq28498__$3 = cljs.core.next.call(null,seq28498__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28499,G__28500,G__28501,seq28498__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28677 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28678){
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
this.meta28678 = meta28678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28679,meta28678__$1){
var self__ = this;
var _28679__$1 = this;
return (new cljs.core.async.t_cljs$core$async28677(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28678__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28679){
var self__ = this;
var _28679__$1 = this;
return self__.meta28678;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28677.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28678","meta28678",-204935111,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28677";

cljs.core.async.t_cljs$core$async28677.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async28677");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28677 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28677(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28678){
return (new cljs.core.async.t_cljs$core$async28677(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28678));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28677(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19381__auto___28840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___28840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___28840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28777){
var state_val_28778 = (state_28777[(1)]);
if((state_val_28778 === (7))){
var inst_28695 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28779_28841 = state_28777__$1;
(statearr_28779_28841[(2)] = inst_28695);

(statearr_28779_28841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (20))){
var inst_28707 = (state_28777[(7)]);
var state_28777__$1 = state_28777;
var statearr_28780_28842 = state_28777__$1;
(statearr_28780_28842[(2)] = inst_28707);

(statearr_28780_28842[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (27))){
var state_28777__$1 = state_28777;
var statearr_28781_28843 = state_28777__$1;
(statearr_28781_28843[(2)] = null);

(statearr_28781_28843[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (1))){
var inst_28683 = (state_28777[(8)]);
var inst_28683__$1 = calc_state.call(null);
var inst_28685 = (inst_28683__$1 == null);
var inst_28686 = cljs.core.not.call(null,inst_28685);
var state_28777__$1 = (function (){var statearr_28782 = state_28777;
(statearr_28782[(8)] = inst_28683__$1);

return statearr_28782;
})();
if(inst_28686){
var statearr_28783_28844 = state_28777__$1;
(statearr_28783_28844[(1)] = (2));

} else {
var statearr_28784_28845 = state_28777__$1;
(statearr_28784_28845[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (24))){
var inst_28751 = (state_28777[(9)]);
var inst_28737 = (state_28777[(10)]);
var inst_28730 = (state_28777[(11)]);
var inst_28751__$1 = inst_28730.call(null,inst_28737);
var state_28777__$1 = (function (){var statearr_28785 = state_28777;
(statearr_28785[(9)] = inst_28751__$1);

return statearr_28785;
})();
if(cljs.core.truth_(inst_28751__$1)){
var statearr_28786_28846 = state_28777__$1;
(statearr_28786_28846[(1)] = (29));

} else {
var statearr_28787_28847 = state_28777__$1;
(statearr_28787_28847[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (4))){
var inst_28698 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
if(cljs.core.truth_(inst_28698)){
var statearr_28788_28848 = state_28777__$1;
(statearr_28788_28848[(1)] = (8));

} else {
var statearr_28789_28849 = state_28777__$1;
(statearr_28789_28849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (15))){
var inst_28724 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
if(cljs.core.truth_(inst_28724)){
var statearr_28790_28850 = state_28777__$1;
(statearr_28790_28850[(1)] = (19));

} else {
var statearr_28791_28851 = state_28777__$1;
(statearr_28791_28851[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (21))){
var inst_28729 = (state_28777[(12)]);
var inst_28729__$1 = (state_28777[(2)]);
var inst_28730 = cljs.core.get.call(null,inst_28729__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28731 = cljs.core.get.call(null,inst_28729__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28732 = cljs.core.get.call(null,inst_28729__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28777__$1 = (function (){var statearr_28792 = state_28777;
(statearr_28792[(12)] = inst_28729__$1);

(statearr_28792[(13)] = inst_28731);

(statearr_28792[(11)] = inst_28730);

return statearr_28792;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28777__$1,(22),inst_28732);
} else {
if((state_val_28778 === (31))){
var inst_28759 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
if(cljs.core.truth_(inst_28759)){
var statearr_28793_28852 = state_28777__$1;
(statearr_28793_28852[(1)] = (32));

} else {
var statearr_28794_28853 = state_28777__$1;
(statearr_28794_28853[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (32))){
var inst_28736 = (state_28777[(14)]);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28777__$1,(35),out,inst_28736);
} else {
if((state_val_28778 === (33))){
var inst_28729 = (state_28777[(12)]);
var inst_28707 = inst_28729;
var state_28777__$1 = (function (){var statearr_28795 = state_28777;
(statearr_28795[(7)] = inst_28707);

return statearr_28795;
})();
var statearr_28796_28854 = state_28777__$1;
(statearr_28796_28854[(2)] = null);

(statearr_28796_28854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (13))){
var inst_28707 = (state_28777[(7)]);
var inst_28714 = inst_28707.cljs$lang$protocol_mask$partition0$;
var inst_28715 = (inst_28714 & (64));
var inst_28716 = inst_28707.cljs$core$ISeq$;
var inst_28717 = (inst_28715) || (inst_28716);
var state_28777__$1 = state_28777;
if(cljs.core.truth_(inst_28717)){
var statearr_28797_28855 = state_28777__$1;
(statearr_28797_28855[(1)] = (16));

} else {
var statearr_28798_28856 = state_28777__$1;
(statearr_28798_28856[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (22))){
var inst_28736 = (state_28777[(14)]);
var inst_28737 = (state_28777[(10)]);
var inst_28735 = (state_28777[(2)]);
var inst_28736__$1 = cljs.core.nth.call(null,inst_28735,(0),null);
var inst_28737__$1 = cljs.core.nth.call(null,inst_28735,(1),null);
var inst_28738 = (inst_28736__$1 == null);
var inst_28739 = cljs.core._EQ_.call(null,inst_28737__$1,change);
var inst_28740 = (inst_28738) || (inst_28739);
var state_28777__$1 = (function (){var statearr_28799 = state_28777;
(statearr_28799[(14)] = inst_28736__$1);

(statearr_28799[(10)] = inst_28737__$1);

return statearr_28799;
})();
if(cljs.core.truth_(inst_28740)){
var statearr_28800_28857 = state_28777__$1;
(statearr_28800_28857[(1)] = (23));

} else {
var statearr_28801_28858 = state_28777__$1;
(statearr_28801_28858[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (36))){
var inst_28729 = (state_28777[(12)]);
var inst_28707 = inst_28729;
var state_28777__$1 = (function (){var statearr_28802 = state_28777;
(statearr_28802[(7)] = inst_28707);

return statearr_28802;
})();
var statearr_28803_28859 = state_28777__$1;
(statearr_28803_28859[(2)] = null);

(statearr_28803_28859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (29))){
var inst_28751 = (state_28777[(9)]);
var state_28777__$1 = state_28777;
var statearr_28804_28860 = state_28777__$1;
(statearr_28804_28860[(2)] = inst_28751);

(statearr_28804_28860[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (6))){
var state_28777__$1 = state_28777;
var statearr_28805_28861 = state_28777__$1;
(statearr_28805_28861[(2)] = false);

(statearr_28805_28861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (28))){
var inst_28747 = (state_28777[(2)]);
var inst_28748 = calc_state.call(null);
var inst_28707 = inst_28748;
var state_28777__$1 = (function (){var statearr_28806 = state_28777;
(statearr_28806[(7)] = inst_28707);

(statearr_28806[(15)] = inst_28747);

return statearr_28806;
})();
var statearr_28807_28862 = state_28777__$1;
(statearr_28807_28862[(2)] = null);

(statearr_28807_28862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (25))){
var inst_28773 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28808_28863 = state_28777__$1;
(statearr_28808_28863[(2)] = inst_28773);

(statearr_28808_28863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (34))){
var inst_28771 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28809_28864 = state_28777__$1;
(statearr_28809_28864[(2)] = inst_28771);

(statearr_28809_28864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (17))){
var state_28777__$1 = state_28777;
var statearr_28810_28865 = state_28777__$1;
(statearr_28810_28865[(2)] = false);

(statearr_28810_28865[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (3))){
var state_28777__$1 = state_28777;
var statearr_28811_28866 = state_28777__$1;
(statearr_28811_28866[(2)] = false);

(statearr_28811_28866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (12))){
var inst_28775 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28777__$1,inst_28775);
} else {
if((state_val_28778 === (2))){
var inst_28683 = (state_28777[(8)]);
var inst_28688 = inst_28683.cljs$lang$protocol_mask$partition0$;
var inst_28689 = (inst_28688 & (64));
var inst_28690 = inst_28683.cljs$core$ISeq$;
var inst_28691 = (inst_28689) || (inst_28690);
var state_28777__$1 = state_28777;
if(cljs.core.truth_(inst_28691)){
var statearr_28812_28867 = state_28777__$1;
(statearr_28812_28867[(1)] = (5));

} else {
var statearr_28813_28868 = state_28777__$1;
(statearr_28813_28868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (23))){
var inst_28736 = (state_28777[(14)]);
var inst_28742 = (inst_28736 == null);
var state_28777__$1 = state_28777;
if(cljs.core.truth_(inst_28742)){
var statearr_28814_28869 = state_28777__$1;
(statearr_28814_28869[(1)] = (26));

} else {
var statearr_28815_28870 = state_28777__$1;
(statearr_28815_28870[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (35))){
var inst_28762 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
if(cljs.core.truth_(inst_28762)){
var statearr_28816_28871 = state_28777__$1;
(statearr_28816_28871[(1)] = (36));

} else {
var statearr_28817_28872 = state_28777__$1;
(statearr_28817_28872[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (19))){
var inst_28707 = (state_28777[(7)]);
var inst_28726 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28707);
var state_28777__$1 = state_28777;
var statearr_28818_28873 = state_28777__$1;
(statearr_28818_28873[(2)] = inst_28726);

(statearr_28818_28873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (11))){
var inst_28707 = (state_28777[(7)]);
var inst_28711 = (inst_28707 == null);
var inst_28712 = cljs.core.not.call(null,inst_28711);
var state_28777__$1 = state_28777;
if(inst_28712){
var statearr_28819_28874 = state_28777__$1;
(statearr_28819_28874[(1)] = (13));

} else {
var statearr_28820_28875 = state_28777__$1;
(statearr_28820_28875[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (9))){
var inst_28683 = (state_28777[(8)]);
var state_28777__$1 = state_28777;
var statearr_28821_28876 = state_28777__$1;
(statearr_28821_28876[(2)] = inst_28683);

(statearr_28821_28876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (5))){
var state_28777__$1 = state_28777;
var statearr_28822_28877 = state_28777__$1;
(statearr_28822_28877[(2)] = true);

(statearr_28822_28877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (14))){
var state_28777__$1 = state_28777;
var statearr_28823_28878 = state_28777__$1;
(statearr_28823_28878[(2)] = false);

(statearr_28823_28878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (26))){
var inst_28737 = (state_28777[(10)]);
var inst_28744 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28737);
var state_28777__$1 = state_28777;
var statearr_28824_28879 = state_28777__$1;
(statearr_28824_28879[(2)] = inst_28744);

(statearr_28824_28879[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (16))){
var state_28777__$1 = state_28777;
var statearr_28825_28880 = state_28777__$1;
(statearr_28825_28880[(2)] = true);

(statearr_28825_28880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (38))){
var inst_28767 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28826_28881 = state_28777__$1;
(statearr_28826_28881[(2)] = inst_28767);

(statearr_28826_28881[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (30))){
var inst_28731 = (state_28777[(13)]);
var inst_28737 = (state_28777[(10)]);
var inst_28730 = (state_28777[(11)]);
var inst_28754 = cljs.core.empty_QMARK_.call(null,inst_28730);
var inst_28755 = inst_28731.call(null,inst_28737);
var inst_28756 = cljs.core.not.call(null,inst_28755);
var inst_28757 = (inst_28754) && (inst_28756);
var state_28777__$1 = state_28777;
var statearr_28827_28882 = state_28777__$1;
(statearr_28827_28882[(2)] = inst_28757);

(statearr_28827_28882[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (10))){
var inst_28683 = (state_28777[(8)]);
var inst_28703 = (state_28777[(2)]);
var inst_28704 = cljs.core.get.call(null,inst_28703,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28705 = cljs.core.get.call(null,inst_28703,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28706 = cljs.core.get.call(null,inst_28703,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28707 = inst_28683;
var state_28777__$1 = (function (){var statearr_28828 = state_28777;
(statearr_28828[(7)] = inst_28707);

(statearr_28828[(16)] = inst_28704);

(statearr_28828[(17)] = inst_28706);

(statearr_28828[(18)] = inst_28705);

return statearr_28828;
})();
var statearr_28829_28883 = state_28777__$1;
(statearr_28829_28883[(2)] = null);

(statearr_28829_28883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (18))){
var inst_28721 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28830_28884 = state_28777__$1;
(statearr_28830_28884[(2)] = inst_28721);

(statearr_28830_28884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (37))){
var state_28777__$1 = state_28777;
var statearr_28831_28885 = state_28777__$1;
(statearr_28831_28885[(2)] = null);

(statearr_28831_28885[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (8))){
var inst_28683 = (state_28777[(8)]);
var inst_28700 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28683);
var state_28777__$1 = state_28777;
var statearr_28832_28886 = state_28777__$1;
(statearr_28832_28886[(2)] = inst_28700);

(statearr_28832_28886[(1)] = (10));


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
});})(c__19381__auto___28840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19360__auto__,c__19381__auto___28840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19361__auto__ = null;
var cljs$core$async$mix_$_state_machine__19361__auto____0 = (function (){
var statearr_28836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28836[(0)] = cljs$core$async$mix_$_state_machine__19361__auto__);

(statearr_28836[(1)] = (1));

return statearr_28836;
});
var cljs$core$async$mix_$_state_machine__19361__auto____1 = (function (state_28777){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_28777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e28837){if((e28837 instanceof Object)){
var ex__19364__auto__ = e28837;
var statearr_28838_28887 = state_28777;
(statearr_28838_28887[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28888 = state_28777;
state_28777 = G__28888;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19361__auto__ = function(state_28777){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19361__auto____1.call(this,state_28777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19361__auto____0;
cljs$core$async$mix_$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19361__auto____1;
return cljs$core$async$mix_$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___28840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19383__auto__ = (function (){var statearr_28839 = f__19382__auto__.call(null);
(statearr_28839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___28840);

return statearr_28839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___28840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args28889 = [];
var len__17416__auto___28892 = arguments.length;
var i__17417__auto___28893 = (0);
while(true){
if((i__17417__auto___28893 < len__17416__auto___28892)){
args28889.push((arguments[i__17417__auto___28893]));

var G__28894 = (i__17417__auto___28893 + (1));
i__17417__auto___28893 = G__28894;
continue;
} else {
}
break;
}

var G__28891 = args28889.length;
switch (G__28891) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28889.length)].join('')));

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
var args28897 = [];
var len__17416__auto___29022 = arguments.length;
var i__17417__auto___29023 = (0);
while(true){
if((i__17417__auto___29023 < len__17416__auto___29022)){
args28897.push((arguments[i__17417__auto___29023]));

var G__29024 = (i__17417__auto___29023 + (1));
i__17417__auto___29023 = G__29024;
continue;
} else {
}
break;
}

var G__28899 = args28897.length;
switch (G__28899) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28897.length)].join('')));

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
return (function (p1__28896_SHARP_){
if(cljs.core.truth_(p1__28896_SHARP_.call(null,topic))){
return p1__28896_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28896_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16358__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28900 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28901){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28901 = meta28901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28902,meta28901__$1){
var self__ = this;
var _28902__$1 = this;
return (new cljs.core.async.t_cljs$core$async28900(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28901__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28902){
var self__ = this;
var _28902__$1 = this;
return self__.meta28901;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28900.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28901","meta28901",398861172,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28900.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28900";

cljs.core.async.t_cljs$core$async28900.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async28900");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28900 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28900(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28901){
return (new cljs.core.async.t_cljs$core$async28900(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28901));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28900(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19381__auto___29026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___29026,mults,ensure_mult,p){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___29026,mults,ensure_mult,p){
return (function (state_28974){
var state_val_28975 = (state_28974[(1)]);
if((state_val_28975 === (7))){
var inst_28970 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_28976_29027 = state_28974__$1;
(statearr_28976_29027[(2)] = inst_28970);

(statearr_28976_29027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (20))){
var state_28974__$1 = state_28974;
var statearr_28977_29028 = state_28974__$1;
(statearr_28977_29028[(2)] = null);

(statearr_28977_29028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (1))){
var state_28974__$1 = state_28974;
var statearr_28978_29029 = state_28974__$1;
(statearr_28978_29029[(2)] = null);

(statearr_28978_29029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (24))){
var inst_28953 = (state_28974[(7)]);
var inst_28962 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28953);
var state_28974__$1 = state_28974;
var statearr_28979_29030 = state_28974__$1;
(statearr_28979_29030[(2)] = inst_28962);

(statearr_28979_29030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (4))){
var inst_28905 = (state_28974[(8)]);
var inst_28905__$1 = (state_28974[(2)]);
var inst_28906 = (inst_28905__$1 == null);
var state_28974__$1 = (function (){var statearr_28980 = state_28974;
(statearr_28980[(8)] = inst_28905__$1);

return statearr_28980;
})();
if(cljs.core.truth_(inst_28906)){
var statearr_28981_29031 = state_28974__$1;
(statearr_28981_29031[(1)] = (5));

} else {
var statearr_28982_29032 = state_28974__$1;
(statearr_28982_29032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (15))){
var inst_28947 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_28983_29033 = state_28974__$1;
(statearr_28983_29033[(2)] = inst_28947);

(statearr_28983_29033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (21))){
var inst_28967 = (state_28974[(2)]);
var state_28974__$1 = (function (){var statearr_28984 = state_28974;
(statearr_28984[(9)] = inst_28967);

return statearr_28984;
})();
var statearr_28985_29034 = state_28974__$1;
(statearr_28985_29034[(2)] = null);

(statearr_28985_29034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (13))){
var inst_28929 = (state_28974[(10)]);
var inst_28931 = cljs.core.chunked_seq_QMARK_.call(null,inst_28929);
var state_28974__$1 = state_28974;
if(inst_28931){
var statearr_28986_29035 = state_28974__$1;
(statearr_28986_29035[(1)] = (16));

} else {
var statearr_28987_29036 = state_28974__$1;
(statearr_28987_29036[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (22))){
var inst_28959 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
if(cljs.core.truth_(inst_28959)){
var statearr_28988_29037 = state_28974__$1;
(statearr_28988_29037[(1)] = (23));

} else {
var statearr_28989_29038 = state_28974__$1;
(statearr_28989_29038[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (6))){
var inst_28955 = (state_28974[(11)]);
var inst_28905 = (state_28974[(8)]);
var inst_28953 = (state_28974[(7)]);
var inst_28953__$1 = topic_fn.call(null,inst_28905);
var inst_28954 = cljs.core.deref.call(null,mults);
var inst_28955__$1 = cljs.core.get.call(null,inst_28954,inst_28953__$1);
var state_28974__$1 = (function (){var statearr_28990 = state_28974;
(statearr_28990[(11)] = inst_28955__$1);

(statearr_28990[(7)] = inst_28953__$1);

return statearr_28990;
})();
if(cljs.core.truth_(inst_28955__$1)){
var statearr_28991_29039 = state_28974__$1;
(statearr_28991_29039[(1)] = (19));

} else {
var statearr_28992_29040 = state_28974__$1;
(statearr_28992_29040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (25))){
var inst_28964 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_28993_29041 = state_28974__$1;
(statearr_28993_29041[(2)] = inst_28964);

(statearr_28993_29041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (17))){
var inst_28929 = (state_28974[(10)]);
var inst_28938 = cljs.core.first.call(null,inst_28929);
var inst_28939 = cljs.core.async.muxch_STAR_.call(null,inst_28938);
var inst_28940 = cljs.core.async.close_BANG_.call(null,inst_28939);
var inst_28941 = cljs.core.next.call(null,inst_28929);
var inst_28915 = inst_28941;
var inst_28916 = null;
var inst_28917 = (0);
var inst_28918 = (0);
var state_28974__$1 = (function (){var statearr_28994 = state_28974;
(statearr_28994[(12)] = inst_28940);

(statearr_28994[(13)] = inst_28915);

(statearr_28994[(14)] = inst_28918);

(statearr_28994[(15)] = inst_28916);

(statearr_28994[(16)] = inst_28917);

return statearr_28994;
})();
var statearr_28995_29042 = state_28974__$1;
(statearr_28995_29042[(2)] = null);

(statearr_28995_29042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (3))){
var inst_28972 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28974__$1,inst_28972);
} else {
if((state_val_28975 === (12))){
var inst_28949 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_28996_29043 = state_28974__$1;
(statearr_28996_29043[(2)] = inst_28949);

(statearr_28996_29043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (2))){
var state_28974__$1 = state_28974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28974__$1,(4),ch);
} else {
if((state_val_28975 === (23))){
var state_28974__$1 = state_28974;
var statearr_28997_29044 = state_28974__$1;
(statearr_28997_29044[(2)] = null);

(statearr_28997_29044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (19))){
var inst_28955 = (state_28974[(11)]);
var inst_28905 = (state_28974[(8)]);
var inst_28957 = cljs.core.async.muxch_STAR_.call(null,inst_28955);
var state_28974__$1 = state_28974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28974__$1,(22),inst_28957,inst_28905);
} else {
if((state_val_28975 === (11))){
var inst_28929 = (state_28974[(10)]);
var inst_28915 = (state_28974[(13)]);
var inst_28929__$1 = cljs.core.seq.call(null,inst_28915);
var state_28974__$1 = (function (){var statearr_28998 = state_28974;
(statearr_28998[(10)] = inst_28929__$1);

return statearr_28998;
})();
if(inst_28929__$1){
var statearr_28999_29045 = state_28974__$1;
(statearr_28999_29045[(1)] = (13));

} else {
var statearr_29000_29046 = state_28974__$1;
(statearr_29000_29046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (9))){
var inst_28951 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_29001_29047 = state_28974__$1;
(statearr_29001_29047[(2)] = inst_28951);

(statearr_29001_29047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (5))){
var inst_28912 = cljs.core.deref.call(null,mults);
var inst_28913 = cljs.core.vals.call(null,inst_28912);
var inst_28914 = cljs.core.seq.call(null,inst_28913);
var inst_28915 = inst_28914;
var inst_28916 = null;
var inst_28917 = (0);
var inst_28918 = (0);
var state_28974__$1 = (function (){var statearr_29002 = state_28974;
(statearr_29002[(13)] = inst_28915);

(statearr_29002[(14)] = inst_28918);

(statearr_29002[(15)] = inst_28916);

(statearr_29002[(16)] = inst_28917);

return statearr_29002;
})();
var statearr_29003_29048 = state_28974__$1;
(statearr_29003_29048[(2)] = null);

(statearr_29003_29048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (14))){
var state_28974__$1 = state_28974;
var statearr_29007_29049 = state_28974__$1;
(statearr_29007_29049[(2)] = null);

(statearr_29007_29049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (16))){
var inst_28929 = (state_28974[(10)]);
var inst_28933 = cljs.core.chunk_first.call(null,inst_28929);
var inst_28934 = cljs.core.chunk_rest.call(null,inst_28929);
var inst_28935 = cljs.core.count.call(null,inst_28933);
var inst_28915 = inst_28934;
var inst_28916 = inst_28933;
var inst_28917 = inst_28935;
var inst_28918 = (0);
var state_28974__$1 = (function (){var statearr_29008 = state_28974;
(statearr_29008[(13)] = inst_28915);

(statearr_29008[(14)] = inst_28918);

(statearr_29008[(15)] = inst_28916);

(statearr_29008[(16)] = inst_28917);

return statearr_29008;
})();
var statearr_29009_29050 = state_28974__$1;
(statearr_29009_29050[(2)] = null);

(statearr_29009_29050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (10))){
var inst_28915 = (state_28974[(13)]);
var inst_28918 = (state_28974[(14)]);
var inst_28916 = (state_28974[(15)]);
var inst_28917 = (state_28974[(16)]);
var inst_28923 = cljs.core._nth.call(null,inst_28916,inst_28918);
var inst_28924 = cljs.core.async.muxch_STAR_.call(null,inst_28923);
var inst_28925 = cljs.core.async.close_BANG_.call(null,inst_28924);
var inst_28926 = (inst_28918 + (1));
var tmp29004 = inst_28915;
var tmp29005 = inst_28916;
var tmp29006 = inst_28917;
var inst_28915__$1 = tmp29004;
var inst_28916__$1 = tmp29005;
var inst_28917__$1 = tmp29006;
var inst_28918__$1 = inst_28926;
var state_28974__$1 = (function (){var statearr_29010 = state_28974;
(statearr_29010[(17)] = inst_28925);

(statearr_29010[(13)] = inst_28915__$1);

(statearr_29010[(14)] = inst_28918__$1);

(statearr_29010[(15)] = inst_28916__$1);

(statearr_29010[(16)] = inst_28917__$1);

return statearr_29010;
})();
var statearr_29011_29051 = state_28974__$1;
(statearr_29011_29051[(2)] = null);

(statearr_29011_29051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (18))){
var inst_28944 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_29012_29052 = state_28974__$1;
(statearr_29012_29052[(2)] = inst_28944);

(statearr_29012_29052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (8))){
var inst_28918 = (state_28974[(14)]);
var inst_28917 = (state_28974[(16)]);
var inst_28920 = (inst_28918 < inst_28917);
var inst_28921 = inst_28920;
var state_28974__$1 = state_28974;
if(cljs.core.truth_(inst_28921)){
var statearr_29013_29053 = state_28974__$1;
(statearr_29013_29053[(1)] = (10));

} else {
var statearr_29014_29054 = state_28974__$1;
(statearr_29014_29054[(1)] = (11));

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
});})(c__19381__auto___29026,mults,ensure_mult,p))
;
return ((function (switch__19360__auto__,c__19381__auto___29026,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_29018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29018[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_29018[(1)] = (1));

return statearr_29018;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_28974){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_28974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e29019){if((e29019 instanceof Object)){
var ex__19364__auto__ = e29019;
var statearr_29020_29055 = state_28974;
(statearr_29020_29055[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29056 = state_28974;
state_28974 = G__29056;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_28974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_28974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___29026,mults,ensure_mult,p))
})();
var state__19383__auto__ = (function (){var statearr_29021 = f__19382__auto__.call(null);
(statearr_29021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___29026);

return statearr_29021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___29026,mults,ensure_mult,p))
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
var args29057 = [];
var len__17416__auto___29060 = arguments.length;
var i__17417__auto___29061 = (0);
while(true){
if((i__17417__auto___29061 < len__17416__auto___29060)){
args29057.push((arguments[i__17417__auto___29061]));

var G__29062 = (i__17417__auto___29061 + (1));
i__17417__auto___29061 = G__29062;
continue;
} else {
}
break;
}

var G__29059 = args29057.length;
switch (G__29059) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29057.length)].join('')));

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
var args29064 = [];
var len__17416__auto___29067 = arguments.length;
var i__17417__auto___29068 = (0);
while(true){
if((i__17417__auto___29068 < len__17416__auto___29067)){
args29064.push((arguments[i__17417__auto___29068]));

var G__29069 = (i__17417__auto___29068 + (1));
i__17417__auto___29068 = G__29069;
continue;
} else {
}
break;
}

var G__29066 = args29064.length;
switch (G__29066) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29064.length)].join('')));

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
var args29071 = [];
var len__17416__auto___29142 = arguments.length;
var i__17417__auto___29143 = (0);
while(true){
if((i__17417__auto___29143 < len__17416__auto___29142)){
args29071.push((arguments[i__17417__auto___29143]));

var G__29144 = (i__17417__auto___29143 + (1));
i__17417__auto___29143 = G__29144;
continue;
} else {
}
break;
}

var G__29073 = args29071.length;
switch (G__29073) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29071.length)].join('')));

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
var c__19381__auto___29146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___29146,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___29146,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29112){
var state_val_29113 = (state_29112[(1)]);
if((state_val_29113 === (7))){
var state_29112__$1 = state_29112;
var statearr_29114_29147 = state_29112__$1;
(statearr_29114_29147[(2)] = null);

(statearr_29114_29147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (1))){
var state_29112__$1 = state_29112;
var statearr_29115_29148 = state_29112__$1;
(statearr_29115_29148[(2)] = null);

(statearr_29115_29148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (4))){
var inst_29076 = (state_29112[(7)]);
var inst_29078 = (inst_29076 < cnt);
var state_29112__$1 = state_29112;
if(cljs.core.truth_(inst_29078)){
var statearr_29116_29149 = state_29112__$1;
(statearr_29116_29149[(1)] = (6));

} else {
var statearr_29117_29150 = state_29112__$1;
(statearr_29117_29150[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (15))){
var inst_29108 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29118_29151 = state_29112__$1;
(statearr_29118_29151[(2)] = inst_29108);

(statearr_29118_29151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (13))){
var inst_29101 = cljs.core.async.close_BANG_.call(null,out);
var state_29112__$1 = state_29112;
var statearr_29119_29152 = state_29112__$1;
(statearr_29119_29152[(2)] = inst_29101);

(statearr_29119_29152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (6))){
var state_29112__$1 = state_29112;
var statearr_29120_29153 = state_29112__$1;
(statearr_29120_29153[(2)] = null);

(statearr_29120_29153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (3))){
var inst_29110 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29112__$1,inst_29110);
} else {
if((state_val_29113 === (12))){
var inst_29098 = (state_29112[(8)]);
var inst_29098__$1 = (state_29112[(2)]);
var inst_29099 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29098__$1);
var state_29112__$1 = (function (){var statearr_29121 = state_29112;
(statearr_29121[(8)] = inst_29098__$1);

return statearr_29121;
})();
if(cljs.core.truth_(inst_29099)){
var statearr_29122_29154 = state_29112__$1;
(statearr_29122_29154[(1)] = (13));

} else {
var statearr_29123_29155 = state_29112__$1;
(statearr_29123_29155[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (2))){
var inst_29075 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29076 = (0);
var state_29112__$1 = (function (){var statearr_29124 = state_29112;
(statearr_29124[(7)] = inst_29076);

(statearr_29124[(9)] = inst_29075);

return statearr_29124;
})();
var statearr_29125_29156 = state_29112__$1;
(statearr_29125_29156[(2)] = null);

(statearr_29125_29156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (11))){
var inst_29076 = (state_29112[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29112,(10),Object,null,(9));
var inst_29085 = chs__$1.call(null,inst_29076);
var inst_29086 = done.call(null,inst_29076);
var inst_29087 = cljs.core.async.take_BANG_.call(null,inst_29085,inst_29086);
var state_29112__$1 = state_29112;
var statearr_29126_29157 = state_29112__$1;
(statearr_29126_29157[(2)] = inst_29087);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29112__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (9))){
var inst_29076 = (state_29112[(7)]);
var inst_29089 = (state_29112[(2)]);
var inst_29090 = (inst_29076 + (1));
var inst_29076__$1 = inst_29090;
var state_29112__$1 = (function (){var statearr_29127 = state_29112;
(statearr_29127[(7)] = inst_29076__$1);

(statearr_29127[(10)] = inst_29089);

return statearr_29127;
})();
var statearr_29128_29158 = state_29112__$1;
(statearr_29128_29158[(2)] = null);

(statearr_29128_29158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (5))){
var inst_29096 = (state_29112[(2)]);
var state_29112__$1 = (function (){var statearr_29129 = state_29112;
(statearr_29129[(11)] = inst_29096);

return statearr_29129;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29112__$1,(12),dchan);
} else {
if((state_val_29113 === (14))){
var inst_29098 = (state_29112[(8)]);
var inst_29103 = cljs.core.apply.call(null,f,inst_29098);
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29112__$1,(16),out,inst_29103);
} else {
if((state_val_29113 === (16))){
var inst_29105 = (state_29112[(2)]);
var state_29112__$1 = (function (){var statearr_29130 = state_29112;
(statearr_29130[(12)] = inst_29105);

return statearr_29130;
})();
var statearr_29131_29159 = state_29112__$1;
(statearr_29131_29159[(2)] = null);

(statearr_29131_29159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (10))){
var inst_29080 = (state_29112[(2)]);
var inst_29081 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29112__$1 = (function (){var statearr_29132 = state_29112;
(statearr_29132[(13)] = inst_29080);

return statearr_29132;
})();
var statearr_29133_29160 = state_29112__$1;
(statearr_29133_29160[(2)] = inst_29081);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29112__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (8))){
var inst_29094 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29134_29161 = state_29112__$1;
(statearr_29134_29161[(2)] = inst_29094);

(statearr_29134_29161[(1)] = (5));


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
});})(c__19381__auto___29146,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19360__auto__,c__19381__auto___29146,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_29138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29138[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_29138[(1)] = (1));

return statearr_29138;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_29112){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_29112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e29139){if((e29139 instanceof Object)){
var ex__19364__auto__ = e29139;
var statearr_29140_29162 = state_29112;
(statearr_29140_29162[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29163 = state_29112;
state_29112 = G__29163;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_29112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_29112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___29146,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19383__auto__ = (function (){var statearr_29141 = f__19382__auto__.call(null);
(statearr_29141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___29146);

return statearr_29141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___29146,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29165 = [];
var len__17416__auto___29221 = arguments.length;
var i__17417__auto___29222 = (0);
while(true){
if((i__17417__auto___29222 < len__17416__auto___29221)){
args29165.push((arguments[i__17417__auto___29222]));

var G__29223 = (i__17417__auto___29222 + (1));
i__17417__auto___29222 = G__29223;
continue;
} else {
}
break;
}

var G__29167 = args29165.length;
switch (G__29167) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29165.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___29225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___29225,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___29225,out){
return (function (state_29197){
var state_val_29198 = (state_29197[(1)]);
if((state_val_29198 === (7))){
var inst_29177 = (state_29197[(7)]);
var inst_29176 = (state_29197[(8)]);
var inst_29176__$1 = (state_29197[(2)]);
var inst_29177__$1 = cljs.core.nth.call(null,inst_29176__$1,(0),null);
var inst_29178 = cljs.core.nth.call(null,inst_29176__$1,(1),null);
var inst_29179 = (inst_29177__$1 == null);
var state_29197__$1 = (function (){var statearr_29199 = state_29197;
(statearr_29199[(9)] = inst_29178);

(statearr_29199[(7)] = inst_29177__$1);

(statearr_29199[(8)] = inst_29176__$1);

return statearr_29199;
})();
if(cljs.core.truth_(inst_29179)){
var statearr_29200_29226 = state_29197__$1;
(statearr_29200_29226[(1)] = (8));

} else {
var statearr_29201_29227 = state_29197__$1;
(statearr_29201_29227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (1))){
var inst_29168 = cljs.core.vec.call(null,chs);
var inst_29169 = inst_29168;
var state_29197__$1 = (function (){var statearr_29202 = state_29197;
(statearr_29202[(10)] = inst_29169);

return statearr_29202;
})();
var statearr_29203_29228 = state_29197__$1;
(statearr_29203_29228[(2)] = null);

(statearr_29203_29228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (4))){
var inst_29169 = (state_29197[(10)]);
var state_29197__$1 = state_29197;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29197__$1,(7),inst_29169);
} else {
if((state_val_29198 === (6))){
var inst_29193 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
var statearr_29204_29229 = state_29197__$1;
(statearr_29204_29229[(2)] = inst_29193);

(statearr_29204_29229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (3))){
var inst_29195 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29197__$1,inst_29195);
} else {
if((state_val_29198 === (2))){
var inst_29169 = (state_29197[(10)]);
var inst_29171 = cljs.core.count.call(null,inst_29169);
var inst_29172 = (inst_29171 > (0));
var state_29197__$1 = state_29197;
if(cljs.core.truth_(inst_29172)){
var statearr_29206_29230 = state_29197__$1;
(statearr_29206_29230[(1)] = (4));

} else {
var statearr_29207_29231 = state_29197__$1;
(statearr_29207_29231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (11))){
var inst_29169 = (state_29197[(10)]);
var inst_29186 = (state_29197[(2)]);
var tmp29205 = inst_29169;
var inst_29169__$1 = tmp29205;
var state_29197__$1 = (function (){var statearr_29208 = state_29197;
(statearr_29208[(11)] = inst_29186);

(statearr_29208[(10)] = inst_29169__$1);

return statearr_29208;
})();
var statearr_29209_29232 = state_29197__$1;
(statearr_29209_29232[(2)] = null);

(statearr_29209_29232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (9))){
var inst_29177 = (state_29197[(7)]);
var state_29197__$1 = state_29197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29197__$1,(11),out,inst_29177);
} else {
if((state_val_29198 === (5))){
var inst_29191 = cljs.core.async.close_BANG_.call(null,out);
var state_29197__$1 = state_29197;
var statearr_29210_29233 = state_29197__$1;
(statearr_29210_29233[(2)] = inst_29191);

(statearr_29210_29233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (10))){
var inst_29189 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
var statearr_29211_29234 = state_29197__$1;
(statearr_29211_29234[(2)] = inst_29189);

(statearr_29211_29234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (8))){
var inst_29178 = (state_29197[(9)]);
var inst_29177 = (state_29197[(7)]);
var inst_29176 = (state_29197[(8)]);
var inst_29169 = (state_29197[(10)]);
var inst_29181 = (function (){var cs = inst_29169;
var vec__29174 = inst_29176;
var v = inst_29177;
var c = inst_29178;
return ((function (cs,vec__29174,v,c,inst_29178,inst_29177,inst_29176,inst_29169,state_val_29198,c__19381__auto___29225,out){
return (function (p1__29164_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29164_SHARP_);
});
;})(cs,vec__29174,v,c,inst_29178,inst_29177,inst_29176,inst_29169,state_val_29198,c__19381__auto___29225,out))
})();
var inst_29182 = cljs.core.filterv.call(null,inst_29181,inst_29169);
var inst_29169__$1 = inst_29182;
var state_29197__$1 = (function (){var statearr_29212 = state_29197;
(statearr_29212[(10)] = inst_29169__$1);

return statearr_29212;
})();
var statearr_29213_29235 = state_29197__$1;
(statearr_29213_29235[(2)] = null);

(statearr_29213_29235[(1)] = (2));


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
});})(c__19381__auto___29225,out))
;
return ((function (switch__19360__auto__,c__19381__auto___29225,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_29217 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29217[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_29217[(1)] = (1));

return statearr_29217;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_29197){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_29197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e29218){if((e29218 instanceof Object)){
var ex__19364__auto__ = e29218;
var statearr_29219_29236 = state_29197;
(statearr_29219_29236[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29237 = state_29197;
state_29197 = G__29237;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_29197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_29197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___29225,out))
})();
var state__19383__auto__ = (function (){var statearr_29220 = f__19382__auto__.call(null);
(statearr_29220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___29225);

return statearr_29220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___29225,out))
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
var args29238 = [];
var len__17416__auto___29287 = arguments.length;
var i__17417__auto___29288 = (0);
while(true){
if((i__17417__auto___29288 < len__17416__auto___29287)){
args29238.push((arguments[i__17417__auto___29288]));

var G__29289 = (i__17417__auto___29288 + (1));
i__17417__auto___29288 = G__29289;
continue;
} else {
}
break;
}

var G__29240 = args29238.length;
switch (G__29240) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29238.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___29291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___29291,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___29291,out){
return (function (state_29264){
var state_val_29265 = (state_29264[(1)]);
if((state_val_29265 === (7))){
var inst_29246 = (state_29264[(7)]);
var inst_29246__$1 = (state_29264[(2)]);
var inst_29247 = (inst_29246__$1 == null);
var inst_29248 = cljs.core.not.call(null,inst_29247);
var state_29264__$1 = (function (){var statearr_29266 = state_29264;
(statearr_29266[(7)] = inst_29246__$1);

return statearr_29266;
})();
if(inst_29248){
var statearr_29267_29292 = state_29264__$1;
(statearr_29267_29292[(1)] = (8));

} else {
var statearr_29268_29293 = state_29264__$1;
(statearr_29268_29293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (1))){
var inst_29241 = (0);
var state_29264__$1 = (function (){var statearr_29269 = state_29264;
(statearr_29269[(8)] = inst_29241);

return statearr_29269;
})();
var statearr_29270_29294 = state_29264__$1;
(statearr_29270_29294[(2)] = null);

(statearr_29270_29294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (4))){
var state_29264__$1 = state_29264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29264__$1,(7),ch);
} else {
if((state_val_29265 === (6))){
var inst_29259 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29271_29295 = state_29264__$1;
(statearr_29271_29295[(2)] = inst_29259);

(statearr_29271_29295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (3))){
var inst_29261 = (state_29264[(2)]);
var inst_29262 = cljs.core.async.close_BANG_.call(null,out);
var state_29264__$1 = (function (){var statearr_29272 = state_29264;
(statearr_29272[(9)] = inst_29261);

return statearr_29272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29264__$1,inst_29262);
} else {
if((state_val_29265 === (2))){
var inst_29241 = (state_29264[(8)]);
var inst_29243 = (inst_29241 < n);
var state_29264__$1 = state_29264;
if(cljs.core.truth_(inst_29243)){
var statearr_29273_29296 = state_29264__$1;
(statearr_29273_29296[(1)] = (4));

} else {
var statearr_29274_29297 = state_29264__$1;
(statearr_29274_29297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (11))){
var inst_29241 = (state_29264[(8)]);
var inst_29251 = (state_29264[(2)]);
var inst_29252 = (inst_29241 + (1));
var inst_29241__$1 = inst_29252;
var state_29264__$1 = (function (){var statearr_29275 = state_29264;
(statearr_29275[(10)] = inst_29251);

(statearr_29275[(8)] = inst_29241__$1);

return statearr_29275;
})();
var statearr_29276_29298 = state_29264__$1;
(statearr_29276_29298[(2)] = null);

(statearr_29276_29298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (9))){
var state_29264__$1 = state_29264;
var statearr_29277_29299 = state_29264__$1;
(statearr_29277_29299[(2)] = null);

(statearr_29277_29299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (5))){
var state_29264__$1 = state_29264;
var statearr_29278_29300 = state_29264__$1;
(statearr_29278_29300[(2)] = null);

(statearr_29278_29300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (10))){
var inst_29256 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29279_29301 = state_29264__$1;
(statearr_29279_29301[(2)] = inst_29256);

(statearr_29279_29301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (8))){
var inst_29246 = (state_29264[(7)]);
var state_29264__$1 = state_29264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29264__$1,(11),out,inst_29246);
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
});})(c__19381__auto___29291,out))
;
return ((function (switch__19360__auto__,c__19381__auto___29291,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_29283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29283[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_29283[(1)] = (1));

return statearr_29283;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_29264){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_29264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e29284){if((e29284 instanceof Object)){
var ex__19364__auto__ = e29284;
var statearr_29285_29302 = state_29264;
(statearr_29285_29302[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29303 = state_29264;
state_29264 = G__29303;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_29264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_29264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___29291,out))
})();
var state__19383__auto__ = (function (){var statearr_29286 = f__19382__auto__.call(null);
(statearr_29286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___29291);

return statearr_29286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___29291,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29311 = (function (map_LT_,f,ch,meta29312){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29312 = meta29312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29313,meta29312__$1){
var self__ = this;
var _29313__$1 = this;
return (new cljs.core.async.t_cljs$core$async29311(self__.map_LT_,self__.f,self__.ch,meta29312__$1));
});

cljs.core.async.t_cljs$core$async29311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29313){
var self__ = this;
var _29313__$1 = this;
return self__.meta29312;
});

cljs.core.async.t_cljs$core$async29311.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29311.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29314 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29314 = (function (map_LT_,f,ch,meta29312,_,fn1,meta29315){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29312 = meta29312;
this._ = _;
this.fn1 = fn1;
this.meta29315 = meta29315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29316,meta29315__$1){
var self__ = this;
var _29316__$1 = this;
return (new cljs.core.async.t_cljs$core$async29314(self__.map_LT_,self__.f,self__.ch,self__.meta29312,self__._,self__.fn1,meta29315__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29316){
var self__ = this;
var _29316__$1 = this;
return self__.meta29315;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29314.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29304_SHARP_){
return f1.call(null,(((p1__29304_SHARP_ == null))?null:self__.f.call(null,p1__29304_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29314.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29312","meta29312",-1667690992,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29311","cljs.core.async/t_cljs$core$async29311",1220063986,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29315","meta29315",-1874399247,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29314.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29314";

cljs.core.async.t_cljs$core$async29314.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async29314");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29314 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29314(map_LT___$1,f__$1,ch__$1,meta29312__$1,___$2,fn1__$1,meta29315){
return (new cljs.core.async.t_cljs$core$async29314(map_LT___$1,f__$1,ch__$1,meta29312__$1,___$2,fn1__$1,meta29315));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29314(self__.map_LT_,self__.f,self__.ch,self__.meta29312,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29312","meta29312",-1667690992,null)], null);
});

cljs.core.async.t_cljs$core$async29311.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29311";

cljs.core.async.t_cljs$core$async29311.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async29311");
});

cljs.core.async.__GT_t_cljs$core$async29311 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29311(map_LT___$1,f__$1,ch__$1,meta29312){
return (new cljs.core.async.t_cljs$core$async29311(map_LT___$1,f__$1,ch__$1,meta29312));
});

}

return (new cljs.core.async.t_cljs$core$async29311(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29320 = (function (map_GT_,f,ch,meta29321){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29321 = meta29321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29322,meta29321__$1){
var self__ = this;
var _29322__$1 = this;
return (new cljs.core.async.t_cljs$core$async29320(self__.map_GT_,self__.f,self__.ch,meta29321__$1));
});

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29322){
var self__ = this;
var _29322__$1 = this;
return self__.meta29321;
});

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29321","meta29321",2126331507,null)], null);
});

cljs.core.async.t_cljs$core$async29320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29320";

cljs.core.async.t_cljs$core$async29320.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async29320");
});

cljs.core.async.__GT_t_cljs$core$async29320 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29320(map_GT___$1,f__$1,ch__$1,meta29321){
return (new cljs.core.async.t_cljs$core$async29320(map_GT___$1,f__$1,ch__$1,meta29321));
});

}

return (new cljs.core.async.t_cljs$core$async29320(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29326 = (function (filter_GT_,p,ch,meta29327){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29327 = meta29327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29328,meta29327__$1){
var self__ = this;
var _29328__$1 = this;
return (new cljs.core.async.t_cljs$core$async29326(self__.filter_GT_,self__.p,self__.ch,meta29327__$1));
});

cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29328){
var self__ = this;
var _29328__$1 = this;
return self__.meta29327;
});

cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29326.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29327","meta29327",1201493245,null)], null);
});

cljs.core.async.t_cljs$core$async29326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29326";

cljs.core.async.t_cljs$core$async29326.cljs$lang$ctorPrWriter = (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"cljs.core.async/t_cljs$core$async29326");
});

cljs.core.async.__GT_t_cljs$core$async29326 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29326(filter_GT___$1,p__$1,ch__$1,meta29327){
return (new cljs.core.async.t_cljs$core$async29326(filter_GT___$1,p__$1,ch__$1,meta29327));
});

}

return (new cljs.core.async.t_cljs$core$async29326(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29329 = [];
var len__17416__auto___29373 = arguments.length;
var i__17417__auto___29374 = (0);
while(true){
if((i__17417__auto___29374 < len__17416__auto___29373)){
args29329.push((arguments[i__17417__auto___29374]));

var G__29375 = (i__17417__auto___29374 + (1));
i__17417__auto___29374 = G__29375;
continue;
} else {
}
break;
}

var G__29331 = args29329.length;
switch (G__29331) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29329.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___29377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___29377,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___29377,out){
return (function (state_29352){
var state_val_29353 = (state_29352[(1)]);
if((state_val_29353 === (7))){
var inst_29348 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29354_29378 = state_29352__$1;
(statearr_29354_29378[(2)] = inst_29348);

(statearr_29354_29378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (1))){
var state_29352__$1 = state_29352;
var statearr_29355_29379 = state_29352__$1;
(statearr_29355_29379[(2)] = null);

(statearr_29355_29379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (4))){
var inst_29334 = (state_29352[(7)]);
var inst_29334__$1 = (state_29352[(2)]);
var inst_29335 = (inst_29334__$1 == null);
var state_29352__$1 = (function (){var statearr_29356 = state_29352;
(statearr_29356[(7)] = inst_29334__$1);

return statearr_29356;
})();
if(cljs.core.truth_(inst_29335)){
var statearr_29357_29380 = state_29352__$1;
(statearr_29357_29380[(1)] = (5));

} else {
var statearr_29358_29381 = state_29352__$1;
(statearr_29358_29381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (6))){
var inst_29334 = (state_29352[(7)]);
var inst_29339 = p.call(null,inst_29334);
var state_29352__$1 = state_29352;
if(cljs.core.truth_(inst_29339)){
var statearr_29359_29382 = state_29352__$1;
(statearr_29359_29382[(1)] = (8));

} else {
var statearr_29360_29383 = state_29352__$1;
(statearr_29360_29383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (3))){
var inst_29350 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29352__$1,inst_29350);
} else {
if((state_val_29353 === (2))){
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(4),ch);
} else {
if((state_val_29353 === (11))){
var inst_29342 = (state_29352[(2)]);
var state_29352__$1 = state_29352;
var statearr_29361_29384 = state_29352__$1;
(statearr_29361_29384[(2)] = inst_29342);

(statearr_29361_29384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (9))){
var state_29352__$1 = state_29352;
var statearr_29362_29385 = state_29352__$1;
(statearr_29362_29385[(2)] = null);

(statearr_29362_29385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (5))){
var inst_29337 = cljs.core.async.close_BANG_.call(null,out);
var state_29352__$1 = state_29352;
var statearr_29363_29386 = state_29352__$1;
(statearr_29363_29386[(2)] = inst_29337);

(statearr_29363_29386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (10))){
var inst_29345 = (state_29352[(2)]);
var state_29352__$1 = (function (){var statearr_29364 = state_29352;
(statearr_29364[(8)] = inst_29345);

return statearr_29364;
})();
var statearr_29365_29387 = state_29352__$1;
(statearr_29365_29387[(2)] = null);

(statearr_29365_29387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29353 === (8))){
var inst_29334 = (state_29352[(7)]);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29352__$1,(11),out,inst_29334);
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
});})(c__19381__auto___29377,out))
;
return ((function (switch__19360__auto__,c__19381__auto___29377,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_29369 = [null,null,null,null,null,null,null,null,null];
(statearr_29369[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_29369[(1)] = (1));

return statearr_29369;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_29352){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_29352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e29370){if((e29370 instanceof Object)){
var ex__19364__auto__ = e29370;
var statearr_29371_29388 = state_29352;
(statearr_29371_29388[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29389 = state_29352;
state_29352 = G__29389;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_29352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_29352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___29377,out))
})();
var state__19383__auto__ = (function (){var statearr_29372 = f__19382__auto__.call(null);
(statearr_29372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___29377);

return statearr_29372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___29377,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29390 = [];
var len__17416__auto___29393 = arguments.length;
var i__17417__auto___29394 = (0);
while(true){
if((i__17417__auto___29394 < len__17416__auto___29393)){
args29390.push((arguments[i__17417__auto___29394]));

var G__29395 = (i__17417__auto___29394 + (1));
i__17417__auto___29394 = G__29395;
continue;
} else {
}
break;
}

var G__29392 = args29390.length;
switch (G__29392) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29390.length)].join('')));

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
return (function (state_29562){
var state_val_29563 = (state_29562[(1)]);
if((state_val_29563 === (7))){
var inst_29558 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29564_29605 = state_29562__$1;
(statearr_29564_29605[(2)] = inst_29558);

(statearr_29564_29605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (20))){
var inst_29528 = (state_29562[(7)]);
var inst_29539 = (state_29562[(2)]);
var inst_29540 = cljs.core.next.call(null,inst_29528);
var inst_29514 = inst_29540;
var inst_29515 = null;
var inst_29516 = (0);
var inst_29517 = (0);
var state_29562__$1 = (function (){var statearr_29565 = state_29562;
(statearr_29565[(8)] = inst_29539);

(statearr_29565[(9)] = inst_29517);

(statearr_29565[(10)] = inst_29515);

(statearr_29565[(11)] = inst_29514);

(statearr_29565[(12)] = inst_29516);

return statearr_29565;
})();
var statearr_29566_29606 = state_29562__$1;
(statearr_29566_29606[(2)] = null);

(statearr_29566_29606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (1))){
var state_29562__$1 = state_29562;
var statearr_29567_29607 = state_29562__$1;
(statearr_29567_29607[(2)] = null);

(statearr_29567_29607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (4))){
var inst_29503 = (state_29562[(13)]);
var inst_29503__$1 = (state_29562[(2)]);
var inst_29504 = (inst_29503__$1 == null);
var state_29562__$1 = (function (){var statearr_29568 = state_29562;
(statearr_29568[(13)] = inst_29503__$1);

return statearr_29568;
})();
if(cljs.core.truth_(inst_29504)){
var statearr_29569_29608 = state_29562__$1;
(statearr_29569_29608[(1)] = (5));

} else {
var statearr_29570_29609 = state_29562__$1;
(statearr_29570_29609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (15))){
var state_29562__$1 = state_29562;
var statearr_29574_29610 = state_29562__$1;
(statearr_29574_29610[(2)] = null);

(statearr_29574_29610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (21))){
var state_29562__$1 = state_29562;
var statearr_29575_29611 = state_29562__$1;
(statearr_29575_29611[(2)] = null);

(statearr_29575_29611[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (13))){
var inst_29517 = (state_29562[(9)]);
var inst_29515 = (state_29562[(10)]);
var inst_29514 = (state_29562[(11)]);
var inst_29516 = (state_29562[(12)]);
var inst_29524 = (state_29562[(2)]);
var inst_29525 = (inst_29517 + (1));
var tmp29571 = inst_29515;
var tmp29572 = inst_29514;
var tmp29573 = inst_29516;
var inst_29514__$1 = tmp29572;
var inst_29515__$1 = tmp29571;
var inst_29516__$1 = tmp29573;
var inst_29517__$1 = inst_29525;
var state_29562__$1 = (function (){var statearr_29576 = state_29562;
(statearr_29576[(14)] = inst_29524);

(statearr_29576[(9)] = inst_29517__$1);

(statearr_29576[(10)] = inst_29515__$1);

(statearr_29576[(11)] = inst_29514__$1);

(statearr_29576[(12)] = inst_29516__$1);

return statearr_29576;
})();
var statearr_29577_29612 = state_29562__$1;
(statearr_29577_29612[(2)] = null);

(statearr_29577_29612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (22))){
var state_29562__$1 = state_29562;
var statearr_29578_29613 = state_29562__$1;
(statearr_29578_29613[(2)] = null);

(statearr_29578_29613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (6))){
var inst_29503 = (state_29562[(13)]);
var inst_29512 = f.call(null,inst_29503);
var inst_29513 = cljs.core.seq.call(null,inst_29512);
var inst_29514 = inst_29513;
var inst_29515 = null;
var inst_29516 = (0);
var inst_29517 = (0);
var state_29562__$1 = (function (){var statearr_29579 = state_29562;
(statearr_29579[(9)] = inst_29517);

(statearr_29579[(10)] = inst_29515);

(statearr_29579[(11)] = inst_29514);

(statearr_29579[(12)] = inst_29516);

return statearr_29579;
})();
var statearr_29580_29614 = state_29562__$1;
(statearr_29580_29614[(2)] = null);

(statearr_29580_29614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (17))){
var inst_29528 = (state_29562[(7)]);
var inst_29532 = cljs.core.chunk_first.call(null,inst_29528);
var inst_29533 = cljs.core.chunk_rest.call(null,inst_29528);
var inst_29534 = cljs.core.count.call(null,inst_29532);
var inst_29514 = inst_29533;
var inst_29515 = inst_29532;
var inst_29516 = inst_29534;
var inst_29517 = (0);
var state_29562__$1 = (function (){var statearr_29581 = state_29562;
(statearr_29581[(9)] = inst_29517);

(statearr_29581[(10)] = inst_29515);

(statearr_29581[(11)] = inst_29514);

(statearr_29581[(12)] = inst_29516);

return statearr_29581;
})();
var statearr_29582_29615 = state_29562__$1;
(statearr_29582_29615[(2)] = null);

(statearr_29582_29615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (3))){
var inst_29560 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29562__$1,inst_29560);
} else {
if((state_val_29563 === (12))){
var inst_29548 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29583_29616 = state_29562__$1;
(statearr_29583_29616[(2)] = inst_29548);

(statearr_29583_29616[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (2))){
var state_29562__$1 = state_29562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29562__$1,(4),in$);
} else {
if((state_val_29563 === (23))){
var inst_29556 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29584_29617 = state_29562__$1;
(statearr_29584_29617[(2)] = inst_29556);

(statearr_29584_29617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (19))){
var inst_29543 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29585_29618 = state_29562__$1;
(statearr_29585_29618[(2)] = inst_29543);

(statearr_29585_29618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (11))){
var inst_29528 = (state_29562[(7)]);
var inst_29514 = (state_29562[(11)]);
var inst_29528__$1 = cljs.core.seq.call(null,inst_29514);
var state_29562__$1 = (function (){var statearr_29586 = state_29562;
(statearr_29586[(7)] = inst_29528__$1);

return statearr_29586;
})();
if(inst_29528__$1){
var statearr_29587_29619 = state_29562__$1;
(statearr_29587_29619[(1)] = (14));

} else {
var statearr_29588_29620 = state_29562__$1;
(statearr_29588_29620[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (9))){
var inst_29550 = (state_29562[(2)]);
var inst_29551 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29562__$1 = (function (){var statearr_29589 = state_29562;
(statearr_29589[(15)] = inst_29550);

return statearr_29589;
})();
if(cljs.core.truth_(inst_29551)){
var statearr_29590_29621 = state_29562__$1;
(statearr_29590_29621[(1)] = (21));

} else {
var statearr_29591_29622 = state_29562__$1;
(statearr_29591_29622[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (5))){
var inst_29506 = cljs.core.async.close_BANG_.call(null,out);
var state_29562__$1 = state_29562;
var statearr_29592_29623 = state_29562__$1;
(statearr_29592_29623[(2)] = inst_29506);

(statearr_29592_29623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (14))){
var inst_29528 = (state_29562[(7)]);
var inst_29530 = cljs.core.chunked_seq_QMARK_.call(null,inst_29528);
var state_29562__$1 = state_29562;
if(inst_29530){
var statearr_29593_29624 = state_29562__$1;
(statearr_29593_29624[(1)] = (17));

} else {
var statearr_29594_29625 = state_29562__$1;
(statearr_29594_29625[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (16))){
var inst_29546 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29595_29626 = state_29562__$1;
(statearr_29595_29626[(2)] = inst_29546);

(statearr_29595_29626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (10))){
var inst_29517 = (state_29562[(9)]);
var inst_29515 = (state_29562[(10)]);
var inst_29522 = cljs.core._nth.call(null,inst_29515,inst_29517);
var state_29562__$1 = state_29562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29562__$1,(13),out,inst_29522);
} else {
if((state_val_29563 === (18))){
var inst_29528 = (state_29562[(7)]);
var inst_29537 = cljs.core.first.call(null,inst_29528);
var state_29562__$1 = state_29562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29562__$1,(20),out,inst_29537);
} else {
if((state_val_29563 === (8))){
var inst_29517 = (state_29562[(9)]);
var inst_29516 = (state_29562[(12)]);
var inst_29519 = (inst_29517 < inst_29516);
var inst_29520 = inst_29519;
var state_29562__$1 = state_29562;
if(cljs.core.truth_(inst_29520)){
var statearr_29596_29627 = state_29562__$1;
(statearr_29596_29627[(1)] = (10));

} else {
var statearr_29597_29628 = state_29562__$1;
(statearr_29597_29628[(1)] = (11));

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
var statearr_29601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29601[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__);

(statearr_29601[(1)] = (1));

return statearr_29601;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____1 = (function (state_29562){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_29562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e29602){if((e29602 instanceof Object)){
var ex__19364__auto__ = e29602;
var statearr_29603_29629 = state_29562;
(statearr_29603_29629[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29630 = state_29562;
state_29562 = G__29630;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__ = function(state_29562){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____1.call(this,state_29562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19361__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto__))
})();
var state__19383__auto__ = (function (){var statearr_29604 = f__19382__auto__.call(null);
(statearr_29604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto__);

return statearr_29604;
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
var args29631 = [];
var len__17416__auto___29634 = arguments.length;
var i__17417__auto___29635 = (0);
while(true){
if((i__17417__auto___29635 < len__17416__auto___29634)){
args29631.push((arguments[i__17417__auto___29635]));

var G__29636 = (i__17417__auto___29635 + (1));
i__17417__auto___29635 = G__29636;
continue;
} else {
}
break;
}

var G__29633 = args29631.length;
switch (G__29633) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29631.length)].join('')));

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
var args29638 = [];
var len__17416__auto___29641 = arguments.length;
var i__17417__auto___29642 = (0);
while(true){
if((i__17417__auto___29642 < len__17416__auto___29641)){
args29638.push((arguments[i__17417__auto___29642]));

var G__29643 = (i__17417__auto___29642 + (1));
i__17417__auto___29642 = G__29643;
continue;
} else {
}
break;
}

var G__29640 = args29638.length;
switch (G__29640) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29638.length)].join('')));

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
var args29645 = [];
var len__17416__auto___29696 = arguments.length;
var i__17417__auto___29697 = (0);
while(true){
if((i__17417__auto___29697 < len__17416__auto___29696)){
args29645.push((arguments[i__17417__auto___29697]));

var G__29698 = (i__17417__auto___29697 + (1));
i__17417__auto___29697 = G__29698;
continue;
} else {
}
break;
}

var G__29647 = args29645.length;
switch (G__29647) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29645.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___29700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___29700,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___29700,out){
return (function (state_29671){
var state_val_29672 = (state_29671[(1)]);
if((state_val_29672 === (7))){
var inst_29666 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29673_29701 = state_29671__$1;
(statearr_29673_29701[(2)] = inst_29666);

(statearr_29673_29701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (1))){
var inst_29648 = null;
var state_29671__$1 = (function (){var statearr_29674 = state_29671;
(statearr_29674[(7)] = inst_29648);

return statearr_29674;
})();
var statearr_29675_29702 = state_29671__$1;
(statearr_29675_29702[(2)] = null);

(statearr_29675_29702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (4))){
var inst_29651 = (state_29671[(8)]);
var inst_29651__$1 = (state_29671[(2)]);
var inst_29652 = (inst_29651__$1 == null);
var inst_29653 = cljs.core.not.call(null,inst_29652);
var state_29671__$1 = (function (){var statearr_29676 = state_29671;
(statearr_29676[(8)] = inst_29651__$1);

return statearr_29676;
})();
if(inst_29653){
var statearr_29677_29703 = state_29671__$1;
(statearr_29677_29703[(1)] = (5));

} else {
var statearr_29678_29704 = state_29671__$1;
(statearr_29678_29704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (6))){
var state_29671__$1 = state_29671;
var statearr_29679_29705 = state_29671__$1;
(statearr_29679_29705[(2)] = null);

(statearr_29679_29705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (3))){
var inst_29668 = (state_29671[(2)]);
var inst_29669 = cljs.core.async.close_BANG_.call(null,out);
var state_29671__$1 = (function (){var statearr_29680 = state_29671;
(statearr_29680[(9)] = inst_29668);

return statearr_29680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29671__$1,inst_29669);
} else {
if((state_val_29672 === (2))){
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29671__$1,(4),ch);
} else {
if((state_val_29672 === (11))){
var inst_29651 = (state_29671[(8)]);
var inst_29660 = (state_29671[(2)]);
var inst_29648 = inst_29651;
var state_29671__$1 = (function (){var statearr_29681 = state_29671;
(statearr_29681[(7)] = inst_29648);

(statearr_29681[(10)] = inst_29660);

return statearr_29681;
})();
var statearr_29682_29706 = state_29671__$1;
(statearr_29682_29706[(2)] = null);

(statearr_29682_29706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (9))){
var inst_29651 = (state_29671[(8)]);
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29671__$1,(11),out,inst_29651);
} else {
if((state_val_29672 === (5))){
var inst_29648 = (state_29671[(7)]);
var inst_29651 = (state_29671[(8)]);
var inst_29655 = cljs.core._EQ_.call(null,inst_29651,inst_29648);
var state_29671__$1 = state_29671;
if(inst_29655){
var statearr_29684_29707 = state_29671__$1;
(statearr_29684_29707[(1)] = (8));

} else {
var statearr_29685_29708 = state_29671__$1;
(statearr_29685_29708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (10))){
var inst_29663 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29686_29709 = state_29671__$1;
(statearr_29686_29709[(2)] = inst_29663);

(statearr_29686_29709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (8))){
var inst_29648 = (state_29671[(7)]);
var tmp29683 = inst_29648;
var inst_29648__$1 = tmp29683;
var state_29671__$1 = (function (){var statearr_29687 = state_29671;
(statearr_29687[(7)] = inst_29648__$1);

return statearr_29687;
})();
var statearr_29688_29710 = state_29671__$1;
(statearr_29688_29710[(2)] = null);

(statearr_29688_29710[(1)] = (2));


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
});})(c__19381__auto___29700,out))
;
return ((function (switch__19360__auto__,c__19381__auto___29700,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_29692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29692[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_29692[(1)] = (1));

return statearr_29692;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_29671){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_29671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e29693){if((e29693 instanceof Object)){
var ex__19364__auto__ = e29693;
var statearr_29694_29711 = state_29671;
(statearr_29694_29711[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29712 = state_29671;
state_29671 = G__29712;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_29671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_29671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___29700,out))
})();
var state__19383__auto__ = (function (){var statearr_29695 = f__19382__auto__.call(null);
(statearr_29695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___29700);

return statearr_29695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___29700,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29713 = [];
var len__17416__auto___29783 = arguments.length;
var i__17417__auto___29784 = (0);
while(true){
if((i__17417__auto___29784 < len__17416__auto___29783)){
args29713.push((arguments[i__17417__auto___29784]));

var G__29785 = (i__17417__auto___29784 + (1));
i__17417__auto___29784 = G__29785;
continue;
} else {
}
break;
}

var G__29715 = args29713.length;
switch (G__29715) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29713.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___29787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___29787,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___29787,out){
return (function (state_29753){
var state_val_29754 = (state_29753[(1)]);
if((state_val_29754 === (7))){
var inst_29749 = (state_29753[(2)]);
var state_29753__$1 = state_29753;
var statearr_29755_29788 = state_29753__$1;
(statearr_29755_29788[(2)] = inst_29749);

(statearr_29755_29788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29754 === (1))){
var inst_29716 = (new Array(n));
var inst_29717 = inst_29716;
var inst_29718 = (0);
var state_29753__$1 = (function (){var statearr_29756 = state_29753;
(statearr_29756[(7)] = inst_29717);

(statearr_29756[(8)] = inst_29718);

return statearr_29756;
})();
var statearr_29757_29789 = state_29753__$1;
(statearr_29757_29789[(2)] = null);

(statearr_29757_29789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29754 === (4))){
var inst_29721 = (state_29753[(9)]);
var inst_29721__$1 = (state_29753[(2)]);
var inst_29722 = (inst_29721__$1 == null);
var inst_29723 = cljs.core.not.call(null,inst_29722);
var state_29753__$1 = (function (){var statearr_29758 = state_29753;
(statearr_29758[(9)] = inst_29721__$1);

return statearr_29758;
})();
if(inst_29723){
var statearr_29759_29790 = state_29753__$1;
(statearr_29759_29790[(1)] = (5));

} else {
var statearr_29760_29791 = state_29753__$1;
(statearr_29760_29791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29754 === (15))){
var inst_29743 = (state_29753[(2)]);
var state_29753__$1 = state_29753;
var statearr_29761_29792 = state_29753__$1;
(statearr_29761_29792[(2)] = inst_29743);

(statearr_29761_29792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29754 === (13))){
var state_29753__$1 = state_29753;
var statearr_29762_29793 = state_29753__$1;
(statearr_29762_29793[(2)] = null);

(statearr_29762_29793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29754 === (6))){
var inst_29718 = (state_29753[(8)]);
var inst_29739 = (inst_29718 > (0));
var state_29753__$1 = state_29753;
if(cljs.core.truth_(inst_29739)){
var statearr_29763_29794 = state_29753__$1;
(statearr_29763_29794[(1)] = (12));

} else {
var statearr_29764_29795 = state_29753__$1;
(statearr_29764_29795[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29754 === (3))){
var inst_29751 = (state_29753[(2)]);
var state_29753__$1 = state_29753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29753__$1,inst_29751);
} else {
if((state_val_29754 === (12))){
var inst_29717 = (state_29753[(7)]);
var inst_29741 = cljs.core.vec.call(null,inst_29717);
var state_29753__$1 = state_29753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29753__$1,(15),out,inst_29741);
} else {
if((state_val_29754 === (2))){
var state_29753__$1 = state_29753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29753__$1,(4),ch);
} else {
if((state_val_29754 === (11))){
var inst_29733 = (state_29753[(2)]);
var inst_29734 = (new Array(n));
var inst_29717 = inst_29734;
var inst_29718 = (0);
var state_29753__$1 = (function (){var statearr_29765 = state_29753;
(statearr_29765[(7)] = inst_29717);

(statearr_29765[(8)] = inst_29718);

(statearr_29765[(10)] = inst_29733);

return statearr_29765;
})();
var statearr_29766_29796 = state_29753__$1;
(statearr_29766_29796[(2)] = null);

(statearr_29766_29796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29754 === (9))){
var inst_29717 = (state_29753[(7)]);
var inst_29731 = cljs.core.vec.call(null,inst_29717);
var state_29753__$1 = state_29753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29753__$1,(11),out,inst_29731);
} else {
if((state_val_29754 === (5))){
var inst_29726 = (state_29753[(11)]);
var inst_29717 = (state_29753[(7)]);
var inst_29718 = (state_29753[(8)]);
var inst_29721 = (state_29753[(9)]);
var inst_29725 = (inst_29717[inst_29718] = inst_29721);
var inst_29726__$1 = (inst_29718 + (1));
var inst_29727 = (inst_29726__$1 < n);
var state_29753__$1 = (function (){var statearr_29767 = state_29753;
(statearr_29767[(11)] = inst_29726__$1);

(statearr_29767[(12)] = inst_29725);

return statearr_29767;
})();
if(cljs.core.truth_(inst_29727)){
var statearr_29768_29797 = state_29753__$1;
(statearr_29768_29797[(1)] = (8));

} else {
var statearr_29769_29798 = state_29753__$1;
(statearr_29769_29798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29754 === (14))){
var inst_29746 = (state_29753[(2)]);
var inst_29747 = cljs.core.async.close_BANG_.call(null,out);
var state_29753__$1 = (function (){var statearr_29771 = state_29753;
(statearr_29771[(13)] = inst_29746);

return statearr_29771;
})();
var statearr_29772_29799 = state_29753__$1;
(statearr_29772_29799[(2)] = inst_29747);

(statearr_29772_29799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29754 === (10))){
var inst_29737 = (state_29753[(2)]);
var state_29753__$1 = state_29753;
var statearr_29773_29800 = state_29753__$1;
(statearr_29773_29800[(2)] = inst_29737);

(statearr_29773_29800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29754 === (8))){
var inst_29726 = (state_29753[(11)]);
var inst_29717 = (state_29753[(7)]);
var tmp29770 = inst_29717;
var inst_29717__$1 = tmp29770;
var inst_29718 = inst_29726;
var state_29753__$1 = (function (){var statearr_29774 = state_29753;
(statearr_29774[(7)] = inst_29717__$1);

(statearr_29774[(8)] = inst_29718);

return statearr_29774;
})();
var statearr_29775_29801 = state_29753__$1;
(statearr_29775_29801[(2)] = null);

(statearr_29775_29801[(1)] = (2));


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
});})(c__19381__auto___29787,out))
;
return ((function (switch__19360__auto__,c__19381__auto___29787,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_29779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29779[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_29779[(1)] = (1));

return statearr_29779;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_29753){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_29753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e29780){if((e29780 instanceof Object)){
var ex__19364__auto__ = e29780;
var statearr_29781_29802 = state_29753;
(statearr_29781_29802[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29803 = state_29753;
state_29753 = G__29803;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_29753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_29753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___29787,out))
})();
var state__19383__auto__ = (function (){var statearr_29782 = f__19382__auto__.call(null);
(statearr_29782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___29787);

return statearr_29782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___29787,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29804 = [];
var len__17416__auto___29878 = arguments.length;
var i__17417__auto___29879 = (0);
while(true){
if((i__17417__auto___29879 < len__17416__auto___29878)){
args29804.push((arguments[i__17417__auto___29879]));

var G__29880 = (i__17417__auto___29879 + (1));
i__17417__auto___29879 = G__29880;
continue;
} else {
}
break;
}

var G__29806 = args29804.length;
switch (G__29806) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29804.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19381__auto___29882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19381__auto___29882,out){
return (function (){
var f__19382__auto__ = (function (){var switch__19360__auto__ = ((function (c__19381__auto___29882,out){
return (function (state_29848){
var state_val_29849 = (state_29848[(1)]);
if((state_val_29849 === (7))){
var inst_29844 = (state_29848[(2)]);
var state_29848__$1 = state_29848;
var statearr_29850_29883 = state_29848__$1;
(statearr_29850_29883[(2)] = inst_29844);

(statearr_29850_29883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (1))){
var inst_29807 = [];
var inst_29808 = inst_29807;
var inst_29809 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29848__$1 = (function (){var statearr_29851 = state_29848;
(statearr_29851[(7)] = inst_29809);

(statearr_29851[(8)] = inst_29808);

return statearr_29851;
})();
var statearr_29852_29884 = state_29848__$1;
(statearr_29852_29884[(2)] = null);

(statearr_29852_29884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (4))){
var inst_29812 = (state_29848[(9)]);
var inst_29812__$1 = (state_29848[(2)]);
var inst_29813 = (inst_29812__$1 == null);
var inst_29814 = cljs.core.not.call(null,inst_29813);
var state_29848__$1 = (function (){var statearr_29853 = state_29848;
(statearr_29853[(9)] = inst_29812__$1);

return statearr_29853;
})();
if(inst_29814){
var statearr_29854_29885 = state_29848__$1;
(statearr_29854_29885[(1)] = (5));

} else {
var statearr_29855_29886 = state_29848__$1;
(statearr_29855_29886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (15))){
var inst_29838 = (state_29848[(2)]);
var state_29848__$1 = state_29848;
var statearr_29856_29887 = state_29848__$1;
(statearr_29856_29887[(2)] = inst_29838);

(statearr_29856_29887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (13))){
var state_29848__$1 = state_29848;
var statearr_29857_29888 = state_29848__$1;
(statearr_29857_29888[(2)] = null);

(statearr_29857_29888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (6))){
var inst_29808 = (state_29848[(8)]);
var inst_29833 = inst_29808.length;
var inst_29834 = (inst_29833 > (0));
var state_29848__$1 = state_29848;
if(cljs.core.truth_(inst_29834)){
var statearr_29858_29889 = state_29848__$1;
(statearr_29858_29889[(1)] = (12));

} else {
var statearr_29859_29890 = state_29848__$1;
(statearr_29859_29890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (3))){
var inst_29846 = (state_29848[(2)]);
var state_29848__$1 = state_29848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29848__$1,inst_29846);
} else {
if((state_val_29849 === (12))){
var inst_29808 = (state_29848[(8)]);
var inst_29836 = cljs.core.vec.call(null,inst_29808);
var state_29848__$1 = state_29848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29848__$1,(15),out,inst_29836);
} else {
if((state_val_29849 === (2))){
var state_29848__$1 = state_29848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29848__$1,(4),ch);
} else {
if((state_val_29849 === (11))){
var inst_29812 = (state_29848[(9)]);
var inst_29816 = (state_29848[(10)]);
var inst_29826 = (state_29848[(2)]);
var inst_29827 = [];
var inst_29828 = inst_29827.push(inst_29812);
var inst_29808 = inst_29827;
var inst_29809 = inst_29816;
var state_29848__$1 = (function (){var statearr_29860 = state_29848;
(statearr_29860[(7)] = inst_29809);

(statearr_29860[(8)] = inst_29808);

(statearr_29860[(11)] = inst_29826);

(statearr_29860[(12)] = inst_29828);

return statearr_29860;
})();
var statearr_29861_29891 = state_29848__$1;
(statearr_29861_29891[(2)] = null);

(statearr_29861_29891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (9))){
var inst_29808 = (state_29848[(8)]);
var inst_29824 = cljs.core.vec.call(null,inst_29808);
var state_29848__$1 = state_29848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29848__$1,(11),out,inst_29824);
} else {
if((state_val_29849 === (5))){
var inst_29809 = (state_29848[(7)]);
var inst_29812 = (state_29848[(9)]);
var inst_29816 = (state_29848[(10)]);
var inst_29816__$1 = f.call(null,inst_29812);
var inst_29817 = cljs.core._EQ_.call(null,inst_29816__$1,inst_29809);
var inst_29818 = cljs.core.keyword_identical_QMARK_.call(null,inst_29809,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29819 = (inst_29817) || (inst_29818);
var state_29848__$1 = (function (){var statearr_29862 = state_29848;
(statearr_29862[(10)] = inst_29816__$1);

return statearr_29862;
})();
if(cljs.core.truth_(inst_29819)){
var statearr_29863_29892 = state_29848__$1;
(statearr_29863_29892[(1)] = (8));

} else {
var statearr_29864_29893 = state_29848__$1;
(statearr_29864_29893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (14))){
var inst_29841 = (state_29848[(2)]);
var inst_29842 = cljs.core.async.close_BANG_.call(null,out);
var state_29848__$1 = (function (){var statearr_29866 = state_29848;
(statearr_29866[(13)] = inst_29841);

return statearr_29866;
})();
var statearr_29867_29894 = state_29848__$1;
(statearr_29867_29894[(2)] = inst_29842);

(statearr_29867_29894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (10))){
var inst_29831 = (state_29848[(2)]);
var state_29848__$1 = state_29848;
var statearr_29868_29895 = state_29848__$1;
(statearr_29868_29895[(2)] = inst_29831);

(statearr_29868_29895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (8))){
var inst_29812 = (state_29848[(9)]);
var inst_29808 = (state_29848[(8)]);
var inst_29816 = (state_29848[(10)]);
var inst_29821 = inst_29808.push(inst_29812);
var tmp29865 = inst_29808;
var inst_29808__$1 = tmp29865;
var inst_29809 = inst_29816;
var state_29848__$1 = (function (){var statearr_29869 = state_29848;
(statearr_29869[(7)] = inst_29809);

(statearr_29869[(14)] = inst_29821);

(statearr_29869[(8)] = inst_29808__$1);

return statearr_29869;
})();
var statearr_29870_29896 = state_29848__$1;
(statearr_29870_29896[(2)] = null);

(statearr_29870_29896[(1)] = (2));


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
});})(c__19381__auto___29882,out))
;
return ((function (switch__19360__auto__,c__19381__auto___29882,out){
return (function() {
var cljs$core$async$state_machine__19361__auto__ = null;
var cljs$core$async$state_machine__19361__auto____0 = (function (){
var statearr_29874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29874[(0)] = cljs$core$async$state_machine__19361__auto__);

(statearr_29874[(1)] = (1));

return statearr_29874;
});
var cljs$core$async$state_machine__19361__auto____1 = (function (state_29848){
while(true){
var ret_value__19362__auto__ = (function (){try{while(true){
var result__19363__auto__ = switch__19360__auto__.call(null,state_29848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19363__auto__;
}
break;
}
}catch (e29875){if((e29875 instanceof Object)){
var ex__19364__auto__ = e29875;
var statearr_29876_29897 = state_29848;
(statearr_29876_29897[(5)] = ex__19364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29898 = state_29848;
state_29848 = G__29898;
continue;
} else {
return ret_value__19362__auto__;
}
break;
}
});
cljs$core$async$state_machine__19361__auto__ = function(state_29848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19361__auto____1.call(this,state_29848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19361__auto____0;
cljs$core$async$state_machine__19361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19361__auto____1;
return cljs$core$async$state_machine__19361__auto__;
})()
;})(switch__19360__auto__,c__19381__auto___29882,out))
})();
var state__19383__auto__ = (function (){var statearr_29877 = f__19382__auto__.call(null);
(statearr_29877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19381__auto___29882);

return statearr_29877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19383__auto__);
});})(c__19381__auto___29882,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map