import {
	createRouter,
	toIsNewWindow
} from '@/uni-simple-router'
import {routes} from './routes'
import {nextTick} from 'vue'
import {timeOut} from '~@/utils/index.js'

function androidQuitApp(){
	uni.showModal({
		title: '退出应用',
		content: `你确定要退出本应用？`,
		success:  ({confirm})=>{
			confirm && plus.runtime.quit();
		}
	});
}

/**
 * 是否开启随机动画
 */
const randomAnimation = true;

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	// hotRefresh:{
	// 	mode:process.env.NODE_ENV,
	// 	to:`/?id=6666`,
	// 	navType: process.env.VUE_APP_PLATFORM.includes(`mp-`) ? `pushTab` : `replaceAll`
	// },
	routeNotFound:(to)=>{
		return {
			name:`404`,
			navType:`push`
		}
	},
	applet:{
		launchedHook:()=>{
			console.log(`首页进入成功`)
		},
		hideHomeButton:true
	},
	app:{
		setSideSlipGesture:(to)=>{
			return `close`
		},
		runtimeQuit:androidQuitApp
	},
	h5:{
		animation:{
			includeNavtype:[`push`,`back`,`replace`],
			animationTime:0.3,
			animationAppEl:(to,from)=>{
				if(toIsNewWindow(to,from)){
					return document.querySelector(`#app`)
				}
				if(to.meta && to?.meta?.animationEl && to?.meta?.navType === to.navType){
					return document.querySelector(to.meta.animationEl)
				}
				return null
			},
			defaultAnimationType:(to)=>{
				let animationType = `animate__slideInRight`;
				if(randomAnimation){
					const animationNode = [
						`animate__slideInRight`,
						`animate__bounceInRight`,
						`animate__rotateInDownLeft`,
						`animate__zoomInDown`
					]
					animationType = animationNode[
						parseInt(
							Math.random()*animationNode.length
						)
					]
				}
				if(to?.meta?.animation && to?.meta?.navType === to.navType){
					animationType = to.meta.animation
				}
				return animationType
			},
			animationNodeMap:{
				'animate__slideInRight':[
				    // 前进
				    [`animate__slideInRight`,`animate__slideOutLeft`],
				    // 后退
				    [`animate__slideInLeft`,`animate__slideOutRight`],
				],
				'animate__bounceInRight':[
					// 前进
					[`animate__bounceInRight`,`animate__bounceOutLeft`],
					// 后退
					[`animate__bounceInLeft`,`animate__bounceOutRight`],
				],
				'animate__rotateInDownLeft':[
					// 前进
					[`animate__rotateInDownLeft`,`animate__rotateOutDownLeft`],
					// 后退
					[`animate__rotateInDownRight`,`animate__rotateOutDownRight`],
				],
				'animate__zoomInDown':[
					// 前进
					[`animate__zoomInDown`,`animate__zoomOutDown`],
					// 后退
					[`animate__zoomInUp`,`animate__zoomOutDown`],
				],
				// 给路由定义的动画
				'child_router_animate':[
					// 前进
					[`animate__slideInUp`]
				]
			}
		}
	},
	routes,
})
let appRunCount = 0
router.beforeEach(async (to,from)=>{
	console.error(`------- beforeEach守卫执行 ------`)
	// // #ifdef MP
	if(appRunCount === 0){
		await timeOut(2000)
	}
	appRunCount++
	// #endif
	
})

router.afterEach(async (to,from)=>{
	console.error(`++++++ afterEach守卫执行 +++++++`)
	console.log(router)
	if(to.meta && to.meta.title){
		// #ifdef H5
		await timeOut(1)
		// #endif
		uni.setNavigationBarTitle({
			title:to.meta.title
		})
	}
})

router.onError(e=>{
	console.log(e)
})

export default router