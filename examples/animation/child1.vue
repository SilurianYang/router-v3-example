<template>
	<view class="container noPaddingTop">
		<div class="box" v-for="it in 4" :key="it">
			<u-button
				type="success" 
				:plain="true"
			>animat - child1 - page</u-button>
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
