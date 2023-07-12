<template>
	<view class="content">
        <h1>myTest2</h1>
        <div class="box">
            <uniSimpleRouterView :name="name"></uniSimpleRouterView>
        </div>
	</view>
</template>

<script>
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

	export default {
		data() {
			return {
				title: 'myTest2',
                name:`myTest3`
			}
		},
        setup(...args) {
            // console.log(args);
            // const me = getCurrentInstance()
            // console.log(me)

            onBeforeMount(() => {
                console.log('+++++++ myTest2 + onBeforeMount +++++++')
            })
            onMounted(() => {
                console.log('+++++++ myTest2 + onMounted +++++++')
            })
            onBeforeUpdate(() => {
                console.log('+++++++ myTest2 + onBeforeUpdate +++++++')
            })
            onUpdated(() => {
                console.log('+++++++ myTest2 + onUpdated +++++++')
            })
            onBeforeUnmount(() => {
                console.log('+++++++ myTest2 + onBeforeUnmount +++++++')
            })
            onUnmounted(() => {
                console.log('+++++++ myTest2 + onUnmounted +++++++')
            })
        },
        beforeCreate(){
            console.log(`---- myTest2 + components + beforeCreate ---- `)
        },
        created(){
            console.log(`---- myTest2 + components + created ---- `)
        },
        beforeMount(){
            console.log(`---- myTest2 + components + beforeMount ---- `)
        },
        mounted(){
            console.log(`---- myTest2 + components + mounted ---- `)
        },
        beforeUpdate(){
            console.log(`---- myTest2 + components + beforeUpdate ---- `)
        },
        updated(){
            console.log(`---- myTest2 + components + updated ---- `)
        },
        unmounted(){
            console.log(`---- myTest2 + components + unmounted ---- `)
        },
        beforeUnmount(){
            console.log(`---- myTest2 + components + beforeUnmount ---- `)
        },



		methods: {

		}
	}
</script>

<style>
.box{
    width: 30vw;
    height: 20vh;
    background-color: #f00;
    overflow: auto;
}
</style>
