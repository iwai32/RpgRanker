<template>
  <p class="recovery-confirmation__message">回復しますか？
    <span class="recovery-confirmation__use-times">残り回数{{ recoveryUseTimes }}</span>
  </p>
</template>

<script>
export default {
  computed: {
    recoveryUseTimes() {
      return this.$store.state.battleArea.recoveryUseTimes
    }
  }
}
</script>

<style lang="scss" scoped>
.recovery-confirmation__message {
  color: #eeeeee;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
}
.recovery-confirmation__use-times {
  display: block;
  font-size: 1.2rem;
  font-weight: normal;
  margin-top: 10px;
}
</style>