import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'
import Tab from 'components/tab/tab'

Vue.use(Router) //注册路由

export default new Router({
  routes: [
  	{
  		path:'/', //根地址路径重定向，页面一进来就展示想要展示的页面
  		redirect:'/recommend'
  	},
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/tab',
      component: Tab
    },
  ]
})
