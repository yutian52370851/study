<template>
    <div class="list-body">
        <Carousel v-model="value1" loop>
            <CarouselItem>
                <div class="demo-carousel" 
                    @click="go(index)"
                    v-for="(card,index) in cards">                   
                    <Card class="showcard" :imgSrc="card.img" :cardContent="card.content" :cardTitle="card.title" :cardCourse="card.course"></Card>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel" v-for="(card,index) in nextcards">
                    <Card class="showcard" :imgSrc="card.img" :cardContent="card.content" :cardTitle="card.title" :cardCourse="card.course"></Card>
                </div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
import Card from './Card'
    export default {
        components:{Card},
        data () {
            return {
                value1: 0,
                cards:[
                    {img:require('../assets/ts1.jpg'),
                    title:'John Hopkins University',
                    content:'Data Science',
                    course:'10门课程'
                    },
                    {img:require('../assets/ts2.jpg'),
                    title:'University of Michigan',
                    content:'Python for Everybody',
                    course:'5门课程'
                    },
                     {img:require('../assets/ts3.jpg'),
                    title:'University of Michigan',
                    content:'Applied Data Science width Python',
                    course:'5门课程'
                    },
                    {img:require('../assets/ts4.jpg'),
                    title:'Google',
                    content:'Google IT Support Professional Certificate',
                    course:'6门课程'
                    },
                     {img:require('../assets/ts5.jpg'),
                    title:'deeplearning.ai',
                    content:'Deep Learning',
                    course:'5门课程'
                    },                   
                ],
                nextcards:[
                    {img:require('../assets/ts1.jpg'),
                    title:'John Hopkins University',
                    content:'Data Science',
                    course:'10门课程'
                    },
                    {img:require('../assets/ts2.jpg'),
                    title:'University of Michigan',
                    content:'Python for Everybody',
                    course:'5门课程'
                    },
                    {img:require('../assets/ts6.jpg'),
                    title:'University of Michigan',
                    content:'Applied Data Science width Python',
                    course:'5门课程'
                    },
                    {img:require('../assets/ts7.jpg'),
                    title:'Google',
                    content:'Google IT Support Professional Certificate',
                    course:'6门课程'
                    },
                     {img:require('../assets/ts8.jpg'),
                    title:'deeplearning.ai',
                    content:'Deep Learning',
                    course:'5门课程'
                    }
                ]
            }
        },
        methods: {
            go (index) {
                // alert(index)
             this.$router.push('/dataSciencePage')
            }
        }
    }
</script>
<style>
    .list-body{
        width: 1224.590px;
        height: 358px;

    }
    .demo-carousel{
        /*display: flex;
        flex-direction:row;
        justify-content:space-between;*/
        display: block;
        float: left;
    }
    .showcard{
        margin-right:25px;
    }
</style>