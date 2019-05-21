<template>
  <ul class="list">
    <li class="item" v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"

    >{{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    computed: {
      letters () {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters

      }
    },
    data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null    //函数截流
      }
    },

    updated () {
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleLetterClick (e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart () {
        this.touchStatus = true
      },
      handleTouchMove (e) {
        if (this.touchStatus) {
          //  const startY = this.$refs['A'][0].offsetTop 性能优化放到update中
         // 函数截流大大提高函数性能
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer=setTimeout(()=>{
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
        },5)

          // console.log(touchY)

          // console.log(startY)A距离上部的值

        }

      },
      handleTouchEnd () {
        this.touchStatus = true

      }

    }


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
    right 0
    bottom: 0
    width: .4rem

    .item
      line-height .4rem
      color $bgColor
      text-align center

</style>
<!--<template>-->
  <!--<ul class="list">-->
    <!--<li-->
      <!--class="item"-->
      <!--v-for="item of letters"-->
      <!--:key="item"-->
      <!--:ref="item"-->
      <!--@touchstart.prevent="handleTouchStart"-->
      <!--@touchmove="handleTouchMove"-->
      <!--@touchend="handleTouchEnd"-->
      <!--@click="handleLetterClick"-->
    <!--&gt;-->
      <!--{{item}}-->
    <!--</li>-->
  <!--</ul>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--name: 'CityAlphabet',-->
    <!--props: {-->
      <!--cities: Object-->
    <!--},-->
    <!--computed: {-->
      <!--letters () {-->
        <!--const letters = []-->
        <!--for (let i in this.cities) {-->
          <!--letters.push(i)-->
        <!--}-->
        <!--return letters-->
      <!--}-->
    <!--},-->
    <!--data () {-->
      <!--return {-->
        <!--touchStatus: false,-->
        <!--startY: 0,-->
        <!--timer: null-->
      <!--}-->
    <!--},-->
    <!--updated () {-->
      <!--this.startY = this.$refs['A'][0].offsetTop-->
    <!--},-->
    <!--methods: {-->
      <!--handleLetterClick (e) {-->
        <!--this.$emit('change', e.target.innerText)-->
      <!--},-->
      <!--handleTouchStart () {-->
        <!--this.touchStatus = true-->
      <!--},-->
      <!--handleTouchMove (e) {-->
        <!--if (this.touchStatus) {-->
          <!--if (this.timer) {-->
            <!--clearTimeout(this.timer)-->
          <!--}-->
          <!--this.timer = setTimeout(() => {-->
            <!--const touchY = e.touches[0].clientY - 79-->
            <!--const index = Math.floor((touchY - this.startY) / 20)-->
            <!--if (index >= 0 && index < this.letters.length) {-->
              <!--this.$emit('change', this.letters[index])-->
            <!--}-->
          <!--}, 5)-->
        <!--}-->
      <!--},-->
      <!--handleTouchEnd () {-->
        <!--this.touchStatus = false-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style lang="stylus" scoped>-->
  <!--@import "~styles/variables.styl"-->
  <!--.list-->
    <!--display: flex-->
    <!--flex-direction: column-->
    <!--justify-content: center-->
    <!--position: absolute-->
    <!--top: 1.58rem-->
    <!--right: 0-->
    <!--bottom: 0-->
    <!--width: .4rem-->
    <!--.item-->
      <!--line-height: .4rem-->
      <!--text-align: center-->
      <!--color: $bgColor-->
<!--</style>-->
