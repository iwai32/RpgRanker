<template>
  <h3 class="title">SCORE</h3>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.title {
  color: $base-color;
  font-size: 2.8rem;
  text-align: center;
  letter-spacing: .05em;
  margin-bottom: 10px;
  -webkit-text-stroke: 1px $box-color;
  text-shadow: 1px 2px 2px $box-color;
  width: 100%;
  @include tab {
    font-size: 4rem;
    margin-bottom: 20px;
  }
  @include pc {
    font-size: 3.2rem;
    margin-bottom: 10px;
  }
}
</style>