import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title:'电影',
    color:'red',
  },
  mutations: {
    change(state,temp){
      state.title = temp.title,
      state.color = temp.color
    }
  },
  actions: {

  },
});
