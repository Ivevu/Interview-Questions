const Mock = require("mockjs");
const Random = Mock.Random;
const domain = "http://mockjs.com/api";
const RandomData = [
  {
    icon: require("@/assets/MonumentValley.png"),
    name: "纪念碑谷",
    intro: "艺术品级的揭秘游戏",
    isDisable: false,
    status: "下载"
  },
  {
    icon: require("@/assets/paopale.png"),
    name: "头脑特工对队：泡泡乐",
    isDisable: false,
    status: "下载",
    intro: "迪士尼满分泡泡龙"
  },
  {
    icon: require("@/assets/castle.png"),
    name: "城堡突袭2",
    isDisable: false,
    status: "下载",
    intro: "年度塔防 不得不玩"
  },
  {
    icon: require("@/assets/endless.png"),
    name: "无尽吞噬",
    isDisable: false,
    status: "下载",
    intro: "优雅的吃掉你"
  },
  {
    icon: require("@/assets/twoDots.png"),
    name: "TwoDots：冒险之旅",
    isDisable: false,
    status: "下载",
    intro: "玩的完全停不下来"
  }
];
const produceNewsData = request => {
  const num = request.body.split("=")[1];
  let gameList = [];
  for (let i = 0; i < num; i++) {
    let newGameList = RandomData[Math.floor(Math.random() * 5)];
    gameList.push(newGameList);
  }
  return {
    gameList: gameList
  };
};

Mock.mock(`${domain}/getGameList`, "post", produceNewsData);
