import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引用模拟数据
require("./mock")

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
