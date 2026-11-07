export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  plugins: {
    "m-video": {
      "version": "latest",
      "provider": "wxd4709e80d42cb833"
    }
  }
})
