# 🧧 支付宝赏金红包自动领取脚本

本脚本由羚羊公子开源，用于微信内部以及浏览器环境下，自动跳转到支付宝实现自动领取赏金红包。不涉及各类危险问题，但如果你使用该脚本，则需要自行承担使用过程产生的各类未知问题，以及各类安全风险。支付宝赏金红包自动领取脚本源码，让你轻松引流赚钱红包！

![](https://raw.githubusercontent.com/lygzblog/githubImg/refs/heads/main/alipay-hb-1.jpg)

# 💻 部署教程

本项目使用环境变量来配置支付宝用户 ID 和赏金二维码 token，以便大家配置自己的用户 ID 和红包 Token。

## 打开 config.js 配置文件

配置里面的支付宝用户 ID`VITE_ALIPAY_USER_ID`和赏金二维码 token`VITE_QR_TOKEN`

![](https://raw.githubusercontent.com/lygzblog/githubImg/refs/heads/main/alipay-hb-2.png)

### 获取支付宝用户 ID

使用支付宝扫码即可获得你自己的`用户ID`

![](https://raw.githubusercontent.com/lygzblog/githubImg/refs/heads/main/alipay-hb-3.jpg)

### 获取赏金二维码解码后的 Token 获取

微信内扫你自己的红包二维码，即可获得一串 Token，下图是我的红包二维码。

![](https://raw.githubusercontent.com/lygzblog/githubImg/refs/heads/main/alipay-hb-4.jpg)

## 温馨提示

> 如果会开发可以克隆仓库代码执行`npm run dev`运行，执行`npm run build`进行打包，然后把打包后的`dist`目录压缩上传部署！

如果没有开发经验可以直接下载打包好的`dist`文件进行上传部署！
