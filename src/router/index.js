import Vue from 'vue';
import Router from 'vue-router';
import Start from '@/components/start';
import Studies from '@/components/studies';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start,
    },
    {
      path: '/studies/',
      name: 'Studies',
      component: Studies,
    },
  ],
});
