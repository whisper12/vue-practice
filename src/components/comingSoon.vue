<template>
  <div class="come-soon">
    <vheader></vheader>
    <div class="co-theaters-area">
      <div class="co-movies-wrap" >
        <div class="co-movies-show" v-for="(item, index) in coming_soon_data_body_subjects" @click="showMoreMsg(item.id)">
          <div class="co-movies-show-child">
            <div class="co-posters"><img :src="item.images.small" :alt="item.alt"></div>
            <div class="co-movieMsg">
              <h2>{{ item.title }}</h2>
              <p>导演: {{ item.directors[0].name}}</p>
              <p>主演: {{ item.casts[0].name}}, {{ item.casts[1].name}}</p>
              <p>类型: {{item.genres.join(', ')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <spinner v-if='loading'></spinner>
  </div>
</template>

<script>
import spinner from './spinner/spinner'
import header from './header/header'
export default {
  name: 'coming_soon',
  data () {
    return {
      coming_soon_data: {},
      coming_soon_data_body: {},
      coming_soon_data_body_subjects: [],
      loading: true
    }
  },
  components: {
    spinner: spinner,
    'vheader': header
  },
  mounted: function () {
    this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon')
        .then(function (response) {
          this.loading = false
          this.coming_soon_data = response
          this.coming_soon_data_body = response.body
          this.coming_soon_data_body_subjects = response.body.subjects
        })
        .catch(function (response) {
          console.log(response)
        })
  },
  methods: {
    showMoreMsg: function (str) {
      const path = '/movie/' + str
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
  p{
    margin:.1rem 0;
  }
  .co-movies-wrap {
    text-decoration: none;
    font-size: 0;
  }
  .co-movies-show {
    background-color: #f8f8f8;
    cursor: pointer;
    font-size: 0;
    padding: 0px 10px;
  }
  .co-movies-show-child {
    display: flex;
    align-items: flex-end;
    padding-bottom: 5px;
    border-bottom: 1px solid #d6d6d6;
  }
  .co-movieMsg {
    flex: 1;
    padding-left: 20px;
    vertical-align: top;
  }
  .co-movieMsg h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .co-movies-show p {
    font-size: 14px;
    color: #666;
  }
</style>
