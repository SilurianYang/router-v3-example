import {
	__dynamicImportComponent__
} from '@/uni-simple-router';

export const uniTabbar = [
		{
			"path": "/",
			"name": "tabbar1",
			component: __dynamicImportComponent__(`~@/tabbar/tabbar1/tabbar1.vue`, {
				style: {},
				pageType: `top`,
				package: {
					type: `main`,
					name: ``
				}
			}),
		},
		{
			"path": "/tabbar2",
			"name": "tabbar2",
			component: __dynamicImportComponent__("~@/tabbar/tabbar2/tabbar2.vue", {
				pageType: `top`
			}),
		},
		{
			"path": "/tabbar3",
			"name": "tabbar3",
			component: __dynamicImportComponent__("@/tabbar/tabbar3/tabbar3.vue", {
				pageType: `top`
			}),
		}
]