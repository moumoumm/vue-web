<template>
    <div class="info">
        <h3>{{newsInfo.title}}</h3>
        <p class="mui-ellipsis"><span>发表时间：{{newsInfo.add_time | dataFormat("YYYY-MM-DD") }}</span><span>点击次数：{{newsInfo.click}}</span></p>
        <hr>
        <div>
            <vue-preview :slides="newpics" @close="handleClose"></vue-preview>
        </div>
        <div v-html="newsInfo.content" class="container"></div>
        <comment :artid="id"></comment>
    </div>
</template>

<script>
    import comment from "../common/comment.vue"
    export default {
        name: "newsInfo",
        components:{
            comment
        },
        data(){
            return{
                id:this.$route.params.id,
                newsInfo:{},
                newpics:[]
            }
        },
        created(){
            this.getnews();
            this.getpic();
        },
        methods:{
            getnews(){
                this.$axios.get("http://www.liulongbin.top:3005/api/getimageInfo/"+this.id)
                    .then(res=>{
                        this.newsInfo=res.data.message[0]
                        console.log(this.newsInfo);
                    })
            },
            getpic(){
                this.$axios.get("http://www.liulongbin.top:3005/api/getthumimages/"+this.id)
                    .then(res=>{
                        res.data.message.forEach(item=>{
                            item.msrc=item.src;
                            item.w=600;
                            item.h=400;
                        })
                        this.newpics=res.data.message
                    })
            },
            handleClose () {
                console.log('close event')
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/index.less";
    .info h3{
        text-align: center;
        font-size: 24rem/@baseFontSize;
        color: red;
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
    }
    .mui-ellipsis span{
        font-size: 14rem/@baseFontSize;
    }
    .container{
        font-size: 16rem/@baseFontSize;
    }
</style>