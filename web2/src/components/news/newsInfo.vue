<template>
    <div class="info">
        <h3>{{newsInfo.title}}</h3>
        <p class="mui-ellipsis"><span>发表时间：{{newsInfo.add_time | dataFormat("YYYY-MM-DD") }}</span><span>点击次数：{{newsInfo.click}}</span></p>
        <hr>
        <div v-html="newsInfo.content" class="container"></div>
        <comment :artid="id"></comment>
    </div>
</template>

<script>
   // 导入
    import comment from "../common/comment.vue"

    export default {
        name: "newsInfo",
        components:{
            comment
        },
        data(){
            return{
                id:this.$route.params.id,
                newsInfo:{}
            }
        },
        created(){
            this.getnews();
        },
        methods:{
            getnews(){
                this.$axios.get("http://www.liulongbin.top:3005/api/getnew/"+this.id)
                    .then(res=>{
                        this.newsInfo=res.data.message[0]
                        console.log(this.newsInfo);
                    })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/index.less";

    .info h3{
        text-align: center;
        color: red;
    }
    h3, .mui-h3{
        font-size: 30rem/@baseFontSize;
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
        padding: 0 10rem/@baseFontSize;
    }
    .mui-ellipsis span{
        font-size: 14rem/@baseFontSize;
    }
    .container{
        font-size: 16rem/@baseFontSize;
    }
</style>