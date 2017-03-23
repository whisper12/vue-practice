<template>
		<li>
			<p class="letter" @click="blockChange">{{cityData.letter}} <span :class="{'msg-ellipsis-flag-up':!ellipsisFlag,'msg-ellipsis-flag-down':ellipsisFlag}"></span></p>
			<ul v-if="!ellipsisFlag" class="cityBlock">
				<li v-for="item in cityData.data" @click="cityAction(item.name)">{{item.name}}</li>
			</ul>
		</li>
</template>

<script>
	export default{
		props: {
			cityData: {
				type: Object
			}
		},
		data(){
			return{
				ellipsisFlag:true
			}
		},
		methods: {
			blockChange : function(){
				this.ellipsisFlag = !this.ellipsisFlag
			},
			cityAction: function(str){
				if(this.$store.getters.getCity != str){
					this.$store.dispatch('setTheaters','')
				}
				this.$store.dispatch('setCity',str)
				this.$router.push({path: '/inTheaters'})
			}
		}
	}
</script>

<style scoped>
	.letter{
		font-size: .5rem;
		padding:10px 10px;
		border-bottom: 1px #D9D9D9 solid;
	}
	.cityBlock{
		/*padding: 5px 10px;*/
		font-size: .4rem;
	}
	.cityBlock li{
		border-bottom: 1px #D9D9D9 solid;
		padding: 15px 10px; 
	}
	.cityBlock li:nth-child(1){
		/*border-top: 1px #D9D9D9 solid;*/
	}
	.cityBlock li:active{
		background: #ddd;
	}
    .letter span{
      display: inline-block;
      height: .3rem;
      width: .3rem;
      border: 1px solid #d6d3d3;
      border-width: 0 0 3px 3px;
      float: right;
      margin-right: 20px;
    }
    .letter .msg-ellipsis-flag-up{
      -webkit-transform: rotate(-225deg);
      transform: rotate(-225deg);
      margin-top: .15rem;
      border-color: red;
    }
    .msg-ellipsis-flag-down{
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
</style>