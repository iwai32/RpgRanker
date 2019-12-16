<template>
  <div class="battle-character">
    <battle-character-state></battle-character-state>

    <battle-character-skills></battle-character-skills>

  </div>
</template>

<script>
import BattleCharacterState from '../../molecules/battle-area/BattleCharacterState.vue'
import BattleCharacterSkills from '../../molecules/battle-area/BattleCharacterSkills.vue'
export default {
  components: {
    BattleCharacterState,
    BattleCharacterSkills
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.battle-character {
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid $contents-color;
  border-radius: 10px;
  box-shadow: 0 0 0 1px $text-color,
  0 0 0 1px $text-color inset;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  @include tab {
    padding: 16px;
  }
}
</style>