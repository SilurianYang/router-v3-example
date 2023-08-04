import {
	__dynamicImportComponent__
} from '@/uni-simple-router'
	
export const customTabbar=[{
		path:`/customTabbar`,
		name:`customTabbar`,
		component:__dynamicImportComponent__(`../../examples/tabbar/index.vue`,{
			pageType: `top`,
			// package: {
			// 	type: `child`,
			// 	name: `examples/tabbar`
			// },
		}),
		redirect:(to)=>{
			return {
				name:`customTabbarHomeChild`,
				params:{
					id:999
				}
			}
		},
		children:[
			{
				path:`home`,
				name:`customTabbarHome`,
				component:__dynamicImportComponent__(`~@/examples/tabbar/children/home.vue`),
				meta:{
					animation:`child_router_animate`,
					animationEl:`#tabbarRouterView`,
					navType:`replace`
				},
				children:[
					{
						path:`child/:id(\\d{3})`,
						name:`customTabbarHomeChild`,
						component:__dynamicImportComponent__(`~@/examples/tabbar/children/children/commonChild.vue`)
					}
				],
			},
			{
				path:`class`,
				name:`customTabbarClass`,
				component:__dynamicImportComponent__(`~@/examples/tabbar/children/class.vue`),
				meta:{
					animation:`child_router_animate`,
					animationEl:`#tabbarRouterView`,
					navType:`replace`
				},
			},
			{
				path:`release`,
				name:`customTabbarRelease`,
				component:__dynamicImportComponent__(`~@/examples/tabbar/children/release.vue`),
				meta:{
					animation:`child_router_animate`,
					animationEl:`#tabbarRouterView`,
					navType:`replace`
				},
			},
			{
				path:`news`,
				name:`customTabbarNews`,
				component:__dynamicImportComponent__(`~@/examples/tabbar/children/news.vue`),
				meta:{
					animation:`child_router_animate`,
					animationEl:`#tabbarRouterView`,
					navType:`replace`
				},
			},
			{
				path:`me`,
				name:`customTabbarMe`,
				component:__dynamicImportComponent__(`~@/examples/tabbar/children/me.vue`),
				meta:{
					animation:`child_router_animate`,
					animationEl:`#tabbarRouterView`,
					navType:`replace`
				},
			},
		]
	}
]