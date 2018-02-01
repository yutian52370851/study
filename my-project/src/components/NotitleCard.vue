<template>
	<div class="bt3-row1">
		<div class="bt3-container">
           	<h3 class="display-3-text">运作方式</h3>
        </div>
		<Card class="bt4-row1" :bordered="false" :dis-hover="true">
			<Row>
				<Col span="10" class="leftnav">
					<div class="navcontent">
						<p class="bullet-index">①</p>
						<div class="content4">	
							<h1 class="divh1">课程作业</h1>
							<p class="divp1">每门课程都像是一本互动的教科书，具有预先录制的视频、测验和项目</p>
						</div>
					</div>
					<div class="navcontent">
						<p class="bullet-index">②</p>
						<div class="content4">	
							<h1 class="divh1">帮助和支持</h1>
							<p class="divp1">与其他成千上万的学生相联系，对想法进行辩论，讨论课程材料，并寻求帮助来掌握概念。</p>
						</div>
					</div>
					<div class="navcontent">
						<p class="bullet-index">③</p>
						<div class="content4">	
							<h1 class="divh1">证书</h1>
							<p class="divp1">获得正式认证的作业，并与朋友、同事和雇主分享您的成功。</p>
						</div>
					</div>
				</Col>
				<Col span="14">
					<div class="span1443">
						<img src="../assets/yzfs.jpg">
					</div>
				</Col>
			</Row>
    	</Card>
	</div>
    
</template>
<script>
    export default {
        
    }
</script>
<style>
	.bt3-row1{
		width: 1349px;
		height: 616px;
	}
	.bt4-row1{
		width: 1237px;
		height: 560px;
		margin-left: 112.4px;
		border-bottom: 1px solid #
	}
	.bt3-container{
		width: 1140px;
		height: 56px;
		padding-left: 15px;
		padding-right: 15px;
		margin-right: 89.5px;
		margin-left:89.5px;
		margin-top: 35px;
	}
	.display-3-text{
		font-size: 32px;
		line-height: 36px;
		margin-top: 10px;
		margin-bottom: 10px;
		width: 1140px;
		height: 36px;
		font-weight: normal;
	}
	.left-nav{
		height: 458px;
		width: 419px !important;
		padding-top:80px;

	}
	.ivu-col-span-10 {
    display: block;
    width: 419px !important;
    margin-right: 15px;
	}
	.bullet-index{
		color: #f5a623;
		line-height: 28px;
		text-align: center;
		height: 28px;
		width: 28px;
		font-size: 30px;
	}
	.content4{
		margin-top:-35px;
		margin-left: 50px;
	}
	.navcontent{
		margin-top: 80px;
		width: 419px;
	}
	.divh1{
		font-size: 22px;
		line-height: 24px;
		font-weight: normal;
	}
	.divp1{
		color: #373a3c;
		font-size: .875rem;
		line-height: 1.5rem;
	}
	.span1443{
		width: 787px;
		height: 560px;
		margin-top: 0px;
	}
	.span1443 img{
		height: 560px;
	}
	.span1443 img {
    height: 560px;
    width: 803px;
	}
</style>