(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5a22a5e"],{3755:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c("f5f2"),o=10;function i(e,t){return e>t&&e>o?"horizontal":t>e&&t>o?"vertical":""}var r=function e(){var t=this;Object(n["a"])(this,e),this.startX=0,this.startY=0,this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0,this.direction="",this.isVertical=function(){return"vertical"===t.direction},this.isHorizontal=function(){return"horizontal"===t.direction},this.reset=function(){t.deltaX=0,t.deltaY=0,t.offsetX=0,t.offsetY=0,t.direction=""},this.start=function(e){t.reset(),t.startX=e.touches[0].clientX,t.startY=e.touches[0].clientY},this.move=function(e){var c=e.touches[0];t.deltaX=c.clientX-t.startX,t.deltaY=c.clientY-t.startY,t.offsetX=Math.abs(t.deltaX),t.offsetY=Math.abs(t.deltaY),t.direction||(t.direction=i(t.offsetX,t.offsetY))}}},"4ecf5":function(e,t){var c,n="ontouchstart"in window;document.createTouch||(document.createTouch=function(e,t,c,n,i,r,u){return new o(t,c,{pageX:n,pageY:i,screenX:r,screenY:u,clientX:n-window.pageXOffset,clientY:i-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var e=i(),t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length=arguments.length,e});var o=function(e,t,c,n,o){n=n||0,o=o||0,this.identifier=t,this.target=e,this.clientX=c.clientX+n,this.clientY=c.clientY+o,this.screenX=c.screenX+n,this.screenY=c.screenY+o,this.pageX=c.pageX+n,this.pageY=c.pageY+o};function i(){var e=[];return e["item"]=function(e){return this[e]||null},e["identifiedTouch"]=function(e){return this[e+1]||null},e}var r=!1;function u(e){return function(t){"mousedown"===t.type&&(r=!0),"mouseup"===t.type&&(r=!1),("mousemove"!==t.type||r)&&(("mousedown"===t.type||!c||c&&!c.dispatchEvent)&&(c=t.target),a(e,t),"mouseup"===t.type&&(c=null))}}function a(e,t){var n=document.createEvent("Event");n.initEvent(e,!0,!0),n.altKey=t.altKey,n.ctrlKey=t.ctrlKey,n.metaKey=t.metaKey,n.shiftKey=t.shiftKey,n.touches=l(t),n.targetTouches=l(t),n.changedTouches=s(t),c.dispatchEvent(n)}function s(e){var t=i();return t.push(new o(c,1,e,0,0)),t}function l(e){return"mouseup"===e.type?i():s(e)}function h(){window.addEventListener("mousedown",u("touchStart"),!0),window.addEventListener("mousemove",u("touchMove"),!0),window.addEventListener("mouseup",u("touchEnd"),!0)}h["multiTouchOffset"]=75,n||new h},6344:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));c("d86f"),c("8f0b"),c("fa8c");function n(e){return function(t){if("string"==typeof t)return"".concat(e,"__").concat(t);var c={};return t.forEach((function(t){if(t){var n="".concat(e,"--").concat(t);c[n]=!0}})),c}}function o(e){return[n(e)]}},"9ceb":function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));c("ef14");var n=c("e300");function o(e,t,c){return c={path:t,exports:{},require:function(e,t){return i()}},e(c,c.exports),c.exports}function i(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var r=o((function(e){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var t={}.hasOwnProperty;function c(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var r=Object(n["a"])(i);if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var u=c.apply(null,i);u&&e.push(u)}else if("object"===r)for(var a in i)t.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):window.classNames=c})()}))},a3c5:function(e,t,c){"use strict";c.r(t),c.d(t,"glue_key",(function(){return y}));var n=c("f5f2"),o=c("30c6"),i=c("cf28"),r=c("b8e1"),u=c("9ceb"),a=(c("4ecf5"),c("6344")),s=c("3755"),l=".glue-key{display:flex;align-items:center;justify-content:center;height:48px;font-size:28px;line-height:1.5;background-color:#fff;border-radius:8px;cursor:pointer}.glue-key--large{position:absolute;top:0;right:6px;bottom:6px;left:0;height:auto}.glue-key--blue,.glue-key--delete{font-size:16px}.glue-key--active{background-color:#ebedf0}.glue-key--blue{color:#fff;background-color:#1989fa}.glue-key--blue.glue-key--active{background-color:#0570db}.glue-key__wrapper{position:relative;flex:1;flex-basis:33%;box-sizing:border-box;padding:0 6px 6px 0}.glue-key__wrapper--wider{flex-basis:66%}.glue-key__delete-icon{width:32px;height:22px}.glue-key__collapse-icon{width:30px;height:24px}.glue-key__loading-icon{color:#fff}",h=new s["a"],f=Object(a["a"])("glue-key"),d=Object(i["a"])(f,1),v=d[0],p=Object(r["e"])("svg",{class:v("collapse-icon"),viewBox:"0 0 30 24"},Object(r["e"])("path",{d:"M25.877 12.843h-1.502c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h1.5c.187 0 .187 0 .187-.188v-1.511c0-.19 0-.191-.185-.191zM17.999 10.2c0 .188 0 .188.188.188h1.687c.188 0 .188 0 .188-.188V8.688c0-.187.004-.187-.186-.19h-1.69c-.187 0-.187 0-.187.19V10.2zm2.25-3.967h1.5c.188 0 .188 0 .188-.188v-1.7c0-.19 0-.19-.188-.19h-1.5c-.189 0-.189 0-.189.19v1.7c0 .188 0 .188.19.188zm2.063 4.157h3.563c.187 0 .187 0 .187-.189V4.346c0-.19.004-.19-.185-.19h-1.69c-.187 0-.187 0-.187.188v4.155h-1.688c-.187 0-.187 0-.187.189v1.514c0 .19 0 .19.187.19zM14.812 24l2.812-3.4H12l2.813 3.4zm-9-11.157H4.31c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h1.502c.187 0 .187 0 .187-.188v-1.511c0-.19.01-.191-.189-.191zm15.937 0H8.25c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h13.5c.188 0 .188 0 .188-.188v-1.511c0-.19 0-.191-.188-.191zm-11.438-2.454h1.5c.188 0 .188 0 .188-.188V8.688c0-.187 0-.187-.188-.189h-1.5c-.187 0-.187 0-.187.189V10.2c0 .188 0 .188.187.188zM27.94 0c.563 0 .917.21 1.313.567.518.466.748.757.748 1.51v14.92c0 .567-.188 1.134-.562 1.512-.376.378-.938.566-1.313.566H2.063c-.563 0-.938-.188-1.313-.566-.562-.378-.75-.945-.75-1.511V2.078C0 1.51.188.944.562.567.938.189 1.5 0 1.875 0zm-.062 2H2v14.92h25.877V2zM5.81 4.157c.19 0 .19 0 .19.189v1.762c-.003.126-.024.126-.188.126H4.249c-.126-.003-.126-.023-.126-.188v-1.7c-.187-.19 0-.19.188-.19zm10.5 2.077h1.503c.187 0 .187 0 .187-.188v-1.7c0-.19 0-.19-.187-.19h-1.502c-.188 0-.188.001-.188.19v1.7c0 .188 0 .188.188.188zM7.875 8.5c.187 0 .187.002.187.189V10.2c0 .188 0 .188-.187.188H4.249c-.126-.002-.126-.023-.126-.188V8.625c.003-.126.024-.126.188-.126zm7.875 0c.19.002.19.002.19.189v1.575c-.003.126-.024.126-.19.126h-1.563c-.126-.002-.126-.023-.126-.188V8.625c.002-.126.023-.126.189-.126zm-6-4.342c.187 0 .187 0 .187.189v1.7c0 .188 0 .188-.187.188H8.187c-.126-.003-.126-.023-.126-.188V4.283c.003-.126.024-.126.188-.126zm3.94 0c.185 0 .372 0 .372.189v1.762c-.002.126-.023.126-.187.126h-1.75C12 6.231 12 6.211 12 6.046v-1.7c0-.19.187-.19.187-.19z",fill:"currentColor"})),g=Object(r["e"])("svg",{class:v("delete-icon"),viewBox:"0 0 32 22"},Object(r["e"])("path",{d:"M28.016 0A3.991 3.991 0 0132 3.987v14.026c0 2.2-1.787 3.987-3.98 3.987H10.382c-.509 0-.996-.206-1.374-.585L.89 13.09C.33 12.62 0 11.84 0 11.006c0-.86.325-1.62.887-2.08L9.01.585A1.936 1.936 0 0110.383 0zm0 1.947H10.368L2.24 10.28c-.224.226-.312.432-.312.73 0 .287.094.51.312.729l8.128 8.333h17.648a2.041 2.041 0 002.037-2.04V3.987c0-1.127-.915-2.04-2.037-2.04zM23.028 6a.96.96 0 01.678.292.95.95 0 01-.003 1.377l-3.342 3.348 3.326 3.333c.189.188.292.43.292.679 0 .248-.103.49-.292.679a.96.96 0 01-.678.292.959.959 0 01-.677-.292L18.99 12.36l-3.343 3.345a.96.96 0 01-.677.292.96.96 0 01-.678-.292.962.962 0 01-.292-.68c0-.248.104-.49.292-.679l3.342-3.348-3.342-3.348A.963.963 0 0114 6.971c0-.248.104-.49.292-.679A.96.96 0 0114.97 6a.96.96 0 01.677.292l3.358 3.348 3.345-3.348A.96.96 0 0123.028 6z",fill:"currentColor"})),y=function(){function e(t){var c=this;Object(n["a"])(this,e),Object(r["g"])(this,t),this.active=!1,this.onTouchStart=function(e){h.start(e),c.active=!0},this.onTouchMove=function(e){h.move(e),h.direction&&(c.active=!1)},this.onTouchEnd=function(e){console.log(e),c.active&&(c.active=!1)},this.renderContent=function(){if(c.loading)return Object(r["e"])("glue-loading",{class:v("loading-icon")});var e=c.text;switch(c.type){case"delete":return e||g;case"extra":return e||p;default:return e}}}return Object(o["a"])(e,[{key:"render",value:function(){return Object(r["e"])(r["a"],{class:Object(u["a"])("glue-key__wrapper",{"glue-key--wider":this.wider}),onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchcancel:this.onTouchEnd},Object(r["e"])("div",{role:"button",tabindex:0,class:Object(u["a"])("glue-key",v([this.color]),{"glue-key--large":this.large,"glue-key--active":this.active,"glue-key--delete":"delete"===this.type})},this.renderContent()))}}]),e}();y.style=l}}]);