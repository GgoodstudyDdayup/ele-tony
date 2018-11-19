import Vue from 'vue'
import App from './App.vue'
import Header from './compoment/Head/header.vue'
import Footer from "./compoment/Foot/footer.vue"
import 'swiper/dist/css/swiper.css';
Vue.config.productionTip = false
Vue.component("app-header",Header)
Vue.component("app-footer",Footer)
new Vue({
  render: h => h(App)
}).$mount('#app')


