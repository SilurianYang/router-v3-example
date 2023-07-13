<template>
	<view class="container guardConetnt">
		<uni-section title="触发提示信息" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				<div class="margin-bottom-sm">
					1. beforeEnter 守卫是唯一一个定义在路由表中的守卫
				</div>
				<div class="margin-bottom-sm">
					2. 它仅会在进入新页面时触发
				</div>
				<div class="margin-bottom-sm">
					3. 我相信你已经了解到了，因为在进入页面之前你已被询问并允许了它
				</div>
			</div>
		</uni-section>
		
		<uni-section title="路由表代码" type="line" class="margin-top-sm">
			<div class="container noPaddingTop">
				<show-json-cont :json="codeStr"/>
			</div>
		</uni-section>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
const codeStr = ref(
`{
  path: '/guard/overview/beforeEnter',
  name: 'beforeEnter',
  component: __dynamicImportComponent__('~@/examples/guard/beforeEnter.vue', {
    pageType: 'top'
  }),
  beforeEnter: (to, from) => {
    return new Promise(resolve => {
      uni.showModal({
        title: '守卫提示',
        content: 'beforeEnter守卫询问你，是否要执行跳转？',
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
}
`
)
</script>
