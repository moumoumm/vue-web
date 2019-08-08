## 项目描述

这是基于Vue.js的一个小项目

## 1.导入项目框架以及所需样式

```
import Vue from 'Vue'
import App from './app.vue'
```

导入MintUI

```
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
```

导入MUI

```
import "./lib/mui/css/mui.css"
//导入mui扩展图标库
import "./lib/mui/css/icons-extra.css"
```

下载 npm i moment

```
//导入时间插件
import moment from "moment"
Vue.filter("dataFormat",function (datastr,partern="YYYY-MM-DD hh:mm:ss") {
    return moment(datastr).format(partern)
})
```

导入axios

```
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$axios = axios;
```

## 2.构建公共部分

1.创建公共部分app.vue

2.使用MInt UI中的顶部

```
<mt-header fixed title="顶部" ></mt-header>
```

3.选择使用MUI中的底部选项卡

-  在src中新建文件夹tabbar 并建立4个vue文件
- 在路由中导入4个文件，并创建路由对象，并导出，index.js接收
-    将a标签改为router-link link改为to 地址改为路由中设置的路径

4.公共部分中间留坑

```
<router-view></router-view>
```

5.页面与页面有切换效果，用transition包裹router-view，并设置样式

```
 .v-enter{
     opacity: 0;
     transform: translateX(100%);
 }
 .v-leave-to{
     position: absolute;
     opacity: 1;
     transform: translateX(-100%);
 }
.v-enter-active,
 .v-leave-active{
     transition: all 1s;
 }
```

6.高亮显示对应选项卡，在路由对象中设置

```
linkActiveClass:'mui-active'
```

## 3.渲染首页

首页包括轮播图和九宫格效果

1.轮播图渲染

- 从MintUi中复制一个轮播图框架过来

- data中return一个lbanner空数组

- methods中创建一个方法来获取图片 地址：/api/getlunbo

  ```
  getBanner(){
      this.$axios.get('api/getlunbo')
          .then( result => {
              if(result.data.status === 0){
                 this.banner =  result.data.message
              }
          })
  }
  ```

再设置对应的样式就完成轮播图

2.九宫格

- 从MUI中复制一个九宫格模板过来
- 修改一点样式以及更改图片文字
- 将a标签改为router-link link改为对应路径

## 4.渲染新闻列表

在components文件夹下新建news文件夹，在里面建立newsList.vue

在路由中导入这个路径，并创建路由对象

从MUI中复制一个图文列表模板，修改样式以及内容

methods中创建一个方法来获取图文 地址：api/getnewslist

```
methods:{
    getNewsList(){
        this.$axios.get('api/getnewslist')
            .then( result => {
                if( result.data.status === 0){
                    this.newsList = result.data.message
                }
            })
    }
}
```

v-for遍历li,设置所需渲染的内容

在indedx.js中设置全局过滤器. 用来格式化时间

```
Vue.filter('dateFormat', function (dataStr, partern = "YYYY-MM-DD HH:mm:ss") {
    // YYYY-MM-DD HH:mm:ss
    return moment(dataStr).format(partern)
})
```

newslist.vue中用|调用方法

```
{{ item.add_time | dateFormat("YYYY-MM-DD")}}
```

## 5.渲染新闻详情

1.在components文件夹下的news里面建立newsInfo.vue

写好样式

data中设置参数

```
data(){
    return {
        id: this.$route.params.id,
        newsInfo:{}
    }
},
```

methods中创建一个方法来获取留言 地址：api/getnew/'+this.id

```
getNewsInfo(){
    this.$axios.get('api/getnew/'+this.id)
        .then( result => {
            console.log(result)
            if( result.data.status === 0){
                this.newsInfo = result.data.message[0]
            }
        })
}
```

初始化

```
created(){
    this.getNewsInfo();
},
```

2.创建公共评论组件

新建comment.vue，写好样式

data

```
data(){
    return {
        comments: []
    }
},
```

获取

```
methods:{
    getComments(){
        this.$axios.get('api/getcomments/'+this.cmtid+"?pageindex=1")
            .then( result => {
                console.log(result);
                if( result.data.status === 0){
                    this.comments = result.data.message
                }
            })
    }
}
```

初始化

```
created(){
    this.getComments();
},
```

传递id

```
props:["cmtid"],
```

newsInfo.vue模板中

```
<comment :cmtid="id"></comment>
```

```
//导入评论组件
import comment from '../common/comment.vue'
```

```
注册子组件
components:{
    comment
},
```

