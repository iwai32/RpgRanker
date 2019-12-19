<template>
  <span class="notes">
    <slot></slot>
  </span>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.notes {
  color: $text-color;
  display: block;
  text-align: right;
  font-size: 1rem;
  padding: 10px;
  @include tab {
    font-size: 1.4rem;
    padding: 20px;
  }
}
</style>