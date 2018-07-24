import Vue from 'vue';
import Router from 'vue-router';
import Start from './views/Start.vue';
import Studies from './views/Studies.vue';
import Projects from './views/Projects.vue';
import Contacts from './views/Contacts.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Start,
    },
    {
      path: '/studies/',
      component: Studies,
    },
    {
      path: '/projects/',
      component: Projects,
    },
    {
      path: '/contacts/',
      component: Contacts,
    },
  ],
});
