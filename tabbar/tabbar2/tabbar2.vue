<template>
	<view class="tabbar2Content">
		<div  class="container">
				<uni-section title="不会丢失的状态" type="line">
					<div class="padding-sm" style="padding-top: 0;">
						<u-subsection
							:list="list" 
							:current="1" 
							mode="subsection"
							activeColor="#39b54a"
							bgColor="#fff"
						></u-subsection>
					</div>
				</uni-section>
				
				<my-route-watch class="margin-top-sm" />
				<uni-section title="提示信息" type="line" class="margin-top-sm">
					<div class="container desc_box" style="padding-top: 0;">
						<div class="title">
							当前为 uni-simple-router v3版本的示例工程
						</div>
						<div class="desc">
							您可以在 GitHub 上找到 uni-simple-router v3 的 示例源代码。要运行示例功能非常简单，但在此之前，您必须已经获得授权并下载了 uni-simple-router v3 版本。如果您尚未获得授权或未下载，请前往官网获取授权和下载。
						</div>
					</div>
				</uni-section>
		</div>
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
