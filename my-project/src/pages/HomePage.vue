<template>
<div class="layout">
    <Layout>
        <Header class="bujuh" :style="{position: 'fixed', width: '100%',top:0}">
        	<HeaderTop></HeaderTop>
        </Header>
        <Content class="content1">     
           <Banner></Banner>
           <TopSpecializations></TopSpecializations>
           <NotitleCard></NotitleCard>
        </Content>
        <Footer class="footer1">
            <CourseraFooter></CourseraFooter>
        </Footer>
    </Layout>
</div>
</template>
<script>
import HeaderTop from '../components/HeaderTop'
import Banner from '../components/Banner'
import TopSpecializations from '../components/TopSpecializations'
import NotitleCard from '../components/NotitleCard'
import CourseraFooter from '../components/CourseraFooter'
export default {
	components:{HeaderTop,Banner,TopSpecializations,NotitleCard,CourseraFooter},
	data(){
		return{

		}
	}
	
}
</script>

<style>
	.bujuh{
		background: white;
		z-index: 1000;
		border: 1px solid #dedede
	}
	.content1{
		background: white;
	}
	.footer1{
		background: white;
	}
</style>