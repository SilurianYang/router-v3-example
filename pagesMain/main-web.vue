<template>
	<view>
		<h1>main-web.vue</h1>
		<div class="paramsBox">
			params：{{ JSON.stringify($Route.params) }}
			query：{{ JSON.stringify($Route.query) }}
		</div>
		<a href="javaScript:" @click="gotopage({
			name:`main-web-child`,
			query:{
				str:`test`
			},
			params:{
				id:666,
				name:`main-web-child`
			}
		})">去name为 main-web-child </a>
		<simple-router-view viewName="main-web-default" class="simple-router-view"></simple-router-view>
	</view>
</template>

<script>
	import {buildLifeCycle} from '@/utils/hook.js'
	const { optionHooks,positionHooks } = buildLifeCycle(`main-web`)
	
	import {useRouter,useRoute,onBeforeRouteLeave} from '@/uni-simple-router'
	
	export default {
		...optionHooks,
		props:[`id`],
		setup(props){
			
			positionHooks();
			const router = useRouter();
			const route = useRoute()
			
			function gotopage(options){
				router.push(options)
			}
			return {
				gotopage
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.paramsBox{
	border-radius: 2px;
	border: 1px solid #000;
	padding: 20rpx;
	min-height: 50px;
}
</style>
