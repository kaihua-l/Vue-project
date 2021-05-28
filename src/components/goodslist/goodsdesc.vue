<template>
	<div class="goods-desc">
		<h1>{{goodsdesc.title}}</h1>
		<hr>
		<p v-html="goodsdesc.content"></p>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				id:this.$route.params.id,
				goodsdesc:{}
			}
		},
		methods:{
			getDesc(){
				this.$http.get('api/goods/getdesc/'+this.id).then(res=>{
					if(res.body.status == 0){
						this.goodsdesc = res.body.message[0]
					}
				})
			}
		},
		created(){
			this.getDesc()
		}
	}
</script>
<style lang="less">
	.goods-desc{
		padding:5px;
		h1{	
			text-align: center;
			color:#26a2ff;
			font-size: 16px;
		}
		hr{
			border: 1px solid #ccc;
		}
		.gomeImgLoad{
			width: 100%;
		}
	}
</style>