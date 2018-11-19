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
      <br>
      <br>
      <br>
      <br>
      <app-footer :aa="bb" ></app-footer>
    </div>    
</template>
<script>
import FilterTitle from "./compoment/Filter/filterTitle.vue"
import Adv from './compoment/Media/advertisement.vue'
import Search from "./compoment/Head/search.vue"
import Autotab from "./compoment/Media/autoImg.vue"
import ShoplistTitle from "./compoment/Media/shoplist.vue"
export default {
  components:{
    'app-filter-title':FilterTitle,
    'app-shoptitle':ShoplistTitle,
    'app-adv':Adv,
    'app-search':Search,
    'app-auto':Autotab,

  },
  data(){
    return{
      bb:{
        a:"", 
        b:'',
        c:"",
        d:""
      }, 
    }
  },
  /* methods: {
    axiosTest:function(){
      var _this = this;
      console.log(this.bb.a)
      this.$http.get('/user',{})
      .then(function(res){
            console.log(res)
            _this.bb.a = res.data.result.a;
            _this.bb.b = res.data.result.b;
            _this.bb.c = res.data.result.c;
            _this.bb.d = res.data.result.d;
          console.log(data);
      }).catch(function(data){
          console.log(data);

      })
    }
  },
  mounted(){
      this.axiosTest();
  }, */
}


</script>
<style>

</style>
