<template>
  <div id="app">
    <NavBar></NavBar>
  </div>
</template>
<script lang="ts">
  import {
    Component,
    Vue,
    Prop
  } from "vue-property-decorator";
  import NavBar from '@/layout/Nav.vue'
  @Component({
    components: {
      NavBar
    }
  })
  export default class Index extends Vue {}

</script>
<style lang="less" scoped>
  @import "../src/stylesheet/reset.css";
</style>
