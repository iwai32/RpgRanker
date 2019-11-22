<template>
  <div class="top-container">
    <title-logo></title-logo>
    <top-nav></top-nav>
  </div><!--.top-container-->
</template>

<script>
import TitleLogo from '../../atoms/top/TitleLogo.vue'
import TopNav from '../../molecules/top/TopNav.vue'
export default {
  components: {
    TitleLogo,
    TopNav
  }
}
</script>

<style lang="scss" scoped>
.top-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
}
</style>