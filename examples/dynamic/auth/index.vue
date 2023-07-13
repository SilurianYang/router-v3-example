<template>
	<view class="container authIndexConent">
		<my-route-watch/>
		
		<uni-section title="页面提示信息" type="line" class="margin-bottom-sm margin-top-sm">
			<div class="container noPaddingTop">
				<div class="topContent">
					<div>1. 当前为嵌套视图加权限路由</div>
					<div>2. 左侧菜单根据动态添加的路由表生成</div>
					<div>3. 点击菜单将内容渲染到右侧内容框中</div>
					<div>4. 权限菜单由上一级页面选中并添加</div>
					<div>5. 适用与身份权限菜单及动态路由匹配等</div>
				</div>
				<div class="content">
					<div class="leftContent">
						<div class="list">
							<div 
								class="item" 
								v-for="(it,i) in leftMenus" :key="i"
								:class="{'active':i==0}"
							>
								<u-button 
									:type="it.class" 
									:plain="true"
									:disabled="displayName === it.name"
									class="my-btn-style"
									@click="goToPage(it)"
								>
									<uni-icons 
										type="location" 
										size="20" 
										v-if="displayName === it.name"
										color="#f00"
									></uni-icons>
									{{it.showName}}
								</u-button>
							</div>
						</div>
					</div>
					<div class="rightContent">
						<simple-router-view></simple-router-view>
					</div>
				</div>
			</div>
		</uni-section>
	</view>
</template>

<script setup>
import {dynamicRoutes} from '~@/router/routes/dynamic-addRoue.js'
import {
	useRouter,
	useRoute
} from '@/uni-simple-router'
import { computed } from "vue";
const router = useRouter();
const route = useRoute();

const displayName = computed(()=>route.value.name)

const {params,meta} =  route.value
const listParams = params.list
const leftMenus = listParams.split(`_`).map(it=>{
	for(const route of dynamicRoutes[0].children){
		if(it === route.name){
			return {
				name:route.name,
				...route.meta
			}
		}
	}
})
function goToPage(it){
	router.replace({
		name:it.name,
		params:{
			list:listParams
		}
	})
}

</script>

