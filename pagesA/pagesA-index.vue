<template>
	<view>
		<h1>{{pageTitle}}</h1>
		<button @click="back()">uni-app返回1层</button>
		<button @click="back({delta:2})">uni-app返回2层</button>
		<button @click="backRouer()">插件uni-app返回</button>
		
		
		<simple-router-view name="default" viewName="pagesA-index" class="simple-router-view"></simple-router-view>
	</view>
</template>

<script>
	import {buildLifeCycle} from '@/utils/hook.js'
	import { inject,getCurrentInstance } from 'vue'
	import {useRouter,useRoute} from '@/uni-simple-router'
	
	const { optionHooks,positionHooks } = buildLifeCycle(`pagesA-index`)
	
	export default {
		...optionHooks,
		data(){
			return {
				pageTitle:`pagesA-index`,
				backCount:2
			}
		},
		setup() {
			positionHooks();
			const router = useRouter()
			console.log(router)
			
			
			const instance = getCurrentInstance();
			console.log(instance)
			
			function back(options){
				uni.navigateBack(options)
			}
			
			function backRouer(){
				router.back()
			}
			return {
				back,
				backRouer
			}
		},
		created(){
			console.log(this)
		},
		beforeRouteEnter(to, from) {
			console.error(`pagesA-index ---页面 beforeRouteEnter 守卫发生变化`)
		  // 在渲染该组件的对应路由被验证前调用
		  // 不能获取组件实例 `this` ！
		  // 因为当守卫执行时，组件实例还没被创建！
		},
		beforeRouteLeave(to, from) {
			console.error(`pagesA-index---页面 beforeRouteLeave 守卫发生变化`)
		  // 在导航离开渲染该组件的对应路由时调用
		  // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
		 //  this.backCount-=1;
		 //  if(this.backCount<0){
			//   return true
		 //  }
		 //  uni.showModal({
		 //  	title:`拦截提示`,
			// content:`${this.pageTitle}页再按${this.backCount}次即可返回`,
			// showCancel:false
		 //  })
		 //  return false
		},
	}
</script>

<style>

</style>
