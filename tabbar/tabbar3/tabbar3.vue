<template>
	<view>
		<h1>tabbar3</h1>
	</view>
</template>

<script>
	import { onShow,onHide,onUnload,onLoad } from '@dcloudio/uni-app'
	export default {
		data() {
			return {
				
			}
		},
		setup(){
			onShow(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar3/tabbar3 --- onShow`)
			})
			onHide(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar3/tabbar3 --- onHide`)
			})
			onLoad(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar3/tabbar3 --- onLoad`)
			})
			onUnload(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar3/tabbar3 --- onUnload`)
			})
		},
		onShow(){
			console.error(`选项api ++++ /tabbar/tabbar3/tabbar3 --- onShow`)
		},
		onHide(){
			console.error(`选项api ++++ /tabbar/tabbar3/tabbar3 --- onHide`)
		},
		onLoad(){
			console.error(`选项api ++++ /tabbar/tabbar3/tabbar3 --- onLoad`)
		},
		onUnload(){
			console.error(`选项api ++++ /tabbar/tabbar3/tabbar3 --- onUnload`)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
