(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0880c682"],{"0b48":function(t,e,n){"use strict";n.r(e),n.d(e,"glue_row",(function(){return g}));var r=n("f5f2"),u=n("30c6"),c=n("cf28"),o=n("b8e1"),i=n("9ceb"),a=n("6344"),s=".glue-row{display:flex;flex-wrap:wrap}.glue-row--justify-center{justify-content:center}.glue-row--justify-end{justify-content:flex-end}.glue-row--justify-space-between{justify-content:space-between}.glue-row--justify-space-around{justify-content:space-around}.glue-row--align-center{align-items:center}.glue-row--align-bottom{align-items:flex-end}",f=Object(a["a"])("glue-row"),l=Object(c["a"])(f,1),p=l[0],g=function(){function t(e){Object(r["a"])(this,t),Object(o["g"])(this,e),this.gutter=0}return Object(u["a"])(t,[{key:"componentDidLoad",value:function(){}},{key:"render",value:function(){var t=this.align,e=this.justify;return console.log(e,"justify"),Object(o["e"])(o["a"],{class:Object(i["a"])("glue-row",p(["align-".concat(t),"justify-".concat(e)]))},Object(o["e"])("slot",null))}},{key:"el",get:function(){return Object(o["d"])(this)}}]),t}();g.style=s},6344:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("d86f"),n("8f0b"),n("fa8c");function r(t){return function(e){if("string"==typeof e)return"".concat(t,"__").concat(e);var n={};return e.forEach((function(e){if(e){var r="".concat(t,"--").concat(e);n[r]=!0}})),n}}function u(t){return[r(t)]}},"9ceb":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("ef14");var r=n("e300");function u(t,e,n){return n={path:e,exports:{},require:function(t,e){return c()}},t(n,n.exports),n.exports}function c(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var o=u((function(t){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var e={}.hasOwnProperty;function n(){for(var t=[],u=0;u<arguments.length;u++){var c=arguments[u];if(c){var o=Object(r["a"])(c);if("string"===o||"number"===o)t.push(c);else if(Array.isArray(c)&&c.length){var i=n.apply(null,c);i&&t.push(i)}else if("object"===o)for(var a in c)e.call(c,a)&&c[a]&&t.push(a)}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}))}}]);