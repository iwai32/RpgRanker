<template>
  <li class="top-nav__link">
    <router-link class="link" :to="link">
    {{ name }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
     name: String,
    link: String
  }
}
</script>

<style lang="scss" scoped>
.top-nav__link{
  background: #a66e3e;
  border: 2px solid #666666;
  border-radius: 4px;
  font-size: 2.4rem;
  margin-bottom: 10px;
  text-align: center;
  .link {
    color: #eeeeee;
    display: block;
    letter-spacing: .05em;
    padding: 5px 10px;
  }
}

.top-nav__link:last-child {
  margin-bottom: 0;
}
</style>