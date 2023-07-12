<template>
	<view class="container">
		<uni-section title="触发提示信息" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				<div class="margin-bottom-sm">
					1. 全局 beforeResolve 守卫与 beforeEach 功能完全相同
				</div>
				<div class="margin-bottom-sm">
					2. 区别在于前者会在解析所有组件内守卫和异步路由组件之后
				</div>
				<div style="color: #f00;font-weight: bold;">
					3. 小程序下的物理返回和原生header返回会触发该守卫但无法执行拦截
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

<script setup>
import {useRouter} from '@/uni-simple-router'
import {
	computed,
	ref
} from 'vue'

const router = useRouter();
const codeStr = ref(
`const guard = router.beforeResolve((to, from) => {
  return new Promise(resolve => {
    uni.showModal({
      title: '全局守卫',
      content: 'beforeResolve守卫询问你，是否要离开本页？',
      cancelText: '否',
      confirmText: '是',
      success: ({confirm}) => {
        if (confirm) {
          guard();
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
})
`)

const guard = router.beforeResolve((to,from)=>{
	return new Promise(resolve=>{
		uni.showModal({
			title:`全局守卫`,
			content:`beforeResolve守卫询问你，是否要离开本页？`,
			cancelText:`否`,
			confirmText:`是`,
			success:({confirm})=>{
				if(confirm){
					guard();
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
})
</script>
