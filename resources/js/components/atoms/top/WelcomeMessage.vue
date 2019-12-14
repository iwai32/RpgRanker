<template>
  <p class="welcome-message"
    v-if="hasUserData"
  >
    {{ 'ようこそ' + userName + 'さん' }}
  </p>
</template>

<script>
export default {
  computed: {
    hasUserData() {
      return this.$store.state.auth.user
    },
    userName() {
      return this.$store.getters['auth/userName']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.welcome-message {
  color: $text-color;
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: .1em;
  margin-bottom: 20px;
  @include tab {
    font-size: 2.6rem;
    margin-bottom: 26px;
  }
    @include pc {
    font-size: 3rem;
    margin-bottom: 30px;
  }
}
</style>