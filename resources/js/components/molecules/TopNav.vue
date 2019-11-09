<template>
  <ul class="top-nav">
    <top-nav-link v-for="topLink in topNavLists"
      v-bind:key="topLink.id"
      v-bind:name="topLink.name"
      v-bind:link="topLink.link"></top-nav-link>
    <!-- /game/character-selection -->
  </ul>
</template>

<script>
import TopNavLink from '../atoms/TopNavLink.vue'
export default {
  name: 'TopNav',
  components: {
    TopNavLink
  },
  data() {
    return {
      topNavLists: [
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