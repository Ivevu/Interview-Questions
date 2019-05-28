<template>
  <List :list="list"></List>
</template>
<script lang="ts">
  import {
    Component,
    Vue,
    Prop
  } from "vue-property-decorator";
  import List from '@/components/List.vue'
  @Component({
    components: {
      List,
    }
  })
  export default class Shoot extends Vue {
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
  }

</script>
<style lang="less" scoped>

</style>
