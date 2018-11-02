<template>
    <footer class="fixed">
        <div class="index-footer">
            <a @click.stop="changecolor(1)" :class=" flag == 1? 'active' :''" class="iconfont icon-ali-gonggeshitu" href="">
                <section>首页</section>
            </a>
            <a @click.stop="changecolor(2)" :class=" flag == 2? 'active' :''" class="iconfont icon-ali-faxianjihuo" href="">
                <section>发现</section>
            </a>
            <a @click.stop="changecolor(3)" :class=" flag == 3? 'active' :''" class="iconfont icon-ali-shiyongwendang" href="">
                <section>订单</section>
            </a>
            <a @click.stop="changecolor(4)" :class=" flag == 4 ? 'active' :''" class="iconfont icon-ali-icon_zhanghao" href="">
                <section>我的</section>
            </a>
        </div>
    </footer>
</template>
<script>
export default {
  data(){
      return {
          flag:1,
          changecolor:function(a){
              this.flag = a;
          }
      }

  }
}

</script>
<style scoped>
.active{
    background: linear-gradient(90deg,#0af,#0085ff);
}
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
