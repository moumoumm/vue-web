import VueRouter from "vue-router"

//导入对应的路由组件
import Home from "./components/tabbar/home.vue"
import Member from "./components/tabbar/member.vue"
import Search from "./components/tabbar/search.vue"
import Shopcar from "./components/tabbar/shopcar.vue"
import Newslist from "./components/news/newslist.vue"
import NewsInfo from "./components/news/newsInfo.vue"

//创建路由对象
const router=new VueRouter({
    routes:[
        {path:'/',redirect:"./home"},
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/search', component: Search },
        { path: '/shopcar', component: Shopcar },
        { path: '/home/newslist', component: Newslist },
        { path: '/home/newsInfo/:id', component: NewsInfo },
    ],
    linkActiveClass:'mui-active'
})

//导出
export default router