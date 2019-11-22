<template>
<button class="character-select-btn"
  :class="className"
  @click="characterSelect"
>
  <slot></slot>
</button>
</template>

<script>
export default {
  props: {
    className: Object,
    characterSelect: Function
  }
}
</script>

<style lang="scss" scoped>
.character-select-btn {
  font-size: 2.4rem;
}

.inactive {
  color: #666666;
}
</style>