<template>
        <router-link to='/dataSciencePage'>
           <Card style="width:218px;height:330px;margin-right:25px;" :dis-hover="true">  
                <img :src="imgSrc"class="img2">
                <div class="divspan">
                    <span class="span1">{{cardTitle}}</span>
                </div>
                <div class="divp">
                    <p class="p1">{{cardContent}}</p>
                </div>
                <div class="divp2">
                    <p class="p2">{{cardCourse}}</p>
                </div>       
            </Card>
        </router-link>     
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        props:{
            imgSrc:{
                default:require("../assets/ts1.jpg"),
                required:true
            },
            cardTitle:{
                default:'Johns Hopkins University',
                required:true
            },
            cardContent:{
                default:'Data Science',
                required:true
            },
            cardCourse:{
                default:'10门课程',
                required:true
            }
        }
    }
</script>
<style>
    .img2{
        width:216px !important;
        height: 125px !important;
        margin-top: 0 !important;
    }
    .ivu-card-body {
    padding: 0;
    }
    .divspan{
        margin: 4px 10px 8px;
        line-height: 17px;
    }
    .span1{
        color: #a07e46;
        line-height: 17px;
        font-size: 12px;
    }
    .divp{
        margin: 4px 10px 8px;
        line-height: 24px;
        color: initial;
        max-height: 96px;
        white-space: initial;
        width: 186px;
        height: 24px;
    }
    .p1{
        font-size: 20px;
    }
    .p2{
        color: #757575;
        font-size: 1rem;
    }
    .divp2{
        margin-left: 10px;
        margin-top: 110px;
    }
</style>