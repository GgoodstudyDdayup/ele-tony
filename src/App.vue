<template>
    <div>
      <app-header></app-header>
      <app-search></app-search>
      <app-adv></app-adv>
      <app-footer :aa="bb" ></app-footer>
      <router-view></router-view>
    </div>    
</template>
<script>

export default {
  
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
  methods: {
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
  },
}


</script>
<style>

</style>
