<template>
  <div class="login-register-area">
    <login-area
      v-show="formTab === 1"
    >
    </login-area>

    <register-area
      v-show="formTab === 2"
    >
    </register-area>
  </div>
</template>

<script>
import LoginArea from '../login-register/LoginArea.vue'
import RegisterArea from '../login-register/RegisterArea.vue'
export default {
  components: {
    LoginArea,
    RegisterArea
  },
  watch: {
    //ナビゲーションガード
    isLogin() {
      if(this.isLogin === true) {
        this.$router.push('/')
      }
    }
  },
  computed: {
    formTab() {
      return this.$store.state.auth.formTab
    },
    isLogin() {
      return this.$store.getters['auth/check']
    }
  }
}
</script>