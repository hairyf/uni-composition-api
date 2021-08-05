/*
 * @Author: Mr.Mao
 * @Date: 2021-08-05 10:28:49
 * @LastEditTime: 2021-08-05 10:38:23
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { defineConfig } from "rollup"
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
const configs = []
configs.push(defineConfig({
  input: 'libs/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
    }
  ],
  plugins: [esbuild()],
  external: ['@vue/composition-api'],
}))
configs.push(defineConfig({
  input: 'libs/index.ts',
  output: {
    file: 'dist/index.d.ts',
    format: 'es'
  },
  plugins: [dts()],
  external: ['@vue/composition-api']
}))
export default configs