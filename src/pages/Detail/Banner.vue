<template>
  <div>
  <div class="banner" @click="handleBannerClick">
  <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" alt="">
    <div class="banner-info">
      <div class="banner-tittle">上海迪士尼乐园</div>
      <div class="banner-number"> <span class="iconfont banner-icon">&#xe626;</span>36</div>
    </div>
  </div>
    <common-gallary :imgs="imgs"
                    v-show="gallaryShow"
                    @close="handleGallyClose"
    ></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  export default {
    name: 'DetailBanner',
    components : {
      CommonGallary
    },
    data () {
      return {
        gallaryShow :false,
        imgs : [{'image' :'http://img1.qunarzz.com/sight/p0/1904/d5/d579b03a110d75a8a3.img.jpg_600x330_775f6525.jpg','id':'001'},
              {'image' :'http://img1.qunarzz.com/sight/p0/1904/e6/e6ca04437610048aa3.img.jpg_r_800x800_5ebb5786.jpg','id':'002'}
                ]
      }
    },
    methods :{
      handleBannerClick () {
        this.gallaryShow = true
      },
      handleGallyClose () {
        this.gallaryShow = false
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem

</style>
