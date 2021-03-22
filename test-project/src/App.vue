<!--
 * @Author: Mr.Mao
 * @Date: 2021-03-22 14:26:49
 * @LastEditTime: 2021-03-22 15:23:32
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<script lang="ts">
import { onLaunch, onShow, onHide } from './uni-composition-api';
import Vue from 'vue';
export default Vue.extend({
  mpType: 'app',
  setup() {
    onLaunch(() => {})
    // onLaunch(() => console.log('App Launch'))
    // onShow(() => console.log('App Show'))
    // onHide(() => console.log('App Hide'))
  },
});
</script>

<style>
/*每个页面公共css */
</style>
