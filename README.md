<<<<<<< HEAD
# 支付宝红包页面

基于 Vue 3 + Vite 开发的支付宝红包页面。

## 环境变量配置

本项目使用环境变量来配置支付宝用户ID和赏金二维码token，以便在不同环境中使用不同的配置。

### 环境变量文件

项目包含以下环境变量文件：

- `.env`：所有环境都会加载的默认配置
- `.env.development`：开发环境配置，在运行 `npm run dev` 时加载
- `.env.production`：生产环境配置，在运行 `npm run build` 时加载

### 可配置的环境变量

- `VITE_APP_ALIPAY_USER_ID`：支付宝用户ID
- `VITE_APP_QR_TOKEN`：赏金二维码token

### 如何使用

1. 在项目根目录创建或修改相应的环境变量文件
2. 设置所需的环境变量值
3. 重启开发服务器或重新构建项目

示例：

```
# .env.development
VITE_APP_ALIPAY_USER_ID=你的支付宝用户ID
VITE_APP_QR_TOKEN=你的赏金二维码token
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```
=======
# alipay-hb
支付宝赏金红包自动领取脚本源码，让你轻松引流赚钱红包！
>>>>>>> 0a1b3043643051db2800556e5afb95b01eab237f
