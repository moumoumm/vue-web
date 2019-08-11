<template>
    <div>
        <h3>{{ newsList.title }}</h3>
        <hr>
        <div v-html="newsList.content" class="con"></div>
    </div>
</template>

<script>
    export default {
        name: "shopintroduce",
        data(){
            return{
                id:this.$route.params.id,
                newsList:[],
            }
        },
        created(){
            this.getnews()
        },
        methods:{
            getnews(){
                this.$axios.get("http://www.liulongbin.top:3005/api/goods/getdesc/"+this.id)
                    .then(res=>{
                        this.newsList=res.data.message[0]
                        console.log(this.newsList);
                    })
            },
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/index.less";
    h3{
        color: #226AFF;
        text-align: center;
        font-size: 24rem/@baseFontSize;
    }
    .con img{
        width: 100%;
        /*height: 100%;*/
    }
    .con{
        font-size: 16rem/@baseFontSize;
    }
</style>