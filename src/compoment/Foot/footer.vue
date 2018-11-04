<template>
    <footer class="fixed">
        <div class="index-footer">
            <a @click.prevent="changecolor(1)" :class=" flag == 1 ? '' :''" class="iconfont icon-ali-changyonglogo40" >
                <section>{{aa.a}}</section>
            </a>
            <a @click.prevent="changecolor(2)" :class=" flag == 2 ? '' :''" class="iconfont icon-ali-faxianjihuo" >
                <section>{{aa.b}}</section>
            </a>
            <a @click.prevent="changecolor(3)" :class=" flag == 3 ? 'faxianjihuo-copy' :''" class="iconfont icon-ali-shiyongwendang" >
                <section>{{aa.c}}</section>
            </a>

            <router-link to="/vip" @click.prevent="changecolor(4)" :class=" flag == 4 ? 'iconfont icon-ali-icon_zhanghao-copy' :'iconfont icon-ali-icon_zhanghao' ">
                <section>{{aa.d}}</section>
            </router-link>
            
        </div>
    </footer>
</template>
<script>
export default {
    props:[
        'aa',
    ],

    data(){
        return {
            flag:1,
            s: 'javascript :void (0)'
        }
    },

    methods: {
        changecolor (a) {
            console.log(1)
            this.flag = a;
            this.$router.push('/vip')
        }
    }
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
