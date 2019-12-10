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
  created() {
    this.clearError()
  },
  watch: {
    isLogin() {
      if(this.isLogin === true) {
        this.$router.push('/')
      }
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters['auth/check']
    },
    apiStatus() {
      return this.$store.state.auth.apiStatus
    },
    loginErrors() {
      return this.$store.state.auth.loginErrorMessages
    },
    registerErrors() {
      return this.$store.state.auth.registerErrorMessages
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('auth/login', this.loginData)

      if(this.apiStatus) {
        this.$router.push('/')
      }
    },
    async register() {
      await this.$store.dispatch('auth/register', this.registerData)

      if(this.apiStatus) {
        this.$router.push('/')
      }
    },
    clearError() {
      this.$store.commit('auth/setLoginErrorMessages', null)
      this.$store.commit('auth/setRegisterErrorMessages', null)
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

  .errors {
    color: #ff0000;
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