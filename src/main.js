import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vuex from 'vuex'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import created from '@/views/components/dialog/created'


import store from '@/vuex/index'



Vue.config.productionTip = false
Vue.prototype.$created=created

Vue.use(elementui)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
