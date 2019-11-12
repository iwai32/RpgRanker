<template>
  <div class="top-container">
    <title-logo></title-logo>
    <top-nav></top-nav>
  </div><!--.top-container-->
</template>

<script>
import TitleLogo from '../atoms/TitleLogo.vue'
import TopNav from '../molecules/TopNav.vue'
export default {
  components: {
    TitleLogo,
    TopNav
  }
}
</script>

<style lang="scss" scoped>
.top-container {
  background: url('../../../images/top-bg.jpg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
}
</style>