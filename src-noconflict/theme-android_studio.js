ace.define("ace/theme/android_studio",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-android-studio";
exports.cssText = ".ace-android-studio .ace_gutter {\
background: #F0F0F0;\
color: rgb(175, 0, 0)\
}\
.ace-android-studio .ace_print-margin {\
width: 1px;\
background: #555555\
}\
.ace-android-studio {\
background-color: #FFFFFF;\
font-size: 12px;\
font-family: menlo;\
color: #000000\
}\
.ace-android-studio .ace_cursor {\
color: #000000\
}\
.ace-android-studio .ace_marker-layer .ace_selection {\
background: rgba(82, 109, 165, 0.25)\
}\
.ace-android-studio.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #002240;\
}\
.ace-android-studio .ace_marker-layer .ace_step {\
background: rgb(127, 111, 19)\
}\
.ace-android-studio .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(255, 255, 255, 0.15)\
}\
.ace-android-studio .ace_marker-layer .ace_active-line {\
background: rgba(255, 251, 228, 0.35)\
}\
.ace-android-studio .ace_gutter-active-line {\
background-color: rgba(114, 114, 114, 0.35)\
}\
.ace-android-studio .ace_marker-layer .ace_selected-word {\
border: 1px solid rgba(179, 101, 57, 0.75)\
}\
.ace-android-studio .ace_invisible {\
color: rgba(255, 255, 255, 0.15)\
}\
.ace-android-studio .ace_keyword,\
.ace-android-studio .ace_meta {\
color: #0000FF\
}\
.ace-android-studio .ace_constant,\
.ace-android-studio .ace_constant.ace_character,\
.ace-android-studio .ace_constant.ace_character.ace_escape,\
.ace-android-studio .ace_constant.ace_other {\
color: #FF628C\
}\
.ace-android-studio .ace_invalid {\
color: #F8F8F8;\
background-color: #800F00\
}\
.ace-android-studio .ace_support {\
color: #80FFBB\
}\
.ace-android-studio .ace_support.ace_constant {\
color: #EB939A\
}\
.ace-android-studio .ace_fold {\
background-color: #FF9D00;\
border-color: #FFFFFF\
}\
.ace-android-studio .ace_support.ace_function {\
color: #FFB054\
}\
.ace-android-studio .ace_storage {\
color: #FFEE80\
}\
.ace-android-studio .ace_entity {\
color: #0000FF\
}\
.ace-android-studio .ace_string {\
color: #009900\
}\
.ace-android-studio .ace_string.ace_regexp {\
color: #80FFC2\
}\
.ace-android-studio .ace_comment {\
font-style: italic;\
color: #888888\
}\
.ace-android-studio .ace_heading,\
.ace-android-studio .ace_markup.ace_heading {\
color: #C8E4FD;\
background-color: #001221\
}\
.ace-android-studio .ace_list,\
.ace-android-studio .ace_markup.ace_list {\
background-color: #130D26\
}\
.ace-android-studio .ace_variable {\
color: #CCCCCC\
}\
.ace-android-studio .ace_variable.ace_language {\
color: #FF80E1\
}\
.ace-android-studio .ace_meta.ace_tag {\
color: #4415CC\
}\
.ace_purple_text {\
color: purple;\
}\
.ace-android-studio .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHCLSvkPAAP3AgSDTRd4AAAAAElFTkSuQmCC) right repeat-y\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
