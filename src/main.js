import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

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
    {path: '/signin', component: () => import('./pages/Signin.vue')},
    {path: '/signup', component: () => import('./pages/Signup.vue')},
    {path: '/terms', component: () => import('./pages/Terms.vue')},
    {path: '/policy', component: () => import('./pages/Policy.vue')},
    {path: '/', component: () => import('./pages/Terms.vue')},
    {path: '/qrcode', component: () => import('./pages/QRCode.vue')},
    {path: '/visit', component: () => import('./pages/Visit.vue')},
    {path: '/member/regist', component: () => import('./pages/RegistMember.vue')},
    {path: '/student/regist', component: () => import('./pages/RegistStudent.vue')},
  ]
})

const firebaseConfig = {
  apiKey: "AIzaSyD4zFlJvu-85cxIUzBmnaavGVplydKKgl0",
  authDomain: "kinokolabo-auth.firebaseapp.com",
  databaseURL: "https://kinokolabo-auth.firebaseio.com",
  projectId: "kinokolabo-auth",
  storageBucket: "",
  messagingSenderId: "163112313700",
  appId: "1:163112313700:web:82bbfa03139c15f6"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
