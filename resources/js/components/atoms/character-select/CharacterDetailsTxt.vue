<template>
  <p class="character-details__txt">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-details__txt {
  color: $text-color;
  padding: 10px 5px 5px;
  height: 68px;
  overflow-y: scroll;
  @include tab {
    font-size: 1.6rem;
    height: auto;
    padding: 10px;
    line-height: 1.6;
  }
  @include pc {
    height: 100px;
  }
}
</style>