import {
	__dynamicImportComponent__
} from '@/uni-simple-router';
import {
	uniTabbar
} from './routes/uni-tabbar.js'
import {customTabbar} from './routes/custom-tabbar.js'
import {nvueRoutes} from './routes/nvue.js'
import {paramsRoutes} from './routes/params.js'
import {staticAddRoue} from './routes/dynamic-addRoue.js'
import {nestingRoutes} from './routes/nesting.js'
import {animationRoutes} from './routes/animation.js'
import {demoRoutes} from './routes/demo-routes.js'
import {guardRoutes} from './routes/guard.js'

const contentCom = __dynamicImportComponent__(`@/tabbar/tabbar1/children/content.vue`)

export const routes = [
	...uniTabbar,
	...customTabbar,
	...nvueRoutes,
	...paramsRoutes,
	...staticAddRoue,
	...nestingRoutes,
	...animationRoutes,
	...demoRoutes,
	...guardRoutes,
	{
		path: '/pages/login/index',
		name: 'myLoginXxxx',
		component: __dynamicImportComponent__(`@/examples/login.vue`, {
		  pageType: 'top',
		  style: {
			navigationStyle: 'custom',
		  },
		}),
		meta: {
		  // 是否开启自定义导航栏
		  customNavigationBar: false,
		  // 导航栏标题
		  title: '登陆',
		  // 是否需要认证
		  requiresAuth: false,
		  // 是否允许标签植入
		  implant: true,
		},
	},
	{
		"children": [{
			"components": {
				"default": __dynamicImportComponent__('../pagesMain/content.vue'),
				"tab": __dynamicImportComponent__('../pagesMain/tabbar.vue')
			},
			"meta": {},
			"name": "content",
			"path": "content",
		}, {
			"children": [{
				"components": {
					"default": __dynamicImportComponent__('@/pagesMain/main-web-child.vue')
				},
				"meta": {},
				"name": "main-web-child",
				"path": "web/child/:name"
			},{
					path: 'content/:menuType',
					name: `tab1Cont`,
					component: contentCom
			}],
			"components": {
				"default": __dynamicImportComponent__('../pagesMain/main-web.vue')
			},
			"meta": {},
			"name": "web333",
			"path": "web/:id(\\d{3})",
			"props": true,
			beforeEnter: (to, from) => {
				return true
			}
		}],
		"meta": {},
		"name": "pagesMain",
		"path": "/pagesMain/main",
		"component": __dynamicImportComponent__('../pagesMain/main.vue',{
			pageType: `top`,
		}),
	}, {
		"children": [{
			"components": {
				"default": __dynamicImportComponent__('../pages-A-child/A/A.vue')
			},
			"meta": {
				"auth": true,
				"object": {
					"style": "color:#fff"
				}
			},
			"name": "pages-A-child-A",
			"path": "A"
		}],
		"meta": {
			"auth": true,
			"object": {
				"style": "color:#fff"
			}
		},
		"name": "pagesA-index",
		"path": "/pagesA-index",
		"component": __dynamicImportComponent__('~@/pagesA/pagesA-index.vue', {
			pageType: `top`,
			package: {
				type: `child`,
				name: `pagesA`
			}
		})
	}, {
		"meta": {},
		"path": "/pagesB/detail",
		component: __dynamicImportComponent__('../pagesB/detail/detail.vue',{
			pageType: `top`,
		})
	}, {
		path: `/pagesMain/nvue1`,
		name: `nvue1`,
		component: __dynamicImportComponent__('../pagesMain/nvue1/nvue1.nvue',{
			pageType: `top`,
		})
	}, {
		path: `/pagesMain/nvue2`,
		name: `nvue2`,
		component: __dynamicImportComponent__('../pagesMain/nvue2/nvue2.nvue',{
			pageType: `top`,
		})
	},
	{
		path: `/404`,
		name: `404`,
		component: __dynamicImportComponent__('~@/examples/404.vue',{
			pageType: `top`,
		})
	},
]