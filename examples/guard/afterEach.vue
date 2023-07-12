<template>
	<view class="container">
		<uni-section title="触发提示信息" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				<div class="margin-bottom-sm">
					1. 全局 afterEach 守卫 在导航执行完毕后执行，该守卫不像其他守卫一样拥有影响导航的功能
				</div>
				<div class="margin-bottom-sm">
					2. 它通常可用于分析、更改页面标题、可访问性功能（如宣布页面和许多其他内容）。
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
const codeStr= 
`
// 路由表
{
  path: '/guard/overview/afterEach',
  name: 'afterEach',
  component: __dynamicImportComponent__('~@/examples/guard/afterEach.vue', {
    pageType: 'top'
  }),
  meta: {
    title: 'afterEach守卫标题'
  }
}

// 守卫代码
router.afterEach(async (to, from) => {
  if (to.meta && to.meta.title) {
    await timeOut(1)
    uni.setNavigationBarTitle({
      title: to.meta.title
    })
  }
})
`
</script>
