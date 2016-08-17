// Compiled by ClojureScript 1.7.145 {}
goog.provide('helpers');
goog.require('cljs.core');
goog.require('cljs_time.format');
helpers.format_date_month_year = (function helpers$format_date_month_year(date){
return cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"MMMM YYYY"),cljs_time.format.parse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604)),date));
});

//# sourceMappingURL=helpers.js.map