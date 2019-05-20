<template>
  <div>
    <home-header :city="city"></home-header>
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
        city: '北京',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      } },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json')
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
      this.getHomeInfo()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
