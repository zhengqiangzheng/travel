<template>
  <div>
  <detail-banner :sightName="sightName"
                 :bannerImg="bannerImg"
                 :bannerImgs="gallaryImgs"></detail-banner>
  <detail-header
  ></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
  import DetailBanner from  './Detail/Banner'
  import DetailHeader from  './Detail/Header'
  import DetailList from  './Detail/List'
  import axios from 'axios'
  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data (){
      return{
        sightName : '',
        bannerImg: '',
        gallaryImgs: [],
        list: []
      }
    },
    methods : {
      getDetailData () {
        axios.get('/api/detail.json', {
          params: {
            id: this.$route.params.id

          }
        }).then(this.getDetailDataSuccess)
      },
      getDetailDataSuccess(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          console.log(data)
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }


      }
    },
    mounted () {
      this.getDetailData()

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .content
    height 50rem


</style>
