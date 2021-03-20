<!--
 * @Author: Mr.Mao
 * @Date: 2021-03-20 11:52:57
 * @LastEditTime: 2021-03-20 16:29:54
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <div class="index">
    <div>{{ count }}</div>
  </div>
</template>

<script lang="ts">
import {
  // 生命周期钩子 监听页面加载
  onLoad,
} from '@/uni-composition-api';
import { defineComponent, ref } from '@vue/composition-api';
export default defineComponent({
  components: {},
  setup() {
    onLoad(() => {
      console.log('---onload---');
    });
    const count = ref(0);
    return { count };
  },
});
</script>

<style lang="scss"></style>
