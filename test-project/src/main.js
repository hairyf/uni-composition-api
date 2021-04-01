import Vue from 'vue'
import App from './App'

import UniCompositionAPI from 'uni-composition-api';
Vue.use(UniCompositionAPI);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
