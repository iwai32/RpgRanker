<template>
  <h1 class="top-title">
    RpgRanker
  </h1>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.top-title {
  font-size: 6rem;
  letter-spacing: .06em;
  text-align: center;
  @include tab {
    font-size: 8rem;
    letter-spacing: .08em;
  }
  @include pc {
    font-size: 10rem;
    letter-spacing: .1em;
  }
}
</style>