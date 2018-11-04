<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">000</div>
        <div class="swiper-slide">000</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
     mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:false,
          loop:true,
          pagination : '.swiper-pagination'
        })
      },
}
</script>
<style scoped>
.swiper-container {
    height: 47.2vw;
    text-align: center;
    box-sizing: inherit;
    background-color: #fff;
}  

</style>
