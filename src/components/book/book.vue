<template>
	<div>
		<vheader></vheader>
		<div v-if="!loading">
			<section class="book-fiction">
				<div class="type-title"><span>最受关注图书｜虚构类</span><span>更多</span></div>
					<ul class="book-block">
						<li v-for="item in books">
							<div class="image-block" :style="{backgroundImage:'url('+item.image+')'}"></div>
							<span class="item-title">{{item.title}}</span>
							<star :score="item.rating.average" class="marginTop"></star>
						</li>
					</ul>
			</section>	

			<section class="book-fiction">
				<div class="type-title"><span>最受关注图书｜非虚构类</span><span>更多</span></div>
					<ul class="book-block">
						<li v-for="item in non_books">
							<div class="image-block" :style="{backgroundImage:'url('+item.image+')'}"></div>
							<span class="item-title">{{item.title}}</span>
							<star :score="item.rating.average" class="marginTop"></star>
						</li>
					</ul>
			</section>	
		</div>
		<spinner v-if="loading"></spinner>
	</div>
</template>

<script>
	import header from '../header/bookHeader'
	import star from '../star/star'
	import spinner from '../spinner/spinner'
	export default{
		data(){
			return {
				books: [],
				non_books:[],
				loading:true
			}
		},
		components : {
			'vheader' : header,
			star,
			spinner
		},
		mounted : function(){
	      this.$http.jsonp('https://api.douban.com/v2/book/search',{params:{'tag':'虚构类'}})
	          .then(function (response) {
	          	this.loading = false
	          	this.books = response.body.books
	          })
	          .catch(function (response) {
	            console.log(response)
	          })
	      this.$http.jsonp('https://api.douban.com/v2/book/search',{params:{'tag':'非虚构类'}})
	          .then(function (response) {
	          	this.non_books = response.body.books
	          })
	          .catch(function (response) {
	            console.log(response)
	          })	          	
		}
	}
</script>
<style scoped>
	.marginTop{
		margin-top: 5px;
	}
	.book-block{
		overflow: hidden;
		overflow-x:scroll;
		-webkit-overflow-scrolling:touch;
		white-space: nowrap;
		padding: 0 20px;
	}
	.book-block li{
		display: inline-block;
		text-align: center;
		margin-right:10px;
		width: 2.5rem;
	}
	.book-block li:last-child{
		margin-right: 0;
	}
	.image-block{
	    width: 100%;
	    overflow: hidden;
	    background-size: cover;
	    background-position: center;
	}
	.image-block::before{
	    content: "";
	    float: left;
	    margin-top: 142.85714%;
	}
	.item-title{
		width: 100%;
		display: block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: 5px;
	}
	.type-title{
		padding: 10px 20px;
		height: 1rem;
		line-height: 1rem;
	}
	.type-title span:nth-child(1){
		display: inline-block;
	    margin-bottom: 0;
	    font-size: .5rem;
	    color: #111;
	    padding-left: 0;
	    padding-bottom: 0;
	}
    .type-title span:nth-child(2){
    	float: right;
	    font-size: .4rem;
	    color: #42bd56;
    }
</style>
