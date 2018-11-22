import Vue from 'vue'
import App from './App.vue'
import Header from './compoment/Head/header.vue'
import Footer from "./compoment/Foot/footer.vue"
import 'swiper/dist/css/swiper.css';
import router from './router/router'
/* router.push('FirstPage') */
//这是一个坑，不管你在哪个哪刷新后还是会显示首页
Vue.config.productionTip = false
Vue.component("app-header",Header)
Vue.component("app-footer",Footer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


