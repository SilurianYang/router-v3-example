<script>
	import {getCurrentInstance} from 'vue'
	import { onLaunch,onShow,onHide} from '@dcloudio/uni-app'
	
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		setup(){
			console.log('setup -- app.vue');
			onLaunch(()=>{
				
				console.log('setup -- app.vue - onLaunch');
			})
			onShow(()=>{
				
				console.log('setup -- app.vue - onShow');
			})
			onHide(()=>{
				
				console.log('setup -- app.vue - onHide');
			})
		}
	}
</script>

<style lang="scss">
	@import "./colorui/main.css";
	@import "./colorui/icon.css";
	@import "./vk-uview-ui_1.4.5/index.scss";
	page{
		background-color: #f1f1f1;
	}
	.noPaddingTop{
		padding-top: 0 !important;
	}
	.noPaddingBottom{
		padding-bottom: 0 !important;
	}
	.noMarginBottom{
		margin-bottom: 0 !important;
	}
	.container{
		padding: 20rpx;
		box-sizing: border-box;
		.router-view{
			border: 1px solid #f00;
			margin-bottom: 10px;
		}
	}
	.previewCodeBox{
		background: #f5fcff;
		border: 1px solid #d3eeff;
		border-radius: 5rpx;
		padding: 15rpx;
		box-sizing: border-box;
		overflow: auto;
	}
</style>