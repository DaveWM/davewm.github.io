// Compiled by ClojureScript 1.10.439 {}
goog.provide('technologies.chart');
goog.require('cljs.core');
goog.require('cljsjs.d3');
goog.require('reagent.core');
technologies.chart.d3 = window.d3;
technologies.chart.render_chart = (function technologies$chart$render_chart(chart_size,el,data,colours){
var chart_data = cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.call(null,(function (p1__27436_SHARP_){
return cljs.core.assoc.call(null,p1__27436_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"experience","experience",1091946507).cljs$core$IFn$_invoke$arity$1(p1__27436_SHARP_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return 0.1;
}
})());
}),data)));
var layout = technologies.chart.d3.layout.pack().sort(null).size(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null))).padding(1.5);
var node = technologies.chart.d3.select(el).attr("viewBox",["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart_size)].join('')).selectAll("g").data(layout.nodes(chart_data).filter(((function (chart_data,layout){
return (function (p1__27437_SHARP_){
return cljs.core.not.call(null,p1__27437_SHARP_.children);
});})(chart_data,layout))
),((function (chart_data,layout){
return (function (p1__27438_SHARP_){
return p1__27438_SHARP_.name;
});})(chart_data,layout))
);
var newGroup = node.enter().append("g").attr("transform",["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((chart_size / (2))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((chart_size / (2))),")"].join(''));
newGroup.append("circle");

newGroup.append("title");

newGroup.append("image");

node.exit().remove();

node.transition().duration((1000)).attr("transform",((function (chart_data,layout,node,newGroup){
return (function (p1__27439_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27439_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27439_SHARP_.y),")"].join('');
});})(chart_data,layout,node,newGroup))
);

node.select("circle").attr("r",((function (chart_data,layout,node,newGroup){
return (function (p1__27440_SHARP_){
return p1__27440_SHARP_.r;
});})(chart_data,layout,node,newGroup))
).attr("fill",((function (chart_data,layout,node,newGroup){
return (function (p1__27441_SHARP_){
return cljs.core.keyword.call(null,p1__27441_SHARP_.type).call(null,colours);
});})(chart_data,layout,node,newGroup))
);

node.select("image").attr("width",((function (chart_data,layout,node,newGroup){
return (function (p1__27442_SHARP_){
return p1__27442_SHARP_.r;
});})(chart_data,layout,node,newGroup))
).attr("height",((function (chart_data,layout,node,newGroup){
return (function (p1__27443_SHARP_){
return p1__27443_SHARP_.r;
});})(chart_data,layout,node,newGroup))
).attr("x",((function (chart_data,layout,node,newGroup){
return (function (p1__27444_SHARP_){
return ((-1) * (p1__27444_SHARP_.r / (2)));
});})(chart_data,layout,node,newGroup))
).attr("y",((function (chart_data,layout,node,newGroup){
return (function (p1__27445_SHARP_){
return ((-1) * (p1__27445_SHARP_.r / (2)));
});})(chart_data,layout,node,newGroup))
).attr("xlink:href",((function (chart_data,layout,node,newGroup){
return (function (p1__27446_SHARP_){
return p1__27446_SHARP_.img;
});})(chart_data,layout,node,newGroup))
);

return node.select("title").text(((function (chart_data,layout,node,newGroup){
return (function (p1__27447_SHARP_){
return p1__27447_SHARP_.name;
});})(chart_data,layout,node,newGroup))
);
});
technologies.chart.page_layout = (function technologies$chart$page_layout(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(1000)], null)], null)], null);
});
technologies.chart.component_update_func = (function technologies$chart$component_update_func(p1__27448_SHARP_){
var chart_size = new cljs.core.Keyword(null,"chart-size","chart-size",579695955).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,p1__27448_SHARP_));
var technologies__$1 = new cljs.core.Keyword(null,"technologies","technologies",2141321343).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,p1__27448_SHARP_));
var colours = new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,p1__27448_SHARP_));
return technologies.chart.render_chart.call(null,chart_size,reagent.core.dom_node.call(null,p1__27448_SHARP_),technologies__$1,colours);
});
technologies.chart.chart = cljs.core.with_meta.call(null,technologies.chart.page_layout,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),technologies.chart.component_update_func,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),technologies.chart.component_update_func], null));

//# sourceMappingURL=chart.js.map?rel=1545936655841
