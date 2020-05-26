import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: (resolve) => require(['@/views/home'], resolve),
  },{
    name: 'child',
    path: '/child',
    component: (resolve) => require(['@/views/child'], resolve),
  },{
    name: 'childDate',
    path: '/childDate',
    component: (resolve) => require(['@/views/childDate'], resolve),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
