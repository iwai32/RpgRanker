<template>
  <div class="battle-monster-con"
    :style="`background: url('../../../images/${battleMonsterData.field}.jpg') no-repeat center center/cover;`"
  >
    <battle-monster></battle-monster>
  </div>
</template>

<script>
import BattleMonster from '../../atoms/battle-area/BattleMonster.vue'
export default {
  components: {
    BattleMonster
  },
  computed: {
    battleMonsterData() {
      return this.$store.getters['battleArea/battleMonsterData']
    }
  }
}
</script>

<style lang="scss" scoped>

.battle-monster-con {
  border: 2px solid #E0CB8E;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #222;
  height: 200px;
  margin: 0 auto 30px;
  position: relative;
}

</style>