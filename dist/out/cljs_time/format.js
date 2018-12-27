// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.date');
goog.require('goog.date.duration');
goog.require('goog.string');
goog.require('goog.string.format');
cljs_time.format.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.format.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.format.abbreviate = (function cljs_time$format$abbreviate(n,s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),n);
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 *   The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 *   time zone names cannot be parsed and a few more symbols are supported. All
 *   ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  G       era                          text          AD
 *  C       century of era (>=0)         number        20
 *  Y       year of era (>=0)            year          1996
 * 
 *  x       weekyear                     year          1996
 *  w       week of weekyear             number        27
 *  e       day of week                  number        2
 *  E       day of week                  text          Tuesday; Tue
 * 
 *  y       year                         year          1996
 *  D       day of year                  number        189
 *  M       month of year                month         July; Jul; 07
 *  d       day of month                 number        10
 * 
 *  a       halfday of day               text          PM
 *  K       hour of halfday (0~11)       number        0
 *  h       clockhour of halfday (1~12)  number        12
 * 
 *  H       hour of day (0~23)           number        0
 *  k       clockhour of day (1~24)      number        24
 *  m       minute of hour               number        30
 *  s       second of minute             number        55
 *  S       fraction of second           number        978
 *  a       meridiem                     text          am; pm
 *  A       meridiem                     text          AM; PM
 * 
 *  z       time zone                    text          Pacific Standard Time; PST
 *  Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 *  '       escape for text              delimiter
 *  ''      single quote                 literal       '
 * 
 *   The count of pattern letters determine the format.
 * 
 *   **Text:** If the number of pattern letters is 4 or more, the full form is used;
 *   otherwise a short or abbreviated form is used if available.
 * 
 *   **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 *   amount.
 * 
 *   **Year:** Numeric presentation for year and weekyear fields are handled
 *   specially. For example, if the count of 'y' is 2, the year will be displayed
 *   as the zero-based year of the century, which is two digits.
 * 
 *   **Month:** 3 or over, use text, otherwise use number.
 * 
 *   **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
 *   colon, 'ZZZ' or more outputs the zone id.
 * 
 *   **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 *   Any characters in the pattern that are not in the ranges of ['a'..'z'] and
 *   ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
 *   '.', ' ', '#' and '?' will appear in the resulting time text even they are
 *   not embraced within single quotes.
 */
cljs_time.format.date_formatters = (function (){var d = (function (p1__11810_SHARP_){
return p1__11810_SHARP_.getDate();
});
var M = ((function (d){
return (function (p1__11811_SHARP_){
return (p1__11811_SHARP_.getMonth() + (1));
});})(d))
;
var y = ((function (d,M){
return (function (p1__11812_SHARP_){
return p1__11812_SHARP_.getYear();
});})(d,M))
;
var h = ((function (d,M,y){
return (function (p1__11813_SHARP_){
var hr = cljs.core.mod(p1__11813_SHARP_.getHours(),(12));
if((hr === (0))){
return (12);
} else {
return hr;
}
});})(d,M,y))
;
var a = ((function (d,M,y,h){
return (function (p1__11814_SHARP_){
if((p1__11814_SHARP_.getHours() < (12))){
return "am";
} else {
return "pm";
}
});})(d,M,y,h))
;
var A = ((function (d,M,y,h,a){
return (function (p1__11815_SHARP_){
if((p1__11815_SHARP_.getHours() < (12))){
return "AM";
} else {
return "PM";
}
});})(d,M,y,h,a))
;
var H = ((function (d,M,y,h,a,A){
return (function (p1__11816_SHARP_){
return p1__11816_SHARP_.getHours();
});})(d,M,y,h,a,A))
;
var m = ((function (d,M,y,h,a,A,H){
return (function (p1__11817_SHARP_){
return p1__11817_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;
var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__11818_SHARP_){
return p1__11818_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;
var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__11819_SHARP_){
return p1__11819_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;
var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__11820_SHARP_){
return p1__11820_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;
var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__11821_SHARP_){
return p1__11821_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;
var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__11822_SHARP_){
return p1__11822_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","YYYY","e","ss","DDD","SSS","dow","YY","M","mm","S","MM","EEE","Z","H","DD","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","D","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11834_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(H(p1__11834_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11838_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(p1__11838_SHARP_.getWeekNumber());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11829_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__11839 = (M(p1__11829_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__11839) : cljs_time.format.months.call(null,G__11839));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11836_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(s(p1__11836_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11837_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(S(p1__11837_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11825_SHARP_){
var G__11840 = dow(p1__11825_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__11840) : cljs_time.format.days.call(null,G__11840));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11832_SHARP_){
return cljs.core.mod(y(p1__11832_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11835_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(m(p1__11835_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11828_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(M(p1__11828_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11826_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__11841 = dow(p1__11826_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__11841) : cljs_time.format.days.call(null,G__11841));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11823_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(d(p1__11823_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11833_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(h(p1__11833_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11824_SHARP_){
var d__$1 = d(p1__11824_SHARP_);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__11842 = d__$1;
switch (G__11842) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})())].join('');
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,A,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11827_SHARP_){
var G__11843 = dow(p1__11827_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__11843) : cljs_time.format.days.call(null,G__11843));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11831_SHARP_){
return cljs.core.mod(y(p1__11831_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__11830_SHARP_){
var G__11844 = (M(p1__11830_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__11844) : cljs_time.format.months.call(null,G__11844));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function cljs_time$format$timezone_adjustment(d,timezone_string){
var vec__11847 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11847,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11847,(1),null);
var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11847,(2),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11847,(3),null);
if(cljs.core.truth_((function (){var and__4036__auto__ = sign;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = hh;
if(cljs.core.truth_(and__4036__auto____$1)){
return mm;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
var sign_11857__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"+"))?cljs_time.core.minus:null));
var vec__11850_11858 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sign_11857__$1,vec__11847,_,sign,hh,mm){
return (function (p1__11846_SHARP_){
return parseInt(p1__11846_SHARP_,(10));
});})(sign_11857__$1,vec__11847,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));
var hh_11859__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850_11858,(0),null);
var mm_11860__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850_11858,(1),null);
var adjusted_11861 = (function (){var G__11853 = (function (){var G__11855 = d;
var G__11856 = cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_11859__$1);
return (sign_11857__$1.cljs$core$IFn$_invoke$arity$2 ? sign_11857__$1.cljs$core$IFn$_invoke$arity$2(G__11855,G__11856) : sign_11857__$1.call(null,G__11855,G__11856));
})();
var G__11854 = cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_11860__$1);
return (sign_11857__$1.cljs$core$IFn$_invoke$arity$2 ? sign_11857__$1.cljs$core$IFn$_invoke$arity$2(G__11853,G__11854) : sign_11857__$1.call(null,G__11853,G__11854));
})();
d.setTime(adjusted_11861.getTime());
} else {
}

return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__11862_SHARP_){
return parseInt(p1__11862_SHARP_,(10));
});
var assoc_fn = ((function (parse_int){
return (function (kw){
return ((function (parse_int){
return (function (p1__11863_SHARP_,p2__11864_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11863_SHARP_,kw,parse_int(p2__11864_SHARP_));
});
;})(parse_int))
});})(parse_int))
;
var y = assoc_fn(cljs.core.cst$kw$years);
var d = assoc_fn(cljs.core.cst$kw$days);
var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__11865_SHARP_,p2__11866_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11865_SHARP_,cljs.core.cst$kw$months,(parse_int(p2__11866_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;
var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__11867_SHARP_,p2__11868_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11867_SHARP_,cljs.core.cst$kw$hours,cljs.core.mod(parse_int(p2__11868_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;
var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__11875,x){
var map__11876 = p__11875;
var map__11876__$1 = (((((!((map__11876 == null))))?(((((map__11876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11876):map__11876);
var date = map__11876__$1;
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11876__$1,cljs.core.cst$kw$hours);
if(cljs.core.truth_((function (){var G__11879 = clojure.string.lower_case(x);
var fexpr__11878 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null);
return (fexpr__11878.cljs$core$IFn$_invoke$arity$1 ? fexpr__11878.cljs$core$IFn$_invoke$arity$1(G__11879) : fexpr__11878.call(null,G__11879));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(date,cljs.core.cst$kw$hours,(function (){var hours__$1 = ((12) + hours);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours__$1,(24))){
return (0);
} else {
return hours__$1;
}
})());
} else {
return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;
var H = assoc_fn(cljs.core.cst$kw$hours);
var m = assoc_fn(cljs.core.cst$kw$minutes);
var s = assoc_fn(cljs.core.cst$kw$seconds);
var S = assoc_fn(cljs.core.cst$kw$millis);
var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__11870_SHARP_,p2__11869_SHARP_){
var full = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){
return cljs.core.re_seq(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__11869_SHARP_)].join('')),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));
return M(p1__11870_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,full) + (1))));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;
var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__11871_SHARP_,p2__11872_SHARP_){
return M(p1__11871_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,p2__11872_SHARP_) + (1))));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;
var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__11880__delegate = function (x,args){
return x;
};
var G__11880 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__11881__i = 0, G__11881__a = new Array(arguments.length -  1);
while (G__11881__i < G__11881__a.length) {G__11881__a[G__11881__i] = arguments[G__11881__i + 1]; ++G__11881__i;}
  args = new cljs.core.IndexedSeq(G__11881__a,0,null);
} 
return G__11880__delegate.call(this,x,args);};
G__11880.cljs$lang$maxFixedArity = 1;
G__11880.cljs$lang$applyTo = (function (arglist__11882){
var x = cljs.core.first(arglist__11882);
var args = cljs.core.rest(arglist__11882);
return G__11880__delegate(x,args);
});
G__11880.cljs$core$IFn$_invoke$arity$variadic = G__11880__delegate;
return G__11880;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;
var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__11873_SHARP_,p2__11874_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11873_SHARP_,cljs.core.cst$kw$time_DASH_zone,p2__11874_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","YYYY","ss","DDD","SSS","dow","YY","M","mm","S","MM","Y","EEE","Z","H","E","DD","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","D","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.months))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.months)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$years,(function (p1__11883_SHARP_,p2__11884_SHARP_){
return p1__11883_SHARP_.setYear(p2__11884_SHARP_);
}),cljs.core.cst$kw$months,(function (p1__11885_SHARP_,p2__11886_SHARP_){
return p1__11885_SHARP_.setMonth(p2__11886_SHARP_);
}),cljs.core.cst$kw$days,(function (p1__11887_SHARP_,p2__11888_SHARP_){
return p1__11887_SHARP_.setDate(p2__11888_SHARP_);
}),cljs.core.cst$kw$hours,(function (p1__11889_SHARP_,p2__11890_SHARP_){
return p1__11889_SHARP_.setHours(p2__11890_SHARP_);
}),cljs.core.cst$kw$minutes,(function (p1__11891_SHARP_,p2__11892_SHARP_){
return p1__11891_SHARP_.setMinutes(p2__11892_SHARP_);
}),cljs.core.cst$kw$seconds,(function (p1__11893_SHARP_,p2__11894_SHARP_){
return p1__11893_SHARP_.setSeconds(p2__11894_SHARP_);
}),cljs.core.cst$kw$millis,(function (p1__11895_SHARP_,p2__11896_SHARP_){
return p1__11895_SHARP_.setMilliseconds(p2__11896_SHARP_);
}),cljs.core.cst$kw$time_DASH_zone,cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function cljs_time$format$parser_sort_order_pred(parser){
return cljs_time.internal.core.index_of(new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YYYY","YY","Y","yyyy","yy","y","d","dd","D","DD","DDD","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","A","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.keys(cljs_time.format.date_formatters))))),")"].join(''));
cljs_time.format.old_string_replace = (function cljs_time$format$old_string_replace(s,match,replacement){
return s.replace((new RegExp(match.source,"g")),replacement);
});
cljs_time.format.date_parse_pattern = (function cljs_time$format$date_parse_pattern(formatter){
return cljs.core.re_pattern(cljs_time.format.old_string_replace(cljs_time.format.old_string_replace(formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__11897_SHARP_){
return cljs.core.first((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(p1__11897_SHARP_) : cljs_time.format.date_parsers.call(null,p1__11897_SHARP_)));
})));
});
cljs_time.format.parser_fn = (function cljs_time$format$parser_fn(fmts){
return (function (s){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.nfirst(cljs.core.re_seq(cljs_time.format.date_parse_pattern(fmts),s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function cljs_time$format$formatter_fn(fmts,formatters){
return (function() { 
var G__11909__delegate = function (date,p__11899){
var vec__11900 = p__11899;
var formatter_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11900,(0),null);
var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$c,(0)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.format.old_string_replace(fmts,/'([^']+)'/,((function (a,vec__11900,formatter_overrides){
return (function (x,s){
if(((cljs.core.seq(s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.first(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.last(x))))){
var map__11903 = cljs.core.deref(a);
var map__11903__$1 = (((((!((map__11903 == null))))?(((((map__11903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11903):map__11903);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11903__$1,cljs.core.cst$kw$c);
var k = ["&&&&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace,k], null),cljs.core.constantly(s));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c], null),cljs.core.inc);

return k;
} else {
return x;
}
});})(a,vec__11900,formatter_overrides))
),cljs.core.re_pattern((function (){var G__11905 = cljs_time.format.date_format_pattern.source;
if(cljs.core.truth_(cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a)))){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.keys(cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a))))),")|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11905)].join('');
} else {
return G__11905;
}
})()),((function (a,vec__11900,formatter_overrides){
return (function (p1__11898_SHARP_){
var fexpr__11907 = (function (){var fexpr__11908 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([formatters,formatter_overrides,cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a))], 0));
return (fexpr__11908.cljs$core$IFn$_invoke$arity$1 ? fexpr__11908.cljs$core$IFn$_invoke$arity$1(p1__11898_SHARP_) : fexpr__11908.call(null,p1__11898_SHARP_));
})();
return (fexpr__11907.cljs$core$IFn$_invoke$arity$1 ? fexpr__11907.cljs$core$IFn$_invoke$arity$1(date) : fexpr__11907.call(null,date));
});})(a,vec__11900,formatter_overrides))
], null);
};
var G__11909 = function (date,var_args){
var p__11899 = null;
if (arguments.length > 1) {
var G__11910__i = 0, G__11910__a = new Array(arguments.length -  1);
while (G__11910__i < G__11910__a.length) {G__11910__a[G__11910__i] = arguments[G__11910__i + 1]; ++G__11910__i;}
  p__11899 = new cljs.core.IndexedSeq(G__11910__a,0,null);
} 
return G__11909__delegate.call(this,date,p__11899);};
G__11909.cljs$lang$maxFixedArity = 1;
G__11909.cljs$lang$applyTo = (function (arglist__11911){
var date = cljs.core.first(arglist__11911);
var p__11899 = cljs.core.rest(arglist__11911);
return G__11909__delegate(date,p__11899);
});
G__11909.cljs$core$IFn$_invoke$arity$variadic = G__11909__delegate;
return G__11909;
})()
;
});
cljs_time.format.formatter = (function cljs_time$format$formatter(var_args){
var G__11913 = arguments.length;
switch (G__11913) {
case 1:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmts){
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmts,dtz){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$formatters,cljs_time.format.date_formatters], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$format_SLASH_formatter], null));
});

cljs_time.format.formatter.cljs$lang$maxFixedArity = 2;

cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$formatters,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$format_SLASH_formatter], null));
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$not_DASH_implemented,cljs.core.cst$kw$message,cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0))], null));
});
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$default_DASH_year,default_year);
});
/**
 * Map of ISO 8601 and a single RFC 822 formatters that can be used
 * for parsing and, in most cases, printing.
 * 
 * Note: due to current implementation limitations, timezone information
 * cannot be kept. Although the correct offset will be applied to UTC
 * time if supplied.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date_DASH_element_DASH_parser,cljs.core.cst$kw$hour_DASH_minute,cljs.core.cst$kw$t_DASH_time,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date,cljs.core.cst$kw$date,cljs.core.cst$kw$hour,cljs.core.cst$kw$time_DASH_no_DASH_ms,cljs.core.cst$kw$weekyear_DASH_week_DASH_day,cljs.core.cst$kw$week_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$basic_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_time,cljs.core.cst$kw$basic_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$date_DASH_parser,cljs.core.cst$kw$basic_DASH_week_DASH_date,cljs.core.cst$kw$basic_DASH_t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$local_DASH_time,cljs.core.cst$kw$date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month_DASH_day,cljs.core.cst$kw$date_DASH_opt_DASH_time,cljs.core.cst$kw$rfc822,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$date_DASH_hour_DASH_minute,cljs.core.cst$kw$time,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time,cljs.core.cst$kw$weekyear,cljs.core.cst$kw$basic_DASH_time,cljs.core.cst$kw$hour_DASH_minute_DASH_second,cljs.core.cst$kw$ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$time_DASH_parser,cljs.core.cst$kw$date_DASH_time_DASH_parser,cljs.core.cst$kw$year,cljs.core.cst$kw$t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date,cljs.core.cst$kw$weekyear_DASH_week,cljs.core.cst$kw$local_DASH_date,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,cljs.core.cst$kw$week_DASH_date,cljs.core.cst$kw$date_DASH_hour,cljs.core.cst$kw$time_DASH_element_DASH_parser,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second,cljs.core.cst$kw$week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$mysql,cljs.core.cst$kw$basic_DASH_t_DASH_time],[cljs_time.format.not_implemented(cljs.core.cst$sym$dateElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$localTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$timeParser),cljs_time.format.not_implemented(cljs.core.cst$sym$dateTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(cljs.core.cst$sym$timeElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$date_DASH_element_DASH_parser,null,cljs.core.cst$kw$date_DASH_parser,null,cljs.core.cst$kw$local_DASH_time,null,cljs.core.cst$kw$date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_parser,null,cljs.core.cst$kw$date_DASH_time_DASH_parser,null,cljs.core.cst$kw$local_DASH_date,null,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_element_DASH_parser,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;

/**
 * @interface
 */
cljs_time.format.IDateMap = function(){};

cljs_time.format.date_map = (function cljs_time$format$date_map(date){
if((((!((date == null)))) && ((!((date.cljs_time$format$IDateMap$date_map$arity$1 == null)))))){
return date.cljs_time$format$IDateMap$date_map$arity$1(date);
} else {
var x__4347__auto__ = (((date == null))?null:date);
var m__4348__auto__ = (cljs_time.format.date_map[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(date) : m__4348__auto__.call(null,date));
} else {
var m__4348__auto____$1 = (cljs_time.format.date_map["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(date) : m__4348__auto____$1.call(null,date));
} else {
throw cljs.core.missing_protocol("IDateMap.date-map",date);
}
}
}
});

goog.date.Date.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1)], null);
});

goog.date.DateTime.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1),cljs.core.cst$kw$hours,(0),cljs.core.cst$kw$minutes,(0),cljs.core.cst$kw$seconds,(0),cljs.core.cst$kw$millis,(0)], null);
});

goog.date.UtcDateTime.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1),cljs.core.cst$kw$hours,(0),cljs.core.cst$kw$minutes,(0),cljs.core.cst$kw$seconds,(0),cljs.core.cst$kw$millis,(0),cljs.core.cst$kw$time_DASH_zone,null], null);
});
cljs_time.format.parse_STAR_ = (function cljs_time$format$parse_STAR_(constructor$,p__11917,s){
var map__11918 = p__11917;
var map__11918__$1 = (((((!((map__11918 == null))))?(((((map__11918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11918):map__11918);
var fmt = map__11918__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11918__$1,cljs.core.cst$kw$format_DASH_str);
var default_year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11918__$1,cljs.core.cst$kw$default_DASH_year);
if(cljs.core.seq(s)){
} else {
throw (new Error("Assert failed: (seq s)"));
}

var min_parts = cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs_time.format.part_splitter_regex));
var parse_fn = cljs_time.format.parser_fn(format_str);
var parse_seq = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parse_fn,min_parts,map__11918,map__11918__$1,fmt,format_str,default_year){
return (function (p__11920){
var vec__11921 = p__11920;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11921,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11921,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(b) : cljs_time.format.date_parsers.call(null,b)))], null);
});})(parse_fn,min_parts,map__11918,map__11918__$1,fmt,format_str,default_year))
,(parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(s) : parse_fn.call(null,s))));
if((cljs.core.count(parse_seq) >= min_parts)){
var d = (new constructor$((0),(0),(0),(0),(0),(0),(0)));
var empty = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs_time.format.date_map(d),cljs.core.cst$kw$years,(function (){var or__4047__auto__ = default_year;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})());
var setters = cljs.core.select_keys(cljs_time.format.date_setters,cljs.core.keys(empty));
cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__11918,map__11918__$1,fmt,format_str,default_year){
return (function (p1__11915_SHARP_,p2__11916_SHARP_){
return (p1__11915_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__11915_SHARP_.cljs$core$IFn$_invoke$arity$2(d,p2__11916_SHARP_) : p1__11915_SHARP_.call(null,d,p2__11916_SHARP_));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__11918,map__11918__$1,fmt,format_str,default_year))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([setters,cljs_time.internal.core.valid_date_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__11918,map__11918__$1,fmt,format_str,default_year){
return (function (date,p__11924){
var vec__11925 = p__11924;
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11925,(0),null);
var do_parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11925,(1),null);
return (do_parse.cljs$core$IFn$_invoke$arity$2 ? do_parse.cljs$core$IFn$_invoke$arity$2(date,part) : do_parse.call(null,date,part));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__11918,map__11918__$1,fmt,format_str,default_year))
,empty,parse_seq))], 0));

return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$parser_DASH_no_DASH_match], null));
}
});
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse = (function cljs_time$format$parse(var_args){
var G__11929 = arguments.length;
switch (G__11929) {
case 2:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.UtcDateTime,fmt,s);
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4434__auto__ = (function cljs_time$format$iter__11930(s__11931){
return (new cljs.core.LazySeq(null,(function (){
var s__11931__$1 = s__11931;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11931__$1);
if(temp__5720__auto__){
var s__11931__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11931__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__11931__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__11933 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__11932 = (0);
while(true){
if((i__11932 < size__4433__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__11932);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e11934){var _ = e11934;
return null;
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__11933,d);

var G__11937 = (i__11932 + (1));
i__11932 = G__11937;
continue;
} else {
var G__11938 = (i__11932 + (1));
i__11932 = G__11938;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11933),cljs_time$format$iter__11930(cljs.core.chunk_rest(s__11931__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11933),null);
}
} else {
var f = cljs.core.first(s__11931__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e11935){var _ = e11935;
return null;
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__11930(cljs.core.rest(s__11931__$2)));
} else {
var G__11939 = cljs.core.rest(s__11931__$2);
s__11931__$1 = G__11939;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local DateTime instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local = (function cljs_time$format$parse_local(var_args){
var G__11941 = arguments.length;
switch (G__11941) {
case 2:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.DateTime,fmt,s);
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4434__auto__ = (function cljs_time$format$iter__11942(s__11943){
return (new cljs.core.LazySeq(null,(function (){
var s__11943__$1 = s__11943;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11943__$1);
if(temp__5720__auto__){
var s__11943__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11943__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__11943__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__11945 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__11944 = (0);
while(true){
if((i__11944 < size__4433__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__11944);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e11946){if((e11946 instanceof Error)){
var _ = e11946;
return null;
} else {
throw e11946;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__11945,d);

var G__11949 = (i__11944 + (1));
i__11944 = G__11949;
continue;
} else {
var G__11950 = (i__11944 + (1));
i__11944 = G__11950;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11945),cljs_time$format$iter__11942(cljs.core.chunk_rest(s__11943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11945),null);
}
} else {
var f = cljs.core.first(s__11943__$2);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e11947){if((e11947 instanceof Error)){
var _ = e11947;
return null;
} else {
throw e11947;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__11942(cljs.core.rest(s__11943__$2)));
} else {
var G__11951 = cljs.core.rest(s__11943__$2);
s__11943__$1 = G__11951;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local Date instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function cljs_time$format$parse_local_date(var_args){
var G__11953 = arguments.length;
switch (G__11953) {
case 2:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.Date,fmt,s);
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4434__auto__ = (function cljs_time$format$iter__11954(s__11955){
return (new cljs.core.LazySeq(null,(function (){
var s__11955__$1 = s__11955;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11955__$1);
if(temp__5720__auto__){
var s__11955__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11955__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__11955__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__11957 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__11956 = (0);
while(true){
if((i__11956 < size__4433__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__11956);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e11958){if((e11958 instanceof Error)){
var _ = e11958;
return null;
} else {
throw e11958;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__11957,d);

var G__11961 = (i__11956 + (1));
i__11956 = G__11961;
continue;
} else {
var G__11962 = (i__11956 + (1));
i__11956 = G__11962;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11957),cljs_time$format$iter__11954(cljs.core.chunk_rest(s__11955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11957),null);
}
} else {
var f = cljs.core.first(s__11955__$2);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e11959){if((e11959 instanceof Error)){
var _ = e11959;
return null;
} else {
throw e11959;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__11954(cljs.core.rest(s__11955__$2)));
} else {
var G__11963 = cljs.core.rest(s__11955__$2);
s__11955__$1 = G__11963;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local_date.cljs$lang$maxFixedArity = 2;

/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__11964,dt){
var map__11965 = p__11964;
var map__11965__$1 = (((((!((map__11965 == null))))?(((((map__11965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11965):map__11965);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11965__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11965__$1,cljs.core.cst$kw$formatters);
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var fexpr__11967 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__11967.cljs$core$IFn$_invoke$arity$1 ? fexpr__11967.cljs$core$IFn$_invoke$arity$1(dt) : fexpr__11967.call(null,dt));
})());
});
/**
 * Returns a string representing the given local DateTime instance in the
 *   form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__11968,dt){
var map__11969 = p__11968;
var map__11969__$1 = (((((!((map__11969 == null))))?(((((map__11969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11969):map__11969);
var fmt = map__11969__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11969__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11969__$1,cljs.core.cst$kw$formatters);
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var G__11972 = dt;
var G__11973 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0));
var fexpr__11971 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__11971.cljs$core$IFn$_invoke$arity$2 ? fexpr__11971.cljs$core$IFn$_invoke$arity$2(G__11972,G__11973) : fexpr__11971.call(null,G__11972,G__11973));
})());
});
/**
 * Returns a string representing the given local Date instance in the form
 *   determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__11974,dt){
var map__11975 = p__11974;
var map__11975__$1 = (((((!((map__11975 == null))))?(((((map__11975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11975):map__11975);
var fmt = map__11975__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11975__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11975__$1,cljs.core.cst$kw$formatters);
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var G__11978 = dt;
var G__11979 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0));
var fexpr__11977 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__11977.cljs$core$IFn$_invoke$arity$2 ? fexpr__11977.cljs$core$IFn$_invoke$arity$2(G__11978,G__11979) : fexpr__11977.call(null,G__11978,G__11979));
})());
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function cljs_time$format$show_formatters(var_args){
var G__11981 = arguments.length;
switch (G__11981) {
case 0:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1 = (function (dt){
var seq__11982 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));
var chunk__11983 = null;
var count__11984 = (0);
var i__11985 = (0);
while(true){
if((i__11985 < count__11984)){
var p = chunk__11983.cljs$core$IIndexed$_nth$arity$2(null,i__11985);
var fmt_11987 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_11987,dt)], 0))], 0));


var G__11988 = seq__11982;
var G__11989 = chunk__11983;
var G__11990 = count__11984;
var G__11991 = (i__11985 + (1));
seq__11982 = G__11988;
chunk__11983 = G__11989;
count__11984 = G__11990;
i__11985 = G__11991;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__11982);
if(temp__5720__auto__){
var seq__11982__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11982__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__11982__$1);
var G__11992 = cljs.core.chunk_rest(seq__11982__$1);
var G__11993 = c__4461__auto__;
var G__11994 = cljs.core.count(c__4461__auto__);
var G__11995 = (0);
seq__11982 = G__11992;
chunk__11983 = G__11993;
count__11984 = G__11994;
i__11985 = G__11995;
continue;
} else {
var p = cljs.core.first(seq__11982__$1);
var fmt_11996 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_11996,dt)], 0))], 0));


var G__11997 = cljs.core.next(seq__11982__$1);
var G__11998 = null;
var G__11999 = (0);
var G__12000 = (0);
seq__11982 = G__11997;
chunk__11983 = G__11998;
count__11984 = G__11999;
i__11985 = G__12000;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs_time.format.show_formatters.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
cljs_time.format.Mappable = function(){};

/**
 * Returns a map representation of the given instant.
 *                        It will contain the following keys: :years, :months,
 *                        :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((((!((instant == null)))) && ((!((instant.cljs_time$format$Mappable$instant__GT_map$arity$1 == null)))))){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__4347__auto__ = (((instant == null))?null:instant);
var m__4348__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(instant) : m__4348__auto__.call(null,instant));
} else {
var m__4348__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(instant) : m__4348__auto____$1.call(null,instant));
} else {
throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
}
});

/**
 * Accepts a Period or Interval and outputs an absolute duration time
 *   in form of "1 day", "2 hours", "20 minutes", "2 days 1 hour
 *   15 minutes" etc.
 */
cljs_time.format.unparse_duration = (function cljs_time$format$unparse_duration(duration){
var G__12001 = cljs_time.core.in_millis(duration);
return goog.date.duration.format(G__12001);
});
cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$years,years,cljs.core.cst$kw$months,months,cljs.core.cst$kw$days,days,cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds,cljs.core.cst$kw$millis,millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});

cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__12002 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1));
var G__12002__$1 = (((G__12002 instanceof cljs.core.Keyword))?G__12002.fqn:null);
switch (G__12002__$1) {
case "cljs-time.core/period":
return m__$1;

break;
case "cljs-time.core/interval":
return cljs_time.core.__GT_period(m__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12002__$1)].join('')));

}
});
