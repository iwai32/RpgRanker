<template>
  <button type="submit" class="submit-btn">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.submit-btn {
  background: $main-color;
  border-radius: 4px;
  color: $white;
  display: block;
  font-size: 1.4rem;
  text-align: center;
  letter-spacing: .08em;
  padding: 5px;
  position: absolute;
  right: 0;
  left: 0;
  width: 40%;
  margin: auto;
  @include tab {
    font-size: 2rem;
    padding: 8px;
  }
}
</style>