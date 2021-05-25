//入口文件
//导入vue
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router';
//导入App根组件
import app from './App.vue'
//按需导入 组件
import { Header } from 'mint-ui';
import './lib/mui/css/mui.css'
//注册mint iu 组件
Vue.component(Header.name,Header)
//注册router组件
Vue.use(VueRouter)
var vm = new Vue({
	el:'#app',
	data:{

	},
	render:c=>c(app)
})