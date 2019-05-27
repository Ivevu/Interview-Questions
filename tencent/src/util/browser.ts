// App类型
enum App {
  WECHAT = 1,
  ALIPAY = 2,
  QQ = 3,
  OTHER = 4
}
// 判断是否是UC浏览器
export const isUC = () => {
  /* 业务变更，不需要判断浏览器 */
  return true;
  // if (navigator.userAgent.indexOf('UCBrowser') > -1 || navigator.userAgent.indexOf('HuaweiBrowser') > -1) {
  //   return true;
  // }
  // else {
  //   //非uc浏览器
  //   return false;
  // }
};

// 判断支付宝和微信客户端
const ua = window.navigator.userAgent.toLowerCase();

const isIosQQ = ua.indexOf(" qq") > -1 && ua.indexOf("mqqbrowser") < 0;
const isAndroidQQ =
  /(Android)/i.test(navigator.userAgent) &&
  /MQQBrowser/i.test(navigator.userAgent) &&
  /\sQQ/i.test(navigator.userAgent.split("MQQBrowser")[1]);

export const app = () => {
  if (/MicroMessenger/.test(window.navigator.userAgent)) {
    return App.WECHAT;
  } else if (/AlipayClient/.test(window.navigator.userAgent)) {
    return App.ALIPAY;
  } else if (isIosQQ || isAndroidQQ) {
    return App.QQ;
  } else {
    return App.OTHER;
  }
};
// 判断手机IOS还是Android
export const os = () => {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    return "Android";
  } else if (isiOS) {
    return "ios";
  } else {
    return "none";
  }
};
