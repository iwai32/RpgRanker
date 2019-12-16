<template>
  <ul class="next-nav">
    <next-nav-list v-for="listData in nextNavListItems"
      :key="listData.id"
      :name="listData.name"
      :link="listData.link"
    >
    </next-nav-list>
  </ul>
</template>

<script>
import NextNavList from '../../atoms/battle-result/NextNavList.vue'
export default {
  components: {
    NextNavList
  },
  computed: {
    resultData() {
      return this.$route.query
    },
    nextNavListItems() {
      return [
        { id: 1, name: 'Retry', link: '/game/battle/' + this.resultData.characterIndex},
        { id: 2, name: 'CharacterSelect', link: '/game/character-selection' },
        { id: 3, name: 'Ranking', link: '/game/ranking' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.next-nav {
  width: 200px;
  margin: 0 auto;
  @include tab {
    width: 480px;
  }
  @include pc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 220px;
  }
}
</style>