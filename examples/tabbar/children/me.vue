<template>
	<view class="container">
		<h1>me</h1>
		<button @click="callMethod">执行tab2页面方法</button>
	</view>
</template>

<script>
	import {onMounted,onBeforeUnmount} from "vue"
	import {useRouter,useRoute,onBeforeRouteUpdate,onBeforeRouteLeave,parserInstance} from '@/uni-simple-router'
	export default {
		setup(){
			console.log(`---me-setup--`)
			
			onMounted(()=>{
				console.warn(`组合api ++++ customTabbar/me ++++ onMounted`)
			})
			onBeforeUnmount(()=>{
				console.warn(`组合api ++++ customTabbar/me ++++ onBeforeUnmount`)
			})
			onBeforeRouteUpdate((to, from)=>{
				console.warn(`组合api ++++ customTabbar/me ---页面 onBeforeRouteUpdate 守卫发生变化`)
			})
			onBeforeRouteLeave((to, from)=>{
				console.warn(`组合api ++++ customTabbar/me ---页面 beforeRouteLeave 守卫发生变化`)
			})
			
			function callMethod(){
				const result= parserInstance(`tabbar2`,[
					(instance)=>instance.tabbar2Method(`来自me子页面触发`)
				])
				if(!result){
					uni.showToast({
						title:`tab2页面未挂载`,
						icon:"error",
					})
				}
			}
			
			return {
				callMethod
			}
		}
	}
</script>

<style>

</style>