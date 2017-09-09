// Compiled by ClojureScript 1.7.145 {}
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
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = true;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27151,handler){
var map__27152 = p__27151;
var map__27152__$1 = ((((!((map__27152 == null)))?((((map__27152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27152):map__27152);
var uri = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27152,map__27152__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27150_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__27150_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__27152,map__27152__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___27160 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___27160)){
var response_type_27161 = temp__4425__auto___27160;
this$__$1.responseType = cljs.core.name.call(null,response_type_27161);
} else {
}

var seq__27154_27162 = cljs.core.seq.call(null,headers);
var chunk__27155_27163 = null;
var count__27156_27164 = (0);
var i__27157_27165 = (0);
while(true){
if((i__27157_27165 < count__27156_27164)){
var vec__27158_27166 = cljs.core._nth.call(null,chunk__27155_27163,i__27157_27165);
var k_27167 = cljs.core.nth.call(null,vec__27158_27166,(0),null);
var v_27168 = cljs.core.nth.call(null,vec__27158_27166,(1),null);
this$__$1.setRequestHeader(k_27167,v_27168);

var G__27169 = seq__27154_27162;
var G__27170 = chunk__27155_27163;
var G__27171 = count__27156_27164;
var G__27172 = (i__27157_27165 + (1));
seq__27154_27162 = G__27169;
chunk__27155_27163 = G__27170;
count__27156_27164 = G__27171;
i__27157_27165 = G__27172;
continue;
} else {
var temp__4425__auto___27173 = cljs.core.seq.call(null,seq__27154_27162);
if(temp__4425__auto___27173){
var seq__27154_27174__$1 = temp__4425__auto___27173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27154_27174__$1)){
var c__17161__auto___27175 = cljs.core.chunk_first.call(null,seq__27154_27174__$1);
var G__27176 = cljs.core.chunk_rest.call(null,seq__27154_27174__$1);
var G__27177 = c__17161__auto___27175;
var G__27178 = cljs.core.count.call(null,c__17161__auto___27175);
var G__27179 = (0);
seq__27154_27162 = G__27176;
chunk__27155_27163 = G__27177;
count__27156_27164 = G__27178;
i__27157_27165 = G__27179;
continue;
} else {
var vec__27159_27180 = cljs.core.first.call(null,seq__27154_27174__$1);
var k_27181 = cljs.core.nth.call(null,vec__27159_27180,(0),null);
var v_27182 = cljs.core.nth.call(null,vec__27159_27180,(1),null);
this$__$1.setRequestHeader(k_27181,v_27182);

var G__27183 = cljs.core.next.call(null,seq__27154_27174__$1);
var G__27184 = null;
var G__27185 = (0);
var G__27186 = (0);
seq__27154_27162 = G__27183;
chunk__27155_27163 = G__27184;
count__27156_27164 = G__27185;
i__27157_27165 = G__27186;
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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = true;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = true;

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

//# sourceMappingURL=xml_http_request.js.map