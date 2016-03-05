// Compiled by ClojureScript 1.7.145 {}
goog.provide('technologies.chart');
goog.require('cljs.core');
goog.require('cljsjs.d3');
goog.require('reagent.core');
technologies.chart.d3 = window.d3;
technologies.chart.render_chart = (function technologies$chart$render_chart(chart_size,el,data,colours){
var chart_data = cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.call(null,(function (p1__20418_SHARP_){
return cljs.core.assoc.call(null,p1__20418_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__16344__auto__ = new cljs.core.Keyword(null,"experience","experience",1091946507).cljs$core$IFn$_invoke$arity$1(p1__20418_SHARP_);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return 0.1;
}
})());
}),data)));
var layout = technologies.chart.d3.layout.pack().sort(null).size(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null))).padding(1.5);
var node = technologies.chart.d3.select(el).attr("viewBox",[cljs.core.str("0 0 "),cljs.core.str(chart_size),cljs.core.str(" "),cljs.core.str(chart_size)].join('')).selectAll("g").data(layout.nodes(chart_data).filter(((function (chart_data,layout){
return (function (p1__20419_SHARP_){
return cljs.core.not.call(null,p1__20419_SHARP_.children);
});})(chart_data,layout))
),((function (chart_data,layout){
return (function (p1__20420_SHARP_){
return p1__20420_SHARP_.name;
});})(chart_data,layout))
);
var newGroup = node.enter().append("g").attr("transform",[cljs.core.str("translate("),cljs.core.str((chart_size / (2))),cljs.core.str(","),cljs.core.str((chart_size / (2))),cljs.core.str(")")].join(''));
newGroup.append("circle");

newGroup.append("title");

newGroup.append("image");

node.exit().remove();

node.transition().duration((1000)).attr("transform",((function (chart_data,layout,node,newGroup){
return (function (p1__20421_SHARP_){
return [cljs.core.str("translate("),cljs.core.str(p1__20421_SHARP_.x),cljs.core.str(","),cljs.core.str(p1__20421_SHARP_.y),cljs.core.str(")")].join('');
});})(chart_data,layout,node,newGroup))
);

node.select("circle").attr("r",((function (chart_data,layout,node,newGroup){
return (function (p1__20422_SHARP_){
return p1__20422_SHARP_.r;
});})(chart_data,layout,node,newGroup))
).attr("fill",((function (chart_data,layout,node,newGroup){
return (function (p1__20423_SHARP_){
return cljs.core.keyword.call(null,p1__20423_SHARP_.type).call(null,colours);
});})(chart_data,layout,node,newGroup))
);

node.select("image").attr("width",((function (chart_data,layout,node,newGroup){
return (function (p1__20424_SHARP_){
return p1__20424_SHARP_.r;
});})(chart_data,layout,node,newGroup))
).attr("height",((function (chart_data,layout,node,newGroup){
return (function (p1__20425_SHARP_){
return p1__20425_SHARP_.r;
});})(chart_data,layout,node,newGroup))
).attr("x",((function (chart_data,layout,node,newGroup){
return (function (p1__20426_SHARP_){
return ((-1) * (p1__20426_SHARP_.r / (2)));
});})(chart_data,layout,node,newGroup))
).attr("y",((function (chart_data,layout,node,newGroup){
return (function (p1__20427_SHARP_){
return ((-1) * (p1__20427_SHARP_.r / (2)));
});})(chart_data,layout,node,newGroup))
).attr("xlink:href",((function (chart_data,layout,node,newGroup){
return (function (p1__20428_SHARP_){
return p1__20428_SHARP_.img;
});})(chart_data,layout,node,newGroup))
);

return node.select("title").text(((function (chart_data,layout,node,newGroup){
return (function (p1__20429_SHARP_){
return p1__20429_SHARP_.name;
});})(chart_data,layout,node,newGroup))
);
});
technologies.chart.page_layout = (function technologies$chart$page_layout(props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142)], null);
});
technologies.chart.component_update_func = (function technologies$chart$component_update_func(p1__20430_SHARP_){
var chart_size = new cljs.core.Keyword(null,"chart-size","chart-size",579695955).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,p1__20430_SHARP_));
var technologies__$1 = new cljs.core.Keyword(null,"technologies","technologies",2141321343).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,p1__20430_SHARP_));
var colours = new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,p1__20430_SHARP_));
return technologies.chart.render_chart.call(null,chart_size,reagent.core.dom_node.call(null,p1__20430_SHARP_),technologies__$1,colours);
});
technologies.chart.chart = cljs.core.with_meta.call(null,technologies.chart.page_layout,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),technologies.chart.component_update_func,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),technologies.chart.component_update_func], null));

//# sourceMappingURL=chart.js.map