<template>
	<div>
		<div class="search-head" flex="cross:center">
			<div class="close" @click="close">关闭</div>
			<div class="search-box">
				<form>
					<div>
						<input v-model="query" @keyup.enter="submit()" type="search" :class="{'bgm-null':bgmNull}" @focus="bgmOff" @blur="bgmOn">
					</div>
				</form>
			</div>
		</div>

		<div class="search-body" flex="cross:center main:center box:mean">
			<div class="left-content">
				<ul>
					<li v-for="item in itemClass1" :class="item.class" @click="search(item.id)">{{item.title}}<p>{{item.stitle}}</p></li>
				</ul>
			</div>
			<div class="mid-content">
				<ul>
					<li v-for="item in itemClass2" :class="item.class" @click="search(item.id)">{{item.title}}<p>{{item.stitle}}</p></li>
				</ul>
			</div>
			<div class="right-content">
				<ul>
					<li v-for="item in itemClass3" :class="item.class" @click="search(item.id)">{{item.title}}<p>{{item.stitle}}</p></li>
				</ul>
			</div>
		</div>
		<div class="top-more" flex="cross:center main:center" v-if="!loading" @click="toTop250">查看豆瓣电影Top250</div>
		<spinner v-if="loading"></spinner>
	</div>
</template>
<script>
import spinner from './spinner/spinner'
	export default{
		data () {
			return {
				loading : true,
				bgmNull : false,
				query : '',
				itemClass1: [],
				itemClass2: [],
				itemClass3: []
			}
		},
		components :{
			spinner
		},
		mounted: function () {
			let url = 'https://api.douban.com/v2/movie/top250'
			this.$http.jsonp(url)
			.then(function(res){
				this.loading=false
				let item = res.body.subjects
				for(let i=0;i<6;i++){
					let num = 'color' + Math.ceil(Math.random()*12)
					this.itemClass1.push({'title':item[i].title,'class':num,'stitle':item[i].original_title,'id':item[i].id});
				}
				for(let i=6;i<12;i++){
					let num = 'color' + Math.ceil(Math.random()*12)
					this.itemClass2.push({'title':item[i].title,'class':num,'stitle':item[i].original_title,'id':item[i].id});
				}
				for(let i=12;i<18;i++){
					let num = 'color' + Math.ceil(Math.random()*12)
					this.itemClass3.push({'title':item[i].title,'class':num,'stitle':item[i].original_title,'id':item[i].id});
				}
			})
			.catch(function (res) {
				console.log(res);
			})
		},
		methods: {
			bgmOff : function () {
				this.bgmNull = true
			},
			bgmOn : function (){
				if(!this.query){
					this.bgmNull = false
				}
			},
			close: function () {
				this.query=''
				window.history.go(-1)
			},
			submit: function () {
		        this.$router.push({path: '/serchResult', query: { name: this.query }})
		        this.query = ''
		    },
		    search: function(id) {
		    	let _url ='/movie/' + id
		    	this.$router.push({path:_url})
		    },
		    toTop250: function(){
		    	let _url = '/top250'
		    	this.$router.push({path:_url})
		    }
		}
	}
</script>

<style scoped>
	.search-head{
		width: 100%;
		height: 1.5rem;
		border-bottom: 1px solid #d6d3d3;
	}
	.close{
	    color: #42bd56;
	    font-size: .5rem;
	    width: 20%;
	    box-sizing: border-box;
	    padding: 0 10px;
	    text-align: center;
	}
	.search-box{
		width: 80%;
		padding: 0 10px 0 0;
		box-sizing: border-box;
	}
	.search-box input{
		box-sizing: border-box;
	    -webkit-appearance: none;
	    border: 0;
	    background: url(../assets/search-icon.png) no-repeat 50% #f3f3f3;
	    background-size: 17.33333px;
	    border-radius: 3px;
	    width: 100%;
	    height: .8rem;
	    font-size: .4rem;
	}
	.search-box .bgm-null{
		background-size: 0 !important;
	}
	.search-body ul{
		/*padding:20px 0;*/
	}
	.search-body ul li{
		text-align: center;
		margin:.8rem 0;
		font-size: .45rem;
	}
	.search-body ul li p{
		font-size: .2rem;
		transform:scale(.8);
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.top-more{
		color: #42bd56;
		border:1px solid #42bd56;
		font-size: .5rem;
		margin :0 1rem;
		padding: 10px 0 ;
		box-sizing: border-box;
	}
	.color1{
		color: rgb(35, 132, 232);
	}
	.color2{
		color: rgb(122, 106, 219);
	}
	.color3{
		color: rgb(159, 120, 96);
	}
	.color4{
		color: rgb(230, 70, 126);
	}
	.color5{
		color: rgb(42, 184, 204);
	}
	.color6{
		color: rgb(244, 143, 46);
	}
	.color7{
		color: rgb(159, 120, 96);
	}
	.color8{
		color: rgb(87, 116, 197);
	}
	.color9{
		color: rgb(89, 108, 221);
	}
	.color10{
		color: rgb(225, 100, 77);
	}
	.color11{
		color: rgb(64, 207, 169);
	}
	.color12{
		color: rgb(66, 189, 86);
	}
</style>