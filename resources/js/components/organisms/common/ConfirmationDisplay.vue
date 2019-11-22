<template>
  <transition name="confirmation-display">
    <div class="overlay"
      v-show="confirmationDisplay"
    >
      <slot name="contents"></slot>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    confirmationDisplay() {
      return this.$store.state.commonModule.confirmationDisplay
    }
  }
}
</script>

<style lang="scss" scoped>
//トランジション
.confirmation-display-enter-active,
.confirmation-display-leave-active {
  transition: opacity .2s;
}

.confirmation-display-enter,
.confirmation-display-leave-to {
  opacity: 0;
}

.overlay {
  background: rgba(0,0,0,0.2);
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
}
</style>