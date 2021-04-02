/*
 * @Author: Mr.Mao
 * @Date: 2021-03-20 15:35:47
 * @LastEditTime: 2021-04-02 16:55:06
 * @Description: 生命周期钩子
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
/** 创建钩子函数 */
import { getCurrentInstance } from '@vue/composition-api';
const createHook = (lifecycle) => {
    return (hook) => {
        /** 初始化钩子容器 */
        const containerName = `__${lifecycle.toLocaleUpperCase()}_HOOKS__`;
        const currentContext = getCurrentInstance();
        if (!currentContext) {
            throw Error(`读取当前上下文失败, 请确保在 setup 中执行 ${lifecycle}`);
        }
        /**
         * 阻止在页面中调用不存在周期函数
         * 问题描述：无法判断当前实例类型为页面, 组件, 还是App.vue
         * 暂无解决方案，关闭当前逻辑
         */
        // const appVueLifecycleRex = /onLaunch|onError|onPageNotFound|onUnhandledRejection|onThemeChange|onUniNViewMessage/
        // const pageVueLifecycleRex = /onLaunch|onError|onPageNotFound|onUnhandledRejection|onThemeChange|onUniNViewMessage|onShow|onHide/
        // const myType = currentContext.proxy?.mpType || currentContext.proxy?.$mp?.mpType
        // const isAppInstance = typeof myType === 'undefined' || currentContext.proxy.mpType === 'app'
        // const isPageInstance = currentContext.proxy.mpType === 'page'
        // const isComponentInstance = currentContext.proxy.mpType === 'component'
        // const prevent  = 
        // isAppInstance && appVueLifecycleRex.test(lifecycle) ||
        // isPageInstance && pageVueLifecycleRex.test(lifecycle) ||
        // isComponentInstance
        // if (prevent) {
        //   throw Error(`当前实例可能不存在 ${lifecycle} 周期函数`)
        // }
        if (Array.isArray(currentContext.proxy[containerName])) {
            currentContext.proxy[containerName].push(hook);
        }
        else {
            currentContext.proxy[containerName] = [hook];
        }
    };
};
/**
 * 生命周期回调 监听页面加载
 *
 * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
 * @param query 打开当前页面路径中的参数
 */
export const onLoad = createHook('onLoad');
/**
 * 生命周期回调 监听页面初次渲染完成
 *
 * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
 */
export const onShow = createHook('onShow');
/**
 * 生命周期回调 监听页面初次渲染完成
 *
 * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
 */
export const onReady = createHook('onReady');
/**
 * 生命周期回调 监听页面隐藏
 *
 * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，应用切入后台等。
 */
export const onHide = createHook('onHide');
/**
 * 生命周期回调 监听页面卸载
 *
 * 页面卸载时触发。如 `redirectTo` 或 `navigateBack` 到其他页面时。
 */
export const onUnload = createHook('onUnload');
/**
 * 监听用户下拉动作
 * - 需要在 `pages.json` 的页面配置中开启 `enablePullDownRefresh` 。
 * - 可以通过 `uni.startPullDownRefresh` 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
 * - 当处理完数据刷新后，`uni.stopPullDownRefresh` 可以停止当前页面的下拉刷新。
 */
export const onPullDownRefresh = createHook('onPullDownRefresh');
/**
 * 页面上拉触底事件的处理函数
 * - 可以在 `pages.json` 的页面配置中设置触发距离 `onReachBottomDistance` 。
 * - 在触发距离内滑动期间，本事件只会被触发一次。
 */
export const onReachBottom = createHook('onReachBottom');
/**
 * 用户点击右上角转发
 *
 * 监听用户点击页面内转发按钮（`<button>` 组件 `open-type="share"`）或右上角菜单“转发”按钮的行为，并自定义转发内容。
 * @param options 分享发起来源参数
 * @return 转发内容
 */
export const onShareAppMessage = createHook('onShareAppMessage');
/**
 * 用户点击右上角转发到朋友圈
 *
 * 监听右上角菜单“分享到朋友圈”按钮的行为，并自定义发享内容。
 */
export const onShareTimeline = createHook('onShareTimeline');
/**
 * 用户点击右上角收藏
 *
 * 监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。
 */
export const onAddToFavorites = createHook('onAddToFavorites');
/**
 * 页面滚动触发事件的处理函数
 *
 * 监听用户滑动页面事件。
 * @param options 页面滚动参数
 */
export const onPageScroll = createHook('onPageScroll');
/**
 * 页面尺寸改变时触发
 * @param options 页面滚动参数
 */
export const onResize = createHook('onResize');
/**
 * 当前是 tab 页时，点击 tab 时触发
 * @param options tab 点击参数
 */
export const onTabItemTap = createHook('onTabItemTap');
/**
 * 监听原生标题栏按钮点击事件
 * @param options tab 点击参数
 */
export const onNavigationBarButtonTap = createHook('onNavigationBarButtonTap');
/**
 * 监听页面返回
 * @param options tab 点击参数
 * @return 返回 `true` 时阻止页面返回
 */
export const onBackPress = createHook('onBackPress');
/**
 * 监听原生标题栏搜索输入框输入内容变化事件
 */
export const onNavigationBarSearchInputChanged = createHook('onNavigationBarSearchInputChanged');
/**
 * 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
 */
export const onNavigationBarSearchInputConfirmed = createHook('onNavigationBarSearchInputConfirmed');
/**
 * 监听原生标题栏搜索输入框点击事件
 */
export const onNavigationBarSearchInputClicked = createHook('onNavigationBarSearchInputClicked');
/**
 * 生命周期回调 监听页面初始化
 *
 * 页面初始化时触发。一个页面只会调用一次，可以在 onInit 的参数中获取打开当前页面路径中的参数。
 * @param query 打开当前页面路径中的参数
 */
export const onInit = createHook('onInit');
/**
 * 错误监听函数
 * 小程序发生脚本错误或 API 调用报错时触发
 * @param error 错误信息，包含堆栈
 */
export const onError = createHook('onError');
/**
 * 生命周期回调 监听应用初始化
 *
 * 应用初始化完成时触发，全局只触发一次。
 */
export const onLaunch = createHook('onLaunch');
/**
 * 页面不存在监听函数
 *
 * 应用要打开的页面不存在时触发，会带上页面信息回调该函数
 *
 * **注意：**
 * 1. 如果开发者没有添加 `onPageNotFound` 监听，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
 * 2. 如果 `onPageNotFound` 回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再回调 `onPageNotFound`。
 */
export const onPageNotFound = createHook('onPageNotFound');
/**
 * 监听系统主题变化
 */
export const onThemeChange = createHook('onThemeChange');
/**
 * 未处理的 Promise 拒绝事件监听函数
 */
export const onUnhandledRejection = createHook('onUnhandledRejection');
/**
 * 监听 nvue 页面消息
 *
 * nvue 页面使用 `uni.postMessage` 发送消息时触发
 */
export const onUniNViewMessage = createHook('onUniNViewMessage');
