<template>
	<view>
		<div class="container">
			<my-route-watch class="margin-top-sm" />
			<button @click="gotoPage">再跳一下自己</button>
		</div>
	</view>
</template>

<script setup>
	import {useRoute,useRouter} from '@/uni-simple-router'
	const route = useRoute()
	const router = useRouter();
	
	function gotoPage(){
		router.push({
			name:route.value.name,
			params:{
				id:+new Date()
			}
		})
	}
</script>