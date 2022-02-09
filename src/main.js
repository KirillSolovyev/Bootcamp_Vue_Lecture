import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import BuyPage from './pages/BuyPage';

import './assets/css/style.css';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const MainApp = {
  name: 'MainApp',
  template: '<router-view></router-view>'
};

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'MainPage',
      component: App
    },
    {
      name: 'BuyPage',
      path: '/item/:itemId/:count',
      component: BuyPage,
      props: true
    }
  ]
});

new Vue({
  router,
  render: h => h(MainApp),
}).$mount('#app');
