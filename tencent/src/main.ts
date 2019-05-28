import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//  import vConsole from "@/util/vconsole";
Vue.config.productionTip = false;
require('./mock/mock');
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'src/assets/order.done',
//   loading: require('../src/assets/loading.gif'),
//   attempt: 1
// });
// import VueLazyload from 'vue-lazyload';
//Vue.use(vConsole);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
