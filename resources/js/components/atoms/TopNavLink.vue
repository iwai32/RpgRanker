<template>
  <li class="top-nav__link">
    <a class="link" href="/character-selection">
      <slot></slot>
    </a>
  </li>
</template>

<script>
</script>

<style lang="scss" scoped>
.top-nav__link{
  background: #EEEEEE;
  border: 2px solid #666666;
  border-radius: 4px;
  font-size: 2.4rem;
  margin-bottom: 24px;
  text-align: center;
  .link {
    display: block;
    padding: 10px;
  }
}

.top-nav__link + .top-nav__link {
  margin-bottom: 0;
}
</style>