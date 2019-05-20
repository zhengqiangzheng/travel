<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>
<script>
  import CityHeader from './City/components/Header'
  import CitySearch from './City/components/Search'
  import CityList from './City/components/List'
  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearch,
      CityList

    }

  }
</script>
<style lang="stylus" scoped>

</style>
