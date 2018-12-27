// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('summary.page');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('summary.github');
goog.require('summary.codewars');
goog.require('reagent_material_ui.core');
goog.require('markdown.core');
goog.require('app.helpers');
cljs.core.enable_console_print_BANG_();
summary.page.open_in_new_tab = (function summary$page$open_in_new_tab(url){
return window.open(url);
});
summary.page.contact_info = (function summary$page$contact_info(p__13817){
var map__13818 = p__13817;
var map__13818__$1 = (((((!((map__13818 == null))))?(((((map__13818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13818):map__13818);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13818__$1,cljs.core.cst$kw$email);
var phone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13818__$1,cljs.core.cst$kw$phone);
var github_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13818__$1,cljs.core.cst$kw$github_DASH_user);
var linkedin_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13818__$1,cljs.core.cst$kw$linkedin_DASH_url);
var info_part = ((function (map__13818,map__13818__$1,email,phone,github_user,linkedin_url){
return (function (icon_type,icon_name,value_elem){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"row middle-xs around-xs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,["col-xs-2 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_type)].join('')], null),icon_name], null),((cljs.core.map_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value_elem,(1))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(value_elem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$class], null),((function (map__13818,map__13818__$1,email,phone,github_user,linkedin_url){
return (function (p1__13816_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13816_SHARP_)," col-xs-10"].join('');
});})(map__13818,map__13818__$1,email,phone,github_user,linkedin_url))
):(function (){var vec__13820 = value_elem;
var seq__13821 = cljs.core.seq(vec__13820);
var first__13822 = cljs.core.first(seq__13821);
var seq__13821__$1 = cljs.core.next(seq__13821);
var tag = first__13822;
var content = seq__13821__$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-xs-10"], null),content], null);
})())], null);
});})(map__13818,map__13818__$1,email,phone,github_user,linkedin_url))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Contact Info",cljs.core.cst$kw$subtitle,"My contact info",cljs.core.cst$kw$avatar,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"assets/me.jpg"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardText,info_part("material-icons","email",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(email)].join('')], null),email], null)),info_part("material-icons","phone",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,phone], null)),info_part("fa fa-github",null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["https://github.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(github_user)].join('')], null),["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(github_user)].join('')], null)),info_part("fa fa-linkedin-square",null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,linkedin_url], null),"LinkedIn"], null))], null)], null);
});
summary.page.summary_card = (function summary$page$summary_card(summary__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Summary",cljs.core.cst$kw$subtitle,"A bit about me",cljs.core.cst$kw$avatar,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$icon,reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"material-icons"], null),"mode_edit"], null))], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardText,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"summary",cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,markdown.core.md__GT_html(summary__$1)], null)], null)], null)], null);
});
summary.page.education_card = (function summary$page$education_card(education){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardMedia,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overlay,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardTitle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,"Education"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"assets/liv_uni_alt.jpg"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardText,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13823){
var map__13824 = p__13823;
var map__13824__$1 = (((((!((map__13824 == null))))?(((((map__13824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13824):map__13824);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13824__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13824__$1,cljs.core.cst$kw$to);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13824__$1,cljs.core.cst$kw$name);
var highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13824__$1,cljs.core.cst$kw$highlights);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.format_date_month_year(from))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.format_date_month_year(to))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__13824,map__13824__$1,from,to,name,highlights){
return (function (highlight){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,highlight], null);
});})(map__13824,map__13824__$1,from,to,name,highlights))
,highlights)], null)], null);
}),education)], null)], null);
});
summary.page.hobbies_card = (function summary$page$hobbies_card(hobbies){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"My Hobbies",cljs.core.cst$kw$padding,(0),cljs.core.cst$kw$avatar,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.Avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$icon,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.FontIcon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"fa fa-thumbs-o-up"], null)], null))], null)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.GridList,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cols,(2),cljs.core.cst$kw$cellHeight,(180)], null),(function (){var positions = cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","top"], null));
var col_spans = ((cljs.core.even_QMARK_(cljs.core.count(hobbies)))?cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((1)):cljs.core.cons((2),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((1))));
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (positions,col_spans){
return (function (p__13826,col_span,position){
var map__13827 = p__13826;
var map__13827__$1 = (((((!((map__13827 == null))))?(((((map__13827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13827):map__13827);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13827__$1,cljs.core.cst$kw$title);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13827__$1,cljs.core.cst$kw$description);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13827__$1,cljs.core.cst$kw$img);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.GridTile,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cols,col_span,cljs.core.cst$kw$title,title,cljs.core.cst$kw$subtitle,description,cljs.core.cst$kw$rootClass,"tile",cljs.core.cst$kw$titlePosition,position], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,img], null)], null)], null);
});})(positions,col_spans))
,hobbies,col_spans,positions);
})()], null)], null);
});
summary.page.page = (function summary$page$page(p__13829){
var map__13830 = p__13829;
var map__13830__$1 = (((((!((map__13830 == null))))?(((((map__13830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13830):map__13830);
var personal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13830__$1,cljs.core.cst$kw$personal);
var summary__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13830__$1,cljs.core.cst$kw$summary);
var education = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13830__$1,cljs.core.cst$kw$education);
var hobbies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13830__$1,cljs.core.cst$kw$hobbies);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$middle_DASH_xs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-xs-12 col-lg-2 col-md-4 card-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.contact_info,personal], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-xs-12 col-lg-10 col-md-8 card-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.summary_card,summary__$1], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-xs-12 col-md-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.github.card,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,cljs.core.cst$kw$github_DASH_user.cljs$core$IFn$_invoke$arity$1(personal)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.hobbies_card,hobbies], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-xs-12 col-md-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.page.education_card,education], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary.codewars.card,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,cljs.core.cst$kw$codewars_DASH_user.cljs$core$IFn$_invoke$arity$1(personal)], null)], null)], null)], null)], null);
});
