
# 小艾视频播放插件

小艾视频播放插件为微信小程序第三方视频播放插件，能够解决小程序内的视频播放资质问题。
使用本插件后，你的小程序无须额外资质(服务类目)就可以播放视频。

更多详细说明可查看插件官网：https://weixin.xiaoaikeji.net

>我们提供免费技术指导和免费试用，如有需要，请联系微信 xakj2222

本插件同时支持小程序`原生开发`和`uni-app`开发两种模式。
本插件同时支持 `VUE 2` 和 `VUE 3` 两个版本。

# 快速开始使用

### 1. 引入插件代码包

在app.json`原生开发` 或 manifest.json`uniapp开发` 中添加如下代码：
version无须指定具体某个版本，使用`latest`会自动引用当前最新版本。
>provider是指本插件的appid，直接copy无须修改，不要误改为客户小程序appid

```javascript
{
  "plugins": {
    "m-video": {
      "version": "latest",
      "provider": "wxd4709e80d42cb833"
    }
  }
}
```

### 2. 引入自定义组件

在您需要使用插件功能相应页面的. json文件中定义引入的自定义组件。
或者在全局pages.json中引入，这样其他页面就无须再次引入。
```javascript
{
  "usingComponents": {
    "m-video": "plugin://m-video/m-video",
  }
}
```

### 3. 组件使用示例
在需要用到视频播放的地方，使用<m-video>组件，并设置相关参数属性。
`注意需要在组件外包裹一个有高度的view，通过这个view来控制视频宽高大小`
```javascript
<view class="video_wrap">
  <m-video
        id="组件id"
        src="https://your-file-url.mp4" 
        autoplay="{{true}}"
        token = "your-token"
  >
  </m-video>
</view>  
.video_wrap{
  width: 300px;
  height: 200px;
}
```
### 4. 参数和方法说明

插件的所有参数和方法：
https://weixin.xiaoaikeji.net/guide/2

### 5. 示例代码下载

原生开发和Uniapp开发 DEMO示例代码，：
https://weixin.xiaoaikeji.net/guide/3


### 6. 联系开发者

Token请联系微信 `xakj2222` 获取

