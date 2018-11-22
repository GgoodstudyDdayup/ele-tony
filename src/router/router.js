import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import myself from '../compoment/Foot/foot-myself'
import FirstPage from '../Firstpage/firstPage'

export default new VueRouter({
    routes:[
        {path:'/' ,redirect:'/firstPage'},
        {path:'/myself',component:myself,} ,
        {path:'/firstPage',component:FirstPage,}   
    ]
})