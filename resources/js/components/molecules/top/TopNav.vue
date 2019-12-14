<template>
  <ul class="top-nav">
    <top-nav-list v-for="listData in topNavListItems"
      :key="listData.id"
      :name="listData.name"
      :link="listData.link"></top-nav-list>
  </ul>
</template>

<script>
import TopNavList from '../../atoms/top/TopNavList.vue'
export default {
  components: {
    TopNavList
  },
  data() {
    return {
      topNavListItems: [
        { id: 1, name: 'START', link: '/game/character-selection' },
        { id: 2, name: 'BBS', link: '/game/bbs' },
        { id: 3, name: 'RANKING', link: '/game/ranking' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.top-nav {
  margin: 0 auto;
  width: 220px;
  @include tab {
    width: 440px;
  }
  @include pc {
    width: 660px;
  }
}
</style>