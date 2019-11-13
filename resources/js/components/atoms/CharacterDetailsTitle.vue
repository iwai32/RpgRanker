<template>
  <h4 class="character-details__title">
    <slot></slot>
  </h4>
</template>

<style lang="scss" scoped>
.character-details__title {
  background: #b79532;
  border-radius: 2px;
  color: #eeeeee;
  padding: 2px 5px;
  position: absolute;
  top: 0;
  left: -1px;
  transform: translateY(-50%);
}

</style>