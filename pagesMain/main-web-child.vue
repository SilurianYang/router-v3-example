<template>
	<view>
		<h1>main-web-child</h1>
	</view>
</template>

<script>
	import {buildLifeCycle} from '@/utils/hook.js'
	const { optionHooks,positionHooks } = buildLifeCycle(`main-web-child`)
	
	export default {
		...optionHooks,
		setup(...args){
			positionHooks();
			
		},
		data() {
			return {
				
			}
		},
		created(){
			console.log(this.$Route)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
