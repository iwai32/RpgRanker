<template>
  <h2 class="section-title">
    <slot></slot>
  </h2>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.section-title {
  background: #5C3D22;
  border-radius: 5px;
  color: #eeeeee;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 30px;
  padding: 5px;
  text-align: center;
  letter-spacing: .25em;
  @include tab {
    font-size: 2.4rem;
    padding: 10px;
    margin-bottom: 45px;
  }
  @include pc {
    font-size: 2rem;
    margin-bottom: 45px;
    width: 100%;
  }
}
</style>