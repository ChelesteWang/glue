(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8fa1"],{"8c22":function(t,s,C){"use strict";C.r(s);var E=function(){var t=this,s=t.$createElement,C=t._self._c||s;return C("section",[C("div",{domProps:{innerHTML:t._s(t.content)}})])},d=[],a=(C("8f0b"),C("33ef"),C("868d"),C("fa8c"),unescape("%3Ch1%3EAddressList%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22install%22%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20createApp%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20AddressList%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20app%20%3D%20createApp%28%29%3B%0Aapp.use%28AddressList%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22usage%22%3EUsage%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22basic-usage%22%3EBasic%20Usage%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-address-list%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BchosenAddressId%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Alist%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Blist%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Adisabled-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BdisabledList%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BThe%20following%20address%20is%20out%20of%20range%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edefault-tag-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BDefault%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eadd%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonAdd%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eedit%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonEdit%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20chosenAddressId%20%3D%20ref%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B1%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20list%20%3D%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B1%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BJohn%20Snow%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B13000000000%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eaddress%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BSomewhere%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EisDefault%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B2%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BNed%20Stark%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B1310000000%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eaddress%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BSomewhere%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20disabledList%20%3D%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B3%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BTywin%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B1320000000%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eaddress%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BSomewhere%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onAdd%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BAdd%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onEdit%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Eitem%2C%20index%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BEdit%3A%26%23x27%3B%3C/span%3E%20+%20index%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20list%2C%0A%20%20%20%20%20%20onAdd%2C%0A%20%20%20%20%20%20onEdit%2C%0A%20%20%20%20%20%20disabledList%2C%0A%20%20%20%20%20%20chosenAddressId%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3EId%20of%20chosen%20address%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elist%3C/td%3E%0A%3Ctd%3EAddress%20list%3C/td%3E%0A%3Ctd%3E%3Cem%3EAddress%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled-list%3C/td%3E%0A%3Ctd%3EDisabled%20address%20list%3C/td%3E%0A%3Ctd%3E%3Cem%3EAddress%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled-text%3C/td%3E%0A%3Ctd%3EDisabled%20text%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eswitchable%3C/td%3E%0A%3Ctd%3EWhether%20to%20allow%20switch%20address%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eadd-button-text%3C/td%3E%0A%3Ctd%3EAdd%20button%20text%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EAdd%20new%20address%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edefault-tag-text%3C/td%3E%0A%3Ctd%3EDefault%20tag%20text%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eadd%3C/td%3E%0A%3Ctd%3EEmitted%20when%20the%20add%20button%20is%20clicked%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eedit%3C/td%3E%0A%3Ctd%3EEmitted%20when%20the%20edit%20icon%20of%20address%20is%20clicked%3C/td%3E%0A%3Ctd%3Eitem%3A%20address%20object%uFF0Cindex%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eselect%3C/td%3E%0A%3Ctd%3EEmitted%20when%20an%20address%20is%20selected%3C/td%3E%0A%3Ctd%3Eitem%3A%20address%20object%uFF0Cindex%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eedit-disabled%3C/td%3E%0A%3Ctd%3EEmitted%20when%20the%20edit%20icon%20of%20disabled%20address%20is%20clicked%3C/td%3E%0A%3Ctd%3Eitem%3A%20address%20object%uFF0Cindex%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eselect-disabled%3C/td%3E%0A%3Ctd%3EEmitted%20when%20a%20disabled%20address%20is%20selected%3C/td%3E%0A%3Ctd%3Eitem%3A%20address%20object%uFF0Cindex%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick-item%3C/td%3E%0A%3Ctd%3EEmitted%20when%20an%20address%20item%20is%20clicked%3C/td%3E%0A%3Ctd%3Eitem%3A%20address%20object%uFF0Cindex%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22data-structure-of-address%22%3EData%20Structure%20of%20Address%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EKey%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eid%3C/td%3E%0A%3Ctd%3EId%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3EName%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel%3C/td%3E%0A%3Ctd%3EPhone%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eaddress%3C/td%3E%0A%3Ctd%3EAddress%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EisDefault%3C/td%3E%0A%3Ctd%3EIs%20default%20address%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3ESlotProps%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Edefault%3C/td%3E%0A%3Ctd%3ECustom%20content%20after%20list%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etop%3C/td%3E%0A%3Ctd%3ECustom%20content%20before%20list%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eitem-bottom%3C/td%3E%0A%3Ctd%3ECustom%20content%20after%20list%20item%3C/td%3E%0A%3Ctd%3Eitem%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22less-variables%22%3ELess%20Variables%3C/h3%3E%0A%3Cp%3EHow%20to%20use%3A%20%3Ca%20href%3D%22%23/en-US/theme%22%20target%3D%22_blank%22%3ECustom%20Theme%3C/a%3E.%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDefault%20Value%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-sm%20@padding-sm%2080px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-disabled-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-6%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-disabled-text-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-base%20*%205%200%20@padding-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-disabled-text-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-disabled-text-line-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@line-height-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-add-button-z-index%3C/td%3E%0A%3Ctd%3E%3Ccode%3E999%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@text-color%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-disabled-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-5%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E13px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-line-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@line-height-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-radio-icon-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@red%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-edit-icon-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E20px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),e={components:{},data:function(){return{content:a}},mounted:function(){var t=this,s=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));s.forEach((function(s){s.addEventListener("click",t.scrollToAnchor)}))},methods:{scrollToAnchor:function(t){t.target.id&&this.$router.push({name:this.$route.name,hash:"#"+t.target.id})}}},A=e,n=C("2be6"),r=Object(n["a"])(A,E,d,!1,null,null,null);s["default"]=r.exports}}]);