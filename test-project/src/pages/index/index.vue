<!--
 * @Author: Mr.Mao
 * @Date: 2021-03-22 12:43:52
 * @LastEditTime: 2021-04-02 09:16:21
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <div class="index">index</div>
</template>

<script>
import { useXX } from "./hook.js";

export default {
  components: {},
  setup() {
    const aaa = useXX()
    aaa.func()
    return {  };
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
