/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-07 10:18:13
 * @LastEditTime: 2021-01-23 09:35:53
 * @Description: 模块补充说明文件
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { Store } from 'vuex';
declare module 'vue/types/vue' {
  interface Vue {
    // 该Store中泛型参数为state属性
    $store: Store<any>;
    $systemInfo: UniApp.GetSystemInfoResult;
    $customTabBarHeight: nubmer;
    $customNavbarOffsetTop: number;
    $navigateBack: (delta?: number) => void;
    $navigateTo: (path: string, params?: WillObject) => void;
    $redirectTo: (path: string, params?: WillObject) => void;
    $reLaunch: (path: string, params?: WillObject) => void;
    $switchTab: (path: string, params?: WillObject) => void;
    $navigateBack: (path: string, params?: WillObject) => void;
    $filterOutNumber: (str: string) => number | '';
    $format: (timeStamp: number, timeFormat?: string) => string;
    $lookMap: (
      latitude: string | number,
      longitude: string | number
    ) => Promise<[any, any]>;
    $numberToChinese: (number: number) => string;
    $u: any;
  }
}
