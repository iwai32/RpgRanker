<template>
  <svg class="sp-skill-guage" viewBox="0 0 63.6619772368 63.6619772368">
    <circle class="sp-skill-guage__circle" cx="31.8309886184" cy="31.8309886184" r="15.9154943092" fill="rgba(0,0,0,0)"
      stroke="#35c77c" stroke-width="31.8309886184"
      stroke-dashoffset="25"
      :stroke-dasharray="spSkillGaugeCircle + ',' + remainingSpSkillGaugeCircle">
    </circle>
  </svg>
</template>

<script>
export default {
  computed: {
    spSkillGaugeCircle() {
      return this.$store.state.battleArea.spSkillGaugeCircle
    },
    maxSpSkillGaugeCircle() {
      return this.$store.state.battleArea.maxSpSkillGaugeCircle
    },
    remainingSpSkillGaugeCircle() {
      return this.maxSpSkillGaugeCircle - this.spSkillGaugeCircle
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.sp-skill-guage {
  border-radius: 50%;
  border: 1px solid $contents-color;
  box-shadow: 0 0 0 1px $text-color,
   0 0 0 1px $text-color inset;
  position: absolute;
  top: -10px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 0;
  width: calc(100% - 10px);
  &__circle {
    transition: .4s;
  }
  @include tab {
    top: -20px;
    width: 120px;
  }
   @include pc {
    top: 10px;
    left: 10px;
    margin: 0;
    width: 100px;
  }
}
</style>