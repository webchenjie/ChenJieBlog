(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{690:function(e,t,a){"use strict";a.r(t);var v=a(11),r=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),a("p",[e._v("所谓的编译器就是 Vue 中的 comiler，它会把 template 转换为 render")]),e._v(" "),a("p",[e._v("主要是三大步骤：")]),e._v(" "),a("ul",[a("li",[e._v("解析（parse）template 模板，生成 AST")]),e._v(" "),a("li",[e._v("转化（transform）AST，得到 JS AST")]),e._v(" "),a("li",[e._v("生成（generate）render 函数")])]),e._v(" "),a("h3",{attrs:{id:"什么是-dsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dsl"}},[e._v("#")]),e._v(" 什么是 DSL？")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("领域特定语言（DSL）指的仅为某个适用的领域而设计的，并提供解决方案，在 Vue 中可以简单理解为就是把 template 模板编译成 render 函数的过程就是 compiler 编译器")])]),e._v(" "),a("li",[a("p",[e._v("正常的编译过程可以理解为把 A 语言转换为 B 语言，即源代码转换为目标代码，流程主要是以下步骤")]),e._v(" "),a("ul",[a("li",[e._v("源代码 ==> 词法分析 ==> 语法分析 ==> 语义分析 ==> 中间代码生成 ==> 中间代码优化 ==> 目标代码生成 ==> 目标代码优化 ==> 目标代码")])])]),e._v(" "),a("li",[a("p",[e._v("在 Vue 中，把 template 转换为 render 会比较简单些，主要是以下步骤")]),e._v(" "),a("ul",[a("li",[e._v("源代码（template） ==> 错误分析 ==> parse（生成 AST） ==> transform（生成 js AST） ==> 目标代码（render）")])])])]),e._v(" "),a("h3",{attrs:{id:"什么是-ast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ast"}},[e._v("#")]),e._v(" 什么是 AST？")]),e._v(" "),a("ul",[a("li",[e._v("抽象语法树（AST）指的是源代码语法结构的一种抽象表示，这边更多的是 template 的抽象")]),e._v(" "),a("li",[e._v("AST 本质上也是一个 js 对象")]),e._v(" "),a("li",[e._v("和 vnode 的区别？\n"),a("ul",[a("li",[e._v("这边大家可能会有些疑惑，因为 vnode 的结构和 AST 的结构很类似，认为它们是不是一样的，实际上不是，AST 可以理解为是模板的抽象表示，而 vnode 是 DOM 树的抽象表示，是不同阶段的产物，模板包含各种指令或其他 Vue 的代码，而 vnode 中没有")])])])]),e._v(" "),a("h3",{attrs:{id:"什么是-js-ast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-js-ast"}},[e._v("#")]),e._v(" 什么是 JS AST？")]),e._v(" "),a("ul",[a("li",[e._v("在生成了 AST 后，通过 transform 会生成 JS AST")]),e._v(" "),a("li",[e._v("JS AST 和 AST 的主要区别是新增了 codegenNode 节点，即代码生成节点")])]),e._v(" "),a("h3",{attrs:{id:"什么是有限状态机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是有限状态机"}},[e._v("#")]),e._v(" 什么是有限状态机？")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("有限个状态以及在这些状态之间的转移和动作等行为的数学计算模型")]),e._v(" "),a("ul",[a("li",[e._v("状态总数是有限的")]),e._v(" "),a("li",[e._v("任一时刻，只处在一种状态之中")]),e._v(" "),a("li",[e._v("某种条件下，会从一种状态转变到另一种状态")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);