(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21367e"],{ad16:function(s,C,E){"use strict";E.r(C);var a=function(){var s=this,C=s.$createElement,E=s._self._c||C;return E("section",[E("div",{domProps:{innerHTML:s._s(s.content)}})])},t=[],n=(E("8f0b"),E("33ef"),E("868d"),E("fa8c"),unescape("%3Ch1%3EDropdownMenu%20%u4E0B%u62C9%u83DC%u5355%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3E%u5411%u4E0B%u5F39%u51FA%u7684%u83DC%u5355%u5217%u8868%u3002%3C/p%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-menu%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-item%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.value1%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boption1%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-item%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.value2%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boption2%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-menu%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20reactive%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20state%20%3D%20reactive%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue1%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue2%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Ba%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%7D%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20option1%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5168%u90E8%u5546%u54C1%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u65B0%u6B3E%u5546%u54C1%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6D3B%u52A8%u5546%u54C1%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C/span%3E%20%7D%2C%0A%20%20%20%20%5D%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20option2%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9ED8%u8BA4%u6392%u5E8F%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Ba%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u597D%u8BC4%u6392%u5E8F%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bb%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9500%u91CF%u6392%u5E8F%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bc%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20state%2C%0A%20%20%20%20%20%20option1%2C%0A%20%20%20%20%20%20option2%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zi-ding-yi-cai-dan-nei-rong%22%3E%u81EA%u5B9A%u4E49%u83DC%u5355%u5185%u5BB9%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%u63D2%u69FD%u53EF%u4EE5%u81EA%u5B9A%u4E49%20%3Ccode%3EDropdownItem%3C/code%3E%20%u7684%u5185%u5BB9%uFF0C%u6B64%u65F6%u9700%u8981%u4F7F%u7528%u5B9E%u4F8B%u4E0A%u7684%20%3Ccode%3Etoggle%3C/code%3E%20%u65B9%u6CD5%u624B%u52A8%u63A7%u5236%u83DC%u5355%u7684%u663E%u793A%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-menu%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-item%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boption%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-item%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u7B5B%u9009%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eref%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bitem%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cell%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ecenter%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u5305%u90AE%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Eright-icon%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-switch%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bswitch1%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esize%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B24%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eactive-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%23ee0a24%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-cell%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cell%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ecenter%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u56E2%u8D2D%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Eright-icon%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-switch%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bswitch2%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esize%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B24%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eactive-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%23ee0a24%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-cell%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Estyle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bpadding%3A%205px%2016px%3B%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bdanger%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eblock%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eround%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonConfirm%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%20%20%20%20%u786E%u8BA4%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-item%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-menu%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%2C%20reactive%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20item%20%3D%20ref%28%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20state%20%3D%20reactive%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eswitch1%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eswitch2%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%7D%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20options%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5168%u90E8%u5546%u54C1%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u65B0%u6B3E%u5546%u54C1%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6D3B%u52A8%u5546%u54C1%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C/span%3E%20%7D%2C%0A%20%20%20%20%5D%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onConfirm%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20item.value.toggle%28%29%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20item%2C%0A%20%20%20%20%20%20state%2C%0A%20%20%20%20%20%20option%2C%0A%20%20%20%20%20%20onConfirm%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zi-ding-yi-xuan-zhong-tai-yan-se%22%3E%u81EA%u5B9A%u4E49%u9009%u4E2D%u6001%u989C%u8272%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Eactive-color%3C/code%3E%20%u5C5E%u6027%u53EF%u4EE5%u81EA%u5B9A%u4E49%u83DC%u5355%u6807%u9898%u548C%u9009%u9879%u7684%u9009%u4E2D%u6001%u989C%u8272%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-menu%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eactive-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%231989fa%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-item%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue1%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boption1%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-item%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue2%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boption2%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-menu%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22xiang-shang-zhan-kai%22%3E%u5411%u4E0A%u5C55%u5F00%3C/h3%3E%0A%3Cp%3E%u5C06%20%3Ccode%3Edirection%3C/code%3E%20%u5C5E%u6027%u503C%u8BBE%u7F6E%u4E3A%20%3Ccode%3Eup%3C/code%3E%uFF0C%u83DC%u5355%u5373%u53EF%u5411%u4E0A%u5C55%u5F00%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-menu%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Edirection%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bup%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-item%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue1%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boption1%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-item%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue2%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boption2%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-menu%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jin-yong-cai-dan%22%3E%u7981%u7528%u83DC%u5355%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-menu%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-item%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue1%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boption1%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-item%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue2%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aoptions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Boption2%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-dropdown-menu%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22dropdownmenu-props%22%3EDropdownMenu%20Props%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eactive-color%3C/td%3E%0A%3Ctd%3E%u83DC%u5355%u6807%u9898%u548C%u9009%u9879%u7684%u9009%u4E2D%u6001%u989C%u8272%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%23ee0a24%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edirection%3C/td%3E%0A%3Ctd%3E%u83DC%u5355%u5C55%u5F00%u65B9%u5411%uFF0C%u53EF%u9009%u503C%u4E3A%3Ccode%3Eup%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Edown%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ez-index%3C/td%3E%0A%3Ctd%3E%u83DC%u5355%u680F%20z-index%20%u5C42%u7EA7%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E10%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eduration%3C/td%3E%0A%3Ctd%3E%u52A8%u753B%u65F6%u957F%uFF0C%u5355%u4F4D%u79D2%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0.2%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eoverlay%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u906E%u7F69%u5C42%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-on-click-overlay%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5728%u70B9%u51FB%u906E%u7F69%u5C42%u540E%u5173%u95ED%u83DC%u5355%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-on-click-outside%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5728%u70B9%u51FB%u5916%u90E8%u5143%u7D20%u540E%u5173%u95ED%u83DC%u5355%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22dropdownitem-props%22%3EDropdownItem%20Props%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Evalue%3C/td%3E%0A%3Ctd%3E%u5F53%u524D%u9009%u4E2D%u9879%u5BF9%u5E94%u7684%20value%uFF0C%u53EF%u4EE5%u901A%u8FC7%3Ccode%3Ev-model%3C/code%3E%u53CC%u5411%u7ED1%u5B9A%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle%3C/td%3E%0A%3Ctd%3E%u83DC%u5355%u9879%u6807%u9898%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%u5F53%u524D%u9009%u4E2D%u9879%u6587%u5B57%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eoptions%3C/td%3E%0A%3Ctd%3E%u9009%u9879%u6570%u7EC4%3C/td%3E%0A%3Ctd%3E%3Cem%3EOption%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u7981%u7528%u83DC%u5355%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elazy-render%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5728%u9996%u6B21%u5C55%u5F00%u65F6%u624D%u6E32%u67D3%u83DC%u5355%u5185%u5BB9%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle-class%3C/td%3E%0A%3Ctd%3E%u6807%u9898%u989D%u5916%u7C7B%u540D%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20Array%20%7C%20object%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eteleport%3C/td%3E%0A%3Ctd%3E%u6307%u5B9A%u6302%u8F7D%u7684%u8282%u70B9%uFF0C%3Ca%20href%3D%22%23/zh-CN/popup%23zhi-ding-gua-zai-wei-zhi%22%20target%3D%22_blank%22%3E%u7528%u6CD5%u793A%u4F8B%3C/a%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20Element%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22dropdownitem-events%22%3EDropdownItem%20Events%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Echange%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u9009%u9879%u5BFC%u81F4%20value%20%u53D8%u5316%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Evalue%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eopen%3C/td%3E%0A%3Ctd%3E%u6253%u5F00%u83DC%u5355%u680F%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose%3C/td%3E%0A%3Ctd%3E%u5173%u95ED%u83DC%u5355%u680F%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eopened%3C/td%3E%0A%3Ctd%3E%u6253%u5F00%u83DC%u5355%u680F%u4E14%u52A8%u753B%u7ED3%u675F%u540E%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclosed%3C/td%3E%0A%3Ctd%3E%u5173%u95ED%u83DC%u5355%u680F%u4E14%u52A8%u753B%u7ED3%u675F%u540E%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22dropdownitem-slots%22%3EDropdownItem%20Slots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Edefault%3C/td%3E%0A%3Ctd%3E%u83DC%u5355%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u83DC%u5355%u9879%u6807%u9898%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22dropdownitem-fang-fa%22%3EDropdownItem%20%u65B9%u6CD5%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20ref%20%u53EF%u4EE5%u83B7%u53D6%u5230%20DropdownItem%20%u5B9E%u4F8B%u5E76%u8C03%u7528%u5B9E%u4F8B%u65B9%u6CD5%uFF0C%u8BE6%u89C1%3Ca%20href%3D%22%23/zh-CN/advanced-usage%23zu-jian-shi-li-fang-fa%22%20target%3D%22_blank%22%3E%u7EC4%u4EF6%u5B9E%u4F8B%u65B9%u6CD5%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u65B9%u6CD5%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8FD4%u56DE%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etoggle%3C/td%3E%0A%3Ctd%3E%u5207%u6362%u83DC%u5355%u5C55%u793A%u72B6%u6001%uFF0C%u4F20%20%3Ccode%3Etrue%3C/code%3E%20%u4E3A%u663E%u793A%uFF0C%3Ccode%3Efalse%3C/code%3E%20%u4E3A%u9690%u85CF%uFF0C%u4E0D%u4F20%u53C2%u4E3A%u53D6%u53CD%3C/td%3E%0A%3Ctd%3E%3Cem%3Eshow%3F%3A%20boolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22option-shu-ju-jie-gou%22%3EOption%20%u6570%u636E%u7ED3%u6784%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u952E%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etext%3C/td%3E%0A%3Ctd%3E%u6587%u5B57%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Evalue%3C/td%3E%0A%3Ctd%3E%u6807%u8BC6%u7B26%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eicon%3C/td%3E%0A%3Ctd%3E%u5DE6%u4FA7%3Ca%20href%3D%22%23/zh-CN/icon%22%20target%3D%22_blank%22%3E%u56FE%u6807%u540D%u79F0%3C/a%3E%u6216%u56FE%u7247%u94FE%u63A5%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yang-shi-bian-liang%22%3E%u6837%u5F0F%u53D8%u91CF%3C/h3%3E%0A%3Cp%3E%u7EC4%u4EF6%u63D0%u4F9B%u4E86%u4E0B%u5217%20Less%20%u53D8%u91CF%uFF0C%u53EF%u7528%u4E8E%u81EA%u5B9A%u4E49%u6837%u5F0F%uFF0C%u4F7F%u7528%u65B9%u6CD5%u8BF7%u53C2%u8003%3Ca%20href%3D%22%23/zh-CN/theme%22%20target%3D%22_blank%22%3E%u4E3B%u9898%u5B9A%u5236%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u63CF%u8FF0%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-menu-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E48px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-menu-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@white%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-menu-box-shadow%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%202px%2012px%20fade%28@gray-7%2C%2012%29%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-menu-title-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E15px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-menu-title-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@text-color%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-menu-title-active-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@red%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-menu-title-disabled-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-6%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-menu-title-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%20@padding-xs%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-menu-title-line-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@line-height-lg%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-menu-option-active-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@red%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-menu-content-max-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E80%25%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@dropdown-item-z-index%3C/td%3E%0A%3Ctd%3E%3Ccode%3E10%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),u={components:{},data:function(){return{content:n}},mounted:function(){var s=this,C=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));C.forEach((function(C){C.addEventListener("click",s.scrollToAnchor)}))},methods:{scrollToAnchor:function(s){s.target.id&&this.$router.push({name:this.$route.name,hash:"#"+s.target.id})}}},l=u,p=E("2be6"),d=Object(p["a"])(l,a,t,!1,null,null,null);C["default"]=d.exports}}]);