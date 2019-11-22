<template>
  <header class="header">
    <global-nav />
  </header>
</template>

<script>
import GlobalNav from '../../molecules/common/GlobalNav.vue'
export default {
  components: {
    GlobalNav
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 10px;
  background: linear-gradient(#5C3D22, lighten(#5C3D22, 20%));
  margin-bottom: 30px;
}
</style>