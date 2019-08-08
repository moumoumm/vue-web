<template>
    <div class="co_comment">
        <h3>发表评论</h3>
        <hr>
        <textarea name="" id="" cols="30" rows="5" v-model="content"></textarea>
        <mt-button type="primary" size="large" @click="sendcomment">发表评论</mt-button>

        <div class="co_co" v-for="(item,index) in com" :key="item.id">
            <div class="co_top">
                第{{index+1}}楼  用户：{{item.user_name}}  发表时间：{{item.add_time | dataFormat }}
            </div>
            <div class="co_body">
                <p>{{ item.content }}</p>
            </div>
        </div>

        <mt-button type="primary" size="large" @click="getmore">获取更多</mt-button>

    </div>
</template>

<script>
    export default {
        name: "comment",
        data(){
            return{
                com:[],
                content:"",
                index:1
            }
        },
        props:["artid"],
        created(){
            this.getcomment()
        },
        methods:{
            getmore(){
                this.index++;
                this.$axios.get("http://www.liulongbin.top:3005/api/getcomments/"+this.artid+"?pageindex="+this.index)
                    .then(res=>{
                        this.com=this.com.concat(res.data.message)
                    })
            },
            getcomment(){
                this.$axios.get("http://www.liulongbin.top:3005/api/getcomments/"+this.artid+"?pageindex=1")
                    .then(res=>{
                        this.com=res.data.message
                        console.log(this.com);
                    })
            },
            sendcomment(){
                if (!this.content) return;
                this.$axios.post("http://www.liulongbin.top:3005/api/postcomment/"+this.artid,
                    {
                        content:this.content
                    })
                    .then(res=>{
                        console.log(res);
                        var list={content:this.content};
                        this.com.unshift(list);
                        this.content=""
                    })
            }
        }
    }
</script>

<style lang="less" scoped>
    .co_top{
        background: #ccc;
        padding: 10px 2px;
    }
    .co_body p{
        text-indent: 2em;
        color: black;
    }
</style>