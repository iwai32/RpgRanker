<template>
  <li class="total-damage">Damage
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
@import "../../../../sass/app.scss";
.total-damage {
  color: $text-color;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 1.5;
  @include tab {
    font-size: 2.4rem;
  }
  @include pc {
    align-items: flex-end;
    font-size: 2.2rem;
    line-height: normal;
  }
}
</style>