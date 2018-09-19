import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import Upload from '../views/upload.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  { path: '/upload', component: Upload }
];
const router = new VueRouter({
  mode: 'history',
  base: '/lovepain/',
  routes: routes});

export default router;
