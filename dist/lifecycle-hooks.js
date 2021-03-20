/*
 * @Author: Mr.Mao
 * @Date: 2021-03-20 15:35:47
 * @LastEditTime: 2021-03-20 15:43:46
 * @Description: 生命周期钩子
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
/** 创建钩子函数 */
const createHook = (lifecycle, reset) => {
    return (hook) => {
        /** 初始化钩子容器 */
        const pages = getCurrentPages();
        const page = pages[pages.length - 1];
        if (typeof page[lifecycle] === 'undefined' || reset) {
            page[lifecycle] = hook;
            return;
        }
        if (!Array.isArray(page[lifecycle].hooks)) {
            const oldPageLoad = page[lifecycle];
            page[lifecycle] = function (...args) {
                page[lifecycle].hooks.forEach((hook) => hook(...args));
                oldPageLoad.bind(this);
            };
            page[lifecycle].hooks = [];
        }
        page[lifecycle].hooks.push(hook);
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
export const onShareAppMessage = createHook('onShareAppMessage', true);
/**
 * 用户点击右上角转发到朋友圈
 *
 * 监听右上角菜单“分享到朋友圈”按钮的行为，并自定义发享内容。
 */
export const onShareTimeline = createHook('onShareTimeline', true);
/**
 * 用户点击右上角收藏
 *
 * 监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。
 */
export const onAddToFavorites = createHook('onAddToFavorites', true);
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
