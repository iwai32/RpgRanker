<template>
  <p class="notice">近々リリース予定です。しばらくお待ちください。</p>
</template>

<style lang="scss" scoped>
@import '../../../../sass/app.scss';
.notice {
  color: $text-color;
  font-size: 1.2rem;
  @include tab {
    font-size: 1.6rem;
  }
}
</style>