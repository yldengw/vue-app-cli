import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import List from '../views/list.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  { path: '/lists', component: List }
];
const router = new VueRouter({
  mode: 'history',
  base: '/lovepain/',
  routes: routes});

export default router;
