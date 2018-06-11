// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import InViewportDirective from 'vue-in-viewport-directive';
import VueParallaxJs from 'vue-parallax-js'

import App from './App';

import router from './router';

Vue.use(VueScrollTo, {
  duration: 1000,
});
Vue.use(VueParallaxJs)

InViewportDirective.defaults.top = -100;

Vue.directive('in-viewport', InViewportDirective);

import * as svgicon from 'vue-svgicon';
import 'vue-svgicon/dist/polyfill';

Vue.use(svgicon, { classPrefix: 'c_svg' });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
});
