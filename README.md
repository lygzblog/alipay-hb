# 🧧 支付宝赏金红包自动领取脚本

本脚本由羚羊公子开源，用于微信内部以及浏览器环境下，自动跳转到支付宝实现自动领取赏金红包。不涉及各类危险问题，但如果你使用该脚本，则需要自行承担使用过程产生的各类未知问题，以及各类安全风险。支付宝赏金红包自动领取脚本源码，让你轻松引流赚钱红包！

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/3f7ec525a8386146320ee8ff937e9792bcc12ec50db22ba8d876955b2a3fb81781f56aa4e9f2c00a12809d9b79ac66b6?pictype=scale&from=30013&version=3.3.3.3&fname=april_2025-08-02-10-07-05-047.webp&size=1080)

# 💻 部署教程

本项目使用环境变量来配置支付宝用户 ID 和赏金二维码 token，以便大家配置自己的用户 ID 和红包 Token。

## 打开 config.js 配置文件

配置里面的支付宝用户 ID`VITE_ALIPAY_USER_ID`和赏金二维码 token`VITE_QR_TOKEN`

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/651f5ea8f5d96350efd2c63f26ac67619499aab380b66cebe512b4d8d3181f91f7da25857bf9b1add7a5bff12eb3f663?pictype=scale&from=30013&version=3.3.3.3&fname=1280X1280.webp&size=1080)

### 获取支付宝用户 ID

使用支付宝扫码即可获得你自己的`用户ID`

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/85a401666c463b1daf72fffa3dbcf9fe7187c35d159ef37243f38050ce39e850fa4a2920b791db1a32c5c75acc2809f0?pictype=scale&from=30013&version=3.3.3.3&fname=1280X1280%20%281%29%20%281%29.webp&size=1080)

### 获取赏金二维码解码后的 Token 获取

微信内扫你自己的红包二维码，即可获得一串 Token，下图是我的红包二维码。

![](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/f8fd3b9d11cb9c608cad839fd3aafd22e62d5de8ab7c0c781c5225dd210f407a91865c3716d25ab45d8be5454cda2479?pictype=scale&from=30013&version=3.3.3.3&fname=1280X1280%20%281%29.webp&size=1080)

## 温馨提示

> 如果会开发可以克隆仓库代码执行`npm run dev`运行，执行`npm run build`进行打包，然后把打包后的`dist`目录压缩上传部署！

如果没有开发经验可以直接下载打包好的`dist`文件进行上传部署！
