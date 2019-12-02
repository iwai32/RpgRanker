<template>
  <div class="skill-effect-display"
      v-if="isSkillEffect"
  >
  <skill-effect></skill-effect>
  </div>
</template>

<script>
import SkillEffect from '../../atoms/battle-area/SkillEffect.vue'
export default {
  components: {
    SkillEffect
  },
  computed: {
    isSkillEffect() {
      return this.$store.state.battleArea.isSkillEffect
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-effect-display {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
</style>