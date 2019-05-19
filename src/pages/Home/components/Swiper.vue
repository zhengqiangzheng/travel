<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
  <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/0ba6d3d25a22d6a0209e17292af2c16f.jpg_750x200_3b96e112.jpg'
      },
      {
        id: '002', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/a40ab6b5f1c60d20ab0b4b48d6919814.jpg_750x200_241139f1.jpg'
      }
      ]
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
    padding-bottom 31.25%
    .swiper-img
      width 100%

</style>
