import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import fs from 'fs';
import config from './src/config/index';

const manifestPath = './src/manifest.json'
let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' })
function replaceManifest(path, value) {
  const arr = path.split('.')
  const len = arr.length
  const lastItem = arr[len - 1]

  let i = 0
  let ManifestArr = Manifest.split(/\n/)

  for (let index = 0; index < ManifestArr.length; index++) {
    const item = ManifestArr[index]
    if (new RegExp(`"${arr[i]}"`).test(item)) ++i;
    if (i === len) {
      const hasComma = /,/.test(item)
      ManifestArr[index] = item.replace(new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`), `"${lastItem}": ${value}${hasComma ? ',' : ''}`)
      break;
    }
  }

  Manifest = ManifestArr.join('\n');
}
// 动态改变微信appid
replaceManifest('mp-weixin.appid', config.MP_WINXIN_APPID);

fs.writeFileSync(manifestPath, Manifest, {
  "flag": "w"
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  server: {
    port: 3000,
    proxy: {
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
      // // 正则表达式写法：http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, ''),
      // },
      // // 使用 proxy 实例
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy 是 'http-proxy' 的实例
      //   }
      // },
      // // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      // '/socket.io': {
      //   target: 'ws://localhost:5174',
      //   ws: true,
      // },
      "/vehicle-safety-accident-web": {
        target: "http://api.fat.driverglobe.com", //本地
        changeOrigin: true,
      },
    }
  }
});
