<template>
	<view>
		<web-view src="http://192.168.0.2:5500/index.html" :webview-styles="webviewStyles"></web-view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333',
					},
				}
			}
		},
		onLoad(){
			console.log(`webview  - vue 版本`)
		},
		onBackPress(...to) {
			console.log(to)
		}
	}
	
</script>