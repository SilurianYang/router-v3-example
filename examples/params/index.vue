<template>
	<view class="container overviewContent">
		<my-route-watch />
		
		<uni-section title="参数的转递" type="line" class="margin-bottom-sm margin-top-sm">
			<uni-collapse  accordion v-model="accordionVal">
				<uni-collapse-item title="模仿URL传递基本参数" :show-animation="true">
					<view class="content container noPaddingTop">
						<uni-section title="源码展示" type="line" class="margin-bottom-sm noPaddingTop">
							<div style="padding-left: 20rpx;">
								<show-json-cont :json="case1Code"/>
							</div>
						</uni-section>
						
						<uni-section title="小试牛刀" type="line" class="margin-bottom-sm noPaddingTop">
							<uni-list>
								<uni-list-item
									title="模仿URL传递基本参数" 
									showArrow :clickable="true"
									:show-extra-icon="true"
									@click="goToPage({
										name:`paramsOverview`,
										query:{
											name:`hhyang`,
											msg:`uni-simple-router-v3好用`,
											id:10086,
											income:undefined,
											reward:null
										}
									})"
									:extra-icon="{
												color: '#4cd964',
												size: '22',
												type: 'gear-filled'
											}"
								></uni-list-item>	
							</uni-list>
						</uni-section>
					</view>
				</uni-collapse-item>
				
				<uni-collapse-item title="模仿URL传递特殊字符" :show-animation="true">
					<view class="content container noPaddingTop">
						<uni-section title="源码展示" type="line" class="margin-bottom-sm noPaddingTop">
							<div  style="padding-left: 20rpx;">
								<show-json-cont :json="case2Code"/>
							</div>
						</uni-section>
						
						<uni-section title="小试牛刀" type="line" class="margin-bottom-sm noPaddingTop">
							<uni-list>
								<uni-list-item
									title="模仿URL传递特殊字符" 
									showArrow :clickable="true"
									:show-extra-icon="true"
									@click="goToPage({
										name:`paramsOverview`,
										query:{
											tag:`%$#$#**#%&#W##$12321^`,
											num:999
										}
									})"
									:extra-icon="{
												color: '#4cd964',
												size: '22',
												type: 'gear-filled'
											}"
								></uni-list-item>	
							</uni-list>
						</uni-section>
					</view>
				</uni-collapse-item>
				
				<uni-collapse-item title="纯URL字符串传参" :show-animation="true">
					<view class="content container noPaddingTop">
						<uni-section title="源码展示" type="line" class="margin-bottom-sm noPaddingTop">
							<div style="padding-left: 20rpx;">
								<show-json-cont :json="case3Code"/>
							</div>
						</uni-section>
						
						<uni-section title="小试牛刀" type="line" class="margin-bottom-sm noPaddingTop">
							<uni-list>
								<uni-list-item
									title="纯URL字符串传参" 
									showArrow :clickable="true"
									:show-extra-icon="true"
									@click="goToPage(`/params/overview?id=4545&name=hhyang`)"
									:extra-icon="{
												color: '#4cd964',
												size: '22',
												type: 'gear-filled'
											}"
								></uni-list-item>	
							</uni-list>
						</uni-section>
					</view>
				</uni-collapse-item>
				
				<uni-collapse-item title="模仿URL传递深度对象参数" :show-animation="true">
					<view class="content container noPaddingTop">
						<uni-section title="源码展示" type="line" class="margin-bottom-sm noPaddingTop">
							<div style="padding-left: 20rpx;">
								<show-json-cont :json="case4Code"/>
							</div>
						</uni-section>
						
						<uni-section title="小试牛刀" type="line" class="margin-bottom-sm noPaddingTop">
							<uni-list>
								<uni-list-item
									title="模仿URL传递深度对象参数" 
									showArrow :clickable="true"
									:show-extra-icon="true"
									@click="goToPage({
										name:`paramsOverview`,
										query:{
											list:[{
												name:`hhyang1`,
												ages:20,
												msg:`深度对象1`,
												child:null
											}],
											object:{
												bibi:true,
												child:[{
													name:`childObject`
												}]
											},
											open:true,
										}
									})"
									:extra-icon="{
												color: '#4cd964',
												size: '22',
												type: 'gear-filled'
											}"
								></uni-list-item>	
							</uni-list>
						</uni-section>
					</view>
				</uni-collapse-item>
				
				<uni-collapse-item title="非URL完成动态路由匹配参数传参" :show-animation="true">
					<view class="content container noPaddingTop">
						<uni-section title="源码展示" type="line" class="margin-bottom-sm noPaddingTop">
							<div class="flex flex-direction" style="padding-left: 20rpx;">
								<div class="flex flex-direction margin-bottom-sm">
									<h4 class="margin-bottom-sm">1. 路由表</h4>
									<show-json-cont :json="case5Code_routes"/>
								</div>
								<div class="flex flex-direction">
									<h4 class="margin-bottom-sm">2. 跳转代码</h4>
									<show-json-cont :json="case5Code"/>
								</div>
							</div>
						</uni-section>
						
						<uni-section title="小试牛刀" type="line" class="margin-bottom-sm noPaddingTop">
							<uni-list>
								<uni-list-item
									title="动态路由匹配参数传参" 
									showArrow :clickable="true"
									:show-extra-icon="true"
									@click="goToPage({
										name:`paramsDynamicOverview`,
										params:{
											id:111,
											name:`abc`
										}
									})"
									:extra-icon="{
												color: '#4cd964',
												size: '22',
												type: 'gear-filled'
											}"
								></uni-list-item>	
							</uni-list>
						</uni-section>
					</view>
				</uni-collapse-item>
				
				<uni-collapse-item title="URL完成动态路由匹配参数传参" :show-animation="true">
					<view class="content container noPaddingTop">
						<uni-section title="源码展示" type="line" class="margin-bottom-sm noPaddingTop">
							<div class="flex flex-direction" style="padding-left: 20rpx;">
								<div class="flex flex-direction margin-bottom-sm">
									<h4 class="margin-bottom-sm">1. 路由表</h4>
									<show-json-cont :json="case5Code_routes"/>
								</div>
								<div class="flex flex-direction">
									<h4 class="margin-bottom-sm">2. 跳转代码</h4>
									<show-json-cont :json="case6Code"/>
								</div>
							</div>
						</uni-section>
						
						<uni-section title="小试牛刀" type="line" class="margin-bottom-sm noPaddingTop">
							<uni-list>
								<uni-list-item
									title="动态路由匹配参数传参" 
									showArrow :clickable="true"
									:show-extra-icon="true"
									@click="goToPage(`/params/dynamic/999/ccc`)"
									:extra-icon="{
												color: '#4cd964',
												size: '22',
												type: 'gear-filled'
											}"
								></uni-list-item>	
							</uni-list>
						</uni-section>
					</view>
				</uni-collapse-item>
				
				<uni-collapse-item title="URL参数与动态参数混搭" :show-animation="true">
					<view class="content container noPaddingTop">
						<uni-section title="源码展示" type="line" class="margin-bottom-sm noPaddingTop">
							<div class="flex flex-direction" style="padding-left: 20rpx;">
								<div class="flex flex-direction margin-bottom-sm">
									<h4 class="margin-bottom-sm">1. 路由表</h4>
									<show-json-cont :json="case5Code_routes"/>
								</div>
								<div class="flex flex-direction">
									<h4 class="margin-bottom-sm">2. 跳转代码</h4>
									<show-json-cont :json="case7Code"/>
								</div>
							</div>
						</uni-section>
						
						<uni-section title="小试牛刀" type="line" class="margin-bottom-sm noPaddingTop">
							<uni-list>
								<uni-list-item
									title="URL参数与动态参数混搭" 
									showArrow :clickable="true"
									:show-extra-icon="true"
									@click="goToPage({
										name:`paramsDynamicOverview`,
										query:{
											str:`这是url参数`
										},
										params:{
											id:333,
											name:`tfc`
										}
									})"
									:extra-icon="{
												color: '#4cd964',
												size: '22',
												type: 'gear-filled'
											}"
								></uni-list-item>	
							</uni-list>
						</uni-section>
					</view>
				</uni-collapse-item>
				
			</uni-collapse>
			
		</uni-section>
	</view>
</template>

<script setup>
import {useRouter} from '@/uni-simple-router'
import {ref} from 'vue'

const router = useRouter()
const accordionVal = ref(`0`)

const case1Code = ref({
	name:'paramsOverview',
	query:{
		name:'hhyang',
		msg:'uni-simple-router-v3好用',
		id:10086,
		income:undefined,
		reward:null
	}
})

const case2Code = ref({
	name:`paramsOverview`,
	query:{
		tag:`%$#$#**#%&#W##$12321^`,
		num:999
	}
})
const case3Code = ref({
	path:`/params/overview?id=4545&name=hhyang`
})

const case4Code = ref({
	name:`paramsOverview`,
	query:{
		list:[{
			name:`hhyang1`,
			ages:20,
			msg:`深度对象1`,
			child:null
		}],
		object:{
			bibi:true,
			child:[{
				name:`childObject`
			}]
		},
		open:true,
	}
})

const case5Code_routes =ref([
	{
		path:`/params/dynamic/:id(\\d{3})/:name([a-z]{3})`,
		name:`paramsDynamicOverview`,
		component:`overview.vue`
	}
])
const case5Code = ref({
	name:`paramsDynamicOverview`,
	params:{
		id:111,
		name:`abc`
	}
})
const case6Code =ref({
	path:`/params/dynamic/999/ccc`
})

const case7Code = ref({
	name:`paramsDynamicOverview`,
	query:{
		str:`这是url参数`
	},
	params:{
		id:333,
		name:`tfc`
	}
})

function goToPage(option){
	router.push(option)
}
	
function previewImage(url){
	uni.previewImage({
		urls: [url],
	});
}
</script>
