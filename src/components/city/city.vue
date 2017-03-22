<template>
		<li>
			<p class="letter" @click="blockChange">{{cityData.letter}}</p>
			<ul v-if="cityBlockHide" class="cityBlock">
				<li v-for="item in cityData.data">{{item.name}}</li>
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
				cityBlockHide:false
			}
		},
		methods: {
			blockChange : function(){
				this.cityBlockHide = !this.cityBlockHide
			}
		}
	}
</script>

<style scoped>
	.letter{
		font-size: .5rem;
		padding:5px 10px;
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
</style>