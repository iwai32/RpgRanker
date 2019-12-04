<template>
  <li class="list turn">Turn
    <span>
      {{ totalTurn }}
    </span>
  </li>
</template>

<script>
export default {
  props: {
    totalTurn: String
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 1.5;
}
</style>