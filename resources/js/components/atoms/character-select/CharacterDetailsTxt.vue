<template>
  <p class="character-details__txt">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
.character-details__txt {
  color: #444444;
  padding: 10px 5px 5px;
  height: 68px;
  overflow-y: scroll;
}
</style>