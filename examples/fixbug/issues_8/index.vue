<template>
	<view class="container">
		<button @click="goToPage">去子页面</button>
		<button @click="goToPage1">首页</button>
		<button @click="goToPage2">自己跳自己</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			console.log(`issues_8bug --- onLoad`)
		},
		onShow(){
			console.log(`issues_8bug --- onShow`)
		},
		onHide(){
			console.log(`issues_8bug --- onHide`)
		},
		methods: {
			goToPage2(){
				this.$Router.push({
					name:`issues_8bug`
				})
			},
			goToPage1(){
				this.$Router.push({
					name:`customTabbarHome`
				})
			},
			goToPage(){
				this.$Router.push({
					name:`issues_8bug_index2`
				})
			}
		}
	}
</script>
