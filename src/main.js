//入口文件
//导入vue
import Vue from 'vue';
//导入路由
import VueRouter from 'vue-router';
//导入App根组件
import app from './App.vue';

//导入日期格式化组件
import moment from 'moment';
//按需导入 组件
// import { Header,Swipe, SwipeItem, Button,Lazyload } from 'mint-ui';

// 导入mui css样式及字体图标
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
//注册mint iu 组件
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name,SwipeItem);
// Vue.component(Button.name,Button);
// Vue.component(Button.name,Button);
// Vue.use(Lazyload);

//全局注册mint-ui组件
import MintUI from 'mint-ui';
Vue.use(MintUI);

// 导入mint-ui css样式
import 'mint-ui/lib/style.css';

//评论子组件
import comment from './components/subcomponents/comment.vue';
Vue.component('comment',comment);

//安装router组件
Vue.use(VueRouter);
import router from './router.js';

//导入 vue-resource  用于发送请求
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://liulongbin.top:3005'
Vue.http.options.emulateJSON = true;

//定义全局时间格式化过滤器
Vue.filter("dataFormat",function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(datastr).format(pattern);
})

//导入轮播图组件
import swiper from './components/subcomponents/swiper.vue';

Vue.component('swiper',swiper);

//vue-preview导入全局图片预览组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//创建实例对象
var vm = new Vue({
	el:'#app',
	data:{

	},
	render:c=>c(app),
	router
})