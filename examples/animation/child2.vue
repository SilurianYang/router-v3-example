<template>
	<view class="container noPaddingTop">
		<div class="box" v-for="it in 4" :key="it">
			<u-button
				type="warning" 
				:plain="true"
			>animat - child2 - page</u-button>
		</div>
	</view>
</template>

<script setup>
import {
	onBeforeRouteLeave
} from '@/uni-simple-router'
</script>

<style lang="stylus">
.box
	margin-bottom: 20rpx
	&:last-child
		margin-bottom: 0
</style>
