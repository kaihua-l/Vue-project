//入口文件
//导入vue
import Vue from 'vue';
//导入路由
import VueRouter from 'vue-router';
//导入App根组件
import app from './App.vue';

import moment from 'moment';
//按需导入 组件
// import { Header,Swipe, SwipeItem, Button,Lazyload } from 'mint-ui';
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
//注册mint iu 组件
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name,SwipeItem);
// Vue.component(Button.name,Button);
// Vue.component(Button.name,Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

//评论子组件
import comment from './components/subcomponents/comment.vue';
Vue.component('comment',comment);
//安装router组件
Vue.use(VueRouter);
import router from './router.js';

//导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://liulongbin.top:3005'
Vue.http.options.emulateJSON = true;
Vue.filter("dataFormat",function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(datastr).format(pattern);
})


import VuePreview from 'vue-preview'
Vue.use(VuePreview)

var vm = new Vue({
	el:'#app',
	data:{

	},
	render:c=>c(app),
	router
})