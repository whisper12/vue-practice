<template>
	<div class="topBody">
      <div class="header-title">
        <div class="msg-back" @click="backLastPage">
          <div></div>
        </div>
        <div class="msg-title">豆瓣电影</div>
        <div class="msg-back"></div>
      </div>
      <div class="stitle">豆瓣电影TOP250</div>
      <section class="topCotent">
      	<ul>
      		<li v-for="item in itemClass" @click="search(item.id)">
      			<div>
      				<span class="movie-img"><img :src="item.images.medium"></span>
      				<div class="movie-description">
      					<div class="movie-title">
      						{{item.title + '&nbsp/&nbsp' +item.original_title}}
      					</div>
      					<div class="movie-body">
      						<p>导演: <span v-for="item in item.directors">{{item.name}}</span></p>
      						<p>主演: <span v-for="item in item.casts" style="margin-right:5px;">{{item.name}}</span></p>
      					</div>
      					<div class="movie-mark">
      						评分: {{item.rating.average}}
      					</div>
      				</div>
      			</div>
      		</li>
      	</ul>
      </section>
      <spinner v-if='loading'></spinner>
	</div>
</template>

<script>
import spinner from './spinner/spinner'
	export default{
		data () {
			return {
				loading : true,
				itemClass : [],
				requestOption: {
					"count" : 10,
					"start" : 0
				},
				requestUrl: 'https://api.douban.com/v2/movie/top250'
			}
		},
		components : {
			'spinner':spinner
		},
		mounted : function(){
			this.$http.jsonp(this.requestUrl,{params : this.requestOption})
			.then(function(res){
				this.loading=false
				for(let i =0,k=res.body.subjects.length;i<k;i++){
					this.itemClass.push(res.body.subjects[i])
				}
				window.addEventListener('scroll', this.handleScroll);
			})		
		},
		methods : {
	        backLastPage: function () {
            window.history.go(-1)
  		    },
  		    search: function(id){
  		    	let _url = /movie/ + id
  		    	this.$router.push({path:_url})
  		    },
  		    handleScroll: function(){
            let _time=1
            let _this=this
  		    	if(window.innerHeight + document.body.scrollTop >= document.body.offsetHeight){
              clearInterval(_this.timeRun)
              _this.timeRun = setInterval(function(){
                _time--
                if(_time==0){
                  clearInterval(_this.timeRun)
                  _this.requestOption.start+=10
                  _this.$http.jsonp(_this.requestUrl,{params : _this.requestOption})
                  .then(function(res){
                    for(let i =0,k=res.body.subjects.length;i<k;i++){
                      _this.itemClass.push(res.body.subjects[i])
                    }
                  })                 
                }
              },1000)	
  		    	}
  		    }
		}
	}
</script>

<style scoped>
  .topBody{
  	padding-bottom: 20px;
  }
  .header-title {
    display: flex;
    height: 1.5rem;
    width: 100%;
    background-color: #42bd56;
    padding: 6px;
    box-sizing: border-box;
    line-height: 1.5rem;
  }
  .msg-back {
    width: 1.5rem;
    position: relative;
    cursor: pointer;
    line-height: 1.5rem
  }
  .msg-back > div {
    /*position: absolute;*/
    display: inline-block;
    margin-left: 10px;
    height: .4rem;
    width: .4rem;
    border: 2px solid #fff;
    border-width: 0 0 2px 2px;
    transform: rotate(45deg);
  }
  .msg-title {
    flex: 1;
    color: #fff;
    text-align: center;
    line-height: 2;
    font-size: .6rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .stitle{
  	color: #8e8e8e;
  	font-size: .4rem;
  	font-weight: 600;
  	padding: 10px;
  }
  .topCotent ul{
  	margin: 5px 10px;
  	background: #f2f2f2;
  }
  .topCotent ul li{
  	padding: 5px 10px;
  	background: #fff;
  	overflow: hidden;
  	border:1px solid #fff;
  	-webkit-box-shadow: 0 0px 2px 0 rgba(0,0,0,0.2);
    box-shadow: 0 0px 2px 0 rgba(0,0,0,0.2);
    border-radius:3px;
    font-size:0;
    margin-bottom:10px;
  }
  .movie-img{
  	float: left;
    /*margin: 2px 10px 0 0;*/
    width: 20%;
    text-align: center;
  }
  .movie-img img{
  	width: 1.5rem;
  }
  .movie-description{
  	float: left;
  	overflow: hidden;
  	width: 80%;
  	font-size: .35rem;
  	line-height: 1.3;
  }
  .movie-title{
  	display: -webkit-box;
    -webkit-box-orient
    text-overflow: ellipsis;
    overflow : hidden;
    text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
  }
  .movie-body{
  	color: #8e8e8e;
  }
  .movie-body p{
  	white-space: nowrap;
  	overflow: hidden;
  	text-overflow: ellipsis;
  }
  .movie-mark{
  	color: #8e8e8e;
  }
</style>