<template>
	<view>
		<video :src="src" v-if="src"></video>
	</view>
</template>

<script>
	export default {
		name:"test-video",
		props:{
			src: {
				type: String
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>