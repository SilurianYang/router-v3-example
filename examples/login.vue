<template>
	<view>
		<h1>登录页面</h1>
		<button @click="goToLogin()">点击登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goToLogin(){
				localStorage.setItem(`muduashduas`,`ssddsd`)
				this.$Router.replaceAll({
					name:`tabbar1`
				})
			}
		}
	}
</script>

<style>

</style>
