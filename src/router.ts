import Vue from 'vue';
import Router from 'vue-router';
import Start from './views/Start.vue';
import Jobs from './views/Jobs.vue';
import Diplomas from './views/Diplomas.vue';
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
      path: '/jobs/',
      component: Jobs,
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
