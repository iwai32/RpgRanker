<template>
  <section class="login-area">
    <section-title>LOGIN</section-title>

    <login-panel></login-panel>

  </section>
</template>

<script>
import SectionTitle from '../../atoms/common/SectionTitle.vue'
import LoginPanel from '../../organisms/login-register/LoginPanel.vue'
export default {
  components: {
    SectionTitle,
    LoginPanel
  }
}
</script>