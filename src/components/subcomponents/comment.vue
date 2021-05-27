<template>
	<div class="cmt-container">
		<h3>发表评论</h3>
		<hr>
		<textarea name="" id="" placeholder="请输入要BB的内容（最多120字）" maxlength="120" v-model="content"></textarea>
		<mt-button type="primary" size="large" @click="add">发表评论</mt-button>
		<div class="cmt-list">
			<div class="cmt-itme" v-for="(itme,i) in comments" :key="itme.add_time">
				<div class="cmt-title">
					第{{i+1}}楼&nbsp;&nbsp;用户：{{itme.user_name}}&nbsp;&nbsp;发表时间：{{itme.add_time | dataFormat}}
				</div>
				<div class="cmt-body">{{itme.content}}</div>
			</div>
		</div>
		<mt-button type="danger" size="large" plain @click="more">加载更多</mt-button>
	</div>
</template>
<script>
	import {Toast} from 'mint-ui';
	export default {
		data(){
			return {
				index:1,
				comments:[],
				content:''
			}
		},
		methods:{
			getComments(){
				this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.index).then(res=>{
					if(res.body.status == 0 ){
						this.comments = this.comments.concat(res.body.message)
					}else{
						
						Toast("获取评论失败")
					}
				})
			},
			more(){
				this.index++;
				this.getComments();
			},
			add(){
				if(this.content.length === 0) {
					return Toast('评论不能为空')
				}
				this.$http.post('api/postcomment/'+this.id,{content:this.content}).then(res=>{
					if(res.body.status == 0){
						var cmt = {
							user_name:"匿名用户",
							add_time:Date.now(),
							content:this.content
						}
						this.comments.unshift(cmt);
						this.content='';
					}else{
						Toast("评论失败")
					}
					
				})
			}
		},
		props:["id"],
		created(){
			this.getComments();
		}
	}

</script>
<style lang="less" scoped>
	.cmt-container{
		h3 {
			font-size: 18px;
		}
		textarea {
			font-size: 14px;
			height: 85px;
			margin: 0;
		}
		.cmt-list {
			margin: 6px 0;
			.cmt-itme{
				font-size: 13px;
				.cmt-title{
					line-height: 30px;
					background-color:#ccc;
				}
				.cmt-body{
					line-height: 35px;
					text-indent: 2em;
				}
			}
		}
	}
</style>