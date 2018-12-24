<template>
    <router-link to="/shop-id" class="shoplist" style="text-decoration:none;">
        <section class="shoplist-1">
            <div class="shoplist-2">
                <div class="shoplist-logo">
                    <div class="logo-main">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="text-main">
                    <section class="text-line">
                        <h3 class="shopname">
                            <i class="premium" content="品牌">品牌</i>
                            <span>1点点（西城永捷店）</span>
                        </h3>
                    </section>
                    <section class="text-line">
                        <div class="rating">
                            <div class="rating-img">
                                <div class="rating-img2">
                                    <img src="../../dowload.svg">  
                                </div>
                            </div>
                            <span class="rate-text">4.9</span>
                            <span>月售1475单</span>
                        </div>
                    </section>
                    <section class="text-line">
                        <div class="moneylimit">
                            <span>￥20起送</span>
                            <span>配送费</span>
                        </div>
                        <div class="timedistanceWrap">
                            <span class="distanceWrap">1.6km</span>
                            <span>23分钟</span>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </router-link>
</template>
<script>
export default {
 
}
</script>
<style scoped>
h3>span{
    font-weight: 700
}
.shoplist{
    background-color: #fff
}
.shoplist-1{
    position: relative;
    border-bottom: .013333rem solid #eee;
    border-bottom: .133333vw solid #eee;
    background-color: #fff;
    color: #666;
    padding: .4rem 0;
    padding: 4vw 0;
    list-style: none;
    font-size: .293333rem;
    line-height: normal;
}
.shoplist-2{
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    padding: 0 .266667rem;
    padding: 0 2.666667vw;
}
.shoplist-logo{
    position: relative;
    flex: none;
    z-index: 0;
}
.logo-main{
    position: relative;
    width: 1.733333rem;
    width: 17.333333vw;
    height: 1.733333rem;
    height: 17.333333vw;
}
.text-line{
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    align-items: center;
    
}
.shopname{
    display: flex;
    margin: 0;
    padding: 0;
    color: #333;
    font-weight: 700;
    font-size: .38rem;
    overflow: hidden;
}
.premium{
    position: relative;
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    padding: .026667rem .066667rem;
    padding: .266667vw .666667vw;
    color: transparent;
    text-align: center;
    white-space: nowrap;
    font-weight: 700;
    font-size: .293333rem;
    font-style: normal;
    line-height: normal
}
.premium::after{
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    content: attr(content);
    padding: .011373rem .02844rem;
    padding: .113733vw .2844vw;
    padding: .053333rem .133333rem;
    padding: .533333vw 1.333333vw;
    color: #6f3f15;
    font-weight: 700;
    font-size: .125147rem;
    font-size: .586667rem;
    border-radius: .022747rem;
    border-radius: .227467vw;
    border-radius: .106667rem;
    border-radius: 1.066667vw;
    background-image: -webkit-linear-gradient(229deg,#fff100,#ffe339);
    background-image: linear-gradient(-139deg,#fff100,#ffe339);
    white-space: nowrap;
    transform: scale(.5);
    transform-origin: 0 0;
}
.rating{
    display: flex;
    align-items: center;
}
.rating-img{
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}
.rating-img2{
    display: flex;
}
.rating-img2 img{
    width: 1.493333rem;
    width: 14.933333vw;
    height: .266667rem;
    height: 2.666667vw;
    flex: none;
    max-width: none;
    max-width: 100%;
}
.rate-text{
    margin-right: 1.066667vw;
}
.moneylimit{
    display: flex;
    align-content: center;
    margin-top:2vw
}
.timedistanceWrap{
    display: flex;
    align-items: center;
    color: #999;
    margin-left: 2.3rem;
    margin-left: 22.8vw;
    margin-top:.2rem;
    margin-top:2vw
}
.moneylimit span:nth-of-type(2){
    overflow: hidden;
    max-width: 2.666667rem;
    max-width: 26.666667vw;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.moneylimit span:nth-of-type(2)::before{
    margin: 0 .8vw;
    color: #ddd;
    content: "|";
}
.distanceWrap::after{
    margin: 0 .8vw;
    color: #ddd;
    content: "|";
}





</style>
