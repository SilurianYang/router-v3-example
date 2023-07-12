<template>
	<view class="container">
		<uni-notice-bar single show-icon text="当前状态下需要按两次返回才能退出该页" v-if="isChildPath"/>
		<uni-forms ref="baseForm" :modelValue="baseFormData">
			<my-route-watch/>
			<uni-section title="请选择动画类型" type="line" class="margin-bottom-sm margin-top-sm">
				<div class="container noPaddingTop">
					<uni-forms-item label="类型" required class="noMarginBottom">
						<uni-data-checkbox 
							v-model="baseFormData.modeClass" 
							:localdata="modeClassList" 
							@change="checkboxChange"
						/>
					</uni-forms-item>
				</div>
			</uni-section>
			<uni-section title="子路由演示区域" type="line" class="margin-bottom-sm margin-top-sm">
				<uni-transition 
					ref="aniRef" 
					:show="show" 
				>
					<simple-router-view/>
				</uni-transition>
			</uni-section>
			
			<uni-section title="小试牛刀" type="line" class="">
				<div class="container noPaddingTop">
					<u-button type="success" :plain="true" @click="goToPage({name:`animationNestingChild1`})">push to animat child1</u-button>
					<u-button type="warning" class="margin-top-sm" :plain="true" @click="goToPage({name:`animationNestingChild2`})">push to animat child2</u-button>
				</div>
			</uni-section>
			
		</uni-forms>
	</view>
</template>

<script setup>
import { computed, nextTick, reactive,ref } from "vue";
import {
	useRouter,
	useRoute,
	onBeforeRouteLeave
} from '@/uni-simple-router'
import { onReady } from '@dcloudio/uni-app'
import {timeOut} from '~@/utils/index.js'
const router = useRouter();
const route = useRoute();

const aniRef = ref(null)
const isChildPath = computed(()=>/animationNestingChild\d/.test(route.value.name))
const show = ref(isChildPath.value)
const modeClass = ref(1)
const baseFormData = reactive({
	modeClass:modeClass.value
})
const modeClassList = reactive([
	{
		text: '底部淡入',
		value:1
	},
	{
		text: '左侧淡出',
		value:2
	},
	{
		text: '左侧淡入',
		value:3
	},
	{
		text: '右侧淡入',
		value:4
	},
	{
		text: '顶部淡入',
		value:5
	},
	{
		text: '底部淡出',
		value:6
	},
	{
		text: '右侧淡出',
		value:7
	},
	{
		text: '顶部淡出',
		value:8
	},
])

const animatMap={
	1:()=>{
		aniRef.value.step({
			opacity:0,
			translateY:1000
		},{
			duration:50
		})
		aniRef.value.step({
			opacity:1,
			translateY:0
		})
	},
	2:()=>{
		aniRef.value.step({
			opacity:1,
			translateX:0
		},{
			duration:10
		})
		aniRef.value.step({
			opacity:0,
			translateX:`-100%`
		},{
			timingFunction:`ease-in`
		})
	},
	3:()=>{
		aniRef.value.step({
			opacity:0,
			translateX:-1000
		},{
			duration:50
		})
		aniRef.value.step({
			opacity:1,
			translateX:0
		})
	},
	4:()=>{
		aniRef.value.step({
			opacity:0,
			translateX:1000
		},{
			duration:50
		})
		aniRef.value.step({
			opacity:1,
			translateX:0
		})
	},
	5:()=>{
		aniRef.value.step({
			opacity:0,
			translateY:-1000
		},{
			duration:50
		})
		aniRef.value.step({
			opacity:1,
			translateY:0
		})
	},
	6:()=>{
		aniRef.value.step({
			opacity:1,
			translateY:0
		},{
			duration:30
		})
		aniRef.value.step({
			opacity:0,
			translateY:1000
		},{
			timingFunction:`ease-in`
		})
	},
	7:()=>{
		aniRef.value.step({
			opacity:1,
			translateX:0
		},{
			duration:30
		})
		aniRef.value.step({
			opacity:0,
			translateX:`100%`
		},{
			timingFunction:`ease-in`
		})
	},
	8:()=>{
		aniRef.value.step({
			opacity:1,
			translateY:0
		},{
			duration:50
		})
		aniRef.value.step({
			opacity:0,
			translateY:-1000
		},{
			timingFunction:`ease-in`
		})
	},
}

onReady(()=>{
	// run();
})

async function resetStatus(){
	show.value = false
	await nextTick()
	show.value = true
}

async function checkboxChange(e){
	modeClass.value = e.detail.value
	resetStatus();
}

async function goToPage(option){
	if(route.value.name === option.name){
		return false
	}
	const type = modeClass.value
	animatMap[type]()
	// 开始执行动画
	aniRef.value.run(()=>{
		console.log('动画支持完毕')
	})
	router.replace(option)
}
</script>

<style>

</style>
