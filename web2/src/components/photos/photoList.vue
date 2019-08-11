<template>
    <div class="photolist">
        <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-scroll-wrapper">
                <div class="mui-scroll">
                    <!--这里放置真实显示的DOM内容-->
                    <a  class="mui-control-item" href="#item1mobile" @click="getphotos(item.id)"  v-for="item in cards" :key="item.id">
                        {{item.title}}
                    </a>
                </div>
        </div>
        <router-link tag="div" :to="'/home/photoInfo/'+item.id" class="photos" v-for="item in photos" :key="item.id">
            <img v-lazy="item.img_url" alt="">
            <div class="down">

                <p class="title">{{item.title}}</p>
                <p class="title">{{item.zhaiyao}}</p>
            </div>
        </router-link>
    </div>
</template>
<script>
    import mui from "../../lib/mui/js/mui"
    export default {
        name: "photoList",
        mounted(){
            mui('.mui-scroll-wrapper').scroll();
        },
        data(){
            return{
                cards:[],
                photos:[]
            }
        },
        created(){
            this.getall(),
             this.getphotos(0)
        },
        methods:{
            getall(){
                this.$axios.get("http://www.liulongbin.top:3005/api/getimgcategory")
                    .then(res=>{
                        res.data.message.unshift({ title:"全部", id:0 }),
                        this.cards=res.data.message,
                        console.log(this.cards);
                    })
            },
            getphotos(cateid){
                this.$axios.get("http://www.liulongbin.top:3005/api/getimages/"+cateid)
                    .then(res=>{
                            this.photos=res.data.message,
                            console.log(this.photos);
                    })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/index.less";
    .mui-slider-indicator.mui-segmented-control {
        position: relative;
        bottom: auto;

        background: white;
    }
    .photos{
        position: relative;
        width: 96%;
        margin: 0 auto;
        margin-bottom: 10rem/@baseFontSize;
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        img{
            width: 100%;
            display: block;
        }
        .down{
            position: absolute;
            bottom: 0;
            left: 0;
            background: rgba(0,0,0,.4);

            padding: 15rem/@baseFontSize;
            p{
                color: white;
            }
        }
    }
    .mui-segmented-control.mui-scroll-wrapper .mui-scroll {
        width: auto;
        height: 40rem/@baseFontSize;
        white-space: nowrap;
    }
    .mui-segmented-control .mui-control-item {
        line-height: 38rem/@baseFontSize;
    }
    .mui-segmented-control.mui-scroll-wrapper {
        height: 38rem/@baseFontSize;
    }
    .mui-segmented-control {
        font-size: 15rem/@baseFontSize;
    }
    .title{
        font-size: 14rem/@baseFontSize;
    }
</style>