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
var G__21799 = h;
G__21799.setUseFragment(false);

G__21799.setPathPrefix("");

G__21799.setEnabled(true);

return G__21799;
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
var args21800 = [];
var len__17416__auto___21803 = arguments.length;
var i__17417__auto___21804 = (0);
while(true){
if((i__17417__auto___21804 < len__17416__auto___21803)){
args21800.push((arguments[i__17417__auto___21804]));

var G__21805 = (i__17417__auto___21804 + (1));
i__17417__auto___21804 = G__21805;
continue;
} else {
}
break;
}

var G__21802 = args21800.length;
switch (G__21802) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21800.length)].join('')));

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
var args21807 = [];
var len__17416__auto___21813 = arguments.length;
var i__17417__auto___21814 = (0);
while(true){
if((i__17417__auto___21814 < len__17416__auto___21813)){
args21807.push((arguments[i__17417__auto___21814]));

var G__21815 = (i__17417__auto___21814 + (1));
i__17417__auto___21814 = G__21815;
continue;
} else {
}
break;
}

var G__21809 = args21807.length;
switch (G__21809) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21807.length)].join('')));

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
var args21810 = [];
var len__17416__auto___21817 = arguments.length;
var i__17417__auto___21818 = (0);
while(true){
if((i__17417__auto___21818 < len__17416__auto___21817)){
args21810.push((arguments[i__17417__auto___21818]));

var G__21819 = (i__17417__auto___21818 + (1));
i__17417__auto___21818 = G__21819;
continue;
} else {
}
break;
}

var G__21812 = args21810.length;
switch (G__21812) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21810.length)].join('')));

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
var len__17416__auto___21834 = arguments.length;
var i__17417__auto___21835 = (0);
while(true){
if((i__17417__auto___21835 < len__17416__auto___21834)){
args__17423__auto__.push((arguments[i__17417__auto___21835]));

var G__21836 = (i__17417__auto___21835 + (1));
i__17417__auto___21835 = G__21836;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((2) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((2)),(0))):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17424__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__21824){
var map__21825 = p__21824;
var map__21825__$1 = ((((!((map__21825 == null)))?((((map__21825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21825):map__21825);
var processable_url_QMARK_ = cljs.core.get.call(null,map__21825__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__21825__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core21827 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core21827 = (function (dispatch_fn,match_fn,p__21824,map__21825,processable_url_QMARK_,identity_fn,history,event_keys,meta21828){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__21824 = p__21824;
this.map__21825 = map__21825;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta21828 = meta21828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pushy.core.t_pushy$core21827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (_21829,meta21828__$1){
var self__ = this;
var _21829__$1 = this;
return (new pushy.core.t_pushy$core21827(self__.dispatch_fn,self__.match_fn,self__.p__21824,self__.map__21825,self__.processable_url_QMARK_,self__.identity_fn,self__.history,self__.event_keys,meta21828__$1));
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core21827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (_21829){
var self__ = this;
var _21829__$1 = this;
return self__.meta21828;
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core21827.prototype.pushy$core$IHistory$ = true;

pushy.core.t_pushy$core21827.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core21827.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core21827.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core21827.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core21827.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core21827.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__4425__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
));

var temp__4425__auto___21837 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__4425__auto___21837)){
var match_21838 = temp__4425__auto___21837;
self__.dispatch_fn.call(null,match_21838);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
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
var temp__4423__auto___21839 = el.title;
if(cljs.core.truth_(temp__4423__auto___21839)){
var title_21840 = temp__4423__auto___21839;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_21840);
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
});})(this$__$1,history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
));

return null;
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core21827.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__21830_21841 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__21831_21842 = null;
var count__21832_21843 = (0);
var i__21833_21844 = (0);
while(true){
if((i__21833_21844 < count__21832_21843)){
var key_21845 = cljs.core._nth.call(null,chunk__21831_21842,i__21833_21844);
goog.events.unlistenByKey(key_21845);

var G__21846 = seq__21830_21841;
var G__21847 = chunk__21831_21842;
var G__21848 = count__21832_21843;
var G__21849 = (i__21833_21844 + (1));
seq__21830_21841 = G__21846;
chunk__21831_21842 = G__21847;
count__21832_21843 = G__21848;
i__21833_21844 = G__21849;
continue;
} else {
var temp__4425__auto___21850 = cljs.core.seq.call(null,seq__21830_21841);
if(temp__4425__auto___21850){
var seq__21830_21851__$1 = temp__4425__auto___21850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21830_21851__$1)){
var c__17161__auto___21852 = cljs.core.chunk_first.call(null,seq__21830_21851__$1);
var G__21853 = cljs.core.chunk_rest.call(null,seq__21830_21851__$1);
var G__21854 = c__17161__auto___21852;
var G__21855 = cljs.core.count.call(null,c__17161__auto___21852);
var G__21856 = (0);
seq__21830_21841 = G__21853;
chunk__21831_21842 = G__21854;
count__21832_21843 = G__21855;
i__21833_21844 = G__21856;
continue;
} else {
var key_21857 = cljs.core.first.call(null,seq__21830_21851__$1);
goog.events.unlistenByKey(key_21857);

var G__21858 = cljs.core.next.call(null,seq__21830_21851__$1);
var G__21859 = null;
var G__21860 = (0);
var G__21861 = (0);
seq__21830_21841 = G__21858;
chunk__21831_21842 = G__21859;
count__21832_21843 = G__21860;
i__21833_21844 = G__21861;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core21827.getBasis = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__21824","p__21824",1534387614,null),new cljs.core.Symbol(null,"map__21825","map__21825",646718381,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta21828","meta21828",-1705965499,null)], null);
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core21827.cljs$lang$type = true;

pushy.core.t_pushy$core21827.cljs$lang$ctorStr = "pushy.core/t_pushy$core21827";

pushy.core.t_pushy$core21827.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function (this__16956__auto__,writer__16957__auto__,opt__16958__auto__){
return cljs.core._write.call(null,writer__16957__auto__,"pushy.core/t_pushy$core21827");
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.__GT_t_pushy$core21827 = ((function (history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn){
return (function pushy$core$__GT_t_pushy$core21827(dispatch_fn__$1,match_fn__$1,p__21824__$1,map__21825__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta21828){
return (new pushy.core.t_pushy$core21827(dispatch_fn__$1,match_fn__$1,p__21824__$1,map__21825__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta21828));
});})(history,event_keys,map__21825,map__21825__$1,processable_url_QMARK_,identity_fn))
;

}

return (new pushy.core.t_pushy$core21827(dispatch_fn,match_fn,p__21824,map__21825__$1,processable_url_QMARK_,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

pushy.core.pushy.cljs$lang$applyTo = (function (seq21821){
var G__21822 = cljs.core.first.call(null,seq21821);
var seq21821__$1 = cljs.core.next.call(null,seq21821);
var G__21823 = cljs.core.first.call(null,seq21821__$1);
var seq21821__$2 = cljs.core.next.call(null,seq21821__$1);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(G__21822,G__21823,seq21821__$2);
});
/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var args21862 = [];
var len__17416__auto___21865 = arguments.length;
var i__17417__auto___21866 = (0);
while(true){
if((i__17417__auto___21866 < len__17416__auto___21865)){
args21862.push((arguments[i__17417__auto___21866]));

var G__21867 = (i__17417__auto___21866 + (1));
i__17417__auto___21866 = G__21867;
continue;
} else {
}
break;
}

var G__21864 = args21862.length;
switch (G__21864) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21862.length)].join('')));

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
var args21869 = [];
var len__17416__auto___21872 = arguments.length;
var i__17417__auto___21873 = (0);
while(true){
if((i__17417__auto___21873 < len__17416__auto___21872)){
args21869.push((arguments[i__17417__auto___21873]));

var G__21874 = (i__17417__auto___21873 + (1));
i__17417__auto___21873 = G__21874;
continue;
} else {
}
break;
}

var G__21871 = args21869.length;
switch (G__21871) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21869.length)].join('')));

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