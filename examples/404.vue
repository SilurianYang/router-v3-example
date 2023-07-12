<template>
	<view class="container">
		<div class="flex flex-direction align-center ">
			<image src="../static/examples/page.png" style="width: 600rpx; height:600rpx"></image>
			<div class="text-jumbo">
				暂无任何权限，如有不满请联系你领导
			</div>
			<u-button 
				@click="$Router.back()"
				type="warning" style="margin-top: 40rpx;" :plain="true" :hairline="true">
				<uni-icons type="paperplane" size="30" color="#ff9900"></uni-icons>
				返回上一页
			</u-button>
		</div>
	</view>
</template>

<script setup>

</script>

<style lang="stylus">
.text-jumbo
	margin: 20rpx 0
	font-size: 30rpx;
	color: #a9a9a9;
</style>
