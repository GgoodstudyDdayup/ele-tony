<template>
    <div class="cartcontrol">
        <div class="cart-decrease iconfont icon-ali-jianhao" v-show="goods.length>0"></div>
        <div v-for="go in goods" :key="go" class="cart-count" v-show="goods.length>0">{{go.count}}</div>
        <div class="cart-add iconfont icon-ali-jiahao- button"></div>
    </div>    
</template>
<script>
export default {
    props:['goods']
}
</script>
<style scoped>
.cartcontrol{
    font-size: 0
}
.cart-decrease, .cart-add {
    display: inline-block;
    padding:6px;
    line-height: 24px;
}
.cart-count{
    display: inline-block
}

.iconfont{
    font-size: 44px;
    color: #2395ff;
}

</style>
