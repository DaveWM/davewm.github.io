// Compiled by ClojureScript 1.7.145 {}
goog.provide('technologies.page');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('technologies.data');
goog.require('technologies.chart');
goog.require('reagent_material_ui.core');
cljs.core.enable_console_print_BANG_.call(null);
technologies.page.chart_size = (100);
technologies.page.types = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),technologies.data.data));
technologies.page.filters_atom = reagent.core.atom.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"types","types",590030639),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__27096_SHARP_){
return cljs.core.identity.call(null,cljs.core.PersistentArrayMap.fromArray([p1__27096_SHARP_,true], true, false));
}),technologies.page.types))),new cljs.core.Keyword(null,"experience","experience",1091946507),(0)),new cljs.core.Keyword(null,"name","name",1843675177),null));
technologies.page.type_data = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colour","colour",2137094554),"blueviolet",new cljs.core.Keyword(null,"name","name",1843675177),"Language"], null),new cljs.core.Keyword(null,"FE","FE",815406274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colour","colour",2137094554),"lightpink",new cljs.core.Keyword(null,"name","name",1843675177),"Front End"], null),new cljs.core.Keyword(null,"BE","BE",-533800574),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colour","colour",2137094554),"#ff7f0e",new cljs.core.Keyword(null,"name","name",1843675177),"Back End"], null),new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colour","colour",2137094554),"#ffbb78",new cljs.core.Keyword(null,"name","name",1843675177),"Tool"], null),new cljs.core.Keyword(null,"DataStore","DataStore",-1767362750),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colour","colour",2137094554),"#2ca02c",new cljs.core.Keyword(null,"name","name",1843675177),"Data Store"], null),new cljs.core.Keyword(null,"Testing","Testing",-467135930),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colour","colour",2137094554),"#98df8a",new cljs.core.Keyword(null,"name","name",1843675177),"Testing Tool"], null),new cljs.core.Keyword(null,"Cloud","Cloud",-723423588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colour","colour",2137094554),"lightslategray",new cljs.core.Keyword(null,"name","name",1843675177),"Cloud Platform"], null),new cljs.core.Keyword(null,"Misc","Misc",-1321649721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colour","colour",2137094554),"lightblue",new cljs.core.Keyword(null,"name","name",1843675177),"Miscellaneous"], null)], null);
technologies.page.filter_data = (function technologies$page$filter_data(filters,data){
cljs.core.print.call(null,filters);

return cljs.core.remove.call(null,(function (p1__27099_SHARP_){
var G__27101 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(filters);
var G__27101__$1 = (((G__27101 == null))?null:G__27101.toLowerCase());
var G__27101__$2 = (((G__27101__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27099_SHARP_).toLowerCase().indexOf(G__27101__$1));
var G__27101__$3 = (((G__27101__$2 == null))?null:((0) > G__27101__$2));
return G__27101__$3;
}),cljs.core.filter.call(null,(function (p1__27098_SHARP_){
return cljs.core.apply.call(null,cljs.core._GT_,cljs.core.map.call(null,new cljs.core.Keyword(null,"experience","experience",1091946507),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27098_SHARP_,filters], null)));
}),cljs.core.filter.call(null,(function (p1__27097_SHARP_){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__27097_SHARP_).call(null,new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(filters));
}),data)));
});
technologies.page.type_checkbox = (function technologies$page$type_checkbox(type){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Checkbox,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),type,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.get_in.call(null,technologies.page.type_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),cljs.core.get_in.call(null,cljs.core.deref.call(null,technologies.page.filters_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"types","types",590030639),type], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(300),new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.Keyword(null,"iconStyle","iconStyle",1185883564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.get_in.call(null,technologies.page.type_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"colour","colour",2137094554)], null))], null),new cljs.core.Keyword(null,"labelStyle","labelStyle",-1942994391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.get_in.call(null,technologies.page.type_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"colour","colour",2137094554)], null))], null),new cljs.core.Keyword(null,"onCheck","onCheck",-490696156),(function (event){
return cljs.core.swap_BANG_.call(null,technologies.page.filters_atom,(function (p1__27102_SHARP_){
return cljs.core.assoc_in.call(null,p1__27102_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"types","types",590030639),type], null),event.target.checked);
}));
})], null)], null);
});
technologies.page.page = (function technologies$page$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.middle-xs","div.row.middle-xs",132651383),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 card-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Filters",new cljs.core.Keyword(null,"avatar","avatar",-1607499307),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Avatar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"material-icons"], null),"filter_list"], null))], null)], null)),new cljs.core.Keyword(null,"actAsExpander","actAsExpander",-1502963333),true,new cljs.core.Keyword(null,"showExpandableButton","showExpandableButton",-1459489058),true], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardText,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expandable","expandable",-704609097),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Types"], null),cljs.core.doall.call(null,cljs.core.map.call(null,technologies.page.type_checkbox,technologies.page.types)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Divider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Experience"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Slider,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"experience","experience",1091946507).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,technologies.page.filters_atom)),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"experience","experience",1091946507),technologies.data.data)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (event,value){
cljs.core.print.call(null,value);

return cljs.core.swap_BANG_.call(null,technologies.page.filters_atom,(function (p1__27103_SHARP_){
return cljs.core.assoc.call(null,p1__27103_SHARP_,new cljs.core.Keyword(null,"experience","experience",1091946507),value);
}));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Divider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.TextField,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"floatingLabelText","floatingLabelText",-431719650),"Name",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,technologies.page.filters_atom)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (event){
return cljs.core.swap_BANG_.call(null,technologies.page.filters_atom,(function (p1__27104_SHARP_){
return cljs.core.assoc.call(null,p1__27104_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),event.target.value);
}));
})], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 card-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tech-chart"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The size of each bubble represents the experience I have with that technology."], null),(function (){var filtered_data = technologies.page.filter_data.call(null,cljs.core.deref.call(null,technologies.page.filters_atom),technologies.data.data);
var colours_map = cljs.core.reduce.call(null,((function (filtered_data){
return (function (result,p__27109){
var vec__27110 = p__27109;
var type = cljs.core.nth.call(null,vec__27110,(0),null);
var val = cljs.core.nth.call(null,vec__27110,(1),null);
return cljs.core.assoc.call(null,result,type,new cljs.core.Keyword(null,"colour","colour",2137094554).cljs$core$IFn$_invoke$arity$1(val));
});})(filtered_data))
,cljs.core.PersistentArrayMap.EMPTY,technologies.page.type_data);
var chart_colour_key = cljs.core.reduce.call(null,((function (filtered_data,colours_map){
return (function (result,p__27111){
var vec__27112 = p__27111;
var type = cljs.core.nth.call(null,vec__27112,(0),null);
var props = cljs.core.nth.call(null,vec__27112,(1),null);
return cljs.core.conj.call(null,result,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"chart-key",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"colour","colour",2137094554).cljs$core$IFn$_invoke$arity$1(props)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(props)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"key-colour",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"colour","colour",2137094554).cljs$core$IFn$_invoke$arity$1(props)], null)], null)], null)], null));
});})(filtered_data,colours_map))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Paper,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"chart-keys"], null)], null),technologies.page.type_data);
if(cljs.core.truth_(cljs.core.comp.call(null,cljs.core.not,cljs.core.zero_QMARK_,cljs.core.count).call(null,filtered_data))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),chart_colour_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [technologies.chart.chart,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chart-size","chart-size",579695955),technologies.page.chart_size,new cljs.core.Keyword(null,"technologies","technologies",2141321343),filtered_data,new cljs.core.Keyword(null,"colours","colours",659341642),colours_map], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"No Technologies match the filters :("], null)], null);
}
})()], null)], null)], null)], null);
});

//# sourceMappingURL=page.js.map