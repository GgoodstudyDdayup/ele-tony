<template>
    <div class="profile">
        <header class="ElementHeader-root">
            <div class="ElementHeader-wrapper" style="z-index: 8844">
                <div @click="jump()" class="ElementHeader-wrapper2">
                    <span class="iconfont icon-ali-fanhui"></span>
                </div>
                <h1>我的</h1>
            </div>
        </header>
        <section>
            <div class="propfile-2">
                <div class="propfile-1" style="width:140px; height:140px;background-color:white;margin-left:3vw">
                    <span style="background-position: 0px 397.44px;background-size: 198.72px"></span>
                </div>
                <div class="propfile-xf">
                    <p class="zhanghao">
                        <span>Tony welcom</span>
                    </p>
                    <p class="propfile-1up">
                        <span>130****7046</span>
                    </p>
                </div>
                <span class="xiaojiantou iconfont icon-ali-jiantouyou"></span>
            </div>
        </section>
        <div class="profile-3">
            <a class="index-1ryAh">
                
                    <span class="index-2f" style="color: rgb(0, 152, 251);">0.00</span>
                    <span class="index-2v" style="color: rgb(0, 152, 251);">元</span>
                <p class="index-3S6">钱包</p>
            </a>
            <a class="index-1ryAh" >
                
                    <span class="index-2f" style="color: rgb(255, 95, 62);">0</span>
                    <span class="index-2v" style="color: rgb(255, 95, 62);">个</span>
                <p class="index-3S6">红包</p>
            </a>
            <a class="index-1ryAh">
                
                    <span class="index-2f" style="color: rgb(106, 194, 11);">0</span>
                    <span class="index-2v" style="color: rgb(106, 194, 11);">个</span>
                <p class="index-3S6">金币</p>
            </a>
        </div>
        <section class="profile-4">
            <a @click.prevent class="index-2me" href="">
                <aside class="index-161"></aside>
                <div class="index-2">
                    {{profileName[0]}}
                    <span class="iconfont icon-ali-jiantouyou"></span>
                </div>
            </a>
        </section>
        <section class="profile-4">
            <a @click.prevent class="index-2me" href="">
                <aside class="index-161"></aside>
                <div class="index-2">
                    {{profileName[1]}}
                    <span class="iconfont icon-ali-jiantouyou"></span>
                </div>
            </a>
            <a @click.prevent class="index-2me" href="">
                <aside class="index-161"></aside>
                <div class="index-2">
                    {{profileName[2]}}
                    <span class="iconfont icon-ali-jiantouyou"></span>
                </div>
            </a>
        </section>
        <section class="profile-4">
            <a @click.prevent class="index-2me" href="">
                <aside class="index-161"></aside>
                <div class="index-2">
                    {{profileName[3]}}
                    <span class="iconfont icon-ali-jiantouyou"></span>
                </div>
            </a>
            <a @click.prevent class="index-2me" href="">
                <aside class="index-161"></aside>
                <div class="index-2">
                    {{profileName[4]}}
                    <span class="iconfont icon-ali-jiantouyou"></span>
                </div>
            </a>
        </section>
        <app-footer></app-footer>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            profileName:['我的地址','金币商城','分享拿10元现金','我的客服','下载饿了么APP']
        }
    },
    methods:{
        jump(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.profile{
    min-height: 100vh;
}
.ElementHeader-root{
    display: flex;
    height: 1.173333rem;
    height: 11.733333vw;
    background-image: linear-gradient(90deg,#0af,#0085ff)
}
.ElementHeader-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #fff;
    font-size: .42rem;
}
.ElementHeader-wrapper2{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.173333rem;
    width: 11.733333vw;
}
.ElementHeader-wrapper h1{
    margin: 0;
    position: absolute;
    top: 0;
    left: 50%;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.173333rem;
    line-height: 11.733333vw;
    transform: translateX(-50%);
}
.propfile-2{
    margin-top:-1px;
    display: flex;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: 2vw 1vw;
    color: #fff;
    align-items: center;
}
.propfile-1{
    border-radius: 50%;
} 
.propfile-xf{
    overflow: hidden;
    margin-left: .48rem;
    margin-left: 4.8vw;
    flex-grow: 1;
}
.profile-xf p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.propfile-mtk{
    font-size: .56rem;
    margin-bottom: .213333rem;
    margin-bottom: 2.133333vw;
    font-weight: 700;
    display: flex;
    align-items: center;
}
.propfile-1up{
    display: flex;
    align-items: center;
    font-size: .32rem;
}
.profile-3{
    display: table;
    width: 100%;
    height: 2.24rem;
    height: 22.4vw;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
}
.index-1ryAh:not(:last-child) {
    border-right: 1px solid #ddd;
}
.index-1ryAh{
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center;
}
.index-2f{
    padding: .453333rem 0 .293333rem;
    padding: 4.533333vw 0 2.933333vw;
    font-size: .693333rem;
    line-height: .693333rem;
    line-height: 6.933333vw;
    font-weight: 700;
}
.index-2v{
    font-size: .32rem;
    line-height: .32rem;
    line-height: 3.2vw;
}
.index-3S6{
    margin-top: .133333rem;
    margin-top: 1.333333vw;
    font-size: .32rem;
    line-height: .373333rem;
    line-height: 3.733333vw;
    font-weight: 500;
    color: #666;
    font-weight: 700;
}
.profile-4{
    margin-top: .266667rem;
    margin-top: 2.666667vw;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: .426667rem;
    line-height: .453333rem;
    line-height: 4.533333vw;
    background: #fff;
}
.index-2me{
    text-decoration: none;
    font-size: .35555rem;
    color: #333;
    display: flex;
    align-items: center;
    padding-left: .666667rem;
    padding-left: 6.666667vw;
}
.index-161{
    margin-left: -.266667rem;
    margin-left: -2.666667vw;
    margin-right: .266667rem;
    margin-right: 2.666667vw;
}
.index-2{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: .373333rem .266667rem .373333rem 0;
    padding: 3.733333vw 2.666667vw 3.733333vw 0;
}
.zhanghao{
    font-size: .4rem;
    font-weight: 700;
}
.xiaojiantou{
    margin-right: 5vw
}
</style>
