<template>
	<view class="container">
		<button @click="goToPage">去子页面</button>
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
			goToPage(){
				this.$Router.push({
					name:`issues_8bug_index2`
				})
			}
		}
	}
</script>
