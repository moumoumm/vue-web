<template>
    <div class="shopcar">
            <router-link tag="div" :to="'/home/shopInfo/'+item.id" class="car" v-for="item in newsList" :key="item.id">
                <img :src="item.img_url" alt="">
                <p class="ti">{{ item.title }}</p>
                <p class="ti"><span class="red">￥{{item.sell_price}}</span><span class="del">￥{{ item.market_price }}</span></p>
                <p class="side ti"><span>热卖中</span><span>剩100件</span></p>
            </router-link>
        <mt-button type="primary" size="large" @click="getmore">获取更多</mt-button>
    </div>
</template>
<script>
    export default {
        name: "shopcar",
        data(){
            return{

                newsList:[],
                index:1
            }
        },
        created(){
            this.getnews()
        },
        methods:{
            getnews(){
                this.$axios.get("http://www.liulongbin.top:3005/api/getgoods?pageindex=1")
                    .then(res=>{
                        this.newsList=res.data.message
                        console.log(this.newsList);
                    })
            },
            getmore(){
                this.index++;
                this.$axios.get("http://www.liulongbin.top:3005/api/getgoods?pageindex="+this.index)
                    .then(res=>{
                        this.newsList=this.newsList.concat(res.data.message)
                    })
            },
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/index.less";
    .shopcar{
        padding: 10rem/@baseFontSize;
    }
    .ke{
        padding: 10em/@baseFontSize;
    }
    .car{
        width: 45%;
        margin: 7em/@baseFontSize;
        background: #f0f0f0;
        display: inline-block;
    }
    .car img{
        width: 100%;
    }
    .red{
        color: red;
        font-size: 20em/@baseFontSize;
    }
    .del{
        text-decoration:line-through;
        margin-left: 10em/@baseFontSize;
    }
   .ti{
        padding: 0em/@baseFontSize 10em/@baseFontSize;
        font-size: 16rem/@baseFontSize;
    }
    .car .side{
        display: flex;
        justify-content: space-between;
    }
</style>