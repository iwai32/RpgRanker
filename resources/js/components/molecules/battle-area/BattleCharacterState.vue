<template>
  <div class="battle-character-state">

    <battle-character-circle></battle-character-circle>

    <battle-character-life></battle-character-life>
  </div>
</template>

<script>
import BattleCharacterCircle from '../../molecules/battle-area/BattleCharacterCircle.vue'
import BattleCharacterLife from '../../atoms/battle-area/BattleCharacterLife.vue'
export default {
  components: {
    BattleCharacterCircle,
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
  max-width: 144px;
  width: 30%;
  @include tab {
    max-width: initial;
    width: 150px;
  }
  @include pc {
    display: flex;
    padding: 10px;
    width: 230px;
    &:before {
      padding-top: 0;
    }
  }
}
</style>