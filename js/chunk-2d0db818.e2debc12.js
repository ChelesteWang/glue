(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0db818"],{"6fc5":function(s,t,C){"use strict";C.r(t);var E=function(){var s=this,t=s.$createElement,C=s._self._c||t;return C("section",[C("div",{domProps:{innerHTML:s._s(s.content)}})])},a=[],e=(C("8f0b"),C("33ef"),C("868d"),C("fa8c"),unescape("%3Ch1%3EField%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22install%22%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20createApp%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Field%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20app%20%3D%20createApp%28%29%3B%0Aapp.use%28Field%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22usage%22%3EUsage%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22basic-usage%22%3EBasic%20Usage%3C/h3%3E%0A%3Cp%3EThe%20value%20of%20field%20is%20bound%20with%20v-model.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cell-group%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BLabel%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BText%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-cell-group%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20value%20%3D%20ref%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%20value%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22custom-type%22%3ECustom%20Type%3C/h3%3E%0A%3Cp%3EUse%20%3Ccode%3Etype%3C/code%3E%20prop%20to%20custom%20different%20type%20fields.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.text%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BText%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.tel%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Btel%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BPhone%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.digit%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bdigit%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BDigit%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.number%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bnumber%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BNumber%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.password%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bpassword%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BPassword%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20reactive%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20state%20%3D%20reactive%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edigit%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Enumber%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Epassword%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%7D%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%20state%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22disabled%22%3EDisabled%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cell-group%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BText%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Emodel-value%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BInput%20Readonly%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ereadonly%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BText%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Emodel-value%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BInput%20Disabled%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-cell-group%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22show-icon%22%3EShow%20Icon%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cell-group%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.value1%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BText%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eleft-icon%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bsmile-o%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eright-icon%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bwarning-o%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BShow%20Icon%26quot%3B%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.value2%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eclearable%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BText%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eleft-icon%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bmusic-o%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BShow%20Clear%20Icon%26quot%3B%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-cell-group%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20reactive%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20state%20%3D%20reactive%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue1%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue2%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B123%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%7D%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%20state%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22error-info%22%3EError%20Info%3C/h3%3E%0A%3Cp%3EUse%20%3Ccode%3Eerror%3C/code%3E%20or%20%3Ccode%3Eerror-message%3C/code%3E%20to%20show%20error%20info.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cell-group%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Busername%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eerror%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erequired%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BUsername%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BUsername%26quot%3B%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bphone%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erequired%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BPhone%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BPhone%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eerror-message%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BInvalid%20phone%26quot%3B%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-cell-group%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22insert-button%22%3EInsert%20Button%3C/h3%3E%0A%3Cp%3EUse%20button%20slot%20to%20insert%20button.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bsms%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ecenter%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eclearable%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BSMS%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BSMS%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Ebutton%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esize%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bsmall%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bprimary%26quot%3B%3C/span%3E%26gt%3B%3C/span%3ESend%20SMS%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22format-value%22%3EFormat%20Value%3C/h3%3E%0A%3Cp%3EUse%20%3Ccode%3Eformatter%3C/code%3E%20prop%20to%20format%20the%20input%20value.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.value1%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BText%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aformatter%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bformatter%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BFormat%20On%20Change%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.value2%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BText%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aformatter%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bformatter%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eformat-trigger%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonBlur%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BFormat%20On%20Blur%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20reactive%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20state%20%3D%20reactive%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue1%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue2%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%7D%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20formatter%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Evalue%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20value.replace%28%3Cspan%20class%3D%22hljs-regexp%22%3E/%5Cd/g%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20state%2C%0A%20%20%20%20%20%20formatter%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22auto-resize%22%3EAuto%20Resize%3C/h3%3E%0A%3Cp%3ETextarea%20Field%20can%20be%20auto%20resize%20when%20has%20%3Ccode%3Eautosize%3C/code%3E%20prop.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bmessage%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BMessage%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Btextarea%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BMessage%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erows%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B1%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eautosize%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22show-word-limit%22%3EShow%20Word%20Limit%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bmessage%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erows%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B2%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eautosize%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BMessage%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Btextarea%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emaxlength%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B50%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BMessage%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-word-limit%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22input-align%22%3EInput%20Align%3C/h3%3E%0A%3Cp%3EUse%20%3Ccode%3Einput-align%3C/code%3E%20prop%20to%20align%20the%20input%20value.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-field%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elabel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BText%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplaceholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BInput%20Align%20Right%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Einput-align%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bright%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3EField%20value%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elabel%3C/td%3E%0A%3Ctd%3EField%20label%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3EName%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etype%3C/td%3E%0A%3Ctd%3EInput%20type%2C%20can%20be%20set%20to%20%3Ccode%3Etel%3C/code%3E%20%3Ccode%3Edigit%3C/code%3E%3Cbr%3E%3Ccode%3Enumber%3C/code%3E%20%3Ccode%3Etextarea%3C/code%3E%20%3Ccode%3Epassword%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etext%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esize%3C/td%3E%0A%3Ctd%3ESize%uFF0Ccan%20be%20set%20to%20%3Ccode%3Elarge%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emaxlength%3C/td%3E%0A%3Ctd%3EMax%20length%20of%20value%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eplaceholder%3C/td%3E%0A%3Ctd%3EInput%20placeholder%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eborder%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20inner%20border%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3EWhether%20to%20disable%20field%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ereadonly%3C/td%3E%0A%3Ctd%3EWhether%20to%20be%20readonly%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecolon%3C/td%3E%0A%3Ctd%3EWhether%20to%20display%20colon%20after%20label%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Erequired%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20required%20mark%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecenter%3C/td%3E%0A%3Ctd%3EWhether%20to%20center%20content%20vertically%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclearable%3C/td%3E%0A%3Ctd%3EWhether%20to%20be%20clearable%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclear-trigger%3C/td%3E%0A%3Ctd%3EWhen%20to%20display%20the%20clear%20icon%2C%20%3Ccode%3Ealways%3C/code%3E%20means%20to%20display%20the%20icon%20when%20value%20is%20not%20empty%2C%20%3Ccode%3Efocus%3C/code%3E%20means%20to%20display%20the%20icon%20when%20input%20is%20focused%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efocus%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclickable%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20click%20feedback%20when%20clicked%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-link%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20link%20icon%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eautofocus%3C/td%3E%0A%3Ctd%3EWhether%20to%20auto%20focus%2C%20unsupported%20in%20iOS%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-word-limit%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20word%20limit%2C%20need%20to%20set%20the%20%3Ccode%3Emaxlength%3C/code%3E%20prop%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eerror%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20error%20info%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eerror-message%3C/td%3E%0A%3Ctd%3EError%20message%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eformatter%3C/td%3E%0A%3Ctd%3EInput%20value%20formatter%3C/td%3E%0A%3Ctd%3E%3Cem%3EFunction%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eformat-trigger%3C/td%3E%0A%3Ctd%3EWhen%20to%20format%20value%uFF0Ccan%20be%20set%20to%20%3Ccode%3EonBlur%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EonChange%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Earrow-direction%3C/td%3E%0A%3Ctd%3ECan%20be%20set%20to%20%3Ccode%3Eleft%3C/code%3E%20%3Ccode%3Eup%3C/code%3E%20%3Ccode%3Edown%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eright%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elabel-class%3C/td%3E%0A%3Ctd%3ELabel%20className%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20Array%20%7C%20object%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elabel-width%3C/td%3E%0A%3Ctd%3ELabel%20width%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E6.2em%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elabel-align%3C/td%3E%0A%3Ctd%3ELabel%20align%2C%20can%20be%20set%20to%20%3Ccode%3Ecenter%3C/code%3E%20%3Ccode%3Eright%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eleft%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Einput-align%3C/td%3E%0A%3Ctd%3EInput%20align%2C%20can%20be%20set%20to%20%3Ccode%3Ecenter%3C/code%3E%20%3Ccode%3Eright%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eleft%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eerror-message-align%3C/td%3E%0A%3Ctd%3EError%20message%20align%2C%20can%20be%20set%20to%20%3Ccode%3Ecenter%3C/code%3E%20%3Ccode%3Eright%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eleft%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eautosize%3C/td%3E%0A%3Ctd%3ETextarea%20auto%20resize%uFF0Ccan%20accpet%20an%20object%2C%3Cbr%3Ee.g.%20%7B%20maxHeight%3A%20100%2C%20minHeight%3A%2050%20%7D%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%20%7C%20object%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eleft-icon%3C/td%3E%0A%3Ctd%3ELeft%20side%20icon%20name%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eright-icon%3C/td%3E%0A%3Ctd%3ERight%20side%20icon%20name%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eicon-prefix%3C/td%3E%0A%3Ctd%3EIcon%20className%20prefix%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Evan-icon%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Erules%3C/td%3E%0A%3Ctd%3EForm%20validation%20rules%3C/td%3E%0A%3Ctd%3E%3Cem%3ERule%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eautocomplete%20%3Ccode%3Ev3.0.3%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ca%20href%3D%22https%3A//developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete%22%20target%3D%22_blank%22%3Eautocomplete%3C/a%3E%20attribute%20of%20native%20input%20element%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Cp%3EField%20support%20all%20native%20events%20of%20input%20tag%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EParameters%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eupdate%3Amodel-value%3C/td%3E%0A%3Ctd%3EEmitted%20when%20input%20value%20changed%3C/td%3E%0A%3Ctd%3E%3Cem%3Evalue%3A%20string%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efocus%3C/td%3E%0A%3Ctd%3EEmitted%20when%20input%20is%20focused%3C/td%3E%0A%3Ctd%3E%3Cem%3Eevent%3A%20Event%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eblur%3C/td%3E%0A%3Ctd%3EEmitted%20when%20input%20is%20blured%3C/td%3E%0A%3Ctd%3E%3Cem%3Eevent%3A%20Event%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclear%3C/td%3E%0A%3Ctd%3EEmitted%20when%20the%20clear%20icon%20is%20clicked%3C/td%3E%0A%3Ctd%3E%3Cem%3Eevent%3A%20Event%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick%3C/td%3E%0A%3Ctd%3EEmitted%20when%20component%20is%20clicked%3C/td%3E%0A%3Ctd%3E%3Cem%3Eevent%3A%20Event%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick-input%3C/td%3E%0A%3Ctd%3EEmitted%20when%20the%20input%20is%20clicked%3C/td%3E%0A%3Ctd%3E%3Cem%3Eevent%3A%20Event%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick-left-icon%3C/td%3E%0A%3Ctd%3EEmitted%20when%20the%20left%20icon%20is%20clicked%3C/td%3E%0A%3Ctd%3E%3Cem%3Eevent%3A%20Event%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick-right-icon%3C/td%3E%0A%3Ctd%3EEmitted%20when%20the%20right%20icon%20is%20clicked%3C/td%3E%0A%3Ctd%3E%3Cem%3Eevent%3A%20Event%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22methods%22%3EMethods%3C/h3%3E%0A%3Cp%3EUse%20%3Ca%20href%3D%22https%3A//v3.vuejs.org/guide/component-template-refs.html%22%20target%3D%22_blank%22%3Eref%3C/a%3E%20to%20get%20Field%20instance%20and%20call%20instance%20methods.%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EReturn%20value%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Efocus%3C/td%3E%0A%3Ctd%3ETrigger%20input%20focus%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eblur%3C/td%3E%0A%3Ctd%3ETrigger%20input%20blur%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Elabel%3C/td%3E%0A%3Ctd%3ECustom%20label%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Einput%3C/td%3E%0A%3Ctd%3ECustom%20input%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eleft-icon%3C/td%3E%0A%3Ctd%3ECustom%20left%20icon%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eright-icon%3C/td%3E%0A%3Ctd%3ECustom%20right%20icon%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebutton%3C/td%3E%0A%3Ctd%3EInsert%20button%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eextra%3C/td%3E%0A%3Ctd%3ECustom%20content%20on%20the%20right%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22less-variables%22%3ELess%20Variables%3C/h3%3E%0A%3Cp%3EHow%20to%20use%3A%20%3Ca%20href%3D%22%23/en-US/theme%22%20target%3D%22_blank%22%3ECustom%20Theme%3C/a%3E.%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDefault%20Value%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-label-width%3C/td%3E%0A%3Ctd%3E%3Ccode%3E6.2em%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-label-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-7%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-label-margin-right%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-input-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@text-color%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-input-error-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@red%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-input-disabled-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-5%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-placeholder-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-5%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-icon-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E16px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-clear-icon-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E16px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-clear-icon-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-5%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-right-icon-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-6%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-error-message-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@red%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-error-message-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E12px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-text-area-min-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E60px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-word-limit-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-7%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-word-limit-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-word-limit-line-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E16px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@field-disabled-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-5%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),l={components:{},data:function(){return{content:e}},mounted:function(){var s=this,t=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));t.forEach((function(t){t.addEventListener("click",s.scrollToAnchor)}))},methods:{scrollToAnchor:function(s){s.target.id&&this.$router.push({name:this.$route.name,hash:"#"+s.target.id})}}},n=l,d=C("2be6"),r=Object(d["a"])(n,E,a,!1,null,null,null);t["default"]=r.exports}}]);