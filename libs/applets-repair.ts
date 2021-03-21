/*
 * @Author: Mr.Mao
 * @Date: 2021-03-20 12:42:41
 * @LastEditTime: 2021-03-20 16:54:21
 * @Description: 小程序 compositionApi 补丁
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Vue from 'vue';
import { isRef, isReadonly } from '@vue/composition-api';
const compositionPatch = () => {
  /** uni-app 会在 beforeUpdate 的时候调用这个函数来进行和微信进程数据的交换 */
  const oldPatch = Vue.prototype.__patch__;
  Vue.prototype.__patch__ = function (...arg: any) {
    if (this._computedWatchers === undefined) {
      this._computedWatchers = {};
    }
    const currentData = this._data;
    const rawBindings = this.__composition_api_state__?.rawBindings;
    if (rawBindings) {
      Object.keys(rawBindings).forEach((key) => {
        if (process.env.NODE_ENV === 'development') {
          const vitem = rawBindings[key];
          if (isRef(vitem)) {
            /**  只读的值一般是计算属性，所以放到computed中，要是放到data中uni-app会尝试写，这样导致报错 */
            if (isReadonly(vitem)) {
              this._computedWatchers[key] = vitem;
            } else {
              currentData[key] = vitem;
            }
          }
        } else {
          currentData[key] = undefined;
        }
      });
    }
    oldPatch.call(this, ...arg);
  };
};
export default compositionPatch;
