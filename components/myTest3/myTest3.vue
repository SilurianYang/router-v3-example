<template>
	<view class="content">
        <h1>myTest3</h1>
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
				title: 'myTest3',
			}
		},
        setup(...args) {
            // console.log(args);
            // const me = getCurrentInstance()
            // console.log(me)

            onBeforeMount(() => {
                console.log('+++++++ myTest3 + onBeforeMount +++++++')
            })
            onMounted(() => {
                console.log('+++++++ myTest3 + onMounted +++++++')
            })
            onBeforeUpdate(() => {
                console.log('+++++++ myTest3 + onBeforeUpdate +++++++')
            })
            onUpdated(() => {
                console.log('+++++++ myTest3 + onUpdated +++++++')
            })
            onBeforeUnmount(() => {
                console.log('+++++++ myTest3 + onBeforeUnmount +++++++')
            })
            onUnmounted(() => {
                console.log('+++++++ myTest3 + onUnmounted +++++++')
            })
        },
        beforeCreate(){
            console.log(`---- myTest3 + components + beforeCreate ---- `)
        },
        created(){
            console.log(`---- myTest3 + components + created ---- `)
        },
        beforeMount(){
            console.log(`---- myTest3 + components + beforeMount ---- `)
        },
        mounted(){
            console.log(`---- myTest3 + components + mounted ---- `)
        },
        beforeUpdate(){
            console.log(`---- myTest3 + components + beforeUpdate ---- `)
        },
        updated(){
            console.log(`---- myTest3 + components + updated ---- `)
        },
        unmounted(){
            console.log(`---- myTest3 + components + unmounted ---- `)
        },
        beforeUnmount(){
            console.log(`---- myTest3 + components + beforeUnmount ---- `)
        },
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
