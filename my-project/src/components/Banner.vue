<template>
    <div>
        <Carousel v-model="value1" loop :radius-dot="true">
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../assets/banner.png">
                </div>
            </CarouselItem>       
        </Carousel>
      
            <div class="tupianlogo">
               <img src="../assets/1.jpg">
               <img src="../assets/2.png"> 
               <img src="../assets/3.png"> 
               <img src="../assets/4.png"> 
               <img src="../assets/5.png"> 
               <img src="../assets/6.png"> 
               <img src="../assets/7.png"> 
               <button class="btn">查看全部</button>
            </div>
            <div class="banner2">
                <img src="../assets/banner2.png">
            </div>
        
    </div>

</template>


<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>
<style>
    .demo-carousel img{
        width: 1349px;
        margin-top: 64px;
    }
    .tupianlogo{
        width: 1275px;
        height: 82px;
        margin-left: 57px;
        padding-left: 15px;
        padding-top: 25px;
        padding-bottom: 27px;
    }
    .banner2{
        margin-left: 74.500px;
        margin-bottom: 40px;
    }
    .tupianlogo img{
        margin-right: 15px;
        margin-left: 7px;
    }
    .btn{
        width: 118px;
        height: 52px;
        border: 1px solid #333;
        background: transparent;
        padding-right: 12px;
        padding-left: 12px;
    }
</style>