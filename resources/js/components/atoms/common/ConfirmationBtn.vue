<template>
  <button
    class="confirmation-btn"
    :class="state"
    @click="action"
  >{{ state }}
  </button>
</template>

<script>
export default {
  props: {
    state: String,
    action: Function
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.confirmation-btn {
  border-radius: 2px;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: .1em;
  padding: 4px 20px;
  &.yes {
    background: $box-color;
    color: $accent-color;
  }
  &.no {
    background: $accent-color;
    color: $white;
  }
  @include tab {
    border-radius: 4px;
    font-size: 2.4rem;
    padding: 8px 40px;
  }
}
</style>