<template>
  <div id="app" ref="app">
    <NavBar></NavBar>
    <List></List>
  </div>
</template>
<script lang="ts">
  import {
    Component,
    Vue,
    Prop
  } from "vue-property-decorator";
  import NavBar from '@/layout/Nav.vue'
  import List from '@/components/List.vue'
  @Component({
    components: {
      NavBar,
      List,
    }
  })
  export default class Index extends Vue {

  }

</script>
<style lang="less" scoped>
  @import "../src/stylesheet/reset.css";

</style>
