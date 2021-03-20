/*
 * @Author: Mr.Mao
 * @Date: 2021-03-20 12:42:35
 * @LastEditTime: 2021-03-20 15:42:49
 * @Description: 入口文件
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Vue, { VueConstructor } from 'vue';
import VueCompositionAPI from '@vue/composition-api';

import compositionPatch from './applets-repair';

export default (Vue: VueConstructor<Vue>) => {
  if (process?.env?.VUE_APP_PLATFORM !== 'h5') {
    compositionPatch();
  }
  Vue.use(VueCompositionAPI);
};

export * from './lifecycle-hooks';
