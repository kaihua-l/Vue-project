//入口文件
//导入vue
import Vue from 'vue';
//导入路由
import VueRouter from 'vue-router';
//导入App根组件
import app from './App.vue';
//按需导入 组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
//注册mint iu 组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
//安装router组件
Vue.use(VueRouter);
import router from './router.js';

//导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

var vm = new Vue({
	el:'#app',
	data:{

	},
	render:c=>c(app),
	router
})