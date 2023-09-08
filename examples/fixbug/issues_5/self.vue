<template>
	<div class="container">
		<uni-section title="操作区域" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				
				<u-button type="primary" class="margin-bottom-sm" :plain="true" @click="goToPage({
					name:`repeatAction`,
					params:{
						time:+new Date()
					}
				})">自己跳自己</u-button>
				
			</div>
		</uni-section>
		
		<div class="margin-top-sm">
			<my-route-watch/>
		</div>
		
	</div>
</template>

<script setup>
	import {
		useRouter,
		useRoute,
		onBeforeRouteUpdate,
		onBeforeRouteLeave
	} from '@/uni-simple-router'
	import { onShow,onHide,onUnload,onLoad } from '@dcloudio/uni-app'
	
	const router = useRouter();
	
	onLoad(()=>{
		uni.showModal({
			title:`提示`,
			content:`onload`,
			showCancel:false
		})
	})
	
	function goToPage(option,navType=`push`){
		router[navType](option)
	}
</script>