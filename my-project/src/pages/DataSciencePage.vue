<template>
<div class="layout">
    <Layout>
        <Header class="bujuh" :style="{position: 'fixed', width: '100%',top:0}">
        	<HeaderTop></HeaderTop>
        </Header>
        <Content class="content1">
        		<div class="dstop">
        			<div class="bg_dstop">
        				<div class="rc_header">
        					<h1 class="">Data Science 专项课程</h1>
        					<p>Launch Your Career in Data Science。A nine-course introduction to data science, developed and taught by leading professors.</p>
        				</div>
        			</div>
        		</div> 
        	
        	     
        	 
        </Content>
        <Footer class="footer1">            
        </Footer>
    </Layout>
</div>
</template>
<script>
import HeaderTop from '../components/HeaderTop'



export default {
	components:{HeaderTop},
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
	.dstop{
		margin-top: 64px;
		width: 1349px;
		height: 432px;
		background: url(../assets/dstop.jpg)  no-repeat;     /*设置背景为图片*/
	}
	.bg_dstop{
		background: rgba(0,0,0,0.6);
		margin-top: 64px;
		width: 1349px;
		height: 432px;
	}
	.dstop{
		color: white;
	}
	.rc_header{
		width: 688px;
		height: 400px;
		padding: 16px;
		margin-left: 450px;
		padding-top: 150px;
		
	}
	.rc_header h1{
		font-size: 54px;
		line-height: 60px;
		text-align: center;
		font-weight: normal;
	}
	.rc_header p{
		font-size: 16px;
		line-height: 24px;
		text-align: center;
		font-weight: normal;
		width: 688px;
		height: 400px;
		margin-top: 20px;
	}
</style>

<!-- <template>
	<div>
		<h1 style="margin-top: 100px">sgerggw</h1>
	</div>
</template>

<script>
export default {
	created () {
		console.log(1111111111111111111111)
	}
}

</script> -->