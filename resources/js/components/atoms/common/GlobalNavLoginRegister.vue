<template>
  <li class="g-nav__list">
    <router-link 
      :to="'/game/login-register'"
    >Login/Register
    </router-link>
  </li>
</template>

<style lang="scss" scoped>
.g-nav__list {
  font-size: 1.8rem;
  letter-spacing: .05em;
  a {
    color: #dddddd;
  }
}
</style>