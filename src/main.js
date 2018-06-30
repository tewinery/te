// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import InViewportDirective from 'vue-in-viewport-directive';
import VueParallaxJs from 'vue-parallax-js';
import VueAgile from 'vue-agile';
import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
import VueCookie from 'vue-cookie';
import * as svgicon from 'vue-svgicon';
import 'vue-svgicon/dist/polyfill';

import App from './App';
import router from './router';

Vue.use(VueScrollTo, { duration: 1000 });
Vue.use(VueParallaxJs);
Vue.use(VueAgile);
Vue.use(svgicon, { classPrefix: 'c_svg' });
Vue.use(VueCookie);

InViewportDirective.defaults.top = -100;

Vue.directive('in-viewport', InViewportDirective);

Vue.component('vue-cookie-accept-decline', VueCookieAcceptDecline)

Vue.config.productionTip = false;

window.Vue = Vue;

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
});
