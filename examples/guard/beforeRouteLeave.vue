<template>
	<view class="container">
		<uni-section title="触发提示信息" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				<div class="margin-bottom-sm">
					1. beforeRouteLeave 守卫可同时在组合API和选项API下使用
				</div>
				<div class="margin-bottom-sm">
					2. 当页面离开时会触发该函数，你可以在守卫下执行重定向或取消导航
				</div>
				<div class="margin-bottom-sm">
					3. 组件还未被卸载所以该守卫this可正常访问，尝试跳转页面触发守卫试试吧
				</div>
				<div style="color: #f00;font-weight: bold;">
					4. 小程序下的物理返回和原生header返回时该守卫无效
				</div>
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
	import {
		onBeforeRouteLeave
	} from '@/uni-simple-router'
	
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
			onBeforeRouteLeave((to,from)=>{
				return commonModal(`组合`);
			})
			
			const codeStr = 
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

onBeforeRouteLeave((to, from) => {
  return commonModal('组合');
})

beforeRouteLeave(to, from) {
  return commonModal('选项');
}
`
			return {
				codeStr
			}
		},
		beforeRouteLeave(to,from){
			return commonModal(`选项`);
		}
	}
</script>

<style>

</style>
