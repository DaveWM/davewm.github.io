// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
/**
 * Traverses up the DOM tree and returns the first node that contains a href attr
 */
pushy.core.recur_href = (function pushy$core$recur_href(target){
if(cljs.core.truth_(target.href)){
return target;
} else {
if(cljs.core.truth_(target.parentNode)){
var G__13929 = target.parentNode;
return (pushy.core.recur_href.cljs$core$IFn$_invoke$arity$1 ? pushy.core.recur_href.cljs$core$IFn$_invoke$arity$1(G__13929) : pushy.core.recur_href.call(null,G__13929));
} else {
return null;
}
}
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__13930 = h;
G__13930.setUseFragment(false);

G__13930.setPathPrefix("");

G__13930.setEnabled(true);

return G__13930;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var G__13932 = arguments.length;
switch (G__13932) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1(pushy.core.set_create_url_BANG_(pushy.core.set_retrieve_token_BANG_((new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_((new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__13935 = arguments.length;
switch (G__13935) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4348__auto__.call(null,this$,token));
} else {
var m__4348__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4348__auto____$1.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4348__auto__.call(null,this$,token,title));
} else {
var m__4348__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4348__auto____$1.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__13937 = arguments.length;
switch (G__13937) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4348__auto__.call(null,this$,token));
} else {
var m__4348__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4348__auto____$1.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4348__auto__.call(null,this$,token,title));
} else {
var m__4348__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4348__auto____$1.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.get_token = (function pushy$core$get_token(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$get_token$arity$1 == null)))))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (pushy.core.get_token[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (pushy.core.get_token["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (pushy.core.start_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (pushy.core.stop_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (((!(clojure.string.blank_QMARK_(uri)))) && (((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || ((!((cljs.core.re_matches(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)) == null)))))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__4647__auto__ = [];
var len__4641__auto___13961 = arguments.length;
var i__4642__auto___13962 = (0);
while(true){
if((i__4642__auto___13962 < len__4641__auto___13961)){
args__4647__auto__.push((arguments[i__4642__auto___13962]));

var G__13963 = (i__4642__auto___13962 + (1));
i__4642__auto___13962 = G__13963;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__13943){
var map__13944 = p__13943;
var map__13944__$1 = (((((!((map__13944 == null))))?(((((map__13944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13944):map__13944);
var processable_url_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13944__$1,cljs.core.cst$kw$processable_DASH_url_QMARK_,pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13944__$1,cljs.core.cst$kw$identity_DASH_fn,cljs.core.identity);
var history = pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();
var event_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof pushy !== 'undefined') && (typeof pushy.core !== 'undefined') && (typeof pushy.core.t_pushy$core13946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core13946 = (function (dispatch_fn,match_fn,p__13943,map__13944,processable_url_QMARK_,identity_fn,history,event_keys,meta13947){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__13943 = p__13943;
this.map__13944 = map__13944;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta13947 = meta13947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pushy.core.t_pushy$core13946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (_13948,meta13947__$1){
var self__ = this;
var _13948__$1 = this;
return (new pushy.core.t_pushy$core13946(self__.dispatch_fn,self__.match_fn,self__.p__13943,self__.map__13944,self__.processable_url_QMARK_,self__.identity_fn,self__.history,self__.event_keys,meta13947__$1));
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core13946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (_13948){
var self__ = this;
var _13948__$1 = this;
return self__.meta13947;
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core13946.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL;

pushy.core.t_pushy$core13946.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core13946.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core13946.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core13946.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core13946.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core13946.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.pushy$core$IHistory$stop_BANG_$arity$1(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,(function (){var G__13949 = self__.history;
var G__13950 = goog.history.EventType.NAVIGATE;
var G__13951 = ((function (G__13949,G__13950,this$__$1,history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__5720__auto__ = (function (){var G__13952 = (function (){var G__13953 = e.token;
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__13953) : self__.match_fn.call(null,G__13953));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__13952) : self__.identity_fn.call(null,G__13952));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var match = temp__5720__auto__;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match) : self__.dispatch_fn.call(null,match));
} else {
return null;
}
});})(G__13949,G__13950,this$__$1,history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;
return goog.events.listen(G__13949,G__13950,G__13951);
})());

var temp__5720__auto___13964 = (function (){var G__13954 = (function (){var G__13955 = this$__$1.pushy$core$IHistory$get_token$arity$1(null);
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__13955) : self__.match_fn.call(null,G__13955));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__13954) : self__.identity_fn.call(null,G__13954));
})();
if(cljs.core.truth_(temp__5720__auto___13964)){
var match_13965 = temp__5720__auto___13964;
(self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match_13965) : self__.dispatch_fn.call(null,match_13965));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,pushy.core.on_click(((function (this$__$1,history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__5720__auto__ = pushy.core.recur_href(e.target);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__4036__auto__ = (self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1(uri) : self__.processable_url_QMARK_.call(null,uri));
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not(e.altKey)) && (cljs.core.not(e.ctrlKey)) && (cljs.core.not(e.metaKey)) && (cljs.core.not(e.shiftKey)) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),e.button)));
} else {
return and__4036__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri(uri);
if(cljs.core.truth_((function (){var G__13956 = (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(next_token) : self__.match_fn.call(null,next_token));
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__13956) : self__.identity_fn.call(null,G__13956));
})())){
var temp__5718__auto___13966 = el.title;
if(cljs.core.truth_(temp__5718__auto___13966)){
var title_13967 = temp__5718__auto___13966;
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$3(null,next_token,title_13967);
} else {
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$2(null,next_token);
}

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
));

return null;
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core13946.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__13957_13968 = cljs.core.seq(cljs.core.deref(self__.event_keys));
var chunk__13958_13969 = null;
var count__13959_13970 = (0);
var i__13960_13971 = (0);
while(true){
if((i__13960_13971 < count__13959_13970)){
var key_13972 = chunk__13958_13969.cljs$core$IIndexed$_nth$arity$2(null,i__13960_13971);
goog.events.unlistenByKey(key_13972);


var G__13973 = seq__13957_13968;
var G__13974 = chunk__13958_13969;
var G__13975 = count__13959_13970;
var G__13976 = (i__13960_13971 + (1));
seq__13957_13968 = G__13973;
chunk__13958_13969 = G__13974;
count__13959_13970 = G__13975;
i__13960_13971 = G__13976;
continue;
} else {
var temp__5720__auto___13977 = cljs.core.seq(seq__13957_13968);
if(temp__5720__auto___13977){
var seq__13957_13978__$1 = temp__5720__auto___13977;
if(cljs.core.chunked_seq_QMARK_(seq__13957_13978__$1)){
var c__4461__auto___13979 = cljs.core.chunk_first(seq__13957_13978__$1);
var G__13980 = cljs.core.chunk_rest(seq__13957_13978__$1);
var G__13981 = c__4461__auto___13979;
var G__13982 = cljs.core.count(c__4461__auto___13979);
var G__13983 = (0);
seq__13957_13968 = G__13980;
chunk__13958_13969 = G__13981;
count__13959_13970 = G__13982;
i__13960_13971 = G__13983;
continue;
} else {
var key_13984 = cljs.core.first(seq__13957_13978__$1);
goog.events.unlistenByKey(key_13984);


var G__13985 = cljs.core.next(seq__13957_13978__$1);
var G__13986 = null;
var G__13987 = (0);
var G__13988 = (0);
seq__13957_13968 = G__13985;
chunk__13958_13969 = G__13986;
count__13959_13970 = G__13987;
i__13960_13971 = G__13988;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(self__.event_keys,null);
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core13946.getBasis = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dispatch_DASH_fn,cljs.core.cst$sym$match_DASH_fn,cljs.core.cst$sym$p__13943,cljs.core.cst$sym$map__13944,cljs.core.cst$sym$processable_DASH_url_QMARK_,cljs.core.cst$sym$identity_DASH_fn,cljs.core.cst$sym$history,cljs.core.cst$sym$event_DASH_keys,cljs.core.cst$sym$meta13947], null);
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core13946.cljs$lang$type = true;

pushy.core.t_pushy$core13946.cljs$lang$ctorStr = "pushy.core/t_pushy$core13946";

pushy.core.t_pushy$core13946.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"pushy.core/t_pushy$core13946");
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

/**
 * Positional factory function for pushy.core/t_pushy$core13946.
 */
pushy.core.__GT_t_pushy$core13946 = ((function (history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn){
return (function pushy$core$__GT_t_pushy$core13946(dispatch_fn__$1,match_fn__$1,p__13943__$1,map__13944__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta13947){
return (new pushy.core.t_pushy$core13946(dispatch_fn__$1,match_fn__$1,p__13943__$1,map__13944__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta13947));
});})(history,event_keys,map__13944,map__13944__$1,processable_url_QMARK_,identity_fn))
;

}

return (new pushy.core.t_pushy$core13946(dispatch_fn,match_fn,p__13943,map__13944__$1,processable_url_QMARK_,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
pushy.core.pushy.cljs$lang$applyTo = (function (seq13940){
var G__13941 = cljs.core.first(seq13940);
var seq13940__$1 = cljs.core.next(seq13940);
var G__13942 = cljs.core.first(seq13940__$1);
var seq13940__$2 = cljs.core.next(seq13940__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13941,G__13942,seq13940__$2);
});

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__13990 = arguments.length;
switch (G__13990) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1(window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__13993 = arguments.length;
switch (G__13993) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3(dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(dispatch_fn,match_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$identity_DASH_fn,identity_fn], 0));
pushy.core.start_BANG_(h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;

