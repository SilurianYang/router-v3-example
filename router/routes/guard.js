import {
	__dynamicImportComponent__
} from '@/uni-simple-router'

export const guardRoutes = [{
	path: `/guard/overview`,
	name: `guardOverview`,
	component: __dynamicImportComponent__(`~@/examples/guard/index.vue`, {
		pageType: `top`
	})
}, {
	path: `/guard/overview/afterEach`,
	name: `afterEach`,
	component: __dynamicImportComponent__(`~@/examples/guard/afterEach.vue`, {
		pageType: `top`
	}),
	meta: {
		title: `afterEach守卫标题`
	}
}, {
	path: `/guard/overview/beforeEach`,
	name: `beforeEach`,
	component: __dynamicImportComponent__(`~@/examples/guard/beforeEach.vue`, {
		pageType: `top`
	})
}, {
	path: `/guard/overview/beforeEnter`,
	name: `beforeEnter`,
	component: __dynamicImportComponent__(`~@/examples/guard/beforeEnter.vue`, {
		pageType: `top`
	}),
	beforeEnter: (to, from) => {
		return new Promise(resolve => {
			uni.showModal({
				title: `守卫提示`,
				content: `beforeEnter守卫询问你，是否要执行跳转？`,
				cancelText: `否`,
				confirmText: `是`,
				success: ({
					confirm
				}) => {
					if (confirm) {
						return resolve(true)
					}
					uni.showToast({
						title: `成功留下`,
						icon: `success`
					})
					return resolve(false)
				}
			})
		})
	}
}, {
	path: `/guard/overview/beforeResolve`,
	name: `beforeResolve`,
	component: __dynamicImportComponent__(`~@/examples/guard/beforeResolve.vue`, {
		pageType: `top`
	})
}, {
	path: `/guard/overview/beforeRouteEnter`,
	name: `beforeRouteEnter`,
	component: __dynamicImportComponent__(`~@/examples/guard/beforeRouteEnter.vue`, {
		pageType: `top`
	})
}, {
	path: `/guard/overview/beforeRouteLeave`,
	name: `beforeRouteLeave`,
	component: __dynamicImportComponent__(`~@/examples/guard/beforeRouteLeave.vue`, {
		pageType: `top`
	})
}, {
	path: `/guard/overview/beforeRouteUpdate`,
	name: `beforeRouteUpdate`,
	component: __dynamicImportComponent__(`~@/examples/guard/beforeRouteUpdate.vue`, {
		pageType: `top`
	}),
	children: [{
		path: `child`,
		name: `beforeRouteUpdateChild`,
		component: __dynamicImportComponent__(`~@/examples/guard/beforeRouteUpdate-child.vue`)
	}]
}]