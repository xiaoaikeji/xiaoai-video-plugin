<template>
	<view class="content">
		<!-- <m-video @fullscreenchange="(e)=>{onfullscreenchange(1,e)}" ref="video0"
			src="https://sucaicdn.xiaoaikeji.net/1681625875.1233602-62c96e.mp4"
			token="替换token"></m-video>
		<button @click="play">全屏播放</button> -->

		<!-- 原生组件用法
		<view class="video-wrap">
			<video 
				id="mVideox" 
				ref="mVideox" 
				src="https://sucaicdn.xiaoaikeji.net/images/demo.mp4"
				poster="https://sucaicdn.xiaoaikeji.net/images/demo.jpg"
				:muted="false" 
				:show-casting-button="true" 
				:enable-auto-rotation="true" 
				:show-screen-lock-button="true"
				:show-background-playback-button="true" 
				:controls="false" 
				:enable-progress-gesture="false"
				preferred-peak-bit-rate="-1" 
				:show-fullscreen-btn="true"
				
				:showCustomCenterPlayBtn="true" 
				:loop="true" ></video>
		</view> -->

		<test-video ref="testVideo"></test-video>

		<view class="video-wrap">
			<m-video
				token="input-your-token-替换成你的token"
				id="mVideo"
				ref="mVideo"
				:speedRate="speedRate"
				src="https://sucaicdn.xiaoaikeji.net/images/demo.mp4"
				poster="https://sucaicdn.xiaoaikeji.net/images/demo.jpg"
				:showSpeedRateBtn="true"
				:muted="false"
				:show-casting-button="true"
				:enable-auto-rotation="true"
				:show-screen-lock-button="true"
				:show-background-playback-button="true"
				:controls="controls"
				:enable-progress-gesture="false"
				:preferred-peak-bit-rate="-1"
				:showCustomCenterPlayBtn="true"
				object-fit="fill"
				:autoplay="true"
				:loop="true"
				@ended="onEnd"
				:debug="true"
				@loadedmetadata="loadedmetadata"
				@tap="onClick"
				@controlstoggle="controlstoggle"
			/>
		</view>
		<view class="action-wrap">
			<view class="flex-row">
				<view class="flex-1">
					<button @tap="playVideo">播放</button>
				</view>
				<view class="flex-1">
					<button @tap="pauseVideo">停止</button>
				</view>
			</view>
			<view class="flex-row">
				<view class="flex-1">
					<button @tap="playbackRate2">加速播放(2倍速)</button>
				</view>
				<view class="flex-1">
					<button @tap="resetRate">恢复速度</button>
				</view>
			</view>
			<view class="flex-row">
				<view class="flex-1">
					<button @tap="showcontrols">显示控制栏</button>
				</view>
				<view class="flex-1">
					<button @tap="hidecontrols">隐藏控制栏</button>
				</view>
			</view>
			<view>
				{{ tip }}
			</view>
		</view>
	</view>
</template>

<script>
import { getCurrentInstance } from 'vue';
export default {
	data() {
		return {
			title: 'Hello',
			videoUrl: 'https://sucaicdn.xiaoaikeji.net/images/demo.mp4',
			speedRate: 1,
			tip: '',
			controls: true
		};
	},
	onLoad() {},
	methods: {
		loadedmetadata(e) {
			console.log('loadedmetadata', e);
		},
		play() {
			const video = this.$refs.video0;
			video.requestFullScreen({
				direction: 0
			});
			video.play();
		},
		onfullscreenchange(i, e) {
			console.log('e.detail.detail is', e.detail.detail);
		},
		addItem() {},
		playbackRate2() {
			let video = this.getMvideo();

			video.playbackRate(2);
		},
		resetRate() {
			let video = this.getMvideo();

			video.playbackRate(1);
		},
		ontimeupdate(e) {
			// console.log('xxxx11 timeupdate', e);
		},
		onEnd(e) {
			console.log('onend==>', e);
		},
		getMvideo() {
			// 实例获取 第1种写法 (vue2 支持)
			// let video = this.$refs.mVideo;

			// 实例获取 第2种写法(vue2,vue3 支持)
			let video = this.selectComponent('#mVideo');

			return video;
		},
		showcontrols(e) {
			this.controls = true;
		},
		hidecontrols(e) {
			this.controls = false;
		},
		playVideo() {
			let video = this.getMvideo();
			video.play();
		},
		pauseVideo() {
			let video = this.getMvideo();

			video.pause();
		},
		onClick(e) {
			console.log('onClick===>', e);
		},
		onClick2(e) {
			console.log('onClick2===>', e);
		},
		controlstoggle(e) {
			console.log('controlstoggle===>', e);
		}
	}
};
</script>

<style>
.flex-row {
	display: flex;
	flex-direction: row;
}

.flex-1 {
	flex: 1;
	margin: 5px;
}
.action-wrap {
	margin: 20px 10px;
}
.video-wrap {
	width: 100%;
	height: 220px;
	position: relative;
}
</style>
