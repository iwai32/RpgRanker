<template>
  <p class="recovery-confirmation-message">回復しますか？
    <span class="recovery-confirmation-use-times">残り回数{{ recoveryUseTimes }}</span>
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
@import "../../../../sass/app.scss";
.recovery-confirmation-message {
  color: $white;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  text-shadow: 2px 1px 1px $text-color;
  margin-bottom: 10px;
  @include tab {
    font-size: 2.6rem;
    padding: 20px 0 10px;
  }
  @include pc {
    font-size: 2rem;
  }
}

.recovery-confirmation-use-times {
  display: block;
  font-size: 1.2rem;
  letter-spacing: .2em;
  padding-top: 10px;
  @include tab {
    font-size: 2rem;
    padding-top: 20px;
  }
  @include pc {
    font-size: 1.6rem;
  }
}
</style>