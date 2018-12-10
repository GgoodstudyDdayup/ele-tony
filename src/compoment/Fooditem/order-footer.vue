<style scoped>
 @import  "./shop.153da38.css";
 .active{
     display: inline-block
 }
 .active1{
     display: none
 }
</style>
<template>

    <footer class="cartview-cartview_xUNA6">

        <div class="cartview-cartmask_3rV-M" style="z-index: 10; display: none;" data-spm-anchor-id="a2ogi.12117545.0.i2"></div> 

        <div class="cartview-cartbody_15r9z cartview-cartbodyNoTip_3gVWf" style="z-index: 11;">

            <section class="discount-tip-discountTip_1IcZ7_0" style="display: none;"></section> 

            <div style="opacity: 0;">
                <div class="cartview-cartheader_342ET">
                    <div class="cartview-headerText_3abxn" data-spm-anchor-id="a2ogi.12117545.0.i1">
                        <span>已选商品</span> 
                    </div> 
                    <a href="javascript:" ubt-click="101179" class="cartview-cartheaderRemove_2WfO3">
                        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove"></use></svg> 
                        <span>清空</span>
                    </a>
                </div> 
                <div class="entityList-cartbodyScroller_GxeX__0">
                    <ul class="entityList-cartlist_-pDz7_0"></ul> 
                </div>
            </div>

        </div> 

        <div class="bottomNav-cartfooter_1qvQh_0" style="z-index: 11;">

            <span  role="button" aria-label="购物车" attr-quantity="0" :class="allcount >=1?'bottomNav-carticon_2xfrl_0 bottomNav-shake_2waDn_0':'bottomNav-carticon_2xfrl_0 bottomNav-shake_2waDn_0 bottomNav-empty_-atZ2_0'" data-spm-anchor-id="a2ogi.12117545.0.i0">
                <span :class=" goods.length >= 1?'active':'active1'">{{ allcount }}</span>
            </span>
            <div role="button" aria-label="购物车有商品0件，共0元，。" class="bottomNav-cartInfo_135aa_0">
                <p class="bottomNav-carttotal_1nOFY_0" data-spm-anchor-id="a2ogi.12117545.0.i4">
                    <span class="bottomNav-carttotalOriginal_3vq21_0" data-spm-anchor-id="a2ogi.12117545.0.i5">未选购商品</span>
                </p> 
                <p class="bottomNav-cartdelivery_Gsj2c_0"></p>
            </div> 

            <a role="button" href="javascript:;" :class="allcount >= 15?'submit-btn-submitbutton_1dW2t_0': 'submit-btn-submitbutton_1dW2t_0 submit-btn-disabled_3y1tV_0'">
                <span>¥15起送</span>
            </a>

        </div>
   
    </footer>
</template>
<script>
export default {
    props:['menuName','allcount','goods'],
    data () {
        return {
            
        }
    }
}
</script>