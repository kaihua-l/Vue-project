//导入vue-router
import VueRouter from 'vue-router';

import home from './components/tabber/home.vue'
import member from './components/tabber/member.vue'
import showcar from './components/tabber/showcar.vue'
import search from './components/tabber/search.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'

var router = new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/member',component:member},
		{path:'/showcar',component:showcar},
		{path:'/search',component:search},
		{path:'/home/newslist',component:newslist},
		{path:'/home/newslist/newsinfo/:id',component:newsinfo}
	],
	linkActiveClass:'mui-active'
})

export default router;
