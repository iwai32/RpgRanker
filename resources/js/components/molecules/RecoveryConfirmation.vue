<template>
  <div class="recovery-confirmation">
    <p class="recovery-confirmation__message">回復しますか？
      <span class="recovery-confirmation__use-times">残り回数{{ recoveryUseTimes }}</span>
    </p>

    <div class="recovery-confirmation__btns">
      <confirmation-btn
        :state="'yes'"
        :action="toRecover">
      </confirmation-btn>

      <confirmation-btn
        :state="'no'"
        :action="closeConfirmationDisplay">
      </confirmation-btn>
    </div>
  </div>
</template>

<script>
import ConfirmationBtn from '../atoms/common/ConfirmationBtn.vue'
export default {
  components: {
    ConfirmationBtn
  },
  data() {
    return {
      recoveryUseTimes: 5
    }
  },
  methods: {
    closeConfirmationDisplay() {
      this.$store.dispatch('commonModule/closeConfirmationDisplay')
    }
  }
}
</script>

<style lang="scss" scoped>

.recovery-confirmation {
  background: #a66e3e;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  letter-spacing: .1em;
  width: 70%;
  height: fit-content;
  &__message {
    color: #eeeeee;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
  }
  &__btns {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }
  &__use-times {
    display: block;
    font-size: 1.2rem;
    font-weight: normal;
    margin-top: 10px;
  }
}
</style>