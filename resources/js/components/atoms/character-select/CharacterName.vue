<template>
  <h3 class="character-name">
    <slot></slot>
  </h3>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-name {
  background: lighten($accent-color, 10%);
  border-radius: 2px;
  color: $white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  padding: 5px;
  @include tab {
    letter-spacing: .5em;
    font-size: 2.2rem;
    margin-bottom: 45px;
    width: 100%;
  }
}
</style>