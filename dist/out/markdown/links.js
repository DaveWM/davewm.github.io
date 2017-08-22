// Compiled by ClojureScript 1.7.145 {}
goog.provide('markdown.links');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.links.href = (function markdown$links$href(title,link,state){
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<a href='"),link,cljs.core.seq.call(null,"'>"),title,cljs.core.seq.call(null,"</a>"),state);
});
markdown.links.img = (function markdown$links$img(var_args){
var args__17423__auto__ = [];
var len__17416__auto___23705 = arguments.length;
var i__17417__auto___23706 = (0);
while(true){
if((i__17417__auto___23706 < len__17416__auto___23705)){
args__17423__auto__.push((arguments[i__17417__auto___23706]));

var G__23707 = (i__17417__auto___23706 + (1));
i__17417__auto___23706 = G__23707;
continue;
} else {
}
break;
}

var argseq__17424__auto__ = ((((3) < args__17423__auto__.length))?(new cljs.core.IndexedSeq(args__17423__auto__.slice((3)),(0))):null);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17424__auto__);
});

markdown.links.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__23703){
var vec__23704 = p__23703;
var title = cljs.core.nth.call(null,vec__23704,(0),null);
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<img src=\""),url,cljs.core.seq.call(null,"\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str,"\" title=",clojure.string.join.call(null,title)," />")):cljs.core.seq.call(null,"\" />")),state);
});

markdown.links.img.cljs$lang$maxFixedArity = (3);

markdown.links.img.cljs$lang$applyTo = (function (seq23699){
var G__23700 = cljs.core.first.call(null,seq23699);
var seq23699__$1 = cljs.core.next.call(null,seq23699);
var G__23701 = cljs.core.first.call(null,seq23699__$1);
var seq23699__$2 = cljs.core.next.call(null,seq23699__$1);
var G__23702 = cljs.core.first.call(null,seq23699__$2);
var seq23699__$3 = cljs.core.next.call(null,seq23699__$2);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(G__23700,G__23701,G__23702,seq23699__$3);
});
markdown.links.handle_img_link = (function markdown$links$handle_img_link(xs,state){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.call(null,(3),xs))){
var xs__$1 = cljs.core.drop.call(null,(3),xs);
var vec__23712 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.call(null,vec__23712,(0),null);
var xy = cljs.core.nth.call(null,vec__23712,(1),null);
var vec__23713 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),cljs.core.drop.call(null,(2),xy));
var url_title = cljs.core.nth.call(null,vec__23713,(0),null);
var zy = cljs.core.nth.call(null,vec__23713,(1),null);
var vec__23714 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.call(null,vec__23714,(0),null);
var title = cljs.core.nth.call(null,vec__23714,(1),null);
var vec__23715 = markdown.links.img.call(null,alt,url,state,cljs.core.not_empty.call(null,title));
var new_text = cljs.core.nth.call(null,vec__23715,(0),null);
var new_state = cljs.core.nth.call(null,vec__23715,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,"[",new_text,cljs.core.rest.call(null,zy)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.links.process_link_title = (function markdown$links$process_link_title(title,state){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p1__23717_SHARP_,p2__23716_SHARP_){
return cljs.core.apply.call(null,p2__23716_SHARP_,p1__23717_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough], null)));
});
markdown.links.make_link = (function markdown$links$make_link(img_QMARK_){
return (function markdown$links$make_link_$_link(text,p__23739){
var map__23750 = p__23739;
var map__23750__$1 = ((((!((map__23750 == null)))?((((map__23750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23750):map__23750);
var state = map__23750__$1;
var code = cljs.core.get.call(null,map__23750__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__23750__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__16358__auto__ = code;
if(cljs.core.truth_(or__16358__auto__)){
return or__16358__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq.call(null,text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,out),loop_state], null);
} else {
var vec__23752 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.call(null,vec__23752,(0),null);
var xs = cljs.core.nth.call(null,vec__23752,(1),null);
var vec__23753 = markdown.links.handle_img_link.call(null,xs,loop_state);
var xs__$1 = cljs.core.nth.call(null,vec__23753,(0),null);
var loop_state__$1 = cljs.core.nth.call(null,vec__23753,(1),null);
var vec__23754 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.call(null,vec__23754,(0),null);
var ys = cljs.core.nth.call(null,vec__23754,(1),null);
var vec__23755 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.call(null,vec__23755,(0),null);
var zs = cljs.core.nth.call(null,vec__23755,(1),null);
var vec__23756 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.call(null,vec__23756,(0),null);
var tail = cljs.core.nth.call(null,vec__23756,(1),null);
if(((cljs.core.count.call(null,link__$1) < (2))) || ((cljs.core.count.call(null,tail) < (1))) || ((cljs.core.count.call(null,dud) > (1)))){
var G__23760 = cljs.core.concat.call(null,out,head,markdown.links.process_link_title.call(null,title,state),dud,link__$1);
var G__23761 = tail;
var G__23762 = loop_state__$1;
out = G__23760;
tokens = G__23761;
loop_state = G__23762;
continue;
} else {
if((cljs.core.not.call(null,img_QMARK_)) && (cljs.core.not_EQ_.call(null,cljs.core.last.call(null,head),"!"))){
var vec__23757 = markdown.links.href.call(null,cljs.core.rest.call(null,markdown.links.process_link_title.call(null,title,state)),cljs.core.rest.call(null,link__$1),loop_state__$1);
var link_text = cljs.core.nth.call(null,vec__23757,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__23757,(1),null);
var G__23763 = cljs.core.concat.call(null,out,head,link_text);
var G__23764 = cljs.core.rest.call(null,tail);
var G__23765 = new_loop_state;
out = G__23763;
tokens = G__23764;
loop_state = G__23765;
continue;
} else {
if(cljs.core.truth_((function (){var and__16346__auto__ = img_QMARK_;
if(cljs.core.truth_(and__16346__auto__)){
return cljs.core._EQ_.call(null,cljs.core.last.call(null,head),"!");
} else {
return and__16346__auto__;
}
})())){
var alt = cljs.core.rest.call(null,title);
var vec__23758 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.rest.call(null,link__$1));
var url = cljs.core.nth.call(null,vec__23758,(0),null);
var title__$1 = cljs.core.nth.call(null,vec__23758,(1),null);
var title__$2 = markdown.links.process_link_title.call(null,clojure.string.join.call(null,cljs.core.rest.call(null,title__$1)),loop_state__$1);
var vec__23759 = markdown.links.img.call(null,alt,url,loop_state__$1,title__$2);
var img_text = cljs.core.nth.call(null,vec__23759,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__23759,(1),null);
var G__23766 = cljs.core.concat.call(null,cljs.core.butlast.call(null,head),img_text);
var G__23767 = cljs.core.rest.call(null,tail);
var G__23768 = new_loop_state;
out = G__23766;
tokens = G__23767;
loop_state = G__23768;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
break;
}
}
});
});
markdown.links.link = markdown.links.make_link.call(null,false);
markdown.links.image = markdown.links.make_link.call(null,true);
markdown.links.reference = (function markdown$links$reference(text){
return cljs.core.re_find.call(null,/^\[[a-zA-Z0-9 ]+\]:/,text);
});
markdown.links.parse_reference = (function markdown$links$parse_reference(reference,start){
return clojure.string.split.call(null,clojure.string.trim.call(null,cljs.core.subs.call(null,reference,start)),/\s+/,(2));
});
markdown.links.parse_reference_link = (function markdown$links$parse_reference_link(line,references){
var trimmed = clojure.string.trim.call(null,line);
var temp__4425__auto__ = markdown.links.reference.call(null,trimmed);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,references,cljs.core.assoc,cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1))),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_reference_link = (function markdown$links$replace_reference_link(references,reference){
var vec__23771 = clojure.string.split.call(null,reference,/\]\s*/,(2));
var title = cljs.core.nth.call(null,vec__23771,(0),null);
var id = cljs.core.nth.call(null,vec__23771,(1),null);
var vec__23772 = cljs.core.get.call(null,references,id);
var link = cljs.core.nth.call(null,vec__23772,(0),null);
var alt = cljs.core.nth.call(null,vec__23772,(1),null);
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(alt)?[cljs.core.str(" title='"),cljs.core.str(cljs.core.subs.call(null,alt,(1),(cljs.core.count.call(null,alt) - (1)))),cljs.core.str("'")].join(''):null)),cljs.core.str(">"),cljs.core.str(cljs.core.subs.call(null,title,(1))),cljs.core.str("</a>")].join('');
});
markdown.links.encode_links = (function markdown$links$encode_links(links,i){
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__23775,link){
var vec__23776 = p__23775;
var i__$1 = cljs.core.nth.call(null,vec__23776,(0),null);
var encoded = cljs.core.nth.call(null,vec__23776,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i__$1 + (1)),cljs.core.assoc.call(null,encoded,markdown.common.gen_token.call(null,i__$1),link)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.PersistentArrayMap.EMPTY], null),links));
});
markdown.links.parse_links = (function markdown$links$parse_links(references,links){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23779){
var vec__23780 = p__23779;
var k = cljs.core.nth.call(null,vec__23780,(0),null);
var v = cljs.core.nth.call(null,vec__23780,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,markdown.links.replace_reference_link.call(null,references,v)], null);
}),links));
});
markdown.links.freeze_links = (function markdown$links$freeze_links(references,text,state){
var links = cljs.core.re_seq.call(null,/\[[^\]]+\]\s*\[[a-zA-Z0-9 ]+\]/,text);
var encoded_links = markdown.links.encode_links.call(null,links,cljs.core.fnil.call(null,cljs.core.count,cljs.core.PersistentVector.EMPTY).call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,((function (links,encoded_links){
return (function (s,p__23783){
var vec__23784 = p__23783;
var id = cljs.core.nth.call(null,vec__23784,(0),null);
var link = cljs.core.nth.call(null,vec__23784,(1),null);
return clojure.string.replace.call(null,s,link,id);
});})(links,encoded_links))
,text,encoded_links),cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),cljs.core.merge,markdown.links.parse_links.call(null,references,encoded_links))], null);
});
markdown.links.reference_link = (function markdown$links$reference_link(text,p__23785){
var map__23788 = p__23785;
var map__23788__$1 = ((((!((map__23788 == null)))?((((map__23788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23788):map__23788);
var state = map__23788__$1;
var code = cljs.core.get.call(null,map__23788__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__23788__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var references = cljs.core.get.call(null,map__23788__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(cljs.core.truth_((function (){var or__16358__auto__ = (references == null);
if(or__16358__auto__){
return or__16358__auto__;
} else {
var or__16358__auto____$1 = code;
if(cljs.core.truth_(or__16358__auto____$1)){
return or__16358__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.reference.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return markdown.links.freeze_links.call(null,references,text,state);

}
}
});
markdown.links.implicit_reference_link = (function markdown$links$implicit_reference_link(text,state){
var replacement_text = clojure.string.replace.call(null,text,/\[([^\]]+)\]\[\]/,"[$1][$1]");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replacement_text,state], null);
});
markdown.links.footnote = (function markdown$links$footnote(text){
return cljs.core.re_find.call(null,/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.links.parse_footnote_link = (function markdown$links$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim.call(null,line);
var temp__4425__auto__ = markdown.links.footnote.call(null,trimmed);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1)))], null),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_footnote_link = (function markdown$links$replace_footnote_link(footnotes,footnote){
var next_fn_id = new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636).cljs$core$IFn$_invoke$arity$1(footnotes);
var link = [cljs.core.str("#fn-"),cljs.core.str(next_fn_id)].join('');
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("' id='fnref"),cljs.core.str(next_fn_id),cljs.core.str("'><sup>"),cljs.core.str(next_fn_id),cljs.core.str("</sup></a>")].join('');
});
markdown.links.replace_all_footnote_links = (function markdown$links$replace_all_footnote_links(text,p__23790){
while(true){
var map__23793 = p__23790;
var map__23793__$1 = ((((!((map__23793 == null)))?((((map__23793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23793):map__23793);
var state = map__23793__$1;
var footnotes = cljs.core.get.call(null,map__23793__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find.call(null,matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first.call(null,text,matcher,cljs.core.partial.call(null,markdown.links.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null))], null),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),match], null)));
var G__23795 = next_text;
var G__23796 = next_state;
text = G__23795;
p__23790 = G__23796;
continue;
}
break;
}
});
markdown.links.footnote_link = (function markdown$links$footnote_link(text,p__23797){
var map__23801 = p__23797;
var map__23801__$1 = ((((!((map__23801 == null)))?((((map__23801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23801):map__23801);
var state = map__23801__$1;
var code = cljs.core.get.call(null,map__23801__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__23801__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var footnotes = cljs.core.get.call(null,map__23801__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
if(cljs.core.truth_((function (){var or__16358__auto__ = (new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972).cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__16358__auto__){
return or__16358__auto__;
} else {
var or__16358__auto____$1 = code;
if(cljs.core.truth_(or__16358__auto____$1)){
return or__16358__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.footnote.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__23803 = markdown.links.replace_all_footnote_links.call(null,text,state);
var text__$1 = cljs.core.nth.call(null,vec__23803,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__23803,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.links.make_image_reference = (function markdown$links$make_image_reference(src,alt,title){
var title_text = [cljs.core.str((cljs.core.truth_(title)?[cljs.core.str("\" title="),cljs.core.str(clojure.string.join.call(null,title)),cljs.core.str("")].join(''):"\""))].join('');
return [cljs.core.str("<img src=\""),cljs.core.str(src),cljs.core.str("\" alt=\""),cljs.core.str(alt),cljs.core.str(title_text),cljs.core.str(" />")].join('');
});
markdown.links.image_reference_link = (function markdown$links$image_reference_link(text,p__23804){
var map__23808 = p__23804;
var map__23808__$1 = ((((!((map__23808 == null)))?((((map__23808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23808):map__23808);
var state = map__23808__$1;
var references = cljs.core.get.call(null,map__23808__$1,new cljs.core.Keyword(null,"references","references",882562509));
if((cljs.core.not.call(null,new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_.call(null,references))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var matcher = /!\[([^\]]+)\]\s*(\[[a-zA-Z0-9 ]+\])/;
var matches = cljs.core.distinct.call(null,cljs.core.re_seq.call(null,matcher,text));
var ms = matches;
var new_text = text;
while(true){
if(cljs.core.seq.call(null,ms)){
var vec__23810 = cljs.core.first.call(null,ms);
var m = cljs.core.nth.call(null,vec__23810,(0),null);
var alt = cljs.core.nth.call(null,vec__23810,(1),null);
var ref = cljs.core.nth.call(null,vec__23810,(2),null);
var refval = cljs.core.get.call(null,references,ref);
var im = markdown.links.make_image_reference.call(null,cljs.core.first.call(null,refval),alt,cljs.core.second.call(null,refval));
var G__23811 = cljs.core.rest.call(null,ms);
var G__23812 = clojure.string.replace.call(null,new_text,m,im);
ms = G__23811;
new_text = G__23812;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_text,state], null);
}
break;
}
}
});

//# sourceMappingURL=links.js.map