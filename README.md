# composition-api of uni-app and Vue2

兼容 UniAppVue2 中 composition-api 的使用，以及提供UniApp生命周期钩子。

## 多端平台兼容性

|  app   | 微信小程序 | 支付宝小程序 | 百度小程序 | 字节小程序 | QQ小程序 | 快应用 |
| :----: | :--------: | :----------: | :--------: | :--------: | :------: | :----: |
| 未测试 |     √      |    未测试    |   未测试   |   未测试   |  未测试  |   ×    |

| h5-Safari | Android Browser | 微信浏览器(Android) | QQ浏览器(Android) | Chrome |  IE  | Edge | Firefox | pc-Safari |
| :-------: | :-------------: | :-----------------: | :---------------: | :----: | :--: | :--: | :-----: | :-------: |
|     √     |        √        |          √          |         √         |   √    |  ×   |  √   |    √    |     √     |

## 安装 & 使用

注意：uni-composition-api 仅支持 uni-cli 创建的项目，如使用TypeScript，TypeScript 版本需要 **>3.5.1** 以上。

### npm & ESM

~~~
npm i @vue/composition-api uni-composition-api -D
~~~

### main.js  introduce。

~~~js
import UniCompositionAPI from 'uni-composition-api';
Vue.use(UniCompositionAPI);
~~~

### index.vue use

~~~html
<template>
  <div class="index">
    {{ count }}
  </div>
</template>

<script lnag="ts">
import { defineComponent, ref, onLoad } from 'uni-composition-api';
// 如使用TypeScript，你需要使用 defineComponent 使 composition-api 能正确推断 Vue 组件选项中的类型
export default defineComponent({
  components: {},
  setup() {
    onLoad(() => console.log('---onload---'));
    const count = ref(0);
    return { count };
  },
});
</script>

<style lang="scss"></style>
~~~

## 生命周期支持

注意：onShareAppMessage，onShareTimeline，onAddToFavorites队列会向后查找返回值, 并自动 return 该返回值。

~~~js
import {
  // 生命周期钩子 监听页面加载
  onLoad,
  // 生命周期钩子 监听页面显示
  onShow,
  // 生命周期钩子 监听页面初次渲染完成
  onReady,
  // 生命周期钩子 监听页面隐藏
  onHide,
  // 生命周期钩子 监听页面卸载
  onUnload,
  // 页面处理钩子 监听用户下拉动作
  onPullDownRefresh,
  // 页面处理钩子 上拉触底事件的处理函数
  onReachBottom,
  // 页面处理钩子 用户点击右上角转发(需要返回值)
  onShareAppMessage,
  // 页面处理钩子 用户点击右上角转发到朋友圈(需要返回值)
  onShareTimeline,
  // 页面处理钩子 用户点击右上角收藏(需要返回值)
  onAddToFavorites,
  // 页面处理钩子 页面滚动触发事件的处理函数
  onPageScroll,
  // 页面处理钩子 页面尺寸改变时触发
  onResize,
  // 页面处理钩子 当前是 tab 页时，点击 tab 时触发
  onTabItemTap,
  // 页面处理钩子 监听原生标题栏按钮点击事件
  onNavigationBarButtonTap,
  // 页面处理钩子 监听页面返回
  onBackPress,
  // 页面处理钩子 监听原生标题栏搜索输入框输入内容变化事件
  onNavigationBarSearchInputChanged,
  // 页面处理钩子 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
  onNavigationBarSearchInputConfirmed,
  // 生命周期回调 监听页面初始化
  onInit,
  // 监听 nvue 页面消息
  onUniNViewMessage,

  // 错误监听函数(App.vue)
  onError,
  // 生命周期回调 监听应用初始化(App.vue)
  onLaunch,
  // 页面不存在监听函数(App.vue)
  onPageNotFound,
  // 监听系统主题变化(App.vue)
  onThemeChange,
  // 未处理的 Promise 拒绝事件监听函数(App.vue)
  onUnhandledRejection,
} from '@/uni-composition-api';
~~~

