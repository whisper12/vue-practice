<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted : function(){
  	// console.log(this.$store)
  }
}
</script>

<style>
body{
  margin:0;
}
p,ul,li,h1{
  padding: 0;
  margin:0;
}
h3{
  margin:0;
}
ul li,a{
	text-decoration: none;
	list-style: none;
}
</style>
