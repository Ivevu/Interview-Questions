import Vue from 'vue';
import Home from './layout/s-home.vue';
import Common from './layout/s-common.vue';

export default new Vue({
  components: {
    Home,
    Common,
  },
  // render: (h) => h(Skeleton), // 全局注入一个骨架屏
  template: `
        <div>
            <Home id="home" style="display: none;" />
            <Common  id="common"  style="display: none;" />
        </div>
    `,
});

