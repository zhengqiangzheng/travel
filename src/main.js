// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import fastClick from 'fastclick'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
// fastclick解决移动端点击延迟问题
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
