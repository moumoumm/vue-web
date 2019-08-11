import VueRouter from "vue-router"

//导入对应的路由组件
import Home from "./components/tabbar/home.vue"
import Member from "./components/tabbar/member.vue"
import Search from "./components/tabbar/search.vue"
import Shopcar from "./components/tabbar/shopcar.vue"
import Newslist from "./components/news/newslist.vue"
import NewsInfo from "./components/news/newsInfo.vue"
import PhotoList from "./components/photos/photoList.vue"
import PhotoInfo from "./components/photos/photoInfo.vue"
import Shopcar1 from "./components/shopcar/shopcar.vue"
import ShopcarInfo from "./components/shopcar/shopInfo.vue"
import Shopintroduce from "./components/shopcar/shopintroduce.vue"
import Shopcomment from "./components/shopcar/shopcomment.vue"

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
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoInfo/:id', component: PhotoInfo },
        { path: '/home/shopcar', component: Shopcar1 },
        { path: '/home/shopInfo/:id', component: ShopcarInfo },
        { path: '/home/shopintroduce/:id', component: Shopintroduce },
        { path: '/home/shopcomment/:id', component: Shopcomment },
    ],
    linkActiveClass:'mui-active'
})

//导出
export default router