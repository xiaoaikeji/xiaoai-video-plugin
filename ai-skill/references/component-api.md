# 组件属性、事件与方法

小艾视频播放插件封装微信小程序原生 `video` 组件。此处记录服务方文档明确列出的部分接口；未列出的属性、事件和平台差异应以微信官方文档为准：

https://developers.weixin.qq.com/miniprogram/dev/component/video.html

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `src` | string | 空 | 视频 HTTP(S) 地址 |
| `poster` | string | 空 | 视频封面 |
| `autoplay` | boolean | `false` | 自动播放 |
| `loop` | boolean | `false` | 循环播放 |
| `muted` | boolean | `false` | 静音播放 |
| `controls` | boolean | `false` | 显示默认播放控件 |
| `direction` | number | 未指定 | 全屏方向：`0`、`90`、`-90`；未指定时按宽高比判断 |
| `object-fit` | string | `contain` | `contain`、`fill` 或 `cover` |
| `initial-time` | number | `0` | 初始播放位置，单位秒 |
| `speed-rate` | number | `1.0` | 倍速；文档列出 `0.5`、`0.8`、`1.0`、`1.25`、`1.5`、`2.0` |
| `show-speed-rate-btn` | boolean | `false` | 显示倍速选择按钮 |
| `show-casting-button` | boolean | `false` | 显示投屏按钮；Android 同层渲染支持 DLNA，iOS 支持 AirPlay 和 DLNA |
| `enable-auto-rotation` | boolean | `false` | 系统开启自动旋转时，手机横屏自动全屏 |
| `show-background-playback-button` | boolean | `false` | 显示后台音频播放按钮 |
| `preferred-peak-bit-rate` | number | 未指定 | 码率上界，单位 bit/s |
| `show-progress` | boolean | `true` | 进度显示；服务方文档同时说明宽度大于 240 时才会显示，行为需真机验证 |
| `show-fullscreen-btn` | boolean | `true` | 显示全屏按钮 |
| `show-play-btn` | boolean | `true` | 显示底部控制栏播放按钮 |
| `show-mute-btn` | boolean | `false` | 显示静音按钮 |
| `show-center-play-btn` | boolean | `true` | 显示中间播放按钮 |
| `show-custom-center-play-btn` | boolean | `false` | 显示自定义中间播放按钮；不能与上一个按钮同时为 `true` |
| `enable-play-gesture` | boolean | `false` | 开启手势控制进度 |

服务方属性表中另有一行“倍速选择按钮提供的倍速，Array 类型”，但属性名为空。不要据此编造属性名；需要自定义倍速列表时先核对最新官网或联系服务方。

## 事件映射

| 原生小程序 | uni-app | 触发条件 / detail |
| --- | --- | --- |
| `bindtap` | `@tap` 或 `@click` | 点击 |
| `bindplay` | `@play` | 开始或继续播放 |
| `bindpause` | `@pause` | 暂停 |
| `bindended` | `@ended` | 播放结束 |
| `binderror` | `@error` | 播放错误 |
| `bindtimeupdate` | `@timeupdate` | 进度变化；`detail = { currentTime, duration }`，文档称约每 250 ms 触发一次 |
| `bindfullscreenchange` | `@fullscreenchange` | 进入或退出全屏；`detail = { fullScreen, direction }`，direction 为 `vertical` 或 `horizontal` |
| `bindprogress` | `@progress` | 加载进度；`detail = { buffered }`，百分比，仅支持一段加载 |
| `bindwaiting` | `@waiting` | 出现缓冲 |

原生写法使用 `bind事件名`，uni-app/Vue 使用 `@事件名`。生成代码时遵循项目已有事件处理命名。

## 实例方法

| 方法 | 说明 |
| --- | --- |
| `play()` | 播放 |
| `pause()` | 暂停 |
| `stop()` | 停止 |
| `playbackRate(rate)` | 设置倍速 |
| `showStatusBar()` | 显示状态栏，仅 iOS 全屏有效 |
| `hideStatusBar()` | 隐藏状态栏，仅 iOS 全屏有效 |

通过 `selectComponent("#mVideo")` 或 uni-app Vue 2 的 `$refs` 获取 `m-video` 实例。不要把外层组件 id 直接交给 `Taro.createVideoContext`。

来源：https://weixin.xiaoaikeji.net/guide/2
