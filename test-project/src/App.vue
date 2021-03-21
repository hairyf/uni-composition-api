<script lang="ts">
import { onLaunch, onShow, onHide } from './uni-composition-api';
import Vue from 'vue';
export default Vue.extend({
  mpType: 'app',
  setup() {
    onLaunch(() => console.log('App Launch'))
    onShow(() => console.log('App Show'))
    onHide(() => console.log('App Hide'))
  },
});
</script>

<style>
/*每个页面公共css */
</style>
