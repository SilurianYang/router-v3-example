<template>
	<view class="container">
		<h3>
			 &lt;router-view&gt; 和 &lt;keep-alive&gt; 及 &lt;transition&gt;
		</h3>
		<my-route-watch class="margin-top-sm"/>
		<div class="margin-top-sm simple-router-view">
			<simple-router-view  v-slot="{ Component, route }">
				<!-- #ifdef H5 -->
				<transition :enter-active-class="`animate__animated ${route.meta.transition}`">
				  <keep-alive>
					<component :is="Component"/>
				  </keep-alive>
				</transition>
				<!-- #endif -->
			</simple-router-view>
		</div>
		<div class="line-box-btns margin-top-sm">
			<button @click="$Router.push({
				name:`issues_16bug_test1`,
				params:{
					id:+new Date()
				}
			})">动态去嵌套子页面</button>
			<button @click="$Router.push({
				name:`issues_16bug_test2`
			})">去嵌套子页面</button>
		</div>
	</view>
</template>

<script setup>
</script>

<style>
	.simple-router-view{
		border: 1rpx dashed #f00;
		padding: 15rpx;
		box-sizing: border-box;
		border-radius: 8rpx;
	}
	.title{
		height: 70rpx;
		background-color: #fff;
		line-height: 70rpx;
		text-indent: 15rpx;
		border-radius: 4rpx;
	}
</style>
