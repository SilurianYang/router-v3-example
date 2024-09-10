<template>
	<view>
		<h1>这是子页面-组合API-参数为：{{ id }}</h1>
	</view>
</template>

<script setup>
	const props = defineProps({
	  id: String
	})
	console.log(props.id)
</script>

<style>

</style>
