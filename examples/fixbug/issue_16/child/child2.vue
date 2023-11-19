<template>
	<view class="container">
		<h1>child2-content</h1>
			<view class="cu-form-group">
				<input type="text" v-model="inputValue" >
			</view>
	</view>
</template>

<script setup>
	import { 
		onReady,
		onLoad,
		onShow,
		onHide,
		onUnload
	} from '@dcloudio/uni-app'
	import {
		onMounted,
		onUpdated,
		onUnmounted,
		onBeforeMount,
		onBeforeUpdate,
		onBeforeUnmount,
		onActivated,
		onDeactivated,
		ref
	} from 'vue'
	console.error(`issues_16bug_test2-- setup`)
	
onLoad(()=>{
	console.log(`issues_16bug_test2-- onload`)
})
onReady(()=>{
	console.log(`issues_16bug_test2-- onReady`)
})
onShow(()=>{
	console.log(`issues_16bug_test2-- onShow`)
})
onHide(()=>{
	console.log(`issues_16bug_test2-- onHide`)
})
onUnload(()=>{
	console.log(`issues_16bug_test2-- onUnload`)
})

onMounted(()=>{
	console.error(`issues_16bug_test2-- onMounted`)
})
onUpdated(()=>{
	console.error(`issues_16bug_test2-- onUpdated`)
})
onUnmounted(()=>{
	console.error(`issues_16bug_test2-- onUnmounted`)
})
onBeforeMount(()=>{
	console.error(`issues_16bug_test2-- onBeforeMount`)
})
onBeforeUpdate(()=>{
	console.error(`issues_16bug_test2-- onBeforeUpdate`)
})
onBeforeUnmount(()=>{
	console.error(`issues_16bug_test2-- onBeforeUnmount`)
})
onActivated(()=>{
	console.error(`issues_16bug_test2-- onActivated`)
})
onDeactivated(()=>{
	console.error(`issues_16bug_test2-- onDeactivated`)
})


const inputValue = ref('')

</script>
