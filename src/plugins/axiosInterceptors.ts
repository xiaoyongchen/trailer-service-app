import { CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE } from './axiosConfig';
// import { Toast } from 'uview-plus';
export function requestSuccessFunc(config: YZSRequest): YZSRequest | Promise<YZSRequest> {
  // showLoading在自定义属性，还可以设置其他参数设置
  // const { showLoading = false } = config;
  // showLoading && Toast({ type: 'loading', loading: true, duration: 1000 * 2 * 10,  message: '正在加载' });

  CONSOLE_REQUEST_ENABLE &&
    console.log(
      "color: #f00; requestInterceptorFunc",
      `url: ${config?.url}`,
      config?.method
    );
  return config;
}

export function requestFailFunc(requestError: YZSRequest) {
  CONSOLE_REQUEST_ENABLE &&
    console.info(
      "requestInterceptorFunc",
      `url: ${requestError.url}`,
      requestError
    );

  return Promise.reject(requestError);
}

export function responseSuccessFunc(response: YZSResponse): YZSResponse | Promise<YZSResponse> {
  CONSOLE_RESPONSE_ENABLE &&
    console.info("响应返回成功", `url: ${response.config.url}`, response);
  // const { showLoading } = response.config || {};
  // showLoading && Toast({ type: 'loading', loading: false,  message: '' });
  if (response.status !== 200) {
    // response?.statusText && message.error(responseObj.statusText);
    // 处理系统报错 todo...
    return Promise.reject(response);
  }

  // 在剩余参数设置这个属性，提前拦截处理数据,
  // 比如处理文件为blob的文件格式的类型，提前交予业务自己处理
  const { advance = false } = response?.config || {};
  if (advance) {
    return response;
  }

  if (!response.data.success) {
    // 处理业务报错todo...
    // response?.data?.errMessage && message.error(responseObj.data.errMessage);
    // const msg = response.data?.errMessage || response.data.msg;
    // msg && Toast({
    //   type: 'error',
    //   message: msg
    // });

    return Promise.reject(response.data);
  }

  //@ts-ignore
  return response.data;
}

export function responseFailFunc(responseError: any) {
  // const msg = responseError.message || responseError?.response?.status;
  // msg && Toast({
  //   type: 'error',
  //   message: msg
  // });

  // 网络层拦截
  if (responseError?.response?.status == 401) {
    // TODO 【陈小勇】登出;
    uni.navigateTo({
      url: '/pages/login/index'
    });
    return Promise.reject(responseError);
  }

  // TODO 【陈小勇】其他拦截 todo...;
  return Promise.reject(responseError);
}
