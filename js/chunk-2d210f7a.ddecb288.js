(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210f7a"],{b9c0:function(t,C,E){"use strict";E.r(C);var d=function(){var t=this,C=t.$createElement,E=t._self._c||C;return E("section",[E("div",{domProps:{innerHTML:t._s(t.content)}})])},e=[],s=(E("8f0b"),E("33ef"),E("868d"),E("fa8c"),unescape("%3Ch1%3EAddressEdit%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22install%22%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20createApp%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20AddressEdit%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20app%20%3D%20createApp%28%29%3B%0Aapp.use%28AddressEdit%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22usage%22%3EUsage%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22basic-usage%22%3EBasic%20Usage%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-address-edit%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aarea-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BareaList%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-postal%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-delete%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-set-default%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-search-result%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Asearch-result%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BsearchResult%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aarea-columns-placeholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%5B%26%23x27%3BChoose%26%23x27%3B%2C%20%26%23x27%3BChoose%26%23x27%3B%2C%20%26%23x27%3BChoose%26%23x27%3B%5D%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Esave%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonSave%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Edelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonDelete%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange-detail%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonChangeDetail%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20searchResult%20%3D%20ref%28%5B%5D%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onSave%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bsave%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onDelete%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bdelete%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onChangeDetail%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Eval%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28val%29%20%7B%0A%20%20%20%20%20%20%20%20searchResult.value%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BName1%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eaddress%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BAddress%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%3B%0A%20%20%20%20%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20searchResult.value%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20onSave%2C%0A%20%20%20%20%20%20onDelete%2C%0A%20%20%20%20%20%20areaList%2C%0A%20%20%20%20%20%20searchResult%2C%0A%20%20%20%20%20%20onChangeDetail%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Earea-list%3C/td%3E%0A%3Ctd%3EArea%20List%3C/td%3E%0A%3Ctd%3E%3Cem%3Eobject%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Earea-columns-placeholder%3C/td%3E%0A%3Ctd%3Eplaceholder%20of%20area%20columns%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Earea-placeholder%3C/td%3E%0A%3Ctd%3Eplaceholder%20of%20area%20input%20field%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArea%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eaddress-info%3C/td%3E%0A%3Ctd%3EAddress%20Info%3C/td%3E%0A%3Ctd%3E%3Cem%3EAddressInfo%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%7B%7D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esearch-result%3C/td%3E%0A%3Ctd%3EAddress%20search%20result%3C/td%3E%0A%3Ctd%3E%3Cem%3ESearchResult%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-postal%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20postal%20field%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-delete%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20delete%20button%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-set-default%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20default%20address%20switch%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-search-result%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20address%20search%20result%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-area%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20area%20cell%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-detail%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20detail%20field%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisable-area%3C/td%3E%0A%3Ctd%3EWhether%20to%20disable%20area%20select%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esave-button-text%3C/td%3E%0A%3Ctd%3ESave%20button%20text%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3ESave%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edelete-button-text%3C/td%3E%0A%3Ctd%3EDelete%20button%20text%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EDelete%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edetail-rows%3C/td%3E%0A%3Ctd%3EDetail%20input%20rows%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E1%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edetail-maxlength%3C/td%3E%0A%3Ctd%3EDetail%20maxlength%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E200%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-saving%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20save%20button%20loading%20status%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-deleting%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20delete%20button%20loading%20status%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel-validator%3C/td%3E%0A%3Ctd%3EThe%20method%20to%20validate%20tel%3C/td%3E%0A%3Ctd%3E%3Cem%3E%28tel%3A%20string%29%20%3D%26gt%3B%20boolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel-maxlength%3C/td%3E%0A%3Ctd%3ETel%20maxlength%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epostal-validator%3C/td%3E%0A%3Ctd%3EThe%20method%20to%20validate%20postal%3C/td%3E%0A%3Ctd%3E%3Cem%3E%28tel%3A%20string%29%20%3D%26gt%3B%20boolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Evalidator%3C/td%3E%0A%3Ctd%3ECustom%20validator%3C/td%3E%0A%3Ctd%3E%3Cem%3E%28key%2C%20val%29%20%3D%26gt%3B%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Esave%3C/td%3E%0A%3Ctd%3EEmitted%20when%20the%20save%20button%20is%20clicked%3C/td%3E%0A%3Ctd%3Econtent%uFF1Aform%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efocus%3C/td%3E%0A%3Ctd%3EEmitted%20when%20field%20is%20focused%3C/td%3E%0A%3Ctd%3Ekey%3A%20field%20name%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edelete%3C/td%3E%0A%3Ctd%3EEmitted%20when%20confirming%20delete%3C/td%3E%0A%3Ctd%3Econtent%uFF1Aform%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecancel-delete%3C/td%3E%0A%3Ctd%3EEmitted%20when%20canceling%20delete%3C/td%3E%0A%3Ctd%3Econtent%uFF1Aform%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eselect-search%3C/td%3E%0A%3Ctd%3EEmitted%20when%20a%20search%20result%20is%20selected%3C/td%3E%0A%3Ctd%3Evalue%3A%20search%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick-area%3C/td%3E%0A%3Ctd%3EEmitted%20when%20the%20area%20field%20is%20clicked%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echange-area%3C/td%3E%0A%3Ctd%3EEmitted%20when%20area%20changed%3C/td%3E%0A%3Ctd%3Evalues%3A%20area%20values%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echange-detail%3C/td%3E%0A%3Ctd%3EEmitted%20when%20address%20detail%20changed%3C/td%3E%0A%3Ctd%3Evalue%3A%20address%20detail%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echange-default%3C/td%3E%0A%3Ctd%3EEmitted%20when%20switching%20default%20address%3C/td%3E%0A%3Ctd%3Evalue%3A%20checked%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Edefault%3C/td%3E%0A%3Ctd%3ECustom%20content%20below%20postal%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22methods%22%3EMethods%3C/h3%3E%0A%3Cp%3EUse%20%3Ca%20href%3D%22https%3A//v3.vuejs.org/guide/component-template-refs.html%22%20target%3D%22_blank%22%3Eref%3C/a%3E%20to%20get%20AddressEdit%20instance%20and%20call%20instance%20methods.%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EReturn%20value%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3EsetAddressDetail%3C/td%3E%0A%3Ctd%3ESet%20address%20detail%3C/td%3E%0A%3Ctd%3EaddressDetail%3A%20string%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22addressinfo-data-structure%22%3EAddressInfo%20Data%20Structure%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ekey%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eid%3C/td%3E%0A%3Ctd%3EAddress%20Id%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3EName%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel%3C/td%3E%0A%3Ctd%3EPhone%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eprovince%3C/td%3E%0A%3Ctd%3EProvince%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecity%3C/td%3E%0A%3Ctd%3ECity%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecounty%3C/td%3E%0A%3Ctd%3ECounty%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EaddressDetail%3C/td%3E%0A%3Ctd%3EDetailed%20Address%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EareaCode%3C/td%3E%0A%3Ctd%3EArea%20code%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EpostalCode%3C/td%3E%0A%3Ctd%3EPostal%20code%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EisDefault%3C/td%3E%0A%3Ctd%3EIs%20default%20address%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22searchresult-data-structure%22%3ESearchResult%20Data%20Structure%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ekey%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3EName%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eaddress%3C/td%3E%0A%3Ctd%3EAddress%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22area-data-structure%22%3EArea%20Data%20Structure%3C/h3%3E%0A%3Cp%3EPlease%20refer%20to%20%3Ca%20href%3D%22%23/en-US/area%22%20target%3D%22_blank%22%3EArea%3C/a%3E%20component%u3002%3C/p%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22less-variables%22%3ELess%20Variables%3C/h3%3E%0A%3Cp%3EHow%20to%20use%3A%20%3Ca%20href%3D%22%23/en-US/theme%22%20target%3D%22_blank%22%3ECustom%20Theme%3C/a%3E.%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDefault%20Value%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-edit-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-edit-buttons-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-xl%20@padding-base%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-edit-button-margin-bottom%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-edit-detail-finish-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@blue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-edit-detail-finish-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),a={components:{},data:function(){return{content:s}},mounted:function(){var t=this,C=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));C.forEach((function(C){C.addEventListener("click",t.scrollToAnchor)}))},methods:{scrollToAnchor:function(t){t.target.id&&this.$router.push({name:this.$route.name,hash:"#"+t.target.id})}}},A=a,r=E("2be6"),n=Object(r["a"])(A,d,e,!1,null,null,null);C["default"]=n.exports}}]);