<template>
  <ul class="ranking-lists">
    <ranking-list
      :rankNumber="'1'"
    ></ranking-list>
    <ranking-list
      :rankNumber="'2'"
    ></ranking-list>
    <ranking-list
      :rankNumber="'3'"
    ></ranking-list>
    <ranking-list
      :rankNumber="'4'"
    ></ranking-list>
  </ul>
</template>

<script>
import RankingList from '../../molecules/ranking-area/RankingList.vue'
export default {
  components: {
    RankingList
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.ranking-lists {
  height: 400px;
  overflow-y: scroll;
}
</style>