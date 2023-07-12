import {
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted
} from 'vue'
import { 
	onReady,
	onLoad,
	onShow,
	onHide,
	onUnload,
	onPullDownRefresh,
	onPageScroll,
	onBackPress,
} from '@dcloudio/uni-app'

export function buildLifeCycle(name){
	return {
		positionHooks:()=>{
			onLoad(()=>{
				console.log(this)
				console.log(`组合式 API : ${name} - onload`)
			})
			onShow(()=>{
				if(name === `content`){
				}
				console.log(`组合式 API : ${name} - onShow`)
			})
			onHide(()=>{
				console.log(`组合式 API : ${name} - onHide`)
			})
			onReady(()=>{
				console.log(`组合式 API : ${name} - onReady`)
			})
			onUnload(()=>{
				console.log(`组合式 API : ${name} - onUnload`)
			})
			onPullDownRefresh(()=>{
				console.log(`组合式 API : ${name} - onPullDownRefresh`)
			})
			onPageScroll(()=>{
				console.log(`组合式 API : ${name} - onPageScroll`)
			})
			onBackPress(()=>{
				console.log(`组合式 API : ${name} - onBackPress`)
			})
			
			onBeforeMount(()=>{
				console.log(`组合式 API : ${name} - onBeforeMount `)
			})
			onMounted(()=>{
				console.log(`组合式 API : ${name} - onMounted `)
			})
			onBeforeUpdate(()=>{
				console.log(`组合式 API : ${name} - onBeforeUpdate `)
			})
			onUpdated(()=>{
				console.log(`组合式 API : ${name} - onUpdated `)
			})
			onBeforeUnmount(()=>{
				console.log(`组合式 API : ${name} - onBeforeUnmount `)
			})
			onUnmounted(()=>{
				console.log(`组合式 API : ${name} - onUnmounted `)
			})
			
		},
		optionHooks:{
			onLoad(){
				console.log(this)
				console.log(`选项 API : ${name} - onload`)
			},
			onShow(){
				console.log(`选项 API : ${name} - onShow`)
			},
			onHide(){
				console.log(`选项 API : ${name} - onHide`)
			},
			onReady(){
				console.log(`选项 API : ${name} - onReady`)
			},
			onUnload(){
				console.log(`选项 API : ${name} - onUnload`)
			},
			onPullDownRefresh(){
				console.log(`选项 API : ${name} - onPullDownRefresh`)
			},
			onPageScroll(){
				console.log(`选项 API : ${name} - onPageScroll`)
			},
			onBackPress(){
				console.log(`选项 API : ${name} - onBackPress`)
			},
			created(){
				console.log(`选项 API : ${name} - created`)
			},
			beforeCreate(){
			    console.log(`选项 API : ${name} - beforeCreate `)
			},
			beforeMount(){
			    console.log(`选项 API : ${name} - beforeMount `)
			},
			mounted(){
				console.log(`选项 API : ${name} - mounted `)
			},
			beforeUpdate(){
				console.log(`选项 API : ${name} - beforeUpdate `)
			},
			updated(){
				console.log(`选项 API : ${name} - updated `)
			},
			beforeUnmount(){
				console.log(`选项 API : ${name} - beforeUnmount `)
			},
			unmounted(){
				console.log(`选项 API : ${name} - unmounted `)
			},
		}
	}
}