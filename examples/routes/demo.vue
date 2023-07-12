<template>
	<view class="container">
		<my-route-watch/>
		<uni-section title="跳转到该页的参数信息" type="line" class="margin-top-sm">
			<div class="container noPaddingTop">
				<pre class="previewCodeBox pre">{{routesStr}}</pre>
			</div>
		</uni-section>
	</view>
</template>

<script setup>
import {ref} from 'vue'
import {
	useRouter,
	useRoute,
} from '@/uni-simple-router'

const route = useRoute();

const routesStr = ref(JSON.stringify({
	query:route.value.query,
	params:route.value.params
},null,2));

</script>

<style>

</style>
