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
.welcome-message {
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: .1em;
  margin-bottom: 20px;
}
</style>