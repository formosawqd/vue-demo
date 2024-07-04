import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/test.vue'),
  },
  {
    path: '/upload',
    name: 'upload',
    component: () =>
      import(/* webpackChunkName: "upload" */ '../views/upload.vue'),
  },
  {
    path: '/parent',
    name: 'parent',
    component: () =>
      import(/* webpackChunkName: "parent" */ '../views/parent.vue'),
  },
  {
    path: '/child',
    name: 'child',
    component: () =>
      import(/* webpackChunkName: "child" */ '../views/child.vue'),
  },
  {
    path: '/debounce',
    name: 'debounce',
    component: () =>
      import(/* webpackChunkName: "debounce" */ '../views/debounce.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
  },
  {
    path: '/protected',
    name: 'protected',
    component: () =>
      import(/* webpackChunkName: "protected" */ '../components/Protected.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
