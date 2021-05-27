<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in lunbotuList" :key="item.id"><img :src="item.img"></mt-swipe-item>
		</mt-swipe>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		        <img src="/images/menu1.png">
		        <div class="mui-media-body">新闻咨询</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		        <img src="/images/menu2.png">
		        <div class="mui-media-body">图片分享</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		        <img src="/images/menu3.png">
		        <div class="mui-media-body">商品购买</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="/images/menu4.png">
		        <div class="mui-media-body">留言反馈</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="/images/menu5.png">
		        <div class="mui-media-body">视频专区</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="/images/menu6.png">
		        <div class="mui-media-body">联系我们</div></a></li>
		</ul>
		<h1>Home</h1>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default {
		data(){
			return {
				lunbotuList:[]
			}
		},
		methods:{
			getLunbotu(){
				this.$http.get('api/getlunbo').then(res=>{
					if(res.body.status == 0){
						this.lunbotuList = res.body.message

					}else{
						Toast({
							duration:2000,
							message: '网络错误',
							className:'mytoast'//自定义toast样式
						})
					}
				})
			}
		},
		created(){
			this.getLunbotu();
		}
	}

</script>
<style lang="less" scoped>
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe-item{
		&:nth-child(1){
			background-color: skyblue;
		}
		&:nth-child(2){
			background-color: yellow;
		}
		&:nth-child(3){
			background-color: pink;
		}
		img {
			width: 100%;
			height: 100%;
		}
	}
	.mui-grid-view.mui-grid-9 {
		background-color: #fff;
		border:0;
		img {
			width: 50%;
			height: 50%;
		}
		.mui-media-body {
			font-size: 13px;
		}
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border:0;
	}
	
</style>