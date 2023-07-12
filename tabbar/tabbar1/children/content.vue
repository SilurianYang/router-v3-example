<template>
	<view>
		<h4>
			当前页面信息：{{ JSON.stringify(pageInfo) }}
		</h4>
	</view>
</template>

<script>
	import {
		useRouter,
		useRoute,
		onBeforeRouteUpdate,
		onBeforeRouteLeave
	} from '@/uni-simple-router'
	import {ref} from 'vue';
	export default {
		setup(){
			const router = useRouter();
			const route = useRoute();
			const { matched ,...otherRoute} = route
			
			const pageInfo = ref(otherRoute)
			return {
				pageInfo
			}
			
			onBeforeRouteUpdate((to,from)=>{
				console.log(to,from)
			})
			onBeforeRouteLeave((to,from)=>{
				debugger
			})
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
