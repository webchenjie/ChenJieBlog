(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{683:function(t,e,a){"use strict";a.r(e);var l=a(11),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-描述"}},[t._v("#")]),t._v(" 1. 描述")]),t._v(" "),a("p",[t._v("创建 ReactiveEffect 实例，执行实例中的 run 函数，run 函数会把当前实例保存在全局变量上（这个主要在收集依赖时需要使用），并且执行传入的 fn 函数，即用户自定义的函数，执行用户的自定义函数就会触发 get 操作，然后进行依赖收集，当修改时触发 set 操作，然后进行依赖触发")]),t._v(" "),a("h2",{attrs:{id:"_2-过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-过程"}},[t._v("#")]),t._v(" 2. 过程")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数据结构")]),t._v(" "),a("ul",[a("li",[t._v("WeakMap\n"),a("ul",[a("li",[t._v("key: 响应式对象")]),t._v(" "),a("li",[t._v("value: Map 对象\n"),a("ul",[a("li",[t._v("key: 响应式对象的指定属性")]),t._v(" "),a("li",[t._v("value: Set 对象")])])])])])])]),t._v(" "),a("li",[a("p",[t._v("reactive\n如果是复杂类型则会有一个 WeakMap 的数据结构对应的一对多的依赖对象，从而才能知道对应的哪个属性哪个依赖的触发")])]),t._v(" "),a("li",[a("p",[t._v("ref\n如果是简单类型则会有 Set 对象，其实就是 WeakMap 中的 Set 对象，也就是简单数据类型比复杂数据类型的依赖收集和触发会简单些")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);