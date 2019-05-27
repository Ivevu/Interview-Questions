<template>
  <ul class="list">
    <li class="item" v-for="(item,index) in list" :key="index">
      <img :src="item.icon" alt="" :class="['icon',item.isDisable?'isActive':'']">
      <div class="right">
        <div class="content">
          <p class="name">{{item.name}}</p>
          <p class="intro">{{item.intro}}</p>
        </div>
        <button @click="download(index)" :disabled="item.isDisable" class="download">{{item.status}}</button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "vue-property-decorator";
  @Component
  export default class List extends Vue {
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
    // 点击下载
    public download(i: number): void {
      this.list.forEach((item, index) => {
        if (i == index) {
          item.status = '下载中';
          setTimeout(() => {
            item.status = '已完成';
            item.isDisable = true;
          }, 1000)
        };
      })
    }
  }

</script>

<style lang="less" scoped>
  .list {
    padding: 15px 30px;

    .item {
      display: flex;
    }

    .right {
      padding: 15px 0;
      display: flex;
      flex-grow: 1;
      align-items: center;
      margin-left: 20px;
      border-bottom: 1Px solid rgb(238, 238, 238);

      .name {
        font-size: 32px;
      }

      .intro {
        font-size: 26px;
        padding-top: 14px;
        color: rgb(166, 166, 166);
      }

      .download {
        margin-left: auto;
        height: 60px;
        line-height: 60px;
        outline: none;
        background: #ffffff;
        border-radius: 10px;
        border: none;
        width: 110px;
        border: 1Px solid rgb(202, 204, 205);
        color: rgb(91, 91, 91);
      }
    }
  }

  .icon {
    margin: 15px 0;
    width: 128px;
    height: 128px;

    &.isActive {
      animation: shake 800ms;
    }
  }

  @keyframes shake {

    from,
    to {
      transform: translate3d(0, 0, 0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate3d(-4px, 0, 0);
    }

    20%,
    40%,
    60%,
    80% {
      transform: translate3d(4px, 0, 0);
    }
  }

</style>
