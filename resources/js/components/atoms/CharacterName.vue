<template>
  <h3 class="character-name">
    <slot></slot>
  </h3>
</template>

<style lang="scss" scoped>
.character-name {
  background: lighten(#5C3D22, 10%);
  border-radius: 2px;
  color: #eeeeee;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  padding: 5px;
}
</style>