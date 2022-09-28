import Vue from 'vue' //引入vue组件
import App from './App.vue' //引入 App 组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
