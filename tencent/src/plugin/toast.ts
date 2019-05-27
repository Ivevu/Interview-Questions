import Toast from '@/views/toast.vue';
import Vue from "vue";
import { VueConstructor } from 'vue';

const toast = {
  install(vue: VueConstructor): void {
    const VueToast = Vue.extend(Toast);
    let toast: any = null;
    function $toast(params: any) {
      return new Promise((resolve) => {
        if (!toast) {
          toast = new VueToast();
          toast.$mount();
          document.querySelector('body').appendChild(toast.$el);
        }
        toast.show(params);
        resolve();
      });
    }

    Vue.prototype.$toast = $toast;
  },
};

export default toast;
