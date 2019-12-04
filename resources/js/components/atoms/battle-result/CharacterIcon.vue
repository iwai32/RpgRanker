<template>
  <p class="character-icon">
    <img
      :src="'../../../../images/' + characterPass + '.png'"
      :alt="characterName"
    >
  </p>
</template>

<script>
export default {
  props: {
    characterPass: String,
    characterName: String
  }
}
</script>

<style lang="scss" scoped>
.character-icon {
  border-radius: 50%;
  box-shadow: 0 0 2px 2px #b79532;
  overflow: hidden;
  margin-bottom: 10px;
}
</style>