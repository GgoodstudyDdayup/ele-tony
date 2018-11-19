<template>
    <section :id="bb == false ? '':'morefilter'" class="more-section">
        <div class="morefilter2">
            <dl>
                <dt class="dtname"></dt>
                <dd class="ddname">
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername[0]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername[1]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername[2]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername[3]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername[4]}}</span>
                        </div>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt class="dtname"></dt>
                <dd class="ddname">
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername2[0]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername2[1]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername2[2]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername2[3]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername2[4]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername2[5]}}</span>
                        </div>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt class="dtname"></dt>
                <dd class="ddname">
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername3[0]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername3[1]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername3[2]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername3[3]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername3[4]}}</span>
                        </div>
                    </div>
                    <div class="morefilter3">
                        <div class="morefilter4">
                            <span class="morefilter5">{{morefiltername3[5]}}</span>
                        </div>
                    </div>
                </dd>
            </dl>
            <div class="morefilter6">
                <span class="morefilter7">清空</span>
                <span class="morefilter8">确定</span>
            </div>
        </div>   
    </section>
</template>
<script>
export default {
    props:['bb'],
    data(){
        return{
            morefiltername:['蜂鸟配送','品牌商家','食安保','新店','开发票'],
            morefiltername2:['新用户优惠','特价商品','下单立减','赠品优惠','下单返红包','进店领红包'],
            morefiltername3:['￥20以下','￥20-40','￥40-60','￥60-80','￥80-100','￥100以上']
        }
    }
}
</script>
<style scoped>
dl{
    margin: .266667rem 0;
    margin: 2.666667vw 0;
    overflow: hidden;
}
#morefilter{
    opacity: 1;
    visibility: visible;
    max-height: 1500%;
}
.more-section{
    left: 0;
    right: 0;
    top: 1.053333rem;
    top: 10.533333vw;
    border-top: 1px solid #ddd;
    position: absolute;
    max-height: 0;
    background-color: #fff;
    transition: all .2s ease-in-out;
    visibility: hidden;
    overflow: auto;
    opacity: 0;
    z-index: 4;
}
.morefilter2{
    overflow: auto;
    height: 100%;
    padding: 0 .266667rem;
    padding: 0 2.666667vw;
    background: #fff;
    line-height: normal;
}
.dtname{
    margin-left: 1%;
    margin-bottom: .2rem;
    margin-bottom: 2vw;
    color: #666;
}
.ddname{
    display:flex;
    flex-wrap: wrap;
    background: #fff;
    position: relative;
}
.morefilter3{
    align-items: center;
    justify-content: center;
    flex: 0 0 31.33%;
    height: .933333rem;
    height: 9.333333vw;
    font-size: .2966667rem;
    margin: .08rem 1%;
    margin: .8vw 1%;
    background: #fafafa;
}
.morefilter4{
    white-space: nowrap;
}
.morefilter5{
    margin-left: 2%;
    vertical-align: middle;
}
.morefilter6{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fafafa;
    box-shadow: 0 -0.026667rem 0.053333rem 0 #ededed;
    box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
    line-height: 1.146667rem;
    line-height: 11.466667vw;
}
.morefilter7{
    font-size: .426667rem;
    text-align: center;
    text-decoration: none;
    flex: 1;
}
.morefilter8{
    font-size: .426667rem;
    text-align: center;
    text-decoration: none;
    flex: 1;
    opacity: .8;
    color: #fff;
    background-color: #00d762;
    border: .013333rem solid #00d762;
    border: .133333vw solid #00d762;
}
</style>
