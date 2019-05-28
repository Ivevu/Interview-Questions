<template>
  <div id="app" @touchstart="onMovestart($event)" @touchend="onMoveEnd($event)" ref="app">
    <NavBar :move="navMove" :navList="navList" @clickTab="clickTab"></NavBar>
    <div :class="['swiperBox']" :style="move" ref="swiperBox">
      <div class="swiper" v-for="(item,index) in  navList" :key="index">
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
  import {
    Query
  } from "@/services/api";
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
    public list: any[] = [];
    public move: Object = { // 页面css切换动效
      transform: 'translate(0px,0px)',
      transition: 'transform 0.35s',
    };
    public navMove: Object = { // 导航栏css切换动效
      transform: 'translate(0px,0px)',
      transition: 'transform 0.35s',
    };

    public startPosX: number = 0; // 触摸起点 X坐标
    public startPosY: number = 0;
    public endPosX: number = 0;
    public endPosY: number = 0;
    public count: number = 0; // 移动次数

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
      this.getGameList((i + 1) * 6);
      window.scrollTo(0, 0);
    }
    public created() {
      this.getGameList(10);
    }

    public mounted() {
      const width = '750px'
      const ele: any = this.$refs.swiperBox;
      ele.style.width = width;
    }

    public onMovestart(e: any): void {
      this.startPosX = e.changedTouches[0].pageX;
      this.startPosY = e.changedTouches[0].pageY;
    }
    public onMoveEnd(e: any) {
      this.endPosX = e.changedTouches[0].pageX;
      this.endPosY = e.changedTouches[0].pageY;
      // 左移动和右移动的判断条件
      if (this.endPosX > this.startPosX && Math.abs(this.endPosY - this.startPosY) < 50 && Math.abs(this.endPosX -
          this.startPosX) > 50 && this.count > 0) {
        this.clickTab(--this.count);
        this.getGameList(6);
        window.scrollTo(0, 0);
      } else if (this.endPosX < this.startPosX && Math.abs(this.endPosY - this.startPosY) < 50 && Math.abs(this
          .endPosX - this.startPosX) > 50 && this.navList
        .length > this.count + 1) {
        this.clickTab(++this.count);
        this.getGameList(12);
        window.scrollTo(0, 0);
      }
    }
    // 获取分类列表
    public getGameList(num: number) {
      Query(num).then(res => {
        this.list = res.gameList
      }).catch(error => {
        // 其他错误
      })
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
