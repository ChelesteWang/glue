(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-776a934d"],{"1bbc":function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return r})),e.d(n,"e",(function(){return o})),e.d(n,"f",(function(){return i})),e.d(n,"g",(function(){return u}));var r="#ee0a24",o="glue-hairline",i="".concat(o,"--left"),c="".concat(o,"--bottom"),u="".concat(o,"--surround"),f=300,a="linear"},"28eb":function(t,n,e){"use strict";var r=e("6b1d"),o=e("98f3").left,i=e("7f8a"),c=e("ce71"),u=e("4fed"),f=e("f117"),a=i("reduce"),s=c("reduce",{1:0}),d=!f&&u>79&&u<83;r({target:"Array",proto:!0,forced:!a||!s||d},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"5f95":function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return d})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return u})),e.d(n,"f",(function(){return l})),e.d(n,"g",(function(){return c})),e.d(n,"h",(function(){return o})),e.d(n,"i",(function(){return s}));e("28eb");var r=e("e300");function o(){}var i="undefined"!==typeof window;function c(t){return void 0!==t&&null!==t}function u(t){return"function"===typeof t}function f(t){return null!==t&&"object"===Object(r["a"])(t)}function a(t){return f(t)&&u(t.then)&&u(t.catch)}function s(t,n){return n.reduce((function(n,e){return n[e]=t[e],n}),{})}var d=function(t){return null!=t.parentElement?t.parentElement:t.parentNode},l=function(t,n){if(console.log(t.hasAttribute(n),t,"el.hasAttribute(prop)"),t.hasAttribute(n))return t.getAttribute(n)}},"89dd":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("d86f"),e("8f0b"),e("fa8c");var r=e("e300");function o(t){return function(n){if(console.log(n,Object(r["a"])(n),"typeof el"),"string"==typeof n)return"".concat(t,"__").concat(n);var e={};return n.forEach((function(n){var r="".concat(t,"--").concat(n);e[r]=!0})),e}}function i(t){return[o(t)]}},9680:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}));var r=e("5f95");function o(){return!!r["b"]&&/android/.test(navigator.userAgent.toLowerCase())}function i(){return!!r["b"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},"98f3":function(t,n,e){var r=e("8697"),o=e("37d1"),i=e("83a6"),c=e("b495"),u=function(t){return function(n,e,u,f){r(e);var a=o(n),s=i(a),d=c(a.length),l=t?d-1:0,h=t?-1:1;if(u<2)while(1){if(l in s){f=s[l],l+=h;break}if(l+=h,t?l<0:d<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:d>l;l+=h)l in s&&(f=e(f,s[l],l,a));return f}};t.exports={left:u(!1),right:u(!0)}},"9ceb":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));e("ef14");var r=e("e300");function o(t,n,e){return e={path:n,exports:{},require:function(t,n){return i()}},t(e,e.exports),e.exports}function i(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var c=o((function(t){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var n={}.hasOwnProperty;function e(){for(var t=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var c=Object(r["a"])(i);if("string"===c||"number"===c)t.push(i);else if(Array.isArray(i)&&i.length){var u=e.apply(null,i);u&&t.push(u)}else if("object"===c)for(var f in i)n.call(i,f)&&i[f]&&t.push(f)}}return t.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e})()}))},ce37:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))},d70b:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return a}));var r=e("9680");function o(t){var n="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(n,0)}function i(t,n){"scrollTop"in t?t.scrollTop=n:t.scrollTo(t.scrollX,n)}function c(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function u(t){i(window,t),i(document.body,t)}var f=Object(r["a"])();function a(){f&&u(c())}},ed25:function(t,n,e){"use strict";e.r(n),e.d(n,"glue_index_anchor",(function(){return g}));var r=e("ce37"),o=e("f5f2"),i=e("30c6"),c=e("cf28"),u=e("72ba"),f=e("9ceb"),a=e("1bbc"),s=e("d70b"),d=e("89dd"),l=(e("9680"),e("5f95"),".glue-index-anchor{z-index:1;box-sizing:border-box;padding:0 16px;color:#323233;font-weight:500;font-size:14px;line-height:32px;background-color:transparent}.glue-index-anchor--sticky{position:fixed;top:0;right:0;left:0;color:#ee0a24;background-color:#fff}"),h=Object(d["a"])("glue-index-anchor"),p=Object(c["a"])(h,1),b=p[0],g=function(){function t(n){var e=this;Object(o["a"])(this,t),Object(u["g"])(this,n),this.top=0,this.left=null,this.rect={top:0,height:0},this.width=null,this.active=!1,this.isSticky=function(){return e.active},this.anchorStyle=function(){if(e.isSticky())return{left:e.left?"".concat(e.left,"px"):null,width:e.width?"".concat(e.width,"px"):null,transform:e.top?"translate3d(0, ".concat(e.top,"px, 0)"):null}},this.getRect=function(t,n){var r=e.root;return e.rect.height=r.offsetHeight,t===window||t===document.body?e.rect.top=r.offsetTop+Object(s["b"])():e.rect.top=r.offsetTop+Object(s["a"])(t)-n.top,e.rect}}return Object(i["a"])(t,[{key:"render",value:function(){var t=this,n=this.isSticky();return Object(u["e"])("div",{ref:function(n){t.root=n},style:{height:n?"".concat(this.rect.height,"px"):void 0}},Object(u["e"])("div",{style:this.anchorStyle(),class:Object(f["a"])(Object(r["a"])({},"glue-index-anchor__"+a["a"],n),b([n]))},this.index))}}]),t}();g.style=l}}]);