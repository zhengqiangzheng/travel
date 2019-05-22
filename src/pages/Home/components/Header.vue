<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/City">
    <!--<div class="header-right">{{this.$store.state.city}}<span class="iconfont arrow-icon">&#xe605;</span></div>-->
    <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe605;</span></div>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
  name: 'HomeHeader',
    computed : {
    ...mapState(['city'])
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
    height :$headerHeight
    .header-left
      width .64rem
      float: left
    .back-icon
      text-align center
      font-size .4rem
    .header-input
      flex :1
      background-color #fff
      height .64rem
      line-height .64rem
      margin-left .2rem
      border-radius .1rem
      padding-left .2rem
      margin-top .12rem
      color: #ccc
    .header-right
      float right
      text-align center
      padding 0 .1rem
      color #fff
      min-width 1.04rem
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
