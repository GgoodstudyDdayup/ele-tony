<template>
    <div>
        <app-header></app-header>
        <div style="position:sticky;top: 0px;z-index:999;">
        <app-search></app-search>
        </div>
        <app-adv></app-adv>
        <app-auto></app-auto>
        <app-shoptitle></app-shoptitle>
        <div style="position:sticky;top: 100px;z-index: 100;">
        <app-filter-title></app-filter-title>
        </div>
        <app-shoplist></app-shoplist>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <app-footer></app-footer>
    </div>
</template>
<script>
import Shoplist from "../compoment/Fooditem/food-item.vue"
import FilterTitle from "../compoment/Filter/filterTitle.vue"
import Adv from '../compoment/Media/advertisement.vue'
import Search from "../compoment/Head/search.vue"
import Autotab from "../compoment/Media/autoImg.vue"
import ShoplistTitle from "../compoment/Media/shoplist.vue"
export default {
  components:{
    'app-filter-title':FilterTitle,
    'app-shoptitle':ShoplistTitle,
    'app-adv':Adv,
    'app-search':Search,
    'app-auto':Autotab,
    'app-shoplist':Shoplist
  },
  data(){
    return{

    }
  }
}
</script>
<style>

</style>

