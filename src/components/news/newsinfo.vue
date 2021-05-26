<template>
	<div class="newsinfo-containter">
		<h3 class="title">{{newsinfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间：{{newsinfo.add_time | dataFormat}}</span>
			<span>点击：{{newsinfo.click}}次</span>
		</p>
		<hr>
		<div v-html="newsinfo.content" class="content"></div>
		<comment :id="id"></comment>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				id:this.$route.params.id,
				newsinfo:{}
			}
		},
		created(){
			this.$http.get('api/getnew/'+this.id).then(res=>{
				this.newsinfo = res.body.message[0];
			})
		}
	}
</script>
<style lang="less" scoped>
	.newsinfo-containter {
		padding: 0 4px;

		.title{
			margin:15px 0;
			text-align: center;
			font-size:16px;
			color:red;
		}
		.subtitle{
			display: flex;
			justify-content:space-between;
			color:#226aff;
		}
		.content {
			img {
				width: 100%;
			}
		}
	}
</style>