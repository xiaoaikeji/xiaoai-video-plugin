<template>
	<view class="layout">
		<view class="page">
			<view class="page-content">
				<view class="video-container">
					<view class="video-item">
						<m-video class="player" ref="video123"
							src="https://sucaicdn.xiaoaikeji.net/images/demo.mp4"
							:autoplay="false" :show-center-play-btn="false" :controls="true"
							token="替换token"></m-video>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	const OFFSET_BASE = 65
	export default {
		data() {
			return {
				index: 123,
				videoList: [''],
			};
		},
		onLoad(e) {},
		onShow() {
			setTimeout(()=>{
				
					this.changeVideo()
			},1000);
		},
		methods: {
			changeVideo() {
				let player = this.$refs['video123']
				player.play();
			},
		}
	}
</script>

<style lang="scss">
	.video-container {
		.video-item {
			width: 100%;
			height: 100vh;
			overflow: hidden;
			position: relative;
		}

		.swiper {
			height: 100%;
			background-color: #000;
			display: flex;

			.swiper-item {
				height: 100%;
				flex: 1;
			}
		}

		.video-cover {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 9;

			.playBtn,
			.stopBtn {
				height: 150rpx;
				width: 150rpx;
				display: block;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate3d(-50%, -50%, 0);
				opacity: .5;
			}

			.stopBtn {
				height: 300rpx;
				width: 300rpx;
			}

			.btn-box {
				width: 120rpx;
				height: 460rpx;
				position: absolute;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;

				.btn {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.text {
						color: #fff;
						font-size: 24rpx;
						text-shadow: #474747 0 .5px 1px;
					}
				}
			}

			.fullScreenBtn {
				width: 216rpx;
				height: 66rpx;
				position: absolute;
				left: 0;
				right: 0;
				top: 100rpx;
				margin: auto;
				border-radius: 66rpx;
				margin-bottom: 100rpx;
				border: 1px solid #696a6c;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 26rpx;
				font-weight: 100;
				opacity: .7;

				image {
					width: 40rpx;
					height: 44rpx;
				}
			}

			.bottom-text {
				position: absolute;
				bottom: 120rpx;
				left: 0;
				width: 100%;
				color: #fff;
				padding: 0 20rpx;
				box-sizing: border-box;

				.author {
					width: 100%;
					font-size: 34rpx;
					font-weight: 600;
					margin-bottom: 10rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}

				.title {
					width: 100%;
					height: 96rpx;
					font-size: 32rpx;
					line-height: 50rpx;
					font-weight: 100;
					white-space: normal;
					overflow: hidden;
					word-break: break-all;
					text-overflow: ellipsis;
				}
			}
		}

		.player {
			width: 100%;
			height: 100%;
			flex: 1;
			z-index: 1;
		}
	}
</style>