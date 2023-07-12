import {
	__dynamicImportComponent__
} from '@/uni-simple-router'

const commonComponent = __dynamicImportComponent__(`~@/examples/routes/demo.vue`,{
		pageType: `top`
	})

export const demoRoutes = [{
	path:`/redirect/routes`,
	name:`redirectRoutes`,
	component:__dynamicImportComponent__(`~@/examples/routes/index.vue`,{
		pageType: `top`
	}),
},{
	path:`/redirect/routes/demo1`,
	name:`redirectRoutesDemo1`,
	component:commonComponent,
	redirect:(to)=>{
		const {path,...other} = to
		return {
			...other,
			navType:`push`,
			name:`redirectRoutesDemo2`
		}
	}
},{
	path:`/redirect/routes/demo2`,
	name:`redirectRoutesDemo2`,
	component:commonComponent,
},{
	path:`/redirect/routes/demo3`,
	name:`redirectRoutesDemo3`,
	component:commonComponent,
	redirect:{
		path:`/dasdasfcsdas/vdvxadasd`
	}
}]