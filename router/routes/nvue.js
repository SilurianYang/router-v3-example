import {
	__dynamicImportComponent__
} from '@/uni-simple-router'

export const nvueRoutes = [
	{
		path:`/nvue/index`,
		name:`nvueIndex`,
		component:__dynamicImportComponent__(`~@/examples/nvue/index.nvue`,{
			pageType: `top`,
		}),
	},
	{
		path:`/nvue/static/child`,
		name:`nvueIndexStaticChild`,
		component:__dynamicImportComponent__(`~@/examples/nvue/child.nvue`,{
			pageType: `top`
		}),
	},
	{
		path:`/nvue/dynamic/:child`,
		name:`nvueIndexChild`,
		component:__dynamicImportComponent__(`~@/examples/nvue/child.nvue`,{
			pageType: `top`
		}),
	},
]