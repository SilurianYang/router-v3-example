<template>
	<view class="container routesContent">
		<uni-section title="小试牛刀" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				<u-button type="primary" class="margin-bottom-sm" :plain="true" @click="goToPage({
					name:`redirectRoutesDemo1`,
					query:{
						msg:`我要去redirectRoutesDemo1但是会被重定向到redirectRoutesDemo2`
					}
				})">push to redirectRoutesDemo1</u-button>
				<u-button type="success" class="margin-bottom-sm" :plain="true" @click="goToPage({
					name:`redirectRoutesDemo2`,
					query:{
						msg:`我来自push to redirectRoutesDemo2按钮`
					}
				})">push to redirectRoutesDemo2</u-button>
				<u-button type="error" class="margin-bottom-sm" :plain="true" @click="goToPage({
					name:`redirectRoutesDemo3`
				})">push to redirectRoutesDemo3</u-button>
			</div>
		</uni-section>
		<uni-section title="路由表配置" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				<show-json-cont :json="routesStr"/>
			</div>
		</uni-section>
	</view>
</template>

<script setup>
import {demoRoutes} from '~@/router/routes/demo-routes.js'
import {ref} from 'vue'
import {
	useRouter,
	useRoute,
	onBeforeRouteUpdate,
	onBeforeRouteLeave
} from '@/uni-simple-router'

const router = useRouter();

const routesStr = ref(routesToStr())

function routesToStr(){
	const str = 
`{
	path:'/redirect/routes/demo1',
	name:'redirectRoutesDemo1',
	redirect:(to)=>{
		const {path,...other} = to
		return {
			...other,
			// 默认情况下 navType 为 replace 你可以修改并保留页面栈
			navType:'push',
			name:'redirectRoutesDemo2'
		}
	}
},{
	path:'/redirect/routes/demo2',
	name:'redirectRoutesDemo2',
},{
	path:'/redirect/routes/demo3',
	name:'redirectRoutesDemo3',
	redirect:{
		// 跳转到一个没有的地址 触发404
		path:'/dasdasfcsdas/vdvxadasd'
	}
}`
	return str
}

function goToPage(option){
	router.push(option)
}
</script>

<style lang="stylus">
.previewCodeBox
	min-height: 200rpx
</style>
