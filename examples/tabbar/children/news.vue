<template>
	<view class="container">
		<h1>news</h1>
	</view>
</template>

<script>
	import {onMounted,onBeforeUnmount} from "vue"
	import {useRouter,useRoute,onBeforeRouteUpdate,onBeforeRouteLeave} from '@/uni-simple-router'
	
	export default {
		setup(){
			console.log(`---news-setup--`)
			
			onMounted(()=>{
				console.warn(`组合api ++++ customTabbar/news ++++ onMounted`)
			})
			onBeforeUnmount(()=>{
				console.warn(`组合api ++++ customTabbar/news ++++ onBeforeUnmount`)
			})
			onBeforeRouteUpdate((to, from)=>{
				console.warn(`组合api ++++ customTabbar/news ---页面 onBeforeRouteUpdate 守卫发生变化`)
			})
			onBeforeRouteLeave((to, from)=>{
				console.warn(`组合api ++++ customTabbar/news ---页面 beforeRouteLeave 守卫发生变化`)
			})
		}
	}
</script>

<style>

</style>