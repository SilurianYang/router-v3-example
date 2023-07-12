import {
	__dynamicImportComponent__
} from '@/uni-simple-router'

export const nestingChildComponent = __dynamicImportComponent__(`~@/examples/nesting/child.vue`)

export const nestingRoutes = [{
	path:`/unlimit/nesting`,
	name:`unlimitNesting`,
	component:__dynamicImportComponent__(`~@/examples/nesting/index.vue`,{
		pageType: `top`
	}),
}]