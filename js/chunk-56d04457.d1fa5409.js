(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56d04457"],{"221f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("demo-section",[i("demo-block",{attrs:{title:t.basicUsage}},[i("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white"}},[i("van-swipe-item",[t._v("1")]),i("van-swipe-item",[t._v("2")]),i("van-swipe-item",[t._v("3")]),i("van-swipe-item",[t._v("4")])],1)],1),i("demo-block",{attrs:{title:t.title2}},[i("van-swipe",{attrs:{autoplay:3e3}},t._l(t.images,(function(t,e){return i("van-swipe-item",{key:e},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])})),1)],1),i("demo-block",{attrs:{title:t.title3}},[i("van-swipe",{attrs:{"indicator-color":"white"},on:{change:t.onChange1}},[i("van-swipe-item",[t._v("1")]),i("van-swipe-item",[t._v("2")]),i("van-swipe-item",[t._v("3")]),i("van-swipe-item",[t._v("4")])],1)],1),i("demo-block",{attrs:{title:t.title4}},[i("van-swipe",{staticClass:"demo-swipe--vertical",staticStyle:{height:"200px"},attrs:{vertical:"",autoplay:3e3,"indicator-color":"white"}},[i("van-swipe-item",[t._v("1")]),i("van-swipe-item",[t._v("2")]),i("van-swipe-item",[t._v("3")]),i("van-swipe-item",[t._v("4")])],1)],1),i("demo-block",{attrs:{title:t.title5}},[i("van-swipe",{attrs:{width:300,loop:!1,"indicator-color":"white"}},[i("van-swipe-item",[t._v("1")]),i("van-swipe-item",[t._v("2")]),i("van-swipe-item",[t._v("3")]),i("van-swipe-item",[t._v("4")])],1)],1),i("demo-block",{attrs:{title:t.title6}},[i("van-swipe",{on:{change:t.onChange2},scopedSlots:t._u([{key:"indicator",fn:function(){return[i("div",{staticClass:"custom-indicator"},[t._v(t._s(t.current+1)+"/4")])]},proxy:!0}])},[i("van-swipe-item",[t._v("1")]),i("van-swipe-item",[t._v("2")]),i("van-swipe-item",[t._v("3")]),i("van-swipe-item",[t._v("4")])],1)],1)],1)},n=[],s={data:function(){return{basicUsage:"基础用法",title2:"图片懒加载",title3:"监听 change 事件",title4:"纵向滚动",title5:"自定义滑块大小",title6:"自定义指示器",message:"当前 Swipe 索引：",current:0,images:["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg"]}},methods:{onChange1:function(t){this.$toast(this.message+t)},onChange2:function(t){this.current=t}}},o=s,c=(i("87c4"),i("2be6")),v=Object(c["a"])(o,a,n,!1,null,null,null);e["default"]=v.exports},"48a0":function(t,e,i){},"87c4":function(t,e,i){"use strict";i("48a0")}}]);