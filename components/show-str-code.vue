<template>
	<view style="width: 100%;">
		// #ifdef MP
		<div class="previewCodeBox pre" style="min-height: 200rpx;">
			<text>{{ routesStr.replace(/\n(\s*)/g,(t,$1)=>(t+`&nbsp;`.repeat($1.length))) }}</text>
		</div>
		// #endif
		
		
		// #ifndef MP
		<pre class="previewCodeBox pre" style="min-height: 200rpx;">{{routesStr}}</pre>
		// #endif
	</view>
</template>

<script>
	import {ref,watch,toRefs} from 'vue'
export default {
	props:{
		json:{
			type:[Object,String],
			default:function(){
				return {}
			}
		}
	},
	setup(props){
		const {json:propJson} = toRefs(props);
		const routesStr = ref('')
		
		watch(propJson,()=>{
			if(typeof propJson.value === `string`){
				routesStr.value = propJson.value
			}else{
				routesStr.value = JSON.stringify(propJson.value,null,2)
			}
		},{
			immediate:true
		})
		
		return {
			routesStr
		}
	}
}
</script>