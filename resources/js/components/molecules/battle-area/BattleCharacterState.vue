<template>
  <div class="battle-character-state">

    <sp-skill-guage></sp-skill-guage>

    <battle-character-icon></battle-character-icon>

    <sp-skill></sp-skill>

    <battle-character-life></battle-character-life>
  </div>
</template>

<script>
import SpSkillGuage from '../../atoms/battle-area/SpSkillGuage.vue'
import BattleCharacterIcon from '../../atoms/battle-area/BattleCharacterIcon.vue'
import SpSkill from '../../atoms/battle-area/SpSkill.vue'
import BattleCharacterLife from '../../atoms/battle-area/BattleCharacterLife.vue'
export default {
  components: {
    SpSkillGuage,
    BattleCharacterIcon,
    SpSkill,
    BattleCharacterLife
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.battle-character-state {
  background: linear-gradient($main-color 40%, $accent-color);
  border: 1px solid $contents-color;
  box-shadow: 0 0 0 1px $text-color,
   0 0 0 1px $text-color inset;
  border-radius: 5px 5px 5px 20px;
  padding: 5px;
  position: relative;
  max-width: 144px;
  width: 30%;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  @include tab {
    max-width: initial;
    width: 150px;
  }
  @include pc {
    display: flex;
    padding: 20px;
    width: 280px;
    &:before {
      padding-top: 0;
    }
  }
}
</style>