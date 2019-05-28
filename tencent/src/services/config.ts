export default {
  method: 'get',
  // 基础url前缀
  baseURL: '//mockjs.com/api',
  // 请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  // 参数
  data: {},
  // 设置超时时间,10s
  timeout: 10000,
  // 指示是否跨站点访问控制请求
  withCredentials: true,
  // 返回数据类型
  responseType: 'json',
};
