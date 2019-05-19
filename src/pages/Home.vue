<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>
  <home-weekend></home-weekend>
</div>
</template>

<script>
import HomeHeader from './Home/components/Header'
import HomeSwiper from './Home/components/Swiper'
import HomeIcons from './Home/components/Icons'
import HomeRecommend from './Home/components/Recommend'
import HomeWeekend from './Home/components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeWeekend,
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
