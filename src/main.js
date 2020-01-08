import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
// import iView from 'view-design'; // Or import view-design package
import 'iview/dist/styles/iview.css';
import './assets/css/common.css';
import './assets/font/iconfont.css';

Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
