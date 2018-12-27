// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('technologies.page');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('technologies.chart');
goog.require('reagent_material_ui.core');
goog.require('clojure.set');
cljs.core.enable_console_print_BANG_();
technologies.page.chart_size = (100);
technologies.page.type_data = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$language,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colour,"blueviolet",cljs.core.cst$kw$name,"Language"], null),cljs.core.cst$kw$FE,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colour,"lightpink",cljs.core.cst$kw$name,"Front End"], null),cljs.core.cst$kw$BE,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colour,"#ff7f0e",cljs.core.cst$kw$name,"Back End"], null),cljs.core.cst$kw$tool,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colour,"#ffbb78",cljs.core.cst$kw$name,"Tool"], null),cljs.core.cst$kw$DataStore,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colour,"#2ca02c",cljs.core.cst$kw$name,"Data Store"], null),cljs.core.cst$kw$Testing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colour,"#98df8a",cljs.core.cst$kw$name,"Testing Tool"], null),cljs.core.cst$kw$Cloud,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colour,"lightslategray",cljs.core.cst$kw$name,"Cloud Platform"], null),cljs.core.cst$kw$Misc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colour,"lightblue",cljs.core.cst$kw$name,"Miscellaneous"], null)], null);
technologies.page.filters_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$types,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$experience,(0)),cljs.core.cst$kw$name,null));
technologies.page.filter_data = (function technologies$page$filter_data(filters,data){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__13836_SHARP_){
var G__13837 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(filters);
var G__13837__$1 = (((G__13837 == null))?null:G__13837.toLowerCase());
var G__13837__$2 = (((G__13837__$1 == null))?null:cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__13836_SHARP_).toLowerCase().indexOf(G__13837__$1));
if((G__13837__$2 == null)){
return null;
} else {
return ((0) > G__13837__$2);
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13835_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$experience,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13835_SHARP_,filters], null)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13834_SHARP_){
return ((cljs.core.empty_QMARK_(cljs.core.cst$kw$types.cljs$core$IFn$_invoke$arity$1(filters))) || (cljs.core.contains_QMARK_(cljs.core.cst$kw$types.cljs$core$IFn$_invoke$arity$1(filters),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p1__13834_SHARP_)))));
}),data)));
});
technologies.page.type_checkbox = (function technologies$page$type_checkbox(p__13839){
var vec__13840 = p__13839;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13840,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13840,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Checkbox,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$key,key,cljs.core.cst$kw$label,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(type),cljs.core.cst$kw$defaultChecked,cljs.core.contains_QMARK_(cljs.core.cst$kw$types.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(technologies.page.filters_atom)),key),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_width,(200),cljs.core.cst$kw$display,"inline-block"], null),cljs.core.cst$kw$iconStyle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,cljs.core.cst$kw$colour.cljs$core$IFn$_invoke$arity$1(type)], null),cljs.core.cst$kw$labelStyle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$colour.cljs$core$IFn$_invoke$arity$1(type)], null),cljs.core.cst$kw$onCheck,((function (vec__13840,key,type){
return (function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(technologies.page.filters_atom,((function (vec__13840,key,type){
return (function (p1__13838_SHARP_){
var checked = event.target.checked;
var operation = (cljs.core.truth_(checked)?clojure.set.union:cljs.core.remove);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__13838_SHARP_,cljs.core.cst$kw$types,((function (checked,operation,vec__13840,key,type){
return (function (types){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var G__13843 = cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
var G__13844 = types;
return (operation.cljs$core$IFn$_invoke$arity$2 ? operation.cljs$core$IFn$_invoke$arity$2(G__13843,G__13844) : operation.call(null,G__13843,G__13844));
})());
});})(checked,operation,vec__13840,key,type))
);
});})(vec__13840,key,type))
);
});})(vec__13840,key,type))
], null)], null);
});
technologies.page.page = (function technologies$page$page(p__13847){
var map__13848 = p__13847;
var map__13848__$1 = (((((!((map__13848 == null))))?(((((map__13848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13848):map__13848);
var technologies__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,cljs.core.cst$kw$technologies);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$middle_DASH_xs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-xs-12 card-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-xs-12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Filters",cljs.core.cst$kw$avatar,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$icon,reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"material-icons"], null),"filter_list"], null))], null)], null)),cljs.core.cst$kw$actAsExpander,true,cljs.core.cst$kw$showExpandableButton,true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardText,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expandable,true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"row"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-sm-6 col-xs-12"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Types"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(technologies.page.type_checkbox,technologies.page.type_data)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-sm-3 col-xs-12"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Experience"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Slider,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$defaultValue,cljs.core.cst$kw$experience.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(technologies.page.filters_atom)),cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$experience,technologies__$1)),cljs.core.cst$kw$onChange,((function (map__13848,map__13848__$1,technologies__$1){
return (function (event,value){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(technologies.page.filters_atom,((function (map__13848,map__13848__$1,technologies__$1){
return (function (p1__13845_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13845_SHARP_,cljs.core.cst$kw$experience,value);
});})(map__13848,map__13848__$1,technologies__$1))
);
});})(map__13848,map__13848__$1,technologies__$1))
], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-sm-3 col-xs-12"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.TextField,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defaultValue,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(technologies.page.filters_atom)),cljs.core.cst$kw$onChange,((function (map__13848,map__13848__$1,technologies__$1){
return (function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(technologies.page.filters_atom,((function (map__13848,map__13848__$1,technologies__$1){
return (function (p1__13846_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13846_SHARP_,cljs.core.cst$kw$name,event.target.value);
});})(map__13848,map__13848__$1,technologies__$1))
);
});})(map__13848,map__13848__$1,technologies__$1))
], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-xs-12 card-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"tech-chart"], null),(function (){var filtered_data = technologies.page.filter_data(cljs.core.deref(technologies.page.filters_atom),technologies__$1);
var colours_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (filtered_data,map__13848,map__13848__$1,technologies__$1){
return (function (result,p__13850){
var vec__13851 = p__13850;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13851,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13851,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,type,cljs.core.cst$kw$colour.cljs$core$IFn$_invoke$arity$1(val));
});})(filtered_data,map__13848,map__13848__$1,technologies__$1))
,cljs.core.PersistentArrayMap.EMPTY,technologies.page.type_data);
var chart_colour_key = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (filtered_data,colours_map,map__13848,map__13848__$1,technologies__$1){
return (function (result,p__13854){
var vec__13855 = p__13854;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13855,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13855,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"chart-key",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$colour.cljs$core$IFn$_invoke$arity$1(props)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(props)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"key-colour",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$colour.cljs$core$IFn$_invoke$arity$1(props)], null)], null)], null)], null));
});})(filtered_data,colours_map,map__13848,map__13848__$1,technologies__$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"chart-keys"], null)], null),technologies.page.type_data);
if(cljs.core.truth_((function (){var fexpr__13858 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.zero_QMARK_,cljs.core.count);
return (fexpr__13858.cljs$core$IFn$_invoke$arity$1 ? fexpr__13858.cljs$core$IFn$_invoke$arity$1(filtered_data) : fexpr__13858.call(null,filtered_data));
})())){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [technologies.chart.chart,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chart_DASH_size,technologies.page.chart_size,cljs.core.cst$kw$technologies,filtered_data,cljs.core.cst$kw$colours,colours_map], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The size of each bubble represents the experience I have with that technology."], null),chart_colour_key], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"No Technologies match the filters :("], null)], null);
}
})()], null)], null)], null)], null);
});
