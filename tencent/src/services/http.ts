import axios, { AxiosRequestConfig } from 'axios';
import config from './config';
import router from "../router";
import qs from "qs";
const CancelToken = axios.CancelToken;
export class Http {
  private BASEURL;
  set() {
    this.BASEURL = document.location.protocol + config.baseURL;
    return this.BASEURL;
  }
  constructor() {
    this.requestInterceptor();
    this.responseInterceptor();
    this.set();
  }
  /**
   *
   * @description get请求
   * @param {string} apiUrl 接口地址
   * @param {*} [query] 请求参数
   * @returns
   * @memberof Http
   */
  public Get(apiUrl: string, query?: any) {
    query=query?query:{};
    return axios
      .get(this.BASEURL + apiUrl, { params: query, timeout: config.timeout });
  }
  public GetByUrl(apiUrl:string,query?:any){
    query=query?query:{};
    return axios
      .get(apiUrl,{params:query,timeout:config.timeout})
  }
  /**
   *
   * @description post请求
   * @param {string} apiUrl 接口地址
   * @param {*} [query] 请求参数
   * @param {number} [headerType] 不传默认x-www-urlencoded
   * @returns
   * @memberof Http
   */
  public Post(apiUrl: string, query?: any, headerType?: number) {
    let headers: object = config.headers;
    switch (headerType) {
      case 0:
        headers = {
          'Content-Type': 'application/json;charset=UTF-8',
        };
        break;
      case 1:
        headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        break;
      case 2:
        headers = {
          'Content-Type': 'multipart/form-data',
        };
        break;
      default:
        headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
        break;
    }
    return axios.post(this.BASEURL + apiUrl, qs.stringify(query), { headers, timeout: config.timeout });
  }
  /**
   * @description 请求拦截器，取消重复请求 或者 添加loading
   * @memberof Http
   */
  public requestInterceptor() {
    axios.interceptors.request.use((request: AxiosRequestConfig) => {
      return request;
    }, (error) => {
      return Promise.reject(error);
    });
  }
  /**
   * @description 响应拦截器，统一处理错误情况
   * @memberof Http
   */
  public responseInterceptor() {
    axios.interceptors.response.use((response) => {
      const status = response.status;
      switch (status) {
        case 200:
          return response.data;
        case 302:
          return { status: false, data: `重定向到` + response.data };
        case 400:
          return { status: false, data: response.data ? response.data : '请求错误' };
        case 401:
          return { status: false, data: response.data ? response.data : '请求要求用户的身份认证' };
        case 403:
          // router.push({ path: "/exception/403" });
          return { status: false, data: response.data ? response.data : '网络资源缺失' };
        case 404:
          // router.push({ path: "/exception/404" });
          return { status: false, data: response.data ? response.data : '不存在的资源' };
        case 413:
          return { status: false, data: response.data ? response.data : '上传的资源体积过大' };
        case 500:
          // router.push({ path: "/exception/500" });
          return { status: false, data: response.data ? response.data : '服务器内部错误，无法完成请求' };
        case 501:
          return { status: false, data: response.data ? response.data : '服务器不支持请求的功能，无法完成请求' };
        default:
          return { status: false, data: response.data ? response.data : '未分类的错误,status' + response.status };
      }
    }, (error) => {
      var originalRequest = error.config;
      if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1 && !originalRequest._retry) {
        originalRequest._retry = true;
        // router.push({
        //   path: '/exception/403'
        // })
        return axios.request(originalRequest);
      }
      return Promise.reject(error);
    });
  }
}
