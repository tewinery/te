// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import * as svgicon from 'vue-svgicon';
import 'vue-svgicon/dist/polyfill';

Vue.use(svgicon, { classPrefix: 'c_svg' });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
