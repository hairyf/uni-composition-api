import VueCompositionAPI from '@vue/composition-api';
import compositionPatch from './applets-repair';
import { PLATFORM } from './global';
export * from './lifecycle-hooks';
export * from '@vue/composition-api';
export default (Vue) => {
    const createHookMixinFuc = (lifecycle) => {
        const containerName = `__${lifecycle.toLocaleUpperCase()}_HOOKS__`;
        return function (...args) {
            if (Array.isArray(this[containerName])) {
                let currentResult = undefined;
                this[containerName].forEach((hook) => {
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
        onShareAppMessage: createHookMixinFuc('onShareAppMessage'),
        onShareTimeline: createHookMixinFuc('onShareTimeline'),
        onAddToFavorites: createHookMixinFuc('onAddToFavorites'),
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
    if (PLATFORM !== 'h5')
        compositionPatch();
    Vue.use(VueCompositionAPI);
};
