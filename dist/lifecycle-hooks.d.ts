/// <reference types="@dcloudio/types" />
/**
 * 生命周期回调 监听页面加载
 *
 * 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
 * @param query 打开当前页面路径中的参数
 */
export declare const onLoad: (hook: ((query?: AnyObject | undefined) => void) | undefined) => void;
/**
 * 生命周期回调 监听页面初次渲染完成
 *
 * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
 */
export declare const onShow: (hook: (() => void) | undefined) => void;
/**
 * 生命周期回调 监听页面初次渲染完成
 *
 * 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
 */
export declare const onReady: (hook: (() => void) | undefined) => void;
/**
 * 生命周期回调 监听页面隐藏
 *
 * 页面隐藏/切入后台时触发。 如 `navigateTo` 或底部 `tab` 切换到其他页面，应用切入后台等。
 */
export declare const onHide: (hook: (() => void) | undefined) => void;
/**
 * 生命周期回调 监听页面卸载
 *
 * 页面卸载时触发。如 `redirectTo` 或 `navigateBack` 到其他页面时。
 */
export declare const onUnload: (hook: (() => void) | undefined) => void;
/**
 * 监听用户下拉动作
 * - 需要在 `pages.json` 的页面配置中开启 `enablePullDownRefresh` 。
 * - 可以通过 `uni.startPullDownRefresh` 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
 * - 当处理完数据刷新后，`uni.stopPullDownRefresh` 可以停止当前页面的下拉刷新。
 */
export declare const onPullDownRefresh: (hook: (() => void) | undefined) => void;
/**
 * 页面上拉触底事件的处理函数
 * - 可以在 `pages.json` 的页面配置中设置触发距离 `onReachBottomDistance` 。
 * - 在触发距离内滑动期间，本事件只会被触发一次。
 */
export declare const onReachBottom: (hook: (() => void) | undefined) => void;
/**
 * 用户点击右上角转发
 *
 * 监听用户点击页面内转发按钮（`<button>` 组件 `open-type="share"`）或右上角菜单“转发”按钮的行为，并自定义转发内容。
 * @param options 分享发起来源参数
 * @return 转发内容
 */
export declare const onShareAppMessage: (hook: ((options: Page.ShareAppMessageOption) => Page.CustomShareContent) | undefined) => void;
/**
 * 用户点击右上角转发到朋友圈
 *
 * 监听右上角菜单“分享到朋友圈”按钮的行为，并自定义发享内容。
 */
export declare const onShareTimeline: (hook: (() => Page.ShareTimelineContent) | undefined) => void;
/**
 * 用户点击右上角收藏
 *
 * 监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。
 */
export declare const onAddToFavorites: (hook: ((options: Page.AddToFavoritesOption) => Page.CustomFavoritesContent) | undefined) => void;
/**
 * 页面滚动触发事件的处理函数
 *
 * 监听用户滑动页面事件。
 * @param options 页面滚动参数
 */
export declare const onPageScroll: (hook: ((options: Page.PageScrollOption) => void) | undefined) => void;
/**
 * 页面尺寸改变时触发
 * @param options 页面滚动参数
 */
export declare const onResize: (hook: ((options: Page.PageScrollOption) => void) | undefined) => void;
/**
 * 当前是 tab 页时，点击 tab 时触发
 * @param options tab 点击参数
 */
export declare const onTabItemTap: (hook: ((options: Page.TabItemTapOption) => void) | undefined) => void;
/**
 * 监听原生标题栏按钮点击事件
 * @param options tab 点击参数
 */
export declare const onNavigationBarButtonTap: (hook: ((options: Page.NavigationBarButtonTapOption) => void) | undefined) => void;
/**
 * 监听页面返回
 * @param options tab 点击参数
 * @return 返回 `true` 时阻止页面返回
 */
export declare const onBackPress: (hook: ((options: Page.BackPressOption) => any) | undefined) => void;
/**
 * 监听原生标题栏搜索输入框输入内容变化事件
 */
export declare const onNavigationBarSearchInputChanged: (hook: ((event: Page.NavigationBarSearchInputEvent) => void) | undefined) => void;
/**
 * 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
 */
export declare const onNavigationBarSearchInputConfirmed: (hook: ((event: Page.NavigationBarSearchInputEvent) => void) | undefined) => void;
/**
 * 监听原生标题栏搜索输入框点击事件
 */
export declare const onNavigationBarSearchInputClicked: (hook: (() => void) | undefined) => void;
/**
 * 生命周期回调 监听页面初始化
 *
 * 页面初始化时触发。一个页面只会调用一次，可以在 onInit 的参数中获取打开当前页面路径中的参数。
 * @param query 打开当前页面路径中的参数
 */
export declare const onInit: (hook: ((query?: AnyObject | undefined) => void) | undefined) => void;
/**
 * 错误监听函数
 * 小程序发生脚本错误或 API 调用报错时触发
 * @param error 错误信息，包含堆栈
 */
export declare const onError: (hook: ((error: string) => void) | undefined) => void;
/**
 * 生命周期回调 监听应用初始化
 *
 * 应用初始化完成时触发，全局只触发一次。
 */
export declare const onLaunch: (hook: ((options?: App.LaunchShowOption | undefined) => void) | undefined) => void;
/**
 * 页面不存在监听函数
 *
 * 应用要打开的页面不存在时触发，会带上页面信息回调该函数
 *
 * **注意：**
 * 1. 如果开发者没有添加 `onPageNotFound` 监听，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
 * 2. 如果 `onPageNotFound` 回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再回调 `onPageNotFound`。
 */
export declare const onPageNotFound: (hook: ((options: App.PageNotFoundOption) => void) | undefined) => void;
/**
 * 监听系统主题变化
 */
export declare const onThemeChange: (hook: ((options: UniApp.OnThemeChangeCallbackResult) => void) | undefined) => void;
/**
 * 未处理的 Promise 拒绝事件监听函数
 */
export declare const onUnhandledRejection: (hook: ((options: UniApp.OnUnhandledRejectionCallbackResult) => void) | undefined) => void;
/**
 * 监听 nvue 页面消息
 *
 * nvue 页面使用 `uni.postMessage` 发送消息时触发
 */
export declare const onUniNViewMessage: (hook: ((options: AnyObject) => void) | undefined) => void;
