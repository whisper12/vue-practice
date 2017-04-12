<template>
  <div>
    <div class="v-header" flex="main:center">
      <div class="v-header-logo" flex="main:center cross:center">
        <div>
          <img src="../../assets/logo.png" @click="goHome">
        </div>
<!--         <div class="v-load-title">
          <div>豆瓣</div>
          <div>我们的精神角落</div>
        </div> -->
      </div>
      <div class="v-header-input" flex="cross:center main:right">
        <ul>
          <li><router-link to="/inTheaters">电影</router-link></li>
          <li><router-link to="/book">图书</router-link></li>
          <li>广播</li>
          <li>小组</li>
        </ul>
        <span @click="search"></span>
      </div>
    </div>
    <div class="v-nav-bar">
      <router-link to="/inTheaters" class="v-nav">正在热映</router-link>
      <router-link to="/comingSoon" class="v-nav">即将上映</router-link>
    </div>
    <div class="city" flex="cross:center main:center" @click="cityChange">{{city}} <span class="triangle-down"></span></div>
    <div>
      
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        query: '',
        city: ''
      }
    },
    mounted : function(){
      this.city =this.$store.getters.getCity||window.remote_ip_info['city']
      this.$store.dispatch('setCity',this.city)
    },
    methods: {
      search: function () {
        this.$router.push({path: '/searchPage'})
      },
      goHome: function(){
        this.$router.push({path: '/inTheaters'})
      },
      cityChange: function(){
        if (this.$route.name!='cityChange') {
          this.$router.push({path: '/cityChange'})
        }else{
          this.$router.push({path: '/inTheaters'})
        }
      }
    }
  }
</script>

<style>
  .v-header {
    height: 1.2rem;
    box-sizing: border-box;
    background-color: #eee;
  }
  .v-header-logo {
    flex: 1;
  }
  .v-header-logo > div {
    display: inline-block;
  }
  .v-header-logo > div:first-child img{
    /*height: .5rem;*/
    width: 1.5rem;
  }
  .v-header-logo > div:last-child {
    vertical-align: top;
  }
  .v-header-input {
    /*width: 5rem;*/
    line-height: 100%;
    flex: 2;
    margin-right:20px;
  }
  .v-load-title h3 {
    font-size: 17px;
    font-weight: 700;
    color: #333;
  }
  .v-load-title div {
    font-size: 12px;
    color: #999;
  }
  .v-nav-bar {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: #42bd56;
  }
  .v-nav {
    flex: 1;
    text-align: center;
    text-decoration: none;
    height: .8rem;
    line-height: .8rem;
    font-size: 20px;
    color: #fff;
  }
  .v-header-input span{
    font-size: 0;
    background: url(../../assets/search.png) no-repeat;
    background-size: cover;
    width: .768rem;
    height: .576rem;
    /*margin-top: 4px;*/
    position: relative;
    display: inline-block;
  }
  .v-header-input ul{
    margin-right: .2rem;
    overflow: visible;
  }
  .v-header-input ul li{
    height: 100%;
    display: inline-block;
    font-size: .5rem;
    margin-right:.2rem;
  }
  .v-header-input ul li:nth-child(1) a{
    color: rgb(35, 132, 232);
  }
  .v-header-input ul li:nth-child(2) a{
    color: rgb(159, 120, 96)
  }
  .v-header-input ul li:nth-child(3){
    color: rgb(228, 168, 19)
  }
  .v-header-input ul li:nth-child(4){
    color: rgb(42, 184, 204)
  }
  .city{
    font-size: .6rem;
    background: #ddd;
    padding:5px 0;
  }
  .triangle-down {
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 10px solid #42bd56;
      margin-left: 10px;
  }
</style>
