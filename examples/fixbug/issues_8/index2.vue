<template>
	<view class="container">
		<h1>issues_8bug_index2</h1>
		<button @click="$Router.back()">返回上一页</button>
		<button @click="gotoPage">跳转到已开页面</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			console.log(`issues_8bug_index2 --- onLoad`)
		},
		onShow(){
			console.log(`issues_8bug_index2 --- onShow`)
		},
		onHide(){
			console.log(`issues_8bug_index2 --- onHide`)
		},
		methods: {
			gotoPage(){
				this.$Router.push({
					name:`issues_8bug`
				})
			}
		}
	}
</script>

<style>

</style>
