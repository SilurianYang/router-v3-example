<template>
	<view>
		<h1>这是子页面-选项API-参数为：{{ id }}</h1>
	</view>
</template>

<script>
	export default {
		props: ['id'],
		data() {
			return {
				
			}
		},
		created() {
			console.log(this.id)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
