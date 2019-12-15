<template>
  <li class="g-nav__list">
    <router-link :to="link">
      {{ name }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    link: String
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.g-nav__list {
  font-size: 1.8rem;
  letter-spacing: .08em;
  padding: 10px;
  a {
    color: $white;
  }
  @include tab {
    font-size: 2.2rem;
    letter-spacing: .1em;
  }
  @include pc {
    font-size: 2rem;
    text-align: center;
    padding: 0;
    width: 25%;
    a {
      display: block;
      padding: 10px;
      &:hover {
        border: 1px solid $border-color;
        font-size: 2.2rem;
        padding: 8px;
      }
    }
  }
}
</style>