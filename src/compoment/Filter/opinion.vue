<template>
    <section :id="aa == false ? '':'changeDisplay'" class="changeDisplay2">
        <ul class="simple">
            <li class="simpleList">
                <span class="simpleList2">{{opinionName[0]}}</span>
            </li>
            <li class="simpleList">
                <span class="simpleList2">{{opinionName[1]}}</span>
            </li>
            <li class="simpleList">
                <span class="simpleList2">{{opinionName[2]}}</span>
            </li>
            <li class="simpleList">
                <span class="simpleList2">{{opinionName[3]}}</span>
            </li>
            <li class="simpleList">
                <span class="simpleList2">{{opinionName[4]}}</span>
            </li>
            <li class="simpleList">
                <span class="simpleList2">{{opinionName[5]}}</span>
            </li>
            <li class="simpleList">
                <span class="simpleList2">{{opinionName[6]}}</span>
            </li>
            <li class="simpleList">
                <span class="simpleList2">{{opinionName[7]}}</span>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    props:['aa'],
    data(){
        return{
            opinionName:['综合排序','好评优先','销量最高','起送价最低','配送最快','配送费最低','人均从低到高','人均从高到低']
        }
    }
}
</script>
<style scoped>
#changeDisplay{
    opacity: 1;
    visibility: visible;
    max-height: 1500%;
}
.changeDisplay2{
    padding-top: .213333rem;
    padding-top: 2.133333vw;
    padding-bottom: .32rem;
    padding-bottom: 3.2vw;
    font-size: .311111rem;
    color: #333;
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
    z-index: 4
}
.simple{
    margin: 0;
    padding: 0;
    list-style:none;
}
.simpleList{
    position: relative;
    padding-left: 5.33333vw;
    line-height: 10.666667vw;
}
.simpleList2{
    box-sizing: inherit;
}
</style>