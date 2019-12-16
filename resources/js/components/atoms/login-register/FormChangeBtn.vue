<template>
  <button type="button" class="change-btn"
    @click="changeAction"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    changeAction: Function
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.change-btn {
  background: $accent-color;
  border-radius: 4px;
  color: $white;
  display: block;
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: .08em;
  padding: 5px;
  position: absolute;
  right: 0;
  width: 28%;
  @include tab {
    font-size: 1.6rem;
    padding: 6px;
  }
}
</style>