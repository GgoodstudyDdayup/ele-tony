<template>
    <div>
        <div :id="ss == true?'':'specpanel-root-position'" class="specpanel-root" >
            <div class="specpanel-main ">
                <a class="close iconfont icon-ali-guanbi1" href=""></a>
                <div class="shop-information">
                    <img class="info-img iconfont icon-ali-guanbi1">
                    <div class="info">
                        <p class="info2">(大杯)红茶玛奇朵</p>
                        <p class="info3" style>已选：+免费配料/七分糖/x/x/温饮</p>
                        <p style="color: rgb(255, 83, 57);font-size:.54rem;">
                            <small>￥</small>16
                        </p>
                    </div>
                </div>
                <app-speci></app-speci>
                <button class="specpanel-done"></button>
            </div>
        </div>      
    </div>
</template>
<script>
import Speci from "./shop-speci.vue"
export default {
    props:['ss'],
    components:{
        'app-speci':Speci,
        
    },
}
</script>
<style scoped>
.shop-information{
    display: flex;
    padding-bottom: .533333rem;
    padding-bottom: 5.333333vw;
}
.info{
    display: flex;
    flex-direction: column;
    padding-left: .266667rem;
    padding-left: 2.666667vw;
}
.info2{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: .213333rem;
    margin-bottom: 2.133333vw;
    color: #333;
    font-size: .383333rem;
    font-weight: 700;
}
.info3{
    flex: 1;
    color: #666;
    font-size: .253333rem;
}
.info-img{
    flex: none;
    width: 2.533333rem;
    width: 25.333333vw;
    height: 2.533333rem;
    height: 25.333333vw;
}
.close{
    display: block;
    position: absolute;
    top: .4rem;
    top: 4vw;
    right: .4rem;
    right: 4vw;
    width: .466667rem;
    width: 4.666667vw;
    height: .466667rem;
    height: 4.666667vw;
}
.specpanel-main{
    position: relative;
    display: flex;
    flex-direction: column;
    padding: .426667rem;
    padding: 4.266667vw;
    height: 100%;
}
.specpanel-root{
    position: fixed;
    bottom: -146.66666vw;
    left: 0;
    width: 100%;
    height: 14.666667rem;
    height: 146.666667vw;
    z-index: 14;
    background: #fff;
}
p{
    margin: 0
}
#specpanel-root-position{
    animation:myfirst .3s linear 0s 1 forwards	
}
@keyframes myfirst {
    0%{bottom:-146.666vw}
    100%{bottom:0vw }
}
</style>
