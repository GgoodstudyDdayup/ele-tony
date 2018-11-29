<template>
    <div class="Specifications">
        <div>
            <p class="stylename">规格</p>
            <div class="style-chance">
                <span class="style-chance-name">+免费</span>
                <span class="style-chance-name">+布丁</span>
                <span class="style-chance-name">+燕麦</span>
                <span class="style-chance-name">再加一份奶霜</span>
                <span class="style-chance-name">+冰淇淋</span>
            </div>
        </div>
        <div>
            <p class="stylename">糖度</p>
            <div class="style-chance">
                <span class="style-chance-name">七分</span>
                <span class="style-chance-name">正常</span>
                <span class="style-chance-name">五分</span>
                <span class="style-chance-name">三分</span>
                <span class="style-chance-name">不另外加糖</span>
            </div>
        </div>
        <div>
            <p class="stylename">加料1</p>
            <div class="style-chance">
                <span class="style-chance-name">x</span>
                <span class="style-chance-name">珍珠</span>
                <span class="style-chance-name">波霸</span>
                <span class="style-chance-name">混珠</span>
                <span class="style-chance-name">珍波椰</span>
            </div>
        </div>
        <div>
            <p class="stylename">加料2</p>
            <div class="style-chance">
                <span class="style-chance-name">x</span>
                <span class="style-chance-name">椰果</span>
                <span class="style-chance-name">xx</span>
                <span class="style-chance-name">xx</span>
                <span class="style-chance-name">xx</span>
            </div>
        </div>
        <div>
            <p class="stylename">冰块</p>
            <div class="style-chance">
                <span class="style-chance-name">xx</span>
                <span class="style-chance-name">xx</span>
                <span class="style-chance-name">xx</span>
                <span class="style-chance-name">xx</span>
                <span class="style-chance-name">xx</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.Specifications{
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
}
.stylename{
    color: #666;
    font-size: .323333rem;
    margin-bottom: .32rem;
    margin-bottom: 0.2vw;
}
.style-chance{
    flex-wrap: wrap;
    margin: 0 -.24rem;
    margin: 0 -2.4vw;
}
.style-chance-name{
    display: inline-block;
    min-width: 2.773333rem;
    min-width: 27.733333vw;
    padding: 0 .266667rem;
    padding: 0 2.666667vw;
    min-height: .853333rem;
    min-height: 8.533333vw;
    border-radius: .053333rem;
    border-radius: .533333vw;
    background-color: #f5f5f5;
    color: #333;
    font-size: .286667rem;
    text-align: center;
    margin: 0 .213333rem .32rem;
    margin: 0 2.133333vw 3.2vw;
    line-height: .853333rem;
    line-height: 8.533333vw;
}
.change-chance-color{
    color: #2396ff;
    font-weight: 700;
    background-color: rgba(35,150,255,.2)
}
</style>
