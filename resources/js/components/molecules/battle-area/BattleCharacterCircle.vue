<template>
  <div class="character-circle-icon">
    <sp-skill-guage></sp-skill-guage>

    <battle-character-icon></battle-character-icon>

    <sp-skill></sp-skill>

  </div>
</template>

<script>
import SpSkillGuage from '../../atoms/battle-area/SpSkillGuage.vue'
import BattleCharacterIcon from '../../atoms/battle-area/BattleCharacterIcon.vue'
import SpSkill from '../../atoms/battle-area/SpSkill.vue'

export default {
  components: {
    SpSkillGuage,
    BattleCharacterIcon,
    SpSkill
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-circle-icon {
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  @include pc {
    &:before {
      padding: 0;
    }
  }
}
</style>