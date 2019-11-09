<template>
  <div class="wrapper">
    <router-view name="header" />
    <main>
      <router-view name="contents" />
    </main>
    <router-view name="footer" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>