<template>
	<view class="container dynamicContent">
		<uni-forms :modelValue="baseFormData">
			<uni-section title="请勾选拥有的权限名" type="line" class="margin-bottom-sm">
				<div class="container noPaddingTop">
					<uni-forms-item label="权限" required class="noMarginBottom">
						<uni-data-checkbox mode="button" @change="checkboxChange" v-model="baseFormData.auth" multiple :localdata="authList" />
					</uni-forms-item>
				</div>
			</uni-section>
			<uni-section title="请选择进入的页面名" type="line" class="margin-bottom-sm">
				<div class="container noPaddingTop">
					<uni-forms-item label="表名" required class="noMarginBottom">
						<uni-data-checkbox v-model="baseFormData.enterPage" :localdata="authListEnter" />
					</uni-forms-item>
				</div>
			</uni-section>
		</uni-forms>
		
		<uni-section title="动态添加的路由表" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				<show-json-cont :json="routesStr"/>
			</div>
		</uni-section>
		
		<div class="box">
			<u-button @click="goToPage" :plain="true" type="success">
				权限已确认开始进入
			</u-button>
		</div>
		
	</view>
</template>

<script setup>
import {dynamicRoutes} from '~@/router/routes/dynamic-addRoue.js'
import { reactive,ref,watch } from "vue";
import {
	useRouter,
	useRoute,
	onBeforeRouteLeave
} from '@/uni-simple-router'
const router = useRouter();
const routesStr = ref('')
const baseFormData = reactive({
	auth:[],
	enterPage:`dynamicAuth`
})
const authList = reactive([
	{
		text: 'profile',
		value: `dynamicAuthProfile`
	},
	{
		text: 'emails',
		value: `dynamicAuthEmails`
	},
	{
		text: 'overview',
		value: `dynamicAuthOverview`
	},
	{
		text: 'setting',
		value: `dynamicAuthSetting`
	}
])
const authListEnter =reactive([{
	text: 'auth',
	value: `dynamicAuth`
},...authList])

function checkboxChange(){
	const status = router.removeRoute(`dynamicAuth`);
	
	const routeNameList = baseFormData.auth;
	if(routeNameList.length===0){
		return routesStr.value=''
	}
	const addRoute = [{
		...dynamicRoutes[0],
		children:[]
	}];
	for(const routeName of routeNameList){
		for(const childItem of dynamicRoutes[0].children){
			if(childItem.name === routeName){
				addRoute[0].children.push(childItem)
				break
			}
		}
	}
	
	function routeToStrJson(children,format){
		for(const route of children){
			const option = {
				path:route.path,
				name:route.name,
				children:[]
			}
			if(route.children){
				routeToStrJson(route.children,option.children);
			}
			format.push(option)
		}
		return format
	}
	const strJson = routeToStrJson(addRoute,[]);
	routesStr.value = JSON.stringify(strJson,null,2)
	
	const removeRoute = router.addRoute(addRoute[0])
	
}
function goToPage(){
	router.push({
		name:baseFormData.enterPage,
		params:{
			list:baseFormData.auth.join('_')
		}
	})
}

onBeforeRouteLeave((to,from)=>{
	if(to.navType === `back` && to.path === `/`){
		const status = router.removeRoute(`dynamicAuth`);
		console.log(`路由表 -- dynamicAuth -- 删除结果：${status}`)
	}
})
</script>
