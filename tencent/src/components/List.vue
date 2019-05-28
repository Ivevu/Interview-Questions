<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
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
  </div>

</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from "vue-property-decorator";
  @Component
  export default class List extends Vue {
    @Prop() list: any[];
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
  .wrapper {
    width: 750px;
  }

  .content {
    padding: 15px 30px;
    overflow-y: auto;

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
