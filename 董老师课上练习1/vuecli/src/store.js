import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
/*
  vuex用来状态管理 方便用来传值

*/
export default new Vuex.Store({
  state: {// 用来存储状态
    count:0,
    num:2,
  },
  mutations: {// 用来改状态
    add(state,num){
      state.count+=num;
    },
    reduce(state){
      state.count--;
    }
  },
  getters:{// 相当于计算属性
    sum(state){
      return state.count*state.num;
    }
  },
  actions: {// 异步操作 最终改状态需要调用mutations中的方法

  },
});
