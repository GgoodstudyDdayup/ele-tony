<template>
    <div  id="autoTab" class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img class="img-size" src="../../some-img/384fee6d25fff741b731d19259f7fjpeg.webp">
        </div>
        <div class="swiper-slide">
            <img class="img-size" src="../../some-img/a222070b119692625b6fd8d043285jpeg.webp">
        </div>
        <div class="swiper-slide">
            <img class="img-size" src="../../some-img/97ccc9a5bd6dd6d31677841176928jpeg.webp" >
        </div>
        <div class="swiper-slide">
            <img class="img-size" src="../../some-img/373a4468afcb222154580193434fajpeg.webp" >
        </div>
        <div class="swiper-slide">
            <img class="img-size" src="../../some-img/55f95aea9a0bddbaccbdbf87f01e0jpeg.webp" >
        </div>
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
.img-size{
    width: 8.3rem;
    width: 100vw;
    height: 1.9rem;
    height: 23vw;
    flex: none;
    max-width: none;
    max-width: 100%;
}
</style>


