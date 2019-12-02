<template>
  <div class="battle-character">
    <battle-character-state></battle-character-state>

    <normal-skills></normal-skills>

    <skill-effect-display></skill-effect-display>
    
  </div>
</template>

<script>
import BattleCharacterState from '../../molecules/battle-area/BattleCharacterState.vue'
import NormalSkills from '../../molecules/battle-area/NormalSkills.vue'
import SkillEffectDisplay from '../../molecules/battle-area/SkillEffectDisplay.vue'
export default {
  components: {
    BattleCharacterState,
    NormalSkills,
    SkillEffectDisplay
  }
}
</script>

<style lang="scss" scoped>
.battle-character {
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid #dddccc;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #222,
  0 0 0 1px #222 inset;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
}
</style>