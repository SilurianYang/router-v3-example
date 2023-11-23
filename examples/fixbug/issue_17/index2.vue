<template>
	<view>
		<button @click="$Router.back(2)">返回两层</button>
		<button @click="$Router.back(1)">返回一层</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
