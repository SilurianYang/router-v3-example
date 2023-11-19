<template>
	<view class="container">
		<h1>child1-content</h1>
		<div>
			count:{{currentCount}}
		</div>
		<div class="btn" @click="()=>{currentCount--}">-</div>
		<div class="btn" @click="()=>{currentCount++}">+</div>
	</view>
</template>

<script setup>
	import { 
		onReady,
		onLoad,
		onShow,
		onHide,
		onUnload
	} from '@dcloudio/uni-app'
	import {
		onMounted,
		onUpdated,
		onUnmounted,
		onBeforeMount,
		onBeforeUpdate,
		onBeforeUnmount,
		onActivated,
		onDeactivated,
		ref
	} from 'vue'
	console.error(`issues_16bug_test1-- setup`)
	
onLoad(()=>{
	console.log(`issues_16bug_test1-- onload`)
})
onReady(()=>{
	console.log(`issues_16bug_test1-- onReady`)
})
onShow(()=>{
	console.log(`issues_16bug_test1-- onShow`)
})
onHide(()=>{
	console.log(`issues_16bug_test1-- onHide`)
})
onUnload(()=>{
	console.log(`issues_16bug_test1-- onUnload`)
})

onMounted(()=>{
	console.error(`issues_16bug_test1-- onMounted`)
})
onUpdated(()=>{
	console.error(`issues_16bug_test1-- onUpdated`)
})
onUnmounted(()=>{
	console.error(`issues_16bug_test1-- onUnmounted`)
})
onBeforeMount(()=>{
	console.error(`issues_16bug_test1-- onBeforeMount`)
})
onBeforeUpdate(()=>{
	console.error(`issues_16bug_test1-- onBeforeUpdate`)
})
onBeforeUnmount(()=>{
	console.error(`issues_16bug_test1-- onBeforeUnmount`)
})
onActivated(()=>{
	console.error(`issues_16bug_test1-- onActivated`)
})
onDeactivated(()=>{
	console.error(`issues_16bug_test1-- onDeactivated`)
})

const currentCount = ref(0)
</script>

<style>
	.container .btn{
		width: 100rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ccc;
		color: #fff;
		margin-bottom: 10rpx;
		border-radius: 10rpx;
	}
	.container .btn:active{
		background-color: #fff;
		color: #ccc;
	}
</style>
