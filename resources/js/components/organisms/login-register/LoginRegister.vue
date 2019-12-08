<template>
  <div>
    <section class="login-area"
      v-show="formTab === 1"
    >
      <section-title>LOGIN</section-title>
      <div class="form-panel">
        <form class="form"
          @submit.prevent="login"
        >
          <div class="form-item">
            <label class="form-label" for="loginUserName">UserName</label>
            <input type="text" class="input-init" id="loginUserName" v-model="loginData.name">
          </div>

          <div class="form-item">
            <label class="form-label" for="loginEmail">Email</label>
            <input type="email" class="input-init" id="loginEmail" v-model="loginData.email">
          </div>

          <div class="form-item">
            <label class="form-label" for="loginPassword">Password</label>
            <input type="password" class="input-init" id="loginPassword" v-model="loginData.password">
          </div>

          <div class="btn-wrapper">
            <button type="submit" class="submit-btn"
              :class="{ active: formTab === 1 }"
            >login
            </button>

            <button type="button" class="submit-btn"
              @click="formTab = 2"
            >register
            </button>
          </div>
        </form>
      </div>
    </section>


    <section class="register-area"
      v-show="formTab === 2"
    >
      <section-title>REGISTER</section-title>
      <div class="form-panel">
        <form class="form"
          @submit.prevent="register"
        >
          <div class="form-item">
            <label class="form-label" for="registerUserName">UserName</label>
            <input type="text" class="input-init" id="registerUserName" v-model="registerData.name">
          </div>

          <div class="form-item">
            <label class="form-label" for="registerEmail">Email</label>
            <input type="email" class="input-init" id="registerEmail" v-model="registerData.email">
          </div>

          <div class="form-item">
            <label class="form-label" for="registerPassword">Password</label>
            <input type="password" class="input-init" id="registerPassword" v-model="registerData.password">
          </div>

          <div class="form-item">
            <label class="form-label" for="registerPasswordConfirmation">Password (confirm)</label>
            <input type="password" class="input-init" id="registerPasswordConfirmation" v-model="registerData.password_confirmation">
          </div>

          <div class="btn-wrapper">
            <button type="submit" class="submit-btn"
              :class="{ active: formTab === 2 }"
            >register
            </button>

            <button type="button" class="submit-btn"
              @click="formTab = 1"
            >login
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import SectionTitle from '../../atoms/common/SectionTitle.vue'
export default {
  components: {
    SectionTitle
  },
  data() {
    return {
      formTab: 1,
      loginData: {
        name: '',
        email: '',
        password: ''
      },
      registerData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
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
    isLogin() {
      return this.$store.getters['auth/check']
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('auth/login', this.loginData)
      this.$router.push('/')
    },
    async register() {
      await this.$store.dispatch('auth/register', this.registerData)

      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.form-panel {
  padding: 5px 10px;
  .form-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .form-label {
      color: #444;
      font-size: 1.4rem;
      line-height: 1.5;
      letter-spacing: .08em;
    }
  }
  .btn-wrapper {
    display: flex;
    align-items: center;
    padding: 20px 10px 10px;
    position: relative;
    .submit-btn {
      background: #5C3D22;
      border-radius: 4px;
      color: #eeeeee;
      display: block;
      font-size: 1.2rem;
      text-align: center;
      letter-spacing: .08em;
      padding: 5px;
      position: absolute;
      right: 0;
      width: 28%;
      &.active {
        background: #a66e3e;
        width: 40%;
        font-size: 1.4rem;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
}
</style>