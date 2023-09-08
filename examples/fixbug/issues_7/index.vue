<template>
	<view class="container">
		<h1>页面名称：{{name}}</h1>
		<h1>路径名称：{{routeName}}</h1>
		<simple-router-view/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:`issues_7_page`
			}
		},
		computed:{
			routeName(){
				return this.$Route.value.name
			}
		},
		beforeRouteLeave(){
			console.log(this.name)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
