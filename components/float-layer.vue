<template>
	<view class="float_layer_content" v-if="loadStatus!=='hide'">
		<div class="msg_box" :class="loadStatus">
			<div class="text_msg">
				<uni-icons 
					type="checkbox-filled" 
					size="30" 
					color="#fff" 
					class="icon_box"
					v-if="loadStatus === `success`"
				></uni-icons>
				{{ loadStatus === `load` ? `加载中，请稍等...` : `已为你加载完成` }}
				
			</div>
		</div>
	</view>
</template>

<script>
	import {ref} from 'vue'
	let floatLayerTimer = null;
	export default {
		setup(){
			
			const loadStatus = ref(`load`);
			
			function toggleFloat(status){
				loadStatus.value = status;
				if(status === `success`){
					clearTimeout(floatLayerTimer)
					floatLayerTimer = setTimeout(()=>{
						loadStatus.value = `hide`
					},1000)
				}
			}
			
			
			return  {
				loadStatus,
				toggleFloat
			}
		}
	}
</script>

<style lang="stylus">
	@import "@/common/float-layer.css"
.float_layer_content
	position: fixed
	bottom: 6em;
	right: 0;
	max-width: 320px;
	z-index: 10000000;
	.msg_box
		display: flex
		align-items: center
		box-sizing: border-box
		box-shadow: -3px 3px 6px rgba(0,0,0,.1);
		transition: .3s;
		padding: 1em 1.2em 1em 3.4em;
		height: 50px;
		backdrop-filter: saturate(5) blur(20px);
		&.load
			background: linear-gradient(90deg,rgba(253,170,71,.7),rgba(247,154,13,.8));
		&.success
			padding:1em 1.2em 1em 1.2em
			background: linear-gradient(90deg,rgba(15,147,249,.7),rgba(61,189,249,.8));
			.text_msg
				.icon_box
					margin-right: 10rpx
				&:before
					display: none
		.text_msg
			font-size: 14px
			color:#fff
			display: flex
			align-items: center
			&:before
				left: 0.8em;
				font-size: 1.5em;
				position: absolute;
				top: 0;
				bottom: 0;
				margin: auto;
				content: "";
				width: 0.7em;
				height: 0.7em;
				display: inline-block;
				border: 0.1em solid transparent;
				border-radius: 50%;
				border-top-color: var(--this-color);
				border-bottom-color: var(--this-color);
				-webkit-animation: huan-rotate 1s cubic-bezier(.7,.1,.31,.9) infinite;
				animation: huan-rotate 1s cubic-bezier(.7,.1,.31,.9) infinite;
</style>