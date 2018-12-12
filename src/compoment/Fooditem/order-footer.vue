<style scoped>
 @import  "./shop.153da38.css";
 .active{
     display: block
 }
 .active1{
     display: none
 }
 .active2{display:block;transition: opacity 5s ease-in-out}
 .active3{display:none;transition: opacity 5s ease-in-out}
 .lineheight{
     color: #fff
 }
 .green{
    height: 100%;
    width: 2.8rem;
    width: 28vw;
    background-color: #38ca73;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: .4rem;
    font-weight: 700;
    -webkit-user-select: none;
    user-select: none;
    line-height: 1.28rem;
    line-height: 12.8vw;
 }
 .yellow{
    background-color: #fffad6;
    border-top: .013333rem solid #f9e8a3;
    border-top: .133333vw solid #f9e8a3;
    opacity: .96;
    line-height: .533333rem;
    line-height: 5.333333vw;
    font-size: .266667rem;
    text-align: center;
}
.shopcart-list{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
}  
h1{
    padding:0;
    margin: 0
}
.list-header{
    height: 60px;
    line-height: 60px;
    padding: 0 25px;
    background: #eceff1;
    border-bottom: 1px solid rgba(7,17,27,0.1);
}
.title{
    float: left;
    font-size: 33px;
    color: #666
}
.empty{
    float: right;
    font-size:28px;
    color: #666
}
.list-content{
    padding: 0 18px;
    max-height: 217vw;
    overflow: hidden;
    background: #fff;
}
.food{
    position: relative;
    padding: 12px 0;
    box-sizing: border-box;
    border: -1px rgba(7,17,27,0.1)
}
.name{
    line-height: 24px;
    font-size: 33px;
    color: rgb(7,17,27);
    vertical-align: middle
}
.price{
    position: absolute;
    right: 280px;
    bottom: 12px;
    line-height: 24px;
    font-size: 32px;
    font-weight: 500;
    color: rgb(255, 83, 57);
}
.cartcontrol-wapper{
    position:absolute;
    left: 100px;
    bottom: 16px;
}
ul,li{
    padding: 0;
    margin: 0;
}
</style>
<template>

    <footer class="cartview-cartview_xUNA6">
        <div class="cartview-cartmask_3rV-M" :class="this.show==true?'active2':'active3'" data-spm-anchor-id="a2ogi.12117545.0.i2"></div>
        <div class="shopcart-list" transition='fold'>
            <div class="list-header">
                <h1 class="title">购物车</h1>
                <span class="empty">清空</span>
            </div>
            <div class="list-content">
                <ul>
                    <li class="food" v-for="food in goods" :key="food">
                        <span class="name">{{food.name}}</span>
                        <div class="price">
                            <span>￥{{food.money*food.count}}</span>
                        </div>  
                         <div class="cartcontrol-wrapper">
                            <cartcontrol :goods='goods'></cartcontrol>
                        </div>
                    </li>
                </ul>
            </div>
        </div> 
        <div class="bottomNav-cartfooter_1qvQh_0" style="z-index: 11;">
            <span  @click="show1" role="button" aria-label="购物车" attr-quantity="0" :class="allcount >=1?'bottomNav-carticon_2xfrl_0 bottomNav-shake_2waDn_0':'bottomNav-carticon_2xfrl_0 bottomNav-shake_2waDn_0 bottomNav-empty_-atZ2_0'" data-spm-anchor-id="a2ogi.12117545.0.i0">
                <span :class=" allcount >= 1?'active':'active1'">{{ allcount }}</span>
            </span>
            <div class="bottomNav-cartInfo_135aa_0" @click="show1">
                <p class="bottomNav-carttotal_1nOFY_0" data-spm-anchor-id="a2ogi.12117545.0.i4">
                    <span style="position:absolute; top:.6vw" :class="{lineheight:this.goods.length>0}" class="bottomNav-carttotalOriginal_3vq21_0" data-spm-anchor-id="a2ogi.12117545.0.i5">{{allTotal}}</span>
                </p> 
                <p style="position:absolute; top:3.8vw" class="bottomNav-cartdelivery_Gsj2c_0">另外配送费￥3元</p>
            </div> 
            <a role="button" href="javascript:;" :class="{green:this.shadow ==true}" class="submit-btn-submitbutton_1dW2t_0 submit-btn-disabled_3y1tV_0" >
                <span>{{miprice}}</span>
            </a>    
        </div>  
    </footer>
</template>
<script>
import cartcontrol from './cartcontrol.vue'
export default {
    components:{
        cartcontrol
    },
    props:['menuName','allcount','goods'],
    data () {
        return {
            minprice:50,
            shadow:false,
            show:false,
            active:{display:'block',transition: 'opacity .3s ease'},
            active1:{display:'none',transition: 'opacity .3s ease'}
        }
    },
    methods:{
        show1(){
            let $goods = this.goods
            if($goods.length!=0){
                this.show = !this.show
            }else{
                this.show =false
            }
        }
    },
    computed:{
        allTotal(){
            let total = 0 
            for(var i =0; i<this.goods.length;i++){
                total +=this.goods[i].money*this.goods[i].count
            }
            return this.goods.length > 0 ? '￥'+total : '未选择商品'
        },
        miprice(){
            let total1 = 0
            let total2 =0
            let $this = this
            for(var a=0; a<$this.goods.length;a++){
                total1 +=$this.goods[a].money*$this.goods[a].count
                total2 =$this.minprice-total1
            }
            if(total1>0&&total1<$this.minprice){
                $this.shadow = false
                return '还差'+total2+'元'
            }
            if(total1>0&&total1>=$this.minprice){
                $this.shadow = true
                return '去结算'
            }
            if($this.goods.length ==0){
                return '￥'+$this.minprice+'起送'
            }
        }
    }
}
</script>