<template>
  <div class="common-container">
    <router-view name="section" />
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.common-container {
  background: $contents-color;
  border-radius: 2px;
  padding: 20px;
  user-select: none;
  margin-bottom: 30px;
  @include tab {
    padding: 30px 20px;
  }
}
</style>