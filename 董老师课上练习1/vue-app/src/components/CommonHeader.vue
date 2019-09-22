<template>
    <div class = "header"  :style="{background:$store.state.color}">
        <router-link to='/return' @click.native="$store.commit('change',{title:'电影',color:'red'})">首页</router-link>
        {{$store.state.title}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .header{
        height: 50px;
        background: #ff0000;
        line-height:50px;
        position: fixed;
        top:0;
        width: 100%;
    }
</style>