<template>
    <div class="shoplist-title">推荐商家</div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
 /*    methods: {
        show() {
            this.$http({
                method: 'get',
                url: '/user',
                data: {
                    name: 'virus'
                }
            })
        }
    } */
}
</script>
<style scoped>
.shoplist-title:after{
    display: block;
    content: "";
    width: .533333rem;
    width: 5.333333vw;
    height: .026667rem;
    height: .266667vw;
    background-color: #999;
    margin-left: 3.466667vw;
    margin-top: .199999rem
}
.shoplist-title:before{
    display: block;
    content: "";
    width: .533333rem;
    width: 5.333333vw;
    height: .026667rem;
    height: .266667vw;
    background-color: #999;
    margin-right: 3.466667vw;
    margin-top: .199999rem
}
.shoplist-title{
    display: flex;
    justify-content: center;
    height: .96rem;
    height: 9.6vw;
    font-size: .35rem;
    color: #000;
}

</style>

