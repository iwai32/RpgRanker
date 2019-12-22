<template>
  <div class="wrapper">
    <router-view name="header" />
    <main class="main">
      <router-view name="contents"/>
    </main>
    <router-view name="footer" />
  </div>
</template>

<script>
import { NOT_FOUND,INTERNAL_SERVER_ERROR } from './util.js'
export default {
  watch: {
    errorCode: {
      handler(val) {
        if (val === INTERNAL_SERVER_ERROR) {
          this.$router.push('/game/500')
        } else if (val === NOT_FOUND) {
          this.$router.push('/not-found')
        }
      },
      immediate: true
    },
    $route() {
      this.$store.commit('error/setCode', null)
    }
  },
  computed: {
    errorCode() {
      return this.$store.state.error.code
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/app.scss";
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  .main {
    @include tab {
      width: 680px;
      margin: 0 auto;
    }
    @include pc {
      width: 960px;
    }
  }
}
</style>