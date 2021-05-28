//导入vue-router
import VueRouter from 'vue-router';

import home from './components/tabber/home.vue'
import member from './components/tabber/member.vue'
import showcar from './components/tabber/showcar.vue'
import search from './components/tabber/search.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodslist from './components/goodslist/goodslist.vue'
import goodsinfo from './components/goodslist/goodsinfo.vue'
import goodsdesc from './components/goodslist/goodsdesc.vue'
import goodscomment from './components/goodslist/goodscomment.vue'

var router = new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/member',component:member},
		{path:'/showcar',component:showcar},
		{path:'/search',component:search},
		{path:'/home/newslist',component:newslist},
		{path:'/home/newslist/newsinfo/:id',component:newsinfo},
		{path:'/home/photolist/',component:photolist},
		{path:'/home/photolist/:id',component:photoinfo},
		{path:'/home/goodslist/',component:goodslist},
		{path:'/home/goodsinfo/:id',component:goodsinfo},
		{path:'/home/goodsdesc/:id',component:goodsdesc,name:'goodsdesc'},
		{path:'/home/goodscomment/:id',component:goodscomment,name:'goodscomment'},
	],
	linkActiveClass:'mui-active'
})

export default router;
