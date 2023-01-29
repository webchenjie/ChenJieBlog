(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{617:function(s,t,a){"use strict";a.r(t);var n=a(11),i=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("ol",[a("li",[s._v("UniPush 是 DCloud 联合个推公司推出的集成型统一推送服务，内建了苹果、华为、小米、OPPO、VIVO、魅族、谷歌 FCM 等\n手机厂商的系统级推送和个推等第三方推送。")]),s._v(" "),a("li",[s._v("在没有 uniPush 以前，如果只使用三方 push，会在很多国产手机上因为节电设置而无法保活 push 进程，导致无法推送。\n而如果每个安卓手机的官方 Push SDK 都集成开发一遍，这么多平台，工作量会非常巨大，管理维护也很麻烦。")]),s._v(" "),a("li",[s._v("uniPush 解决了这个难题，开发者只需要开发一次。系统会自动在不同手机上选择最可靠的推送通道发送 push 消息，保障送达率。")])]),s._v(" "),a("h2",{attrs:{id:"整体架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体架构"}},[s._v("#")]),s._v(" 整体架构")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/2a6f2e8d-25f9-4140-8f88-25dc05483ab7.png",alt:"整体架构"}})]),s._v(" "),a("h2",{attrs:{id:"如何开通-unipush"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何开通-unipush"}},[s._v("#")]),s._v(" 如何开通 uniPush?")]),s._v(" "),a("ol",[a("li",[s._v("Dcloud 开发者账号")]),s._v(" "),a("li",[s._v("Android 证书")]),s._v(" "),a("li",[s._v("IOS 证书")]),s._v(" "),a("li",[s._v("IOS 开发者账号")]),s._v(" "),a("li",[s._v("IOS 推送证书")])]),s._v(" "),a("h2",{attrs:{id:"消息推送流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息推送流程"}},[s._v("#")]),s._v(" 消息推送流程")]),s._v(" "),a("ol",[a("li",[s._v("Android 平台\nAPP 在线（个推推送通道可用）推送通知和透传消息都使用个推的推送通道下发推送消息。\nAPP 离线（个推推送通道不可用）推送通知，使用个推离线推送通道，离线消息会存储在消息离线库，离线时间内 APP 在线后下发推送消息。\n透传消息，如果符合厂商推送的厂商手机（配置了手机厂商推送参数并且在对应厂商的手机上），则使用厂商推送通道下发推送消息，\n否则使用个推的离线推送通道，离线消息会存储在消息离线库，离线时间内 APP 在线后下发推送消息。")]),s._v(" "),a("li",[s._v("iOS 平台\n推送通知，uniPush 后台管理界面中不支持下发此类型，个推提供的服务端 API 支持下发推送通知\n（设置 APN 参数则通过苹果的 APNS 通道，否则使用个推通道）。\n透传消息，设置 APN 参数则通过苹果的 APNS 通道下发推送消息，没有设置 APN 参数则使用个推的推送通道下发。")]),s._v(" "),a("li",[s._v("简单理解\nAndroid 平台有区分在线和离线，在线使用个推第三方推送，离线使用对应手机厂商推送\nIOS 平台不区分在线和离线，而是通过入参采用哪种通道推送（使用个推或 APN 都可以）\n推送通知和透传消息区别，一个是普通的文本，一个是 JSON 串")])]),s._v(" "),a("h2",{attrs:{id:"厂商推送设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#厂商推送设置"}},[s._v("#")]),s._v(" 厂商推送设置")]),s._v(" "),a("ol",[a("li",[s._v("登录 DCloud 开发者后台找到应用，现 uniPush 支持的手机厂商有魅族、OPPO、华为、小米、VIVO、FCM\n需前往对应的手机厂商平台申请开发者账号，把对应的 ID、Key 填入")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/3ff3bf66-efe7-4e3a-b9ba-e746464a8ae5.png",alt:"厂商推送设置"}})]),s._v(" "),a("h2",{attrs:{id:"unipush-服务端接口推送集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unipush-服务端接口推送集成"}},[s._v("#")]),s._v(" uniPush 服务端接口推送集成")]),s._v(" "),a("ol",[a("li",[s._v("通过以上知识我们已经知道，要么使用个推要么使用手机厂商，而 uni-app 已帮我们集成了其他手机厂商的 SDK\n只要去对应的手机厂商申请开发者进行配置就可以，也就是说我们只要去集成个推的 SDK，就能实现推送全覆盖。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/50225f2b-dc10-4d7e-8218-83198fa5f8e9.png",alt:"uniPush 服务端接口推送集成"}})]),s._v(" "),a("h2",{attrs:{id:"常见误解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见误解"}},[s._v("#")]),s._v(" 常见误解")]),s._v(" "),a("p",[s._v("常见误解 1：“uniPush 的专业性，和专业的个推、极光等服务可相比吗？”\n答：uniPush 是由个推将其本来收费的 vip push 产品，免费提供给了 DCloud 的开发者。它与个推 vip push 的只有 2 个区别：\n1、免费；2、账户使用的是 DCloud 开发者账户，而无需再重新注册个推账户。个推是 A 股上市公司，专业性在推送领域领先。")]),s._v(" "),a("p",[s._v("常见误解 2：“uniPush 好麻烦，我就喜欢个推、极光这种简单 sdk，不想去各个 rom 厂商去申请一圈”\n答：uniPush 不建立在申请手机厂商授权的基础上，如果你不申请那些，使用起来和用普通的个推是一样的。\n但是要特别注意，推送行业的现状就是：不集成 rom 厂商的推送，就无法在 App 离线时发送 push。按照普通个推模式使用，\n后果就是在华为、小米、OPPO、VIVO、魅族上发不了离线消息。")]),s._v(" "),a("p",[s._v("常见误解 3：“uniPush 的送达率还是不够，是否可以付费来提升送达率，个推是有付费提升送达率的方法的”\n答：前文已经说了。个推的付费提升送达率的产品就是 vip push，而 uniPush 就是个推的 vip Push。DCloud 通过谈判免费给 DCloud 的开发者使用了。")]),s._v(" "),a("p",[s._v("常见误解 4：开通 uniPush 要实名认证，还得传身份证，开通普通个推不用这么麻烦。\n答：此问题之前曾存在，后来已经处理，保持和个推需要的身份信息相同，不再需要身份证。")]),s._v(" "),a("h2",{attrs:{id:"参考连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考连接"}},[s._v("#")]),s._v(" 参考连接")]),s._v(" "),a("ol",[a("li",[s._v("UniPush 开通指南官方：https://ask.dcloud.net.cn/article/35716")]),s._v(" "),a("li",[s._v("UniPush 使用指南官方：https://ask.dcloud.net.cn/article/35622")]),s._v(" "),a("li",[s._v("个推接口文档官方：https://docs.getui.com/getui/server/rest_v2/introduction/")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("作者：chenjie "),a("br"),s._v("\n链接：https://webchenjie.cn "),a("br"),s._v("\n来源：ChenJieBlog")])])])}),[],!1,null,null,null);t.default=i.exports}}]);