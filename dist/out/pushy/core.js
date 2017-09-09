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
var G__27190 = h;
G__27190.setUseFragment(false);

G__27190.setPathPrefix("");

G__27190.setEnabled(true);

return G__27190;
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
var args27191 = [];
var len__17416__auto___27194 = arguments.length;
var i__17417__auto___27195 = (0);
while(true){
if((i__17417__auto___27195 < len__17416__auto___27194)){
args27191.push((arguments[i__17417__auto___27195]));

var G__27196 = (i__17417__auto___27195 + (1));
i__17417__auto___27195 = G__27196;
continue;
} else {
}
break;
}

var G__27193 = args27191.length;
switch (G__27193) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27191.length)].join('')));

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
var args27198 = [];
var len__17416__auto___27204 = arguments.length;
var i__17417__auto___27205 = (0);
while(true){
if((i__17417__auto___27205 < len__17416__auto___27204)){
args27198.push((arguments[i__17417__auto___27205]));

var G__27206 = (i__17417__auto___27205 + (1));
i__17417__auto___27205 = G__27206;
continue;
} else {
}
break;
}

var G__27200 = args27198.length;
switch (G__27200) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27198.length)].join('')));

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
var args27201 = [];
var len__17416__auto___27208 = arguments.length;
var i__17417__auto___27209 = (0);
while(true){
if((i__17417__auto___27209 < len__17416__auto___27208)){
args27201.push((arguments[i__17417__auto___27209]));

var G__27210 = (i__17417__auto___27209 + (1));
i__17417__auto___27209 = G__27210;
continue;
} else {
}
break;
}

var G__27203 = args27201.length;
switch (G__27203) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27201.length)].join('')));

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
var len__17416__auto___27225 = arguments.length;
var i__17417__auto___27226 = (0);
while(true){
if((i__17417__auto___27226 < len__17416__auto___27225)){
args__17423__auto__.push((arguments[i__17417__auto___27226]));

var G__27227 = (i__17417__auto___27226 + (1));
i__17417__auto___27226 = G__27227;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((2) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((2)),(0))):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17424__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__27215){
var map__27216 = p__27215;
var map__27216__$1 = ((((!((map__27216 == null)))?((((map__27216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27216):map__27216);
var processable_url_QMARK_ = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__27216__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core27218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core27218 = (function (dispatch_fn,match_fn,p__27215,map__27216,processable_url_QMARK_,identity_fn,history,event_keys,meta27219){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__27215 = p__27215;
this.map__27216 = map__27216;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta27219 = meta27219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pushy.core.t_pushy$core27218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (_27220,meta27219__$1){
var self__ = this;
var _27220__$1 = this;
return (new pushy.core.t_pushy$core27218(self__.dispatch_fn,self__.match_fn,self__.p__27215,self__.map__27216,self__.processable_url_QMARK_,self__.identity_fn,self__.history,self__.event_keys,meta27219__$1));
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core27218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (_27220){
var self__ = this;
var _27220__$1 = this;
return self__.meta27219;
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core27218.prototype.pushy$core$IHistory$ = true;

pushy.core.t_pushy$core27218.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core27218.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core27218.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core27218.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core27218.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core27218.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__4425__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
));

var temp__4425__auto___27228 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__4425__auto___27228)){
var match_27229 = temp__4425__auto___27228;
self__.dispatch_fn.call(null,match_27229);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
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
var temp__4423__auto___27230 = el.title;
if(cljs.core.truth_(temp__4423__auto___27230)){
var title_27231 = temp__4423__auto___27230;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_27231);
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
});})(this$__$1,history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
));

return null;
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core27218.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__27221_27232 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__27222_27233 = null;
var count__27223_27234 = (0);
var i__27224_27235 = (0);
while(true){
if((i__27224_27235 < count__27223_27234)){
var key_27236 = cljs.core._nth.call(null,chunk__27222_27233,i__27224_27235);
goog.events.unlistenByKey(key_27236);

var G__27237 = seq__27221_27232;
var G__27238 = chunk__27222_27233;
var G__27239 = count__27223_27234;
var G__27240 = (i__27224_27235 + (1));
seq__27221_27232 = G__27237;
chunk__27222_27233 = G__27238;
count__27223_27234 = G__27239;
i__27224_27235 = G__27240;
continue;
} else {
var temp__4425__auto___27241 = cljs.core.seq.call(null,seq__27221_27232);
if(temp__4425__auto___27241){
var seq__27221_27242__$1 = temp__4425__auto___27241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27221_27242__$1)){
var c__17161__auto___27243 = cljs.core.chunk_first.call(null,seq__27221_27242__$1);
var G__27244 = cljs.core.chunk_rest.call(null,seq__27221_27242__$1);
var G__27245 = c__17161__auto___27243;
var G__27246 = cljs.core.count.call(null,c__17161__auto___27243);
var G__27247 = (0);
seq__27221_27232 = G__27244;
chunk__27222_27233 = G__27245;
count__27223_27234 = G__27246;
i__27224_27235 = G__27247;
continue;
} else {
var key_27248 = cljs.core.first.call(null,seq__27221_27242__$1);
goog.events.unlistenByKey(key_27248);

var G__27249 = cljs.core.next.call(null,seq__27221_27242__$1);
var G__27250 = null;
var G__27251 = (0);
var G__27252 = (0);
seq__27221_27232 = G__27249;
chunk__27222_27233 = G__27250;
count__27223_27234 = G__27251;
i__27224_27235 = G__27252;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core27218.getBasis = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__27215","p__27215",-752101152,null),new cljs.core.Symbol(null,"map__27216","map__27216",2104280421,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta27219","meta27219",-1490320740,null)], null);
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core27218.cljs$lang$type = true;

pushy.core.t_pushy$core27218.cljs$lang$ctorStr = "pushy.core/t_pushy$core27218";

pushy.core.t_pushy$core27218.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"pushy.core/t_pushy$core27218");
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.__GT_t_pushy$core27218 = ((function (history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn){
return (function pushy$core$__GT_t_pushy$core27218(dispatch_fn__$1,match_fn__$1,p__27215__$1,map__27216__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta27219){
return (new pushy.core.t_pushy$core27218(dispatch_fn__$1,match_fn__$1,p__27215__$1,map__27216__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta27219));
});})(history,event_keys,map__27216,map__27216__$1,processable_url_QMARK_,identity_fn))
;

}

return (new pushy.core.t_pushy$core27218(dispatch_fn,match_fn,p__27215,map__27216__$1,processable_url_QMARK_,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

pushy.core.pushy.cljs$lang$applyTo = (function (seq27212){
var G__27213 = cljs.core.first.call(null,seq27212);
var seq27212__$1 = cljs.core.next.call(null,seq27212);
var G__27214 = cljs.core.first.call(null,seq27212__$1);
var seq27212__$2 = cljs.core.next.call(null,seq27212__$1);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(G__27213,G__27214,seq27212__$2);
});
/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var args27253 = [];
var len__17416__auto___27256 = arguments.length;
var i__17417__auto___27257 = (0);
while(true){
if((i__17417__auto___27257 < len__17416__auto___27256)){
args27253.push((arguments[i__17417__auto___27257]));

var G__27258 = (i__17417__auto___27257 + (1));
i__17417__auto___27257 = G__27258;
continue;
} else {
}
break;
}

var G__27255 = args27253.length;
switch (G__27255) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27253.length)].join('')));

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
var args27260 = [];
var len__17416__auto___27263 = arguments.length;
var i__17417__auto___27264 = (0);
while(true){
if((i__17417__auto___27264 < len__17416__auto___27263)){
args27260.push((arguments[i__17417__auto___27264]));

var G__27265 = (i__17417__auto___27264 + (1));
i__17417__auto___27264 = G__27265;
continue;
} else {
}
break;
}

var G__27262 = args27260.length;
switch (G__27262) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27260.length)].join('')));

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