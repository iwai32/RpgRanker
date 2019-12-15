<template>
  <footer class="footer">
    <p class="copy-right"><small>&copy; KouheiIwai</small></p>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.footer {
  background: linear-gradient(#7b5535, lighten(#7b5535, 20%));
  padding: 10px;
  text-align: center;
  .copy-right {
    color: $text-color;
    font-size: 1.2rem;
    letter-spacing: .1em;
  }
  @include tab {
    padding: 15px;
    .copy-right {
      font-size: 1.4rem;
    }
  }
}
</style>