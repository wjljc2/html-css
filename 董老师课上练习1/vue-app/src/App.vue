<template>
  <div id="app">
    <!-- 引入公共组件 -->
    <common-header></common-header>     <!-- 头 -->
    <div class = "body">
      <router-view></router-view>
    </div>
    <common-footer></common-footer>     <!-- 尾 -->

  </div>
</template>

<script>
// 1 导入公共组件 import
// 2 在组件components中声明组件
    import CommonHeader from './components/CommonHeader'
    import CommonFooter from './components/CommonFooter'

    export default {
        components:{
          CommonHeader,
          CommonFooter,
        }
    }
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.body{
  margin:50px 0;
}
</style>
