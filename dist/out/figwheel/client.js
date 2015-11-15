// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25679 = cljs.core._EQ_;
var expr__25680 = (function (){var or__16344__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25679.call(null,"true",expr__25680))){
return true;
} else {
if(cljs.core.truth_(pred__25679.call(null,"false",expr__25680))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25680)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25682__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25683__i = 0, G__25683__a = new Array(arguments.length -  0);
while (G__25683__i < G__25683__a.length) {G__25683__a[G__25683__i] = arguments[G__25683__i + 0]; ++G__25683__i;}
  args = new cljs.core.IndexedSeq(G__25683__a,0);
} 
return G__25682__delegate.call(this,args);};
G__25682.cljs$lang$maxFixedArity = 0;
G__25682.cljs$lang$applyTo = (function (arglist__25684){
var args = cljs.core.seq(arglist__25684);
return G__25682__delegate(args);
});
G__25682.cljs$core$IFn$_invoke$arity$variadic = G__25682__delegate;
return G__25682;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25685){
var map__25688 = p__25685;
var map__25688__$1 = ((((!((map__25688 == null)))?((((map__25688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25688):map__25688);
var message = cljs.core.get.call(null,map__25688__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25688__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16344__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16344__auto__)){
return or__16344__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16332__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16332__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16332__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19424__auto___25850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___25850,ch){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___25850,ch){
return (function (state_25819){
var state_val_25820 = (state_25819[(1)]);
if((state_val_25820 === (7))){
var inst_25815 = (state_25819[(2)]);
var state_25819__$1 = state_25819;
var statearr_25821_25851 = state_25819__$1;
(statearr_25821_25851[(2)] = inst_25815);

(statearr_25821_25851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (1))){
var state_25819__$1 = state_25819;
var statearr_25822_25852 = state_25819__$1;
(statearr_25822_25852[(2)] = null);

(statearr_25822_25852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (4))){
var inst_25772 = (state_25819[(7)]);
var inst_25772__$1 = (state_25819[(2)]);
var state_25819__$1 = (function (){var statearr_25823 = state_25819;
(statearr_25823[(7)] = inst_25772__$1);

return statearr_25823;
})();
if(cljs.core.truth_(inst_25772__$1)){
var statearr_25824_25853 = state_25819__$1;
(statearr_25824_25853[(1)] = (5));

} else {
var statearr_25825_25854 = state_25819__$1;
(statearr_25825_25854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (15))){
var inst_25779 = (state_25819[(8)]);
var inst_25794 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25779);
var inst_25795 = cljs.core.first.call(null,inst_25794);
var inst_25796 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25795);
var inst_25797 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25796)].join('');
var inst_25798 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25797);
var state_25819__$1 = state_25819;
var statearr_25826_25855 = state_25819__$1;
(statearr_25826_25855[(2)] = inst_25798);

(statearr_25826_25855[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (13))){
var inst_25803 = (state_25819[(2)]);
var state_25819__$1 = state_25819;
var statearr_25827_25856 = state_25819__$1;
(statearr_25827_25856[(2)] = inst_25803);

(statearr_25827_25856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (6))){
var state_25819__$1 = state_25819;
var statearr_25828_25857 = state_25819__$1;
(statearr_25828_25857[(2)] = null);

(statearr_25828_25857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (17))){
var inst_25801 = (state_25819[(2)]);
var state_25819__$1 = state_25819;
var statearr_25829_25858 = state_25819__$1;
(statearr_25829_25858[(2)] = inst_25801);

(statearr_25829_25858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (3))){
var inst_25817 = (state_25819[(2)]);
var state_25819__$1 = state_25819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25819__$1,inst_25817);
} else {
if((state_val_25820 === (12))){
var inst_25778 = (state_25819[(9)]);
var inst_25792 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25778,opts);
var state_25819__$1 = state_25819;
if(cljs.core.truth_(inst_25792)){
var statearr_25830_25859 = state_25819__$1;
(statearr_25830_25859[(1)] = (15));

} else {
var statearr_25831_25860 = state_25819__$1;
(statearr_25831_25860[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (2))){
var state_25819__$1 = state_25819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25819__$1,(4),ch);
} else {
if((state_val_25820 === (11))){
var inst_25779 = (state_25819[(8)]);
var inst_25784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25785 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25779);
var inst_25786 = cljs.core.async.timeout.call(null,(1000));
var inst_25787 = [inst_25785,inst_25786];
var inst_25788 = (new cljs.core.PersistentVector(null,2,(5),inst_25784,inst_25787,null));
var state_25819__$1 = state_25819;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25819__$1,(14),inst_25788);
} else {
if((state_val_25820 === (9))){
var inst_25779 = (state_25819[(8)]);
var inst_25805 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25806 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25779);
var inst_25807 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25806);
var inst_25808 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25807)].join('');
var inst_25809 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25808);
var state_25819__$1 = (function (){var statearr_25832 = state_25819;
(statearr_25832[(10)] = inst_25805);

return statearr_25832;
})();
var statearr_25833_25861 = state_25819__$1;
(statearr_25833_25861[(2)] = inst_25809);

(statearr_25833_25861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (5))){
var inst_25772 = (state_25819[(7)]);
var inst_25774 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25775 = (new cljs.core.PersistentArrayMap(null,2,inst_25774,null));
var inst_25776 = (new cljs.core.PersistentHashSet(null,inst_25775,null));
var inst_25777 = figwheel.client.focus_msgs.call(null,inst_25776,inst_25772);
var inst_25778 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25777);
var inst_25779 = cljs.core.first.call(null,inst_25777);
var inst_25780 = figwheel.client.autoload_QMARK_.call(null);
var state_25819__$1 = (function (){var statearr_25834 = state_25819;
(statearr_25834[(9)] = inst_25778);

(statearr_25834[(8)] = inst_25779);

return statearr_25834;
})();
if(cljs.core.truth_(inst_25780)){
var statearr_25835_25862 = state_25819__$1;
(statearr_25835_25862[(1)] = (8));

} else {
var statearr_25836_25863 = state_25819__$1;
(statearr_25836_25863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (14))){
var inst_25790 = (state_25819[(2)]);
var state_25819__$1 = state_25819;
var statearr_25837_25864 = state_25819__$1;
(statearr_25837_25864[(2)] = inst_25790);

(statearr_25837_25864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (16))){
var state_25819__$1 = state_25819;
var statearr_25838_25865 = state_25819__$1;
(statearr_25838_25865[(2)] = null);

(statearr_25838_25865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (10))){
var inst_25811 = (state_25819[(2)]);
var state_25819__$1 = (function (){var statearr_25839 = state_25819;
(statearr_25839[(11)] = inst_25811);

return statearr_25839;
})();
var statearr_25840_25866 = state_25819__$1;
(statearr_25840_25866[(2)] = null);

(statearr_25840_25866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (8))){
var inst_25778 = (state_25819[(9)]);
var inst_25782 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25778,opts);
var state_25819__$1 = state_25819;
if(cljs.core.truth_(inst_25782)){
var statearr_25841_25867 = state_25819__$1;
(statearr_25841_25867[(1)] = (11));

} else {
var statearr_25842_25868 = state_25819__$1;
(statearr_25842_25868[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19424__auto___25850,ch))
;
return ((function (switch__19359__auto__,c__19424__auto___25850,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19360__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19360__auto____0 = (function (){
var statearr_25846 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25846[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19360__auto__);

(statearr_25846[(1)] = (1));

return statearr_25846;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19360__auto____1 = (function (state_25819){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_25819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e25847){if((e25847 instanceof Object)){
var ex__19363__auto__ = e25847;
var statearr_25848_25869 = state_25819;
(statearr_25848_25869[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25870 = state_25819;
state_25819 = G__25870;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19360__auto__ = function(state_25819){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19360__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19360__auto____1.call(this,state_25819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19360__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19360__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___25850,ch))
})();
var state__19426__auto__ = (function (){var statearr_25849 = f__19425__auto__.call(null);
(statearr_25849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___25850);

return statearr_25849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___25850,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25871_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25871_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25878 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25878){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25876 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25877 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25876,_STAR_print_newline_STAR_25877,base_path_25878){
return (function() { 
var G__25879__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25880__i = 0, G__25880__a = new Array(arguments.length -  0);
while (G__25880__i < G__25880__a.length) {G__25880__a[G__25880__i] = arguments[G__25880__i + 0]; ++G__25880__i;}
  args = new cljs.core.IndexedSeq(G__25880__a,0);
} 
return G__25879__delegate.call(this,args);};
G__25879.cljs$lang$maxFixedArity = 0;
G__25879.cljs$lang$applyTo = (function (arglist__25881){
var args = cljs.core.seq(arglist__25881);
return G__25879__delegate(args);
});
G__25879.cljs$core$IFn$_invoke$arity$variadic = G__25879__delegate;
return G__25879;
})()
;})(_STAR_print_fn_STAR_25876,_STAR_print_newline_STAR_25877,base_path_25878))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25877;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25876;
}}catch (e25875){if((e25875 instanceof Error)){
var e = e25875;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25878], null));
} else {
var e = e25875;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25878))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25882){
var map__25889 = p__25882;
var map__25889__$1 = ((((!((map__25889 == null)))?((((map__25889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25889):map__25889);
var opts = map__25889__$1;
var build_id = cljs.core.get.call(null,map__25889__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25889,map__25889__$1,opts,build_id){
return (function (p__25891){
var vec__25892 = p__25891;
var map__25893 = cljs.core.nth.call(null,vec__25892,(0),null);
var map__25893__$1 = ((((!((map__25893 == null)))?((((map__25893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25893):map__25893);
var msg = map__25893__$1;
var msg_name = cljs.core.get.call(null,map__25893__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25892,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25892,map__25893,map__25893__$1,msg,msg_name,_,map__25889,map__25889__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25892,map__25893,map__25893__$1,msg,msg_name,_,map__25889,map__25889__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25889,map__25889__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25899){
var vec__25900 = p__25899;
var map__25901 = cljs.core.nth.call(null,vec__25900,(0),null);
var map__25901__$1 = ((((!((map__25901 == null)))?((((map__25901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25901):map__25901);
var msg = map__25901__$1;
var msg_name = cljs.core.get.call(null,map__25901__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25900,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25903){
var map__25913 = p__25903;
var map__25913__$1 = ((((!((map__25913 == null)))?((((map__25913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25913):map__25913);
var on_compile_warning = cljs.core.get.call(null,map__25913__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25913__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25913,map__25913__$1,on_compile_warning,on_compile_fail){
return (function (p__25915){
var vec__25916 = p__25915;
var map__25917 = cljs.core.nth.call(null,vec__25916,(0),null);
var map__25917__$1 = ((((!((map__25917 == null)))?((((map__25917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25917):map__25917);
var msg = map__25917__$1;
var msg_name = cljs.core.get.call(null,map__25917__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25916,(1));
var pred__25919 = cljs.core._EQ_;
var expr__25920 = msg_name;
if(cljs.core.truth_(pred__25919.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25920))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25919.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25920))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25913,map__25913__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto__,msg_hist,msg_names,msg){
return (function (state_26136){
var state_val_26137 = (state_26136[(1)]);
if((state_val_26137 === (7))){
var inst_26060 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
if(cljs.core.truth_(inst_26060)){
var statearr_26138_26184 = state_26136__$1;
(statearr_26138_26184[(1)] = (8));

} else {
var statearr_26139_26185 = state_26136__$1;
(statearr_26139_26185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (20))){
var inst_26130 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26140_26186 = state_26136__$1;
(statearr_26140_26186[(2)] = inst_26130);

(statearr_26140_26186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (27))){
var inst_26126 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26141_26187 = state_26136__$1;
(statearr_26141_26187[(2)] = inst_26126);

(statearr_26141_26187[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (1))){
var inst_26053 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26136__$1 = state_26136;
if(cljs.core.truth_(inst_26053)){
var statearr_26142_26188 = state_26136__$1;
(statearr_26142_26188[(1)] = (2));

} else {
var statearr_26143_26189 = state_26136__$1;
(statearr_26143_26189[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (24))){
var inst_26128 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26144_26190 = state_26136__$1;
(statearr_26144_26190[(2)] = inst_26128);

(statearr_26144_26190[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (4))){
var inst_26134 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26136__$1,inst_26134);
} else {
if((state_val_26137 === (15))){
var inst_26132 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26145_26191 = state_26136__$1;
(statearr_26145_26191[(2)] = inst_26132);

(statearr_26145_26191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (21))){
var inst_26091 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26146_26192 = state_26136__$1;
(statearr_26146_26192[(2)] = inst_26091);

(statearr_26146_26192[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (31))){
var inst_26115 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26136__$1 = state_26136;
if(cljs.core.truth_(inst_26115)){
var statearr_26147_26193 = state_26136__$1;
(statearr_26147_26193[(1)] = (34));

} else {
var statearr_26148_26194 = state_26136__$1;
(statearr_26148_26194[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (32))){
var inst_26124 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26149_26195 = state_26136__$1;
(statearr_26149_26195[(2)] = inst_26124);

(statearr_26149_26195[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (33))){
var inst_26113 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26150_26196 = state_26136__$1;
(statearr_26150_26196[(2)] = inst_26113);

(statearr_26150_26196[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (13))){
var inst_26074 = figwheel.client.heads_up.clear.call(null);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(16),inst_26074);
} else {
if((state_val_26137 === (22))){
var inst_26095 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26096 = figwheel.client.heads_up.append_message.call(null,inst_26095);
var state_26136__$1 = state_26136;
var statearr_26151_26197 = state_26136__$1;
(statearr_26151_26197[(2)] = inst_26096);

(statearr_26151_26197[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (36))){
var inst_26122 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26152_26198 = state_26136__$1;
(statearr_26152_26198[(2)] = inst_26122);

(statearr_26152_26198[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (29))){
var inst_26106 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26153_26199 = state_26136__$1;
(statearr_26153_26199[(2)] = inst_26106);

(statearr_26153_26199[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (6))){
var inst_26055 = (state_26136[(7)]);
var state_26136__$1 = state_26136;
var statearr_26154_26200 = state_26136__$1;
(statearr_26154_26200[(2)] = inst_26055);

(statearr_26154_26200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (28))){
var inst_26102 = (state_26136[(2)]);
var inst_26103 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26104 = figwheel.client.heads_up.display_warning.call(null,inst_26103);
var state_26136__$1 = (function (){var statearr_26155 = state_26136;
(statearr_26155[(8)] = inst_26102);

return statearr_26155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(29),inst_26104);
} else {
if((state_val_26137 === (25))){
var inst_26100 = figwheel.client.heads_up.clear.call(null);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(28),inst_26100);
} else {
if((state_val_26137 === (34))){
var inst_26117 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(37),inst_26117);
} else {
if((state_val_26137 === (17))){
var inst_26082 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26156_26201 = state_26136__$1;
(statearr_26156_26201[(2)] = inst_26082);

(statearr_26156_26201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (3))){
var inst_26072 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26136__$1 = state_26136;
if(cljs.core.truth_(inst_26072)){
var statearr_26157_26202 = state_26136__$1;
(statearr_26157_26202[(1)] = (13));

} else {
var statearr_26158_26203 = state_26136__$1;
(statearr_26158_26203[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (12))){
var inst_26068 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26159_26204 = state_26136__$1;
(statearr_26159_26204[(2)] = inst_26068);

(statearr_26159_26204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (2))){
var inst_26055 = (state_26136[(7)]);
var inst_26055__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26136__$1 = (function (){var statearr_26160 = state_26136;
(statearr_26160[(7)] = inst_26055__$1);

return statearr_26160;
})();
if(cljs.core.truth_(inst_26055__$1)){
var statearr_26161_26205 = state_26136__$1;
(statearr_26161_26205[(1)] = (5));

} else {
var statearr_26162_26206 = state_26136__$1;
(statearr_26162_26206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (23))){
var inst_26098 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26136__$1 = state_26136;
if(cljs.core.truth_(inst_26098)){
var statearr_26163_26207 = state_26136__$1;
(statearr_26163_26207[(1)] = (25));

} else {
var statearr_26164_26208 = state_26136__$1;
(statearr_26164_26208[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (35))){
var state_26136__$1 = state_26136;
var statearr_26165_26209 = state_26136__$1;
(statearr_26165_26209[(2)] = null);

(statearr_26165_26209[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (19))){
var inst_26093 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26136__$1 = state_26136;
if(cljs.core.truth_(inst_26093)){
var statearr_26166_26210 = state_26136__$1;
(statearr_26166_26210[(1)] = (22));

} else {
var statearr_26167_26211 = state_26136__$1;
(statearr_26167_26211[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (11))){
var inst_26064 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26168_26212 = state_26136__$1;
(statearr_26168_26212[(2)] = inst_26064);

(statearr_26168_26212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (9))){
var inst_26066 = figwheel.client.heads_up.clear.call(null);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(12),inst_26066);
} else {
if((state_val_26137 === (5))){
var inst_26057 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26136__$1 = state_26136;
var statearr_26169_26213 = state_26136__$1;
(statearr_26169_26213[(2)] = inst_26057);

(statearr_26169_26213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (14))){
var inst_26084 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26136__$1 = state_26136;
if(cljs.core.truth_(inst_26084)){
var statearr_26170_26214 = state_26136__$1;
(statearr_26170_26214[(1)] = (18));

} else {
var statearr_26171_26215 = state_26136__$1;
(statearr_26171_26215[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (26))){
var inst_26108 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26136__$1 = state_26136;
if(cljs.core.truth_(inst_26108)){
var statearr_26172_26216 = state_26136__$1;
(statearr_26172_26216[(1)] = (30));

} else {
var statearr_26173_26217 = state_26136__$1;
(statearr_26173_26217[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (16))){
var inst_26076 = (state_26136[(2)]);
var inst_26077 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26078 = figwheel.client.format_messages.call(null,inst_26077);
var inst_26079 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26080 = figwheel.client.heads_up.display_error.call(null,inst_26078,inst_26079);
var state_26136__$1 = (function (){var statearr_26174 = state_26136;
(statearr_26174[(9)] = inst_26076);

return statearr_26174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(17),inst_26080);
} else {
if((state_val_26137 === (30))){
var inst_26110 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26111 = figwheel.client.heads_up.display_warning.call(null,inst_26110);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(33),inst_26111);
} else {
if((state_val_26137 === (10))){
var inst_26070 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26175_26218 = state_26136__$1;
(statearr_26175_26218[(2)] = inst_26070);

(statearr_26175_26218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (18))){
var inst_26086 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26087 = figwheel.client.format_messages.call(null,inst_26086);
var inst_26088 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26089 = figwheel.client.heads_up.display_error.call(null,inst_26087,inst_26088);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(21),inst_26089);
} else {
if((state_val_26137 === (37))){
var inst_26119 = (state_26136[(2)]);
var state_26136__$1 = state_26136;
var statearr_26176_26219 = state_26136__$1;
(statearr_26176_26219[(2)] = inst_26119);

(statearr_26176_26219[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26137 === (8))){
var inst_26062 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26136__$1 = state_26136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26136__$1,(11),inst_26062);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19424__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19359__auto__,c__19424__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto____0 = (function (){
var statearr_26180 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26180[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto__);

(statearr_26180[(1)] = (1));

return statearr_26180;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto____1 = (function (state_26136){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_26136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e26181){if((e26181 instanceof Object)){
var ex__19363__auto__ = e26181;
var statearr_26182_26220 = state_26136;
(statearr_26182_26220[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26221 = state_26136;
state_26136 = G__26221;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto__ = function(state_26136){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto____1.call(this,state_26136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__,msg_hist,msg_names,msg))
})();
var state__19426__auto__ = (function (){var statearr_26183 = f__19425__auto__.call(null);
(statearr_26183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_26183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto__,msg_hist,msg_names,msg))
);

return c__19424__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19424__auto___26284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto___26284,ch){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto___26284,ch){
return (function (state_26267){
var state_val_26268 = (state_26267[(1)]);
if((state_val_26268 === (1))){
var state_26267__$1 = state_26267;
var statearr_26269_26285 = state_26267__$1;
(statearr_26269_26285[(2)] = null);

(statearr_26269_26285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26268 === (2))){
var state_26267__$1 = state_26267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26267__$1,(4),ch);
} else {
if((state_val_26268 === (3))){
var inst_26265 = (state_26267[(2)]);
var state_26267__$1 = state_26267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26267__$1,inst_26265);
} else {
if((state_val_26268 === (4))){
var inst_26255 = (state_26267[(7)]);
var inst_26255__$1 = (state_26267[(2)]);
var state_26267__$1 = (function (){var statearr_26270 = state_26267;
(statearr_26270[(7)] = inst_26255__$1);

return statearr_26270;
})();
if(cljs.core.truth_(inst_26255__$1)){
var statearr_26271_26286 = state_26267__$1;
(statearr_26271_26286[(1)] = (5));

} else {
var statearr_26272_26287 = state_26267__$1;
(statearr_26272_26287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26268 === (5))){
var inst_26255 = (state_26267[(7)]);
var inst_26257 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26255);
var state_26267__$1 = state_26267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26267__$1,(8),inst_26257);
} else {
if((state_val_26268 === (6))){
var state_26267__$1 = state_26267;
var statearr_26273_26288 = state_26267__$1;
(statearr_26273_26288[(2)] = null);

(statearr_26273_26288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26268 === (7))){
var inst_26263 = (state_26267[(2)]);
var state_26267__$1 = state_26267;
var statearr_26274_26289 = state_26267__$1;
(statearr_26274_26289[(2)] = inst_26263);

(statearr_26274_26289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26268 === (8))){
var inst_26259 = (state_26267[(2)]);
var state_26267__$1 = (function (){var statearr_26275 = state_26267;
(statearr_26275[(8)] = inst_26259);

return statearr_26275;
})();
var statearr_26276_26290 = state_26267__$1;
(statearr_26276_26290[(2)] = null);

(statearr_26276_26290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19424__auto___26284,ch))
;
return ((function (switch__19359__auto__,c__19424__auto___26284,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19360__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19360__auto____0 = (function (){
var statearr_26280 = [null,null,null,null,null,null,null,null,null];
(statearr_26280[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19360__auto__);

(statearr_26280[(1)] = (1));

return statearr_26280;
});
var figwheel$client$heads_up_plugin_$_state_machine__19360__auto____1 = (function (state_26267){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_26267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e26281){if((e26281 instanceof Object)){
var ex__19363__auto__ = e26281;
var statearr_26282_26291 = state_26267;
(statearr_26282_26291[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26292 = state_26267;
state_26267 = G__26292;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19360__auto__ = function(state_26267){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19360__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19360__auto____1.call(this,state_26267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19360__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19360__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto___26284,ch))
})();
var state__19426__auto__ = (function (){var statearr_26283 = f__19425__auto__.call(null);
(statearr_26283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto___26284);

return statearr_26283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto___26284,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19424__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19424__auto__){
return (function (){
var f__19425__auto__ = (function (){var switch__19359__auto__ = ((function (c__19424__auto__){
return (function (state_26313){
var state_val_26314 = (state_26313[(1)]);
if((state_val_26314 === (1))){
var inst_26308 = cljs.core.async.timeout.call(null,(3000));
var state_26313__$1 = state_26313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26313__$1,(2),inst_26308);
} else {
if((state_val_26314 === (2))){
var inst_26310 = (state_26313[(2)]);
var inst_26311 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26313__$1 = (function (){var statearr_26315 = state_26313;
(statearr_26315[(7)] = inst_26310);

return statearr_26315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26313__$1,inst_26311);
} else {
return null;
}
}
});})(c__19424__auto__))
;
return ((function (switch__19359__auto__,c__19424__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19360__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19360__auto____0 = (function (){
var statearr_26319 = [null,null,null,null,null,null,null,null];
(statearr_26319[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19360__auto__);

(statearr_26319[(1)] = (1));

return statearr_26319;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19360__auto____1 = (function (state_26313){
while(true){
var ret_value__19361__auto__ = (function (){try{while(true){
var result__19362__auto__ = switch__19359__auto__.call(null,state_26313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19362__auto__;
}
break;
}
}catch (e26320){if((e26320 instanceof Object)){
var ex__19363__auto__ = e26320;
var statearr_26321_26323 = state_26313;
(statearr_26321_26323[(5)] = ex__19363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26324 = state_26313;
state_26313 = G__26324;
continue;
} else {
return ret_value__19361__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19360__auto__ = function(state_26313){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19360__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19360__auto____1.call(this,state_26313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19360__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19360__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19360__auto__;
})()
;})(switch__19359__auto__,c__19424__auto__))
})();
var state__19426__auto__ = (function (){var statearr_26322 = f__19425__auto__.call(null);
(statearr_26322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19424__auto__);

return statearr_26322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19426__auto__);
});})(c__19424__auto__))
);

return c__19424__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26325){
var map__26332 = p__26325;
var map__26332__$1 = ((((!((map__26332 == null)))?((((map__26332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26332):map__26332);
var ed = map__26332__$1;
var formatted_exception = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26334_26338 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26335_26339 = null;
var count__26336_26340 = (0);
var i__26337_26341 = (0);
while(true){
if((i__26337_26341 < count__26336_26340)){
var msg_26342 = cljs.core._nth.call(null,chunk__26335_26339,i__26337_26341);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26342);

var G__26343 = seq__26334_26338;
var G__26344 = chunk__26335_26339;
var G__26345 = count__26336_26340;
var G__26346 = (i__26337_26341 + (1));
seq__26334_26338 = G__26343;
chunk__26335_26339 = G__26344;
count__26336_26340 = G__26345;
i__26337_26341 = G__26346;
continue;
} else {
var temp__4425__auto___26347 = cljs.core.seq.call(null,seq__26334_26338);
if(temp__4425__auto___26347){
var seq__26334_26348__$1 = temp__4425__auto___26347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26334_26348__$1)){
var c__17147__auto___26349 = cljs.core.chunk_first.call(null,seq__26334_26348__$1);
var G__26350 = cljs.core.chunk_rest.call(null,seq__26334_26348__$1);
var G__26351 = c__17147__auto___26349;
var G__26352 = cljs.core.count.call(null,c__17147__auto___26349);
var G__26353 = (0);
seq__26334_26338 = G__26350;
chunk__26335_26339 = G__26351;
count__26336_26340 = G__26352;
i__26337_26341 = G__26353;
continue;
} else {
var msg_26354 = cljs.core.first.call(null,seq__26334_26348__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26354);

var G__26355 = cljs.core.next.call(null,seq__26334_26348__$1);
var G__26356 = null;
var G__26357 = (0);
var G__26358 = (0);
seq__26334_26338 = G__26355;
chunk__26335_26339 = G__26356;
count__26336_26340 = G__26357;
i__26337_26341 = G__26358;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26359){
var map__26362 = p__26359;
var map__26362__$1 = ((((!((map__26362 == null)))?((((map__26362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26362):map__26362);
var w = map__26362__$1;
var message = cljs.core.get.call(null,map__26362__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16332__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16332__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16332__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26370 = cljs.core.seq.call(null,plugins);
var chunk__26371 = null;
var count__26372 = (0);
var i__26373 = (0);
while(true){
if((i__26373 < count__26372)){
var vec__26374 = cljs.core._nth.call(null,chunk__26371,i__26373);
var k = cljs.core.nth.call(null,vec__26374,(0),null);
var plugin = cljs.core.nth.call(null,vec__26374,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26376 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26370,chunk__26371,count__26372,i__26373,pl_26376,vec__26374,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26376.call(null,msg_hist);
});})(seq__26370,chunk__26371,count__26372,i__26373,pl_26376,vec__26374,k,plugin))
);
} else {
}

var G__26377 = seq__26370;
var G__26378 = chunk__26371;
var G__26379 = count__26372;
var G__26380 = (i__26373 + (1));
seq__26370 = G__26377;
chunk__26371 = G__26378;
count__26372 = G__26379;
i__26373 = G__26380;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26370);
if(temp__4425__auto__){
var seq__26370__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26370__$1)){
var c__17147__auto__ = cljs.core.chunk_first.call(null,seq__26370__$1);
var G__26381 = cljs.core.chunk_rest.call(null,seq__26370__$1);
var G__26382 = c__17147__auto__;
var G__26383 = cljs.core.count.call(null,c__17147__auto__);
var G__26384 = (0);
seq__26370 = G__26381;
chunk__26371 = G__26382;
count__26372 = G__26383;
i__26373 = G__26384;
continue;
} else {
var vec__26375 = cljs.core.first.call(null,seq__26370__$1);
var k = cljs.core.nth.call(null,vec__26375,(0),null);
var plugin = cljs.core.nth.call(null,vec__26375,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26385 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26370,chunk__26371,count__26372,i__26373,pl_26385,vec__26375,k,plugin,seq__26370__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26385.call(null,msg_hist);
});})(seq__26370,chunk__26371,count__26372,i__26373,pl_26385,vec__26375,k,plugin,seq__26370__$1,temp__4425__auto__))
);
} else {
}

var G__26386 = cljs.core.next.call(null,seq__26370__$1);
var G__26387 = null;
var G__26388 = (0);
var G__26389 = (0);
seq__26370 = G__26386;
chunk__26371 = G__26387;
count__26372 = G__26388;
i__26373 = G__26389;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26390 = [];
var len__17402__auto___26393 = arguments.length;
var i__17403__auto___26394 = (0);
while(true){
if((i__17403__auto___26394 < len__17402__auto___26393)){
args26390.push((arguments[i__17403__auto___26394]));

var G__26395 = (i__17403__auto___26394 + (1));
i__17403__auto___26394 = G__26395;
continue;
} else {
}
break;
}

var G__26392 = args26390.length;
switch (G__26392) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26390.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17409__auto__ = [];
var len__17402__auto___26401 = arguments.length;
var i__17403__auto___26402 = (0);
while(true){
if((i__17403__auto___26402 < len__17402__auto___26401)){
args__17409__auto__.push((arguments[i__17403__auto___26402]));

var G__26403 = (i__17403__auto___26402 + (1));
i__17403__auto___26402 = G__26403;
continue;
} else {
}
break;
}

var argseq__17410__auto__ = ((((0) < args__17409__auto__.length))?(new cljs.core.IndexedSeq(args__17409__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17410__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26398){
var map__26399 = p__26398;
var map__26399__$1 = ((((!((map__26399 == null)))?((((map__26399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26399):map__26399);
var opts = map__26399__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26397){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26397));
});

//# sourceMappingURL=client.js.map