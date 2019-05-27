<template>
  <div>
  <detail-banner></detail-banner>
  <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
  import DetailBanner from  './Detail/Banner'
  import DetailHeader from  './Detail/Header'
  import DetailList from  './Detail/List'


  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data (){
      return{
        list: [{
          title: '成人票',
          children : [
            {title: '成人3票'},
            {title: '成人4票'},
            {title: '成人5票'},
          ]
        },
          {
            title: '学生票'
          }, {
          title: '儿童票'
        }, {
          title: '特惠票'
        },]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .content
    height 50rem


</style>
