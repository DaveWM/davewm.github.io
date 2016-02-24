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
var x__16999__auto__ = (((this$ == null))?null:this$);
var m__17000__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,this$,uri,method,body,headers,handler,opts);
} else {
var m__17000__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,this$,uri,method,body,headers,handler,opts);
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
var x__16999__auto__ = (((this$ == null))?null:this$);
var m__17000__auto__ = (ajax.core._abort[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,this$);
} else {
var m__17000__auto____$1 = (ajax.core._abort["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,this$);
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
var x__16999__auto__ = (((this$ == null))?null:this$);
var m__17000__auto__ = (ajax.core._status[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,this$);
} else {
var m__17000__auto____$1 = (ajax.core._status["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,this$);
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
var x__16999__auto__ = (((this$ == null))?null:this$);
var m__17000__auto__ = (ajax.core._status_text[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,this$);
} else {
var m__17000__auto____$1 = (ajax.core._status_text["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,this$);
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
var x__16999__auto__ = (((this$ == null))?null:this$);
var m__17000__auto__ = (ajax.core._body[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,this$);
} else {
var m__17000__auto____$1 = (ajax.core._body["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,this$);
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
var x__16999__auto__ = (((this$ == null))?null:this$);
var m__17000__auto__ = (ajax.core._get_response_header[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,this$,header);
} else {
var m__17000__auto____$1 = (ajax.core._get_response_header["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,this$,header);
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
var x__16999__auto__ = (((this$ == null))?null:this$);
var m__17000__auto__ = (ajax.core._was_aborted[goog.typeOf(x__16999__auto__)]);
if(!((m__17000__auto__ == null))){
return m__17000__auto__.call(null,this$);
} else {
var m__17000__auto____$1 = (ajax.core._was_aborted["_"]);
if(!((m__17000__auto____$1 == null))){
return m__17000__auto____$1.call(null,this$);
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
var or__16344__auto__ = ((!((params == null)))?(((false) || (params.ajax$core$DirectlySubmittable$))?true:(((!params.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params):false)):cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params));
if(or__16344__auto__){
return or__16344__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__22616){
var map__22617 = p__22616;
var map__22617__$1 = ((((!((map__22617 == null)))?((((map__22617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22617):map__22617);
var timeout = cljs.core.get.call(null,map__22617__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__22617__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var this$__$1 = this;
var G__22619 = this$__$1;
goog.events.listen(G__22619,goog.net.EventType.COMPLETE,((function (G__22619,this$__$1,map__22617,map__22617__$1,timeout,with_credentials){
return (function (p1__22615_SHARP_){
return handler.call(null,p1__22615_SHARP_.target);
});})(G__22619,this$__$1,map__22617,map__22617__$1,timeout,with_credentials))
);

G__22619.setTimeoutInterval(timeout);

G__22619.setWithCredentials(with_credentials);

G__22619.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__22619;
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

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__22621){
var map__22622 = p__22621;
var map__22622__$1 = ((((!((map__22622 == null)))?((((map__22622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22622):map__22622);
var timeout = cljs.core.get.call(null,map__22622__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__22622__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__22622__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22622,map__22622__$1,timeout,with_credentials,response_format){
return (function (p1__22620_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.core.ready_state.call(null,p1__22620_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__22622,map__22622__$1,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___22630 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___22630)){
var response_type_22631 = temp__4425__auto___22630;
this$__$1.responseType = cljs.core.name.call(null,response_type_22631);
} else {
}

var seq__22624_22632 = cljs.core.seq.call(null,headers);
var chunk__22625_22633 = null;
var count__22626_22634 = (0);
var i__22627_22635 = (0);
while(true){
if((i__22627_22635 < count__22626_22634)){
var vec__22628_22636 = cljs.core._nth.call(null,chunk__22625_22633,i__22627_22635);
var k_22637 = cljs.core.nth.call(null,vec__22628_22636,(0),null);
var v_22638 = cljs.core.nth.call(null,vec__22628_22636,(1),null);
this$__$1.setRequestHeader(k_22637,v_22638);

var G__22639 = seq__22624_22632;
var G__22640 = chunk__22625_22633;
var G__22641 = count__22626_22634;
var G__22642 = (i__22627_22635 + (1));
seq__22624_22632 = G__22639;
chunk__22625_22633 = G__22640;
count__22626_22634 = G__22641;
i__22627_22635 = G__22642;
continue;
} else {
var temp__4425__auto___22643 = cljs.core.seq.call(null,seq__22624_22632);
if(temp__4425__auto___22643){
var seq__22624_22644__$1 = temp__4425__auto___22643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22624_22644__$1)){
var c__17147__auto___22645 = cljs.core.chunk_first.call(null,seq__22624_22644__$1);
var G__22646 = cljs.core.chunk_rest.call(null,seq__22624_22644__$1);
var G__22647 = c__17147__auto___22645;
var G__22648 = cljs.core.count.call(null,c__17147__auto___22645);
var G__22649 = (0);
seq__22624_22632 = G__22646;
chunk__22625_22633 = G__22647;
count__22626_22634 = G__22648;
i__22627_22635 = G__22649;
continue;
} else {
var vec__22629_22650 = cljs.core.first.call(null,seq__22624_22644__$1);
var k_22651 = cljs.core.nth.call(null,vec__22629_22650,(0),null);
var v_22652 = cljs.core.nth.call(null,vec__22629_22650,(1),null);
this$__$1.setRequestHeader(k_22651,v_22652);

var G__22653 = cljs.core.next.call(null,seq__22624_22644__$1);
var G__22654 = null;
var G__22655 = (0);
var G__22656 = (0);
seq__22624_22632 = G__22653;
chunk__22625_22633 = G__22654;
count__22626_22634 = G__22655;
i__22627_22635 = G__22656;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16344__auto__ = body;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
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

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__22657){
var map__22658 = p__22657;
var map__22658__$1 = ((((!((map__22658 == null)))?((((map__22658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22658):map__22658);
var id = cljs.core.get.call(null,map__22658__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__22658__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var priority = cljs.core.get.call(null,map__22658__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__22658__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
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
var args22660 = [];
var len__17402__auto___22663 = arguments.length;
var i__17403__auto___22664 = (0);
while(true){
if((i__17403__auto___22664 < len__17402__auto___22663)){
args22660.push((arguments[i__17403__auto___22664]));

var G__22665 = (i__17403__auto___22664 + (1));
i__17403__auto___22664 = G__22665;
continue;
} else {
}
break;
}

var G__22662 = args22660.length;
switch (G__22662) {
case 0:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22660.length)].join('')));

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
var args22667 = [];
var len__17402__auto___22670 = arguments.length;
var i__17403__auto___22671 = (0);
while(true){
if((i__17403__auto___22671 < len__17402__auto___22670)){
args22667.push((arguments[i__17403__auto___22671]));

var G__22672 = (i__17403__auto___22671 + (1));
i__17403__auto___22671 = G__22672;
continue;
} else {
}
break;
}

var G__22669 = args22667.length;
switch (G__22669) {
case 2:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22667.length)].join('')));

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
var args22674 = [];
var len__17402__auto___22680 = arguments.length;
var i__17403__auto___22681 = (0);
while(true){
if((i__17403__auto___22681 < len__17402__auto___22680)){
args22674.push((arguments[i__17403__auto___22681]));

var G__22682 = (i__17403__auto___22681 + (1));
i__17403__auto___22681 = G__22682;
continue;
} else {
}
break;
}

var G__22676 = args22674.length;
switch (G__22676) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22674.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__22677){
var map__22678 = p__22677;
var map__22678__$1 = ((((!((map__22678 == null)))?((((map__22678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22678):map__22678);
var opts = map__22678__$1;
var type = cljs.core.get.call(null,map__22678__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var writer = cljs.core.get.call(null,map__22678__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
var writer__$1 = (function (){var or__16344__auto__ = writer;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cognitect.transit.writer.call(null,(function (){var or__16344__auto____$1 = type;
if(cljs.core.truth_(or__16344__auto____$1)){
return or__16344__auto____$1;
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
var args22684 = [];
var len__17402__auto___22687 = arguments.length;
var i__17403__auto___22688 = (0);
while(true){
if((i__17403__auto___22688 < len__17402__auto___22687)){
args22684.push((arguments[i__17403__auto___22688]));

var G__22689 = (i__17403__auto___22688 + (1));
i__17403__auto___22688 = G__22689;
continue;
} else {
}
break;
}

var G__22686 = args22684.length;
switch (G__22686) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22684.length)].join('')));

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
var args22691 = [];
var len__17402__auto___22697 = arguments.length;
var i__17403__auto___22698 = (0);
while(true){
if((i__17403__auto___22698 < len__17402__auto___22697)){
args22691.push((arguments[i__17403__auto___22698]));

var G__22699 = (i__17403__auto___22698 + (1));
i__17403__auto___22698 = G__22699;
continue;
} else {
}
break;
}

var G__22693 = args22691.length;
switch (G__22693) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22691.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__22694){
var map__22695 = p__22694;
var map__22695__$1 = ((((!((map__22695 == null)))?((((map__22695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22695):map__22695);
var opts = map__22695__$1;
var type = cljs.core.get.call(null,map__22695__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var reader = cljs.core.get.call(null,map__22695__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var raw = cljs.core.get.call(null,map__22695__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var reader__$1 = (function (){var or__16344__auto__ = reader;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cognitect.transit.reader.call(null,(function (){var or__16344__auto____$1 = type;
if(cljs.core.truth_(or__16344__auto____$1)){
return or__16344__auto____$1;
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
var args22701 = [];
var len__17402__auto___22704 = arguments.length;
var i__17403__auto___22705 = (0);
while(true){
if((i__17403__auto___22705 < len__17402__auto___22704)){
args22701.push((arguments[i__17403__auto___22705]));

var G__22706 = (i__17403__auto___22705 + (1));
i__17403__auto___22705 = G__22706;
continue;
} else {
}
break;
}

var G__22703 = args22701.length;
switch (G__22703) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22701.length)].join('')));

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
var args22708 = [];
var len__17402__auto___22711 = arguments.length;
var i__17403__auto___22712 = (0);
while(true){
if((i__17403__auto___22712 < len__17402__auto___22711)){
args22708.push((arguments[i__17403__auto___22712]));

var G__22713 = (i__17403__auto___22712 + (1));
i__17403__auto___22712 = G__22713;
continue;
} else {
}
break;
}

var G__22710 = args22708.length;
switch (G__22710) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22708.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__16332__auto__ = prefix;
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16332__auto__;
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
var text__$1 = (cljs.core.truth_((function (){var and__16332__auto__ = prefix;
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16332__auto__;
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
var text__$1 = (cljs.core.truth_((function (){var and__16332__auto__ = prefix;
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16332__auto__;
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
var text__$1 = (cljs.core.truth_((function (){var and__16332__auto__ = prefix;
if(cljs.core.truth_(and__16332__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16332__auto__;
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
var args22715 = [];
var len__17402__auto___22721 = arguments.length;
var i__17403__auto___22722 = (0);
while(true){
if((i__17403__auto___22722 < len__17402__auto___22721)){
args22715.push((arguments[i__17403__auto___22722]));

var G__22723 = (i__17403__auto___22722 + (1));
i__17403__auto___22722 = G__22723;
continue;
} else {
}
break;
}

var G__22717 = args22715.length;
switch (G__22717) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22715.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__22718){
var map__22719 = p__22718;
var map__22719__$1 = ((((!((map__22719 == null)))?((((map__22719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22719):map__22719);
var prefix = cljs.core.get.call(null,map__22719__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__22719__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__22719__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args22725 = [];
var len__17402__auto___22728 = arguments.length;
var i__17403__auto___22729 = (0);
while(true){
if((i__17403__auto___22729 < len__17402__auto___22728)){
args22725.push((arguments[i__17403__auto___22729]));

var G__22730 = (i__17403__auto___22729 + (1));
i__17403__auto___22729 = G__22730;
continue;
} else {
}
break;
}

var G__22727 = args22725.length;
switch (G__22727) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22725.length)].join('')));

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
var args22732 = [];
var len__17402__auto___22735 = arguments.length;
var i__17403__auto___22736 = (0);
while(true){
if((i__17403__auto___22736 < len__17402__auto___22735)){
args22732.push((arguments[i__17403__auto___22736]));

var G__22737 = (i__17403__auto___22736 + (1));
i__17403__auto___22736 = G__22737;
continue;
} else {
}
break;
}

var G__22734 = args22732.length;
switch (G__22734) {
case 2:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22732.length)].join('')));

}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
var or__16344__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return "*/*";
}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
var or__16344__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return "*/*";
}
});
});

ajax.core.accept_entry.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args22739 = [];
var len__17402__auto___22742 = arguments.length;
var i__17403__auto___22743 = (0);
while(true){
if((i__17403__auto___22743 < len__17402__auto___22742)){
args22739.push((arguments[i__17403__auto___22743]));

var G__22744 = (i__17403__auto___22743 + (1));
i__17403__auto___22743 = G__22744;
continue;
} else {
}
break;
}

var G__22741 = args22739.length;
switch (G__22741) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22739.length)].join('')));

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
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__22746){
var map__22749 = p__22746;
var map__22749__$1 = ((((!((map__22749 == null)))?((((map__22749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22749):map__22749);
var opts = map__22749__$1;
var response_format = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,(function (){var or__16344__auto__ = ajax.core._get_response_header.call(null,xhrio,"Content-Type");
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.call(null,opts,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args22751 = [];
var len__17402__auto___22754 = arguments.length;
var i__17403__auto___22755 = (0);
while(true){
if((i__17403__auto___22755 < len__17402__auto___22754)){
args22751.push((arguments[i__17403__auto___22755]));

var G__22756 = (i__17403__auto___22755 + (1));
i__17403__auto___22755 = G__22756;
continue;
} else {
}
break;
}

var G__22753 = args22751.length;
switch (G__22753) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22751.length)].join('')));

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
ajax.core.accept_header = (function ajax$core$accept_header(p__22758){
var map__22761 = p__22758;
var map__22761__$1 = ((((!((map__22761 == null)))?((((map__22761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22761):map__22761);
var opts = map__22761__$1;
var response_format = cljs.core.get.call(null,map__22761__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,ajax.core.accept_entry.call(null,opts),response_format));
} else {
return ajax.core.accept_entry.call(null,opts,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args22763 = [];
var len__17402__auto___22766 = arguments.length;
var i__17403__auto___22767 = (0);
while(true){
if((i__17403__auto___22767 < len__17402__auto___22766)){
args22763.push((arguments[i__17403__auto___22767]));

var G__22768 = (i__17403__auto___22767 + (1));
i__17403__auto___22767 = G__22768;
continue;
} else {
}
break;
}

var G__22765 = args22763.length;
switch (G__22765) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22763.length)].join('')));

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
ajax.core.get_response_format = (function ajax$core$get_response_format(p__22770){
var map__22773 = p__22770;
var map__22773__$1 = ((((!((map__22773 == null)))?((((map__22773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22773):map__22773);
var opts = map__22773__$1;
var response_format = cljs.core.get.call(null,map__22773__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
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
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__22775,xhrio){
var map__22778 = p__22775;
var map__22778__$1 = ((((!((map__22778 == null)))?((((map__22778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22778):map__22778);
var description = cljs.core.get.call(null,map__22778__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
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
var args__17409__auto__ = [];
var len__17402__auto___22784 = arguments.length;
var i__17403__auto___22785 = (0);
while(true){
if((i__17403__auto___22785 < len__17402__auto___22784)){
args__17409__auto__.push((arguments[i__17403__auto___22785]));

var G__22786 = (i__17403__auto___22785 + (1));
i__17403__auto___22785 = G__22786;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((3) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17410__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq22780){
var G__22781 = cljs.core.first.call(null,seq22780);
var seq22780__$1 = cljs.core.next.call(null,seq22780);
var G__22782 = cljs.core.first.call(null,seq22780__$1);
var seq22780__$2 = cljs.core.next.call(null,seq22780__$1);
var G__22783 = cljs.core.first.call(null,seq22780__$2);
var seq22780__$3 = cljs.core.next.call(null,seq22780__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__22781,G__22782,G__22783,seq22780__$3);
});
ajax.core.interpret_response = (function ajax$core$interpret_response(p__22787,xhrio){
var map__22793 = p__22787;
var map__22793__$1 = ((((!((map__22793 == null)))?((((map__22793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22793):map__22793);
var format = map__22793__$1;
var read = cljs.core.get.call(null,map__22793__$1,new cljs.core.Keyword(null,"read","read",1140058661));
try{var status = ajax.core._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__22796 = status;
switch (G__22796) {
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
}catch (e22797){if((e22797 instanceof Object)){
var e = e22797;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format,xhrio)], null);
} else {
throw e22797;

}
}
}
}catch (e22795){if((e22795 instanceof Object)){
var e = e22795;
return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e22795;

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
ajax.core.process_inputs = (function ajax$core$process_inputs(p__22799,p__22800){
var map__22807 = p__22799;
var map__22807__$1 = ((((!((map__22807 == null)))?((((map__22807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22807):map__22807);
var uri = cljs.core.get.call(null,map__22807__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22807__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__22807__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__22807__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__22807__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var map__22808 = p__22800;
var map__22808__$1 = ((((!((map__22808 == null)))?((((map__22808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22808):map__22808);
var content_type = cljs.core.get.call(null,map__22808__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__16344__auto__ = headers;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core._EQ_.call(null,ajax.core.normalize_method.call(null,method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers__$1], null);
} else {
var map__22811 = ajax.core.get_request_format.call(null,format);
var map__22811__$1 = ((((!((map__22811 == null)))?((((map__22811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22811):map__22811);
var write = cljs.core.get.call(null,map__22811__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type__$1 = cljs.core.get.call(null,map__22811__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?write.call(null,params):(cljs.core.truth_(ajax.core.submittable_QMARK_.call(null,params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",[cljs.core.str(content_type__$1),cljs.core.str("; charset=utf-8")].join('')], null):null);
var headers__$2 = cljs.core.merge.call(null,headers__$1,content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args22813 = [];
var len__17402__auto___22816 = arguments.length;
var i__17403__auto___22817 = (0);
while(true){
if((i__17403__auto___22817 < len__17402__auto___22816)){
args22813.push((arguments[i__17403__auto___22817]));

var G__22818 = (i__17403__auto___22817 + (1));
i__17403__auto___22817 = G__22818;
continue;
} else {
}
break;
}

var G__22815 = args22813.length;
switch (G__22815) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22813.length)].join('')));

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
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__22820){
var map__22823 = p__22820;
var map__22823__$1 = ((((!((map__22823 == null)))?((((map__22823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22823):map__22823);
var handler = cljs.core.get.call(null,map__22823__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__22825){
var map__22829 = p__22825;
var map__22829__$1 = ((((!((map__22829 == null)))?((((map__22829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22829):map__22829);
var opts = map__22829__$1;
var method = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"method","method",55703592));
var api = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"api","api",-899839580));
var response_format = ajax.core.get_response_format.call(null,opts);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__22831 = ajax.core.process_inputs.call(null,opts,response_format);
var uri = cljs.core.nth.call(null,vec__22831,(0),null);
var body = cljs.core.nth.call(null,vec__22831,(1),null);
var headers = cljs.core.nth.call(null,vec__22831,(2),null);
var handler = ajax.core.base_handler.call(null,response_format,opts);
var api__$1 = (function (){var or__16344__auto__ = api;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
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
var G__22833 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__22833) {
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
var G__22836 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__22836) {
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
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__22838_SHARP_){
return ajax.core.keyword_response_format_2.call(null,p1__22838_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args22839 = [];
var len__17402__auto___22852 = arguments.length;
var i__17403__auto___22853 = (0);
while(true){
if((i__17403__auto___22853 < len__17402__auto___22852)){
args22839.push((arguments[i__17403__auto___22853]));

var G__22854 = (i__17403__auto___22853 + (1));
i__17403__auto___22853 = G__22854;
continue;
} else {
}
break;
}

var G__22841 = args22839.length;
switch (G__22841) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22839.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__22842,p__22843){
var map__22844 = p__22842;
var map__22844__$1 = ((((!((map__22844 == null)))?((((map__22844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22844):map__22844);
var handler = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__22845 = p__22843;
var ok = cljs.core.nth.call(null,vec__22845,(0),null);
var result = cljs.core.nth.call(null,vec__22845,(1),null);
var temp__4423__auto___22856 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___22856)){
var h_22857 = temp__4423__auto___22856;
h_22857.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__22847){
var map__22848 = p__22847;
var map__22848__$1 = ((((!((map__22848 == null)))?((((map__22848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22848):map__22848);
var handler = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__22848,map__22848__$1,handler,error_handler,finally$){
return (function (p__22850){
var vec__22851 = p__22850;
var ok = cljs.core.nth.call(null,vec__22851,(0),null);
var result = cljs.core.nth.call(null,vec__22851,(1),null);
var temp__4423__auto___22858 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___22858)){
var h_22859 = temp__4423__auto___22858;
h_22859.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__22848,map__22848__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__22860){
var map__22863 = p__22860;
var map__22863__$1 = ((((!((map__22863 == null)))?((((map__22863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22863):map__22863);
var opts = map__22863__$1;
var method = cljs.core.get.call(null,map__22863__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__22863__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__22863__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__22863__$1,new cljs.core.Keyword(null,"params","params",710516235));

var needs_format = cljs.core.not.call(null,(function (){var or__16344__auto__ = ajax.core.submittable_QMARK_.call(null,params);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core._EQ_.call(null,method,"GET");
}
})());
var rf = (cljs.core.truth_((function (){var or__16344__auto__ = format;
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
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
var args__17409__auto__ = [];
var len__17402__auto___22867 = arguments.length;
var i__17403__auto___22868 = (0);
while(true){
if((i__17403__auto___22868 < len__17402__auto___22867)){
args__17409__auto__.push((arguments[i__17403__auto___22868]));

var G__22869 = (i__17403__auto___22868 + (1));
i__17403__auto___22868 = G__22869;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19562__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__19562__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19562__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq22865){
var G__22866 = cljs.core.first.call(null,seq22865);
var seq22865__$1 = cljs.core.next.call(null,seq22865);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__22866,seq22865__$1);
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
var args__17409__auto__ = [];
var len__17402__auto___22872 = arguments.length;
var i__17403__auto___22873 = (0);
while(true){
if((i__17403__auto___22873 < len__17402__auto___22872)){
args__17409__auto__.push((arguments[i__17403__auto___22873]));

var G__22874 = (i__17403__auto___22873 + (1));
i__17403__auto___22873 = G__22874;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19562__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__19562__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19562__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq22870){
var G__22871 = cljs.core.first.call(null,seq22870);
var seq22870__$1 = cljs.core.next.call(null,seq22870);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__22871,seq22870__$1);
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
var args__17409__auto__ = [];
var len__17402__auto___22877 = arguments.length;
var i__17403__auto___22878 = (0);
while(true){
if((i__17403__auto___22878 < len__17402__auto___22877)){
args__17409__auto__.push((arguments[i__17403__auto___22878]));

var G__22879 = (i__17403__auto___22878 + (1));
i__17403__auto___22878 = G__22879;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19562__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__19562__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19562__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq22875){
var G__22876 = cljs.core.first.call(null,seq22875);
var seq22875__$1 = cljs.core.next.call(null,seq22875);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__22876,seq22875__$1);
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
var args__17409__auto__ = [];
var len__17402__auto___22882 = arguments.length;
var i__17403__auto___22883 = (0);
while(true){
if((i__17403__auto___22883 < len__17402__auto___22882)){
args__17409__auto__.push((arguments[i__17403__auto___22883]));

var G__22884 = (i__17403__auto___22883 + (1));
i__17403__auto___22883 = G__22884;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19562__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__19562__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19562__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq22880){
var G__22881 = cljs.core.first.call(null,seq22880);
var seq22880__$1 = cljs.core.next.call(null,seq22880);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__22881,seq22880__$1);
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
var args__17409__auto__ = [];
var len__17402__auto___22887 = arguments.length;
var i__17403__auto___22888 = (0);
while(true){
if((i__17403__auto___22888 < len__17402__auto___22887)){
args__17409__auto__.push((arguments[i__17403__auto___22888]));

var G__22889 = (i__17403__auto___22888 + (1));
i__17403__auto___22888 = G__22889;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19562__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__19562__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19562__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq22885){
var G__22886 = cljs.core.first.call(null,seq22885);
var seq22885__$1 = cljs.core.next.call(null,seq22885);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__22886,seq22885__$1);
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
var args__17409__auto__ = [];
var len__17402__auto___22892 = arguments.length;
var i__17403__auto___22893 = (0);
while(true){
if((i__17403__auto___22893 < len__17402__auto___22892)){
args__17409__auto__.push((arguments[i__17403__auto___22893]));

var G__22894 = (i__17403__auto___22893 + (1));
i__17403__auto___22893 = G__22894;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19562__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__19562__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19562__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq22890){
var G__22891 = cljs.core.first.call(null,seq22890);
var seq22890__$1 = cljs.core.next.call(null,seq22890);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__22891,seq22890__$1);
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
var args__17409__auto__ = [];
var len__17402__auto___22897 = arguments.length;
var i__17403__auto___22898 = (0);
while(true){
if((i__17403__auto___22898 < len__17402__auto___22897)){
args__17409__auto__.push((arguments[i__17403__auto___22898]));

var G__22899 = (i__17403__auto___22898 + (1));
i__17403__auto___22898 = G__22899;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19562__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__19562__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19562__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq22895){
var G__22896 = cljs.core.first.call(null,seq22895);
var seq22895__$1 = cljs.core.next.call(null,seq22895);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__22896,seq22895__$1);
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
var args__17409__auto__ = [];
var len__17402__auto___22902 = arguments.length;
var i__17403__auto___22903 = (0);
while(true){
if((i__17403__auto___22903 < len__17402__auto___22902)){
args__17409__auto__.push((arguments[i__17403__auto___22903]));

var G__22904 = (i__17403__auto___22903 + (1));
i__17403__auto___22903 = G__22904;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((1) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17410__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19562__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__19562__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19562__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq22900){
var G__22901 = cljs.core.first.call(null,seq22900);
var seq22900__$1 = cljs.core.next.call(null,seq22900);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__22901,seq22900__$1);
});

//# sourceMappingURL=core.js.map