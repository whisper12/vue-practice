<template>
	<div>
		<vheader></vheader>
		<section class="book-fiction">
			<div class="type-title"><span>最受关注图书｜虚构类</span><span>更多</span></div>
				<ul class="book-block">
					<li v-for="item in books">
						<div class="image-block" :style="{backgroundImage:'url('+item.image+')'}"></div>
						<span class="item-title">{{item.title}}</span>
						<star :score="item.rating.average"></star>
					</li>
				</ul>
		</section>
		<section class="book_nonfiction"></section>
	</div>
</template>

<style scoped>
	.book-block{
		overflow: hidden;
		overflow-x:scroll;
		-webkit-overflow-scrolling:touch;
		white-space: nowrap;
		padding: 20px;
	}
	.book-block li{
		display: inline-block;
		text-align: center;
		margin-right:10px;
		width: 3rem;
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
	}
</style>

<script>
	import header from '../header/bookHeader'
	import star from '../star/star'
	export default{
		data(){
			return {
				books: []
			}
		},
		components : {
			'vheader' : header,
			star
		},
		mounted : function(){
	      this.$http.jsonp('https://api.douban.com/v2/book/search',{params:{'tag':'虚构类'}})
	          .then(function (response) {
	          	this.books = response.body.books
	          })
	          .catch(function (response) {
	            console.log(response)
	          })			
		}
	}
</script>