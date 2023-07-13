<template>
	<view class="container baseChildBotton">
		<div class="box" v-for="it in 5" :key="it">
			<u-button
				type="error" 
				:plain="true"
			>overview - child - page</u-button>
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
