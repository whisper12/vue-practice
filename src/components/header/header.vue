<template>
  <div>
    <div class="v-header">
      <div class="v-header-logo">
        <div>
          <img src="../../assets/logo.png">
        </div>
<!--         <div class="v-load-title">
          <div>豆瓣</div>
          <div>我们的精神角落</div>
        </div> -->
      </div>
      <div class="v-header-input" @click="serch">
        <input class="v-inp" type="text" v-model.trim="query" placeholder="请输入电影名"></input>
      </div>
    </div>
    <div class="v-nav-bar">
      <router-link to="/inTheaters" class="v-nav">正在热映</router-link>
      <router-link to="/comingSoon" class="v-nav">即将上映</router-link>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        query: ''
      }
    },
    methods: {
      serch: function () {
        this.$router.push({path: '/searchPage'})
      }
    }
  }
</script>

<style>
  .v-header {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    height: 1.2rem;
    padding: 10px 20px;
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
    width: 3rem;
    line-height: 100%;
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
  .v-inp {
    width: 100%;
    height: .6rem;
    border-style: none;
    border-radius: 15px;
    padding-left: 10px;
  }
</style>
