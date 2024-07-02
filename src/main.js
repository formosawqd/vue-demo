import Vue from 'vue';
import { Message } from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import { test } from './utils';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
Vue.prototype.$message = Message;
// test();

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
