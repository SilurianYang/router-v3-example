<template>
	<view>
        <h1>{{pageTitle}}</h1>
		<h3>当前时间 {{new Date().toLocaleTimeString()}}</h3>
		<simple-router-view viewName="content-default" class="simple-router-view"></simple-router-view>
	</view>
</template>

<script>
	import {buildLifeCycle} from '@/utils/hook.js'
	import {inject,unref,getCurrentInstance} from 'vue'
	
	const { optionHooks,positionHooks } = buildLifeCycle(`content`)
	export default {
		setup(props,ctx){
			const instance = getCurrentInstance();
			console.log(instance)
			positionHooks();
		},
		data() {
			return {
                pageTitle:`content 页面`
			}
		},
		...optionHooks,
		  beforeRouteEnter(to, from) {
			  console.error(`选项api ++++ content ---页面 beforeRouteEnter 守卫发生变化`)
		    // 在渲染该组件的对应路由被验证前调用
		    // 不能获取组件实例 `this` ！
		    // 因为当守卫执行时，组件实例还没被创建！
		  },
		    beforeRouteUpdate(to, from) {
				console.error(`选项api ++++ content ---页面 beforeRouteUpdate 守卫发生变化`)
		      // 在当前路由改变，但是该组件被复用时调用
		      // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
		      // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		      // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
		    },
		    beforeRouteLeave(to, from) {
				console.error(`选项api ++++ content ---页面 beforeRouteLeave 守卫发生变化`)
		      // 在导航离开渲染该组件的对应路由时调用
		      // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
		    },
		methods: {

		}
	}
</script>

<style>

</style>