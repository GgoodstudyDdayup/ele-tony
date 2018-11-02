<template>
    <header>
        <div>
            <div class="index-2s5Ah">
                <span class="iconfont icon-ali-ditu-dibiao"></span>
                <span class="index-2uw">{{ name }}</span>
                <span class="iconfont icon-ali-xiajiantou"></span>  
            </div>
        </div>
    </header>
</template>
<script>

export default {
    data(){
        return{
            name:"解放新村之虎顾振华"
        }
    }
}
</script>
<style scoped>
.index-2uw{
    margin: 0 1.333333vw;
    font-size: .453333rem;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

header{
    padding: 2.666667vw 3.733333vw 0;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color:#fff
}
div{
    -webkit-box-align:center;
    display:flex;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 9.2vw;
}
.index-2s5Ah{
    width: 60%;
    font-weight: 700;
}

</style>
