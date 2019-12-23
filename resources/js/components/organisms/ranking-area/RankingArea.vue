<template>
  <section class="ranking-area">
    <section-title>RANKING</section-title>

    <ranking-lists
      :pageNum="convertPageQueryToNumber"
    ></ranking-lists>
    
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
    // if (this.rankingData.length > 0) {
      this.getRankingData()
    // }
  },
  watch: {
    pageQuery() {
      this.getRankingData()
    }
  },
  computed: {
    pageQuery() {
      return this.$route.query.page
    },
    convertPageQueryToNumber() {
      return Number(this.pageQuery)
    },
    rankingData() {
      return this.$store.state.ranking.rankingData
    }
  },
  methods: {
    getRankingData() {
      this.$store.dispatch('ranking/getRankingData', this.pageQuery)
    }
  }
}
</script>