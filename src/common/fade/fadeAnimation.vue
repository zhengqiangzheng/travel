<template>
  <transition>
  <slot>
  </slot>
  </transition>
</template>
<script>
  export default {
    name : 'fadeAnimation'
  }

</script>
<style lang="stylus" scoped>
  .v-enter .v-enter-active
    opacity 0
  .v-leave .v-leave-active
    transition opacity 0.5s

</style>
