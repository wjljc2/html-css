import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import Book from './views/Book.vue';
import Music from './views/Music.vue';
import Image from './views/Image.vue';
import MovieDetail from './views/MovieDetail.vue';
import MusicDetail from './views/MusicDetail';
import ImageDetail from './views/ImageDetail';

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
      path:'/musicdetail',
      component:MusicDetail,
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
      path:'/imagedetail',
      component:ImageDetail,
    },
    {
      path:'/return',
      redirect:'/movie',
    },
    
  
  ],
});
