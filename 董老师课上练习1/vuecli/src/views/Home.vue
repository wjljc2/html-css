<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    count的值是: {{$store.state.count}}
    num的值是: {{$store.state.num}}
    sum: {{sum}}
    <button @click="add(5)">add</button>
    <button @click="reduce()">reduce</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {mapState,mapMutations,mapGetters} from 'vuex';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['sum'])
  },
  methods:mapMutations(['add','reduce'])
};
</script>
