<style scoped>
 @import  "./shop.153da38.css";
 .active{
     display: block
 }
 .active1{
     display: none
 }
 .modal{
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: .4;
    transition: all .6s ease;
}
.modal1{  
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: 0;
    transition: all .6s ease;
}
 .active3{
    display:none;

        }
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
.shopcartlist2{
    position: fixed;
    bottom: 13vw;
    left: 0;
    z-index: 10;
    width: 100%;
}
h1{
    padding:0;
    margin: 0
}
.list-header{
    height: 7vw;
    line-height: 7vw;
    padding: 0 2.5vw;
    background: #eceff1;
    border-bottom: .01rem solid rgba(7,17,27,0.1);
}
.title{
    float: left;
    font-size: .33rem;
    color: #666
}
.empty{
    float: right;
    font-size:.28rem;
    color: #666
}
.list-content{
    padding: 0 2vw;
    max-height: 70vw;
    overflow-x:auto;
    background: #fff;
}
.food{
    position: relative;
    padding:2.5vw 0;
    box-sizing: border-box;
    border-bottom: .01rem solid rgba(7,17,27,0.1)
}
.name{
    line-height: 2.4vw;
    font-size: .37rem;
    color: rgb(7,17,27);
    vertical-align: middle
}
.price{
    position: absolute;
    right: 32vw;
    bottom: 1.5vw;
    line-height: 7vw;
    font-size: .3rem;
    font-weight: 500;
    color: rgb(255, 83, 57);
}
.cartcontrol-wapper{
    position: absolute;
    left: 10vw;
    bottom: 1.6vw;
}
ul,li{
    padding: 0;
    margin: 0;
}
.cart-add {
    position: absolute;
    display: inline-block;
    padding:0.6vw 2.3vw;
    line-height: 3.5vw;
    right: 0;
    bottom:2.3vw
}
.cart-decrease{
    position: absolute;
    display: inline-block;
    padding:0.6vw 2.3vw;
    line-height: 3.5vw;
    right: 12.5vw;
    bottom:2.3vw
}
.cart-count{
    display: inline-block;
    position: absolute;
    font-size:.3rem;
    bottom: 2.8vw;
    right: 10.5vw
}

.iconfont{
    font-size: .44rem;
    color: #2395ff;
}
</style>
<template>
    <footer class="cartview-cartview_xUNA6">
        <div :class="{modal:show,modal1:show2}" :style="act"></div>
        <div :class="{shopcartlist2:show}">
            <div class="list-header">
                <h1 class="title">已选择商品</h1>
                <span class="empty">清空</span>
            </div>
            <div class="list-content">
                <ul>
                    <li class="food" v-for="(food,index) in goods" :key="index">
                        <span class="name">{{food.name}}</span>
                        <div class="price">
                            <span>￥{{food.money*food.count}}</span>
                        </div>  
                        <div class="cartcontrol-wrapper">
                            <div @click="child(index)" class="cart-decrease iconfont icon-ali-jianhao" v-show="goods.length>0"></div>
                            <div class="cart-count">{{food.count}}</div>
                            <div @click="child(index)" class="cart-add iconfont icon-ali-jiahao- button"></div>
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
export default {
    props:['menuName','allcount','goods'],
    data () {
        return {
            minprice:50,
            shadow:false,
            show:false,
            show2:false,
            act:''
        }
    },
    methods:{
        show1(){
            let $goods = this.goods
            if($goods.length!=0){
                if(this.act ==''){
                    this.show = !this.show 
                    if(this.show == true){
                        this.show2 = false 
                    }else{  
                        this.show2 =true
                    } 
                }else{
                    this.act = ''
                    this.show2 = false
                    let _this = this
                    window.setTimeout(()=>{
                        _this.show = true
                    },10)
                }
            }else{  
                this.show =false
                
            }
        },
        child(num){
            
        }
    },
    watch:{
        show(val){
            if(val == true){
                this.act = ''
            }else{
                let _this = this
                window.setTimeout(() => {
                    _this.act = {display:'none'}
                }, 600);
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