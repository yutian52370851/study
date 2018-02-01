<template>
	<div class="headertop">
		<Row>
			<Col span="4" class="span4">
				<h1>course</h1>
			</Col>
			<Col span="14"class="span14">	
    			<Input v-model="value" placeholder="搜索目录" style="width: 300px">
    			<span slot="prepend">目录</span>
    			<Button slot="append" icon="ios-search"></Button>
    			</Input>

			</Col>
			<Col span="6"class="span6">
				<ul class="headright">
					<li>企业版</li>
					<li>登录</li>
					<li>
						<Button type="primary" style="width:88px;">注册</Button>
					</li>
				</ul>
			</Col>
		</Row>
	</div>
</template>
			
<script>
    export default {
        data () {
            return {
                value: ''
            }
        }
    }
</script>
<style>
	.headertop{
		width: 100%;
		height: 63px;
		background: white;
		border-bottom: 1px solid #dedede; 
	}
	.span4, .span14, .span6{
		height: 65px;
	}
	.span14{
		margin-top: 15px;
	}
	.span6{
		padding-left:30px;
	}
	.headright li{
		float: left;
		list-style: none;
		margin-right: 40px;
		color: #333;
		font-size: 14px;
	}

</style>
