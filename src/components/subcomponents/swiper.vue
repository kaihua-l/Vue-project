<template>
	<mt-swipe :auto="4000">
	  <mt-swipe-item v-for="item in potosList" :key="item.id"><img :class="{isfull:isfull}" :src="item.img?item.img:item.src"></mt-swipe-item>
	</mt-swipe>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:['potosList','isfull']
	}
</script>
<style lang="less" scoped>
	.mint-swipe{
		height: 200px;
		text-align:center;
		img {

			height: 100%;
		}
	}
	.isfull{
		width: 100%;
	}
</style>