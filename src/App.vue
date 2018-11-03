<template>
    <div>
      <app-header></app-header>
      <app-search></app-search>
      <app-adv></app-adv>
      <app-footer :aa="bb" ></app-footer>
    </div>    
</template>
<script>

export default {
  data(){
    return{
      bb:{
        a:"首页",
        b:"发现",
        c:"订单",
        d:"我的"
      },
      
    }
  }
}
</script>
<style>

</style>
