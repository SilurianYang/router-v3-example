<template>
	<view class="container">
		<uni-section title="触发提示信息" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				<div class="margin-bottom-sm">
					1. beforeRouteUpdate 守卫在导航发生变化但该组件在新路由中被重用时触发
				</div>
				<div class="margin-bottom-sm">
					2. 可同时在组合API和选项API下使用
				</div>
				<div class="margin-bottom-sm">
					3. 组件已被激活所以该守卫this可正常访问，尝试跳转页面触发守卫试试吧
				</div>
				<div style="color: #f00;font-weight: bold;">
					4. 小程序下的物理返回和原生header返回时该守卫无效
				</div>
			</div>
		</uni-section>
		<uni-section title="子路由跳转" type="line" class="margin-bottom-sm">
			<div class="container">
				<simple-router-view class="update-simple-router-view"/>
				<u-button type="primary" class="margin-top-sm" :plain="true" @click="gotoPage">跳转到子路由触发守卫</u-button>
			</div>
		</uni-section>
		<uni-section title="守卫代码" type="line" class="margin-top-sm">
			<div class="container noPaddingTop">
				<pre class="previewCodeBox pre">{{codeStr}}</pre>
			</div>
		</uni-section>
	</view>
</template>

<script>
import {useRouter,onBeforeRouteUpdate} from '@/uni-simple-router'
import {
	computed,
	ref
} from 'vue'

	function commonModal(msg){
		return new Promise(resolve=>{
			uni.showModal({
				title:`${msg}守卫`,
				content:`${msg}API询问你，是否要离开本页？`,
				cancelText:`否`,
				confirmText:`是`,
				success:({confirm})=>{
					if(confirm){
						return resolve(true)
					}
					uni.showToast({
						title:`成功留下`,
						icon:`success`
					})
					return resolve(false)
				}
			})
		})
	}

	export default {
		data() {
			return {
				
			}
		},
		setup(){
			const router = useRouter();
			const codeStr = ref(
`function commonModal(msg) {
  return new Promise(resolve => {
    uni.showModal({
      title: msg + '守卫',
      content: msg + 'API询问你，是否要离开本页？',
      cancelText: '否',
      confirmText: '是',
      success: ({confirm}) => {
        if (confirm) {
          return resolve(true)
        }
        uni.showToast({
          title: '成功留下',
          icon: 'success'
        })
        return resolve(false)
      }
    })
  })
}

onBeforeRouteUpdate((to, from) => {
  return commonModal('组合');
})

beforeRouteUpdate(to, from) {
  return commonModal('选项');
}
`)
			
			onBeforeRouteUpdate((to,from)=>{
				return commonModal(`组合`);
			})
			
			function gotoPage(){
				router.replace({
					name:`beforeRouteUpdateChild`
				})
			}
			
			return {
				codeStr,
				gotoPage
			}
		},
		beforeRouteUpdate(to,from){
			return commonModal(`选项`);
		}
	}

</script>
<style lang="stylus">
.update-simple-router-view
	border: 1rpx dashed #ccc
	padding: 20rpx
	box-sizing: border-box
</style>