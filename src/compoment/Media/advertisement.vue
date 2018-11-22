<template>
<div>
    <div  id="touchtab" class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/a867c870b22bc74c87c348b75528djpeg.webp">
                </div>
                <span class="mune-name">美食</span>
            </a>
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/8b589472823fa97666cef19af644cjpeg.webp">
                </div>
                <span class="mune-name">午餐</span>
            </a>
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/76a23eb90dada42528bc41499d6f8jpeg.webp">
                </div>
                <span class="mune-name">商超便利</span>
            </a>
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/dd7c960f08cdc756b1d3ad54978fdjpeg.webp">
                </div>
                <span class="mune-name">水果</span>
            </a>
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/af108e256ebc9f02db599592ae655jpeg.webp">
                </div>
                <span class="mune-name">医药健康</span>
            </a>
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/c888acb2c8ba9e0c813f36ec9e90ajpeg.webp">
                </div>
                <span class="mune-name">浪漫鲜花</span>
            </a>
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/e42997b86b232161a5a16ab813ae8jpeg.webp">
                </div>
                <span class="mune-name">厨房生鲜</span>
            </a>
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/bceb19258e3264e64fb856722c3c1jpeg.webp"></div> 
                <span class="mune-name">跑腿代购</span>
            </a>
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/696aa5cf9820adada9b11a3d14bf5jpeg.webp">
                </div>
                <span class="mune-name">甜品饮品</span>
            </a>
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/bebe83947afee0b0f38257b0e3866jpeg.webp">
                </div>
                <span class="mune-name">签到领红包</span>
            </a>
        </div>
        <div class="swiper-slide">
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/ec21096d528b7cfd23cdd894f01c6jpeg.webp">
                </div>
                <span class="mune-name">地方菜系</span>
            </a>
            <a class="list" href="">
                <div class="mune-list">
                    <img src="../../some-img2/b7ba9547aa700bd20d0420e1794a8jpeg.webp">
                </div>
                <span class="mune-name">麻辣烫</span>
            </a>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    </div>
    
</div>
    
</template>
<script>
import Swiper from 'swiper';
export default {
     mounted(){
        new Swiper ('#touchtab', {
        loop: true, // 循环模式选项
        pagination: '.swiper-pagination',// 如果需要分页器
    })        
},
}
</script>
<style scoped>
.swiper-container {
    height: 65.2vw;
    text-align: center;
    box-sizing: inherit;
    background-color: #fff;
    position: relative;
}
.list{
    position:relative;
    float: left;
    margin-top: .293333rem;
    margin-top: 2.933333vw;
    width: 20%;
    text-decoration: none;
    color: inherit;
    outline:0
}
.mune-list{
    position: relative;
    display: inline-block;
    width: 1.2rem;
    width: 12vw;
    height: 1.2rem;
    height: 12vw;
}
.mune-name{
    display: block;
    margin-top: .133333rem;
    margin-top: .9vw;
    color: #666;
    font-size: .3rem;
}
.swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: 5vw;
}


</style>
