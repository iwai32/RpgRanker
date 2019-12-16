<template>
  <div class="recovery-confirmation">
    <recovery-confirmation-message></recovery-confirmation-message>
    
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
import RecoveryConfirmationMessage from '../../atoms/battle-area/RecoveryConfirmationMessage.vue'
import ConfirmationBtn from '../../atoms/common/ConfirmationBtn.vue'
export default {
  components: {
    RecoveryConfirmationMessage,
    ConfirmationBtn
  },
  methods: {
    toRecover() {
      this.$store.dispatch('battleArea/toRecover')
    },
    closeConfirmationDisplay() {
      this.$store.commit('commonModule/closeConfirmationDisplay')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.recovery-confirmation {
  background: linear-gradient($main-color 30%, $accent-color);
  border: 1px solid $contents-color;
  border-radius: 10px;
  box-shadow: 0 0 0 1px $text-color,
   0 0 0 1px $text-color inset;
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
  &__btns {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }
  @include tab {
    width: 340px;
  }
}
</style>