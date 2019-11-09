<template>
  <header class="header">
    <global-nav />
  </header>
</template>

<script>
import GlobalNav from '../molecules/GlobalNav.vue'
export default {
  name: 'CommonHeader',
  components: {
    GlobalNav
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 10px;
  background: linear-gradient(#5C3D22, lighten(#5C3D22, 20%));
  border-radius: 0 0 10px 10px;
  margin-bottom: 20px;
}
</style>