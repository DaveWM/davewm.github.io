// Compiled by ClojureScript 1.7.145 {}
goog.provide('pushy.core');
goog.require('cljs.core');
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
return pushy$core$recur_href.call(null,target.parentNode);
} else {
return null;
}
}
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__29244 = h;
G__29244.setUseFragment(false);

G__29244.setPathPrefix("");

G__29244.setEnabled(true);

return G__29244;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str(location.pathname),cljs.core.str(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str(path_prefix),cljs.core.str(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var args29245 = [];
var len__17416__auto___29248 = arguments.length;
var i__17417__auto___29249 = (0);
while(true){
if((i__17417__auto___29249 < len__17416__auto___29248)){
args29245.push((arguments[i__17417__auto___29249]));

var G__29250 = (i__17417__auto___29249 + (1));
i__17417__auto___29249 = G__29250;
continue;
} else {
}
break;
}

var G__29247 = args29245.length;
switch (G__29247) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29245.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;

/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var args29252 = [];
var len__17416__auto___29258 = arguments.length;
var i__17417__auto___29259 = (0);
while(true){
if((i__17417__auto___29259 < len__17416__auto___29258)){
args29252.push((arguments[i__17417__auto___29259]));

var G__29260 = (i__17417__auto___29259 + (1));
i__17417__auto___29259 = G__29260;
continue;
} else {
}
break;
}

var G__29254 = args29252.length;
switch (G__29254) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29252.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$,token);
} else {
var m__17014__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$,token,title);
} else {
var m__17014__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var args29255 = [];
var len__17416__auto___29262 = arguments.length;
var i__17417__auto___29263 = (0);
while(true){
if((i__17417__auto___29263 < len__17416__auto___29262)){
args29255.push((arguments[i__17417__auto___29263]));

var G__29264 = (i__17417__auto___29263 + (1));
i__17417__auto___29263 = G__29264;
continue;
} else {
}
break;
}

var G__29257 = args29255.length;
switch (G__29257) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29255.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$,token);
} else {
var m__17014__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$,token,title);
} else {
var m__17014__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.get_token = (function pushy$core$get_token(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null)))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (pushy.core.get_token[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$);
} else {
var m__17014__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$);
} else {
var m__17014__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$);
} else {
var m__17014__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,uri))) && (((cljs.core.not.call(null,uri.hasScheme())) && (cljs.core.not.call(null,uri.hasDomain()))) || (cljs.core.some_QMARK_.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(location.origin),cljs.core.str(".*$")].join('')),[cljs.core.str(uri)].join('')))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return path;
} else {
return [cljs.core.str(path),cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__17423__auto__ = [];
var len__17416__auto___29279 = arguments.length;
var i__17417__auto___29280 = (0);
while(true){
if((i__17417__auto___29280 < len__17416__auto___29279)){
args__17423__auto__.push((arguments[i__17417__auto___29280]));

var G__29281 = (i__17417__auto___29280 + (1));
i__17417__auto___29280 = G__29281;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((2) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((2)),(0))):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17424__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__29269){
var map__29270 = p__29269;
var map__29270__$1 = ((((!((map__29270 == null)))?((((map__29270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29270):map__29270);
var processable_url_QMARK_ = cljs.core.get.call(null,map__29270__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__29270__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core29272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core29272 = (function (dispatch_fn,match_fn,p__29269,map__29270,processable_url_QMARK_,identity_fn,history,event_keys,meta29273){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__29269 = p__29269;
this.map__29270 = map__29270;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta29273 = meta29273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pushy.core.t_pushy$core29272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (_29274,meta29273__$1){
var self__ = this;
var _29274__$1 = this;
return (new pushy.core.t_pushy$core29272(self__.dispatch_fn,self__.match_fn,self__.p__29269,self__.map__29270,self__.processable_url_QMARK_,self__.identity_fn,self__.history,self__.event_keys,meta29273__$1));
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core29272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (_29274){
var self__ = this;
var _29274__$1 = this;
return self__.meta29273;
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core29272.prototype.pushy$core$IHistory$ = true;

pushy.core.t_pushy$core29272.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core29272.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core29272.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core29272.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core29272.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core29272.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__4425__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
));

var temp__4425__auto___29282 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__4425__auto___29282)){
var match_29283 = temp__4425__auto___29282;
self__.dispatch_fn.call(null,match_29283);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__4425__auto__ = pushy.core.recur_href.call(null,e.target);
if(cljs.core.truth_(temp__4425__auto__)){
var el = temp__4425__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__16346__auto__ = self__.processable_url_QMARK_.call(null,uri);
if(cljs.core.truth_(and__16346__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (cljs.core.not.call(null,cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button));
} else {
return and__16346__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri.call(null,uri);
if(cljs.core.truth_(self__.identity_fn.call(null,self__.match_fn.call(null,next_token)))){
var temp__4423__auto___29284 = el.title;
if(cljs.core.truth_(temp__4423__auto___29284)){
var title_29285 = temp__4423__auto___29284;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_29285);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,next_token);
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
});})(this$__$1,history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
));

return null;
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core29272.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__29275_29286 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__29276_29287 = null;
var count__29277_29288 = (0);
var i__29278_29289 = (0);
while(true){
if((i__29278_29289 < count__29277_29288)){
var key_29290 = cljs.core._nth.call(null,chunk__29276_29287,i__29278_29289);
goog.events.unlistenByKey(key_29290);

var G__29291 = seq__29275_29286;
var G__29292 = chunk__29276_29287;
var G__29293 = count__29277_29288;
var G__29294 = (i__29278_29289 + (1));
seq__29275_29286 = G__29291;
chunk__29276_29287 = G__29292;
count__29277_29288 = G__29293;
i__29278_29289 = G__29294;
continue;
} else {
var temp__4425__auto___29295 = cljs.core.seq.call(null,seq__29275_29286);
if(temp__4425__auto___29295){
var seq__29275_29296__$1 = temp__4425__auto___29295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29275_29296__$1)){
var c__17161__auto___29297 = cljs.core.chunk_first.call(null,seq__29275_29296__$1);
var G__29298 = cljs.core.chunk_rest.call(null,seq__29275_29296__$1);
var G__29299 = c__17161__auto___29297;
var G__29300 = cljs.core.count.call(null,c__17161__auto___29297);
var G__29301 = (0);
seq__29275_29286 = G__29298;
chunk__29276_29287 = G__29299;
count__29277_29288 = G__29300;
i__29278_29289 = G__29301;
continue;
} else {
var key_29302 = cljs.core.first.call(null,seq__29275_29296__$1);
goog.events.unlistenByKey(key_29302);

var G__29303 = cljs.core.next.call(null,seq__29275_29296__$1);
var G__29304 = null;
var G__29305 = (0);
var G__29306 = (0);
seq__29275_29286 = G__29303;
chunk__29276_29287 = G__29304;
count__29277_29288 = G__29305;
i__29278_29289 = G__29306;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core29272.getBasis = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__29269","p__29269",732394714,null),new cljs.core.Symbol(null,"map__29270","map__29270",658657867,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta29273","meta29273",-1376676651,null)], null);
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core29272.cljs$lang$type = true;

pushy.core.t_pushy$core29272.cljs$lang$ctorStr = "pushy.core/t_pushy$core29272";

pushy.core.t_pushy$core29272.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"pushy.core/t_pushy$core29272");
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.__GT_t_pushy$core29272 = ((function (history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn){
return (function pushy$core$__GT_t_pushy$core29272(dispatch_fn__$1,match_fn__$1,p__29269__$1,map__29270__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta29273){
return (new pushy.core.t_pushy$core29272(dispatch_fn__$1,match_fn__$1,p__29269__$1,map__29270__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta29273));
});})(history,event_keys,map__29270,map__29270__$1,processable_url_QMARK_,identity_fn))
;

}

return (new pushy.core.t_pushy$core29272(dispatch_fn,match_fn,p__29269,map__29270__$1,processable_url_QMARK_,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

pushy.core.pushy.cljs$lang$applyTo = (function (seq29266){
var G__29267 = cljs.core.first.call(null,seq29266);
var seq29266__$1 = cljs.core.next.call(null,seq29266);
var G__29268 = cljs.core.first.call(null,seq29266__$1);
var seq29266__$2 = cljs.core.next.call(null,seq29266__$1);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(G__29267,G__29268,seq29266__$2);
});
/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var args29307 = [];
var len__17416__auto___29310 = arguments.length;
var i__17417__auto___29311 = (0);
while(true){
if((i__17417__auto___29311 < len__17416__auto___29310)){
args29307.push((arguments[i__17417__auto___29311]));

var G__29312 = (i__17417__auto___29311 + (1));
i__17417__auto___29311 = G__29312;
continue;
} else {
}
break;
}

var G__29309 = args29307.length;
switch (G__29309) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29307.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;
pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var args29314 = [];
var len__17416__auto___29317 = arguments.length;
var i__17417__auto___29318 = (0);
while(true){
if((i__17417__auto___29318 < len__17416__auto___29317)){
args29314.push((arguments[i__17417__auto___29318]));

var G__29319 = (i__17417__auto___29318 + (1));
i__17417__auto___29318 = G__29319;
continue;
} else {
}
break;
}

var G__29316 = args29314.length;
switch (G__29316) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29314.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map