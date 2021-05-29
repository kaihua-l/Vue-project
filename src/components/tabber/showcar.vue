<template>
	<div class="showcar-continer">
		<div class="goods-list">
		<!-- 商品列表区域 -->
			<div class="mui-card" v-for="(item,i) in shoplist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="item.cou"><img :src="item.thumb_path"></mt-switch>
						<div class="info">
							<h1>{{item.title}}</h1>
							<p>
								<span class="pricr">{{item.sell_price}}</span>
								<shopcar :inpCou="$store.getters.getGoosCount[item.id]" :inpId="item.id"></shopcar>
								<a href="#" @click.prevent="remove(item.id,i)">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
			<!-- 结算区域 -->
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
							<p>总计（不含运费）</p>
							<p>已勾选商品 <span class="red">0</span> 件，总价 <span <span class="red">￥0</span></p>
						</div>
						<mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	import shopcar from '../subcomponents/shopcar_numbox.vue';
	export default {
		data(){
			return {
				shoplist:[]
			}
		},
		methods:{
			getShopcarlist(){
				var ids = this.$store.getters.carList;
				if(ids.length > 0){
					this.$http.get('api/goods/getshopcarlist/'+ids).then(res=>{
						if(res.body.status == 0) {
							this.shoplist = res.body.message
						}
					})
				}
			},
			remove(id,index){
				this.shoplist.splice(index,1)
				console.log(id)
				this.$store.commit('remDate',id)
			}

		},
		components:{
			shopcar,
		},
		created(){
			this.getShopcarlist()
		}
	}
</script>
<style lang="less" scoped>
	.showcar-continer{
		.mint-switch{
			margin-right: 10px;
		}
		.goods-list{
			.mui-card-content-inner{
				display: flex;
				padding-left:10px;
				align-items:center;
			}
		}
		background-color: #eee;
		overflow:hidden;
		img{
			width: 60px;
			height:60px;
		}
		h1{
			font-size: 13px;
		}
		.info{
			display: flex;
			flex-direction:column;
			justify-content:space-between;
			.pricr{
				color:red;
				font-weight: 600;
			}
		}
		.jiesuan {
			display:flex;
			justify-content:space-between;
			align-items:center;
			.red{
				color:red;
				font-weight: 600;
			}
		}
	}
</style>