(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdd94"],{"2e6a":function(s,a,E){"use strict";E.r(a);var C=function(){var s=this,a=s.$createElement,E=s._self._c||a;return E("section",[E("div",{domProps:{innerHTML:s._s(s.content)}})])},t=[],n=(E("8f0b"),E("33ef"),E("868d"),E("fa8c"),unescape("%3Ch1%3ECascader%20%u7EA7%u8054%u9009%u62E9%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3E%u7EA7%u8054%u9009%u62E9%u6846%uFF0C%u7528%u4E8E%u591A%u5C42%u7EA7%u6570%u636E%u7684%u9009%u62E9%uFF0C%u5178%u578B%u573A%u666F%u4E3A%u7701%u5E02%u533A%u9009%u62E9%u3002%3C/p%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cp%3E%u7EA7%u8054%u9009%u62E9%u7EC4%u4EF6%u53EF%u4EE5%u642D%u914D%20Field%20%u548C%20Popup%20%u7EC4%u4EF6%u4F7F%u7528%uFF0C%u793A%u4F8B%u5982%u4E0B%uFF1A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.fieldValue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eis-link%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ereadonly%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u5730%u533A%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u8BF7%u9009%u62E9%u6240%u5728%u5730%u533A%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.show%20%3D%20true%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.show%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eround%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bbottom%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cascader%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.cascaderValue%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u8BF7%u9009%u62E9%u6240%u5728%u5730%u533A%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boptions%26quot%3B%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclose%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.show%20%3D%20false%26quot%3B%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efinish%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonFinish%26quot%3B%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20reactive%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20state%20%3D%20reactive%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EfieldValue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcascaderValue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%7D%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u9009%u9879%u5217%u8868%uFF0Cchildren%20%u4EE3%u8868%u5B50%u9009%u9879%uFF0C%u652F%u6301%u591A%u7EA7%u5D4C%u5957%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20options%20%3D%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6D59%u6C5F%u7701%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B330000%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Echildren%3C/span%3E%3A%20%5B%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u676D%u5DDE%u5E02%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B330100%26%23x27%3B%3C/span%3E%20%7D%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6C5F%u82CF%u7701%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B320000%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Echildren%3C/span%3E%3A%20%5B%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5357%u4EAC%u5E02%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B320100%26%23x27%3B%3C/span%3E%20%7D%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u5168%u90E8%u9009%u9879%u9009%u62E9%u5B8C%u6BD5%u540E%uFF0C%u4F1A%u89E6%u53D1%20finish%20%u4E8B%u4EF6%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onFinish%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%7B%20selectedOptions%20%7D%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20state.show%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20state.fieldValue%20%3D%20selectedOptions.map%28%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Eoption%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20option.text%29.join%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B/%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20state%2C%0A%20%20%20%20%20%20options%2C%0A%20%20%20%20%20%20onFinish%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zi-ding-yi-yan-se%22%3E%u81EA%u5B9A%u4E49%u989C%u8272%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Eactive-color%3C/code%3E%20%u5C5E%u6027%u6765%u8BBE%u7F6E%u9009%u4E2D%u72B6%u6001%u7684%u9AD8%u4EAE%u989C%u8272%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cascader%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.cascaderValue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u8BF7%u9009%u62E9%u6240%u5728%u5730%u533A%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boptions%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eactive-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%231989fa%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclose%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.show%20%3D%20false%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efinish%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonFinish%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yi-bu-jia-zai-xuan-xiang%22%3E%u5F02%u6B65%u52A0%u8F7D%u9009%u9879%3C/h3%3E%0A%3Cp%3E%u53EF%u4EE5%u76D1%u542C%20%3Ccode%3Echange%3C/code%3E%20%u4E8B%u4EF6%u5E76%u52A8%u6001%u8BBE%u7F6E%20%3Ccode%3Eoptions%3C/code%3E%uFF0C%u5B9E%u73B0%u5F02%u6B65%u52A0%u8F7D%u9009%u9879%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.fieldValue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eis-link%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ereadonly%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u5730%u533A%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u8BF7%u9009%u62E9%u6240%u5728%u5730%u533A%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.show%20%3D%20true%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.show%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eround%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bbottom%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cascader%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.cascaderValue%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u8BF7%u9009%u62E9%u6240%u5728%u5730%u533A%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.options%26quot%3B%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclose%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.show%20%3D%20false%26quot%3B%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonChange%26quot%3B%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efinish%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonFinish%26quot%3B%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20reactive%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20state%20%3D%20reactive%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EfieldValue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcascaderValue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eoptions%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6D59%u6C5F%u7701%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B330000%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Echildren%3C/span%3E%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onChange%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%7B%20value%20%7D%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28value%20%3D%3D%3D%20state.options%5B%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%5D.value%29%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3EsetTimeout%3C/span%3E%28%3Cspan%20class%3D%22hljs-function%22%3E%28%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20state.options%5B%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%5D.children%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u676D%u5DDE%u5E02%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B330100%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5B81%u6CE2%u5E02%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B330200%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%3B%0A%20%20%20%20%20%20%20%20%7D%2C%20%3Cspan%20class%3D%22hljs-number%22%3E500%3C/span%3E%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onFinish%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%7B%20selectedOptions%20%7D%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20state.show%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20state.fieldValue%20%3D%20selectedOptions.map%28%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Eoption%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20option.text%29.join%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B/%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20state%2C%0A%20%20%20%20%20%20onChange%2C%0A%20%20%20%20%20%20onFinish%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zi-ding-yi-zi-duan-ming%22%3E%u81EA%u5B9A%u4E49%u5B57%u6BB5%u540D%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Efield-names%3C/code%3E%20%u5C5E%u6027%u53EF%u4EE5%u81EA%u5B9A%u4E49%20%3Ccode%3Eoptions%3C/code%3E%20%u91CC%u7684%u5B57%u6BB5%u540D%u79F0%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cascader%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bcode%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u8BF7%u9009%u62E9%u6240%u5728%u5730%u533A%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boptions%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Afield-names%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BfieldNames%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20code%20%3D%20ref%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20fieldNames%20%3D%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bname%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bcode%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Echildren%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bitems%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20options%20%3D%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6D59%u6C5F%u7701%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecode%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B330000%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eitems%3C/span%3E%3A%20%5B%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u676D%u5DDE%u5E02%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Ecode%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B330100%26%23x27%3B%3C/span%3E%20%7D%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6C5F%u82CF%u7701%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecode%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B320000%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eitems%3C/span%3E%3A%20%5B%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5357%u4EAC%u5E02%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Ecode%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B320100%26%23x27%3B%3C/span%3E%20%7D%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20code%2C%0A%20%20%20%20%20%20options%2C%0A%20%20%20%20%20%20fieldNames%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle%3C/td%3E%0A%3Ctd%3E%u9876%u90E8%u6807%u9898%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Evalue%3C/td%3E%0A%3Ctd%3E%u9009%u4E2D%u9879%u7684%u503C%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20number%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eoptions%3C/td%3E%0A%3Ctd%3E%u53EF%u9009%u9879%u6570%u636E%u6E90%3C/td%3E%0A%3Ctd%3E%3Cem%3EOption%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eplaceholder%3C/td%3E%0A%3Ctd%3E%u672A%u9009%u4E2D%u65F6%u7684%u63D0%u793A%u6587%u6848%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u8BF7%u9009%u62E9%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eactive-color%3C/td%3E%0A%3Ctd%3E%u9009%u4E2D%u72B6%u6001%u7684%u9AD8%u4EAE%u989C%u8272%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%23ee0a24%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecloseable%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u5173%u95ED%u56FE%u6807%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efield-names%20%3Ccode%3Ev3.0.4%3C/code%3E%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%20%3Ccode%3Eoptions%3C/code%3E%20%u7ED3%u6784%u4E2D%u7684%u5B57%u6BB5%3C/td%3E%0A%3Ctd%3E%3Cem%3Eobject%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%7B%20text%3A%20%27text%27%2C%20value%3A%20%27value%27%2C%20children%3A%20%27children%27%20%7D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Echange%3C/td%3E%0A%3Ctd%3E%u9009%u4E2D%u9879%u53D8%u5316%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%7B%20value%2C%20selectedOptions%2C%20tabIndex%20%7D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efinish%3C/td%3E%0A%3Ctd%3E%u5168%u90E8%u9009%u9879%u9009%u62E9%u5B8C%u6210%u540E%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%7B%20value%2C%20selectedOptions%2C%20tabIndex%20%7D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u5173%u95ED%u56FE%u6807%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u9876%u90E8%u6807%u9898%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yang-shi-bian-liang%22%3E%u6837%u5F0F%u53D8%u91CF%3C/h3%3E%0A%3Cp%3E%u7EC4%u4EF6%u63D0%u4F9B%u4E86%u4E0B%u5217%20Less%20%u53D8%u91CF%uFF0C%u53EF%u7528%u4E8E%u81EA%u5B9A%u4E49%u6837%u5F0F%uFF0C%u4F7F%u7528%u65B9%u6CD5%u8BF7%u53C2%u8003%3Ca%20href%3D%22%23/zh-CN/theme%22%20target%3D%22_blank%22%3E%u4E3B%u9898%u5B9A%u5236%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u63CF%u8FF0%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-header-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E48px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-title-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-lg%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-title-line-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E20px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-close-icon-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E22px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-close-icon-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-5%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-close-icon-active-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-6%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-selected-icon-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E18px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-tabs-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E48px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-active-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@red%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-options-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E384px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-tab-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@text-color%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@cascader-unselected-tab-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-6%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),l={components:{},data:function(){return{content:n}},mounted:function(){var s=this,a=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));a.forEach((function(a){a.addEventListener("click",s.scrollToAnchor)}))},methods:{scrollToAnchor:function(s){s.target.id&&this.$router.push({name:this.$route.name,hash:"#"+s.target.id})}}},u=l,p=E("2be6"),e=Object(p["a"])(u,C,t,!1,null,null,null);a["default"]=e.exports}}]);