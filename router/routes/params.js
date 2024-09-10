import {
	__dynamicImportComponent__
} from '@/uni-simple-router'

export const paramsRoutes = [
	{
		path:`/auto/params`,
		name:`auto_params`,
		component:__dynamicImportComponent__(`~@/examples/params/auto.vue`,{
			pageType: `top`
		}),
		children:[{
			path:`op_auto/:id`,
			name:`child_op_auto_params`,
			 props: true,  
			component: __dynamicImportComponent__(`@/examples/params/child/option_auto_child.vue`)
		},{
			path:`po_auto/:id`,
			name:`child_po_auto_params`,
			 props: true,  
			component: __dynamicImportComponent__(`@/examples/params/child/po_auto_child.vue`)
		}]
	},
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