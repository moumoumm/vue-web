import Vue from 'Vue'
import App from './app.vue'
// 导入MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//导入mui
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
//导入公共样式
import "./app.css"

//导入路由
import VueRouter from "vue-router"
Vue.use(VueRouter)

import router from "./router"

import axios from "axios"
// axios.defaults.baseURL="http://www.liulongbin.top:3005/"
Vue.prototype.$axios=axios;


//导入时间插件
import moment from "moment"
Vue.filter("dataFormat",function (datastr,partern="YYYY-MM-DD hh:mm:ss") {
    return moment(datastr).format(partern)
})


const vm=new Vue({
    el:'#app',
    data:{},
    render:function (elements) {
        return elements(App)
    },
    router,

})