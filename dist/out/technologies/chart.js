// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('technologies.chart');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
technologies.chart.d3 = window.d3;
technologies.chart.render_chart = (function technologies$chart$render_chart(chart_size,el,data,colours){
var chart_data = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$children,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13779_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13779_SHARP_,cljs.core.cst$kw$value,(function (){var or__4047__auto__ = cljs.core.cst$kw$experience.cljs$core$IFn$_invoke$arity$1(p1__13779_SHARP_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return 0.1;
}
})());
}),data)));
var layout = technologies.chart.d3.layout.pack().sort(null).size(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null))).padding(1.5);
var node = technologies.chart.d3.select(el).attr("viewBox",["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart_size)].join('')).selectAll("g").data(layout.nodes(chart_data).filter(((function (chart_data,layout){
return (function (p1__13780_SHARP_){
return cljs.core.not(p1__13780_SHARP_.children);
});})(chart_data,layout))
),((function (chart_data,layout){
return (function (p1__13781_SHARP_){
return p1__13781_SHARP_.name;
});})(chart_data,layout))
);
var newGroup = node.enter().append("g").attr("transform",["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((chart_size / (2))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((chart_size / (2))),")"].join(''));
newGroup.append("circle");

newGroup.append("title");

newGroup.append("image");

node.exit().remove();

node.transition().duration((1000)).attr("transform",((function (chart_data,layout,node,newGroup){
return (function (p1__13782_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13782_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13782_SHARP_.y),")"].join('');
});})(chart_data,layout,node,newGroup))
);

node.select("circle").attr("r",((function (chart_data,layout,node,newGroup){
return (function (p1__13783_SHARP_){
return p1__13783_SHARP_.r;
});})(chart_data,layout,node,newGroup))
).attr("fill",((function (chart_data,layout,node,newGroup){
return (function (p1__13784_SHARP_){
var fexpr__13791 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__13784_SHARP_.type);
return (fexpr__13791.cljs$core$IFn$_invoke$arity$1 ? fexpr__13791.cljs$core$IFn$_invoke$arity$1(colours) : fexpr__13791.call(null,colours));
});})(chart_data,layout,node,newGroup))
);

node.select("image").attr("width",((function (chart_data,layout,node,newGroup){
return (function (p1__13785_SHARP_){
return p1__13785_SHARP_.r;
});})(chart_data,layout,node,newGroup))
).attr("height",((function (chart_data,layout,node,newGroup){
return (function (p1__13786_SHARP_){
return p1__13786_SHARP_.r;
});})(chart_data,layout,node,newGroup))
).attr("x",((function (chart_data,layout,node,newGroup){
return (function (p1__13787_SHARP_){
return ((-1) * (p1__13787_SHARP_.r / (2)));
});})(chart_data,layout,node,newGroup))
).attr("y",((function (chart_data,layout,node,newGroup){
return (function (p1__13788_SHARP_){
return ((-1) * (p1__13788_SHARP_.r / (2)));
});})(chart_data,layout,node,newGroup))
).attr("xlink:href",((function (chart_data,layout,node,newGroup){
return (function (p1__13789_SHARP_){
return p1__13789_SHARP_.img;
});})(chart_data,layout,node,newGroup))
);

return node.select("title").text(((function (chart_data,layout,node,newGroup){
return (function (p1__13790_SHARP_){
return p1__13790_SHARP_.name;
});})(chart_data,layout,node,newGroup))
);
});
technologies.chart.page_layout = (function technologies$chart$page_layout(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,(1000)], null)], null)], null);
});
technologies.chart.component_update_func = (function technologies$chart$component_update_func(p1__13792_SHARP_){
var chart_size = cljs.core.cst$kw$chart_DASH_size.cljs$core$IFn$_invoke$arity$1(reagent.core.props(p1__13792_SHARP_));
var technologies__$1 = cljs.core.cst$kw$technologies.cljs$core$IFn$_invoke$arity$1(reagent.core.props(p1__13792_SHARP_));
var colours = cljs.core.cst$kw$colours.cljs$core$IFn$_invoke$arity$1(reagent.core.props(p1__13792_SHARP_));
return technologies.chart.render_chart(chart_size,reagent.core.dom_node(p1__13792_SHARP_),technologies__$1,colours);
});
technologies.chart.chart = cljs.core.with_meta(technologies.chart.page_layout,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,technologies.chart.component_update_func,cljs.core.cst$kw$component_DASH_did_DASH_update,technologies.chart.component_update_func], null));
