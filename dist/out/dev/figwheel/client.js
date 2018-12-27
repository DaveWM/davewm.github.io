// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31193){if((e31193 instanceof Error)){
var e = e31193;
return "Error: Unable to stringify";
} else {
throw e31193;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31196 = arguments.length;
switch (G__31196) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31194_SHARP_){
if(typeof p1__31194_SHARP_ === 'string'){
return p1__31194_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31194_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31199 = arguments.length;
var i__4642__auto___31200 = (0);
while(true){
if((i__4642__auto___31200 < len__4641__auto___31199)){
args__4647__auto__.push((arguments[i__4642__auto___31200]));

var G__31201 = (i__4642__auto___31200 + (1));
i__4642__auto___31200 = G__31201;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31198){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31198));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31203 = arguments.length;
var i__4642__auto___31204 = (0);
while(true){
if((i__4642__auto___31204 < len__4641__auto___31203)){
args__4647__auto__.push((arguments[i__4642__auto___31204]));

var G__31205 = (i__4642__auto___31204 + (1));
i__4642__auto___31204 = G__31205;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31202){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31202));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31206){
var map__31207 = p__31206;
var map__31207__$1 = (((((!((map__31207 == null))))?(((((map__31207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31207):map__31207);
var message = cljs.core.get.call(null,map__31207__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31207__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
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
var c__26092__auto___31286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___31286,ch){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___31286,ch){
return (function (state_31258){
var state_val_31259 = (state_31258[(1)]);
if((state_val_31259 === (7))){
var inst_31254 = (state_31258[(2)]);
var state_31258__$1 = state_31258;
var statearr_31260_31287 = state_31258__$1;
(statearr_31260_31287[(2)] = inst_31254);

(statearr_31260_31287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (1))){
var state_31258__$1 = state_31258;
var statearr_31261_31288 = state_31258__$1;
(statearr_31261_31288[(2)] = null);

(statearr_31261_31288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (4))){
var inst_31211 = (state_31258[(7)]);
var inst_31211__$1 = (state_31258[(2)]);
var state_31258__$1 = (function (){var statearr_31262 = state_31258;
(statearr_31262[(7)] = inst_31211__$1);

return statearr_31262;
})();
if(cljs.core.truth_(inst_31211__$1)){
var statearr_31263_31289 = state_31258__$1;
(statearr_31263_31289[(1)] = (5));

} else {
var statearr_31264_31290 = state_31258__$1;
(statearr_31264_31290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (15))){
var inst_31218 = (state_31258[(8)]);
var inst_31233 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31218);
var inst_31234 = cljs.core.first.call(null,inst_31233);
var inst_31235 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31234);
var inst_31236 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31235)].join('');
var inst_31237 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31236);
var state_31258__$1 = state_31258;
var statearr_31265_31291 = state_31258__$1;
(statearr_31265_31291[(2)] = inst_31237);

(statearr_31265_31291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (13))){
var inst_31242 = (state_31258[(2)]);
var state_31258__$1 = state_31258;
var statearr_31266_31292 = state_31258__$1;
(statearr_31266_31292[(2)] = inst_31242);

(statearr_31266_31292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (6))){
var state_31258__$1 = state_31258;
var statearr_31267_31293 = state_31258__$1;
(statearr_31267_31293[(2)] = null);

(statearr_31267_31293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (17))){
var inst_31240 = (state_31258[(2)]);
var state_31258__$1 = state_31258;
var statearr_31268_31294 = state_31258__$1;
(statearr_31268_31294[(2)] = inst_31240);

(statearr_31268_31294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (3))){
var inst_31256 = (state_31258[(2)]);
var state_31258__$1 = state_31258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31258__$1,inst_31256);
} else {
if((state_val_31259 === (12))){
var inst_31217 = (state_31258[(9)]);
var inst_31231 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31217,opts);
var state_31258__$1 = state_31258;
if(inst_31231){
var statearr_31269_31295 = state_31258__$1;
(statearr_31269_31295[(1)] = (15));

} else {
var statearr_31270_31296 = state_31258__$1;
(statearr_31270_31296[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (2))){
var state_31258__$1 = state_31258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31258__$1,(4),ch);
} else {
if((state_val_31259 === (11))){
var inst_31218 = (state_31258[(8)]);
var inst_31223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31224 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31218);
var inst_31225 = cljs.core.async.timeout.call(null,(1000));
var inst_31226 = [inst_31224,inst_31225];
var inst_31227 = (new cljs.core.PersistentVector(null,2,(5),inst_31223,inst_31226,null));
var state_31258__$1 = state_31258;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31258__$1,(14),inst_31227);
} else {
if((state_val_31259 === (9))){
var inst_31218 = (state_31258[(8)]);
var inst_31244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31245 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31218);
var inst_31246 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31245);
var inst_31247 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31246)].join('');
var inst_31248 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31247);
var state_31258__$1 = (function (){var statearr_31271 = state_31258;
(statearr_31271[(10)] = inst_31244);

return statearr_31271;
})();
var statearr_31272_31297 = state_31258__$1;
(statearr_31272_31297[(2)] = inst_31248);

(statearr_31272_31297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (5))){
var inst_31211 = (state_31258[(7)]);
var inst_31213 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31214 = (new cljs.core.PersistentArrayMap(null,2,inst_31213,null));
var inst_31215 = (new cljs.core.PersistentHashSet(null,inst_31214,null));
var inst_31216 = figwheel.client.focus_msgs.call(null,inst_31215,inst_31211);
var inst_31217 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31216);
var inst_31218 = cljs.core.first.call(null,inst_31216);
var inst_31219 = figwheel.client.autoload_QMARK_.call(null);
var state_31258__$1 = (function (){var statearr_31273 = state_31258;
(statearr_31273[(8)] = inst_31218);

(statearr_31273[(9)] = inst_31217);

return statearr_31273;
})();
if(cljs.core.truth_(inst_31219)){
var statearr_31274_31298 = state_31258__$1;
(statearr_31274_31298[(1)] = (8));

} else {
var statearr_31275_31299 = state_31258__$1;
(statearr_31275_31299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (14))){
var inst_31229 = (state_31258[(2)]);
var state_31258__$1 = state_31258;
var statearr_31276_31300 = state_31258__$1;
(statearr_31276_31300[(2)] = inst_31229);

(statearr_31276_31300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (16))){
var state_31258__$1 = state_31258;
var statearr_31277_31301 = state_31258__$1;
(statearr_31277_31301[(2)] = null);

(statearr_31277_31301[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (10))){
var inst_31250 = (state_31258[(2)]);
var state_31258__$1 = (function (){var statearr_31278 = state_31258;
(statearr_31278[(11)] = inst_31250);

return statearr_31278;
})();
var statearr_31279_31302 = state_31258__$1;
(statearr_31279_31302[(2)] = null);

(statearr_31279_31302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (8))){
var inst_31217 = (state_31258[(9)]);
var inst_31221 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31217,opts);
var state_31258__$1 = state_31258;
if(cljs.core.truth_(inst_31221)){
var statearr_31280_31303 = state_31258__$1;
(statearr_31280_31303[(1)] = (11));

} else {
var statearr_31281_31304 = state_31258__$1;
(statearr_31281_31304[(1)] = (12));

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
});})(c__26092__auto___31286,ch))
;
return ((function (switch__25997__auto__,c__26092__auto___31286,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25998__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25998__auto____0 = (function (){
var statearr_31282 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31282[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25998__auto__);

(statearr_31282[(1)] = (1));

return statearr_31282;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25998__auto____1 = (function (state_31258){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_31258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e31283){if((e31283 instanceof Object)){
var ex__26001__auto__ = e31283;
var statearr_31284_31305 = state_31258;
(statearr_31284_31305[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31306 = state_31258;
state_31258 = G__31306;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25998__auto__ = function(state_31258){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25998__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25998__auto____1.call(this,state_31258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25998__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25998__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___31286,ch))
})();
var state__26094__auto__ = (function (){var statearr_31285 = f__26093__auto__.call(null);
(statearr_31285[(6)] = c__26092__auto___31286);

return statearr_31285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___31286,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31307_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31307_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
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
var base_path_31313 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31313){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31309 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31310 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31311 = true;
var _STAR_print_fn_STAR__temp_val__31312 = ((function (_STAR_print_newline_STAR__orig_val__31309,_STAR_print_fn_STAR__orig_val__31310,_STAR_print_newline_STAR__temp_val__31311,sb,base_path_31313){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__31309,_STAR_print_fn_STAR__orig_val__31310,_STAR_print_newline_STAR__temp_val__31311,sb,base_path_31313))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31311;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31312;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31310;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31309;
}}catch (e31308){if((e31308 instanceof Error)){
var e = e31308;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31313], null));
} else {
var e = e31308;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31313))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31314){
var map__31315 = p__31314;
var map__31315__$1 = (((((!((map__31315 == null))))?(((((map__31315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31315):map__31315);
var opts = map__31315__$1;
var build_id = cljs.core.get.call(null,map__31315__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31315,map__31315__$1,opts,build_id){
return (function (p__31317){
var vec__31318 = p__31317;
var seq__31319 = cljs.core.seq.call(null,vec__31318);
var first__31320 = cljs.core.first.call(null,seq__31319);
var seq__31319__$1 = cljs.core.next.call(null,seq__31319);
var map__31321 = first__31320;
var map__31321__$1 = (((((!((map__31321 == null))))?(((((map__31321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31321):map__31321);
var msg = map__31321__$1;
var msg_name = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31319__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31318,seq__31319,first__31320,seq__31319__$1,map__31321,map__31321__$1,msg,msg_name,_,map__31315,map__31315__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31318,seq__31319,first__31320,seq__31319__$1,map__31321,map__31321__$1,msg,msg_name,_,map__31315,map__31315__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31315,map__31315__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31323){
var vec__31324 = p__31323;
var seq__31325 = cljs.core.seq.call(null,vec__31324);
var first__31326 = cljs.core.first.call(null,seq__31325);
var seq__31325__$1 = cljs.core.next.call(null,seq__31325);
var map__31327 = first__31326;
var map__31327__$1 = (((((!((map__31327 == null))))?(((((map__31327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31327):map__31327);
var msg = map__31327__$1;
var msg_name = cljs.core.get.call(null,map__31327__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31325__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31329){
var map__31330 = p__31329;
var map__31330__$1 = (((((!((map__31330 == null))))?(((((map__31330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31330):map__31330);
var on_compile_warning = cljs.core.get.call(null,map__31330__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31330__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31330,map__31330__$1,on_compile_warning,on_compile_fail){
return (function (p__31332){
var vec__31333 = p__31332;
var seq__31334 = cljs.core.seq.call(null,vec__31333);
var first__31335 = cljs.core.first.call(null,seq__31334);
var seq__31334__$1 = cljs.core.next.call(null,seq__31334);
var map__31336 = first__31335;
var map__31336__$1 = (((((!((map__31336 == null))))?(((((map__31336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31336):map__31336);
var msg = map__31336__$1;
var msg_name = cljs.core.get.call(null,map__31336__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31334__$1;
var pred__31338 = cljs.core._EQ_;
var expr__31339 = msg_name;
if(cljs.core.truth_(pred__31338.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31339))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31338.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31339))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31330,map__31330__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26092__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto__,msg_hist,msg_names,msg){
return (function (state_31428){
var state_val_31429 = (state_31428[(1)]);
if((state_val_31429 === (7))){
var inst_31348 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
if(cljs.core.truth_(inst_31348)){
var statearr_31430_31477 = state_31428__$1;
(statearr_31430_31477[(1)] = (8));

} else {
var statearr_31431_31478 = state_31428__$1;
(statearr_31431_31478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (20))){
var inst_31422 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31432_31479 = state_31428__$1;
(statearr_31432_31479[(2)] = inst_31422);

(statearr_31432_31479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (27))){
var inst_31418 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31433_31480 = state_31428__$1;
(statearr_31433_31480[(2)] = inst_31418);

(statearr_31433_31480[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (1))){
var inst_31341 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31428__$1 = state_31428;
if(cljs.core.truth_(inst_31341)){
var statearr_31434_31481 = state_31428__$1;
(statearr_31434_31481[(1)] = (2));

} else {
var statearr_31435_31482 = state_31428__$1;
(statearr_31435_31482[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (24))){
var inst_31420 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31436_31483 = state_31428__$1;
(statearr_31436_31483[(2)] = inst_31420);

(statearr_31436_31483[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (4))){
var inst_31426 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31428__$1,inst_31426);
} else {
if((state_val_31429 === (15))){
var inst_31424 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31437_31484 = state_31428__$1;
(statearr_31437_31484[(2)] = inst_31424);

(statearr_31437_31484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (21))){
var inst_31377 = (state_31428[(2)]);
var inst_31378 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31379 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31378);
var state_31428__$1 = (function (){var statearr_31438 = state_31428;
(statearr_31438[(7)] = inst_31377);

return statearr_31438;
})();
var statearr_31439_31485 = state_31428__$1;
(statearr_31439_31485[(2)] = inst_31379);

(statearr_31439_31485[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (31))){
var inst_31407 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31428__$1 = state_31428;
if(inst_31407){
var statearr_31440_31486 = state_31428__$1;
(statearr_31440_31486[(1)] = (34));

} else {
var statearr_31441_31487 = state_31428__$1;
(statearr_31441_31487[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (32))){
var inst_31416 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31442_31488 = state_31428__$1;
(statearr_31442_31488[(2)] = inst_31416);

(statearr_31442_31488[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (33))){
var inst_31403 = (state_31428[(2)]);
var inst_31404 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31405 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31404);
var state_31428__$1 = (function (){var statearr_31443 = state_31428;
(statearr_31443[(8)] = inst_31403);

return statearr_31443;
})();
var statearr_31444_31489 = state_31428__$1;
(statearr_31444_31489[(2)] = inst_31405);

(statearr_31444_31489[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (13))){
var inst_31362 = figwheel.client.heads_up.clear.call(null);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(16),inst_31362);
} else {
if((state_val_31429 === (22))){
var inst_31383 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31384 = figwheel.client.heads_up.append_warning_message.call(null,inst_31383);
var state_31428__$1 = state_31428;
var statearr_31445_31490 = state_31428__$1;
(statearr_31445_31490[(2)] = inst_31384);

(statearr_31445_31490[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (36))){
var inst_31414 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31446_31491 = state_31428__$1;
(statearr_31446_31491[(2)] = inst_31414);

(statearr_31446_31491[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (29))){
var inst_31394 = (state_31428[(2)]);
var inst_31395 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31396 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31395);
var state_31428__$1 = (function (){var statearr_31447 = state_31428;
(statearr_31447[(9)] = inst_31394);

return statearr_31447;
})();
var statearr_31448_31492 = state_31428__$1;
(statearr_31448_31492[(2)] = inst_31396);

(statearr_31448_31492[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (6))){
var inst_31343 = (state_31428[(10)]);
var state_31428__$1 = state_31428;
var statearr_31449_31493 = state_31428__$1;
(statearr_31449_31493[(2)] = inst_31343);

(statearr_31449_31493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (28))){
var inst_31390 = (state_31428[(2)]);
var inst_31391 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31392 = figwheel.client.heads_up.display_warning.call(null,inst_31391);
var state_31428__$1 = (function (){var statearr_31450 = state_31428;
(statearr_31450[(11)] = inst_31390);

return statearr_31450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(29),inst_31392);
} else {
if((state_val_31429 === (25))){
var inst_31388 = figwheel.client.heads_up.clear.call(null);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(28),inst_31388);
} else {
if((state_val_31429 === (34))){
var inst_31409 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(37),inst_31409);
} else {
if((state_val_31429 === (17))){
var inst_31368 = (state_31428[(2)]);
var inst_31369 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31370 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31369);
var state_31428__$1 = (function (){var statearr_31451 = state_31428;
(statearr_31451[(12)] = inst_31368);

return statearr_31451;
})();
var statearr_31452_31494 = state_31428__$1;
(statearr_31452_31494[(2)] = inst_31370);

(statearr_31452_31494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (3))){
var inst_31360 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31428__$1 = state_31428;
if(inst_31360){
var statearr_31453_31495 = state_31428__$1;
(statearr_31453_31495[(1)] = (13));

} else {
var statearr_31454_31496 = state_31428__$1;
(statearr_31454_31496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (12))){
var inst_31356 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31455_31497 = state_31428__$1;
(statearr_31455_31497[(2)] = inst_31356);

(statearr_31455_31497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (2))){
var inst_31343 = (state_31428[(10)]);
var inst_31343__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31428__$1 = (function (){var statearr_31456 = state_31428;
(statearr_31456[(10)] = inst_31343__$1);

return statearr_31456;
})();
if(cljs.core.truth_(inst_31343__$1)){
var statearr_31457_31498 = state_31428__$1;
(statearr_31457_31498[(1)] = (5));

} else {
var statearr_31458_31499 = state_31428__$1;
(statearr_31458_31499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (23))){
var inst_31386 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31428__$1 = state_31428;
if(inst_31386){
var statearr_31459_31500 = state_31428__$1;
(statearr_31459_31500[(1)] = (25));

} else {
var statearr_31460_31501 = state_31428__$1;
(statearr_31460_31501[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (35))){
var state_31428__$1 = state_31428;
var statearr_31461_31502 = state_31428__$1;
(statearr_31461_31502[(2)] = null);

(statearr_31461_31502[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (19))){
var inst_31381 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31428__$1 = state_31428;
if(inst_31381){
var statearr_31462_31503 = state_31428__$1;
(statearr_31462_31503[(1)] = (22));

} else {
var statearr_31463_31504 = state_31428__$1;
(statearr_31463_31504[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (11))){
var inst_31352 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31464_31505 = state_31428__$1;
(statearr_31464_31505[(2)] = inst_31352);

(statearr_31464_31505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (9))){
var inst_31354 = figwheel.client.heads_up.clear.call(null);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(12),inst_31354);
} else {
if((state_val_31429 === (5))){
var inst_31345 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31428__$1 = state_31428;
var statearr_31465_31506 = state_31428__$1;
(statearr_31465_31506[(2)] = inst_31345);

(statearr_31465_31506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (14))){
var inst_31372 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31428__$1 = state_31428;
if(inst_31372){
var statearr_31466_31507 = state_31428__$1;
(statearr_31466_31507[(1)] = (18));

} else {
var statearr_31467_31508 = state_31428__$1;
(statearr_31467_31508[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (26))){
var inst_31398 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31428__$1 = state_31428;
if(inst_31398){
var statearr_31468_31509 = state_31428__$1;
(statearr_31468_31509[(1)] = (30));

} else {
var statearr_31469_31510 = state_31428__$1;
(statearr_31469_31510[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (16))){
var inst_31364 = (state_31428[(2)]);
var inst_31365 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31366 = figwheel.client.heads_up.display_exception.call(null,inst_31365);
var state_31428__$1 = (function (){var statearr_31470 = state_31428;
(statearr_31470[(13)] = inst_31364);

return statearr_31470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(17),inst_31366);
} else {
if((state_val_31429 === (30))){
var inst_31400 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31401 = figwheel.client.heads_up.display_warning.call(null,inst_31400);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(33),inst_31401);
} else {
if((state_val_31429 === (10))){
var inst_31358 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31471_31511 = state_31428__$1;
(statearr_31471_31511[(2)] = inst_31358);

(statearr_31471_31511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (18))){
var inst_31374 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31375 = figwheel.client.heads_up.display_exception.call(null,inst_31374);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(21),inst_31375);
} else {
if((state_val_31429 === (37))){
var inst_31411 = (state_31428[(2)]);
var state_31428__$1 = state_31428;
var statearr_31472_31512 = state_31428__$1;
(statearr_31472_31512[(2)] = inst_31411);

(statearr_31472_31512[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31429 === (8))){
var inst_31350 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31428__$1 = state_31428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31428__$1,(11),inst_31350);
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
});})(c__26092__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25997__auto__,c__26092__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto____0 = (function (){
var statearr_31473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31473[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto__);

(statearr_31473[(1)] = (1));

return statearr_31473;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto____1 = (function (state_31428){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_31428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e31474){if((e31474 instanceof Object)){
var ex__26001__auto__ = e31474;
var statearr_31475_31513 = state_31428;
(statearr_31475_31513[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31514 = state_31428;
state_31428 = G__31514;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto__ = function(state_31428){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto____1.call(this,state_31428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto__,msg_hist,msg_names,msg))
})();
var state__26094__auto__ = (function (){var statearr_31476 = f__26093__auto__.call(null);
(statearr_31476[(6)] = c__26092__auto__);

return statearr_31476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto__,msg_hist,msg_names,msg))
);

return c__26092__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26092__auto___31543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto___31543,ch){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto___31543,ch){
return (function (state_31529){
var state_val_31530 = (state_31529[(1)]);
if((state_val_31530 === (1))){
var state_31529__$1 = state_31529;
var statearr_31531_31544 = state_31529__$1;
(statearr_31531_31544[(2)] = null);

(statearr_31531_31544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (2))){
var state_31529__$1 = state_31529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31529__$1,(4),ch);
} else {
if((state_val_31530 === (3))){
var inst_31527 = (state_31529[(2)]);
var state_31529__$1 = state_31529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31529__$1,inst_31527);
} else {
if((state_val_31530 === (4))){
var inst_31517 = (state_31529[(7)]);
var inst_31517__$1 = (state_31529[(2)]);
var state_31529__$1 = (function (){var statearr_31532 = state_31529;
(statearr_31532[(7)] = inst_31517__$1);

return statearr_31532;
})();
if(cljs.core.truth_(inst_31517__$1)){
var statearr_31533_31545 = state_31529__$1;
(statearr_31533_31545[(1)] = (5));

} else {
var statearr_31534_31546 = state_31529__$1;
(statearr_31534_31546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (5))){
var inst_31517 = (state_31529[(7)]);
var inst_31519 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31517);
var state_31529__$1 = state_31529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31529__$1,(8),inst_31519);
} else {
if((state_val_31530 === (6))){
var state_31529__$1 = state_31529;
var statearr_31535_31547 = state_31529__$1;
(statearr_31535_31547[(2)] = null);

(statearr_31535_31547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (7))){
var inst_31525 = (state_31529[(2)]);
var state_31529__$1 = state_31529;
var statearr_31536_31548 = state_31529__$1;
(statearr_31536_31548[(2)] = inst_31525);

(statearr_31536_31548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (8))){
var inst_31521 = (state_31529[(2)]);
var state_31529__$1 = (function (){var statearr_31537 = state_31529;
(statearr_31537[(8)] = inst_31521);

return statearr_31537;
})();
var statearr_31538_31549 = state_31529__$1;
(statearr_31538_31549[(2)] = null);

(statearr_31538_31549[(1)] = (2));


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
});})(c__26092__auto___31543,ch))
;
return ((function (switch__25997__auto__,c__26092__auto___31543,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25998__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25998__auto____0 = (function (){
var statearr_31539 = [null,null,null,null,null,null,null,null,null];
(statearr_31539[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25998__auto__);

(statearr_31539[(1)] = (1));

return statearr_31539;
});
var figwheel$client$heads_up_plugin_$_state_machine__25998__auto____1 = (function (state_31529){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_31529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e31540){if((e31540 instanceof Object)){
var ex__26001__auto__ = e31540;
var statearr_31541_31550 = state_31529;
(statearr_31541_31550[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31551 = state_31529;
state_31529 = G__31551;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25998__auto__ = function(state_31529){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25998__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25998__auto____1.call(this,state_31529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25998__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25998__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto___31543,ch))
})();
var state__26094__auto__ = (function (){var statearr_31542 = f__26093__auto__.call(null);
(statearr_31542[(6)] = c__26092__auto___31543);

return statearr_31542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto___31543,ch))
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
var c__26092__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto__){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto__){
return (function (state_31557){
var state_val_31558 = (state_31557[(1)]);
if((state_val_31558 === (1))){
var inst_31552 = cljs.core.async.timeout.call(null,(3000));
var state_31557__$1 = state_31557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31557__$1,(2),inst_31552);
} else {
if((state_val_31558 === (2))){
var inst_31554 = (state_31557[(2)]);
var inst_31555 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31557__$1 = (function (){var statearr_31559 = state_31557;
(statearr_31559[(7)] = inst_31554);

return statearr_31559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31557__$1,inst_31555);
} else {
return null;
}
}
});})(c__26092__auto__))
;
return ((function (switch__25997__auto__,c__26092__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25998__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25998__auto____0 = (function (){
var statearr_31560 = [null,null,null,null,null,null,null,null];
(statearr_31560[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25998__auto__);

(statearr_31560[(1)] = (1));

return statearr_31560;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25998__auto____1 = (function (state_31557){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_31557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e31561){if((e31561 instanceof Object)){
var ex__26001__auto__ = e31561;
var statearr_31562_31564 = state_31557;
(statearr_31562_31564[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31565 = state_31557;
state_31557 = G__31565;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25998__auto__ = function(state_31557){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25998__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25998__auto____1.call(this,state_31557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25998__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25998__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto__))
})();
var state__26094__auto__ = (function (){var statearr_31563 = f__26093__auto__.call(null);
(statearr_31563[(6)] = c__26092__auto__);

return statearr_31563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto__))
);

return c__26092__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26092__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26092__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__26093__auto__ = (function (){var switch__25997__auto__ = ((function (c__26092__auto__,figwheel_version,temp__5720__auto__){
return (function (state_31572){
var state_val_31573 = (state_31572[(1)]);
if((state_val_31573 === (1))){
var inst_31566 = cljs.core.async.timeout.call(null,(2000));
var state_31572__$1 = state_31572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31572__$1,(2),inst_31566);
} else {
if((state_val_31573 === (2))){
var inst_31568 = (state_31572[(2)]);
var inst_31569 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31570 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31569);
var state_31572__$1 = (function (){var statearr_31574 = state_31572;
(statearr_31574[(7)] = inst_31568);

return statearr_31574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31572__$1,inst_31570);
} else {
return null;
}
}
});})(c__26092__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__25997__auto__,c__26092__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto____0 = (function (){
var statearr_31575 = [null,null,null,null,null,null,null,null];
(statearr_31575[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto__);

(statearr_31575[(1)] = (1));

return statearr_31575;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto____1 = (function (state_31572){
while(true){
var ret_value__25999__auto__ = (function (){try{while(true){
var result__26000__auto__ = switch__25997__auto__.call(null,state_31572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26000__auto__;
}
break;
}
}catch (e31576){if((e31576 instanceof Object)){
var ex__26001__auto__ = e31576;
var statearr_31577_31579 = state_31572;
(statearr_31577_31579[(5)] = ex__26001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31580 = state_31572;
state_31572 = G__31580;
continue;
} else {
return ret_value__25999__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto__ = function(state_31572){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto____1.call(this,state_31572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25998__auto__;
})()
;})(switch__25997__auto__,c__26092__auto__,figwheel_version,temp__5720__auto__))
})();
var state__26094__auto__ = (function (){var statearr_31578 = f__26093__auto__.call(null);
(statearr_31578[(6)] = c__26092__auto__);

return statearr_31578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26094__auto__);
});})(c__26092__auto__,figwheel_version,temp__5720__auto__))
);

return c__26092__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31581){
var map__31582 = p__31581;
var map__31582__$1 = (((((!((map__31582 == null))))?(((((map__31582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31582):map__31582);
var file = cljs.core.get.call(null,map__31582__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31582__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31582__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31584 = "";
var G__31584__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31584),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31584);
var G__31584__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31584__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31584__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31584__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31584__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31585){
var map__31586 = p__31585;
var map__31586__$1 = (((((!((map__31586 == null))))?(((((map__31586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31586):map__31586);
var ed = map__31586__$1;
var exception_data = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31589 = (function (){var G__31588 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31588)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__31588;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31589);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31590){
var map__31591 = p__31590;
var map__31591__$1 = (((((!((map__31591 == null))))?(((((map__31591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31591):map__31591);
var w = map__31591__$1;
var message = cljs.core.get.call(null,map__31591__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"dist/out/dev/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"dist/out/dev/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31593 = cljs.core.seq.call(null,plugins);
var chunk__31594 = null;
var count__31595 = (0);
var i__31596 = (0);
while(true){
if((i__31596 < count__31595)){
var vec__31597 = cljs.core._nth.call(null,chunk__31594,i__31596);
var k = cljs.core.nth.call(null,vec__31597,(0),null);
var plugin = cljs.core.nth.call(null,vec__31597,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31603 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31593,chunk__31594,count__31595,i__31596,pl_31603,vec__31597,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31603.call(null,msg_hist);
});})(seq__31593,chunk__31594,count__31595,i__31596,pl_31603,vec__31597,k,plugin))
);
} else {
}


var G__31604 = seq__31593;
var G__31605 = chunk__31594;
var G__31606 = count__31595;
var G__31607 = (i__31596 + (1));
seq__31593 = G__31604;
chunk__31594 = G__31605;
count__31595 = G__31606;
i__31596 = G__31607;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31593);
if(temp__5720__auto__){
var seq__31593__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31593__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31593__$1);
var G__31608 = cljs.core.chunk_rest.call(null,seq__31593__$1);
var G__31609 = c__4461__auto__;
var G__31610 = cljs.core.count.call(null,c__4461__auto__);
var G__31611 = (0);
seq__31593 = G__31608;
chunk__31594 = G__31609;
count__31595 = G__31610;
i__31596 = G__31611;
continue;
} else {
var vec__31600 = cljs.core.first.call(null,seq__31593__$1);
var k = cljs.core.nth.call(null,vec__31600,(0),null);
var plugin = cljs.core.nth.call(null,vec__31600,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31612 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31593,chunk__31594,count__31595,i__31596,pl_31612,vec__31600,k,plugin,seq__31593__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31612.call(null,msg_hist);
});})(seq__31593,chunk__31594,count__31595,i__31596,pl_31612,vec__31600,k,plugin,seq__31593__$1,temp__5720__auto__))
);
} else {
}


var G__31613 = cljs.core.next.call(null,seq__31593__$1);
var G__31614 = null;
var G__31615 = (0);
var G__31616 = (0);
seq__31593 = G__31613;
chunk__31594 = G__31614;
count__31595 = G__31615;
i__31596 = G__31616;
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
var G__31618 = arguments.length;
switch (G__31618) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31619_31624 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31620_31625 = null;
var count__31621_31626 = (0);
var i__31622_31627 = (0);
while(true){
if((i__31622_31627 < count__31621_31626)){
var msg_31628 = cljs.core._nth.call(null,chunk__31620_31625,i__31622_31627);
figwheel.client.socket.handle_incoming_message.call(null,msg_31628);


var G__31629 = seq__31619_31624;
var G__31630 = chunk__31620_31625;
var G__31631 = count__31621_31626;
var G__31632 = (i__31622_31627 + (1));
seq__31619_31624 = G__31629;
chunk__31620_31625 = G__31630;
count__31621_31626 = G__31631;
i__31622_31627 = G__31632;
continue;
} else {
var temp__5720__auto___31633 = cljs.core.seq.call(null,seq__31619_31624);
if(temp__5720__auto___31633){
var seq__31619_31634__$1 = temp__5720__auto___31633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31619_31634__$1)){
var c__4461__auto___31635 = cljs.core.chunk_first.call(null,seq__31619_31634__$1);
var G__31636 = cljs.core.chunk_rest.call(null,seq__31619_31634__$1);
var G__31637 = c__4461__auto___31635;
var G__31638 = cljs.core.count.call(null,c__4461__auto___31635);
var G__31639 = (0);
seq__31619_31624 = G__31636;
chunk__31620_31625 = G__31637;
count__31621_31626 = G__31638;
i__31622_31627 = G__31639;
continue;
} else {
var msg_31640 = cljs.core.first.call(null,seq__31619_31634__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31640);


var G__31641 = cljs.core.next.call(null,seq__31619_31634__$1);
var G__31642 = null;
var G__31643 = (0);
var G__31644 = (0);
seq__31619_31624 = G__31641;
chunk__31620_31625 = G__31642;
count__31621_31626 = G__31643;
i__31622_31627 = G__31644;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31649 = arguments.length;
var i__4642__auto___31650 = (0);
while(true){
if((i__4642__auto___31650 < len__4641__auto___31649)){
args__4647__auto__.push((arguments[i__4642__auto___31650]));

var G__31651 = (i__4642__auto___31650 + (1));
i__4642__auto___31650 = G__31651;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31646){
var map__31647 = p__31646;
var map__31647__$1 = (((((!((map__31647 == null))))?(((((map__31647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31647):map__31647);
var opts = map__31647__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31645){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31645));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31652){if((e31652 instanceof Error)){
var e = e31652;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31652;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31653){
var map__31654 = p__31653;
var map__31654__$1 = (((((!((map__31654 == null))))?(((((map__31654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31654):map__31654);
var msg_name = cljs.core.get.call(null,map__31654__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545934932406
