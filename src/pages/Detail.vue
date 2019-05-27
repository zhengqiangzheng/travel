<template>
  <div>
  <detail-banner></detail-banner>
  <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>
<script>
  import DetailBanner from  './Detail/Banner'
  import DetailHeader from  './Detail/Header'


  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .content
    height 50rem


</style>
