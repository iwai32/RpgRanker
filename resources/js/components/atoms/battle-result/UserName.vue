<template>
  <p class="user-name">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.user-name {
  color: $text-color;
  font-size: 1.2rem;
  text-align: center;
  @include tab {
    font-size: 2.2rem;
  }
  @include pc {
    font-size: 2rem;
  }
}
</style>