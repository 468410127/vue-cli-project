/**
 *
 * @description 定义路由模块
 */

import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import Hello from '@/views/hello/index.vue';

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'hello',
    component: Hello
  },
  {
    path: '*',
    redirect: '/'
  }
];

export default new Router({
  mode: 'hash',
  routes
});
