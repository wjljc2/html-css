<template>
    <div>
        11111
        <router-link to="/mine/test1">子路由一</router-link>
        <router-link to="/mine/test2">子路由二</router-link>
        {{$route.params.id}}
        {{$route.params.name}}
        <router-view></router-view>
        {{$route.query.id}}
        {{$route.query.name}}
        <!-- 占位 -->
    </div>
</template>

<script>
    export default {
        

    }
</script>

<style lang="scss" scoped>

</style>