(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{628:function(s,a,t){"use strict";t.r(a);var n=t(11),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"为什么会存在-cjs-和-esm-混合开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么会存在-cjs-和-esm-混合开发"}},[s._v("#")]),s._v(" 为什么会存在 CJS 和 ESM 混合开发？")]),s._v(" "),t("p",[s._v("npm 模块有的使用 CJS 有的使用 ESM，导致 CJS 和 ESM 混合开发成为 Node 项目必须考虑的问题")]),s._v(" "),t("h2",{attrs:{id:"场景-1-commonjs-单独使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景-1-commonjs-单独使用"}},[s._v("#")]),s._v(" 场景 1：CommonJS 单独使用")]),s._v(" "),t("p",[s._v("CJS 文件定义方法：")]),s._v(" "),t("ul",[t("li",[s._v("默认 .js 后缀的文件为 CJS。")]),s._v(" "),t("li",[s._v(".cjs 后缀的文件强制为 CJS。")]),s._v(" "),t("li",[s._v('package.json 中 type="commonjs" 时，.js 文件会被认为是 CJS。')])]),s._v(" "),t("blockquote",[t("p",[s._v("踩坑：module.exports 和 exports.fn 混用问题")])]),s._v(" "),t("h2",{attrs:{id:"场景-2-esm-单独使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景-2-esm-单独使用"}},[s._v("#")]),s._v(" 场景 2：ESM 单独使用")]),s._v(" "),t("p",[s._v("ESM 文件定义方法：")]),s._v(" "),t("ul",[t("li",[s._v('package.json 中 type="module" 时，.js 后缀文件会被识别为 ESM。')]),s._v(" "),t("li",[s._v(".mjs 后缀的文件会被强制识别为 ESM。")])]),s._v(" "),t("blockquote",[t("p",[s._v("踩坑：**filename, **dirname 无法使用，"),t("a",{attrs:{href:"https://www.npmjs.com/package/dirname-filename-esm",target:"_blank",rel:"noopener noreferrer"}},[s._v("解决方案"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// In ".mjs" script or a script under "type": "module" package')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" filename "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dirname-filename-esm'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" __dirname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" __filename "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("filename")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("meta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Use __dirname and __filename like under commonjs module")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"场景-3-commonjs-和-esm-混用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景-3-commonjs-和-esm-混用"}},[s._v("#")]),s._v(" 场景 3：CommonJS 和 ESM 混用")]),s._v(" "),t("p",[s._v("原则：")]),s._v(" "),t("ul",[t("li",[s._v("单个模块必须指定 CommonJS 和 ESM，不可混用，如果混用，必须使用 webpack 或者 babel 进行解决")]),s._v(" "),t("li",[s._v("package.json 的 type 必须指定一种模块，如果不指定默认为 commonjs，但越来越多的模块采用 module（ESM）")])]),s._v(" "),t("h3",{attrs:{id:"场景-3-1-commonjs-兼容-esm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景-3-1-commonjs-兼容-esm"}},[s._v("#")]),s._v(" 场景 3.1：CommonJS 兼容 ESM")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'esm'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"场景-3-2-esm-兼容-commonjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景-3-2-esm-兼容-commonjs"}},[s._v("#")]),s._v(" 场景 3.2：ESM 兼容 CommonJS")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cjs'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"常见错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[s._v("#")]),s._v(" 常见错误")]),s._v(" "),t("h3",{attrs:{id:"错误-1-type-和语法不匹配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误-1-type-和语法不匹配"}},[s._v("#")]),s._v(" 错误 1：type 和语法不匹配")]),s._v(" "),t("p",[s._v("常见错误：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" packages/esm_entry/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node:16435"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Warning: To load an ES module, "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the package.json or use the .mjs extension.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Use "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" --trace-warnings "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" to show where the warning was created"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n/Users/sam/Desktop/fe_arch_source_code/imooc-test/module/packages/esm_entry/lib/index.js:1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" cjs from "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cjs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n^^^^^^\n\nSyntaxError: Cannot use "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" statement outside a module\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("错误原因：")]),s._v(" "),t("ul",[t("li",[s._v("未指定 package.json 的 type，默认采用 commonjs")]),s._v(" "),t("li",[s._v("js 源码中使用了 ESM 语法，如 import 或 export 等")])]),s._v(" "),t("p",[s._v("解决方案：")]),s._v(" "),t("ul",[t("li",[s._v("修改 js 为 mjs（不建议使用）")]),s._v(" "),t("li",[s._v("修改 type 为 module")])]),s._v(" "),t("h3",{attrs:{id:"错误-2-require-无法加载-esm-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误-2-require-无法加载-esm-模块"}},[s._v("#")]),s._v(" 错误 2：require 无法加载 ESM 模块")]),s._v(" "),t("p",[s._v("使用 require 加载 ESM 模块会出现报错：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("internal/modules/cjs/loader.js:1102\n      throw new ERR_REQUIRE_ESM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filename, parentPath, packageJsonPath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      ^\n\nError "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ERR_REQUIRE_ESM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Must use "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" to load ES Module: /Users/sam/Desktop/fe_arch_source_code/imooc-test/module/packages/esm/lib/index.js\nrequire"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" of ES modules is not supported.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("解决方案：使用 import 方法加载")]),s._v(" "),t("h3",{attrs:{id:"错误-3-esm-模块加载其他模块问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误-3-esm-模块加载其他模块问题"}},[s._v("#")]),s._v(" 错误 3：ESM 模块加载其他模块问题")]),s._v(" "),t("p",[s._v("使用以下代码：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./a'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("会出现报错：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("internal/process/esm_loader.js:74\n    internalBinding"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'errors'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".triggerUncaughtException"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                              ^\n\nError "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ERR_MODULE_NOT_FOUND"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Cannot "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" module "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Users/sam/Desktop/fe_arch_source_code/imooc-test/module/packages/esm/lib/a'")]),s._v(" imported from /Users/sam/Desktop/fe_arch_source_code/imooc-test/module/packages/esm/lib/index.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("解决方案：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./a.js'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[s._v("作者：chenjie "),t("br"),s._v("\n链接：https://webchenjie.cn "),t("br"),s._v("\n来源：ChenJieBlog")])])])}),[],!1,null,null,null);a.default=e.exports}}]);