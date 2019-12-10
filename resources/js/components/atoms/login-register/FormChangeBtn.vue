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
.change-btn {
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
}
</style>