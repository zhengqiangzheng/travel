<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>
<script>
  import CityHeader from './City/components/Header'
  import CitySearch from './City/components/Search'
  import CityList from './City/components/List'
  import CityAlphabet from './City/components/Alphabet'
  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet

    }

  }
</script>
<style lang="stylus" scoped>

</style>
