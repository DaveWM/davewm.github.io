// Compiled by ClojureScript 1.10.439 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23422,handler){
var map__23423 = p__23422;
var map__23423__$1 = (((((!((map__23423 == null))))?(((((map__23423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23423):map__23423);
var uri = cljs.core.get.call(null,map__23423__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23423__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23423__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23423__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23423__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23423__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23423__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23423,map__23423__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__23421_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23421_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23423,map__23423__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___23435 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___23435)){
var response_type_23436 = temp__5720__auto___23435;
this$__$1.responseType = cljs.core.name.call(null,response_type_23436);
} else {
}

var seq__23425_23437 = cljs.core.seq.call(null,headers);
var chunk__23426_23438 = null;
var count__23427_23439 = (0);
var i__23428_23440 = (0);
while(true){
if((i__23428_23440 < count__23427_23439)){
var vec__23429_23441 = cljs.core._nth.call(null,chunk__23426_23438,i__23428_23440);
var k_23442 = cljs.core.nth.call(null,vec__23429_23441,(0),null);
var v_23443 = cljs.core.nth.call(null,vec__23429_23441,(1),null);
this$__$1.setRequestHeader(k_23442,v_23443);


var G__23444 = seq__23425_23437;
var G__23445 = chunk__23426_23438;
var G__23446 = count__23427_23439;
var G__23447 = (i__23428_23440 + (1));
seq__23425_23437 = G__23444;
chunk__23426_23438 = G__23445;
count__23427_23439 = G__23446;
i__23428_23440 = G__23447;
continue;
} else {
var temp__5720__auto___23448 = cljs.core.seq.call(null,seq__23425_23437);
if(temp__5720__auto___23448){
var seq__23425_23449__$1 = temp__5720__auto___23448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23425_23449__$1)){
var c__4461__auto___23450 = cljs.core.chunk_first.call(null,seq__23425_23449__$1);
var G__23451 = cljs.core.chunk_rest.call(null,seq__23425_23449__$1);
var G__23452 = c__4461__auto___23450;
var G__23453 = cljs.core.count.call(null,c__4461__auto___23450);
var G__23454 = (0);
seq__23425_23437 = G__23451;
chunk__23426_23438 = G__23452;
count__23427_23439 = G__23453;
i__23428_23440 = G__23454;
continue;
} else {
var vec__23432_23455 = cljs.core.first.call(null,seq__23425_23449__$1);
var k_23456 = cljs.core.nth.call(null,vec__23432_23455,(0),null);
var v_23457 = cljs.core.nth.call(null,vec__23432_23455,(1),null);
this$__$1.setRequestHeader(k_23456,v_23457);


var G__23458 = cljs.core.next.call(null,seq__23425_23449__$1);
var G__23459 = null;
var G__23460 = (0);
var G__23461 = (0);
seq__23425_23437 = G__23458;
chunk__23426_23438 = G__23459;
count__23427_23439 = G__23460;
i__23428_23440 = G__23461;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4047__auto__ = body;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1545934925236
