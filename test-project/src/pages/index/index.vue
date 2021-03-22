<!--
 * @Author: Mr.Mao
 * @Date: 2021-03-21 15:08:38
 * @LastEditTime: 2021-03-22 15:51:32
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <view class="content">
    <view><list/></view>
    <view>{{count}}</view>
  </view>
</template>

<script lang="ts">
import { defineComponent, onLoad, ref } from '../../uni-composition-api';
import List from './List.vue'
export default defineComponent({
  components: {List},
  setup() {
    onLoad(() => {})
    const count = ref(0)
    return {count}
  }
});
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
