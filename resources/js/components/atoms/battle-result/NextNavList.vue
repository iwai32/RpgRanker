<template>
  <li class="link">
    <router-link class="anchor" :to="link">
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
.link {
  background: $main-color;
  border: 2px solid $border-color;
  border-radius: 4px;
  font-size: 1.8rem;
  margin-bottom: 15px;
  text-align: center;
  &:last-child {
    margin-bottom: 0;
  }
  .anchor {
    color: $white;
    display: block;
    letter-spacing: 0.1em;
    padding: 5px;
  }
  @include tab {
    font-size: 1.8rem;
    .anchor {
      padding: 8px;
    }
  }
  @include tab {
    .anchor {
      padding: 12px;
    }
  }
}
</style>