<template>
	<view class="container nestingContent">
		<uni-section title="新增一个路由并嵌套" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				<u-button 
					type="primary" :plain="true" size="mini"
					@click="actionNesting"
				>嵌套一个</u-button>
				<u-button
					type="warning" :plain="true" size="mini"
					@click="removeNesting"
					class="margin-left-sm"
					v-if="routes.children"
				>移除一个</u-button>
			</div>
		</uni-section>
		<uni-section title="效果预览" type="line" class="margin-bottom-sm">
			<div class="content noPaddingTop">
				<simple-router-view 
					// #ifdef MP
						defClass="parent-simple-router-view"
					// #endif
					
					// #ifndef MP
						class="parent-simple-router-view"
					// #endif
				/>
			</div>
		</uni-section>
		<uni-section title="路由表" type="line" class="margin-bottom-sm">
			<div class="content noPaddingTop">
				<show-json-cont :json="routesStr"/>
			</div>
		</uni-section>
	</view>
</template>

<script setup>
	
import {nestingChildComponent} from '~@/router/routes/nesting.js'
import {
	useRouter,
	useRoute,
	onBeforeRouteLeave
} from '@/uni-simple-router'
import { watch,reactive,ref} from "vue";
import { onUnload } from '@dcloudio/uni-app'
const router = useRouter();
const route = useRoute();

const routes = reactive({
	path:`/unlimit/nesting`,
	name:`unlimitNesting`,
})
const routesStr = ref(JSON.stringify(routes,null,2))
let depth = 0;
let parentName = `unlimitNesting`
const dynamicNameList = reactive([])

watch(dynamicNameList,(value,oldValue)=>{
	let msg = ``
	if(value.length === 3){
		msg = `会不会太深了？`
	}else if(value.length === 5){
		msg = `太深了，我怕你的手机受不了`
	}else if(value.length === 9){
		msg = `是你手机极限了吗？`
	}
	if(msg){
		uni.showModal({
		    title:`性能提示`,
		    content:msg,
		    cancelText:`够了`,
		    confirmText:`不会`
		})
	}
})

function actionNesting(){
	depth++
	const name = `childNesting${depth}`;
	const path = parentName ===`unlimitNesting` 
					? `childNesting${depth}/:depth(\\d+)`
					: `childNesting${depth}`
	dynamicNameList.push(name);
	const childRoute = {
		name,
		path,
		component:nestingChildComponent
	}
	router.addRoute(parentName,childRoute)
	routeToStrJson(parentName,childRoute);
	router.replace({
		name,
		params:{
			depth
		}
	})
	parentName = name
}

function routeToStrJson(parentName,childRoute){
	function convert(routesList,parentName,childRoute){
		for(const route of routesList){
			if(route.name === parentName){
				if(!route.children){
					route.children = []
				}
				route.children.push(childRoute)
				return 
			}
			if(route.children){
				return convert(route.children,parentName,childRoute);
			}
		}
	}
	convert([routes],parentName,childRoute);
	routesStr.value = JSON.stringify(routes,null,2)
	
	console.log(
		routesStr.value
	)
}

function removeRoutesChildren(routeName){
	function convert(routesList,routeName){
		for(const route of routesList){
			if(route.name === routeName){
				return true
			}
			if(route.children){
				const status = convert(route.children,routeName);
				status && delete route.children
			}
		}
		return false
	}
	convert([routes],routeName);
	routesStr.value = JSON.stringify(routes,null,2)
}

function removeNesting(){
	for(let i=dynamicNameList.length-1;i>=0;i--){
		const name = dynamicNameList[i]
		const status = router.removeRoute(name);
		if(status){
			depth--
			let preName = dynamicNameList[i-1]
			if(preName == null){
				preName = `unlimitNesting`
				depth = 0
			}
			removeRoutesChildren(name);
			parentName = preName
			router.replace({
				name:parentName,
				params:{
					depth
				}
			})
			dynamicNameList.splice(-1,1)
			uni.showToast({
				title: `移除成功`,
			});
		}else{
			uni.showToast(`移除失败，请联系作者`)
		}
		break;
	}
}

onUnload(()=>{
	for(let i=dynamicNameList.length-1;i>=0;i--){
		const name = dynamicNameList[i]
		const status = router.removeRoute(name);
		console.log(`路由表 -- ${name} -- 删除结果：${status}`)
	}
})
</script>

