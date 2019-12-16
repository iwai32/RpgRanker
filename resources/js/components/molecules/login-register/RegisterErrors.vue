<template>
  <div v-if="registerErrors" class="errors">
    <ul v-if="registerErrors.name">
      <li v-for="msg in registerErrors.name"
        :key="msg"
      >{{ msg }}
      </li>
    </ul>

    <ul v-if="registerErrors.email">
      <li v-for="msg in registerErrors.email"
        :key="msg"
      >{{ msg }}
      </li>
    </ul>

    <ul v-if="registerErrors.password">
      <li v-for="msg in registerErrors.password"
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
    registerErrors() {
      return this.$store.state.auth.registerErrorMessages
    }
  },
  methods: {
    clearError() {
      this.$store.commit('auth/setRegisterErrorMessages', null)
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