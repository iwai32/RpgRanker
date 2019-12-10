<template>
  <div class="top-container">
    <title-logo></title-logo>
    <div class="bottom-wrapp">
      <welcome-message></welcome-message>
      <top-nav></top-nav>
    </div>
  </div><!--.top-container-->
</template>

<script>
import TitleLogo from '../../atoms/top/TitleLogo.vue'
import WelcomeMessage from '../../atoms/top/WelcomeMessage.vue'
import TopNav from '../../molecules/top/TopNav.vue'
export default {
  components: {
    TitleLogo,
    WelcomeMessage,
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