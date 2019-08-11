<template>
    <div>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link class="mui-navigate-right" :to="'/home/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body test">
                        <p class="title">{{ item.title}} </p>

                        <p class="mui-ellipsis"><span>{{item.add_time | dataFormat("YYYY-MM-DD") }}</span><span>点击次数：{{item.click}}</span></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "newslist",
        data(){
            return{
                newsList:[]
            }
        },
        created(){
            this.getnews()
        },
        methods:{
            getnews(){
                this.$axios.get("http://www.liulongbin.top:3005/api/getnewslist")
                    .then(res=>{
                        this.newsList=res.data.message
                        console.log(this.newsList);
                    })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/index.less";
    .mui-media-body p{
        display: flex;
        justify-content: space-between;

    }
    .mui-ellipsis span{
        font-size: 14rem/@baseFontSize;
    }
    .mui-table-view .mui-media-object {
        line-height: 42rem/@baseFontSize;
        max-width: 42rem/@baseFontSize;
        height: 42rem/@baseFontSize;
    }
    .title{
        font-size: 17rem/@baseFontSize;
        line-height: 21rem/@baseFontSize;
        color: black;
    }
</style>