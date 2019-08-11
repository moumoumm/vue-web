<template>
    <div class="shopInfo">
        <div class="mui-card">
            <div class="mui-card-content pic">
                <img :src="newsList.thumb_path" alt="" width="50%">
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{ newscan.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p><span class="del">市场价 {{ newscan.market_price }}</span><span class="red">零售价 {{ newscan.sell_price }}</span></p>
                    <p>购买数量</p>
                    <button type="button" class="mui-btn mui-btn-outlined">
                       -
                    </button>
                    <input type="text" value="1">
                    <button type="button" class="mui-btn mui-btn-outlined">
                        +
                    </button>
                </div>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                <button type="button" class="mui-btn mui-btn-primary" onclick="return false;">立即购买</button>
                <button type="button" class="mui-btn mui-btn-danger" onclick="return false;">加入购物车</button>
                </div>
            </div>
        </div>
        <!--商品参数-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ newscan.goods_no }}</p>
                    <p>存库情况：{{ newscan.stock_quantity }}</p>
                    <p>上架时间：{{ newscan.add_time | dataFormat }}</p>

                </div>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <router-link tag="mt-button" :to="'/home/shopintroduce/'+newscan.id" type="default" size="large" class="up">图文介绍</router-link>
                    <router-link tag="mt-button" :to="'/home/shopcomment/'+newsList.id" type="default" size="large" class="down">商品评论</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shopInfo",
        data(){
            return{
                id:this.$route.params.id,
                newsList:[],
                newscan:[]
            }
        },
        created(){
            this.getnews(),
                this.getcan();
        },
        methods:{
            getnews(){
                this.$axios.get("http://www.liulongbin.top:3005/api/goods/getshopcarlist/"+this.id)
                    .then(res=>{
                        this.newsList=res.data.message[0]
                        console.log(this.newsList);
                    })
            },
            getcan(){
                this.$axios.get("http://www.liulongbin.top:3005/api/goods/getinfo/"+this.id)
                    .then(res=>{
                        this.newscan=res.data.message[0]
                        console.log(this.newscan);
                    })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/index.less";
    .shopInfo .pic{
        text-align: center;
        img{
            width: 50%;
        }
    }
    .red{
        color: red;
        font-size: 20rem/@baseFontSize;
        margin-left: 10rem/@baseFontSize;
    }
    .del{
        text-decoration:line-through;
    }
    input{
        width: 32rem/@baseFontSize;
        height: 32rem/@baseFontSize;
        margin: 0;
        padding: 0;
        text-align: center;
        color: #666;
        font-size: 15rem/@baseFontSize;
    }
    .up{
        border: 1px solid #007aff;
        color: #007aff ;
        margin-bottom: 10rem/@baseFontSize;
    }
    .down{
        border: 1px solid #FBB2B2;
        color: #FBB2B2;
    }
    .mint-button--normal {
        display: block;
        width: 100%;
        padding: 0 12rem/@baseFontSize;
    }
    .mui-card-header {
        font-size: 17rem/@baseFontSize;
        border-radius: 2rem/@baseFontSize 2rem/@baseFontSize 0 0;
    }
    button{
        font-size: 15rem/@baseFontSize;
    }
    .mint-button{
        height: 41rem/@baseFontSize;
    }
</style>