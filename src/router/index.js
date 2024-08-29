import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/home/Home.vue'),
  },

  {
    path: '/upload',
    name: 'upload',
    component: () =>
      import(/* webpackChunkName: "upload" */ '../views/upload/upload.vue'),
  },
  {
    path: '/parent',
    name: 'parent',
    component: () =>
      import(/* webpackChunkName: "parent" */ '../views/parent/parent.vue'),
  },
  {
    path: '/child',
    name: 'child',
    component: () =>
      import(/* webpackChunkName: "child" */ '../views/parent/child.vue'),
  },
  {
    path: '/debounce',
    name: 'debounce',
    component: () =>
      import(
        /* webpackChunkName: "debounce" */ '../views/debounce/debounce.vue'
      ),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../views/login/Login.vue'),
  },
  {
    path: '/protected',
    name: 'protected',
    component: () =>
      import(/* webpackChunkName: "protected" */ '../components/Protected.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "form  " */ '../views/Table'),
    path: '/tableSel',
    name: 'tableSel',
    component: () =>
      import(
        /* webpackChunkName: "tableSel" */ '../views/TableSelect/index.vue'
      ),
  },
  {
    path: '/singleSelect',
    name: 'singleSelect',
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ '../views/TableSelect/singleSelect.vue'
      ),
  },
  {
    path: '/singleSelect1',
    name: 'singleSelect1',
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ '../views/TableSelect/singleSelect1.vue'
      ),
  },
  {
    path: '/merge',
    name: 'merge',
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ '../views/tableMerge/index.vue'
      ),
  },
  {
    path: '/tree',
    name: 'tree',
    component: () =>
      import(/* webpackChunkName: "singleSelect" */ '../views/tree/index.vue'),
  },
  {
    path: '/props',
    name: 'props',
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ '../views/props/parent.vue'
      ),
  },
  {
    path: '/edittable',
    name: 'edittable',
    component: () =>
      import(
        /* webpackChunkName: "singleSelect" */ '../views/editTable/editTable.vue'
      ),
  },
  {
    path: '/pubu',
    name: 'pubu',
    component: () =>
      import(/* webpackChunkName: "singleSelect" */ '../views/pubu/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
