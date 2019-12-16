<template>
  <div v-if="loginErrors" class="errors">
    <ul v-if="loginErrors.name">
      <li v-for="msg in loginErrors.name"
        :key="msg"
      >{{ msg }}
      </li>
    </ul>

    <ul v-if="loginErrors.email">
      <li v-for="msg in loginErrors.email"
        :key="msg"
      >{{ msg }}
      </li>
    </ul>

    <ul v-if="loginErrors.password">
      <li v-for="msg in loginErrors.password"
        :key="msg"
      >{{ msg }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.clearError()
  },
  computed: {
    loginErrors() {
      return this.$store.state.auth.loginErrorMessages
    }
  },
  methods: {
    clearError() {
      this.$store.commit('auth/setLoginErrorMessages', null)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.errors {
  color: $error-color;
  @include tab {
    font-size: 1.6rem;
  }
}
</style>