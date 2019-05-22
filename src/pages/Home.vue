<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
  import HomeHeader from './Home/components/Header'
  import HomeSwiper from './Home/components/Swiper'
  import HomeIcons from './Home/components/Icons'
  import HomeRecommend from './Home/components/Recommend'
  import HomeWeekend from './Home/components/Weekend'
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    name: 'Home',
    components: {
      HomeWeekend,
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data () {
      return {
        lastCity : '' ,
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      } },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json?city='+this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
        console.log(res)
      }
    },
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated () {
      if (this.lastCity !==this.city) {
        this.getHomeInfo()
        this.lastCity = this.city

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
