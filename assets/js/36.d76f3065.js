(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{632:function(n,s,a){"use strict";a.r(s);var t=a(11),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"直播流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直播流程"}},[n._v("#")]),n._v(" 直播流程")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1. 摄像头\n  1. PC 端采集\n  2. Android 端采集\n  3. IOS 端采集\n2. 视频编辑\n  1. H.264 （视频） / AAC （音频） 压缩编码\n  2. 视频处理（字幕处理等）\n  3. 推流（上传服务器）\n  4. CDN（地址）\n3. 播放器\n  1. PC 回放\n  2. Android 回放\n  3. IOS 回放\n")])])]),a("h2",{attrs:{id:"视频格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频格式"}},[n._v("#")]),n._v(" 视频格式")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1. mp4\n  1. Chrome/Firfox/Safari\n  2. 一般做点播\n2. webm\n  1. Chrome/Firfox\n  2. 流式的视频格式\n  3. 一般做点播\n3. hls 协议，即 m3u8 索引、ts 格式\n  1. Safari\n  2. 一般做直播\n  3. 在移动端浏览器上基本上都支持，而在 pc 端则需要通过下面的常用方案进行转码\n4. flv\n  1. B 站使用\n  2. 一般做直播\n")])])]),a("h2",{attrs:{id:"直播协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直播协议"}},[n._v("#")]),n._v(" 直播协议")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1. HLS 协议\n  1. 对应视频格式是 m3u8 格式\n    1. 包含了多了 ts 片段\n      1. .ts 片段中包含了 PAT、PMT和多个 ts 文件\n        1. 通过 PAT 找到 PMT，PMT 会返回哪个 ts 文件是视频哪个是音频\n  2. 直播流程\n    1. video ——> m3u8 ——> 多个片段\n    2. 浏览器会在片段结束前重新去请求 m3u8 文件，然后服务器会返回新的 m3u8 文件\n      里面也是包含了多个片段，实现直播\n  3. 缺点\n    1. 会有延迟，原因在于分片数量即有几个 ts 文件\n  4. 优点\n    1. 简单、好用\n  5. HTTP 传输\n2. RTMP 协议（不常用）\n  1. 对应视频格式是 flv 格式\n  2. 实时消息传输协议，基于 TCP，是一个协议族，包括 RTMP 基本协议\n    及 RTMPT、RTMPS、RTMPE 等多种变种\n  3. RTMP 是一种设计用来进行实时数据通信的网络协议，主要用来在\n    Flash、AIR 平台和支持 RTMP 协议的流媒体/交互服务器之间进行音视频和数据通信\n  4. 不是 HTTP 传输\n3. HTTP-FLV 协议（RTMP 协议 升级版）\n  1. 对应视频格式是 flv 格式\n  2. 因为 HLS 协议会有延迟，原因在于 m3u8 文件中包含了多少个 ts 文件\n  3. 相对 RTMP 协议的优势\n    1. 可以在一定程度上避免防火墙的干扰\n    2. 可以很好的兼容 HTTP 302 跳转，做到灵活调度\n    3. 可以使用 HTTPS 做加密通道\n    4. 很好的支持移动端（Android、IOS）\n  4. HTTP 传输\n")])])]),a("h2",{attrs:{id:"直播源制作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直播源制作"}},[n._v("#")]),n._v(" 直播源制作")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1. ffmpeg\n")])])]),a("h2",{attrs:{id:"常用方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用方案"}},[n._v("#")]),n._v(" 常用方案")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1. video.js // 功能完整，插件丰富\n2. hls.js // 小巧\n3. flv.js // 国内\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[n._v("作者：chenjie "),a("br"),n._v("\n链接：https://webchenjie.cn "),a("br"),n._v("\n来源：ChenJieBlog")])])])}),[],!1,null,null,null);s.default=e.exports}}]);