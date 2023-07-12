<template>
	<view class="container">
		<uni-section title="守卫列表及执行循序" type="line" class="margin-bottom-sm">
			<uni-list-item @click="goToPage({
				name:`beforeRouteLeave`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="组件离开时 beforeRouteLeave" />
			
			<uni-list-item @click="goToPage({
				name:`beforeEach`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="全局导航发生变化 beforeEach" />
			
			<uni-list-item @click="goToPage({
				name:`beforeRouteUpdate`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="导航发生变化但重用组件 beforeRouteUpdate" />
		
			<uni-list-item @click="goToPage({
				name:`beforeEnter`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="路由表匹配成功准备进入时 beforeEnter" />
			
			<uni-list-item @click="goToPage({
				name:`beforeRouteEnter`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="组件已加载完成准备挂载 beforeRouteEnter" />
			
			<uni-list-item @click="goToPage({
				name:`beforeResolve`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="全局导航已被确认 beforeResolve" />
			
			<uni-list-item @click="goToPage({
				name:`afterEach`
			})" :show-extra-icon="true" showArrow :clickable="true" :extra-icon="extraIcon" title="全局导航已完成 afterEach" />
		
		</uni-section>
	</view>
</template>

<script setup>
import { reactive } from "vue";
import {
	useRouter,
	useRoute,
} from '@/uni-simple-router'
const router = useRouter();

const extraIcon = reactive({
	color: '#4cd964',
	size: '22',
	type: 'gear-filled'
})

function goToPage(option){
	router.push(option)
}
</script>

<style lang="stylus">

</style>
