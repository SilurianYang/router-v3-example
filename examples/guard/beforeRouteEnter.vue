<template>
	<view class="container">
		<uni-section title="触发提示信息" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				<div class="margin-bottom-sm">
					1. beforeRouteEnter 守卫仅支持在组合API下使用，因为该守卫执行时组件还未挂载
				</div>
				<div class="margin-bottom-sm">
					2. 它仅会在进入新页面时触发 在 beforeEnter 守卫之后
				</div>
				<div style="color: #f00;font-weight: bold;">
					3. 组件还未被挂载所以该守卫下无法使用this，尝试跳转页面触发守卫试试吧
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
	export default {
		data() {
			return {
				codeStr:
`export default {
  data() {
	return {

	}
  },
  beforeRouteEnter(to, from) {
	return new Promise(resolve => {
	  uni.showModal({
		title: '守卫提示',
		content: 'beforeRouteEnter守卫询问你，是否执行跳转？',
		cancelText: '否',
		confirmText: '是',
		success: ({
		  confirm
		}) => {
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
  },
}
`
			}
		},
		beforeRouteEnter(to,from){
			return new Promise(resolve=>{
				uni.showModal({
					title:'守卫提示',
					content:'beforeRouteEnter守卫询问你，是否执行跳转？',
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
		},
	}
</script>

<style>

</style>
