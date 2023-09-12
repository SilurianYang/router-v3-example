<template>
	<view class="tabbarIndex tabbarIndexContent">
		<div class="container">
			<uni-section title="不会丢失的状态" type="line">
				<div class="padding-sm" style="padding-top: 0;">
					<u-subsection
						:list="list" 
						:current="1" 
						mode="subsection"
						activeColor="#39b54a"
						bgColor="#fff"
					></u-subsection>
				</div>
			</uni-section>
			<my-route-watch class="margin-top-sm" />
			<uni-section title="提示信息" type="line" class="margin-top-sm">
				<div class="container" style="padding-top: 0;">
					<p>1. 当tabbar切换时只会更新红框内的内容</p>
					<p>2. 通过simple-router-view实现子路由更新</p>
					<p>3. 观察路由变动区内容，得到更多细节</p>
				</div>
			</uni-section>
			
			<!--  #ifdef  MP -->
				<simple-router-view 
					defClass="router-view margin-top-sm customTabbar"
				></simple-router-view>
			<!-- #endif -->
			
			 <!-- #ifndef MP -->
				<div id="tabbarRouterView">
					<simple-router-view
						class="router-view margin-top-sm customTabbar"
					></simple-router-view>
				</div>
			 <!-- #endif -->
			 
		</div>
		
		<button @click="sdasdasdsa">测试</button>
		<view class="cu-bar tabbar bg-white">
			<view 
				class="action" 
				@click="changeTab(0)"
				:class="{'text-green':tabComputedIndex == 0,'text-gray':tabComputedIndex != 0}"
			>
				<view class="cuIcon-home"></view> 首页
			</view>
			<view
				class="action"
				@click="changeTab(1)"
				:class="{'text-green':tabComputedIndex == 1,'text-gray':tabComputedIndex != 1}"
			>
				<view class="cuIcon-similar"></view> 分类
			</view>
			<view 
				class="action add-action"
				@click="changeTab(2)"
				:class="{'text-green':tabComputedIndex == 2,'text-gray':tabComputedIndex != 2}"
			>
				<button class="cu-btn cuIcon-add shadow" :class="{'bg-green':tabComputedIndex == 2}"></button>
				发布
			</view>
			<view 
				class="action"
				@click="changeTab(3)"
				:class="{'text-green':tabComputedIndex == 3,'text-gray':tabComputedIndex != 3}"
			>
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				购物车
			</view>
			<view 
				class="action"
				@click="changeTab(4)"
				:class="{'text-green':tabComputedIndex == 4,'text-gray':tabComputedIndex != 4}"
			>
				<view class="cuIcon-my">
					<view class="cu-tag badge"></view>
				</view>
				我的
			</view>
		</view>
	</view>
</template>

<script>
import { ref,watch,computed,getCurrentInstance,onMounted,onBeforeUnmount,onBeforeUpdate,reactive} from "vue"
import {useRouter,useRoute,onBeforeRouteUpdate,onBeforeRouteLeave} from '@/uni-simple-router'
import {onReady,onShow,onHide,onUnload,onPageScroll} from '@dcloudio/uni-app'

	export default {
		data(){
			return {
				dadas:`是它吗？`
			}
		},
		onShow(){
			console.log(this)
			console.log(`选项api ++++ customTabbar ++++ onShow`)
		},
		onHide(){
			console.log(`选项api ++++ customTabbar ++++ onHide`)
		},
		onUnload(){
			console.log(`选项api ++++ customTabbar ++++ onUnload`)
		},
		onReady(){
			console.log(`选项api ++++ customTabbar ++++ onReady`)
		},
		setup(){
			const instance = getCurrentInstance();
			const router = useRouter()
			const route = useRoute();
			
			const list = reactive(['优雅的', '高效的', '快捷的'])
			
			onReady(()=>{
				console.warn(`组合api ++++ customTabbar ++++ onReady`)
			})
			onShow(()=>{
				console.warn(`组合api ++++ customTabbar ++++ onShow`)
			})
			onHide(()=>{
				console.warn(`组合api ++++ customTabbar ++++ onHide`)
			})
			onUnload(()=>{
				console.warn(`组合api ++++ customTabbar ++++ onUnload`)
			})
			
			const navToMap = {
				0:`customTabbarHome`,
				1:`customTabbarClass`,
				2:`customTabbarRelease`,
				3:`customTabbarNews`,
				4:`customTabbarMe`
			}
			
			const releaseNavToMap = {...Object.entries(navToMap).reduce((t,v)=>(t[v[1]]=v[0],t),{})}
			const tabActionIndex = ref(0)
			
			const tabComputedIndex =computed({
				get(){
					try{
						const matched = route.value.matched.filter(it=>releaseNavToMap[it.record.name])
						tabActionIndex.value = (
								matched[0]
									? releaseNavToMap[matched[0].record.name]
									: -1
							)
						return tabActionIndex.value
					}catch(e){
						console.error(route.value.matched)
						console.error(e)
					}
				},
				set(newValue){
					tabActionIndex.value = newValue        
				}
			})
			
			onBeforeRouteUpdate((to, from)=>{
				console.warn(`组合api ++++ customTabbar ---页面 onBeforeRouteUpdate 守卫发生变化`)
			})
			onBeforeRouteLeave((to, from)=>{
				console.warn(`组合api ++++ customTabbar ---页面 beforeRouteLeave 守卫发生变化`)
			})
			
			
			async function changeTab(index){
				if(index == tabComputedIndex.value){
					return false
				}
				console.log(`执行跳转：${navToMap[index]}`)
				const res = await router.replace({
					name:navToMap[index]
				}).then(()=>{
					tabComputedIndex.value = index
				}).catch(e=>{
					console.error(e)
				})
			}
			
			function sdasdasdsa(){
				router.push({
					name:`issues_8bug`
				})
			}
			
			return {
				tabComputedIndex,
				changeTab,
				list,
				sdasdasdsa
			}
		},
		beforeRouteEnter(to, from) {
			console.log(to, from)
					  console.error(`选项api ++++ customTabbar ---页面 beforeRouteEnter 守卫发生变化`)
		},
		  beforeRouteUpdate(to, from) {
			  console.log(to, from)
			  console.log(this)
						console.error(`选项api ++++ customTabbar ---页面 beforeRouteUpdate 守卫发生变化`)
		  },
		  beforeRouteLeave(to, from) {
			  console.log(this.dadas)
						console.error(`选项api ++++ customTabbar ---页面 beforeRouteLeave 守卫发生变化`)
		  },
	}
</script>