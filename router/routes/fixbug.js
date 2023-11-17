import {
	__dynamicImportComponent__
} from '@/uni-simple-router'

export const fixbugRoutes = [
	{
		path: `/fixbug/list`,
		name: `fixbugList`,
		component: __dynamicImportComponent__(`~@/examples/fixbug/index.vue`, {
			pageType: `top`,
		})
	},
	{
		path: `/issues_4/:category?/:id`,
		name: `issues_4Bug`,
		component: __dynamicImportComponent__(`~@/examples/fixbug/issues_4/index.vue`, {
			pageType: `top`
		}),
		meta:{
			menus:{
				navInfo:{
					name:`issues_4Bug`,
					params:{
						category:+new Date(),
						id:555
					}
				},
				title:`issues_4 + 【H5】`
			}
		}
	},
	{
		path: `/issues_5/action/:time`,
		name: `issues_5Action`,
		component: __dynamicImportComponent__(`~@/examples/fixbug/issues_5/self.vue`, {
			pageType: `top`
		}),
		meta:{
			menus:{
				navInfo:{
					name:`issues_5Action`,
					params:{
						time:+new Date()
					}
				},
				title:`issues_5 + 【app|小程序】`
			}
		}
	},
	{
		path: `/issues_6/refresh`,
		name: `issues_6Refresh`,
		component: __dynamicImportComponent__(`~@/examples/fixbug/issues_6/refresh.vue`, {
			pageType: `top`,
			style:{
				enablePullDownRefresh:true
			}
		}),
		meta:{
			menus:{
				navInfo:{
					name:`issues_6Refresh`,
				},
				title:`issues_6 + 【H5】`
			}
		}
	},
	{
		path: `/issues_7/bug`,
		name: `issues_7bug`,
		component: __dynamicImportComponent__(`~@/examples/fixbug/issues_7/index.vue`, {
			pageType: `top`,
		}),
		meta:{
			menus:{
				navInfo:{
					name:`issues_7bug_a`,
				},
				title:`issues_7_1 + 【H5】`
			},
		},
		children:[
			{
				path:`a`,
				name:`issues_7bug_a`,
				component: __dynamicImportComponent__(`~@/examples/fixbug/issues_7/child/a.vue`),
			}
		]
	},
	{
		path: `/issues_7/bug/2`,
		name: `issues_7bug_2`,
		component: __dynamicImportComponent__(`~@/examples/fixbug/issues_7/index.vue`, {
			pageType: `top`,
		}),
		meta:{
			menus:{
				navInfo:{
					name:`issues_7bug_a_2`,
				},
				title:`issues_7_2 + 【H5】`
			},
		},
		children:[
			{
				path:`a`,
				name:`issues_7bug_a_2`,
				component: __dynamicImportComponent__(`~@/examples/fixbug/issues_7/child/a.vue`),
			}
		]
	},
	{
		path: `/issues_8/bug`,
		name: `issues_8bug`,
		component: __dynamicImportComponent__(`~@/examples/fixbug/issues_8/index.vue`, {
			pageType: `top`,
		}),
		meta:{
			menus:{
				navInfo:{
					name:`issues_8bug`,
				},
				title:`issues_8 + 【H5】`
			},
		},
	},
	{
		path: `/issues_8/bug/index2`,
		name: `issues_8bug_index2`,
		component: __dynamicImportComponent__(`~@/examples/fixbug/issues_8/index2.vue`, {
			pageType: `top`,
		})
	},
	{
		path: `/issues_13/bug`,
		name: `issues_13bug`,
		component: __dynamicImportComponent__(`~@/examples/fixbug/issues_13/index.vue`, {
			pageType: `top`,
		}),
		meta:{
			menus:{
				navInfo:{
					name:`issues_13bug`,
				},
				title:`issues_13 + 【APP】`
			},
		},
	},
	{
		path: `/issues_13/bug/child`,
		name: `issues_13bug_child`,
		component: __dynamicImportComponent__(`~@/examples/fixbug/issues_13/child.vue`, {
			pageType: `top`,
		})
	},
	{
		path: `/issues_14/bug/:id`,
		name: `issues_14bug`,
		component: __dynamicImportComponent__(`~@/examples/fixbug/issue_14/index.vue`, {
			pageType: `top`,
		}),
		meta:{
			menus:{
				navInfo:{
					name:`issues_14bug`,
					params:{
						id:+new Date()
					}
				},
				title:`issues_14 + 【小程序】`
			},
		},
	},
]


export function createMenus(){
	const listMenus = [];
	for(let i=0;i<fixbugRoutes.length;i++){
		const item = fixbugRoutes[i];
		if(item.meta && item.meta.menus){
			listMenus.push(item.meta.menus)
		}
	}
	return listMenus.reverse();
}