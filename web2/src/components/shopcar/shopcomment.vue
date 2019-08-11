<template>
    <div>
        <comment :artid="id"></comment>
    </div>
</template>

<script>
    import comment from "../common/comment.vue"
    export default {
        name: "shopcomment",
        components:{
            comment
        },
        data(){
            return{
                id:this.$route.params.id,
            }
        },
    }
</script>

<style scoped>

</style>