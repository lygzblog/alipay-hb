/*
 * @Author: 羚羊公子
 * @FilePath: \alipay-hb\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    open: true,//启动项目自动弹出浏览器
    port: "8080",
    proxy: {
      '/api': {
        // target: 'http://127.0.0.1:8888',
        changeOrigin: true,  // 允许跨域
        rewrite: path => path.replace(/^\/api/, '')
      },
    },
    allowedHosts: [
      'chainroad.cn', // 允许访问的域名地址，即frp网穿透的地址
      '.chainroad.cn'   // .是二级域名的通配符   
    ],
  }
})
