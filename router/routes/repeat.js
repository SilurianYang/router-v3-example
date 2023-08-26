import {
	__dynamicImportComponent__
} from '@/uni-simple-router'

export const repeatRoutes = [{
	path:`/repeat/action/:time`,
	name:`repeatAction`,
	component:__dynamicImportComponent__(`~@/examples/repeat/self.vue`, {
		pageType: `top`
	})
}]