<template>
	<view class="video-wrap">
		<m-video
			token="替换token"
			id="mVideoRef"
			ref="mVideo123"
			:speedRate="speedRate"
			src="https://sucaicdn.xiaoaikeji.net/images/demo.mp4"
			poster="https://sucaicdn.xiaoaikeji.net/images/demo.jpg"
			:showSpeedRateBtn="true"
			:muted="false"
			:show-casting-button="true"
			:enable-auto-rotation="true"
			:show-screen-lock-button="true"
			:show-background-playback-button="true"
			:controls="true"
			:preferred-peak-bit-rate="-1"
			:showCustomCenterPlayBtn="true"
			:loop="true"
			@ended="onEnd"
			@loadedmetadata="loadedmetadata"
		/>
		<button @click="onPlay">播放</button>
	</view>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
const { proxy } = getCurrentInstance();
onLoad(() => {
	let video = proxy.selectComponent('#mVideoRef');
	if (video) video.play();
});
function onPlay() {
	// const { proxy } = getCurrentInstance()
	let video = proxy.selectComponent('#mVideoRef');
	if (video) video.play();
}
</script>

<style lang="scss" scoped>
.video-wrap {
	width: 100%;
	height: 220px;
	position: relative;
}
</style>
