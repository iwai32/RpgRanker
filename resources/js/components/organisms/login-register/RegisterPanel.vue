<template>
  <div class="form-panel">
    <form class="form"
      @submit.prevent="register"
    >
      <form-item
        :typeName="'text'"
        :idName="'registerUserName'"
        v-model="registerData.name"
      >UserName
      </form-item>

      <form-item
        :typeName="'email'"
        :idName="'registerEmail'"
        v-model="registerData.email"
      >Email
      </form-item>

      <form-item
        :typeName="'password'"
        :idName="'registerPassword'"
        v-model="registerData.password"
      >Password
      </form-item>

      <form-item
        :typeName="'password'"
        :idName="'registerPasswordConfirmation'"
        v-model="registerData.password_confirmation"
      >Password (confirm)
      </form-item>

      <register-errors></register-errors>

      <div class="btn-wrapper">
        <form-submit-btn
        >register
        </form-submit-btn>

        <form-change-btn
          :changeAction="toLogin"
        >login
        </form-change-btn>
      </div>
    </form>
  </div>
</template>

<script>
import FormItem from '../../atoms/login-register/FormItem.vue'
import RegisterErrors from '../../molecules/login-register/RegisterErrors.vue'
import FormSubmitBtn from '../../atoms/login-register/FormSubmitBtn.vue'
import FormChangeBtn from '../../atoms/login-register/FormChangeBtn.vue'
export default {
  components: {
    FormItem,
    RegisterErrors,
    FormSubmitBtn,
    FormChangeBtn
  },
  data() {
    return {
      registerData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  computed: {
    apiStatus() {
      return this.$store.state.auth.apiStatus
    }
  },
  methods: {
    async register() {
      await this.$store.dispatch('auth/register', this.registerData)

      if(this.apiStatus) {
        this.$router.push('/')
      }
    },
    toLogin() {
      this.$store.commit('auth/tabChange', 1)
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