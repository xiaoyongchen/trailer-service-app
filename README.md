## 拖车项目

### vue3

### pinia 对应vue版本只能写死

###


### 项目结构
├── src // 存放webpack编译脚本
│   ├── plugins // 请求等工具类
│   ├── storage // 数据持久化
│   ├── components // 通用组件
│   ├── constants // 常量配置
│   ├── hooks // 自定义hooks
│   ├── store // pinia依赖的models
│   ├── pages.json // 路由配置
│   ├── static // 资源文件图片矢量图标
│   └── utils   // 工具类
│   └── App.vue   // 入口文件类似于iOS的Application入口代理文件
│   └── main.ts   // 挂载入口配置文件
│   └── manifest.json   // 打包配置文件
├── env.* // vite的环境配置
├── .gitignore 
└── README.md