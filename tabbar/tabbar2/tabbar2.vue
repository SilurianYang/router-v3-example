<template>
	<view>
		<h1>tabbar2</h1>
		<u-subsection :list="list" :current="1" mode="subsection"></u-subsection>
		
		<button @click="gotoPage">原始跳转一下</button>
	</view>
</template>

<script>
	import {reactive} from 'vue'
	import { onShow,onHide,onUnload,onLoad } from '@dcloudio/uni-app'
	export default {
		setup(){
			const list = reactive(['未付款', '待评价', '已付款'])
			onShow(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar2/tabbar2 --- onShow`)
			})
			onHide(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar2/tabbar2 --- onHide`)
			})
			onLoad(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar2/tabbar2 --- onLoad`)
			})
			onUnload(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar2/tabbar2 --- onUnload`)
			})
			
			return {
				list
			}
		},
		onShow(){
			console.error(`选项api ++++ /tabbar/tabbar2/tabbar2 --- onShow`)
		},
		onHide(){
			console.error(`选项api ++++ /tabbar/tabbar2/tabbar2 --- onHide`)
		},
		onLoad(){
			console.error(`选项api ++++ /tabbar/tabbar2/tabbar2 --- onLoad`)
		},
		methods: {
			gotoPage(){
				uni.reLaunch({
					url:`/redirect/routes`
				})
			},
			tabbar2Method(msg){
				uni.showModal({
					title:`tab2页面`,
					content:msg,
					showCancel:false
				})
			}
		}
	}
</script>

<style>

</style>
