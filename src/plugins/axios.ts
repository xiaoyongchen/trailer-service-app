import axios from 'axios';
import qs from 'qs';
import { AXIOS_DEFAULT_CONFIG } from './axiosConfig';
import { isObject, isArray, isBoolean, pickBy, isNumber, isString } from 'lodash';
// import { requestFailFunc, requestSuccessFunc, responseFailFunc, responseSuccessFunc } from './axiosInterceptors';

/**
 * @param config 请求参数 拓展了过滤|序列化|请求提前拦截 filterParams stringify advance
 */
export default function request(config: YZSRequest): any {
  let { url, method, filterParams = true, stringify = false, params = {}, data = {} } = config || {};
  // 首字符应该为“/”
  if (typeof url === 'string' && !/^\//.test(url)) {
    url = '/' + url;
  }

  let _data = { ...params, ...data } ?? {};
  if (filterParams) {
    _data = filterEmptyParams(_data);
  }

  // post请求后端的配置是否是application/x-www-form-urlencoded：需要设置为true。需要序列化。
  if (stringify) {
    _data = qs.stringify(_data);
  }

  if (method === 'GET') {
    config.params = _data;
  }
  if (method !== 'GET') {
    config.data = _data;
  }

  // 初始化请求。
  const xiosInstance = axios.create({
    ...AXIOS_DEFAULT_CONFIG,
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
      Authorization: 'eyJ0eXAiOiJKV1QiLCJ2ZXJzaW9uIjoiVjMwIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiIxMjU5NjM2NTU1NjE1MDc4MDkiLCJqdGkiOiIxNzE2OTI5NDk3NTYyNjgyMzMiLCJpc3MiOiI5NTE4NTY2NjUxMTE5NjQzIiwiaWF0IjoxNzAxMDQ5MDIwLCJleHAiOjE3MDEwNzMwMjAsImF1ZCI6IjIyNTUwNjE4NDEzNjc2NTQ0IiwiciI6Ilx1RDg1Nlx1REVBMuSMgOWvh1x1RDg2N1x1REQwNCIsIm5pY2siOiLpmYjlsI_li4ciLCJpbmRlbnRpdHkiOjEyNTk2MzY1NTU2MTUwNzgwOCwib3JnUm9vdElkIjo0MCwiaHVpZCI6ImN4eTIxNjEiLCJjbGllbnQiOiIifQ.5a85O3UuBrHcNlA56tD4ocdLt-74dQ0RMZLssjpkbgKCWBJMSgLRz6uWTKgBl8iSNOLSiwd64l2dPAxplOcLxA',
      ...(config.headers && { ...config.headers }),
    }
  });

  // xiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc);
  // xiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc);

  return xiosInstance(config);
}

// 只做第一层判断，宽泛处理
export const filterEmptyParams = <T>(requestParams: FormData | Object  ): T | unknown => {
  if (!Reflect.ownKeys(requestParams)?.length && isObject(requestParams)) {
    return requestParams;
  }
  // data | params 直接是个数组不做处理。
  if (isArray(requestParams)) {
    return requestParams ;
  }
  const isFormData =
    Object.prototype.toString.call(requestParams) === "[object FormData]";

  const checkParams = <P>(value: P): P | unknown => {
    if (isObject(value)) {
      if (isArray(value)) {
        return value?.length;
      }
      return Reflect.ownKeys(value)?.length;
    }
    if (isBoolean(value)) {
      return true;
    }
    if (isNumber(value)) {
      return true;
    }
    if (isString(value)) {
      return value?.length;
    }
    return false;
  };


  if (isFormData && requestParams) {
    const newFormData = <FormData>requestParams;
    newFormData?.forEach((value: FormDataEntryValue, key: string) => {
      const flag = checkParams(value);
      !flag && newFormData.delete(key);
    });
    return newFormData;
  }

  return pickBy(requestParams, checkParams);
};