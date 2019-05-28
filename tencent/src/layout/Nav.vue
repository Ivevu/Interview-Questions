<template>
  <ul class="main">
    <li :class="['navItem',item.isActive?'isActive':'']" v-for="(item,index) in navList" :key="index"
      @click="clickTab(index)">
      <img class="icon" :src="item.src" alt="">
      <p class="value">{{item.value}}</p>
      <div class="line" :style="move" v-if="index === 0"></div>
    </li>
  </ul>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
    Emit,
    Prop
  } from "vue-property-decorator";
  @Component
  export default class Nav extends Vue {
    @Prop() navList: any[];
    @Prop() move: Object;

    /**
     * 点击导航栏
     */
    @Emit('clickTab')
    public clickTab(i: number): number {
      return i;
    }
  }

</script>

<style lang="less" scoped>
  .main {
    display: flex;
    padding: 0 30px;
    height: 140px;
    position: fixed;
    width: 100%;
    z-index: 1;
    background: #ffffff;
    justify-content: space-around;
    border-bottom: 1Px solid rgb(238, 238, 238);

    .navItem {
      flex: 1;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: rgb(199, 199, 199);

      &.isActive {
        color: rgb(106, 106, 106);
        border-bottom: 0px;
        font-weight: 500;
      }

      .icon {
        height: 53px;
      }
    }

    .value {
      padding-top: 14px;
      font-size: 22px;
    }

    .line {
      width: 100%;
      height: 5px;
      background: rgb(255, 103, 73);
      position: absolute;
      bottom: -1Px;
      left: 0;
    }
  }

</style>
