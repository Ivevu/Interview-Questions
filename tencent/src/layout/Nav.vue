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
    Vue
  } from "vue-property-decorator";
  @Component
  export default class Nav extends Vue {
    public navList: any[] = [ // 导航栏
      {
        src: require('@/assets/role.png'),
        value: '角色',
        isActive: true,
      },
      {
        src: require('@/assets/leisure.png'),
        isActive: false,
        value: '休闲'
      },
      {
        src: require('@/assets/console.png'),
        isActive: false,
        value: '单机'
      },
      {
        src: require('@/assets/chess.png'),
        isActive: false,
        value: '棋牌'
      },
      {
        src: require('@/assets/action.png'),
        isActive: false,
        value: '动作'
      },
      {
        src: require('@/assets/shoot.png'),
        isActive: false,
        value: '射击'
      },
    ];
    public move: Object = { // css切换动效
      transform: 'translate(0px,0px)',
      transition: 'transform 0.35s',
    }
    public static: Object = { // css切换动效
      'border-bottom': '1Px solid rgb(238, 238, 238)'
    }
    /**
     * 点击导航栏
     */
    public clickTab(i: number): void {
      this.move = {
        transform: `translate(${100*i}%,0px)`,
        transition: 'transform 0.35s',
      }
      this.navList.forEach(item => {
        item.isActive = false;
      });
      this.navList[i].isActive = true;
    }
  }

</script>

<style lang="less" scoped>
  .main {
    display: flex;
    padding: 0 30px;
    height: 140px;
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
