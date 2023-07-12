<template>
	<view>
		<h3>当前时间 {{new Date().toLocaleTimeString()}}</h3>
		<h3>当前菜单位置信息：{{JSON.stringify(list[current])}}</h3>
		<u-tabbar v-model="current" :list="list" :mid-button="true" :hide-tab-bar="false"></u-tabbar>
	</view>
</template>

<script>
	import {buildLifeCycle} from '@/utils/hook.js'
import { defineComponent, createApp,getCurrentInstance, ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onActivated,
    onDeactivated
} from 'vue'
import {onShow, onHide} from '@dcloudio/uni-app'

	const { optionHooks,positionHooks } = buildLifeCycle(`tabbar`)
	export default {
		...optionHooks,
		data() {
			return {
				list: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						count: 2,
						isDot: true,
						customIcon: false,
					},
					{
						iconPath: "photo",
						selectedIconPath: "photo-fill",
						text: '放映厅',
						customIcon: false,
					},
					{
						iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
						text: '发布',
						midButton: true,
						customIcon: false,
					},
					{
						iconPath: "play-right",
						selectedIconPath: "play-right-fill",
						text: '直播',
						customIcon: false,
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						count: 23,
						isDot: false,
						customIcon: false,
					},
				],
				current: 0
			}
		},
        setup() {
			positionHooks();
        },
		methods: {

		}
	}
</script>

<style>

</style>