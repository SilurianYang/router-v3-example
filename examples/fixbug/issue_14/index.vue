<template>
	<view>
		<div class="container">
			<my-route-watch class="margin-top-sm" />
		</div>
	</view>
</template>

<script setup>
	import {useRoute} from '@/uni-simple-router'
	const route = useRoute()
	
	console.log(
		route.value
	)
</script>