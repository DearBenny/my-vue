import Vue from 'vue' //引入vue组件
import App from './App.vue' //引入 App 组件

Vue.config.productionTip = false

new Vue({
  el:'#root',
  render: h => h(App),  //render函数完成的功能：将 App 组件放入容器中
})
