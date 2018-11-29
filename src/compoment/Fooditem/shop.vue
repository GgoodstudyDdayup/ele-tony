<template>
    <div>
        <div class="shop-title">
           <nav class="img-header">
               <a class="fanhui"></a>
           </nav>
           <div class="shop-information">
               <div class="small-image">
                   <span>
                       <span class="abc">品牌</span>                       
                   </span>
                   <img class="small-image2">
               </div>
               <div class="shop-information2">
                   <h2 class="shop-name">
                       <span style="text-align: left;overflow: hidden;text-overflow: ellipsis;">1点点（西城永捷店）</span>
                       <i class="biaoji"></i>
                   </h2>
                   <div class="shop-imformation3">
                       <span class="information3">评价4.9</span>
                       <span class="information3"> 月售1469</span>
                       <span class="information3"> 蜂鸟配送约20分钟</span>
                   </div>
               </div>
               <p class="gonggao">公告：一杯简单饮品，存在着您无法想象的灵魂</p>
           </div>
        </div>
        <div style="position:sticky;top:0px;z-index:2;">
            <div class="shop-tab">
                <div class="shop-tab2">
                    <p @click="changeMode(1)" :class="flag ==1?'tab-name':'tab-name2'">
                       点餐
                       <span :class="flag == 1?'shop-tab-little':''" ></span>
                    </p>
                </div>
                <div class="shop-tab2">
                    <p @click="changeMode(2)" :class="flag ==2?'tab-name':'tab-name2'">
                       评论
                         <span :class="flag == 2?'shop-tab-little':''" ></span>
                    </p>
                </div>
                <div class="shop-tab2">
                   <p @click="changeMode(3)" :class="flag ==3?'tab-name':'tab-name2'">
                       商家
                       <span :class="flag == 3?'shop-tab-little':''" ></span>
                   </p>
                </div>
           </div>
        </div>
            <app-recommend></app-recommend>
            <app-order></app-order>
    </div>
   
</template>
<script>
import Sellerrecommend from './shop-order.vue'
import Order from "./order.vue"
export default {
    components:{
        'app-recommend':Sellerrecommend,
        'app-order':Order
    },
    data(){
        return{
            flag:1
        }
    },
    methods:{
        changeMode(a){
            this.flag = a
        }
    }
}
</script>
<style scoped>
p{
    margin: 0;
}
.shop-title{
    color: #333;
    font-size: .2933333rem;
    background-color: #fff;
    padding-top: 2.666667rem;
    padding-top: 26.666667vw;
}
.img-header{
    height: 2.666667rem;
    height: 26.666667vw;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background-size: cover;
    background-repeat: no-repeat;
    padding: .106667rem .266667rem;
    padding: 1.066667vw 2.666667vw;
}    
    
.img-header::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(119,103,137,.43);
}
.shop-information{
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 8vw 0;
}
.fanhui{
    display: inline-block;
    border-bottom: .053333rem solid #fff;
    border-bottom:.533333vw solid #fff;
    border-left: .053333rem solid #fff;
    border-left:.533333vw solid #fff;
    margin-top: .133333rem;
    margin-top: 1.333333vw;
    margin-left: .133333rem;
    margin-left: 1.333333vw;
    width: .32rem;
    width: 3.2vw;
    height: .32rem;
    height: 3.2vw;
    transform: rotate(45deg)
}
.gonggao{
    width: 8rem;
    width: 80vw;
    font-size: .253333rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: .226667rem;
    margin: 2.266667vw;
    padding: 0;
    white-space: nowrap;
}
.small-image{
    width: 2rem;
    width: 20vw;
    height: 2rem;
    height: 20vw;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -1rem;
    margin-left: -10vw;
    margin-top: -1.6rem;
    margin-top: -16vw;
}
.small-image>span{
    position: absolute!important;
    top: 0;
    left: 0;
    border-top-left-radius: .08rem;
    border-top-left-radius: .8vw;
    border-bottom-right-radius: .08rem;
    border-bottom-right-radius: .8vw;
    background-image: linear-gradient(90deg,#fff100,#ffe339);
    width: .586667rem;
    width: 5.866667vw;
    height: .32rem;
    height: 3.2vw;
}
.abc{
    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    transform: scale(.5);
    transform-origin: 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .452222rem;
    color: #6f3f15;
    font-weight: 700;
}
.small-image2{
    border-radius: .08rem;
    border-radius: .8vw;
    box-shadow: 0 0 0.04rem 0 rgba(0,0,0,.2);
    box-shadow: 0 0 0.4vw 0 rgba(0,0,0,.2);
    border: 10vw solid #333
}
.shop-information2{
    flex: 1;
    width: 7.2rem;
    width: 72vw;
}
.shop-name{
    font-size: .446667rem;
    font-weight: 700;
    white-space: nowrap;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.information3{
    white-space: nowrap;
    height: .32rem;
    height: 3.2vw;
    margin-top: .173333rem;
    margin-top: 1.733333vw;
    font-size: .293333rem;
    color: #666;
    text-align: center;
}
.biaoji{
    width: .4rem;
    width: 4vw;
    position: relative;
    height: .653333rem;
    height: 6.533333vw;
}
.biaoji::after{
    content: "";
    border-width: 1.466667vw 0 1.466667vw 1.733333vw;
    border-color: transparent transparent transparent rgba(0,0,0,.67);
    border-style:solid;
    position: absolute;
    left: .16rem;
    left: 1.6vw;
    top: .213333rem;
    top: 2.133333vw;
}
.shop-information3{
    white-space: nowrap;
    height: .32rem;
    height: 3.2vw;
    margin-top: .173333rem;
    margin-top: 1.733333vw;
    font-size: .293333rem;
    color: #666;
    text-align: center;
}
.shop-imformation3{
    text-align: center;
}
.imformation3::after{
    margin-right: 2vw
}
.shop-tab{
    margin-top: -10vw;
    line-height: 1.066667rem;
    line-height: 10.666667vw;
    display: flex;
    background-color: #fff;
}
.shop-tab2{
    position: relative;
    flex: 1;
    text-align: center;
    font-size: .30333rem;
    color: #666;
    border-bottom: 1px solid #ebebeb;
}
.tab-name{
    display: inline-block;
    position: relative;
    color: #333;
    font-weight: 700;
}
.tab-name2{
    display: inline-block;
    position: relative;
    color: #666;
    font-weight: 400;
}
.shop-tab-little{ 
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: .053333rem;
    height: .533333vw;
    background-color: #2395ff;
}
</style>
