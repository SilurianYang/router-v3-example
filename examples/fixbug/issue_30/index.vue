<template>
	<view>
		<button @click="$Router.push({name:`issues_30bug_index_nvue`})">webview-nvue</button>
		<button @click="$Router.push({name:`issues_30bug_index_vue`})">webview-vue</button>
	</view>
</template>

<script>
	export default {
		onLoad(){
			console.log(`webview  - vue 版本`)
		},
		onBackPress(...to) {
			console.log(to)
		}
	}
	
</script>