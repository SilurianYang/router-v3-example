<template>
	<view class="container">
		<uni-section title="修复列表" type="line" class="margin-bottom-sm">

			<uni-list-item @click="goToPage(item.navInfo)" 
			v-for="(item,index) in assertBugList"
			:key="index"
			:show-extra-icon="true" 
			showArrow 
			:clickable="true" 
			:extra-icon="{
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				}" 
			:title="item.title" 
			/>
		
		</uni-section>
		
	</view>
</template>

<script setup>
	import {createMenus} from '@/router/routes/fixbug.js';
	import {ref} from 'vue'; 
	const router = uni.$Router;
	const listMenus = createMenus();
	const assertBugList = ref(listMenus)
	
function goToPage(option,navType=`push`){
	router[navType](option)
}
</script>

<style>

</style>
