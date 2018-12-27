// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12062 = e.target.readyState;
var fexpr__12061 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__12061.cljs$core$IFn$_invoke$arity$1 ? fexpr__12061.cljs$core$IFn$_invoke$arity$1(G__12062) : fexpr__12061.call(null,G__12062));
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12064,handler){
var map__12065 = p__12064;
var map__12065__$1 = (((((!((map__12065 == null))))?(((((map__12065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12065):map__12065);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12065__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12065__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12065__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12065__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12065__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12065__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12065__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__12065,map__12065__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__12063_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__12063_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__12065,map__12065__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___12077 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___12077)){
var response_type_12078 = temp__5720__auto___12077;
this$__$1.responseType = cljs.core.name(response_type_12078);
} else {
}

var seq__12067_12079 = cljs.core.seq(headers);
var chunk__12068_12080 = null;
var count__12069_12081 = (0);
var i__12070_12082 = (0);
while(true){
if((i__12070_12082 < count__12069_12081)){
var vec__12071_12083 = chunk__12068_12080.cljs$core$IIndexed$_nth$arity$2(null,i__12070_12082);
var k_12084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12071_12083,(0),null);
var v_12085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12071_12083,(1),null);
this$__$1.setRequestHeader(k_12084,v_12085);


var G__12086 = seq__12067_12079;
var G__12087 = chunk__12068_12080;
var G__12088 = count__12069_12081;
var G__12089 = (i__12070_12082 + (1));
seq__12067_12079 = G__12086;
chunk__12068_12080 = G__12087;
count__12069_12081 = G__12088;
i__12070_12082 = G__12089;
continue;
} else {
var temp__5720__auto___12090 = cljs.core.seq(seq__12067_12079);
if(temp__5720__auto___12090){
var seq__12067_12091__$1 = temp__5720__auto___12090;
if(cljs.core.chunked_seq_QMARK_(seq__12067_12091__$1)){
var c__4461__auto___12092 = cljs.core.chunk_first(seq__12067_12091__$1);
var G__12093 = cljs.core.chunk_rest(seq__12067_12091__$1);
var G__12094 = c__4461__auto___12092;
var G__12095 = cljs.core.count(c__4461__auto___12092);
var G__12096 = (0);
seq__12067_12079 = G__12093;
chunk__12068_12080 = G__12094;
count__12069_12081 = G__12095;
i__12070_12082 = G__12096;
continue;
} else {
var vec__12074_12097 = cljs.core.first(seq__12067_12091__$1);
var k_12098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12074_12097,(0),null);
var v_12099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12074_12097,(1),null);
this$__$1.setRequestHeader(k_12098,v_12099);


var G__12100 = cljs.core.next(seq__12067_12091__$1);
var G__12101 = null;
var G__12102 = (0);
var G__12103 = (0);
seq__12067_12079 = G__12100;
chunk__12068_12080 = G__12101;
count__12069_12081 = G__12102;
i__12070_12082 = G__12103;
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
