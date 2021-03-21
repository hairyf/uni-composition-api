/*
 * @Author: Mr.Mao
 * @Date: 2021-03-20 15:35:47
 * @LastEditTime: 2021-03-21 12:33:15
 * @Description: 生命周期钩子
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
/** 创建钩子函数 */
// const createHook = <T = () => void>(lifecycle: string, reset?: boolean) => {
//   return (hook: T) => {
//     /** 初始化钩子容器 */
//     const pages = getCurrentPages();
//     const page = pages[pages.length - 1] as Record<string, any>;
//     if (typeof page === 'undefined') {
//       console.error(
//         '获取当前页面实例失败, 请检查是否使用UniCli构建以及确保在页面中setup调用对应的生命周期。'
//       );
//       return;
//     }
//     if (typeof page[lifecycle] === 'undefined' || reset) {
//       page[lifecycle] = hook;
//       return;
//     }
//     if (!Array.isArray(page[lifecycle].hooks)) {
//       const oldPageLoad = page[lifecycle];
//       page[lifecycle] = function (...args: any[]) {
//         page[lifecycle].hooks.forEach((hook: any) => hook(...args));
//         oldPageLoad.bind(this);
//       };
//       page[lifecycle].hooks = [];
//     }
//     page[lifecycle].hooks.push(hook);
//   };
// };

import { getCurrentInstance } from '@vue/composition-api';

const createHook = <T = () => void>(lifecycle: string) => {
  return (hook: T) => {
    /** 初始化钩子容器 */
    const containerName = `__${lifecycle.toLocaleUpperCase()}_HOOKS__`;
    const currentContext = getCurrentInstance() as Record<string, any>;
    if (typeof currentContext === 'undefined') {
      return console.log(
        `读取当前实例失败, 请确保在 setup 中执行 ${lifecycle}`
      );
    }
    if (Array.isArray(currentContext[containerName])) {
      currentContext[containerName].push(hook);
    } else {
      currentContext[containerName] = [hook];
    }
  };
};
/**
 * 生命周期回调 监听页面加载
 *
 * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
 * @param query 打开当前页面路径中的参数
 */
export const onLoad = createHook<Page.PageInstance['onLoad']>('onLoad');
/**
 * 生命周期回调 监听页面初次渲染完成
 *
 * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
 */
export const onShow = createHook<Page.PageInstance['onShow']>('onShow');
/**
 * 生命周期回调 监听页面初次渲染完成
 *
 * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
 */
export const onReady = createHook<Page.PageInstance['onReady']>('onReady');
/**
 * 生命周期回调 监听页面隐藏
 *
 * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，应用切入后台等。
 */
export const onHide = createHook<Page.PageInstance['onHide']>('onHide');
/**
 * 生命周期回调 监听页面卸载
 *
 * 页面卸载时触发。如 `redirectTo` 或 `navigateBack` 到其他页面时。
 */
export const onUnload = createHook<Page.PageInstance['onUnload']>('onUnload');
/**
 * 监听用户下拉动作
 * - 需要在 `pages.json` 的页面配置中开启 `enablePullDownRefresh` 。
 * - 可以通过 `uni.startPullDownRefresh` 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
 * - 当处理完数据刷新后，`uni.stopPullDownRefresh` 可以停止当前页面的下拉刷新。
 */
export const onPullDownRefresh = createHook<
  Page.PageInstance['onPullDownRefresh']
>('onPullDownRefresh');
/**
 * 页面上拉触底事件的处理函数
 * - 可以在 `pages.json` 的页面配置中设置触发距离 `onReachBottomDistance` 。
 * - 在触发距离内滑动期间，本事件只会被触发一次。
 */
export const onReachBottom = createHook<Page.PageInstance['onReachBottom']>(
  'onReachBottom'
);
/**
 * 用户点击右上角转发
 *
 * 监听用户点击页面内转发按钮（`<button>` 组件 `open-type="share"`）或右上角菜单“转发”按钮的行为，并自定义转发内容。
 * @param options 分享发起来源参数
 * @return 转发内容
 */
export const onShareAppMessage = createHook<
  Page.PageInstance['onShareAppMessage']
>('onShareAppMessage');
/**
 * 用户点击右上角转发到朋友圈
 *
 * 监听右上角菜单“分享到朋友圈”按钮的行为，并自定义发享内容。
 */
export const onShareTimeline = createHook<Page.PageInstance['onShareTimeline']>(
  'onShareTimeline'
);
/**
 * 用户点击右上角收藏
 *
 * 监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。
 */
export const onAddToFavorites = createHook<
  Page.PageInstance['onAddToFavorites']
>('onAddToFavorites');
/**
 * 页面滚动触发事件的处理函数
 *
 * 监听用户滑动页面事件。
 * @param options 页面滚动参数
 */
export const onPageScroll = createHook<Page.PageInstance['onPageScroll']>(
  'onPageScroll'
);
/**
 * 页面尺寸改变时触发
 * @param options 页面滚动参数
 */
export const onResize = createHook<Page.PageInstance['onResize']>('onResize');
/**
 * 当前是 tab 页时，点击 tab 时触发
 * @param options tab 点击参数
 */
export const onTabItemTap = createHook<Page.PageInstance['onTabItemTap']>(
  'onTabItemTap'
);
/**
 * 监听原生标题栏按钮点击事件
 * @param options tab 点击参数
 */
export const onNavigationBarButtonTap = createHook<
  Page.PageInstance['onNavigationBarButtonTap']
>('onNavigationBarButtonTap');
/**
 * 监听页面返回
 * @param options tab 点击参数
 * @return 返回 `true` 时阻止页面返回
 */
export const onBackPress = createHook<Page.PageInstance['onBackPress']>(
  'onBackPress'
);
/**
 * 监听原生标题栏搜索输入框输入内容变化事件
 */
export const onNavigationBarSearchInputChanged = createHook<
  Page.PageInstance['onNavigationBarSearchInputChanged']
>('onNavigationBarSearchInputChanged');
/**
 * 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
 */
export const onNavigationBarSearchInputConfirmed = createHook<
  Page.PageInstance['onNavigationBarSearchInputConfirmed']
>('onNavigationBarSearchInputConfirmed');
/**
 * 监听原生标题栏搜索输入框点击事件
 */
export const onNavigationBarSearchInputClicked = createHook<
  Page.PageInstance['onNavigationBarSearchInputClicked']
>('onNavigationBarSearchInputClicked');
