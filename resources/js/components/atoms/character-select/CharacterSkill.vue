<template>
  <li class="character-skill">
    <slot></slot>
  </li>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-skill {
  padding: 2px;
  @include tab {
    color: $text-color;
    font-size: 1.6rem;
  }
}
</style>