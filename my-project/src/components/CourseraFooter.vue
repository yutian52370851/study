<template>
	<div class="rc-PageFooter">
		<div class="footerContainer">
			<Row class="row_8">
				<Col span="8" class="row_8_1">
					<h1 class="footerh1">course</h1>
					<p class="footerp1">Coursera provides universal access to the world’s best education, partnering with top universities and organizations to offer courses online.</p>
					<span>© 2018 Coursera Inc. 保留所有权利。</span>
					<img src="../assets/app.png" style="width:152px;height:45px; margin-top:24px;margin-right:20px;">
					<img src="../assets/google.png">
				</Col>
				<Col span="16" class="row_8_16">
					<Table></Table>
				</Col>
			</Row>
		</div>
	</div>
</template>
<script>
import Table from './Table'
export default{
	components:{Table},
	data(){
		return{

		}
	}
}
</script>
<style>
	.rc-PageFooter{
		width: 956px;
		height: 368px;
		border-top: 1px solid #E1E1E1;
	}
	.footerContainer{
		width: 956px;
		height: 343px;
		padding: 12px;
		margin-right: 184.5px;
		margin-left: 184.5px;
	}
	.row_8{
		width: 966px;
		height: 343px;
	}
	.row_8_1{
		width: 375px;
		height: 343px;
		padding-left: 12px;
		padding-right: 12px;
	}
	.row_8_16{
		width: 534px;
		height: 343px;
		padding-right: 12px;
		padding-left: 12px;
	}
	.footerh1{
		font-size: 30px;
		margin-bottom: 20px;
	}
	.footerp1{
		margin-top: 18px;
		margin-bottom: 18px;
	}
	.ivu-layout-footer{
    padding: 24px 50px;
    color: #495060;
    font-size: 14px;
    padding-top: 0;
	}
</style>