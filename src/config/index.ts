const config =  {
  MP_WINXIN_APPID: import.meta.env.VITE_APP_WX_APPID,
  MP_WINXIN_APPSECRET: import.meta.env.VITE_APP_WX_SECRET,
  // MP_ALIPAY_APPID: import.meta.env.VITE_APP_WX_APPID,
  // MP_ALIPAY_APPSECRET: import.meta.env.VITE_APP_WX_SECRET,
};

type Config = typeof config;

export default config as Config;