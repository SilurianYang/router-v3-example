import {
	__dynamicImportComponent__
} from '@/uni-simple-router'

export const paramsRoutes = [
	{
		path:`/params`,
		name:`params`,
		component:__dynamicImportComponent__(`~@/examples/params/index.vue`,{
			pageType: `top`
		})
	},
	{
		path:`/params/overview`,
		name:`paramsOverview`,
		component:__dynamicImportComponent__(`~@/examples/params/overview.vue`,{
			pageType: `top`
		})
	},
	{
		path:`/params/dynamic/:id(\\d{3})/:name([a-z]{3})`,
		name:`paramsDynamicOverview`,
		component:__dynamicImportComponent__(`~@/examples/params/overview.vue`,{
			pageType: `top`
		})
	},
]