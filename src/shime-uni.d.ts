export {}

declare module "vue" {
  type Hooks = App.AppInstance & Page.PageInstance;
  interface ComponentCustomOptions extends Hooks {}
}

import { InternalAxiosRequestConfig,  AxiosRequest, AxiosResponse, Method } from 'axios';

declare global {

  interface YZSRequest<T = any> extends InternalAxiosRequestConfig<T> {
    // 常见的媒体格式
    contentType?: 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'application/octet-stream';
    showLoading?: boolean;
    filterParams?: Boolean, // 是否过滤参数
    stringify?: Boolean,  // 是否需要序列化
    advance?: Boolean, // 是否在网络层获取data
  }

  interface YZSResponse<T = any, D = any> extends AxiosResponse<T, D> {
    config: AxiosResponse['config'] & YZSRequest;
    data: { code?: number, success?: Boolean, lang?: string, msg?: string, data?: T };
  }
  
}

declare module "uview-plus"