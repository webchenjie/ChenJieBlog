(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{490:function(e,a,t){"use strict";t.r(a);var r=t(2),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[e._v("#")]),e._v(" 简述")]),e._v(" "),a("h3",{attrs:{id:"webrtc-简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webrtc-简述"}},[e._v("#")]),e._v(" WebRTC 简述")]),e._v(" "),a("ul",[a("li",[e._v("音视频处理 + 即时通讯的开源库")]),e._v(" "),a("li",[e._v("2010 年 Google 将其开源")]),e._v(" "),a("li",[e._v("它是一个非常优秀的多媒体框架，主要用于浏览器，并且是跨平台")]),e._v(" "),a("li",[e._v("与 ffmpeg 类似，但是侧重点不一样，ffmpeg 主要是处理多媒体文件的编译、音视频的编解码、对文件的处理等，而 WebRTC 主要是处理网络的抖动、丢包、评估、回音消除、降噪等")])]),e._v(" "),a("h3",{attrs:{id:"webrtc-能做啥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webrtc-能做啥"}},[e._v("#")]),e._v(" WebRTC 能做啥？")]),e._v(" "),a("ul",[a("li",[e._v("音视频实时互动")]),e._v(" "),a("li",[e._v("游戏、即时通讯、文件传输等")]),e._v(" "),a("li",[e._v("它是一个百宝箱，传输、音视频处理（回音消除、降噪等）")])]),e._v(" "),a("h3",{attrs:{id:"主要内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要内容"}},[e._v("#")]),e._v(" 主要内容")]),e._v(" "),a("ul",[a("li",[e._v("音视频设备访问与管理")]),e._v(" "),a("li",[e._v("音视频数据的采集")]),e._v(" "),a("li",[e._v("数据的传输与实时互动")]),e._v(" "),a("li",[e._v("WebRTC 的工作机制")]),e._v(" "),a("li",[e._v("涉及到的 API\n"),a("ul",[a("li",[e._v("navigator.mediaDevices.enumerateDevices // 获取用户设备信息")]),e._v(" "),a("li",[e._v("navigator.mediaDevices.getUserMedia // 采集设备信息流")]),e._v(" "),a("li",[e._v("navigator.mediaDevices.getDisplayMedia // 采集桌面信息流")]),e._v(" "),a("li",[e._v("new MediaRecorder // 录制音视频")])])])]),e._v(" "),a("h2",{attrs:{id:"设备管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备管理"}},[e._v("#")]),e._v(" 设备管理")]),e._v(" "),a("ul",[a("li",[e._v("navigator.mediaDevices.enumerateDevices()")]),e._v(" "),a("li",[e._v("在调用此方法前，需要用户授权允许，浏览器会弹窗提示，但是直接调用此方法并不会触发弹窗，需要调用 getUserMedia 才会，也就是说可以先调用 getUserMedia，然后授权后，再调用此方法就能获取到对应的设备，当然有些浏览器不需要授权就可以直接调用成功，如 Chrome，而 Safari 则需要")])]),e._v(" "),a("h2",{attrs:{id:"音视频数据的采集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#音视频数据的采集"}},[e._v("#")]),e._v(" 音视频数据的采集")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("navigator.mediaDevices.getUserMedia({ video: true, audio: true })")])]),e._v(" "),a("li",[a("p",[e._v("video 和 audio 的类型除了可以是 boolean 外，还可以是一个对象")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("video")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("height")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("aspectRatio")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 宽高的比例")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("frameRate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 帧率")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("facingMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'user'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'environment'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'left'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'right'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 使用哪个摄像头")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("resizeMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" string "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 裁剪")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("audio")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("volume")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 音量")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("sampleRate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 采样率")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("sampleSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 采样大小，位深")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("echoCancellation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" boolean "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 是否开启回音消除")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("autoGainControl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" boolean "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 增加音量")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("noiseSuppression")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" boolean "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 是否开启降噪功能")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("latency")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 延迟大小")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("channelCount")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 声道数")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("deviceID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 设备ID，当有多个设备进行切换时使用，通过上面的 enumerateDevices 获取")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("groupID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" number "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 物理设备")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("getUserMedia 返回流相关的 API，MediaStream 可以直接作为参数给 video.srcObject 进行播放")]),e._v(" "),a("ul",[a("li",[e._v("MediaStream.addTrack() // 增加轨")]),e._v(" "),a("li",[e._v("MediaStream.removeTrack() // 删除轨")]),e._v(" "),a("li",[e._v("MediaStream.getVideoTracks() // 获取所有的视频轨")]),e._v(" "),a("li",[e._v("MediaStream.getAudioTracks() // 获取所有的音频轨")]),e._v(" "),a("li",[e._v("MediaStream.onaddtrack // 监听增加轨事件")]),e._v(" "),a("li",[e._v("MediaStream.onremovetrack // 监听删除轨事件")]),e._v(" "),a("li",[e._v("MediaStream.onended // 监听结束事件")])])])]),e._v(" "),a("h2",{attrs:{id:"浏览器适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器适配"}},[e._v("#")]),e._v(" 浏览器适配")]),e._v(" "),a("ul",[a("li",[e._v("adapter.js 主要是对 API 做兼容，增加了如 webkit、moz 等前缀")])]),e._v(" "),a("h2",{attrs:{id:"浏览器视频特效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器视频特效"}},[e._v("#")]),e._v(" 浏览器视频特效")]),e._v(" "),a("ul",[a("li",[e._v("使用 CSS filter ==> 底层调用的是 OpenGL")]),e._v(" "),a("li",[e._v("支持的特效种类\n"),a("ul",[a("li",[e._v("grayscale 灰度")]),e._v(" "),a("li",[e._v("sepia 褐色")]),e._v(" "),a("li",[e._v("saturate 饱和度")]),e._v(" "),a("li",[e._v("hue-rotate 色相旋转")]),e._v(" "),a("li",[e._v("invert 反色")]),e._v(" "),a("li",[e._v("opacity 透明度")]),e._v(" "),a("li",[e._v("brightness 亮度")]),e._v(" "),a("li",[e._v("contrast 对比度")]),e._v(" "),a("li",[e._v("blur 模糊")]),e._v(" "),a("li",[e._v("drop-shadow 阴影")])])]),e._v(" "),a("li",[e._v("在 video 播放的时候，可以使用 canvas.drawImage(video) 进行截图，截图中可以含有 filter 的效果，但是实际保存到本地的图片并没有此效果")])]),e._v(" "),a("h2",{attrs:{id:"录制媒体流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#录制媒体流"}},[e._v("#")]),e._v(" 录制媒体流")]),e._v(" "),a("ul",[a("li",[e._v("const mediaRecorder = new MediaRecorder(stream[, options])\n"),a("ul",[a("li",[e._v("stream 表示媒体流，可以从 getUserMedia、"),a("video",[e._v("、"),a("audio",[e._v("、"),a("canvas",[e._v(" 获取")])])])]),e._v(" "),a("li",[e._v("options 表示限制选项\n"),a("ul",[a("li",[e._v("mimeType 录制的格式\n"),a("ul",[a("li",[e._v("video/webm;codecs=h264")]),e._v(" "),a("li",[e._v("video/mp4;codecs=vp8")]),e._v(" "),a("li",[e._v("audio/webm;codecs=opus")])])]),e._v(" "),a("li",[e._v("audioBitsPerSecond 音频码率")]),e._v(" "),a("li",[e._v("videoBitsPerSecond 视频码率")]),e._v(" "),a("li",[e._v("bitsPerSecond 整体码率")])])])])]),e._v(" "),a("li",[e._v("mediaRecorder API\n"),a("ul",[a("li",[e._v("mediaRecorder.start(timeslice) // 开始录制媒体， timeslice 是可选的，如果设置了按会时间切片存储数据")]),e._v(" "),a("li",[e._v("mediaRecorder.stop() // 停止录制，此时会触发包括最终 Blob 数据的 dataavailable 事件")]),e._v(" "),a("li",[e._v("mediaRecorder.pause() // 暂停录制")]),e._v(" "),a("li",[e._v("mediaRecorder.resume() // 恢复录制")]),e._v(" "),a("li",[e._v("mediaRecorder.isTypeSupported() // 检查支持的录制格式")])])]),e._v(" "),a("li",[e._v("mediaRecorder 事件\n"),a("ul",[a("li",[e._v("mediaRecorder.ondataavailable // 每次记录一定时间的数据时（如果没有指定时间片，则记录整个数据时）会定期触发")]),e._v(" "),a("li",[e._v("mediaRecorder.onerror // 错误事件，录制会被停止")])])]),e._v(" "),a("li",[e._v("js 存储数据的方式\n"),a("ul",[a("li",[e._v("字符串")]),e._v(" "),a("li",[e._v("Blob")]),e._v(" "),a("li",[e._v("ArrayBuffer")]),e._v(" "),a("li",[e._v("ArrayBufferView // 带类型的 Buffer")])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[e._v("作者：chenjie "),a("br"),e._v("\n链接：https://webchenjie.cn "),a("br"),e._v("\n来源：ChenJieBlog")])])])}),[],!1,null,null,null);a.default=s.exports}}]);