<template>
	<view>
		<h1>{{pageTitle}}</h1>
		<my-route-watch class="margin-top-sm" />
		
		<button @click="goToPage({name:'nvue1',query:{msg:'我来自main页面'}})">
			push-{name:nvue1}
		</button>
		<button @click="goToPage('/pagesA/pagesA-index?id=77')">
			push-/pagesA/pagesA-index
		</button>
		<button @click="goToPage('/pagesA/pagesA-index/A')">
			新开窗口push-/pagesA/pagesA-index/A
		</button>
		<button @click="goToPage({name:`dasdas`})">
			push- {name:`dasdas`}
		</button>
		<button @click="goToPage(`/pagesMain/main/web/333`)">
			push- /pagesMain/main/web/333
		</button>
		<button @click="goToPage({name:`web333`,params:{id:666}})">
			push- {name:`web333`}
		</button>
		<button @click="goToPage({name:`content`})">
			push- {name:`content`}
		</button>
		<button @click="back">返回一下</button>
		
		<simple-router-view name="default" viewName="main-default" class="simple-router-view" id="fasdsad_main_default"></simple-router-view>
		<simple-router-view name="tab" viewName="main-tab" class="simple-router-view" id="fasdsad_main_tab"></simple-router-view>
	</view>
</template>

<script>
	import {buildLifeCycle} from '@/utils/hook.js'
	import {getCurrentInstance} from 'vue'
	import {useRouter,useRoute,onBeforeRouteLeave} from '@/uni-simple-router';
	const { optionHooks } = buildLifeCycle(`main`);
	
	export default {
		data(){
			return {
				pageTitle:`pagesMain`
			}
		},
		...optionHooks,
		setup(...args){
			console.log('setup -- main.vue');
			positionHooks();
			
			const instance = getCurrentInstance();
			console.log(instance)
			console.log(this)


			const router = useRouter();
			const route = useRoute();
			
			function goToPage(url){
				router.push(url)
			}
			function back(){
				router.back()
			}
			return {
				goToPage,
				back
			}
		},
		beforeRouteEnter(to, from) {
			console.error(`main---页面 beforeRouteEnter 守卫发生变化`)
		  // 在渲染该组件的对应路由被验证前调用
		  // 不能获取组件实例 `this` ！
		  // 因为当守卫执行时，组件实例还没被创建！
		},
		  beforeRouteUpdate(to, from) {
			  console.error(`main---页面 beforeRouteUpdate 守卫发生变化`)
		    // 在当前路由改变，但是该组件被复用时调用
		    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
		    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
		  },
		  beforeRouteLeave(to, from) {
			  console.error(`main---页面 beforeRouteLeave 守卫发生变化`)
		    // 在导航离开渲染该组件的对应路由时调用
		    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
		  },
		methods:{
			fsdujnvvncdzx(){}
		}
	}
</script>

<style>

</style>
