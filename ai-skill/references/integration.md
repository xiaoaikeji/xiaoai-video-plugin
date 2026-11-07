# 集成指南

本页用于首次接入、把原生 `video` 迁移为 `m-video`，或生成原生小程序、uni-app、Vue、Taro/React 的接入代码。

## 固定标识与准备项

- 插件别名：`m-video`
- 插件 provider（插件 APPID）：`wxd4709e80d42cb833`
- 插件组件路径：`plugin://m-video/m-video`
- 版本：官网建议使用 `latest` 自动引用当前最新版。生产项目若要求可复现构建，可先核实服务方支持的具体版本再锁定，不要自行猜版本号。
- token：由插件服务方为客户提供。代码中使用安全的配置注入或占位符，不要写入公共源码。
- 使用前确认客户小程序已具备使用该插件的权限。若微信后台提示无权限，引导用户到官网链接的微信服务市场页面核对开通状态。

## 1. 声明插件代码包

### 微信小程序原生开发

将 `plugins` 合并到 `app.json`：

```json
{
  "plugins": {
    "m-video": {
      "version": "latest",
      "provider": "wxd4709e80d42cb833"
    }
  }
}
```

不要把 provider 改成客户小程序 APPID，也不要保留官网示例中的 JSON 注释。

### uni-app

官网要求在 `manifest.json` 中声明相同的插件映射。常见 uni-app 项目将它合并到 `mp-weixin` 配置中：

```json
{
  "mp-weixin": {
    "plugins": {
      "m-video": {
        "version": "latest",
        "provider": "wxd4709e80d42cb833"
      }
    }
  }
}
```

保留已有的 `mp-weixin` 字段，只合并 `plugins`。若项目使用自定义构建器或生成式 manifest，修改其源配置而不是构建产物。

### Taro/React

把同一 `plugins.m-video` 声明合并到最终生成微信小程序 `app.json` 的 Taro app 配置中。Taro 版本间配置文件形式可能不同，先沿用仓库现有 `app.config.*` 写法，并在构建产物中确认 provider 和版本正确。

## 2. 注册自定义组件

### 原生页面级注册

在使用播放器的页面 `.json` 中合并：

```json
{
  "usingComponents": {
    "m-video": "plugin://m-video/m-video"
  }
}
```

### uni-app 页面级或全局注册

页面级注册通常放在对应页面的 `style.usingComponents`；全局注册可合并到 `pages.json` 的 `globalStyle`：

```json
{
  "globalStyle": {
    "usingComponents": {
      "m-video": "plugin://m-video/m-video"
    }
  }
}
```

项目若已有组件自动导入或条件编译规则，优先遵循现有结构，并确保最终微信小程序页面 JSON 中出现上述组件路径。

## 3. 页面中使用组件

### 原生 WXML

```xml
<view class="video-wrap">
  <m-video
    id="mVideo"
    src="{{encodedVideoUrl}}"
    token="{{xiaoaiToken}}"
    autoplay="{{true}}"
    controls="{{true}}"
    bindplay="onVideoPlay"
    binderror="onVideoError"
  ></m-video>
</view>
```

```css
.video-wrap {
  width: 300px;
  height: 200px;
}
```

在页面逻辑中先处理 URL：

```js
Page({
  data: {
    encodedVideoUrl: encodeURI("https://example.com/path/video.mp4"),
    xiaoaiToken: "<由安全配置注入的 token>"
  },
  onVideoPlay(event) {
    // 按业务需要处理播放事件
  },
  onVideoError(event) {
    console.error("m-video error", event.detail)
  }
})
```

### uni-app / Vue

```vue
<template>
  <view class="video-wrap">
    <m-video
      id="mVideo"
      ref="refVideo"
      :src="encodedVideoUrl"
      :token="xiaoaiToken"
      :autoplay="true"
      :controls="true"
      @play="onVideoPlay"
      @error="onVideoError"
    />
  </view>
</template>
```

Vue 2 可先尝试 `this.$refs.refVideo.play()`；官网也给出兼容 Vue 2/Vue 3 的 selector 方式：

```js
const video = this.selectComponent("#mVideo")
video?.play()
```

Vue 3 + TypeScript 的项目可从当前组件实例的 proxy 调用 selector；保持选择器与模板中的 `id="mVideo"` 一致：

```ts
import { getCurrentInstance } from "vue"
import { onLoad } from "@dcloudio/uni-app"

onLoad(() => {
  const instance = getCurrentInstance()
  const video = instance?.proxy?.selectComponent?.("#mVideo")
  video?.play()
})
```

不同 uni-app/Vue 构建版本对实例暴露方式可能不同。如果 `$refs` 与 `selectComponent` 都不可用，先用官网对应 DEMO 与当前编译器版本对照。

### Taro/React

优先从当前页面或组件上下文使用 `selectComponent("#mVideo")` 获取插件组件实例。官网明确不建议用 `Taro.createVideoContext("id")` 控制该插件，因为参数要求的是插件内部随机生成的原生 video id，而不是外层 `m-video` 的 id。具体实例获取写法应匹配项目所用 Taro 版本，并参考官网 Taro DEMO。

## 4. 实例控制

原生小程序：

```js
const video = this.selectComponent("#mVideo")
video?.playbackRate(1.5)
```

可用方法见 [component-api.md](component-api.md)。

## 5. 验证清单

1. 构建产物的 `app.json` 含正确的 provider 和版本。
2. 使用页面的最终 JSON 含 `plugin://m-video/m-video`。
3. 外层容器有非零高度。
4. token 已注入且未进入公开日志或源码。
5. 视频域名已加入微信小程序服务器域名白名单。
6. 视频 URL 经 `encodeURI` 处理后传入。
7. 依次在开发者工具、真机调试、真机非调试模式验证。

## 官方入口与示例

- 使用指南：https://weixin.xiaoaikeji.net/guide/1
- 原生 DEMO：https://weixin.xiaoaikeji.net/demo/native.zip
- uni-app DEMO：https://weixin.xiaoaikeji.net/demo/uniapp.zip
- Taro/React DEMO：https://weixin.xiaoaikeji.net/demo/taro-react.zip
- uni-app 插件市场：https://ext.dcloud.net.cn/plugin?id=28977
- 微信服务市场：https://fuwu.weixin.qq.com/service/detail/000ea89bf48e383eccadb2d245f415

官网页面在采集时显示版本 `1.3.2`，使用指南页标注最后更新于 `2024-06-28`；易变信息应在执行任务时重新核对。
