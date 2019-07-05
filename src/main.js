import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI, {locale})

Vue.config.productionTip = false

const router = new VueRouter({
  routes : [
    {path: '/terms', component: () => import('./pages/Terms.vue')},
    {path: '/', component: () => import('./pages/Terms.vue')},
    {path: '/qrcode', component: () => import('./pages/QRCode.vue')},
    {path: '/visit', component: () => import('./pages/Visit.vue')},
    {path: '/member/regist', component: () => import('./pages/RegistMember.vue')},
    {path: '/student/regist', component: () => import('./pages/RegistStudent.vue')},
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
