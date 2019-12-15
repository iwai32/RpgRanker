<template>
  <li class="logout"
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
@import "../../../../sass/app.scss";
.logout {
  color: $white;
  font-size: 1.8rem;
  letter-spacing: .08em;
  padding: 10px;
  @include tab {
    font-size: 2.2rem;
    letter-spacing: .1em;
  }
  @include pc {
    font-size: 2rem;
    text-align: center;
    width: 25%;
    padding: 8px;
      &:hover {
        border: 1px solid $border-color;
        font-size: 2.2rem;
      }
  }
}
</style>