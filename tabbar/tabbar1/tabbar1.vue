<template>
	<view class="container">
		<uni-section title="先睹为快" type="line" class="margin-bottom-sm">
			<uni-list-item @click="goToPage({
				name:`customTabbarHome`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="嵌套视图 + 自定义tabbar" />
			
			<uni-list-item @click="goToPage({
				name:`nvueIndex`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="全局注入 + 完美兼容nvue" />
			
			<uni-list-item @click="goToPage({
				name:`params`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="参数传递 + 自动解析" />
		
			<uni-list-item @click="goToPage({
				name:`dynamicAddRoue`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="动态路由 + 权限路由认证" />
			
			<uni-list-item @click="goToPage({
				name:`unlimitNesting`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="动态路由 + 无限嵌套视图" />
			
			<uni-list-item @click="goToPage({
				name:`animationNestingChild1`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="嵌套视图 + 过渡动画" />
			
			<uni-list-item @click="goToPage({
				name:`redirectRoutes`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="路由表构建 + 重定向配置" />

			<uni-list-item @click="goToPage({
				name:`guardOverview`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="路由守卫 + 群雄并起" />
			
			<uni-list-item @click="goToPage({
				name:`redirectRoutes`,
			},`replaceAll`)" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="关闭所有页面+没有小房子" />
			
			<uni-list-item @click="goToPage({
				name:`fixbugList`,
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="修复问题 + BUG集合" />
		
		</uni-section>
		<my-route-watch/>
		<simple-router-view defClass="tabbar1"/>
	</view>
</template>

<script>
	import {
		useRouter,
		useRoute,
		onBeforeRouteUpdate,
		onBeforeRouteLeave
	} from '@/uni-simple-router'
	import{
		getCurrentInstance
	} from 'vue'
	import { onShow,onHide,onUnload,onLoad,onPageScroll  } from '@dcloudio/uni-app'
	
	
	export default {
		data() {
			return {
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				}
			}
		},
		setup() {
			const route = useRoute()
			const router = useRouter();
			
			const asdas = getCurrentInstance();
			console.log(asdas);
			
			
			function goToPage(option,navType=`push`){
				router[navType](option)
			}
			
			
			onBeforeRouteUpdate((to, from)=>{
				console.warn(`组合api ++++ /tabbar/tabbar1/tabbar1 ---页面 onBeforeRouteUpdate 守卫发生变化`)
			})
			onBeforeRouteLeave((to, from)=>{
				console.warn(`组合api ++++ /tabbar/tabbar1/tabbar1 ---页面 beforeRouteLeave 守卫发生变化`)
			})
			
			onShow(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar1/tabbar1 --- onShow`)
			})
			onHide(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar1/tabbar1 --- onHide`)
			})
			onLoad(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar1/tabbar1 --- onLoad`)
			})
			onUnload(()=>{
				console.warn(`组合api ++++ /tabbar/tabbar1/tabbar1 --- onUnload`)
			})
			onPageScroll((e)=>{
				console.log(` 组合api ++++ /tabbar/tabbar1/tabbar1 开始滚动：${e.scrollTop} `)
			})
			
			return {
				goToPage,
				setup666666:1
			}
		},
		onShow(){
			console.log(this)
			console.error(`选项api ++++ /tabbar/tabbar1/tabbar1 --- onShow`)
		},
		onHide(){
			console.error(`选项api ++++ /tabbar/tabbar1/tabbar1 --- onHide`)
		},
		onLoad(){
			console.error(`选项api ++++ /tabbar/tabbar1/tabbar1 --- onLoad`)
		},
		
		beforeRouteEnter(to, from) {
					  console.error(`选项api ++++ /tabbar/tabbar1/tabbar1 ---页面 beforeRouteEnter 守卫发生变化`)
		},
		  beforeRouteUpdate(to, from) {
						console.error(`选项api ++++ /tabbar/tabbar1/tabbar1 ---页面 beforeRouteUpdate 守卫发生变化`)
		  },
		  beforeRouteLeave(to, from) {
						console.error(`选项api ++++ /tabbar/tabbar1/tabbar1 ---页面 beforeRouteLeave 守卫发生变化`)
		  },
		  methods:{
			  fsaasasdas(){},
			  aaaaaaaa(){}
		  }
	}
</script>

<style>

</style>