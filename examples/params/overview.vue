<template>
	<view class="container">
		<my-route-watch />
		<uni-section title="通过插件的方式获取" type="line" class="margin-bottom-sm margin-top-sm">
			<div class="container noPaddingTop">
				// #ifdef MP
				<div class="previewCodeBox pre" style="min-height: 200rpx;">
					<text>{{ routeQueryStr.replace(/\n(\s*)/g,(t,$1)=>(t+`&nbsp;`.repeat($1.length))) }}</text>
				</div>
				// #endif
				
				// #ifndef MP
				<pre class="previewCodeBox pre">{{routeQueryStr}}</pre>
				// #endif
			</div>
		</uni-section>
		<uni-section title="通过onLoad的方式获取" type="line" class="margin-bottom-sm">
			<div class="container noPaddingTop">
				// #ifdef MP
				<div class="previewCodeBox pre" style="min-height: 200rpx;">
					<text>{{ onLoadOptionStr.replace(/\n(\s*)/g,(t,$1)=>(t+`&nbsp;`.repeat($1.length))) }}</text>
				</div>
				// #endif
				
				
				// #ifndef MP
				<pre class="previewCodeBox pre">{{onLoadOptionStr}}</pre>
				// #endif
			</div>
		</uni-section>
	</view>
</template>

<script setup>
import { onLoad} from '@dcloudio/uni-app'
import {useRouter,useRoute} from '@/uni-simple-router';
import {ref} from 'vue'

const route = useRoute()

const onLoadOptionStr = ref('')
const routeQueryStr = ref(
	JSON.stringify({
		query:route.value.query,
		params:route.value.params,
	}, null, 2)
)

onLoad((option)=>{
	onLoadOptionStr.value = JSON.stringify(option, null, 2);
})
</script>

<style lang="stylus">

</style>
