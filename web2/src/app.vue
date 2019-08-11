<template>
<div class="app_container">
    <!--头部-->
    <mt-header fixed title="顶部" ></mt-header>

    <transition>
        <router-view></router-view>
    </transition>

    <!--尾部-->
    <nav class="mui-bar mui-bar-tab">
        <router-link class="my-mui-tab-item " to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="my-mui-tab-item" to="/member">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="my-mui-tab-item" to="/shopcar">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">7</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="my-mui-tab-item" to="/search">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
</div>
</template>

<script>
    export default {
        name: "app"
    }
</script>


<style  lang="less" scoped>
    @import "./less/index";
    .mint-header {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #26a2ff;
        box-sizing: border-box;
        color: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 24rem/@baseFontSize;
        height: 50rem/@baseFontSize;
        line-height: 1;
        padding: 0 10px;
        position: relative;
        text-align: center;
        white-space: nowrap;
    }

    .app_container{
        /*padding-top: 40px;*/
        padding-bottom: 50px;
        overflow-x: hidden;
    }
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

    .mui-bar-tab .my-mui-tab-item.mui-active[data-v-bced26ea] {
        color: #007aff;
    }

     .mui-bar-tab .my-mui-tab-item[data-v-bced26ea][data-v-bced26ea] {
         display: table-cell;
         overflow: hidden;
         width: 1%;
         height: 50rem/@baseFontSize;
         text-align: center;
         vertical-align: middle;
         white-space: nowrap;
         text-overflow: ellipsis;
         color: #929292;
     }
    .mui-bar-tab {
        bottom: 0;
        display: table;
        width: 100%;
        height: 50rem/@baseFontSize;
        padding: 0;
        table-layout: fixed;
        border-top: 0;
        border-bottom: 0;
        -webkit-touch-callout: none;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        font-size: 15rem/@baseFontSize;
        line-height: 15rem/@baseFontSize;
        display: block;
        width: 100%;
        height: 15px;
        margin-top: 8rem@baseFontSize;
        text-overflow: ellipsis;
        color: #333;
    }

    .mui-bar-tab .my-mui-tab-item .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .mui-bar-tab .my-mui-tab-item.mui-active {
        color: #007aff;
    }

    .mui-bar-tab .my-mui-tab-item .mui-icon ~ .mui-tab-label {
        font-size: 11rem/@baseFontSize;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>