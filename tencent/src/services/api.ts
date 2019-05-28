import { Http } from "./http";
import Interface from "./interface";
import * as Params from "./params";

const http = new Http();

// 请求地址
export const BASEURL = http.set();

/**
 * @description 通用接口
 */

// 获取登录框url接口
export const Query = (params: any): Promise<any> => {
  return http.Post(Interface.query, { num: params });
};
