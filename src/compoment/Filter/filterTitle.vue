<template>
    <div>
        <app-modal @click.native="change3()" :aa="aa" :bb="bb"  ></app-modal>
        <aside style="top:0" class="title-name" >
            <div class="title-header">
                <a @click.prevent="change()" class="header-name" href="">
                    <span class="name">{{name[0]}}</span>
                    <span class="iconfont icon-ali-xiasanjiao path-margin"></span>
                </a>
                <a @click.prevent class="header-name" href="">
                    <span class="name">{{name[1]}}</span>
                </a>
                <a @click.prevent class="header-name" href="">
                    <span class="name">{{name[2]}}</span>
                </a>
                <a @click.prevent="change2()" class="header-name" href="">
                    <span class="name">
                        {{name[3]}}
                        <span class="iconfont icon-ali-shaixuan1 path-margin"></span>
                    </span>
                </a>
            </div>
        </aside>
        <app-opinion :aa="aa"></app-opinion>
        <app-screen  :bb="bb"></app-screen>
    </div>
</template>
<script>
import Screen from "./screen.vue"
import background from "./background-black.vue"
import Opinion from "./opinion.vue"
export default {
    components:{
        'app-modal':background,
        'app-opinion':Opinion,
        'app-screen':Screen
    },
    data(){
        return{
            aa:false,
            bb:false,
            name:['综合排序','距离最近','品质联盟','筛选']
        }
    },
    methods:{
        change(){
            this.aa = !this.aa
            this.bb = false
            window.scroll(0,950)
            let Body = document.getElementsByTagName('body')[0]
            if(this.aa == true){
                Body.style="overflow:hidden"
            }else{
                Body.style="overflow:auto"
                window.scroll(0,630)
                }
            
        },
        change2(){
            this.bb = !this.bb
            this.aa = false
            window.scroll(0,950)
            let Body = document.getElementsByTagName('body')[0]
            if(this.bb == true){
                Body.style="overflow:hidden"
            }else{
                Body.style="overflow:auto"
                window.scroll(0,630)
                }
        },
        change3(){
            this.aa = false
            this.bb = false
            let Body = document.getElementsByTagName('body')[0]
            Body.style="overflow:auto"
        }
    }   
}
</script>
<style scoped>
.title-name{
    position: relative;
    border-bottom: 1px solid #ddd;
    line-height: 1.04rem;
    line-height: 10.4vw;
    z-index: 101;
    height: 1.066667rem;
    height: 10.666667vw; 
}
.title-header{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 1.053333rem;
    height: 10.533333vw;
    display: flex;
    z-index: 4;
    background-color: #fff;
}
.header-name{
    flex: 1;
    text-align: center;
    color:#666;
    position: relative;
    font-size: .332222rem;
    z-index: 101;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none
}
.name{
    box-sizing: inherit;
}
.path-margin{
    margin-left: 1.522222vw;
}
</style>
