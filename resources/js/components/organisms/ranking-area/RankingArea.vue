<template>
  <section class="ranking-area">
    <section-title>RANKING</section-title>

    <ranking-lists></ranking-lists>
  </section>
</template>

<script>
import SectionTitle from '../../atoms/common/SectionTitle.vue'
import RankingLists from '../../organisms/ranking-area/RankingLists.vue'
export default {
  components: {
    SectionTitle,
    RankingLists
  },
  created() {
    this.getRankingData()
  },
  methods: {
    getRankingData() {
      this.$store.dispatch('ranking/getRankingData')
    }
  }
}
</script>