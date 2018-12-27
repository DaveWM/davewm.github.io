// Compiled by ClojureScript 1.10.439 {}
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
return pushy.core.recur_href.call(null,target.parentNode);
} else {
return null;
}
}
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__24277 = h;
G__24277.setUseFragment(false);

G__24277.setPathPrefix("");

G__24277.setEnabled(true);

return G__24277;
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
var G__24279 = arguments.length;
switch (G__24279) {
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
var G__24282 = arguments.length;
switch (G__24282) {
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
return m__4348__auto__.call(null,this$,token);
} else {
var m__4348__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
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
return m__4348__auto__.call(null,this$,token,title);
} else {
var m__4348__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__24284 = arguments.length;
switch (G__24284) {
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
return m__4348__auto__.call(null,this$,token);
} else {
var m__4348__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
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
return m__4348__auto__.call(null,this$,token,title);
} else {
var m__4348__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
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
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (pushy.core.get_token["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
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
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (pushy.core.start_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
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
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (pushy.core.stop_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (((!(clojure.string.blank_QMARK_.call(null,uri)))) && (((((cljs.core.not.call(null,uri.hasScheme())) && (cljs.core.not.call(null,uri.hasDomain())))) || ((!((cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)) == null)))))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
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
var len__4641__auto___24300 = arguments.length;
var i__4642__auto___24301 = (0);
while(true){
if((i__4642__auto___24301 < len__4641__auto___24300)){
args__4647__auto__.push((arguments[i__4642__auto___24301]));

var G__24302 = (i__4642__auto___24301 + (1));
i__4642__auto___24301 = G__24302;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__24290){
var map__24291 = p__24290;
var map__24291__$1 = (((((!((map__24291 == null))))?(((((map__24291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24291):map__24291);
var processable_url_QMARK_ = cljs.core.get.call(null,map__24291__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__24291__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if((typeof pushy !== 'undefined') && (typeof pushy.core !== 'undefined') && (typeof pushy.core.t_pushy$core24293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core24293 = (function (dispatch_fn,match_fn,p__24290,map__24291,processable_url_QMARK_,identity_fn,history,event_keys,meta24294){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__24290 = p__24290;
this.map__24291 = map__24291;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta24294 = meta24294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pushy.core.t_pushy$core24293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (_24295,meta24294__$1){
var self__ = this;
var _24295__$1 = this;
return (new pushy.core.t_pushy$core24293(self__.dispatch_fn,self__.match_fn,self__.p__24290,self__.map__24291,self__.processable_url_QMARK_,self__.identity_fn,self__.history,self__.event_keys,meta24294__$1));
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (_24295){
var self__ = this;
var _24295__$1 = this;
return self__.meta24294;
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24293.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL;

pushy.core.t_pushy$core24293.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24293.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24293.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24293.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24293.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24293.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__5720__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__5720__auto__)){
var match = temp__5720__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
));

var temp__5720__auto___24303 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__5720__auto___24303)){
var match_24304 = temp__5720__auto___24303;
self__.dispatch_fn.call(null,match_24304);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__5720__auto__ = pushy.core.recur_href.call(null,e.target);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__4036__auto__ = self__.processable_url_QMARK_.call(null,uri);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (cljs.core.not.call(null,cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button)));
} else {
return and__4036__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri.call(null,uri);
if(cljs.core.truth_(self__.identity_fn.call(null,self__.match_fn.call(null,next_token)))){
var temp__5718__auto___24305 = el.title;
if(cljs.core.truth_(temp__5718__auto___24305)){
var title_24306 = temp__5718__auto___24305;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_24306);
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
});})(this$__$1,history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
));

return null;
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24293.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__24296_24307 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__24297_24308 = null;
var count__24298_24309 = (0);
var i__24299_24310 = (0);
while(true){
if((i__24299_24310 < count__24298_24309)){
var key_24311 = cljs.core._nth.call(null,chunk__24297_24308,i__24299_24310);
goog.events.unlistenByKey(key_24311);


var G__24312 = seq__24296_24307;
var G__24313 = chunk__24297_24308;
var G__24314 = count__24298_24309;
var G__24315 = (i__24299_24310 + (1));
seq__24296_24307 = G__24312;
chunk__24297_24308 = G__24313;
count__24298_24309 = G__24314;
i__24299_24310 = G__24315;
continue;
} else {
var temp__5720__auto___24316 = cljs.core.seq.call(null,seq__24296_24307);
if(temp__5720__auto___24316){
var seq__24296_24317__$1 = temp__5720__auto___24316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24296_24317__$1)){
var c__4461__auto___24318 = cljs.core.chunk_first.call(null,seq__24296_24317__$1);
var G__24319 = cljs.core.chunk_rest.call(null,seq__24296_24317__$1);
var G__24320 = c__4461__auto___24318;
var G__24321 = cljs.core.count.call(null,c__4461__auto___24318);
var G__24322 = (0);
seq__24296_24307 = G__24319;
chunk__24297_24308 = G__24320;
count__24298_24309 = G__24321;
i__24299_24310 = G__24322;
continue;
} else {
var key_24323 = cljs.core.first.call(null,seq__24296_24317__$1);
goog.events.unlistenByKey(key_24323);


var G__24324 = cljs.core.next.call(null,seq__24296_24317__$1);
var G__24325 = null;
var G__24326 = (0);
var G__24327 = (0);
seq__24296_24307 = G__24324;
chunk__24297_24308 = G__24325;
count__24298_24309 = G__24326;
i__24299_24310 = G__24327;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24293.getBasis = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__24290","p__24290",-1759927901,null),new cljs.core.Symbol(null,"map__24291","map__24291",1074207922,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta24294","meta24294",784114803,null)], null);
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core24293.cljs$lang$type = true;

pushy.core.t_pushy$core24293.cljs$lang$ctorStr = "pushy.core/t_pushy$core24293";

pushy.core.t_pushy$core24293.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"pushy.core/t_pushy$core24293");
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

/**
 * Positional factory function for pushy.core/t_pushy$core24293.
 */
pushy.core.__GT_t_pushy$core24293 = ((function (history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn){
return (function pushy$core$__GT_t_pushy$core24293(dispatch_fn__$1,match_fn__$1,p__24290__$1,map__24291__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta24294){
return (new pushy.core.t_pushy$core24293(dispatch_fn__$1,match_fn__$1,p__24290__$1,map__24291__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta24294));
});})(history,event_keys,map__24291,map__24291__$1,processable_url_QMARK_,identity_fn))
;

}

return (new pushy.core.t_pushy$core24293(dispatch_fn,match_fn,p__24290,map__24291__$1,processable_url_QMARK_,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
pushy.core.pushy.cljs$lang$applyTo = (function (seq24287){
var G__24288 = cljs.core.first.call(null,seq24287);
var seq24287__$1 = cljs.core.next.call(null,seq24287);
var G__24289 = cljs.core.first.call(null,seq24287__$1);
var seq24287__$2 = cljs.core.next.call(null,seq24287__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24288,G__24289,seq24287__$2);
});

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__24329 = arguments.length;
switch (G__24329) {
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
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__24332 = arguments.length;
switch (G__24332) {
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
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1545934926560
