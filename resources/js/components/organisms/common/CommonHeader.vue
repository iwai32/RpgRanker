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
@import "../../../../sass/app.scss";
.header {
  background: linear-gradient($accent-color, lighten($accent-color, 20%));
  margin-bottom: 30px;
}
</style>