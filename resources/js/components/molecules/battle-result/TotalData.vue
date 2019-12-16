<template>
  <ul class="total-data">
    <monster-count
      :monsterCount="resultData.monsterCount"
    ></monster-count>

    <total-turn
     :totalTurn="resultData.totalTurn"
    ></total-turn>

    <total-damage
      :totalDamage="resultData.totalDamage"
    ></total-damage>
  </ul>
</template>

<script>
import MonsterCount from '../../atoms/battle-result/MonsterCount.vue'
import TotalTurn from '../../atoms/battle-result/TotalTurn.vue'
import TotalDamage from '../../atoms/battle-result/TotalDamage.vue'

export default {
  props: {
    resultData: Object
  },
  components :{
    MonsterCount,
    TotalTurn,
    TotalDamage
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
  .total-data {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 60%;
    @include tab {
      width: 340px;
    }
  }
</style>