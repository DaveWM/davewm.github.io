// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('app.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.format');
app.helpers.format_date_month_year = (function app$helpers$format_date_month_year(date){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMMM YYYY"),cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((function (){var G__12006 = cljs.core.cst$kw$basic_DASH_date_DASH_time;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__12006) : cljs_time.format.formatters.call(null,G__12006));
})(),date));
});
