<!--
 * @Author: Mr.Mao
 * @Date: 2021-03-20 11:52:57
 * @LastEditTime: 2021-03-21 01:10:41
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <div class="index">
    <list />
    <div>{{ count }}</div>
  </div>
</template>

<script lang="ts">
import { onLoad } from '@/uni-composition-api';
import { ref, defineComponent } from '@vue/composition-api';
import List from './list.vue';
export default defineComponent({
  components: { List },
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
