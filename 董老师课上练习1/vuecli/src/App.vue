<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/Mine">Mine</router-link> | -->
      <router-link :to="{name: 'mine',params:{id:666,name:'小王'}}">我的params</router-link> |
      <router-link :to="{path: '/mine',query:{id:666,name:'小王'}}">我的query</router-link> |
      <router-link to="/test/5/lisi">test</router-link>
      <router-link to="/aaa">重定向到主页</router-link>
      <button @click = "$router.push('/')">首页</button>
      <button @click = "$router.go(-1)">上一页</button>
      <button @click = "$router.go(1)">下一页</button>
    </div>
    <transition name = "fade">
      <router-view/>
    </transition>
  </div>
</template>
  <script>
    export default{
      methods:{
        go(){
          this.router.push('/');
        }
      }
    }
  </script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 2s ease;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  transform: translateX(0);
}
.fade-leave-active{
  transition: transform 1s ease;
}
.fade-leave-to{
  transform: translateX(100%);
}
</style>
