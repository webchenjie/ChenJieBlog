(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{688:function(e,t,s){"use strict";s.r(t);var a=s(11),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),s("p",[e._v("render 函数的作用就是根据 vnode 去渲染对应的 DOM 元素，其中会根据 vnode 中的类型去创建不同的 DOM 节点")]),e._v(" "),s("h2",{attrs:{id:"过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[e._v("#")]),e._v(" 过程")]),e._v(" "),s("p",[e._v("创建节点：document.createElement(type)")]),e._v(" "),s("p",[e._v("设置节点内容：el.textContent = text")]),e._v(" "),s("p",[e._v("挂载节点： el.insertBefore(child)")]),e._v(" "),s("h3",{attrs:{id:"元素节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素节点"}},[e._v("#")]),e._v(" 元素节点")]),e._v(" "),s("h4",{attrs:{id:"挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挂载"}},[e._v("#")]),e._v(" 挂载")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("如果新节点是空的并且旧节点存在，则会执行删除动作")])]),e._v(" "),s("li",[s("p",[e._v("触发 patch 方法，根据 vnode 中的 type 和 shapeFlag 的值来确定要进行哪种类型的节点挂载（shapeFlag 使用 "),s("code",[e._v("按位与")]),e._v(" 运算计算）")])])]),e._v(" "),s("blockquote",[s("p",[s("code",[e._v("按位与")]),e._v(" 运算可以简单理解为是把数值变成 32 位的二进制进行相比，只有两个都为 1 结果才是 1，否则就是 0，然后再把二进制转为十进制")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("确定了类型，就可以进行挂载操作，挂载函数会判断是否有旧节点，如果有则是更新，如果没有则是挂载")])]),e._v(" "),s("li",[s("p",[e._v("挂载逻辑")]),e._v(" "),s("ul",[s("li",[e._v("生成 DOM 标签")]),e._v(" "),s("li",[e._v("生成标签中的内容")]),e._v(" "),s("li",[e._v("处理 props（class/style）")]),e._v(" "),s("li",[e._v("挂载节点")])])]),e._v(" "),s("li",[s("p",[e._v("挂载后会把当前的 vnode 保存在 DOM 元素上，标识为旧节点")])])]),e._v(" "),s("h4",{attrs:{id:"更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[e._v("#")]),e._v(" 更新")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("触发 patchElement 方法，在里面主要更新子节点和更新 props")])]),e._v(" "),s("li",[s("p",[e._v("如果新旧两个节点的 type 和 key 相同，则会认为是同一个节点，如果是不同类型的节点进行更新，会直接把旧节点进行删除，然后进行新节点的挂载")])]),e._v(" "),s("li",[s("p",[e._v("diff 算法出现的场景是旧节点是多个子节点并且新节点也是多个字节点的场景")])])]),e._v(" "),s("h3",{attrs:{id:"文本节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文本节点"}},[e._v("#")]),e._v(" 文本节点")]),e._v(" "),s("ul",[s("li",[e._v("挂载： document.createTextNode(text) + el.insertBefore(child)")]),e._v(" "),s("li",[e._v("更新：document.nodeValue = text")])]),e._v(" "),s("h3",{attrs:{id:"注释节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释节点"}},[e._v("#")]),e._v(" 注释节点")]),e._v(" "),s("ul",[s("li",[e._v("挂载： document.createComment(text) + el.insertBefore(child)")]),e._v(" "),s("li",[e._v("更新：n1.el = n2.el（n1 是旧节点、n2 是新节点）")])]),e._v(" "),s("h3",{attrs:{id:"片段节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#片段节点"}},[e._v("#")]),e._v(" 片段节点")]),e._v(" "),s("ul",[s("li",[e._v("挂载：会遍历里面的子 节点生成为文本节点进行挂载")]),e._v(" "),s("li",[e._v("更新：el.textContent = text")])]),e._v(" "),s("h3",{attrs:{id:"组件节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件节点"}},[e._v("#")]),e._v(" 组件节点")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("挂载")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("创建出组件的实例对象，对象里面的 vnode 属性指向 vnode，vnode 里面的 components 属性指向这个实例对象")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("uid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    vnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 组件 vnode 的类型")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("subTree")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 执行 render 函数返回的 vnode")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("effect")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("update")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("render")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 组件的 render 函数")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("执行 vnode 中的 type 属性对象的 render 函数得到新的 vnode")]),e._v(" "),s("ul",[s("li",[e._v("执行 render 函数使用 call 方式，把 this 指向了当前组件的实例")])])]),e._v(" "),s("li",[s("p",[e._v("触发 patch 函数进行挂载")])])])]),e._v(" "),s("li",[s("p",[e._v("更新")]),e._v(" "),s("ul",[s("li",[e._v("实际上就是把旧组件的 DOM 节点直接移除，然后再把新的组件节点进行挂载")]),e._v(" "),s("li",[e._v("组件中依赖的数据发生变化的时候，实际上就是重新执行了 render 函数获取到最新的 vnode 再进行挂载")])])])]),e._v(" "),s("h4",{attrs:{id:"有状态组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有状态组件"}},[e._v("#")]),e._v(" 有状态组件")]),e._v(" "),s("ul",[s("li",[e._v("执行 data 的函数得到对象，使用 reavtive 把 data 进行包装，变成响应式数据")]),e._v(" "),s("li",[e._v("配合执行 render 函数时的 call 方法实现对应值的获取")])]),e._v(" "),s("h3",{attrs:{id:"属性相关的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性相关的操作"}},[e._v("#")]),e._v(" 属性相关的操作")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("class 和其他属性的挂载逻辑")]),e._v(" "),s("ul",[s("li",[e._v("如果是 class，则通过 el.className 挂载")]),e._v(" "),s("li",[e._v("实际上 class 的设置可以通过 el.className 和 el.setAttribute 进行设置，Vue 使用 el.className 设置的原因是 className 比 setAttribute 的性能要好")])])]),e._v(" "),s("li",[s("p",[e._v("style 属性挂载逻辑")]),e._v(" "),s("ul",[s("li",[e._v("如果是 '--' 开头的，则认为是 CSS 变量，会使用 style.setProperty 进行挂载")]),e._v(" "),s("li",[e._v("如果是 style 和 class 逻辑差不多，都是循环遍历通过 el.style.xxx = xxx 进行赋值")]),e._v(" "),s("li",[e._v("赋值后会缓存 style 的值，如果后面再次改变了 style，会判断新的 style 有没有包含旧的 style，如果没有，则会把旧的进行移除")])])]),e._v(" "),s("li",[s("p",[e._v("其他属性的挂载逻辑")]),e._v(" "),s("ul",[s("li",[e._v("如果是 value，则通过 el.value 挂载")]),e._v(" "),s("li",[e._v("如果是 el 中的某个属性（key in el），则通过 el[key] = xxx 挂载")]),e._v(" "),s("li",[e._v("如果是其他属性，则通过 el.setAttribute 挂载")])])]),e._v(" "),s("li",[s("p",[e._v("事件的挂载逻辑")]),e._v(" "),s("ul",[s("li",[e._v("本质通过 addEventListener 进行事件添加，通过 removeEventListener 进行事件移除")]),e._v(" "),s("li",[e._v("会过滤掉 onUpdate 的事件，这个是 v-model 的事件")]),e._v(" "),s("li",[e._v("在事件中，Vue 通过 vei 即 vue event invokers 进行事件回调缓存，如果是同一个事件，一开始的回调函数是 A，后面改成了回调函数 B，这种情况不会进行多次 add 和 remove，而是通过改变 vei 中的回调函数，因为 add 和 remove 会消耗性能")])])])]),e._v(" "),s("h3",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[e._v("#")]),e._v(" 生命周期")]),e._v(" "),s("ul",[s("li",[e._v("在解析组件之前会直接触发 beforeCreate，解析之后会触发 create")]),e._v(" "),s("li",[e._v("其他的生命周期则是会注册到一个对象缓存中，其中还会处理多个同一种生命周期的判断，即数组形式循环触发调用")]),e._v(" "),s("li",[e._v("在生命周期回调中去访问响应式数据是通过 bind 函数改变了 this 指向进行获取的")])]),e._v(" "),s("h3",{attrs:{id:"setup-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-函数"}},[e._v("#")]),e._v(" setup 函数")]),e._v(" "),s("ul",[s("li",[e._v("如果有 setup 函数，则会执行拿到返回结果即 render 函数，然后把这个 render 函数赋值给组件的 render 函数，这样就完成了 setup 的挂载")])]),e._v(" "),s("h3",{attrs:{id:"diff-算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法"}},[e._v("#")]),e._v(" diff 算法")])])}),[],!1,null,null,null);t.default=r.exports}}]);