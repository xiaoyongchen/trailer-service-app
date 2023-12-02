const config =  {
  development: {
    MP_WINXIN_APPID: 'wxcfb5b31b7b09d0b1',
    MP_WINXIN_APPSECRET: 'c0480af926b88074a3a2f3b2e07cddd5',
  },
  // TODO 【陈小勇】待填写;
  production: {
    MP_WINXIN_APPID: '',
    MP_WINXIN_APPSECRET: '',
  }
};

type NODE_ENV_TYPE = 'development' | 'production';

const node_env = process.env.NODE_ENV as NODE_ENV_TYPE;

type Config = (typeof config)[keyof typeof config];

export default config[node_env] as Config;