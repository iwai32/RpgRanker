<template>
  <nav class="g-nav">
    <ul>
      <global-nav-list v-for="listData in globalNavListItems"
      :key="listData.id"
      :name="listData.name"
      :link="listData.link">
      </global-nav-list>

      <global-nav-logout
        v-if="isLogin"
      ></global-nav-logout>

      <global-nav-login-register
        v-else
      ></global-nav-login-register>
    </ul>
  </nav>
</template>

<script>
import GlobalNavList from '../../atoms/common/GlobalNavList.vue'
import GlobalNavLogout from '../../atoms/common/GlobalNavLogout.vue'
import GlobalNavLoginRegister from '../../atoms/common/GlobalNavLoginRegister.vue'
import { async } from 'q'
export default {
  components: {
    GlobalNavList,
    GlobalNavLogout,
    GlobalNavLoginRegister
  },
  data() {
    return {
      globalNavListItems: [
        { id: 1, name: 'Top', link: '/'},
        { id: 2, name: 'Bbs', link: '/game/bbs' },
        { id: 3, name: 'Ranking', link: '/game/ranking' }
      ]
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters['auth/check']
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