<template>
	<view>
		<uni-section title="路由变动观察区" type="line">
			<div class="routeWatchBox">
				<uni-easyinput type="textarea" autoHeight v-model="strRoute" maxlength="-1"></uni-easyinput>
			</div>
		</uni-section>
	</view>
</template>

<script setup>
	console.log(`setup -- route-watch`)
	import {computed} from 'vue'
	
	const route = uni.$Route
	const strRoute = computed(() => {
		const {matched,children,...others} = route.value
		return JSON.stringify(others)
	})
</script>

<style>

</style>