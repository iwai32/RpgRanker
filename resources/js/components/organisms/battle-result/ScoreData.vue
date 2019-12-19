<template>
  <div class="score">
    <score-title></score-title>

    <user-data
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
@import "../../../../sass/app.scss";
.score {
  box-shadow: 0 0 1px 1px $box-color;
  border-radius: 4px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-bottom: 30px;
  padding: 10px;
  @include tab {
    margin-bottom: 45px;
    padding: 20px;
  }
  @include pc {
    margin: 0;
    padding: 20px 40px;
    width: 580px;
  }
}
</style>