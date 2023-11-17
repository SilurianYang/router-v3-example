<template>
	<view class="container">
		<uni-forms>
			<uni-forms-item label="跳转时间" name="name" label-width="130">
				<uni-easyinput type="number" v-model="transformPage.animationDuration" />
			</uni-forms-item>
		</uni-forms>
		<button @click="goToPage( randomAnimation() )">跳页面+随机动画</button>
	</view>
</template>

<script setup>
import {useRouter} from '@/uni-simple-router'
import { reactive } from "vue";

const router = useRouter();
const transformPage = reactive({
	name:`issues_13bug_child`,
	animationDuration: 300
});
const pageAnimationList = [
	'slide-in-right',
	'slide-in-left',
	'slide-in-top',
	'slide-in-bottom',
	'pop-in',
	'fade-in',
	'zoom-out',
	'zoom-fade-out',
	'none'
]

function randomAnimation(){
	const index = parseInt( Math.random() * pageAnimationList.length );
	return {
		animationType : pageAnimationList[index],
		...transformPage,
	}
}

function goToPage(option){
	router.push(option)
}
</script>

