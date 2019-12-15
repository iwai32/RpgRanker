<template>
  <li class="top-nav__link">
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
.top-nav__link{
  background: $main-color;
  border: 2px solid $border-color;
  border-radius: 4px;
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
  .anchor {
    color: $white;
    display: block;
    letter-spacing: .05em;
    padding: 5px 10px;
  }
  @include tab {
    font-size: 2.4rem;
    margin-bottom: 15px;
    .anchor {
      padding: 10px;
      letter-spacing: .1em;
    }
  }
    @include pc {
    font-size: 1.8rem;
    margin-bottom: 14px;
    .anchor {
      padding: 5px;
      letter-spacing: .44em;
      &:hover {
        font-size: 2rem;
      }
    }
  }
}

.top-nav__link:last-child {
  margin-bottom: 0;
}
</style>