<template>
  <li class="link">
    <router-link class="anchor" :to="link">
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
.link {
  background: #a66e3e;
  border: 2px solid #666666;
  border-radius: 4px;
  font-size: 1.8rem;
  margin-bottom: 15px;
  text-align: center;
  &:last-child {
    margin-bottom: 0;
  }
  .anchor {
    color: #eeeeee;
    display: block;
    letter-spacing: 0.1em;
    padding: 5px;
  }
}
</style>