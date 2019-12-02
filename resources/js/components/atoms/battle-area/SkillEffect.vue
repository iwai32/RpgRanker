<template>
  <p class="skill-effect">
    <img 
      :src="'../../../../images/' + skillEffectAttribute + '.gif'" 
      alt="スキルのエフェクト"
    >
  </p>
</template>

<script>
export default {
  computed: {
    skillEffectAttribute() {
      return this.$store.state.battleArea.skillEffectAttribute
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-effect {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  position: absolute;
  top: -200px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>