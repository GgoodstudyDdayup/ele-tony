<template>
    <div  id="autoTab" class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">000</div>
        <div class="swiper-slide">111</div>
        <div class="swiper-slide">000</div>
        <div class="swiper-slide">111</div>
        <div class="swiper-slide">000</div>
        <div class="swiper-slide">111</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    mounted(){
        new Swiper ('#autoTab', {
        loop: true, // 循环模式选项
        pagination: '.swiper-pagination',// 如果需要分页器
        autoplay:1500,
        autoplayDisableOnInteraction : false,
        })
    }
}
</script>
<style scoped>
.swiper-container {
    height: 25.2vw;
    text-align: center;
    box-sizing: inherit;
    background-color: #fff;
}
</style>


