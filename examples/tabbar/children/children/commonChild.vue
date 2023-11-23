<template>
	<view class="container">
		<view class="cu-bar bg-black">
			<view class="action" @click="$Router.back()">
				<text class="cuIcon-back text-gray"></text> 返回
			</view>
		</view>
		
		<div class="cu-list menu sm-border card-menu margin-top">
			<h2>{{pageTitle}}</h2>
		</div>
		
	</view>
</template>

<!-- <script setup>
import {computed, ref,onBeforeUpdate,onMounted,onBeforeUnmount} from 'vue'
import {useRouter,useRoute,onBeforeRouteUpdate,onBeforeRouteLeave} from '@/uni-simple-router'

onMounted(()=>{
	console.warn(`合api ++++ customTabbar/home/commonChild ++++ onMounted`)
})
onBeforeUnmount(()=>{
	console.warn(`组合api ++++ customTabbar/home/commonChild ++++ onBeforeUnmount`)
})
onBeforeUpdate(()=>{
	console.warn(`组合api ++++ customTabbar/home/commonChild ++++ onBeforeUpdate`)
})

const route = useRoute();
const router = useRouter();
const pageTitle = ref(`${route.value.query.parent} - commonChild`)

onBeforeRouteUpdate((to, from)=>{
	console.warn(`组合api ++++ customTabbar/home/commonChild ---页面 onBeforeRouteUpdate 守卫发生变化`)
})

onBeforeRouteLeave((to, from)=>{
	console.warn(`组合api ++++ customTabbar/home/commonChild ---页面 beforeRouteLeave 守卫发生变化`)
	return new Promise(resolve=>{
		if(to.navType === `back`){
			return resolve(true)
		}
		if(from.navType === `push`){
			uni.showModal({
				title: '拦截提示',
				content: `push进入的该页面，只能返回操作`,
				confirmText:`返回`,
				success: ({confirm}) => {
					if(!confirm){
						uni.showToast({
							title: `你取消了本次导航`,
						    icon:`none`,
							duration: 1000
						});
						return resolve(false)
					}
					resolve({
						...to,
						navType:`back`
					})
				}
			});
		}else{
			return resolve(true)
		}
	})
})

</script>
 -->
 
 <script>
	 export default {
		 data(){
			 return {
				 dataInfo:1111,
				 pageTitle:`home - commonChild`
			 }
		 },
		 beforeRouteLeave(to,from){
			 console.log(this)
			 return new Promise(resolve=>{
			 	if(to.navType === `back`){
			 		return resolve(true)
			 	}
			 	if(from.navType === `push`){
			 		uni.showModal({
			 			title: '拦截提示',
			 			content: `push进入的该页面，只能返回操作`,
			 			confirmText:`返回`,
			 			success: ({confirm}) => {
			 				if(!confirm){
			 					uni.showToast({
			 						title: `你取消了本次导航`,
			 					    icon:`none`,
			 						duration: 1000
			 					});
			 					return resolve(false)
			 				}
			 				resolve({
			 					...to,
			 					navType:`back`
			 				})
			 			}
			 		});
			 	}else{
			 		return resolve(true)
			 	}
			 })
		 }
	 }
 </script>
<style>

</style>
