<template>
	<view class="container">
		<h1>release</h1>
	</view>
</template>

<script>
	import {getCurrentInstance,onMounted,onBeforeUnmount} from 'vue'
	import {useRouter,useRoute,onBeforeRouteUpdate,onBeforeRouteLeave} from '@/uni-simple-router'
	
	export default {
		setup(){
			console.log(`---release-setup--`)
			const instance = getCurrentInstance()
			console.log(instance)
			
			onBeforeRouteUpdate((to, from)=>{
				console.warn(`组合api ++++ customTabbar/release ---页面 onBeforeRouteUpdate 守卫发生变化`)
				if(to.name === `customTabbarHome`){
					uni.showModal({
					    title:`拦截提示`,
					    content:`不允许直接跳首页`,
						showCancel:false
					})
					return false
				}
			})
			
			onBeforeRouteLeave((to, from)=>{
				console.warn(`组合api ++++ customTabbar/release ---页面 beforeRouteLeave 守卫发生变化`)
			})
			onMounted(()=>{
				console.warn(`组合api ++++ customTabbar/release ++++ onMounted`)
			})
			onBeforeUnmount(()=>{
				console.warn(`组合api ++++ customTabbar/release ++++ onBeforeUnmount`)
			})
		},
		beforeRouteEnter(to, from) {
			console.log(to, from)
					  console.error(`选项api ++++ customTabbar/release ---页面 beforeRouteEnter 守卫发生变化`)
		},
		  beforeRouteUpdate(to, from) {
						console.error(`选项api ++++ customTabbar/release ---页面 beforeRouteUpdate 守卫发生变化`)
		  },
		  beforeRouteLeave(to, from) {
						console.error(`选项api ++++ customTabbar/release ---页面 beforeRouteLeave 守卫发生变化`)
		  },
	}
</script>

<style>

</style>