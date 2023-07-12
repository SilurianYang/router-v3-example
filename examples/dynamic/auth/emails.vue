<template>
	<view class="container">
		<div class="box" v-for="it in 5" :key="it">
			<u-button
				type="success" 
				:plain="true"
			>emails - child - page</u-button>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus">
.box
	margin-bottom: 30rpx
	&:last-child
		margin-bottom: 0
</style>
