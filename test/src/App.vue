<!--
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-11 18:42:22
 * @LastEditTime: 2021-01-15 09:37:50
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  mpType: 'app',
  globalData: {},
  onLaunch() {
    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
});
</script>

<style lang="scss">
/*每个页面公共css */
@import 'uview-ui/index.scss';

// @import '@/style/iconfont.scss';

@import '@/style/class.scss';
</style>
