(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2214b6"],{ca79:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("DemoSection",[i("DemoBlock",{attrs:{card:"",title:t.basicUsage}},[i("glue-cell",{attrs:{"is-link":"",title:t.selectSingle,value:t.formatFullDate(t.date.selectSingle)},on:{click:function(e){return t.show("single","selectSingle")}}}),i("glue-cell",{attrs:{"is-link":"",title:t.selectMultiple,value:t.formatMultiple(t.date.selectMultiple)},on:{click:function(e){return t.show("multiple","selectMultiple")}}}),i("glue-cell",{attrs:{"is-link":"",title:t.selectRange,value:t.formatRange(t.date.selectRange)},on:{click:function(e){return t.show("range","selectRange")}}})],1),i("DemoBlock",{attrs:{card:"",title:t.quickSelect}},[i("glue-cell",{attrs:{"is-link":"",title:t.selectSingle,value:t.formatFullDate(t.date.quickSelect1)},on:{click:function(e){return t.show("single","quickSelect1")}}}),i("glue-cell",{attrs:{"is-link":"",title:t.selectRange,value:t.formatRange(t.date.quickSelect2)},on:{click:function(e){return t.show("range","quickSelect2")}}})],1),i("DemoBlock",{attrs:{card:"",title:t.customCalendar}},[i("glue-cell",{attrs:{"is-link":"",title:t.customColor,value:t.formatRange(t.date.customColor)},on:{click:function(e){return t.show("range","customColor")}}}),i("glue-cell",{attrs:{"is-link":"",title:t.customRange,value:t.formatFullDate(t.date.customRange)},on:{click:function(e){return t.show("single","customRange")}}}),i("glue-cell",{attrs:{"is-link":"",title:t.customConfirm,value:t.formatRange(t.date.customConfirm)},on:{click:function(e){return t.show("range","customConfirm")}}}),i("glue-cell",{attrs:{"is-link":"",title:t.customDayText,value:t.formatRange(t.date.customDayText)},on:{click:function(e){return t.show("range","customDayText")}}}),i("glue-cell",{attrs:{"is-link":"",title:t.customPosition,value:t.formatFullDate(t.date.customPosition)},on:{click:function(e){return t.show("single","customPosition")}}}),i("glue-cell",{attrs:{"is-link":"",title:t.maxRangeaTitle,value:t.formatRange(t.date.maxRange)},on:{click:function(e){return t.show("range","maxRange")}}}),i("glue-cell",{attrs:{"is-link":"",title:t.firstDayOfWeekTitle},on:{click:function(e){return t.show("single","firstDayOfWeek")}}})],1),i("glue-calendar",{attrs:{poppable:!0,"show-title":!0,"show-subtitle":!0,title:"选择日期",show:t.showCalendar,type:t.type,color:t.color,round:t.round,position:t.position,formatter:t.formatter,"show-confirm":!0,"confirm-text":t.confirmText,"confirm-disabled-text":t.confirmDisabledText,"first-day-of-week":t.firstDayOfWeek},on:{confirm:t.onConfirm,glueClose:this.glueClose}})],1)},a=[],n=(i("d86f"),i("cf28")),l={data:function(){return{basicUsage:"基础用法",in:"入店",out:"离店",today:"今天",laborDay:"劳动节",youthDay:"青年节",calendar:"日历",maxRangeaTitle:"日期区间最大范围",selectCount:function(t){return"选择了 ".concat(t," 个日期")},selectSingle:"选择单个日期",selectMultiple:"选择多个日期",selectRange:"选择日期区间",quickSelect:"快捷选择",confirmText:"完成",customColor:"自定义颜色",customRange:"自定义日期范围",customConfirm:"自定义按钮文字",customDayText:"自定义日期文案",customPosition:"自定义弹出位置",customCalendar:"自定义日历",confirmDisabledText:"请选择结束时间",firstDayOfWeekTitle:"自定义周起始日",tiledDisplay:"平铺展示",date:{maxRange:[],selectSingle:null,selectRange:[],selectMultiple:[],quickSelect1:null,quickSelect2:[],customColor:[],customConfirm:[],customRange:null,customDayText:[],customPosition:null},type:"single",round:!0,color:void 0,minDate:void 0,maxDate:void 0,maxRange:void 0,position:void 0,formatter:void 0,showConfirm:!0,showCalendar:!1,tiledMinDate:new Date(2012,0,10),tiledMaxDate:new Date(2012,2,20),firstDayOfWeek:0}},methods:{glueClose:function(){this.showCalendar=!1},resetSettings:function(){this.round=!0,this.color=void 0,this.minDate=void 0,this.maxDate=void 0,this.maxRange=void 0,this.position=void 0,this.formatter=void 0,this.showConfirm=!0,this.confirmText=void 0,this.confirmDisabledText=void 0,this.firstDayOfWeek=0},show:function(t,e){switch(this.resetSettings(),this.id=e,this.type=t,this.showCalendar=!0,console.log(this.type,"this.type"),e){case"quickSelect1":case"quickSelect2":this.showConfirm=!1;break;case"customColor":this.color="#1989fa";break;case"customConfirm":this.confirmText=this.confirmText,this.confirmDisabledText=this.confirmDisabledText;break;case"customRange":this.minDate=new Date(2010,0,1),this.maxDate=new Date(2010,0,31);break;case"customDayText":this.minDate=new Date(2010,4,1),this.maxDate=new Date(2010,4,31),this.formatter=this.dayFormatter;break;case"customPosition":this.round=!1,this.position="right";break;case"maxRange":this.maxRange=3;break;case"firstDayOfWeek":this.firstDayOfWeek=1;break}},dayFormatter:function(t){var e=t.date.getMonth()+1,i=t.date.getDate();return 5===e&&(1===i?t.topInfo=this.laborDay:4===i?t.topInfo=this.youthDay:11===i&&(t.text=this.today)),"start"===t.type?t.bottomInfo=this.in:"end"===t.type&&(t.bottomInfo=this.out),t},formatDate:function(t){if(t)return"".concat(t.getMonth()+1,"/").concat(t.getDate())},formatFullDate:function(t){if(t)return"".concat(t.getFullYear(),"/").concat(this.formatDate(t))},formatMultiple:function(t){if(t.length)return this.selectCount},formatRange:function(t){if(t.length){var e=Object(n["a"])(t,2),i=e[0],o=e[1];return"".concat(this.formatDate(i)," - ").concat(this.formatDate(o))}},onConfirm:function(t){this.showCalendar=!1,this.date[this.id]=t}}},s=l,c=i("2be6"),r=Object(c["a"])(s,o,a,!1,null,null,null);e["default"]=r.exports}}]);