import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import Book from './views/Book.vue';
import Music from './views/Music.vue';
import Image from './views/Image.vue';
import MovieDetail from './views/MovieDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
    },
    {
      path: '/movie',
      component:Movie,
    },
    {
      path:'/book',
      component:Book,
    },
    {
      path:'/music',
      component:Music,
    },
    {
      path:'/image',
      component:Image,
    },
    {
      path:'/moivedetail',
      component:MovieDetail,
    },
    {
      path:'/return',
      redirect:'/movie',
    },
  
  ],
});
