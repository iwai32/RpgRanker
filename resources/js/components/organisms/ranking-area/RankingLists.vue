<template>
  <ul class="ranking-lists">
    <ranking-list
      v-for="(data, index) in rankingData"
      :key="index + 1"
      :rankNum="index + 1"
      :pageNum="pageNum"
      :characterPass="data.character.pass"
      :characterName="data.character.name"
      :userName="data.user.name"
      :monsterCount ="data.monster_count"
      :turn ="data.total_turn"
      :damage ="data.total_damage"
    ></ranking-list>
    <li
      v-if="!rankingData"
    >ランキングデータは現在登録されていません。
    </li>
  </ul>
</template>

<script>
import RankingList from '../../molecules/ranking-area/RankingList.vue'
export default {
  components: {
    RankingList
  },
  props: {
    pageNum: Number
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
  margin-bottom: 20px;
  @include tab {
    margin-bottom: 40px;
  }
}
</style>