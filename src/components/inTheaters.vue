<template>
  <div class="hello">
  <vheader></vheader>
    <div v-if='!loading' class="in-theaters-area">
      <div class="in-movies-wrap" >
        <div class="in-movies-show" v-for="(item, index) in in_theaters_data_body_subjects" @click="showMoreMsg(item.id)">
          <div class="in-movies-show-child">
            <div class="posters"><img :src="item.images.small" :alt="item.alt"></div>
            <div class="movieMsg">
              <h2>{{ item.title }}</h2>
              <star :score="item.rating.average"></star>
              <p>{{ item.rating.average }}分</p>
              <p>导演:{{ item.directors[0].name}}</p>
              <p class="casts">主演:<span v-for="item in item.casts">{{item.name}} </span></p>
            </div>
          </div>
        </div>
      </div>      
    </div>
    <spinner v-if ='loading'></spinner>
  </div>
</template>

<script>
import spinner from './spinner/spinner'
import header from './header/header'
import star from './star/star'
export default {
  name: 'inTheaters',
  data () {
    return {
      loading: true,
      in_theater_date: {},
      in_theater_body: {},
      in_theaters_data_body_subjects: []
    }
  },
  components: {
    'spinner': spinner,
    'vheader': header,
    'star': star
  },
  mounted: function () {
    let item = this.$store.getters.getTheaters
    if(item){
      this.loading = false
      this.in_theaters_data = item
      this.in_theater_body =item.body
      this.in_theaters_data_body_subjects = item.body.subjects
    }else{
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters',{params:{'city':this.$store.getters.getCity}})
          .then(function (response) {
            this.loading = false
            this.in_theaters_data = response
            this.in_theaters_data_body = response.body
            this.in_theaters_data_body_subjects = response.body.subjects
            this.$store.dispatch('setTheaters',response)
          })
          .catch(function (response) {
            console.log(response)
          })      
    }
  },
  methods: {
    showMoreMsg: function (str) {
      let path = '/movie/' + str
      this.$router.push({path: path})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    margin: 0;
    padding: 0;
  }
  h1 {
    text-align: center;
  }
  p{
    margin:.1rem 0;
  }
  .in-movies-wrap {
    text-decoration: none;
    font-size: 0;
  }
  .in-movies-show {
    background-color: #f8f8f8;
    padding: 0px 10px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 0;
  }
  .in-movies-show-child {
    display: flex;
    align-items: flex-end;
    padding-bottom: 5px;
    border-bottom: 1px solid #d6d6d6;
    width: 100%;
    overflow: hidden;
  }
  .in-movies-show p {
    font-size: 14px;
    color: #666;
  }
  .movieMsg {
    flex: 1;
    margin-left: 20px;
    vertical-align: top;
    box-sizing: border-box;
    width: 100%;
  }
  .movieMsg h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .casts{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
    width: 90%;
  }
</style>
