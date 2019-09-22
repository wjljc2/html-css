<template>
    <div id = "footer">
        <router-link to="/movie">电影</router-link>
        <router-link to="/book">书籍</router-link>
        <router-link to="/music">音乐</router-link>
        <router-link to="/image">图片</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #footer{
        height: 50px;
        line-height: 50px;
        background: #ff0000;
        position: fixed;
        bottom:0;
        width: 100%;
        display: flex;
        text-align: center;
        a{
            flex: 1;
            &.router-link-exact-active{
                color:aliceblue;
            }
        }
    }
</style>