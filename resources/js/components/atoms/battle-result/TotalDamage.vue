<template>
  <li class="list damage">Damage
    <span>
      {{ totalDamage }}
    </span>
  </li>
</template>

<script>
export default {
  props: {
    totalDamage: String
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