(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{629:function(t,s,a){"use strict";a.r(s);var n=a(11),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("系统安全问题日益变成影响和制约网络应用发展的一个重要因素，如今，越来越多的安全产品厂商在考虑关注软件开发的整个流程，将安全检测与监测融入需求分析、概要设计、详细设计、编码、测试等各个阶段以全面的保证应用安全")])]),t._v(" "),a("li",[a("p",[t._v("对于前端场景来说，作为数据采集的最前线，js 代码始终暴露在外，并没有办法限制攻击者获取源码，目前主流的解决方式是在源头做手脚，即对 js 代码做加密、压缩、混淆")])])]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("h3",{attrs:{id:"加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加密"}},[t._v("#")]),t._v(" 加密")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("提到加密，我们自然会想到众多与对称加密、非对称加密以及散列加密相关的算法，比如 AWS 算法、RSA 算法与 MD5 算法等。简单理解就是加密即是将明文变为密文的过程，与此类似，将密文变为明文的过程被称为解密")])]),t._v(" "),a("li",[a("p",[t._v("在传统的 B-S 架构下，前端通过公钥进行加密处理的数据可以在后端服务器再通过相应私钥进行解密来得到原始数据，但是对于前端的业务代码而言，由于浏览器本身无法识别运行这些被加密过的源代码，因此实际上传统的加密算法并不能帮助我们解决如何完全黑盒化前端业务逻辑代码这一问题。既然无法完全隐藏前端业务逻辑代码的实际执行细节，那我们就从另一条路以降低代码可读性的方式来伪黑盒化前端业务逻辑代码")])])]),t._v(" "),a("h3",{attrs:{id:"压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[t._v("#")]),t._v(" 压缩")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("所谓压缩其实是和性能优化有关，主要是为了减少体积大小")])]),t._v(" "),a("li",[a("p",[t._v("目前主流的 UglifyJS、YUI Compressor 等工具内部做的事有：去除多余字符、空格、换行及注释，把长变量名改为统一风格的短变量名等")])]),t._v(" "),a("li",[a("p",[t._v("虽然通过压缩后的代码体积减少了，可读性变差了，但是通过格式化代码后，还是能成为突破口")])])]),t._v(" "),a("h3",{attrs:{id:"混淆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混淆"}},[t._v("#")]),t._v(" 混淆")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("很显然通过 加密 和 压缩 并不能够很好的解决 js 代码安全问题，在现代前端开发过程中，我们最常用的一种可以降低源代码可读性的方法就是使用代码混淆")])]),t._v(" "),a("li",[a("p",[t._v("通常意义上的代码混淆可以压缩原始 ASCII 代码的体积并将其中的诸如：变量、常量名用简短的毫无意义的标识符进行代替，这一步可以简单的理解为去语义化。")])]),t._v(" "),a("li",[a("p",[t._v("主流的混淆工具：")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://www.jshaman.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jshaman"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/mishoo/UglifyJS",target:"_blank",rel:"noopener noreferrer"}},[t._v("UglifyJS"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/jscrambler/jscrambler",target:"_blank",rel:"noopener noreferrer"}},[t._v("jscrambler"),a("OutboundLink")],1)])])])]),t._v(" "),a("li",[a("p",[t._v("以下使用 jshaman 工具免费版来演示 js 代码通过混淆后的效果")])])]),t._v(" "),a("p",[t._v("源代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_copyright")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" domain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jshaman.com'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" from_year "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" copyright "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(c)'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" from_year "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFullYear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" domain\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" copyright\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_copyright")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("混淆后的代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("_Obfuscated by JShaman"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_copyright")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" \\_0x1af084 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jshaman.com'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" \\_0x456324 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xa645f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xa63be")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" \\_0x40d314 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(c)'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" \\_0x456324 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getFullYear'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" \\_0x1af084\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" \\_0x40d314\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_copyright")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"工程化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程化"}},[t._v("#")]),t._v(" 工程化")]),t._v(" "),a("ul",[a("li",[t._v("现在的前端开发项目大部分都已经是工程化项目，即用 Webpack 或者 Vite 作为构建工具进行开发和打包，在打包工具中其实已经有内置了 UglifyJS 等压缩混淆工具，所以在大部分的项目中已经自带了 混淆 功能，可能有的项目并没有开启而已，但是压缩效果是有的")])]),t._v(" "),a("h3",{attrs:{id:"小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序"}},[t._v("#")]),t._v(" 小程序")]),t._v(" "),a("h4",{attrs:{id:"压缩混淆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩混淆"}},[t._v("#")]),t._v(" 压缩混淆")]),t._v(" "),a("ul",[a("li",[t._v("在小程序中也有类似和 UglifyJS 的工具，在早些时候这个选项的名称也是叫 自动压缩混淆，不过 22 年开始，还是 21 年下旬的时候这个选项就被干掉了，变成了 上传代码时自动压缩脚本文件，但是他们的效果是一样的，都是简单混淆的压缩功能")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/image/blogs/%E6%8A%80%E6%9C%AF/20230924/blogs-%E6%8A%80%E6%9C%AF-20230924-1.png",alt:"20230924-1"}}),t._v(" "),a("img",{attrs:{src:"/image/blogs/%E6%8A%80%E6%9C%AF/20230924/blogs-%E6%8A%80%E6%9C%AF-20230924-2.png",alt:"20230924-2"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("还有一个 上传时进行代码保护，这个选项会对文件进行扁平化处理并替换 require 引用的文件名，也是一个降低代码可读性的方式")])]),t._v(" "),a("li",[a("p",[t._v("如果没有特别的安全需求，可以使用正常自动压缩混淆即可")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/codecompile_old.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序旧的选项配置文档"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/codecompile.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序新的选项配置文档"),a("OutboundLink")],1)])])]),t._v(" "),a("h4",{attrs:{id:"代码加固"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码加固"}},[t._v("#")]),t._v(" 代码加固")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("小程序的代码加固功能也是使用字符串加密、属性加密、调用转换、代码混淆等操作进行处理代码，感觉像是把原来的选项配置中的 自动压缩混淆 单独抽了出来，不过比较麻烦的是需要在开发者工具上安装 devtool-code-obfuscation 扩展，上传时进行混淆")])]),t._v(" "),a("li",[a("p",[t._v("代码加固和上传时进行代码保护的区别")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/image/blogs/%E6%8A%80%E6%9C%AF/20230924/blogs-%E6%8A%80%E6%9C%AF-20230924-3.png",alt:"20230924-3"}})]),t._v(" "),a("ul",[a("li",[t._v("代码加固不能和 ci 一起使用，必须使用开发者工具使用")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/image/blogs/%E6%8A%80%E6%9C%AF/20230924/blogs-%E6%8A%80%E6%9C%AF-20230924-4.png",alt:"20230924-4"}})]),t._v(" "),a("ul",[a("li",[t._v("那如何查看加固后的源码是啥样的呢？经过询问微信官方人员得出的结论是看不到！！！但是我又想验证加固到底有没有效果，于是我通过 node 命令反编译小程序的 wxapkg 的安装包得到了小程序发布的源码，通过对比有加固和没加固的代码发现确实有区别")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/image/blogs/%E6%8A%80%E6%9C%AF/20230924/blogs-%E6%8A%80%E6%9C%AF-20230924-5.png",alt:"20230924-5"}}),t._v(" "),a("img",{attrs:{src:"/image/blogs/%E6%8A%80%E6%9C%AF/20230924/blogs-%E6%8A%80%E6%9C%AF-20230924-6.png",alt:"20230924-6"}})]),t._v(" "),a("blockquote",[a("p",[t._v("同一个文件，加固后的文件大小会增大，并且会带有 DEBUG 的字样（官方说明是用于排错用的）")])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/code_obfuscation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序代码加固文档"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("如何通过 node 命令反编译 wxapkg 安装包的流程可以参考"),a("a",{attrs:{href:"https://blog.csdn.net/nsx_truth/article/details/112151851",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在验证有实际的加固效果后，那我们应该如何使用呢？说到这里可能大家会有个疑问，不就是在开发者工具中安装 devtool-code-obfuscation 扩展，然后配置 code_obfuscation_config.json 文件，然后点击上传再点击加固吗？实际上的使用流程确实是这样的，因为现在使用的是 uni-app 进行小程序开发，当我们运行或发行时会发现，我们代码加固的配置文件即 code_obfuscation_config.json 不会随着运行或发行放到 dist 目录下，这样子我们就需要每次都手动复制过去或者重新生成配置文件，为了解决此问题，我们可以通过 CopyWebpackPlugin 来帮我们自动复制，具体使用方式如下：")]),t._v(" "),a("ul",[a("li",[t._v("在 vue.config.js 中进行配置，前提是 code_obfuscation_config.json 文件放在 src 目录下，具体根据场景自行修改路径")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CopyWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'copy-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最新版本 copy-webpack-plugin 插件暂不兼容，推荐 v5.0.0")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CopyWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                        __dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/code_obfuscation_config.json'")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                        __dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build'")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dev'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UNI_PLATFORM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("常用的安全策略是压缩混淆")])]),t._v(" "),a("li",[a("p",[t._v("大部分工程化项目和小程序都自带压缩混淆")])]),t._v(" "),a("li",[a("p",[t._v("小程序可以更进一步混淆使用代码加固（使用不方便）")])])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1489601",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈前端代码加密"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/alisecurity/p/5852923.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("可信前端之路-代码保护"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_42884230/article/details/81427696",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何保护前端 JS 代码"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/horsemoon/p/7111416.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于代码压缩混淆加密整理"),a("OutboundLink")],1)])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("作者：chenjie "),a("br"),t._v("\n链接：https://webchenjie.cn "),a("br"),t._v("\n来源：ChenJieBlog")])])])}),[],!1,null,null,null);s.default=r.exports}}]);