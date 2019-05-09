// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store';
import vuex from "vuex";
import Base from '@/base'
import Components from "@/component"
import Filter from "@/filter"
import Directive from "@/directiveS"
// iView UI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false



// 外部UI插件
Vue.use(ElementUI);
// 原型内置函数
Vue.use(Base)
// 公共组件
Vue.use(Components)
// 过滤器
Vue.use(Filter)
// 指令
Vue.use(Directive)
/* eslint-disable no-new */
// Vue.mixin({
//   created: function () {
//       console.log('全局混入')
//   }
// })
// 测试阶段mock模拟数据
import "@/util/mock"

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
