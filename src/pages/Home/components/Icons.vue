/* eslint-disable */
<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-desc">景点门票景点门票景点门票景点门票景点门票景点门票</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'HomeIcons',
    data () {
      return {
        iconList: [{
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: '007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: '009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },]
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom 50%
  .icon
    position relative
    height 0
    overflow hidden
    float left
    width 25%
    padding-bottom 25%
    .icon-img
      position absolute
      top: 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
    .icon-img-content
      display block
      margin 0 auto
      height 100%
  .icon-desc
    position absolute
    left: 0
    right 0
    height .44rem
    line-height .44rem
    color: $darkTextColor
    text-align center
    ellipsis()
    bottom 0

</style>
