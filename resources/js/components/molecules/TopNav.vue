<template>
  <ul class="top-nav">
    <top-nav-list v-for="listData in topNavListItems"
      v-bind:key="listData.id"
      v-bind:name="listData.name"
      v-bind:link="listData.link"></top-nav-list>
    <!-- /game/character-selection -->
  </ul>
</template>

<script>
import TopNavList from '../atoms/TopNavList.vue'
export default {
  name: 'TopNav',
  components: {
    TopNavList
  },
  data() {
    return {
      topNavListItems: [
        { id: 1, name: 'START', link: '/game/' },
        { id: 2, name: 'BBS', link: '/game/bbs' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  margin: 0 auto;
  width: 60%;
}
</style>