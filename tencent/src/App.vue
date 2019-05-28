<template>
  <div id="app" @touchstart="onMovestart($event)" @touchend="onMoveEnd($event)" ref="app">
    <NavBar :move="navMove" :navList="navList" @clickTab="clickTab"></NavBar>
    <div :class="['swiperBox']" :style="move" ref="swiperBox">
      <div class="swiper" v-for="(item,index) in [1,2] ">
        <List :list="list"></List>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import {
    Component,
    Vue,
    Prop
  } from "vue-property-decorator";
  import BScroll from 'better-scroll';
  import NavBar from '@/layout/Nav.vue'
  import List from '@/components/List.vue'

  @Component({
    components: {
      NavBar,
      List,
    }
  })
  export default class Index extends Vue {
    public navList: any[] = [ // 导航栏
      {
        src: require('@/assets/role.png'),
        value: '角色',
        isActive: true,
        path: '/role'
      },
      {
        src: require('@/assets/leisure.png'),
        isActive: false,
        value: '休闲',
        path: '/leisure'
      },
      {
        src: require('@/assets/console.png'),
        isActive: false,
        value: '单机',
        path: '/console'
      },
      {
        src: require('@/assets/chess.png'),
        isActive: false,
        value: '棋牌',
        path: '/chess'
      },
      {
        src: require('@/assets/action.png'),
        isActive: false,
        value: '动作',
        path: '/action'
      },
      {
        src: require('@/assets/shoot.png'),
        isActive: false,
        value: '射击',
        path: '/shoot'
      },
    ];
    public list: any[] = [{
        icon: require('@/assets/MonumentValley.png'),
        name: '纪念碑谷',
        intro: '艺术品级的揭秘游戏',
        isDisable: false,
        status: '下载',
      },
      {
        icon: require('@/assets/paopale.png'),
        name: '头脑特工对队：泡泡乐',
        isDisable: false,
        status: '下载',
        intro: '迪士尼满分泡泡龙'
      },
      {
        icon: require('@/assets/castle.png'),
        name: '城堡突袭2',
        isDisable: false,
        status: '下载',
        intro: '年度塔防 不得不玩'
      },
      {
        icon: require('@/assets/endless.png'),
        name: '无尽吞噬',
        isDisable: false,
        status: '下载',
        intro: '优雅的吃掉你'
      },
      {
        icon: require('@/assets/twoDots.png'),
        name: 'TwoDots：冒险之旅',
        isDisable: false,
        status: '下载',
        intro: '玩的完全停不下来'
      },
    ];
    public move: Object = { // css切换动效
      transform: 'translate(0px,0px)',
      transition: 'transform 0.35s',
    };
    public navMove: Object = { // css切换动效
      transform: 'translate(0px,0px)',
      transition: 'transform 0.35s',
    };

    public startPosX: number = 0;
    public endPosX: number = 0;
    public count: number = 0;

    public clickTab(i: number) {
      this.move = { // css切换动效
        transform: `translate(${-i*7.5}rem,0px)`,
        transition: 'transform 0.35s',
      };
      this.navMove = {
        transform: `translate(${100*i}%,0px)`,
        transition: 'transform 0.35s',
      }
      this.navList.forEach(item => {
        item.isActive = false;
      });
      this.navList[i].isActive = true;
    }

    public mounted() {
      const width = '750px'
      const ele: any = this.$refs.swiperBox;
      ele.style.width = width;
    }

    public onMovestart(e: any): void {
      this.startPosX = e.changedTouches[0].pageX;
    }
    public onMoveEnd(e: any): void {
      this.endPosX = e.changedTouches[0].pageX;
      if (this.endPosX - this.startPosX > 0) {
        this.clickTab(--this.count);
      } else {
        this.clickTab(++this.count);
      }

    }

  }

</script>
<style lang="less" scoped>
  @import "../src/stylesheet/reset.css";

  #app {
    overflow-x: hidden;
  }

  .swiperBox {
    display: flex;
    padding-top: 155px;
  }

  .swiper {
    &.isActive {
      transform: translate(-300px);
    }
  }

</style>
