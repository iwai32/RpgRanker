<template>
  <li class="g-nav__list">
    <router-link :to="link">
      {{ name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'globalNavList',
  props: {
    name: String,
    link: String
  }
}
</script>

<style lang="scss" scoped>
.g-nav__list {
  font-size: 1.8rem;
  letter-spacing: .05em;
  a {
    color: #dddddd;
  }
}
</style>