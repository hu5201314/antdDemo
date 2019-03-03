// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* 全局引入 antd 样式 */
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

/* 引入 antd  插件 */
Vue.use(Antd)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
