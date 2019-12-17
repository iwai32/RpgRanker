<template>
  <div class="form-panel">
    <form class="form"
      @submit.prevent="login"
    >
      <form-item
        :typeName="'text'"
        :idName="'loginUserName'"
        :initialValue="'最大８文字で入力してください'"
        v-model="loginData.name"
      >UserName
      </form-item>

      <form-item
        :typeName="'email'"
        :idName="'loginEmail'"
        :initialValue="'メールアドレス'"
        v-model="loginData.email"
      >Email
      </form-item>

      <form-item
        :typeName="'password'"
        :idName="'loginPassword'"
        :initialValue="'８文字以上で入力してください'"
        v-model="loginData.password"
      >Password
      </form-item>

      <login-errors></login-errors>

      <div class="btn-wrapper">
        <form-submit-btn
        >login
        </form-submit-btn>

        <form-change-btn
          :changeAction="toRegistration"
        >register
        </form-change-btn>
      </div>
    </form>
  </div>
</template>

<script>
import FormItem from '../../atoms/login-register/FormItem.vue'
import FormSubmitBtn from '../../atoms/login-register/FormSubmitBtn.vue'
import FormChangeBtn from '../../atoms/login-register/FormChangeBtn.vue'
import LoginErrors from '../../molecules/login-register/LoginErrors.vue'
export default {
  components: {
    FormItem,
    FormSubmitBtn,
    FormChangeBtn,
    LoginErrors
  },
  data() {
    return {
      loginData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {
    apiStatus() {
      return this.$store.state.auth.apiStatus
    },
  },
  methods: {
    async login() {
      await this.$store.dispatch('auth/login', this.loginData)

      if(this.apiStatus) {
        this.$router.push('/')
      }
    },
    toRegistration() {
      this.$store.commit('auth/tabChange', 2)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.form-panel {
  padding: 5px 10px;
  .btn-wrapper {
    display: flex;
    align-items: center;
    padding: 20px 10px 10px;
    position: relative;
  }
  @include pc {
    width: 680px;
    margin: 0 auto;
  }
}
</style>