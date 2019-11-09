<template>
  <nav class="g-nav">
    <ul>
      <global-nav-list v-for="listData in globalNavListItems"
      :key="listData.id"
      :name="listData.name"
      :link="listData.link">
      </global-nav-list>
    </ul>
  </nav>
</template>

<script>
import GlobalNavList from '../atoms/GlobalNavList.vue'
export default {
  name: 'GlobalNav',
  components: {
    GlobalNavList
  },
  data() {
    return {
      globalNavListItems: [
        { id: 1, name: 'Top', link: '/'},
        { id: 2, name: 'Bbs', link: '/game/bbs' },
        { id: 3, name: 'Ranking', link: '/game/ranking' },
        { id: 4, name: 'Login/Register', link: '/game/login' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.g-nav ul{
  display: flex;
  justify-content: space-between;
}
</style>