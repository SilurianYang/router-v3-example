<template>
	<view class="container">
		<uni-forms>
			<uni-forms-item label="跳转时间" name="name" label-width="130">
				<uni-easyinput type="number" v-model="animationDuration" />
			</uni-forms-item>
		</uni-forms>
		<button @click="back">返回页面+自定义动画</button>
	</view>
</template>

<script setup>
import {useRouter} from '@/uni-simple-router'
import {ref} from 'vue'

const router = useRouter();

const animationDuration =  ref(300)
const pageAnimationList = [
	'slide-out-right',
	'slide-out-left',
	'slide-out-top',
	'slide-out-bottom',
	'pop-out',
	'fade-out',
	'zoom-in',
	'zoom-fade-in',
	'none'
]

function randomAnimation(){
	const index = parseInt( Math.random() * pageAnimationList.length );
	return pageAnimationList[index]
}

function back(){
	router.back({
		delta: 1,
		animationType:randomAnimation(),
		animationDuration:+(animationDuration.value),
	}).then(res=>{
		console.log(res)
		console.log(`返回成功`)
	});
}
</script>