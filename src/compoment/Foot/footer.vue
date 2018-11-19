<template>
    <footer class="fixed">
        <div class="index-footer">
            <a @click.prevent="changecolor(1)" :class=" flag == 1 ? '' :''" class="iconfont icon-ali-changyonglogo40-copy" >
                <section>{{name[0]}}</section>
            </a>
            <a @click.prevent="changecolor(2)" :class=" flag == 2 ? '' :''" class="iconfont icon-ali-faxianjihuo" >
                <section>{{name[1]}}</section>
            </a>
            <a @click.prevent="changecolor(3)" :class=" flag == 3 ? '' :''" class="iconfont icon-ali-shiyongwendang" >
                <section>{{name[2]}}</section>
            </a>

            <a @click.prevent="changecolor(4)" :class=" flag == 4 ? '' :''" class="iconfont icon-ali-renwu">
                <section>{{name[3]}}</section>
            </a>
            
        </div>
    </footer>
</template>
<script>
export default {
    data(){
        return {
            name:['首页','发现','订单','我的'],
            flag:1,
            changecolor:function(a){
            this.flag = a
            //添加新的样式先不管
        }
    }
}

    /* methods: {
        changecolor (a) {
            console.log(1)
            this.flag = a;
            this.$router.push('/vip')
        }
    } */
}


</script>
<style scoped>
.fixed{
    height: 16vw;
}
.index-footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-top: 1.2vw;
    background-color: #fff;
    height: 13.333333vw;
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
    z-index: 88;
}
.iconfont{
    display: block;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
}
a{
    outline: 0;
    color:inherit;
    text-decoration: none;
}
section{
    margin-top: 0.2222222rem;
    font-size:0.266667rem;
    color:#8e8e93;
    text-align: center;
}
</style>
