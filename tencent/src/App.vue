<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue , Prop} from "vue-property-decorator";
import Home from "@/views/Home.vue";
@Component({
  components: {
    Home
  }
})
export default class Index extends Vue {
}
</script>
<style lang="less" scoped>
@import "../src/stylesheet/reset.css";
#app {
  background: #F2F2F2;
  height: 100%;
}
</style>
