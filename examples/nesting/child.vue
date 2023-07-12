<template>
	<view class="container">
		<h3 class="margin-bottom-sm">child - nesting - {{depth}}</h3>
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
		
		<simple-router-view 
		// #ifdef MP
			:defStyle="style"
		// #endif
		
		// #ifndef MP
			:style="style"
		// #endif
		/>
	</view>
</template>

<script setup>
import {
	useRouter,
	useRoute,
} from '@/uni-simple-router'
import { reactive } from "vue";
const router = useRouter();
const route = useRoute();

const depth = route.value.params.depth

const list = reactive(['优雅的', '高效的', '快捷的'])
const style = reactive({
	border:`1px dashed ${randomRgbColor()}`
}) 

function randomRgbColor() { 
 var r = Math.floor(Math.random() * 256); 
 var g = Math.floor(Math.random() * 256); 
 var b = Math.floor(Math.random() * 256);
 return `rgb(${r},${g},${b})`; 
}

</script>

<style lang="stylus">
.container
	width: 100%
</style>
