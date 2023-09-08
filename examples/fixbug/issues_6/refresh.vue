<template>
	<div class="container">
		<h1>试试下拉刷新</h1>
		
	</div>
</template>

<script setup>
	import { onPullDownRefresh} from '@dcloudio/uni-app'
	
	onPullDownRefresh(()=>{
		console.log('组合API - refresh');
		setTimeout(function () {
			uni.stopPullDownRefresh();
		}, 2000);
	})
</script>

<script>
	export default {
		onPullDownRefresh(){
			console.log('选项API - refresh');
		}
	}
</script>