<template>
	<view class="container">
		<button @click="goToPage({
			name:`child_op_auto_params`,
			params:{
				id:15215
			}
		})">选项API自动解析</button>
		
		<button @click="goToPage({
			name:`child_po_auto_params`,
			params:{
				id:3333
			}
		})">组合API自动解析</button>
		
		<div class="child-view">
			<simple-router-view></simple-router-view>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goToPage(option){
				uni.$Router.push(option)
			}
		}
	}
</script>

<style>
.container{
	padding: 20rpx;
}
.child-view{
	margin-top: 50rpx;
	border: 1rpx dashed #f00;
}
</style>
