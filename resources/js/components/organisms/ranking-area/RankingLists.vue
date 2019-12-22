<template>
  <ul class="ranking-lists">
    <ranking-list
      v-for="(data, index) in rankingData"
      :key="index + 1"
      :rankNumber="index + 1"
      :characterPass="data.character.pass"
      :characterName="data.character.name"
      :userName="data.user.name"
      :monsterCount ="data.monster_count"
      :turn ="data.total_turn"
      :damage ="data.total_damage"
    ></ranking-list>
  </ul>
</template>

<script>
import RankingList from '../../molecules/ranking-area/RankingList.vue'
export default {
  components: {
    RankingList
  },
  computed: {
    rankingData() {
      return this.$store.state.ranking.rankingData
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.ranking-lists {
  height: 400px;
  overflow-y: scroll;
  margin-bottom: 20px;
}
</style>