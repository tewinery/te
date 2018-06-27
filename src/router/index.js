import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/views/Home';
import ListAlmostThere from '@/components/views/ListAlmostThere';
import TermsAndConditions from '@/components/views/TermsAndConditions';
import PrivacyPolicy from '@/components/views/PrivacyPolicy';
import RefundPolicy from '@/components/views/RefundPolicy';

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
    }, {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsAndConditions,
    }, {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy,
    }, {
      path: '/refund-policy',
      name: 'refund-policy',
      component: RefundPolicy,
    },
  ],
});
