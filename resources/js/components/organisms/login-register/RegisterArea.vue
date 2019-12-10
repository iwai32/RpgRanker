<template>
  <section class="register-area">
    <section-title>REGISTER</section-title>

    <register-panel></register-panel>
  </section>
</template>

<script>
import SectionTitle from '../../atoms/common/SectionTitle.vue'
import RegisterPanel from '../../organisms/login-register/RegisterPanel.vue'
export default {
  components: {
    SectionTitle,
    RegisterPanel
  }
}
</script>