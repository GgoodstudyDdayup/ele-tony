import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import myself from '../compoment/Foot/foot-myself'
import FirstPage from '../Firstpage/firstPage'
import ShopId from '../compoment/Fooditem/shopmain'

export default new VueRouter({
    routes:[
        {path:'/' ,redirect:'/shop-id'},
        {path:'/myself',component:myself,} ,
        {path:'/firstPage',component:FirstPage,},
        {path:'/shop-id',component:ShopId}   
    ]
})