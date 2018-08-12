// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'ratchet-npm/dist/css/ratchet.css'; // get ratchet
import 'font-awesome/css/font-awesome.css'; // get font-awesome

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import FastClick from 'fastclick';
import VueProgressBar from 'vue-progressbar';
import InfiniteScroll from 'vue-infinite-scroll';

FastClick.attach(document.body); // init fastclick
const options = {
  color: '#fff',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};
Vue.use(VueProgressBar, options);
Vue.use(InfiniteScroll);
Vue.config.productionTip = false

/* eslint-disable no-new */
// init
const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
