<template>
	<div>
		<div class="toSpecializations">
			<div class="list-header"> 
				<h3 class="display-3-text">Top Specialization</h3>
				<div class="see-all-button-wrapper">
					<button>查看全部</button>
				</div>
			</div>
			<Carousel></Carousel>
		</div>
		<div class="toSpecializations">
			<div class="list-header"> 
				<h3 class="display-3-text">Popular Courses</h3>
				<div class="see-all-button-wrapper">
					<button>查看全部</button>
				</div>
			</div>
			<Carousel></Carousel>
		</div>
		<div class="toSpecializations">
			<div class="list-header"> 
				<h3 class="display-3-text">Top Rated Courses</h3>
				<div class="see-all-button-wrapper">
					<button>查看全部</button>
				</div>
			</div>
			<Carousel></Carousel>
		</div>
		<div class="toSpecializations">
			<div class="list-header"> 
				<h3 class="display-3-text">Data Science</h3>
				<div class="see-all-button-wrapper">
					<button>查看全部</button>
				</div>
			</div>
			<Carousel></Carousel>
		</div>
		<div class="toSpecializations">
			<div class="list-header"> 
				<h3 class="display-3-text">Business</h3>
				<div class="see-all-button-wrapper">
					<button>查看全部</button>
				</div>
			</div>
			<Carousel></Carousel>
		</div>
		<div class="toSpecializations">
			<div class="list-header"> 
				<h3 class="display-3-text">Computer Science</h3>
				<div class="see-all-button-wrapper">
					<button>查看全部</button>
				</div>
			</div>
			<Carousel></Carousel>
		</div>
		<div class="toSpecializations">
			<div class="list-header"> 
				<h3 class="display-3-text">Social Sciences</h3>
				<div class="see-all-button-wrapper">
					<button>查看全部</button>
				</div>
			</div>
			<Carousel></Carousel>
		</div>
	</div>
	
	
	
	
</template>
<script>
import Carousel from './Carousel'
export default{
	components:{Carousel},
	data(){
		return{

		}
	}
}
</script>
<style>
	.toSpecializations{
		width: 1224.590px;
		height: 416px;
		padding-left: 15px;
		padding-right: 15px;
		margin-left: 47.203px;
		margin-right: 47.203px;
		margin-top: 80px;
	}
	.list-header{
		width: 1224.590px;
		height: 36px;
		margin-bottom: 30px;

	}
	.display-3-text{
		font-size: 32px;
		line-height: 36px;
		margin-top: 10px;
		margin-bottom: 10px;
		text-align: center;
		max-width: 100%;
	}
	.see-all-button-wrapper{
		/*width: 118px;
		height: 52px;*/
		margin-top: -55px;
		position: absolute;
		margin-left: 1075px;
	}
	.see-all-button-wrapper button{
		width: 118px;
		height: 52px;
		background: transparent;
		border: 1px solid #999;
	}
</style>