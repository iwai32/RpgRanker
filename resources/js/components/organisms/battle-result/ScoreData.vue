<template>
  <div class="score">
    <score-title></score-title>

    <user-data
      :characterIndex="resultData.characterIndex"
      :userName="resultData.userName"
    ></user-data>

    <total-data
      :resultData="resultData"
    ></total-data>
  </div>
</template>

<script>
import ScoreTitle from '../../atoms/battle-result/ScoreTitle.vue'
import UserData from '../../molecules/battle-result/UserData.vue'
import TotalData from '../../molecules/battle-result/TotalData.vue'
export default {
  components: {
    ScoreTitle,
    UserData,
    TotalData
  },
  computed: {
    resultData() {
      return this.$route.query
    }
  }
}
</script>

<style lang="scss" scoped>
.score {
  box-shadow: 0 0 1px 1px #b79532;
  border-radius: 1px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-bottom: 30px;
  padding: 10px;
}
</style>