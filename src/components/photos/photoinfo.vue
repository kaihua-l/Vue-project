<template>
	<div class="photoinfo-continer">
		<h3>{{imginfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间:{{imginfo.add_time | dataFormat}}</span>
			<span>点击：{{imginfo.click}}次</span>
		</p>
		<hr>
		<!-- 缩略图 -->
		<vue-preview :slides="slide1" @close="handleClose"></vue-preview>
		<!-- 图片内容区域 -->
		<div class="content" v-html="imginfo.content"></div>

		<!-- 评论子组件 -->
		<comment :id="id"></comment>
	</div>

</template>
<script>
	export default {
		data(){
			return {
				id:this.$route.params.id,
				imginfo:{},
				slide1:[]
			}
		},
		methods:{
			getImageInfo(){
				this.$http.get('api/getimageInfo/'+this.id).then(res=>{
					if(res.body.status == 0){
						this.imginfo = res.body.message[0];
					}
				})
			},
			handleClose () {
        		console.log('close event')
        	}
		},
		created(){
			this.getImageInfo()

			this.$http.get('api/getthumimages/'+this.id).then(res=>{
					if(res.body.status == 0){
						res.body.message.forEach((item,i)=>{
							this.slide1.push({
								src: item.src,
					            msrc: item.src,
					            alt: 'picture'+i,
					            title: 'Image Caption '+i,
					            w: 600,
					            h: 600
							})
						})
					}
				})
		}
	}
</script>
<style lang="less" scoped>
	.photoinfo-continer{
		padding: 3px;
		h3 {
			color:#26a2ff;
			font-size: 15px;
			text-align:center;
			margin: 15px 0;
		}
		.subtitle {
			display:flex;
			justify-content:space-between;
		}
		.content{
			font-size:13px;
			line-height: 30px;
		}
	}
</style>