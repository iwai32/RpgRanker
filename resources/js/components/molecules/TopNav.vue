<template>
  <ul class="top-nav">
    <top-nav-list v-for="listData in topNavListItems"
      :key="listData.id"
      :name="listData.name"
      :link="listData.link"></top-nav-list>
  </ul>
</template>

<script>
import TopNavList from '../atoms/TopNavList.vue'
export default {
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