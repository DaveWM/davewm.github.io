// Compiled by ClojureScript 1.7.145 {}
goog.provide('markdown.lists');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.lists.close_lists = (function markdown$lists$close_lists(lists){
return clojure.string.join.call(null,(function (){var iter__17130__auto__ = (function markdown$lists$close_lists_$_iter__21997(s__21998){
return (new cljs.core.LazySeq(null,(function (){
var s__21998__$1 = s__21998;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21998__$1);
if(temp__4425__auto__){
var s__21998__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21998__$2)){
var c__17128__auto__ = cljs.core.chunk_first.call(null,s__21998__$2);
var size__17129__auto__ = cljs.core.count.call(null,c__17128__auto__);
var b__22000 = cljs.core.chunk_buffer.call(null,size__17129__auto__);
if((function (){var i__21999 = (0);
while(true){
if((i__21999 < size__17129__auto__)){
var vec__22003 = cljs.core._nth.call(null,c__17128__auto__,i__21999);
var list_type = cljs.core.nth.call(null,vec__22003,(0),null);
cljs.core.chunk_append.call(null,b__22000,[cljs.core.str("</li></"),cljs.core.str(cljs.core.name.call(null,list_type)),cljs.core.str(">")].join(''));

var G__22005 = (i__21999 + (1));
i__21999 = G__22005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22000),markdown$lists$close_lists_$_iter__21997.call(null,cljs.core.chunk_rest.call(null,s__21998__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22000),null);
}
} else {
var vec__22004 = cljs.core.first.call(null,s__21998__$2);
var list_type = cljs.core.nth.call(null,vec__22004,(0),null);
return cljs.core.cons.call(null,[cljs.core.str("</li></"),cljs.core.str(cljs.core.name.call(null,list_type)),cljs.core.str(">")].join(''),markdown$lists$close_lists_$_iter__21997.call(null,cljs.core.rest.call(null,s__21998__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17130__auto__.call(null,lists);
})());
});
markdown.lists.add_row = (function markdown$lists$add_row(row_type,list_type,num_indents,indents,content,state){
if(cljs.core.truth_(list_type)){
if((num_indents < indents)){
var lists_to_close = cljs.core.take_while.call(null,(function (p1__22006_SHARP_){
return (cljs.core.second.call(null,p1__22006_SHARP_) > num_indents);
}),cljs.core.reverse.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state)));
var remaining_lists = cljs.core.vec.call(null,cljs.core.drop_last.call(null,cljs.core.count.call(null,lists_to_close),new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,markdown.lists.close_lists.call(null,lists_to_close),"</li><li>",content),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684),(((num_indents > cljs.core.second.call(null,cljs.core.last.call(null,remaining_lists))))?cljs.core.conj.call(null,remaining_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)):remaining_lists))], null);
} else {
if((num_indents > indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lists","lists",-884730684)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null))], null);
} else {
if(cljs.core._EQ_.call(null,num_indents,indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</li><li>"),cljs.core.str(content)].join(''),state], null);
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)], null))], null);
}
});
markdown.lists.ul = (function markdown$lists$ul(text,state){
var vec__22008 = cljs.core.last.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.call(null,vec__22008,(0),null);
var indents = cljs.core.nth.call(null,vec__22008,(1),null);
var num_indents = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));
var content = clojure.string.trim.call(null,markdown.common._STAR_substring_STAR_.call(null,text,(num_indents + (1))));
return markdown.lists.add_row.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),list_type,num_indents,indents,(function (){var or__16358__auto__ = markdown.common.make_heading.call(null,content,false);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return content;
}
})(),state);
});
markdown.lists.ol = (function markdown$lists$ol(text,state){
var vec__22010 = cljs.core.last.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.call(null,vec__22010,(0),null);
var indents = cljs.core.nth.call(null,vec__22010,(1),null);
var num_indents = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));
var content = clojure.string.trim.call(null,clojure.string.join.call(null,cljs.core.drop_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),clojure.string.trim.call(null,text))));
return markdown.lists.add_row.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),list_type,num_indents,indents,(function (){var or__16358__auto__ = markdown.common.make_heading.call(null,content,false);
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return content;
}
})(),state);
});
markdown.lists.li = (function markdown$lists$li(text,p__22011){
var map__22014 = p__22011;
var map__22014__$1 = ((((!((map__22014 == null)))?((((map__22014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22014):map__22014);
var state = map__22014__$1;
var code = cljs.core.get.call(null,map__22014__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__22014__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var last_line_empty_QMARK_ = cljs.core.get.call(null,map__22014__$1,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527));
var eof = cljs.core.get.call(null,map__22014__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var lists = cljs.core.get.call(null,map__22014__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
if(cljs.core.truth_((function (){var and__16346__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(and__16346__auto__)){
return clojure.string.blank_QMARK_.call(null,text);
} else {
return and__16346__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.lists.close_lists.call(null,cljs.core.reverse.call(null,lists))),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
if(cljs.core.truth_((function (){var or__16358__auto__ = code;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return codeblock;
}
})())){
if(cljs.core.truth_((function (){var and__16346__auto__ = lists;
if(cljs.core.truth_(and__16346__auto__)){
var or__16358__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return eof;
}
} else {
return and__16346__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.lists.close_lists.call(null,cljs.core.reverse.call(null,lists))),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
} else {
if(cljs.core.truth_((function (){var and__16346__auto__ = cljs.core.not.call(null,eof);
if(and__16346__auto__){
var and__16346__auto____$1 = lists;
if(cljs.core.truth_(and__16346__auto____$1)){
return clojure.string.blank_QMARK_.call(null,text);
} else {
return and__16346__auto____$1;
}
} else {
return and__16346__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)], null);
} else {
var indents = (cljs.core.truth_(last_line_empty_QMARK_)?(0):cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text)));
var trimmed = clojure.string.trim.call(null,text);
var in_list_QMARK_ = new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.re_find.call(null,/^[\*\+-] /,trimmed))){
return markdown.lists.ul.call(null,(cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/^[0-9]+\. /,trimmed))){
return markdown.lists.ol.call(null,(cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if((indents > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_((function (){var and__16346__auto__ = (function (){var or__16358__auto__ = eof;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return last_line_empty_QMARK_;
}
})();
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core.not_empty.call(null,lists);
} else {
return and__16346__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.lists.close_lists.call(null,cljs.core.reverse.call(null,lists)),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"buf","buf",-213913340),text)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}

}
}
}
});

//# sourceMappingURL=lists.js.map