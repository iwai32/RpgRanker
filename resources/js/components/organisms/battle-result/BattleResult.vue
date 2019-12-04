<template>
  <section class="battle-result">
    <section-title>RESULT</section-title>

    <result-message>{{ resultMessage }}</result-message>

    <score-data></score-data>

    <next-nav></next-nav>
  </section>
</template>

<script>
import SectionTitle from '../../atoms/common/SectionTitle.vue'
import ResultMessage from '../../atoms/battle-result/ResultMessage.vue'
import ScoreData from '../../organisms/battle-result/ScoreData.vue'
import NextNav from '../../molecules/battle-result/NextNav.vue'
export default {
  components: {
    SectionTitle,
    ResultMessage,
    ScoreData,
    NextNav
  },
  computed: {
    resultData() {
      return this.$route.query
    },
    resultMessage() {
      if (this.resultData.monsterCount === '5') {
        return 'おめでとう！サタンをやっつけた！'
      } else {
        return 'オレたちの戦いはこれからだ！'
      }
    }
  }
}
</script>