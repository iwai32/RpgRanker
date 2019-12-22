<template>
  <section class="ranking-area">
    <section-title>RANKING</section-title>

    <ranking-lists></ranking-lists>
    
    <ranking-pagination></ranking-pagination>
  </section>
</template>

<script>
import SectionTitle from '../../atoms/common/SectionTitle.vue'
import RankingLists from '../../organisms/ranking-area/RankingLists.vue'
import RankingPagination from '../../molecules/ranking-area/RankingPagination.vue'
export default {
  components: {
    SectionTitle,
    RankingLists,
    RankingPagination
  },
  created() {
    this.getRankingData()
  },
  watch: {
    pageNum() {
      this.getRankingData()
    }
  },
  computed: {
    pageNum() {
      return this.$route.query.page
    }
  },
  methods: {
    getRankingData() {
      this.$store.dispatch('ranking/getRankingData', this.pageNum)
    }
  }
}
</script>