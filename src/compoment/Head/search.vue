<template>
    <div class="search-wapper" style="position:sticky;top: 0px;z-index:999;">
        <div class="search">
            <a class=" sousuo iconfont icon-ali-sousuo"    href="">
                <span class="content">搜索饱了么商家,商品名称</span>
            </a>
        </div>
    </div>

    
</template>
<script>
export default {
    
}
</script>
<style>
.search-wapper{
    background-image: linear-gradient(90deg,#0af,#0085ff)
}
.search{
    padding: 2vw 3.733333vw;
    margin: -.133333vw 0;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.search:before,.search:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.search:after{
    bottom:-1px;
}
.search:before{
    top:-1px;
}
.sousuo{  
    display: flex;
    text-decoration: none;
    outline: 0;
    border-radius: .266667vw;
    background: #fff;
    color: #999;
    align-items: center;
    justify-content: center;
    -webkit-box-align: center;
    height: 9.6vw;
    -webkit-box-pack: center;
    width: 100%;
}
.content{
    margin-left: 15px;
    font-size: .313333rem;
    font-family: simsun;
}

</style>


