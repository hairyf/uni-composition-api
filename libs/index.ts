/*
 * @Author: Mr.Mao
 * @Date: 2021-03-20 12:42:35
 * @LastEditTime: 2021-04-29 17:51:03
 * @Description: 入口文件
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Vue, { VueConstructor } from 'vue';
import compositionPatch from './applets-repair';
import { PLATFORM } from './global';

export * from './lifecycle-hooks';

export default (Vue: VueConstructor<Vue>) => {
  const createHookMixinFuc = (lifecycle: string) => {
    const containerName = `__${lifecycle.toLocaleUpperCase()}_HOOKS__`;
    return function (this: any, ...args: any[]) {
      if (Array.isArray(this[containerName])) {
        let currentResult = undefined;
        this[containerName].forEach((hook: any) => {
          const result = hook(...args);
          if (typeof result !== 'undefined') {
            currentResult = result;
          }
        });
        if (typeof currentResult !== 'undefined') {
          return currentResult;
        }
      }
    };
  };
  Vue.mixin({
    onLoad: createHookMixinFuc('onLoad'),
    onShow: createHookMixinFuc('onShow'),
    onReady: createHookMixinFuc('onReady'),
    onHide: createHookMixinFuc('onHide'),
    onUnload: createHookMixinFuc('onUnload'),
    onPullDownRefresh: createHookMixinFuc('onPullDownRefresh'),
    onReachBottom: createHookMixinFuc('onReachBottom'),
    onShareAppMessage: createHookMixinFuc('onShareAppMessage') as any,
    onShareTimeline: createHookMixinFuc('onShareTimeline') as any,
    onAddToFavorites: createHookMixinFuc('onAddToFavorites') as any,
    onPageScroll: createHookMixinFuc('onPageScroll'),
    onResize: createHookMixinFuc('onResize'),
    onTabItemTap: createHookMixinFuc('onTabItemTap'),
    onNavigationBarButtonTap: createHookMixinFuc('onNavigationBarButtonTap'),
    onBackPress: createHookMixinFuc('onBackPress'),
    onNavigationBarSearchInputChanged: createHookMixinFuc('onNavigationBarSearchInputChanged'),
    onNavigationBarSearchInputConfirmed: createHookMixinFuc('onNavigationBarSearchInputConfirmed'),
    onNavigationBarSearchInputClicked: createHookMixinFuc('onNavigationBarSearchInputClicked'),
    onInit: createHookMixinFuc('onInit'),
    onLaunch: createHookMixinFuc('onLaunch'),
    onError: createHookMixinFuc('onError'),
    onPageNotFound: createHookMixinFuc('onPageNotFound'),
    onThemeChange: createHookMixinFuc('onThemeChange'),
    onUnhandledRejection: createHookMixinFuc('onUnhandledRejection'),
    onUniNViewMessage: createHookMixinFuc('onUniNViewMessage'),
  });
  if (PLATFORM == 'mp-weixin') compositionPatch();
};