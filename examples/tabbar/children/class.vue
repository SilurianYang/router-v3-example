<template>
	<view class="container">
		<h1>class</h1>
	</view>
</template>

<script setup>
	import {onMounted,onBeforeUnmount} from "vue"
	import {useRouter,useRoute,onBeforeRouteUpdate,onBeforeRouteLeave} from '@/uni-simple-router'
	
	onMounted(()=>{
		console.warn(`组合api ++++ customTabbar/home ++++ onMounted`)
	})
	
	onBeforeUnmount(()=>{
		console.warn(`组合api ++++ customTabbar/home ++++ onBeforeUnmount`)
	})
	onBeforeRouteUpdate((to, from)=>{
		console.warn(`组合api ++++ customTabbar/home ---页面 onBeforeRouteUpdate 守卫发生变化`)
	})
	onBeforeRouteLeave((to, from)=>{
		console.warn(`组合api ++++ customTabbar/home ---页面 beforeRouteLeave 守卫发生变化`)
	})

</script>

<style>

</style>