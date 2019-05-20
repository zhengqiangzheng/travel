<template>
  <div class="wrapper">
  <swiper :options="swiperOption" v-if="list.length">
    <!-- slides -->
  <swiper-slide v-for="item of list" :key="item.id">
    <img :src="item.imgUrl" class="swiper-img">
  </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  /*样式穿透*/
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 30.50%
    .swiper-img
      width 100%

</style>
