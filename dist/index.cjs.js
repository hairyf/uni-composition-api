'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var compositionApi = require('@vue/composition-api');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

const compositionPatch = () => {
  const oldPatch = Vue__default['default'].prototype.__patch__;
  Vue__default['default'].prototype.__patch__ = function(...arg) {
    var _a;
    if (this._computedWatchers === void 0) {
      this._computedWatchers = {};
    }
    const currentData = this._data;
    const rawBindings = (_a = this.__composition_api_state__) == null ? void 0 : _a.rawBindings;
    if (rawBindings) {
      Object.keys(rawBindings).forEach((key) => {
        if (process.env.NODE_ENV === "development") {
          const vitem = rawBindings[key];
          if (compositionApi.isRef(vitem)) {
            if (compositionApi.isReadonly(vitem)) {
              this._computedWatchers[key] = vitem;
            } else {
              currentData[key] = vitem;
            }
          }
        } else {
          currentData[key] = void 0;
        }
      });
    }
    oldPatch.call(this, ...arg);
  };
};

var _a;
const PLATFORM = typeof process !== "undefined" ? (_a = process == null ? void 0 : process.env) == null ? void 0 : _a.VUE_APP_PLATFORM : void 0;

const createHook = (lifecycle) => {
  return (hook) => {
    const containerName = `__${lifecycle.toLocaleUpperCase()}_HOOKS__`;
    const currentContext = compositionApi.getCurrentInstance();
    if (!currentContext) {
      throw Error(`\u8BFB\u53D6\u5F53\u524D\u4E0A\u4E0B\u6587\u5931\u8D25, \u8BF7\u786E\u4FDD\u5728 setup \u4E2D\u6267\u884C ${lifecycle}`);
    }
    if (Array.isArray(currentContext.proxy[containerName])) {
      currentContext.proxy[containerName].push(hook);
    } else {
      currentContext.proxy[containerName] = [hook];
    }
  };
};
const onLoad = createHook("onLoad");
const onShow = createHook("onShow");
const onReady = createHook("onReady");
const onHide = createHook("onHide");
const onUnload = createHook("onUnload");
const onPullDownRefresh = createHook("onPullDownRefresh");
const onReachBottom = createHook("onReachBottom");
const onShareAppMessage = createHook("onShareAppMessage");
const onShareTimeline = createHook("onShareTimeline");
const onAddToFavorites = createHook("onAddToFavorites");
const onPageScroll = createHook("onPageScroll");
const onResize = createHook("onResize");
const onTabItemTap = createHook("onTabItemTap");
const onNavigationBarButtonTap = createHook("onNavigationBarButtonTap");
const onBackPress = createHook("onBackPress");
const onNavigationBarSearchInputChanged = createHook("onNavigationBarSearchInputChanged");
const onNavigationBarSearchInputConfirmed = createHook("onNavigationBarSearchInputConfirmed");
const onNavigationBarSearchInputClicked = createHook("onNavigationBarSearchInputClicked");
const onInit = createHook("onInit");
const onError = createHook("onError");
const onLaunch = createHook("onLaunch");
const onPageNotFound = createHook("onPageNotFound");
const onThemeChange = createHook("onThemeChange");
const onUnhandledRejection = createHook("onUnhandledRejection");
const onUniNViewMessage = createHook("onUniNViewMessage");

var index = (Vue2) => {
  const createHookMixinFuc = (lifecycle) => {
    const containerName = `__${lifecycle.toLocaleUpperCase()}_HOOKS__`;
    return function(...args) {
      if (Array.isArray(this[containerName])) {
        let currentResult = void 0;
        this[containerName].forEach((hook) => {
          const result = hook(...args);
          if (typeof result !== "undefined") {
            currentResult = result;
          }
        });
        if (typeof currentResult !== "undefined") {
          return currentResult;
        }
      }
    };
  };
  Vue2.mixin({
    onLoad: createHookMixinFuc("onLoad"),
    onShow: createHookMixinFuc("onShow"),
    onReady: createHookMixinFuc("onReady"),
    onHide: createHookMixinFuc("onHide"),
    onUnload: createHookMixinFuc("onUnload"),
    onPullDownRefresh: createHookMixinFuc("onPullDownRefresh"),
    onReachBottom: createHookMixinFuc("onReachBottom"),
    onShareAppMessage: createHookMixinFuc("onShareAppMessage"),
    onShareTimeline: createHookMixinFuc("onShareTimeline"),
    onAddToFavorites: createHookMixinFuc("onAddToFavorites"),
    onPageScroll: createHookMixinFuc("onPageScroll"),
    onResize: createHookMixinFuc("onResize"),
    onTabItemTap: createHookMixinFuc("onTabItemTap"),
    onNavigationBarButtonTap: createHookMixinFuc("onNavigationBarButtonTap"),
    onBackPress: createHookMixinFuc("onBackPress"),
    onNavigationBarSearchInputChanged: createHookMixinFuc("onNavigationBarSearchInputChanged"),
    onNavigationBarSearchInputConfirmed: createHookMixinFuc("onNavigationBarSearchInputConfirmed"),
    onNavigationBarSearchInputClicked: createHookMixinFuc("onNavigationBarSearchInputClicked"),
    onInit: createHookMixinFuc("onInit"),
    onLaunch: createHookMixinFuc("onLaunch"),
    onError: createHookMixinFuc("onError"),
    onPageNotFound: createHookMixinFuc("onPageNotFound"),
    onThemeChange: createHookMixinFuc("onThemeChange"),
    onUnhandledRejection: createHookMixinFuc("onUnhandledRejection"),
    onUniNViewMessage: createHookMixinFuc("onUniNViewMessage")
  });
  if (PLATFORM == "mp-weixin")
    compositionPatch();
};

exports.default = index;
exports.onAddToFavorites = onAddToFavorites;
exports.onBackPress = onBackPress;
exports.onError = onError;
exports.onHide = onHide;
exports.onInit = onInit;
exports.onLaunch = onLaunch;
exports.onLoad = onLoad;
exports.onNavigationBarButtonTap = onNavigationBarButtonTap;
exports.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;
exports.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;
exports.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;
exports.onPageNotFound = onPageNotFound;
exports.onPageScroll = onPageScroll;
exports.onPullDownRefresh = onPullDownRefresh;
exports.onReachBottom = onReachBottom;
exports.onReady = onReady;
exports.onResize = onResize;
exports.onShareAppMessage = onShareAppMessage;
exports.onShareTimeline = onShareTimeline;
exports.onShow = onShow;
exports.onTabItemTap = onTabItemTap;
exports.onThemeChange = onThemeChange;
exports.onUnhandledRejection = onUnhandledRejection;
exports.onUniNViewMessage = onUniNViewMessage;
exports.onUnload = onUnload;
