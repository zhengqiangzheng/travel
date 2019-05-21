<template>
    <ul class="list">
     <li class="item">A</li>
     <li class="item">A</li>
     <li class="item">A</li>
     <li class="item">A</li>
     <li class="item">A</li>
     <li class="item">A</li>
     <li class="item">A</li>
    </ul>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'CityAlphabet',

  }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .list
    position absolute
    flex-direction column
    justify-content center
    display flex
    top: 1.58rem
    right   0
    bottom: 0
    width: .4rem
    .item
      line-height .4rem
      color $bgColor
      text-align center

</style>
