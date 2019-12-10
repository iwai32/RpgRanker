<template>
  <nav class="g-nav">
    <ul>
      <global-nav-list v-for="listData in globalNavListItems"
      :key="listData.id"
      :name="listData.name"
      :link="listData.link">
      </global-nav-list>

      <li class="g-nav__list"
        v-if="isLogin"
        @click="logout"
      >
        Logout
      </li>
      <li class="g-nav__list"
        v-else
      >
        <router-link :to="'/game/login-register'">
          Login/Register
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import GlobalNavList from '../../atoms/common/GlobalNavList.vue'
import { async } from 'q'
export default {
  components: {
    GlobalNavList
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
    },
    apiStatus() {
      return this.$store.state.auth.apiStatus
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')

      if (this.apiStatus) {
        this.$router.push('/game/login-register')
      }
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