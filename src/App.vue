<template>
	<div class="app-container">
		<!-- 顶部header区域 -->
		<mt-header fixed title="前端Vue项目">
			<span class="mui-icon mui-icon-arrowleft go" slot="left" @click="go"><span> 返回</span></span>
		</mt-header>
		<!-- 中间路由 router-view 区域 -->
		<transition>
			<router-view></router-view>
		</transition>	
		<!-- 底部 Tabbar 区域 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-l" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-l" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-l" to="/showcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.sum}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-l"to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>
<script>
	export default {
		data(){
			return{

			}
		},
		methods:{
			go(){
				this.$router.go(-1)
			}
		},
	}
</script>
	
<style lang="less" scoped>
	.mint-header {
		z-index: 999;
		.mui-icon{
			font-size: 24px;
			span {
				font-size: 18px;
			}
		}
	}
	.app-container{
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;		
	}
	.v-enter{
		opacity: 0;
		transform:translate(100%);	
	}
	.v-leave-to{
		transform:translate(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition:all 0.6s ease ;
	}
	.mui-bar-tab .mui-tab-item-l {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-l.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-l .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-l.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-l {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-l .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>