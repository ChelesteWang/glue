(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-058a43cd"],{"45fb":function(e,c,t){"use strict";t.r(c);var o=function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("demo-section",[t("demo-block",{attrs:{title:e.basicUsage}},[t("van-switch",{model:{value:e.checked,callback:function(c){e.checked=c},expression:"checked"}})],1),t("demo-block",{attrs:{title:e.disabled}},[t("van-switch",{attrs:{disabled:""},model:{value:e.checked,callback:function(c){e.checked=c},expression:"checked"}})],1),t("demo-block",{attrs:{title:e.loadingStatus}},[t("van-switch",{attrs:{loading:""},model:{value:e.checked,callback:function(c){e.checked=c},expression:"checked"}})],1),t("demo-block",{attrs:{title:e.customSize}},[t("van-switch",{attrs:{size:"24px"},model:{value:e.checked2,callback:function(c){e.checked2=c},expression:"checked2"}})],1),t("demo-block",{attrs:{title:e.customColor}},[t("van-switch",{attrs:{"active-color":"#ee0a24","inactive-color":"#dcdee0"},model:{value:e.checked3,callback:function(c){e.checked3=c},expression:"checked3"}})],1),t("demo-block",{attrs:{title:e.asyncControl}},[t("van-switch",{attrs:{value:e.checked4},on:{input:e.onInput}})],1),t("demo-block",{attrs:{title:e.withCell}},[t("van-cell",{attrs:{center:"",title:e.title},scopedSlots:e._u([{key:"right-icon",fn:function(){return[t("van-switch",{attrs:{size:"24"},model:{value:e.checked5,callback:function(c){e.checked5=c},expression:"checked5"}})]},proxy:!0}])})],1)],1)},a=[],n={data:function(){return{disabled:"禁用",loadingStatus:"加载状态",basicUsage:"基础用法",title:"标题",confirm:"提醒",message:"是否切换开关？",withCell:"搭配单元格使用",customSize:"自定义大小",customColor:"自定义颜色",asyncControl:"异步控制",checked:!0,checked2:!0,checked3:!0,checked4:!0,checked5:!0,checked6:!1}},methods:{onInput:function(e){var c=this;this.$dialog.confirm({title:this.title,message:this.message}).then((function(){c.checked4=e}))}}},s=n,l=(t("642a"),t("2be6")),i=Object(l["a"])(s,o,a,!1,null,null,null);c["default"]=i.exports},"642a":function(e,c,t){"use strict";t("d596")},d596:function(e,c,t){}}]);