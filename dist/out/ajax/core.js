// Compiled by ClojureScript 1.7.145 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.core.AjaxImpl = function(){};

/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7 == null)))){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$,uri,method,body,headers,handler,opts);
} else {
var m__17014__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$,uri,method,body,headers,handler,opts);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.core.AjaxRequest = function(){};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxRequest$_abort$arity$1 == null)))){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (ajax.core._abort[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$);
} else {
var m__17014__auto____$1 = (ajax.core._abort["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});


/**
 * A marker interface for types that can be directly sent to XhrIo.
 * @interface
 */
ajax.core.DirectlySubmittable = function(){};


/**
 * An abstraction for an ajax response.
 * @interface
 */
ajax.core.AjaxResponse = function(){};

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.core._status = (function ajax$core$_status(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_status$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (ajax.core._status[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$);
} else {
var m__17014__auto____$1 = (ajax.core._status["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.core._status_text = (function ajax$core$_status_text(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_status_text$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (ajax.core._status_text[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$);
} else {
var m__17014__auto____$1 = (ajax.core._status_text["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
}
});

/**
 * Returns the response body as a string or as type specified in response-format
 *  such as a blob or arraybuffer.
 */
ajax.core._body = (function ajax$core$_body(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_body$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (ajax.core._body[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$);
} else {
var m__17014__auto____$1 = (ajax.core._body["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.core._get_response_header = (function ajax$core$_get_response_header(this$,header){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_get_response_header$arity$2 == null)))){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (ajax.core._get_response_header[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$,header);
} else {
var m__17014__auto____$1 = (ajax.core._get_response_header["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$,header);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
}
});

/**
 * Was the response aborted.
 */
ajax.core._was_aborted = (function ajax$core$_was_aborted(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_was_aborted$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__17013__auto__ = (((this$ == null))?null:this$);
var m__17014__auto__ = (ajax.core._was_aborted[goog.typeOf(x__17013__auto__)]);
if(!((m__17014__auto__ == null))){
return m__17014__auto__.call(null,this$);
} else {
var m__17014__auto____$1 = (ajax.core._was_aborted["_"]);
if(!((m__17014__auto____$1 == null))){
return m__17014__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function ajax$core$submittable_QMARK_(params){
var or__16358__auto__ = ((!((params == null)))?(((false) || (params.ajax$core$DirectlySubmittable$))?true:(((!params.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params):false)):cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params));
if(or__16358__auto__){
return or__16358__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__23456){
var map__23457 = p__23456;
var map__23457__$1 = ((((!((map__23457 == null)))?((((map__23457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23457):map__23457);
var timeout = cljs.core.get.call(null,map__23457__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23457__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var this$__$1 = this;
var G__23459 = this$__$1;
goog.events.listen(G__23459,goog.net.EventType.COMPLETE,((function (G__23459,this$__$1,map__23457,map__23457__$1,timeout,with_credentials){
return (function (p1__23455_SHARP_){
return handler.call(null,p1__23455_SHARP_.target);
});})(G__23459,this$__$1,map__23457,map__23457__$1,timeout,with_credentials))
);

G__23459.setTimeoutInterval(timeout);

G__23459.setWithCredentials(with_credentials);

G__23459.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__23459;
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
ajax.core.ready_state = (function ajax$core$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__23461){
var map__23462 = p__23461;
var map__23462__$1 = ((((!((map__23462 == null)))?((((map__23462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23462):map__23462);
var timeout = cljs.core.get.call(null,map__23462__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23462__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23462__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23462,map__23462__$1,timeout,with_credentials,response_format){
return (function (p1__23460_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.core.ready_state.call(null,p1__23460_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23462,map__23462__$1,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___23470 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___23470)){
var response_type_23471 = temp__4425__auto___23470;
this$__$1.responseType = cljs.core.name.call(null,response_type_23471);
} else {
}

var seq__23464_23472 = cljs.core.seq.call(null,headers);
var chunk__23465_23473 = null;
var count__23466_23474 = (0);
var i__23467_23475 = (0);
while(true){
if((i__23467_23475 < count__23466_23474)){
var vec__23468_23476 = cljs.core._nth.call(null,chunk__23465_23473,i__23467_23475);
var k_23477 = cljs.core.nth.call(null,vec__23468_23476,(0),null);
var v_23478 = cljs.core.nth.call(null,vec__23468_23476,(1),null);
this$__$1.setRequestHeader(k_23477,v_23478);

var G__23479 = seq__23464_23472;
var G__23480 = chunk__23465_23473;
var G__23481 = count__23466_23474;
var G__23482 = (i__23467_23475 + (1));
seq__23464_23472 = G__23479;
chunk__23465_23473 = G__23480;
count__23466_23474 = G__23481;
i__23467_23475 = G__23482;
continue;
} else {
var temp__4425__auto___23483 = cljs.core.seq.call(null,seq__23464_23472);
if(temp__4425__auto___23483){
var seq__23464_23484__$1 = temp__4425__auto___23483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23464_23484__$1)){
var c__17161__auto___23485 = cljs.core.chunk_first.call(null,seq__23464_23484__$1);
var G__23486 = cljs.core.chunk_rest.call(null,seq__23464_23484__$1);
var G__23487 = c__17161__auto___23485;
var G__23488 = cljs.core.count.call(null,c__17161__auto___23485);
var G__23489 = (0);
seq__23464_23472 = G__23486;
chunk__23465_23473 = G__23487;
count__23466_23474 = G__23488;
i__23467_23475 = G__23489;
continue;
} else {
var vec__23469_23490 = cljs.core.first.call(null,seq__23464_23484__$1);
var k_23491 = cljs.core.nth.call(null,vec__23469_23490,(0),null);
var v_23492 = cljs.core.nth.call(null,vec__23469_23490,(1),null);
this$__$1.setRequestHeader(k_23491,v_23492);

var G__23493 = cljs.core.next.call(null,seq__23464_23484__$1);
var G__23494 = null;
var G__23495 = (0);
var G__23496 = (0);
seq__23464_23472 = G__23493;
chunk__23465_23473 = G__23494;
count__23466_23474 = G__23495;
i__23467_23475 = G__23496;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16358__auto__ = body;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__23497){
var map__23498 = p__23497;
var map__23498__$1 = ((((!((map__23498 == null)))?((((map__23498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23498):map__23498);
var id = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var priority = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string.call(null,ajax.core._body.call(null,xhrio));
});
ajax.core.edn_response_format = (function ajax$core$edn_response_format(var_args){
var args23500 = [];
var len__17416__auto___23503 = arguments.length;
var i__17417__auto___23504 = (0);
while(true){
if((i__17417__auto___23504 < len__17416__auto___23503)){
args23500.push((arguments[i__17417__auto___23504]));

var G__23505 = (i__17417__auto___23504 + (1));
i__17417__auto___23504 = G__23505;
continue;
} else {
}
break;
}

var G__23502 = args23500.length;
switch (G__23502) {
case 0:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23500.length)].join('')));

}
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.edn_response_format.call(null);
});

ajax.core.edn_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.transit_write = (function ajax$core$transit_write(var_args){
var args23507 = [];
var len__17416__auto___23510 = arguments.length;
var i__17417__auto___23511 = (0);
while(true){
if((i__17417__auto___23511 < len__17416__auto___23510)){
args23507.push((arguments[i__17417__auto___23511]));

var G__23512 = (i__17417__auto___23511 + (1));
i__17417__auto___23511 = G__23512;
continue;
} else {
}
break;
}

var G__23509 = args23507.length;
switch (G__23509) {
case 2:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23507.length)].join('')));

}
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2 = (function (writer,params){
return cognitect.transit.write.call(null,writer,params);
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return (function (params){
return cognitect.transit.write.call(null,writer,params);
});
});

ajax.core.transit_write.cljs$lang$maxFixedArity = 2;
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args23514 = [];
var len__17416__auto___23520 = arguments.length;
var i__17417__auto___23521 = (0);
while(true){
if((i__17417__auto___23521 < len__17416__auto___23520)){
args23514.push((arguments[i__17417__auto___23521]));

var G__23522 = (i__17417__auto___23521 + (1));
i__17417__auto___23521 = G__23522;
continue;
} else {
}
break;
}

var G__23516 = args23514.length;
switch (G__23516) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23514.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__23517){
var map__23518 = p__23517;
var map__23518__$1 = ((((!((map__23518 == null)))?((((map__23518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23518):map__23518);
var opts = map__23518__$1;
var type = cljs.core.get.call(null,map__23518__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var writer = cljs.core.get.call(null,map__23518__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
var writer__$1 = (function (){var or__16358__auto__ = writer;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cognitect.transit.writer.call(null,(function (){var or__16358__auto____$1 = type;
if(cljs.core.truth_(or__16358__auto____$1)){
return or__16358__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write.call(null,writer__$1),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read = (function ajax$core$transit_read(var_args){
var args23524 = [];
var len__17416__auto___23527 = arguments.length;
var i__17417__auto___23528 = (0);
while(true){
if((i__17417__auto___23528 < len__17416__auto___23527)){
args23524.push((arguments[i__17417__auto___23528]));

var G__23529 = (i__17417__auto___23528 + (1));
i__17417__auto___23528 = G__23529;
continue;
} else {
}
break;
}

var G__23526 = args23524.length;
switch (G__23526) {
case 3:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23524.length)].join('')));

}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3 = (function (reader,raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$lang$maxFixedArity = 3;
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args23531 = [];
var len__17416__auto___23537 = arguments.length;
var i__17417__auto___23538 = (0);
while(true){
if((i__17417__auto___23538 < len__17416__auto___23537)){
args23531.push((arguments[i__17417__auto___23538]));

var G__23539 = (i__17417__auto___23538 + (1));
i__17417__auto___23538 = G__23539;
continue;
} else {
}
break;
}

var G__23533 = args23531.length;
switch (G__23533) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23531.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__23534){
var map__23535 = p__23534;
var map__23535__$1 = ((((!((map__23535 == null)))?((((map__23535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23535):map__23535);
var opts = map__23535__$1;
var type = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var reader = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var raw = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var reader__$1 = (function (){var or__16358__auto__ = reader;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cognitect.transit.reader.call(null,(function (){var or__16358__auto____$1 = type;
if(cljs.core.truth_(or__16358__auto____$1)){
return or__16358__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read.call(null,reader__$1,raw),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args23541 = [];
var len__17416__auto___23544 = arguments.length;
var i__17417__auto___23545 = (0);
while(true){
if((i__17417__auto___23545 < len__17416__auto___23544)){
args23541.push((arguments[i__17417__auto___23545]));

var G__23546 = (i__17417__auto___23545 + (1));
i__17417__auto___23545 = G__23546;
continue;
} else {
}
break;
}

var G__23543 = args23541.length;
switch (G__23543) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23541.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args23548 = [];
var len__17416__auto___23551 = arguments.length;
var i__17417__auto___23552 = (0);
while(true){
if((i__17417__auto___23552 < len__17416__auto___23551)){
args23548.push((arguments[i__17417__auto___23552]));

var G__23553 = (i__17417__auto___23552 + (1));
i__17417__auto___23552 = G__23553;
continue;
} else {
}
break;
}

var G__23550 = args23548.length;
switch (G__23550) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23548.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__16346__auto__ = prefix;
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16346__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__16346__auto__ = prefix;
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16346__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__16346__auto__ = prefix;
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16346__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__16346__auto__ = prefix;
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16346__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args23555 = [];
var len__17416__auto___23561 = arguments.length;
var i__17417__auto___23562 = (0);
while(true){
if((i__17417__auto___23562 < len__17416__auto___23561)){
args23555.push((arguments[i__17417__auto___23562]));

var G__23563 = (i__17417__auto___23562 + (1));
i__17417__auto___23562 = G__23563;
continue;
} else {
}
break;
}

var G__23557 = args23555.length;
switch (G__23557) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23555.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__23558){
var map__23559 = p__23558;
var map__23559__$1 = ((((!((map__23559 == null)))?((((map__23559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23559):map__23559);
var prefix = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args23565 = [];
var len__17416__auto___23568 = arguments.length;
var i__17417__auto___23569 = (0);
while(true){
if((i__17417__auto___23569 < len__17416__auto___23568)){
args23565.push((arguments[i__17417__auto___23569]));

var G__23570 = (i__17417__auto___23569 + (1));
i__17417__auto___23569 = G__23570;
continue;
} else {
}
break;
}

var G__23567 = args23565.length;
switch (G__23567) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23565.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.accept_entry = (function ajax$core$accept_entry(var_args){
var args23572 = [];
var len__17416__auto___23575 = arguments.length;
var i__17417__auto___23576 = (0);
while(true){
if((i__17417__auto___23576 < len__17416__auto___23575)){
args23572.push((arguments[i__17417__auto___23576]));

var G__23577 = (i__17417__auto___23576 + (1));
i__17417__auto___23576 = G__23577;
continue;
} else {
}
break;
}

var G__23574 = args23572.length;
switch (G__23574) {
case 2:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23572.length)].join('')));

}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
var or__16358__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return "*/*";
}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
var or__16358__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return "*/*";
}
});
});

ajax.core.accept_entry.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args23579 = [];
var len__17416__auto___23582 = arguments.length;
var i__17417__auto___23583 = (0);
while(true){
if((i__17417__auto___23583 < len__17416__auto___23582)){
args23579.push((arguments[i__17417__auto___23583]));

var G__23584 = (i__17417__auto___23583 + (1));
i__17417__auto___23583 = G__23584;
continue;
} else {
}
break;
}

var G__23581 = args23579.length;
switch (G__23581) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23579.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__23586){
var map__23589 = p__23586;
var map__23589__$1 = ((((!((map__23589 == null)))?((((map__23589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23589):map__23589);
var opts = map__23589__$1;
var response_format = cljs.core.get.call(null,map__23589__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,(function (){var or__16358__auto__ = ajax.core._get_response_header.call(null,xhrio,"Content-Type");
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.call(null,opts,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args23591 = [];
var len__17416__auto___23594 = arguments.length;
var i__17417__auto___23595 = (0);
while(true){
if((i__17417__auto___23595 < len__17416__auto___23594)){
args23591.push((arguments[i__17417__auto___23595]));

var G__23596 = (i__17417__auto___23595 + (1));
i__17417__auto___23595 = G__23596;
continue;
} else {
}
break;
}

var G__23593 = args23591.length;
switch (G__23593) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23591.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (opts,xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__23598){
var map__23601 = p__23598;
var map__23601__$1 = ((((!((map__23601 == null)))?((((map__23601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23601):map__23601);
var opts = map__23601__$1;
var response_format = cljs.core.get.call(null,map__23601__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,ajax.core.accept_entry.call(null,opts),response_format));
} else {
return ajax.core.accept_entry.call(null,opts,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args23603 = [];
var len__17416__auto___23606 = arguments.length;
var i__17417__auto___23607 = (0);
while(true){
if((i__17417__auto___23607 < len__17416__auto___23606)){
args23603.push((arguments[i__17417__auto___23607]));

var G__23608 = (i__17417__auto___23607 + (1));
i__17417__auto___23607 = G__23608;
continue;
} else {
}
break;
}

var G__23605 = args23603.length;
switch (G__23605) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23603.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null);
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__23610){
var map__23613 = p__23610;
var map__23613__$1 = ((((!((map__23613 == null)))?((((map__23613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23613):map__23613);
var opts = map__23613__$1;
var response_format = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__23615,xhrio){
var map__23618 = p__23615;
var map__23618__$1 = ((((!((map__23618 == null)))?((((map__23618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23618):map__23618);
var description = cljs.core.get.call(null,map__23618__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.core._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23624 = arguments.length;
var i__17417__auto___23625 = (0);
while(true){
if((i__17417__auto___23625 < len__17416__auto___23624)){
args__17423__auto__.push((arguments[i__17417__auto___23625]));

var G__23626 = (i__17417__auto___23625 + (1));
i__17417__auto___23625 = G__23626;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((3) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17424__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq23620){
var G__23621 = cljs.core.first.call(null,seq23620);
var seq23620__$1 = cljs.core.next.call(null,seq23620);
var G__23622 = cljs.core.first.call(null,seq23620__$1);
var seq23620__$2 = cljs.core.next.call(null,seq23620__$1);
var G__23623 = cljs.core.first.call(null,seq23620__$2);
var seq23620__$3 = cljs.core.next.call(null,seq23620__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__23621,G__23622,G__23623,seq23620__$3);
});
ajax.core.interpret_response = (function ajax$core$interpret_response(p__23627,xhrio){
var map__23633 = p__23627;
var map__23633__$1 = ((((!((map__23633 == null)))?((((map__23633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23633):map__23633);
var format = map__23633__$1;
var read = cljs.core.get.call(null,map__23633__$1,new cljs.core.Keyword(null,"read","read",1140058661));
try{var status = ajax.core._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__23636 = status;
switch (G__23636) {
case (-1):
if(cljs.core.truth_(ajax.core._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e23637){if((e23637 instanceof Object)){
var e = e23637;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format,xhrio)], null);
} else {
throw e23637;

}
}
}
}catch (e23635){if((e23635 instanceof Object)){
var e = e23635;
return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e23635;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(p__23639,p__23640){
var map__23647 = p__23639;
var map__23647__$1 = ((((!((map__23647 == null)))?((((map__23647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23647):map__23647);
var uri = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var map__23648 = p__23640;
var map__23648__$1 = ((((!((map__23648 == null)))?((((map__23648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23648):map__23648);
var content_type = cljs.core.get.call(null,map__23648__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__16358__auto__ = headers;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core._EQ_.call(null,ajax.core.normalize_method.call(null,method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers__$1], null);
} else {
var map__23651 = ajax.core.get_request_format.call(null,format);
var map__23651__$1 = ((((!((map__23651 == null)))?((((map__23651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23651):map__23651);
var write = cljs.core.get.call(null,map__23651__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type__$1 = cljs.core.get.call(null,map__23651__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?write.call(null,params):(cljs.core.truth_(ajax.core.submittable_QMARK_.call(null,params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",[cljs.core.str(content_type__$1),cljs.core.str("; charset=utf-8")].join('')], null):null);
var headers__$2 = cljs.core.merge.call(null,headers__$1,content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args23653 = [];
var len__17416__auto___23656 = arguments.length;
var i__17417__auto___23657 = (0);
while(true){
if((i__17417__auto___23657 < len__17416__auto___23656)){
args23653.push((arguments[i__17417__auto___23657]));

var G__23658 = (i__17417__auto___23657 + (1));
i__17417__auto___23657 = G__23658;
continue;
} else {
}
break;
}

var G__23655 = args23653.length;
switch (G__23655) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23653.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__23660){
var map__23663 = p__23660;
var map__23663__$1 = ((((!((map__23663 == null)))?((((map__23663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23663):map__23663);
var handler = cljs.core.get.call(null,map__23663__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__23665){
var map__23669 = p__23665;
var map__23669__$1 = ((((!((map__23669 == null)))?((((map__23669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23669):map__23669);
var opts = map__23669__$1;
var method = cljs.core.get.call(null,map__23669__$1,new cljs.core.Keyword(null,"method","method",55703592));
var api = cljs.core.get.call(null,map__23669__$1,new cljs.core.Keyword(null,"api","api",-899839580));
var response_format = ajax.core.get_response_format.call(null,opts);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__23671 = ajax.core.process_inputs.call(null,opts,response_format);
var uri = cljs.core.nth.call(null,vec__23671,(0),null);
var body = cljs.core.nth.call(null,vec__23671,(1),null);
var headers = cljs.core.nth.call(null,vec__23671,(2),null);
var handler = ajax.core.base_handler.call(null,response_format,opts);
var api__$1 = (function (){var or__16358__auto__ = api;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request.call(null,api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__23673 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__23673) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function ajax$core$keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_2.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__23676 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__23676) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__23678_SHARP_){
return ajax.core.keyword_response_format_2.call(null,p1__23678_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args23679 = [];
var len__17416__auto___23692 = arguments.length;
var i__17417__auto___23693 = (0);
while(true){
if((i__17417__auto___23693 < len__17416__auto___23692)){
args23679.push((arguments[i__17417__auto___23693]));

var G__23694 = (i__17417__auto___23693 + (1));
i__17417__auto___23693 = G__23694;
continue;
} else {
}
break;
}

var G__23681 = args23679.length;
switch (G__23681) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23679.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__23682,p__23683){
var map__23684 = p__23682;
var map__23684__$1 = ((((!((map__23684 == null)))?((((map__23684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23684):map__23684);
var handler = cljs.core.get.call(null,map__23684__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__23684__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__23684__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__23685 = p__23683;
var ok = cljs.core.nth.call(null,vec__23685,(0),null);
var result = cljs.core.nth.call(null,vec__23685,(1),null);
var temp__4423__auto___23696 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___23696)){
var h_23697 = temp__4423__auto___23696;
h_23697.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__23687){
var map__23688 = p__23687;
var map__23688__$1 = ((((!((map__23688 == null)))?((((map__23688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23688):map__23688);
var handler = cljs.core.get.call(null,map__23688__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__23688__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__23688__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__23688,map__23688__$1,handler,error_handler,finally$){
return (function (p__23690){
var vec__23691 = p__23690;
var ok = cljs.core.nth.call(null,vec__23691,(0),null);
var result = cljs.core.nth.call(null,vec__23691,(1),null);
var temp__4423__auto___23698 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___23698)){
var h_23699 = temp__4423__auto___23698;
h_23699.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__23688,map__23688__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__23700){
var map__23703 = p__23700;
var map__23703__$1 = ((((!((map__23703 == null)))?((((map__23703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23703):map__23703);
var opts = map__23703__$1;
var method = cljs.core.get.call(null,map__23703__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__23703__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__23703__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__23703__$1,new cljs.core.Keyword(null,"params","params",710516235));

var needs_format = cljs.core.not.call(null,(function (){var or__16358__auto__ = ajax.core.submittable_QMARK_.call(null,params);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return cljs.core._EQ_.call(null,method,"GET");
}
})());
var rf = (cljs.core.truth_((function (){var or__16358__auto__ = format;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23707 = arguments.length;
var i__17417__auto___23708 = (0);
while(true){
if((i__17417__auto___23708 < len__17416__auto___23707)){
args__17423__auto__.push((arguments[i__17417__auto___23708]));

var G__23709 = (i__17417__auto___23708 + (1));
i__17417__auto___23708 = G__23709;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20868__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__20868__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20868__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq23705){
var G__23706 = cljs.core.first.call(null,seq23705);
var seq23705__$1 = cljs.core.next.call(null,seq23705);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__23706,seq23705__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23712 = arguments.length;
var i__17417__auto___23713 = (0);
while(true){
if((i__17417__auto___23713 < len__17416__auto___23712)){
args__17423__auto__.push((arguments[i__17417__auto___23713]));

var G__23714 = (i__17417__auto___23713 + (1));
i__17417__auto___23713 = G__23714;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20868__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__20868__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20868__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq23710){
var G__23711 = cljs.core.first.call(null,seq23710);
var seq23710__$1 = cljs.core.next.call(null,seq23710);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__23711,seq23710__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23717 = arguments.length;
var i__17417__auto___23718 = (0);
while(true){
if((i__17417__auto___23718 < len__17416__auto___23717)){
args__17423__auto__.push((arguments[i__17417__auto___23718]));

var G__23719 = (i__17417__auto___23718 + (1));
i__17417__auto___23718 = G__23719;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20868__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__20868__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20868__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq23715){
var G__23716 = cljs.core.first.call(null,seq23715);
var seq23715__$1 = cljs.core.next.call(null,seq23715);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__23716,seq23715__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23722 = arguments.length;
var i__17417__auto___23723 = (0);
while(true){
if((i__17417__auto___23723 < len__17416__auto___23722)){
args__17423__auto__.push((arguments[i__17417__auto___23723]));

var G__23724 = (i__17417__auto___23723 + (1));
i__17417__auto___23723 = G__23724;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20868__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__20868__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20868__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq23720){
var G__23721 = cljs.core.first.call(null,seq23720);
var seq23720__$1 = cljs.core.next.call(null,seq23720);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__23721,seq23720__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23727 = arguments.length;
var i__17417__auto___23728 = (0);
while(true){
if((i__17417__auto___23728 < len__17416__auto___23727)){
args__17423__auto__.push((arguments[i__17417__auto___23728]));

var G__23729 = (i__17417__auto___23728 + (1));
i__17417__auto___23728 = G__23729;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20868__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__20868__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20868__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq23725){
var G__23726 = cljs.core.first.call(null,seq23725);
var seq23725__$1 = cljs.core.next.call(null,seq23725);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__23726,seq23725__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23732 = arguments.length;
var i__17417__auto___23733 = (0);
while(true){
if((i__17417__auto___23733 < len__17416__auto___23732)){
args__17423__auto__.push((arguments[i__17417__auto___23733]));

var G__23734 = (i__17417__auto___23733 + (1));
i__17417__auto___23733 = G__23734;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20868__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__20868__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20868__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq23730){
var G__23731 = cljs.core.first.call(null,seq23730);
var seq23730__$1 = cljs.core.next.call(null,seq23730);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__23731,seq23730__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23737 = arguments.length;
var i__17417__auto___23738 = (0);
while(true){
if((i__17417__auto___23738 < len__17416__auto___23737)){
args__17423__auto__.push((arguments[i__17417__auto___23738]));

var G__23739 = (i__17417__auto___23738 + (1));
i__17417__auto___23738 = G__23739;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20868__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__20868__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20868__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq23735){
var G__23736 = cljs.core.first.call(null,seq23735);
var seq23735__$1 = cljs.core.next.call(null,seq23735);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__23736,seq23735__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23742 = arguments.length;
var i__17417__auto___23743 = (0);
while(true){
if((i__17417__auto___23743 < len__17416__auto___23742)){
args__17423__auto__.push((arguments[i__17417__auto___23743]));

var G__23744 = (i__17417__auto___23743 + (1));
i__17417__auto___23743 = G__23744;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((1) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17424__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20868__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__20868__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20868__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq23740){
var G__23741 = cljs.core.first.call(null,seq23740);
var seq23740__$1 = cljs.core.next.call(null,seq23740);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__23741,seq23740__$1);
});

//# sourceMappingURL=core.js.map