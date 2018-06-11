import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/views/Home';
import ListAlmostThere from '@/components/views/ListAlmostThere';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 84 },
      };
    }

    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path: '/list/almost-there',
      name: 'list-almost-there',
      component: ListAlmostThere,
    },
  ],
});
