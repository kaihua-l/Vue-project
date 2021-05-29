<template>
	<div class="goods-info">
		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter">
			<div class="ball" v-show="ballFlag" ref="ball"></div>
		</transition>		

		<div class="mui-card">
			<div class="mui-card-content">
				<swiper :potosList = "goodsLunboList" :isfull="false"></swiper>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-header">{{getinfo.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价：<del>￥{{getinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{getinfo.sell_price}}</span>
					</p>
					<p>
						购买数量：  <numbox @fun="getNumber" :spid="id" :maxNum = "getinfo.stock_quantity"></numbox>
					</p>
					<p>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
					</p>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品编号：{{getinfo.goods_no}}</p>
					<p>库存情况：{{getinfo.stock_quantity}} 件</p>
					<p>上架时间：{{getinfo.add_time | dataFormat}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain @click="toDesc">
				图文介绍</mt-button>
				<mt-button type="danger" size="large" plain @click="toComment">商品评论</mt-button>
			</div>
		</div>
	</div>
</template>
<script>
	import mui from '../../lib/mui/js/mui.min.js';
	import numbox from '../subcomponents/numbox.vue';
	export default {
		data(){
			return{
				id:this.$route.params.id,
				goodsLunboList:[],
				getinfo:{},
				ballFlag:false,
				boxNumber:1	
			}
		},
		methods:{
			getNumber(data){
				this.boxNumber = data;
			},
			getGoodsLunbo(id){
				this.$http.get('api/getthumimages/'+id).then(res=>{
					if(res.body.status == 0){
						this.goodsLunboList = res.body.message
					}
				})
			},
			getInfo(id){
				this.$http.get('api/goods/getinfo/'+id).then(res=>{
					this.getinfo = res.body.message[0]
				})
			},
			toDesc(){
				this.$router.push({name:'goodsdesc',id:this.id})
			},
			toComment(){
				this.$router.push({name:'goodscomment',id:this.id})
			},
			addToShopCar(){
				this.ballFlag = !this.ballFlag
				var obj = {
						id:this.id,
						count:this.boxNumber,
						price:this.getinfo.sell_price,
						selected:true
					}

				this.$store.commit('pushCar',obj);
			},
			beforeEnter(el){
				el.style.transform = "translate(0,0)";
			},
			enter(el,done){

				const ballFosition = this.$refs.ball.getBoundingClientRect();
				const badgeFosition = document.getElementById('badge').getBoundingClientRect();
				el.offsetWidth;
				el.style.transform = "translate("+(badgeFosition.left-ballFosition.left)+"px,"+(badgeFosition.top-ballFosition.top)+"px)";
				el.style.transition = "all 0.5s cubic-bezier(.21,-0.5,.8,.36)"
				done();
			},
			afterEnter(el){
				this.ballFlag = !this.ballFlag

			}
		},
		created(){
			this.getGoodsLunbo(this.id);
			this.getInfo(this.id);
		},
		mounted(){
			mui('.mui-numbox').numbox()
		},
		components:{
			numbox,
		}
	}
</script>
<style lang="less" scoped>
	.goods-info{
		background-color:#eee;
		overflow:hidden;
		.ball{
			width: 15px;
			height:15px;
			border-radius:50%;
			background-color:red;
			position: absolute;
			z-index: 999;
			top: 373px;
			left:153px;
		}
		.now_price{
			color:red;
			font-size: 16px;
			font-weight: 600;
			.mui-numbox {

				display: inline-block;
			}
		}
		.mui-card-footer{
			display:block;
			button{
				margin: 15px 0;
			}
		}
		.mui-numbox{
			height:25px;
		}
	}
	
</style>