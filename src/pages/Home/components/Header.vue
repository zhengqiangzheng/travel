<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont arrow-icon">&#xe605;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  /*@import "../../../assets/styles/variables.styl"*/
  /*@import "~@/assets/styles/variables.styl"*/
  @import "~styles/variables.styl"
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #fff
    height :.86rem
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
      width 1.24rem
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
