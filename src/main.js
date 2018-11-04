import Vue from 'vue'
import App from './App.vue'
import Header from './compoment/Head/header.vue'
import Footer from "./compoment/Foot/footer.vue"
import Search from "./compoment/Head/search.vue"
import Adv from "./compoment/Media/advertisement.vue"
import axios from 'axios'
import './mock/mock'
// 引入路由
import router from "./router/router"

Vue.config.productionTip = false
Vue.component("app-header",Header)
Vue.component("app-footer",Footer)
Vue.component("app-search",Search)
Vue.component("app-adv",Adv)
Vue.prototype.$http= axios



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


