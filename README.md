## 拖车项目

### vue3

### pinia 对应vue版本只能写死


## vue3 最低的版本要求

node：10.13

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm dev:[platform]
```

### Compiles and minifies for production
```
npm build:[platform]
```

### Run your unit tests
```
后续加
```

### Lints and fixes files
```
后续加
```

### 分支功能说明

 * fat 如果这个项目在fat环境 用于多个分支同步开发，用于合并代码发布到服务器，防止代码冲掉
 * release 跟fat一致功能差不多，用于预发布环境
 * master 主分支
 * 业务分支，分支id来取名，发布到线上打了tag删除。

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