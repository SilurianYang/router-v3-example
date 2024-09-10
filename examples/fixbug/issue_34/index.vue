<template>
	<view class="container">
		<button open-type="share">分享当前页面</button>
		<div class="margin-top-sm" >
			<my-route-watch />
		</div>
	</view>
</template>

<script >
	export default {
		onLoad() {
			
			const router = this.$Router
			router.isReady().then(res=>{
				console.log(router.currentRoute.value)
			})
			console.log(router)
		},
		onShareAppMessage(e){
			console.log(`+++++++ 用户点击右上角分享 ++++++`)
			console.log(e)
			return {
			  title: '用户点击右上角分享--1',
			  path: '/uni-simple-router/inspect/loading?__redirect__=/fixbug/list&name=hhyang&ages=1234'
			}
		},
		onShareTimeline(e){
			console.log(`------ 分享到朋友圈 -------`)
			console.log(e)
			
			return {
			  title: '分享到朋友圈--2',
			  query: 'name=hhyang&ages=3333'
			}
		}
	}


</script>

<style>

</style>
