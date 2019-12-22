<template>
  <div class="pagination-wrapp">

    <p class="pagination-button prev"
      v-if="! isFirstPage"
    >
      <router-link
        class="pagination-button_link"
        :to="`/game/ranking/?page=${currentPage - 1}`"
        >prev
      </router-link>
    </p>

    <p class="pagination-button next"
      v-if="! isLastPage"
    >
      <router-link
        class="pagination-button_link"
        :to="`/game/ranking/?page=${currentPage + 1}`"
      >next
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$store.state.ranking.currentPage
    },
    lastPage() {
      return this.$store.state.ranking.lastPage
    },
    isFirstPage () {
      return this.currentPage === 1
    },
    isLastPage () {
      return this.currentPage === this.lastPage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../sass/app.scss';
.pagination-wrapp {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 0;
  width: 50%;
  .pagination-button {
    border-radius: 4px;
    font-size: 1.2rem;
    letter-spacing: 0.08em;
    text-align: center;
    width: 80px;
    &_link {
      color: $white;
      display: block;
      padding: 2px;
    }
    &.prev {
      background: $accent-color;
    }
    &.next {
      background: $main-color;
    }
  }
}
</style>