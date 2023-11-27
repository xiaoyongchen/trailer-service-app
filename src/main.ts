import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
// import uviewPlus from 'uview-plus';


export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  app.use(pinia);
  // app.use(uviewPlus);
  // 如此配置即可
  // uni.$u.setConfig({
  // 	config: {
  // 		unit: 'rpx'
  // 	},
  // });
  return {
    app,
  };
}
