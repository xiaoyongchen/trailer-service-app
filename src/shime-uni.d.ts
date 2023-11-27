export {}

declare module "vue" {
  type Hooks = App.AppInstance & Page.PageInstance;
  interface ComponentCustomOptions extends Hooks {}
}

import { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

declare global {

  interface YZSRequest extends AxiosRequestConfig<any> {
    method: Method,
    // 常见的媒体格式
    contentType?: 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'application/octet-stream';
    showLoading?: boolean;
    filterParams?: Boolean, // 是否过滤参数
    stringify?: Boolean,  // 是否需要序列化
    advance?: Boolean, // 是否在网络层获取data
  }

  interface YZSResponse<T = any> extends AxiosResponse {
    config: YZSRequest;
    data: { code?: number, success?: Boolean, lang?: string, msg?: string, data?: T };
  }
  
}

declare module "uview-plus"