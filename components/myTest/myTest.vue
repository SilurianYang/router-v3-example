<template>
	<view class="content">
        <h1>{{ title }}</h1>
        <div>count:{{ count }}</div>
        <button @click="count++">加一个</button>

        <button @click="goToPage">去myTest2页面</button>

        <div class="box" v-for="(item,index) in 5"> {{ item }} </div>
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
				title: 'myTest',
                count:1
			}
		},
        setup(...args) {
            // console.log(args);
            // const me = getCurrentInstance()
            // console.log(me)

            onBeforeMount(() => {
                console.log('+++++++ myTest + onBeforeMount +++++++')
            })
            onMounted(() => {
                console.log('+++++++ myTest + onMounted +++++++')
            })
            onBeforeUpdate(() => {
                console.log('+++++++ myTest + onBeforeUpdate +++++++')
            })
            onUpdated(() => {
                console.log('+++++++ myTest + onUpdated +++++++')
            })
            onBeforeUnmount(() => {
                console.log('+++++++ myTest + onBeforeUnmount +++++++')
            })
            onUnmounted(() => {
                console.log('+++++++ myTest + onUnmounted +++++++')
            })
        },
        beforeCreate(){
            console.log(`---- myTest + components + beforeCreate ---- `)
        },
        created(){
            console.log(`---- myTest + components + created ---- `)
        },
        beforeMount(){
            console.log(`---- myTest + components + beforeMount ---- `)
        },
        mounted(){
            console.log(`---- myTest + components + mounted ---- `)
        },
        beforeUpdate(){
            console.log(`---- myTest + components + beforeUpdate ---- `)
        },
        updated(){
            console.log(`---- myTest + components + updated ---- `)
        },
        unmounted(){
            console.log(`---- myTest + components + unmounted ---- `)
        },
        beforeUnmount(){
            console.log(`---- myTest + components + beforeUnmount ---- `)
        },



		methods: {
            goToPage(url){
                this.$router.push(`/myTest/myTest2`)
			}
		}
	}
</script>

<style>
.box{
    width: 100vw;
    height: 200px;
    margin-bottom: 10px;
    background-color: #ccc;
}
</style>
