import {
	__dynamicImportComponent__
} from '@/uni-simple-router'

export const animationRoutes =[{
	path:`/animation/nesting`,
	name:`animationNesting`,
	component:__dynamicImportComponent__(`~@/examples/animation/index.vue`,{
		pageType: `top`
	}),
	children:[{
		path:`animat1`,
		name:`animationNestingChild1`,
		component:__dynamicImportComponent__(`~@/examples/animation/child1.vue`),
	},{
		path:`animat2`,
		name:`animationNestingChild2`,
		component:__dynamicImportComponent__(`~@/examples/animation/child2.vue`),
	}]
}]