<template>
	<view class="container">
		<h1>home</h1>
		<div v-if="!isShowChild">
			<button class="cu-btn block bg-red margin-tb-sm lg" @click="goToPage(`replace`,{
				name:`customTabbarHomeChild`,
				params:{
					id:333
				},
				query:{
					parent:`home`
				}
			})">replace 到子路由</button>
			
			<button class="cu-btn block bg-green margin-tb-sm lg" @click="goToPage(`push`,{
				name:`customTabbarHomeChild`,
				params:{
					id:333
				},
				query:{
					parent:`home`
				}
			})">push 到子路由</button>
		</div>
		
		
		<simple-router-view 
			// #ifdef MP
				defClass="router-view margin-top-sm customTabbar-home"
				defStyle="border-color: #2979ff;"
			// #endif
			
			// #ifndef MP
				class="router-view margin-top-sm customTabbar-home"
				style="border-color: #2979ff;"
			// #endif
		></simple-router-view>
	</view>
</template>

<script>
	import { onShow,onHide } from '@dcloudio/uni-app'
	import {computed, inject, ref,getCurrentInstance,onBeforeUpdate,onMounted,onBeforeUnmount} from 'vue'
	import {useRouter,useRoute,onBeforeRouteUpdate,onBeforeRouteLeave} from '@/uni-simple-router'
	
	export default {
		setup(){
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
			
			const route = useRoute();
			const router = useRouter();
			
			const instance = getCurrentInstance();
			
			const isShowChild = computed(()=>{
				return route.matched.filter(it=> it.record.name === `customTabbarHomeChild`).length
			})
			
			function goToPage(navType,option){
				router[navType](option)
			}
			
			return {
				goToPage,
				isShowChild:false
			}
		},
		beforeRouteEnter(to, from) {
			console.log(to, from)
					  console.error(`选项api ++++ customTabbar/home ---页面 beforeRouteEnter 守卫发生变化`)
		},
		  beforeRouteUpdate(to, from) {
			  console.log(to, from)
						console.error(`选项api ++++ customTabbar/home ---页面 beforeRouteUpdate 守卫发生变化`)
		  },
		  beforeRouteLeave(to, from) {
			  console.log(to, from)
						console.error(`选项api ++++ customTabbar/home ---页面 beforeRouteLeave 守卫发生变化`)
		  },
	}
</script>

<style lang="stylus" scoped>
	
</style>