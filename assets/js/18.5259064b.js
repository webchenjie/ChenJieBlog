(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{614:function(t,s,a){"use strict";a.r(s);var n=a(11),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"默认情况下-https-的网站不能请求或访问-http-的资源-解决方法是"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认情况下-https-的网站不能请求或访问-http-的资源-解决方法是"}},[t._v("#")]),t._v(" 默认情况下，https 的网站不能请求或访问 http 的资源，解决方法是：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在 html 页面加入以下代码， 浏览器在解析请求的时候会自动把 http 请求转化为 https 请求")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Security-Policy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("upgrade-insecure-requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("如果在 https 网站中请求的 http 资源本身不支持 https，可以把 https 网站换成 http 协议")])]),t._v(" "),a("li",[a("p",[t._v("如果在 https 网站中请求的 http 资源本身不支持 https，但是请求的 http 资源在属于自己的服务上（非第三方服务）\n并且不考虑改为 https 协议带来的性能问题，可以把要请求的 http 资源协议改为 https")])]),t._v(" "),a("li",[a("p",[t._v("如果在 https 网站中请求的 http 资源本身不支持 https，并且这些被请求的 http 资源都是静态资源（比如 js、css 等）\n可以考虑把这些资源下载下来放到现有的 https 服务器中，也可以寻找 https 协议的资源，很多免费的 cdn 服务都同时提供了 https 和 http 协议的静态资源")])]),t._v(" "),a("li",[a("p",[t._v("如果在 https 网站中请求的 http 资源是动态资源（比如请求 http 接口），且是第三方接口（自己无法变更这个第三方接口是 http 协议的事实）\n可以用 nginx 代理的方式")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("作者：chenjie "),a("br"),t._v("\n链接：https://webchenjie.cn "),a("br"),t._v("\n来源：ChenJieBlog")])])])}),[],!1,null,null,null);s.default=p.exports}}]);