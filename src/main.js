import Vue from 'vue'
import App from './App.vue'
import Header from './compoment/Head/header.vue'
import Footer from "./compoment/Foot/footer.vue"
import Search from "./compoment/Head/search.vue"
Vue.config.productionTip = false
Vue.component("app-header",Header)
Vue.component("app-footer",Footer)
Vue.component("app-search",Search)
new Vue({
  render: h => h(App)
}).$mount('#app')
