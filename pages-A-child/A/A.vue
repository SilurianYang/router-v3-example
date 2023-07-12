<template>
	<view>
		<h1>pages-A-child-A</h1>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		beforeRouteEnter(to, from) {
			console.error(`pages-A-child-A ---页面 beforeRouteEnter 守卫发生变化`)
		  // 在渲染该组件的对应路由被验证前调用
		  // 不能获取组件实例 `this` ！
		  // 因为当守卫执行时，组件实例还没被创建！
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
