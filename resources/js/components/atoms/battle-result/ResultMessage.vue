<template>
  <p class="result-message">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.result-message {
  color: $text-color;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 20px;
  @include tab {
    font-size: 2.8rem;
    margin-bottom: 30px;
  }
  @include pc {
    font-size: 2.6rem;
    width: 100%;
  }
}
</style>