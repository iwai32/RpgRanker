<template>
  <h4 class="character-details__title">
    <slot></slot>
  </h4>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-details__title {
  background: #b79532;
  border-radius: 2px;
  color: $white;
  padding: 2px 5px;
  position: absolute;
  top: 0;
  left: -1px;
  transform: translateY(-50%);
  @include tab {
    font-size: 1.6rem;
    letter-spacing: 0.16em;
    padding: 4px 10px;
  }
}

</style>