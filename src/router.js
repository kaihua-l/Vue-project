//导入vue-router
import VueRouter from 'vue-router';

import home from './components/tabber/home.vue'
import member from './components/tabber/member.vue'
import showcar from './components/tabber/showcar.vue'
import search from './components/tabber/search.vue'

var router = new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/member',component:member},
		{path:'/showcar',component:showcar},
		{path:'/search',component:search}
	],
	linkActiveClass:'mui-active'
})

export default router;
