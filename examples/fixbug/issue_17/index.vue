<template>
	<view class="container">
		<button @click="goToPage1">原生跳转字符串</button>
		<button @click="goToPage2">原生跳转对象</button>
	</view>
</template>

<script setup>

function goToPage1(){
	uni.navigateTo('/issues_17/bug/child1?id=5555')
}

function goToPage2(){
	 uni.navigateTo({
		url:'/issues_17/bug/child1?id=1008611',
	}).then(res=>{
		console.log(res)
	})
}
</script>

<style>

</style>
