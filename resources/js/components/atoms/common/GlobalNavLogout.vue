<template>
  <li class="g-nav__list-logout"
    @click="logout"
  >Logout
  </li>
</template>

<script>
export default {
  computed: {
    apiStatus() {
      return this.$store.state.auth.apiStatus
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')

      if (this.apiStatus) {
        this.$router.push('/game/login-register')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.g-nav__list-logout {
  color: #dddddd;
  font-size: 1.8rem;
  letter-spacing: .05em;
}
</style>