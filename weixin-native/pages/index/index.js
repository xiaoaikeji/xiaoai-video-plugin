const plugin = requirePlugin('m-video')
Page({
	data: {
		videoUrl: 'https://sucaicdn.xiaoaikeji.net/images/demo.mp4',
		speedRate: 1,
		tip: '',
		controls: true,
		muted: false
	},
	onLoad() {
		plugin.sayHello()
	},
	addItem() {},
	playbackRate2() {
		let video = this.selectComponent("#mVideo");
		video.playbackRate(2);
	},
	resetRate() {
		let video = this.selectComponent("#mVideo");
		video.playbackRate(1);
		// console.log('this.data.speedRate',this.data.speedRate)
		// this.setData({
		// 	speedRate: 1
		// })
	},
	ontimeupdate(e) {
		// console.log('xxxx11 timeupdate', e);
	},
	onEnd(e) {
		console.log('onend==>', e)
  },
	loadedmetadata(e) {
		console.log('loadedmetadata', e);
	},
  onPlay(e){
    console.log('视频开始播放',e)
  },
	onClick(e) {
		console.log('onClick===>', e);
	},
	controlstoggle(e) {
		console.log('controlstoggle===>', e);
	},
	showStatusBar(e) {
		let video = this.selectComponent("#mVideo");
		video.showStatusBar();
	},
	hideStatusBar(e) {
		let video = this.selectComponent("#mVideo");
		video.hideStatusBar();
	},
	play() {
		let video = this.selectComponent("#mVideo");
		video.play();
	},
	playVideo() {
		let video = this.selectComponent("#mVideo");
		video.requestFullScreen({
			direction: 0
		});
		video.play();
	},
	pause() {
		let video = this.selectComponent("#mVideo");
		video.pause();
	},
	pauseVideo() {
		let video = this.selectComponent("#mVideo");
		video.pause();
	},
	showcontrols() {
		this.setData({
			controls: true,
		});
	},
	hidecontrols() {
		this.setData({
			controls: false,
		});
	},
  setMutedOff(){
    this.setData({
      muted: false,
    });
  },
  setMutedOn(){
    this.setData({
      muted: true,
    });
  }
})
