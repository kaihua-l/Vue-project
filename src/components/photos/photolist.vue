<template>
	<div>
		<div class="mui-content">
			<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			    <div class="mui-scroll">
			        <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in imgcategory" :key="item.id" @click="getImages(item.id)">
			            {{item.title}}
			        </a>
			    </div>
			</div>
		</div>
		<ul>
		  <router-link v-for="item in images" :key="item.id" :to="'/home/photolist/'+item.id" tag="li" >
		    <img v-lazy="item.img_url">
		    <div class="info">
		    	<h1 class="info-title">{{item.title}}</h1>
		    	<div class="info-body">{{item.zhaiyao}}</div>
		    </div>
		  </router-link>
		</ul>
	</div>
</template>
<script>
	import mui from '../../lib/mui/js/mui.min.js';
	import {Toast} from 'mint-ui';
	export default {
		data(){
			return{
				imgcategory:[],
				images:[]
			}
		},
		mounted(){
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
				bounce: true ,//滚动条是否有弹力默认是true
			});
		},
		methods:{
			getImgcategory(){
				this.$http.get('api/getimgcategory').then(res=>{
					if(res.body.status === 0){

						this.imgcategory = res.body.message;
						this.imgcategory.unshift({title:'全部',id:0})
					}else{
						Toast('获取失败')
					}
				})
			},
			getImages(id){
				this.$http.get('api/getimages/'+id).then(res=>{
					if(res.body.status === 0){
						this.images = res.body.message;
					}else{
						Toast('获取失败')
					}
				})
			}
		},
		created(){
			this.getImgcategory()
			this.getImages(0);
		}
	}
</script>
<style lang="less" scoped>
	* {
		touch-action:pan-y;
		ul{
			margin: 0;
			padding:10px 10px;
			padding-bottom: 0;
		
			li{	
				margin: 0;
				padding: 0;
				background-color: #ccc;
				margin-bottom: 10px;
				list-style: none;
				text-align:center;
				position: relative;
				img{
					width: 100%;
					box-shadow:  1px 1px 5px 2px #999599;
					vertical-align: middle;
				}
				img[lazy="loading"] {
				  width: 40px;
				  height: 300px;
				  margin: auto;
				}
				.info{
					overflow:hidden;
					max-height: 84px;
					color:#fff;
					text-align:left;
					position: absolute;
					bottom:0;
					background-color:#0c0c0c66;
					.info-title{
						font-size: 14px;
					}
					.info-body{
						font-size: 13px;
					}
				}
			}
		}
	}
</style>

