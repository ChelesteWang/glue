(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3834a36e"],{"28eb":function(t,e,n){"use strict";var r=n("6b1d"),i=n("98f3").left,o=n("7f8a"),c=n("ce71"),u=n("4fed"),s=n("f117"),a=o("reduce"),f=c("reduce",{1:0}),l=!s&&u>79&&u<83;r({target:"Array",proto:!0,forced:!a||!f||l},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},3755:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("f5f2"),i=10;function o(t,e){return t>e&&t>i?"horizontal":e>t&&e>i?"vertical":""}var c=function t(){var e=this;Object(r["a"])(this,t),this.startX=0,this.startY=0,this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0,this.direction="",this.isVertical=function(){return"vertical"===e.direction},this.isHorizontal=function(){return"horizontal"===e.direction},this.reset=function(){e.deltaX=0,e.deltaY=0,e.offsetX=0,e.offsetY=0,e.direction=""},this.start=function(t){e.reset(),e.startX=t.touches[0].clientX,e.startY=t.touches[0].clientY},this.move=function(t){var n=t.touches[0];e.deltaX=n.clientX-e.startX,e.deltaY=n.clientY-e.startY,e.offsetX=Math.abs(e.deltaX),e.offsetY=Math.abs(e.deltaY),e.direction||(e.direction=o(e.offsetX,e.offsetY))}}},"98f3":function(t,e,n){var r=n("8697"),i=n("37d1"),o=n("83a6"),c=n("b495"),u=function(t){return function(e,n,u,s){r(n);var a=i(e),f=o(a),l=c(a.length),d=t?l-1:0,h=t?-1:1;if(u<2)while(1){if(d in f){s=f[d],d+=h;break}if(d+=h,t?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:l>d;d+=h)d in f&&(s=n(s,f[d],d,a));return s}};t.exports={left:u(!1),right:u(!0)}},"9ceb":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("ef14");var r=n("e300");function i(t,e,n){return n={path:e,exports:{},require:function(t,e){return o()}},t(n,n.exports),n.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var c=i((function(t){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var e={}.hasOwnProperty;function n(){for(var t=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var c=Object(r["a"])(o);if("string"===c||"number"===c)t.push(o);else if(Array.isArray(o)&&o.length){var u=n.apply(null,o);u&&t.push(u)}else if("object"===c)for(var s in o)e.call(o,s)&&o[s]&&t.push(s)}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}))},dfb3:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return h})),n.d(e,"h",(function(){return a})),n.d(e,"i",(function(){return i})),n.d(e,"j",(function(){return f}));n("28eb");var r=n("e300");function i(){}var o="undefined"!==typeof window;function c(t){return void 0!==t&&null!==t}function u(t){return"function"===typeof t}function s(t){return null!==t&&"object"===Object(r["a"])(t)}function a(t){return s(t)&&u(t.then)&&u(t.catch)}function f(t,e){return e.reduce((function(e,n){return e[n]=t[n],e}),{})}var l=function(t){return null!=t.children?t.children:t.childNodes},d=function(t){return null!=t.parentElement?t.parentElement:t.parentNode},h=function(t,e){if(console.log(t.hasAttribute(e),t,"el.hasAttribute(prop)"),t.hasAttribute(e))return t.getAttribute(e)}},e52a:function(t,e,n){"use strict";n.r(e),n.d(e,"glue_index_bar",(function(){return d}));n("cfce"),n("ef1f"),n("0d9f");var r,i=n("f5f2"),o=n("30c6"),c=n("b8e1"),u=n("dfb3"),s=n("3755"),a=n("9ceb"),f=".glue-index-bar__sidebar{position:fixed;top:50%;right:0;z-index:2;display:flex;flex-direction:column;text-align:center;transform:translateY(-50%);cursor:pointer;user-select:none}.glue-index-bar__index{padding:0 8px 0 16px;font-weight:500;font-size:10px;line-height:14px}.glue-index-bar__index--active{color:#ee0a24}";function l(){for(var t=[],e="A".charCodeAt(0),n=0;n<26;n++)t.push(String.fromCharCode(e+n));return t}var d=function(){function t(e){var n=this;Object(i["a"])(this,t),Object(c["g"])(this,e),this.clickSidebar=Object(c["c"])(this,"clickSidebar",7),this.sticky=!0,this.stickyOffsetTop=0,this.indexList=l(),this.activeAnchor="",this.touch=new s["a"],this.scrollTo=function(t){},this.scrollToElement=function(t){var e=t.dataset.index;e&&n.scrollTo(e)},this.onClickSidebar=function(t){n.scrollToElement(t.target)},this.sidebarStyle=function(){if(Object(u["a"])(n.zIndex))return{zIndex:(parseFloat(n.zIndex)+1).toString()}},this.highlightStyle=function(){if(n.highlightColor)return{color:n.highlightColor}},this.renderIndexes=function(){return n.indexList.map((function(t){var e=t===n.activeAnchor;return Object(c["e"])("span",{class:(Object(a["a"])("glue-index-bar"),{"glue-index-bar__active":e}),style:e?n.highlightStyle():void 0,"data-index":t},t)}))},this.onTouchMove=function(t){if(n.touch.move(t),n.touch.isVertical()){var e=t.touches[0],i=e.clientX,o=e.clientY,c=document.elementFromPoint(i,o);if(c){var u=c.dataset.index;u&&r!==u&&(r=u,n.scrollToElement(c))}}}}return Object(o["a"])(t,[{key:"render",value:function(){var t=this;return Object(c["e"])("div",{ref:function(e){t.root=e},class:"glue-index-bar"},Object(c["e"])("div",{class:"glue-index-bar__sidebar",style:this.sidebarStyle(),onClick:this.onClickSidebar,onTouchStart:this.touch.start,onTouchMove:this.onTouchMove},this.renderIndexes()),Object(c["e"])("slot",null))}}]),t}();d.style=f}}]);