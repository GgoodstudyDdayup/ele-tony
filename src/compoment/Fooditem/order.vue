<template >
    <div style="height:168vw;">
        <div class="order-main">
            <main class="order-main2">
                <div class="menu" >    
                    <div class="miaodian" v-for= "(m,i) in menuName" :key="i">
                    <a style="text-decoration:none;color:#666" >{{ m.name }}
                        <span :class="m.allcount >=1 ?'active':'active1'" >{{ m.allcount }}</span>
                    </a>
                    </div>
                </div>
                <section class="menu-comment" >
                    <div class="comment" v-for="(title,a) in menuName" :key="a">
                        <dl>
                            <dt>
                                <div class="cate-title" >
                                    <strong class="cate-name">{{title.name}}</strong>
                                    <span class="cate-desc">大家喜欢吃才叫好吃</span>
                                </div>
                            </dt>
                            <dd>
                                <div v-for="(title1,b) in menuName[a].food" :key="b" class="fooddetails-root">
                                    <span class="fooddetails-logo">
                                        <img src="../../some-img2/696aa5cf9820adada9b11a3d14bf5jpeg.webp">
                                    </span>
                                    <section class="fooddetails-info">
                                            <p class="fooddetails-name">
                                                <span class="fooddetails-nametext">{{ title1.name }}</span>
                                            </p>
                                            <p class="fooddetails-desc2">四季春茶搭配特选植物油，经由。。。。。。</p>
                                            <p class="fooddetails-sales">月售388份 好评率98%</p>
                                            <p style="color:rgb(255,83,57)" class="saleinfo-price" >{{ '￥' + title1.price +'元' }}</p>
                                            <span  @click.stop="minus(title1.id,a,b)" class="fooddetails-button2" v-html="title1.messages"></span>
                                            <span  style="position: absolute;font-size: 0.3rem;left: 30vw;bottom: 7vw;color:#333">{{ title1.number }}</span>
                                            <span  @click.stop="add(title1.id,a,b)" class="fooddetails-button iconfont icon-ali-jiahao- button"></span>                                                
                                    </section>
                                </div> 
                            </dd>
                        </dl>
                    </div>
                </section>
            </main>
        </div>
    <app-orderFooter @ChildPlus="ChildPlus" @ChildMinus="ChildMinus"  :menuName ='menuName'  :allcount='allcount' :goods='goods' ></app-orderFooter>
    </div>    
</template>
<script>
    import footer from "./order-footer.vue"
export default {
    components:{
        'app-orderFooter':footer
    },
    data(){
        return{
            menuName:'',
            allcount:'', 
            goods:[],
        }
    },

    methods:{
        ChildPlus(goods){
         
            this.add(goods.id,goods.indexA,goods.indexB)
        },
        ChildMinus(goods){
            
            this.minus(goods.id,goods.indexA,goods.indexB)
        },
        add(id,indexA,indexB){
            var inside = this.menuName[indexA].food[indexB];
            if(this.allcount == ''){
                this.allcount = 1 
            }else{
                this.allcount +=1          
            }
            if(this.menuName[indexA].allcount == ''){
                this.menuName[indexA].allcount =1
            }else{
                this.menuName[indexA].allcount +=1
            }
            if(inside.number ==''){
                inside.messages = '<span style="font-size:4.4vw;color: #333;" class="iconfont icon-ali-jianhao"></span>'
                inside.number = 1 
                if (inside.listcount == ''){
                    inside.listcount = 1 
                }else{
                    inside.listcount += 1              
                }
            }else{ 
                inside.number += 1
                inside.listcount += 1                         
            }

            var a = 0;
            var b = 0;

            if (this.goods.length != 0){
                for(var i=0;i<this.goods.length;i++){
                    if (this.goods[i].id == inside.id){
                        a++;
                        b=i;            
                    } 
                }
                if (a == 0){
                    this.goods.push(
                        {
                            id : inside.id,
                            name : inside.name,
                            count : inside.listcount,
                            money : inside.price,
                            indexA : indexA,
                            indexB : indexB
                        }
                    )
                }else{
                    this.goods[b].count += 1;
                }
            }else{
                this.goods.push(
                    {
                        id : inside.id,
                        name : inside.name,
                        count : inside.listcount,
                        money : inside.price,
                        indexA : indexA,
                        indexB : indexB
                    }
                ) 
            }  
            //console.log(this.goods)
        },
        minus(id,indexA,indexB){ 
            var inside1 = this.menuName[indexA].food[indexB];
            if(this.allcount == 1){
                this.allcount = ''
            }else{
                this.allcount -=1
            }
            if(this.menuName[indexA].allcount == 1){
                this.menuName[indexA].allcount =''
            }else{
                this.menuName[indexA].allcount -=1
            }
            if(inside1.number == 1){   
                inside1.number=''
                inside1.messages ='    '
                if (inside1.listcount == 1){
                    inside1.listcount = ''
                }else{
                    inside1.listcount -= 1
                }  
            }else{
                inside1.number -= 1
                inside1.listcount -= 1
            }
            var $inside = this.goods
            
            if ($inside.length == 1){
                if ($inside[0].count == 1){
                    this.goods = []
                }else{
                    $inside[0].count -= 1
                }
            }else{
                for(var i=0;i<$inside.length;i++){
                    if(inside1.id == $inside[i].id){
                        if ($inside[i].count == 1){
                            $inside.splice(i,1)
                        }else{
                            $inside[i].count -=1
                        }
                    }
                } 
            }            
            console.log(this.goods)           
        },
        axiosTest(){
            let _this = this
            this.axios.get('https://www.easy-mock.com/mock/5c08e96ee1c4a705638a7f8c/example/example')
            .then((res)=>{
                console.log(res)
                _this.menuName = res.data.goods
            })
            .catch((data)=>{
                console.log(data)
            })
        },
    },
    mounted(){
      this.axiosTest();
    },
} 
</script>
<style scoped>
 .active{
    display: inline-block;
    right: -.12rem;
    right: -1.2vw;
    top: -.133333rem;
    top: -1.333333vw;
    line-height: 1;
    background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
    color: #fff;
    border-radius: .22rem;
    border-radius: 2.2vw;
    padding: .053333rem .133333rem;
    padding: .533333vw 1.333333vw;
    font-size: .186667rem;
 }
 .active1{
     display: none
 }
.order-main{
    padding-bottom: 1.28rem;
    padding-bottom: 12.8vw;
    background-color: #fff;  
    height: 100%
}
.order-main2{
    display: flex;
    height: 100%
}
.menu{
    flex-direction: column;
    padding-bottom: 1.066667rem;
    padding-bottom: 10.666667vw;
    background-color: #f8f8f8;
    width: 2.053333rem;
    width: 20.533333vw;
    overflow-y:auto;
}
.miaodian{
    padding: .466667rem .2rem;
    padding: 4.666667vw 2vw;
    font-size: .28rem;
}
.menu-comment{
    position: relative;
    width: 7.946667rem;
    width: 79.466667vw;
    overflow-y:auto;
}
.comment{
    display: flex;
}
p{
    margin: 0;
}
dl{
    margin: 0
}
dt{
    position: relative;
    margin-left: .266667rem;
    margin-left: 2.666667vw;
    padding: .2rem .8rem .2rem 0;
    padding: 2vw 8vw 2vw 0;
}
.cate-title{
    display: flex;
    align-items: center;
    overflow: hidden;
}
.cate-name{
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    font-weight: 700;
    font-size: .32rem;
    color: #666;
    flex: none;
}
.cate-desc{
    flex: 1;
    color: #999;
    font-size: .266667rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
dd{
    position: relative;
    padding: 0;
    margin: 0;
    min-height: 3.066667rem;
    min-height: 30.666667vw;
    padding-left: .266667rem;
    padding-left: 2.666667vw;
}
.fooddetails-root{
    padding: .266667rem 0;
    padding: 2.666667vw 0;
    margin-bottom: .013333rem;
    margin-bottom: .133333vw;
    display: flex;
    min-height: 2.746667rem;
    min-height: 27.466667vw;
    position: relative;
    align-content:center
}
.fooddetails-info{
    flex: 1;
    position: relative;
    padding-bottom: .666667rem;
    padding-bottom: 6.666667vw;
    padding-right: .4rem;
    padding-right: 4vw;
}
.fooddetails-name{
    position: relative;
    padding-right: .4rem;
    padding-right: 4vw;
    display: flex;
    align-items: start;
}
.fooddetails-nametext{
    font-weight: 700;
    overflow: hidden;
    font-size: .36rem;
    white-space: nowrap;
    width: 4rem;
    width: 40vw;
    text-overflow: ellipsis;
}
.fooddetails-desc2{
    margin:133333rem 0;
    margin: 1.333333vw 0;
    font-size: .226667rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 4.266667rem;
    width: 42.666667vw;
}
.fooddetails-sales{
    margin: .173333rem 0!important;
    margin: 1.733333vw 0!important;
    color: #999;
    font-size: .226667rem;
    line-height: 1;
    min-height: 1em;
}
.saleinfo-price{
    margin: -1vw;
    margin-top:3vw;
    font-size: .35rem;
    line-height: .426667rem;
    line-height: 4.266667vw;
    color: #ff5339;
    padding-bottom: .093333rem;
    padding-bottom: .933333vw;
    display: flex;
    align-items: baseline;
}
.fooddetails-button{
    position: absolute;
    right: .4rem;
    right: 4vw;
    bottom: 1.926667rem;
    bottom: 5.266667vw;
}
.fooddetails-button2{
    position: absolute;
    top: 9.5vw;
    left: 2rem;
    left: 20vw;
    bottom: .526667rem;
    bottom: 5.266667vw;
}
.fooddetails-logo{
    display: inline-block;
}
.fooddetails-logo img{
    width: 2.5rem;
    width: 25vw;
    height: 2.5rem;
    height: 25vw;
}
.iconfont{
    font-size: 4.4vw;
    color: #2395ff;
}
</style>
