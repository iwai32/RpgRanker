<template>
  <div class="wrapper">
    <router-view name="header" />
    <main>
      <router-view name="contents"/>
    </main>
    <router-view name="footer" />
  </div>
</template>

<script>
import { INTERNAL_SERVER_ERROR } from './util.js'
export default {
  watch: {
    errorCode: {
      handler(val) {
        if(val === INTERNAL_SERVER_ERROR) {
          this.$router.push('/game/500')
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
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>