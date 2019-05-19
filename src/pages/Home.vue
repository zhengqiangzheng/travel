<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
</div>
</template>

<script>
import HomeHeader from './Home/components/Header'
import HomeSwiper from './Home/components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
